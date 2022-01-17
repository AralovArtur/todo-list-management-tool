<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <b
          ><p>{{ date }}</p></b
        >
      </v-col>
      <v-col cols="4">
        <p>Total: {{ getTomorrowTodos.length }}</p>
      </v-col>
      <v-col cols="4">
        <p>Done: {{ completedTodos.length }}</p>
      </v-col>
    </v-row>
    <v-card
      height="255px"
      width="100%"
      @drop="onDrop($event, getTomorrowTodos)"
      @dragenter.prevent
      @dragover.prevent
    >
      <v-container>
        <v-row v-for="todo in getTomorrowTodos" :key="todo.id" no-gutters>
          <v-col cols="1" class="d-flex justify-center">
            <v-checkbox
              color="primary"
              hide-details
              @click="onSelect(todo.id)"
            ></v-checkbox>
          </v-col>
          <v-col cols="9" v-if="!completedTodos.includes(todo.id)">
            <v-text-field
              filled
              :placeholder="`${todo.title} ${todo.time}`"
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col cols="9" v-else>
            <del>
              <v-text-field
                filled
                :placeholder="`${todo.title} ${todo.time}`"
                readonly
              >
              </v-text-field>
            </del>
          </v-col>
          <v-col cols="2" class="d-flex justify-center">
            <v-btn fab color="warning" @click="onDelete(todo.id)">
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card-actions class="justify-center">
      <v-btn color="warning" @click="deleteTodos()">Delete todos</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TomorrowTaskPlanning",
  data: () => ({
    completedTodos: [],
  }),
  methods: {
    ...mapActions([
      "addTomorrowTodo",
      "deleteTodo",
      "deleteTomorrowTodo",
      "deleteTomorrowTodos",
      "fetchTomorrowTodos",
    ]),
    onDrop(event, todos) {
      if (todos.length < 3) {
        const stringTodo = event.dataTransfer.getData("stringTodo");
        const todo = JSON.parse(stringTodo);
        this.addTomorrowTodo(todo);
        this.deleteTodo(todo.id);
      }
    },
    onSelect(todoId) {
      if (!this.completedTodos.includes(todoId))
        this.completedTodos.push(todoId);
      else
        this.completedTodos = this.completedTodos.filter((id) => id !== todoId);
    },
    onDelete(todoId) {
      this.completedTodos = this.completedTodos.filter((id) => id !== todoId);
      this.deleteTomorrowTodo(todoId);
    },
    deleteTodos() {
      this.deleteTomorrowTodos();
      this.completedTodos = [];
    },
  },
  computed: {
    ...mapGetters(["getTomorrowTodos"]),
    date() {
      const date = new Date();
      let day = date.getDate() + 1;
      if (day < 10) day = "0" + day;
      var month = date.getMonth() + 1;
      if (month < 10) month = "0" + month;
      return `${month}.${day}`;
    },
  },
  created() {
    this.fetchTomorrowTodos();
  },
};
</script>
<style></style>
