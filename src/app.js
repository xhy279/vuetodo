import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    TodoInput,
    TodoItem
  },
  data() {
    return {
      todos: [
        {id: 0, text: "task1"},
        {id: 1, text: "task2"}
      ],
      nextId: 2
    };
  },

  methods: {
    addTodo(text) {
      this.todos.push({ id: this.nextId, text: text});
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
      console.log(todos, id);
  }
}
}