import heade from './header.js';
import foote from './footer.js';

import router from './router.js';
const template =/*html*/` <div>
                            <heade/>
                            <RouterView />
                            <foote/>
                         </div>`
// vue 인스턴스 생성
const component = {
    template,
    name: "묘듈연습",
    components:{heade,foote},
    data(){ return { name:'홍길동',msg:'안녕하세요'} },
    methods :{
        funca(){},
    },
    created(){  },
    mounted(){  },
    computed : {  
        fullname(){},
    }
}
const { createApp } =Vue;
createApp(component).use(router).mount('#app')