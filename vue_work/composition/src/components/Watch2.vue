<template>
    <div>
        <input v-model="re.num1">
        <input v-model="re.num2">
        <div>{{re.result}}</div>
    </div>
</template>
<script setup>
    import { reactive,watch } from 'vue';
    let re = reactive({num1:0,num2:0,result:0})
    watch(re,(newNum,old) => re.result=Number(newNum.num1)+Number(newNum.num2))
    //watch(re,(newNum,old) => re.result=newNum+re.num1)
</script>
