<template>
    <div>
        <h1>상세보기</h1>
        <div><input type="number" readonly v-model="customer.id"></div>
        <div><input type="text" v-model="customer.name"></div>
        <div><input type="text" v-model="customer.email"></div>
        <div><input type="text" v-model="customer.phone"></div>
        <div><input type="text" v-model="customer.address"></div>
        <button @click="modBtn">수정</button>
        <button @click="delBtn">삭제</button>
        <button @click="canBtn">취소</button>
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
       axios.get('/api/customer/'+this.$route.query.id)
        .then(result=>
         {this.customer=result.data[0]})
    },
    methods:{
        modBtn(){
            axios.put('/api/customer/'+this.customer.id,this.customer)
            .then(this.$router.push('/customer'))
        },
        canBtn(){
            this.$router.push('/customer')
        },
        delBtn(){
            axios.delete('/api/customer/'+this.customer.id)
            .then(this.$router.push('/customer'))

        }
        },
        
    }
    
</script>
<style></style>