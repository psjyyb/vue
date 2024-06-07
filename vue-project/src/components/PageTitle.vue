<template>
    <div>
        <h1>Page Title</h1>
        <h2>{{ title }}</h2>
        <h3 v-text="default"></h3>
    </div>
</template>
<script>
    export default{
        props:{title:{String,default:'페이지 제모'}
    },
    data(){
     return {}; 
    },
    created(){
    },
    methods:{
    }
    }
</script>
<style></style>