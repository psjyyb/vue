import dataBinding from './dataBinding.js';
import ford from './for.js';
import ifd from './if.js';
import events from './event.js';
import post from './post.js';
const {createRouter,createWebHistory}=VueRouter;

const routes=[
    {path:'/data',component:dataBinding},
    {path:'/ford',component:ford},
    {path:'/ifd',component:ifd},
    {path:'/events',component:events},
    {path:'/post',component:post}
]

const router = createRouter({
    history:createWebHistory(),
    routes

})
export default router;