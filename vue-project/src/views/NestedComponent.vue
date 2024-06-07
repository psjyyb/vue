<template>
    <div>
        <PageTitle></PageTitle>
        <PageTitle v-bind:title="myTitle"></PageTitle>
        <BlogComp v-bind:id="blog.id" v-bind:title="blog.title"></BlogComp>
        <BlogComp v-bind:blog="blog"></BlogComp>
        <h1>중첩ㅋㅋ</h1>
    </div>
</template>
<script>
    import PageTitle from"../components/PageTitle"
    import BlogComp from"../components/BlogComp"
    export default{
    components:{PageTitle,BlogComp},
    data(){
     return {
        myTitle:"매그내릭~",
        blog:{id:3,title:'post1'}
     }; 
    },
    created(){
    },
    methods:{
    }
    }
</script>
<style></style>