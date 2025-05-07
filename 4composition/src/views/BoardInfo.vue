<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boards.boardInfo.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boards.boardInfo.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boards.boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boards.boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ boards.boardInfo.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="">
                수정
              </button>
              <button class="btn btn-xs btn-info" @click="">
                목록
              </button>
              <button class="btn btn-xs btn-info" @click="">
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script setup>
import axios from 'axios';
import {ref, defineProps} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const router = useRouter(); // this.$router
const route = useRoute();
const boards = ref([])

const searchNo =  ref()
const boardInfo = ref()
boards.searchNo = route.query.id;


const fetchInfo = async () => {
  let board = await axios.get(`/api/board/${searchNo}`);
  boardInfo = board.data;
}

    // goToUpdateForm(id){
    //   this.$router.push({path:"/boardForm", query:{id:id}});
    // }
    // goToListForm(){
    //   this.$router.push({path:"/boardList"});
    // }
    // async goToDelete(id){
    //   const url = `/api/board/${id}`;
    //   const result = await axios.delete(url);
    //   alert("정상적으로 삭제되었습니다.");
    //   this.$router.push({path:"/boardList"});
    // }


</script>
