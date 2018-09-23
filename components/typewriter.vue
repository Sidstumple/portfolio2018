<template>
	<div class="typewriter__title" ref="typeWriterTitle" >
		<h1 v-if="headingType == 'h1'" :class="{caret: caret}" :text="heading" :aria-label="heading">{{ headingText }}</h1>
		<h2 v-if="headingType == 'h2'" :class="{caret: caret}" :text="heading" :aria-label="heading">{{ headingText }}</h2>
	</div>

</template>

<script>
export default {
	props: ['delay', 'heading', 'wait', 'headingType'],
	data() {
		return {
			headingText: '',
			caret: true,
			show: false,
			waitForIt: this._props.wait
		};
	},
	watch:{
		wait: function(){
			this.type();
		}
	},
	mounted() {
		// let self = this;
		// if(self._props.wait != true){
		// }
		this.type();
	},
	methods:{
		type: function(){
			let self = this;
			let heading = self.heading;
			if (self.heading.length !== undefined) {
				for (var i = 0; i < heading.length; i++){
					(function(index) {
						setTimeout(function() {
							//add one letter at a time
							self._data.headingText += heading[index];
							// if all letters are typed delete caret
							if(heading.length == (index + 1)){
								self._data.caret = false;
								self._data.show = true;
								self.$emit('doneTyping');
							}
						}, i * 50);
					})(i);
				}
			}
		}
	},

};
</script>
