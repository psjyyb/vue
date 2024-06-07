import router from "./router.js";

const template=/*html*/`
<h1>라우터 테스트</h1>
<p>
<strong>현재 라우트 경로</strong>:{{this.$route.fullPath}}
</p>
<nav>  
  <RouterLink to="/">홈으로가기</RouterLink> |
  <RouterLink to="/index">홈으로가기</RouterLink> |
  <RouterLink to="/about">소개로가기</RouterLink> |
  <RouterLink to="/user/hong">사용자 홈</RouterLink> |
  <RouterLink to="/user/hong/userPost">userProfile</RouterLink> |
  <RouterLink to="/user/hong/userProfile">userPost</RouterLink> |
  <RouterLink to="/userInfo?username=kiki">사용자(쿼리) 홈</RouterLink>
</nav>
<main>
  <RouterView />
</main>
`;
const component={
    template,
    components:{},
    data(){
        return{}
    }
}
const {createApp} = Vue;
createApp(component).use(router).mount('#app')