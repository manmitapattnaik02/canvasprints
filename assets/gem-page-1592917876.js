

    
        jQuery(function() {
  var $hero = jQuery('#m-1594072688503');
  var $module = jQuery('#m-1594072688503').children('.module');

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
    function changeImage(){
      var backgroundImage = $module.parent().css('background-image');
      if(backgroundImage){
       backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
       $module.find('.gf_hero-fixed').attr('src', backgroundImage);
       $module.parent().addClass('gf_hero-fixed-mode');
      }
    }
   changeImage();

    jQuery(window).resize(function(){
      changeImage();
    });
  } else {
    $module.parent().removeAttr('style');
    $module.parent().removeClass('gf_hero-fixed-mode');
  }
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1593722885118').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1593722885118').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1593722885118');
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
                  jQuery('#m-1593722885118').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1593722885118').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1593722885118').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
    
    
    
    
    
    
    
    
    
    
        jQuery(function() {
    var $module = jQuery('#m-1594411315294').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});
    
      
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child1').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1594411315294-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child1-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1594411315294-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child2').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1594411315294-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child2-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1594411315294-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child3').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1594411315294-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child3-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1594411315294-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child4').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1594411315294-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1594411315294-child4-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1594411315294-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
    
    
    
    
    
    
        jQuery(function() {
  try {
    var $module = jQuery('#m-1592917894935').children('.module');
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
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1592917894994').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1592917894994').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1592917894994');
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
                  jQuery('#m-1592917894994').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1592917894994').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1592917894994').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    