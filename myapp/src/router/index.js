import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import Todo from '../views/Todo.vue';
import Movie from '../views/Movie.vue';
import EmpView from '../views/EmpView.vue';
import ParamView from '../views/ParamView.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/memberForm', component: MemberForm },
  { path: '/paramView/:username', component: ParamView},
  { path: '/Todo', component: Todo },
  { path: '/Movie', component: Movie },
  { path: '/EmpView', component: EmpView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;