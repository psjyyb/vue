<template>
    <div>
        <h1>고객 등록</h1>
        <div v-if="customer.id!=null">아이디<input class="form-control form-control-sm" type="text" readonly v-model="customer.id" ></div>
        <div>이름<input class="form-control form-control-sm" type="text" v-model="customer.name"></div>
        <div>이메일<input class="form-control form-control-sm" type="text" v-model="customer.email"  placeholder="예) daeun123@naver.com">
            <p v-show="valid.email">이메일 주소를 정확히 입력해주세요. </p>
       </div>
        <div>휴대폰<input class="form-control form-control-sm" type="text" v-model="customer.phone"   placeholder="예)010-8509-3418">
            <p v-show="valid.phone">전화번호를 정확히 입력해주세요. </p>
        </div>
        <div>주소<input class="form-control form-control-sm" type="text" v-model="customer.address"></div>
        <button v-if="customer.id==null&&account" @click="addBtn" >등록</button>
        <button v-if="customer.id!=null&&account"  @click="modBtn" >수정</button>
        <button v-if="customer.id!=null&&account"  @click="delBtn" >삭제</button>
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
    computed:{
        account(){
            return this.$store.state.user.userId
        }
    },
    data(){
     return {
        customer:{...this.customerdata},
        valid: {
        email: false,
        phone:false
      },
        
     }; 
    },
    
    watch:{
        customerdata(newQ,old){
            this.customer ={...newQ}
        },
        'customer.email':function(){
            this.checkEmail()
        },
        'customer.phone':function(){
            this.checkPhone()
        }

    },
    created(){
        this.customer = this.customerdata;
    },
    methods:{
        
        async addBtn(){
            if(this.check()){
            let del = {...this.customer}
            delete del.id
            await axios.post('/api/customer',del)
            this.customer={};     
            this.$emit('go-page',1);
            }
        },   
        async modBtn(){
            if(this.check()){
            await axios.put('/api/customer/'+this.customer.id,this.customer)
            this.customer={};
            this.$emit('go-page',1);
            }
        },
        canBtn(){
            this.customer={};
            this.$emit('go-page',1);
        },
       async delBtn(){
        await axios.delete('/api/customer/'+this.customer.id)
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
            }else if(this.valid.email){
                alert("이메일 형식을 확인해주세요")
                return false;
            }else if(this.valid.phone){
                alert("전화번호 형식을 확인해주세요")
                return false;
            }else{
                return true;
            }
        },
        checkEmail(){
             const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
             if(!validateEmail.test(this.customer.email)||!this.customer.email){
                this.valid.email = true
                 return
                 } this.valid.email = false
        },
        checkPhone(){
            const validatePhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/
            if(!validatePhone.test(this.customer.phone)||!this.customer.phone){
                this.valid.phone =true 
                return
            }
            this.valid.phone=false
        }
       
    }
    }
    
</script>
<style></style>