const template=/*html*/`
<div>
  <h1> home 페이지</h1>
  <button @click="gotoUser">사용자 홈으로 이동</button>
</div>
`
export default{
    template,
    methods:{
        gotoUser(){
            //this.$router.push('/user')
            this.$router.push({name:'kim',params:{id:'park'}})
        }
    }
}