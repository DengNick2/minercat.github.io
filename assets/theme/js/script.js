
(function(){function n(a,b){var c=Array.from(a.querySelectorAll(b));a.matches&&a.matches(b)&&c.splice(0,0,a);return c}function y(a){a=a.getBoundingClientRect();var b=document.documentElement;return{top:a.top+window.pageYOffset-b.clientTop,left:a.left+window.pageXOffset-b.clientLeft}}function w(a){return parseFloat(getComputedStyle(a,null).height.replace("px",""))}function z(a){return parseFloat(getComputedStyle(a,null).width.replace("px",""))}function t(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",
a)}function H(a){(function c(){0>(a.style.opacity-=.1)?a.style.display="none":requestAnimationFrame(c)})()}function I(a){a.style.display="block";(function c(){var d=parseFloat(a.style.opacity);1<(d+=.1)||(a.style.opacity=d,requestAnimationFrame(c))})()}function v(a){var b=[],c={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==typeof a?"*":a.toLowerCase();"*"===a?b=Object.values(c):a in c&&b.push(c[a]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),
"i")))}function C(a){var b=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");b.classList.add("active");a&&a.classList.add("active")}function x(a){var b=a.getAttribute("id")+"-carousel",c=a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5");null===a.getAttribute("id")&&(b=a.classList.value.match(/cid-.*?(?=\s|$)/)+"-carousel");a.querySelectorAll(".carousel").forEach(function(a){a.setAttribute("id",b)});a.querySelector(".carousel-controls")&&
a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href","#"+b);c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)});C(a)}function J(a){var b=a.querySelectorAll(".carousel-item").length,c=a.querySelector(".carousel-inner").getAttribute("data-visible");b<c&&
(c=b);a.querySelectorAll(".carousel-inner").forEach(function(a){a.setAttribute("class","carousel-inner slides"+c)});a.querySelectorAll(".clonedCol").forEach(function(a){a.remove()});a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>c?a.setAttribute("class","col-md-12"):"5"==c?a.setAttribute("class","col-md-12 col-lg-15"):a.setAttribute("class","col-md-12 col-lg-"+12/c)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});
a.querySelectorAll(".carousel-item").forEach(function(a){for(var b=a,k=1;k<c;k++){(b=b.nextElementSibling)||(b=a.parentNode.children[0]===a?a.nextElementSibling:a.parentNode.children[0]);var g;if(g=b){var e=0;do e++;while(g=g.previousElementSibling);g=e}else g=-1;e=b.querySelector(".col-md-12").cloneNode(!0);e.classList.add("cloneditem-"+k);e.classList.add("clonedCol");e.setAttribute("data-cloned-index",g);a.children[0].appendChild(e)}})}function K(a){var b="",c=a.querySelector("svg linearGradient");
if(c){for(var b=[],c=Array.from(c.children),d=0;d<c.length;d++)b.push('"'+c[d].getAttribute("stop-color")+'"');b='"lineargradient": ['+b+"],";Array.from(a.querySelectorAll("svg")).some(function(a){return a.classList.contains("svg-gradient")})||a.querySelectorAll("svg").forEach(function(a){a.classList.add("svg-gradient")})}return b}function A(a,b,c){var d=a.closest(".card"),f=d.parentElement.classList;d.getAttribute("style")||d.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;");f.contains("row")&&
(f.remove("row"),f.add("media-container-row"));a.querySelectorAll(".svg-gradient > *").forEach(function(a){a.setAttribute("id",b)});d=a.cloneNode(!0);Array.from(a.children).forEach(function(a){if("SVG"!==a.tagName)return a.remove()});a.setAttribute("data-pie","{ "+K(a.closest("section"))+' "percent": '+c+', "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#'+b+')", "fontSize": "1.3rem", "number": false }');Array.from(d.children).forEach(function(b){switch(!0){case b.matches("p"):b.innerText=
c+"%";a.appendChild(b);break;case b.matches("svg"):break;default:a.appendChild(b)}})}function D(a){var b=a.closest("section").getAttribute("id")+"-svg-gradient",c=+a.getAttribute("data-goal");A(a,b,c)}function L(a,b){if(a.classList.contains("circle-progress-section")&&b.includes("progress")&&"progressCount"!=b)if(b.includes("Color"))a.querySelectorAll(".pie_progress").forEach(function(b){var c=a.getAttribute("id")+"-svg-gradient",d=+b.getAttribute("data-goal");A(b,c,d)});else{var c=a.getAttribute("id")+
"-svg-gradient",d=a.querySelector("."+b),f=+d.getAttribute("data-goal");A(d,c,f)}}function E(){if(document.querySelector(".loop-container")){var a=function(b){var c=0,d=0,f=+b.children[0].dataset.speed||.05,e=b.querySelector(".item"),g=e.dataset.direction;if(e){(function(){b.querySelectorAll(".item").forEach(function(a){a.textContent=a.dataset.linewords+"\u00a0"})})();b.style.cssText="position: relative; display: inline-flex; white-space: nowrap;";b.children[1].style.cssText="position: absolute; left: "+
100*-g+"%;";var h=function(){d+=f;c=.8*c+.2*d;100<d&&(c-=d,d=0);b.style.transform="translateX("+c*g+"%)";window.requestAnimationFrame(h)},m=new MutationObserver(function(){document.querySelectorAll(".loop-container").forEach(function(a){a.style.transform=""});m.disconnect();a(b)});m.observe(e,{attributes:!0,attributeFilter:["data-direction","data-speed","data-linewords"]});(function(){window.addEventListener("scroll",function(){return d+=1.5*f})})();h()}};document.querySelectorAll(".loop-container").forEach(function(b){return a(b)})}}
function F(){var a=Array.from(document.querySelectorAll(".ticker__item"));if(0!==a.length){var b=a.map(function(a){return a.textContent}),c=new MutationObserver(function(){a.forEach(function(a,b){a.textContent=a.dataset.word})});a.forEach(function(a,f){a.textContent=b[f];c.observe(a,{attributes:!0,attributeFilter:["data-word"]})});(function(){document.querySelectorAll(".ticker__item").forEach(function(a){a.textContent=a.dataset.word})})()}}var e,h,p="function"==typeof jQuery;p&&(e=jQuery);e?h=e("html").hasClass("is-builder"):
h=document.querySelector("html").classList.contains("is-builder");Element.prototype.parents=function(a){for(var b=[],c=this,d=void 0!==a;null!==(c=c.parentElement);)c.nodeType===Node.ELEMENT_NODE&&(d&&!c.matches(a)||b.push(c));return b};Element.prototype.footerReveal=function(){function a(){!d&&b.offsetHeight<=window.outerHeight?(b.style.zIndex="-999",b.style.position="fixed",b.style.bottom="0",b.style.width=c.offsetWidth+"px",c.style.marginBottom=b.offsetHeight+"px"):(b.style.zIndex="",b.style.position=
"",b.style.bottom="",b.style.width="",c.style.marginBottom="")}var b=this,c=b.previousElementSibling,d=!!document.documentMode;a();window.addEventListener("resize",function(){a()});window.addEventListener("load",function(){a()});return b};(function(a){var b=function(a,b,f){var e;return function(){var g=this,h=arguments;e?clearTimeout(e):f&&a.apply(g,h);e=setTimeout(function(){f||a.apply(g,h);e=null},b||100)}};window[a]=function(c){var d=new CustomEvent(a);return c?this.addEventListener("resize",b(c)):
this.dispatchEvent(d)}})("smartresize");var M=function(){var a=document.createElement("div"),b=document.querySelector("body");a.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;");b.appendChild(a);var c=parseInt(window.innerHeight/2,10),d=parseInt((window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).height,10);b.removeChild(a);return d==c}();t(function(){function a(a){a.style.height=9*z(a.parentNode)/16+"px"}function b(a){setTimeout(function(){n(a,".mbr-parallax-background").forEach(function(a){jarallax&&
(jarallax(a,{speed:.6}),a.style.position="relative")})},0)}function c(a){n(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var c=new URLSearchParams(b),f=Number(c.has("t")?c.get("t"):0)||0,d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),l=a.querySelector(".mbr-background-video-preview")||document.createElement("div");l.classList.add("mbr-background-video-preview");
l.style.display="none";l.style.backgroundSize="cover";l.style.backgroundPosition="center";a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(l);var e=function(a,b){var c,d,f,l;f=window.outerWidth;l=window.outerHeight;var g=a._opts.width/a._opts.height;c=f;d=Math.ceil(c/g);Math.ceil(-((d-l)/2));d<l&&(d=l,c=Math.ceil(d*g),Math.ceil(-((c-f)/2)));a.setSize(c,d)};if(d&&(/youtu\.?be/g.test(d[3])||/vimeo/g.test(d[3])))if(d&&/youtu\.?be/g.test(d[3])){d[6]=d[6].replace("shorts","embed");
var b="http"+("https:"===location.protocol?"s":"")+":",b=b+("//img.youtube.com/vi/"+d[6]+"/maxresdefault.jpg"),g=new Image;g.onload=function(){if(120===(g.naturalWidth||g.width)){var b=g.src.split("/").pop();switch(b){case "maxresdefault.jpg":g.src=g.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":g.src=g.src.replace(b,"hqdefault.jpg");break;default:h&&(l.style.backgroundImage='url("images/no-video.jpg")',l.style.display="block")}}else l.style.backgroundImage='url("'+g.src+'")',l.style.display=
"block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();var b=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div"),k=document.createElement("div");k.classList.add("mbr-video-foreground");k.appendChild(b);u.appendChild(k);c.appendChild(u);b.classList.add("mbr-background-video");a.childNodes[1].before(c);var r=g.naturalHeight,m=g.naturalWidth,G=g.naturalHeight/g.naturalWidth,p=b.parentNode.clientHeight,q=b.parentNode.clientWidth,
r=r<p?r:p,m=m>q?m:q;r/m!=G&&(r=m*G);var n=new YouTubePlayer(b,{modestBranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1,start:f});c.style.overflow="hidden";c.style.position="absolute";c.style.width="100%";c.style.height="100%";c.style.top="0";c.style.left="0";u.style.background="#000";u.style.top="0";u.style.right="0";u.style.bottom="0";u.style.left="0";k.style.position="absolute";k.style.top="0";k.style.left="0";k.style.width="100%";
k.style.height="100%";k.style.pointerEvents="none";b.style.marginTop="0";b.style.maxWidth="initial";b.style.transitionProperty="opacity";b.style.transitionDuration="1000ms";b.style.pointerEvents="none";b.style.position="absolute";b.style.top="0";b.style.left="0";b.style.width="100%";b.style.height="100%";b.parentNode.style.overflow="hidden";b.style.transform="scale(1.2)";n.load(d[6],!0,f);n.play();n.setLoop(!0);n.mute();n.on("ended",function(){return n.play()});e(n)};g.setAttribute("src",b)}else d&&
/vimeo/g.test(d[3])&&(c=new XMLHttpRequest,c.open("GET","https://vimeo.com/api/v2/video/"+d[6]+".json",!0),c.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);l.style.backgroundImage='url("'+a[0].thumbnail_large+'")';l.style.display="block"}else h&&(l.style.backgroundImage='url("images/no-video.jpg")',l.style.display="block")},c.send(),c=null,a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove(),
c=document.createElement("div"),c.classList.add("mbr-background-video"),a.childNodes[1].before(c),b=new Vimeo.Player(c,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0,controls:!1}),c=b.element.parentNode,c.style.overflow="hidden",b.element.style.pointerEvents="none",b.element.style.marginLeft="-"+(b.element.scrollWidth-c.scrollWidth)/2+"px",b.element.style.minHeight="100vh",b.element.style.minWidth="177.77vh");else if(h)l.style.backgroundImage='url("images/video-placeholder.jpg")',
l.style.display="block";else if(!h){var c=document.createElement("video"),k=document.createElement("source");c.append(k);a.childNodes[1].before(c);k.src=b;c.autoplay=!0;c.loop=!0;c.muted=!0;c.setAttribute("muted","");c.playsinline=!0;c.setAttribute("playsinline","");c.style.position="absolute";c.style.left="50%";c.style.top="50%";c.style.bottom="0";c.style.right="0";c.style.minWidth="100%";c.style.minHeight="100%";c.style.transform="translateX(-50%) translateY(-50%)";b="";a.querySelector(".mbr-fallback-image")&&
(b=window.getComputedStyle(a.querySelector(".mbr-fallback-image")).backgroundImage,b=b.match(/\((.*?)\)/)[1].replace(/('|")/g,""),c.setAttribute("poster",b));c.parentNode.style.overflow="hidden"}}})}document.querySelector("html").classList.add(v()?"mobile":"desktop");window.addEventListener("scroll",function(){document.querySelectorAll(".mbr-navbar--sticky").forEach(function(a){var b=10<window.scrollTop?"add":"remove";a.classList[b]("mbr-navbar--stuck");if(!a.classList.contains(".mbr-navbar--open"))a.classList[b]("mbr-navbar--short")})});
v()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var c=[a,a];c[b>a?0:1]=b;window.smartresize(function(){var a=window.innerHeight;0>c.indexOf(a)&&(a=c[window.innerWidth>a?1:0]);var b=document.querySelector(".mbr-section--full-height");b&&(b.style.height=a+"px")})}(window.innerWidth,window.innerHeight):M||(window.smartresize(function(){var a=document.querySelector(".mbr-section--full-height");a&&(a.style.height=window.innerHeight+"px")}),document.addEventListener("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&
n(a.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}));window.addEventListener("smartresize",function(){document.querySelectorAll(".mbr-section--16by9").forEach(a)});if(p)e(document).on("add.cards changeParameter.cards",function(b){var c=n(b.target,".mbr-section--16by9");c.length?c.forEach(function(b){b.setAttribute("data-16by9","true");a(b)}):n(b.target,"[data-16by9]").forEach(function(a){a.styles.height="";a.removeAttribute("data-16by9")})});if("undefined"!==
typeof jarallax&&!v()){window.addEventListener("update.parallax",function(a){setTimeout(function(){if(a){var a=document.querySelector(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");a.jarallax("onScroll")}},0)});if(h){if(!p)return;e(document).on("add.cards",function(a){b(a.target);e(window).trigger("update.parallax")});e(document).on("changeParameter.cards",function(a,c,d,f){if("bg"===c)switch(c=a.target,jarallax&&jarallax(c,"destroy"),c.style.position="",e(a.target).find(".mbr-background-video-preview").remove(),
e(a.target).find(".mbr-background-video").remove(),f){case "type":!0===d.parallax&&b(a.target);break;case "value":"image"===d.type&&!0===d.parallax&&b(a.target);break;case "parallax":!0===d.parallax&&b(a.target)}e(window).trigger("update.parallax")})}else b(document.body);window.addEventListener("shown.bs.tab",function(){window.dispatchEvent(new CustomEvent("update.parallax"))})}var d,f,k=0,g=null,r=!v();window.addEventListener("scroll",function(){f&&clearTimeout(f);var a=document.documentElement.scrollTop,
b=a<=k||r;k=a;if(g){var c=a>g.breakPoint;b?c!=g.fixed&&(r?(g.fixed=c,g.elm.classList.toggle("is-fixed")):f=setTimeout(function(){g.fixed=c;g.elm.classList.toggle("is-fixed")},40)):(g.fixed=!1,g.elm.classList.remove("is-fixed"))}});if(p)e(document).on("add.cards delete.cards",function(a){d&&clearTimeout(d);d=setTimeout(function(){g&&(g.fixed=!1,g.elm.classList.remove("is-fixed"));var a=document.querySelector(".mbr-fixed-top");a&&(g={breakPoint:y(a).top+3*w(a),fixed:!1,elm:a},a.dispatchEvent(new CustomEvent("scroll")))},
650)});window.smartresize(function(){document.querySelectorAll(".mbr-embedded-video").forEach(function(a){a.style.height=(z(a)*parseInt(a.getAttribute("height")||315)/parseInt(a.getAttribute("width")||560)).toFixed()+"px"})});if(p)e(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&n(a.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))});if(h){if(!p)return;var m=[];e(document).on("add.cards",function(a){a.target!==document&&
!m.some(function(b){return b===a.target})&&a.target.hasAttribute("mbr-data-bg-video")&&(m.push(a.target),c(a.target))})}else c(document.body);if(h)e(document).on("changeParameter.cards",function(a,b,d,f){if("bg"===b)switch(f){case "type":"video"===d.type&&c(a.target);break;case "value":"video"===d.type&&c(a.target)}});document.querySelector("html").classList.add("mbr-site-loaded");window.dispatchEvent(new CustomEvent("resize"));window.dispatchEvent(new CustomEvent("scroll"));h||document.addEventListener("click",
function(a){try{var b=a.target;if(!b.parents().some(function(a){a.classList.contains("carousel")})){do if(b.hash){var c=/#bottom|#top/g.test(b.hash);document.querySelectorAll(c?"body":b.hash).forEach(function(c){a.preventDefault();var d=document.querySelector(".navbar-fixed-top"),d="#bottom"==b.hash?w(c)-window.innerHeight:y(c).top-(d?60:0);c.classList.contains("panel-collapse")||c.classList.contains("tab-pane")||b.classList.contains("carousel-control")||b.parents(".carousel-controls").length||window.scrollTo({top:d,
left:0,behavior:"smooth"})});break}while(b=b.parentNode)}}catch(d){}});document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function(a){function b(){c.style.width="";c.style.maxWidth="";c.style.marginLeft="";if(g&&f){var e=g/f;a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.right="0";a.style.bottom="0";var k=w(d)/z(d);k>e&&(e=100*(k-e)/e,c.style.width=e+100+"%",c.style.maxWidth=e+100+"%",c.style.marginLeft=-e/2+"%")}}var c=a.querySelector("img"),d=a.parentNode,f=
c.width,g=c.height;c.addEventListener("load",function(){f=c.width;g=c.height;b()},{once:!0});window.addEventListener("resize",b);b()})});if(!h){if(p&&e.fn.socialLikes)e(document).on("add.cards",function(a){n(a.target,".mbr-social-likes").forEach(function(a){a.addEventListener("counter.social-likes",function(a,b,f){999<f&&a.target.querySelectorAll(".social-likes__counter").forEach(function(a){a.innerHTML=Math.floor(f/1E3)+"k"})});a.socialLikes({initHtml:!1})})});Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){a.classList.contains("mbr-reveal")&&
a.addEventListener("add.cards",function(){a.footerReveal()})});t(function(){if(!v()&&document.querySelectorAll("input[name=animation]").length){var a=function(){var a=document.documentElement.scrollTop||document.body.scrollTop,e=a+window.innerHeight-100;d.forEach(function(d){var h=d.offsetHeight,m=c(d);(m+h>=a&&m-50<=e||b(d))&&d.classList.contains("hidden")&&(d.classList.remove("hidden"),d.classList.add("animate__fadeIn"),d.classList.add("animate__delay-1s"),d.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
function(){d.classList.remove("animate__animated animate__delay-1s animate__fadeIn")},{once:!0}))})},b=function(a){if(a.parents(".carousel-item").some(function(a){return"none"!==getComputedStyle(a,null).display}))return!1;var b=a.parents(".carousel-item").parentNode;if(!b||b.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(1<b.getAttribute("data-visible")){var c=b.getAttribute("data-visible");if(a.parents().some(function(a){return a.matches(".cloneditem-"+(c-
1))})&&a.parents(".cloneditem-"+(c-1)).some(function(a){return a.getAttribute("data-cloned-index")>=c}))return!0;a.classList.remove("animate__animated animate__delay-1s hidden");return!1}return!0},c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};document.querySelectorAll("input[name=animation]").forEach(function(a){a.remove()});var d=Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info, .item")),
d=d.filter(function(a){if(!a.parents().filter(function(a){if(a.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal, .item"))return!0}).length)return!0}),d=d.filter(function(a){if(!a.parents().filter(function(b){return b.matches("form")&&!a.matches("li")}).length)return!0});d.forEach(function(a){a.classList.add("hidden");a.classList.add("animate__animated");
a.classList.add("animate__delay-1s")});window.addEventListener("scroll",a);window.addEventListener("resize",a);window.dispatchEvent(new CustomEvent("scroll"))}})}t(function(){if(document.querySelectorAll(".mbr-arrow-up").length){var a=document.querySelector("#scrollToTop");a.style.display="none";window.addEventListener("scroll",function(){var b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,
document.documentElement.clientHeight);(document.documentElement.scrollTop||document.body.scrollTop)>b/2-document.documentElement.clientHeight/2||window.scrollY>window.innerHeight?I(a):H(a)});a.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"});return!1})}});if(!h){var q=document.querySelector(".mbr-arrow");q&&q.addEventListener("click",function(a){a=a.target.closest("section").nextElementSibling;a.classList.contains("engine")&&(a=a.closest("section").nextElementSibling);
window.scrollTo(0,y(a).top)})}document.querySelectorAll("nav.navbar").length&&(q=w(document.querySelector("nav.navbar")),document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=q+"px"));if(!h&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))e(document).on("add.cards",function(a){var b=a.target;b.classList.contains("mbr-fullscreen")&&(a=function(){b.style.height="auto";b.offsetHeight<=
window.innerHeight&&(b.style.height="1px")},window.addEventListener("load",a),window.addEventListener("resize",a));if(b.classList.contains("mbr-slider")||b.classList.contains("mbr-gallery"))b.querySelectorAll(".carousel-indicators").forEach(function(a){a.classList.add("ie-fix");a.querySelectorAll("li").forEach(function(a){a.style.display="inline-block";a.style.width="30px"})}),b.classList.contains("mbr-slider")&&b.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function(a){a.style.height=
"1px"})});t(function(){if(!h){var a=function(a){a.target&&("VIDEO"==a.target.tagName?(a.preventDefault(),a.stopPropagation()):b(a.target))},b=function(b){var d=b.parents("section")[0].querySelector("iframe"),f=d.getAttribute("src");b.parents("section").forEach(function(a){a.style.zIndex="5000"});if(f){if(-1!==f.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==f.indexOf("vimeo")){var e=new Vimeo.Player(d);e.play()}}else{var g=d.parentNode.querySelector("video");
g&&g.play&&g.play()}var h=b.parents("section")[0],m=h.querySelector(h.querySelector("[data-modal]").getAttribute("data-modal"));m.style.display="table";m.addEventListener("click",function(b){"VIDEO"!==b.target.tagName&&(f?(-1!==f.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==f.indexOf("vimeo")&&e.pause()):(b=d.parentNode.querySelector("video"))&&b.pause&&b.pause(),m.style.display="none",m.removeEventListener("click",a),h.style.zIndex="0")})};
document.querySelectorAll(".modalWindow-video > iframe").forEach(function(a){var b=a.getAttribute("data-src");if(b){a.removeAttribute("data-src");var f=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);if(-1!==b.indexOf("youtu"))a.setAttribute("src","https://youtube.com/embed/"+f[6]+"?rel=0&enablejsapi=1");else if(-1!==b.indexOf("vimeo"))a.setAttribute("src","https://player.vimeo.com/video/"+
f[6]+"?autoplay=0&loop=0");else if(/\.mp4|\.webm|\.ogg|\.ogv|\.m4a|\.m4v/.test(b)){f=document.createElement("video");f.onloadeddata=function(a){a.target.style.height=a.target.videoHeight>a.target.videoWidth?window.innerHeight-.2*window.innerHeight+"px":"100%"};var e=a.parents("section")[0].querySelector("img");e&&f.setAttribute("poster",e.src);f.setAttribute("controls","");f.setAttribute("playsinline","");f.setAttribute("loop","");f.setAttribute("src",b);a.style.display="none";f.style.width="100%";
a.after(f)}}});document.querySelector("[data-modal]")&&document.querySelectorAll("[data-modal]").forEach(function(b){b.addEventListener("click",a)})}});if(!h){var q=document.querySelectorAll(".dropdown-toggle.show"),B=document.querySelectorAll(".dropdown-menu.show, .dropdown.open"),N=document.querySelectorAll(".dropdown.open");q.forEach(function(a){a.classList.remove("show");a.ariaExpanded="false"});B.forEach(function(a){return a.classList.remove("show")});N.forEach(function(a){return a.classList.remove("open")});
!v()&&(q=document.querySelector("section.menu"))&&(B=window.innerWidth,!q.querySelector(".navbar").classList.contains("collapsed")&&991<B&&(q.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")||a.querySelector("a").parentNode.classList.toggle("open")});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").parentNode.classList.toggle("open")})}),q.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach(function(a){a.addEventListener("mouseover",
function(){a.classList.contains("open")||a.classList.toggle("open")});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.classList.toggle("open")})})))}h||("undefined"===typeof window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(x(a),J(a))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=document.body.querySelectorAll("section.popup-btn-cards").length&&
(window.initPopupBtnPlugin=!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function(a){a.classList.add("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){x(a)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,t(function(){0!=document.querySelectorAll(".accordionStyles").length&&
document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.classList.contains("collapsed")||a.classList.add("collapsed")})}),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.addEventListener("click",function(){var b=a.closest(".accordionStyles").getAttribute("id"),c=a.closest(".card").querySelector(".panel-collapse"),d=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");
!c.classList.contains("collapsing")||-1==b.indexOf("toggle")&&-1==b.indexOf("accordion")||(a.classList.contains("collapsed")?(d.classList.remove("mbri-arrow-up"),d.classList.add("mbri-arrow-down")):(d.classList.remove("mbri-arrow-down"),d.classList.add("mbri-arrow-up")),-1!=b.indexOf("accordion")&&(b=a.closest(".accordionStyles"),Array.from(b.children).filter(function(a){return a.querySelector("span.sign")!==d}).forEach(function(a){a=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");
a.classList.remove("mbri-arrow-up");a.classList.add("mbri-arrow-down")})))})})),0!=document.querySelectorAll(".mbr-slider.carousel").length&&document.querySelectorAll(".mbr-slider.carousel").forEach(function(a){var b=a.querySelectorAll(".carousel-control"),c=a.querySelectorAll(".carousel-indicators li"),d=function(a){a.stopPropagation();a.preventDefault()};a.addEventListener("slide.bs.carousel",function(){b.forEach(function(a){a.addEventListener("click",d)});c.forEach(function(a){a.addEventListener("click",
d)});p&&e(a).carousel({keyboard:!1})});a.addEventListener("slid.bs.carousel",function(){b.forEach(function(a){a.removeEventListener("click",d)});c.forEach(function(a){a.removeEventListener("click",d)});p&&e(a).carousel({keyboard:!0});1<a.querySelectorAll(".carousel-item.active").length&&(a.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),a.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))})}));if(h){if(!p)return;e(document).on("add.cards",function(a){e(a.target).find(".form-with-styler").length&&
(a=e(a.target).find(".form-with-styler"),e(a).find('select:not("[multiple]")').each(function(){e(this).styler&&e(this).styler()}),e(a).find("input[type=number]").each(function(){e(this).styler&&(e(this).styler(),e(this).parent().parent().removeClass("form-control"))}),e(a).find("input[type=date]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),e(a).find("input[type=time]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"H:i",
datepicker:!1})}))})}document.querySelectorAll('input[type="range"]').forEach(function(a){a.addEventListener("change",function(a){a.target.parents(".form-group").forEach(function(c){c.querySelector(".value").innerHTML=a.target.value})})});if(h)e(document).on("add.cards changeParameter.cards",function(a,b){"undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress");b?L(a.target,b):a.target.querySelectorAll(".pie_progress").length&&a.target.querySelectorAll(".pie_progress").forEach(function(a){D(a)})});
else document.querySelectorAll(".pie_progress").length&&("undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress"),document.querySelectorAll(".pie_progress").forEach(function(a){D(a)}));if(h&&p)e(document).on("add.cards",function(a){e(a.target).hasClass("testimonials-slider")&&x(a.target)}).on("changeParameter.cards",function(a,b,c){"testimonialsSlides"===b&&0==e(a.target).find(".carousel-item.active").length&&C(a.target)});else"undefined"===typeof window.initTestimonialsPlugin&&
(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){x(a)}));t(function(){h||Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){if(window.Event&&"function"===typeof window.Event)var b=new Event("add.cards");else b=document.createEvent("CustomEvent"),b.initEvent("add.cards",!0,!0);a.dispatchEvent(b)})});t(function(){window.addEventListener("scroll",function(){var a=document.querySelector(".navbar-dropdown"),
b=document.querySelector(".navbar-collapse");if(a&&!a.classList.contains("opacityScrollOff")){var c=1<document.documentElement.scrollTop;a.classList.toggle("opacityScroll",!c);b.classList.toggle("opacityScroll",!c)}})});if(h)e(document).on("add.cards",E);else window.addEventListener("DOMContentLoaded",E);if(h)e(document).on("add.cards",F);else window.addEventListener("DOMContentLoaded",F)})();
!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/drag-drop-website-builder.html">drag and drop website builder</a> Mobirise v5.9.18 <a href="https://mobirise.com?u=3571580"> Website Building Software</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();
