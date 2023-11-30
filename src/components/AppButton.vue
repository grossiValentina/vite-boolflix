<script>

export default {
    
    emits: ["btnClick"]
   
}



</script>

<template>

    <div class="container">
        
            <button @click="$emit(`btnClick`)" type="button" class="btn btn-dark">Cerca</button>
        
    </div>

</template>

<style scoped lang="scss"></style>