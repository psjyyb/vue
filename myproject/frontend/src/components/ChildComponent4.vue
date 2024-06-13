<template>
    <button @click="sendMsg">클릭</button>
</template>
<script>
    export default{
    props:{
        
    },
    data(){
     return {
        msg: '부모에게 이벤트 전달'
     }; 
    },
    created(){
    },
    methods:{
        sendMsg(){
            this.$emit('send-message',this.msg); //$emit 부모에 있는 이벤트 타입 호출 첫번째 인수가 이벤트 이름 
        }
    },
    mounted(){
        // this.$emit('send-message',this.msg);
    }
    }
</script>
<style></style>