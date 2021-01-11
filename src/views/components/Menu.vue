<template >
  <ion-menu
    content-id="main-content"
    type="overlay"
    @ionWillOpen="handleMenuWillOpen"
    :disabled="!showMenu"
  >
    <ion-content>
      <ion-list id="inbox-list">
        <ion-list-header>Inbox</ion-list-header>
        <ion-note class="ion-padding">{{ currentUser?.email }}</ion-note>

        <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
          <ion-item
            @click="selectedIndex = i"
            router-direction="root"
            :router-link="p.url"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === i }"
          >
            <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
            <ion-label>{{ p.title }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
    <ion-footer style="text-align: center">
      <ion-button @click="doLogout">LOGOUT</ion-button>
    </ion-footer>
  </ion-menu>
</template>

<script lang="ts">
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonFooter,
  IonButton
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from "ionicons/icons";
import store from "../../store";

/**
 * the list of paths and titles for the menu items
 */
const appPages = [
  {
    title: "Inbox",
    url: "/folder/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: "Outbox",
    url: "/folder/Outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: "Favorites",
    url: "/folder/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];

export default defineComponent({
  components: {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonFooter,
    IonButton
  },
  computed: {
    /**
     * called to determine if the menu should be shown.
     *
     * we use the current route and look at the properties that are
     * set in the router; the route meta has a flag "hideMenu" to
     * indicate if the menu should be should be shown or not
     */
    showMenu() {
      const route = useRoute();
      return route.meta?.hideMenu !== true;
    },
    currentUser() {
      return store.getters["authentication/currentUser"];
    }
  },
  methods: {
    /**
     * connected to the menu ionWillOpen event.
     *
     * this will be called to check the path that is set in the route.
     * then loop through the predefined paths in the appPages property
     * to see if there is a match and if so then set that as the
     * selectedIndex
     *
     * the selectedIndex is used to set the styling so you can see
     * the highlighted menu item
     */
    handleMenuWillOpen() {
      const route = useRoute();
      const path = route?.path.split("folder/")[1];
      if (path !== undefined) {
        this.selectedIndex = appPages.findIndex(
          page => page.title.toLowerCase() === path.toLowerCase()
        ) as any;
      }
    },
    async doLogout() {
      await store.dispatch("authentication/logout", {});
      this.$router.replace("/login");
    }
  },
  data() {
    return {
      selectedIndex: 0,
      appPages,
      archiveOutline,
      archiveSharp,
      bookmarkOutline,
      bookmarkSharp,
      heartOutline,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp
    };
  }
});
</script>

<style  scoped>
ion-item.selected {
  --color: var(--ion-color-primary);
}
ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>