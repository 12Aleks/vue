<template lang="pug">
    section
        .container
            .row
                .col-md-12
                    h2.pt-2 Tasks
                        hr
                .col-md-12
                  .form-group
                    p {{filter}}
                    button.mr-2(@click="filter = 'active'") Active
                    button.mr-2(@click="filter = 'completed'") Completed
                    button.mr-2(@click="filter = 'all'") All
                .col-md-12
                    .task-list
                        .task-item(
                        v-for="(task, index) in tasksFilter"
                        :key="task.id"
                        :class="{completed: task.completed}"
                        )
                            .card
                                .card-body
                                    .card-text.d-flex.align-items-center.justify-content-between.mb-4
                                        .task-item__main-info
                                            span.bg-dark.text-white.pt-2.pb-2.pl-3.pr-3 {{task.whatWatch}}
                                            span.ml-3 Total Time: {{task.time}}
                                        span.close(@click="deleteVidio(index)") &times;
                                    .card-description
                                        input(type="checkbox" v-model="task.completed")
                                        h3.card-title {{task.title}}
                                    .card-body.mt-1
                                        p {{task.description}}
                                    .badge-block.d-inline-flex.pr-1(
                                    v-for="(tag, index) in task.tags"
                                     :key="tag.index")
                                         span.pb-1.badge.badge-pill.badge-dark {{tag.title}}


</template>

<script>
    export default {
        name: "task",
        data(){
          return{
            filter: 'active'
          }
        },
        methods: {
            deleteVidio(index) {
                this.tasks.splice(index, 1)
            },
        },
        computed: {
          // store
          tasksFilter(){
              if(this.filter === 'active'){

              }else if (this.filter === 'completed'){

              }else if (this.filter === 'all'){
                return  this.$store.getters.tasks
              }
                return this.filter === 'active'
          }
        }
    }
</script>

<style lang="stylus" scoped>
    .task-item
        margin-bottom 20px
        &:last-child
            margin-bottom 0
    .card-description
        display flex
        align-items center
    h3
        margin-bottom 0
        text-transform uppercase
        font-size 18px
    input[type='checkbox']
        margin-right 10px
</style>
