<template>
  <div class="app">
    <div class="todo-wrapper">
      <app-header></app-header>
      <todo-input></todo-input>
      <todo-item v-for="todo in todos" v-bind:todo="todo" v-on:todo:remove="removeTodo" :key="todo.id"></todo-item>
    </div>
  </div>
</template>


<script>
import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue'
  export default {
    name: 'app',
    components: {
      AppHeader,
      TodoInput,
      TodoItem
    },
    computed: {
      todos () {
        return this.$store.state.todos
      }
    }
  }
</script>

<style lang="scss" src="./app.scss"></style>
