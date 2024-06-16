<template>
        <div class="row">
        <div class="col-md 12 col-lg-10 border p-3">
             <h1>게시판 상세보기</h1>
        <div>번 호:<input type="number" readonly v-model="board.no"></div>
        <div>제 목:<input type="text" v-model="board.title"></div>
        <div>작성자:<input type="text" v-model="board.writer"></div>
        <div>내 용:<input type="text" v-model="board.content"></div>
       
        <button v-if="account" @click="modBtn">수정</button>
        <button v-if="account" @click="delBtn">삭제</button>
        <button @click="canBtn">목록으로</button>
        </div>
        <div class="col-md 12 col-lg-10  border">
            <ReplyView></ReplyView>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import ReplyView from '../views/ReplyView.vue'
    export default{
    components:{
        ReplyView
    },
    computed:{
        account(){
            return this.$store.state.user.userId
        }
    },
    data(){
     return {
        board:{},file:'',boards:{},
     }; 
    },
    created(){
        // let upa = async axios.get('/api/uploads')
        //          .then(res=>console.log(res))
        
        // axios.get('/api/uploads/')
        // .then(res=>console.log('resuslt:',res))
        // .catch(err=>console.log(err))
        // ,
        axios.get('/api/board/' + this.$route.query.no)
        .then(json => {this.board = json.data[0]})
    //     axios.get('/api/img/' + this.$route.query.no)
    //     .then(json =>this.file=json.data)
        
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
        },
    }
 }
</script>
<style></style>