<template>
    <div class="login-wrap">
        <h1>ITURING</h1>
        <div class="login-box">
            <Input type="text" placeholder="用户名" v-model="data.username"/>
            <Input type="password" placeholder="密码" v-model="data.password"/>
            <Button @click="handleClick">登陆</Button>
        </div>
    </div>
</template>

<script setup>
    import { reactive, inject } from "vue";
    import { useRouter, useRoute } from 'vue-router';
    import Button from "../components/button.vue";
    import Input from "../components/input.vue";

    const data = reactive({
        username: '',
        password: '',
    });

    const httpOk = inject('httpOk');
    const rsaEncrypt = inject('rsaEncrypt');

    const router = useRouter();

    const handleClick = (e) => {
        httpOk({
            url: 'LOGIN',
            data: {
                username: rsaEncrypt(data.username),
                password: rsaEncrypt(data.password)
            }
        }).then(res=>{
            console.log(res);
            router.replace({path: '/home'});
        })
    }
</script>


<style scoped>
.login-wrap{
    background: #f0f2f5;
    height: inherit;
    text-align: center;
    padding-top: 100px;
}
h1 {
    color: #00457a;
}
.login-box{
    padding: 20px;
    width: 396px;
    height: 396px;
    background: #fff;
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
}
.login-box > div{
    margin-top: 20px;
}
</style>