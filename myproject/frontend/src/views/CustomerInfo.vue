<template>
    <div>
        <h1>상세보기</h1>
        <div><input type="number" readonly v-model="customer.id"></div>
        <div><input type="text" v-model="customer.name"></div>
        <div><input type="text" v-model="customer.email"></div>
        <div><input type="text" v-model="customer.phone"></div>
        <div><input type="text" v-model="customer.address"></div>
        <button v-if="account" @click="modBtn">수정</button>
        <button v-if="account" @click="delBtn">삭제</button>
        <button v-if="account" @click="canBtn">초기화</button>
   </div>
</template>
<script>
    import axios from 'axios';
    export default{
        computed:{
        account(){
            return this.$store.state.user.userId
        }
    },
    data(){
     return {
        customer:{}
     };  
    },
    
    created(){
        
    //    axios.get('/api/customer/'+this.$route.query.id)
    //     .then(result=>
    //      {this.customer=result.data[0]})
    },
    methods:{
        modBtn(){
            axios.put('/api/customer/'+this.customer.id,this.customer)
            .then(this.$router.push('/customer'))
        },
        delBtn(){
            axios.delete('/api/customer/'+this.customer.id)
            .then(this.$router.push('/customer'))

        },
        canBtn(){
        this.$emit('go-pages',1)
        }
        },
        
    }
    
</script>
<style></style>