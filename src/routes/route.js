import {createRouter, createWebHashHistory} from "vue-router"
import IndexContentComponentVue from "/src/components/IndexContentComponent.vue";
import ArticleIndexVue from "/src/components/view/ArticleIndex.vue";

const routes = [
  { path: "/", component: IndexContentComponentVue },
  { path: "/about", component: ArticleIndexVue },
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
