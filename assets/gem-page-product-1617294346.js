

        jQuery(function() {
            var $module = jQuery('#m-1570092283913').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283913-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283948').children('.module');
            $module.gfV3ProductImageList({
                onImageClicked: function(imageUrl, imageZoomUrl) {}
            });

            var style = $module.attr('data-style');
            switch(style) {
                case 'slider':
                    var navspeed = $module.data('navspeed'),
                        navlg = $module.data('navlg'),
                        navmd = $module.data('navmd'),
                        navsm = $module.data('navsm'),
                        navxs = $module.data('navxs'),
                        collg = $module.data('collg'),
                        colmd = $module.data('colmd'),
                        colsm = $module.data('colsm'),
                        colxs = $module.data('colxs'),
                        dotslg = $module.data('dotslg'),
                        dotsmd = $module.data('dotsmd'),
                        dotssm = $module.data('dotssm'),
                        dotsxs = $module.data('dotsxs'),

                        marginlg = parseInt($module.data('mlg')),
                        marginmd = parseInt($module.data('mmd')),
                        marginsm = parseInt($module.data('msm')),
                        marginxs = parseInt($module.data('mxs'));

                    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
                    if(mode == 'production') {
                        var loop = $module.data('loop');
                    } else {
                        var loop = 0;
                    }
                    $module.find('.gf_product-images-list').owlCarousel({
                        mouseDrag: true,
                        navSpeed: navspeed,
                        autoWidth: !1,
                        loo: loop,
                        responsiveClass:true,
                        responsive:{
                            0:{
                                items:colxs,
                                nav: navxs,
                                dots:dotsxs,
                                margin: marginxs
                            },
                            768:{
                                items:colsm,
                                nav: navsm,
                                dots:dotssm,
                                margin: marginsm
                            },
                            992:{
                                items:colmd,
                                nav: navmd,
                                dots:dotsmd,
                                margin: marginmd
                            },
                            1200:{
                                items:collg,
                                nav: navlg,
                                dots:dotslg,
                                margin: marginlg
                            }
                        }
                    }); 
                    break;
            }
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283913-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283913-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283891').children('.module');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            var blankOption = $module.attr('data-blankoption');
            var blankOptionText = $module.attr('data-blankoptiontext');
            var style = $module.attr('data-style');

            $module.gfV3ProductVariants({
                mode: mode,
                blankOption: blankOption,
                blankOptionText: blankOptionText,
                style: style,
                onVariantSelected: function(variant, $select) {}
            });
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283885').children('.module');
            var style = $module.attr('data-style');
            var updatePrice = $module.attr('data-updateprice');

            $module.gfV3ProductQuantity({
                'style': style,
                'updatePrice': updatePrice
            });
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283913-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283899').children('.module');
        }); 
    jQuery(function() {
  var $module = jQuery('#m-1587982839341').children('.module');
  var activeTab = parseInt($module.attr('data-activeTab')) - 1;
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  $module.gfV3ResTabs({
      'activeTab': activeTab,
      'mode': mode,
      tabSelected: function(index) {
        var tabInactiveBgColor = $module.attr('data-inactiveTabBgColor');
        var tabInactiveColor = $module.attr('data-inactiveTabColor');
        var tabBgColor = $module.attr('data-tabBgColor');
        var tabColor = $module.attr('data-tabColor');
        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        var $gfTabs = $module.find('>ul>li.gf_tab');
        var $gfTabActive = $module.find('>ul>li.gf_tab-active');
        var $gfTabPanels = $module.find('>.gf_tab-panel');

        if($module.hasClass('style1')) {
          $gfTabs
            .css('margin-left', '-' + borderSize)
            .css('border', borderSize + ' solid ' + borderColor)
            .css('border-bottom', borderSize + ' solid ' + borderColor);

          $module.find('>ul>li.gf_tab:first').css('margin-left', '0px');

        } else if($module.hasClass('style3')) {
          $gfTabs.css('border-bottom', borderSize + ' solid ' + tabBgColor);
        }

        if(!$module.hasClass('style3')) {
          $gfTabs.css('background-color', tabInactiveBgColor);
          $gfTabActive.css('background-color', tabBgColor);
        }

        $gfTabs.css('color', tabInactiveColor);
        $gfTabActive.css('color', tabColor);

        if($module.hasClass('style1')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', tabBgColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        } else if($module.hasClass('style3')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', borderColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        }
        $gfTabPanels
        .css('top', '-' + borderSize)
        .css('background-color', tabBgColor)
        .css('border', '1px solid ' + borderColor);

        if($module.hasClass('style1')) {
          $gfTabPanels.css('border', borderSize + ' solid ' + borderColor);
        } else {
          $gfTabPanels.css('border', 'none');
        }
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
            if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
                jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
            }	
        });
      }
  });
  if(mode == 'dev') {
    var moduleId = "1587982839341";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1587982839341") {
      window.getTab1587982839341 = function() {
        return $module.data('gfv3restabs');
      }
    }
  }
});
        jQuery(function() {
            var $hero = jQuery('#m-1570092283840');
            var $module = jQuery('#m-1570092283840').children('.module');

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
            var $hero = jQuery('#m-1570092283869');
            var $module = jQuery('#m-1570092283869').children('.module');

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
            var $hero = jQuery('#m-1570092283821');
            var $module = jQuery('#m-1570092283821').children('.module');

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
            var $module = jQuery('#m-1570092283953').children('.module');
        
            var token_test = '2269641474.1677ed0.63eaaf968720481a866e9263fc8639e1';
            var token = $module.data('token') != '' ? $module.data('token') : token_test;
            var num_photos = parseInt($module.data('photos')) > 1 ? parseInt($module.data('photos')) : 1;
            var num_columns = parseInt($module.data('columns')) > 1 ? parseInt($module.data('columns')) : num_photos;
            var padding = parseInt($module.data('padding')) > 0 ? parseInt($module.data('padding')) : 0;

            var instaTag = jQuery.trim($module.data('hashtag')) != '' ? jQuery.trim($module.data('hashtag')) : '';

            if(instaTag != '') {
                var instaUrl = 'https://api.instagram.com/v1/tags/' + instaTag + '/media/recent';
            } else {
                var instaUrl = 'https://api.instagram.com/v1/users/self/media/recent';
            }

            jQuery.ajax({
                url: instaUrl,
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    access_token: token, 
                    count: num_photos
                },
                success: function(data) {
                    var html = '';
                    if(data.data != undefined) {
                        for(var i = 0; i < data.data.length; i++) {
                            if(i % num_columns == 0) {
                                html += '<div class="gf_clearfix"></div>';
                            }
                            html += '<li><a href="' + data.data[i].link + '" target="_blank" style="padding: ' + padding + 'px;">';
                                html+= '<img src="'+ data.data[i]['images'].standard_resolution.url + '" alt="' + data.data[i].caption + '" />';
                            html += '</a></li>';
                        }
                        $module.html(html).hide();
                        $module.find('li').css('width', (100/num_columns)+'%');

                        $module.closest('.module-wrap').css('marginLeft', padding * -1);
                        $module.closest('.module-wrap').css('marginRight', padding * -1);
                    }
                    $module.fadeIn();
                },
                error: function(data){  
                    console.log(data);
                }
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834').children('.module');

            var limit = parseInt($module.attr('data-limit'));
            if($module.find('.gf_row.gf_row_no_tools .gf_column').length > limit) {
                $module.find('.gf_row.gf_row_no_tools .gf_column:last').hide();
            }
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child1-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child1-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child1-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child1-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child2-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child2-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child2-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child2-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child3-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child3-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child3-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child3-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child4-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child4-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child4-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092283834-child4-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    