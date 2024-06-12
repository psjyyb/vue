<template>
    <div>고객관리</div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>id:</th>
                    <th>name:</th>
                    <th>email:</th>
                    <th>phone:</th>
                    <th>address:</th>
                </tr>
            </thead>>
            <tbody>
                <tr v-for=" customer in customers">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.address }}</td>
                </tr>1
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
        const url = 'http://localhost:8080/customer';
        axios.get(url)
        .then(result=>this.customers=result.data)
    },
    methods:{
    }
    }
</script>
<style></style>