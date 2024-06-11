const {createRouter,createWebHistory} = VueRouter;

import HomeView from './view/HomeView.js'
import AboutView from './view/AboutView.js';
import UserView from './view/UserView.js';
import UserPost from './view/UserPost.js';
import UserProfile from './view/UserProfile.js';


const routes =[
    {path: '/',component:HomeView},
    {path: '/index',redirect:"/"},
    {path: '/about',component:AboutView},
    {path:'/user/:id',
     name:'kim',
     component:UserView,
     props:true,
     children:[{path:'userPost',component:UserPost},
               {path:'userProfile',component:UserProfile}
     ]
},
    //{path:'/userInfo',component:UserView}
    {path:'/userInfo',redirect: to=>{ return{name:'kim',params:{id:to.query.username}}}},
]
const router = createRouter({
    history:createWebHistory(),
    routes: routes,
})
export default router;