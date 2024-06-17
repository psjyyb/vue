<template>
    <div>      
       <div>번 호:<input type="number" readonly v-model="board.no"></div>
        <div>제 목:<input type="text" v-model="board.title"></div>
        <div>작성자:<input type="text" v-model="board.writer"></div>
        <div>내 용:<textarea type="text" v-model="board.content"></textarea></div>
        <button @click="delBtn()">삭제</button>
        <button @click="modBtn()">수정</button>
        <button @click="listBtn()">목록으로</button>
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
        .then(result => {
        console.log(result.data); // 응답 데이터 구조 확인
        this.board = result.data[0]; // 객체 전체를 할당
        console.log(this.board); // 데이터가 정상적으로 할당된 후 출력
    })
    },
    methods:{
        delBtn(){
            axios.delete('/api/board/'+this.board.no)
            .then(this.$router.push('/board'))
            .catch(err=>console.log(err))
        },
        modBtn(){
            axios.put('/api/board/'+this.board.no,this.board)
            .then(this.$router.push('/board'))
            .catch(err=>console.log(err))
        },
        listBtn(){
            this.$router.push('/board')
        }
    }
    }
</script>
<style></style>