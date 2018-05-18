<template>
  <ul class="todoItem">
    <li>{{todo.text}} <button v-on:click="removeTodo">Delete</button></li>
  </ul>
</template>
<script>
  export default {
    name: 'todo-item',
    props: ['todo'],
    methods:{
      removeTodo() {
        this.$emit('todo:remove', this.todo.id);
      }
    }
  }
</script>

<style>
  .todoItem {
    padding-left: 15px;
  }
</style>
