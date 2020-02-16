<template lang="pug">
    .container
        .row
            .col-md-12
                h2.pt-2 Login
                hr
                .dox_wrapper
                 input(type="button" value="Animation" v-on:click="clicks")
                 transition(name="test")
                  img.localImg(src="@/assets/logo.png" v-show="good" )

</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                good: true
            }
        },
        methods: {
            clicks() {
                this.good = !this.good
            }
        }
    }
</script>

<style scoped lang="stylus">
 .localImg
    width 200px
    height auto
 .dox_wrapper
    height 300px
    width 100%
 .test-enter-active
    transition opacity 2s
 .test-leave-active
    transition all 2s cubic-bezier(1.0, 0.5, 0.6, 1.0)
 .test-enter, .test-leave-to
    transform translateX(20px)
    opacity 0
 .test-enter-to, .test-leave
    opacity 0.5
</style>