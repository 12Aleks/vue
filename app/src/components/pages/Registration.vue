<template lang="pug">
   .container
    .row
     .col-md-12
       h2.pt-2 Registration
       hr
       .form
         .form-check-inline
           label Film
           input(type='radio' value='film' v-model="test" name="test")
         .form-check-inline
           label Serial
           input(type='radio' value='serial' v-model="test" name="test")
       .block_test(v-if="test === 'film' ")
         p {{test}}
       .block_test(v-else-if="test === 'serial'")
         p {{test}}
</template>

<script>
    export default {
        name: "Registration",
        data(){
          return{
            test: '',
          }
        }
    }
</script>

<style scoped lang="stylus">

</style>
