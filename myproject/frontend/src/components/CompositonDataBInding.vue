<template>
    <div>
       <input v-model="num1"> + <input v-model="num2"> = <span>{{result }}</span>
       <div>마우스 위치 :{{ x }}, {{ y }}</div>
    </div>
</template>
<script setup>
import {plusCalculator} from '../common.js'
import {useMouse} from '../mouse.js'

const { x, y } = useMouse()
let {num1,num2,result} = plusCalculator();
</script>
<style></style>