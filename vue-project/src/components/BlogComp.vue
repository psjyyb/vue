<template>
    <div>blog
    </div>
    <div>{{ id }}</div>
    <div v-text="title"></div>
    <div>{{ blog }}</div>
</template>
<script>
    export default{
    props:{ id:Number,title:String,
        blog:{id:Number,title:String}

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