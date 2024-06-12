<template>
    <ul>
        <li v-for=" ds in menu">{{ ds }}</li>
    </ul>
</template>
<script>
    export default{
        props:{ 'menu':{type:Object}

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