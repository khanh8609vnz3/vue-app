<template>
    <div id="home">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-carousel>
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
                <ClipContainer></ClipContainer>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import ClipContainer from "../components/ClipContainer";

    export default {
        name: "Home",

        components: {ClipContainer},

        data() {
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    }
                ]
            }
        },
    };
</script>

<style scoped>
    .v-carousel {
        height: 200px !important;
        width: 90%;
        margin: 0 auto;
    }
</style>
