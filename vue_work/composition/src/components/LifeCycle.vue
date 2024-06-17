<template>
    <div>lifeCycle</div>
</template>
<script setup>
    import { onMounted,onUpdated } from 'vue';
   onMounted(() => console.log('onMounted'))
   onUpdated(() => console.log('onUpdated'))

   // created 훅에 해당
   console.log('created')
</script>
