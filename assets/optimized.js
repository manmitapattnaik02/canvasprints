var windowWidth,lazyImages,lazyBackground,lazyIframe,lazyScripts,src,style,datasrc,urls,analytics,s,x,i,j,flag;
document.addEventListener("DOMContentLoaded", function() {
	windowWidth = screen.width;
	lazyImages = document.querySelectorAll('img.lazy');
	nolazyImages = document.querySelectorAll('img.lazy');
	lazyBackground = document.querySelectorAll('.lazybg');
	lazyIframe = document.querySelectorAll('iframe.lazy');
	lazyScripts = document.getElementsByTagName("script");
	i=0;
	j=0;
	flag=1;

//	lazyLoadImg2();

	window.addEventListener("scroll", function() {
		init();
	});
	window.addEventListener("mousemove", function() {
		init();
	});
	window.addEventListener("touchstart", function() {
		init();
	});
	setTimeout(function() {
		init();
	}, 60000);
});
function init() {
	if(flag) {
		flag=0;
		lazyLoadImg();
		lazyLoadBackground();
		lazyLoadIframe();
		load_all_js();
	}
}
function isElementInViewport (el) {
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	);
}
function lazyLoadImg() {
	lazyImages.forEach(function(elem) {
		if( windowWidth < 600 )
			src = (elem.dataset.mobsrc == undefined) ? elem.dataset.src : elem.dataset.mobsrc;
		else
			src = elem.dataset.src;

		if( src != null )
			elem.src = src;

		elem.classList.remove("lazy");
	});
}
function lazyLoadImg2() {
	lazyImages.forEach(function(elem) {
		if( isElementInViewport(elem) ) {
			if( windowWidth < 600 )
				src = (elem.dataset.mobsrc == undefined) ? elem.dataset.src : elem.dataset.mobsrc;
			else
				src = elem.dataset.src;

			if( src != null )
				elem.src = src;

			elem.classList.remove("lazy");
		}
	});
}
function lazyLoadBackground() {
	lazyBackground.forEach(function(elem) {
		if( windowWidth < 600 )
			lazybg = (elem.dataset.mobstyle == undefined) ? elem.dataset.style : elem.dataset.mobstyle;
		else
			lazybg = elem.dataset.style;

		if( lazybg != null )
			elem.style = lazybg;

		elem.classList.remove("lazybg");
	});
}
function lazyLoadIframe() {
	lazyIframe.forEach(function(elem) {
		elem.src = elem.dataset.src;
		elem.classList.remove("lazy");
	});
}
function lazyLoadScripts() {
	if (j == lazyScripts.length)
		return;

	if ( lazyScripts[j].getAttribute("type") == "lazyload2" ) {
		lazyScripts[j].setAttribute("type", "lazyloaded");
		if (typeof lazyScripts[j].dataset.src !== 'undefined') {
			s=document.createElement("script");
			s.src=lazyScripts[j].dataset.src;
			document.body.appendChild(s);
			s.onload=function() {
				j++;
				lazyLoadScripts();
			};
		} else {
			s=document.createElement("script");
			s.innerHTML=lazyScripts[j].innerHTML;
			document.body.appendChild(s);
			j++;
			lazyLoadScripts();
		}
	} else {
		j++;
		lazyLoadScripts();
	}
}
function lazyLoadCss(url) {
	s=document.createElement("link");
	s.rel="stylesheet";
	s.href=url;
	document.getElementsByTagName("head")[0].appendChild(s);
}
function lazyLoadJS(url) {
	s=document.createElement("script");
	s.src=url;
	document.body.appendChild(s);
}
function load_all_js() {
	lazyLoadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
	lazyLoadCss("//cdn.shopify.com/s/files/1/1180/0780/t/33/assets/currency-flags.css?v=17715447353726653384");

	setTimeout(function() {
		const wnw_load = new Event('wnw_load');
		window.dispatchEvent(wnw_load);
	}, 100);

	lazyLoadJS("https://widget.reviews.io/combined/dist.js?RUKcarousel");
	lazyLoadJS("https://cdn.tabarn.app/cdn/automatic-discount/wallsh_dp.min.js?shop=canvasprintscom.myshopify.com");
	lazyLoadJS("https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/features-87e8399988880142f2c62771b9d8f2ff6c290b3ff745dd426eb0dfe0db9d1dae.js");
	lazyLoadJS("https://cdn.tabarn.app/cdn/automatic-discount/wallsh_dp.min.js?shop=canvasprintscom.myshopify.com");
	lazyLoadJS("https://static.klaviyo.com/onsite/js/vendors~View.6cd7a290b7db0f04ca18.js");
	lazyLoadJS("https://connect.facebook.net/signals/config/2401869930072490?v=2.9.29&r=stable");
	lazyLoadJS("https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/bars/index-876ea31b07f2aec7d9ac76d18a9c0e82b39dc4cd5ef062be9a18a18d151ae30d.js");
	lazyLoadJS("https://static.klaviyo.com/onsite/js/View.37d0ed30be8905fcd66b.js");
	lazyLoadJS("https://script.hotjar.com/modules.ae930258b2386dc57451.js");

	j=0;
	lazyScripts = document.getElementsByTagName("script");
	lazyLoadScripts();

	setInterval(function() {
		lazyImages = document.querySelectorAll('img.lazy');
		lazyBackground = document.querySelectorAll('.lazybg');
		lazyLoadImg();
		lazyLoadBackground();
	}, 3000);
}