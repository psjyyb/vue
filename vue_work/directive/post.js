const template=/*html*/`
<div>
    userId:<input type="text" v-model="post.userId">
    title:<input type="text" v-model="post.title">
    body:<input type="text" v-model="post.body">
    <button @click="addBtn" class="btn btn-info">등록</button>
</div>
<table class="table table-success table-striped table table-hover">
    <thead>
        <tr>
            <th>useId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>   
            <th>삭제</th>       
        </tr>
    </thead>
    <tbody>
        <tr v-for="post in posts">
            <td v-text="post.userId"></td>
            <td v-text="post.id"></td>
            <td v-text="post.title"></td>
            <td v-text="post.body"></td>
            <td><button @click="delBtn(post.id)" class="btn btn-info">삭제</button></td>
        </tr>
    </tbody>
</table>
`;
const url='https://jsonplaceholder.typicode.com/posts';
export default{
    template,
    data(){
        return{posts:[],post:{}}
    },
    created(){
        axios.get(url)
        .then(json => {this.posts=json.data,console.log(json)} )
    },
    methods:{
        addBtn(){
            axios.post(url,this.post)
            .then(json => this.posts.push(json.data))
            //alert(JSON.stringify(this.post));
            //console.log(this.post);
        },
        delBtn(postId){
            axios.delete(`${url}/${postId}`)
            .then(json=> { let data = this.posts.filter(a => a.id != postId)
                this.posts = data;
            })
        }
    }

}