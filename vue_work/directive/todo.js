import heade from './header.js';
import foote from './footer.js';
import todo from './todo_list.js';
const { createApp }=Vue;
const template=/*html*/`
                <div>
                    <heade/>
                    <todo/>
                    <foote/>
                </div>`;

const component={
    template,
    components:{heade,foote,todo},
    data(){
        return{}
    },
    methods:{
    },
    create(){
    },
    mounted(){
    }
}
createApp(component).mount('#app')