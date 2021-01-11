import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import store from '../store/index'


const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: "default",
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id/detail',
    component: () => import('../views/FolderDetail.vue'),
    // the meta is here for determining when to hide the sidemenu
    // it is hidden on all public pages and detail pages
    meta: { hideMenu: true, private: true }
  },
  {
    path: '/folder/:id',
    component: () => import('../views/Folder.vue'),
    // the meta is here for determining when to hide the sidemenu
    // it is hidden on all public pages and detail pages
    meta: { hideMenu: false, private: true }
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
    // the meta is here for determining when to hide the sidemenu
    // it is hidden on all public pages and detail pages
    meta: { hideMenu: true, private: false }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// this is called before each route is rendered
router.beforeEach((to, from, next) => {
  debugger;
  const isLoggedIn = store.getters['authentication/isLoggedIn'];
  // using the getters from the store to determine if user
  // is logged in or not
  if (isLoggedIn && (to.name === 'login')) {
    // if logged in and path is back to login, the redirect to
    // the default route
    next({ name: "default", replace: true });
  } else if (!isLoggedIn && (to.name !== 'login')) {
    // if not logged in and not trying to go to login route,
    // the go to login route
    next({ name: "login", replace: true });
  } else {
    // otherwise continue
    next();
  }

})


export default router
