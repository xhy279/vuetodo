import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    todos: [
      {id: 0, text: "task1"},
      {id: 1, text: "task2"}
    ],
    nextId: 2
  },
	mutations: {
		ADD_TODO (state, { text }) {
      state.todos.push({ id: state.nextId, text: text});
      state.nextId++;
		},
		REMOVE_TODO (state, { id }){
      let todos = state.todos;
			state.todos = todos.filter((todo) => todo.id !== id);
		}
	}
})