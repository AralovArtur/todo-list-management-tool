<template>
  <v-container>
    <v-form ref="form">
      <v-row>
        <v-col cols="6" class="d-flex justify-center"
          ><v-text-field
            label="Add todo"
            :rules="rules"
            required
            v-model="todo"
            maxlength="25"
          ></v-text-field
        ></v-col>
        <v-col cols="3" class="d-flex justify-center"
          ><v-menu
            ref="menu"
            :close-on-content-click="false"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Pick time"
                readonly
                v-on="on"
                :rules="rules"
                required
              ></v-text-field>
            </template>
            <v-time-picker
              v-model="time"
              ampm-in-title
              full-width
              format="24hr"
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker> </v-menu
        ></v-col>
        <v-col cols="3">
          <v-btn fab color="warning" @click="validate">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row
      v-for="todo in getTodos"
      :key="todo.id"
      no-gutters
      draggable="true"
      @dragstart="startDrag($event, todo)"
      align-content="end"
    >
      <v-col cols="7" class="d-flex justify-center">
        <v-text-field
          filled
          :placeholder="`${todo.title} ${todo.time}`"
          readonly
        >
        </v-text-field>
      </v-col>
      <v-col cols="5">
        <v-btn class="ml-6" fab color="warning" @click="deleteTodo(todo.id)">
          <v-icon dark> mdi-delete </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { v1 as uuidv1 } from "uuid";
export default {
  name: "Todos",
  data: () => ({
    todo: "",
    time: null,
    rules: [(v) => !!v || "Field can't be empty"],
  }),
  methods: {
    ...mapActions(["deleteTodo", "addTodo"]),
    startDrag(event, todo) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";

      const stringTodo = JSON.stringify(todo);
      event.dataTransfer.setData("stringTodo", stringTodo);
    },
    validate() {
      if (this.$refs.form.validate()) {
        const todo = {
          userId: 1,
          title: this.todo,
          completed: false,
          time: this.time,
        };
        todo.id = uuidv1();

        this.addTodo(todo);
      }
    },
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
};
</script>
<style></style>
