<template>
    <li>
      <input type="checkbox" v-vind="done">
      <span :class="{ done: paDone }">{{ text }}</span>
      <button @click="$emit('remove')">X</button>
    </li>

</template>
<script>
export default{
  props:["text","done"],
  data() {
  return {
    paDone: this.done
  }
}
}
</script>