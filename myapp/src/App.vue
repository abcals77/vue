<script>
import{ RouterLink, RouterView } from 'vue-router';
import GoodsView from './components/goods.vue';
import MemberForm from './views/MemberForm.vue';
import Todo from './views/Todo.vue';
import Movie from './views/Movie.vue';
import EmpView from './views/EmpView.vue';

export default {
  components : {GoodsView, MemberForm, Todo, Movie, EmpView},
  data(){
    return {
      fruits : ["사과", "바나나", "키위"],
      message : "greeting"
    }
  },
  methods : {}

  
}

</script>

<template>
  <div class="container">
  <!-- Content here -->
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/memberForm" aria-current="page">회원가입</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/empView" aria-current="page">직원</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/paramView/kim" aria-current="page">파라미터1</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/paramView/park" aria-current="page">파라미터2</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
