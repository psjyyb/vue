<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">게시판</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/board">전체조회</router-link> |
            <router-link to="/boardInsert">글 등록</router-link> |
            <router-link to="/testView">test</router-link> |
            <router-link to="/strapView">strap</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
  <Footer></Footer>
</template>
<script>
import Footer from './components/Footer.vue'
export default{
        components: {
    Footer
     }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
