<template>
    <h1>{{title}} : {{ menuno}}</h1>
    <!-- <h2>store count {{ this.$store.state.count }}</h2> -->
</template>
<script>
    export default{
    props:{'title':{
        type:String,
        default:'정목삼'
    },
        'menuno':{
            type:Number,
            default:626
        }
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