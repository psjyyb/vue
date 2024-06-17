<template>
    <div>
        <div>제 목:<input type="text" v-model="board.title"></div>
        <div>작성자:<input type="text" v-model="board.writer"></div>
        <div>내 용:<textarea type="text" v-model="board.content"></textarea></div>
        <button @click="addBtn">등록</button>
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
    },
    methods:{
        async addBtn(){
           await axios.post('/api/board/',this.board,{
            headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json'
                }
           })
            .then(this.$router.push('/board'))
            .catch(err=>console.log(err))
        }
    }
    }
</script>
<style></style>