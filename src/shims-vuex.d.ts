import { Store } from "@/store";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    authentication: {
      user: any;
      authChecked: boolean
    }
  }

  interface ComponentCustomProperties {
    $store: Store;
  }
}
