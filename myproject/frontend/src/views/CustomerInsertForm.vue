<template>
    <div>
        <h1>고객 등록</h1>
        <div v-if="customer.id!=null">아이디<input class="form-control form-control-sm" type="text" readonly v-model="customer.id" ></div>
        <div>이름<input class="form-control form-control-sm" type="text" v-model="customer.name"></div>
        <div>이메일<input class="form-control form-control-sm" type="text" v-model="customer.email"></div>
        <div>휴대폰<input class="form-control form-control-sm" type="text" v-model="customer.phone"></div>
        <div>주소<input class="form-control form-control-sm" type="text" v-model="customer.address"></div>
        <button v-if="customer.id==null" @click="addBtn" >등록</button>
        <button v-if="customer.id!=null"  @click="modBtn" >수정</button>
        <button v-if="customer.id!=null"  @click="delBtn" >삭제</button>
        <button @click="canBtn" >초기화</button>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        props : {
        customerdata : {
            type : Object
        }
    },
    data(){
     return {
        customer:{...this.customerdata}
     }; 
    },
    watch:{
        customerdata(newQ,old){
            this.customer ={...newQ}
        }
    },
    created(){
        this.customer = this.customerdata;
    },
    methods:{
        addBtn(){
            let del = {...this.customer}
            delete del.id
            axios.post('/api/customer',del)
            this.customer={};     
            this.$emit('go-page',1);
        },   
        modBtn(){
            axios.put('/api/customer/'+this.customer.id,this.customer)
            this.customer={};
            this.$emit('go-page',1);
            
        },
        canBtn(){
            this.customer={};
            this.$emit('go-page',1);
        },
        delBtn(){
            axios.delete('/api/customer/'+this.customer.id)
            this.customer={};
            this.$emit('go-page',1);

        },
         check(){
            if(this.customer.name==null){
                alert("이름은 필수입력 정보입니다.")
                return false;
            }else if(this.customer.email==null){
                alert("이메일은 필수입력 정보입니다.")
                return false;
            }else if(this.customer.phone==null){
                alert("전화번호는 필수입력 정보입니다.")
                return false;
            }else if(this.customer.email==null){
                alert("이메일은 필수입력 정보입니다.")
                return false;
            }else{
                return true;
            }
        }
    },
    }
    
</script>
<style></style>