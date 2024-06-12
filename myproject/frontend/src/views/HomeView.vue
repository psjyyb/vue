<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 동적 데이터 전달 (v-bind or ':' 사용 두개 같은거)-->
    <PageTitle title="신탈진" :menuno="10"/>
    <!-- 배열 전달 -->
    <MenuBar :menu="['신발','상의','하의']" />
    <!-- 객체 전달 속성명과 데이터 이름이 같으면 생략 가능 ex) :user-->
    <HelloWorld :user="user"/>
    <!-- 카피라이트 slot 실습 -->
    <FooterTitle>카피라이트</FooterTitle>
    <!-- 부모가 자식 컴포넌트 이벤트 직접 발생-->
    <ChildComponents ref="child_component"></ChildComponents>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '../components/PageTitle.vue'
import MenuBar from '../components/MenuBar.vue'
import FooterTitle from '../components/FooterTitle.vue'
import ChildComponents from '../components/ChildComponents.vue'
export default {
  name: 'HomeView',
  components: {HelloWorld,PageTitle,MenuBar,FooterTitle,ChildComponents},
  data(){
    return {user:{username:'홍원순',msg:'vs'}}
  },
  mounted(){
    // 자식 컴포넌트 이벤트 발생
    //this.$refs.child_component.$refs.btn.click();
    // 자식 컴포넌트 함수 직접 호출
    this.$refs.child_component.childFunc();
    this.$refs.child_component.$refs.username.value = 'aaaa';
    this.$refs.child_component.$refs.username.focus();
  }
}
</script>
