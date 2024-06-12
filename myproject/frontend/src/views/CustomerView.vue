<template>
    <div>고객관리</div>
    <div><button @click="addForm">고객등록</button></div>
    <div>
        <table class="table table-success table-striped table table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" customer in customers">
                    <td>{{ customer.id }}</td>
                    <td @click="infoForm(customer)">{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.address }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from "axios";
    export default{
    data(){
     return {
        customers:[]
     }; 
    },
    created(){
        axios.get('/api/customer')
        .then(result=>this.customers=result.data)
    },
    methods:{
        addForm(){
            this.$router.push('/customerInsert')
        },
        infoForm(customer){
            //axios.get('/api/customer',customer.id)
            this.$router.push('/customerInfo')
        }
    }
    }
</script>
<style></style>