<template>
    <div v-if="account">
        {{ account}}
        <button @click.prevent="logoutHandler"> logout </button>
    </div>
    <div v-else>
        <input v-model="form.userId">
        <input v-model="form.userPw">
        <button @click.prevent="loginHandler">login</button>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
    data(){
     return {
        form:{userId:'',userPw:''}

     }; 
    },
    computed:{
        account(){
            return this.$store.state.user.userId
        }
    },
    created(){
        axios.get('/api/account')
        .then((result)=>{
            this.$store.commit('user',result.data)})
        .catch((err)=>{console.log('account',err)})
    },
    methods:{
        loginHandler(){
                axios.post('/api/login',this.form)
                .then((result)=>{alert('로그인성공'),
                this.$store.commit('user',result.data);

                })
                .catch((err) =>{ console.log(err),
                     alert('로그인실패')})
        },
        logoutHandler(){
            axios.post('/api/logout')
            .then(()=>{
                this.$store.commit('user',{});
            })
            .catch((err=>{console.log(err),
                alert('로그아웃실패');
            }))
        }
    }
    }
</script>
<style></style>