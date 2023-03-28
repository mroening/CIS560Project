
import VueRouter from "vue-router";

const Home = () => import("../components/HomePage.vue");
// const About = () => import("../components/About.vue");
// const Contact = () => import("../components/Contact.vue");

const routes = new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        // {
        //     path: "/about",
        //     component: About
        // },
        // {
        //     path: "/contact",
        //     component: Contact
        // }
    ]
});

export default routes;


