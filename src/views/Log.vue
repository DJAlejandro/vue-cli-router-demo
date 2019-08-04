<template>
    <div>
        <button type="button" class="btn btn-danger" @click="goA">suba</button>
        <button
            type="button"
            class="btn btn-info"
            @click="toggleShow"
        >{{this.$store.state.isLogin ? "退出" : "登录"}}</button>
        <router-view></router-view>
    </div>
</template>
<script>
const username = "123";

export default {
    methods: {
        goA() {
            // this.$router.push("suba"); // -> http://localhost:8080/about/suba
            // this.$router.replace("suba"); // -> http://localhost:8080/about/suba
            // this.$router.push("/suba"); // -> http://localhost:8080/suba
            // this.$router.push({ path: "suba" }); //http://localhost:8080/about/suba
            // this.$router.push({ path: "/suba" }); //http://localhost:8080/suba
            // this.$router.push({
            //     path: "suba",
            //     params: { username },
            //     query: { plan: "private" }
            // }); // -> http://localhost:8080/about/suba?plan=private
            // this.$router.push({
            //     path: "/suba",
            //     params: { username },
            //     query: { plan: "private" }
            // }); // -> http://localhost:8080/suba?plan=private
            // this.$router.push({ path: `/suba/${username}` }); // -> http://localhost:8082/suba/123
            // this.$router.push({ path: `suba/${username}` }); // -> http://localhost:8082/about/suba/123
            /* 命名路由 */
            this.$router.push({ name: "suba", params: { username } }); // -> http://localhost:8080/about/suba
            /* router.js中的path为'/suba',得到的是根路径'/suba'*/
            // this.$router.push({ name: "suba", params: { username } }); // -> http://localhost:8080/suba
            /*   router.js中的path: '/about/:username' */
            // this.$router.push({ name: "suba", params: { username } }); // -> http://localhost:8080/about/123/suba
        },
        goBack() {
            this.$router.go(-1);
        },
        toggleShow() {
            this.$store.commit("toggleShow");
        }
    }
};
</script>