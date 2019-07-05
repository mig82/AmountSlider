define(function() {

	var ccy;

	function formatAmount(number, decPlaces){
		var locale = kony.i18n.getCurrentLocale();

		/*globals Intl*/
		return new Intl.NumberFormat(locale.replace("_", "-"), {
			style: 'currency',
			currency: ccy,
			maximumSignificantDigits: decPlaces,
			minimumSignificantDigits: decPlaces
		}).format(number);
	}

	return {
		setValue: function(){
			var amt = this.view.slider.selectedValue;
			var fAmt = formatAmount(amt, 2);
			this.view.amountLabel.text = fAmt;
		},

		preShow: function(){
			this.view.slider.thumbOffset = 0;
		},

		constructor: function(/*baseConfig, layoutConfig, pspConfig*/) {

			ccy = this.view.currencyLabel.text;
			this.view.currencyLabel.isVisible = false;
			this.view.slider.onSlide = this.setValue;
			this.setValue();
		},

		//Logic for getters/setters of custom properties
		initGettersSetters: function() {}
	};
});
