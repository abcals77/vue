<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      좋아요 {{ likes }}
      <div v-if="isPublished">출판</div>
      <div v-else>편집중</div>
      <div v-for="comment in commentsIds">{{ comment }}</div>
    </div>
  </div>
</template>
<script>
export default{
  // props:["title","likes","isPublished","commentsIds"], // 속성 전달 view 부모 속성 => component props => component template
  props:{
    title : {type : String, default : "기본타이틀"},
    likes : {type : Number,
            validator:function(value){ // f12 메시지 표시
            return value > 0
    }},
    isPublished : {type : Boolean, required:true},
    commentsIds : Array
  },
  data(){
    return {}
  },
  methods: {},
  mounted(){},
  watch:{}
}
</script>