

        jQuery(function() {
            var $module = jQuery('#m-1565889483497').children('.module');

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
                var $module = jQuery('#m-1565889483497-child1').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child1-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child1-1').children('.module');
            });
        
    jQuery(function() {
        var $module = jQuery('#m-1565889483497-child1-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child2').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child2-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child2-1').children('.module');
            });
        
    jQuery(function() {
        var $module = jQuery('#m-1565889483497-child2-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child3').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child3-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child3-1').children('.module');
            });
        
    jQuery(function() {
        var $module = jQuery('#m-1565889483497-child3-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child4').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child4-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child4-1').children('.module');
            });
        
    jQuery(function() {
        var $module = jQuery('#m-1565889483497-child4-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child5').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child5-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child5-1').children('.module');
            });
        
    jQuery(function() {
        var $module = jQuery('#m-1565889483497-child5-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child6').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child6-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1565889483497-child6-1').children('.module');
            });
        
    jQuery(function() {
        var $module = jQuery('#m-1565889483497-child6-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1567343533187').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1567343533187').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1567343533187');
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
                            jQuery('#m-1567343533187').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1567343533187').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1567343533187').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  