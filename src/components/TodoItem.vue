<template>
  <ul class="todoItem">
    <li>{{todo.text}} <button v-on:click="removeTodo(todo.id)">Delete</button></li>
  </ul>
</template>
<script>
  export default {
    name: 'todo-item',
    props: ['todo'],
    methods:{
      removeTodo(id) {
				this.$store.commit('REMOVE_TODO', { id })
      }
    }
  }
</script>
