<template>
  <div class="todo-input">
    <input type="text" v-model="text">
    <button v-on:click="addTodo">Add Task</button>
  </div>
</template>

<script>
  export default {
    name: 'todo-input',
    data() {
      return {
        text: ''
      }
    },
    methods: {
      addTodo() {
        var text = this.text;
				this.$store.commit('ADD_TODO', { text } )
				this.text  = '';
      }
    }
  }
</script>
