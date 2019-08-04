<template>
    <div id="app">
        <nav class="nav nav-pills nav-fill">
            <router-link
                class="nav-item nav-link active"
                :to="{path:'register',params:{username:123},query: { plan: 'private' }}"
            >register</router-link>
            <router-link
                class="nav-item nav-link"
                :to="{name:'log',params:{username:123},query: { plan: 'private' }}"
            >log</router-link>
            <router-link class="nav-item nav-link" :to="{name:'home'}">home</router-link>
            <router-link
                class="nav-item nav-link"
                :to="{name:'about',params:{username:123},query: { plan: 'private' }}"
            >about</router-link>
        </nav>
        <transition name="slide-fade">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
        </transition>
        <div class="container">
            <div class="row">
                <div class="col">
                    <router-view name="suba"></router-view>
                </div>
                <div class="col">
                    <router-view name="subb"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
/* 进入和离开动画可以分别 */
/* 设置不同的持续时间(duration)和动画函数(timing function) */
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
    transform: translateX(100px);
    opacity: 0;
}
</style>
