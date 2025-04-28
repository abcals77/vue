<script>
import axios from 'axios';
export default {
  data() {
    return { emps : []}
  },
  mounted(){
    axios.get("/empdata.json")
    .then(res => this.emps = res.data);
  }
}
</script>
<template>
  <table>
    <tr>
      <th>이름</th>
      <th>직책</th>
    </tr>
    <tr v-for="emp in emps">
      <td>{{ emp.last_name }}</td>
      <td>{{ emp.email }}</td>

    </tr>
  </table>
</template>