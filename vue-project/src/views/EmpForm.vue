<template>
    <div>
        <h1>사원등록</h1>
        <div>사번:<input type="text" v-model="employee.employee_id"></div>
        <div>이름:<input type="text" v-model="employee.first_name"></div>
        <div>성:<input type="text" v-model="employee.last_name"></div>
        <div>이메일:<input type="text" v-model="employee.email"></div>
        <div>입사일:<input type="text" v-model="employee.hire_date"></div>
        <div>부서코드:<select v-model="employee.job_id">
            <option v-for="job in jobs" v-bind:value="job.job_id" v-text="job.job_title"></option>
        </select>         
        </div>
        <button @click="addBtn">등록</button>
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
        hire_date:'',
        job_id:''
     },
     jobs:[]
    }      
    },
    created(){
        axios.get('http://localhost:81/myserver/empDeptJob')
        .then(res=>this.jobs=res.data.jobs)
        
        
    },
    methods:{
      addBtn: async function(){
          await axios.post('http://localhost:81/myserver/empInsert',this.employee)
            .then(this.$router.push("/emp"))//목록으로 이동
        }
    }
    }
</script>
<style></style>