<script>
import TodoItem from '@/components/TodoItem.vue'
let id = 0
export default {
  components: { TodoItem },
  data(){
    return{
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'HTML 배우기', done: true },
        { id: id++, text: 'JavaScript 배우기', done: true },
        { id: id++, text: 'Vue 배우기', done: false }
      ]
    }
  },
  computed: {
    filteredTodos() {
      if (this.hideCompleted) {
        return this.todos.filter(todo => !todo.done);
      }
      return this.todos;
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    }
  }
}
</script>

<template>
<form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
      <button>Add Todo</button>
    </form>
    <ul>
      <todo-item v-for="(todo, idx) in filteredTodos" :key="todo.id" v-bind="todo" @remove="removeTodo(idx)" />
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>