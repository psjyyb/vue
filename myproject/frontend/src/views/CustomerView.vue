<template>
    <div>고객관리</div>
    <div class="row">
        <div class="col-md 12 col-lg-7 border p-3">
            
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
                    <td @click="infoForm(customer)" >{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.address }}</td>
                </tr>
            </tbody>
        </table>
        <select v-model="pageUnit"  @change="goPage(1)">
                <option>3</option>
                <option>5</option>
                <option>10</option>
        </select>
        <PagingComponent v-bind="page" @go-page="goPage"></PagingComponent>
        </div>
        <div class="col-md 12 col-lg-5 border">
            <CustomerInsert :customerdata="customer" @go-page="goPage"></CustomerInsert>
        </div>
        <!-- <div class="col-md 12 col-lg-5 border" v-if="info">
            <CustomerInfo  ref="customerInfo" @go-pages="goPage"></CustomerInfo>
        </div> -->
    </div>
</template>
<script>
    import CustomerInfo from './CustomerInfo.vue';
    import CustomerInsert from './CustomerInsertForm.vue'
    import pageCalcMixin from '../mixin.js'
    import axios from "axios";
    import PagingComponent from '../components/PagingComponent.vue'
    export default{
        mixins:[pageCalcMixin],
        components:{PagingComponent,CustomerInsert,CustomerInfo},
    data(){
     return {
        customers:{},pageUnit:5,page:{},customer:{}
     }; 
    },
    created(){
    //     axios.get('/api/customer', {
    //     params: { page: this.page ,pageUnit:this.pageUnit }
    //   })
    //     .then(result=>this.customers=result.data.list)
    this.goPage(1);
    },
    methods:
    {
       async goPage(page){
        let pageUnit =this.pageUnit;
        let result = await axios.get(`/api/customer?pageUnit=${pageUnit}&page=${page}`);
        this.customers = result.data.list;
        this.page =this.pageCalc(page,result.data.count,5,pageUnit);
        console.log('vuew',page,'vuew1',result.data.count,'vuew2',5,'vuew3',pageUnit);
    },
    //  goPage(page){
    //     let pageUnit =this.pageUnit;
    //     axios.get(`/api/customer?pageUnit=${pageUnit}&page=${page}`)
    //    .then(result=>{this.customers = result.data.list,
    //     this.page =this.pageCalc(page,result.data.count,10,pageUnit)})
    // },
     
        addForm(){
            this.$router.push('/customerInsert')
        },
        infoForm(customer){
                this.customer=customer
        },
        
    }
    }
</script>
<style></style>