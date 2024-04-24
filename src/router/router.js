import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";
import LeftSideBar from "../components/LeftSideBar.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/blog",
    components: {
      default: Blog,
      leftSidebar: LeftSideBar,
    },
    name: "blog",
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
