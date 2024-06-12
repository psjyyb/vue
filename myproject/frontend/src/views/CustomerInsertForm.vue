<template>
    <div>
        <h1>고객 등록</h1>
        <div>이름:<input type="text" v-model="customer.name"></div>
        <div>이메일:<input type="text" v-model="customer.email"></div>
        <div>휴대폰:<input type="text" v-model="customer.phone"></div>
        <div>주소:<input type="text" v-model="customer.address"></div>
        <button @click="addBtn">등록</button>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
    data(){
     return {
        customer:{}
     }; 
    },
    created(){
    },
    methods:{
        addBtn(){
            axios.post('/api/customer',this.customer)
            .then(this.$router.push('/customer'))
        }
    }
    }
</script>
<style></style>