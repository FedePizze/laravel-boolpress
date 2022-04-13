import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import PageNotFound from './pages/PageNotFound.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/chi-siamo',
            name: 'about',
            component: About
        },
        {
            path: '/contatti',
            name: 'contact',
            component: Contact
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Posts
        },
        {
            path: '/blog/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'page-not-found',
            component: PageNotFound
        }
    ]
});

export default router
