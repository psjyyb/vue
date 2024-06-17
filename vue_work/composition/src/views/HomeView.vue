<template>
  <div class="home">
    <!-- <LifeCycle></LifeCycle>
    <Reactive></Reactive>
    <Computed></Computed>
    <Watch></Watch>
    <Watch2></Watch2> -->
    <!-- <Props title="porps전달" subject="subject전달"></Props>
    <Props></Props> -->
    <Provide></Provide>
  </div>
</template>

<script>
// @ is an alias to /src
import LifeCycle from "../components/LifeCycle.vue";
import Reactive from "../components/Reactive.vue";
import Computed from "../components/Computed.vue";
import Watch from "../components/Watch.vue";
import Watch2 from "../components/Watch2.vue";
import Props from "../components/Props.vue";
import Provide from "../components/Provide.vue";
import {provide} from 'vue';
export default {
  name: "HomeView",
  components: {
    LifeCycle,Reactive,Computed,Watch,Watch2,Props,Provide
  },
  setup(){
   provide('title','vue.js 프로젝트')
  }
};
</script>
