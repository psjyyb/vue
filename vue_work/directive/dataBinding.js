const template = /*html*/`
<!-- v-text,v-html 텍스트내용 바인딩-->

<div>{{htmlString}}</div>
<div v-text="htmlString"></div>
<div v-html="htmlString"></div>
    <!-- v-model폼필드(input) 바인딩-->

    <input type="text" class="form-control mb-3" v-model.trim="memInfo.valueModel">
    <input type="number"class="form-control mb-3" v-model.number="memInfo.score">
    <textarea class="form-control mb-3" v-model.trim.lazy="memInfo.memo"></textarea>
    <select v-model="memInfo.city" class="form-control mb-3" >
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
    </select>
    <div class="form-check">
        <label class="form-check-label">서울</label>
        <input type="checkbox" class="form-check-input" value="02" v-model="memInfo.mainYn">
    </div>
    <div class="form-check">
        <label class="form-check-label"><input type="checkbox" class="form-check-input" value="21" v-model="memInfo.mainYn">부산</label>
    </div>
    <div class="form-check  mb-3">
        <label class="form-check-label"><input type="checkbox" class="form-check-input" value="064" v-model="memInfo.mainYn">제주</label>
    </div>

    <div class="form-check">
    <label class="form-check-label"><input type="radio" class="form-check-input" value="02" v-model="memInfo.picked">서울</label>   
    </div>
    <div class="form-check">
    <label class="form-check-label"><input type="radio" class="form-check-input" value="21" v-model="memInfo.picked">부산</label>
    </div>
    <div class="form-check  mb-3">
    <label class="form-check-label"><input type="radio" class="form-check-input" value="064" v-model="memInfo.picked">제주</label>
    </div>
    <button type="button" class="btn btn-info" v-bind:disabled="memInfo.valueModel==''">등록</button>

    <!-- v-bind  태그 속성 바인딩-->
    <img v-bind:src="memInfo.profile" style="width:200px">

    <!-- 클래스 바인딩-->
    <div class="container mb-3" v-bind:class="{'active':isActive,'text-red':hasError}">클래스 바인딩</div> 
    <div class="container mb-3" v-bind:class="[activeClass,errorClass]">클래스 배열 바인딩</div> 
    <div class="container mb-3" v-bind:style="styleObject">인라인 스타일 바인딩</div> 

    <p>{{memInfo}}</p>


`;

export default{
    template,
    data(){return {htmlString:/*html*/'<p style="color:red;">this is a red String.<p>'
                  ,memInfo:{valueModel:'', 
                  score:12 ,
                  memo:'메모작성',
                  city:'21',
                  mainYn:["02","21"],
                  picked:"02",
                  profile:"profile.jpg", 
                },
                isActive:true,
                hasError:true,
                activeClass : 'active',
                errorClass : 'text-red',
                styleObject : { color: 'red',fornSize:'13px'}
                  
}
},
    methods:{}
}