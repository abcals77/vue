<template>
  <!-- <PageTitle/> -->
  <page-title title="마이페이지" subtitle="주문내역"/> <!-- 정적 타이틀 -->
  <page-title v-bind:title="title"/> <!-- 동적 타이틀 -->
  <!-- <page-title :title="title"/> -->
  <blog-post :title="post.title"
             :likes="post.likes"
             :is-published="post.isShow"
             :comments-ids="post.commentsIds"/> 

  <blog-post 
             :likes="50"
             :is-published="false"
             :comments-ids= "[100, 103, 200]"/>

  <blog-post v-bind="post"/>
  <hr>
  <blog-post v-for="post in posts" v-bind="post"/>


</template>
<script>
// 1. 임포트
import PageTitle from '@/components/PageTitle.vue'; // 절대경로
// import PageTitle form "../components/PageTitle.vue" // 상대경로
import BlogPost from '@/components/BlogPost.vue';
export default {
  // 2. 컴포넌트 등록
  components : {PageTitle, BlogPost}, // 컴포넌트 등록 => 태그처럼 사용가능
  data(){
    return {title : '동적페이지이름',
            posts:[
              {isPublished : true, title:"블로그1"},
              {isPublished : false, title:"블로그2"},
              {isPublished : true, title:"블로그3"}
            ],
            post : {
              commentsIds:[200, 250, 300],
              isShow : true,
              likes : 50,
              title : "vue 블로그"
            }
    } // 동적 타이틀
  }
}
</script>
