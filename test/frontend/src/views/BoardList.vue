<template>
    <div class="row">
        <router-link to="/boardInsert">등록</router-link>
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
                <tr v-for=" board in boards"  @click="infoForm(board.no)">
                    <td>{{board.no }}</td>
                    <td>{{board.title}}</td>
                    <td>{{board.writer}}</td>
                    <td>{{board.content}}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
</template>
<script>
  import axios from 'axios';
    export default{
    data(){
     return {
        boards:{}
    }
    },
    created(){
        axios.get('/api/board')
        .then(result=> this.boards=result.data)
        .catch(err=>console.log(err))
    },
    methods:{
        infoForm(no){
        this.$router.push({
                name: 'boardInfo', query: {no: no}
            });
    }
    }
    }
</script>
<style></style>