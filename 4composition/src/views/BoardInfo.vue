<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.value.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boardInfo.value.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.value.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.value.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ boardInfo.value.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.value.id)">
                수정
              </button>
              <button class="btn btn-xs btn-info" @click="goToListForm">
                목록
              </button>
              <button class="btn btn-xs btn-info" @click="goToDelete(boardInfo.value.id)">
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- 댓글 -->
<div>
      <CommentComp :bid="boardInfo.value.id" @commentAdded="getCommentList"/>
    </div>
    <div class="row">
      <div v-if="boardCommentList.length === 0">
        <p>댓글이 없습니다.</p>
      </div>
      <div v-else>
        <div v-for="(comment, idx) in boardCommentList" :key="idx" style="display: flex; align-items: center;">
          <strong style="margin-right: 8px;">{{ comment.writer }}</strong>: {{ comment.content }}
          <button class="btn btn-xs btn-danger" @click="deleteComment(comment.id)" style="margin-left: 10px;">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const router = useRouter(); // this.$router
const route = useRoute();

const searchNo =  ref(route.query.id)
const boardInfo = ref({
  id: null,
  title: '',
  content: '',
  created_date: '',
  writer: ''
});
const boardCommentList = ref([])



const fetchInfo = async () => {
  try {
    const res = await axios.get(`/api/board/${searchNo.value}`);
    if (res.data && res.data.length > 0) {
      boardInfo.value = res.data[0];
    } else {
      alert("해당 게시글이 존재하지 않습니다.");
      router.push("/boardList"); // 게시글 없음 → 목록으로 이동
    }
  } catch (err) {
    console.error("게시글 조회 실패:", err);
    alert("게시글을 불러오는 데 실패했습니다.");
  }
};
const getCommentList = async () => {
  const res = await axios.get(`/api/comment/${searchNo.value}`)
  boardCommentList.value = res.data;
};
const goToListForm = () => {
  router.push({path:"/boardForm"})
};
const goToDelete = async (id) => {
  if (confirm("이 게시글을 삭제하시겠습니까?")) {
    try {
      await axios.delete(`/api/board/${id}`);
      alert("정상적으로 삭제되었습니다.");
      router.push({ path: '/boardList' });
    } catch (err) {
      console.error('게시글 삭제 실패:', err);
      alert("삭제에 실패했습니다.");
    }
  }
}
const goToUpdateForm = (id) => {
  router.push({ path: "/boardForm", query: { id } }); // 수정은 이렇게
};
const deleteComment = async (id) => {
  if (confirm("이 댓글을 삭제하시겠습니까?")) {
    try {
      await axios.delete(`/api/comment/${id}`);
      alert("댓글이 삭제되었습니다.");
      getCommentList(); // 새로고침
    } catch (err) {
      console.error("댓글 삭제 실패:", err);
      alert("댓글 삭제에 실패했습니다.");
    }
  }
};

onMounted(() => {
  fetchInfo();
  getCommentList();
});
</script>
