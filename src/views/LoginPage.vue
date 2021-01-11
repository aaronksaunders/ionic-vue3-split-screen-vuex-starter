<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>LOGIN PAGE</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-card>
        <ion-card-content>
          <ion-label position="stacked">Email</ion-label>
          <ion-input type="text" v-model="credentials.email"></ion-input>
          <ion-label position="stacked">Password</ion-label>
          <ion-input type="password" v-model="credentials.password"></ion-input>
          <ion-button @click="doLogin()">Login</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonLabel,
  IonCard,
  IonCardContent
} from "@ionic/vue";
import store from "../store/index";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonLabel,
    IonCard,
    IonCardContent
  },
  data() {
    return {
      credentials: { email: "", password: "" }
    };
  },
  methods: {
    /**
     * call the login method in store using data from form, if successful
     * then goto the default route, if error, display aler
     */
    async doLogin() {
      try {
        await store.dispatch("authentication/login", { ...this.credentials });
        this.$router.replace("/");
        return null;
      } catch (error) {
        alert(error);
      }
    }
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