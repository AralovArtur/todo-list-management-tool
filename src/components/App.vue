<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-left">Todo app</div>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col lg="6">
          <Todos />
        </v-col>
        <v-col lg="6">
          <TodayTaskPlanning />
          <TomorrowTaskPlanning />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Todos from "./Todos.vue";
import TodayTaskPlanning from "./TodayTaskPlanning.vue";
import TomorrowTaskPlanning from "./TomorrowTaskPlanning.vue";
export default {
  name: "App",
  components: {
    Todos,
    TodayTaskPlanning,
    TomorrowTaskPlanning,
  },
};
</script>
<style></style>
