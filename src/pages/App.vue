<template>
    <div class="main-container"  id="main-container">
        <div class="index-title">
            <div class="regist">下载</div>
        </div>
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
    .index-title{
        width: 100%;
        height: 60px;
        background-color: rgb(214, 243, 233);
        opacity: 0.5;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 500;
        vertical-align:bottom;
        .regist{
            margin-top: 20px;
            margin-right: 10px;
            float: right;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color:#007fff;
            font-size: 1.33rem;
        }
    }
}
    
</style>