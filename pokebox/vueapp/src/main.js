import { createApp } from "vue";
import App from "./App.vue";
// import Routes from "./router/routes.js";
// import { createRouter } from "vue-router";
// import Home from "./components/HomePage.vue";

// import "./assets/main.css";

// const router = new createRouter({
//   mode: "history",
//   base: __dirname,
//   routes: [{ path: "/", component: Home }],
// });

var app = createApp(App);
// app.use(router);

app.mount("#app");
