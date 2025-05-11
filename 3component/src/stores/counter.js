import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // data(){return{}}
  state: () => ({ count: 0, name: 'Eduardo test' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // methods: {}
  actions: {
    increment() {
      this.count++
    },
  },
})