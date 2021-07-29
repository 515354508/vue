<template>
    <div class="home">
        <Login></Login>
    </div>
</template>
<script>
import Login from '@/components/Login'
export default {
    name:'Home',
    components:{
        Login
    }
}
</script>
<style  scoped>
.home{
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    background-image:url('../assets/bg.png');
}
</style>