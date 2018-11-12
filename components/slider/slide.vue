<script>
import all from '~/components/slides';

export default {
	components: all,
	props: {
		slide: {
			type: Object,
			default: () => {}
		},
		slideIndex: {
			type: Number,
			default: () => {}
		},
		sliderType: {
			type: String,
			default: () => {}
		}
	},
	render: function(createElement) {
		let Tag = this.sliderType;
		return createElement(Tag, {
			props: {
				data: this.slide,
				item: this.slideIndex
			}
		});
	}
};
</script>
