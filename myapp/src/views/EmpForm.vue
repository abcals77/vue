<script>
  export default  {
      data(){
        return{
          depts : [
            {dno:10,dname:"개발"},
            {dno:20,dname:"인사"},
            {dno:30,dname:"총무"}
          ],
          emp: {
            employee_id : "100",
            first_name : "길동",
            last_name : "홍",
            email : "aaa@aaa.com",
            phone_number : "010-1234-1234",
            hire_date : "1990-01-01",
            job_id : "",
            salary : "",
            commission_pct : "",
            manager_id : "",
            department_id : "20"
          }
        }
      },
      methods : {
        empUpdate(){
          console.log(JSON.stringify(this.emp));
        }
    }
    }
</script>

<template>
    사번 : <input v-model="emp.employee_id"><br>
    fname : <input v-model="emp.first_name"><br>
    jobId : <input type="radio" v-model="emp.job_id" value="it">IT
            <input type="radio" v-model="emp.job_id" value="sales">SALES<br>
    부서 :  <select v-model="emp.department_id">
            <option disabled value="">부서 선택</option>
            <option v-for="dept in depts" :value="dept.dno">{{dept.dname}}</option>
          </select><br>
    <button @click="empUpdate()">수정</button>
</template>

<style></style>