<template>
  <div class="home">
    <div><h3>커뮤니티 게시판 입니다</h3></div>
    <div><h3>*본 게시판은 따뜻한 소통과 자유롭게 정보 공유를 위해 운영되는 페이지 입니다.</h3></div>
    <div><h3>*욕설, 비방, 광고 등 타인에게 불쾌감을 줄 수 있는 내용은 삼가주시기 바랍니다.</h3></div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Header,Footer
  }
}
</script>
