/*!
* Vue.js v2.5.16
* (c) 2014-2018 Evan You
* Released under the MIT License.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";var y=Object.freeze({});function M(e){return null==e}function D(e){return null!=e}function S(e){return!0===e}function T(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function P(e){return null!==e&&"object"==typeof e}var r=Object.prototype.toString;function l(e){return"[object Object]"===r.call(e)}function i(e){var t=parseFloat(String(e));return 0<=t&&Math.floor(t)===t&&isFinite(e)}function t(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function F(e){var t=parseFloat(e);return isNaN(t)?e:t}function s(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var c=s("slot,component",!0),u=s("key,ref,slot,slot-scope,is");function f(e,t){if(e.length){var n=e.indexOf(t);if(-1<n)return e.splice(n,1)}}var n=Object.prototype.hasOwnProperty;function p(e,t){return n.call(e,t)}function e(t){var n=Object.create(null);return function(e){return n[e]||(n[e]=t(e))}}var o=/-(\w)/g,g=e(function(e){return e.replace(o,function(e,t){return t?t.toUpperCase():""})}),d=e(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),a=/\B([A-Z])/g,_=e(function(e){return e.replace(a,"-$1").toLowerCase()});var v=Function.prototype.bind?function(e,t){return e.bind(t)}:function(n,r){function e(e){var t=arguments.length;return t?1<t?n.apply(r,arguments):n.call(r,e):n.call(r)}return e._length=n.length,e};function h(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function m(e,t){for(var n in t)e[n]=t[n];return e}function b(e){for(var t={},n=0;n<e.length;n++)e[n]&&m(t,e[n]);return t}function $(e,t,n){}var O=function(e,t,n){return!1},w=function(e){return e};function C(t,n){if(t===n)return!0;var e=P(t),r=P(n);if(!e||!r)return!e&&!r&&String(t)===String(n);try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(e,t){return C(e,n[t])});if(i||o)return!1;var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(e){return C(t[e],n[e])})}catch(e){return!1}}function x(e,t){for(var n=0;n<e.length;n++)if(C(e[n],t))return n;return-1}function R(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var E="data-server-rendered",k=["component","directive","filter"],A=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],j={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:O,isReservedAttr:O,isUnknownElement:O,getTagNamespace:$,parsePlatformTagName:w,mustUseProp:O,_lifecycleHooks:A};function N(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var L=/[^\w.$]/;var I,H="__proto__"in{},B="undefined"!=typeof window,U="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,V=U&&WXEnvironment.platform.toLowerCase(),z=B&&window.navigator.userAgent.toLowerCase(),K=z&&/msie|trident/.test(z),J=z&&0<z.indexOf("msie 9.0"),q=z&&0<z.indexOf("edge/"),W=(z&&z.indexOf("android"),z&&/iphone|ipad|ipod|ios/.test(z)||"ios"===V),G=(z&&/chrome\/\d+/.test(z),{}.watch),Z=!1;if(B)try{var X={};Object.defineProperty(X,"passive",{get:function(){Z=!0}}),window.addEventListener("test-passive",null,X)}catch(e){}var Y=function(){return void 0===I&&(I=!B&&!U&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),I},Q=B&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ee(e){return"function"==typeof e&&/native code/.test(e.toString())}var te,ne="undefined"!=typeof Symbol&&ee(Symbol)&&"undefined"!=typeof Reflect&&ee(Reflect.ownKeys);te="undefined"!=typeof Set&&ee(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var re=$,ie=0,oe=function(){this.id=ie++,this.subs=[]};oe.prototype.addSub=function(e){this.subs.push(e)},oe.prototype.removeSub=function(e){f(this.subs,e)},oe.prototype.depend=function(){oe.target&&oe.target.addDep(this)},oe.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},oe.target=null;var ae=[];function se(e){oe.target&&ae.push(oe.target),oe.target=e}function ce(){oe.target=ae.pop()}var le=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ue={child:{configurable:!0}};ue.child.get=function(){return this.componentInstance},Object.defineProperties(le.prototype,ue);var fe=function(e){void 0===e&&(e="");var t=new le;return t.text=e,t.isComment=!0,t};function pe(e){return new le(void 0,void 0,void 0,String(e))}function de(e){var t=new le(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.isCloned=!0,t}var ve=Array.prototype,he=Object.create(ve);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(o){var a=ve[o];N(he,o,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,r=a.apply(this,e),i=this.__ob__;switch(o){case"push":case"unshift":n=e;break;case"splice":n=e.slice(2)}return n&&i.observeArray(n),i.dep.notify(),r})});var me=Object.getOwnPropertyNames(he),ye=!0;function ge(e){ye=e}var _e=function(e){(this.value=e,this.dep=new oe,this.vmCount=0,N(e,"__ob__",this),Array.isArray(e))?((H?be:$e)(e,he,me),this.observeArray(e)):this.walk(e)};function be(e,t,n){e.__proto__=t}function $e(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];N(e,o,t[o])}}function we(e,t){var n;if(P(e)&&!(e instanceof le))return p(e,"__ob__")&&e.__ob__ instanceof _e?n=e.__ob__:ye&&!Y()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new _e(e)),t&&n&&n.vmCount++,n}function Ce(n,e,r,t,i){var o=new oe,a=Object.getOwnPropertyDescriptor(n,e);if(!a||!1!==a.configurable){var s=a&&a.get;s||2!==arguments.length||(r=n[e]);var c=a&&a.set,l=!i&&we(r);Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(n):r;return oe.target&&(o.depend(),l&&(l.dep.depend(),Array.isArray(e)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(e))),e},set:function(e){var t=s?s.call(n):r;e===t||e!=e&&t!=t||(c?c.call(n,e):r=e,l=!i&&we(e),o.notify())}})}}function xe(e,t,n){if(Array.isArray(e)&&i(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ce(r.value,t,n),r.dep.notify(),n):e[t]=n}function ke(e,t){if(Array.isArray(e)&&i(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}_e.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ce(e,t[n])},_e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)we(e[t])};var Ae=j.optionMergeStrategies;function Oe(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),a=0;a<o.length;a++)r=e[n=o[a]],i=t[n],p(e,n)?l(r)&&l(i)&&Oe(r,i):xe(e,n,i);return e}function Se(n,r,i){return i?function(){var e="function"==typeof r?r.call(i,i):r,t="function"==typeof n?n.call(i,i):n;return e?Oe(e,t):t}:r?n?function(){return Oe("function"==typeof r?r.call(this,this):r,"function"==typeof n?n.call(this,this):n)}:r:n}function Te(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Ee(e,t,n,r){var i=Object.create(e||null);return t?m(i,t):i}Ae.data=function(e,t,n){return n?Se(e,t,n):t&&"function"!=typeof t?e:Se(e,t)},A.forEach(function(e){Ae[e]=Te}),k.forEach(function(e){Ae[e+"s"]=Ee}),Ae.watch=function(e,t,n,r){if(e===G&&(e=void 0),t===G&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in m(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Ae.props=Ae.methods=Ae.inject=Ae.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return m(i,e),t&&m(i,t),i},Ae.provide=Se;var je=function(e,t){return void 0===t?e:t};function Ne(n,r,i){"function"==typeof r&&(r=r.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[g(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[g(a)]=l(i)?i:{type:i};e.props=o}}(r),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?m({from:o},a):{from:a}}}}(r),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(r);var e=r.extends;if(e&&(n=Ne(n,e,i)),r.mixins)for(var t=0,o=r.mixins.length;t<o;t++)n=Ne(n,r.mixins[t],i);var a,s={};for(a in n)c(a);for(a in r)p(n,a)||c(a);function c(e){var t=Ae[e]||je;s[e]=t(n[e],r[e],i,e)}return s}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=g(n);if(p(i,o))return i[o];var a=d(o);return p(i,a)?i[a]:i[n]||i[o]||i[a]}}function Ie(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e],s=Pe(Boolean,i.type);if(-1<s)if(o&&!p(i,"default"))a=!1;else if(""===a||a===_(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!p(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Me(t.type)?r.call(e):r}(r,i,e);var l=ye;ge(!0),we(a),ge(l)}return a}function Me(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function De(e,t){return Me(e)===Me(t)}function Pe(e,t){if(!Array.isArray(t))return De(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(De(t[n],e))return n;return-1}function Fe(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Re(e,r,"errorCaptured hook")}}Re(e,t,n)}function Re(e,t,n){if(j.errorHandler)try{return j.errorHandler.call(null,e,t,n)}catch(e){He(e,null,"config.errorHandler")}He(e,t,n)}function He(e,t,n){if(!B&&!U||"undefined"==typeof console)throw e;console.error(e)}var Be,Ue,Ve=[],ze=!1;function Ke(){ze=!1;for(var e=Ve.slice(0),t=Ve.length=0;t<e.length;t++)e[t]()}var Je=!1;if("undefined"!=typeof setImmediate&&ee(setImmediate))Ue=function(){setImmediate(Ke)};else if("undefined"==typeof MessageChannel||!ee(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Ue=function(){setTimeout(Ke,0)};else{var qe=new MessageChannel,We=qe.port2;qe.port1.onmessage=Ke,Ue=function(){We.postMessage(1)}}if("undefined"!=typeof Promise&&ee(Promise)){var Ge=Promise.resolve();Be=function(){Ge.then(Ke),W&&setTimeout($)}}else Be=Ue;function Ze(e,t){var n;if(Ve.push(function(){if(e)try{e.call(t)}catch(e){Fe(e,t,"nextTick")}else n&&n(t)}),ze||(ze=!0,Je?Ue():Be()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Xe=new te;function Ye(e){!function e(t,n){var r,i;var o=Array.isArray(t);if(!o&&!P(t)||Object.isFrozen(t)||t instanceof le)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Xe),Xe.clear()}var Qe,et=e(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function tt(e){function i(){var e=arguments,t=i.fns;if(!Array.isArray(t))return t.apply(null,arguments);for(var n=t.slice(),r=0;r<n.length;r++)n[r].apply(null,e)}return i.fns=e,i}function nt(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=et(o),M(a)||(M(s)?(M(a.fns)&&(a=e[o]=tt(a)),n(c.name,a,c.once,c.capture,c.passive,c.params)):a!==s&&(s.fns=a,e[o]=s));for(o in t)M(e[o])&&r((c=et(o)).name,t[o],c.capture)}function rt(e,t,n){var r;e instanceof le&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function o(){n.apply(this,arguments),f(r.fns,o)}M(i)?r=tt([o]):D(i.fns)&&S(i.merged)?(r=i).fns.push(o):r=tt([i,o]),r.merged=!0,e[t]=r}function it(e,t,n,r,i){if(D(t)){if(p(t,n))return e[n]=t[n],i||delete t[n],!0;if(p(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ot(e){return T(e)?[pe(e)]:Array.isArray(e)?function e(t,n){var r=[];var i,o,a,s;for(i=0;i<t.length;i++)M(o=t[i])||"boolean"==typeof o||(a=r.length-1,s=r[a],Array.isArray(o)?0<o.length&&(at((o=e(o,(n||"")+"_"+i))[0])&&at(s)&&(r[a]=pe(s.text+o[0].text),o.shift()),r.push.apply(r,o)):T(o)?at(s)?r[a]=pe(s.text+o):""!==o&&r.push(pe(o)):at(o)&&at(s)?r[a]=pe(s.text+o.text):(S(t._isVList)&&D(o.tag)&&M(o.key)&&D(n)&&(o.key="__vlist"+n+"_"+i+"__"),r.push(o)));return r}(e):void 0}function at(e){return D(e)&&D(e.text)&&!1===e.isComment}function st(e,t){return(e.__esModule||ne&&"Module"===e[Symbol.toStringTag])&&(e=e.default),P(e)?t.extend(e):e}function ct(e){return e.isComment&&e.asyncFactory}function lt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(D(n)&&(D(n.componentOptions)||ct(n)))return n}}function ut(e,t,n){n?Qe.$once(e,t):Qe.$on(e,t)}function ft(e,t){Qe.$off(e,t)}function pt(e,t,n){Qe=e,nt(t,n||{},ut,ft),Qe=void 0}function dt(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(vt)&&delete n[l];return n}function vt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function ht(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?ht(e[n],t):t[e[n].key]=e[n].fn;return t}var mt=null;function yt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function gt(e,t){if(t){if(e._directInactive=!1,yt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)gt(e.$children[n]);_t(e,"activated")}}function _t(t,n){se();var e=t.$options[n];if(e)for(var r=0,i=e.length;r<i;r++)try{e[r].call(t)}catch(e){Fe(e,t,n+" hook")}t._hasHookEvent&&t.$emit("hook:"+n),ce()}var bt=[],$t=[],wt={},Ct=!1,xt=!1,kt=0;function At(){var e,t;for(xt=!0,bt.sort(function(e,t){return e.id-t.id}),kt=0;kt<bt.length;kt++)t=(e=bt[kt]).id,wt[t]=null,e.run();var n=$t.slice(),r=bt.slice();kt=bt.length=$t.length=0,wt={},Ct=xt=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,gt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&_t(r,"updated")}}(r),Q&&j.devtools&&Q.emit("flush")}var Ot=0,St=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ot,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new te,this.newDepIds=new te,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!L.test(e)){var n=e.split(".");return function(e){for(var t=0;t<n.length;t++){if(!e)return;e=e[n[t]]}return e}}}(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};St.prototype.get=function(){var e;se(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Fe(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Ye(e),ce(),this.cleanupDeps()}return e},St.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},St.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},St.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==wt[t]){if(wt[t]=!0,xt){for(var n=bt.length-1;kt<n&&bt[n].id>e.id;)n--;bt.splice(n+1,0,e)}else bt.push(e);Ct||(Ct=!0,Ze(At))}}(this)},St.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||P(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Fe(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},St.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},St.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},St.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||f(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var Tt={enumerable:!0,configurable:!0,get:$,set:$};function Et(e,t,n){Tt.get=function(){return this[t][n]},Tt.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Tt)}function jt(e){e._watchers=[];var t=e.$options;t.props&&function(n,r){var i=n.$options.propsData||{},o=n._props={},a=n.$options._propKeys=[];n.$parent&&ge(!1);var e=function(e){a.push(e);var t=Ie(e,r,i,n);Ce(o,e,t),e in n||Et(n,"_props",e)};for(var t in r)e(t);ge(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?$:v(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){se();try{return e.call(t,t)}catch(e){return Fe(e,t,"data()"),{}}finally{ce()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&p(r,o)||(void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&Et(e,"_data",o))}var a;we(t,!0)}(e):we(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=Y();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new St(e,a||$,$,Nt)),i in e||Lt(e,i,o)}}(e,t.computed),t.watch&&t.watch!==G&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Mt(e,n,r[i]);else Mt(e,n,r)}}(e,t.watch)}var Nt={lazy:!0};function Lt(e,t,n){var r=!Y();"function"==typeof n?(Tt.get=r?It(t):n,Tt.set=$):(Tt.get=n.get?r&&!1!==n.cache?It(t):n.get:$,Tt.set=n.set?n.set:$),Object.defineProperty(e,t,Tt)}function It(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),oe.target&&e.depend(),e.value}}function Mt(e,t,n,r){return l(n)&&(n=(r=n).handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Dt(t,e){if(t){for(var n=Object.create(null),r=ne?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&p(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var c=t[o].default;n[o]="function"==typeof c?c.call(e):c}}return n}}function Pt(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(P(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return D(n)&&(n._isVList=!0),n}function Ft(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=m(m({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Rt(e){return Le(this.$options,"filters",e)||w}function Ht(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Bt(e,t,n,r,i){var o=j.keyCodes[t]||n;return i&&r&&!j.keyCodes[t]?Ht(i,r):o?Ht(o,e):r?_(r)!==t:void 0}function Ut(n,r,i,o,a){if(i)if(P(i)){var s;Array.isArray(i)&&(i=b(i));var e=function(t){if("class"===t||"style"===t||u(t))s=n;else{var e=n.attrs&&n.attrs.type;s=o||j.mustUseProp(r,e,t)?n.domProps||(n.domProps={}):n.attrs||(n.attrs={})}t in s||(s[t]=i[t],a&&((n.on||(n.on={}))["update:"+t]=function(e){i[t]=e}))};for(var t in i)e(t)}else;return n}function Vt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||Kt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function zt(e,t,n){return Kt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Kt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Jt(e[r],t+"_"+r,n);else Jt(e,t,n)}function Jt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function qt(e,t){if(t)if(l(t)){var n=e.on=e.on?m({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Wt(e){e._o=zt,e._n=F,e._s=t,e._l=Pt,e._t=Ft,e._q=C,e._i=x,e._m=Vt,e._f=Rt,e._k=Bt,e._b=Ut,e._v=pe,e._e=fe,e._u=ht,e._g=qt}function Gt(e,t,n,o,r){var a,s=r.options;p(o,"_uid")?(a=Object.create(o))._original=o:o=(a=o)._original;var i=S(s._compiled),c=!i;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||y,this.injections=Dt(s.inject,o),this.slots=function(){return dt(n,o)},i&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||y),s._scopeId?this._c=function(e,t,n,r){var i=rn(a,e,t,n,r,c);return i&&!Array.isArray(i)&&(i.fnScopeId=s._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return rn(a,e,t,n,r,c)}}function Zt(e,t,n,r){var i=de(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Xt(e,t){for(var n in t)e[g(n)]=t[n]}Wt(Gt.prototype);var Yt={init:function(e,t,n,r){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var i=e;Yt.prepatch(i,i)}else{(e.componentInstance=function(e,t,n,r){var i={_isComponent:!0,parent:t,_parentVnode:e,_parentElm:n||null,_refElm:r||null},o=e.data.inlineTemplate;D(o)&&(i.render=o.render,i.staticRenderFns=o.staticRenderFns);return new e.componentOptions.Ctor(i)}(e,mt,n,r)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==y);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data.attrs||y,e.$listeners=n||y,t&&e.$options.props){ge(!1);for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var l=s[c],u=e.$options.props;a[l]=Ie(l,u,t,e)}ge(!0),e.$options.propsData=t}n=n||y;var f=e.$options._parentListeners;e.$options._parentListeners=n,pt(e,n,f),o&&(e.$slots=dt(i,r.context),e.$forceUpdate())}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,_t(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,$t.push(t)):gt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,yt(t))||t._inactive)){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);_t(t,"deactivated")}}(t,!0):t.$destroy())}},Qt=Object.keys(Yt);function en(e,t,n,r,i){if(!M(e)){var o=n.$options._base;if(P(e)&&(e=o.extend(e)),"function"==typeof e){var a,s,c,l,u,f,p;if(M(e.cid)&&void 0===(e=function(t,n,e){if(S(t.error)&&D(t.errorComp))return t.errorComp;if(D(t.resolved))return t.resolved;if(S(t.loading)&&D(t.loadingComp))return t.loadingComp;if(!D(t.contexts)){var r=t.contexts=[e],i=!0,o=function(){for(var e=0,t=r.length;e<t;e++)r[e].$forceUpdate()},a=R(function(e){t.resolved=st(e,n),i||o()}),s=R(function(e){D(t.errorComp)&&(t.error=!0,o())}),c=t(a,s);return P(c)&&("function"==typeof c.then?M(t.resolved)&&c.then(a,s):D(c.component)&&"function"==typeof c.component.then&&(c.component.then(a,s),D(c.error)&&(t.errorComp=st(c.error,n)),D(c.loading)&&(t.loadingComp=st(c.loading,n),0===c.delay?t.loading=!0:setTimeout(function(){M(t.resolved)&&M(t.error)&&(t.loading=!0,o())},c.delay||200)),D(c.timeout)&&setTimeout(function(){M(t.resolved)&&s(null)},c.timeout))),i=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(e)}(a=e,o,n)))return s=a,c=t,l=n,u=r,f=i,(p=fe()).asyncFactory=s,p.asyncMeta={data:c,context:l,children:u,tag:f},p;t=t||{},dn(e),D(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});D(i[r])?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}(e.options,t);var d=function(e,t,n){var r=t.options.props;if(!M(r)){var i={},o=e.attrs,a=e.props;if(D(o)||D(a))for(var s in r){var c=_(s);it(i,a,s,c,!0)||it(i,o,s,c,!1)}return i}}(t,e);if(S(e.options.functional))return function(e,t,n,r,i){var o=e.options,a={},s=o.props;if(D(s))for(var c in s)a[c]=Ie(c,s,t||y);else D(n.attrs)&&Xt(a,n.attrs),D(n.props)&&Xt(a,n.props);var l=new Gt(n,a,i,r,e),u=o.render.call(null,l._c,l);if(u instanceof le)return Zt(u,n,l.parent,o);if(Array.isArray(u)){for(var f=ot(u)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=Zt(f[d],n,l.parent,o);return p}}(e,d,t,n,r);var v=t.on;if(t.on=t.nativeOn,S(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Qt.length;n++){var r=Qt[n];t[r]=Yt[r]}}(t);var m=e.options.name||i;return new le("vue-component-"+e.cid+(m?"-"+m:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:v,tag:i,children:r},a)}}}var tn=1,nn=2;function rn(e,t,n,r,i,o){return(Array.isArray(n)||T(n))&&(i=r,r=n,n=void 0),S(o)&&(i=nn),function(e,t,n,r,i){if(D(n)&&D(n.__ob__))return fe();D(n)&&D(n.is)&&(t=n.is);if(!t)return fe();Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);i===nn?r=ot(r):i===tn&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var o,a;if("string"==typeof t){var s;a=e.$vnode&&e.$vnode.ns||j.getTagNamespace(t),o=j.isReservedTag(t)?new le(j.parsePlatformTagName(t),n,r,void 0,void 0,e):D(s=Le(e.$options,"components",t))?en(s,n,e,r,t):new le(t,n,r,void 0,void 0,e)}else o=en(t,n,e,r);return Array.isArray(o)?o:D(o)?(D(a)&&function e(t,n,r){t.ns=n;"foreignObject"===t.tag&&(n=void 0,r=!0);if(D(t.children))for(var i=0,o=t.children.length;i<o;i++){var a=t.children[i];D(a.tag)&&(M(a.ns)||S(r)&&"svg"!==a.tag)&&e(a,n,r)}}(o,a),D(n)&&function(e){P(e.style)&&Ye(e.style);P(e.class)&&Ye(e.class)}(n),o):fe()}(e,t,n,r,i)}var on,an,sn,cn,ln,un,fn,pn=0;function dn(e){var t=e.options;if(e.super){var n=dn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=vn(n[o],r[o],i[o]));return t}(e);r&&m(e.extendOptions,r),(t=e.options=Ne(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function vn(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(0<=t.indexOf(e[i])||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function hn(e){this._init(e)}function mn(e){e.cid=0;var a=1;e.extend=function(e){e=e||{};var t=this,n=t.cid,r=e._Ctor||(e._Ctor={});if(r[n])return r[n];var i=e.name||t.options.name,o=function(e){this._init(e)};return((o.prototype=Object.create(t.prototype)).constructor=o).cid=a++,o.options=Ne(t.options,e),o.super=t,o.options.props&&function(e){var t=e.options.props;for(var n in t)Et(e.prototype,"_props",n)}(o),o.options.computed&&function(e){var t=e.options.computed;for(var n in t)Lt(e.prototype,n,t[n])}(o),o.extend=t.extend,o.mixin=t.mixin,o.use=t.use,k.forEach(function(e){o[e]=t[e]}),i&&(o.options.components[i]=o),o.superOptions=t.options,o.extendOptions=e,o.sealedOptions=m({},o.options),r[n]=o}}function yn(e){return e&&(e.Ctor.options.name||e.tag)}function gn(e,t){return Array.isArray(e)?-1<e.indexOf(t):"string"==typeof e?-1<e.split(",").indexOf(t):(n=e,"[object RegExp]"===r.call(n)&&e.test(t));var n}function _n(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=yn(a.componentOptions);s&&!t(s)&&bn(n,o,r,i)}}}function bn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,f(n,t)}hn.prototype._init=function(e){var t,n,r,i,o=this;o._uid=pn++,o._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r,n._parentElm=t._parentElm,n._refElm=t._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(o,e):o.$options=Ne(dn(o.constructor),e||{},o),function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}((o._renderProxy=o)._self=o),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&pt(e,t)}(o),function(i){i._vnode=null,i._staticTrees=null;var e=i.$options,t=i.$vnode=e._parentVnode,n=t&&t.context;i.$slots=dt(e._renderChildren,n),i.$scopedSlots=y,i._c=function(e,t,n,r){return rn(i,e,t,n,r,!1)},i.$createElement=function(e,t,n,r){return rn(i,e,t,n,r,!0)};var r=t&&t.data;Ce(i,"$attrs",r&&r.attrs||y,null,!0),Ce(i,"$listeners",e._parentListeners||y,null,!0)}(o),_t(o,"beforeCreate"),(n=Dt((t=o).$options.inject,t))&&(ge(!1),Object.keys(n).forEach(function(e){Ce(t,e,n[e])}),ge(!0)),jt(o),(i=(r=o).$options.provide)&&(r._provided="function"==typeof i?i.call(r):i),_t(o,"created"),o.$options.el&&o.$mount(o.$options.el)},on=hn,an={get:function(){return this._data}},sn={get:function(){return this._props}},Object.defineProperty(on.prototype,"$data",an),Object.defineProperty(on.prototype,"$props",sn),on.prototype.$set=xe,on.prototype.$delete=ke,on.prototype.$watch=function(e,t,n){if(l(t))return Mt(this,e,t,n);(n=n||{}).user=!0;var r=new St(this,e,t,n);return n.immediate&&t.call(this,r.value),function(){r.teardown()}},ln=/^hook:/,(cn=hn).prototype.$on=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)this.$on(e[n],t);else(this._events[e]||(this._events[e]=[])).push(t),ln.test(e)&&(this._hasHookEvent=!0);return this},cn.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},cn.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)this.$off(e[r],t);return n}var o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;if(t)for(var a,s=o.length;s--;)if((a=o[s])===t||a.fn===t){o.splice(s,1);break}return n},cn.prototype.$emit=function(t){var n=this,e=n._events[t];if(e){e=1<e.length?h(e):e;for(var r=h(arguments,1),i=0,o=e.length;i<o;i++)try{e[i].apply(n,r)}catch(e){Fe(e,n,'event handler for "'+t+'"')}}return n},(un=hn).prototype._update=function(e,t){var n=this;n._isMounted&&_t(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=mt;(mt=n)._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),mt=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},un.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},un.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){_t(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||f(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),_t(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}},Wt((fn=hn).prototype),fn.prototype.$nextTick=function(e){return Ze(e,this)},fn.prototype._render=function(){var t,n=this,e=n.$options,r=e.render,i=e._parentVnode;i&&(n.$scopedSlots=i.data.scopedSlots||y),n.$vnode=i;try{t=r.call(n._renderProxy,n.$createElement)}catch(e){Fe(e,n,"render"),t=n._vnode}return t instanceof le||(t=fe()),t.parent=i,t};var $n,wn,Cn,xn=[String,RegExp,Array],kn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:xn,exclude:xn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)bn(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){_n(e,function(e){return gn(t,e)})}),this.$watch("exclude",function(t){_n(e,function(e){return!gn(t,e)})})},render:function(){var e=this.$slots.default,t=lt(e),n=t&&t.componentOptions;if(n){var r=yn(n),i=this.include,o=this.exclude;if(i&&(!r||!gn(i,r))||o&&r&&gn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,f(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&bn(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};$n=hn,Cn={get:function(){return j}},Object.defineProperty($n,"config",Cn),$n.util={warn:re,extend:m,mergeOptions:Ne,defineReactive:Ce},$n.set=xe,$n.delete=ke,$n.nextTick=Ze,$n.options=Object.create(null),k.forEach(function(e){$n.options[e+"s"]=Object.create(null)}),m(($n.options._base=$n).options.components,kn),$n.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(-1<t.indexOf(e))return this;var n=h(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this},$n.mixin=function(e){return this.options=Ne(this.options,e),this},mn($n),wn=$n,k.forEach(function(n){wn[n]=function(e,t){return t?("component"===n&&l(t)&&(t.name=t.name||e,t=this.options._base.extend(t)),"directive"===n&&"function"==typeof t&&(t={bind:t,update:t}),this.options[n+"s"][e]=t):this.options[n+"s"][e]}}),Object.defineProperty(hn.prototype,"$isServer",{get:Y}),Object.defineProperty(hn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(hn,"FunctionalRenderContext",{value:Gt}),hn.version="2.5.16";var An=s("style,class"),On=s("input,textarea,option,select,progress"),Sn=function(e,t,n){return"value"===n&&On(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Tn=s("contenteditable,draggable,spellcheck"),En=s("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),jn="http://www.w3.org/1999/xlink",Nn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ln=function(e){return Nn(e)?e.slice(6,e.length):""},In=function(e){return null==e||!1===e};function Mn(e){for(var t=e.data,n=e,r=e;D(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Dn(r.data,t));for(;D(n=n.parent);)n&&n.data&&(t=Dn(t,n.data));return function(e,t){if(D(e)||D(t))return Pn(e,Fn(t));return""}(t.staticClass,t.class)}function Dn(e,t){return{staticClass:Pn(e.staticClass,t.staticClass),class:D(e.class)?[e.class,t.class]:t.class}}function Pn(e,t){return e?t?e+" "+t:e:t||""}function Fn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)D(t=Fn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):P(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Rn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Hn=s("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Bn=s("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Un=function(e){return Hn(e)||Bn(e)};function Vn(e){return Bn(e)?"svg":"math"===e?"math":void 0}var zn=Object.create(null);var Kn=s("text,number,password,search,email,tel,url");function Jn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var qn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(Rn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Wn={create:function(e,t){Gn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Gn(e,!0),Gn(t))},destroy:function(e){Gn(e,!0)}};function Gn(e,t){var n=e.data.ref;if(D(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?f(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Zn=new le("",{},[]),Xn=["create","activate","update","remove","destroy"];function Yn(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&D(e.data)===D(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=D(n=e.data)&&D(n=n.attrs)&&n.type,i=D(n=t.data)&&D(n=n.attrs)&&n.type;return r===i||Kn(r)&&Kn(i)}(e,t)||S(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&M(t.asyncFactory.error))}function Qn(e,t,n){var r,i,o={};for(r=t;r<=n;++r)D(i=e[r].key)&&(o[i]=r);return o}var er={create:tr,update:tr,destroy:function(e){tr(e,Zn)}};function tr(e,t){(e.data.directives||t.data.directives)&&function(t,n){var e,r,i,o=t===Zn,a=n===Zn,s=rr(t.data.directives,t.context),c=rr(n.data.directives,n.context),l=[],u=[];for(e in c)r=s[e],i=c[e],r?(i.oldValue=r.value,ir(i,"update",n,t),i.def&&i.def.componentUpdated&&u.push(i)):(ir(i,"bind",n,t),i.def&&i.def.inserted&&l.push(i));if(l.length){var f=function(){for(var e=0;e<l.length;e++)ir(l[e],"inserted",n,t)};o?rt(n,"insert",f):f()}u.length&&rt(n,"postpatch",function(){for(var e=0;e<u.length;e++)ir(u[e],"componentUpdated",n,t)});if(!o)for(e in s)c[e]||ir(s[e],"unbind",t,t,a)}(e,t)}var nr=Object.create(null);function rr(e,t){var n,r,i,o=Object.create(null);if(!e)return o;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=nr),(o[(i=r,i.rawName||i.name+"."+Object.keys(i.modifiers||{}).join("."))]=r).def=Le(t.$options,"directives",r.name);return o}function ir(t,n,r,e,i){var o=t.def&&t.def[n];if(o)try{o(r.elm,t,r,e,i)}catch(e){Fe(e,r.context,"directive "+t.name+" "+n+" hook")}}var or=[Wn,er];function ar(e,t){var n=t.componentOptions;if(!(D(n)&&!1===n.Ctor.options.inheritAttrs||M(e.data.attrs)&&M(t.data.attrs))){var r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};for(r in D(s.__ob__)&&(s=t.data.attrs=m({},s)),s)i=s[r],a[r]!==i&&sr(o,r,i);for(r in(K||q)&&s.value!==a.value&&sr(o,"value",s.value),a)M(s[r])&&(Nn(r)?o.removeAttributeNS(jn,Ln(r)):Tn(r)||o.removeAttribute(r))}}function sr(e,t,n){-1<e.tagName.indexOf("-")?cr(e,t,n):En(t)?In(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Tn(t)?e.setAttribute(t,In(n)||"false"===n?"false":"true"):Nn(t)?In(n)?e.removeAttributeNS(jn,Ln(t)):e.setAttributeNS(jn,t,n):cr(e,t,n)}function cr(t,e,n){if(In(n))t.removeAttribute(e);else{if(K&&!J&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var lr={create:ar,update:ar};function ur(e,t){var n=t.elm,r=t.data,i=e.data;if(!(M(r.staticClass)&&M(r.class)&&(M(i)||M(i.staticClass)&&M(i.class)))){var o=Mn(t),a=n._transitionClasses;D(a)&&(o=Pn(o,Fn(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}var fr,pr,dr,vr,hr,mr,yr={create:ur,update:ur},gr=/[\w).+\-_$\]]/;function _r(e){var t,n,r,i,o,a=!1,s=!1,c=!1,l=!1,u=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(l)47===t&&92!==n&&(l=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||u||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:u++;break;case 125:u--}if(47===t){for(var v=r-1,h=void 0;0<=v&&" "===(h=e.charAt(v));v--);h&&gr.test(h)||(l=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=br(i,o[r]);return i}function br(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function $r(e){console.error("[Vue compiler]: "+e)}function wr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Cr(e,t,n){(e.props||(e.props=[])).push({name:t,value:n}),e.plain=!1}function xr(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n}),e.plain=!1}function kr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Ar(e,t,n,r,i,o){var a;(r=r||y).capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t),r.passive&&(delete r.passive,t="&"+t),"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup")),r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n.trim()};r!==y&&(s.modifiers=r);var c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s,e.plain=!1}function Or(e,t,n){var r=Sr(e,":"+t)||Sr(e,"v-bind:"+t);if(null!=r)return _r(r);if(!1!==n){var i=Sr(e,t);if(null!=i)return JSON.stringify(i)}}function Sr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Tr(e,t,n){var r=n||{},i=r.number,o="$$v",a=o;r.trim&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=Er(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function Er(e,t){var n=function(e){if(e=e.trim(),fr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<fr-1)return-1<(vr=e.lastIndexOf("."))?{exp:e.slice(0,vr),key:'"'+e.slice(vr+1)+'"'}:{exp:e,key:null};pr=e,vr=hr=mr=0;for(;!Nr();)Lr(dr=jr())?Mr(dr):91===dr&&Ir(dr);return{exp:e.slice(0,hr),key:e.slice(hr+1,mr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function jr(){return pr.charCodeAt(++vr)}function Nr(){return fr<=vr}function Lr(e){return 34===e||39===e}function Ir(e){var t=1;for(hr=vr;!Nr();)if(Lr(e=jr()))Mr(e);else if(91===e&&t++,93===e&&t--,0===t){mr=vr;break}}function Mr(e){for(var t=e;!Nr()&&(e=jr())!==t;);}var Dr,Pr="__r",Fr="__c";function Rr(e,t,n,r,i){var o,a,s,c,l;t=(o=t)._withTask||(o._withTask=function(){Je=!0;var e=o.apply(null,arguments);return Je=!1,e}),n&&(a=t,s=e,c=r,l=Dr,t=function e(){null!==a.apply(null,arguments)&&Hr(s,e,c,l)}),Dr.addEventListener(e,t,Z?{capture:r,passive:i}:r)}function Hr(e,t,n,r){(r||Dr).removeEventListener(e,t._withTask||t,n)}function Br(e,t){if(!M(e.data.on)||!M(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Dr=t.elm,function(e){if(D(e[Pr])){var t=K?"change":"input";e[t]=[].concat(e[Pr],e[t]||[]),delete e[Pr]}D(e[Fr])&&(e.change=[].concat(e[Fr],e.change||[]),delete e[Fr])}(n),nt(n,r,Rr,Hr,t.context),Dr=void 0}}var Ur={create:Br,update:Br};function Vr(e,t){if(!M(e.data.domProps)||!M(t.data.domProps)){var n,r,i,o,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};for(n in D(c.__ob__)&&(c=t.data.domProps=m({},c)),s)M(c[n])&&(a[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){var l=M(a._value=r)?"":String(r);o=l,(i=a).composing||"OPTION"!==i.tagName&&!function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(i,o)&&!function(e,t){var n=e.value,r=e._vModifiers;if(D(r)){if(r.lazy)return!1;if(r.number)return F(n)!==F(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(i,o)||(a.value=l)}else a[n]=r}}}var zr={create:Vr,update:Vr},Kr=e(function(e){var n={},r=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var t=e.split(r);1<t.length&&(n[t[0].trim()]=t[1].trim())}}),n});function Jr(e){var t=qr(e.style);return e.staticStyle?m(e.staticStyle,t):t}function qr(e){return Array.isArray(e)?b(e):"string"==typeof e?Kr(e):e}var Wr,Gr=/^--/,Zr=/\s*!important$/,Xr=function(e,t,n){if(Gr.test(t))e.style.setProperty(t,n);else if(Zr.test(n))e.style.setProperty(t,n.replace(Zr,""),"important");else{var r=Qr(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Yr=["Webkit","Moz","ms"],Qr=e(function(e){if(Wr=Wr||document.createElement("div").style,"filter"!==(e=g(e))&&e in Wr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Yr.length;n++){var r=Yr[n]+t;if(r in Wr)return r}});function ei(e,t){var n=t.data,r=e.data;if(!(M(n.staticStyle)&&M(n.style)&&M(r.staticStyle)&&M(r.style))){var i,o,a=t.elm,s=r.staticStyle,c=r.normalizedStyle||r.style||{},l=s||c,u=qr(t.data.style)||{};t.data.normalizedStyle=D(u.__ob__)?m({},u):u;var f=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Jr(i.data))&&m(r,n);(n=Jr(e.data))&&m(r,n);for(var o=e;o=o.parent;)o.data&&(n=Jr(o.data))&&m(r,n);return r}(t,!0);for(o in l)M(f[o])&&Xr(a,o,"");for(o in f)(i=f[o])!==l[o]&&Xr(a,o,null==i?"":i)}}var ti={create:ei,update:ei};function ni(t,e){if(e&&(e=e.trim()))if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ri(t,e){if(e&&(e=e.trim()))if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";0<=n.indexOf(r);)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function ii(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&m(t,oi(e.name||"v")),m(t,e),t}return"string"==typeof e?oi(e):void 0}}var oi=e(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),ai=B&&!J,si="transition",ci="animation",li="transition",ui="transitionend",fi="animation",pi="animationend";ai&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(li="WebkitTransition",ui="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(fi="WebkitAnimation",pi="webkitAnimationEnd"));var di=B?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function vi(e){di(function(){di(e)})}function hi(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),ni(e,t))}function mi(e,t){e._transitionClasses&&f(e._transitionClasses,t),ri(e,t)}function yi(t,e,n){var r=_i(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===si?ui:pi,c=0,l=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++c>=a&&l()};setTimeout(function(){c<a&&l()},o+1),t.addEventListener(s,u)}var gi=/\b(transform|all)(,|$)/;function _i(e,t){var n,r=window.getComputedStyle(e),i=r[li+"Delay"].split(", "),o=r[li+"Duration"].split(", "),a=bi(i,o),s=r[fi+"Delay"].split(", "),c=r[fi+"Duration"].split(", "),l=bi(s,c),u=0,f=0;return t===si?0<a&&(n=si,u=a,f=o.length):t===ci?0<l&&(n=ci,u=l,f=c.length):f=(n=0<(u=Math.max(a,l))?l<a?si:ci:null)?n===si?o.length:c.length:0,{type:n,timeout:u,propCount:f,hasTransform:n===si&&gi.test(r[li+"Property"])}}function bi(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max.apply(null,e.map(function(e,t){return $i(e)+$i(n[t])}))}function $i(e){return 1e3*Number(e.slice(0,-1))}function wi(n,e){var r=n.elm;D(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var t=ii(n.data.transition);if(!M(t)&&!D(r._enterCb)&&1===r.nodeType){for(var i=t.css,o=t.type,a=t.enterClass,s=t.enterToClass,c=t.enterActiveClass,l=t.appearClass,u=t.appearToClass,f=t.appearActiveClass,p=t.beforeEnter,d=t.enter,v=t.afterEnter,h=t.enterCancelled,m=t.beforeAppear,y=t.appear,g=t.afterAppear,_=t.appearCancelled,b=t.duration,$=mt,w=mt.$vnode;w&&w.parent;)$=(w=w.parent).context;var C=!$._isMounted||!n.isRootInsert;if(!C||y||""===y){var x=C&&l?l:a,k=C&&f?f:c,A=C&&u?u:s,O=C&&m||p,S=C&&"function"==typeof y?y:d,T=C&&g||v,E=C&&_||h,j=F(P(b)?b.enter:b),N=!1!==i&&!J,L=ki(S),I=r._enterCb=R(function(){N&&(mi(r,A),mi(r,k)),I.cancelled?(N&&mi(r,x),E&&E(r)):T&&T(r),r._enterCb=null});n.data.show||rt(n,"insert",function(){var e=r.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),S&&S(r,I)}),O&&O(r),N&&(hi(r,x),hi(r,k),vi(function(){mi(r,x),I.cancelled||(hi(r,A),L||(xi(j)?setTimeout(I,j):yi(r,o,I)))})),n.data.show&&(e&&e(),S&&S(r,I)),N||L||I()}}}function Ci(e,t){var n=e.elm;D(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=ii(e.data.transition);if(M(r)||1!==n.nodeType)return t();if(!D(n._leaveCb)){var i=r.css,o=r.type,a=r.leaveClass,s=r.leaveToClass,c=r.leaveActiveClass,l=r.beforeLeave,u=r.leave,f=r.afterLeave,p=r.leaveCancelled,d=r.delayLeave,v=r.duration,h=!1!==i&&!J,m=ki(u),y=F(P(v)?v.leave:v),g=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),h&&(mi(n,s),mi(n,c)),g.cancelled?(h&&mi(n,a),p&&p(n)):(t(),f&&f(n)),n._leaveCb=null});d?d(_):_()}function _(){g.cancelled||(e.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),l&&l(n),h&&(hi(n,a),hi(n,c),vi(function(){mi(n,a),g.cancelled||(hi(n,s),m||(xi(y)?setTimeout(g,y):yi(n,o,g)))})),u&&u(n,g),h||m||g())}}function xi(e){return"number"==typeof e&&!isNaN(e)}function ki(e){if(M(e))return!1;var t=e.fns;return D(t)?ki(Array.isArray(t)?t[0]:t):1<(e._length||e.length)}function Ai(e,t){!0!==t.data.show&&wi(t)}var Oi=function(e){var r,t,g={},n=e.modules,_=e.nodeOps;for(r=0;r<Xn.length;++r)for(g[Xn[r]]=[],t=0;t<n.length;++t)D(n[t][Xn[r]])&&g[Xn[r]].push(n[t][Xn[r]]);function o(e){var t=_.parentNode(e);D(t)&&_.removeChild(t,e)}function b(e,t,n,r,i,o,a){if(D(e.elm)&&D(o)&&(e=o[a]=de(e)),e.isRootInsert=!i,!function(e,t,n,r){var i=e.data;if(D(i)){var o=D(e.componentInstance)&&i.keepAlive;if(D(i=i.hook)&&D(i=i.init)&&i(e,!1,n,r),D(e.componentInstance))return d(e,t),S(o)&&function(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,D(i=o.data)&&D(i=i.transition)){for(i=0;i<g.activate.length;++i)g.activate[i](Zn,o);t.push(o);break}u(n,e.elm,r)}(e,t,n,r),!0}}(e,t,n,r)){var s=e.data,c=e.children,l=e.tag;D(l)?(e.elm=e.ns?_.createElementNS(e.ns,l):_.createElement(l,e),f(e),v(e,c,t),D(s)&&h(e,t)):S(e.isComment)?e.elm=_.createComment(e.text):e.elm=_.createTextNode(e.text),u(n,e.elm,r)}}function d(e,t){D(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,$(e)?(h(e,t),f(e)):(Gn(e),t.push(e))}function u(e,t,n){D(e)&&(D(n)?n.parentNode===e&&_.insertBefore(e,t,n):_.appendChild(e,t))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)b(t[r],n,e.elm,null,!0,t,r);else T(e.text)&&_.appendChild(e.elm,_.createTextNode(String(e.text)))}function $(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return D(e.tag)}function h(e,t){for(var n=0;n<g.create.length;++n)g.create[n](Zn,e);D(r=e.data.hook)&&(D(r.create)&&r.create(Zn,e),D(r.insert)&&t.push(e))}function f(e){var t;if(D(t=e.fnScopeId))_.setStyleScope(e.elm,t);else for(var n=e;n;)D(t=n.context)&&D(t=t.$options._scopeId)&&_.setStyleScope(e.elm,t),n=n.parent;D(t=mt)&&t!==e.context&&t!==e.fnContext&&D(t=t.$options._scopeId)&&_.setStyleScope(e.elm,t)}function y(e,t,n,r,i,o){for(;r<=i;++r)b(n[r],o,e,t,!1,n,r)}function w(e){var t,n,r=e.data;if(D(r))for(D(t=r.hook)&&D(t=t.destroy)&&t(e),t=0;t<g.destroy.length;++t)g.destroy[t](e);if(D(t=e.children))for(n=0;n<e.children.length;++n)w(e.children[n])}function C(e,t,n,r){for(;n<=r;++n){var i=t[n];D(i)&&(D(i.tag)?(a(i),w(i)):o(i.elm))}}function a(e,t){if(D(t)||D(e.data)){var n,r=g.remove.length+1;for(D(t)?t.listeners+=r:t=function(e,t){function n(){0==--n.listeners&&o(e)}return n.listeners=t,n}(e.elm,r),D(n=e.componentInstance)&&D(n=n._vnode)&&D(n.data)&&a(n,t),n=0;n<g.remove.length;++n)g.remove[n](e,t);D(n=e.data.hook)&&D(n=n.remove)?n(e,t):t()}else o(e.elm)}function x(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(D(o)&&Yn(e,o))return i}}function k(e,t,n,r){if(e!==t){var i=t.elm=e.elm;if(S(e.isAsyncPlaceholder))D(t.asyncFactory.resolved)?O(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(S(t.isStatic)&&S(e.isStatic)&&t.key===e.key&&(S(t.isCloned)||S(t.isOnce)))t.componentInstance=e.componentInstance;else{var o,a=t.data;D(a)&&D(o=a.hook)&&D(o=o.prepatch)&&o(e,t);var s=e.children,c=t.children;if(D(a)&&$(t)){for(o=0;o<g.update.length;++o)g.update[o](e,t);D(o=a.hook)&&D(o=o.update)&&o(e,t)}M(t.text)?D(s)&&D(c)?s!==c&&function(e,t,n,r,i){for(var o,a,s,c=0,l=0,u=t.length-1,f=t[0],p=t[u],d=n.length-1,v=n[0],h=n[d],m=!i;c<=u&&l<=d;)M(f)?f=t[++c]:M(p)?p=t[--u]:Yn(f,v)?(k(f,v,r),f=t[++c],v=n[++l]):Yn(p,h)?(k(p,h,r),p=t[--u],h=n[--d]):Yn(f,h)?(k(f,h,r),m&&_.insertBefore(e,f.elm,_.nextSibling(p.elm)),f=t[++c],h=n[--d]):(Yn(p,v)?(k(p,v,r),m&&_.insertBefore(e,p.elm,f.elm),p=t[--u]):(M(o)&&(o=Qn(t,c,u)),M(a=D(v.key)?o[v.key]:x(v,t,c,u))?b(v,r,e,f.elm,!1,n,l):Yn(s=t[a],v)?(k(s,v,r),t[a]=void 0,m&&_.insertBefore(e,s.elm,f.elm)):b(v,r,e,f.elm,!1,n,l)),v=n[++l]);u<c?y(e,M(n[d+1])?null:n[d+1].elm,n,l,d,r):d<l&&C(0,t,c,u)}(i,s,c,n,r):D(c)?(D(e.text)&&_.setTextContent(i,""),y(i,null,c,0,c.length-1,n)):D(s)?C(0,s,0,s.length-1):D(e.text)&&_.setTextContent(i,""):e.text!==t.text&&_.setTextContent(i,t.text),D(a)&&D(o=a.hook)&&D(o=o.postpatch)&&o(e,t)}}}function A(e,t,n){if(S(n)&&D(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var m=s("attrs,class,staticClass,staticStyle,key");function O(e,t,n,r){var i,o=t.tag,a=t.data,s=t.children;if(r=r||a&&a.pre,t.elm=e,S(t.isComment)&&D(t.asyncFactory))return t.isAsyncPlaceholder=!0;if(D(a)&&(D(i=a.hook)&&D(i=i.init)&&i(t,!0),D(i=t.componentInstance)))return d(t,n),!0;if(D(o)){if(D(s))if(e.hasChildNodes())if(D(i=a)&&D(i=i.domProps)&&D(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var c=!0,l=e.firstChild,u=0;u<s.length;u++){if(!l||!O(l,s[u],n,r)){c=!1;break}l=l.nextSibling}if(!c||l)return!1}else v(t,s,n);if(D(a)){var f=!1;for(var p in a)if(!m(p)){f=!0,h(t,n);break}!f&&a.class&&Ye(a.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,r,i,o){if(!M(t)){var a,s=!1,c=[];if(M(e))s=!0,b(t,c,i,o);else{var l=D(e.nodeType);if(!l&&Yn(e,t))k(e,t,c,r);else{if(l){if(1===e.nodeType&&e.hasAttribute(E)&&(e.removeAttribute(E),n=!0),S(n)&&O(e,t,c))return A(t,c,!0),e;a=e,e=new le(_.tagName(a).toLowerCase(),{},[],void 0,a)}var u=e.elm,f=_.parentNode(u);if(b(t,c,u._leaveCb?null:f,_.nextSibling(u)),D(t.parent))for(var p=t.parent,d=$(t);p;){for(var v=0;v<g.destroy.length;++v)g.destroy[v](p);if(p.elm=t.elm,d){for(var h=0;h<g.create.length;++h)g.create[h](Zn,p);var m=p.data.hook.insert;if(m.merged)for(var y=1;y<m.fns.length;y++)m.fns[y]()}else Gn(p);p=p.parent}D(f)?C(0,[e],0,0):D(e.tag)&&w(e)}}return A(t,c,s),t.elm}D(e)&&w(e)}}({nodeOps:qn,modules:[lr,yr,Ur,zr,ti,B?{create:Ai,activate:Ai,remove:function(e,t){!0!==e.data.show?Ci(e,t):t()}}:{}].concat(or)});J&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Mi(e,"input")});var Si={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?rt(n,"postpatch",function(){Si.componentUpdated(e,t,n)}):Ti(e,t,n.context),e._vOptions=[].map.call(e.options,Ni)):("textarea"===n.tag||Kn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Li),e.addEventListener("compositionend",Ii),e.addEventListener("change",Ii),J&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ti(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ni);if(i.some(function(e,t){return!C(e,r[t])}))(e.multiple?t.value.some(function(e){return ji(e,i)}):t.value!==t.oldValue&&ji(t.value,i))&&Mi(e,"change")}}};function Ti(e,t,n){Ei(e,t,n),(K||q)&&setTimeout(function(){Ei(e,t,n)},0)}function Ei(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=-1<x(r,Ni(a)),a.selected!==o&&(a.selected=o);else if(C(Ni(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function ji(t,e){return e.every(function(e){return!C(e,t)})}function Ni(e){return"_value"in e?e._value:e.value}function Li(e){e.target.composing=!0}function Ii(e){e.target.composing&&(e.target.composing=!1,Mi(e.target,"input"))}function Mi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Di(e){return!e.componentInstance||e.data&&e.data.transition?e:Di(e.componentInstance._vnode)}var Pi={model:Si,show:{bind:function(e,t,n){var r=t.value,i=(n=Di(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,wi(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Di(n)).data&&n.data.transition?(n.data.show=!0,r?wi(n,function(){e.style.display=e.__vOriginalDisplay}):Ci(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Fi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ri(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Ri(lt(t.children)):e}function Hi(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[g(o)]=i[o];return t}function Bi(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Ui={name:"transition",props:Fi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag||ct(e)})).length){var r=this.mode,i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=Ri(i);if(!o)return i;if(this._leaving)return Bi(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:T(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s,c,l=(o.data||(o.data={})).transition=Hi(this),u=this._vnode,f=Ri(u);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),f&&f.data&&(s=o,(c=f).key!==s.key||c.tag!==s.tag)&&!ct(f)&&(!f.componentInstance||!f.componentInstance._vnode.isComment)){var p=f.data.transition=m({},l);if("out-in"===r)return this._leaving=!0,rt(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Bi(e,i);if("in-out"===r){if(ct(o))return u;var d,v=function(){d()};rt(l,"afterEnter",v),rt(l,"enterCancelled",v),rt(p,"delayLeave",function(e){d=e})}}return i}}},Vi=m({tag:String,moveClass:String},Fi);function zi(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ki(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ji(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Vi.mode;var qi={Transition:Ui,TransitionGroup:{props:Vi,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Hi(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),((n[c.key]=c).data||(c.data={})).transition=a)}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?l.push(p):u.push(p)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,r=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,r)&&(e.forEach(zi),e.forEach(Ki),e.forEach(Ji),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,t=n.style;hi(n,r),t.transform=t.WebkitTransform=t.transitionDuration="",n.addEventListener(ui,n._moveCb=function e(t){t&&!/transform$/.test(t.propertyName)||(n.removeEventListener(ui,e),n._moveCb=null,mi(n,r))})}}))},methods:{hasMove:function(e,t){if(!ai)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){ri(n,e)}),ni(n,t),n.style.display="none",this.$el.appendChild(n);var r=_i(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};hn.config.mustUseProp=Sn,hn.config.isReservedTag=Un,hn.config.isReservedAttr=An,hn.config.getTagNamespace=Vn,hn.config.isUnknownElement=function(e){if(!B)return!0;if(Un(e))return!1;if(e=e.toLowerCase(),null!=zn[e])return zn[e];var t=document.createElement(e);return-1<e.indexOf("-")?zn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:zn[e]=/HTMLUnknownElement/.test(t.toString())},m(hn.options.directives,Pi),m(hn.options.components,qi),hn.prototype.__patch__=B?Oi:$,hn.prototype.$mount=function(e,t){return e=e&&B?Jn(e):void 0,r=e,i=t,(n=this).$el=r,n.$options.render||(n.$options.render=fe),_t(n,"beforeMount"),new St(n,function(){n._update(n._render(),i)},$,null,!0),i=!1,null==n.$vnode&&(n._isMounted=!0,_t(n,"mounted")),n;var n,r,i},B&&setTimeout(function(){j.devtools&&Q&&Q.emit("init",hn)},0);var Wi=/\{\{((?:.|\n)+?)\}\}/g,Gi=/[-.*+?^${}()|[\]\/\\]/g,Zi=e(function(e){var t=e[0].replace(Gi,"\\$&"),n=e[1].replace(Gi,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var Xi={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Sr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Or(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var Yi,Qi={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Sr(e,"style");n&&(e.staticStyle=JSON.stringify(Kr(n)));var r=Or(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},eo=function(e){return(Yi=Yi||document.createElement("div")).innerHTML=e,Yi.textContent},to=s("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),no=s("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ro=s("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),io=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,oo="[a-zA-Z_][\\w\\-\\.]*",ao="((?:"+oo+"\\:)?"+oo+")",so=new RegExp("^<"+ao),co=/^\s*(\/?)>/,lo=new RegExp("^<\\/"+ao+"[^>]*>"),uo=/^<!DOCTYPE [^>]+>/i,fo=/^<!\--/,po=/^<!\[/,vo=!1;"x".replace(/x(.)?/g,function(e,t){vo=""===t});var ho=s("script,style,textarea",!0),mo={},yo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},go=/&(?:lt|gt|quot|amp);/g,_o=/&(?:lt|gt|quot|amp|#10|#9);/g,bo=s("pre,textarea",!0),$o=function(e,t){return e&&bo(e)&&"\n"===t[0]};var wo,Co,xo,ko,Ao,Oo,So,To,Eo=/^@|^v-on:/,jo=/^v-|^@|^:/,No=/([^]*?)\s+(?:in|of)\s+([^]*)/,Lo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Io=/^\(|\)$/g,Mo=/:(.*)$/,Do=/^:|^v-bind:/,Po=/\.[^.]+/g,Fo=e(eo);function Ro(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}(t),parent:n,children:[]}}function Ho(e,p){wo=p.warn||$r,Oo=p.isPreTag||O,So=p.mustUseProp||O,To=p.getTagNamespace||O,xo=wr(p.modules,"transformNode"),ko=wr(p.modules,"preTransformNode"),Ao=wr(p.modules,"postTransformNode"),Co=p.delimiters;var d,v,h=[],i=!1!==p.preserveWhitespace,m=!1,y=!1;function g(e){e.pre&&(m=!1),Oo(e.tag)&&(y=!1);for(var t=0;t<Ao.length;t++)Ao[t](e,p)}return function(i,d){for(var e,v,h=[],m=d.expectHTML,y=d.isUnaryTag||O,g=d.canBeLeftOpenTag||O,a=0;i;){if(e=i,v&&ho(v)){var r=0,o=v.toLowerCase(),t=mo[o]||(mo[o]=new RegExp("([\\s\\S]*?)(</"+o+"[^>]*>)","i")),n=i.replace(t,function(e,t,n){return r=n.length,ho(o)||"noscript"===o||(t=t.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),$o(o,t)&&(t=t.slice(1)),d.chars&&d.chars(t),""});a+=i.length-n.length,i=n,A(o,a-r,a)}else{var s=i.indexOf("<");if(0===s){if(fo.test(i)){var c=i.indexOf("--\x3e");if(0<=c){d.shouldKeepComment&&d.comment(i.substring(4,c)),C(c+3);continue}}if(po.test(i)){var l=i.indexOf("]>");if(0<=l){C(l+2);continue}}var u=i.match(uo);if(u){C(u[0].length);continue}var f=i.match(lo);if(f){var p=a;C(f[0].length),A(f[1],p,a);continue}var _=x();if(_){k(_),$o(v,i)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(0<=s){for($=i.slice(s);!(lo.test($)||so.test($)||fo.test($)||po.test($)||(w=$.indexOf("<",1))<0);)s+=w,$=i.slice(s);b=i.substring(0,s),C(s)}s<0&&(b=i,i=""),d.chars&&b&&d.chars(b)}if(i===e){d.chars&&d.chars(i);break}}function C(e){a+=e,i=i.substring(e)}function x(){var e=i.match(so);if(e){var t,n,r={tagName:e[1],attrs:[],start:a};for(C(e[0].length);!(t=i.match(co))&&(n=i.match(io));)C(n[0].length),r.attrs.push(n);if(t)return r.unarySlash=t[1],C(t[0].length),r.end=a,r}}function k(e){var t=e.tagName,n=e.unarySlash;m&&("p"===v&&ro(t)&&A(v),g(t)&&v===t&&A(t));for(var r,i,o,a=y(t)||!!n,s=e.attrs.length,c=new Array(s),l=0;l<s;l++){var u=e.attrs[l];vo&&-1===u[0].indexOf('""')&&(""===u[3]&&delete u[3],""===u[4]&&delete u[4],""===u[5]&&delete u[5]);var f=u[3]||u[4]||u[5]||"",p="a"===t&&"href"===u[1]?d.shouldDecodeNewlinesForHref:d.shouldDecodeNewlines;c[l]={name:u[1],value:(r=f,i=p,o=i?_o:go,r.replace(o,function(e){return yo[e]}))}}a||(h.push({tag:t,lowerCasedTag:t.toLowerCase(),attrs:c}),v=t),d.start&&d.start(t,c,a,e.start,e.end)}function A(e,t,n){var r,i;if(null==t&&(t=a),null==n&&(n=a),e&&(i=e.toLowerCase()),e)for(r=h.length-1;0<=r&&h[r].lowerCasedTag!==i;r--);else r=0;if(0<=r){for(var o=h.length-1;r<=o;o--)d.end&&d.end(h[o].tag,t,n);h.length=r,v=r&&h[r-1].tag}else"br"===i?d.start&&d.start(e,[],!0,t,n):"p"===i&&(d.start&&d.start(e,[],!1,t,n),d.end&&d.end(e,t,n))}A()}(e,{warn:wo,expectHTML:p.expectHTML,isUnaryTag:p.isUnaryTag,canBeLeftOpenTag:p.canBeLeftOpenTag,shouldDecodeNewlines:p.shouldDecodeNewlines,shouldDecodeNewlinesForHref:p.shouldDecodeNewlinesForHref,shouldKeepComment:p.comments,start:function(e,t,n){var r=v&&v.ns||To(e);K&&"svg"===r&&(t=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ko.test(r.name)||(r.name=r.name.replace(Jo,""),t.push(r))}return t}(t));var i,o,a,s,c,l=Ro(e,t,v);r&&(l.ns=r),"style"!==(i=l).tag&&("script"!==i.tag||i.attrsMap.type&&"text/javascript"!==i.attrsMap.type)||Y()||(l.forbidden=!0);for(var u=0;u<ko.length;u++)l=ko[u](l,p)||l;if(m||(null!=Sr(o=l,"v-pre")&&(o.pre=!0),l.pre&&(m=!0)),Oo(l.tag)&&(y=!0),m?function(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}(l):l.processed||(Uo(l),function(e){var t=Sr(e,"v-if");if(t)e.if=t,Vo(e,{exp:t,block:e});else{null!=Sr(e,"v-else")&&(e.else=!0);var n=Sr(e,"v-else-if");n&&(e.elseif=n)}}(l),null!=Sr(a=l,"v-once")&&(a.once=!0),Bo(l,p)),d?h.length||d.if&&(l.elseif||l.else)&&Vo(d,{exp:l.elseif,block:l}):d=l,v&&!l.forbidden)if(l.elseif||l.else)s=l,(c=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(v.children))&&c.if&&Vo(c,{exp:s.elseif,block:s});else if(l.slotScope){v.plain=!1;var f=l.slotTarget||'"default"';(v.scopedSlots||(v.scopedSlots={}))[f]=l}else v.children.push(l),l.parent=v;n?g(l):(v=l,h.push(l))},end:function(){var e=h[h.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!y&&e.children.pop(),h.length-=1,v=h[h.length-1],g(e)},chars:function(e){if(v&&(!K||"textarea"!==v.tag||v.attrsMap.placeholder!==e)){var t,n,r=v.children;if(e=y||e.trim()?"script"===(t=v).tag||"style"===t.tag?e:Fo(e):i&&r.length?" ":"")!m&&" "!==e&&(n=function(e,t){var n=t?Zi(t):Wi;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){c<(i=r.index)&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var l=_r(r[1].trim());a.push("_s("+l+")"),s.push({"@binding":l}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Co))?r.push({type:2,expression:n.expression,tokens:n.tokens,text:e}):" "===e&&r.length&&" "===r[r.length-1].text||r.push({type:3,text:e})}},comment:function(e){v.children.push({type:3,text:e,isComment:!0})}}),d}function Bo(e,t){var n,r,i,o;(r=Or(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.attrsList.length,(o=Or(i=e,"ref"))&&(i.ref=o,i.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(i)),function(e){if("slot"===e.tag)e.slotName=Or(e,"name");else{var t;"template"===e.tag?(t=Sr(e,"scope"),e.slotScope=t||Sr(e,"slot-scope")):(t=Sr(e,"slot-scope"))&&(e.slotScope=t);var n=Or(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||xr(e,"slot",n))}}(e),function(e){var t;(t=Or(e,"is"))&&(e.component=t);null!=Sr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var a=0;a<xo.length;a++)e=xo[a](e,t)||e;!function(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,jo.test(r))if(e.hasBindings=!0,(a=zo(r))&&(r=r.replace(Po,"")),Do.test(r))r=r.replace(Do,""),o=_r(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=g(r))&&(r="innerHTML")),a.camel&&(r=g(r)),a.sync&&Ar(e,"update:"+g(r),Er(o,"$event"))),s||!e.component&&So(e.tag,e.attrsMap.type,r)?Cr(e,r,o):xr(e,r,o);else if(Eo.test(r))r=r.replace(Eo,""),Ar(e,r,o,a,!1);else{var l=(r=r.replace(jo,"")).match(Mo),u=l&&l[1];u&&(r=r.slice(0,-(u.length+1))),p=r,d=i,v=o,h=u,m=a,((f=e).directives||(f.directives=[])).push({name:p,rawName:d,value:v,arg:h,modifiers:m}),f.plain=!1}else xr(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&So(e.tag,e.attrsMap.type,r)&&Cr(e,r,"true");var f,p,d,v,h,m}(e)}function Uo(e){var t;if(t=Sr(e,"v-for")){var n=function(e){var t=e.match(No);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Io,""),i=r.match(Lo);i?(n.alias=r.replace(Lo,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&m(e,n)}}function Vo(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function zo(e){var t=e.match(Po);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}var Ko=/^xmlns:NS\d+/,Jo=/^NS\d+:/;function qo(e){return Ro(e.tag,e.attrsList.slice(),e.parent)}var Wo=[Xi,Qi,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Or(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Sr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Sr(e,"v-else",!0),s=Sr(e,"v-else-if",!0),c=qo(e);Uo(c),kr(c,"type","checkbox"),Bo(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,Vo(c,{exp:c.if,block:c});var l=qo(e);Sr(l,"v-for",!0),kr(l,"type","radio"),Bo(l,t),Vo(c,{exp:"("+n+")==='radio'"+o,block:l});var u=qo(e);return Sr(u,"v-for",!0),kr(u,":type",n),Bo(u,t),Vo(c,{exp:i,block:u}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var Go,Zo,Xo,Yo={expectHTML:!0,modules:Wo,directives:{model:function(e,t,n){var r,i,o,a,s,c,l,u,f,p,d,v,h,m,y,g,_=t.value,b=t.modifiers,$=e.tag,w=e.attrsMap.type;if(e.component)return Tr(e,_,b),!1;if("select"===$)h=e,m=_,g=(g='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+((y=b)&&y.number?"_n(val)":"val")+"});")+" "+Er(m,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Ar(h,"change",g,null,!0);else if("input"===$&&"checkbox"===w)c=e,l=_,f=(u=b)&&u.number,p=Or(c,"value")||"null",d=Or(c,"true-value")||"true",v=Or(c,"false-value")||"false",Cr(c,"checked","Array.isArray("+l+")?_i("+l+","+p+")>-1"+("true"===d?":("+l+")":":_q("+l+","+d+")")),Ar(c,"change","var $$a="+l+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+v+");if(Array.isArray($$a)){var $$v="+(f?"_n("+p+")":p)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Er(l,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Er(l,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Er(l,"$$c")+"}",null,!0);else if("input"===$&&"radio"===w)r=e,i=_,a=(o=b)&&o.number,s=Or(r,"value")||"null",Cr(r,"checked","_q("+i+","+(s=a?"_n("+s+")":s)+")"),Ar(r,"change",Er(i,s),null,!0);else if("input"===$||"textarea"===$)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,l=o?"change":"range"===r?Pr:"input",u="$event.target.value";s&&(u="$event.target.value.trim()"),a&&(u="_n("+u+")");var f=Er(t,u);c&&(f="if($event.target.composing)return;"+f),Cr(e,"value","("+t+")"),Ar(e,l,f,null,!0),(s||a)&&Ar(e,"blur","$forceUpdate()")}(e,_,b);else if(!j.isReservedTag($))return Tr(e,_,b),!1;return!0},text:function(e,t){t.value&&Cr(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&Cr(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:to,mustUseProp:Sn,canBeLeftOpenTag:no,isReservedTag:Un,getTagNamespace:Vn,staticKeys:(Go=Wo,Go.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(","))},Qo=e(function(e){return s("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))});function ea(e,t){e&&(Zo=Qo(t.staticKeys||""),Xo=t.isReservedTag||O,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||c(e.tag)||!Xo(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(Zo)))}(t);if(1===t.type){if(!Xo(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var ta=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,na=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,ra={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ia={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},oa=function(e){return"if("+e+")return null;"},aa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:oa("$event.target !== $event.currentTarget"),ctrl:oa("!$event.ctrlKey"),shift:oa("!$event.shiftKey"),alt:oa("!$event.altKey"),meta:oa("!$event.metaKey"),left:oa("'button' in $event && $event.button !== 0"),middle:oa("'button' in $event && $event.button !== 1"),right:oa("'button' in $event && $event.button !== 2")};function sa(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+ca(i,e[i])+",";return r.slice(0,-1)+"}"}function ca(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ca(t,e)}).join(",")+"]";var n=na.test(e.value),r=ta.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(aa[s])o+=aa[s],ra[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=oa(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+="if(!('button' in $event)&&"+a.map(la).join("&&")+")return null;"),o&&(i+=o),"function($event){"+i+(n?"return "+e.value+"($event)":r?"return ("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function la(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=ra[e],r=ia[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var ua={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(t,n){t.wrapData=function(e){return"_b("+e+",'"+t.tag+"',"+n.value+","+(n.modifiers&&n.modifiers.prop?"true":"false")+(n.modifiers&&n.modifiers.sync?",true":"")+")"}},cloak:$},fa=function(e){this.options=e,this.warn=e.warn||$r,this.transforms=wr(e.modules,"transformCode"),this.dataGenFns=wr(e.modules,"genData"),this.directives=m(m({},ua),e.directives);var t=e.isReservedTag||O;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]};function pa(e,t){var n=new fa(t);return{render:"with(this){return "+(e?da(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function da(e,t){if(e.staticRoot&&!e.staticProcessed)return va(e,t);if(e.once&&!e.onceProcessed)return ha(e,t);if(e.for&&!e.forProcessed)return f=t,v=(u=e).for,h=u.alias,m=u.iterator1?","+u.iterator1:"",y=u.iterator2?","+u.iterator2:"",u.forProcessed=!0,(d||"_l")+"(("+v+"),function("+h+m+y+"){return "+(p||da)(u,f)+"})";if(e.if&&!e.ifProcessed)return ma(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=_a(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return g(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)a=e.component,c=t,l=(s=e).inlineTemplate?null:_a(s,c,!0),n="_c("+a+","+ya(s,c)+(l?","+l:"")+")";else{var r=e.plain?void 0:ya(e,t),i=e.inlineTemplate?null:_a(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return _a(e,t)||"void 0";var a,s,c,l,u,f,p,d,v,h,m,y}function va(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+da(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function ha(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ma(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+da(e,t)+","+t.onceId+++","+n+")":da(e,t)}return va(e,t)}function ma(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?ha(e,n):da(e,n)}}(e.ifConditions.slice(),t,n,r)}function ya(e,t){var n,r,i="{",o=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var l=t.directives[o.name];l&&(a=!!l(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);o&&(i+=o+","),e.key&&(i+="key:"+e.key+","),e.ref&&(i+="ref:"+e.ref+","),e.refInFor&&(i+="refInFor:true,"),e.pre&&(i+="pre:true,"),e.component&&(i+='tag:"'+e.tag+'",');for(var a=0;a<t.dataGenFns.length;a++)i+=t.dataGenFns[a](e);if(e.attrs&&(i+="attrs:{"+wa(e.attrs)+"},"),e.props&&(i+="domProps:{"+wa(e.props)+"},"),e.events&&(i+=sa(e.events,!1,t.warn)+","),e.nativeEvents&&(i+=sa(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(i+="slot:"+e.slotTarget+","),e.scopedSlots&&(i+=(n=e.scopedSlots,r=t,"scopedSlots:_u(["+Object.keys(n).map(function(e){return ga(e,n[e],r)}).join(",")+"]),")),e.model&&(i+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var s=function(e,t){var n=e.children[0];if(1===n.type){var r=pa(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);s&&(i+=s+",")}return i=i.replace(/,$/,"")+"}",e.wrapData&&(i=e.wrapData(i)),e.wrapListeners&&(i=e.wrapListeners(i)),i}function ga(e,t,n){return t.for&&!t.forProcessed?(r=e,o=n,a=(i=t).for,s=i.alias,c=i.iterator1?","+i.iterator1:"",l=i.iterator2?","+i.iterator2:"",i.forProcessed=!0,"_l(("+a+"),function("+s+c+l+"){return "+ga(r,i,o)+"})"):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(_a(t,n)||"undefined")+":undefined":_a(t,n)||"undefined":da(t,n))+"}")+"}";var r,i,o,a,s,c,l}function _a(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||da)(a,t);var s=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(ba(i)||i.ifConditions&&i.ifConditions.some(function(e){return ba(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,c=i||$a;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function ba(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function $a(e,t){return 1===e.type?da(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Ca(JSON.stringify(n.text)))+")";var n,r}function wa(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Ca(r.value)+","}return t.slice(0,-1)}function Ca(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function xa(t,n){try{return new Function(t)}catch(e){return n.push({err:e,code:t}),$}}var ka,Aa,Oa=(ka=function(e,t){var n=Ho(e.trim(),t);!1!==t.optimize&&ea(n,t);var r=pa(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(s){function e(e,t){var n=Object.create(s),r=[],i=[];if(n.warn=function(e,t){(t?i:r).push(e)},t)for(var o in t.modules&&(n.modules=(s.modules||[]).concat(t.modules)),t.directives&&(n.directives=m(Object.create(s.directives||null),t.directives)),t)"modules"!==o&&"directives"!==o&&(n[o]=t[o]);var a=ka(e,n);return a.errors=r,a.tips=i,a}return{compile:e,compileToFunctions:(c=e,l=Object.create(null),function(e,t,n){(t=m({},t)).warn,delete t.warn;var r=t.delimiters?String(t.delimiters)+e:e;if(l[r])return l[r];var i=c(e,t),o={},a=[];return o.render=xa(i.render,a),o.staticRenderFns=i.staticRenderFns.map(function(e){return xa(e,a)}),l[r]=o})};var c,l})(Yo).compileToFunctions;function Sa(e){return(Aa=Aa||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',0<Aa.innerHTML.indexOf("&#10;")}var Ta=!!B&&Sa(!1),Ea=!!B&&Sa(!0),ja=e(function(e){var t=Jn(e);return t&&t.innerHTML}),Na=hn.prototype.$mount;return hn.prototype.$mount=function(e,t){if((e=e&&Jn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=ja(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){{if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}}(e));if(r){var i=Oa(r,{shouldDecodeNewlines:Ta,shouldDecodeNewlinesForHref:Ea,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Na.call(this,e,t)},hn.compile=Oa,hn});
// Sorting for vue
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define([],factory);else{var a=factory();for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(this,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";var ArrayProto=Array.prototype,ObjProto=Object.prototype;var slice=ArrayProto.slice,toString=ObjProto.toString;var util={};util.isArray=function(obj){return Array.isArray(obj)};var MAX_ARRAY_INDEX=Math.pow(2,53)-1;util.isArrayLike=function(obj){if(typeof obj!=="object"||!obj){return false}var length=obj.length;return typeof length==="number"&&length%1===0&&length>=0&&length<=MAX_ARRAY_INDEX};util.isObject=function(obj){var type=typeof obj;return type==="function"||type==="object"&&!!obj};util.each=function(obj,callback){var i,len;if(util.isArray(obj)){for(i=0,len=obj.length;i<len;i++){if(callback(obj[i],i,obj)===false){break}}}else{for(i in obj){if(callback(obj[i],i,obj)===false){break}}}return obj};util.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(name){util["is"+name]=function(obj){return toString.call(obj)==="[object "+name+"]"}});util.toArray=function(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start]}return ret};util.toNumber=function(value){if(typeof value!=="string"){return value}else{var parsed=Number(value);return isNaN(parsed)?value:parsed}};util.convertArray=function(value){if(util.isArray(value)){return value}else if(util.isPlainObject(value)){var keys=Object.keys(value);var i=keys.length;var res=new Array(i);var key;while(i--){key=keys[i];res[i]={$key:key,$value:value[key]}}return res}else{return value||[]}};function multiIndex(obj,is){return is.length?multiIndex(obj[is[0]],is.slice(1)):obj}util.getPath=function(obj,is){return multiIndex(obj,is.split("."))};var toString=Object.prototype.toString;var OBJECT_STRING="[object Object]";util.isPlainObject=function(obj){return toString.call(obj)===OBJECT_STRING};__webpack_exports__["a"]=util},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__util_index__=__webpack_require__(0);function filterBy(arr,search){var arr=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].convertArray(arr);if(search==null){return arr}if(typeof search==="function"){return arr.filter(search)}search=(""+search).toLowerCase();var n=2;var keys=Array.prototype.concat.apply([],__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].toArray(arguments,n));var res=[];var item,key,val,j;for(var i=0,l=arr.length;i<l;i++){item=arr[i];val=item&&item.$value||item;j=keys.length;if(j){while(j--){key=keys[j];if(key==="$key"&&contains(item.$key,search)||contains(__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].getPath(val,key),search)){res.push(item);break}}}else if(contains(item,search)){res.push(item)}}return res}function contains(val,search){var i;if(__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].isPlainObject(val)){var keys=Object.keys(val);i=keys.length;while(i--){if(contains(val[keys[i]],search)){return true}}}else if(__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].isArray(val)){i=val.length;while(i--){if(contains(val[i],search)){return true}}}else if(val!=null){return val.toString().toLowerCase().indexOf(search)>-1}}__webpack_exports__["a"]=filterBy},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__util_index__=__webpack_require__(0);var __WEBPACK_IMPORTED_MODULE_1__string_index__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_2__array_index__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_3__other_index__=__webpack_require__(13);var Vue2Filters={install:function(Vue){__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].each(__WEBPACK_IMPORTED_MODULE_1__string_index__,function(value,key){Vue.filter(key,value)});__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].each(__WEBPACK_IMPORTED_MODULE_3__other_index__,function(value,key){Vue.filter(key,value)});Vue.mixin({methods:{limitBy:__WEBPACK_IMPORTED_MODULE_2__array_index__["c"],filterBy:__WEBPACK_IMPORTED_MODULE_2__array_index__["a"],orderBy:__WEBPACK_IMPORTED_MODULE_2__array_index__["d"],find:__WEBPACK_IMPORTED_MODULE_2__array_index__["b"]}})}};__webpack_exports__["default"]=Vue2Filters;if(typeof window!=="undefined"&&window.Vue){window.Vue.use(Vue2Filters)}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__capitalize__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_1__uppercase__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_2__lowercase__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_3__placeholder__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_4__truncate__=__webpack_require__(8);__webpack_require__.d(__webpack_exports__,"capitalize",function(){return __WEBPACK_IMPORTED_MODULE_0__capitalize__["a"]});__webpack_require__.d(__webpack_exports__,"uppercase",function(){return __WEBPACK_IMPORTED_MODULE_1__uppercase__["a"]});__webpack_require__.d(__webpack_exports__,"lowercase",function(){return __WEBPACK_IMPORTED_MODULE_2__lowercase__["a"]});__webpack_require__.d(__webpack_exports__,"placeholder",function(){return __WEBPACK_IMPORTED_MODULE_3__placeholder__["a"]});__webpack_require__.d(__webpack_exports__,"truncate",function(){return __WEBPACK_IMPORTED_MODULE_4__truncate__["a"]})},function(module,__webpack_exports__,__webpack_require__){"use strict";function capitalize(value){if(!value&&value!==0)return"";value=value.toString();return value.charAt(0).toUpperCase()+value.slice(1)}__webpack_exports__["a"]=capitalize},function(module,__webpack_exports__,__webpack_require__){"use strict";function uppercase(value){return value||value===0?value.toString().toUpperCase():""}__webpack_exports__["a"]=uppercase},function(module,__webpack_exports__,__webpack_require__){"use strict";function lowercase(value){return value||value===0?value.toString().toLowerCase():""}__webpack_exports__["a"]=lowercase},function(module,__webpack_exports__,__webpack_require__){"use strict";function placeholder(input,property){return input===undefined||input===""||input===null?property:input}__webpack_exports__["a"]=placeholder},function(module,__webpack_exports__,__webpack_require__){"use strict";function truncate(value,length){length=length||15;if(!value||typeof value!=="string")return"";if(value.length<=length)return value;return value.substring(0,length)+"..."}__webpack_exports__["a"]=truncate},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__limitBy__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_1__filterBy__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_2__orderBy__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_3__find__=__webpack_require__(12);__webpack_require__.d(__webpack_exports__,"c",function(){return __WEBPACK_IMPORTED_MODULE_0__limitBy__["a"]});__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_1__filterBy__["a"]});__webpack_require__.d(__webpack_exports__,"d",function(){return __WEBPACK_IMPORTED_MODULE_2__orderBy__["a"]});__webpack_require__.d(__webpack_exports__,"b",function(){return __WEBPACK_IMPORTED_MODULE_3__find__["a"]})},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__util_index__=__webpack_require__(0);function limitBy(arr,n,offset){offset=offset?parseInt(offset,10):0;n=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].toNumber(n);return typeof n==="number"?arr.slice(offset,offset+n):arr}__webpack_exports__["a"]=limitBy},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__util_index__=__webpack_require__(0);function orderBy(arr){var comparator=null;var sortKeys;arr=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].convertArray(arr);var args=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].toArray(arguments,1);var order=args[args.length-1];if(typeof order==="number"){order=order<0?-1:1;args=args.length>1?args.slice(0,-1):args}else{order=1}var firstArg=args[0];if(!firstArg){return arr}else if(typeof firstArg==="function"){comparator=function(a,b){return firstArg(a,b)*order}}else{sortKeys=Array.prototype.concat.apply([],args);comparator=function(a,b,i){i=i||0;return i>=sortKeys.length-1?baseCompare(a,b,i):baseCompare(a,b,i)||comparator(a,b,i+1)}}function baseCompare(a,b,sortKeyIndex){var sortKey=sortKeys[sortKeyIndex];if(sortKey){if(sortKey!=="$key"){if(__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].isObject(a)&&"$value"in a)a=a.$value;if(__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].isObject(b)&&"$value"in b)b=b.$value}a=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].isObject(a)?__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].getPath(a,sortKey):a;b=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].isObject(b)?__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].getPath(b,sortKey):b}return a===b?0:a>b?order:-order}return arr.slice().sort(comparator)}__webpack_exports__["a"]=orderBy},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__filterBy__=__webpack_require__(1);function find(arr,search){var array=__WEBPACK_IMPORTED_MODULE_0__filterBy__["a"].apply(this,arguments);array.splice(1);return array}__webpack_exports__["a"]=find},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__currency__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_1__pluralize__=__webpack_require__(15);__webpack_require__.d(__webpack_exports__,"currency",function(){return __WEBPACK_IMPORTED_MODULE_0__currency__["a"]});__webpack_require__.d(__webpack_exports__,"pluralize",function(){return __WEBPACK_IMPORTED_MODULE_1__pluralize__["a"]})},function(module,__webpack_exports__,__webpack_require__){"use strict";function currency(value,symbol,decimals,options){var thousandsSeparator,symbolOnLeft,spaceBetweenAmountAndSymbol;var digitsRE=/(\d{3})(?=\d)/g;options=options||{};value=parseFloat(value);if(!isFinite(value)||!value&&value!==0)return"";symbol=symbol!=null?symbol:"$";decimals=decimals!=null?decimals:2;thousandsSeparator=options.thousandsSeparator!=null?options.thousandsSeparator:",";symbolOnLeft=options.symbolOnLeft!=null?options.symbolOnLeft:true;spaceBetweenAmountAndSymbol=options.spaceBetweenAmountAndSymbol!=null?options.spaceBetweenAmountAndSymbol:false;var stringified=Math.abs(value).toFixed(decimals);stringified=options.decimalSeparator?stringified.replace(".",options.decimalSeparator):stringified;var _int=decimals?stringified.slice(0,-1-decimals):stringified;var i=_int.length%3;var head=i>0?_int.slice(0,i)+(_int.length>3?thousandsSeparator:""):"";var _float=decimals?stringified.slice(-1-decimals):"";symbol=spaceBetweenAmountAndSymbol?symbolOnLeft?symbol+" ":" "+symbol:symbol;symbol=symbolOnLeft?symbol+head+_int.slice(i).replace(digitsRE,"$1"+thousandsSeparator)+_float:head+_int.slice(i).replace(digitsRE,"$1"+thousandsSeparator)+_float+symbol;var sign=value<0?"-":"";return sign+symbol}__webpack_exports__["a"]=currency},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__util_index__=__webpack_require__(0);function pluralize(value){var args=__WEBPACK_IMPORTED_MODULE_0__util_index__["a"].toArray(arguments,1);return args.length>1?args[value%10-1]||args[args.length-1]:args[0]+(value===1?"":"s")}__webpack_exports__["a"]=pluralize}])});
// tabs
(function(){var e=".accordion {border: solid 1px #e9e9e9;} .accordion-enter-active, .accordion-leave-active {   will-change: height, opacity; transition: height 0.3s ease, opacity 0.3s ease; overflow: hidden; } .accordion-enter, .accordion-leave-to { height: 0 !important; opacity: 0; } .accordion__trigger:hover { background-color: #eee; } .accordion__item { border-bottom: solid 1px #e9e9e9; } .accordion__item:last-child { border-bottom: solid 0px #e9e9e9; } .accordion__trigger { padding: 10px 20px; background: #fff; color: #000; cursor: pointer; } .accordion__trigger_active { background: #f5f5f5; } .accordion__content { padding: 15px 10px; }",i=document.createElement("div");i.innerHTML="<style>"+e+"</style>",document.body.appendChild(i),Vue.component("vue-accordion",{template:'<div class="accordion"><slot /></div>',data:function(){return{Accordion:{count:0,active:null}}},provide:function(){return{Accordion:this.Accordion}}}),Vue.component("vue-accordion-item",{template:' <div class="accordion__item"> <div  class="accordion__trigger" :class="{\'accordion__trigger_active\': visible}" @click="open" v-html="title"></div> <transition  name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end"> <div class="accordion__wrapper" v-show="visible"> <div class="accordion__content"><slot /></div> </div> </transition> </div> ',props:["title"],inject:["Accordion"],data:function(){return{index:null}},computed:{visible:function(){return this.index==this.Accordion.active}},methods:{open:function(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start:function(e){e.style.height=e.scrollHeight+"px"},end:function(e){e.style.height=""}},created:function(){this.index=this.Accordion.count++}})})();
// mini ajax
function initXMLhttp(){var e;return e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}function minAjax(e){if(!e.url)return void(1==e.debugLog&&console.log("No Url!"));if(!e.type)return void(1==e.debugLog&&console.log("No Default type (GET/POST) given!"));e.method||(e.method=!0),e.debugLog||(e.debugLog=!1);var o=initXMLhttp();o.onreadystatechange=function(){4==o.readyState&&200==o.status?(e.success&&e.success(o.responseText,o.readyState),1==e.debugLog&&console.log("SuccessResponse"),1==e.debugLog&&console.log("Response Data:"+o.responseText)):1==e.debugLog&&console.log("FailureResponse --> State:"+o.readyState+"Status:"+o.status)};var t=[],n=e.data;if("string"==typeof n)for(var s=String.prototype.split.call(n,"&"),r=0,a=s.length;a>r;r++){var c=s[r].split("=");t.push(encodeURIComponent(c[0])+"="+encodeURIComponent(c[1]))}else if("object"==typeof n&&!(n instanceof String||FormData&&n instanceof FormData))for(var p in n){var c=n[p];if("[object Array]"==Object.prototype.toString.call(c))for(var r=0,a=c.length;a>r;r++)t.push(encodeURIComponent(p)+"[]="+encodeURIComponent(c[r]));else t.push(encodeURIComponent(p)+"="+encodeURIComponent(c))}t=t.join("&"),"GET"==e.type&&(o.open("GET",e.url+"?"+t,e.method),o.send(),1==e.debugLog&&console.log("GET fired at:"+e.url+"?"+t)),"POST"==e.type&&(o.open("POST",e.url,e.method),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(t),1==e.debugLog&&console.log("POST fired at:"+e.url+" || Data:"+t))}

(function(){
    var currentScript = document.currentScript ? document.currentScript : document.getElementsByTagName("script")[document.getElementsByTagName("script").length - 1];
    var src_dir = currentScript.src;
    var dev = false;
    if(src_dir.indexOf('devscripts') != -1) dev = true;
    var endpoint = dev ? 'https://294648c1.ngrok.io' : 'https://api.customily.com/shopify';

    // Debounce function
    var debounce = function(func, wait, immediate) {
        var timeout;

        return function executedFunction() {
          var context = this;
          var args = arguments;

          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };

          var callNow = immediate && !timeout;

          clearTimeout(timeout);

          timeout = setTimeout(later, wait);

          if (callNow) func.apply(context, args);
        };
    };

    window.customily = {
        options: window.customily || {},
        customThumbnail: true,
        exportPreview: true,
        exportFile: false,
        collapsibleOptions: false,
        preloadLibrary: false,
        endpoint: endpoint,
        initialize: function(){
            window.customily.loadStatus = 'initiating';
            console.log('Customily options status: ' + window.customily.loadStatus);

            var locationSp;
            // check for gempages product
            var divs = document.getElementsByTagName('div');
            var productDiv;
            for(var i = 0; i < divs.length; i++){
                if(divs[i].getAttribute('data-label') == "Product"){
                    productDiv = divs[i]
                }
            }
            if(productDiv){
                // product from gempages
                locationSp = productDiv.getElementsByTagName('a')[0].href.split('/');
            }else{
                locationSp = window.location.href.split('/');
            }

            var handle = window.customily.options.handle || locationSp[locationSp.length - 1];
            handle = handle.split('?')[0];

            if (handle.length == 0) {
                try {
                    // product handle on home page
                    handle = document.getElementsByClassName('product_name')[0].children[0].getAttribute('href');
                    handle = handle.substr(handle.lastIndexOf('/') + 1, handle.length);
                } catch (e) {
                    console.log(e);
                }
            }

            if(handle.indexOf('#') > -1) {
              handle = handle.substr(0, handle.indexOf('#'));
            }			

            window.customily.exportFile = window.customily.options.exportFile || false;
            window.customily.exportLater = window.customily.options.exportLater || false;
            window.customily.saveUserImages = window.customily.options.saveUserImages || false;
            window.customily.preloadLibrary = (window.customily.options.preloadLibrary || window.InstantClick) || false;

            var urlargs = {};
            urlargs.pdomain = window.customily.options.pdomain || '';
            minAjax({
                type: 'GET',
                url: window.customily.endpoint + '/options/' + handle,
                data: urlargs,
                success: function(res){
                    window.customily.loadStatus = 'creating-options';
                    console.log('Customily options status: ' + window.customily.loadStatus);

                    res = JSON.parse(res);

                    var optionsEl = document.getElementById('customily-options');

                    if(res.sets && optionsEl){
                        window.customily.loadStatus = 'loading-options';
                        var appEl = document.createElement('div');
                        appEl.id = 'cl_optionsapp';
                        optionsEl.appendChild(appEl);

                        var container = window.customily.options.accordion_sets ? 'vue-accordion' : 'div';
                        var looper = window.customily.options.accordion_sets ? 'vue-accordion-item' : 'div';

                        if (typeof window.customily.options.force_collapsible !== "undefined") {
                          window.customily.collapsibleOptions = window.customily.options.force_collapsible;
                        } else {
                          window.customily.collapsibleOptions = res.configuration.collapsible_options || false;
                        }
                        //v-if="condition(option)"
                        appEl.innerHTML =
                            "<" + container + ">" +
                            "                  <" + looper +
                            "                  v-if=\"loaded && optionsVisible\"" +
                            "                  class=\"customily-set\"" +
                            "                  :set-id=\"set.set_id\"" +
                            "                  :title=\"set.set_title || '(Resave this set)'\"" +
                            "                  v-for=\"(set, set_index) in orderBy(sets, 'sort_id')\">" +
                            "                 <div>" +
                            "                    <div" +
                            "                    v-if=\"visibilityCheck(set.set_id, option)\"" +
                            "                    v-for=\"option in orderBy(set.options, 'sort_id')\"" +
                            "                    @click=\"optionClickTunnel\""+
                            "                    :key=\"option.id\"" +
                            "                    :style=\"option.hide_visually ? 'display: none' : '' \"" +
                            "                    class=\"customily_option\"" +
                            "                    :class=\"{'customily-required-error' : option.required_error, 'paired' : option.paired, 'watched_and_paired': option.watched_and_paired, 'is-toggle': window.customily.collapsibleOptions, 'cl-co-border': window.customily.collapsibleOptions}\" ><!-- 'customily-image-size-error' : option.image_size_error,-->" +
                            "                    <div v-if=\"option.required_error\" info=\"this forces vue to re-render for class change\"> </div>" +
                            "                    <div v-if=\"option.image_size_error\" info=\"this forces vue to re-render for class change\"> </div>" +
                            "                    <label :for=\"'cl-set-'+set.set_id+'-cl-option-'+option.id\"> " +
                            "                        <span v-if=\"option.required\" class=\"customily-required-before-label\"></span>" +
                            "                            {{ option.label }} <span class=\"maxlength-counter\"> {{ (option.max_length) ? '(' + (option.value ?" +
                            "                            option.value.length : '0') + '|' + option.max_length + ')' : '' }} </span>" +
                            "                        <span v-if=\"option.required\" class=\"customily-required-after-label\"></span>" +
                            "                            </label>" +
                            "                            <input :value=\"option.value\" :maxlength=\"option.max_length\" v-if=\"option.type == 'Text Input' && !option.is_textarea\"" +
                            "                            :placeholder=\"option.placeholder || ''\" :name=\"'properties['+(option.label || 'Text') + option.label_duplicate_prevention + ']'\" @input=\"optionChange(option, $event)\"" +
                            "                            v-model=\"option.value\" type=\"text\" :id=\"'cl-set-'+set.set_id+'-cl-option-'+option.id\" :class=\"window.customily.collapsibleOptions ? 'cl-co-hidden' : ''\"/>" +
                            "                        <textarea :value=\"option.value\"  :id=\"'cl-set-'+set.set_id+'-cl-option-'+option.id\" :maxlength=\"option.max_length\" :rows=\"option.max_lines\" :cl-max-charsxlines=\"option.max_charsxlines\"" +
                            "                        v-if=\"option.type == 'Text Input' && option.is_textarea\" :name=\"'properties['+(option.label || 'Text') + option.label_duplicate_prevention + ']'\" @input=\"optionChange(option, $event)\"" +
                            "                       :class=\"window.customily.collapsibleOptions ? 'cl-co-hidden' : ''\"> </textarea>" +
                            "                        <select :id=\"'cl-set-'+set.set_id+'-cl-option-'+option.id\" :name=\"'properties['+(option.label || 'Text') + option.label_duplicate_prevention + ']'\" @change=\"optionChange(option)\" " +
                            "                           v-model=\"option.value\" v-if=\"option.type == 'Dropdown'\" :class=\"window.customily.collapsibleOptions ? 'cl-co-hidden' : ''\">" +
                            "                            <option v-if=\"!option.hasOwnProperty('value')\" value=\"undefined\" disabled> Choose an Option </option>" +
                            "                            <option v-if=\"option.value == ''\" disabled value=\"\"> {{ option.placeholder || 'Choose an Option' }}" +
                            "                            </option>" +
                            "                            <option v-for=\"value in orderBy(option.values, 'sort_id')\" :key=\"value.id\" :value=\"value.value\"> {{" +
                            "                                (value.text || value.value) }} </option>" +
                            "                        </select>" +
                            "                        <div class=\"customily-file-input\" v-if=\"option.type == 'Image Upload'\" style=\"display: flex\" :class=\"window.customily.collapsibleOptions ? 'cl-co-hidden' : ''\">" +
                            "                            <input @change=\"fileUpload(option, $event, 'properties[Uploaded '+(option.label || option.button_text || 'Image')+ option.label_duplicate_prevention + ']')\" style=\"position: fixed!important; left: -99999px\" type=\"file\"" +
                            "                                :id=\"'properties[Uploaded '+(option.label || option.button_text || 'Image')+ option.label_duplicate_prevention + ']'\"" +
                            "                                :name=\"'properties[Uploaded '+(option.label || option.button_text || 'Image')+ option.label_duplicate_prevention + ']'\"" +
                            "                                :cl-min-width=\"option.min_width\" :cl-min-height=\"option.min_height\" :cl-invalid-size=\"option.image_invalid_size\" accept=\"image/*\" />" +
                            "                            <label :for=\"'properties[Uploaded '+(option.label || option.button_text || 'Image')+ option.label_duplicate_prevention + ']'\"" +
                            "                                :id=\"'btn_label'+option.id\" @click=\"triggerFileInputonIos\" style=\"width: auto;\">" +
                            "                                <div :class=\"'customily-download-button btn '+(option.button_class || '')\" type=\"button\"> {{" +
                            "                                    (option.button_text || 'Select Image') }}</div>" +
                            "                            </label>" +
                            "                            <button @click=\"removeImage(option, $event, 'btn_image_remove'+option.id)\" type=\"button\" class=\"cl-image-validation-hidden cl_remove-image\"" +
                            "                                :id=\"'btn_image_remove'+option.id\"> X </button>" +
                            "                        </div>" +
                            "                        <small v-if=\"option.type == 'Image Upload'\" class=\"cl-image-validation-hidden cl_image-invalid-size\" style=\"color: red; font-style: italic; margin-left 5px\">* Your image does not meet the minimum resolution requirements, please upload an image larger than {{ option.min_width }} x {{ option.min_height }}</small>" +

                            "                        <div class=\"customily-file-input\" v-if=\"option.type == 'Vector Upload'\" style=\"display: flex\" :class=\"window.customily.collapsibleOptions ? 'cl-co-hidden' : ''\">" +
                            "                            <input @change=\"fileUpload(option, $event, 'properties[Uploaded '+(option.label || option.button_text || 'Vector')+ option.label_duplicate_prevention + ']')\" style=\"position: fixed!important; left: -99999px\" type=\"file\"" +
                            "                                :id=\"'properties[Uploaded '+(option.label || option.button_text || 'Vector')+ option.label_duplicate_prevention + ']'\"" +
                            "                                :name=\"'properties[Uploaded '+(option.label || option.button_text || 'Vector')+ option.label_duplicate_prevention + ']'\"" +
                            "                                accept=\".eps,.pdf,.svg\" />" +
                            "                            <label :for=\"'properties[Uploaded '+(option.label || option.button_text || 'Vector')+ option.label_duplicate_prevention + ']'\"" +
                            "                                :id=\"'btn_label'+option.id\" @click=\"triggerFileInputonIos\" style=\"width: auto;\">" +
                            "                                <div :class=\"'customily-download-button btn '+(option.button_class || '')\" type=\"button\"> {{" +
                            "                                    (option.button_text || 'Select Vector') }}</div>" +
                            "                            </label>" +
                            "                            <button @click=\"removeVector(option, $event, 'btn_vector_remove'+option.id)\" type=\"button\" class=\"cl-image-validation-hidden cl_remove-image\"" +
                            "                                :id=\"'btn_vector_remove'+option.id\"> X </button>" +
                            "                        </div>" +

                            "                        <br v-if=\"option.type == 'Swatch'\">" +
                            "                        <div v-if=\"option.type == 'Swatch'\" :class=\"'swatch-container ' + (window.customily.collapsibleOptions ? 'cl-co-hidden' : '')\">" +
                            "                            <div class=\"swatch customily-swatch\" v-for=\"value in orderBy(option.values, 'sort_id')\" :key=\"value.id\"" +
                            "                                :style=\"'background-color:' + (value.bg_color || '#ddd')\">" +
                            "                                <input :name=\"'properties['+(option.label || 'Swatch')+ option.label_duplicate_prevention + ']'\" @change=\"optionChange(option)\" v-model=\"option.value\"" +
                            "                                    :value=\"value.value || value.tooltip || value.id\" type=\"radio\" :id=\"'cl-set-'+set.set_id+'-cl-option-'+option.id+'-cl-value-id-'+value.id\" />" +
                            "                                <label  :for=\"'cl-set-'+set.set_id+'-cl-option-'+option.id+'-cl-value-id-'+value.id\">" +
                            "                                    <img v-if=\"value.thumb_image\" :src=\"value.thumb_image\" width=\"40\" height=\"40\" />" +
                            "                                </label>" +
                            "                                <div class=\"customily-tooltip\" v-if=\"value.tooltip\"><span> {{ value.tooltip }} </span></div>" +
                            "                            </div>" +
                            "                        </div>" +
                            "                        <div v-if=\"option.type == 'Checkbox'\" :class=\"'checkbox-container ' + (window.customily.collapsibleOptions ? 'cl-co-hidden' : '')\">" +
                            "                            <input :name=\"'properties['+(option.label || 'Checkbox') + option.label_duplicate_prevention + ']'\" @change=\"optionChange(option)\" v-model=\"option.value\" type=\"checkbox\"" +
                            "                                :id=\"'cl-set-'+set.set_id+'-cl-option-'+option.id\" />" +
                            "                        </div>" +
                            "                        <small v-if=\"option.help_text\" class=\"help-text\"> {{ option.help_text}} </small>" +
                            "                    </div>" +
                            "                </div>" +
                            "              </" + looper + ">" +
                            "            </" + container + ">";

                        if(!Array.prototype.find)
                        {
                            Object.defineProperty(Array.prototype, 'find', {
                                value: function (finder) { var res = this.map(function(el, i) { return finder.call(this, el, i) ? el : !!0; }).filter(Boolean); return res.length ? res[0] : undefined; }
                            });
                        }
                        var sets = res.sets.map(function(set){
                            var assignedSet = res.configuration.assignedSets.find(function(s){ return s.id == set.set_id});
                            set.sort_id = assignedSet ? assignedSet.sort_id : 0;
                            set.options = set.options.map(function(op){ return JSON.parse(op.option_json)});
                            set.options = set.options.map(function (opt) {
                                var pseudo_functions = [];
                                opt.functions.forEach(function (f, i) {
                                    var is_range = f.text_id && f.text_id.match && f.text_id.match(/\d+-\d+/gi);
                                    if (is_range) {
                                        //remove actual function
                                        opt.functions[i] = false;
                                        var range = f.text_id.split('-');
                                        var range1 = parseInt(range[0], 10);
                                        var range2 = parseInt(range[1], 10);
                                        for (var i = range1; i <= range2; i++){
                                            var f_clone = JSON.parse(JSON.stringify(f));
                                            f_clone.text_id = i;
                                            pseudo_functions.push(f_clone);
                                        }
                                    }
                                });
                                opt.functions = opt.functions.filter(Boolean).concat(pseudo_functions);

                                if(!opt.values.length) return opt;
                                var selected = opt.values.find(function(val){ return val.selected });
                                if(selected && selected.value == ''){
                                    opt.values.splice(opt.values.indexOf(selected), 1);
                                    opt.placeholder = selected.text;
                                }
                                opt.value = selected ? selected.value : '';
                                if(opt.type == 'Swatch' && selected && !opt.value){
                                    opt.value = selected.id;
                                }
                                opt.label = (opt.label || '').replace(/snglqt/gi, '\'');
                                opt.watched_and_paired = set.options.some(function(op){ return op.paired && op.conditions.some(function(c){ return c.watch_option == opt.id }); })

                                return opt;
                            });
                            set.variation_conditions = assignedSet.variation_conditions;
                            var option_labels = [];
                            set.options.forEach(function(op){
                                var dups = option_labels.filter(function(lb){ return lb == op.label || !op.label; });
                                option_labels.push(op.label);

                                // We can't have duplicated properties for the product, but adding a number after the option name is ugly so,
                                //  what we do is add an invisible unicode character called "U+200B (zero-width space character)". On this way,
                                //  we don't have duplicated options and the user doesn't notice a difference in the names.
                                if (dups.length > 0) {
                                    var labelAddition = '';

                                    // If this is the 'dups.length' duplicated option, add 'dups.length' invisible characters
                                    for (var n = 0; n < dups.length; ++n) {
                                        labelAddition += '\u200B'
                                    }

                                    op.label_duplicate_prevention = labelAddition;
                                }
                                // No need to add anything, this is not a duplicated option
                                else {
                                    op.label_duplicate_prevention = '';
                                }
                            });
                            return set;
                        });

                        window.customily.optionsapp = new Vue({
                            el: appEl,
                            data: {
                                optionsVisible: true,
                                loaded: false,
                                sets: sets,
                                engraverProduct: '',
                                iOS: (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream),
                                engraverTexts: {},
                                engraverImages: {},
                                engraverVectors: {},
                                current_variant_options: res.configuration.variations,
                                required_check_sleep: true,
                                images_size_check_sleep: false
                            },
                            watch:{
                                required_error: function (err, was) {
                                    console.log(err, was);
                                },
                                /**
                                 * Debounde the setProduct() method because on some products this is called many times
                                 *  during page load due to options functions being called, this is a workaround, the root
                                 *  of this problem is that during load, options change visibility resulting in many options
                                 *  change triggered.
                                 */
                                engraverProduct: debounce(function(id, was) {
                                    var _this = this;
                                    if(id == was || id.trim() == "") {
                                        return 0;
                                    }
                                    var pc = document.getElementById('preview-canvas');
                                    if (pc) {
                                        if (!pc.classList.contains('lower-canvas')) {
                                            var engraverOptions = window.customily.options.engraverOptions || {};

                                            engraverOptions['mobileControls'] = window.customily.options.mobile_controls;
                                            engraverOptions['forceMobileControls'] = window.customily.options.force_mobile_controls;
                                            engraverOptions['hoverZoom'] = window.customily.options.hover_zoom;
                                            engraverOptions['hoverZoomLevel'] = 2;
                                            engraverOptions['imagesCover'] = window.customily.options.uploaded_image_covers;
                                            engraver.init(pc, engraverOptions);
                                        }

                                        engraver.productLoading = true;
                                        engraver.setProduct(id).then(function (){
                                            engraver.productLoading = false;
                                            _this.restoreEngraver();
                                            engraver.clearSelection();
                                            window.dispatchEvent(new CustomEvent('customily-loaded'));
                                        });
                                    } else {
                                        console.warn('Customily preview-canvas not found!');
                                    }
                                }, 200)
                            },
                            computed: {

                            },
                            methods: {
                                optionClickTunnel: function(e){
                                    if(!$.fn) return 1;
                                    // we dont have event.path in iOS

                                    var $customily_option = $(e.currentTarget);
                                    var option_is_active = $customily_option.is('.is-cl-co-active.is-toggle');
                                    var $label = e.target.tagName == 'LABEL' && option_is_active ? $(e.target) : false;
                                    if(!option_is_active && $customily_option.is('.is-toggle')){
                                        if($customily_option.data('cl-co-visible')){ return }
                                        $('.customily_option.is-toggle').each(function() { window.customily.hideOption($(this)); });
                                        $customily_option.addClass('is-cl-co-active').data('cl-co-visible', true).children()
                                            .filter(':not(input:radio, label)').removeClass('cl-co-hidden').slideDown();
                                        $customily_option.removeClass('cl-co-no-padding').addClass('cl-co-padding');
                                    }
                                    if($label){
                                        if ($label.parent().data('cl-co-visible')) {
                                            window.customily.hideOption($label.parent());
                                            e.preventDefault();
                                            return false;
                                        }
                                    }
                                },
                                checkRequiredError: function () {
                                    if (this.$data.required_check_sleep) { return 0; }
                                    
                                    this.sets.forEach(function (s) {
                                        s.options.forEach(function (o) {
                                            if (o.required && o.isVisible) {
                                                if (typeof o.value === 'undefined' || (typeof o.value === 'string' && !o.value)) {
                                                    o.required_error = true;    
                                                }
                                                else {
                                                    o.required_error = false;
                                                }
                                            }
                                            else {
                                                o.required_error = false;
                                            }
                                        });
                                        // Check if some of options did not pass requirement
                                        s.required_error = s.options.some(function (o) { return o.required_error }) ? true : false;
                                    });

                                    // Check if some sets has options in them did not pass requirement
                                    this.$data.required_error = this.sets.some(function (s) { return s.required_error }) ? true : false;
                                    return this.$data.required_error;
                                },
                                checkImageSizeError: function () {
                                    if (this.$data.images_size_check_sleep) { return 0; }
                                    this.sets.forEach(function (s) {
                                        s.options.forEach(function (o) {
                                            if (o.type == 'Image Upload' && o.isVisible) {
                                                o.image_size_error = o.image_invalid_size ? true : false;
                                            }
                                        });
                                        //check if some of options did not pass requirement
                                        s.image_size_error = s.options.some(function (o) { return o.image_size_error }) ? true : false;
                                    });
                                    // check if some sets has options in them did not pass requirement
                                    this.$data.image_size_error = this.sets.some(function (s) { return s.image_size_error }) ? true : false;
                                    return this.$data.image_size_error;
                                },
                                handleValidationErrors: function() {
                                    if (window.customily.optionsapp.checkImageSizeError()) {
                                        window.customily.$cloned_cart_button.attr('disabled', 'disabled').addClass('cl-cursor-not-allowed');
                                        if (window.customily.$cloned_buy_now_button) {
                                            window.customily.$cloned_buy_now_button.attr('disabled', 'disabled').addClass('cl-cursor-not-allowed');
                                        }
                                    } else {
                                        window.customily.$cloned_cart_button.removeAttr('disabled').removeClass('cl-cursor-not-allowed');
                                        if (window.customily.$cloned_buy_now_button) {
                                            window.customily.$cloned_buy_now_button.removeAttr('disabled').removeClass('cl-cursor-not-allowed');
                                        }
                                    }
                                },
                                triggerFileInputonIos: function ($event) {
                                    // weird issue surfaced on kidsartify, but this is a common fix for ios
                                    if (this.$data.iOS && ($event.currentTarget.children[0].classList.contains('hoverButtonFix') || document.documentElement.classList.contains('hoverButtonFix'))) {
                                        document.getElementById($event.currentTarget.getAttribute('for')).click();
                                    }
                                },
                                visibilityCheck: function(set_id, option){
                                    var _this = this;
                                    var c1 = this.variant_condition(set_id, option);
                                    var c2 = this.condition(set_id, option);
                                    var set_visible = this.variant_condition(set_id, null, true);

                                    // Option will become visible
                                    if(c1 && c2 && set_visible) {
                                        if(option.isVisible == false && this.$data.engraverProduct){
                                            //  run functions
                                            this.optionChange(option);
                                        }

                                        // Restore image
                                        if(option.file_upload_image_id && option.value && !option.value.name && !option.isVisible){
                                            engraver.setImage(Number(option.file_upload_image_id), option.value)
                                                .then(function(){
                                                    engraver.clearSelection();
                                                });
                                        }

                                        // Restore vector placeholder
                                        if(option.file_upload_vector_id && option.value && !option.isVisible) {
                                            engraver.setVector(Number(option.file_upload_vector_id), option.value)
                                                .then(function() {
                                                    engraver.clearSelection();
                                                });
                                        }

                                        option.isVisible = true;
                                        window.dispatchEvent(new CustomEvent('customily-conditions-change'));
                                        return true;
                                    }
                                    // Is option going to dissapear?
                                    else if (c1 == false || c2 == false || set_visible == false) {
                                        //escape undefineds
                                        //untype text
                                        if(option.functions && this.$data.engraverProduct ){
                                            var textFunc = option.functions.filter(function(f){ return f.type == 'text' });
                                            var imageFunc = option.functions.filter(function(f){ return f.type == 'image' });
                                            var vectorFunc = option.functions.filter(function (f) { return f.type == 'vector' });
                                            var vectorColorFunc = option.functions.filter(function (f) { return f.type == 'vectorColor' });

                                            if(textFunc){
                                                textFunc.forEach(function(func){
                                                    // make sure another visible field doesnt have same text id
                                                    var engraverHasText = !engraver.productLoading ? engraver.getAvailableTextIds().some(function(id){ return id == func.text_id}) : !!1;
                                                    if(!engraverHasText) return 1;
                                                    var conflictingSets = _this.$data.sets.filter(function(set){
                                                        // other options_that_modify_text_with_same_id_and_visible
                                                        return set.options
                                                        // option cant conflict with itself
                                                            .filter(function(opt){return opt !== option})
                                                            .some(function(opt){
                                                                // options that has function with same text id
                                                                return opt.functions.some(function(f){
                                                                    return  f.type == 'text' && f.text_id == func.text_id
                                                                }) && opt.isVisible;
                                                                // ^^ and visible at the moment
                                                            });
                                                    });

                                                    if( _this.$data.engraverTexts[func.text_id] && !conflictingSets.length){
                                                        Vue.set(_this.$data.engraverTexts[func.text_id], 'value', '');
                                                        if(!engraver.productLoading){engraver.setText(Number(func.text_id), option.brackets_wrapper[0] + '' + option.brackets_wrapper[1]);}
                                                    }
                                                });
                                            }

                                            //untype end
                                            // reset dynamic image to position 1
                                            if(imageFunc) {
                                                imageFunc.forEach(function(func){
                                                    // make sure another visible field doesnt have same image id
                                                    var conflictingSets = _this.$data.sets.filter(function(set){
                                                        // other options_that_modify_dynamic_image_with_same_id_and_visible
                                                        return set.options
                                                        // option cant conflict with itself
                                                            .filter(function(opt){return opt !== option})
                                                            .some(function(opt){
                                                                // options that has function with same text id
                                                                return opt.functions.some(function(f){
                                                                    return  f.type == 'image' && f.image_id == func.image_id
                                                                }) && opt.isVisible;
                                                                // ^^ and visible at the moment
                                                            });
                                                    });
                                                    if( _this.$data.engraverImages[func.image_id] && !conflictingSets.length){
                                                        if(!engraver.productLoading && _this.$data.engraverImages[func.image_id].image != 1){
                                                            engraver.setPresetImage(Number(func.image_id), 1);
                                                        }
                                                        Vue.set(_this.$data.engraverImages[func.image_id], 'image', 1);
                                                    }
                                                });
                                            }

                                            //  dynamic image reset end
                                            // clear image
                                            if(option.file_upload_image_id && option.value && !option.value.name && option.isVisible){
                                                engraver.setImage(Number(option.file_upload_image_id), 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==')
                                                    .then(function(){
                                                        engraver.clearSelection();
                                                    });
                                            }

                                            // Clear vector placeholders when they are not visible anymore
                                            if(option.file_upload_vector_id && option.value && option.isVisible) {
                                                engraver.setVector(Number(option.file_upload_vector_id), '')
                                                    .then(function() {
                                                        engraver.clearSelection();
                                                    });
                                            }

                                            var image_id = Number(option.file_upload_image_id);
                                            if (_this.$data.engraverImages[image_id]) {
                                                Vue.set(_this.$data.engraverImages, image_id, 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
                                            }

                                            if(vectorFunc) {
                                                vectorFunc.forEach(function(func) {
                                                    // make sure another visible field doesnt have same vector id
                                                    var conflictingSets = _this.$data.sets.filter(function(set){
                                                        // other options_that_modify_dynamic_vector_with_same_id_and_visible
                                                        return set.options
                                                        // option cant conflict with itself
                                                            .filter(function(opt){return opt !== option})
                                                            .some(function(opt){
                                                                // options that has function with same text id
                                                                return opt.functions.some(function(f){
                                                                    return  f.type == 'vector' && f.vector_id == func.vector_id
                                                                }) && opt.isVisible;
                                                                // ^^ and visible at the moment
                                                            });
                                                    });

                                                    if( _this.$data.engraverVectors[func.vector_id] && !conflictingSets.length){
                                                        if(!engraver.productLoading && _this.$data.engraverVectors[func.vector_id].image != 1){
                                                            engraver.setPresetVector(Number(func.vector_id), 1);
                                                        }
                                                        Vue.set(_this.$data.engraverVectors[func.vector_id], 'image', 1);
                                                    }
                                                });
                                            }

                                            if (vectorColorFunc) {
                                                vectorColorFunc.forEach(function (func) {
                                                    // make sure another visible field doesn't have same vector id
                                                    var conflictingSets = _this.$data.sets.filter(function(set) {
                                                        // other options_that_modify_dynamic_vector_with_same_id_and_visible
                                                        return set.options
                                                        // option cant conflict with itself
                                                            .filter(function(opt){return opt !== option})
                                                            .some(function(opt){
                                                                // options that has function with same vector id
                                                                return opt.functions.some(function(f){
                                                                    return  f.type == 'vectorColor' && f.vector_id == func.vector_id
                                                                }) && opt.isVisible;
                                                                // ^^ and visible at the moment
                                                            });
                                                    });

                                                    if(_this.$data.engraverVectors[func.vector_id] && !conflictingSets.length) {
                                                        if(!engraver.productLoading && _this.$data.engraverVectors[func.vector_id].image != 1) {
                                                            engraver.setPresetVectorColor(Number(func.vector_id), 1);
                                                        }
                                                        Vue.set(_this.$data.engraverVectors[func.vector_id], 'vectorColor', 1);
                                                    }
                                                });
                                            }
                                        }

                                        option.isVisible = false;
                                        window.dispatchEvent(new CustomEvent('customily-conditions-change'));
                                        return false;
                                    }
                                },
                                variant_condition: function(set_id, option, set){
                                    var _this = this;
                                    var result = true;
                                    if(!window.customily.assignedSets_shallow) return true;
                                    var subjectSet = window.customily.assignedSets_shallow.find(function(set){
                                        return set.id == set_id
                                    });
                                    if(!subjectSet.options) return true;

                                    // ###################################################### //
                                    //  if option is undefined and third argument is true //
                                    //  we are evaluating condition for set  //
                                    //  subject option will be set //
                                    // ###################################################### //
                                    var subjectOption = set ? subjectSet : subjectSet.options.find(function(op){
                                        return op.id == option.id;
                                    });

                                    if(!subjectOption || !subjectOption.variation_conditions || !subjectOption.variation_conditions.length) return true;

                                    var prevCondition, action;
                                    for(var i=0; i<subjectOption.variation_conditions.length; i++){

                                        var condition = subjectOption.variation_conditions[i];
                                        var valueMet;

                                        if(i == 0) action = condition.action;

                                        if(!action || action == 'undefined') {
                                            valueMet = true;
                                            continue;
                                        }


                                        var subjectVariant = _this.$data.current_variant_options.find(function(variant){
                                            return variant.id == condition.watch_option;
                                        });
                                        //check subject variant
                                        if(!subjectVariant)  {
                                            valueMet = true;
                                            continue;
                                        }

                                        valueMet = subjectVariant.value && (subjectVariant.value == condition.desired_value);

                                        if(i>0){
                                            if(condition.combination_operator == 'undefined'){
                                                valueMet = true;
                                                continue;
                                            }
                                            if(condition.combination_operator == 'and'){
                                                if(valueMet && prevCondition){
                                                    valueMet = true;
                                                }else{
                                                    valueMet = false;
                                                }
                                            }
                                            if(condition.combination_operator == 'or'){
                                                if(valueMet || prevCondition){
                                                    valueMet = true;
                                                }else{
                                                    valueMet = false;
                                                }
                                            }
                                        }
                                        prevCondition = valueMet;
                                    }

                                    if(action == 'undefined'){
                                        valueMet = true;
                                    }

                                    var show = true;

                                    if(valueMet){
                                        if(action == 'show'){
                                            show = true;
                                        }
                                        if(action == 'hide'){
                                            show = false;
                                        }
                                    }else{
                                        if(action == 'show'){
                                            show = false;
                                        }
                                        if(action == 'hide'){
                                            show = true;
                                        }
                                    }
                                    return show;
                                },
                                condition: function(set_id, option){
                                    var _this = this;

                                    if(!option.conditions || (option.conditions && !option.conditions.length)){return true}

                                    var prevCondition, action;
                                    for(var i=0; i<option.conditions.length; i++){
                                        var valueMet;
                                        var condition = option.conditions[i];
                                        if(condition.action == 'undefined'){
                                            return true;
                                        }
                                        if(i == 0){
                                            action = condition.action;
                                        }

                                        var subjectSet = _this.$data.sets.find(function(set){ return set.set_id == set_id})
                                        if(!subjectSet || !subjectSet.options || !subjectSet.options.find) {
                                            valueMet = true;
                                            continue;
                                        }

                                        var subjectOption = subjectSet.options.find(function(opt){
                                            return opt.id == condition.watch_option;
                                        });

                                        if(!subjectOption) {
                                            valueMet = true;
                                            continue;
                                        }

                                        if (!subjectOption.isVisible) {
                                            valueMet = false;
                                            continue;
                                        }

                                        var subjectValue = subjectOption.values.find(function(val){
                                            return (val.value == subjectOption.value ||
                                                   (val.tooltip && val.tooltip.length > 0 && val.tooltip == subjectOption.value) ||
                                                   val.id === subjectOption.value);
                                        });

                                        valueMet = subjectValue && (subjectValue.id == condition.desired_value);

                                        if(i>0){
                                            if(condition.combination_operator == 'undefined'){
                                                valueMet = true;
                                                continue;
                                            }
                                            if(condition.combination_operator == 'and'){
                                                if(valueMet && prevCondition){
                                                    valueMet = true;
                                                }else{
                                                    valueMet = false;
                                                }
                                            }
                                            if(condition.combination_operator == 'or'){
                                                if(valueMet || prevCondition){
                                                    valueMet = true;
                                                }else{
                                                    valueMet = false;
                                                }
                                            }
                                        }
                                        prevCondition = valueMet;
                                    }

                                    if(!action || action == 'undefined'){
                                        valueMet = true;
                                    }

                                    var show = true;

                                    if(valueMet){
                                        if(action == 'show'){
                                            show = true;
                                        }
                                        if(action == 'hide'){
                                            show = false;
                                        }
                                    }else{
                                        if(action == 'show'){
                                            show = false;
                                        }
                                        if(action == 'hide'){
                                            show = true;
                                        }
                                    }

                                    return show;
                                },
                                fileUpload: function(option, event, elId) {
                                    var _this = this;
                                    var el = document.getElementById(elId);
                                    var file = event.target.files[0];
                                    var reader = new FileReader();
                                    reader.addEventListener('load', function () {
                                        option.value = reader.result;
                                        var vectorId = Number(option.file_upload_image_id || 1);

                                        var merged = _this.$data.engraverImages[vectorId] ?
                                            Vue.util.mergeOptions(_this.$data.engraverImages[vectorId], { image: reader.result }) : { id: vectorId, image: reader.result };

                                        Vue.set(_this.$data.engraverImages, vectorId, merged);

                                        engraver.setImage(vectorId, reader.result).then(function () {
                                            engraver.clearSelection();
                                            event.target.value = null;
                                        });
                                        if (window.displayCanvas) {
                                            displayCanvas();
                                        }

                                        var img = new Image();
                                        img.src = reader.result;
                                        img.onload = function() {
                                            var minWidth = parseInt(el.getAttribute('cl-min-width') || 0);
                                            var minHeight = parseInt(el.getAttribute('cl-min-height') || 0);
                                            var warnMessage = el.parentElement.nextElementSibling;

                                            if (img.width < minWidth || img.height < minHeight) {
                                                option.image_invalid_size = true;
                                                warnMessage.classList.remove('cl-image-validation-hidden');
                                            } else {
                                                option.image_invalid_size = false;
                                                warnMessage.classList.add('cl-image-validation-hidden');
                                            }

                                            window.customily.optionsapp.handleValidationErrors();
                                        };

                                        el.nextElementSibling.nextElementSibling.classList.remove('cl-image-validation-hidden');
                                    }, false);

                                    if (file) {
                                        // Read the image file
                                        if (option.type === 'Image Upload') {
                                            reader.readAsDataURL(file);
                                        }
                                        // Vector uploads can have file objects directly loaded
                                        else if (option.type === 'Vector Upload') {
                                            option.value = file;
                                            var vectorId = Number(option.file_upload_vector_id || 1);

                                            var $elem = $('[id="' + elId + '"]').parent();
                                            if ($elem.plswait) $elem.plswait();
                                            engraver.setVector(vectorId, file).then(function () {
                                                if ($elem.plswait) $elem.plswait('stop');
                                                engraver.clearSelection();
                                                event.target.value = null;
                                            }).catch(function () {
                                                if ($elem.plswait) $elem.plswait('stop');
                                            });

                                            if (window.displayCanvas) {
                                                displayCanvas();
                                            }
                                        }
                                        else {
                                            console.warn('Invalid type ' + option.type);
                                        }
                                    } else if (option.value) {
                                        engraver.setImage(imageId, option.value).then(function () {
                                            engraver.clearSelection();
                                            event.target.value = null;
                                        });
                                    }
                                },
                                removeImage: function(option, event, elId){
                                    var el = document.getElementById(elId);
                                    option.value = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
                                    var imageId = Number(option.file_upload_image_id || 1);
                                    engraver.setImage(imageId, option.value).then(function () {
                                        engraver.clearSelection();
                                        event.target.value = null;
                                        option.image_invalid_size = false;
                                        el.parentElement.nextElementSibling.classList.add('cl-image-validation-hidden');
                                        el.classList.add('cl-image-validation-hidden');

                                        window.customily.optionsapp.handleValidationErrors();
                                    });
                                },
                                removeVector: function (option, event, elId) {
                                    var el = document.getElementById(elId);
                                    option.value = '';
                                    var vectorId = Number(option.file_upload_vector_id || 1);

                                    engraver.setVector(vectorId, option.value).then(function () {
                                        engraver.clearSelection();
                                        event.target.value = null;
                                        el.parentElement.nextElementSibling.classList.add('cl-image-validation-hidden');
                                        el.classList.add('cl-image-validation-hidden');
                                    });
                                },
                                optionChange: function (option, event, assignForFuture) {
                                    var _this = this;

                                    setTimeout(function() {
                                        var pc = document.getElementById('preview-canvas');
                                        if (pc) {
                                            if (window.customily.options.controlled_render) {
                                                assignForFuture = true;
                                            }

                                            var value_was = '';
                                            // Android input fix
                                            if (event && event.target) {
                                                value_was = event.target._value || '';
                                                Vue.set(option, 'value', event.target.value);
                                            }

                                            _this.checkRequiredError();

                                            option.functions.forEach(function(func) {

                                                // first we try to fint selected from its id
                                                var value = option.values.find(function(val) {
                                                    return val.id === option.value
                                                });
                                                // and then we check for actual value like a string match
                                                if (!value) {
                                                    value = option.values.find(function(val) {
                                                        return (val.value == option.value);
                                                    });
                                                }
                                                if (!value) {
                                                    value = option.values.find(function(val) {
                                                        return (val.tooltip == option.value);
                                                    });
                                                }
                                                /* ^ swatches matching with id and ^
                                                 dropdown are matching with value
                                                 but id has priority in in swatches
                                                radio buttons cant have string value */
                                                switch (func.type) {
                                                    case 'text':
                                                        // check textarea max characters per lines
                                                        if (option.value && event && event.target && event.target.type == 'textarea' &&
                                                            option.max_charsxlines && option.max_charsxlines > 0) {

                                                            setTimeout(function() {
                                                                var newValue = option.value.replace(new RegExp('(?![^\\n]{1,' + option.max_charsxlines + '}$)([^\\n]{1,' + option.max_charsxlines + '})\\s', 'g'), '$1\n');
                                                                var newValueArray = newValue.split('\n');
                                                                if (option.max_lines && option.max_lines > 0 && newValueArray.length > option.max_lines) {
                                                                    var count = newValueArray.length - option.max_lines;
                                                                    for (var i = 0; i < count; i++) {
                                                                        newValueArray.pop();
                                                                    }
                                                                    newValue = newValueArray.join('\n');
                                                                }

                                                                if (!engraver.productLoading && !assignForFuture) {
                                                                    // if text is pasted and is more than one line
                                                                    if (window.customily.textPasted && window.customily.textPasted.length > option.max_charsxlines) {
                                                                        var str = '';
                                                                        // call setText for each text line
                                                                        newValueArray.forEach(function (v) {
                                                                            str = str + v + '\n';
                                                                            engraver.setText(Number(func.text_id),
                                                                                option.brackets_wrapper[0] + str + option.brackets_wrapper[1]);
                                                                        });
                                                                    } else {
                                                                        engraver.setText(Number(func.text_id),
                                                                            option.brackets_wrapper[0] + newValue + option.brackets_wrapper[1]);
                                                                    }
                                                                    window.customily.textPasted = null;
                                                                }

                                                                Vue.set(option, 'value', newValue);
                                                                saveTextValue();
                                                            }, 200);
                                                        } else {
                                                            if (!engraver.productLoading && !assignForFuture) {
                                                                var optionValue = option.value || '';
                                                                engraver.setText(Number(func.text_id),
                                                                    option.brackets_wrapper[0] + optionValue + option.brackets_wrapper[1]);
                                                            }
                                                            saveTextValue();
                                                        }

                                                        function saveTextValue() {
                                                            var merged = _this.$data.engraverTexts[func.text_id] ?
                                                                Vue.util.mergeOptions(_this.$data.engraverTexts[func.text_id], {value: option.value}) :
                                                                {id: func.text_id, value: option.value};
                                                            Vue.set(_this.$data.engraverTexts, func.text_id, merged);
                                                        }

                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        _this.$forceUpdate();
                                                        break;

                                                    case 'color':
                                                        if (!value) break;
                                                        var color_id = value.color_id || value.sort_id + 1 || value.id + 1;
                                                        var merged = _this.$data.engraverTexts[func.text_id] ?
                                                            Vue.util.mergeOptions(_this.$data.engraverTexts[func.text_id], {color: color_id}) :
                                                            {id: func.text_id, color: color_id};
                                                        Vue.set(_this.$data.engraverTexts, func.text_id, merged);
                                                        if (!assignForFuture) {
                                                            engraver.setFontColor(Number(func.text_id), +color_id);
                                                        }
                                                        //if(!assignForFuture) { _this.restoreEngraver({onlyText: true}); }
                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        break;

                                                    case 'font':
                                                        if (!value) break;
                                                        var font_id = value.font_id || value.sort_id + 1 || value.id + 1;
                                                        var merged = _this.$data.engraverTexts[func.text_id] ?
                                                            Vue.util.mergeOptions(_this.$data.engraverTexts[func.text_id], {font: font_id}) :
                                                            {id: func.text_id, color: color_id, font: font_id};
                                                        Vue.set(_this.$data.engraverTexts, func.text_id, merged);
                                                        if (!assignForFuture) {
                                                            engraver.setFont(Number(func.text_id), +font_id);
                                                        }
                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        break;

                                                    case 'image':
                                                        // changing dynamic image with text
                                                        if (option.type == 'Text Input') {
                                                            try {
                                                                var text_was = value_was.split('');
                                                                var text_is = option.value.split('');

                                                                text_was.map(function (char, i) {
                                                                    return text_is[i] == char ? false : char;
                                                                }).forEach(function (char, i) {
                                                                    if (char) {
                                                                        Vue.set(_this.$data.engraverImages, i + 1, {
                                                                            id: i + 1,
                                                                            image: 1
                                                                        });
                                                                        if (!assignForFuture) {
                                                                            engraver.setPresetImage(i + 1, 1);
                                                                        }
                                                                    }
                                                                });
                                                                text_is.forEach(function (char, i) {
                                                                    var char_index = char.toUpperCase().charCodeAt() - 64;
                                                                    char_index = char_index < 0 ? char_index + 43 : char_index;
                                                                    // number 1 for empty image so
                                                                    char_index++;
                                                                    char_index = char == ' ' ? 1 : char_index;
                                                                    var merged = _this.$data.engraverImages[i + 1] ?
                                                                        Vue.util.mergeOptions(_this.$data.engraverImages[i + 1], {image: char_index}) :
                                                                        {id: i + 1, image: char_index};
                                                                    Vue.set(_this.$data.engraverImages, i + 1, merged);
                                                                    if (!assignForFuture) {
                                                                        engraver.setPresetImage(i + 1, +char_index);
                                                                    }
                                                                    if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                                });
                                                            } catch (err) {
                                                                // just continue
                                                            }
                                                        }
                                                        if (!value) break;
                                                        var image_id = value.image_id || value.sort_id + 1 || value.id + 1;
                                                        var merged = _this.$data.engraverImages[func.image_id] ?
                                                            Vue.util.mergeOptions(_this.$data.engraverImages[func.image_id], {image: image_id}) :
                                                            {id: func.image_id, image: image_id};
                                                        Vue.set(_this.$data.engraverImages, func.image_id, merged);
                                                        if (!assignForFuture) {
                                                            engraver.setPresetImage(Number(func.image_id), +image_id);
                                                        }
                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        break;

                                                    case 'vector':
                                                        if (!value) break;
                                                        var color_id = value.vector_id || value.sort_id + 1 || value.id + 1;
                                                        var merged = _this.$data.engraverVectors[func.vector_id] ?
                                                            Vue.util.mergeOptions(_this.$data.engraverVectors[func.vector_id], {image: color_id}) :
                                                            {id: func.vector_id, image: color_id};
                                                        Vue.set(_this.$data.engraverVectors, func.vector_id, merged);
                                                        if (!assignForFuture) {
                                                            engraver.setPresetVector(Number(func.vector_id), +color_id);
                                                        }
                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        break;
                                                    
                                                    case 'vectorColor':
                                                        if (!value) break;
                                                        var color_id = value.color_id || value.sort_id + 1 || value.id + 1;
                                                        var merged = _this.$data.engraverVectors[func.vector_id] ?
                                                            Vue.util.mergeOptions(_this.$data.engraverVectors[func.vector_id], { vectorColor: color_id }) : { id: func.vector_id, vectorColor: color_id };
                                                        Vue.set(_this.$data.engraverVectors, func.vector_id, merged);
                                                        if (!assignForFuture) {
                                                            engraver.setPresetVectorColor(Number(func.vector_id), +color_id);
                                                        }
                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        break;

                                                    case 'product':
                                                        if (!value || !value.product_id) break;
                                                        _this.$data.engraverProduct = value.product_id.trim();
                                                        if (window.customily.hideClearImgButtons) {
                                                            window.customily.hideClearImgButtons();
                                                        }
                                                        if (window.displayCanvas && !assignForFuture) window.displayCanvas();
                                                        break;
                                                }
                                            });
                                        } else {
                                            console.warn('Customily preview-canvas not found!');
                                        }
                                    }, 20);
                                },
                                restoreEngraver: function(options) {
                                    var _this = this;
                                    setTimeout(function() {
                                        try {
                                            var pc = document.getElementById('preview-canvas');
                                            if (pc) {
                                                options = options || {};
                                                if (window.customily.options.controlled_render && !options.request_render) {
                                                    return 0
                                                }
                                                if (options.request_render) {
                                                    engraver.loadingAnimation && engraver.loadingAnimation.start ? engraver.loadingAnimation.start() : '';
                                                }
                                                for (key in _this.$data.engraverTexts) {
                                                    var text = _this.$data.engraverTexts[key];
                                                    if (text.color) {
                                                        engraver.setFontColor(Number(text.id), +text.color);
                                                    }
                                                    if (text.value !== undefined) {
                                                        if (!engraver.productLoading) {
                                                            engraver.setText(Number(text.id), text.value || '');
                                                        }
                                                    }
                                                    if (text.font) {
                                                        engraver.setFont(Number(text.id), +text.font);
                                                    }
                                                }
                                                if (options.onlyText) {
                                                    return engraver.loadingAnimation && engraver.loadingAnimation.stop ? engraver.loadingAnimation.stop() : '';
                                                }
                                                for(key in _this.$data.engraverImages){
                                                    var image = _this.$data.engraverImages[key];
                                                    if(image.image){
                                                        if(!isNaN(parseInt(image.image,10))){
                                                            engraver.setPresetImage(Number(image.id || key), +image.image);
                                                        }else if(!options.onlyDynamic){
                                                            engraver.setImage(Number(image.id || key), image.image).then(function () {
                                                                engraver.clearSelection();
                                                            });
                                                        }
                                                    }
                                                }
                                                for(key in _this.$data.engraverVectors){
                                                    var vector = _this.$data.engraverVectors[key];
                                                    if(vector.image || vector.vectorColor) {
                                                        if(!isNaN(parseInt(vector.image,10))) {
                                                            engraver.setPresetVector(Number(vector.id || key), +vector.image);
                                                        }
                                                        if (!isNaN(parseInt(vector.vectorColor, 10))) {
                                                            engraver.setPresetVectorColor(Number(vector.id || key), +vector.vectorColor);
                                                        }
                                                    }
                                                }

                                                if (options.request_render) {
                                                    engraver.loadingAnimation && engraver.loadingAnimation.stop ? engraver.loadingAnimation.stop() : '';
                                                }
                                            } else {
                                                console.warn('Customily preview-canvas not found!');
                                                engraver.loadingAnimation && engraver.loadingAnimation.stop ? engraver.loadingAnimation.stop() : '';
                                            }
                                        } catch (ex) {
                                            console.log(ex);
                                            engraver.loadingAnimation && engraver.loadingAnimation.stop ? engraver.loadingAnimation.stop() : '';
                                        }
                                    }, 20);
                                }
                            }
                        });
                        // vue end

                        window.customily.optionsapp.$data.sets.forEach(function(set){
                            set.options.forEach(function(opt) {
                                // brackets for special fonts
                                var initial_brackets = new RegExp(/({\s?})|(\[\s?\])|({\s?})/gi);
                                var brackets_found = initial_brackets.exec(opt.initial_value);
                                opt.brackets_wrapper = ['', ''];
                                if(brackets_found){
                                    opt.initial_value = opt.initial_value.replace(brackets_found[0], '');
                                    opt.brackets_wrapper = [brackets_found[0][0], brackets_found[0][1]];
                                }

                                if(opt.initial_value){
                                    opt.value = opt.initial_value;
                                    window.customily.optionsapp.optionChange(opt, null, true);
                                }
                                if(opt.values.length){
                                    var selected = opt.values.find(function(val){ return val.selected });
                                    opt.value = selected ? (selected.value || selected.id) : '';
                                    window.customily.optionsapp.optionChange(opt, null, true);
                                }
                            });
                        });
                        if(engraver){
                            if(res.configuration.initial_product_id){
                                window.customily.optionsapp.$data.engraverProduct = res.configuration.initial_product_id.trim();
                            }
                            // if(!res.configuration.initially_show){
                            //   if(window.displayCanvas) window.displayCanvas();
                            // }
                        }
                        window.customily.variations_registry = res.configuration.conf_variants;
                        window.customily.variations = res.configuration.variations;
                        window.customily.assignedSets_shallow = res.configuration.assignedSets;
                        window.customily.loaded = true;
                        window.customily.optionsapp.$data.loaded = true;
                        window.customily.loadStatus = 'loaded';
                        console.log('Customily options status: loaded!');
                        window.dispatchEvent(new CustomEvent('customily-done'));
                    } else {
                        window.customily.loadStatus = 'not-loaded';
                        console.warn('Customily options status: not loaded!');
                    }
                }
            }); //ajax end

        }, //initialize end

        variationsChangeHandler: function (change) {
            for (var position in change) {
                var variation = window.customily.variations.find(function (o) {
                    return o.position == position;
                });
                if (variation && variation.functions) {
                    variation.functions.forEach(function (func) {
                        var value = {};
                        for (i in variation.values) {
                            if (variation.values[i].value == change[position]) {
                                value = variation.values[i];
                                value.sort_id = Number(i);
                            }
                        }
                        switch (func.type) {
                            case 'text':

                                var merged = window.customily.optionsapp.$data.engraverTexts[func.text_id] ?
                                    Vue.util.mergeOptions(window.customily.optionsapp.$data.engraverTexts[func.text_id], {value: value.value}) :
                                    {id: func.text_id, value: value.value};
                                Vue.set(window.customily.optionsapp.$data.engraverTexts, func.text_id, merged);

                                if (!engraver.productLoading) {
                                    engraver.setText(Number(func.text_id), value.value || '');
                                }

                                if (window.displayCanvas) window.displayCanvas();
                                break;

                            case 'color':
                                var color_id = value.color_id || value.sort_id + 1;

                                var merged = window.customily.optionsapp.$data.engraverTexts[func.text_id] ?
                                    Vue.util.mergeOptions(window.customily.optionsapp.$data.engraverTexts[func.text_id], {color: color_id}) :
                                    {id: func.text_id, color: color_id};
                                Vue.set(window.customily.optionsapp.$data.engraverTexts, func.text_id, merged);

                                // engraver.setFontColor(Number(func.text_id), color_id);
                                window.customily.optionsapp.restoreEngraver({onlyText: true});
                                if (window.displayCanvas) window.displayCanvas();
                                break;

                            case 'font':
                                var font_id = value.font_id || value.sort_id + 1;

                                var merged = window.customily.optionsapp.$data.engraverTexts[func.text_id] ?
                                    Vue.util.mergeOptions(window.customily.optionsapp.$data.engraverTexts[func.text_id], {font: font_id}) :
                                    {id: func.text_id, color: color_id, font: font_id};
                                Vue.set(window.customily.optionsapp.$data.engraverTexts, func.text_id, merged);

                                engraver.setFont(Number(func.text_id), font_id);
                                if (window.displayCanvas) window.displayCanvas();
                                break;

                            case 'image':
                                var image_id = value.image_id || value.sort_id + 1;

                                if (window.customily.optionsapp.$data.engraverImages[func.image_id] && image_id == window.customily.optionsapp.$data.engraverImages[func.image_id].image) {
                                    break;
                                }

                                var merged = window.customily.optionsapp.$data.engraverImages[func.image_id] ?
                                    Vue.util.mergeOptions(window.customily.optionsapp.$data.engraverImages[func.image_id], {image: image_id}) :
                                    {id: func.image_id, image: image_id};
                                Vue.set(window.customily.optionsapp.$data.engraverImages, func.image_id, merged);

                                setTimeout(function(){
                                    window.customily.optionsapp.restoreEngraver({onlyDynamic: true});
                                }, 500);

                                if (window.displayCanvas) window.displayCanvas();
                                break;

                            case 'vector':
                                var vector_id = value.vector_id || value.sort_id + 1;

                                if (window.customily.optionsapp.$data.engraverImages[func.vector_id] && vector_id == window.customily.optionsapp.$data.engraverVectors[func.vector_id].image) {
                                    break;
                                }

                                var merged = window.customily.optionsapp.$data.engraverVectors[func.vector_id] ?
                                    Vue.util.mergeOptions(window.customily.optionsapp.$data.engraverVectors[func.vector_id], {image: vector_id}) :
                                    {id: func.vector_id, image: vector_id};
                                Vue.set(window.customily.optionsapp.$data.engraverVectors, func.vector_id, merged);

                                setTimeout(function(){
                                    window.customily.optionsapp.restoreEngraver({onlyDynamic: true});
                                }, 500);

                                if (window.displayCanvas) window.displayCanvas();
                                break;

                            case 'product':
                                if(!value || !value.product_id) {
                                    window.customily.optionsapp.$data.engraverProduct = '';
                                    if (window.hideCanvas) window.hideCanvas();
                                } else {
                                    window.customily.optionsapp.$data.engraverProduct = value.product_id.trim();
                                    if (window.displayCanvas) window.displayCanvas();
                                }
                                break;
                        }
                    });
                }
            }
        }
    };

    window.customily.initialize();

    if (window.customily.preloadLibrary) {
        windowDOMContentLoadedCallback();
        windowLoadCallback();
    } else {
        window.addEventListener('DOMContentLoaded', windowDOMContentLoadedCallback);
        window.addEventListener('load', windowLoadCallback);
    }

    /**
     * window DOMContentLoaded callback
     */
    function windowDOMContentLoadedCallback() {
        // $.customily_sticky()
        (function (t) { return t ? void (t.fn.customily_sticky = function (o, s) { var n = t(this); n.data("st_top", n.offset().top), n.css("transition", "all .1s"); var a = s || {}; a.padding = a.padding || 0, window.addEventListener("scroll", function (t) { var s = document.documentElement.scrollTop; 0 == s && n.data("st_top", n.offset().top); var i = n.data("st_top"), r = s - i, e = o.outerHeight(), d = o.offset().top, c = n.outerHeight(); e - c > r && r > 0 && d < i + c ? (n.css("margin-top", r + a.padding), n.css("margin-bottom", -1 * c / 2)) : r <= 0 && (n.css("margin-top", 0), n.css("margin-bottom", 0)) }) }) : 0 })(jQuery);

        // collapsible options
        jQuery(function($){

            window.customily.handleCollapsibleOptions = function() {
                if (window.customily.collapsibleOptions) {
                    $('.customily_option').filter(':visible').addClass('cl-co-border');
                    $('.customily_option').filter(':hidden').removeClass('cl-co-border');

                    $('.customily_option').filter(function () {
                        return $(this).hasClass('is-toggle') && !$(this).hasClass('is-cl-co-active');
                    }).children().filter(':not(label)').hide();
                }
            };

            window.customily.hideOption = function (e) {
                e.removeClass('is-cl-co-active').data('cl-co-visible', false).children().filter(':not(label)').slideUp();
                e.removeClass('cl-co-padding').addClass('cl-co-no-padding');
            };

            window.customily.hideClearImgButtons = function () {
                $('.cl_remove-image').addClass('cl-image-validation-hidden');
            };

            window.customily.handleCollapsibleOptions();

            // variation change
            $(document).on('change', '.single-option-selector', function () {
                setTimeout(function() {
                    window.customily.handleCollapsibleOptions();
                }, 50);
            });

            // wrap textarea text
            $(document).on('focus', '#cl_optionsapp textarea', function() {
                if (parseInt($(this).attr('rows')) && parseInt($(this).attr('rows')) > 0 &&
                    parseInt($(this).attr('cl-max-charsxlines')) && parseInt($(this).attr('cl-max-charsxlines')) > 0) {
                    var rows = parseInt($(this).attr('rows'));
                    var cols = parseInt($(this).attr('cl-max-charsxlines'));
                    var maxLength = rows * cols;
                    $(this).attr('maxlength', maxLength);
                }
            });

            $(document).on('keyup', '#cl_optionsapp textarea', function() {
                var $input = $(this);
                if (parseInt($input.attr('cl-max-charsxlines'))) {
                    var cols = parseInt($input.attr('cl-max-charsxlines'));

                    if (!$input.attr('cl-maxlength')) {
                        $input.attr('cl-maxlength', parseInt($input.attr('maxlength')) || 10000);
                    }

                    window.customily.txtSelectedLine = $input.val().substr(0, $input.prop('selectionStart')).split('\n').length;
                    var rows = parseInt($input.attr('rows')) || 1000;
                    var clMaxLength = parseInt($input.attr('cl-maxlength')) || parseInt($input.attr('maxlength')) || 10000;

                    if (window.customily.txtSelectedLine < rows && ($input.val().match(/\n/gi) || []).length < rows - 1) {
                        $input.attr('maxlength', clMaxLength);
                    } else {
                        var arr = $input.val().split('\n');
                        var inputLength = $input.val().length;
                        window.customily.currentColLength = arr[window.customily.txtSelectedLine - 1].length;
                        var maxLength = parseInt(inputLength) - window.customily.currentColLength + cols;
                        if (maxLength > clMaxLength) {
                            maxLength = clMaxLength;
                        }

                        $input.attr('maxlength', maxLength);
                    }
                }
            });

            $(document).on('mouseup touchend', '#cl_optionsapp textarea', function() {
                $(this).keyup();
            });

            $(document).on('paste', '#cl_optionsapp textarea', function(ev) {
                window.customily.textPasted = (ev.originalEvent || ev).clipboardData.getData('text/plain');
            });

            $(document).on('keypress', '#cl_optionsapp textarea', function(ev) {
                if (parseInt($(this).attr('rows'))) {
                    var rows = parseInt($(this).attr('rows'));
                    var cols = parseInt($(this).attr('cl-max-charsxlines')) || 1000;
                    window.customily.txtSelectedLine = $(this).val().substr(0, $(this).prop('selectionStart')).split('\n').length;

                    if (window.customily.txtSelectedLine > rows ||
                        (($(this).val().match(/\n/gi) || []).length >= rows - 1 && ((ev.keyCode || ev.which) == 13)
                            || window.customily.currentColLength > cols - 1)) {
                        ev.preventDefault();
                        return false;
                    }
                }
            });
        });
    }

    /**
     * window load callback
     */
    function windowLoadCallback() {
        jQuery(function ($) {
            // $.plswait()
            (function(t){return t?void(t.fn.plswait=function(e,n){return this.each(function(){function n(e){return this.element=t(e),this.overlay=null,this}switch(n.prototype.start=function(e){t("body > #sclupndown-anim").is("*")||t("body").append('<style id="sclupndown-anim"> @keyframes sclupndown{ 25%{ transform: scale(1); box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.1) } 50%{ transform: scale(1.5); box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.1) } 100%{ transform: scale(1); box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.1) }}</style>');var n=this;this.stop().then(function(){if(n.element.is(":visible")){n.overlay=t('<div class="loading-btn-overlay">'),n.element.css("opacity",.4),n.element.children().css("opacity",.4);for(var e=0;e<5;e++){var s=t('<div class="loading-dot"> </div>');s.css({width:7,height:7,borderRadius:"50%",margin:"0 2%",backgroundColor:"#fff",animation:"sclupndown .7s",animationIterationCount:"infinite",boxShadow:"1px 1px 2px 0px rgba(0,0,0,0.1)"}),s.css("animation-delay",.1*e+"s"),n.overlay.append(s)}n.overlay.css({display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",backgroundColor:"rgba(0,0,0,.4)",top:n.element.position().top+parseInt(n.element.css("margin-top"),10)-parseInt(t("html").css("padding-top"),10)-parseInt(t("html").css("margin-top"),10),left:n.element.position().left+parseInt(n.element.css("margin-left"),10)-parseInt(t("html").css("padding-left"),10)-parseInt(t("html").css("margin-left"),10),width:n.element.outerWidth(),height:n.element.outerHeight(),opacity:0,transition:"opacity .3s",zIndex:100}),n.element.offsetParent().append(n.overlay);var o=n.overlay;setTimeout(function(){o.css("opacity",1)},50)}})},n.prototype.stop=function(){var t=this;return new Promise(function(e){var n=t.overlay;n?(n.css("opacity",0),t.element.css("opacity",1),t.element.children().css("opacity",1),setTimeout(function(){n.remove(),e()},300)):e()})},this.loading=this.loading||new n(this),e){case"stop":this.loading.stop();break;case"start":this.loading.start();break;default:this.loading.start()}}),this}):0})(jQuery);

            if (!window.displayCanvas) {
                window.displayCanvas = function () {
                    // predefined function to reveal canvas
                    $('.canvas-wrapper, .lower-canvas').css('display', 'block');
                    $('.image-zoom').css('display', 'none');
                }
            }

            //helpers
            function arrayify(htmlcollection) {
                var arr = [];
                for (var i = 0; i < htmlcollection.length; i++) {
                    arr.push(htmlcollection[i]);
                }
                return arr;
            }

            // check if options have not been loaded
            if (window.customily.loadStatus && window.customily.loadStatus == 'not-loaded') {
                console.warn('Customily has not been loaded, so it must be initialized.');
                if ($('#cl_optionsapp').length) {
                    $('#cl_optionsapp').remove();
                }
                window.customily.initialize();
            }

            // this should be usually found
            var variants_combined_select = arrayify(document.getElementsByTagName('select')).filter(function (e) {
                return e.getAttribute('name') == 'id'
            });
            variants_combined_select = variants_combined_select ? variants_combined_select[0] : undefined;

            // kinda a helper
            window.customily.getSelectedOption = function () {
                // we look for assumed selected option
                var selected_option;
                if (variants_combined_select) {
                    selected_option = variants_combined_select.selectedOptions && variants_combined_select.selectedOptions.length ? variants_combined_select.selectedOptions[0] : false;
                    // sometimes native method do not work so we check for attributes of option tags
                    selected_option = selected_option ? selected_option : Object
                        .keys(variants_combined_select.children)
                        .map(function (k) {
                            return variants_combined_select.children[k]
                        })
                        .find(function (opt) {
                            return opt.getAttribute('selected') == 'selected'
                        });
                }
                // if we still dont have it, it may options are disabled due to out of stock
                // so we will check for select tags manually and if we have some selection
                // we will generate a virtual selected option
                var allSelects = document.getElementsByTagName('select');
                // arrayify
                var selects = arrayify(allSelects);
                // filter visible
                selects = selects.filter(function (s) {
                    return s.clientHeight > 0
                });
                // filter possible classnames
                selects = selects.filter(function (s) {
                    return (s.classList.contains('single-option-selector') || s.classList.contains('single-option-selector-product-template') || (s.getAttribute('data-index') && s.getAttribute('data-index').indexOf('option') != -1))
                });
                // extract possible selections
                var possible_values = selects.map(function (s) {
                    return s.value
                });
                //look for a variation match
                var variation_found = window.customily.variations_registry.find(function (variation) {
                    return (!variation.option1 || possible_values.indexOf(variation.option1) != -1) && (!variation.option2 || possible_values.indexOf(variation.option2) != -1) && (!variation.option3 || possible_values.indexOf(variation.option3) != -1);
                });
                if (variation_found) {
                    var virtual_option = document.createElement('option');
                    virtual_option.value = variation_found.id;
                    selected_option = virtual_option;
                }

                return selected_option;
            };

            // variations dropdowns slavery
            window.customily.enslaveVariationDropdown = function () {
                var selected_option = window.customily.getSelectedOption();
                window.customily.last_variant_selected = selected_option ? selected_option['value'] : undefined;

                arrayify(document.getElementsByTagName('select')).forEach(function (el) {
                    el.addEventListener('change', window.customily.variationsChangeChecker)
                });

                arrayify(document.getElementsByTagName('input')).forEach(function (el) {
                    el.addEventListener('input', window.customily.variationsChangeChecker)
                });

                document.addEventListener('change', window.customily.variationsChangeChecker);

            };

            window.customily.variationsChangeChecker = function (force, variation_id) {
                var selected_option = window.customily.getSelectedOption();

                if (window.customily.refreshCartButtons) {
                    window.customily.refreshCartButtons();
                }

                if (!selected_option && !variation_id) {
                    return;
                }

                var new_variant_id = variation_id ? variation_id : selected_option.getAttribute('value');
                if (force == true || (window.customily.last_variant_selected != new_variant_id && window.customily.variations_registry)) {
                    var was = window.customily.variations_registry.find(function (o) {
                        return o.id == window.customily.last_variant_selected
                    });
                    var new_variant = window.customily.variations_registry.find(function (o) {
                        return o.id == new_variant_id
                    });

                    if (!new_variant) {
                        return console.warn('something wrong with variations');
                    }

                    window.customily.variations.forEach(function (v) {
                        v.value = new_variant['option' + v.position];
                    });

                    var changes = {};

                    if (force) {
                        changes["1"] = new_variant.option1;
                        changes["2"] = new_variant.option2;
                        changes["3"] = new_variant.option3;
                    } else {
                        if (new_variant.option1 && (was.option1 != new_variant.option1)) changes["1"] = new_variant.option1;
                        if (new_variant.option2 && (was.option2 != new_variant.option2)) changes["2"] = new_variant.option2;
                        if (new_variant.option3 && (was.option3 != new_variant.option3)) changes["3"] = new_variant.option3;
                    }
                    window.customily.last_variant_selected = new_variant_id;

                    window.customily.variationsChangeHandler(changes);
                    window.customily.optionsapp.$data.current_variant_options = window.customily.variations;
                }
                // console.log('updating')
                window.customily.optionsapp.$data.loaded = true;
                window.customily.optionsapp.$forceUpdate();
            };

            if (variants_combined_select) {
                if (window.customily.loaded && window.customily.optionsapp) {
                    if (window.customily.variationsChangeChecker) {
                        window.customily.variationsChangeChecker(true);
                    }
                    if (window.customily.enslaveVariationDropdown) {
                        window.customily.enslaveVariationDropdown();
                    }
                } else {
                    window.addEventListener('customily-done', function () {
                        if (window.customily.optionsapp) {
                            if (window.customily.variationsChangeChecker) {
                                window.customily.variationsChangeChecker(true);
                            }
                            if (window.customily.enslaveVariationDropdown) {
                                window.customily.enslaveVariationDropdown();
                            }
                        }
                    });
                }
            }

            window.customily.uploadThumbnail = function (src) {
                return new Promise(function (resolve, reject) {

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": endpoint + "/savethumbnail/",
                        "method": "POST",
                        "processData": false,
                        "mimeType": "application/x-www-form-urlencoded",
                        "data": "image=" + encodeURIComponent(src)
                    };

                    $.ajax(settings).done(function (response) {
                        resolve(response);
                    }).fail(function (response) {
                        console.warn('thumbnail upload failed');
                        resolve('');
                    });
                });
            };

            window.customily.uploadUserFiles = function (label, src) {
                return new Promise(function (resolve, reject) {

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": endpoint + "/orders/saveuserimage?shop=" + encodeURIComponent(window.customily.options.pdomain),
                        "method": "POST",
                        "processData": false,
                        "mimeType": "application/x-www-form-urlencoded",
                        "data": "image=" + encodeURIComponent(src)
                    };

                    $.ajax(settings).done(function (response) {
                        resolve({label: label, url: response});
                    }).fail(function (response) {
                        console.warn('user file upload failed');
                        resolve('');
                    });
                });
            };

            window.customily.productFormSubmittedCallback = function (e) {
                // Don't submit the form, we will do it later
                e.preventDefault();
                e.stopPropagation();
                var $form = $(this);

                var addToCartbutton = $form.find("#customily-cart-btn").get(0);
                var buyNowButton = $form.find("#customily-buy-now-btn").get(0);

                preventClickUntilFile(null, addToCartbutton || buyNowButton);
            };

            /**
             * Attach event listener to the Shopify product form so we can detect if it's submited when
             *  the user doesn't click the add to cart button.
             */
            window.customily.enslaveCartForm = function () {
                var form = $('form[action="/cart/add"]').get(0);

                if (!form) {
                    console.warn("Couldn't find product form");
                    return;
                }

                form.addEventListener('submit', window.customily.productFormSubmittedCallback, false);
            };

            window.customily.enslaveAddToCartButton = function () {
                var $cart_button = $('#customily-options').parents('form').find('[type="submit"], .product-smart-wrapper .add-to-cart-btn').filter(':visible');
                if ($cart_button.length > 1) {
                    console.warn("Customily: visible \"add to cart\" buttons more than one.")
                } else if ($cart_button.length < 1) {
                    $cart_button = $('#customily-options').parents('form').find('[type="submit"], .customily-add-to-cart-btn').last();
                    console.warn("Customily: Visible \"add to cart\" button not found.")
                }

                // Clone the original cart button and re-attach it to the DOM, no modifications at all. We do this
                //  to remove all event listeners from the original cart button because some themes attach a click listener
                //  to it that fires when pressing the Enter key on the product form and completely bypasses our click listener.
                var clone = $cart_button.clone();
                clone.insertAfter($cart_button);
                $cart_button.remove();
                $cart_button = clone;
                window.customily.$cart_button = $cart_button;

                var $cloned_cart_button = $cart_button.clone().attr('type', 'button').removeClass('ajax-submit');
                $cart_button.addClass('hidden-cart-btn').after($cloned_cart_button);
                $cloned_cart_button
                    .removeClass('hidden-cart-btn')
                    .css('display', 'block')
                    .attr('id', 'customily-cart-btn')
                    .on('click', window.customily.preventClickUntilFile);

                window.customily.$cloned_cart_button = $cloned_cart_button;
            };

            window.customily.enslaveBuyNowButton = function () {
                setTimeout(function () {
                    var $buy_now_button = $('#customily-options').parents('form').find('.shopify-payment-button__button--unbranded').filter(':visible');
                    if ($buy_now_button.length > 1) {
                        console.warn("Customily: visible \"buy now\" buttons more than one.")
                    } else if ($buy_now_button.length < 1) {
                        $buy_now_button = $('#customily-options').parents('form').find('.customily-buy-now-btn').filter(':visible');
                    }

                    if ($buy_now_button.length) {
                        window.customily.$buy_now_button = $buy_now_button;

                        var $cloned_buy_now_button = $buy_now_button.clone().attr('type', 'button').removeClass('ajax-submit');
                        $buy_now_button.after($cloned_buy_now_button);
                        $buy_now_button.addClass('hidden-buy-now-btn');
                        $cloned_buy_now_button
                            .removeClass('hidden-buy-now-btn')
                            .removeClass('shopify-payment-button__button')
                            .css('display', 'block')
                            .attr('id', 'customily-buy-now-btn')
                            .on('click', window.customily.preventClickUntilFile);

                        window.customily.$cloned_buy_now_button = $cloned_buy_now_button;
                    }
                }, 3000);
            };

            function refreshButtons(force) {
                if (window.customily.$cart_button && window.customily.$cloned_cart_button) {
                    if (window.customily.$cart_button.text() != window.customily.$cloned_cart_button.text()) {
                        window.customily.$cloned_cart_button.remove();

                        window.customily.$cloned_cart_button = window.customily.$cart_button.clone().attr('type', 'button');
                        window.customily.$cart_button.addClass('hidden-cart-btn').after(window.customily.$cloned_cart_button);
                        window.customily.$cloned_cart_button
                            .attr('id', 'customily-cart-btn')
                            .css('display', 'block')
                            .removeClass('hidden-cart-btn')
                            .on('click tap touchstar', window.customily.preventClickUntilFile);
                    }
                }

                if (window.customily.$buy_now_button && window.customily.$cloned_buy_now_button) {
                    if ((window.customily.$buy_now_button.text() != window.customily.$cloned_buy_now_button.text()) || force) {
                        window.customily.$cloned_buy_now_button.remove();

                        window.customily.$cloned_buy_now_button = window.customily.$buy_now_button.clone().attr('type', 'button');
                        window.customily.$buy_now_button.after(window.customily.$cloned_buy_now_button);
                        window.customily.$buy_now_button.addClass('hidden-buy-now-btn');
                        window.customily.$cloned_buy_now_button
                            .attr('id', 'customily-buy-now-btn')
                            .css('display', 'block')
                            .removeClass('hidden-buy-now-btn')
                            .on('click tap touchstar', window.customily.preventClickUntilFile);
                    }
                }
            }

            window.customily.refreshCartButtons = refreshButtons;

            function pleaseWait(event) {
                event.returnValue = "Adding to cart process is not complete!";
            }

            function goToCart(beforeUnloadEvent, $form, $button, $cloned_button) {
                //some clients use button and some use input, we'll listen to both so
                //we make sure it works on both cases
                window.removeEventListener("beforeunload", beforeUnloadEvent);
                $cloned_button.removeAttr('disabled');
                if (window.customily.options.cart_btn_anim && $cloned_button.plswait) $cloned_button.plswait('stop');
                if (window.customily.exportLater) {
                    $('<p style="display: none" class="line-item-property__field"></p>')
                        .append('<label for="customily-ssexport">ssexport</label>')
                        .append('<input id="customily-ssexport" type="text" name="properties[_customily-ssexport]" value="true">')
                        .appendTo($form);
                    $('<p style="display: none" class="line-item-property__field"></p>')
                        .append('<label for="customily-id">customily-id</label>')
                        .append('<input id="customily-id" type="text" name="properties[_customily-product-id]" value="' + window.customily.optionsapp.$data.engraverProduct + '">')
                        .appendTo($form);
                }

                // Execute add to cart hook
                var hookResponse = undefined;
                if (window.addToCartHook) {
                    hookResponse = window.addToCartHook($button, $cloned_button);
                }

                //changing visible swatches for input hidden when click on buy now button
                if ($cloned_button.attr('id') === 'customily-buy-now-btn') {

                    $('.customily-swatch input').filter(function() {
                        return $(this).prop('checked') && $(this).parent().is(':visible');
                    }).each(function() {
                        $('<input type="hidden" name="' + $(this).attr('name') + '" value="' + $(this).val() + '"/>').appendTo($form);
                    });

                    $('.customily-swatch input').each(function() {
                        $(this).attr('name', '');
                    });
                }

                if (hookResponse === false) {
                    return;
                }

                // Remove event listener from form so it doesn't fire when clicking the button
                var productForm = $('form[action="/cart/add"]').get(0);
                if (productForm) {
                    productForm.removeEventListener('submit', window.customily.productFormSubmittedCallback);
                }

                $button.click();

                // IE does not support Event must use CustomEvent
                window.dispatchEvent(new CustomEvent('customily-added-to-cart'));

                // Re-attach the form event listener
                if (window.customily.enslaveCartForm) {
                    window.customily.enslaveCartForm();
                }
            }

            window.customily.preventClickUntilFile = preventClickUntilFile;

            window.customily.clickFlag = false;

            /**
             * Adds the necessary personalization data to the product form. If 'e' is null 'cartButton' must be specified, otherwise
             *  if 'e' is a valid event 'cartButton' is ignored.
             * @param {Event} e Click event on the add to cart button
             * @param {HTMLElement} cartButton Add to cart button element
             */
            function preventClickUntilFile(e, cartButton) {
                if (!window.customily.clickFlag) {
                    window.customily.clickFlag = true;
                    setTimeout(function () {
                        window.customily.clickFlag = false
                    }, 100);

                    if (window.displayCanvas) {
                        window.displayCanvas();
                    }

                    setTimeout(function () {
                        var haveCanvas = $('.lower-canvas').is('*');
                        var canvasVisible = $('.lower-canvas').is(':visible') || window.customily.options.uses_invisible_canvas;

                        window.customily.optionsapp.$data.required_check_sleep = false;
                        window.customily.optionsapp.$data.images_size_check_sleep = false;

                        if (window.customily.optionsapp.checkRequiredError() || window.customily.optionsapp.checkImageSizeError()) {
                            return window.customily.optionsapp.$forceUpdate();
                        }

                        window.addEventListener("beforeunload", pleaseWait);

                        var $button = null;

                        // Find the button by event if there's one
                        if (e) {
                            $button = $(e.currentTarget);
                            if ($button.attr('type') !== 'button') {
                                $button = $(e.currentTarget.activeElement);

                                // If this is still not a button try with e.target
                                if ($button.attr('type') !== 'button') {
                                    $button = $(e.target);

                                    // Still not a button? Last try with, assume the add to cart was pressed (not the buy now button)
                                    //  and look for it by id
                                    if ($button.attr('type') !== 'button') {
                                        $button = $('button[id="customily-cart-btn"]');

                                        // Give up, we can't find the button
                                        if ($button.attr('type') !== 'button') {
                                            console.error("Couldn't find add to cart button");
                                        }
                                    }
                                }
                            }
                        } else {
                            $button = $(cartButton);
                        }

                        var $original_button = window.customily.$cart_button;
                        if ($button.attr('id') === 'customily-buy-now-btn') {
                            $original_button = window.customily.$buy_now_button;
                        }

                        var $form = $button.parents('form');
                        if (!$form.length) {
                            console.error("Couldn't find form");
                        }

                        if (window.customily.options.cart_btn_anim && $button.plswait) $button.plswait();

                        $('[name="properties[_custom-thumb]"], [name="properties[_customily-preview]"], [name="properties[_customily-production-url]"]').remove();

                        if (haveCanvas) {
                            engraver.clearSelection();
                        }

                        $button.attr('disabled', 'disabled');

                        var asyncOperations = [];
                        if (canvasVisible) {

                            // CUSTOM CART IMAGE
                            var cvs = $('.lower-canvas').get(0);
                            var tempcvs, tempctx;
                            if (window.customily.customThumbnail) {
                                try {
                                    tempcvs = document.createElement('canvas');
                                    tempctx = tempcvs.getContext('2d');
                                    tempcvs.width = 500;
                                    tempcvs.height = tempcvs.width * (cvs.height / cvs.width);
                                    tempctx.drawImage(cvs, 0, 0, tempcvs.width, tempcvs.height);

                                    var cartImageOp = window.customily.uploadThumbnail(tempcvs.toDataURL('image/jpeg', 0.55));
                                    asyncOperations.push(cartImageOp);
                                } catch (e) {
                                    console.warn('Exception on canvas toDataURL.');
                                    console.log(e);
                                }
                            } else {
                                asyncOperations.push(new Promise(function (res) {
                                    res(false);
                                }));
                            }

                            // CUSTOM PREVIEW IMAGE
                            if (window.customily.exportPreview) {
                                try {
                                    tempcvs = document.createElement('canvas');
                                    tempctx = tempcvs.getContext('2d');
                                    tempcvs.width = 1200;
                                    tempcvs.height = tempcvs.width * (cvs.height / cvs.width);
                                    tempctx.drawImage(cvs, 0, 0, tempcvs.width, tempcvs.height);

                                    var previewImageOp = window.customily.uploadThumbnail(tempcvs.toDataURL('image/jpeg', 0.7));
                                    asyncOperations.push(previewImageOp);
                                } catch (e) {
                                    console.warn('Exception on canvas toDataURL.');
                                    console.log(e);
                                }
                            } else {
                                asyncOperations.push(new Promise(function (res) {
                                    res(false);
                                }));
                            }

                            // EPS EXPORT
                            if (window.customily.exportFile) {
                                var generateEPSOp = engraver.exportFile();
                                asyncOperations.push(generateEPSOp);
                            } else {
                                asyncOperations.push(new Promise(function (res) {
                                    res(false);
                                }));
                            }
                            if (window.customily.saveUserImages) {
                                // Upload user images
                                var names = [];
                                var lastNumber = 1;

                                window.customily.optionsapp.$data.sets.forEach(function (set) {
                                    set.options.filter(function (option) {
                                        return option.type == 'Image Upload' && option.value
                                    }).forEach(function (option) {
                                        var newName = option.label || option.button_text || 'Image';

                                        // Any duplicated found? Add a number after the name
                                        if (names.indexOf(newName) > -1) {
                                            newName += ' ' + (lastNumber++);
                                        }
                                        names.push(newName);

                                        asyncOperations.push(window.customily.uploadUserFiles(newName, option.value));
                                    });
                                });

                                // Upload user vectors
                                window.customily.optionsapp.$data.sets.forEach(function (set) {
                                    set.options.filter(function (option) {
                                        return option.type == 'Vector Upload' && option.value
                                    }).forEach(function (option) {
                                        var newName = option.label || option.button_text || 'Vector';

                                        // Any duplicated found? Add a number after the name
                                        if (names.indexOf(newName) > -1) {
                                            newName += ' ' + (lastNumber++);
                                        }
                                        names.push(newName);

                                        asyncOperations.push(window.customily.uploadUserFiles(newName, option.value));
                                    });
                                });
                            }

                            Promise.all(asyncOperations).then(function (responses) {
                                var cartImage = responses[0];
                                var previewImage = responses[1];
                                var EPSLink = responses[2];
                                var userImages = responses.slice(3);

                                if (cartImage) {
                                    $('<p style="display: none" class="line-item-property__field"></p>')
                                        .append('<label for="preview-dataurl">customily-url</label>')
                                        .append('<input id="preview-dataurl" type="text" name="properties[_custom-thumb]" value="' + cartImage + '">')
                                        .appendTo($form);
                                }
                                if (previewImage) {
                                    $('<p style="display: none" class="line-item-property__field"></p>')
                                        .append('<label for="preview-dataurl">customily-url</label>')
                                        .append('<input id="customily-preview" type="text" name="properties[_customily-preview]" value="' + previewImage + '">')
                                        .appendTo($form);
                                }
                                if (EPSLink) {
                                    $('<p style="display: none" class="line-item-property__field"></p>')
                                        .append('<label for="customily-url">customily-url</label>')
                                        .append('<input id="customily-url" type="text" name="properties[_customily-production-url]" value="' + EPSLink.replace(/http(s*)/gi, 'https') + '">')
                                        .appendTo($form);
                                }

                                if (userImages.length) {
                                    userImages.forEach(function (labelurl) {
                                        $('<p style="display: none" class="line-item-property__field"></p>')
                                            .append('<label for="customily-url">customily-url</label>')
                                            .append('<input id="customily-url" type="text" name="properties[_' + labelurl.label + ']" value="' + labelurl.url + '">')
                                            .appendTo($form);
                                    });
                                }

                                goToCart(pleaseWait, $form, $original_button, $button);
                            }, function (err) {
                                console.log('error generating production file.');
                                console.log(err);
                                goToCart(pleaseWait, $form, $original_button, $button);
                            }).catch(function (ex) {
                                console.log('exception generating production file.');
                                console.log(ex);
                                goToCart(pleaseWait, $form, $original_button, $button);
                            });
                        } else {
                            goToCart(pleaseWait, $form, $original_button, $button);
                        }
                    }, 1000);
                }
            }

            if (window.customily.loaded && window.customily.optionsapp) {
                if (window.customily.enslaveCartForm) {
                    window.customily.enslaveCartForm();
                }
                if (window.customily.enslaveAddToCartButton) {
                    window.customily.enslaveAddToCartButton();
                }
                if (window.customily.enslaveBuyNowButton) {
                    window.customily.enslaveBuyNowButton();
                }
            } else {
                window.addEventListener('customily-done', function () {
                    if (window.customily.optionsapp) {
                        if (window.customily.enslaveCartForm) {
                            window.customily.enslaveCartForm();
                        }
                        if (window.customily.enslaveAddToCartButton) {
                            window.customily.enslaveAddToCartButton();
                        }
                        if (window.customily.enslaveBuyNowButton) {
                            window.customily.enslaveBuyNowButton();
                        }
                    }
                });
            }
        });
    }

})();