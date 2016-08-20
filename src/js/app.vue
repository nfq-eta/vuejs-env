<template>
    <div>
        <header-component></header-component>
        <div>This is template body.</div>
        <router-view></router-view>
        <other-component></other-component>
    </div>
</template>
<style>
    body{
        background-color: #e7eee6;
    }
</style>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent
        }
    }
</script>
