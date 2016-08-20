import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
// Routes;
import App from './app.vue';
import Home from './modules/views/Home.vue';
import About from './modules/views/About.vue';


// Use VueRouter
Vue.use(Router);
let router = new Router({
    hashbang: false,
    history: true,
    transitionOnLoad: true,
    saveScrollPosition: true
});

// Use VueResource
Vue.use(Resource);
Vue.http.options.root = '/';

// Create transitions
Vue.transition('expand', {

    beforeEnter: function (el) {
        // el.classList.add('beforeEnter');
    },
    enter: function (el) {
        // el.classList.add('enter');
    },
    afterEnter: function (el) {
        // el.classList.add('afterEnter');
    },
    enterCancelled: function (el) {
        // handle cancellation
    },

    beforeLeave: function (el) {
        // el.classList.add('beforeLeave');
    },
    leave: function (el) {
        // el.classList.add('leave');
    },
    afterLeave: function (el) {
        // el.classList.add('afterLeave');
    },
    leaveCancelled: function (el) {

    }
});


// Set routes here
router.map({
    '/': {
        component: Home
    },
    '/about': {
        name: 'About',
        component: About
    }
});

// Start app with default Vue class
router.start(App, "#app");