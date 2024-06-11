const template=/*html*/`
<select v-model="selValue" class="form-control mb-3" v-on:change="changeSelect">
  <option value="1">도시선택</option>
  <option v-for="city in cities" v-bind:value="city.value">{{city.text}}</option>
</select>
<input type="text" @keyup.down="doSomeing" v-model="firstName">
<input type="text" @click.ctrl="doSomeing" v-model="lastName">
<div>watch: {{fullName}}</div>
<div>computed: {{computedFullName}}</div>
`;

export default{
    template,
    data(){return{
        selValue:'1',
        cities:[{value:"02",text:"서울"},
               {value:"21",text:"부산"},
               {value:"064",text:"제주"},
               {value:"053",text:"대구"},
               {value:"032",text:"광주"}
        ],
        firstName:"길동",
        lastName:"징",
        fullName:''
    }
    },
    computed:{
      computedFullName(){
        return this.firstName+" "+this.lastName
      }
    },
    watch:{
      firstName(){this.fullName=this.firstName+" "+this.lastName},
      lastName(){this.fullName=this.firstName+" "+this.lastName}
    },
    methods:{
      changeSelect(){
        const result = this.cities.find(a=> a.value==this.selValue);
        alert(result.text) 
        //alert(this.selValue)       
      },
      doSomeing(){
          alert('엔터')
      }
    }
}