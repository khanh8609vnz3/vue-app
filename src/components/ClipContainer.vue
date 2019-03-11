<template>
    <div id="clip-container">
        <div class="row">
            <b-tabs no-fade content-class="mt-3">
                <b-tab title="first" active v-on:click="currentTab='Clip'">
                    <keep-alive>
                        <Clip v-if="currentTab==='Clip'"></Clip>
                    </keep-alive>
                </b-tab>
                <b-tab title="second" v-on:click="currentTab='About'">
                    <keep-alive>
                        <About v-if="currentTab==='About'"></About>
                    </keep-alive>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
    import About from "../views/About";
    import Clip from "./details/Clip"

    export default {
        name: "ClipContainer",

        components: {
            Clip,
            About
        },

        data() {
            return {
                currentTab: 'Clip'
            }
        },

        methods: {},
    }
</script>

<style scoped>

</style>
