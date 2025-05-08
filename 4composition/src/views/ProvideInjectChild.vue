<template>
<div></div>
</template>
<script setup>
import { inject, onMounted } from 'vue';

const itemLength = inject("itemLength");

onMounted(() => {
  console.log(itemLength);
})

</script>