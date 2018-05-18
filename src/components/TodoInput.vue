<template>
  <div class="todo-input">
    <input type="text" v-model="text">
    <button v-on:click="addTodo">Add Task</button>
  </div>
</template>

<script src='./todoInput.js'> </script>
<style src='./todoInput.css'> </style>

