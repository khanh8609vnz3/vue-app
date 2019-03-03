<template>
    <div class="home">
        <!--<div id="get-tasks">-->
        <!--<form @submit.prevent="addTask">-->
        <!--<input class="form-control"-->
        <!--:value="newTask"-->
        <!--@change="getTask"-->
        <!--placeholder="I need to...">-->
        <!--<br>-->
        <!--<button type="submit" class="btn btn-primary">-->
        <!--<i class="fa fa-plus"></i> New Task-->
        <!--</button>-->
        <!--</form>-->
        <!--</div>-->
        <div class="stick">
            <!-- <button id="test-prev">Prev</button> -->
            <slick ref="slick" :options="slickOptions">
                <a v-for="(img,index) in listImg" v-bind:key="index" :href="img">
                    <img src="http://placehold.it/320x120" alt="">
                </a>
            </slick>
            <!-- <button id="test-next">Next</button> -->
        </div>
    </div>
</template>

<script>

    import Slick from 'vue-slick';

    export default {
        name: "home",
        components: {
            Slick
        },

        data() {
            return {
                listImg: ['a', 'b', 'c', 'd'],
                slickOptions: {
                    slidesToShow: 3,
                    // prevArrow: '<i class="fa fa-arrow-right"></i>',
                    // nextArrow: '<i class="fa fa-arrow-right"></i>',
                },
                home: this.$route.query,
                newTask: this.$store.state.newTask
            };
        },

        mounted() {

        },

        methods: {

            next() {
                this.$refs.slick.next()
            },
            prev() {
                this.$refs.slick.prev()
            },
            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$refs.slick.reSlick()
            },

            // addTask(e) {
            //     // e.preventDefault();
            //     // this.$store.dispatch('addTask')
            //     // this.$store.dispatch('clearTask')
            // },

            getTask(e) {
                this.$store.dispatch('getTask', e.target.value)
            },
        }
    };
</script>

<style>
</style>
