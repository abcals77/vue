<template>
  <div class="border">
    <h3>emit 테스트</h3>
    <button @click="incrementChild"><slot></slot></button> 
    <button @click="incrementChild">handler {{props.count}}</button> 
    <button @click="$emit('incrementevent', 1)">emit 인수 {{props.count}}</button> 
    <button @click="$emit('incrementevent')">emit {{props.count}}</button> 
    <button @click="props.count++">직접변경안됨 {{props.count}}</button>  
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps([ "count" ]);
const emit = defineEmits(["incrementevent"])
  
const  incrementChild = () => {
  emit('incrementevent', props.count+1)
} 
  

</script>


