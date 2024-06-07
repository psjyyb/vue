<template>
    <RouterLink to="/empForm">사원등록</RouterLink>
    <div>
        <span>employee_id</span>
        <span>first_name</span>
        <span>last_name</span>
    </div>
    <div v-for=" employee in employees">
        <span v-text="employee.employee_id"></span>
        <span @click="gotoUpateForm" v-text="employee.first_name"></span>
        <span v-text="employee.last_name"></span>
    </div>
</template>
<script>
    import axios from "axios";
    export default{
    data(){
     return {
        employees:[],
    } 
    },
    created(){    
        const url= '/empSelect';
        axios.get(url)
        .then(res=>this.employees=res.data)
    },
    methods:{
        gotoUpateForm(){
            this.$router.push('/empUpdateForm')
        }
    }
    }
</script>
<style>
    span{ 
        display: inline-block;
        width: 20%;
    }
</style>