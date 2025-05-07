<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, i) in boards" :key="board.id" @click="goToDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ board.comment }}</td>
        </tr>
        <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="">
                등록
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
  {{ route.fullPath }}
</template>
<script setup>
import axios from 'axios';
import {ref, defineProps} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const router = useRouter(); // this.$router
const route = useRoute();
const boards = ref([])

const fetchList = async () => {
  let result = await axios.get(`/api/board`);
  boards.value = result.data;
};

const goToDetail = (id) => {
  router.push({path:"/boardInfo",query:{id:id}})
};

fetchList();

</script>

<style scoped>
table * {
  text-align: center;
}
</style>
