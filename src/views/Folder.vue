<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>
          Explore
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
        <!-- when user clicks button push to the next route -->
        <ion-button @click="$router.push(`/folder/${$route.params.id}/detail`)"
          >DETAIL PAGE</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/vue";
import { defineComponent } from "vue";

// there is no code here because everthing that is logic
// is handled in the template
export default defineComponent({
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>