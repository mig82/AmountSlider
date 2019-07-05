define(function(){

	return {
		preShow: function(){
			this.view.AmountSlider.preShow();
		},
		onNavigate: function(){
			kony.mvc.patch(this);
		}
	};
});