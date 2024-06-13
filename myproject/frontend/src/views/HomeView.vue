<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 동적 데이터 전달 (v-bind or ':' 사용 두개 같은거)-->
    <PageTitle title="신탈진" :menuno="10"/>
    <hr />
    <!-- 배열 전달 -->
    <MenuBar :menu="['신발','상의','하의']" />
    <hr />
    <!-- 객체 전달 속성명과 데이터 이름이 같으면 생략 가능 ex) :user-->
    <HelloWorld :user="user"/>
    <hr />
    <!-- 카피라이트 slot 실습 -->
    <FooterTitle>카피라이트</FooterTitle>
    <hr />
    <!-- 부모가 자식 컴포넌트 이벤트 직접 발생-->
    <ChildComponents ref="child_component"></ChildComponents>
    <hr />
    <!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트/데이터 전달-->
     <ChildComponents4 @send-message="sendMessage"></ChildComponents4>
    <hr />
    <!-- 이름 있는 solt -->
     <SlotModalLayout>
      <template v-slot:header>
        header slot
      </template>
      <template v-slot:default>
        default slot
      </template>
      <template v-slot:footer>
        <button>닫기</button>
      </template>
      </SlotModalLayout>
      
      <hr/>
      <ProvideInjectChild></ProvideInjectChild>
      <PagingComponent v-bind="page" @go-page="goPage"></PagingComponent>
      <hr />
    <!-- count:  {{ count }}
    <button type="button" @click="increment">store count 증가</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css" // bootstrap import
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '../components/PageTitle.vue'
import MenuBar from '../components/MenuBar.vue'
import FooterTitle from '../components/FooterTitle.vue'
import ChildComponents from '../components/ChildComponents.vue'
import ChildComponents4 from '../components/ChildComponent4.vue'
import SlotModalLayout from '../components/SlotModalLayout.vue';
import ProvideInjectChild from '../components/ProvideInjectChild.vue'
import PagingComponent from '../components/PagingComponent.vue'

export default {
  name: 'HomeView',
  components: {HelloWorld,PageTitle,MenuBar,FooterTitle,ChildComponents,ChildComponents4,SlotModalLayout,ProvideInjectChild,PagingComponent},
  data(){
    return {user:{username:'홍원순',msg:'vs'},
            page:{} //return { firstPage, lastPage, startIdx, endIdx }         
  }
  },
  provide(){
    return{
      itemlength:4
    }
  },
  created(){
    // fetch => total, currentPage 받아온다
    this.page = this.pageCalc(3,124,5,10);
  },
  // computed:{
  //   count(){
  //     return  this.$store.state.count;
  //   }
  // },
  methods:{
    goPage(page){
      // fetch
      console.log('home',page)
    },
    sendMessage(msg){
      console.log(msg);
    },
    pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
      let firstPage = 1;
      let lastPage = Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
      let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
      let endIdx = startIdx + pageSize - 1;
      if (endIdx > lastPage) {
        endIdx = lastPage;
      }
      console.log(firstPage, lastPage, startIdx, endIdx);
      return {firstPage, lastPage, startIdx, endIdx };
    },
    // increment(){
    //   this.$store.commit('increment');
    // }

  },
  mounted(){
    // 자식 컴포넌트 이벤트 발생
    //this.$refs.child_component.$refs.btn.click();
    // 자식 컴포넌트 함수 직접 호출
    //this.$refs.child_component.childFunc();
    //this.$refs.child_component.$refs.username.value = 'aaaa';
    //this.$refs.child_component.$refs.username.focus();
  } 
}
</script>
