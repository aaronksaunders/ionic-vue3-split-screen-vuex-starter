<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <Menu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import { defineComponent } from "vue";
import Menu from "./views/components/Menu.vue";

// To let TypeScript properly infer types inside Vue component options, you need to define
// components with defineComponent
//
// @see https://v3.vuejs.org/guide/typescript-support.html#using-with-options-api
//
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    Menu
  },

  data() {
    return {};
  }
});
</script>

<style scoped>
</style>