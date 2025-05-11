import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  // data(){return{}}
  state: () => ({ userId: "kim", grade: "admin" }),
  getters: {
    
  },
  // methods: {}
  actions: {
    setUserId(userId) {
      this.userId = userId;
    },
  },
})