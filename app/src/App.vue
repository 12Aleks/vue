<template lang="pug" id="app">
  section.body
   section.bg-light
    div.container
     div.row
      .col-lg-12
       nav.navbar.navbar-expand-lg.navbar-light.bg-light
            router-link.navbar-brand(to="/")
             img(src="./assets/logo.png")
            button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
             span.navbar-toggler-icon
            #navbarNav.collapse.navbar-collapse.justify-content-end
             ul.navbar-nav
              li.nav-item(
                v-for="links in headerMenu"
                :key="links.title")
                router-link.nav-link(:to="`${links.link}`") {{links.title}}
   router-view/
   footer.mt-3.bd-footer.text-muted
      ul.bd-footer-links
       li(
       v-for="links in  headerMenu"
       :key="links.title")
        router-link.nav-link.text-white(:to="`${links.link}`") {{links.title}}
</template>

<script>
export default {
  name: 'App',
    data(){
      return{
          headerMenu: [
              {link: '/', title: 'Home'},
              {link: '/tasks', title: 'Task'},
              {link: '/login', title: 'Login'},
              {link: '/registration', title: 'Registration'},
          ]
      }
    }
}
</script>

<style lang="stylus">
    .navbar-brand
      padding-left 10%
     img
      width 30px
      height auto
    footer
      width 100%
      height 40px
      background-color #2c3e50
      display block
     ul.bd-footer-links
       display flex !important
       align-items center
       justify-content center
       list-style-type none
      a
       text-decoration none

</style>
