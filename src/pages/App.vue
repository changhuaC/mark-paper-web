<template>
    <div class="main-container"  id="main-container">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
<style lang="scss" scoped>
.main-container{
    box-sizing: border-box ;
    height: 100%;
}
    
</style>