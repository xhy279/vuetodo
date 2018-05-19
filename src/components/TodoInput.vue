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
        this.$emit('todo:add', this.text);
        this.text = '';
      }
    }
  }
</script>
