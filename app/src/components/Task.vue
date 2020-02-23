<template lang="pug">
    section
        .container
            .row
                .col-md-12
                    h2.pt-2 Tasks
                        hr
                .col-md-12
                    .task-list
                        .task-item(
                        v-for="(task, index) in tasks"
                        :key="task.id"
                        :class="{completed: task.completed}"
                        )
                            .card
                                .card-body
                                    .card-text.d-flex.align-items-center.justify-content-between.mb-4
                                        .task-item__main-info
                                            span.bg-dark.text-white.pt-2.pb-2.pl-3.pr-3 {{task.whatWatch}}
                                            span.ml-3 Total Time:
                                        span.close(@click="deleteVidio(index)") &times;
                                    .card-description
                                        input(type="checkbox" v-model="task.completed")
                                        h3.card-title {{task.title}}
                                    .card-body.mt-1
                                        p {{task.description}}

</template>

<script>
    export default {
        name: "task",
        data() {
            return {
                test: task,
                tasks: [
                    {
                        'id': 1,
                        'title': 'GrowthBasters: Hooked on Growth',
                        'description': 'Donec semper pharetra sem sit amet mattis. Morbi efficitur placerat mi, eu consectetur urna finibus sit amet. Duis auctor lacinia augue, vel condimentum nisl auctor vel. Suspendisse aliquet eros at nulla commodo, id pharetra est maximus. Aliquam vel nulla at sem luctus congue. Vestibulum euismod, leo id gravida posuere, urna turpis pellentesque eros, posuere facilisis metus felis vel mauris. Morbi porta turpis ac pellentesque eleifend. Quisque nec lacinia dolor.',
                        'whatWatch': 'Film',
                        'completed': false,
                        'editing': false,
                    },
                    {
                        'id': 2,
                        'title': 'Game of thrones',
                        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat nibh eu nulla feugiat efficitur nec eget enim. Vivamus pharetra egestas libero sed interdum. ',
                        'whatWatch': 'Serial',
                        'completed': false,
                        'editing': false,
                    }
                ]
            }
        },
        methods: {
            deleteVidio(index) {
                this.tasks.splice(index, 1)
            },
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