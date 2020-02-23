<template lang="pug">
    section.home
        section
        .container
            .row
                .col-md-12
                    h2.pt-2 Home
                    hr
                    form
                        .form-group
                            input.w-50(
                            type="text"
                            placeholder='What we will watch?'
                            v-model="taskTitle"
                            )
                    .form-group
                        textarea.w-50(
                        v-model="taskDescription"
                        )
                    .form-group
                        .form-check.form-check-inline
                            input#inlineRadio1.form-check-input(type='radio' name='inline' value='Film' v-model="whatWatch")
                            label.form-check-label(for='inlineRadio1') Film
                        .form-check.form-check-inline
                            input#inlineRadio2.form-check-input(type='radio' name='inline' value='Serial' v-model='whatWatch')
                            label.form-check-label(for='inlineRadio2') Serial
                    .total_time
                        .totla_time__film(
                        v-if='whatWatch === "Film"'
                        )
                            .fotm-group
                                label.time-title Minutes
                                input.time-input.form-control.w-25(
                                type="number"
                                v-model.number="filmMinutes"
                                )
                            .fotm-groupv
                                label.time-title Hours
                                input.time-input.form-control.w-25(
                                type="number"
                                v-model.number="filmHours"
                                )
                            p.pt-3 {{filmTime}}

                        .total_time__serials(
                        v-else-if="whatWatch === 'Serial'"
                        )
                            .fotm-group
                                label.time-title How many season?
                                input.time-input.form-control.w-25(
                                type="number"
                                v-model.number="serialSeason"
                                )
                            .fotm-groupv
                                label.time-title How many series?
                                input.time-input.form-control.w-25(
                                type="number"
                                v-model.number="serialSeries"
                                )
                            .fotm-groupv
                                label.time-title How long is one series?(minutes)
                                input.time-input.form-control.w-25(
                                type="number"
                                v-model.number="serialSeriesMinutes"
                                )
                            p.pt-3 {{serialTime}}

                    input.mb-3.mt-3(type='submit' value="Add new film" v-on:click="newTask")
                    hr
                    .form-group
                     input(type="text" v-model="newTag")
                     input.ml-2(type='submit' value="Add new tag" @click="addTag")
                    .badge-block.d-inline-flex.pr-1(
                      v-for="(tag, index) in tags"
                      :key="tag.title")
                        span.badge.badge-pill.badge-success(@click="deleteTags(index)") {{tag.title}} &times;



</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                newTag: '',
                tags: [
                    {title: 'Comedy', usb: false},
                    {title: 'Western', usb: false},
                    {title: 'Adventure', usb: false},
                ],
                taskTitle: "",
                taskId: 3,
                taskDescription: '',
                whatWatch: '',

                //total Time
                //Film
                filmHours: 1,
                filmMinutes: 30,

                //Serial
                serialSeason: 1,
                serialSeries: 11,
                serialSeriesMinutes: 40,

            }
        },
        methods: {
            newTask() {
                if (this.taskTitle === '') {
                    return
                }
                const task = ({
                    id: ++this.taskId,
                    title: this.taskTitle,
                    description: this.taskDescription,
                    whatWatch: this.whatWatch,
                    completed: false,
                    editing: false,
                });
                console.log(task);

                this.taskTitle = '';
                this.taskDescription = ''
            },
            getHoursAndMinuts(minutes){
                let hours = Math.trunc(minutes / 60);
                let min = minutes % 60;
                return hours + 'Hour' + min + 'Minutes'
            },
            addTag(){
                this.tags.push({title: this.newTag, usb: false})
            },
            deleteTags(index) {
                this.tags.splice(index, 1)
            },
            
        },
        computed: {
            filmTime(){
                let min = (this.filmHours * 60) + this.filmMinutes;
                return this.getHoursAndMinuts(min)
            },
            serialTime(){
                let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
                return this.getHoursAndMinuts(min)
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">


</style>
