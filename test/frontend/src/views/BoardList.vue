<template>
<div id="layoutSidenav">
              <SideVar></SideVar>
                <div id="layoutSidenav_content">
                    <main>  
                        <div class="row">
                            <div class="col-md 12 col-lg-7 border p-10">
                                <h1>게시판</h1>
                                <table class="table table-success table-striped table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>제목</th>
                                            <th>작성자</th>
                                            <th>작성일자</th>
                                            <th>댓글 수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for=" board in boards"  @click="infoForm(board.no)">
                                            <td>{{board.no }}</td>
                                            <td>{{board.title}}</td>
                                            <td>{{board.writer}}</td>
                                            <td>{{board.created_date}}</td>
                                            <td>{{board.cnt}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>          
                    </main>
                </div>
            </div>
</template>
<script>
  import axios from 'axios';
  import SideVar from '@/components/SideVar.vue';
    export default{
        components: {
            SideVar
    },
    data(){
     return {
        boards:{},replys:{}
    }
    },
    created(){
        axios.get('/api/board')
        .then(result=>this.boards = result.data)
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