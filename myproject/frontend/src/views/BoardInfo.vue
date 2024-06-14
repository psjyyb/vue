<template>
        <h1>게시판 상세보기</h1>
        <div class="row">
            <div class="col-md 12 col-lg-7 border p-3">
        <div>번 호:<input type="number" readonly v-model="board.no"></div>
        <div>제 목:<input type="text" v-model="board.title"></div>
        <div>작성자:<input type="text" v-model="board.writer"></div>
        <div>내 용:<input type="text" v-model="board.content"></div>
        <button @click="modBtn">수정</button>
        <button @click="delBtn">삭제</button>
        <button @click="canBtn">목록으로</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
    data(){
     return {
        board:{}
     }; 
    },
    created(){
        axios.get('/api/board/' + this.$route.query.no)
        .then(json => this.board = json.data[0])
    },
    methods:{
        modBtn(){
            axios.put('/api/board/'+this.board.no,this.board)
            .then(this.$router.push('/boardView'))
        },
        delBtn(){
            axios.delete('/api/board/'+this.board.no)
            .then(this.$router.push('/boardView'))
        },
        canBtn(){
            this.$router.push('/boardView')
        }
    }
    }
</script>
<style></style>