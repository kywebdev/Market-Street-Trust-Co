import Rellax from 'rellax';
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

// make Flickity a jQuery plugin
jQueryBridget( 'flickity', Flickity, $ );

// https://foundation.zurb.com/learn/foundation-6-installing-js-plugins.html

/* ~~~~~~~~~~~~~~~~~~~~ PRISM ~~~~~~~~~~~~~~~~~~~~

PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+scss */

var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var r=n.util.type(e);switch(t=t||{},r){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a={};t[n.util.objId(e)]=a;for(var l in e)e.hasOwnProperty(l)&&(a[l]=n.util.clone(e[l],t));return a;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a=[];return t[n.util.objId(e)]=a,e.forEach(function(e,r){a[r]=n.util.clone(e,t)}),a}return e}},languages:{extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var a in t)r[a]=t[a];return r},insertBefore:function(e,t,r,a){a=a||n.languages;var l=a[e];if(2==arguments.length){r=arguments[1];for(var i in r)r.hasOwnProperty(i)&&(l[i]=r[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);o[s]=l[s]}return n.languages.DFS(n.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=o)}),a[e]=o},DFS:function(e,t,r,a){a=a||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],r||l),"Object"!==n.util.type(e[l])||a[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||a[n.util.objId(e[l])]||(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,a)):(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,a)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var a={callback:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var l,i=a.elements||e.querySelectorAll(a.selector),o=0;l=i[o++];)n.highlightElement(l,t===!0,a.callback)},highlightElement:function(t,r,a){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1].toLowerCase(),i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l));var s=t.textContent,u={element:t,language:l,grammar:i,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),r&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,a){var l={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",l),l.tokens=n.tokenize(l.code,l.grammar),n.hooks.run("after-tokenize",l),r.stringify(n.util.encode(l.tokens),l.language)},matchGrammar:function(e,t,r,a,l,i,o){var s=n.Token;for(var u in r)if(r.hasOwnProperty(u)&&r[u]){if(u==o)return;var g=r[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=a,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){if(m&&b!=t.length-1){h.lastIndex=k;var _=h.exec(e);if(!_)break;for(var j=_.index+(d?_[1].length:0),P=_.index+_[0].length,A=b,x=k,O=t.length;O>A&&(P>x||!t[A].type&&!t[A-1].greedy);++A)x+=t[A].length,j>=x&&(++b,k=x);if(t[b]instanceof s)continue;I=A-b,w=e.slice(k,x),_.index-=k}else{h.lastIndex=0;var _=h.exec(w),I=1}if(_){d&&(p=_[1]?_[1].length:0);var j=_.index+p,_=_[0].slice(p),P=j+_.length,N=w.slice(0,j),S=w.slice(P),C=[b,I];N&&(++b,k+=N.length,C.push(N));var E=new s(u,f?n.tokenize(_,f):_,y,_,m);if(C.push(E),S&&C.push(S),Array.prototype.splice.apply(t,C),1!=I&&n.matchGrammar(e,t,r,b,k,!0,u),i)break}else if(i)break}}}}},tokenize:function(e,t){var r=[e],a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var a,l=0;a=r[l++];)a(t)}}},r=n.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var l={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(o?" "+o:"")+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(n.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,a=t.code,l=t.immediateClose;_self.postMessage(n.highlight(a,n.languages[r],r)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(n.filename=a.src,n.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,"function":/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),Prism.languages.javascript["template-string"].inside.interpolation.inside.rest=Prism.languages.javascript,Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;



/* ~~~~~~~~~~~~~~~~~~~~ SCROLLSPY ~~~~~~~~~~~~~~~~~~~~ */

!function(t,e){t.fn.extend({scrollspy:function(n){var a={namespace:"scrollspy",activeClass:"active",animate:!1,offset:0,container:e};n=t.extend({},a,n);var o=function(t,e){return parseInt(t,10)+parseInt(e,10)},r=function(e){for(var n=[],a=0;a<e.length;a++){var o=e[a],r=t(o).attr("href"),f=t(r);if(f.length>0){var s=Math.floor(f.offset().top),i=s+Math.floor(f.outerHeight());n.push({element:f,hash:r,top:s,bottom:i})}}return n},f=function(e,n){for(var a=0;a<e.length;a++){var o=t(e[a]);if(o.attr("href")===n)return o}},s=function(e){for(var a=0;a<e.length;a++){var o=t(e[a]);o.parent().removeClass(n.activeClass)}};return this.each(function(){for(var a=this,i=t(n.container),l=t(a).find("a"),c=0;c<l.length;c++){var h=l[c];t(h).on("click",function(a){var r=t(this).attr("href"),f=t(r);if(f.length>0){var s=o(f.offset().top,n.offset);n.animate?t("html, body").animate({scrollTop:s},1e3):e.scrollTo(0,s),a.preventDefault()}})}var v=r(l);i.bind("scroll."+n.namespace,function(){for(var e,r={top:o(t(this).scrollTop(),Math.abs(n.offset)),left:t(this).scrollLeft()},i=0;i<v.length;i++){var c=v[i];if(r.top>=c.top&&r.top<c.bottom){var h=c.hash;if(e=f(l,h)){n.onChange&&n.onChange(c.element,t(a),r),s(l),e.parent().addClass(n.activeClass);break}}}!e&&n.onExit&&n.onExit(t(a),r)})})}})}(jQuery,window,document,void 0);



/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 * 
 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
 * https://github.com/morr/jquery.appear
 *
 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 */
(function($) {
    var selectors = [];
  
    var check_binded = false;
    var check_lock = false;
    var defaults = {
      interval: 250,
      force_process: false
    }
    var $window = $(window);
  
    var $prior_appeared;
  
    function process() {
      check_lock = false;
      for (var index = 0; index < selectors.length; index++) {
        var $appeared = $(selectors[index]).filter(function() {
          return $(this).is(':appeared');
        });
  
        $appeared.trigger('appear', [$appeared]);
  
        if ($prior_appeared) {
          
          var $disappeared = $prior_appeared.not($appeared);
          $disappeared.trigger('disappear', [$disappeared]);
        }
        $prior_appeared = $appeared;
      }
    }
  
    // "appeared" custom filter
    $.expr[':']['appeared'] = function(element) {
      var $element = $(element);
      if (!$element.is(':visible')) {
        return false;
      }
  
      var window_left = $window.scrollLeft();
      var window_top = $window.scrollTop();
      var offset = $element.offset();
      var left = offset.left;
      var top = offset.top;
  
      if (top + $element.height() >= window_top &&
          top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
          left + $element.width() >= window_left &&
          left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
        return true;
      } else {
        return false;
      }
    }
  
    $.fn.extend({
      // watching for element's appearance in browser viewport
      appear: function(options) {
        var opts = $.extend({}, defaults, options || {});
        var selector = this.selector || this;
        if (!check_binded) {
          var on_check = function() {
            if (check_lock) {
              return;
            }
            check_lock = true;
  
            setTimeout(process, opts.interval);
          };
  
          $(window).scroll(on_check).resize(on_check);
          check_binded = true;
        }
  
        if (opts.force_process) {
          setTimeout(process, opts.interval);
        }
        selectors.push(selector);
        return $(selector);
      }
    });
  
    $.extend({
      // force elements's appearance check
      force_appear: function() {
        if (check_binded) {
          process();
          return true;
        };
        return false;
      }
    });
  })(jQuery);
  
  
  
  /*!
   * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
   * http://benalman.com/projects/jquery-dotimeout-plugin/
   * 
   * Copyright (c) 2010 "Cowboy" Ben Alman
   * Dual licensed under the MIT and GPL licenses.
   * http://benalman.com/about/license/
   */
  
  // Script: jQuery doTimeout: Like setTimeout, but better!
  //
  // *Version: 1.0, Last updated: 3/3/2010*
  // 
  // Project Home - http://benalman.com/projects/jquery-dotimeout-plugin/
  // GitHub       - http://github.com/cowboy/jquery-dotimeout/
  // Source       - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.js
  // (Minified)   - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.min.js (1.0kb)
  // 
  // About: License
  // 
  // Copyright (c) 2010 "Cowboy" Ben Alman,
  // Dual licensed under the MIT and GPL licenses.
  // http://benalman.com/about/license/
  // 
  // About: Examples
  // 
  // These working examples, complete with fully commented code, illustrate a few
  // ways in which this plugin can be used.
  // 
  // Debouncing      - http://benalman.com/code/projects/jquery-dotimeout/examples/debouncing/
  // Delays, Polling - http://benalman.com/code/projects/jquery-dotimeout/examples/delay-poll/
  // Hover Intent    - http://benalman.com/code/projects/jquery-dotimeout/examples/hoverintent/
  // 
  // About: Support and Testing
  // 
  // Information about what version or versions of jQuery this plugin has been
  // tested with, what browsers it has been tested in, and where the unit tests
  // reside (so you can test it yourself).
  // 
  // jQuery Versions - 1.3.2, 1.4.2
  // Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
  // Unit Tests      - http://benalman.com/code/projects/jquery-dotimeout/unit/
  // 
  // About: Release History
  // 
  // 1.0 - (3/3/2010) Callback can now be a string, in which case it will call
  //       the appropriate $.method or $.fn.method, depending on where .doTimeout
  //       was called. Callback must now return `true` (not just a truthy value)
  //       to poll.
  // 0.4 - (7/15/2009) Made the "id" argument optional, some other minor tweaks
  // 0.3 - (6/25/2009) Initial release
  
  (function($){
    '$:nomunge'; // Used by YUI compressor.
    
    var cache = {},
      
      // Reused internal string.
      doTimeout = 'doTimeout',
      
      // A convenient shortcut.
      aps = Array.prototype.slice;
    
    // Method: jQuery.doTimeout
    // 
    // Initialize, cancel, or force execution of a callback after a delay.
    // 
    // If delay and callback are specified, a doTimeout is initialized. The
    // callback will execute, asynchronously, after the delay. If an id is
    // specified, this doTimeout will override and cancel any existing doTimeout
    // with the same id. Any additional arguments will be passed into callback
    // when it is executed.
    // 
    // If the callback returns true, the doTimeout loop will execute again, after
    // the delay, creating a polling loop until the callback returns a non-true
    // value.
    // 
    // Note that if an id is not passed as the first argument, this doTimeout will
    // NOT be able to be manually canceled or forced. (for debouncing, be sure to
    // specify an id).
    // 
    // If id is specified, but delay and callback are not, the doTimeout will be
    // canceled without executing the callback. If force_mode is specified, the
    // callback will be executed, synchronously, but will only be allowed to
    // continue a polling loop if force_mode is true (provided the callback
    // returns true, of course). If force_mode is false, no polling loop will
    // continue, even if the callback returns true.
    // 
    // Usage:
    // 
    // > jQuery.doTimeout( [ id, ] delay, callback [, arg ... ] );
    // > jQuery.doTimeout( id [, force_mode ] );
    // 
    // Arguments:
    // 
    //  id - (String) An optional unique identifier for this doTimeout. If id is
    //    not specified, the doTimeout will NOT be able to be manually canceled or
    //    forced.
    //  delay - (Number) A zero-or-greater delay in milliseconds after which
    //    callback will be executed. 
    //  callback - (Function) A function to be executed after delay milliseconds.
    //  callback - (String) A jQuery method to be executed after delay
    //    milliseconds. This method will only poll if it explicitly returns
    //    true.
    //  force_mode - (Boolean) If true, execute that id's doTimeout callback
    //    immediately and synchronously, continuing any callback return-true
    //    polling loop. If false, execute the callback immediately and
    //    synchronously but do NOT continue a callback return-true polling loop.
    //    If omitted, cancel that id's doTimeout.
    // 
    // Returns:
    // 
    //  If force_mode is true, false or undefined and there is a
    //  yet-to-be-executed callback to cancel, true is returned, but if no
    //  callback remains to be executed, undefined is returned.
    
    $[doTimeout] = function() {
      return p_doTimeout.apply( window, [ 0 ].concat( aps.call( arguments ) ) );
    };
    
    // Method: jQuery.fn.doTimeout
    // 
    // Initialize, cancel, or force execution of a callback after a delay.
    // Operates like <jQuery.doTimeout>, but the passed callback executes in the
    // context of the jQuery collection of elements, and the id is stored as data
    // on the first element in that collection.
    // 
    // If delay and callback are specified, a doTimeout is initialized. The
    // callback will execute, asynchronously, after the delay. If an id is
    // specified, this doTimeout will override and cancel any existing doTimeout
    // with the same id. Any additional arguments will be passed into callback
    // when it is executed.
    // 
    // If the callback returns true, the doTimeout loop will execute again, after
    // the delay, creating a polling loop until the callback returns a non-true
    // value.
    // 
    // Note that if an id is not passed as the first argument, this doTimeout will
    // NOT be able to be manually canceled or forced (for debouncing, be sure to
    // specify an id).
    // 
    // If id is specified, but delay and callback are not, the doTimeout will be
    // canceled without executing the callback. If force_mode is specified, the
    // callback will be executed, synchronously, but will only be allowed to
    // continue a polling loop if force_mode is true (provided the callback
    // returns true, of course). If force_mode is false, no polling loop will
    // continue, even if the callback returns true.
    // 
    // Usage:
    // 
    // > jQuery('selector').doTimeout( [ id, ] delay, callback [, arg ... ] );
    // > jQuery('selector').doTimeout( id [, force_mode ] );
    // 
    // Arguments:
    // 
    //  id - (String) An optional unique identifier for this doTimeout, stored as
    //    jQuery data on the element. If id is not specified, the doTimeout will
    //    NOT be able to be manually canceled or forced.
    //  delay - (Number) A zero-or-greater delay in milliseconds after which
    //    callback will be executed. 
    //  callback - (Function) A function to be executed after delay milliseconds.
    //  callback - (String) A jQuery.fn method to be executed after delay
    //    milliseconds. This method will only poll if it explicitly returns
    //    true (most jQuery.fn methods return a jQuery object, and not `true`,
    //    which allows them to be chained and prevents polling).
    //  force_mode - (Boolean) If true, execute that id's doTimeout callback
    //    immediately and synchronously, continuing any callback return-true
    //    polling loop. If false, execute the callback immediately and
    //    synchronously but do NOT continue a callback return-true polling loop.
    //    If omitted, cancel that id's doTimeout.
    // 
    // Returns:
    // 
    //  When creating a <jQuery.fn.doTimeout>, the initial jQuery collection of
    //  elements is returned. Otherwise, if force_mode is true, false or undefined
    //  and there is a yet-to-be-executed callback to cancel, true is returned,
    //  but if no callback remains to be executed, undefined is returned.
    
    $.fn[doTimeout] = function() {
      var args = aps.call( arguments ),
        result = p_doTimeout.apply( this, [ doTimeout + args[0] ].concat( args ) );
      
      return typeof args[0] === 'number' || typeof args[1] === 'number'
        ? this
        : result;
    };
    
    function p_doTimeout( jquery_data_key ) {
      var that = this,
        elem,
        data = {},
        
        // Allows the plugin to call a string callback method.
        method_base = jquery_data_key ? $.fn : $,
        
        // Any additional arguments will be passed to the callback.
        args = arguments,
        slice_args = 4,
        
        id        = args[1],
        delay     = args[2],
        callback  = args[3];
      
      if ( typeof id !== 'string' ) {
        slice_args--;
        
        id        = jquery_data_key = 0;
        delay     = args[1];
        callback  = args[2];
      }
      
      // If id is passed, store a data reference either as .data on the first
      // element in a jQuery collection, or in the internal cache.
      if ( jquery_data_key ) { // Note: key is 'doTimeout' + id
        
        // Get id-object from the first element's data, otherwise initialize it to {}.
        elem = that.eq(0);
        elem.data( jquery_data_key, data = elem.data( jquery_data_key ) || {} );
        
      } else if ( id ) {
        // Get id-object from the cache, otherwise initialize it to {}.
        data = cache[ id ] || ( cache[ id ] = {} );
      }
      
      // Clear any existing timeout for this id.
      data.id && clearTimeout( data.id );
      delete data.id;
      
      // Clean up when necessary.
      function cleanup() {
        if ( jquery_data_key ) {
          elem.removeData( jquery_data_key );
        } else if ( id ) {
          delete cache[ id ];
        }
      };
      
      // Yes, there actually is a setTimeout call in here!
      function actually_setTimeout() {
        data.id = setTimeout( function(){ data.fn(); }, delay );
      };
      
      if ( callback ) {
        // A callback (and delay) were specified. Store the callback reference for
        // possible later use, and then setTimeout.
        data.fn = function( no_polling_loop ) {
          
          // If the callback value is a string, it is assumed to be the name of a
          // method on $ or $.fn depending on where doTimeout was executed.
          if ( typeof callback === 'string' ) {
            callback = method_base[ callback ];
          }
          
          callback.apply( that, aps.call( args, slice_args ) ) === true && !no_polling_loop
            
            // Since the callback returned true, and we're not specifically
            // canceling a polling loop, do it again!
            ? actually_setTimeout()
            
            // Otherwise, clean up and quit.
            : cleanup();
        };
        
        // Set that timeout!
        actually_setTimeout();
        
      } else if ( data.fn ) {
        // No callback passed. If force_mode (delay) is true, execute the data.fn
        // callback immediately, continuing any callback return-true polling loop.
        // If force_mode is false, execute the data.fn callback immediately but do
        // NOT continue a callback return-true polling loop. If force_mode is
        // undefined, simply clean up. Since data.fn was still defined, whatever
        // was supposed to happen hadn't yet, so return true.
        delay === undefined ? cleanup() : data.fn( delay === false );
        return true;
        
      } else {
        // Since no callback was passed, and data.fn isn't defined, it looks like
        // whatever was supposed to happen already did. Clean up and quit!
        cleanup();
      }
      
    };
    
  })(jQuery);
  
  
  
  
  //CSS3 Animate-it
  $('.animatedParent').appear();
  $('.animatedClick').click(function(){
    var target = $(this).attr('data-target');
  
    
    if($(this).attr('data-sequence') != undefined){
      var firstId = $("."+target+":first").attr('data-id');
      var lastId = $("."+target+":last").attr('data-id');
      var number = firstId;
  
      //Add or remove the class
      if($("."+target+"[data-id="+ number +"]").hasClass('go')){
        $("."+target+"[data-id="+ number +"]").addClass('goAway');
        $("."+target+"[data-id="+ number +"]").removeClass('go');
      }else{
        $("."+target+"[data-id="+ number +"]").addClass('go');
        $("."+target+"[data-id="+ number +"]").removeClass('goAway');
      }
      number ++;
      delay = Number($(this).attr('data-sequence'));
      $.doTimeout(delay, function(){
        console.log(lastId);
        
        //Add or remove the class
        if($("."+target+"[data-id="+ number +"]").hasClass('go')){
          $("."+target+"[data-id="+ number +"]").addClass('goAway');
          $("."+target+"[data-id="+ number +"]").removeClass('go');
        }else{
          $("."+target+"[data-id="+ number +"]").addClass('go');
          $("."+target+"[data-id="+ number +"]").removeClass('goAway');
        }
  
        //increment
        ++number;
  
        //continute looping till reached last ID
        if(number <= lastId){return true;}
      });
    }else{
      if($('.'+target).hasClass('go')){
        $('.'+target).addClass('goAway');
        $('.'+target).removeClass('go');
      }else{
        $('.'+target).addClass('go');
        $('.'+target).removeClass('goAway');
      }
    } 
  });
  
  $(document.body).on('appear', '.animatedParent', function(e, $affected){
    var ele = $(this).find('.animated');
    var parent = $(this);
    
  
    if(parent.attr('data-sequence') != undefined){
      
      var firstId = $(this).find('.animated:first').attr('data-id');
      var number = firstId;
      var lastId = $(this).find('.animated:last').attr('data-id');
  
      $(parent).find(".animated[data-id="+ number +"]").addClass('go');
      number ++;
      delay = Number(parent.attr('data-sequence'));
  
      $.doTimeout(delay, function(){
        $(parent).find(".animated[data-id="+ number +"]").addClass('go');
        ++number;
        if(number <= lastId){return true;}
      });
    }else{
      ele.addClass('go');
    }
    
  });
  
   $(document.body).on('disappear', '.animatedParent', function(e, $affected) {
    if(!$(this).hasClass('animateOnce')){
      $(this).find('.animated').removeClass('go');
     }
   });
  
   $(window).on('load',function(){
    $.force_appear();
   });  



/* ~~~~~~~~~~~~~~~~~~~~ STYLE GUIDE CUSTOM SCRIPTS ~~~~~~~~~~~~~~~~~~~~ */

$(document).ready(function() {

    // back to top smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': 0 + $target.offset().top
        }, 900, 'swing', function() {});
    });

    // toggle the style guide nav menu
    $('.sg-menu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-is-open');
    });

    // show/hide the style guide header depending on scroll position
    function init() {
        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = window.innerHeight - 83,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                $('header').addClass('is-scrolled').removeClass('not-scrolled');
            } else if ($('header').hasClass('is-scrolled')) {
                $('header').addClass('not-scrolled').removeClass('is-scrolled');
            }
        });
    }
    window.onload = init();

    // scrollspy
    $(".sg-nav").scrollspy({
        activeClass: 'is-active'
    });

    // template and wireframe sliders
    /*$('.sg-templates').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
            breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });*/

    // click to copy buttons
    new ClipboardJS('.copy-btn');

});



/* ~~~~~~~~~~~~~~~~~~~~ SITE-SPECIFIC CUSTOM SCRIPTS ~~~~~~~~~~~~~~~~~~~~ */

// Scrollspy
/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			var elTop = element.offset().top,
				elLeft = element.offset().left,
				elRight = elLeft + element.width(),
				elBottom = elTop + element.height();

			var isIntersect = !(elLeft > right ||
				elRight < left ||
				elTop > bottom ||
				elBottom < top);

			if (isIntersect) {
				hits.push(element);
			}
		});

		return hits;
	}

	/**
	 * Called when the user scrolls the window
	 */
	function onScroll() {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top+offset.top, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}

	/**
	 * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @type {function}
	 * @return {number}
	 */
	var getTime = (Date.now || function () {
		return new Date().getTime();
	});

	/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */
	function throttle(func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		options || (options = {});
		var later = function () {
			previous = options.leading === false ? 0 : getTime();
			timeout = null;
			result = func.apply(context, args);
			context = args = null;
		};
		return function () {
			var now = getTime();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);
				context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
		});
		options = options || {
			throttle: 100
		};

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = throttle(onScroll, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);

// paraxify
!function(e,t,i){"use strict";var o;o=function(i,o){var s,n,r,h,f,g,c;return g=0,c=0,r=0,h={},f=[],n=0,s=function(t,i){this.options={speed:1,boost:0};for(r in i)this.options[r]=i[r];if((this.options.speed<0||this.options.speed>1)&&(this.options.speed=1),t||(t="paraxify"),e.getElementsByClassName(t.replace(".","")))this.photos=e.getElementsByClassName(t.replace(".",""));else{if(e.querySelector(t)===!1)throw new Error("The elements you're trying to select don't exist.");this.photos=querySelector(t)}h=this.options,f=this.photos,this._init(this)},s.prototype={update:function(){for(c=t.innerHeight,r=0;r<f.length;)f[r].style.backgroundPosition="center center",f[r].url=t.getComputedStyle(f[r],!1).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi,"$2").split(",")[0],f[r].img||(f[r].img=new Image),f[r].url!==f[r].img.src&&(this._check(r),f[r].img.src=f[r].url),r++;this._animate()},_init:function(){this.update(),t.onscroll=function(){this._animate()}.bind(this),t.onresize=function(){this.update()}.bind(this)},_check:function(e){var i,o;o=f[e],o.ok=!0,o.bgSize=t.getComputedStyle(o,!1).backgroundSize,i=c,f[e].img.onload=function(){if(""===o.bgSize||"auto"===o.bgSize){if(this.height<o.offsetHeight)throw o.ok=!1,new Error("The image "+o.url+" ("+this.height+"px) is too short for that container ("+o.offsetHeight+"px).");i=this.height,this.height<c&&(i+=(c-o.offsetHeight)*h.speed)}else if("cover"===o.bgSize){if(c<o.offsetHeight)throw o.ok=!1,new Error("The container ("+o.offsetHeight+"px) can't be bigger than the image ("+c+"px).")}else"cover"===t.getComputedStyle(o,!1).backgroundSize,this._check(e);o.diff=-(i-o.offsetHeight)*h.speed,o.diff=o.diff-o.offsetHeight*h.boost}},_visible:function(e){return g+c>f[e].offsetTop&&g<f[e].offsetTop+f[e].offsetHeight?!0:!1},_animate:function(){var i,o;for(g=void 0!==t.pageYOffset?t.pageYOffset:(e.documentElement||e.body.parentNode||e.body).scrollTop,r=0;r<f.length;)this._check(r),f[r].ok&&"fixed"===t.getComputedStyle(f[r],!1).backgroundAttachment&&this._visible(r)?(i=(g-f[r].offsetTop+c)/(f[r].offsetHeight+c),o=f[r].diff*(i-.5),"cover"!==f[r].bgSize&&(o+=(c-f[r].img.height)/2),o=Math.round(100*o)/100):o="center",f[r].style.backgroundPosition="center "+o+"px",r++}},new s(i,o)},t.paraxify=o}(document,window,0);



$(document).ready(function() {

    // scrollspy
    $('.section').on('scrollSpy:enter', function() {
    	console.log('enter:', $(this).attr('id'));
    });

    $('.section').on('scrollSpy:exit', function() {
    	console.log('exit:', $(this).attr('id'));
    });

    $('.section').scrollSpy();

    // TODO: Look for a better scrollspy plugin, possibly this: https://bootsnipp.com/snippets/a35lo

    var refreshScrollSpy = function (element, navElement, offset) {
    // cache current scroll position to come back after refreshing
    var cacheScrolltop = $(element).scrollTop();
       $(element)
       .scrollTop(0)
       .scrollspy('refresh')
       .scrollTop(cacheScrolltop);
    };

    // don't scroll nav items when clicked
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
    });

    // take the text of the first section anchor in the sidebar and insert it into the header anchor
    var firstSection = $('.section-wrapper:first-of-type .sidebar .nav .nav-item:nth-of-type(2)').text();
    $('.section-wrapper:first-of-type .sidebar .nav .nav-item:first-of-type .nav-link').text(firstSection);
    
    // change position of sidebar depending on scroll position
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 150) {
            $('.sidebar').addClass('is-fixed').removeClass('is-absolute');
        } else if ($('.sidebar').hasClass('is-fixed')) {
            $('.sidebar').addClass('is-absolute').removeClass('is-fixed');
        }
    });

    // add/remove class to hovered elements
    $('a').hover(
        function () {
            $(this).removeClass('out').addClass('over');
        },
        function () {
            $(this).removeClass('over').addClass('out');
        }
    );

    // arrow cursor (project card)
    $('.project-card').on('mousemove', function(e){
		$('#arrow-cursor').css({
			left:  e.pageX - 127 + 'px',
			top:   e.pageY - 85 + 'px',
            pointerEvents: 'none'
		});
    });
    $('.project-card').mouseleave(function() {
		$('#arrow-cursor').css({
			display: 'none'
		});
    });
    $('.project-card').mouseenter(function() {
		$('#arrow-cursor').css({
			display: 'block'
		});
    });

    // arrow cursor (intro card)
    $('.intro-card').on('mousemove', function(e){
        $('#arrow-cursor').css({
            left:  e.pageX - 127 + 'px',
            top:   e.pageY - 85 + 'px',
            pointerEvents: 'none'
        });
    });
    $('.intro-card').mouseleave(function() {
        $('#arrow-cursor').css({
            display: 'none'
        });
    });
    $('.intro-card').mouseenter(function() {
        $('#arrow-cursor').css({
            display: 'block'
        });
    });

    // arrow cursor (nav)
    $('.vault__nav__nav-item__link').on('mousemove', function(e){
		$('#arrow-cursor').css({
			left:  e.pageX - 127 + 'px',
			top:   e.pageY - 85 + 'px',
            pointerEvents: 'none'
		});
    });
    $('.vault__nav__nav-item__link').mouseleave(function() {
		$('#arrow-cursor').css({
			display: 'none'
		});
    });
    $('.vault__nav__nav-item__link').mouseenter(function() {
		$('#arrow-cursor').css({
			display: 'block'
		});
    });
    
    // play cursor
    $('.video-poster').on('mousemove', function(e){
		$('#play-cursor').css({
			left:  e.pageX - 60 + 'px',
			top:   e.pageY - 85 + 'px',
            pointerEvents: 'none'
		});
    });
    $('.video-poster').mouseleave(function() {
		$('#play-cursor').css({
			display: 'none'
		});
    });
    $('.video-poster').mouseenter(function() {
		$('#play-cursor').css({
			display: 'block'
		});
    });

    // toggle the vault menu
    $('.vault-toggle').on('click', function(e) {
        e.preventDefault();
        $('.vault').toggleClass('is-open');
        $('.vault').addClass('is-changing');
        setTimeout(function() {
            $('.vault').removeClass('is-changing');
        }, 1000);
    });

    // move the social icons into the vault
    function moveSocialToVault(width) {
        if (width <= 535) {
            $('.statement-social').insertBefore('.vault__nav');
        } else {
            $('.statement-social').prependTo('header .large-9');
        }
    }
    moveSocialToVault( $(window).width() );
        $(window).on('resize', function(){
            moveSocialToVault( $(this).width() );
    });
    
    // scroll the page to the next section when the scroll button is clicked (doing it this way so it doesn't interfere with the scrollspy script)
    $('#section1 .scroll-btn').on('click', function(e) {
        e.preventDefault();

        var $nextSection = $('#project-card-rollover');

        $('html, body').stop().animate({
            'scrollTop': 0 + $nextSection.offset().top
        }, 900, 'swing', function() {});
    });
    $('#section3 .scroll-btn').on('click', function(e) {
        e.preventDefault();

        var $nextSection = $('#section4');

        $('html, body').stop().animate({
            'scrollTop': 0 + $nextSection.offset().top
        }, 900, 'swing', function() {});
    });
    
    // if an iframe is on the page
    if($('iframe').length) {

        // make a new Vimeo player
        var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);

        // hide the video poster on click and play the video
        $('.video-poster').on('click', function() {
            $(this).fadeOut();
            $('.homepage-video').css('z-index', '2');
            player.play();
        });

        // show the video poster on pause
        player.on('pause', function() {
            $('.homepage-video').css('z-index', '1');
            $('.video-poster').fadeIn();
        });

        // show the video poster when the video ends
        player.on('ended', function() {
            $('.homepage-video').css('z-index', '1');
            $('.video-poster').fadeIn();
        });

    }

    // rellax parallax scrolling
    var rellax = new Rellax('.rellax');

    // adds class to enable footer animations
    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top + 400,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    var win = $(window);
    var allMods = $("footer");

    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    win.scroll(function(event) {
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });
    });

    // flickity sliders
    if ($('.from-right .slider').length) {
        $('.from-right .slider').flickity({
            cellAlign: 'left',
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false
        });
    }
    if ($('.from-left .slider').length) {
        $('.from-left .slider').flickity({
            cellAlign: 'right',
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            rightToLeft: true
        });
    }
    if ($('.branding__slider').length) {
        $('.branding__slider').flickity({
            prevNextButtons: true,
            groupCells: 1,
            pageDots: false,
        });
    }

    // move flickity buttons beneath branding text
    $('.branding__slider .flickity-prev-next-button').prependTo('.branding__text__slider-nav');

    // social sharing
    $('.share-fb').click(function(e) {
        e.preventDefault();
        var contentPath = window.location;
        shareURL = 'https://www.facebook.com/sharer/sharer.php?m2w&s=100&p[url]='+contentPath;
        window.open(shareURL, '_blank', 'height=350,width=550');
    });
    $('.share-tw').click(function(e) {
        e.preventDefault();
        var contentPath = window.location;
        shareURL = 'http://twitter.com/share?url='+contentPath;
        window.open(shareURL, '_blank', 'height=350,width=550');
    });

    // parallax background images
    var myParaxify = paraxify('selector', {
        speed: 1,
        boost: 0
    });
    myParaxify = paraxify('.paraxify');

});