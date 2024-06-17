<template>
    <hr>
    <input v-model="firstName">
    <input v-model="lastName">
    <div> ref기본타입 : {{ fullName }}</div>
    <input v-model="name.firstName">
    <input v-model="name.lastName">
    <div> ref객체타입:{{ fullName2 }}</div>
    <input v-model="reactiveName.firstName">
    <input v-model="reactiveName.lastName">
    <div> reactive:{{ fullName3 }}</div>
</template>
<script setup>
    import {ref,computed,reactive} from 'vue';
    let firstName = ref("hong")
    let lastName = ref("man");
    let name = ref({firstName:'최',lastName:'홍만'})
    let fullName = computed(()=>{
                        return firstName.value+' '+lastName.value
                        })
    let fullName2 = computed(()=>name.value.firstName + ' ' + name.value.lastName)
    let reactiveName = reactive({firstName:'김',lastName:'만지'})
    let fullName3 = computed(()=>reactiveName.firstName + ' ' + reactiveName.lastName)

</script>