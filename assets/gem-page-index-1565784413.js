

    jQuery(function() {
        var $hero = jQuery('#m-1565792352985');
        var $module = jQuery('#m-1565792352985').children('.module');

        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
        var $heroLink = $hero.children('.hero-link');
        if(mode == 'dev' && $heroLink.length > 0) {
             $hero.children('.hero-link').hide();
        }
        if (mode == 'production' && $heroLink.length > 0) {
            $module.off('click.openLink').on('click.openLink', function(e) {
                var $target = jQuery(e.target);
                if ($target.length > 0){
                    var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                    if (linkTarget == "") {
                        var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                        var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                        if (link != "") {
                            if (newTab == "") {
                                window.location.href = link;
                            } else {
                                window.open(link, newTab);
                            }
                        }
                    }
                };
            })
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
        var $module = jQuery('#m-1567167308530').children('.module');
        if(jQuery().gfYoutube) {
            $module.gfYoutube();
        }
    });
  
        jQuery(function() {
            var $hero = jQuery('#m-1542875181736');
            var $module = jQuery('#m-1542875181736').children('.module');

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
        var $module = jQuery('#m-1567436678660').children('.module');
        if(jQuery().gfYoutube) {
            $module.gfYoutube();
        }
    });
  
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1591369107885').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1591369107885').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1591369107885');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1591369107885').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1591369107885').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1591369107885').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    jQuery(function(){try{if(jQuery().gfV1Lazyload){var $module=jQuery(window);$module.gfV1Lazyload({delay:125})}}catch(err){}})