

          jQuery(function() {
    var $module = jQuery('#m-1595348758720').children('.module');

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
  var $module = jQuery('#m-1595348758720-child1').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child1-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child1-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child1-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child1-4');
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
                  jQuery('#m-1595348758720-child1-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child1-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child1-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child2').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child2-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child2-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child2-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child2-4');
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
                  jQuery('#m-1595348758720-child2-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child2-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child2-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child3').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child3-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child3-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child3-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child3-4');
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
                  jQuery('#m-1595348758720-child3-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child3-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child3-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child4').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child4-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child4-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child4-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child4-4');
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
                  jQuery('#m-1595348758720-child4-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child4-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child4-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child5').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child5-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child5-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child5-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child5-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child5-4');
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
                  jQuery('#m-1595348758720-child5-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child5-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child5-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child6').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child6-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child6-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child6-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child6-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child6-4');
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
                  jQuery('#m-1595348758720-child6-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child6-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child6-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child7').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child7-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child7-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child7-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child7-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child7-4');
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
                  jQuery('#m-1595348758720-child7-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child7-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child7-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child8').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child8-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child8-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child8-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child8-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child8-4');
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
                  jQuery('#m-1595348758720-child8-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child8-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child8-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child9').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child9-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child9-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child9-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child9-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child9-4');
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
                  jQuery('#m-1595348758720-child9-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child9-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child9-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child10').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child10-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child10-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child10-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child10-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child10-4');
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
                  jQuery('#m-1595348758720-child10-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child10-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child10-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child11').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child11-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child11-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child11-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child11-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child11-4');
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
                  jQuery('#m-1595348758720-child11-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child11-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child11-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child12').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child12-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child12-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child12-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child12-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child12-4');
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
                  jQuery('#m-1595348758720-child12-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child12-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child12-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child13').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child13-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child13-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child13-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child13-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child13-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child13-4');
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
                  jQuery('#m-1595348758720-child13-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child13-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child13-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child13-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child14').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child14-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child14-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child14-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child14-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child14-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child14-4');
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
                  jQuery('#m-1595348758720-child14-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child14-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child14-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child14-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child15').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child15-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child15-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child15-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child15-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child15-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child15-4');
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
                  jQuery('#m-1595348758720-child15-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child15-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child15-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child15-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child16').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child16-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child16-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child16-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child16-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child16-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child16-4');
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
                  jQuery('#m-1595348758720-child16-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child16-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child16-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child16-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child17').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child17-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child17-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child17-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child17-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child17-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child17-4');
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
                  jQuery('#m-1595348758720-child17-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child17-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child17-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child17-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child18').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child18-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child18-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child18-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child18-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child18-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child18-4');
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
                  jQuery('#m-1595348758720-child18-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child18-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child18-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child18-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child19').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child19-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child19-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child19-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child19-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child19-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child19-4');
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
                  jQuery('#m-1595348758720-child19-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child19-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child19-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child19-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child20').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child20-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child20-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child20-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child20-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child20-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child20-4');
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
                  jQuery('#m-1595348758720-child20-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child20-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child20-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child20-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child21').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child21-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child21-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child21-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child21-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child21-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child21-4');
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
                  jQuery('#m-1595348758720-child21-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child21-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child21-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child21-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child22').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child22-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child22-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child22-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child22-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child22-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child22-4');
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
                  jQuery('#m-1595348758720-child22-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child22-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child22-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child22-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child23').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child23-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child23-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child23-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child23-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child23-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child23-4');
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
                  jQuery('#m-1595348758720-child23-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child23-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child23-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child23-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child24').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child24-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child24-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child24-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child24-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child24-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child24-4');
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
                  jQuery('#m-1595348758720-child24-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child24-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child24-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child24-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child25').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child25-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child25-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child25-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child25-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child25-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child25-4');
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
                  jQuery('#m-1595348758720-child25-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child25-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child25-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child25-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child26').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child26-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child26-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child26-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child26-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child26-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child26-4');
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
                  jQuery('#m-1595348758720-child26-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child26-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child26-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child26-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child27').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child27-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child27-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child27-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child27-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child27-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child27-4');
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
                  jQuery('#m-1595348758720-child27-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child27-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child27-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child27-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child28').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child28-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child28-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child28-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child28-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child28-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child28-4');
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
                  jQuery('#m-1595348758720-child28-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child28-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child28-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child28-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child29').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child29-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child29-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child29-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child29-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child29-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child29-4');
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
                  jQuery('#m-1595348758720-child29-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child29-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child29-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child29-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child30').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595348758720-child30-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child30-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1595348758720-child30-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1595348758720-child30-4').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1595348758720-child30-4').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1595348758720-child30-4');
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
                  jQuery('#m-1595348758720-child30-4').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1595348758720-child30-4').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1595348758720-child30-4').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1595348758720-child30-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1595349107524').children('.module');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    
    if (mode == 'dev') {
        var $paginator = $module.find('.gf_collection-paginator-wrapper');
        if ($paginator.length > 0) {
            var productCount = $paginator.attr('data-product-count');
            var previousText = $module.attr('data-previous');
            var nextText = $module.attr('data-next');
            var activeColor = $module.attr('data-active-color');      

            var applyEvents = function() {
                $paginator.children('span:not(.deco)').off('click').on('click', function() {
                    var currentPage = parseInt($paginator.children('.current').text()) - 1;
                
                    if (jQuery(this).hasClass('prev')) {
                        currentPage--;
                    } else if (jQuery(this).hasClass('next')) {
                        currentPage++;
                    } else {
                        currentPage = parseInt(jQuery(this).text()) - 1;
                    }
                    render(currentPage);
                })
            }

            var render = function(currentPage) {
                $paginator.html('');

                if (currentPage != 0) {
                    $paginator.append('<span class="prev">' + previousText + '</span>')
                }
                
                if (currentPage - 2 > 0) {
                    $paginator.append('<span class="page">1</span>');
                }

                if (currentPage -2 > 1) {
                    $paginator.append('<span class="deco">...</span>');
                }

                for (var i = Math.max(0, currentPage - 2); i <= Math.min(currentPage + 2, productCount - 1); i++) {
                    $paginator.append('<span class="page' + (currentPage == i ? ' current' : '') + '">' + (i + 1) + '</span>');
                }

                if (currentPage + 2 < productCount - 2) {
                    $paginator.append('<span class="deco">...</span>');
                }

                if (currentPage + 2 < productCount - 1) {
                    $paginator.append('<span class="page">' + productCount + '</span>');
                }

                if (currentPage != productCount - 1 && productCount != 0) {
                    $paginator.append('<span class="next">' + nextText + '</span>')
                }

                applyEvents();
            }

            render(0);
        }
    }
});
      