<template>
  useComponentrefs이용
  <input ref="my-input" value="hello" />
  <div>
    현재페이지는 {{ route.fullPath }}<br>
    <a href="#" @click="router.push('/')">home</a><br>
    <a href="#" @click="goPage">about</a> 
  </div>
  <hr/>
  {{ count }}
  <button @click="clickHandler">클릭</button>
  <ButtonCounter :counter="count.value" @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
</template>
<script setup>
import ButtonCounter from '@/components/ButtonCounter.vue';
import { onMounted, reactive, useTemplateRef } from 'vue';
import { useRouter, useRoute} from 'vue-router';
const route = useRoute();
const router = useRouter();

const count = reactive({ value : 0})
const clickHandler = (initValue) => {
  // number 0 -> false
  if(initValue > 0){
    count.value = initValue;
  } else {
    count.value++;
  }
}
const goPage = () => { 
  router.push("/"); 
  router.push({ name: "home" }); 
}

const input = useTemplateRef('my-input')

onMounted(()=>{
  console.log("count = ",count.value)
  // input.value ==> <input>태그
  console.log("input = ",input.value.value)
  input.value.select();
});
</script>