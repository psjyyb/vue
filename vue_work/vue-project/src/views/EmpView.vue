<template>
    <RouterLink to="/empForm">사원등록</RouterLink>
    <div>
        <span>employee_id</span>
        <span>first_name</span>
        <span>last_name</span>
    </div>
    <div v-for=" employee in employees">
        <span v-text="employee.employee_id"></span>
        <span @click="gotoUpateForm(employee)" v-text="employee.first_name"></span>
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
        const url= 'http://localhost:81/myserver/empSelect';
        axios.get(url)
        .then(res=>this.employees=res.data)
    },
    methods:{
        gotoUpateForm(emp){
            this.$router.push({
                name:'empUpdateForm',
               query: {employee_id:emp.employee_id,
                       first_name:emp.first_name,
                       last_name:emp.last_name,
                       email:emp.email,
                       phone_number:emp.phone_number,
                       job_id:emp.job_id,
                       salary:emp.salary
               }
            })
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