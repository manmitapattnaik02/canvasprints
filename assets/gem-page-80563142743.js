

    
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1631209768759').children('.module');
    $module.gfV1Countdown({
        id: "1631209768759",
        idSlug: "1631209768759"
    });
})( window.GemQuery || jQuery );
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1631208341415').children('.module');
}); 
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1631208831394').children('.module');
}); 
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606795809792').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1631208933859').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1631208943254').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    