<template>
        <div class="row">
        <div class="col-md 12 col-lg-7 border p-3">
            <h1>게시판</h1>
            <table class="table table-success table-striped table table-hover">
            <thead>
                <tr>
                    <th>no</th>
                    <th>title</th>
                    <th>writer</th>
                    <th>content</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" board in boards">
                    <td>{{board.no }}</td>
                    <td  @click="infoForm(board.no)" >{{board.title}}</td>
                    <td>{{board.writer}}</td>
                    <td>{{board.content}}</td>
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
            <BoardInsert :boarddata="board" @go-page="goPage"></BoardInsert>
        </div>
        </div>
</template>
<script>
    import pageCalcMixin from '../mixin.js'
    import axios from "axios";
    import PagingComponent from '../components/PagingComponent.vue'
    import BoardInsert from '../views/BoardInsert.vue'
    export default{
    mixins:[pageCalcMixin],
    components:{PagingComponent,BoardInsert},
    data(){
     return {
        boards:{},pageUnit:5,page:{}
     }; 
    },
    created(){
        this.goPage(1);
    },
    methods:{
        async goPage(page){
        let pageUnit =this.pageUnit;
        let result = await axios.get(`/api/board?pageUnit=${pageUnit}&page=${page}`);
        this.boards = result.data.list;
        this.page =this.pageCalc(page,result.data.count,5,pageUnit);
        console.log('vuew',page,'vuew1',result.data.count,'vuew2',5,'vuew3',pageUnit);
    },
    infoForm(no){
        this.$router.push({
                name: 'boardInfo' , query: {no: no}
            });
    }
    }
    }
</script>
<style></style>