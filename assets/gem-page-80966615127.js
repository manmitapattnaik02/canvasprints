

    
        jQuery(function() {
            var $hero = jQuery('#m-1570091717041');
            var $module = jQuery('#m-1570091717041').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1570091716951').children('.module');
        }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1631126384472').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1631126392780').children('.module');
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
    
    
    
    
    
    
    
    
    
    