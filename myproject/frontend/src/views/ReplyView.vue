<template>
    <div>
        <h1>댓글 보기</h1>
        <table class="table table-success table-striped table table-hover">
            <thead>
                <tr>
                    <th>writer</th>
                    <th>content</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" reply in replys">
                    <td>{{reply.replyer}}</td>
                    <td>{{reply.content}}</td>
                   
                </tr>
            </tbody>
            <PagingComponent v-bind="page" @go-page="goPage"></PagingComponent>
        </table>
        
    </div>
</template>
<script>
  import pageCalcMixin from '../mixin.js'
    import axios from 'axios';
    import PagingComponent from '../components/PagingComponent.vue'
    export default{
    mixins:[pageCalcMixin],
    components:{PagingComponent},
    data(){
     return {
        replys:{},reply:{ content:'',replyer:'',boardno:''},page:{},pageUnit:10
     }; 
    },
    account(){
            return this.$store.state.user.userId
        },
    created(){
        //  axios.get('/api/reply/'+this.$route.query.no)
        //  .then(res=>this.replys=res.data)
        this.goPage(1),
         this.reply.replyer=this.$store.state.user.userId,
         this.reply.boardno=this.$route.query.no
    },
    methods: {
    async addBtn() {
        console.log('sadasdsa', this.reply);
        try {
            await axios.post('/api/reply/', this.reply, {
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json'
                }
            });
            await this.goPage(1);
        } catch (error) {
            console.error(error);
        }
    },
    async delBtn(no) {
        try {
            await axios.delete('/api/reply/' + no);
            await this.goPage(1); // goPage 함수를 삭제 완료 후 호출
        } catch (error) {
            console.error(error);
        }
    },
    async goPage(page) {
        let pageUnit = this.pageUnit;
        try {
            let result = await axios.get(`/api/reply?pageUnit=${pageUnit}&page=${page}&boardno=${this.$route.query.no}`);
            this.replys = result.data.list;
            console.log('board', result);
            this.page = this.pageCalc(page, result.data.count, 5, pageUnit);
        } catch (error) {
            console.error(error);
        }
    }
}
}
</script>
<style></style>