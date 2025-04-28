<template>
  <div class="row">
    <div class="col">
      <emp-list @select="selectEmp" ref="listRef"/>
    </div>
    <div class="col">
      <emp-form :selEmp="selectedEmp" @saved="savedHandler"/>
    </div>
  </div>
</template>
<script>
import EmpForm from '@/components/EmpForm.vue';
import EmpList from '@/components/EmpList.vue';
export default{
  components : {EmpForm, EmpList},
  data(){
    return{
      selectedEmp : {}
    }
  },
  methods:{
    selectEmp(emp){
      this.selectedEmp = emp;
    },
    savedHandler(){
      this.$refs.listRef.fetchList();
    }
  }
}
</script>