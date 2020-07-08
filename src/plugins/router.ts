import Vue from 'vue'
import VueRouter from 'vue-router'
import leftfindmusic from '../components/left/left-findmusic.vue'
import gexing from '../components/left/gexing.vue'
import gedan from '../components/left/gedan.vue'
Vue.use(VueRouter)

let routes=[
    {path:'/',redirect:'/leftfindmusic'},
    {
        path:"/leftfindmusic",
        component:leftfindmusic,
        //redirect: "/leftfindmusic/gexing",
        redirect:'/leftfindmusic/gexing',
        children:[
            {
                path:'gexing',
                component:gexing,
                name:'gexing'
            },
            {
                path:'gedan',
                component:gedan,
                name:'gedan'
            },
        ]
    },
];

let router=new VueRouter({
    mode:"history",
    routes
});

export default router;


