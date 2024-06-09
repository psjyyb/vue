<template>
    <div>
        <h1>사원수정</h1>
        <div>사번:<input type="text" readonly v-model="employee.employee_id"></div>
        <div>이름:<input type="text" v-model="employee.first_name"></div>
        <div>성:<input type="text" v-model="employee.last_name"></div>
        <div>이메일:<input type="text" v-model="employee.email"></div>
        <div>휴대폰:<input type="text" v-model="employee.phone_number"></div>
        <div>월급:<input type="number" v-model="employee.salary"></div>
        <div>부서코드:<select v-model="employee.job_id">
            <option v-for="job in jobs" v-bind:value="job.job_id" v-text="job.job_title"></option>
        </select>         
        </div>
        <button @click="modBtn">수정</button>
    </div>
</template>
<script>
import axios from 'axios';
    export default{
    data(){
    return {employee:{
        employee_id:100,
        first_name:'',
        last_name:'',
        email:'',
        phone_number:'',
        job_id:'',
        salary:0
     },
     jobs:[]
    }; 
    },
    created(){
        this.employee.employee_id=this.$route.query.employee_id
        this.employee.first_name=this.$route.query.first_name
        this.employee.last_name=this.$route.query.last_name
        this.employee.email=this.$route.query.email
        this.employee.phone_number=this.$route.query.phone_number
        this.employee.job_id=this.$route.query.job_id
        this.employee.salary=this.$route.query.salary
        axios.get('http://localhost:81/myserver/empDeptJob')
        .then(res=>this.jobs=res.data.jobs)
        //axios.get('http://localhost:81/myserver/empId',this.employee.employee_id)
        //.then(res=>{this.employee=res.data})
    },
    methods:{
        modBtn: async function(){
            await axios.post('http://localhost:81/myserver/empUpdate',this.employee)
            .then(this.$router.push("/emp"))//목록으로 이동
        }
    }
    }
</script>
<style></style>