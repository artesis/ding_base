(function ($) {

Drupal.behaviors.dingBaseTableSelect = {
  attach: function (context, settings) {
    // @see misc/tableseclect.js
    $('th.select-all .form-checkbox', context).once('wrap_selector', function() {
	  $(this).wrap('<label>' + settings.ding_base.select_all_label + ' </label>');
	});
  }
};

})(jQuery);
