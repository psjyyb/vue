<template>
    {{ state.nested.count }}
    {{ state.arr[0] }}
    <button @click="plus">증가</button>
    <button @click="minus">감소</button>
</template>
<script setup>
    import {reactive} from 'vue'
    let state = reactive({
                        nested: { count: 0 },
                        arr: ['foo', 'bar']
                        })
    function plus (){
        state.nested.count++;
    }
    const minus = (()=>state.nested.count--)
</script>