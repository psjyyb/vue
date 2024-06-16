<template>
    <div>
        <h1>게시판 등록</h1>
        <div>제목<input class="form-control form-control-sm" type="text" v-model="board.title"></div>
        <div>작성자<input class="form-control form-control-sm" type="text" v-model="board.writer"></div>
        <div>내용<textarea class="form-control form-control-sm" type="text" v-model="board.content"></textarea></div>
        <div>사진<input class="form-control form-control-sm" v-on:change="handleFileChange"type="file" ref="file"></div>
        <button v-if="account" @click="addBtn">등록</button>
  </div>
</template>
<script>
    import axios from 'axios';
    export default{
    data(){
     return {
        board:{},file:''
     }; 
    },
    computed:{
        account(){
            return this.$store.state.user.userId
        }
    },
    created(){
    },
    methods:{
        addBtn(){ // 이미지 파일 같이 등록
            let formData = new FormData();
            formData.append('avatar',this.file)
            formData.append('title',this.board.title)
            formData.append('writer',this.board.writer)
            formData.append('content',this.board.content)
            console.log('board',this.board,'file',this.file)
            axios.post('/api/board',formData,
            { headers:{'Content-Type':'multipart/form-data'}})
            this.$emit('go-page',1);
        },
        handleFileChange(){
            this.file=this.$refs.file.files[0];
        }
    },
    }
</script>
<style></style>           
