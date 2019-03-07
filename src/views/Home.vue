<template>
	<div class="home">
		<slick ref="slick" :options="slickOptions">
			<div v-for="(img,index) in listImg" v-bind:key="index">
				<h3>{{img}}</h3>
			</div>
		</slick>
	</div>
</template>

<script>
import Slick from "vue-slick";

export default {
	name: "home",
	components: {
		Slick
	},

	data() {
		return {
			listImg: ["Portal", "Container", "IaaS", "Object Storage"],
			slickOptions: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				centerMode: true,
				arrows: true
			},
			home: this.$route.query,
		};
	},

	mounted() {},

	methods: {
	}
};
</script>

<style>
@import "../../node_modules/slick-carousel/slick/slick.css";
@import "../../node_modules/slick-carousel/slick/slick-theme.css";

.slick-prev:before,
.slick-next:before {
	color: blue;
}

.home {
	width: 1000px;
	margin: 0 auto;
}
h3 {
	background: orange;
	color: black;
    font-size: 14px;
    font-weight: normal;
	line-height: 100px;
	margin: 10px;
	padding: 2%;
	position: relative;
	text-align: center;
}
</style>
