<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer width="250" fixed clipped v-model="drawer" app>
                <Sidebar></Sidebar>
            </v-navigation-drawer>
            <v-toolbar dense fixed clipped-left app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-icon class="mx-3">fa-youtube</v-icon>
                <v-toolbar-title class="mr-5 align-center">
                    <span class="title">Youtube</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-layout row align-center style="max-width: 650px">
                    <v-text-field
                            placeholder="Search..."
                            single-line
                            append-icon="search"
                            @click:append="() => {}"
                            color="white"
                            hide-details
                    ></v-text-field>
                </v-layout>
            </v-toolbar>
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-app>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>

<script>
    import Sidebar from "./components/Sidebar";

    export default {
        name: "App",
        components: {Sidebar},
        data() {
            return {
                drawer: true
            };
        }
    };
</script>
