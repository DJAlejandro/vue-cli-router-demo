<template>
    <div class="row mt-5">
        <div class="col-4">
            <div class="list-group">
                <router-link
                    tag="li"
                    class="nav-link"
                    :to="{path: 'first',params: { username: 123 },query: { plan: 'private' }}"
                >
                    <a class="list-group-item list-group-item-action">path-first</a>
                </router-link>
                <router-link
                    tag="li"
                    class="nav-link"
                    :to="{path: '/about/first',params: { username: 123 },query: { plan: 'private' }}"
                >
                    <a class="list-group-item list-group-item-action">path-/first</a>
                </router-link>
                <router-link
                    tag="li"
                    class="nav-link"
                    :to="{name:'second',params: { username: 123 },query: { plan: 'private' }}"
                >
                    <a class="list-group-item list-group-item-action">name-second</a>
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content">
                <div class="tab-pane fade show active">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            name: "fuck"
        };
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        next(vm => {
            // 通过 `vm` 访问组件实例
            alert("组件内的守卫beforeRouteEnter" + vm.name);
        });
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        this.name = to.params.name;
        next();
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        const answer = window.confirm(
            "Do you really want to leave? you have unsaved changes!"
        );
        if (answer) {
            next();
        } else {
            next(false);
        }
    }
};
</script>
