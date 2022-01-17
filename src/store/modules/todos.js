import axios from "axios";

const state = {
  todos: [],
  todayTodos: [],
  tomorrowTodos: [],
};

const getters = {
  getTodos: (state) => state.todos,
  getTodayTodos: (state) => state.todayTodos,
  getTomorrowTodos: (state) => state.tomorrowTodos,
};

const actions = {
  async fetchTodayTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const todos = response.data.slice(0, 3);
    todos.forEach((todo) => (todo.time = "00:00"));

    commit("setTodayTodos", todos);
  },
  async fetchTomorrowTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const todos = response.data.slice(4, 7);
    todos.forEach((todo) => (todo.time = "00:00"));

    commit("setTomorrowTodos", todos);
  },

  async deleteTodo({ commit }, id) {
    commit("deleteTodo", id);
  },
  async deleteTodayTodo({ commit }, id) {
    commit("deleteTodayTodo", id);
  },
  async deleteTomorrowTodo({ commit }, id) {
    commit("deleteTomorrowTodo", id);
  },

  async addTodo({ commit }, todo) {
    commit("addTodo", todo);
  },
  async addTodayTodo({ commit }, todo) {
    commit("addTodayTodo", todo);
  },
  async addTomorowTodo({ commit }, todo) {
    commit("addTomorrowTodo", todo);
  },

  async deleteTodayTodos({ commit }) {
    commit("deleteTodayTodos");
  },
  async deleteTomorrowTodos({ commit }) {
    commit("deleteTomorrowTodos");
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  setTodayTodos: (state, todos) => (state.todayTodos = todos),
  setTomorrowTodos: (state, todos) => (state.tomorrowTodos = todos),

  addTodo: (state, todo) => state.todos.push(todo),
  addTodayTodo: (state, todo) => {
    state.todayTodos.push(todo);
    state.todayTodos.sort(sortByTodoTime);
  },
  addTomorrowTodo: (state, todo) => {
    state.tomorrowTodos.push(todo);
    state.tomorrowTodos.sort(sortByTodoTime);
  },

  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  deleteTodayTodo: (state, id) =>
    (state.todayTodos = state.todayTodos.filter((todo) => todo.id !== id)),
  deleteTomorrowTodo: (state, id) =>
    (state.tomorrowTodos = state.tomorrowTodos.filter(
      (todo) => todo.id !== id
    )),
  deleteTodayTodos: (state) => (state.todayTodos = []),
  deleteTomorrowTodos: (state) => (state.tomorrowTodos = []),
};

function sortByTodoTime(firstTodo, secondTodo) {
  if (firstTodo.time < secondTodo.time) return -1;
  if (firstTodo.time > secondTodo.time) return 1;
  return 0;
}

export default {
  state,
  getters,
  actions,
  mutations,
};
