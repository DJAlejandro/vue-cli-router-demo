<template>
    <div>
        <button type="button" class="btn btn-danger" @click="goA">suba</button>
        <button type="button" class="btn btn-info" @click="toggleShow">{{isLogin ? "退出" : "登录"}}</button>
        <button
            type="button"
            class="btn btn-info"
            @click="toggleShowActions"
        >{{isLogin ? "退出" : "登录"}}</button>
        <div>{{isLogin}}</div>
        <ul>
            <li v-for="rating in doneRatings">{{rating.username}} + {{rating.rateType}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

const username = "123";

export default {
    data() {
        return {
            count: 0
        };
    },
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
        ...mapMutations([
            "toggleShow" // 将 `this.toggleShow()` 映射为 `this.$store.commit('toggleShow')`
        ]),
        ...mapActions([
            "toggleShowActions" // 将 `this.toggleShowActions()` 映射为 `this.$store.dispatch('toggleShowActions')`
        ])
    },
    computed: {
        allCount() {
            return this.count + 1;
        },
        ...mapState({
            //这里的...不是省略号了,是对象扩展符
            isLogin: "isLogin",
            ratings: "ratings"
        }),
        ...mapGetters([
            "doneRatings"
            // ...
        ])
    }
};
</script>