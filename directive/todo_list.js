const template=/*html*/`
<div>
    userId:<input type="text" v-model="todo.userId">
    id:<input type="text" v-model="todo.id">
    title:<input type="text" v-model="todo.title">
    <button class="btn btn-success" @click="addBtn">등록</button>
</div>
<div>
    검색:<input type="text" v-model="search">
    <button @click="searchBtn(search)" class="btn btn-warning">조회</button>
</div>
<table class="table table-success table-striped table table-hover">
    <thead>
        <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>   
            <th>삭제</th>  
            <th>수정</th>     
        </tr>
    </thead>
    <tbody>
        <tr v-for="todo in todos">
            <td v-text="todo.userId"></td>
            <td v-text="todo.id"></td>
            <td v-text="todo.title"></td>
            <td v-text="todo.completed"></td>
            <td><button @click="delBtn(todo.id)" class="btn btn-info" v-bind:disabled="!todo.completed">삭제</button></td>
            <td><button @click="modBtn(todo)" class="btn btn-light">수정</button></td>
        </tr>
    </tbody>
</table>
`;
const url='https://jsonplaceholder.typicode.com/todos';
export default{
    template,
    data(){
        return{ todos:[],todo:{},search:""}
    },
    created(){
        axios.get(url)
        .then(json=>{this.todos=json.data})
    },
    methods:{
        addBtn(){
            axios.post(url,this.todo)
            .then(json=> this.todos.push(json.data))
        },
        delBtn(todoId){
            axios.delete(`${url}/${todoId}`)
            .then(json=>{let data = this.todos.filter(a=> a.id!=todoId)
                this.todos=data;
            })
        },
        searchBtn(title){
        let search = this.todos;
        let result = search.filter((a)=>a.title.indexOf(title)!=-1)
            this.todos=result;
            
        },
        modBtn(com){
            if(com.completed){
                com.completed=false;
            }else{
                com.completed=true;
            }
            
    }
    }
}