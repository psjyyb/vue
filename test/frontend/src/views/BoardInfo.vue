<template>
       
        <div class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">번 호:</label>
    <input type="number" readonly v-model="board.no" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">작성일:</label>
    <input  type="text" readonly :value="board.created_date" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">작성자:</label>
    <div class="input-group has-validation">
      <input  type="text" v-model="board.writer" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">제 목:</label>
    <input  type="text" v-model="board.title" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">내 용:</label>
    <textarea type="text"  v-model="board.content" class="form-control" id="validationCustom05" required>
        </textarea>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <button @click="delBtn()">삭제</button>
        <button @click="modBtn()">수정</button>
        <button @click="listBtn()">목록으로</button>
  </div>

    <span v-if="replys==''">댓글 없음</span>
    <table class="table table-success table-striped table table-hover" v-else>
            <thead>
                <tr>
                    <th>댓글 작성자</th>
                    <th>댓글 내용</th>
                    <th>작성일</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" reply in replys">
                    <td>{{reply.writer}}</td>
                    <td>{{reply.content}}</td>
                    <td>{{reply.created_date}}</td>
                    <td><button @click="replyDelBtn(reply.no)">삭제</button></td>
                </tr>
        </tbody>
    </table>
    <div>
        <input class="form-control form-control-sm" type="text" v-model="reply.content">
        <input  type="text" v-model="reply.writer" readonly >
        <button @click="replyAddBtn">등록</button>
    </div>
            
</template>
<script>
    import axios from 'axios';
    export default{
    data(){
     return {
        board:{},replys:{},reply:{content:'',writer:'user01',bno:0}
     }; 
    },
    created(){
        axios.get('/api/board/' + this.$route.query.no)
        .then(result => {
        console.log('asdsads',result.data); // 응답 데이터 구조 확인
        this.board = result.data[0]; // 객체 전체를 할당
        
        //this.date=result.data.created_date
        console.log(this.board); // 데이터가 정상적으로 할당된 후 출력
    }),
        axios.get('/api/reply/'+this.$route.query.no)
        .then(result=>{console.log(result),this.replys= result.data})
        .catch(err=>console.log(err)),
        this.reply.bno=this.$route.query.no
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
        },
        async replyDelBtn(no) {
            await axios.delete('/api/reply/'+no)
            .then(console.log('삭제..?'))                
      },
      async replyAddBtn(){
        console.log(this.reply),
        await axios.post('/api/reply/', this.reply, {
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json'
            }
            });
      }
    }
    }
</script>
<style></style>