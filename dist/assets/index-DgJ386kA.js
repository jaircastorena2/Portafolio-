(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Hf={exports:{}},_a={},Wf={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function XM(){if(d0)return gt;d0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,oe,we){this.props=O,this.context=oe,this.refs=E,this.updater=we||_}S.prototype.isReactComponent={},S.prototype.setState=function(O,oe){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,oe,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(O,oe,we){this.props=O,this.context=oe,this.refs=E,this.updater=we||_}var C=R.prototype=new x;C.constructor=R,M(C,S.prototype),C.isPureReactComponent=!0;var b=Array.isArray,D=Object.prototype.hasOwnProperty,I={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(O,oe,we){var He,$e={},te=null,fe=null;if(oe!=null)for(He in oe.ref!==void 0&&(fe=oe.ref),oe.key!==void 0&&(te=""+oe.key),oe)D.call(oe,He)&&!U.hasOwnProperty(He)&&($e[He]=oe[He]);var _e=arguments.length-2;if(_e===1)$e.children=we;else if(1<_e){for(var Ie=Array(_e),Pe=0;Pe<_e;Pe++)Ie[Pe]=arguments[Pe+2];$e.children=Ie}if(O&&O.defaultProps)for(He in _e=O.defaultProps,_e)$e[He]===void 0&&($e[He]=_e[He]);return{$$typeof:n,type:O,key:te,ref:fe,props:$e,_owner:I.current}}function A(O,oe){return{$$typeof:n,type:O.type,key:oe,ref:O.ref,props:O.props,_owner:O._owner}}function L(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function B(O){var oe={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(we){return oe[we]})}var K=/\/+/g;function Y(O,oe){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):oe.toString(36)}function X(O,oe,we,He,$e){var te=typeof O;(te==="undefined"||te==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(te){case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case n:case e:fe=!0}}if(fe)return fe=O,$e=$e(fe),O=He===""?"."+Y(fe,0):He,b($e)?(we="",O!=null&&(we=O.replace(K,"$&/")+"/"),X($e,oe,we,"",function(Pe){return Pe})):$e!=null&&(L($e)&&($e=A($e,we+(!$e.key||fe&&fe.key===$e.key?"":(""+$e.key).replace(K,"$&/")+"/")+O)),oe.push($e)),1;if(fe=0,He=He===""?".":He+":",b(O))for(var _e=0;_e<O.length;_e++){te=O[_e];var Ie=He+Y(te,_e);fe+=X(te,oe,we,Ie,$e)}else if(Ie=v(O),typeof Ie=="function")for(O=Ie.call(O),_e=0;!(te=O.next()).done;)te=te.value,Ie=He+Y(te,_e++),fe+=X(te,oe,we,Ie,$e);else if(te==="object")throw oe=String(O),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return fe}function le(O,oe,we){if(O==null)return O;var He=[],$e=0;return X(O,He,"","",function(te){return oe.call(we,te,$e++)}),He}function Q(O){if(O._status===-1){var oe=O._result;oe=oe(),oe.then(function(we){(O._status===0||O._status===-1)&&(O._status=1,O._result=we)},function(we){(O._status===0||O._status===-1)&&(O._status=2,O._result=we)}),O._status===-1&&(O._status=0,O._result=oe)}if(O._status===1)return O._result.default;throw O._result}var $={current:null},W={transition:null},de={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:le,forEach:function(O,oe,we){le(O,function(){oe.apply(this,arguments)},we)},count:function(O){var oe=0;return le(O,function(){oe++}),oe},toArray:function(O){return le(O,function(oe){return oe})||[]},only:function(O){if(!L(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=R,gt.StrictMode=i,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,gt.act=re,gt.cloneElement=function(O,oe,we){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var He=M({},O.props),$e=O.key,te=O.ref,fe=O._owner;if(oe!=null){if(oe.ref!==void 0&&(te=oe.ref,fe=I.current),oe.key!==void 0&&($e=""+oe.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(Ie in oe)D.call(oe,Ie)&&!U.hasOwnProperty(Ie)&&(He[Ie]=oe[Ie]===void 0&&_e!==void 0?_e[Ie]:oe[Ie])}var Ie=arguments.length-2;if(Ie===1)He.children=we;else if(1<Ie){_e=Array(Ie);for(var Pe=0;Pe<Ie;Pe++)_e[Pe]=arguments[Pe+2];He.children=_e}return{$$typeof:n,type:O.type,key:$e,ref:te,props:He,_owner:fe}},gt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},gt.createElement=k,gt.createFactory=function(O){var oe=k.bind(null,O);return oe.type=O,oe},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:u,render:O}},gt.isValidElement=L,gt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Q}},gt.memo=function(O,oe){return{$$typeof:h,type:O,compare:oe===void 0?null:oe}},gt.startTransition=function(O){var oe=W.transition;W.transition={};try{O()}finally{W.transition=oe}},gt.unstable_act=re,gt.useCallback=function(O,oe){return $.current.useCallback(O,oe)},gt.useContext=function(O){return $.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return $.current.useDeferredValue(O)},gt.useEffect=function(O,oe){return $.current.useEffect(O,oe)},gt.useId=function(){return $.current.useId()},gt.useImperativeHandle=function(O,oe,we){return $.current.useImperativeHandle(O,oe,we)},gt.useInsertionEffect=function(O,oe){return $.current.useInsertionEffect(O,oe)},gt.useLayoutEffect=function(O,oe){return $.current.useLayoutEffect(O,oe)},gt.useMemo=function(O,oe){return $.current.useMemo(O,oe)},gt.useReducer=function(O,oe,we){return $.current.useReducer(O,oe,we)},gt.useRef=function(O){return $.current.useRef(O)},gt.useState=function(O){return $.current.useState(O)},gt.useSyncExternalStore=function(O,oe,we){return $.current.useSyncExternalStore(O,oe,we)},gt.useTransition=function(){return $.current.useTransition()},gt.version="18.3.1",gt}var h0;function tp(){return h0||(h0=1,Wf.exports=XM()),Wf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function qM(){if(p0)return _a;p0=1;var n=tp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,m={},v=null,_=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(_=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:v,ref:_,props:m,_owner:o.current}}return _a.Fragment=t,_a.jsx=c,_a.jsxs=c,_a}var m0;function YM(){return m0||(m0=1,Hf.exports=qM()),Hf.exports}var ce=YM(),pe=tp(),lc={},jf={exports:{}},Gn={},Xf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function $M(){return g0||(g0=1,(function(n){function e(W,de){var re=W.length;W.push(de);e:for(;0<re;){var O=re-1>>>1,oe=W[O];if(0<o(oe,de))W[O]=de,W[re]=oe,re=O;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var de=W[0],re=W.pop();if(re!==de){W[0]=re;e:for(var O=0,oe=W.length,we=oe>>>1;O<we;){var He=2*(O+1)-1,$e=W[He],te=He+1,fe=W[te];if(0>o($e,re))te<oe&&0>o(fe,$e)?(W[O]=fe,W[te]=re,O=te):(W[O]=$e,W[He]=re,O=He);else if(te<oe&&0>o(fe,re))W[O]=fe,W[te]=re,O=te;else break e}}return de}function o(W,de){var re=W.sortIndex-de.sortIndex;return re!==0?re:W.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,m=null,v=3,_=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(W){for(var de=t(h);de!==null;){if(de.callback===null)i(h);else if(de.startTime<=W)i(h),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(h)}}function b(W){if(E=!1,C(W),!M)if(t(f)!==null)M=!0,Q(D);else{var de=t(h);de!==null&&$(b,de.startTime-W)}}function D(W,de){M=!1,E&&(E=!1,x(k),k=-1),_=!0;var re=v;try{for(C(de),m=t(f);m!==null&&(!(m.expirationTime>de)||W&&!B());){var O=m.callback;if(typeof O=="function"){m.callback=null,v=m.priorityLevel;var oe=O(m.expirationTime<=de);de=n.unstable_now(),typeof oe=="function"?m.callback=oe:m===t(f)&&i(f),C(de)}else i(f);m=t(f)}if(m!==null)var we=!0;else{var He=t(h);He!==null&&$(b,He.startTime-de),we=!1}return we}finally{m=null,v=re,_=!1}}var I=!1,U=null,k=-1,A=5,L=-1;function B(){return!(n.unstable_now()-L<A)}function K(){if(U!==null){var W=n.unstable_now();L=W;var de=!0;try{de=U(!0,W)}finally{de?Y():(I=!1,U=null)}}else I=!1}var Y;if(typeof R=="function")Y=function(){R(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,le=X.port2;X.port1.onmessage=K,Y=function(){le.postMessage(null)}}else Y=function(){S(K,0)};function Q(W){U=W,I||(I=!0,Y())}function $(W,de){k=S(function(){W(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,Q(D))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(W){switch(v){case 1:case 2:case 3:var de=3;break;default:de=v}var re=v;v=de;try{return W()}finally{v=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,de){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var re=v;v=W;try{return de()}finally{v=re}},n.unstable_scheduleCallback=function(W,de,re){var O=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,W){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=re+oe,W={id:p++,callback:de,priorityLevel:W,startTime:re,expirationTime:oe,sortIndex:-1},re>O?(W.sortIndex=re,e(h,W),t(f)===null&&W===t(h)&&(E?(x(k),k=-1):E=!0,$(b,re-O))):(W.sortIndex=oe,e(f,W),M||_||(M=!0,Q(D))),W},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(W){var de=v;return function(){var re=v;v=de;try{return W.apply(this,arguments)}finally{v=re}}}})(qf)),qf}var v0;function KM(){return v0||(v0=1,Xf.exports=$M()),Xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function ZM(){if(_0)return Gn;_0=1;var n=tp(),e=KM();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function v(r){return f.call(m,r)?!0:f.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function _(r,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,d){if(s===null||typeof s>"u"||_(r,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(r,s,l,d,g,y,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=y,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];S[s]=new E(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(x,R);S[s]=new E(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(x,R);S[s]=new E(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(x,R);S[s]=new E(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function C(r,s,l,d){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,d)&&(l=null),d||g===null?v(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):g.mustUseProperty?r[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,d=g.attributeNamespace,l===null?r.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?r.setAttributeNS(d,s,l):r.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),W=Symbol.iterator;function de(r){return r===null||typeof r!="object"?null:(r=W&&r[W]||r["@@iterator"],typeof r=="function"?r:null)}var re=Object.assign,O;function oe(r){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var we=!1;function He(r,s){if(!r||we)return"";we=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(se){var d=se}Reflect.construct(r,[],s)}else{try{s.call()}catch(se){d=se}r.call(s.prototype)}else{try{throw Error()}catch(se){d=se}r()}}catch(se){if(se&&d&&typeof se.stack=="string"){for(var g=se.stack.split(`
`),y=d.stack.split(`
`),w=g.length-1,F=y.length-1;1<=w&&0<=F&&g[w]!==y[F];)F--;for(;1<=w&&0<=F;w--,F--)if(g[w]!==y[F]){if(w!==1||F!==1)do if(w--,F--,0>F||g[w]!==y[F]){var V=`
`+g[w].replace(" at new "," at ");return r.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",r.displayName)),V}while(1<=w&&0<=F);break}}}finally{we=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?oe(r):""}function $e(r){switch(r.tag){case 5:return oe(r.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return r=He(r.type,!1),r;case 11:return r=He(r.type.render,!1),r;case 1:return r=He(r.type,!0),r;default:return""}}function te(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case U:return"Fragment";case I:return"Portal";case A:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case X:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case L:return(r._context.displayName||"Context")+".Provider";case K:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case le:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case Q:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}function fe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ie(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Pe(r){var s=Ie(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,y=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return g.call(this)},set:function(w){d=""+w,y.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function at(r){r._valueTracker||(r._valueTracker=Pe(r))}function kt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return r&&(d=Ie(r)?r.checked?"true":"false":r.value),r=d,r!==l?(s.setValue(r),!0):!1}function ht(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function xt(r,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Ct(r,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=_e(s.value!=null?s.value:l),r._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function lt(r,s){s=s.checked,s!=null&&C(r,"checked",s,!1)}function Wt(r,s){lt(r,s);var l=_e(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?jt(r,s.type,l):s.hasOwnProperty("defaultValue")&&jt(r,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function z(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function jt(r,s,l){(s!=="number"||ht(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var vt=Array.isArray;function Mt(r,s,l,d){if(r=r.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<r.length;l++)g=s.hasOwnProperty("$"+r[l].value),r[l].selected!==g&&(r[l].selected=g),g&&d&&(r[l].defaultSelected=!0)}else{for(l=""+_e(l),s=null,g=0;g<r.length;g++){if(r[g].value===l){r[g].selected=!0,d&&(r[g].defaultSelected=!0);return}s!==null||r[g].disabled||(s=r[g])}s!==null&&(s.selected=!0)}}function Xe(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function N(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(vt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:_e(l)}}function T(r,s){var l=_e(s.value),d=_e(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),d!=null&&(r.defaultValue=""+d)}function j(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function he(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?he(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ue,Ke=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,g){MSApp.execUnsafeLocalFunction(function(){return r(s,l,d,g)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ue.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Ae(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(r){rt.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ve[s]=Ve[r]})});function Me(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ve.hasOwnProperty(r)&&Ve[r]?(""+s).trim():s+"px"}function De(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=Me(l,s[l],d);l==="float"&&(l="cssFloat"),d?r.setProperty(l,g):r[l]=g}}var We=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(r,s){if(s){if(We[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function be(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ne=null,Ee=null,Ue=null;function ye(r){if(r=ia(r)){if(typeof Ne!="function")throw Error(t(280));var s=r.stateNode;s&&(s=El(s),Ne(r.stateNode,r.type,s))}}function me(r){Ee?Ue?Ue.push(r):Ue=[r]:Ee=r}function Re(){if(Ee){var r=Ee,s=Ue;if(Ue=Ee=null,ye(r),s)for(r=0;r<s.length;r++)ye(s[r])}}function st(r,s){return r(s)}function It(){}var Et=!1;function jn(r,s,l){if(Et)return r(s,l);Et=!0;try{return st(r,s,l)}finally{Et=!1,(Ee!==null||Ue!==null)&&(It(),Re())}}function Dn(r,s){var l=r.stateNode;if(l===null)return null;var d=El(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Fo=!1;if(u)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Fo=!1}function Oo(r,s,l,d,g,y,w,F,V){var se=Array.prototype.slice.call(arguments,3);try{s.apply(l,se)}catch(xe){this.onError(xe)}}var Kr=!1,Zr=null,Qr=!1,hi=null,Bo={onError:function(r){Kr=!0,Zr=r}};function nl(r,s,l,d,g,y,w,F,V){Kr=!1,Zr=null,Oo.apply(Bo,arguments)}function il(r,s,l,d,g,y,w,F,V){if(nl.apply(this,arguments),Kr){if(Kr){var se=Zr;Kr=!1,Zr=null}else throw Error(t(198));Qr||(Qr=!0,hi=se)}}function ti(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function ko(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Jr(r){if(ti(r)!==r)throw Error(t(188))}function rl(r){var s=r.alternate;if(!s){if(s=ti(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,d=s;;){var g=l.return;if(g===null)break;var y=g.alternate;if(y===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===l)return Jr(g),r;if(y===d)return Jr(g),s;y=y.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=y;else{for(var w=!1,F=g.child;F;){if(F===l){w=!0,l=g,d=y;break}if(F===d){w=!0,d=g,l=y;break}F=F.sibling}if(!w){for(F=y.child;F;){if(F===l){w=!0,l=y,d=g;break}if(F===d){w=!0,d=y,l=g;break}F=F.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Vo(r){return r=rl(r),r!==null?sl(r):null}function sl(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=sl(r);if(s!==null)return s;r=r.sibling}return null}var ol=e.unstable_scheduleCallback,al=e.unstable_cancelCallback,fu=e.unstable_shouldYield,du=e.unstable_requestPaint,qt=e.unstable_now,P=e.unstable_getCurrentPriorityLevel,q=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,J=e.unstable_LowPriority,Le=e.unstable_IdlePriority,Oe=null,Ce=null;function Ge(r){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Oe,r,void 0,(r.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:pt,nt=Math.log,Qe=Math.LN2;function pt(r){return r>>>=0,r===0?32:31-(nt(r)/Qe|0)|0}var Tt=64,Bt=4194304;function Ft(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function bt(r,s){var l=r.pendingLanes;if(l===0)return 0;var d=0,g=r.suspendedLanes,y=r.pingedLanes,w=l&268435455;if(w!==0){var F=w&~g;F!==0?d=Ft(F):(y&=w,y!==0&&(d=Ft(y)))}else w=l&~g,w!==0?d=Ft(w):y!==0&&(d=Ft(y));if(d===0)return 0;if(s!==0&&s!==d&&(s&g)===0&&(g=d&-d,y=s&-s,g>=y||g===16&&(y&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)l=31-ke(s),g=1<<l,d|=r[l],s&=~g;return d}function Je(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(r,s){for(var l=r.suspendedLanes,d=r.pingedLanes,g=r.expirationTimes,y=r.pendingLanes;0<y;){var w=31-ke(y),F=1<<w,V=g[w];V===-1?((F&l)===0||(F&d)!==0)&&(g[w]=Je(F,s)):V<=s&&(r.expiredLanes|=F),y&=~F}}function _t(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Sn(){var r=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),r}function bi(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function on(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-ke(s),r[s]=l}function es(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<l;){var g=31-ke(l),y=1<<g;s[g]=0,d[g]=-1,r[g]=-1,l&=~y}}function Lt(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var d=31-ke(l),g=1<<d;g&s|r[d]&s&&(r[d]|=s),l&=~g}}var ct=0;function Ln(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var fn,dn,Ls,Ri,Yp,hu=!1,ll=[],vr=null,_r=null,xr=null,zo=new Map,Go=new Map,yr=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(r,s){switch(r){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":zo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(s.pointerId)}}function Ho(r,s,l,d,g,y){return r===null||r.nativeEvent!==y?(r={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:y,targetContainers:[g]},s!==null&&(s=ia(s),s!==null&&dn(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),r)}function mS(r,s,l,d,g){switch(s){case"focusin":return vr=Ho(vr,r,s,l,d,g),!0;case"dragenter":return _r=Ho(_r,r,s,l,d,g),!0;case"mouseover":return xr=Ho(xr,r,s,l,d,g),!0;case"pointerover":var y=g.pointerId;return zo.set(y,Ho(zo.get(y)||null,r,s,l,d,g)),!0;case"gotpointercapture":return y=g.pointerId,Go.set(y,Ho(Go.get(y)||null,r,s,l,d,g)),!0}return!1}function Kp(r){var s=ts(r.target);if(s!==null){var l=ti(s);if(l!==null){if(s=l.tag,s===13){if(s=ko(l),s!==null){r.blockedOn=s,Yp(r.priority,function(){Ls(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function cl(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=mu(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var d=new l.constructor(l.type,l);ft=d,l.target.dispatchEvent(d),ft=null}else return s=ia(l),s!==null&&dn(s),r.blockedOn=l,!1;s.shift()}return!0}function Zp(r,s,l){cl(r)&&l.delete(s)}function gS(){hu=!1,vr!==null&&cl(vr)&&(vr=null),_r!==null&&cl(_r)&&(_r=null),xr!==null&&cl(xr)&&(xr=null),zo.forEach(Zp),Go.forEach(Zp)}function Wo(r,s){r.blockedOn===s&&(r.blockedOn=null,hu||(hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gS)))}function jo(r){function s(g){return Wo(g,r)}if(0<ll.length){Wo(ll[0],r);for(var l=1;l<ll.length;l++){var d=ll[l];d.blockedOn===r&&(d.blockedOn=null)}}for(vr!==null&&Wo(vr,r),_r!==null&&Wo(_r,r),xr!==null&&Wo(xr,r),zo.forEach(s),Go.forEach(s),l=0;l<yr.length;l++)d=yr[l],d.blockedOn===r&&(d.blockedOn=null);for(;0<yr.length&&(l=yr[0],l.blockedOn===null);)Kp(l),l.blockedOn===null&&yr.shift()}var Is=b.ReactCurrentBatchConfig,ul=!0;function vS(r,s,l,d){var g=ct,y=Is.transition;Is.transition=null;try{ct=1,pu(r,s,l,d)}finally{ct=g,Is.transition=y}}function _S(r,s,l,d){var g=ct,y=Is.transition;Is.transition=null;try{ct=4,pu(r,s,l,d)}finally{ct=g,Is.transition=y}}function pu(r,s,l,d){if(ul){var g=mu(r,s,l,d);if(g===null)Lu(r,s,d,fl,l),$p(r,d);else if(mS(g,r,s,l,d))d.stopPropagation();else if($p(r,d),s&4&&-1<pS.indexOf(r)){for(;g!==null;){var y=ia(g);if(y!==null&&fn(y),y=mu(r,s,l,d),y===null&&Lu(r,s,d,fl,l),y===g)break;g=y}g!==null&&d.stopPropagation()}else Lu(r,s,d,null,l)}}var fl=null;function mu(r,s,l,d){if(fl=null,r=G(d),r=ts(r),r!==null)if(s=ti(r),s===null)r=null;else if(l=s.tag,l===13){if(r=ko(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return fl=r,null}function Qp(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P()){case q:return 1;case ae:return 4;case ne:case J:return 16;case Le:return 536870912;default:return 16}default:return 16}}var Sr=null,gu=null,dl=null;function Jp(){if(dl)return dl;var r,s=gu,l=s.length,d,g="value"in Sr?Sr.value:Sr.textContent,y=g.length;for(r=0;r<l&&s[r]===g[r];r++);var w=l-r;for(d=1;d<=w&&s[l-d]===g[y-d];d++);return dl=g.slice(r,1<d?1-d:void 0)}function hl(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function pl(){return!0}function em(){return!1}function Xn(r){function s(l,d,g,y,w){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=y,this.target=w,this.currentTarget=null;for(var F in r)r.hasOwnProperty(F)&&(l=r[F],this[F]=l?l(y):y[F]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?pl:em,this.isPropagationStopped=em,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),s}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Xn(Ns),Xo=re({},Ns,{view:0,detail:0}),xS=Xn(Xo),_u,xu,qo,ml=re({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==qo&&(qo&&r.type==="mousemove"?(_u=r.screenX-qo.screenX,xu=r.screenY-qo.screenY):xu=_u=0,qo=r),_u)},movementY:function(r){return"movementY"in r?r.movementY:xu}}),tm=Xn(ml),yS=re({},ml,{dataTransfer:0}),SS=Xn(yS),MS=re({},Xo,{relatedTarget:0}),yu=Xn(MS),ES=re({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),TS=Xn(ES),wS=re({},Ns,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),AS=Xn(wS),CS=re({},Ns,{data:0}),nm=Xn(CS),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=PS[r])?!!s[r]:!1}function Su(){return DS}var LS=re({},Xo,{key:function(r){if(r.key){var s=bS[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=hl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?RS[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(r){return r.type==="keypress"?hl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?hl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),IS=Xn(LS),NS=re({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Xn(NS),US=re({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),FS=Xn(US),OS=re({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=Xn(OS),kS=re({},ml,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),VS=Xn(kS),zS=[9,13,27,32],Mu=u&&"CompositionEvent"in window,Yo=null;u&&"documentMode"in document&&(Yo=document.documentMode);var GS=u&&"TextEvent"in window&&!Yo,rm=u&&(!Mu||Yo&&8<Yo&&11>=Yo),sm=" ",om=!1;function am(r,s){switch(r){case"keyup":return zS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Us=!1;function HS(r,s){switch(r){case"compositionend":return lm(s);case"keypress":return s.which!==32?null:(om=!0,sm);case"textInput":return r=s.data,r===sm&&om?null:r;default:return null}}function WS(r,s){if(Us)return r==="compositionend"||!Mu&&am(r,s)?(r=Jp(),dl=gu=Sr=null,Us=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return rm&&s.locale!=="ko"?null:s.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!jS[r.type]:s==="textarea"}function um(r,s,l,d){me(d),s=yl(s,"onChange"),0<s.length&&(l=new vu("onChange","change",null,l,d),r.push({event:l,listeners:s}))}var $o=null,Ko=null;function XS(r){bm(r,0)}function gl(r){var s=Vs(r);if(kt(s))return r}function qS(r,s){if(r==="change")return s}var fm=!1;if(u){var Eu;if(u){var Tu="oninput"in document;if(!Tu){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Tu=typeof dm.oninput=="function"}Eu=Tu}else Eu=!1;fm=Eu&&(!document.documentMode||9<document.documentMode)}function hm(){$o&&($o.detachEvent("onpropertychange",pm),Ko=$o=null)}function pm(r){if(r.propertyName==="value"&&gl(Ko)){var s=[];um(s,Ko,r,G(r)),jn(XS,s)}}function YS(r,s,l){r==="focusin"?(hm(),$o=s,Ko=l,$o.attachEvent("onpropertychange",pm)):r==="focusout"&&hm()}function $S(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return gl(Ko)}function KS(r,s){if(r==="click")return gl(s)}function ZS(r,s){if(r==="input"||r==="change")return gl(s)}function QS(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var pi=typeof Object.is=="function"?Object.is:QS;function Zo(r,s){if(pi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(s,g)||!pi(r[g],s[g]))return!1}return!0}function mm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function gm(r,s){var l=mm(r);r=0;for(var d;l;){if(l.nodeType===3){if(d=r+l.textContent.length,r<=s&&d>=s)return{node:l,offset:s-r};r=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=mm(l)}}function vm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?vm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function _m(){for(var r=window,s=ht();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ht(r.document)}return s}function wu(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function JS(r){var s=_m(),l=r.focusedElem,d=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&vm(l.ownerDocument.documentElement,l)){if(d!==null&&wu(l)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var g=l.textContent.length,y=Math.min(d.start,g);d=d.end===void 0?y:Math.min(d.end,g),!r.extend&&y>d&&(g=d,d=y,y=g),g=gm(l,y);var w=gm(l,d);g&&w&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),r.removeAllRanges(),y>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var eM=u&&"documentMode"in document&&11>=document.documentMode,Fs=null,Au=null,Qo=null,Cu=!1;function xm(r,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cu||Fs==null||Fs!==ht(d)||(d=Fs,"selectionStart"in d&&wu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Qo&&Zo(Qo,d)||(Qo=d,d=yl(Au,"onSelect"),0<d.length&&(s=new vu("onSelect","select",null,s,l),r.push({event:s,listeners:d}),s.target=Fs)))}function vl(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var Os={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},bu={},ym={};u&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function _l(r){if(bu[r])return bu[r];if(!Os[r])return r;var s=Os[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in ym)return bu[r]=s[l];return r}var Sm=_l("animationend"),Mm=_l("animationiteration"),Em=_l("animationstart"),Tm=_l("transitionend"),wm=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(r,s){wm.set(r,s),a(s,[r])}for(var Ru=0;Ru<Am.length;Ru++){var Pu=Am[Ru],tM=Pu.toLowerCase(),nM=Pu[0].toUpperCase()+Pu.slice(1);Mr(tM,"on"+nM)}Mr(Sm,"onAnimationEnd"),Mr(Mm,"onAnimationIteration"),Mr(Em,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Tm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Cm(r,s,l){var d=r.type||"unknown-event";r.currentTarget=l,il(d,s,void 0,r),r.currentTarget=null}function bm(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var d=r[l],g=d.event;d=d.listeners;e:{var y=void 0;if(s)for(var w=d.length-1;0<=w;w--){var F=d[w],V=F.instance,se=F.currentTarget;if(F=F.listener,V!==y&&g.isPropagationStopped())break e;Cm(g,F,se),y=V}else for(w=0;w<d.length;w++){if(F=d[w],V=F.instance,se=F.currentTarget,F=F.listener,V!==y&&g.isPropagationStopped())break e;Cm(g,F,se),y=V}}}if(Qr)throw r=hi,Qr=!1,hi=null,r}function zt(r,s){var l=s[Bu];l===void 0&&(l=s[Bu]=new Set);var d=r+"__bubble";l.has(d)||(Rm(s,r,2,!1),l.add(d))}function Du(r,s,l){var d=0;s&&(d|=4),Rm(l,r,d,s)}var xl="_reactListening"+Math.random().toString(36).slice(2);function ea(r){if(!r[xl]){r[xl]=!0,i.forEach(function(l){l!=="selectionchange"&&(iM.has(l)||Du(l,!1,r),Du(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[xl]||(s[xl]=!0,Du("selectionchange",!1,s))}}function Rm(r,s,l,d){switch(Qp(s)){case 1:var g=vS;break;case 4:g=_S;break;default:g=pu}l=g.bind(null,s,l,r),g=void 0,!Fo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),d?g!==void 0?r.addEventListener(s,l,{capture:!0,passive:g}):r.addEventListener(s,l,!0):g!==void 0?r.addEventListener(s,l,{passive:g}):r.addEventListener(s,l,!1)}function Lu(r,s,l,d,g){var y=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var F=d.stateNode.containerInfo;if(F===g||F.nodeType===8&&F.parentNode===g)break;if(w===4)for(w=d.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;w=w.return}for(;F!==null;){if(w=ts(F),w===null)return;if(V=w.tag,V===5||V===6){d=y=w;continue e}F=F.parentNode}}d=d.return}jn(function(){var se=y,xe=G(l),Se=[];e:{var ve=wm.get(r);if(ve!==void 0){var Be=vu,je=r;switch(r){case"keypress":if(hl(l)===0)break e;case"keydown":case"keyup":Be=IS;break;case"focusin":je="focus",Be=yu;break;case"focusout":je="blur",Be=yu;break;case"beforeblur":case"afterblur":Be=yu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=SS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=FS;break;case Sm:case Mm:case Em:Be=TS;break;case Tm:Be=BS;break;case"scroll":Be=xS;break;case"wheel":Be=VS;break;case"copy":case"cut":case"paste":Be=AS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=im}var Ye=(s&4)!==0,Jt=!Ye&&r==="scroll",Z=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var H=se,ee;H!==null;){ee=H;var Te=ee.stateNode;if(ee.tag===5&&Te!==null&&(ee=Te,Z!==null&&(Te=Dn(H,Z),Te!=null&&Ye.push(ta(H,Te,ee)))),Jt)break;H=H.return}0<Ye.length&&(ve=new Be(ve,je,null,l,xe),Se.push({event:ve,listeners:Ye}))}}if((s&7)===0){e:{if(ve=r==="mouseover"||r==="pointerover",Be=r==="mouseout"||r==="pointerout",ve&&l!==ft&&(je=l.relatedTarget||l.fromElement)&&(ts(je)||je[ji]))break e;if((Be||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?(je=l.relatedTarget||l.toElement,Be=se,je=je?ts(je):null,je!==null&&(Jt=ti(je),je!==Jt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=se),Be!==je)){if(Ye=tm,Te="onMouseLeave",Z="onMouseEnter",H="mouse",(r==="pointerout"||r==="pointerover")&&(Ye=im,Te="onPointerLeave",Z="onPointerEnter",H="pointer"),Jt=Be==null?ve:Vs(Be),ee=je==null?ve:Vs(je),ve=new Ye(Te,H+"leave",Be,l,xe),ve.target=Jt,ve.relatedTarget=ee,Te=null,ts(xe)===se&&(Ye=new Ye(Z,H+"enter",je,l,xe),Ye.target=ee,Ye.relatedTarget=Jt,Te=Ye),Jt=Te,Be&&je)t:{for(Ye=Be,Z=je,H=0,ee=Ye;ee;ee=Bs(ee))H++;for(ee=0,Te=Z;Te;Te=Bs(Te))ee++;for(;0<H-ee;)Ye=Bs(Ye),H--;for(;0<ee-H;)Z=Bs(Z),ee--;for(;H--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=Bs(Ye),Z=Bs(Z)}Ye=null}else Ye=null;Be!==null&&Pm(Se,ve,Be,Ye,!1),je!==null&&Jt!==null&&Pm(Se,Jt,je,Ye,!0)}}e:{if(ve=se?Vs(se):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Ze=qS;else if(cm(ve))if(fm)Ze=ZS;else{Ze=$S;var et=YS}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=KS);if(Ze&&(Ze=Ze(r,se))){um(Se,Ze,l,xe);break e}et&&et(r,ve,se),r==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&jt(ve,"number",ve.value)}switch(et=se?Vs(se):window,r){case"focusin":(cm(et)||et.contentEditable==="true")&&(Fs=et,Au=se,Qo=null);break;case"focusout":Qo=Au=Fs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,xm(Se,l,xe);break;case"selectionchange":if(eM)break;case"keydown":case"keyup":xm(Se,l,xe)}var tt;if(Mu)e:{switch(r){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Us?am(r,l)&&(ot="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(rm&&l.locale!=="ko"&&(Us||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Us&&(tt=Jp()):(Sr=xe,gu="value"in Sr?Sr.value:Sr.textContent,Us=!0)),et=yl(se,ot),0<et.length&&(ot=new nm(ot,r,null,l,xe),Se.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=lm(l),tt!==null&&(ot.data=tt)))),(tt=GS?HS(r,l):WS(r,l))&&(se=yl(se,"onBeforeInput"),0<se.length&&(xe=new nm("onBeforeInput","beforeinput",null,l,xe),Se.push({event:xe,listeners:se}),xe.data=tt))}bm(Se,s)})}function ta(r,s,l){return{instance:r,listener:s,currentTarget:l}}function yl(r,s){for(var l=s+"Capture",d=[];r!==null;){var g=r,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=Dn(r,l),y!=null&&d.unshift(ta(r,y,g)),y=Dn(r,s),y!=null&&d.push(ta(r,y,g))),r=r.return}return d}function Bs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Pm(r,s,l,d,g){for(var y=s._reactName,w=[];l!==null&&l!==d;){var F=l,V=F.alternate,se=F.stateNode;if(V!==null&&V===d)break;F.tag===5&&se!==null&&(F=se,g?(V=Dn(l,y),V!=null&&w.unshift(ta(l,V,F))):g||(V=Dn(l,y),V!=null&&w.push(ta(l,V,F)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var rM=/\r\n?/g,sM=/\u0000|\uFFFD/g;function Dm(r){return(typeof r=="string"?r:""+r).replace(rM,`
`).replace(sM,"")}function Sl(r,s,l){if(s=Dm(s),Dm(r)!==s&&l)throw Error(t(425))}function Ml(){}var Iu=null,Nu=null;function Uu(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,oM=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,aM=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(r){return Lm.resolve(null).then(r).catch(lM)}:Fu;function lM(r){setTimeout(function(){throw r})}function Ou(r,s){var l=s,d=0;do{var g=l.nextSibling;if(r.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){r.removeChild(g),jo(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);jo(s)}function Er(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Im(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ks,na="__reactProps$"+ks,ji="__reactContainer$"+ks,Bu="__reactEvents$"+ks,cM="__reactListeners$"+ks,uM="__reactHandles$"+ks;function ts(r){var s=r[Pi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[ji]||l[Pi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Im(r);r!==null;){if(l=r[Pi])return l;r=Im(r)}return s}r=l,l=r.parentNode}return null}function ia(r){return r=r[Pi]||r[ji],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Vs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function El(r){return r[na]||null}var ku=[],zs=-1;function Tr(r){return{current:r}}function Gt(r){0>zs||(r.current=ku[zs],ku[zs]=null,zs--)}function Vt(r,s){zs++,ku[zs]=r.current,r.current=s}var wr={},Mn=Tr(wr),On=Tr(!1),ns=wr;function Gs(r,s){var l=r.type.contextTypes;if(!l)return wr;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in l)g[y]=s[y];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=g),g}function Bn(r){return r=r.childContextTypes,r!=null}function Tl(){Gt(On),Gt(Mn)}function Nm(r,s,l){if(Mn.current!==wr)throw Error(t(168));Vt(Mn,s),Vt(On,l)}function Um(r,s,l){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in s))throw Error(t(108,fe(r)||"Unknown",g));return re({},l,d)}function wl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||wr,ns=Mn.current,Vt(Mn,r),Vt(On,On.current),!0}function Fm(r,s,l){var d=r.stateNode;if(!d)throw Error(t(169));l?(r=Um(r,s,ns),d.__reactInternalMemoizedMergedChildContext=r,Gt(On),Gt(Mn),Vt(Mn,r)):Gt(On),Vt(On,l)}var Xi=null,Al=!1,Vu=!1;function Om(r){Xi===null?Xi=[r]:Xi.push(r)}function fM(r){Al=!0,Om(r)}function Ar(){if(!Vu&&Xi!==null){Vu=!0;var r=0,s=ct;try{var l=Xi;for(ct=1;r<l.length;r++){var d=l[r];do d=d(!0);while(d!==null)}Xi=null,Al=!1}catch(g){throw Xi!==null&&(Xi=Xi.slice(r+1)),ol(q,Ar),g}finally{ct=s,Vu=!1}}return null}var Hs=[],Ws=0,Cl=null,bl=0,ni=[],ii=0,is=null,qi=1,Yi="";function rs(r,s){Hs[Ws++]=bl,Hs[Ws++]=Cl,Cl=r,bl=s}function Bm(r,s,l){ni[ii++]=qi,ni[ii++]=Yi,ni[ii++]=is,is=r;var d=qi;r=Yi;var g=32-ke(d)-1;d&=~(1<<g),l+=1;var y=32-ke(s)+g;if(30<y){var w=g-g%5;y=(d&(1<<w)-1).toString(32),d>>=w,g-=w,qi=1<<32-ke(s)+g|l<<g|d,Yi=y+r}else qi=1<<y|l<<g|d,Yi=r}function zu(r){r.return!==null&&(rs(r,1),Bm(r,1,0))}function Gu(r){for(;r===Cl;)Cl=Hs[--Ws],Hs[Ws]=null,bl=Hs[--Ws],Hs[Ws]=null;for(;r===is;)is=ni[--ii],ni[ii]=null,Yi=ni[--ii],ni[ii]=null,qi=ni[--ii],ni[ii]=null}var qn=null,Yn=null,Xt=!1,mi=null;function km(r,s){var l=ai(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Vm(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,qn=r,Yn=Er(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,qn=r,Yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=is!==null?{id:qi,overflow:Yi}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ai(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,qn=r,Yn=null,!0):!1;default:return!1}}function Hu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Wu(r){if(Xt){var s=Yn;if(s){var l=s;if(!Vm(r,s)){if(Hu(r))throw Error(t(418));s=Er(l.nextSibling);var d=qn;s&&Vm(r,s)?km(d,l):(r.flags=r.flags&-4097|2,Xt=!1,qn=r)}}else{if(Hu(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xt=!1,qn=r}}}function zm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;qn=r}function Rl(r){if(r!==qn)return!1;if(!Xt)return zm(r),Xt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Uu(r.type,r.memoizedProps)),s&&(s=Yn)){if(Hu(r))throw Gm(),Error(t(418));for(;s;)km(r,s),s=Er(s.nextSibling)}if(zm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){Yn=Er(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}Yn=null}}else Yn=qn?Er(r.stateNode.nextSibling):null;return!0}function Gm(){for(var r=Yn;r;)r=Er(r.nextSibling)}function js(){Yn=qn=null,Xt=!1}function ju(r){mi===null?mi=[r]:mi.push(r)}var dM=b.ReactCurrentBatchConfig;function ra(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,r));var g=d,y=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(w){var F=g.refs;w===null?delete F[y]:F[y]=w},s._stringRef=y,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Pl(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Hm(r){var s=r._init;return s(r._payload)}function Wm(r){function s(Z,H){if(r){var ee=Z.deletions;ee===null?(Z.deletions=[H],Z.flags|=16):ee.push(H)}}function l(Z,H){if(!r)return null;for(;H!==null;)s(Z,H),H=H.sibling;return null}function d(Z,H){for(Z=new Map;H!==null;)H.key!==null?Z.set(H.key,H):Z.set(H.index,H),H=H.sibling;return Z}function g(Z,H){return Z=Nr(Z,H),Z.index=0,Z.sibling=null,Z}function y(Z,H,ee){return Z.index=ee,r?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<H?(Z.flags|=2,H):ee):(Z.flags|=2,H)):(Z.flags|=1048576,H)}function w(Z){return r&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,H,ee,Te){return H===null||H.tag!==6?(H=Of(ee,Z.mode,Te),H.return=Z,H):(H=g(H,ee),H.return=Z,H)}function V(Z,H,ee,Te){var Ze=ee.type;return Ze===U?xe(Z,H,ee.props.children,Te,ee.key):H!==null&&(H.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&Hm(Ze)===H.type)?(Te=g(H,ee.props),Te.ref=ra(Z,H,ee),Te.return=Z,Te):(Te=ec(ee.type,ee.key,ee.props,null,Z.mode,Te),Te.ref=ra(Z,H,ee),Te.return=Z,Te)}function se(Z,H,ee,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==ee.containerInfo||H.stateNode.implementation!==ee.implementation?(H=Bf(ee,Z.mode,Te),H.return=Z,H):(H=g(H,ee.children||[]),H.return=Z,H)}function xe(Z,H,ee,Te,Ze){return H===null||H.tag!==7?(H=ds(ee,Z.mode,Te,Ze),H.return=Z,H):(H=g(H,ee),H.return=Z,H)}function Se(Z,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Of(""+H,Z.mode,ee),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return ee=ec(H.type,H.key,H.props,null,Z.mode,ee),ee.ref=ra(Z,null,H),ee.return=Z,ee;case I:return H=Bf(H,Z.mode,ee),H.return=Z,H;case Q:var Te=H._init;return Se(Z,Te(H._payload),ee)}if(vt(H)||de(H))return H=ds(H,Z.mode,ee,null),H.return=Z,H;Pl(Z,H)}return null}function ve(Z,H,ee,Te){var Ze=H!==null?H.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:F(Z,H,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:return ee.key===Ze?V(Z,H,ee,Te):null;case I:return ee.key===Ze?se(Z,H,ee,Te):null;case Q:return Ze=ee._init,ve(Z,H,Ze(ee._payload),Te)}if(vt(ee)||de(ee))return Ze!==null?null:xe(Z,H,ee,Te,null);Pl(Z,ee)}return null}function Be(Z,H,ee,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(ee)||null,F(H,Z,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return Z=Z.get(Te.key===null?ee:Te.key)||null,V(H,Z,Te,Ze);case I:return Z=Z.get(Te.key===null?ee:Te.key)||null,se(H,Z,Te,Ze);case Q:var et=Te._init;return Be(Z,H,ee,et(Te._payload),Ze)}if(vt(Te)||de(Te))return Z=Z.get(ee)||null,xe(H,Z,Te,Ze,null);Pl(H,Te)}return null}function je(Z,H,ee,Te){for(var Ze=null,et=null,tt=H,ot=H=0,mn=null;tt!==null&&ot<ee.length;ot++){tt.index>ot?(mn=tt,tt=null):mn=tt.sibling;var Rt=ve(Z,tt,ee[ot],Te);if(Rt===null){tt===null&&(tt=mn);break}r&&tt&&Rt.alternate===null&&s(Z,tt),H=y(Rt,H,ot),et===null?Ze=Rt:et.sibling=Rt,et=Rt,tt=mn}if(ot===ee.length)return l(Z,tt),Xt&&rs(Z,ot),Ze;if(tt===null){for(;ot<ee.length;ot++)tt=Se(Z,ee[ot],Te),tt!==null&&(H=y(tt,H,ot),et===null?Ze=tt:et.sibling=tt,et=tt);return Xt&&rs(Z,ot),Ze}for(tt=d(Z,tt);ot<ee.length;ot++)mn=Be(tt,Z,ot,ee[ot],Te),mn!==null&&(r&&mn.alternate!==null&&tt.delete(mn.key===null?ot:mn.key),H=y(mn,H,ot),et===null?Ze=mn:et.sibling=mn,et=mn);return r&&tt.forEach(function(Ur){return s(Z,Ur)}),Xt&&rs(Z,ot),Ze}function Ye(Z,H,ee,Te){var Ze=de(ee);if(typeof Ze!="function")throw Error(t(150));if(ee=Ze.call(ee),ee==null)throw Error(t(151));for(var et=Ze=null,tt=H,ot=H=0,mn=null,Rt=ee.next();tt!==null&&!Rt.done;ot++,Rt=ee.next()){tt.index>ot?(mn=tt,tt=null):mn=tt.sibling;var Ur=ve(Z,tt,Rt.value,Te);if(Ur===null){tt===null&&(tt=mn);break}r&&tt&&Ur.alternate===null&&s(Z,tt),H=y(Ur,H,ot),et===null?Ze=Ur:et.sibling=Ur,et=Ur,tt=mn}if(Rt.done)return l(Z,tt),Xt&&rs(Z,ot),Ze;if(tt===null){for(;!Rt.done;ot++,Rt=ee.next())Rt=Se(Z,Rt.value,Te),Rt!==null&&(H=y(Rt,H,ot),et===null?Ze=Rt:et.sibling=Rt,et=Rt);return Xt&&rs(Z,ot),Ze}for(tt=d(Z,tt);!Rt.done;ot++,Rt=ee.next())Rt=Be(tt,Z,ot,Rt.value,Te),Rt!==null&&(r&&Rt.alternate!==null&&tt.delete(Rt.key===null?ot:Rt.key),H=y(Rt,H,ot),et===null?Ze=Rt:et.sibling=Rt,et=Rt);return r&&tt.forEach(function(jM){return s(Z,jM)}),Xt&&rs(Z,ot),Ze}function Jt(Z,H,ee,Te){if(typeof ee=="object"&&ee!==null&&ee.type===U&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:e:{for(var Ze=ee.key,et=H;et!==null;){if(et.key===Ze){if(Ze=ee.type,Ze===U){if(et.tag===7){l(Z,et.sibling),H=g(et,ee.props.children),H.return=Z,Z=H;break e}}else if(et.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&Hm(Ze)===et.type){l(Z,et.sibling),H=g(et,ee.props),H.ref=ra(Z,et,ee),H.return=Z,Z=H;break e}l(Z,et);break}else s(Z,et);et=et.sibling}ee.type===U?(H=ds(ee.props.children,Z.mode,Te,ee.key),H.return=Z,Z=H):(Te=ec(ee.type,ee.key,ee.props,null,Z.mode,Te),Te.ref=ra(Z,H,ee),Te.return=Z,Z=Te)}return w(Z);case I:e:{for(et=ee.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===ee.containerInfo&&H.stateNode.implementation===ee.implementation){l(Z,H.sibling),H=g(H,ee.children||[]),H.return=Z,Z=H;break e}else{l(Z,H);break}else s(Z,H);H=H.sibling}H=Bf(ee,Z.mode,Te),H.return=Z,Z=H}return w(Z);case Q:return et=ee._init,Jt(Z,H,et(ee._payload),Te)}if(vt(ee))return je(Z,H,ee,Te);if(de(ee))return Ye(Z,H,ee,Te);Pl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,H!==null&&H.tag===6?(l(Z,H.sibling),H=g(H,ee),H.return=Z,Z=H):(l(Z,H),H=Of(ee,Z.mode,Te),H.return=Z,Z=H),w(Z)):l(Z,H)}return Jt}var Xs=Wm(!0),jm=Wm(!1),Dl=Tr(null),Ll=null,qs=null,Xu=null;function qu(){Xu=qs=Ll=null}function Yu(r){var s=Dl.current;Gt(Dl),r._currentValue=s}function $u(r,s,l){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===l)break;r=r.return}}function Ys(r,s){Ll=r,Xu=qs=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(kn=!0),r.firstContext=null)}function ri(r){var s=r._currentValue;if(Xu!==r)if(r={context:r,memoizedValue:s,next:null},qs===null){if(Ll===null)throw Error(t(308));qs=r,Ll.dependencies={lanes:0,firstContext:r}}else qs=qs.next=r;return s}var ss=null;function Ku(r){ss===null?ss=[r]:ss.push(r)}function Xm(r,s,l,d){var g=s.interleaved;return g===null?(l.next=l,Ku(s)):(l.next=g.next,g.next=l),s.interleaved=l,$i(r,d)}function $i(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Cr=!1;function Zu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ki(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function br(r,s,l){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(wt&2)!==0){var g=d.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s,$i(r,l)}return g=d.interleaved,g===null?(s.next=s,Ku(d)):(s.next=g.next,g.next=s),d.interleaved=s,$i(r,l)}function Il(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,Lt(r,l)}}function Ym(r,s){var l=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?g=y=w:y=y.next=w,l=l.next}while(l!==null);y===null?g=y=s:y=y.next=s}else g=y=s;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:d.shared,effects:d.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Nl(r,s,l,d){var g=r.updateQueue;Cr=!1;var y=g.firstBaseUpdate,w=g.lastBaseUpdate,F=g.shared.pending;if(F!==null){g.shared.pending=null;var V=F,se=V.next;V.next=null,w===null?y=se:w.next=se,w=V;var xe=r.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==w&&(F===null?xe.firstBaseUpdate=se:F.next=se,xe.lastBaseUpdate=V))}if(y!==null){var Se=g.baseState;w=0,xe=se=V=null,F=y;do{var ve=F.lane,Be=F.eventTime;if((d&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=r,Ye=F;switch(ve=s,Be=l,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Se=je.call(Be,Se,ve);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,ve=typeof je=="function"?je.call(Be,Se,ve):je,ve==null)break e;Se=re({},Se,ve);break e;case 2:Cr=!0}}F.callback!==null&&F.lane!==0&&(r.flags|=64,ve=g.effects,ve===null?g.effects=[F]:ve.push(F))}else Be={eventTime:Be,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(se=xe=Be,V=Se):xe=xe.next=Be,w|=ve;if(F=F.next,F===null){if(F=g.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,g.lastBaseUpdate=ve,g.shared.pending=null}}while(!0);if(xe===null&&(V=Se),g.baseState=V,g.firstBaseUpdate=se,g.lastBaseUpdate=xe,s=g.shared.interleaved,s!==null){g=s;do w|=g.lane,g=g.next;while(g!==s)}else y===null&&(g.shared.lanes=0);ls|=w,r.lanes=w,r.memoizedState=Se}}function $m(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var sa={},Di=Tr(sa),oa=Tr(sa),aa=Tr(sa);function os(r){if(r===sa)throw Error(t(174));return r}function Qu(r,s){switch(Vt(aa,s),Vt(oa,r),Vt(Di,sa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ge(s,r)}Gt(Di),Vt(Di,s)}function $s(){Gt(Di),Gt(oa),Gt(aa)}function Km(r){os(aa.current);var s=os(Di.current),l=ge(s,r.type);s!==l&&(Vt(oa,r),Vt(Di,l))}function Ju(r){oa.current===r&&(Gt(Di),Gt(oa))}var Yt=Tr(0);function Ul(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ef=[];function tf(){for(var r=0;r<ef.length;r++)ef[r]._workInProgressVersionPrimary=null;ef.length=0}var Fl=b.ReactCurrentDispatcher,nf=b.ReactCurrentBatchConfig,as=0,$t=null,an=null,hn=null,Ol=!1,la=!1,ca=0,hM=0;function En(){throw Error(t(321))}function rf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!pi(r[l],s[l]))return!1;return!0}function sf(r,s,l,d,g,y){if(as=y,$t=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fl.current=r===null||r.memoizedState===null?vM:_M,r=l(d,g),la){y=0;do{if(la=!1,ca=0,25<=y)throw Error(t(301));y+=1,hn=an=null,s.updateQueue=null,Fl.current=xM,r=l(d,g)}while(la)}if(Fl.current=Vl,s=an!==null&&an.next!==null,as=0,hn=an=$t=null,Ol=!1,s)throw Error(t(300));return r}function of(){var r=ca!==0;return ca=0,r}function Li(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?$t.memoizedState=hn=r:hn=hn.next=r,hn}function si(){if(an===null){var r=$t.alternate;r=r!==null?r.memoizedState:null}else r=an.next;var s=hn===null?$t.memoizedState:hn.next;if(s!==null)hn=s,an=r;else{if(r===null)throw Error(t(310));an=r,r={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},hn===null?$t.memoizedState=hn=r:hn=hn.next=r}return hn}function ua(r,s){return typeof s=="function"?s(r):s}function af(r){var s=si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=an,g=d.baseQueue,y=l.pending;if(y!==null){if(g!==null){var w=g.next;g.next=y.next,y.next=w}d.baseQueue=g=y,l.pending=null}if(g!==null){y=g.next,d=d.baseState;var F=w=null,V=null,se=y;do{var xe=se.lane;if((as&xe)===xe)V!==null&&(V=V.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),d=se.hasEagerState?se.eagerState:r(d,se.action);else{var Se={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};V===null?(F=V=Se,w=d):V=V.next=Se,$t.lanes|=xe,ls|=xe}se=se.next}while(se!==null&&se!==y);V===null?w=d:V.next=F,pi(d,s.memoizedState)||(kn=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=V,l.lastRenderedState=d}if(r=l.interleaved,r!==null){g=r;do y=g.lane,$t.lanes|=y,ls|=y,g=g.next;while(g!==r)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function lf(r){var s=si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=l.dispatch,g=l.pending,y=s.memoizedState;if(g!==null){l.pending=null;var w=g=g.next;do y=r(y,w.action),w=w.next;while(w!==g);pi(y,s.memoizedState)||(kn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,d]}function Zm(){}function Qm(r,s){var l=$t,d=si(),g=s(),y=!pi(d.memoizedState,g);if(y&&(d.memoizedState=g,kn=!0),d=d.queue,cf(tg.bind(null,l,d,r),[r]),d.getSnapshot!==s||y||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,fa(9,eg.bind(null,l,d,g,s),void 0,null),pn===null)throw Error(t(349));(as&30)!==0||Jm(l,s,g)}return g}function Jm(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function eg(r,s,l,d){s.value=l,s.getSnapshot=d,ng(s)&&ig(r)}function tg(r,s,l){return l(function(){ng(s)&&ig(r)})}function ng(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!pi(r,l)}catch{return!0}}function ig(r){var s=$i(r,1);s!==null&&xi(s,r,1,-1)}function rg(r){var s=Li();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:r},s.queue=r,r=r.dispatch=gM.bind(null,$t,r),[s.memoizedState,r]}function fa(r,s,l,d){return r={tag:r,create:s,destroy:l,deps:d,next:null},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(d=l.next,l.next=r,r.next=d,s.lastEffect=r)),r}function sg(){return si().memoizedState}function Bl(r,s,l,d){var g=Li();$t.flags|=r,g.memoizedState=fa(1|s,l,void 0,d===void 0?null:d)}function kl(r,s,l,d){var g=si();d=d===void 0?null:d;var y=void 0;if(an!==null){var w=an.memoizedState;if(y=w.destroy,d!==null&&rf(d,w.deps)){g.memoizedState=fa(s,l,y,d);return}}$t.flags|=r,g.memoizedState=fa(1|s,l,y,d)}function og(r,s){return Bl(8390656,8,r,s)}function cf(r,s){return kl(2048,8,r,s)}function ag(r,s){return kl(4,2,r,s)}function lg(r,s){return kl(4,4,r,s)}function cg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ug(r,s,l){return l=l!=null?l.concat([r]):null,kl(4,4,cg.bind(null,s,r),l)}function uf(){}function fg(r,s){var l=si();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&rf(s,d[1])?d[0]:(l.memoizedState=[r,s],r)}function dg(r,s){var l=si();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&rf(s,d[1])?d[0]:(r=r(),l.memoizedState=[r,s],r)}function hg(r,s,l){return(as&21)===0?(r.baseState&&(r.baseState=!1,kn=!0),r.memoizedState=l):(pi(l,s)||(l=Sn(),$t.lanes|=l,ls|=l,r.baseState=!0),s)}function pM(r,s){var l=ct;ct=l!==0&&4>l?l:4,r(!0);var d=nf.transition;nf.transition={};try{r(!1),s()}finally{ct=l,nf.transition=d}}function pg(){return si().memoizedState}function mM(r,s,l){var d=Lr(r);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},mg(r))gg(s,l);else if(l=Xm(r,s,l,d),l!==null){var g=Nn();xi(l,r,d,g),vg(l,s,d)}}function gM(r,s,l){var d=Lr(r),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(mg(r))gg(s,g);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var w=s.lastRenderedState,F=y(w,l);if(g.hasEagerState=!0,g.eagerState=F,pi(F,w)){var V=s.interleaved;V===null?(g.next=g,Ku(s)):(g.next=V.next,V.next=g),s.interleaved=g;return}}catch{}finally{}l=Xm(r,s,g,d),l!==null&&(g=Nn(),xi(l,r,d,g),vg(l,s,d))}}function mg(r){var s=r.alternate;return r===$t||s!==null&&s===$t}function gg(r,s){la=Ol=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function vg(r,s,l){if((l&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,Lt(r,l)}}var Vl={readContext:ri,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},vM={readContext:ri,useCallback:function(r,s){return Li().memoizedState=[r,s===void 0?null:s],r},useContext:ri,useEffect:og,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Bl(4194308,4,cg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Bl(4194308,4,r,s)},useInsertionEffect:function(r,s){return Bl(4,2,r,s)},useMemo:function(r,s){var l=Li();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var d=Li();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=mM.bind(null,$t,r),[d.memoizedState,r]},useRef:function(r){var s=Li();return r={current:r},s.memoizedState=r},useState:rg,useDebugValue:uf,useDeferredValue:function(r){return Li().memoizedState=r},useTransition:function(){var r=rg(!1),s=r[0];return r=pM.bind(null,r[1]),Li().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var d=$t,g=Li();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),pn===null)throw Error(t(349));(as&30)!==0||Jm(d,s,l)}g.memoizedState=l;var y={value:l,getSnapshot:s};return g.queue=y,og(tg.bind(null,d,y,r),[r]),d.flags|=2048,fa(9,eg.bind(null,d,y,l,s),void 0,null),l},useId:function(){var r=Li(),s=pn.identifierPrefix;if(Xt){var l=Yi,d=qi;l=(d&~(1<<32-ke(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=ca++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=hM++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},_M={readContext:ri,useCallback:fg,useContext:ri,useEffect:cf,useImperativeHandle:ug,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:dg,useReducer:af,useRef:sg,useState:function(){return af(ua)},useDebugValue:uf,useDeferredValue:function(r){var s=si();return hg(s,an.memoizedState,r)},useTransition:function(){var r=af(ua)[0],s=si().memoizedState;return[r,s]},useMutableSource:Zm,useSyncExternalStore:Qm,useId:pg,unstable_isNewReconciler:!1},xM={readContext:ri,useCallback:fg,useContext:ri,useEffect:cf,useImperativeHandle:ug,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:dg,useReducer:lf,useRef:sg,useState:function(){return lf(ua)},useDebugValue:uf,useDeferredValue:function(r){var s=si();return an===null?s.memoizedState=r:hg(s,an.memoizedState,r)},useTransition:function(){var r=lf(ua)[0],s=si().memoizedState;return[r,s]},useMutableSource:Zm,useSyncExternalStore:Qm,useId:pg,unstable_isNewReconciler:!1};function gi(r,s){if(r&&r.defaultProps){s=re({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function ff(r,s,l,d){s=r.memoizedState,l=l(d,s),l=l==null?s:re({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var zl={isMounted:function(r){return(r=r._reactInternals)?ti(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var d=Nn(),g=Lr(r),y=Ki(d,g);y.payload=s,l!=null&&(y.callback=l),s=br(r,y,g),s!==null&&(xi(s,r,g,d),Il(s,r,g))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var d=Nn(),g=Lr(r),y=Ki(d,g);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=br(r,y,g),s!==null&&(xi(s,r,g,d),Il(s,r,g))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Nn(),d=Lr(r),g=Ki(l,d);g.tag=2,s!=null&&(g.callback=s),s=br(r,g,d),s!==null&&(xi(s,r,d,l),Il(s,r,d))}};function _g(r,s,l,d,g,y,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,y,w):s.prototype&&s.prototype.isPureReactComponent?!Zo(l,d)||!Zo(g,y):!0}function xg(r,s,l){var d=!1,g=wr,y=s.contextType;return typeof y=="object"&&y!==null?y=ri(y):(g=Bn(s)?ns:Mn.current,d=s.contextTypes,y=(d=d!=null)?Gs(r,g):wr),s=new s(l,y),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=y),s}function yg(r,s,l,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==r&&zl.enqueueReplaceState(s,s.state,null)}function df(r,s,l,d){var g=r.stateNode;g.props=l,g.state=r.memoizedState,g.refs={},Zu(r);var y=s.contextType;typeof y=="object"&&y!==null?g.context=ri(y):(y=Bn(s)?ns:Mn.current,g.context=Gs(r,y)),g.state=r.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(ff(r,s,y,l),g.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&zl.enqueueReplaceState(g,g.state,null),Nl(r,l,g,d),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function Ks(r,s){try{var l="",d=s;do l+=$e(d),d=d.return;while(d);var g=l}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:s,stack:g,digest:null}}function hf(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function pf(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var yM=typeof WeakMap=="function"?WeakMap:Map;function Sg(r,s,l){l=Ki(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Yl||(Yl=!0,Rf=d),pf(r,s)},l}function Mg(r,s,l){l=Ki(-1,l),l.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var g=s.value;l.payload=function(){return d(g)},l.callback=function(){pf(r,s)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){pf(r,s),typeof d!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function Eg(r,s,l){var d=r.pingCache;if(d===null){d=r.pingCache=new yM;var g=new Set;d.set(s,g)}else g=d.get(s),g===void 0&&(g=new Set,d.set(s,g));g.has(l)||(g.add(l),r=NM.bind(null,r,s,l),s.then(r,r))}function Tg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function wg(r,s,l,d,g){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Ki(-1,1),s.tag=2,br(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var SM=b.ReactCurrentOwner,kn=!1;function In(r,s,l,d){s.child=r===null?jm(s,null,l,d):Xs(s,r.child,l,d)}function Ag(r,s,l,d,g){l=l.render;var y=s.ref;return Ys(s,g),d=sf(r,s,l,d,y,g),l=of(),r!==null&&!kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,Zi(r,s,g)):(Xt&&l&&zu(s),s.flags|=1,In(r,s,d,g),s.child)}function Cg(r,s,l,d,g){if(r===null){var y=l.type;return typeof y=="function"&&!Ff(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,bg(r,s,y,d,g)):(r=ec(l.type,null,d,s,s.mode,g),r.ref=s.ref,r.return=s,s.child=r)}if(y=r.child,(r.lanes&g)===0){var w=y.memoizedProps;if(l=l.compare,l=l!==null?l:Zo,l(w,d)&&r.ref===s.ref)return Zi(r,s,g)}return s.flags|=1,r=Nr(y,d),r.ref=s.ref,r.return=s,s.child=r}function bg(r,s,l,d,g){if(r!==null){var y=r.memoizedProps;if(Zo(y,d)&&r.ref===s.ref)if(kn=!1,s.pendingProps=d=y,(r.lanes&g)!==0)(r.flags&131072)!==0&&(kn=!0);else return s.lanes=r.lanes,Zi(r,s,g)}return mf(r,s,l,d,g)}function Rg(r,s,l){var d=s.pendingProps,g=d.children,y=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Qs,$n),$n|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Vt(Qs,$n),$n|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:l,Vt(Qs,$n),$n|=d}else y!==null?(d=y.baseLanes|l,s.memoizedState=null):d=l,Vt(Qs,$n),$n|=d;return In(r,s,g,l),s.child}function Pg(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function mf(r,s,l,d,g){var y=Bn(l)?ns:Mn.current;return y=Gs(s,y),Ys(s,g),l=sf(r,s,l,d,y,g),d=of(),r!==null&&!kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,Zi(r,s,g)):(Xt&&d&&zu(s),s.flags|=1,In(r,s,l,g),s.child)}function Dg(r,s,l,d,g){if(Bn(l)){var y=!0;wl(s)}else y=!1;if(Ys(s,g),s.stateNode===null)Hl(r,s),xg(s,l,d),df(s,l,d,g),d=!0;else if(r===null){var w=s.stateNode,F=s.memoizedProps;w.props=F;var V=w.context,se=l.contextType;typeof se=="object"&&se!==null?se=ri(se):(se=Bn(l)?ns:Mn.current,se=Gs(s,se));var xe=l.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==d||V!==se)&&yg(s,w,d,se),Cr=!1;var ve=s.memoizedState;w.state=ve,Nl(s,d,w,g),V=s.memoizedState,F!==d||ve!==V||On.current||Cr?(typeof xe=="function"&&(ff(s,l,xe,d),V=s.memoizedState),(F=Cr||_g(s,l,F,d,ve,V,se))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),w.props=d,w.state=V,w.context=se,d=F):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,qm(r,s),F=s.memoizedProps,se=s.type===s.elementType?F:gi(s.type,F),w.props=se,Se=s.pendingProps,ve=w.context,V=l.contextType,typeof V=="object"&&V!==null?V=ri(V):(V=Bn(l)?ns:Mn.current,V=Gs(s,V));var Be=l.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Se||ve!==V)&&yg(s,w,d,V),Cr=!1,ve=s.memoizedState,w.state=ve,Nl(s,d,w,g);var je=s.memoizedState;F!==Se||ve!==je||On.current||Cr?(typeof Be=="function"&&(ff(s,l,Be,d),je=s.memoizedState),(se=Cr||_g(s,l,se,d,ve,je,V)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,je,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,je,V)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=je),w.props=d,w.state=je,w.context=V,d=se):(typeof w.componentDidUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(s.flags|=1024),d=!1)}return gf(r,s,l,d,y,g)}function gf(r,s,l,d,g,y){Pg(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return g&&Fm(s,l,!1),Zi(r,s,y);d=s.stateNode,SM.current=s;var F=w&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=Xs(s,r.child,null,y),s.child=Xs(s,null,F,y)):In(r,s,F,y),s.memoizedState=d.state,g&&Fm(s,l,!0),s.child}function Lg(r){var s=r.stateNode;s.pendingContext?Nm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Nm(r,s.context,!1),Qu(r,s.containerInfo)}function Ig(r,s,l,d,g){return js(),ju(g),s.flags|=256,In(r,s,l,d),s.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function _f(r){return{baseLanes:r,cachePool:null,transitions:null}}function Ng(r,s,l){var d=s.pendingProps,g=Yt.current,y=!1,w=(s.flags&128)!==0,F;if((F=w)||(F=r!==null&&r.memoizedState===null?!1:(g&2)!==0),F?(y=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),Vt(Yt,g&1),r===null)return Wu(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,r=d.fallback,y?(d=s.mode,y=s.child,w={mode:"hidden",children:w},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=w):y=tc(w,d,0,null),r=ds(r,d,l,null),y.return=s,r.return=s,y.sibling=r,s.child=y,s.child.memoizedState=_f(l),s.memoizedState=vf,r):xf(s,w));if(g=r.memoizedState,g!==null&&(F=g.dehydrated,F!==null))return MM(r,s,w,d,F,g,l);if(y){y=d.fallback,w=s.mode,g=r.child,F=g.sibling;var V={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==g?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=Nr(g,V),d.subtreeFlags=g.subtreeFlags&14680064),F!==null?y=Nr(F,y):(y=ds(y,w,l,null),y.flags|=2),y.return=s,d.return=s,d.sibling=y,s.child=d,d=y,y=s.child,w=r.child.memoizedState,w=w===null?_f(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},y.memoizedState=w,y.childLanes=r.childLanes&~l,s.memoizedState=vf,d}return y=r.child,r=y.sibling,d=Nr(y,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=d,s.memoizedState=null,d}function xf(r,s){return s=tc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Gl(r,s,l,d){return d!==null&&ju(d),Xs(s,r.child,null,l),r=xf(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function MM(r,s,l,d,g,y,w){if(l)return s.flags&256?(s.flags&=-257,d=hf(Error(t(422))),Gl(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(y=d.fallback,g=s.mode,d=tc({mode:"visible",children:d.children},g,0,null),y=ds(y,g,w,null),y.flags|=2,d.return=s,y.return=s,d.sibling=y,s.child=d,(s.mode&1)!==0&&Xs(s,r.child,null,w),s.child.memoizedState=_f(w),s.memoizedState=vf,y);if((s.mode&1)===0)return Gl(r,s,w,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var F=d.dgst;return d=F,y=Error(t(419)),d=hf(y,d,void 0),Gl(r,s,w,d)}if(F=(w&r.childLanes)!==0,kn||F){if(d=pn,d!==null){switch(w&-w){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|w))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,$i(r,g),xi(d,r,g,-1))}return Uf(),d=hf(Error(t(421))),Gl(r,s,w,d)}return g.data==="$?"?(s.flags|=128,s.child=r.child,s=UM.bind(null,r),g._reactRetry=s,null):(r=y.treeContext,Yn=Er(g.nextSibling),qn=s,Xt=!0,mi=null,r!==null&&(ni[ii++]=qi,ni[ii++]=Yi,ni[ii++]=is,qi=r.id,Yi=r.overflow,is=s),s=xf(s,d.children),s.flags|=4096,s)}function Ug(r,s,l){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),$u(r.return,s,l)}function yf(r,s,l,d,g){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=l,y.tailMode=g)}function Fg(r,s,l){var d=s.pendingProps,g=d.revealOrder,y=d.tail;if(In(r,s,d.children,l),d=Yt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ug(r,l,s);else if(r.tag===19)Ug(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Vt(Yt,d),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)r=l.alternate,r!==null&&Ul(r)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),yf(s,!1,g,l,y);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(r=g.alternate,r!==null&&Ul(r)===null){s.child=g;break}r=g.sibling,g.sibling=l,l=g,g=r}yf(s,!0,l,null,y);break;case"together":yf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hl(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Zi(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ls|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Nr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Nr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function EM(r,s,l){switch(s.tag){case 3:Lg(s),js();break;case 5:Km(s);break;case 1:Bn(s.type)&&wl(s);break;case 4:Qu(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,g=s.memoizedProps.value;Vt(Dl,d._currentValue),d._currentValue=g;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Vt(Yt,Yt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Ng(r,s,l):(Vt(Yt,Yt.current&1),r=Zi(r,s,l),r!==null?r.sibling:null);Vt(Yt,Yt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Fg(r,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Vt(Yt,Yt.current),d)break;return null;case 22:case 23:return s.lanes=0,Rg(r,s,l)}return Zi(r,s,l)}var Og,Sf,Bg,kg;Og=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sf=function(){},Bg=function(r,s,l,d){var g=r.memoizedProps;if(g!==d){r=s.stateNode,os(Di.current);var y=null;switch(l){case"input":g=xt(r,g),d=xt(r,d),y=[];break;case"select":g=re({},g,{value:void 0}),d=re({},d,{value:void 0}),y=[];break;case"textarea":g=Xe(r,g),d=Xe(r,d),y=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=Ml)}qe(l,d);var w;l=null;for(se in g)if(!d.hasOwnProperty(se)&&g.hasOwnProperty(se)&&g[se]!=null)if(se==="style"){var F=g[se];for(w in F)F.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?y||(y=[]):(y=y||[]).push(se,null));for(se in d){var V=d[se];if(F=g!=null?g[se]:void 0,d.hasOwnProperty(se)&&V!==F&&(V!=null||F!=null))if(se==="style")if(F){for(w in F)!F.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in V)V.hasOwnProperty(w)&&F[w]!==V[w]&&(l||(l={}),l[w]=V[w])}else l||(y||(y=[]),y.push(se,l)),l=V;else se==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(y=y||[]).push(se,V)):se==="children"?typeof V!="string"&&typeof V!="number"||(y=y||[]).push(se,""+V):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(V!=null&&se==="onScroll"&&zt("scroll",r),y||F===V||(y=[])):(y=y||[]).push(se,V))}l&&(y=y||[]).push("style",l);var se=y;(s.updateQueue=se)&&(s.flags|=4)}},kg=function(r,s,l,d){l!==d&&(s.flags|=4)};function da(r,s){if(!Xt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Tn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,d=0;if(s)for(var g=r.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=d,r.childLanes=l,s}function TM(r,s,l){var d=s.pendingProps;switch(Gu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return Bn(s.type)&&Tl(),Tn(s),null;case 3:return d=s.stateNode,$s(),Gt(On),Gt(Mn),tf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Rl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,mi!==null&&(Lf(mi),mi=null))),Sf(r,s),Tn(s),null;case 5:Ju(s);var g=os(aa.current);if(l=s.type,r!==null&&s.stateNode!=null)Bg(r,s,l,d,g),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(r=os(Di.current),Rl(s)){d=s.stateNode,l=s.type;var y=s.memoizedProps;switch(d[Pi]=s,d[na]=y,r=(s.mode&1)!==0,l){case"dialog":zt("cancel",d),zt("close",d);break;case"iframe":case"object":case"embed":zt("load",d);break;case"video":case"audio":for(g=0;g<Jo.length;g++)zt(Jo[g],d);break;case"source":zt("error",d);break;case"img":case"image":case"link":zt("error",d),zt("load",d);break;case"details":zt("toggle",d);break;case"input":Ct(d,y),zt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},zt("invalid",d);break;case"textarea":N(d,y),zt("invalid",d)}qe(l,y),g=null;for(var w in y)if(y.hasOwnProperty(w)){var F=y[w];w==="children"?typeof F=="string"?d.textContent!==F&&(y.suppressHydrationWarning!==!0&&Sl(d.textContent,F,r),g=["children",F]):typeof F=="number"&&d.textContent!==""+F&&(y.suppressHydrationWarning!==!0&&Sl(d.textContent,F,r),g=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&zt("scroll",d)}switch(l){case"input":at(d),z(d,y,!0);break;case"textarea":at(d),j(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=Ml)}d=g,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=he(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(l,{is:d.is}):(r=w.createElement(l),l==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,l),r[Pi]=s,r[na]=d,Og(r,s,!1,!1),s.stateNode=r;e:{switch(w=be(l,d),l){case"dialog":zt("cancel",r),zt("close",r),g=d;break;case"iframe":case"object":case"embed":zt("load",r),g=d;break;case"video":case"audio":for(g=0;g<Jo.length;g++)zt(Jo[g],r);g=d;break;case"source":zt("error",r),g=d;break;case"img":case"image":case"link":zt("error",r),zt("load",r),g=d;break;case"details":zt("toggle",r),g=d;break;case"input":Ct(r,d),g=xt(r,d),zt("invalid",r);break;case"option":g=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},g=re({},d,{value:void 0}),zt("invalid",r);break;case"textarea":N(r,d),g=Xe(r,d),zt("invalid",r);break;default:g=d}qe(l,g),F=g;for(y in F)if(F.hasOwnProperty(y)){var V=F[y];y==="style"?De(r,V):y==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ke(r,V)):y==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&Ae(r,V):typeof V=="number"&&Ae(r,""+V):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?V!=null&&y==="onScroll"&&zt("scroll",r):V!=null&&C(r,y,V,w))}switch(l){case"input":at(r),z(r,d,!1);break;case"textarea":at(r),j(r);break;case"option":d.value!=null&&r.setAttribute("value",""+_e(d.value));break;case"select":r.multiple=!!d.multiple,y=d.value,y!=null?Mt(r,!!d.multiple,y,!1):d.defaultValue!=null&&Mt(r,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Ml)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(r&&s.stateNode!=null)kg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=os(aa.current),os(Di.current),Rl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Pi]=s,(y=d.nodeValue!==l)&&(r=qn,r!==null))switch(r.tag){case 3:Sl(d.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Sl(d.nodeValue,l,(r.mode&1)!==0)}y&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Pi]=s,s.stateNode=d}return Tn(s),null;case 13:if(Gt(Yt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xt&&Yn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Gm(),js(),s.flags|=98560,y=!1;else if(y=Rl(s),d!==null&&d.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Pi]=s}else js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tn(s),y=!1}else mi!==null&&(Lf(mi),mi=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Yt.current&1)!==0?ln===0&&(ln=3):Uf())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return $s(),Sf(r,s),r===null&&ea(s.stateNode.containerInfo),Tn(s),null;case 10:return Yu(s.type._context),Tn(s),null;case 17:return Bn(s.type)&&Tl(),Tn(s),null;case 19:if(Gt(Yt),y=s.memoizedState,y===null)return Tn(s),null;if(d=(s.flags&128)!==0,w=y.rendering,w===null)if(d)da(y,!1);else{if(ln!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Ul(r),w!==null){for(s.flags|=128,da(y,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)y=l,r=d,y.flags&=14680066,w=y.alternate,w===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=w.childLanes,y.lanes=w.lanes,y.child=w.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=w.memoizedProps,y.memoizedState=w.memoizedState,y.updateQueue=w.updateQueue,y.type=w.type,r=w.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Vt(Yt,Yt.current&1|2),s.child}r=r.sibling}y.tail!==null&&qt()>Js&&(s.flags|=128,d=!0,da(y,!1),s.lanes=4194304)}else{if(!d)if(r=Ul(w),r!==null){if(s.flags|=128,d=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),da(y,!0),y.tail===null&&y.tailMode==="hidden"&&!w.alternate&&!Xt)return Tn(s),null}else 2*qt()-y.renderingStartTime>Js&&l!==1073741824&&(s.flags|=128,d=!0,da(y,!1),s.lanes=4194304);y.isBackwards?(w.sibling=s.child,s.child=w):(l=y.last,l!==null?l.sibling=w:s.child=w,y.last=w)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=qt(),s.sibling=null,l=Yt.current,Vt(Yt,d?l&1|2:l&1),s):(Tn(s),null);case 22:case 23:return Nf(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?($n&1073741824)!==0&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function wM(r,s){switch(Gu(s),s.tag){case 1:return Bn(s.type)&&Tl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return $s(),Gt(On),Gt(Mn),tf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Ju(s),null;case 13:if(Gt(Yt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));js()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Gt(Yt),null;case 4:return $s(),null;case 10:return Yu(s.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var Wl=!1,wn=!1,AM=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Zs(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Zt(r,s,d)}else l.current=null}function Mf(r,s,l){try{l()}catch(d){Zt(r,s,d)}}var Vg=!1;function CM(r,s){if(Iu=ul,r=_m(),wu(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var w=0,F=-1,V=-1,se=0,xe=0,Se=r,ve=null;t:for(;;){for(var Be;Se!==l||g!==0&&Se.nodeType!==3||(F=w+g),Se!==y||d!==0&&Se.nodeType!==3||(V=w+d),Se.nodeType===3&&(w+=Se.nodeValue.length),(Be=Se.firstChild)!==null;)ve=Se,Se=Be;for(;;){if(Se===r)break t;if(ve===l&&++se===g&&(F=w),ve===y&&++xe===d&&(V=w),(Be=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Be}l=F===-1||V===-1?null:{start:F,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nu={focusedElem:r,selectionRange:l},ul=!1,ze=s;ze!==null;)if(s=ze,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ze=r;else for(;ze!==null;){s=ze;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Jt=je.memoizedState,Z=s.stateNode,H=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Ye:gi(s.type,Ye),Jt);Z.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Zt(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,ze=r;break}ze=s.return}return je=Vg,Vg=!1,je}function ha(r,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&r)===r){var y=g.destroy;g.destroy=void 0,y!==void 0&&Mf(s,l,y)}g=g.next}while(g!==d)}}function jl(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Ef(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function zg(r){var s=r.alternate;s!==null&&(r.alternate=null,zg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Pi],delete s[na],delete s[Bu],delete s[cM],delete s[uM])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Gg(r){return r.tag===5||r.tag===3||r.tag===4}function Hg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Gg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Tf(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Ml));else if(d!==4&&(r=r.child,r!==null))for(Tf(r,s,l),r=r.sibling;r!==null;)Tf(r,s,l),r=r.sibling}function wf(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(wf(r,s,l),r=r.sibling;r!==null;)wf(r,s,l),r=r.sibling}var vn=null,vi=!1;function Rr(r,s,l){for(l=l.child;l!==null;)Wg(r,s,l),l=l.sibling}function Wg(r,s,l){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Oe,l)}catch{}switch(l.tag){case 5:wn||Zs(l,s);case 6:var d=vn,g=vi;vn=null,Rr(r,s,l),vn=d,vi=g,vn!==null&&(vi?(r=vn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(vi?(r=vn,l=l.stateNode,r.nodeType===8?Ou(r.parentNode,l):r.nodeType===1&&Ou(r,l),jo(r)):Ou(vn,l.stateNode));break;case 4:d=vn,g=vi,vn=l.stateNode.containerInfo,vi=!0,Rr(r,s,l),vn=d,vi=g;break;case 0:case 11:case 14:case 15:if(!wn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var y=g,w=y.destroy;y=y.tag,w!==void 0&&((y&2)!==0||(y&4)!==0)&&Mf(l,s,w),g=g.next}while(g!==d)}Rr(r,s,l);break;case 1:if(!wn&&(Zs(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(F){Zt(l,s,F)}Rr(r,s,l);break;case 21:Rr(r,s,l);break;case 22:l.mode&1?(wn=(d=wn)||l.memoizedState!==null,Rr(r,s,l),wn=d):Rr(r,s,l);break;default:Rr(r,s,l)}}function jg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new AM),s.forEach(function(d){var g=FM.bind(null,r,d);l.has(d)||(l.add(d),d.then(g,g))})}}function _i(r,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var y=r,w=s,F=w;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,vi=!1;break e;case 3:vn=F.stateNode.containerInfo,vi=!0;break e;case 4:vn=F.stateNode.containerInfo,vi=!0;break e}F=F.return}if(vn===null)throw Error(t(160));Wg(y,w,g),vn=null,vi=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(se){Zt(g,s,se)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Xg(s,r),s=s.sibling}function Xg(r,s){var l=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(_i(s,r),Ii(r),d&4){try{ha(3,r,r.return),jl(3,r)}catch(Ye){Zt(r,r.return,Ye)}try{ha(5,r,r.return)}catch(Ye){Zt(r,r.return,Ye)}}break;case 1:_i(s,r),Ii(r),d&512&&l!==null&&Zs(l,l.return);break;case 5:if(_i(s,r),Ii(r),d&512&&l!==null&&Zs(l,l.return),r.flags&32){var g=r.stateNode;try{Ae(g,"")}catch(Ye){Zt(r,r.return,Ye)}}if(d&4&&(g=r.stateNode,g!=null)){var y=r.memoizedProps,w=l!==null?l.memoizedProps:y,F=r.type,V=r.updateQueue;if(r.updateQueue=null,V!==null)try{F==="input"&&y.type==="radio"&&y.name!=null&&lt(g,y),be(F,w);var se=be(F,y);for(w=0;w<V.length;w+=2){var xe=V[w],Se=V[w+1];xe==="style"?De(g,Se):xe==="dangerouslySetInnerHTML"?Ke(g,Se):xe==="children"?Ae(g,Se):C(g,xe,Se,se)}switch(F){case"input":Wt(g,y);break;case"textarea":T(g,y);break;case"select":var ve=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var Be=y.value;Be!=null?Mt(g,!!y.multiple,Be,!1):ve!==!!y.multiple&&(y.defaultValue!=null?Mt(g,!!y.multiple,y.defaultValue,!0):Mt(g,!!y.multiple,y.multiple?[]:"",!1))}g[na]=y}catch(Ye){Zt(r,r.return,Ye)}}break;case 6:if(_i(s,r),Ii(r),d&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,y=r.memoizedProps;try{g.nodeValue=y}catch(Ye){Zt(r,r.return,Ye)}}break;case 3:if(_i(s,r),Ii(r),d&4&&l!==null&&l.memoizedState.isDehydrated)try{jo(s.containerInfo)}catch(Ye){Zt(r,r.return,Ye)}break;case 4:_i(s,r),Ii(r);break;case 13:_i(s,r),Ii(r),g=r.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(bf=qt())),d&4&&jg(r);break;case 22:if(xe=l!==null&&l.memoizedState!==null,r.mode&1?(wn=(se=wn)||xe,_i(s,r),wn=se):_i(s,r),Ii(r),d&8192){if(se=r.memoizedState!==null,(r.stateNode.isHidden=se)&&!xe&&(r.mode&1)!==0)for(ze=r,xe=r.child;xe!==null;){for(Se=ze=xe;ze!==null;){switch(ve=ze,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:ha(4,ve,ve.return);break;case 1:Zs(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){d=ve,l=ve.return;try{s=d,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(Ye){Zt(d,l,Ye)}}break;case 5:Zs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){$g(Se);continue}}Be!==null?(Be.return=ve,ze=Be):$g(Se)}xe=xe.sibling}e:for(xe=null,Se=r;;){if(Se.tag===5){if(xe===null){xe=Se;try{g=Se.stateNode,se?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(F=Se.stateNode,V=Se.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=Me("display",w))}catch(Ye){Zt(r,r.return,Ye)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(Ye){Zt(r,r.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===r)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===r)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===r)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:_i(s,r),Ii(r),d&4&&jg(r);break;case 21:break;default:_i(s,r),Ii(r)}}function Ii(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Gg(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(Ae(g,""),d.flags&=-33);var y=Hg(r);wf(r,y,g);break;case 3:case 4:var w=d.stateNode.containerInfo,F=Hg(r);Tf(r,F,w);break;default:throw Error(t(161))}}catch(V){Zt(r,r.return,V)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function bM(r,s,l){ze=r,qg(r)}function qg(r,s,l){for(var d=(r.mode&1)!==0;ze!==null;){var g=ze,y=g.child;if(g.tag===22&&d){var w=g.memoizedState!==null||Wl;if(!w){var F=g.alternate,V=F!==null&&F.memoizedState!==null||wn;F=Wl;var se=wn;if(Wl=w,(wn=V)&&!se)for(ze=g;ze!==null;)w=ze,V=w.child,w.tag===22&&w.memoizedState!==null?Kg(g):V!==null?(V.return=w,ze=V):Kg(g);for(;y!==null;)ze=y,qg(y),y=y.sibling;ze=g,Wl=F,wn=se}Yg(r)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,ze=y):Yg(r)}}function Yg(r){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:wn||jl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!wn)if(l===null)d.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:gi(s.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&$m(s,y,d);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}$m(s,w,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var se=s.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&jo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||s.flags&512&&Ef(s)}catch(ve){Zt(s,s.return,ve)}}if(s===r){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function $g(r){for(;ze!==null;){var s=ze;if(s===r){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function Kg(r){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{jl(4,s)}catch(V){Zt(s,l,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var g=s.return;try{d.componentDidMount()}catch(V){Zt(s,g,V)}}var y=s.return;try{Ef(s)}catch(V){Zt(s,y,V)}break;case 5:var w=s.return;try{Ef(s)}catch(V){Zt(s,w,V)}}}catch(V){Zt(s,s.return,V)}if(s===r){ze=null;break}var F=s.sibling;if(F!==null){F.return=s.return,ze=F;break}ze=s.return}}var RM=Math.ceil,Xl=b.ReactCurrentDispatcher,Af=b.ReactCurrentOwner,oi=b.ReactCurrentBatchConfig,wt=0,pn=null,nn=null,_n=0,$n=0,Qs=Tr(0),ln=0,pa=null,ls=0,ql=0,Cf=0,ma=null,Vn=null,bf=0,Js=1/0,Qi=null,Yl=!1,Rf=null,Pr=null,$l=!1,Dr=null,Kl=0,ga=0,Pf=null,Zl=-1,Ql=0;function Nn(){return(wt&6)!==0?qt():Zl!==-1?Zl:Zl=qt()}function Lr(r){return(r.mode&1)===0?1:(wt&2)!==0&&_n!==0?_n&-_n:dM.transition!==null?(Ql===0&&(Ql=Sn()),Ql):(r=ct,r!==0||(r=window.event,r=r===void 0?16:Qp(r.type)),r)}function xi(r,s,l,d){if(50<ga)throw ga=0,Pf=null,Error(t(185));on(r,l,d),((wt&2)===0||r!==pn)&&(r===pn&&((wt&2)===0&&(ql|=l),ln===4&&Ir(r,_n)),zn(r,d),l===1&&wt===0&&(s.mode&1)===0&&(Js=qt()+500,Al&&Ar()))}function zn(r,s){var l=r.callbackNode;Dt(r,s);var d=bt(r,r===pn?_n:0);if(d===0)l!==null&&al(l),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(l!=null&&al(l),s===1)r.tag===0?fM(Qg.bind(null,r)):Om(Qg.bind(null,r)),aM(function(){(wt&6)===0&&Ar()}),l=null;else{switch(Ln(d)){case 1:l=q;break;case 4:l=ae;break;case 16:l=ne;break;case 536870912:l=Le;break;default:l=ne}l=o0(l,Zg.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Zg(r,s){if(Zl=-1,Ql=0,(wt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(eo()&&r.callbackNode!==l)return null;var d=bt(r,r===pn?_n:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Jl(r,d);else{s=d;var g=wt;wt|=2;var y=e0();(pn!==r||_n!==s)&&(Qi=null,Js=qt()+500,us(r,s));do try{LM();break}catch(F){Jg(r,F)}while(!0);qu(),Xl.current=y,wt=g,nn!==null?s=0:(pn=null,_n=0,s=ln)}if(s!==0){if(s===2&&(g=_t(r),g!==0&&(d=g,s=Df(r,g))),s===1)throw l=pa,us(r,0),Ir(r,d),zn(r,qt()),l;if(s===6)Ir(r,d);else{if(g=r.current.alternate,(d&30)===0&&!PM(g)&&(s=Jl(r,d),s===2&&(y=_t(r),y!==0&&(d=y,s=Df(r,y))),s===1))throw l=pa,us(r,0),Ir(r,d),zn(r,qt()),l;switch(r.finishedWork=g,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:fs(r,Vn,Qi);break;case 3:if(Ir(r,d),(d&130023424)===d&&(s=bf+500-qt(),10<s)){if(bt(r,0)!==0)break;if(g=r.suspendedLanes,(g&d)!==d){Nn(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=Fu(fs.bind(null,r,Vn,Qi),s);break}fs(r,Vn,Qi);break;case 4:if(Ir(r,d),(d&4194240)===d)break;for(s=r.eventTimes,g=-1;0<d;){var w=31-ke(d);y=1<<w,w=s[w],w>g&&(g=w),d&=~y}if(d=g,d=qt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*RM(d/1960))-d,10<d){r.timeoutHandle=Fu(fs.bind(null,r,Vn,Qi),d);break}fs(r,Vn,Qi);break;case 5:fs(r,Vn,Qi);break;default:throw Error(t(329))}}}return zn(r,qt()),r.callbackNode===l?Zg.bind(null,r):null}function Df(r,s){var l=ma;return r.current.memoizedState.isDehydrated&&(us(r,s).flags|=256),r=Jl(r,s),r!==2&&(s=Vn,Vn=l,s!==null&&Lf(s)),r}function Lf(r){Vn===null?Vn=r:Vn.push.apply(Vn,r)}function PM(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],y=g.getSnapshot;g=g.value;try{if(!pi(y(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ir(r,s){for(s&=~Cf,s&=~ql,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-ke(s),d=1<<l;r[l]=-1,s&=~d}}function Qg(r){if((wt&6)!==0)throw Error(t(327));eo();var s=bt(r,0);if((s&1)===0)return zn(r,qt()),null;var l=Jl(r,s);if(r.tag!==0&&l===2){var d=_t(r);d!==0&&(s=d,l=Df(r,d))}if(l===1)throw l=pa,us(r,0),Ir(r,s),zn(r,qt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,fs(r,Vn,Qi),zn(r,qt()),null}function If(r,s){var l=wt;wt|=1;try{return r(s)}finally{wt=l,wt===0&&(Js=qt()+500,Al&&Ar())}}function cs(r){Dr!==null&&Dr.tag===0&&(wt&6)===0&&eo();var s=wt;wt|=1;var l=oi.transition,d=ct;try{if(oi.transition=null,ct=1,r)return r()}finally{ct=d,oi.transition=l,wt=s,(wt&6)===0&&Ar()}}function Nf(){$n=Qs.current,Gt(Qs)}function us(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,oM(l)),nn!==null)for(l=nn.return;l!==null;){var d=l;switch(Gu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Tl();break;case 3:$s(),Gt(On),Gt(Mn),tf();break;case 5:Ju(d);break;case 4:$s();break;case 13:Gt(Yt);break;case 19:Gt(Yt);break;case 10:Yu(d.type._context);break;case 22:case 23:Nf()}l=l.return}if(pn=r,nn=r=Nr(r.current,null),_n=$n=s,ln=0,pa=null,Cf=ql=ls=0,Vn=ma=null,ss!==null){for(s=0;s<ss.length;s++)if(l=ss[s],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,y=l.pending;if(y!==null){var w=y.next;y.next=g,d.next=w}l.pending=d}ss=null}return r}function Jg(r,s){do{var l=nn;try{if(qu(),Fl.current=Vl,Ol){for(var d=$t.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}Ol=!1}if(as=0,hn=an=$t=null,la=!1,ca=0,Af.current=null,l===null||l.return===null){ln=1,pa=s,nn=null;break}e:{var y=r,w=l.return,F=l,V=s;if(s=_n,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var se=V,xe=F,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=Tg(w);if(Be!==null){Be.flags&=-257,wg(Be,w,F,y,s),Be.mode&1&&Eg(y,se,s),s=Be,V=se;var je=s.updateQueue;if(je===null){var Ye=new Set;Ye.add(V),s.updateQueue=Ye}else je.add(V);break e}else{if((s&1)===0){Eg(y,se,s),Uf();break e}V=Error(t(426))}}else if(Xt&&F.mode&1){var Jt=Tg(w);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),wg(Jt,w,F,y,s),ju(Ks(V,F));break e}}y=V=Ks(V,F),ln!==4&&(ln=2),ma===null?ma=[y]:ma.push(y),y=w;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var Z=Sg(y,V,s);Ym(y,Z);break e;case 1:F=V;var H=y.type,ee=y.stateNode;if((y.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Pr===null||!Pr.has(ee)))){y.flags|=65536,s&=-s,y.lanes|=s;var Te=Mg(y,F,s);Ym(y,Te);break e}}y=y.return}while(y!==null)}n0(l)}catch(Ze){s=Ze,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function e0(){var r=Xl.current;return Xl.current=Vl,r===null?Vl:r}function Uf(){(ln===0||ln===3||ln===2)&&(ln=4),pn===null||(ls&268435455)===0&&(ql&268435455)===0||Ir(pn,_n)}function Jl(r,s){var l=wt;wt|=2;var d=e0();(pn!==r||_n!==s)&&(Qi=null,us(r,s));do try{DM();break}catch(g){Jg(r,g)}while(!0);if(qu(),wt=l,Xl.current=d,nn!==null)throw Error(t(261));return pn=null,_n=0,ln}function DM(){for(;nn!==null;)t0(nn)}function LM(){for(;nn!==null&&!fu();)t0(nn)}function t0(r){var s=s0(r.alternate,r,$n);r.memoizedProps=r.pendingProps,s===null?n0(r):nn=s,Af.current=null}function n0(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=TM(l,s,$n),l!==null){nn=l;return}}else{if(l=wM(l,s),l!==null){l.flags&=32767,nn=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{ln=6,nn=null;return}}if(s=s.sibling,s!==null){nn=s;return}nn=s=r}while(s!==null);ln===0&&(ln=5)}function fs(r,s,l){var d=ct,g=oi.transition;try{oi.transition=null,ct=1,IM(r,s,l,d)}finally{oi.transition=g,ct=d}return null}function IM(r,s,l,d){do eo();while(Dr!==null);if((wt&6)!==0)throw Error(t(327));l=r.finishedWork;var g=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(es(r,y),r===pn&&(nn=pn=null,_n=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$l||($l=!0,o0(ne,function(){return eo(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=oi.transition,oi.transition=null;var w=ct;ct=1;var F=wt;wt|=4,Af.current=null,CM(r,l),Xg(l,r),JS(Nu),ul=!!Iu,Nu=Iu=null,r.current=l,bM(l),du(),wt=F,ct=w,oi.transition=y}else r.current=l;if($l&&($l=!1,Dr=r,Kl=g),y=r.pendingLanes,y===0&&(Pr=null),Ge(l.stateNode),zn(r,qt()),s!==null)for(d=r.onRecoverableError,l=0;l<s.length;l++)g=s[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(Yl)throw Yl=!1,r=Rf,Rf=null,r;return(Kl&1)!==0&&r.tag!==0&&eo(),y=r.pendingLanes,(y&1)!==0?r===Pf?ga++:(ga=0,Pf=r):ga=0,Ar(),null}function eo(){if(Dr!==null){var r=Ln(Kl),s=oi.transition,l=ct;try{if(oi.transition=null,ct=16>r?16:r,Dr===null)var d=!1;else{if(r=Dr,Dr=null,Kl=0,(wt&6)!==0)throw Error(t(331));var g=wt;for(wt|=4,ze=r.current;ze!==null;){var y=ze,w=y.child;if((ze.flags&16)!==0){var F=y.deletions;if(F!==null){for(var V=0;V<F.length;V++){var se=F[V];for(ze=se;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:ha(8,xe,y)}var Se=xe.child;if(Se!==null)Se.return=xe,ze=Se;else for(;ze!==null;){xe=ze;var ve=xe.sibling,Be=xe.return;if(zg(xe),xe===se){ze=null;break}if(ve!==null){ve.return=Be,ze=ve;break}ze=Be}}}var je=y.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Jt=Ye.sibling;Ye.sibling=null,Ye=Jt}while(Ye!==null)}}ze=y}}if((y.subtreeFlags&2064)!==0&&w!==null)w.return=y,ze=w;else e:for(;ze!==null;){if(y=ze,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ha(9,y,y.return)}var Z=y.sibling;if(Z!==null){Z.return=y.return,ze=Z;break e}ze=y.return}}var H=r.current;for(ze=H;ze!==null;){w=ze;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,ze=ee;else e:for(w=H;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:jl(9,F)}}catch(Ze){Zt(F,F.return,Ze)}if(F===w){ze=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,ze=Te;break e}ze=F.return}}if(wt=g,Ar(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Oe,r)}catch{}d=!0}return d}finally{ct=l,oi.transition=s}}return!1}function i0(r,s,l){s=Ks(l,s),s=Sg(r,s,1),r=br(r,s,1),s=Nn(),r!==null&&(on(r,1,s),zn(r,s))}function Zt(r,s,l){if(r.tag===3)i0(r,r,l);else for(;s!==null;){if(s.tag===3){i0(s,r,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Pr===null||!Pr.has(d))){r=Ks(l,r),r=Mg(s,r,1),s=br(s,r,1),r=Nn(),s!==null&&(on(s,1,r),zn(s,r));break}}s=s.return}}function NM(r,s,l){var d=r.pingCache;d!==null&&d.delete(s),s=Nn(),r.pingedLanes|=r.suspendedLanes&l,pn===r&&(_n&l)===l&&(ln===4||ln===3&&(_n&130023424)===_n&&500>qt()-bf?us(r,0):Cf|=l),zn(r,s)}function r0(r,s){s===0&&((r.mode&1)===0?s=1:(s=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var l=Nn();r=$i(r,s),r!==null&&(on(r,s,l),zn(r,l))}function UM(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),r0(r,l)}function FM(r,s){var l=0;switch(r.tag){case 13:var d=r.stateNode,g=r.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),r0(r,l)}var s0;s0=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||On.current)kn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return kn=!1,EM(r,s,l);kn=(r.flags&131072)!==0}else kn=!1,Xt&&(s.flags&1048576)!==0&&Bm(s,bl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Hl(r,s),r=s.pendingProps;var g=Gs(s,Mn.current);Ys(s,l),g=sf(null,s,d,r,g,l);var y=of();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(d)?(y=!0,wl(s)):y=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Zu(s),g.updater=zl,s.stateNode=g,g._reactInternals=s,df(s,d,r,l),s=gf(null,s,d,!0,y,l)):(s.tag=0,Xt&&y&&zu(s),In(null,s,g,l),s=s.child),s;case 16:d=s.elementType;e:{switch(Hl(r,s),r=s.pendingProps,g=d._init,d=g(d._payload),s.type=d,g=s.tag=BM(d),r=gi(d,r),g){case 0:s=mf(null,s,d,r,l);break e;case 1:s=Dg(null,s,d,r,l);break e;case 11:s=Ag(null,s,d,r,l);break e;case 14:s=Cg(null,s,d,gi(d.type,r),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:gi(d,g),mf(r,s,d,g,l);case 1:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:gi(d,g),Dg(r,s,d,g,l);case 3:e:{if(Lg(s),r===null)throw Error(t(387));d=s.pendingProps,y=s.memoizedState,g=y.element,qm(r,s),Nl(s,d,null,l);var w=s.memoizedState;if(d=w.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){g=Ks(Error(t(423)),s),s=Ig(r,s,d,l,g);break e}else if(d!==g){g=Ks(Error(t(424)),s),s=Ig(r,s,d,l,g);break e}else for(Yn=Er(s.stateNode.containerInfo.firstChild),qn=s,Xt=!0,mi=null,l=jm(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(js(),d===g){s=Zi(r,s,l);break e}In(r,s,d,l)}s=s.child}return s;case 5:return Km(s),r===null&&Wu(s),d=s.type,g=s.pendingProps,y=r!==null?r.memoizedProps:null,w=g.children,Uu(d,g)?w=null:y!==null&&Uu(d,y)&&(s.flags|=32),Pg(r,s),In(r,s,w,l),s.child;case 6:return r===null&&Wu(s),null;case 13:return Ng(r,s,l);case 4:return Qu(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=Xs(s,null,d,l):In(r,s,d,l),s.child;case 11:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:gi(d,g),Ag(r,s,d,g,l);case 7:return In(r,s,s.pendingProps,l),s.child;case 8:return In(r,s,s.pendingProps.children,l),s.child;case 12:return In(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,g=s.pendingProps,y=s.memoizedProps,w=g.value,Vt(Dl,d._currentValue),d._currentValue=w,y!==null)if(pi(y.value,w)){if(y.children===g.children&&!On.current){s=Zi(r,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var F=y.dependencies;if(F!==null){w=y.child;for(var V=F.firstContext;V!==null;){if(V.context===d){if(y.tag===1){V=Ki(-1,l&-l),V.tag=2;var se=y.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),se.pending=V}}y.lanes|=l,V=y.alternate,V!==null&&(V.lanes|=l),$u(y.return,l,s),F.lanes|=l;break}V=V.next}}else if(y.tag===10)w=y.type===s.type?null:y.child;else if(y.tag===18){if(w=y.return,w===null)throw Error(t(341));w.lanes|=l,F=w.alternate,F!==null&&(F.lanes|=l),$u(w,l,s),w=y.sibling}else w=y.child;if(w!==null)w.return=y;else for(w=y;w!==null;){if(w===s){w=null;break}if(y=w.sibling,y!==null){y.return=w.return,w=y;break}w=w.return}y=w}In(r,s,g.children,l),s=s.child}return s;case 9:return g=s.type,d=s.pendingProps.children,Ys(s,l),g=ri(g),d=d(g),s.flags|=1,In(r,s,d,l),s.child;case 14:return d=s.type,g=gi(d,s.pendingProps),g=gi(d.type,g),Cg(r,s,d,g,l);case 15:return bg(r,s,s.type,s.pendingProps,l);case 17:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:gi(d,g),Hl(r,s),s.tag=1,Bn(d)?(r=!0,wl(s)):r=!1,Ys(s,l),xg(s,d,g),df(s,d,g,l),gf(null,s,d,!0,r,l);case 19:return Fg(r,s,l);case 22:return Rg(r,s,l)}throw Error(t(156,s.tag))};function o0(r,s){return ol(r,s)}function OM(r,s,l,d){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(r,s,l,d){return new OM(r,s,l,d)}function Ff(r){return r=r.prototype,!(!r||!r.isReactComponent)}function BM(r){if(typeof r=="function")return Ff(r)?1:0;if(r!=null){if(r=r.$$typeof,r===K)return 11;if(r===le)return 14}return 2}function Nr(r,s){var l=r.alternate;return l===null?(l=ai(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function ec(r,s,l,d,g,y){var w=2;if(d=r,typeof r=="function")Ff(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case U:return ds(l.children,g,y,s);case k:w=8,g|=8;break;case A:return r=ai(12,l,s,g|2),r.elementType=A,r.lanes=y,r;case Y:return r=ai(13,l,s,g),r.elementType=Y,r.lanes=y,r;case X:return r=ai(19,l,s,g),r.elementType=X,r.lanes=y,r;case $:return tc(l,g,y,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case L:w=10;break e;case B:w=9;break e;case K:w=11;break e;case le:w=14;break e;case Q:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=ai(w,l,s,g),s.elementType=r,s.type=d,s.lanes=y,s}function ds(r,s,l,d){return r=ai(7,r,d,s),r.lanes=l,r}function tc(r,s,l,d){return r=ai(22,r,d,s),r.elementType=$,r.lanes=l,r.stateNode={isHidden:!1},r}function Of(r,s,l){return r=ai(6,r,null,s),r.lanes=l,r}function Bf(r,s,l){return s=ai(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function kM(r,s,l,d,g){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function kf(r,s,l,d,g,y,w,F,V){return r=new kM(r,s,l,F,V),s===1?(s=1,y===!0&&(s|=8)):s=0,y=ai(3,null,null,s),r.current=y,y.stateNode=r,y.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(y),r}function VM(r,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:d==null?null:""+d,children:r,containerInfo:s,implementation:l}}function a0(r){if(!r)return wr;r=r._reactInternals;e:{if(ti(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Bn(l))return Um(r,l,s)}return s}function l0(r,s,l,d,g,y,w,F,V){return r=kf(l,d,!0,r,g,y,w,F,V),r.context=a0(null),l=r.current,d=Nn(),g=Lr(l),y=Ki(d,g),y.callback=s??null,br(l,y,g),r.current.lanes=g,on(r,g,d),zn(r,d),r}function nc(r,s,l,d){var g=s.current,y=Nn(),w=Lr(g);return l=a0(l),s.context===null?s.context=l:s.pendingContext=l,s=Ki(y,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=br(g,s,w),r!==null&&(xi(r,g,w,y),Il(r,g,w)),w}function ic(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function c0(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Vf(r,s){c0(r,s),(r=r.alternate)&&c0(r,s)}function zM(){return null}var u0=typeof reportError=="function"?reportError:function(r){console.error(r)};function zf(r){this._internalRoot=r}rc.prototype.render=zf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));nc(r,s,null,null)},rc.prototype.unmount=zf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;cs(function(){nc(null,r,null,null)}),s[ji]=null}};function rc(r){this._internalRoot=r}rc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ri();r={blockedOn:null,target:r,priority:s};for(var l=0;l<yr.length&&s!==0&&s<yr[l].priority;l++);yr.splice(l,0,r),l===0&&Kp(r)}};function Gf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function sc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function f0(){}function GM(r,s,l,d,g){if(g){if(typeof d=="function"){var y=d;d=function(){var se=ic(w);y.call(se)}}var w=l0(s,d,r,0,null,!1,!1,"",f0);return r._reactRootContainer=w,r[ji]=w.current,ea(r.nodeType===8?r.parentNode:r),cs(),w}for(;g=r.lastChild;)r.removeChild(g);if(typeof d=="function"){var F=d;d=function(){var se=ic(V);F.call(se)}}var V=kf(r,0,!1,null,null,!1,!1,"",f0);return r._reactRootContainer=V,r[ji]=V.current,ea(r.nodeType===8?r.parentNode:r),cs(function(){nc(s,V,l,d)}),V}function oc(r,s,l,d,g){var y=l._reactRootContainer;if(y){var w=y;if(typeof g=="function"){var F=g;g=function(){var V=ic(w);F.call(V)}}nc(s,w,r,g)}else w=GM(l,s,r,g,d);return ic(w)}fn=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ft(s.pendingLanes);l!==0&&(Lt(s,l|1),zn(s,qt()),(wt&6)===0&&(Js=qt()+500,Ar()))}break;case 13:cs(function(){var d=$i(r,1);if(d!==null){var g=Nn();xi(d,r,1,g)}}),Vf(r,1)}},dn=function(r){if(r.tag===13){var s=$i(r,134217728);if(s!==null){var l=Nn();xi(s,r,134217728,l)}Vf(r,134217728)}},Ls=function(r){if(r.tag===13){var s=Lr(r),l=$i(r,s);if(l!==null){var d=Nn();xi(l,r,s,d)}Vf(r,s)}},Ri=function(){return ct},Yp=function(r,s){var l=ct;try{return ct=r,s()}finally{ct=l}},Ne=function(r,s,l){switch(s){case"input":if(Wt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==r&&d.form===r.form){var g=El(d);if(!g)throw Error(t(90));kt(d),Wt(d,g)}}}break;case"textarea":T(r,l);break;case"select":s=l.value,s!=null&&Mt(r,!!l.multiple,s,!1)}},st=If,It=cs;var HM={usingClientEntryPoint:!1,Events:[ia,Vs,El,me,Re,If]},va={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WM={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Vo(r),r===null?null:r.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||zM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Oe=ac.inject(WM),Ce=ac}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HM,Gn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(s))throw Error(t(200));return VM(r,s,null,l)},Gn.createRoot=function(r,s){if(!Gf(r))throw Error(t(299));var l=!1,d="",g=u0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=kf(r,1,!1,null,null,l,!1,d,g),r[ji]=s.current,ea(r.nodeType===8?r.parentNode:r),new zf(s)},Gn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Vo(s),r=r===null?null:r.stateNode,r},Gn.flushSync=function(r){return cs(r)},Gn.hydrate=function(r,s,l){if(!sc(s))throw Error(t(200));return oc(null,r,s,!0,l)},Gn.hydrateRoot=function(r,s,l){if(!Gf(r))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,y="",w=u0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=l0(s,null,r,1,l??null,g,!1,y,w),r[ji]=s.current,ea(r),d)for(r=0;r<d.length;r++)l=d[r],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new rc(s)},Gn.render=function(r,s,l){if(!sc(s))throw Error(t(200));return oc(null,r,s,!1,l)},Gn.unmountComponentAtNode=function(r){if(!sc(r))throw Error(t(40));return r._reactRootContainer?(cs(function(){oc(null,null,r,!1,function(){r._reactRootContainer=null,r[ji]=null})}),!0):!1},Gn.unstable_batchedUpdates=If,Gn.unstable_renderSubtreeIntoContainer=function(r,s,l,d){if(!sc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return oc(r,s,l,!1,d)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var x0;function QM(){if(x0)return jf.exports;x0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),jf.exports=ZM(),jf.exports}var y0;function JM(){if(y0)return lc;y0=1;var n=QM();return lc.createRoot=n.createRoot,lc.hydrateRoot=n.hydrateRoot,lc}var e1=JM();const t1="modulepreload",n1=function(n){return"/"+n},S0={},pr=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=c(t.map(h=>{if(h=n1(h),h in S0)return;S0[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":t1,p||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),p)return new Promise((_,M)=>{v.addEventListener("load",_),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})},i1={es:{nav:{home:"Inicio",profile:"Perfil",experience:"Experiencia",skills:"Skills",certifications:"Certificaciones",contact:"Contacto",downloadCV:"Descargar CV"},hero:{available:"Disponible para trabajar",roles:["Desarrollador Jr.","Cloud Enthusiast","Apasionado por el código","Problem Solver"],description:"Egresado de Ingeniería en TI con experiencia en",support:"soporte técnico",networks:"redes",systems:"sistemas de misión crítica",passionate:"Apasionado por resolver problemas complejos.",contactMe:"Contáctame",downloadCV:"Descargar CV"},stats:{certifications:"Certificaciones",yearsExp:"Años Experiencia",technologies:"Tecnologías",commitment:"Ganas de Aprender"},about:{title:"Perfil Profesional",highlights:{graduated:"Egresado Dic 2025",software:"Desarrollo de Software",data:"Gestión de Datos",languages:"Java / Python"},description1:"Ingeniero en Tecnologías y Sistemas de Información (Egresado Diciembre 2025) con un perfil técnico orientado al Desarrollo de Software y Gestión de Datos. Cuento con experiencia operativa en la manipulación de bases de datos críticas mediante scripts en SQL Server y sólidos fundamentos en Lógica de Programación y POO (Java/Python).",description2:"Poseo competencias en tecnologías web (HTML/CSS/JS) y capacidad probada para el diagnóstico técnico (debugging) y documentación de incidencias.",objective:"Objetivo:",objectiveText:"Integrarme como Desarrollador de Software, aportando una rápida curva de aprendizaje, adaptabilidad a nuevos lenguajes y enfoque en la calidad del código."},experience:{title:"Experiencia Profesional",present:"Presente"},education:{title:"Educación",technicalKnowledge:"Conocimientos Técnicos"},skills:{title:"Stack Tecnológico",subtitle:"Tecnologías que manejo como desarrollador Jr. • Incluye el stack usado para este portafolio",builtWith:"Este portafolio fue construido con:"},certifications:{title:"Certificaciones",subtitle:"Haz clic en cada categoría para ver los certificados",certificates:"certificados",certificate:"certificado"},contact:{title:"Contacto",subtitle:"¿Interesado en trabajar conmigo? ¡Hablemos!",email:"Correo Electrónico",phone:"Teléfono",location:"Ubicación",sendMessage:"Enviar Mensaje"},footer:{rights:"Todos los derechos reservados.",builtWith:"Construido con"},theme:{dark:"Oscuro",light:"Claro"}},en:{nav:{home:"Home",profile:"Profile",experience:"Experience",skills:"Skills",certifications:"Certifications",contact:"Contact",downloadCV:"Download CV"},hero:{available:"Available for work",roles:["Jr. Developer","Cloud Enthusiast","Passionate about code","Problem Solver"],description:"IT Engineering graduate with experience in",support:"technical support",networks:"networks",systems:"mission-critical systems",passionate:"Passionate about solving complex problems.",contactMe:"Contact Me",downloadCV:"Download CV"},stats:{certifications:"Certifications",yearsExp:"Years Experience",technologies:"Technologies",commitment:"Eager to Learn"},about:{title:"Professional Profile",highlights:{graduated:"Graduated Dec 2025",software:"Software Development",data:"Data Management",languages:"Java / Python"},description1:"Information Technology and Systems Engineer (Graduated December 2025) with a technical profile focused on Software Development and Data Management. I have operational experience in handling critical databases through SQL Server scripts and solid foundations in Programming Logic and OOP (Java/Python).",description2:"I have competencies in web technologies (HTML/CSS/JS) and proven ability for technical diagnosis (debugging) and incident documentation.",objective:"Objective:",objectiveText:"Join as a Software Developer, bringing a fast learning curve, adaptability to new languages, and focus on code quality."},experience:{title:"Professional Experience",present:"Present"},education:{title:"Education",technicalKnowledge:"Technical Knowledge"},skills:{title:"Tech Stack",subtitle:"Technologies I handle as a Jr. developer • Includes the stack used for this portfolio",builtWith:"This portfolio was built with:"},certifications:{title:"Certifications",subtitle:"Click on each category to see the certificates",certificates:"certificates",certificate:"certificate"},contact:{title:"Contact",subtitle:"Interested in working with me? Let's talk!",email:"Email",phone:"Phone",location:"Location",sendMessage:"Send Message"},footer:{rights:"All rights reserved.",builtWith:"Built with"},theme:{dark:"Dark",light:"Light"}}},Z_=pe.createContext();function r1({children:n}){const[e,t]=pe.useState(()=>typeof window<"u"&&localStorage.getItem("language")||"es");pe.useEffect(()=>{localStorage.setItem("language",e),document.documentElement.lang=e},[e]);const i=()=>{t(a=>a==="es"?"en":"es")},o=i1[e];return ce.jsx(Z_.Provider,{value:{language:e,toggleLanguage:i,t:o},children:n})}function eu(){const n=pe.useContext(Z_);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n}const Q_=pe.createContext();function s1({children:n}){const[e,t]=pe.useState(()=>typeof window<"u"&&localStorage.getItem("theme")||"dark");pe.useEffect(()=>{localStorage.setItem("theme",e),e==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.remove("light-theme")},[e]);const i=()=>{t(o=>o==="dark"?"light":"dark")};return ce.jsx(Q_.Provider,{value:{theme:e,toggleTheme:i},children:n})}function J_(){const n=pe.useContext(Q_);if(!n)throw new Error("useTheme must be used within a ThemeProvider");return n}const np=pe.createContext({});function ip(n){const e=pe.useRef(null);return e.current===null&&(e.current=n()),e.current}const tu=pe.createContext(null),rp=pe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class o1 extends pe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a1({children:n,isPresent:e}){const t=pe.useId(),i=pe.useRef(null),o=pe.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=pe.useContext(rp);return pe.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:h}=o.current;if(e||!i.current||!c||!u)return;i.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),ce.jsx(o1,{isPresent:e,childRef:i,sizeRef:o,children:pe.cloneElement(n,{ref:i})})}const l1=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c})=>{const u=ip(c1),f=pe.useId(),h=pe.useCallback(m=>{u.set(m,!0);for(const v of u.values())if(!v)return;i&&i()},[u,i]),p=pe.useMemo(()=>({id:f,initial:e,isPresent:t,custom:o,onExitComplete:h,register:m=>(u.set(m,!1),()=>u.delete(m))}),a?[Math.random(),h]:[t,h]);return pe.useMemo(()=>{u.forEach((m,v)=>u.set(v,!1))},[t]),pe.useEffect(()=>{!t&&!u.size&&i&&i()},[t]),c==="popLayout"&&(n=ce.jsx(a1,{isPresent:t,children:n})),ce.jsx(tu.Provider,{value:p,children:n})};function c1(){return new Map}function ex(n=!0){const e=pe.useContext(tu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=pe.useId();pe.useEffect(()=>{n&&o(a)},[n]);const c=pe.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const cc=n=>n.key||"";function M0(n){const e=[];return pe.Children.forEach(n,t=>{pe.isValidElement(t)&&e.push(t)}),e}const sp=typeof window<"u",tx=sp?pe.useLayoutEffect:pe.useEffect,u1=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1})=>{const[u,f]=ex(c),h=pe.useMemo(()=>M0(n),[n]),p=c&&!u?[]:h.map(cc),m=pe.useRef(!0),v=pe.useRef(h),_=ip(()=>new Map),[M,E]=pe.useState(h),[S,x]=pe.useState(h);tx(()=>{m.current=!1,v.current=h;for(let b=0;b<S.length;b++){const D=cc(S[b]);p.includes(D)?_.delete(D):_.get(D)!==!0&&_.set(D,!1)}},[S,p.length,p.join("-")]);const R=[];if(h!==M){let b=[...h];for(let D=0;D<S.length;D++){const I=S[D],U=cc(I);p.includes(U)||(b.splice(D,0,I),R.push(I))}a==="wait"&&R.length&&(b=R),x(M0(b)),E(h);return}const{forceRender:C}=pe.useContext(np);return ce.jsx(ce.Fragment,{children:S.map(b=>{const D=cc(b),I=c&&!u?!1:h===S||p.includes(D),U=()=>{if(_.has(D))_.set(D,!0);else return;let k=!0;_.forEach(A=>{A||(k=!1)}),k&&(C==null||C(),x(v.current),c&&(f==null||f()),i&&i())};return ce.jsx(l1,{isPresent:I,initial:!m.current||t?void 0:!1,custom:I?void 0:e,presenceAffectsLayout:o,mode:a,onExitComplete:I?void 0:U,children:b},D)})})},Qn=n=>n;let nx=Qn;function op(n){let e;return()=>(e===void 0&&(e=n()),e)}const To=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},or=n=>n*1e3,ar=n=>n/1e3,f1={useManualTiming:!1};function d1(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,p=!1,m=!1)=>{const _=m&&i?e:t;return p&&a.add(h),_.has(h)||_.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,i){o=!0;return}i=!0,[e,t]=[t,e],e.forEach(u),e.clear(),i=!1,o&&(o=!1,f.process(h))}};return f}const uc=["read","resolveKeyframes","update","preRender","render","postRender"],h1=40;function ix(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=uc.reduce((x,R)=>(x[R]=d1(a),x),{}),{read:u,resolveKeyframes:f,update:h,preRender:p,render:m,postRender:v}=c,_=()=>{const x=performance.now();t=!1,o.delta=i?1e3/60:Math.max(Math.min(x-o.timestamp,h1),1),o.timestamp=x,o.isProcessing=!0,u.process(o),f.process(o),h.process(o),p.process(o),m.process(o),v.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(_))},M=()=>{t=!0,i=!0,o.isProcessing||n(_)};return{schedule:uc.reduce((x,R)=>{const C=c[R];return x[R]=(b,D=!1,I=!1)=>(t||M(),C.schedule(b,D,I)),x},{}),cancel:x=>{for(let R=0;R<uc.length;R++)c[uc[R]].cancel(x)},state:o,steps:c}}const{schedule:Ht,cancel:Xr,state:xn,steps:Yf}=ix(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qn,!0),rx=pe.createContext({strict:!1}),E0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wo={};for(const n in E0)wo[n]={isEnabled:e=>E0[n].some(t=>!!e[t])};function p1(n){for(const e in n)wo[e]={...wo[e],...n[e]}}const m1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||m1.has(n)}let sx=n=>!Hc(n);function g1(n){n&&(sx=e=>e.startsWith("on")?!Hc(e):n(e))}try{g1(require("@emotion/is-prop-valid").default)}catch{}function v1(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||(sx(o)||t===!0&&Hc(o)||!e&&!Hc(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}function _1(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const nu=pe.createContext({});function Ba(n){return typeof n=="string"||Array.isArray(n)}function iu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lp=["initial",...ap];function ru(n){return iu(n.animate)||lp.some(e=>Ba(n[e]))}function ox(n){return!!(ru(n)||n.variants)}function x1(n,e){if(ru(n)){const{initial:t,animate:i}=n;return{initial:t===!1||Ba(t)?t:void 0,animate:Ba(i)?i:void 0}}return n.inherit!==!1?e:{}}function y1(n){const{initial:e,animate:t}=x1(n,pe.useContext(nu));return pe.useMemo(()=>({initial:e,animate:t}),[T0(e),T0(t)])}function T0(n){return Array.isArray(n)?n.join(" "):n}const S1=Symbol.for("motionComponentSymbol");function vo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function M1(n,e,t){return pe.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):vo(t)&&(t.current=i))},[e])}const cp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),E1="framerAppearId",ax="data-"+cp(E1),{schedule:up}=ix(queueMicrotask,!1),lx=pe.createContext({});function T1(n,e,t,i,o){var a,c;const{visualElement:u}=pe.useContext(nu),f=pe.useContext(rx),h=pe.useContext(tu),p=pe.useContext(rp).reducedMotion,m=pe.useRef(null);i=i||f.renderer,!m.current&&i&&(m.current=i(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=m.current,_=pe.useContext(lx);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&w1(m.current,t,o,_);const M=pe.useRef(!1);pe.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const E=t[ax],S=pe.useRef(!!E&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,E))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,E)));return tx(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),up.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),pe.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,E)}),S.current=!1))}),v}function w1(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:f,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:cx(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&vo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:f,layoutRoot:h})}function cx(n){if(n)return n.options.allowProjection!==!1?n.projection:cx(n.parent)}function A1({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:o}){var a,c;n&&p1(n);function u(h,p){let m;const v={...pe.useContext(rp),...h,layoutId:C1(h)},{isStatic:_}=v,M=y1(h),E=i(h,_);if(!_&&sp){b1();const S=R1(v);m=S.MeasureLayout,M.visualElement=T1(o,E,v,e,S.ProjectionNode)}return ce.jsxs(nu.Provider,{value:M,children:[m&&M.visualElement?ce.jsx(m,{visualElement:M.visualElement,...v}):null,t(o,h,M1(E,M.visualElement,p),E,_,M.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const f=pe.forwardRef(u);return f[S1]=o,f}function C1({layoutId:n}){const e=pe.useContext(np).id;return e&&n!==void 0?e+"-"+n:n}function b1(n,e){pe.useContext(rx).strict}function R1(n){const{drag:e,layout:t}=wo;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const P1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fp(n){return typeof n!="string"||n.includes("-")?!1:!!(P1.indexOf(n)>-1||/[A-Z]/u.test(n))}function w0(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function dp(n,e,t,i){if(typeof e=="function"){const[o,a]=w0(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=w0(i);e=e(t!==void 0?t:n.custom,o,a)}return e}const Hd=n=>Array.isArray(n),D1=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),L1=n=>Hd(n)?n[n.length-1]||0:n,Rn=n=>!!(n&&n.getVelocity);function Nc(n){const e=Rn(n)?n.get():n;return D1(e)?e.toValue():e}function I1({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},i,o,a){const c={latestValues:N1(i,o,a,n),renderState:e()};return t&&(c.onMount=u=>t({props:i,current:u,...c}),c.onUpdate=u=>t(u)),c}const ux=n=>(e,t)=>{const i=pe.useContext(nu),o=pe.useContext(tu),a=()=>I1(n,e,i,o);return t?a():ip(a)};function N1(n,e,t,i){const o={},a=i(n,{});for(const v in a)o[v]=Nc(a[v]);let{initial:c,animate:u}=n;const f=ru(n),h=ox(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const m=p?u:c;if(m&&typeof m!="boolean"&&!iu(m)){const v=Array.isArray(m)?m:[m];for(let _=0;_<v.length;_++){const M=dp(n,v[_]);if(M){const{transitionEnd:E,transition:S,...x}=M;for(const R in x){let C=x[R];if(Array.isArray(C)){const b=p?C.length-1:0;C=C[b]}C!==null&&(o[R]=C)}for(const R in E)o[R]=E[R]}}}return o}const Lo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ds=new Set(Lo),fx=n=>e=>typeof e=="string"&&e.startsWith(n),dx=fx("--"),U1=fx("var(--"),hp=n=>U1(n)?F1.test(n.split("/*")[0].trim()):!1,F1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,hx=(n,e)=>e&&typeof n=="number"?e.transform(n):n,fr=(n,e,t)=>t>e?e:t<n?n:t,Io={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ka={...Io,transform:n=>fr(0,1,n)},fc={...Io,default:1},qa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Hr=qa("deg"),Bi=qa("%"),it=qa("px"),O1=qa("vh"),B1=qa("vw"),A0={...Bi,parse:n=>Bi.parse(n)/100,transform:n=>Bi.transform(n*100)},k1={borderWidth:it,borderTopWidth:it,borderRightWidth:it,borderBottomWidth:it,borderLeftWidth:it,borderRadius:it,radius:it,borderTopLeftRadius:it,borderTopRightRadius:it,borderBottomRightRadius:it,borderBottomLeftRadius:it,width:it,maxWidth:it,height:it,maxHeight:it,top:it,right:it,bottom:it,left:it,padding:it,paddingTop:it,paddingRight:it,paddingBottom:it,paddingLeft:it,margin:it,marginTop:it,marginRight:it,marginBottom:it,marginLeft:it,backgroundPositionX:it,backgroundPositionY:it},V1={rotate:Hr,rotateX:Hr,rotateY:Hr,rotateZ:Hr,scale:fc,scaleX:fc,scaleY:fc,scaleZ:fc,skew:Hr,skewX:Hr,skewY:Hr,distance:it,translateX:it,translateY:it,translateZ:it,x:it,y:it,z:it,perspective:it,transformPerspective:it,opacity:ka,originX:A0,originY:A0,originZ:it},C0={...Io,transform:Math.round},pp={...k1,...V1,zIndex:C0,size:it,fillOpacity:ka,strokeOpacity:ka,numOctaves:C0},z1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},G1=Lo.length;function H1(n,e,t){let i="",o=!0;for(let a=0;a<G1;a++){const c=Lo[a],u=n[c];if(u===void 0)continue;let f=!0;if(typeof u=="number"?f=u===(c.startsWith("scale")?1:0):f=parseFloat(u)===0,!f||t){const h=hx(u,pp[c]);if(!f){o=!1;const p=z1[c]||c;i+=`${p}(${h}) `}t&&(e[c]=h)}}return i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function mp(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const f in e){const h=e[f];if(Ds.has(f)){c=!0;continue}else if(dx(f)){o[f]=h;continue}else{const p=hx(h,pp[f]);f.startsWith("origin")?(u=!0,a[f]=p):i[f]=p}}if(e.transform||(c||t?i.transform=H1(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${f} ${h} ${p}`}}const W1={offset:"stroke-dashoffset",array:"stroke-dasharray"},j1={offset:"strokeDashoffset",array:"strokeDasharray"};function X1(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?W1:j1;n[a.offset]=it.transform(-i);const c=it.transform(e),u=it.transform(t);n[a.array]=`${c} ${u}`}function b0(n,e,t){return typeof n=="string"?n:it.transform(e+t*n)}function q1(n,e,t){const i=b0(e,n.x,n.width),o=b0(t,n.y,n.height);return`${i} ${o}`}function gp(n,{attrX:e,attrY:t,attrScale:i,originX:o,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:f=0,...h},p,m){if(mp(n,h,m),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:_,dimensions:M}=n;v.transform&&(M&&(_.transform=v.transform),delete v.transform),M&&(o!==void 0||a!==void 0||_.transform)&&(_.transformOrigin=q1(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),i!==void 0&&(v.scale=i),c!==void 0&&X1(v,c,u,f,!1)}const vp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),px=()=>({...vp(),attrs:{}}),_p=n=>typeof n=="string"&&n.toLowerCase()==="svg";function mx(n,{style:e,vars:t},i,o){Object.assign(n.style,e,o&&o.getProjectionStyles(i));for(const a in t)n.style.setProperty(a,t[a])}const gx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function vx(n,e,t,i){mx(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(gx.has(o)?o:cp(o),e.attrs[o])}const Wc={};function Y1(n){Object.assign(Wc,n)}function _x(n,{layout:e,layoutId:t}){return Ds.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Wc[n]||n==="opacity")}function xp(n,e,t){var i;const{style:o}=n,a={};for(const c in o)(Rn(o[c])||e.style&&Rn(e.style[c])||_x(c,n)||((i=t==null?void 0:t.getValue(c))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function xx(n,e,t){const i=xp(n,e,t);for(const o in n)if(Rn(n[o])||Rn(e[o])){const a=Lo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}function $1(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const R0=["x","y","width","height","cx","cy","r"],K1={useVisualState:ux({scrapeMotionValuesFromProps:xx,createRenderState:px,onUpdate:({props:n,prevProps:e,current:t,renderState:i,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in o)if(Ds.has(u)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let u=0;u<R0.length;u++){const f=R0[u];n[f]!==e[f]&&(c=!0)}c&&Ht.read(()=>{$1(t,i),Ht.render(()=>{gp(i,o,_p(t.tagName),n.transformTemplate),vx(t,i)})})}})},Z1={useVisualState:ux({scrapeMotionValuesFromProps:xp,createRenderState:vp})};function yx(n,e,t){for(const i in e)!Rn(e[i])&&!_x(i,t)&&(n[i]=e[i])}function Q1({transformTemplate:n},e){return pe.useMemo(()=>{const t=vp();return mp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function J1(n,e){const t=n.style||{},i={};return yx(i,t,n),Object.assign(i,Q1(n,e)),i}function eE(n,e){const t={},i=J1(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}function tE(n,e,t,i){const o=pe.useMemo(()=>{const a=px();return gp(a,e,_p(i),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};yx(a,n.style,n),o.style={...a,...o.style}}return o}function nE(n=!1){return(t,i,o,{latestValues:a},c)=>{const f=(fp(t)?tE:eE)(i,a,c,t),h=v1(i,typeof t=="string",n),p=t!==pe.Fragment?{...h,...f,ref:o}:{},{children:m}=i,v=pe.useMemo(()=>Rn(m)?m.get():m,[m]);return pe.createElement(t,{...p,children:v})}}function iE(n,e){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...fp(i)?K1:Z1,preloadedFeatures:n,useRender:nE(o),createVisualElement:e,Component:i};return A1(c)}}function Sx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function su(n,e,t){const i=n.getProps();return dp(i,e,t!==void 0?t:i.custom,n)}const rE=op(()=>window.ScrollTimeline!==void 0);class sE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(o=>{if(rE()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{i.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class oE extends sE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function yp(n,e){return n?n[e]||n.default||n:void 0}const Wd=2e4;function Mx(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Wd;)e+=t,i=n.next(e);return e>=Wd?1/0:e}function Sp(n){return typeof n=="function"}function P0(n,e){n.timeline=e,n.onfinish=null}const Mp=n=>Array.isArray(n)&&typeof n[0]=="number",aE={linearEasing:void 0};function lE(n,e){const t=op(n);return()=>{var i;return(i=aE[e])!==null&&i!==void 0?i:t()}}const jc=lE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ex=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=n(To(0,o-1,a))+", ";return`linear(${i.substring(0,i.length-2)})`};function Tx(n){return!!(typeof n=="function"&&jc()||!n||typeof n=="string"&&(n in jd||jc())||Mp(n)||Array.isArray(n)&&n.every(Tx))}const ba=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,jd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ba([0,.65,.55,1]),circOut:ba([.55,0,1,.45]),backIn:ba([.31,.01,.66,-.59]),backOut:ba([.33,1.53,.69,.99])};function wx(n,e){if(n)return typeof n=="function"&&jc()?Ex(n,e):Mp(n)?ba(n):Array.isArray(n)?n.map(t=>wx(t,e)||jd.easeOut):jd[n]}const Ei={x:!1,y:!1};function Ax(){return Ei.x||Ei.y}function cE(n,e,t){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(i=void 0)!==null&&i!==void 0?i:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function Cx(n,e){const t=cE(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function D0(n){return e=>{e.pointerType==="touch"||Ax()||n(e)}}function uE(n,e,t={}){const[i,o,a]=Cx(n,t),c=D0(u=>{const{target:f}=u,h=e(u);if(typeof h!="function"||!f)return;const p=D0(m=>{h(m),f.removeEventListener("pointerleave",p)});f.addEventListener("pointerleave",p,o)});return i.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const bx=(n,e)=>e?n===e?!0:bx(n,e.parentElement):!1,Ep=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,fE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function dE(n){return fE.has(n.tagName)||n.tabIndex!==-1}const Ra=new WeakSet;function L0(n){return e=>{e.key==="Enter"&&n(e)}}function $f(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const hE=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=L0(()=>{if(Ra.has(t))return;$f(t,"down");const o=L0(()=>{$f(t,"up")}),a=()=>$f(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function I0(n){return Ep(n)&&!Ax()}function pE(n,e,t={}){const[i,o,a]=Cx(n,t),c=u=>{const f=u.currentTarget;if(!I0(u)||Ra.has(f))return;Ra.add(f);const h=e(u),p=(_,M)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",v),!(!I0(_)||!Ra.has(f))&&(Ra.delete(f),typeof h=="function"&&h(_,{success:M}))},m=_=>{p(_,t.useGlobalTarget||bx(f,_.target))},v=_=>{p(_,!1)};window.addEventListener("pointerup",m,o),window.addEventListener("pointercancel",v,o)};return i.forEach(u=>{!dE(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>hE(h,o),o)}),a}function mE(n){return n==="x"||n==="y"?Ei[n]?null:(Ei[n]=!0,()=>{Ei[n]=!1}):Ei.x||Ei.y?null:(Ei.x=Ei.y=!0,()=>{Ei.x=Ei.y=!1})}const Rx=new Set(["width","height","top","left","right","bottom",...Lo]);let Uc;function gE(){Uc=void 0}const ki={now:()=>(Uc===void 0&&ki.set(xn.isProcessing||f1.useManualTiming?xn.timestamp:performance.now()),Uc),set:n=>{Uc=n,queueMicrotask(gE)}};function Tp(n,e){n.indexOf(e)===-1&&n.push(e)}function wp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Ap{constructor(){this.subscriptions=[]}add(e){return Tp(this.subscriptions,e),()=>wp(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Px(n,e){return e?n*(1e3/e):0}const N0=30,vE=n=>!isNaN(parseFloat(n));class _E{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,o=!0)=>{const a=ki.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ki.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=vE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ap);const i=this.events[e].add(t);return e==="change"?()=>{i(),Ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ki.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>N0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,N0);return Px(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Va(n,e){return new _E(n,e)}function xE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Va(t))}function yE(n,e){const t=su(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=L1(a[c]);xE(n,c,u)}}function SE(n){return!!(Rn(n)&&n.add)}function Xd(n,e){const t=n.getValue("willChange");if(SE(t))return t.add(e)}function Dx(n){return n.props[ax]}const Lx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,ME=1e-7,EE=12;function TE(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=Lx(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>ME&&++u<EE);return c}function Ya(n,e,t,i){if(n===e&&t===i)return Qn;const o=a=>TE(a,0,1,n,t);return a=>a===0||a===1?a:Lx(o(a),e,i)}const Ix=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Nx=n=>e=>1-n(1-e),Ux=Ya(.33,1.53,.69,.99),Cp=Nx(Ux),Fx=Ix(Cp),Ox=n=>(n*=2)<1?.5*Cp(n):.5*(2-Math.pow(2,-10*(n-1))),bp=n=>1-Math.sin(Math.acos(n)),Bx=Nx(bp),kx=Ix(bp),Vx=n=>/^0[^.\s]+$/u.test(n);function wE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Vx(n):!0}const Ia=n=>Math.round(n*1e5)/1e5,Rp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function AE(n){return n==null}const CE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pp=(n,e)=>t=>!!(typeof t=="string"&&CE.test(t)&&t.startsWith(n)||e&&!AE(t)&&Object.prototype.hasOwnProperty.call(t,e)),zx=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(Rp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},bE=n=>fr(0,255,n),Kf={...Io,transform:n=>Math.round(bE(n))},ws={test:Pp("rgb","red"),parse:zx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Kf.transform(n)+", "+Kf.transform(e)+", "+Kf.transform(t)+", "+Ia(ka.transform(i))+")"};function RE(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const qd={test:Pp("#"),parse:RE,transform:ws.transform},_o={test:Pp("hsl","hue"),parse:zx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Bi.transform(Ia(e))+", "+Bi.transform(Ia(t))+", "+Ia(ka.transform(i))+")"},bn={test:n=>ws.test(n)||qd.test(n)||_o.test(n),parse:n=>ws.test(n)?ws.parse(n):_o.test(n)?_o.parse(n):qd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ws.transform(n):_o.transform(n)},PE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function DE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Rp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(PE))===null||t===void 0?void 0:t.length)||0)>0}const Gx="number",Hx="color",LE="var",IE="var(",U0="${}",NE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function za(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(NE,f=>(bn.test(f)?(i.color.push(a),o.push(Hx),t.push(bn.parse(f))):f.startsWith(IE)?(i.var.push(a),o.push(LE),t.push(f)):(i.number.push(a),o.push(Gx),t.push(parseFloat(f))),++a,U0)).split(U0);return{values:t,split:u,indexes:i,types:o}}function Wx(n){return za(n).values}function jx(n){const{split:e,types:t}=za(n),i=e.length;return o=>{let a="";for(let c=0;c<i;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===Gx?a+=Ia(o[c]):u===Hx?a+=bn.transform(o[c]):a+=o[c]}return a}}const UE=n=>typeof n=="number"?0:n;function FE(n){const e=Wx(n);return jx(n)(e.map(UE))}const qr={test:DE,parse:Wx,createTransformer:jx,getAnimatableNone:FE},OE=new Set(["brightness","contrast","saturate","opacity"]);function BE(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Rp)||[];if(!i)return n;const o=t.replace(i,"");let a=OE.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const kE=/\b([a-z-]*)\(.*?\)/gu,Yd={...qr,getAnimatableNone:n=>{const e=n.match(kE);return e?e.map(BE).join(" "):n}},VE={...pp,color:bn,backgroundColor:bn,outlineColor:bn,fill:bn,stroke:bn,borderColor:bn,borderTopColor:bn,borderRightColor:bn,borderBottomColor:bn,borderLeftColor:bn,filter:Yd,WebkitFilter:Yd},Dp=n=>VE[n];function Xx(n,e){let t=Dp(n);return t!==Yd&&(t=qr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const zE=new Set(["auto","none","0"]);function GE(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!zE.has(a)&&za(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=Xx(t,o)}const F0=n=>n===Io||n===it,O0=(n,e)=>parseFloat(n.split(", ")[e]),B0=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/u);if(o)return O0(o[1],e);{const a=i.match(/^matrix\((.+)\)$/u);return a?O0(a[1],n):0}},HE=new Set(["x","y","z"]),WE=Lo.filter(n=>!HE.has(n));function jE(n){const e=[];return WE.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Ao={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:B0(4,13),y:B0(5,14)};Ao.translateX=Ao.x;Ao.translateY=Ao.y;const bs=new Set;let $d=!1,Kd=!1;function qx(){if(Kd){const n=Array.from(bs).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=jE(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))===null||u===void 0||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Kd=!1,$d=!1,bs.forEach(n=>n.complete()),bs.clear()}function Yx(){bs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Kd=!0)})}function XE(){Yx(),qx()}class Lp{constructor(e,t,i,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(bs.add(this),$d||($d=!0,Ht.read(Yx),Ht.resolveKeyframes(qx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(i&&t){const f=i.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),bs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,bs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const $x=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),qE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function YE(n){const e=qE.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function Kx(n,e,t=1){const[i,o]=YE(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return $x(c)?parseFloat(c):c}return hp(o)?Kx(o,e,t+1):o}const Zx=n=>e=>e.test(n),$E={test:n=>n==="auto",parse:n=>n},Qx=[Io,it,Bi,Hr,B1,O1,$E],k0=n=>Qx.find(Zx(n));class Jx extends Lp{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),hp(h))){const p=Kx(h,t.current);p!==void 0&&(e[f]=p),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Rx.has(i)||e.length!==2)return;const[o,a]=e,c=k0(o),u=k0(a);if(c!==u)if(F0(c)&&F0(u))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)wE(e[o])&&i.push(o);i.length&&GE(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ao[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(i);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=Ao[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const V0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(qr.test(n)||n==="0")&&!n.startsWith("url("));function KE(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function ZE(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=V0(o,e),u=V0(a,e);return!c||!u?!1:KE(n)||(t==="spring"||Sp(t))&&i}const QE=n=>n!==null;function ou(n,{repeat:e,repeatType:t="loop"},i){const o=n.filter(QE),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const JE=40;class ey{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ki.now(),this.options={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>JE?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&XE(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=ki.now(),this.hasAttemptedResolve=!0;const{name:i,type:o,velocity:a,delay:c,onComplete:u,onUpdate:f,isGenerator:h}=this.options;if(!h&&!ZE(e,i,o,a))if(c)this.options.duration=0;else{f&&f(ou(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Kt=(n,e,t)=>n+(e-n)*t;function Zf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function eT({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;o=Zf(f,u,n+1/3),a=Zf(f,u,n),c=Zf(f,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function Xc(n,e){return t=>t>0?e:n}const Qf=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},tT=[qd,ws,_o],nT=n=>tT.find(e=>e.test(n));function z0(n){const e=nT(n);if(!e)return!1;let t=e.parse(n);return e===_o&&(t=eT(t)),t}const G0=(n,e)=>{const t=z0(n),i=z0(e);if(!t||!i)return Xc(n,e);const o={...t};return a=>(o.red=Qf(t.red,i.red,a),o.green=Qf(t.green,i.green,a),o.blue=Qf(t.blue,i.blue,a),o.alpha=Kt(t.alpha,i.alpha,a),ws.transform(o))},iT=(n,e)=>t=>e(n(t)),$a=(...n)=>n.reduce(iT),Zd=new Set(["none","hidden"]);function rT(n,e){return Zd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function sT(n,e){return t=>Kt(n,e,t)}function Ip(n){return typeof n=="number"?sT:typeof n=="string"?hp(n)?Xc:bn.test(n)?G0:lT:Array.isArray(n)?ty:typeof n=="object"?bn.test(n)?G0:oT:Xc}function ty(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>Ip(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function oT(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Ip(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function aT(n,e){var t;const i=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],u=n.indexes[c][o[c]],f=(t=n.values[u])!==null&&t!==void 0?t:0;i[a]=f,o[c]++}return i}const lT=(n,e)=>{const t=qr.createTransformer(e),i=za(n),o=za(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Zd.has(n)&&!o.values.length||Zd.has(e)&&!i.values.length?rT(n,e):$a(ty(aT(i,o),o.values),t):Xc(n,e)};function ny(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Kt(n,e,t):Ip(n)(n,e)}const cT=5;function iy(n,e,t){const i=Math.max(e-cT,0);return Px(t-n(i),e-i)}const Qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Jf=.001;function uT({duration:n=Qt.duration,bounce:e=Qt.bounce,velocity:t=Qt.velocity,mass:i=Qt.mass}){let o,a,c=1-e;c=fr(Qt.minDamping,Qt.maxDamping,c),n=fr(Qt.minDuration,Qt.maxDuration,ar(n)),c<1?(o=h=>{const p=h*c,m=p*n,v=p-t,_=Qd(h,c),M=Math.exp(-m);return Jf-v/_*M},a=h=>{const m=h*c*n,v=m*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-m),E=Qd(Math.pow(h,2),c);return(-o(h)+Jf>0?-1:1)*((v-_)*M)/E}):(o=h=>{const p=Math.exp(-h*n),m=(h-t)*n+1;return-Jf+p*m},a=h=>{const p=Math.exp(-h*n),m=(t-h)*(n*n);return p*m});const u=5/n,f=dT(o,a,u);if(n=or(n),isNaN(f))return{stiffness:Qt.stiffness,damping:Qt.damping,duration:n};{const h=Math.pow(f,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const fT=12;function dT(n,e,t){let i=t;for(let o=1;o<fT;o++)i=i-n(i)/e(i);return i}function Qd(n,e){return n*Math.sqrt(1-e*e)}const hT=["duration","bounce"],pT=["stiffness","damping","mass"];function H0(n,e){return e.some(t=>n[t]!==void 0)}function mT(n){let e={velocity:Qt.velocity,stiffness:Qt.stiffness,damping:Qt.damping,mass:Qt.mass,isResolvedFromDuration:!1,...n};if(!H0(n,pT)&&H0(n,hT))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*fr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Qt.mass,stiffness:o,damping:a}}else{const t=uT(n);e={...e,...t,mass:Qt.mass},e.isResolvedFromDuration=!0}return e}function ry(n=Qt.visualDuration,e=Qt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:f,damping:h,mass:p,duration:m,velocity:v,isResolvedFromDuration:_}=mT({...t,velocity:-ar(t.velocity||0)}),M=v||0,E=h/(2*Math.sqrt(f*p)),S=c-a,x=ar(Math.sqrt(f/p)),R=Math.abs(S)<5;i||(i=R?Qt.restSpeed.granular:Qt.restSpeed.default),o||(o=R?Qt.restDelta.granular:Qt.restDelta.default);let C;if(E<1){const D=Qd(x,E);C=I=>{const U=Math.exp(-E*x*I);return c-U*((M+E*x*S)/D*Math.sin(D*I)+S*Math.cos(D*I))}}else if(E===1)C=D=>c-Math.exp(-x*D)*(S+(M+x*S)*D);else{const D=x*Math.sqrt(E*E-1);C=I=>{const U=Math.exp(-E*x*I),k=Math.min(D*I,300);return c-U*((M+E*x*S)*Math.sinh(k)+D*S*Math.cosh(k))/D}}const b={calculatedDuration:_&&m||null,next:D=>{const I=C(D);if(_)u.done=D>=m;else{let U=0;E<1&&(U=D===0?or(M):iy(C,D,I));const k=Math.abs(U)<=i,A=Math.abs(c-I)<=o;u.done=k&&A}return u.value=u.done?c:I,u},toString:()=>{const D=Math.min(Mx(b),Wd),I=Ex(U=>b.next(D*U).value,D,30);return D+"ms "+I}};return b}function W0({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:f,restDelta:h=.5,restSpeed:p}){const m=n[0],v={done:!1,value:m},_=k=>u!==void 0&&k<u||f!==void 0&&k>f,M=k=>u===void 0?f:f===void 0||Math.abs(u-k)<Math.abs(f-k)?u:f;let E=t*e;const S=m+E,x=c===void 0?S:c(S);x!==S&&(E=x-m);const R=k=>-E*Math.exp(-k/i),C=k=>x+R(k),b=k=>{const A=R(k),L=C(k);v.done=Math.abs(A)<=h,v.value=v.done?x:L};let D,I;const U=k=>{_(v.value)&&(D=k,I=ry({keyframes:[v.value,M(v.value)],velocity:iy(C,k,v.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return U(0),{calculatedDuration:null,next:k=>{let A=!1;return!I&&D===void 0&&(A=!0,b(k),U(k)),D!==void 0&&k>=D?I.next(k-D):(!A&&b(k),v)}}}const gT=Ya(.42,0,1,1),vT=Ya(0,0,.58,1),sy=Ya(.42,0,.58,1),_T=n=>Array.isArray(n)&&typeof n[0]!="number",xT={linear:Qn,easeIn:gT,easeInOut:sy,easeOut:vT,circIn:bp,circInOut:kx,circOut:Bx,backIn:Cp,backInOut:Fx,backOut:Ux,anticipate:Ox},j0=n=>{if(Mp(n)){nx(n.length===4);const[e,t,i,o]=n;return Ya(e,t,i,o)}else if(typeof n=="string")return xT[n];return n};function yT(n,e,t){const i=[],o=t||ny,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||Qn:e;u=$a(f,u)}i.push(u)}return i}function ST(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(nx(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=yT(e,i,o),f=u.length,h=p=>{if(c&&p<n[0])return e[0];let m=0;if(f>1)for(;m<n.length-2&&!(p<n[m+1]);m++);const v=To(n[m],n[m+1],p);return u[m](v)};return t?p=>h(fr(n[0],n[a-1],p)):h}function MT(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=To(0,e,i);n.push(Kt(t,1,o))}}function ET(n){const e=[0];return MT(e,n.length-1),e}function TT(n,e){return n.map(t=>t*e)}function wT(n,e){return n.map(()=>e||sy).splice(0,n.length-1)}function qc({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=_T(i)?i.map(j0):j0(i),a={done:!1,value:e[0]},c=TT(t&&t.length===e.length?t:ET(e),n),u=ST(c,e,{ease:Array.isArray(o)?o:wT(e,o)});return{calculatedDuration:n,next:f=>(a.value=u(f),a.done=f>=n,a)}}const AT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Ht.update(e,!0),stop:()=>Xr(e),now:()=>xn.isProcessing?xn.timestamp:ki.now()}},CT={decay:W0,inertia:W0,tween:qc,keyframes:qc,spring:ry},bT=n=>n/100;class Np extends ey{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:t,motionValue:i,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||Lp,u=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new c(a,u,t,i,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,u=Sp(t)?t:CT[t]||qc;let f,h;u!==qc&&typeof e[0]!="number"&&(f=$a(bT,ny(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Mx(p));const{calculatedDuration:m}=p,v=m+o,_=v*(i+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:m,resolvedDuration:v,totalDuration:_}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:f,calculatedDuration:h,totalDuration:p,resolvedDuration:m}=i;if(this.startTime===null)return a.next(0);const{delay:v,repeat:_,repeatType:M,repeatDelay:E,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-v*(this.speed>=0?1:-1),R=this.speed>=0?x<0:x>p;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let C=this.currentTime,b=a;if(_){const k=Math.min(this.currentTime,p)/m;let A=Math.floor(k),L=k%1;!L&&k>=1&&(L=1),L===1&&A--,A=Math.min(A,_+1),!!(A%2)&&(M==="reverse"?(L=1-L,E&&(L-=E/m)):M==="mirror"&&(b=c)),C=fr(0,1,L)*m}const D=R?{done:!1,value:f[0]}:b.next(C);u&&(D.value=u(D.value));let{done:I}=D;!R&&h!==null&&(I=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return U&&o!==void 0&&(D.value=ou(f,this.options,o)),S&&S(D.value),U&&this.finish(),D}get duration(){const{resolved:e}=this;return e?ar(e.calculatedDuration):0}get time(){return ar(this.currentTime)}set time(e){e=or(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ar(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=AT,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const RT=new Set(["opacity","clipPath","filter","transform"]);function PT(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeInOut",times:f}={}){const h={[e]:t};f&&(h.offset=f);const p=wx(u,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:i,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const DT=op(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Yc=10,LT=2e4;function IT(n){return Sp(n.type)||n.type==="spring"||!Tx(n.ease)}function NT(n,e){const t=new Np({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const o=[];let a=0;for(;!i.done&&a<LT;)i=t.sample(a),o.push(i.value),a+=Yc;return{times:void 0,keyframes:o,duration:a-Yc,ease:"linear"}}const oy={anticipate:Ox,backInOut:Fx,circInOut:kx};function UT(n){return n in oy}class X0 extends ey{constructor(e){super(e);const{name:t,motionValue:i,element:o,keyframes:a}=this.options;this.resolver=new Jx(a,(c,u)=>this.onKeyframesResolved(c,u),t,i,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:i=300,times:o,ease:a,type:c,motionValue:u,name:f,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&jc()&&UT(a)&&(a=oy[a]),IT(this.options)){const{onComplete:m,onUpdate:v,motionValue:_,element:M,...E}=this.options,S=NT(e,E);e=S.keyframes,e.length===1&&(e[1]=e[0]),i=S.duration,o=S.times,a=S.ease,c="keyframes"}const p=PT(u.owner.current,f,e,{...this.options,duration:i,times:o,ease:a});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(P0(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:m}=this.options;u.set(ou(e,this.options,t)),m&&m(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return ar(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return ar(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=or(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Qn;const{animation:i}=t;P0(i,e)}return Qn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:o,type:a,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:m,element:v,..._}=this.options,M=new Np({..._,keyframes:i,duration:o,type:a,ease:c,times:u,isGenerator:!0}),E=or(this.time);h.setWithVelocity(M.sample(E-Yc).value,M.sample(E).value,Yc)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:o,repeatType:a,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return DT()&&i&&RT.has(i)&&!f&&!h&&!o&&a!=="mirror"&&c!==0&&u!=="inertia"}}const FT={type:"spring",stiffness:500,damping:25,restSpeed:10},OT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),BT={type:"keyframes",duration:.8},kT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},VT=(n,{keyframes:e})=>e.length>2?BT:Ds.has(n)?n.startsWith("scale")?OT(e[1]):FT:kT;function zT({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:f,elapsed:h,...p}){return!!Object.keys(p).length}const Up=(n,e,t,i={},o,a)=>c=>{const u=yp(i,n)||{},f=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-or(f);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:v=>{e.set(v),u.onUpdate&&u.onUpdate(v)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};zT(u)||(p={...p,...VT(n,p)}),p.duration&&(p.duration=or(p.duration)),p.repeatDelay&&(p.repeatDelay=or(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let m=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(m=!0)),m&&!a&&e.get()!==void 0){const v=ou(p.keyframes,u);if(v!==void 0)return Ht.update(()=>{p.onUpdate(v),p.onComplete()}),new oE([])}return!a&&X0.supports(p)?new X0(p):new Np(p)};function GT({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function ay(n,e,{delay:t=0,transitionOverride:i,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...f}=e;i&&(c=i);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const m in f){const v=n.getValue(m,(a=n.latestValues[m])!==null&&a!==void 0?a:null),_=f[m];if(_===void 0||p&&GT(p,m))continue;const M={delay:t,...yp(c||{},m)};let E=!1;if(window.MotionHandoffAnimation){const x=Dx(n);if(x){const R=window.MotionHandoffAnimation(x,m,Ht);R!==null&&(M.startTime=R,E=!0)}}Xd(n,m),v.start(Up(m,v,_,n.shouldReduceMotion&&Rx.has(m)?{type:!1}:M,n,E));const S=v.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{Ht.update(()=>{u&&yE(n,u)})}),h}function Jd(n,e,t={}){var i;const o=su(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(ay(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:m,staggerDirection:v}=a;return HT(n,e,p+h,m,v,t)}:()=>Promise.resolve(),{when:f}=a;if(f){const[h,p]=f==="beforeChildren"?[c,u]:[u,c];return h().then(()=>p())}else return Promise.all([c(),u(t.delay)])}function HT(n,e,t=0,i=0,o=1,a){const c=[],u=(n.variantChildren.size-1)*i,f=o===1?(h=0)=>h*i:(h=0)=>u-h*i;return Array.from(n.variantChildren).sort(WT).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(Jd(h,e,{...a,delay:t+f(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function WT(n,e){return n.sortNodePosition(e)}function jT(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>Jd(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=Jd(n,e,t);else{const o=typeof e=="function"?su(n,e,t.custom):e;i=Promise.all(ay(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const XT=lp.length;function ly(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?ly(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<XT;t++){const i=lp[t],o=n.props[i];(Ba(o)||o===!1)&&(e[i]=o)}return e}const qT=[...ap].reverse(),YT=ap.length;function $T(n){return e=>Promise.all(e.map(({animation:t,options:i})=>jT(n,t,i)))}function KT(n){let e=$T(n),t=q0(),i=!0;const o=f=>(h,p)=>{var m;const v=su(n,p,f==="exit"?(m=n.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(v){const{transition:_,transitionEnd:M,...E}=v;h={...h,...E,...M}}return h};function a(f){e=f(n)}function c(f){const{props:h}=n,p=ly(n.parent)||{},m=[],v=new Set;let _={},M=1/0;for(let S=0;S<YT;S++){const x=qT[S],R=t[x],C=h[x]!==void 0?h[x]:p[x],b=Ba(C),D=x===f?R.isActive:null;D===!1&&(M=S);let I=C===p[x]&&C!==h[x]&&b;if(I&&i&&n.manuallyAnimateOnMount&&(I=!1),R.protectedKeys={..._},!R.isActive&&D===null||!C&&!R.prevProp||iu(C)||typeof C=="boolean")continue;const U=ZT(R.prevProp,C);let k=U||x===f&&R.isActive&&!I&&b||S>M&&b,A=!1;const L=Array.isArray(C)?C:[C];let B=L.reduce(o(x),{});D===!1&&(B={});const{prevResolvedValues:K={}}=R,Y={...K,...B},X=$=>{k=!0,v.has($)&&(A=!0,v.delete($)),R.needsAnimating[$]=!0;const W=n.getValue($);W&&(W.liveStyle=!1)};for(const $ in Y){const W=B[$],de=K[$];if(_.hasOwnProperty($))continue;let re=!1;Hd(W)&&Hd(de)?re=!Sx(W,de):re=W!==de,re?W!=null?X($):v.add($):W!==void 0&&v.has($)?X($):R.protectedKeys[$]=!0}R.prevProp=C,R.prevResolvedValues=B,R.isActive&&(_={..._,...B}),i&&n.blockInitialAnimation&&(k=!1),k&&(!(I&&U)||A)&&m.push(...L.map($=>({animation:$,options:{type:x}})))}if(v.size){const S={};v.forEach(x=>{const R=n.getBaseTarget(x),C=n.getValue(x);C&&(C.liveStyle=!0),S[x]=R??null}),m.push({animation:S})}let E=!!m.length;return i&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),i=!1,E?e(m):Promise.resolve()}function u(f,h){var p;if(t[f].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var _;return(_=v.animationState)===null||_===void 0?void 0:_.setActive(f,h)}),t[f].isActive=h;const m=c(f);for(const v in t)t[v].protectedKeys={};return m}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=q0(),i=!0}}}function ZT(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Sx(e,n):!1}function hs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function q0(){return{animate:hs(!0),whileInView:hs(),whileHover:hs(),whileTap:hs(),whileDrag:hs(),whileFocus:hs(),exit:hs()}}class $r{constructor(e){this.isMounted=!1,this.node=e}update(){}}class QT extends $r{constructor(e){super(e),e.animationState||(e.animationState=KT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();iu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let JT=0;class ew extends $r{constructor(){super(...arguments),this.id=JT++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const tw={animation:{Feature:QT},exit:{Feature:ew}};function Ga(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function Ka(n){return{point:{x:n.pageX,y:n.pageY}}}const nw=n=>e=>Ep(e)&&n(e,Ka(e));function Na(n,e,t,i){return Ga(n,e,nw(t),i)}const Y0=(n,e)=>Math.abs(n-e);function iw(n,e){const t=Y0(n.x,e.x),i=Y0(n.y,e.y);return Math.sqrt(t**2+i**2)}class cy{constructor(e,t,{transformPagePoint:i,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=td(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,_=iw(m.offset,{x:0,y:0})>=3;if(!v&&!_)return;const{point:M}=m,{timestamp:E}=xn;this.history.push({...M,timestamp:E});const{onStart:S,onMove:x}=this.handlers;v||(S&&S(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,v)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=ed(v,this.transformPagePoint),Ht.update(this.updatePoint,!0)},this.handlePointerUp=(m,v)=>{this.end();const{onEnd:_,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=td(m.type==="pointercancel"?this.lastMoveEventInfo:ed(v,this.transformPagePoint),this.history);this.startEvent&&_&&_(m,S),M&&M(m,S)},!Ep(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.contextWindow=o||window;const c=Ka(e),u=ed(c,this.transformPagePoint),{point:f}=u,{timestamp:h}=xn;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,td(u,this.history)),this.removeListeners=$a(Na(this.contextWindow,"pointermove",this.handlePointerMove),Na(this.contextWindow,"pointerup",this.handlePointerUp),Na(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Xr(this.updatePoint)}}function ed(n,e){return e?{point:e(n.point)}:n}function $0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function td({point:n},e){return{point:n,delta:$0(n,uy(e)),offset:$0(n,rw(e)),velocity:sw(e,.1)}}function rw(n){return n[0]}function uy(n){return n[n.length-1]}function sw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=uy(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>or(e)));)t--;if(!i)return{x:0,y:0};const a=ar(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const fy=1e-4,ow=1-fy,aw=1+fy,dy=.01,lw=0-dy,cw=0+dy;function ei(n){return n.max-n.min}function uw(n,e,t){return Math.abs(n-e)<=t}function K0(n,e,t,i=.5){n.origin=i,n.originPoint=Kt(e.min,e.max,n.origin),n.scale=ei(t)/ei(e),n.translate=Kt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=ow&&n.scale<=aw||isNaN(n.scale))&&(n.scale=1),(n.translate>=lw&&n.translate<=cw||isNaN(n.translate))&&(n.translate=0)}function Ua(n,e,t,i){K0(n.x,e.x,t.x,i?i.originX:void 0),K0(n.y,e.y,t.y,i?i.originY:void 0)}function Z0(n,e,t){n.min=t.min+e.min,n.max=n.min+ei(e)}function fw(n,e,t){Z0(n.x,e.x,t.x),Z0(n.y,e.y,t.y)}function Q0(n,e,t){n.min=e.min-t.min,n.max=n.min+ei(e)}function Fa(n,e,t){Q0(n.x,e.x,t.x),Q0(n.y,e.y,t.y)}function dw(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Kt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Kt(t,n,i.max):Math.min(n,t)),n}function J0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function hw(n,{top:e,left:t,bottom:i,right:o}){return{x:J0(n.x,t,o),y:J0(n.y,e,i)}}function ev(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function pw(n,e){return{x:ev(n.x,e.x),y:ev(n.y,e.y)}}function mw(n,e){let t=.5;const i=ei(n),o=ei(e);return o>i?t=To(e.min,e.max-i,n.min):i>o&&(t=To(n.min,n.max-o,e.min)),fr(0,1,t)}function gw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const eh=.35;function vw(n=eh){return n===!1?n=0:n===!0&&(n=eh),{x:tv(n,"left","right"),y:tv(n,"top","bottom")}}function tv(n,e,t){return{min:nv(n,e),max:nv(n,t)}}function nv(n,e){return typeof n=="number"?n:n[e]||0}const iv=()=>({translate:0,scale:1,origin:0,originPoint:0}),xo=()=>({x:iv(),y:iv()}),rv=()=>({min:0,max:0}),en=()=>({x:rv(),y:rv()});function ui(n){return[n("x"),n("y")]}function hy({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function _w({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function xw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function nd(n){return n===void 0||n===1}function th({scale:n,scaleX:e,scaleY:t}){return!nd(n)||!nd(e)||!nd(t)}function ys(n){return th(n)||py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function py(n){return sv(n.x)||sv(n.y)}function sv(n){return n&&n!=="0%"}function $c(n,e,t){const i=n-t,o=e*i;return t+o}function ov(n,e,t,i,o){return o!==void 0&&(n=$c(n,o,i)),$c(n,t,i)+e}function nh(n,e=0,t=1,i,o){n.min=ov(n.min,e,t,i,o),n.max=ov(n.max,e,t,i,o)}function my(n,{x:e,y:t}){nh(n.x,e.translate,e.scale,e.originPoint),nh(n.y,t.translate,t.scale,t.originPoint)}const av=.999999999999,lv=1.0000000000001;function yw(n,e,t,i=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:f}=a.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&So(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,my(n,c)),i&&ys(a.latestValues)&&So(n,a.latestValues))}e.x<lv&&e.x>av&&(e.x=1),e.y<lv&&e.y>av&&(e.y=1)}function yo(n,e){n.min=n.min+e,n.max=n.max+e}function cv(n,e,t,i,o=.5){const a=Kt(n.min,n.max,o);nh(n,e,t,a,i)}function So(n,e){cv(n.x,e.x,e.scaleX,e.scale,e.originX),cv(n.y,e.y,e.scaleY,e.scale,e.originY)}function gy(n,e){return hy(xw(n.getBoundingClientRect(),e))}function Sw(n,e,t){const i=gy(n,t),{scroll:o}=e;return o&&(yo(i.x,o.offset.x),yo(i.y,o.offset.y)),i}const vy=({current:n})=>n?n.ownerDocument.defaultView:null,Mw=new WeakMap;class Ew{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=en(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ka(p).point)},a=(p,m)=>{const{drag:v,dragPropagation:_,onDragStart:M}=this.getProps();if(v&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=mE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ui(S=>{let x=this.getAxisMotionValue(S).get()||0;if(Bi.test(x)){const{projection:R}=this.visualElement;if(R&&R.layout){const C=R.layout.layoutBox[S];C&&(x=ei(C)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&Ht.postRender(()=>M(p,m)),Xd(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},c=(p,m)=>{const{dragPropagation:v,dragDirectionLock:_,onDirectionLock:M,onDrag:E}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=m;if(_&&this.currentDirection===null){this.currentDirection=Tw(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",m.point,S),this.updateAxis("y",m.point,S),this.visualElement.render(),E&&E(p,m)},u=(p,m)=>this.stop(p,m),f=()=>ui(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new cy(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:u,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:vy(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Ht.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!dc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=dw(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&vo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=hw(o.layoutBox,t):this.constraints=!1,this.elastic=vw(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ui(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=gw(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!vo(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=Sw(i,o.root,this.visualElement.getTransformPagePoint());let c=pw(o.layout.layoutBox,a);if(t){const u=t(_w(c));this.hasMutatedConstraints=!!u,u&&(c=hy(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},h=ui(p=>{if(!dc(p,t,this.currentDirection))return;let m=f&&f[p]||{};c&&(m={min:0,max:0});const v=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:i?e[p]:0,bounceStiffness:v,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Xd(this.visualElement,e),i.start(Up(e,i,0,t,this.visualElement,!1))}stopAnimation(){ui(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ui(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),o=i[t];return o||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ui(t=>{const{drag:i}=this.getProps();if(!dc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-Kt(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!vo(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ui(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const f=u.get();o[c]=mw({min:f,max:f},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ui(c=>{if(!dc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];u.set(Kt(f,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;Mw.set(this.visualElement,this);const e=this.visualElement.current,t=Na(e,"pointerdown",f=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();vo(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ht.read(i);const c=Ga(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(ui(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=f[p].translate,m.set(m.get()+f[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=eh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function dc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Tw(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class ww extends $r{constructor(e){super(e),this.removeGroupControls=Qn,this.removeListeners=Qn,this.controls=new Ew(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qn}unmount(){this.removeGroupControls(),this.removeListeners()}}const uv=n=>(e,t)=>{n&&Ht.postRender(()=>n(e,t))};class Aw extends $r{constructor(){super(...arguments),this.removePointerDownListener=Qn}onPointerDown(e){this.session=new cy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:uv(e),onStart:uv(t),onMove:i,onEnd:(a,c)=>{delete this.session,o&&Ht.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Na(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Fc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const xa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(it.test(n))n=parseFloat(n);else return n;const t=fv(n,e.target.x),i=fv(n,e.target.y);return`${t}% ${i}%`}},Cw={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=qr.parse(n);if(o.length>5)return i;const a=qr.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=f;const h=Kt(u,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class bw extends pe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;Y1(Rw),a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Fc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,c=i.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ht.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),up.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function _y(n){const[e,t]=ex(),i=pe.useContext(np);return ce.jsx(bw,{...n,layoutGroup:i,switchLayoutGroup:pe.useContext(lx),isPresent:e,safeToRemove:t})}const Rw={borderRadius:{...xa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xa,borderTopRightRadius:xa,borderBottomLeftRadius:xa,borderBottomRightRadius:xa,boxShadow:Cw};function Pw(n,e,t){const i=Rn(n)?n:Va(n);return i.start(Up("",i,e,t)),i.animation}function Dw(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Lw=(n,e)=>n.depth-e.depth;class Iw{constructor(){this.children=[],this.isDirty=!1}add(e){Tp(this.children,e),this.isDirty=!0}remove(e){wp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Lw),this.isDirty=!1,this.children.forEach(e)}}function Nw(n,e){const t=ki.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(Xr(i),n(a-e))};return Ht.read(i,!0),()=>Xr(i)}const xy=["TopLeft","TopRight","BottomLeft","BottomRight"],Uw=xy.length,dv=n=>typeof n=="string"?parseFloat(n):n,hv=n=>typeof n=="number"||it.test(n);function Fw(n,e,t,i,o,a){o?(n.opacity=Kt(0,t.opacity!==void 0?t.opacity:1,Ow(i)),n.opacityExit=Kt(e.opacity!==void 0?e.opacity:1,0,Bw(i))):a&&(n.opacity=Kt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let c=0;c<Uw;c++){const u=`border${xy[c]}Radius`;let f=pv(e,u),h=pv(t,u);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||hv(f)===hv(h)?(n[u]=Math.max(Kt(dv(f),dv(h),i),0),(Bi.test(h)||Bi.test(f))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Kt(e.rotate||0,t.rotate||0,i))}function pv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Ow=yy(0,.5,Bx),Bw=yy(.5,.95,Qn);function yy(n,e,t){return i=>i<n?0:i>e?1:t(To(n,e,i))}function mv(n,e){n.min=e.min,n.max=e.max}function li(n,e){mv(n.x,e.x),mv(n.y,e.y)}function gv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function vv(n,e,t,i,o){return n-=e,n=$c(n,1/t,i),o!==void 0&&(n=$c(n,1/o,i)),n}function kw(n,e=0,t=1,i=.5,o,a=n,c=n){if(Bi.test(e)&&(e=parseFloat(e),e=Kt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Kt(a.min,a.max,i);n===a&&(u-=e),n.min=vv(n.min,e,t,u,o),n.max=vv(n.max,e,t,u,o)}function _v(n,e,[t,i,o],a,c){kw(n,e[t],e[i],e[o],e.scale,a,c)}const Vw=["x","scaleX","originX"],zw=["y","scaleY","originY"];function xv(n,e,t,i){_v(n.x,e,Vw,t?t.x:void 0,i?i.x:void 0),_v(n.y,e,zw,t?t.y:void 0,i?i.y:void 0)}function yv(n){return n.translate===0&&n.scale===1}function Sy(n){return yv(n.x)&&yv(n.y)}function Sv(n,e){return n.min===e.min&&n.max===e.max}function Gw(n,e){return Sv(n.x,e.x)&&Sv(n.y,e.y)}function Mv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function My(n,e){return Mv(n.x,e.x)&&Mv(n.y,e.y)}function Ev(n){return ei(n.x)/ei(n.y)}function Tv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class Hw{constructor(){this.members=[]}add(e){Tp(this.members,e),e.scheduleRender()}remove(e){if(wp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let i;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ww(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:m,rotateY:v,skewX:_,skewY:M}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),m&&(i+=`rotateX(${m}deg) `),v&&(i+=`rotateY(${v}deg) `),_&&(i+=`skewX(${_}deg) `),M&&(i+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(i+=`scale(${u}, ${f})`),i||"none"}const Ss={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Pa=typeof window<"u"&&window.MotionDebug!==void 0,id=["","X","Y","Z"],jw={visibility:"hidden"},wv=1e3;let Xw=0;function rd(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function Ey(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Dx(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ht,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Ey(i)}function Ty({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=Xw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pa&&(Ss.totalNodes=Ss.resolvedTargetDeltas=Ss.recalculatedProjection=0),this.nodes.forEach($w),this.nodes.forEach(eA),this.nodes.forEach(tA),this.nodes.forEach(Kw),Pa&&window.MotionDebug.record(Ss)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new Iw)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Ap),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const f=this.eventHandlers.get(c);f&&f.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Dw(c),this.instance=c;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||f)&&(this.isLayoutDirty=!0),n){let m;const v=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=Nw(v,250),Fc.hasAnimatedSinceResize&&(Fc.hasAnimatedSinceResize=!1,this.nodes.forEach(Cv))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeTargetChanged:_,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||p.getDefaultTransition()||oA,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=p.getProps(),R=!this.targetLayout||!My(this.targetLayout,M)||_,C=!v&&_;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||C||v&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,C);const b={...yp(E,"layout"),onPlay:S,onComplete:x};(p.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else v||Cv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ey(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Av);return}this.isUpdating||this.nodes.forEach(Qw),this.isUpdating=!1,this.nodes.forEach(Jw),this.nodes.forEach(qw),this.nodes.forEach(Yw),this.clearAllSnapshots();const u=ki.now();xn.delta=fr(0,1e3/60,u-xn.timestamp),xn.timestamp=u,xn.isProcessing=!0,Yf.update.process(xn),Yf.preRender.process(xn),Yf.render.process(xn),xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,up.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Zw),this.sharedNodes.forEach(iA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=en(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Sy(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(u||ys(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return c&&(f=this.removeTransform(f)),aA(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return en();const f=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(lA))){const{scroll:p}=this.root;p&&(yo(f.x,p.offset.x),yo(f.y,p.offset.y))}return f}removeElementScroll(c){var u;const f=en();if(li(f,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return f;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:m,options:v}=p;p!==this.root&&m&&v.layoutScroll&&(m.wasRoot&&li(f,c),yo(f.x,m.offset.x),yo(f.y,m.offset.y))}return f}applyTransform(c,u=!1){const f=en();li(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&So(f,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ys(p.latestValues)&&So(f,p.latestValues)}return ys(this.latestValues)&&So(f,this.latestValues),f}removeTransform(c){const u=en();li(u,c);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!ys(h.latestValues))continue;th(h.latestValues)&&h.updateSnapshot();const p=en(),m=h.measurePageBox();li(p,m),xv(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return ys(this.latestValues)&&xv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!(!this.layout||!(m||v))){if(this.resolvedRelativeTargetAt=xn.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=en(),this.relativeTargetOrigin=en(),Fa(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=en(),this.targetWithTransforms=en()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),my(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=en(),this.relativeTargetOrigin=en(),Fa(this.relativeTargetOrigin,this.target,_.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Pa&&Ss.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||th(this.parent.latestValues)||py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===xn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;li(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;yw(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=en());const{target:M}=u;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gv(this.prevProjectionDelta.x,this.projectionDelta.x),gv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!Tv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Tv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Pa&&Ss.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xo(),this.projectionDelta=xo(),this.projectionDeltaWithTransform=xo()}setAnimationOrigin(c,u=!1){const f=this.snapshot,h=f?f.latestValues:{},p={...this.latestValues},m=xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const v=en(),_=f?f.source:void 0,M=this.layout?this.layout.source:void 0,E=_!==M,S=this.getStack(),x=!S||S.members.length<=1,R=!!(E&&!x&&this.options.crossfade===!0&&!this.path.some(sA));this.animationProgress=0;let C;this.mixTargetDelta=b=>{const D=b/1e3;bv(m.x,c.x,D),bv(m.y,c.y,D),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fa(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),rA(this.relativeTarget,this.relativeTargetOrigin,v,D),C&&Gw(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=en()),li(C,this.relativeTarget)),E&&(this.animationValues=p,Fw(p,h,this.latestValues,D,R,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ht.update(()=>{Fc.hasAnimatedSinceResize=!0,this.currentAnimation=Pw(0,wv,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(wv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:f,layout:h,latestValues:p}=c;if(!(!u||!f||!h)){if(this!==c&&this.layout&&h&&wy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||en();const m=ei(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+m;const v=ei(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+v}li(u,f),So(u,p),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new Hw),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const h={};f.z&&rd("z",c,h,this.animationValues);for(let p=0;p<id.length;p++)rd(`rotate${id[p]}`,c,h,this.animationValues),rd(`skew${id[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){var u,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return jw;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Nc(c==null?void 0:c.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Nc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!ys(this.latestValues)&&(E.transform=p?p({},""):"none",this.hasProjected=!1),E}const v=m.animationValues||m.latestValues;this.applyTransformsToTarget(),h.transform=Ww(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x:_,y:M}=this.projectionDelta;h.transformOrigin=`${_.origin*100}% ${M.origin*100}% 0`,m.animationValues?h.opacity=m===this?(f=(u=v.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=m===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const E in Wc){if(v[E]===void 0)continue;const{correct:S,applyTo:x}=Wc[E],R=h.transform==="none"?v[E]:S(v[E],m);if(x){const C=x.length;for(let b=0;b<C;b++)h[x[b]]=R}else h[E]=R}return this.options.layoutId&&(h.pointerEvents=m===this?Nc(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(Av),this.root.sharedNodes.clear()}}}function qw(n){n.updateLayout()}function Yw(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?ui(m=>{const v=c?t.measuredBox[m]:t.layoutBox[m],_=ei(v);v.min=i[m].min,v.max=v.min+_}):wy(a,t.layoutBox,i)&&ui(m=>{const v=c?t.measuredBox[m]:t.layoutBox[m],_=ei(i[m]);v.max=v.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+_)});const u=xo();Ua(u,i,t.layoutBox);const f=xo();c?Ua(f,n.applyTransform(o,!0),t.measuredBox):Ua(f,i,t.layoutBox);const h=!Sy(u);let p=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:v,layout:_}=m;if(v&&_){const M=en();Fa(M,t.layoutBox,v.layoutBox);const E=en();Fa(E,i,_.layoutBox),My(M,E)||(p=!0),m.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function $w(n){Pa&&Ss.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Kw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Zw(n){n.clearSnapshot()}function Av(n){n.clearMeasurements()}function Qw(n){n.isLayoutDirty=!1}function Jw(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Cv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function eA(n){n.resolveTargetDelta()}function tA(n){n.calcProjection()}function nA(n){n.resetSkewAndRotation()}function iA(n){n.removeLeadSnapshot()}function bv(n,e,t){n.translate=Kt(e.translate,0,t),n.scale=Kt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Rv(n,e,t,i){n.min=Kt(e.min,t.min,i),n.max=Kt(e.max,t.max,i)}function rA(n,e,t,i){Rv(n.x,e.x,t.x,i),Rv(n.y,e.y,t.y,i)}function sA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const oA={duration:.45,ease:[.4,0,.1,1]},Pv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Dv=Pv("applewebkit/")&&!Pv("chrome/")?Math.round:Qn;function Lv(n){n.min=Dv(n.min),n.max=Dv(n.max)}function aA(n){Lv(n.x),Lv(n.y)}function wy(n,e,t){return n==="position"||n==="preserve-aspect"&&!uw(Ev(e),Ev(t),.2)}function lA(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const cA=Ty({attachResizeListener:(n,e)=>Ga(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sd={current:void 0},Ay=Ty({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!sd.current){const n=new cA({});n.mount(window),n.setOptions({layoutScroll:!0}),sd.current=n}return sd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),uA={pan:{Feature:Aw},drag:{Feature:ww,ProjectionNode:Ay,MeasureLayout:_y}};function Iv(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Ht.postRender(()=>a(e,Ka(e)))}class fA extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=uE(e,t=>(Iv(this.node,t,"Start"),i=>Iv(this.node,i,"End"))))}unmount(){}}class dA extends $r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(Ga(this.node.current,"focus",()=>this.onFocus()),Ga(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nv(n,e,t){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Ht.postRender(()=>a(e,Ka(e)))}class hA extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=pE(e,t=>(Nv(this.node,t,"Start"),(i,{success:o})=>Nv(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ih=new WeakMap,od=new WeakMap,pA=n=>{const e=ih.get(n.target);e&&e(n)},mA=n=>{n.forEach(pA)};function gA({root:n,...e}){const t=n||document;od.has(t)||od.set(t,{});const i=od.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(mA,{root:n,...e})),i[o]}function vA(n,e,t){const i=gA(e);return ih.set(n,t),i.observe(n),()=>{ih.delete(n),i.unobserve(n)}}const _A={some:0,all:1};class xA extends $r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:_A[o]},u=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),v=h?p:m;v&&v(f)};return vA(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(yA(e,t))&&this.startObserver()}unmount(){}}function yA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const SA={inView:{Feature:xA},tap:{Feature:hA},focus:{Feature:dA},hover:{Feature:fA}},MA={layout:{ProjectionNode:Ay,MeasureLayout:_y}},rh={current:null},Cy={current:!1};function EA(){if(Cy.current=!0,!!sp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>rh.current=n.matches;n.addListener(e),e()}else rh.current=!1}const TA=[...Qx,bn,qr],wA=n=>TA.find(Zx(n)),Uv=new WeakMap;function AA(n,e,t){for(const i in e){const o=e[i],a=t[i];if(Rn(o))n.addValue(i,o);else if(Rn(a))n.addValue(i,Va(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,Va(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const Fv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class CA{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Lp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=ki.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ht.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:p}=c;this.onUpdate=p,this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=ru(t),this.isVariantNode=ox(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in v){const M=v[_];f[_]!==void 0&&Rn(M)&&M.set(f[_],!1)}}mount(e){this.current=e,Uv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),Cy.current||EA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Uv.delete(this.current),this.projection&&this.projection.unmount(),Xr(this.notifyUpdate),Xr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Ds.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ht.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in wo){const t=wo[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):en()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Fv.length;i++){const o=Fv[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=AA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Va(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&($x(o)||Vx(o))?o=parseFloat(o):!wA(o)&&qr.test(t)&&(o=Xx(e,t)),this.setBaseTarget(e,Rn(o)?o.get():o)),Rn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=dp(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Rn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ap),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class by extends CA{constructor(){super(...arguments),this.KeyframeResolver=Jx}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Rn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function bA(n){return window.getComputedStyle(n)}class RA extends by{constructor(){super(...arguments),this.type="html",this.renderInstance=mx}readValueFromInstance(e,t){if(Ds.has(t)){const i=Dp(t);return i&&i.default||0}else{const i=bA(e),o=(dx(t)?i.getPropertyValue(t):i[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return gy(e,t)}build(e,t,i){mp(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return xp(e,t,i)}}class PA extends by{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=en}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ds.has(t)){const i=Dp(t);return i&&i.default||0}return t=gx.has(t)?t:cp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return xx(e,t,i)}build(e,t,i){gp(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,o){vx(e,t,i,o)}mount(e){this.isSVGTag=_p(e.tagName),super.mount(e)}}const DA=(n,e)=>fp(n)?new PA(e):new RA(e,{allowProjection:n!==pe.Fragment}),LA=iE({...tw,...SA,...uA,...MA},DA),Ut=_1(LA);function IA(){const[n,e]=pe.useState(!1),[t,i]=pe.useState("hero"),[o,a]=pe.useState(!1),{theme:c,toggleTheme:u}=J_(),{language:f,toggleLanguage:h,t:p}=eu(),m=[{name:p.nav.home,href:"#hero"},{name:p.nav.experience,href:"#experience"},{name:p.nav.skills,href:"#skills"},{name:f==="es"?"Proyectos":"Projects",href:"#projects"},{name:p.nav.certifications,href:"#certifications"},{name:p.nav.profile,href:"#about"},{name:p.nav.contact,href:"#contact"}];pe.useEffect(()=>{const _=()=>{e(window.scrollY>50);const M=m.map(E=>E.href.replace("#",""));for(const E of M.reverse()){const S=document.getElementById(E);if(S&&S.getBoundingClientRect().top<=150){i(E);break}}};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[m]);const v=_=>{const M=document.querySelector(_);M&&M.scrollIntoView({behavior:"smooth"}),a(!1)};return ce.jsxs(ce.Fragment,{children:[ce.jsx(Ut.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5,delay:.2},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"py-3 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5":"py-5 bg-transparent"}`,children:ce.jsxs("div",{className:"max-w-6xl mx-auto px-6 flex items-center justify-between",children:[ce.jsxs(Ut.a,{href:"#hero",onClick:_=>{_.preventDefault(),v("#hero")},className:"flex items-center gap-2 group",whileHover:{scale:1.05},children:[ce.jsx("img",{src:"/images/carlos-jair.jpg",alt:"Carlos Jair",className:"w-10 h-10 rounded-lg object-cover object-top border-2 border-neon-cyan/30"}),ce.jsx("span",{className:"font-semibold text-white hidden sm:block group-hover:text-neon-cyan transition-colors",children:"Carlos Jair"})]}),ce.jsx("div",{className:"hidden lg:flex items-center gap-1",children:m.map(_=>ce.jsx(Ut.button,{onClick:()=>v(_.href),className:`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${t===_.href.replace("#","")?"text-neon-cyan bg-neon-cyan/10":"text-text-muted hover:text-white hover:bg-white/5"}`,whileHover:{scale:1.05},whileTap:{scale:.95},children:_.name},_.href))}),ce.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[ce.jsxs(Ut.button,{onClick:h,whileHover:{scale:1.1},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10",title:f==="es"?"Switch to English":"Cambiar a Español",children:[ce.jsx("img",{src:f==="es"?"https://flagcdn.com/w40/mx.png":"https://flagcdn.com/w40/us.png",alt:f==="es"?"México":"USA",className:"w-6 h-4 object-cover rounded-sm"}),ce.jsx("span",{className:"text-white font-medium text-sm",children:f==="es"?"ES":"EN"})]}),ce.jsx(Ut.button,{onClick:u,whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-9 h-9 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center",title:c==="dark"?"Tema claro":"Dark theme",children:c==="dark"?"🌙":"☀️"}),ce.jsxs(Ut.a,{href:"/cv-carlos-castorena.pdf",download:!0,className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all text-sm",whileHover:{scale:1.05},whileTap:{scale:.95},children:["📄 ",p.nav.downloadCV]})]}),ce.jsxs("button",{onClick:()=>a(!o),className:"lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5",children:[ce.jsx(Ut.span,{animate:{rotate:o?45:0,y:o?6:0},className:"w-6 h-0.5 bg-white rounded-full"}),ce.jsx(Ut.span,{animate:{opacity:o?0:1},className:"w-6 h-0.5 bg-white rounded-full"}),ce.jsx(Ut.span,{animate:{rotate:o?-45:0,y:o?-6:0},className:"w-6 h-0.5 bg-white rounded-full"})]})]})}),ce.jsx(u1,{children:o&&ce.jsx(Ut.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl pt-24 px-6 lg:hidden",children:ce.jsxs("div",{className:"flex flex-col gap-2",children:[m.map((_,M)=>ce.jsx(Ut.button,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:M*.1},onClick:()=>v(_.href),className:"text-left py-4 px-4 text-lg font-medium text-white hover:text-neon-cyan hover:bg-white/5 rounded-lg transition-all",children:_.name},_.href)),ce.jsxs("div",{className:"flex items-center gap-4 mt-4 py-4 px-4 border-t border-dark-border",children:[ce.jsxs("button",{onClick:h,className:"flex items-center gap-2 text-white",children:[ce.jsx("img",{src:f==="es"?"https://flagcdn.com/w40/mx.png":"https://flagcdn.com/w40/us.png",alt:f==="es"?"México":"USA",className:"w-6 h-4 object-cover rounded-sm"}),ce.jsx("span",{children:f==="es"?"Español":"English"})]}),ce.jsxs("button",{onClick:u,className:"flex items-center gap-2 text-white",children:[ce.jsx("span",{className:"text-xl",children:c==="dark"?"🌙":"☀️"}),ce.jsx("span",{children:c==="dark"?p.theme.dark:p.theme.light})]})]}),ce.jsxs(Ut.a,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.6},href:"/cv-carlos-castorena.pdf",download:!0,className:"mt-2 py-4 px-4 text-center bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-semibold rounded-lg",children:["📄 ",p.nav.downloadCV]})]})})})]})}const NA=[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",x:"15%",y:"20%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",x:"80%",y:"15%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",x:"85%",y:"70%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",x:"10%",y:"75%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",x:"25%",y:"80%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",x:"70%",y:"25%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",x:"75%",y:"85%"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",x:"20%",y:"30%"}],UA=pe.memo(function({onComplete:e}){const{language:t}=eu();pe.useEffect(()=>{const o=setTimeout(e,2500);return()=>clearTimeout(o)},[e]);const i=t==="es"?"Bienvenido":"Welcome";return ce.jsxs(Ut.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.6},className:"fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden",children:[ce.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[ce.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"}),ce.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"})]}),NA.map((o,a)=>ce.jsx(Ut.img,{src:o.icon,alt:"",className:"absolute w-8 h-8 sm:w-10 sm:h-10 will-change-transform",style:{left:o.x,top:o.y},initial:{opacity:0,scale:0},animate:{opacity:[0,.4,.4],scale:[0,1,1],y:[0,-15,0]},transition:{duration:.5,delay:a*.1,y:{duration:3+a*.3,repeat:1/0,ease:"easeInOut",delay:a*.2}}},a)),ce.jsxs("div",{className:"text-center relative z-10 px-6",children:[ce.jsx(Ut.h1,{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide",children:i.split("").map((o,a)=>ce.jsx(Ut.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.3+a*.04,ease:"easeOut"},className:"inline-block",style:{textShadow:"0 0 40px rgba(0, 245, 255, 0.5)"},children:o},a))}),ce.jsx(Ut.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.9,duration:.4},className:"text-text-muted text-sm md:text-base mb-8 tracking-widest uppercase",children:t==="es"?"Portafolio Profesional":"Professional Portfolio"}),ce.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},className:"flex justify-center",children:ce.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-t-neon-cyan border-r-neon-purple border-b-transparent border-l-transparent animate-spin"})})]})]})});function FA(){const{language:n}=eu(),[e,t]=pe.useState(0),[i,o]=pe.useState(""),[a,c]=pe.useState(!1),u=pe.useMemo(()=>n==="es"?["Desarrollador Jr.","Apasionado por el código","En constante aprendizaje","Trabajo en equipo","Orientado a resultados","Backend & Frontend","Código limpio","Bases de datos SQL"]:["Jr. Developer","Passionate about code","Always learning","Team player","Results-oriented","Backend & Frontend","Clean code","SQL Databases"],[n]),f={name:"Carlos Jair Castorena",available:n==="es"?"Disponible para trabajar":"Available to work",description:n==="es"?"Desarrollador de software con formación en Ingeniería en Tecnologías de la Información, en búsqueda de una oportunidad laboral para integrarme a un equipo de desarrollo y crecer profesionalmente.":"Software developer with a background in Information Technology Engineering, looking for a job opportunity to join a development team and grow professionally.",aboutMe:n==="es"?"Sobre Mí":"About Me"},h=[{name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",url:"https://github.com/jaircastorena2"},{name:"LinkedIn",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",url:"https://linkedin.com/in/carlos-jair-castorena"},{name:"Email",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",url:"mailto:jaircastorena2@gmail.com"}];return pe.useEffect(()=>{const p=u[e],m=setTimeout(()=>{a?i.length>0?o(p.slice(0,i.length-1)):(c(!1),t(v=>(v+1)%u.length)):i.length<p.length?o(p.slice(0,i.length+1)):setTimeout(()=>c(!0),2e3)},a?50:100);return()=>clearTimeout(m)},[i,a,e,u]),ce.jsxs("section",{id:"hero",className:"min-h-screen relative overflow-hidden flex items-center",children:[ce.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[ce.jsx("div",{className:"absolute top-20 right-10 w-96 h-96 bg-neon-purple/15 rounded-full blur-[100px]"}),ce.jsx("div",{className:"absolute bottom-20 left-10 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[80px]"})]}),ce.jsx("div",{className:"max-w-7xl mx-auto px-6 w-full relative z-10",children:ce.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 items-center",children:[ce.jsxs("div",{className:"lg:col-span-7 order-2 lg:order-1",children:[ce.jsxs(Ut.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},className:"inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 rounded-full border border-green-500/20",children:[ce.jsxs("span",{className:"relative flex h-2 w-2",children:[ce.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),ce.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),ce.jsx("span",{className:"text-green-400 text-sm font-medium",children:f.available})]}),ce.jsx(Ut.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-neon-cyan text-xl font-semibold block mb-2",children:f.name}),ce.jsxs(Ut.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4",children:["Desarrollador de Software"," ",ce.jsx("span",{className:"bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent",children:"Entry Level"})]}),ce.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"flex items-center gap-2 text-lg md:text-xl font-mono mb-6",children:[ce.jsx("span",{className:"text-neon-purple",children:"<"}),ce.jsx("span",{className:"text-neon-cyan",children:i}),ce.jsx(Ut.span,{animate:{opacity:[1,0]},transition:{duration:.5,repeat:1/0},className:"text-white",children:"_"}),ce.jsx("span",{className:"text-neon-purple",children:"/>"})]}),ce.jsx(Ut.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-text-muted text-base md:text-lg max-w-xl mb-8",children:f.description}),ce.jsxs(Ut.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"flex flex-wrap gap-4 mb-8",children:[ce.jsx("a",{href:"#about",className:"px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-xl hover:opacity-90 transition-opacity",children:f.aboutMe}),ce.jsx("a",{href:"/cv-carlos-castorena.pdf",target:"_blank",className:"px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all",children:"📄 CV"})]}),ce.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"flex gap-3",children:h.map(p=>ce.jsx("a",{href:p.url,target:p.name!=="Email"?"_blank":void 0,rel:"noopener noreferrer",className:"w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all",children:ce.jsx("img",{src:p.icon,alt:p.name,className:"w-5 h-5"})},p.name))})]}),ce.jsx(Ut.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.3},className:"lg:col-span-5 order-1 lg:order-2 flex justify-center",children:ce.jsxs("div",{className:"relative",children:[ce.jsx("div",{className:"absolute inset-[-25px] border border-dashed border-neon-purple/20 rounded-full animate-spin-slow"}),ce.jsx(Ut.div,{animate:{rotate:-360},transition:{duration:15,repeat:1/0,ease:"linear"},className:"absolute inset-[-10px] border border-dashed border-neon-cyan/30 rounded-full"}),ce.jsx(Ut.div,{whileHover:{scale:1.05},animate:{boxShadow:["0 0 30px rgba(0, 245, 255, 0.3)","0 0 50px rgba(191, 0, 255, 0.3)","0 0 30px rgba(0, 245, 255, 0.3)"]},transition:{boxShadow:{duration:3,repeat:1/0},scale:{duration:.3}},className:"relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-neon-cyan/30 cursor-pointer",children:ce.jsx("img",{src:"/images/carlos-jair.jpg",alt:"Carlos Jair Castorena",className:"w-full h-full object-cover object-top",loading:"eager"})})]})})]})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="182",OA=0,Ov=1,BA=2,Oc=1,kA=2,Da=3,Yr=0,Wn=1,rr=2,lr=0,Mo=1,Bv=2,kv=3,Vv=4,VA=5,Es=100,zA=101,GA=102,HA=103,WA=104,jA=200,XA=201,qA=202,YA=203,sh=204,oh=205,$A=206,KA=207,ZA=208,QA=209,JA=210,eC=211,tC=212,nC=213,iC=214,ah=0,lh=1,ch=2,Co=3,uh=4,fh=5,dh=6,hh=7,Ry=0,rC=1,sC=2,Vi=0,Py=1,Dy=2,Ly=3,Iy=4,Ny=5,Uy=6,Fy=7,Oy=300,Rs=301,bo=302,ph=303,mh=304,au=306,gh=1e3,sr=1001,vh=1002,yn=1003,oC=1004,hc=1005,Pn=1006,ad=1007,As=1008,di=1009,By=1010,ky=1011,Ha=1012,Op=1013,Hi=1014,Fi=1015,dr=1016,Bp=1017,kp=1018,Wa=1020,Vy=35902,zy=35899,Gy=1021,Hy=1022,wi=1023,hr=1026,Cs=1027,Wy=1028,Vp=1029,Ro=1030,zp=1031,Gp=1033,Bc=33776,kc=33777,Vc=33778,zc=33779,_h=35840,xh=35841,yh=35842,Sh=35843,Mh=36196,Eh=37492,Th=37496,wh=37488,Ah=37489,Ch=37490,bh=37491,Rh=37808,Ph=37809,Dh=37810,Lh=37811,Ih=37812,Nh=37813,Uh=37814,Fh=37815,Oh=37816,Bh=37817,kh=37818,Vh=37819,zh=37820,Gh=37821,Hh=36492,Wh=36494,jh=36495,Xh=36283,qh=36284,Yh=36285,$h=36286,aC=3200,lC=0,cC=1,Wr="",fi="srgb",Po="srgb-linear",Kc="linear",Nt="srgb",to=7680,zv=519,uC=512,fC=513,dC=514,Hp=515,hC=516,pC=517,Wp=518,mC=519,Gv=35044,Hv="300 es",Oi=2e3,Zc=2001;function jy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gC(){const n=Qc("canvas");return n.style.display="block",n}const Wv={};function jv(...n){const e="THREE."+n.shift();console.log(e,...n)}function ut(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Pt(...n){const e="THREE."+n.shift();console.error(e,...n)}function ja(...n){const e=n.join(" ");e in Wv||(Wv[e]=!0,ut(...n))}function vC(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class No{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,Kh=180/Math.PI;function Za(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function _C(n,e){return(n%e+e)%e}function cd(n,e,t){return(1-t)*n+t*e}function ya(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qa{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let f=i[o+0],h=i[o+1],p=i[o+2],m=i[o+3],v=a[c+0],_=a[c+1],M=a[c+2],E=a[c+3];if(u<=0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u>=1){e[t+0]=v,e[t+1]=_,e[t+2]=M,e[t+3]=E;return}if(m!==E||f!==v||h!==_||p!==M){let S=f*v+h*_+p*M+m*E;S<0&&(v=-v,_=-_,M=-M,E=-E,S=-S);let x=1-u;if(S<.9995){const R=Math.acos(S),C=Math.sin(R);x=Math.sin(x*R)/C,u=Math.sin(u*R)/C,f=f*x+v*u,h=h*x+_*u,p=p*x+M*u,m=m*x+E*u}else{f=f*x+v*u,h=h*x+_*u,p=p*x+M*u,m=m*x+E*u;const R=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=R,h*=R,p*=R,m*=R}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],f=i[o+1],h=i[o+2],p=i[o+3],m=a[c],v=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*m+f*_-h*v,e[t+1]=f*M+p*v+h*m-u*_,e[t+2]=h*M+p*_+u*v-f*m,e[t+3]=p*M-u*m-f*v-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(o/2),m=u(a/2),v=f(i/2),_=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=v*p*m+h*_*M,this._y=h*_*m-v*p*M,this._z=h*p*M+v*_*m,this._w=h*p*m-v*_*M;break;case"YXZ":this._x=v*p*m+h*_*M,this._y=h*_*m-v*p*M,this._z=h*p*M-v*_*m,this._w=h*p*m+v*_*M;break;case"ZXY":this._x=v*p*m-h*_*M,this._y=h*_*m+v*p*M,this._z=h*p*M+v*_*m,this._w=h*p*m-v*_*M;break;case"ZYX":this._x=v*p*m-h*_*M,this._y=h*_*m+v*p*M,this._z=h*p*M-v*_*m,this._w=h*p*m+v*_*M;break;case"YZX":this._x=v*p*m+h*_*M,this._y=h*_*m+v*p*M,this._z=h*p*M-v*_*m,this._w=h*p*m-v*_*M;break;case"XZY":this._x=v*p*m-h*_*M,this._y=h*_*m-v*p*M,this._z=h*p*M+v*_*m,this._w=h*p*m+v*_*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],v=i+u+m;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(p-f)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(i>u&&i>m){const _=2*Math.sqrt(1+i-u-m);this._w=(p-f)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>m){const _=2*Math.sqrt(1+u-i-m);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+m-i-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-i*h,this._z=a*p+c*h+i*f-o*u,this._w=c*p-i*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,i=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),m=2*(a*i-c*t);return this.x=t+f*h+c*m-u*p,this.y=i+f*p+u*h-a*m,this.z=o+f*m+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-i*f,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new ie,Xv=new Qa;class dt{constructor(e,t,i,o,a,c,u,f,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h)}set(e,t,i,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],m=i[7],v=i[2],_=i[5],M=i[8],E=o[0],S=o[3],x=o[6],R=o[1],C=o[4],b=o[7],D=o[2],I=o[5],U=o[8];return a[0]=c*E+u*R+f*D,a[3]=c*S+u*C+f*I,a[6]=c*x+u*b+f*U,a[1]=h*E+p*R+m*D,a[4]=h*S+p*C+m*I,a[7]=h*x+p*b+m*U,a[2]=v*E+_*R+M*D,a[5]=v*S+_*C+M*I,a[8]=v*x+_*b+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*c-u*h,v=u*f-p*a,_=h*a-c*f,M=t*m+i*v+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(o*h-p*i)*E,e[2]=(u*i-o*c)*E,e[3]=v*E,e[4]=(p*t-o*f)*E,e[5]=(o*a-u*t)*E,e[6]=_*E,e[7]=(i*f-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(fd.makeScale(e,t)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,t){return this.premultiply(fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new dt,qv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xC(){const n={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Nt&&(o.r=cr(o.r),o.g=cr(o.g),o.b=cr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Eo(o.r),o.g=Eo(o.g),o.b=Eo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?Kc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Po]:{primaries:e,whitePoint:i,transfer:Kc,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const At=xC();function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let no;class yC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=Qc("canvas")),no.width=e.width,no.height=e.height;const o=no.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=cr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SC=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(dd(o[c].image)):a.push(dd(o[c]))}else a=dd(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function dd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let MC=0;const hd=new ie;class Fn extends No{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,i=sr,o=sr,a=Pn,c=As,u=wi,f=di,h=Fn.DEFAULT_ANISOTROPY,p=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=Za(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Oy;Fn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,i=0,o=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],p=f[4],m=f[8],v=f[1],_=f[5],M=f[9],E=f[2],S=f[6],x=f[10];if(Math.abs(p-v)<.01&&Math.abs(m-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,b=(_+1)/2,D=(x+1)/2,I=(p+v)/4,U=(m+E)/4,k=(M+S)/4;return C>b&&C>D?C<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(C),o=I/i,a=U/i):b>D?b<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),i=I/o,a=k/o):D<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(D),i=U/a,o=k/a),this.set(i,o,a,t),this}let R=Math.sqrt((S-M)*(S-M)+(m-E)*(m-E)+(v-p)*(v-p));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(m-E)/R,this.z=(v-p)/R,this.w=Math.acos((h+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EC extends No{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const o={width:e,height:t,depth:i.depth},a=new Fn(o);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new jp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends EC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xy extends Fn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TC extends Fn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,yi):yi.fromBufferAttribute(a,c),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),mc.subVectors(this.max,Sa),io.subVectors(e.a,Sa),ro.subVectors(e.b,Sa),so.subVectors(e.c,Sa),Fr.subVectors(ro,io),Or.subVectors(so,ro),ps.subVectors(io,so);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-ps.z,ps.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,ps.z,0,-ps.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-ps.y,ps.x,0];return!pd(t,io,ro,so,mc)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,io,ro,so,mc))?!1:(gc.crossVectors(Fr,Or),t=[gc.x,gc.y,gc.z],pd(t,io,ro,so,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],yi=new ie,pc=new Ja,io=new ie,ro=new ie,so=new ie,Fr=new ie,Or=new ie,ps=new ie,Sa=new ie,mc=new ie,gc=new ie,ms=new ie;function pd(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){ms.fromArray(n,a);const u=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),f=e.dot(ms),h=t.dot(ms),p=i.dot(ms);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const wC=new Ja,Ma=new ie,md=new ie;class Xp{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wC.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Ma,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(md)),this.expandByPoint(Ma.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new ie,gd=new ie,vc=new ie,Br=new ie,vd=new ie,_c=new ie,_d=new ie;class AC{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){gd.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(gd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(vc),u=Br.dot(this.direction),f=-Br.dot(vc),h=Br.lengthSq(),p=Math.abs(1-c*c);let m,v,_,M;if(p>0)if(m=c*f-u,v=c*u-f,M=a*p,m>=0)if(v>=-M)if(v<=M){const E=1/p;m*=E,v*=E,_=m*(m+c*v+2*u)+v*(c*m+v+2*f)+h}else v=a,m=Math.max(0,-(c*v+u)),_=-m*m+v*(v+2*f)+h;else v=-a,m=Math.max(0,-(c*v+u)),_=-m*m+v*(v+2*f)+h;else v<=-M?(m=Math.max(0,-(-c*a+u)),v=m>0?-a:Math.min(Math.max(-a,-f),a),_=-m*m+v*(v+2*f)+h):v<=M?(m=0,v=Math.min(Math.max(-a,-f),a),_=v*(v+2*f)+h):(m=Math.max(0,-(c*a+u)),v=m>0?a:Math.min(Math.max(-a,-f),a),_=-m*m+v*(v+2*f)+h);else v=c>0?-a:a,m=Math.max(0,-(c*v+u)),_=-m*m+v*(v+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(gd).addScaledVector(vc,v),_}intersectSphere(e,t){er.subVectors(e.center,this.origin);const i=er.dot(this.direction),o=er.dot(er)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),m>=0?(u=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(u=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),i>f||u>o)||((u>i||i!==i)&&(i=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,i,o,a){vd.subVectors(t,e),_c.subVectors(i,e),_d.crossVectors(vd,_c);let c=this.direction.dot(_d),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Br.subVectors(this.origin,e);const f=u*this.direction.dot(_c.crossVectors(Br,_c));if(f<0)return null;const h=u*this.direction.dot(vd.cross(Br));if(h<0||f+h>c)return null;const p=-u*Br.dot(_d);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S)}set(e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=p,x[10]=m,x[14]=v,x[3]=_,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),a=1/oo.setFromMatrixColumn(e,1).length(),c=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=c*p,_=c*m,M=u*p,E=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=_+M*h,t[5]=v-E*h,t[9]=-u*f,t[2]=E-v*h,t[6]=M+_*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*p,_=f*m,M=h*p,E=h*m;t[0]=v+E*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=E+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*p,_=f*m,M=h*p,E=h*m;t[0]=v-E*u,t[4]=-c*m,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=E-v*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*p,_=c*m,M=u*p,E=u*m;t[0]=f*p,t[4]=M*h-_,t[8]=v*h+E,t[1]=f*m,t[5]=E*h+v,t[9]=_*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,_=c*h,M=u*f,E=u*h;t[0]=f*p,t[4]=E-v*m,t[8]=M*m+_,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*m+M,t[10]=v-E*m}else if(e.order==="XZY"){const v=c*f,_=c*h,M=u*f,E=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=v*m+E,t[5]=c*p,t[9]=_*m-M,t[2]=M*m-_,t[6]=u*p,t[10]=E*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CC,e,bC)}lookAt(e,t,i){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),kr.crossVectors(i,Kn),kr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),kr.crossVectors(i,Kn)),kr.normalize(),xc.crossVectors(Kn,kr),o[0]=kr.x,o[4]=xc.x,o[8]=Kn.x,o[1]=kr.y,o[5]=xc.y,o[9]=Kn.y,o[2]=kr.z,o[6]=xc.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],m=i[5],v=i[9],_=i[13],M=i[2],E=i[6],S=i[10],x=i[14],R=i[3],C=i[7],b=i[11],D=i[15],I=o[0],U=o[4],k=o[8],A=o[12],L=o[1],B=o[5],K=o[9],Y=o[13],X=o[2],le=o[6],Q=o[10],$=o[14],W=o[3],de=o[7],re=o[11],O=o[15];return a[0]=c*I+u*L+f*X+h*W,a[4]=c*U+u*B+f*le+h*de,a[8]=c*k+u*K+f*Q+h*re,a[12]=c*A+u*Y+f*$+h*O,a[1]=p*I+m*L+v*X+_*W,a[5]=p*U+m*B+v*le+_*de,a[9]=p*k+m*K+v*Q+_*re,a[13]=p*A+m*Y+v*$+_*O,a[2]=M*I+E*L+S*X+x*W,a[6]=M*U+E*B+S*le+x*de,a[10]=M*k+E*K+S*Q+x*re,a[14]=M*A+E*Y+S*$+x*O,a[3]=R*I+C*L+b*X+D*W,a[7]=R*U+C*B+b*le+D*de,a[11]=R*k+C*K+b*Q+D*re,a[15]=R*A+C*Y+b*$+D*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],v=e[10],_=e[14],M=e[3],E=e[7],S=e[11],x=e[15],R=f*_-h*v,C=u*_-h*m,b=u*v-f*m,D=c*_-h*p,I=c*v-f*p,U=c*m-u*p;return t*(E*R-S*C+x*b)-i*(M*R-S*D+x*I)+o*(M*C-E*D+x*U)-a*(M*b-E*I+S*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],v=e[10],_=e[11],M=e[12],E=e[13],S=e[14],x=e[15],R=m*S*h-E*v*h+E*f*_-u*S*_-m*f*x+u*v*x,C=M*v*h-p*S*h-M*f*_+c*S*_+p*f*x-c*v*x,b=p*E*h-M*m*h+M*u*_-c*E*_-p*u*x+c*m*x,D=M*m*f-p*E*f-M*u*v+c*E*v+p*u*S-c*m*S,I=t*R+i*C+o*b+a*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=R*U,e[1]=(E*v*a-m*S*a-E*o*_+i*S*_+m*o*x-i*v*x)*U,e[2]=(u*S*a-E*f*a+E*o*h-i*S*h-u*o*x+i*f*x)*U,e[3]=(m*f*a-u*v*a-m*o*h+i*v*h+u*o*_-i*f*_)*U,e[4]=C*U,e[5]=(p*S*a-M*v*a+M*o*_-t*S*_-p*o*x+t*v*x)*U,e[6]=(M*f*a-c*S*a-M*o*h+t*S*h+c*o*x-t*f*x)*U,e[7]=(c*v*a-p*f*a+p*o*h-t*v*h-c*o*_+t*f*_)*U,e[8]=b*U,e[9]=(M*m*a-p*E*a-M*i*_+t*E*_+p*i*x-t*m*x)*U,e[10]=(c*E*a-M*u*a+M*i*h-t*E*h-c*i*x+t*u*x)*U,e[11]=(p*u*a-c*m*a-p*i*h+t*m*h+c*i*_-t*u*_)*U,e[12]=D*U,e[13]=(p*E*o-M*m*o+M*i*v-t*E*v-p*i*S+t*m*S)*U,e[14]=(M*u*o-c*E*o-M*i*f+t*E*f+c*i*S-t*u*S)*U,e[15]=(c*m*o-p*u*o+p*i*f-t*m*f-c*i*v+t*u*v)*U,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+i,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,m=u+u,v=a*h,_=a*p,M=a*m,E=c*p,S=c*m,x=u*m,R=f*h,C=f*p,b=f*m,D=i.x,I=i.y,U=i.z;return o[0]=(1-(E+x))*D,o[1]=(_+b)*D,o[2]=(M-C)*D,o[3]=0,o[4]=(_-b)*I,o[5]=(1-(v+x))*I,o[6]=(S+R)*I,o[7]=0,o[8]=(M+C)*U,o[9]=(S-R)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=oo.set(o[0],o[1],o[2]).length();const c=oo.set(o[4],o[5],o[6]).length(),u=oo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),Si.copy(this);const h=1/a,p=1/c,m=1/u;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=p,Si.elements[5]*=p,Si.elements[6]*=p,Si.elements[8]*=m,Si.elements[9]*=m,Si.elements[10]*=m,t.setFromRotationMatrix(Si),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=Oi,f=!1){const h=this.elements,p=2*a/(t-e),m=2*a/(i-o),v=(t+e)/(t-e),_=(i+o)/(i-o);let M,E;if(f)M=a/(c-a),E=c*a/(c-a);else if(u===Oi)M=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===Zc)M=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Oi,f=!1){const h=this.elements,p=2/(t-e),m=2/(i-o),v=-(t+e)/(t-e),_=-(i+o)/(i-o);let M,E;if(f)M=1/(c-a),E=c/(c-a);else if(u===Oi)M=-2/(c-a),E=-(c+a)/(c-a);else if(u===Zc)M=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=m,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oo=new ie,Si=new sn,CC=new ie(0,0,0),bC=new ie(1,1,1),kr=new ie,xc=new ie,Kn=new ie,$v=new sn,Kv=new Qa;let Ps=class qy{constructor(e=0,t=0,i=0,o=qy.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],m=o[2],v=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $v.makeRotationFromQuaternion(e),this.setFromRotationMatrix($v,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ps.DEFAULT_ORDER="XYZ";class Yy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RC=0;const Zv=new ie,ao=new Qa,tr=new sn,yc=new ie,Ea=new ie,PC=new ie,DC=new Qa,Qv=new ie(1,0,0),Jv=new ie(0,1,0),e_=new ie(0,0,1),t_={type:"added"},LC={type:"removed"},lo={type:"childadded",child:null},xd={type:"childremoved",child:null};class Jn extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new ie,t=new Ps,i=new Qa,o=new ie(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new dt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,t){return Zv.copy(e).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yc.copy(e):yc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ea,yc,this.up):tr.lookAt(yc,Ea,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(tr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),lo.child=e,this.dispatchEvent(lo),lo.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LC),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,PC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,DC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),v=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new ie(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new ie,nr=new ie,yd=new ie,ir=new ie,co=new ie,uo=new ie,n_=new ie,Sd=new ie,Md=new ie,Ed=new ie,Td=new tn,wd=new tn,Ad=new tn;let Ta=class go{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Mi.subVectors(e,t),o.cross(Mi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Mi.subVectors(o,t),nr.subVectors(i,t),yd.subVectors(e,t);const c=Mi.dot(Mi),u=Mi.dot(nr),f=Mi.dot(yd),h=nr.dot(nr),p=nr.dot(yd),m=c*h-u*u;if(m===0)return a.set(0,0,0),null;const v=1/m,_=(h*f-u*p)*v,M=(c*p-u*f)*v;return a.set(1-_-M,M,_)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,o,a,c,u,f){return this.getBarycoord(e,t,i,o,ir)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ir.x),f.addScaledVector(c,ir.y),f.addScaledVector(u,ir.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return Td.setScalar(0),wd.setScalar(0),Ad.setScalar(0),Td.fromBufferAttribute(e,t),wd.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Td,a.x),c.addScaledVector(wd,a.y),c.addScaledVector(Ad,a.z),c}static isFrontFacing(e,t,i,o){return Mi.subVectors(i,t),nr.subVectors(e,t),Mi.cross(nr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return go.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return go.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return go.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return go.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return go.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;co.subVectors(o,i),uo.subVectors(a,i),Sd.subVectors(e,i);const f=co.dot(Sd),h=uo.dot(Sd);if(f<=0&&h<=0)return t.copy(i);Md.subVectors(e,o);const p=co.dot(Md),m=uo.dot(Md);if(p>=0&&m<=p)return t.copy(o);const v=f*m-p*h;if(v<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(co,c);Ed.subVectors(e,a);const _=co.dot(Ed),M=uo.dot(Ed);if(M>=0&&_<=M)return t.copy(a);const E=_*h-f*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(uo,u);const S=p*M-_*m;if(S<=0&&m-p>=0&&_-M>=0)return n_.subVectors(a,o),u=(m-p)/(m-p+(_-M)),t.copy(o).addScaledVector(n_,u);const x=1/(S+E+v);return c=E*x,u=v*x,t.copy(i).addScaledVector(co,c).addScaledVector(uo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const $y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Cd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=At.workingColorSpace){if(e=_C(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Cd(c,a,e+1/3),this.g=Cd(c,a,e),this.b=Cd(c,a,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function i(a){a!==void 0&&parseFloat(a)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const i=$y[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return At.workingToColorSpace(Cn.copy(this),e),Math.round(yt(Cn.r*255,0,255))*65536+Math.round(yt(Cn.g*255,0,255))*256+Math.round(yt(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,o=Cn.g,a=Cn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:f=(o-a)/m+(o<a?6:0);break;case o:f=(a-i)/m+2;break;case a:f=(i-o)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){At.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,o=Cn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Sc);const i=cd(Vr.h,Sc.h,t),o=cd(Vr.s,Sc.s,t),a=cd(Vr.l,Sc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Cn=new Ot;Ot.NAMES=$y;let IC=0;class lu extends No{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Mo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(i.blending=this.blending),this.side!==Yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ky extends lu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.combine=Ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new ie,Mc=new St;let NC=0;class Gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gv,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),o=Hn(o,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gv&&(e.usage=this.usage),e}}class Zy extends Gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qy extends Gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ur extends Gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let UC=0;const ci=new sn,bd=new Jn,fo=new ie,Zn=new Ja,wa=new Ja,gn=new ie;class mr extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?Qy:Zy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ur(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];wa.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(Zn.min,wa.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,wa.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(wa.min),Zn.expandByPoint(wa.max))}Zn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)gn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(gn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)gn.fromBufferAttribute(u,h),f&&(fo.fromBufferAttribute(e,h),gn.add(fo)),o=Math.max(o,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let k=0;k<i.count;k++)u[k]=new ie,f[k]=new ie;const h=new ie,p=new ie,m=new ie,v=new St,_=new St,M=new St,E=new ie,S=new ie;function x(k,A,L){h.fromBufferAttribute(i,k),p.fromBufferAttribute(i,A),m.fromBufferAttribute(i,L),v.fromBufferAttribute(a,k),_.fromBufferAttribute(a,A),M.fromBufferAttribute(a,L),p.sub(h),m.sub(h),_.sub(v),M.sub(v);const B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(m,-_.y).multiplyScalar(B),S.copy(m).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(B),u[k].add(E),u[A].add(E),u[L].add(E),f[k].add(S),f[A].add(S),f[L].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,A=R.length;k<A;++k){const L=R[k],B=L.start,K=L.count;for(let Y=B,X=B+K;Y<X;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new ie,b=new ie,D=new ie,I=new ie;function U(k){D.fromBufferAttribute(o,k),I.copy(D);const A=u[k];C.copy(A),C.sub(D.multiplyScalar(D.dot(A))).normalize(),b.crossVectors(I,A);const B=b.dot(f[k])<0?-1:1;c.setXYZW(k,C.x,C.y,C.z,B)}for(let k=0,A=R.length;k<A;++k){const L=R[k],B=L.start,K=L.count;for(let Y=B,X=B+K;Y<X;Y+=3)U(e.getX(Y+0)),U(e.getX(Y+1)),U(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,_=i.count;v<_;v++)i.setXYZ(v,0,0,0);const o=new ie,a=new ie,c=new ie,u=new ie,f=new ie,h=new ie,p=new ie,m=new ie;if(e)for(let v=0,_=e.count;v<_;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.add(p),f.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,_=t.count;v<_;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,v=new h.constructor(f.length*p);let _=0,M=0;for(let E=0,S=f.length;E<S;E++){u.isInterleavedBufferAttribute?_=f[E]*u.data.stride+u.offset:_=f[E]*p;for(let x=0;x<p;x++)v[M++]=h[_++]}return new Gi(v,p,m)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mr,i=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const v=h[p],_=e(v,i);f.push(_)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,v=h.length;m<v;m++){const _=h[m];p.push(_.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let v=0,_=m.length;v<_;v++)p.push(m[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new sn,gs=new AC,Ec=new Xp,r_=new ie,Tc=new ie,wc=new ie,Ac=new ie,Rd=new ie,Cc=new ie,s_=new ie,bc=new ie;let Wi=class extends Jn{constructor(e=new mr,t=new Ky){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Cc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],m=a[f];p!==0&&(Rd.fromBufferAttribute(m,e),c?Cc.addScaledVector(Rd,p):Cc.addScaledVector(Rd.sub(t),p))}t.add(Cc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(a),gs.copy(e.ray).recast(e.near),!(Ec.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ec,r_)===null||gs.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(i_.copy(a).invert(),gs.copy(e.ray).applyMatrix4(i_),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,v=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],R=Math.max(S.start,_.start),C=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let b=R,D=C;b<D;b+=3){const I=u.getX(b),U=u.getX(b+1),k=u.getX(b+2);o=Rc(this,x,e,i,h,p,m,I,U,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let S=M,x=E;S<x;S+=3){const R=u.getX(S),C=u.getX(S+1),b=u.getX(S+2);o=Rc(this,c,e,i,h,p,m,R,C,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],R=Math.max(S.start,_.start),C=Math.min(f.count,Math.min(S.start+S.count,_.start+_.count));for(let b=R,D=C;b<D;b+=3){const I=b,U=b+1,k=b+2;o=Rc(this,x,e,i,h,p,m,I,U,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),E=Math.min(f.count,_.start+_.count);for(let S=M,x=E;S<x;S+=3){const R=S,C=S+1,b=S+2;o=Rc(this,c,e,i,h,p,m,R,C,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function FC(n,e,t,i,o,a,c,u){let f;if(e.side===Wn?f=i.intersectTriangle(c,a,o,!0,u):f=i.intersectTriangle(o,a,c,e.side===Yr,u),f===null)return null;bc.copy(u),bc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(bc);return h<t.near||h>t.far?null:{distance:h,point:bc.clone(),object:n}}function Rc(n,e,t,i,o,a,c,u,f,h){n.getVertexPosition(u,Tc),n.getVertexPosition(f,wc),n.getVertexPosition(h,Ac);const p=FC(n,e,t,i,Tc,wc,Ac,s_);if(p){const m=new ie;Ta.getBarycoord(s_,Tc,wc,Ac,m),o&&(p.uv=Ta.getInterpolatedAttribute(o,u,f,h,m,new St)),a&&(p.uv1=Ta.getInterpolatedAttribute(a,u,f,h,m,new St)),c&&(p.normal=Ta.getInterpolatedAttribute(c,u,f,h,m,new ie),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:f,c:h,normal:new ie,materialIndex:0};Ta.getNormal(Tc,wc,Ac,v.normal),p.face=v,p.barycoord=m}return p}class el extends mr{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],m=[];let v=0,_=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new ur(h,3)),this.setAttribute("normal",new ur(p,3)),this.setAttribute("uv",new ur(m,2));function M(E,S,x,R,C,b,D,I,U,k,A){const L=b/U,B=D/k,K=b/2,Y=D/2,X=I/2,le=U+1,Q=k+1;let $=0,W=0;const de=new ie;for(let re=0;re<Q;re++){const O=re*B-Y;for(let oe=0;oe<le;oe++){const we=oe*L-K;de[E]=we*R,de[S]=O*C,de[x]=X,h.push(de.x,de.y,de.z),de[E]=0,de[S]=0,de[x]=I>0?1:-1,p.push(de.x,de.y,de.z),m.push(oe/U),m.push(1-re/k),$+=1}}for(let re=0;re<k;re++)for(let O=0;O<U;O++){const oe=v+O+le*re,we=v+O+le*(re+1),He=v+(O+1)+le*(re+1),$e=v+(O+1)+le*re;f.push(oe,we,$e),f.push(we,He,$e),W+=6}u.addGroup(_,W,A),_+=W,v+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=Do(n[t]);for(const o in i)e[o]=i[o]}return e}function OC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const BC={clone:Do,merge:Un};var kC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends lu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kC,this.fragmentShader=VC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=OC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class eS extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new ie,o_=new St,a_=new St;class Ti extends eS{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,o_,a_),t.subVectors(a_,o_)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ld*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,po=1;class zC extends Jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(ho,po,e,t);o.layers=this.layers,this.add(o);const a=new Ti(ho,po,e,t);a.layers=this.layers,this.add(a);const c=new Ti(ho,po,e,t);c.layers=this.layers,this.add(c);const u=new Ti(ho,po,e,t);u.layers=this.layers,this.add(u);const f=new Ti(ho,po,e,t);f.layers=this.layers,this.add(f);const h=new Ti(ho,po,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(m,v,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class tS extends Fn{constructor(e=[],t=Rs,i,o,a,c,u,f,h,p){super(e,t,i,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nS extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new tS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new el(5,5,5),a=new Ci({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:lr});a.uniforms.tEquirect.value=t;const c=new Wi(o,a),u=t.minFilter;return t.minFilter===As&&(t.minFilter=Pn),new zC(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}class Pc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GC={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(h,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=p.position.distanceTo(m.position),_=.02,M=.005;h.inputState.pinching&&v>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(GC)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class HC extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ps,this.environmentIntensity=1,this.environmentRotation=new Ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class WC extends Fn{constructor(e=null,t=1,i=1,o,a,c,u,f,h=yn,p=yn,m,v){super(null,c,u,f,h,p,o,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new ie,jC=new ie,XC=new dt;class Ms{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Dd.subVectors(i,t).cross(jC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dd),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||XC.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Xp,qC=new St(.5,.5),Dc=new ie;class iS{constructor(e=new Ms,t=new Ms,i=new Ms,o=new Ms,a=new Ms,c=new Ms){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],p=a[4],m=a[5],v=a[6],_=a[7],M=a[8],E=a[9],S=a[10],x=a[11],R=a[12],C=a[13],b=a[14],D=a[15];if(o[0].setComponents(h-c,_-p,x-M,D-R).normalize(),o[1].setComponents(h+c,_+p,x+M,D+R).normalize(),o[2].setComponents(h+u,_+m,x+E,D+C).normalize(),o[3].setComponents(h-u,_-m,x-E,D-C).normalize(),i)o[4].setComponents(f,v,S,b).normalize(),o[5].setComponents(h-f,_-v,x-S,D-b).normalize();else if(o[4].setComponents(h-f,_-v,x-S,D-b).normalize(),t===Oi)o[5].setComponents(h+f,_+v,x+S,D+b).normalize();else if(t===Zc)o[5].setComponents(f,v,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=qC.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Dc.x=o.normal.x>0?e.max.x:e.min.x,Dc.y=o.normal.y>0?e.max.y:e.min.y,Dc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xa extends Fn{constructor(e,t,i=Hi,o,a,c,u=yn,f=yn,h,p=hr,m=1){if(p!==hr&&p!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,o,a,c,u,f,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class YC extends Xa{constructor(e,t=Hi,i=Rs,o,a,c=yn,u=yn,f,h=hr){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,i,o,a,c,u,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rS extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tl extends mr{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(o),h=u+1,p=f+1,m=e/u,v=t/f,_=[],M=[],E=[],S=[];for(let x=0;x<p;x++){const R=x*v-c;for(let C=0;C<h;C++){const b=C*m-a;M.push(b,-R,0),E.push(0,0,1),S.push(C/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let R=0;R<u;R++){const C=R+h*x,b=R+h*(x+1),D=R+1+h*(x+1),I=R+1+h*x;_.push(C,b,I),_.push(b,D,I)}this.setIndex(_),this.setAttribute("position",new ur(M,3)),this.setAttribute("normal",new ur(E,3)),this.setAttribute("uv",new ur(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class $C extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class KC extends lu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZC extends lu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qp extends eS{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QC extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class JC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function l_(n,e,t,i){const o=eb(i);switch(t){case Gy:return n*e;case Wy:return n*e/o.components*o.byteLength;case Vp:return n*e/o.components*o.byteLength;case Ro:return n*e*2/o.components*o.byteLength;case zp:return n*e*2/o.components*o.byteLength;case Hy:return n*e*3/o.components*o.byteLength;case wi:return n*e*4/o.components*o.byteLength;case Gp:return n*e*4/o.components*o.byteLength;case Bc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:case Sh:return Math.max(n,16)*Math.max(e,8)/4;case _h:case yh:return Math.max(n,8)*Math.max(e,8)/2;case Mh:case Eh:case wh:case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Th:case Ch:case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hh:case Wh:case jh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yh:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eb(n){switch(n){case di:case By:return{byteLength:1,components:1};case Ha:case ky:case dr:return{byteLength:2,components:1};case Bp:case kp:return{byteLength:2,components:4};case Hi:case Op:case Fi:return{byteLength:4,components:1};case Vy:case zy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sS(){let n=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function tb(n){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,h){const p=f.array,m=f.updateRanges;if(n.bindBuffer(h,u),m.length===0)n.bufferSubData(h,0,p);else{m.sort((_,M)=>_.start-M.start);let v=0;for(let _=1;_<m.length;_++){const M=m[v],E=m[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,m[v]=E)}m.length=v+1;for(let _=0,M=m.length;_<M;_++){const E=m[_];n.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}var nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ib=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ub=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ab=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_R=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ER=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$R=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:nb,alphahash_pars_fragment:ib,alphamap_fragment:rb,alphamap_pars_fragment:sb,alphatest_fragment:ob,alphatest_pars_fragment:ab,aomap_fragment:lb,aomap_pars_fragment:cb,batching_pars_vertex:ub,batching_vertex:fb,begin_vertex:db,beginnormal_vertex:hb,bsdfs:pb,iridescence_fragment:mb,bumpmap_pars_fragment:gb,clipping_planes_fragment:vb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:xb,clipping_planes_vertex:yb,color_fragment:Sb,color_pars_fragment:Mb,color_pars_vertex:Eb,color_vertex:Tb,common:wb,cube_uv_reflection_fragment:Ab,defaultnormal_vertex:Cb,displacementmap_pars_vertex:bb,displacementmap_vertex:Rb,emissivemap_fragment:Pb,emissivemap_pars_fragment:Db,colorspace_fragment:Lb,colorspace_pars_fragment:Ib,envmap_fragment:Nb,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Fb,envmap_pars_vertex:Ob,envmap_physical_pars_fragment:Yb,envmap_vertex:Bb,fog_vertex:kb,fog_pars_vertex:Vb,fog_fragment:zb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Wb,lights_lambert_fragment:jb,lights_lambert_pars_fragment:Xb,lights_pars_begin:qb,lights_toon_fragment:$b,lights_toon_pars_fragment:Kb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Qb,lights_physical_fragment:Jb,lights_physical_pars_fragment:eR,lights_fragment_begin:tR,lights_fragment_maps:nR,lights_fragment_end:iR,logdepthbuf_fragment:rR,logdepthbuf_pars_fragment:sR,logdepthbuf_pars_vertex:oR,logdepthbuf_vertex:aR,map_fragment:lR,map_pars_fragment:cR,map_particle_fragment:uR,map_particle_pars_fragment:fR,metalnessmap_fragment:dR,metalnessmap_pars_fragment:hR,morphinstance_vertex:pR,morphcolor_vertex:mR,morphnormal_vertex:gR,morphtarget_pars_vertex:vR,morphtarget_vertex:_R,normal_fragment_begin:xR,normal_fragment_maps:yR,normal_pars_fragment:SR,normal_pars_vertex:MR,normal_vertex:ER,normalmap_pars_fragment:TR,clearcoat_normal_fragment_begin:wR,clearcoat_normal_fragment_maps:AR,clearcoat_pars_fragment:CR,iridescence_pars_fragment:bR,opaque_fragment:RR,packing:PR,premultiplied_alpha_fragment:DR,project_vertex:LR,dithering_fragment:IR,dithering_pars_fragment:NR,roughnessmap_fragment:UR,roughnessmap_pars_fragment:FR,shadowmap_pars_fragment:OR,shadowmap_pars_vertex:BR,shadowmap_vertex:kR,shadowmask_pars_fragment:VR,skinbase_vertex:zR,skinning_pars_vertex:GR,skinning_vertex:HR,skinnormal_vertex:WR,specularmap_fragment:jR,specularmap_pars_fragment:XR,tonemapping_fragment:qR,tonemapping_pars_fragment:YR,transmission_fragment:$R,transmission_pars_fragment:KR,uv_pars_fragment:ZR,uv_pars_vertex:QR,uv_vertex:JR,worldpos_vertex:e2,background_vert:t2,background_frag:n2,backgroundCube_vert:i2,backgroundCube_frag:r2,cube_vert:s2,cube_frag:o2,depth_vert:a2,depth_frag:l2,distance_vert:c2,distance_frag:u2,equirect_vert:f2,equirect_frag:d2,linedashed_vert:h2,linedashed_frag:p2,meshbasic_vert:m2,meshbasic_frag:g2,meshlambert_vert:v2,meshlambert_frag:_2,meshmatcap_vert:x2,meshmatcap_frag:y2,meshnormal_vert:S2,meshnormal_frag:M2,meshphong_vert:E2,meshphong_frag:T2,meshphysical_vert:w2,meshphysical_frag:A2,meshtoon_vert:C2,meshtoon_frag:b2,points_vert:R2,points_frag:P2,shadow_vert:D2,shadow_frag:L2,sprite_vert:I2,sprite_frag:N2},Fe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Lc={r:0,b:0,g:0},_s=new Ps,U2=new sn;function F2(n,e,t,i,o,a,c){const u=new Ot(0);let f=a===!0?0:1,h,p,m=null,v=0,_=null;function M(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function E(C){let b=!1;const D=M(C);D===null?x(u,f):D&&D.isColor&&(x(D,1),b=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(C,b){const D=M(b);D&&(D.isCubeTexture||D.mapping===au)?(p===void 0&&(p=new Wi(new el(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Do(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),_s.copy(b.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(U2.makeRotationFromEuler(_s)),p.material.toneMapped=At.getTransfer(D.colorSpace)!==Nt,(m!==D||v!==D.version||_!==n.toneMapping)&&(p.material.needsUpdate=!0,m=D,v=D.version,_=n.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Wi(new tl(2,2),new Ci({name:"BackgroundMaterial",uniforms:Do(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=At.getTransfer(D.colorSpace)!==Nt,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(m!==D||v!==D.version||_!==n.toneMapping)&&(h.material.needsUpdate=!0,m=D,v=D.version,_=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,b){C.getRGB(Lc,Jy(n)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,b,c)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,b=1){u.set(C),f=b,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(u,f)},render:E,addToRenderList:S,dispose:R}}function O2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=v(null);let a=o,c=!1;function u(L,B,K,Y,X){let le=!1;const Q=m(Y,K,B);a!==Q&&(a=Q,h(a.object)),le=_(L,Y,K,X),le&&M(L,Y,K,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,b(L,B,K,Y),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.createVertexArray()}function h(L){return n.bindVertexArray(L)}function p(L){return n.deleteVertexArray(L)}function m(L,B,K){const Y=K.wireframe===!0;let X=i[L.id];X===void 0&&(X={},i[L.id]=X);let le=X[B.id];le===void 0&&(le={},X[B.id]=le);let Q=le[Y];return Q===void 0&&(Q=v(f()),le[Y]=Q),Q}function v(L){const B=[],K=[],Y=[];for(let X=0;X<t;X++)B[X]=0,K[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:Y,object:L,attributes:{},index:null}}function _(L,B,K,Y){const X=a.attributes,le=B.attributes;let Q=0;const $=K.getAttributes();for(const W in $)if($[W].location>=0){const re=X[W];let O=le[W];if(O===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;Q++}return a.attributesNum!==Q||a.index!==Y}function M(L,B,K,Y){const X={},le=B.attributes;let Q=0;const $=K.getAttributes();for(const W in $)if($[W].location>=0){let re=le[W];re===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),X[W]=O,Q++}a.attributes=X,a.attributesNum=Q,a.index=Y}function E(){const L=a.newAttributes;for(let B=0,K=L.length;B<K;B++)L[B]=0}function S(L){x(L,0)}function x(L,B){const K=a.newAttributes,Y=a.enabledAttributes,X=a.attributeDivisors;K[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),X[L]!==B&&(n.vertexAttribDivisor(L,B),X[L]=B)}function R(){const L=a.newAttributes,B=a.enabledAttributes;for(let K=0,Y=B.length;K<Y;K++)B[K]!==L[K]&&(n.disableVertexAttribArray(K),B[K]=0)}function C(L,B,K,Y,X,le,Q){Q===!0?n.vertexAttribIPointer(L,B,K,X,le):n.vertexAttribPointer(L,B,K,Y,X,le)}function b(L,B,K,Y){E();const X=Y.attributes,le=K.getAttributes(),Q=B.defaultAttributeValues;for(const $ in le){const W=le[$];if(W.location>=0){let de=X[$];if(de===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),de!==void 0){const re=de.normalized,O=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const we=oe.buffer,He=oe.type,$e=oe.bytesPerElement,te=He===n.INT||He===n.UNSIGNED_INT||de.gpuType===Op;if(de.isInterleavedBufferAttribute){const fe=de.data,_e=fe.stride,Ie=de.offset;if(fe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<W.locationSize;Pe++)x(W.location+Pe,fe.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)S(W.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Pe=0;Pe<W.locationSize;Pe++)C(W.location+Pe,O/W.locationSize,He,re,_e*$e,(Ie+O/W.locationSize*Pe)*$e,te)}else{if(de.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)x(W.location+fe,de.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let fe=0;fe<W.locationSize;fe++)S(W.location+fe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let fe=0;fe<W.locationSize;fe++)C(W.location+fe,O/W.locationSize,He,re,O*$e,O/W.locationSize*fe*$e,te)}}else if(Q!==void 0){const re=Q[$];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(W.location,re);break;case 3:n.vertexAttrib3fv(W.location,re);break;case 4:n.vertexAttrib4fv(W.location,re);break;default:n.vertexAttrib1fv(W.location,re)}}}}R()}function D(){k();for(const L in i){const B=i[L];for(const K in B){const Y=B[K];for(const X in Y)p(Y[X].object),delete Y[X];delete B[K]}delete i[L]}}function I(L){if(i[L.id]===void 0)return;const B=i[L.id];for(const K in B){const Y=B[K];for(const X in Y)p(Y[X].object),delete Y[X];delete B[K]}delete i[L.id]}function U(L){for(const B in i){const K=i[B];if(K[L.id]===void 0)continue;const Y=K[L.id];for(const X in Y)p(Y[X].object),delete Y[X];delete K[L.id]}}function k(){A(),c=!0,a!==o&&(a=o,h(a.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:R}}function B2(n,e,t){let i;function o(h){i=h}function a(h,p){n.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,m){m!==0&&(n.drawArraysInstanced(i,h,p,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let _=0;for(let M=0;M<m;M++)_+=p[M];t.update(_,i,1)}function f(h,p,m,v){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)c(h[M],p[M],v[M]);else{_.multiDrawArraysInstancedWEBGL(i,h,0,p,0,v,0,m);let M=0;for(let E=0;E<m;E++)M+=p[E]*v[E];t.update(M,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function k2(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==wi&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const k=U===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==di&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fi&&!k)}function f(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(ut("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,maxSamples:D,samples:I}}function V2(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Ms,u=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||o;return o=v,i=m.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,_){const M=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,x=n.get(m);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const R=a?0:i,C=R*4;let b=x.clippingState||null;f.value=b,b=p(M,v,C,_);for(let D=0;D!==C;++D)b[D]=t[D];x.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,v,_,M){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const x=_+E*4,R=v.matrixWorldInverse;u.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,b=_;C!==E;++C,b+=4)c.copy(m[C]).applyMatrix4(R,u),c.normal.toArray(S,b),S[b+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function z2(n){let e=new WeakMap;function t(c,u){return u===ph?c.mapping=Rs:u===mh&&(c.mapping=bo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===ph||u===mh)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new nS(f.height);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const jr=4,c_=[.125,.215,.35,.446,.526,.582],Ts=20,G2=256,Aa=new qp,u_=new Ot;let Ld=null,Id=0,Nd=0,Ud=!1;const H2=new ie;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=H2}=a;Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Id,Nd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:dr,format:wi,colorSpace:Po,depthBuffer:!1},o=d_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W2(a)),this._blurMaterial=X2(a,e,t),this._ggxMaterial=j2(a,e,t)}return o}_compileMaterial(e){const t=new Wi(new mr,e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,o,a){const f=new Ti(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,_=m.toneMapping;m.getClearColor(u_),m.toneMapping=Vi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(o),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new el,new Ky({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let x=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,x=!0):(S.color.copy(u_),x=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(f.up.set(0,h[C],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[C],a.y,a.z)):b===1?(f.up.set(0,0,h[C]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[C],a.z)):(f.up.set(0,h[C],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[C]));const D=this._cubeSize;mo(o,b*D,C>2?D:0,D,D),m.setRenderTarget(o),x&&m.render(E,f),m.render(e,f)}m.toneMapping=_,m.autoClear=v,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Rs||e.mapping===bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;mo(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),v=0+h*1.25,_=m*v,{_lodMax:M}=this,E=this._sizeLods[i],S=3*E*(i>M-jr?i-M+jr:0),x=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=M-t,mo(a,S,x,3*E,2*E),o.setRenderTarget(a),o.render(u,Aa),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-i,mo(e,S,x,3*E,2*E),o.setRenderTarget(e),o.render(u,Aa)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[o];m.material=h;const v=h.uniforms,_=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Ts-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):Ts;S>Ts&&ut(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ts}`);const x=[];let R=0;for(let U=0;U<Ts;++U){const k=U/E,A=Math.exp(-k*k/2);x.push(A),U===0?R+=A:U<S&&(R+=2*A)}for(let U=0;U<x.length;U++)x[U]=x[U]/R;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-i;const b=this._sizeLods[o],D=3*b*(o>C-jr?o-C+jr:0),I=4*(this._cubeSize-b);mo(t,D,I,3*b,2*b),f.setRenderTarget(t),f.render(m,Aa)}}function W2(n){const e=[],t=[],i=[];let o=n;const a=n-jr+1+c_.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let f=1/u;c>n-jr?f=c_[c-n+jr-1]:c===0&&(f=0),t.push(f);const h=1/(u-2),p=-h,m=1+h,v=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,M=6,E=3,S=2,x=1,R=new Float32Array(E*M*_),C=new Float32Array(S*M*_),b=new Float32Array(x*M*_);for(let I=0;I<_;I++){const U=I%3*2/3-1,k=I>2?0:-1,A=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];R.set(A,E*M*I),C.set(v,S*M*I);const L=[I,I,I,I,I,I];b.set(L,x*M*I)}const D=new mr;D.setAttribute("position",new Gi(R,E)),D.setAttribute("uv",new Gi(C,S)),D.setAttribute("faceIndex",new Gi(b,x)),i.push(new Wi(D,null)),o>jr&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function d_(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function j2(n,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function X2(n,e,t){const i=new Float32Array(Ts),o=new ie(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function h_(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function p_(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q2(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===ph||f===mh,p=f===Rs||f===bo;if(h||p){let m=e.get(u);const v=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new f_(n)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return h&&_&&_.height>0||p&&_&&o(_)?(t===null&&(t=new f_(n)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function o(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Y2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&ja("WebGLRenderer: "+i+" extension not supported."),o}}}function $2(n,e,t,i){const o={},a=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete o[v.id];const _=a.get(v);_&&(e.remove(_),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(m,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function f(m){const v=m.attributes;for(const _ in v)e.update(v[_],n.ARRAY_BUFFER)}function h(m){const v=[],_=m.index,M=m.attributes.position;let E=0;if(_!==null){const R=_.array;E=_.version;for(let C=0,b=R.length;C<b;C+=3){const D=R[C+0],I=R[C+1],U=R[C+2];v.push(D,I,I,U,U,D)}}else if(M!==void 0){const R=M.array;E=M.version;for(let C=0,b=R.length/3-1;C<b;C+=3){const D=C+0,I=C+1,U=C+2;v.push(D,I,I,U,U,D)}}else return;const S=new(jy(v)?Qy:Zy)(v,1);S.version=E;const x=a.get(m);x&&e.remove(x),a.set(m,S)}function p(m){const v=a.get(m);if(v){const _=m.index;_!==null&&v.version<_.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function K2(n,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function f(v,_){n.drawElements(i,_,a,v*c),t.update(_,i,1)}function h(v,_,M){M!==0&&(n.drawElementsInstanced(i,_,a,v*c,M),t.update(_,i,M))}function p(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,v,0,M);let S=0;for(let x=0;x<M;x++)S+=_[x];t.update(S,i,1)}function m(v,_,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/c,_[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,_,0,a,v,0,E,0,M);let x=0;for(let R=0;R<M;R++)x+=_[R]*E[R];t.update(x,i,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Z2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function Q2(n,e,t){const i=new WeakMap,o=new tn;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==m){let A=function(){U.dispose(),i.delete(u),u.removeEventListener("dispose",A)};v!==void 0&&v.texture.dispose();const _=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let C=0;_===!0&&(C=1),M===!0&&(C=2),E===!0&&(C=3);let b=u.attributes.position.count*C,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*D*4*m),U=new Xy(I,b,D,m);U.type=Fi,U.needsUpdate=!0;const k=C*4;for(let L=0;L<m;L++){const B=S[L],K=x[L],Y=R[L],X=b*D*4*L;for(let le=0;le<B.count;le++){const Q=le*k;_===!0&&(o.fromBufferAttribute(B,le),I[X+Q+0]=o.x,I[X+Q+1]=o.y,I[X+Q+2]=o.z,I[X+Q+3]=0),M===!0&&(o.fromBufferAttribute(K,le),I[X+Q+4]=o.x,I[X+Q+5]=o.y,I[X+Q+6]=o.z,I[X+Q+7]=0),E===!0&&(o.fromBufferAttribute(Y,le),I[X+Q+8]=o.x,I[X+Q+9]=o.y,I[X+Q+10]=o.z,I[X+Q+11]=Y.itemSize===4?o.w:1)}}v={count:m,texture:U,size:new St(b,D)},i.set(u,v),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let _=0;for(let E=0;E<h.length;E++)_+=h[E];const M=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:a}}function J2(n,e,t,i){let o=new WeakMap;function a(f){const h=i.render.frame,p=f.geometry,m=e.get(f,p);if(o.get(m)!==h&&(e.update(m),o.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==h&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return m}function c(){o=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}const eP={[Py]:"LINEAR_TONE_MAPPING",[Dy]:"REINHARD_TONE_MAPPING",[Ly]:"CINEON_TONE_MAPPING",[Iy]:"ACES_FILMIC_TONE_MAPPING",[Uy]:"AGX_TONE_MAPPING",[Fy]:"NEUTRAL_TONE_MAPPING",[Ny]:"CUSTOM_TONE_MAPPING"};function tP(n,e,t,i,o){const a=new zi(e,t,{type:n,depthBuffer:i,stencilBuffer:o}),c=new zi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),u=new mr;u.setAttribute("position",new ur([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ur([0,2,0,0,2,0],2));const f=new $C({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(u,f),p=new qp(-1,1,1,-1,0,1);let m=null,v=null,_=!1,M,E=null,S=[],x=!1;this.setSize=function(R,C){a.setSize(R,C),c.setSize(R,C);for(let b=0;b<S.length;b++){const D=S[b];D.setSize&&D.setSize(R,C)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const C=a.width,b=a.height;for(let D=0;D<S.length;D++){const I=S[D];I.setSize&&I.setSize(C,b)}},this.begin=function(R,C){if(_||R.toneMapping===Vi&&S.length===0)return!1;if(E=C,C!==null){const b=C.width,D=C.height;(a.width!==b||a.height!==D)&&this.setSize(b,D)}return x===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(R,C){R.toneMapping=M,_=!0;let b=a,D=c;for(let I=0;I<S.length;I++){const U=S[I];if(U.enabled!==!1&&(U.render(R,D,b,C),U.needsSwap!==!1)){const k=b;b=D,D=k}}if(m!==R.outputColorSpace||v!==R.toneMapping){m=R.outputColorSpace,v=R.toneMapping,f.defines={},At.getTransfer(m)===Nt&&(f.defines.SRGB_TRANSFER="");const I=eP[v];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(E),R.render(h,p),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),f.dispose()}}const oS=new Fn,Zh=new Xa(1,1),aS=new Xy,lS=new TC,cS=new tS,m_=[],g_=[],v_=new Float32Array(16),__=new Float32Array(9),x_=new Float32Array(4);function Uo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=m_[o];if(a===void 0&&(a=new Float32Array(o),m_[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uu(n,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function sP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function oP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;x_.set(i),n.uniformMatrix2fv(this.addr,!1,x_),un(t,i)}}function aP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;__.set(i),n.uniformMatrix3fv(this.addr,!1,__),un(t,i)}}function lP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;v_.set(i),n.uniformMatrix4fv(this.addr,!1,v_),un(t,i)}}function cP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function dP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function hP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function mP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function gP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function vP(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?Wp:Hp,a=Zh):a=oS,t.setTexture2D(e||a,o)}function _P(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||lS,o)}function xP(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||cS,o)}function yP(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||aS,o)}function SP(n){switch(n){case 5126:return nP;case 35664:return iP;case 35665:return rP;case 35666:return sP;case 35674:return oP;case 35675:return aP;case 35676:return lP;case 5124:case 35670:return cP;case 35667:case 35671:return uP;case 35668:case 35672:return fP;case 35669:case 35673:return dP;case 5125:return hP;case 36294:return pP;case 36295:return mP;case 36296:return gP;case 35678:case 36198:case 36298:case 36306:case 35682:return vP;case 35679:case 36299:case 36307:return _P;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return yP}}function MP(n,e){n.uniform1fv(this.addr,e)}function EP(n,e){const t=Uo(e,this.size,2);n.uniform2fv(this.addr,t)}function TP(n,e){const t=Uo(e,this.size,3);n.uniform3fv(this.addr,t)}function wP(n,e){const t=Uo(e,this.size,4);n.uniform4fv(this.addr,t)}function AP(n,e){const t=Uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CP(n,e){const t=Uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bP(n,e){const t=Uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RP(n,e){n.uniform1iv(this.addr,e)}function PP(n,e){n.uniform2iv(this.addr,e)}function DP(n,e){n.uniform3iv(this.addr,e)}function LP(n,e){n.uniform4iv(this.addr,e)}function IP(n,e){n.uniform1uiv(this.addr,e)}function NP(n,e){n.uniform2uiv(this.addr,e)}function UP(n,e){n.uniform3uiv(this.addr,e)}function FP(n,e){n.uniform4uiv(this.addr,e)}function OP(n,e,t){const i=this.cache,o=e.length,a=uu(t,o);cn(i,a)||(n.uniform1iv(this.addr,a),un(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Zh:c=oS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function BP(n,e,t){const i=this.cache,o=e.length,a=uu(t,o);cn(i,a)||(n.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||lS,a[c])}function kP(n,e,t){const i=this.cache,o=e.length,a=uu(t,o);cn(i,a)||(n.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||cS,a[c])}function VP(n,e,t){const i=this.cache,o=e.length,a=uu(t,o);cn(i,a)||(n.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||aS,a[c])}function zP(n){switch(n){case 5126:return MP;case 35664:return EP;case 35665:return TP;case 35666:return wP;case 35674:return AP;case 35675:return CP;case 35676:return bP;case 5124:case 35670:return RP;case 35667:case 35671:return PP;case 35668:case 35672:return DP;case 35669:case 35673:return LP;case 5125:return IP;case 36294:return NP;case 36295:return UP;case 36296:return FP;case 35678:case 36198:case 36298:case 36306:case 35682:return OP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return VP}}class GP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SP(t.type)}}class HP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zP(t.type)}}class WP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function y_(n,e){n.seq.push(e),n.map[e.id]=e}function jP(n,e,t){const i=n.name,o=i.length;for(Fd.lastIndex=0;;){const a=Fd.exec(i),c=Fd.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){y_(t,h===void 0?new GP(u,n,e):new HP(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new WP(u),y_(t,m)),t=m}}}class Gc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),f=e.getUniformLocation(t,u.name);jP(u,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function S_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const XP=37297;let qP=0;function YP(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const M_=new dt;function $P(n){At._getMatrix(M_,At.workingColorSpace,n);const e=`mat3( ${M_.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case Kc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function E_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+YP(n.getShaderSource(e),u)}else return a}function KP(n,e){const t=$P(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZP={[Py]:"Linear",[Dy]:"Reinhard",[Ly]:"Cineon",[Iy]:"ACESFilmic",[Uy]:"AgX",[Fy]:"Neutral",[Ny]:"Custom"};function QP(n,e){const t=ZP[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new ie;function JP(){At.getLuminanceCoefficients(Ic);const n=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function t3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function n3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function La(n){return n!==""}function T_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(n){return n.replace(i3,s3)}const r3=new Map;function s3(n,e){let t=mt[e];if(t===void 0){const i=r3.get(e);if(i!==void 0)t=mt[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const o3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(n){return n.replace(o3,a3)}function a3(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function C_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const l3={[Oc]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function c3(n){return l3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u3={[Rs]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function f3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":u3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const d3={[bo]:"ENVMAP_MODE_REFRACTION"};function h3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":d3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p3={[Ry]:"ENVMAP_BLENDING_MULTIPLY",[rC]:"ENVMAP_BLENDING_MIX",[sC]:"ENVMAP_BLENDING_ADD"};function m3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":p3[n.combine]||"ENVMAP_BLENDING_NONE"}function g3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function v3(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=c3(t),h=f3(t),p=h3(t),m=m3(t),v=g3(t),_=e3(t),M=t3(a),E=o.createProgram();let S,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(La).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(La).join(`
`),x.length>0&&(x+=`
`)):(S=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),x=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?QP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,KP("linearToOutputTexel",t.outputColorSpace),JP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),c=Qh(c),c=T_(c,t),c=w_(c,t),u=Qh(u),u=T_(u,t),u=w_(u,t),c=A_(c),u=A_(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=R+S+c,b=R+x+u,D=S_(o,o.VERTEX_SHADER,C),I=S_(o,o.FRAGMENT_SHADER,b);o.attachShader(E,D),o.attachShader(E,I),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(B){if(n.debug.checkShaderErrors){const K=o.getProgramInfoLog(E)||"",Y=o.getShaderInfoLog(D)||"",X=o.getShaderInfoLog(I)||"",le=K.trim(),Q=Y.trim(),$=X.trim();let W=!0,de=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,D,I);else{const re=E_(o,D,"vertex"),O=E_(o,I,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+re+`
`+O)}else le!==""?ut("WebGLProgram: Program Info Log:",le):(Q===""||$==="")&&(de=!1);de&&(B.diagnostics={runnable:W,programLog:le,vertexShader:{log:Q,prefix:S},fragmentShader:{log:$,prefix:x}})}o.deleteShader(D),o.deleteShader(I),k=new Gc(o,E),A=n3(o,E)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(E,XP)),L},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qP++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=I,this}let _3=0;class x3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new y3(e),t.set(e,i)),i}}class y3{constructor(e){this.id=_3++,this.code=e,this.usedTimes=0}}function S3(n,e,t,i,o,a,c){const u=new Yy,f=new x3,h=new Set,p=[],m=new Map,v=o.logarithmicDepthBuffer;let _=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return h.add(A),A===0?"uv":`uv${A}`}function S(A,L,B,K,Y){const X=K.fog,le=Y.geometry,Q=A.isMeshStandardMaterial?K.environment:null,$=(A.isMeshStandardMaterial?t:e).get(A.envMap||Q),W=$&&$.mapping===au?$.image.height:null,de=M[A.type];A.precision!==null&&(_=o.getMaxPrecision(A.precision),_!==A.precision&&ut("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,O=re!==void 0?re.length:0;let oe=0;le.morphAttributes.position!==void 0&&(oe=1),le.morphAttributes.normal!==void 0&&(oe=2),le.morphAttributes.color!==void 0&&(oe=3);let we,He,$e,te;if(de){const Et=Ui[de];we=Et.vertexShader,He=Et.fragmentShader}else we=A.vertexShader,He=A.fragmentShader,f.update(A),$e=f.getVertexShaderID(A),te=f.getFragmentShaderID(A);const fe=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ie=Y.isInstancedMesh===!0,Pe=Y.isBatchedMesh===!0,at=!!A.map,kt=!!A.matcap,ht=!!$,xt=!!A.aoMap,Ct=!!A.lightMap,lt=!!A.bumpMap,Wt=!!A.normalMap,z=!!A.displacementMap,jt=!!A.emissiveMap,vt=!!A.metalnessMap,Mt=!!A.roughnessMap,Xe=A.anisotropy>0,N=A.clearcoat>0,T=A.dispersion>0,j=A.iridescence>0,he=A.sheen>0,ge=A.transmission>0,ue=Xe&&!!A.anisotropyMap,Ke=N&&!!A.clearcoatMap,Ae=N&&!!A.clearcoatNormalMap,Ve=N&&!!A.clearcoatRoughnessMap,rt=j&&!!A.iridescenceMap,Me=j&&!!A.iridescenceThicknessMap,De=he&&!!A.sheenColorMap,We=he&&!!A.sheenRoughnessMap,qe=!!A.specularMap,be=!!A.specularColorMap,ft=!!A.specularIntensityMap,G=ge&&!!A.transmissionMap,Ne=ge&&!!A.thicknessMap,Ee=!!A.gradientMap,Ue=!!A.alphaMap,ye=A.alphaTest>0,me=!!A.alphaHash,Re=!!A.extensions;let st=Vi;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(st=n.toneMapping);const It={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:we,fragmentShader:He,defines:A.defines,customVertexShaderID:$e,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Pe,batchingColor:Pe&&Y._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Y.instanceColor!==null,instancingMorph:Ie&&Y.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Po,alphaToCoverage:!!A.alphaToCoverage,map:at,matcap:kt,envMap:ht,envMapMode:ht&&$.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:Ct,bumpMap:lt,normalMap:Wt,displacementMap:z,emissiveMap:jt,normalMapObjectSpace:Wt&&A.normalMapType===cC,normalMapTangentSpace:Wt&&A.normalMapType===lC,metalnessMap:vt,roughnessMap:Mt,anisotropy:Xe,anisotropyMap:ue,clearcoat:N,clearcoatMap:Ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:De,sheenRoughnessMap:We,specularMap:qe,specularColorMap:be,specularIntensityMap:ft,transmission:ge,transmissionMap:G,thicknessMap:Ne,gradientMap:Ee,opaque:A.transparent===!1&&A.blending===Mo&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:me,combine:A.combine,mapUv:at&&E(A.map.channel),aoMapUv:xt&&E(A.aoMap.channel),lightMapUv:Ct&&E(A.lightMap.channel),bumpMapUv:lt&&E(A.bumpMap.channel),normalMapUv:Wt&&E(A.normalMap.channel),displacementMapUv:z&&E(A.displacementMap.channel),emissiveMapUv:jt&&E(A.emissiveMap.channel),metalnessMapUv:vt&&E(A.metalnessMap.channel),roughnessMapUv:Mt&&E(A.roughnessMap.channel),anisotropyMapUv:ue&&E(A.anisotropyMap.channel),clearcoatMapUv:Ke&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(A.sheenRoughnessMap.channel),specularMapUv:qe&&E(A.specularMap.channel),specularColorMapUv:be&&E(A.specularColorMap.channel),specularIntensityMapUv:ft&&E(A.specularIntensityMap.channel),transmissionMapUv:G&&E(A.transmissionMap.channel),thicknessMapUv:Ne&&E(A.thicknessMap.channel),alphaMapUv:Ue&&E(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Wt||Xe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(at||Ue),fog:!!X,useFog:A.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:_e,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:oe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:at&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===Nt,decodeVideoTextureEmissive:jt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===Nt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===rr,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function x(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)L.push(B),L.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(R(L,A),C(L,A),L.push(n.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function R(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function C(A,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),A.push(u.mask)}function b(A){const L=M[A.type];let B;if(L){const K=Ui[L];B=BC.clone(K.uniforms)}else B=A.uniforms;return B}function D(A,L){let B=m.get(L);return B!==void 0?++B.usedTimes:(B=new v3(n,L,A,a),p.push(B),m.set(L,B)),B}function I(A){if(--A.usedTimes===0){const L=p.indexOf(A);p[L]=p[p.length-1],p.pop(),m.delete(A.cacheKey),A.destroy()}}function U(A){f.remove(A)}function k(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:D,releaseProgram:I,releaseShaderCache:U,programs:p,dispose:k}}function M3(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,f){n.get(c)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function E3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function b_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function R_(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m,v,_,M,E,S){let x=n[e];return x===void 0?(x={id:m.id,object:m,geometry:v,material:_,groupOrder:M,renderOrder:m.renderOrder,z:E,group:S},n[e]=x):(x.id=m.id,x.object=m,x.geometry=v,x.material=_,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=E,x.group=S),e++,x}function u(m,v,_,M,E,S){const x=c(m,v,_,M,E,S);_.transmission>0?i.push(x):_.transparent===!0?o.push(x):t.push(x)}function f(m,v,_,M,E,S){const x=c(m,v,_,M,E,S);_.transmission>0?i.unshift(x):_.transparent===!0?o.unshift(x):t.unshift(x)}function h(m,v){t.length>1&&t.sort(m||E3),i.length>1&&i.sort(v||b_),o.length>1&&o.sort(v||b_)}function p(){for(let m=e,v=n.length;m<v;m++){const _=n[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:f,finish:p,sort:h}}function T3(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new R_,n.set(i,[c])):o>=a.length?(c=new R_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function w3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Ot};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function A3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let C3=0;function b3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R3(n){const e=new w3,t=A3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ie);const o=new ie,a=new sn,c=new sn;function u(h){let p=0,m=0,v=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let _=0,M=0,E=0,S=0,x=0,R=0,C=0,b=0,D=0,I=0,U=0;h.sort(b3);for(let A=0,L=h.length;A<L;A++){const B=h[A],K=B.color,Y=B.intensity,X=B.distance;let le=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ro?le=B.shadow.map.texture:le=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=K.r*Y,m+=K.g*Y,v+=K.b*Y;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(B.sh.coefficients[Q],Y);U++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const $=B.shadow,W=t.get(B);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=le,i.directionalShadowMatrix[_]=B.shadow.matrix,R++}i.directional[_]=Q,_++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(K).multiplyScalar(Y),Q.distance=X,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,i.spot[E]=Q;const $=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,$.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[E]=$.matrix,B.castShadow){const W=t.get(B);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[E]=W,i.spotShadowMap[E]=le,b++}E++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(K).multiplyScalar(Y),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=Q,S++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const $=B.shadow,W=t.get(B);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[M]=W,i.pointShadowMap[M]=le,i.pointShadowMatrix[M]=B.shadow.matrix,C++}i.point[M]=Q,M++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(Y),Q.groundColor.copy(B.groundColor).multiplyScalar(Y),i.hemi[x]=Q,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=v;const k=i.hash;(k.directionalLength!==_||k.pointLength!==M||k.spotLength!==E||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==R||k.numPointShadows!==C||k.numSpotShadows!==b||k.numSpotMaps!==D||k.numLightProbes!==U)&&(i.directional.length=_,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=U,k.directionalLength=_,k.pointLength=M,k.spotLength=E,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=R,k.numPointShadows=C,k.numSpotShadows=b,k.numSpotMaps=D,k.numLightProbes=U,i.version=C3++)}function f(h,p){let m=0,v=0,_=0,M=0,E=0;const S=p.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const C=h[x];if(C.isDirectionalLight){const b=i.directional[m];b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),m++}else if(C.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),_++}else if(C.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),c.identity(),a.copy(C.matrixWorld),a.premultiply(S),c.extractRotation(a),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const b=i.point[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(S),E++}}}return{setup:u,setupView:f,state:i}}function P_(n){const e=new R3(n),t=[],i=[];function o(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function P3(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new P_(n),e.set(o,[u])):a>=c.length?(u=new P_(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const D3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I3=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],N3=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],D_=new sn,Ca=new ie,Od=new ie;function U3(n,e,t){let i=new iS;const o=new St,a=new St,c=new tn,u=new KC,f=new ZC,h={},p=t.maxTextureSize,m={[Yr]:Wn,[Wn]:Yr,[rr]:rr},v=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:D3,fragmentShader:L3}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const M=new mr;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Wi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let x=this.type;this.render=function(I,U,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;I.type===kA&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Oc);const A=n.getRenderTarget(),L=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),K=n.state;K.setBlending(lr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=x!==this.type;Y&&U.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(le=>le.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,le=I.length;X<le;X++){const Q=I[X],$=Q.shadow;if($===void 0){ut("WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const W=$.getFrameExtents();if(o.multiply(W),a.copy($.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/W.x),o.x=a.x*W.x,$.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/W.y),o.y=a.y*W.y,$.mapSize.y=a.y)),$.map===null||Y===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Da){if(Q.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new zi(o.x,o.y,{format:Ro,type:dr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),$.map.texture.name=Q.name+".shadowMap",$.map.depthTexture=new Xa(o.x,o.y,Fi),$.map.depthTexture.name=Q.name+".shadowMapDepth",$.map.depthTexture.format=hr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn}else{Q.isPointLight?($.map=new nS(o.x),$.map.depthTexture=new YC(o.x,Hi)):($.map=new zi(o.x,o.y),$.map.depthTexture=new Xa(o.x,o.y,Hi)),$.map.depthTexture.name=Q.name+".shadowMap",$.map.depthTexture.format=hr;const re=n.state.buffers.depth.getReversed();this.type===Oc?($.map.depthTexture.compareFunction=re?Wp:Hp,$.map.depthTexture.minFilter=Pn,$.map.depthTexture.magFilter=Pn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn)}$.camera.updateProjectionMatrix()}const de=$.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<de;re++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,re),n.clear();else{re===0&&(n.setRenderTarget($.map),n.clear());const O=$.getViewport(re);c.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),K.viewport(c)}if(Q.isPointLight){const O=$.camera,oe=$.matrix,we=Q.distance||O.far;we!==O.far&&(O.far=we,O.updateProjectionMatrix()),Ca.setFromMatrixPosition(Q.matrixWorld),O.position.copy(Ca),Od.copy(O.position),Od.add(I3[re]),O.up.copy(N3[re]),O.lookAt(Od),O.updateMatrixWorld(),oe.makeTranslation(-Ca.x,-Ca.y,-Ca.z),D_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$._frustum.setFromProjectionMatrix(D_,O.coordinateSystem,O.reversedDepth)}else $.updateMatrices(Q);i=$.getFrustum(),b(U,k,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===Da&&R($,k),$.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(A,L,B)};function R(I,U){const k=e.update(E);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zi(o.x,o.y,{format:Ro,type:dr})),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(U,null,k,v,E,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(U,null,k,_,E,null)}function C(I,U,k,A){let L=null;const B=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)L=B;else if(L=k.isPointLight===!0?f:u,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=L.uuid,Y=U.uuid;let X=h[K];X===void 0&&(X={},h[K]=X);let le=X[Y];le===void 0&&(le=L.clone(),X[Y]=le,U.addEventListener("dispose",D)),L=le}if(L.visible=U.visible,L.wireframe=U.wireframe,A===Da?L.side=U.shadowSide!==null?U.shadowSide:U.side:L.side=U.shadowSide!==null?U.shadowSide:m[U.side],L.alphaMap=U.alphaMap,L.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,L.map=U.map,L.clipShadows=U.clipShadows,L.clippingPlanes=U.clippingPlanes,L.clipIntersection=U.clipIntersection,L.displacementMap=U.displacementMap,L.displacementScale=U.displacementScale,L.displacementBias=U.displacementBias,L.wireframeLinewidth=U.wireframeLinewidth,L.linewidth=U.linewidth,k.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const K=n.properties.get(L);K.light=k}return L}function b(I,U,k,A,L){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&L===Da)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),X=I.material;if(Array.isArray(X)){const le=Y.groups;for(let Q=0,$=le.length;Q<$;Q++){const W=le[Q],de=X[W.materialIndex];if(de&&de.visible){const re=C(I,de,A,L);I.onBeforeShadow(n,I,U,k,Y,re,W),n.renderBufferDirect(k,null,Y,re,I,W),I.onAfterShadow(n,I,U,k,Y,re,W)}}}else if(X.visible){const le=C(I,X,A,L);I.onBeforeShadow(n,I,U,k,Y,le,null),n.renderBufferDirect(k,null,Y,le,I,null),I.onAfterShadow(n,I,U,k,Y,le,null)}}const K=I.children;for(let Y=0,X=K.length;Y<X;Y++)b(K[Y],U,k,A,L)}function D(I){I.target.removeEventListener("dispose",D);for(const k in h){const A=h[k],L=I.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const F3={[ah]:lh,[ch]:dh,[uh]:hh,[Co]:fh,[lh]:ah,[dh]:ch,[hh]:uh,[fh]:Co};function O3(n,e){function t(){let G=!1;const Ne=new tn;let Ee=null;const Ue=new tn(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){G=ye},setClear:function(ye,me,Re,st,It){It===!0&&(ye*=st,me*=st,Re*=st),Ne.set(ye,me,Re,st),Ue.equals(Ne)===!1&&(n.clearColor(ye,me,Re,st),Ue.copy(Ne))},reset:function(){G=!1,Ee=null,Ue.set(-1,0,0,0)}}}function i(){let G=!1,Ne=!1,Ee=null,Ue=null,ye=null;return{setReversed:function(me){if(Ne!==me){const Re=e.get("EXT_clip_control");me?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=me;const st=ye;ye=null,this.setClear(st)}},getReversed:function(){return Ne},setTest:function(me){me?fe(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(me){Ee!==me&&!G&&(n.depthMask(me),Ee=me)},setFunc:function(me){if(Ne&&(me=F3[me]),Ue!==me){switch(me){case ah:n.depthFunc(n.NEVER);break;case lh:n.depthFunc(n.ALWAYS);break;case ch:n.depthFunc(n.LESS);break;case Co:n.depthFunc(n.LEQUAL);break;case uh:n.depthFunc(n.EQUAL);break;case fh:n.depthFunc(n.GEQUAL);break;case dh:n.depthFunc(n.GREATER);break;case hh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=me}},setLocked:function(me){G=me},setClear:function(me){ye!==me&&(Ne&&(me=1-me),n.clearDepth(me),ye=me)},reset:function(){G=!1,Ee=null,Ue=null,ye=null,Ne=!1}}}function o(){let G=!1,Ne=null,Ee=null,Ue=null,ye=null,me=null,Re=null,st=null,It=null;return{setTest:function(Et){G||(Et?fe(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!G&&(n.stencilMask(Et),Ne=Et)},setFunc:function(Et,jn,Dn){(Ee!==Et||Ue!==jn||ye!==Dn)&&(n.stencilFunc(Et,jn,Dn),Ee=Et,Ue=jn,ye=Dn)},setOp:function(Et,jn,Dn){(me!==Et||Re!==jn||st!==Dn)&&(n.stencilOp(Et,jn,Dn),me=Et,Re=jn,st=Dn)},setLocked:function(Et){G=Et},setClear:function(Et){It!==Et&&(n.clearStencil(Et),It=Et)},reset:function(){G=!1,Ne=null,Ee=null,Ue=null,ye=null,me=null,Re=null,st=null,It=null}}}const a=new t,c=new i,u=new o,f=new WeakMap,h=new WeakMap;let p={},m={},v=new WeakMap,_=[],M=null,E=!1,S=null,x=null,R=null,C=null,b=null,D=null,I=null,U=new Ot(0,0,0),k=0,A=!1,L=null,B=null,K=null,Y=null,X=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,$=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),Q=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Q=$>=2);let de=null,re={};const O=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),we=new tn().fromArray(O),He=new tn().fromArray(oe);function $e(G,Ne,Ee,Ue){const ye=new Uint8Array(4),me=n.createTexture();n.bindTexture(G,me),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<Ee;Re++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ne,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Ne+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return me}const te={};te[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),c.setFunc(Co),lt(!1),Wt(Ov),fe(n.CULL_FACE),xt(lr);function fe(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function _e(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function Ie(G,Ne){return m[G]!==Ne?(n.bindFramebuffer(G,Ne),m[G]=Ne,G===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ne),G===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Pe(G,Ne){let Ee=_,Ue=!1;if(G){Ee=v.get(Ne),Ee===void 0&&(Ee=[],v.set(Ne,Ee));const ye=G.textures;if(Ee.length!==ye.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Re=ye.length;me<Re;me++)Ee[me]=n.COLOR_ATTACHMENT0+me;Ee.length=ye.length,Ue=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Ee)}function at(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const kt={[Es]:n.FUNC_ADD,[zA]:n.FUNC_SUBTRACT,[GA]:n.FUNC_REVERSE_SUBTRACT};kt[HA]=n.MIN,kt[WA]=n.MAX;const ht={[jA]:n.ZERO,[XA]:n.ONE,[qA]:n.SRC_COLOR,[sh]:n.SRC_ALPHA,[JA]:n.SRC_ALPHA_SATURATE,[ZA]:n.DST_COLOR,[$A]:n.DST_ALPHA,[YA]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[QA]:n.ONE_MINUS_DST_COLOR,[KA]:n.ONE_MINUS_DST_ALPHA,[eC]:n.CONSTANT_COLOR,[tC]:n.ONE_MINUS_CONSTANT_COLOR,[nC]:n.CONSTANT_ALPHA,[iC]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(G,Ne,Ee,Ue,ye,me,Re,st,It,Et){if(G===lr){E===!0&&(_e(n.BLEND),E=!1);return}if(E===!1&&(fe(n.BLEND),E=!0),G!==VA){if(G!==S||Et!==A){if((x!==Es||b!==Es)&&(n.blendEquation(n.FUNC_ADD),x=Es,b=Es),Et)switch(G){case Mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bv:n.blendFunc(n.ONE,n.ONE);break;case kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",G);break}else switch(G){case Mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kv:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vv:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",G);break}R=null,C=null,D=null,I=null,U.set(0,0,0),k=0,S=G,A=Et}return}ye=ye||Ne,me=me||Ee,Re=Re||Ue,(Ne!==x||ye!==b)&&(n.blendEquationSeparate(kt[Ne],kt[ye]),x=Ne,b=ye),(Ee!==R||Ue!==C||me!==D||Re!==I)&&(n.blendFuncSeparate(ht[Ee],ht[Ue],ht[me],ht[Re]),R=Ee,C=Ue,D=me,I=Re),(st.equals(U)===!1||It!==k)&&(n.blendColor(st.r,st.g,st.b,It),U.copy(st),k=It),S=G,A=!1}function Ct(G,Ne){G.side===rr?_e(n.CULL_FACE):fe(n.CULL_FACE);let Ee=G.side===Wn;Ne&&(Ee=!Ee),lt(Ee),G.blending===Mo&&G.transparent===!1?xt(lr):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Ue=G.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),jt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){L!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),L=G)}function Wt(G){G!==OA?(fe(n.CULL_FACE),G!==B&&(G===Ov?n.cullFace(n.BACK):G===BA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),B=G}function z(G){G!==K&&(Q&&n.lineWidth(G),K=G)}function jt(G,Ne,Ee){G?(fe(n.POLYGON_OFFSET_FILL),(Y!==Ne||X!==Ee)&&(n.polygonOffset(Ne,Ee),Y=Ne,X=Ee)):_e(n.POLYGON_OFFSET_FILL)}function vt(G){G?fe(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Mt(G){G===void 0&&(G=n.TEXTURE0+le-1),de!==G&&(n.activeTexture(G),de=G)}function Xe(G,Ne,Ee){Ee===void 0&&(de===null?Ee=n.TEXTURE0+le-1:Ee=de);let Ue=re[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[Ee]=Ue),(Ue.type!==G||Ue.texture!==Ne)&&(de!==Ee&&(n.activeTexture(Ee),de=Ee),n.bindTexture(G,Ne||te[G]),Ue.type=G,Ue.texture=Ne)}function N(){const G=re[de];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function he(){try{n.texSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function ge(){try{n.texSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ke(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ae(){try{n.texStorage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ve(){try{n.texStorage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function rt(){try{n.texImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Me(){try{n.texImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function De(G){we.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function We(G){He.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),He.copy(G))}function qe(G,Ne){let Ee=h.get(Ne);Ee===void 0&&(Ee=new WeakMap,h.set(Ne,Ee));let Ue=Ee.get(G);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ne,G.name),Ee.set(G,Ue))}function be(G,Ne){const Ue=h.get(Ne).get(G);f.get(Ne)!==Ue&&(n.uniformBlockBinding(Ne,Ue,G.__bindingPointIndex),f.set(Ne,Ue))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},de=null,re={},m={},v=new WeakMap,_=[],M=null,E=!1,S=null,x=null,R=null,C=null,b=null,D=null,I=null,U=new Ot(0,0,0),k=0,A=!1,L=null,B=null,K=null,Y=null,X=null,we.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:fe,disable:_e,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:at,setBlending:xt,setMaterial:Ct,setFlipSided:lt,setCullFace:Wt,setLineWidth:z,setPolygonOffset:jt,setScissorTest:vt,activeTexture:Mt,bindTexture:Xe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:rt,texImage3D:Me,updateUBOMapping:qe,uniformBlockBinding:be,texStorage2D:Ae,texStorage3D:Ve,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:De,viewport:We,reset:ft}}function B3(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,p=new WeakMap;let m;const v=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,T){return _?new OffscreenCanvas(N,T):Qc("canvas")}function E(N,T,j){let he=1;const ge=Xe(N);if((ge.width>j||ge.height>j)&&(he=j/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(he*ge.width),Ke=Math.floor(he*ge.height);m===void 0&&(m=M(ue,Ke));const Ae=T?M(ue,Ke):m;return Ae.width=ue,Ae.height=Ke,Ae.getContext("2d").drawImage(N,0,0,ue,Ke),ut("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Ke+")."),Ae}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){n.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(N,T,j,he,ge=!1){if(N!==null){if(n[N]!==void 0)return n[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=T;if(T===n.RED&&(j===n.FLOAT&&(ue=n.R32F),j===n.HALF_FLOAT&&(ue=n.R16F),j===n.UNSIGNED_BYTE&&(ue=n.R8)),T===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.R8UI),j===n.UNSIGNED_SHORT&&(ue=n.R16UI),j===n.UNSIGNED_INT&&(ue=n.R32UI),j===n.BYTE&&(ue=n.R8I),j===n.SHORT&&(ue=n.R16I),j===n.INT&&(ue=n.R32I)),T===n.RG&&(j===n.FLOAT&&(ue=n.RG32F),j===n.HALF_FLOAT&&(ue=n.RG16F),j===n.UNSIGNED_BYTE&&(ue=n.RG8)),T===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.RG8UI),j===n.UNSIGNED_SHORT&&(ue=n.RG16UI),j===n.UNSIGNED_INT&&(ue=n.RG32UI),j===n.BYTE&&(ue=n.RG8I),j===n.SHORT&&(ue=n.RG16I),j===n.INT&&(ue=n.RG32I)),T===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),j===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),j===n.UNSIGNED_INT&&(ue=n.RGB32UI),j===n.BYTE&&(ue=n.RGB8I),j===n.SHORT&&(ue=n.RGB16I),j===n.INT&&(ue=n.RGB32I)),T===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),j===n.UNSIGNED_INT&&(ue=n.RGBA32UI),j===n.BYTE&&(ue=n.RGBA8I),j===n.SHORT&&(ue=n.RGBA16I),j===n.INT&&(ue=n.RGBA32I)),T===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),T===n.RGBA){const Ke=ge?Kc:At.getTransfer(he);j===n.FLOAT&&(ue=n.RGBA32F),j===n.HALF_FLOAT&&(ue=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ue=Ke===Nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(N,T){let j;return N?T===null||T===Hi||T===Wa?j=n.DEPTH24_STENCIL8:T===Fi?j=n.DEPTH32F_STENCIL8:T===Ha&&(j=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hi||T===Wa?j=n.DEPTH_COMPONENT24:T===Fi?j=n.DEPTH_COMPONENT32F:T===Ha&&(j=n.DEPTH_COMPONENT16),j}function D(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==yn&&N.minFilter!==Pn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),k(T),T.isVideoTexture&&p.delete(T)}function U(N){const T=N.target;T.removeEventListener("dispose",U),L(T)}function k(N){const T=i.get(N);if(T.__webglInit===void 0)return;const j=N.source,he=v.get(j);if(he){const ge=he[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&A(N),Object.keys(he).length===0&&v.delete(j)}i.remove(N)}function A(N){const T=i.get(N);n.deleteTexture(T.__webglTexture);const j=N.source,he=v.get(j);delete he[T.__cacheKey],c.memory.textures--}function L(N){const T=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ge=0;ge<T.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(T.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)n.deleteFramebuffer(T.__webglFramebuffer[he]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=N.textures;for(let he=0,ge=j.length;he<ge;he++){const ue=i.get(j[he]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove(j[he])}i.remove(N)}let B=0;function K(){B=0}function Y(){const N=B;return N>=o.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),B+=1,N}function X(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function le(N,T){const j=i.get(N);if(N.isVideoTexture&&vt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const he=N.image;if(he===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,N,T);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+T)}function Q(N,T){const j=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){te(j,N,T);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+T)}function $(N,T){const j=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){te(j,N,T);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+T)}function W(N,T){const j=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){fe(j,N,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+T)}const de={[gh]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[vh]:n.MIRRORED_REPEAT},re={[yn]:n.NEAREST,[oC]:n.NEAREST_MIPMAP_NEAREST,[hc]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[ad]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},O={[uC]:n.NEVER,[mC]:n.ALWAYS,[fC]:n.LESS,[Hp]:n.LEQUAL,[dC]:n.EQUAL,[Wp]:n.GEQUAL,[hC]:n.GREATER,[pC]:n.NOTEQUAL};function oe(N,T){if(T.type===Fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pn||T.magFilter===ad||T.magFilter===hc||T.magFilter===As||T.minFilter===Pn||T.minFilter===ad||T.minFilter===hc||T.minFilter===As)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,de[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,de[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,de[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,re[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==hc&&T.minFilter!==As||T.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function we(N,T){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const he=T.source;let ge=v.get(he);ge===void 0&&(ge={},v.set(he,ge));const ue=X(T);if(ue!==N.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[ue].usedTimes++;const Ke=ge[N.__cacheKey];Ke!==void 0&&(ge[N.__cacheKey].usedTimes--,Ke.usedTimes===0&&A(T)),N.__cacheKey=ue,N.__webglTexture=ge[ue].texture}return j}function He(N,T,j){return Math.floor(Math.floor(N/j)/T)}function $e(N,T,j,he){const ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,j,he,T.data);else{ue.sort((Me,De)=>Me.start-De.start);let Ke=0;for(let Me=1;Me<ue.length;Me++){const De=ue[Ke],We=ue[Me],qe=De.start+De.count,be=He(We.start,T.width,4),ft=He(De.start,T.width,4);We.start<=qe+1&&be===ft&&He(We.start+We.count-1,T.width,4)===be?De.count=Math.max(De.count,We.start+We.count-De.start):(++Ke,ue[Ke]=We)}ue.length=Ke+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ve=n.getParameter(n.UNPACK_SKIP_PIXELS),rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Me=0,De=ue.length;Me<De;Me++){const We=ue[Me],qe=Math.floor(We.start/4),be=Math.ceil(We.count/4),ft=qe%T.width,G=Math.floor(qe/T.width),Ne=be,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ft,G,Ne,Ee,j,he,T.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function te(N,T,j){let he=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=n.TEXTURE_3D);const ge=we(N,T),ue=T.source;t.bindTexture(he,N.__webglTexture,n.TEXTURE0+j);const Ke=i.get(ue);if(ue.version!==Ke.__version||ge===!0){t.activeTexture(n.TEXTURE0+j);const Ae=At.getPrimaries(At.workingColorSpace),Ve=T.colorSpace===Wr?null:At.getPrimaries(T.colorSpace),rt=T.colorSpace===Wr||Ae===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=E(T.image,!1,o.maxTextureSize);Me=Mt(T,Me);const De=a.convert(T.format,T.colorSpace),We=a.convert(T.type);let qe=C(T.internalFormat,De,We,T.colorSpace,T.isVideoTexture);oe(he,T);let be;const ft=T.mipmaps,G=T.isVideoTexture!==!0,Ne=Ke.__version===void 0||ge===!0,Ee=ue.dataReady,Ue=D(T,Me);if(T.isDepthTexture)qe=b(T.format===Cs,T.type),Ne&&(G?t.texStorage2D(n.TEXTURE_2D,1,qe,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,qe,Me.width,Me.height,0,De,We,null));else if(T.isDataTexture)if(ft.length>0){G&&Ne&&t.texStorage2D(n.TEXTURE_2D,Ue,qe,ft[0].width,ft[0].height);for(let ye=0,me=ft.length;ye<me;ye++)be=ft[ye],G?Ee&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,be.width,be.height,De,We,be.data):t.texImage2D(n.TEXTURE_2D,ye,qe,be.width,be.height,0,De,We,be.data);T.generateMipmaps=!1}else G?(Ne&&t.texStorage2D(n.TEXTURE_2D,Ue,qe,Me.width,Me.height),Ee&&$e(T,Me,De,We)):t.texImage2D(n.TEXTURE_2D,0,qe,Me.width,Me.height,0,De,We,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,qe,ft[0].width,ft[0].height,Me.depth);for(let ye=0,me=ft.length;ye<me;ye++)if(be=ft[ye],T.format!==wi)if(De!==null)if(G){if(Ee)if(T.layerUpdates.size>0){const Re=l_(be.width,be.height,T.format,T.type);for(const st of T.layerUpdates){const It=be.data.subarray(st*Re/be.data.BYTES_PER_ELEMENT,(st+1)*Re/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,st,be.width,be.height,1,De,It)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,be.width,be.height,Me.depth,De,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,qe,be.width,be.height,Me.depth,0,be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,be.width,be.height,Me.depth,De,We,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,qe,be.width,be.height,Me.depth,0,De,We,be.data)}else{G&&Ne&&t.texStorage2D(n.TEXTURE_2D,Ue,qe,ft[0].width,ft[0].height);for(let ye=0,me=ft.length;ye<me;ye++)be=ft[ye],T.format!==wi?De!==null?G?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,qe,be.width,be.height,0,be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,be.width,be.height,De,We,be.data):t.texImage2D(n.TEXTURE_2D,ye,qe,be.width,be.height,0,De,We,be.data)}else if(T.isDataArrayTexture)if(G){if(Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,qe,Me.width,Me.height,Me.depth),Ee)if(T.layerUpdates.size>0){const ye=l_(Me.width,Me.height,T.format,T.type);for(const me of T.layerUpdates){const Re=Me.data.subarray(me*ye/Me.data.BYTES_PER_ELEMENT,(me+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,De,We,Re)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,We,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,Me.width,Me.height,Me.depth,0,De,We,Me.data);else if(T.isData3DTexture)G?(Ne&&t.texStorage3D(n.TEXTURE_3D,Ue,qe,Me.width,Me.height,Me.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,We,Me.data)):t.texImage3D(n.TEXTURE_3D,0,qe,Me.width,Me.height,Me.depth,0,De,We,Me.data);else if(T.isFramebufferTexture){if(Ne)if(G)t.texStorage2D(n.TEXTURE_2D,Ue,qe,Me.width,Me.height);else{let ye=Me.width,me=Me.height;for(let Re=0;Re<Ue;Re++)t.texImage2D(n.TEXTURE_2D,Re,qe,ye,me,0,De,We,null),ye>>=1,me>>=1}}else if(ft.length>0){if(G&&Ne){const ye=Xe(ft[0]);t.texStorage2D(n.TEXTURE_2D,Ue,qe,ye.width,ye.height)}for(let ye=0,me=ft.length;ye<me;ye++)be=ft[ye],G?Ee&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,De,We,be):t.texImage2D(n.TEXTURE_2D,ye,qe,De,We,be);T.generateMipmaps=!1}else if(G){if(Ne){const ye=Xe(Me);t.texStorage2D(n.TEXTURE_2D,Ue,qe,ye.width,ye.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,We,Me)}else t.texImage2D(n.TEXTURE_2D,0,qe,De,We,Me);S(T)&&x(he),Ke.__version=ue.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function fe(N,T,j){if(T.image.length!==6)return;const he=we(N,T),ge=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);const ue=i.get(ge);if(ge.version!==ue.__version||he===!0){t.activeTexture(n.TEXTURE0+j);const Ke=At.getPrimaries(At.workingColorSpace),Ae=T.colorSpace===Wr?null:At.getPrimaries(T.colorSpace),Ve=T.colorSpace===Wr||Ke===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const rt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,De=[];for(let me=0;me<6;me++)!rt&&!Me?De[me]=E(T.image[me],!0,o.maxCubemapSize):De[me]=Me?T.image[me].image:T.image[me],De[me]=Mt(T,De[me]);const We=De[0],qe=a.convert(T.format,T.colorSpace),be=a.convert(T.type),ft=C(T.internalFormat,qe,be,T.colorSpace),G=T.isVideoTexture!==!0,Ne=ue.__version===void 0||he===!0,Ee=ge.dataReady;let Ue=D(T,We);oe(n.TEXTURE_CUBE_MAP,T);let ye;if(rt){G&&Ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ft,We.width,We.height);for(let me=0;me<6;me++){ye=De[me].mipmaps;for(let Re=0;Re<ye.length;Re++){const st=ye[Re];T.format!==wi?qe!==null?G?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,st.width,st.height,qe,st.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ft,st.width,st.height,0,st.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,st.width,st.height,qe,be,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ft,st.width,st.height,0,qe,be,st.data)}}}else{if(ye=T.mipmaps,G&&Ne){ye.length>0&&Ue++;const me=Xe(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ft,me.width,me.height)}for(let me=0;me<6;me++)if(Me){G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De[me].width,De[me].height,qe,be,De[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,De[me].width,De[me].height,0,qe,be,De[me].data);for(let Re=0;Re<ye.length;Re++){const It=ye[Re].image[me].image;G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,It.width,It.height,qe,be,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ft,It.width,It.height,0,qe,be,It.data)}}else{G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,qe,be,De[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,qe,be,De[me]);for(let Re=0;Re<ye.length;Re++){const st=ye[Re];G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,qe,be,st.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ft,qe,be,st.image[me])}}}S(T)&&x(n.TEXTURE_CUBE_MAP),ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _e(N,T,j,he,ge,ue){const Ke=a.convert(j.format,j.colorSpace),Ae=a.convert(j.type),Ve=C(j.internalFormat,Ke,Ae,j.colorSpace),rt=i.get(T),Me=i.get(j);if(Me.__renderTarget=T,!rt.__hasExternalTextures){const De=Math.max(1,T.width>>ue),We=Math.max(1,T.height>>ue);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Ve,De,We,T.depth,0,Ke,Ae,null):t.texImage2D(ge,ue,Ve,De,We,0,Ke,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),jt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ge,Me.__webglTexture,0,z(T)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ge,Me.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(N,T,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){const he=T.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ue=b(T.stencilBuffer,ge),Ke=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(T),ue,T.width,T.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(T),ue,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ke,n.RENDERBUFFER,N)}else{const he=T.textures;for(let ge=0;ge<he.length;ge++){const ue=he[ge],Ke=a.convert(ue.format,ue.colorSpace),Ae=a.convert(ue.type),Ve=C(ue.internalFormat,Ke,Ae,ue.colorSpace);jt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(T),Ve,T.width,T.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(T),Ve,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(N,T,j){const he=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),oe(n.TEXTURE_CUBE_MAP,T.depthTexture);const rt=a.convert(T.depthTexture.format),Me=a.convert(T.depthTexture.type);let De;T.depthTexture.format===hr?De=n.DEPTH_COMPONENT24:T.depthTexture.format===Cs&&(De=n.DEPTH24_STENCIL8);for(let We=0;We<6;We++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,De,T.width,T.height,0,rt,Me,null)}}else le(T.depthTexture,0);const ue=ge.__webglTexture,Ke=z(T),Ae=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Ve=T.depthTexture.format===Cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===hr)jt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,Ae,ue,0,Ke):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,Ae,ue,0);else if(T.depthTexture.format===Cs)jt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,Ae,ue,0,Ke):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,Ae,ue,0);else throw new Error("Unknown depthTexture format")}function at(N){const T=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=he}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let he=0;he<6;he++)Pe(T.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?Pe(T.__webglFramebuffer[0],N,0):Pe(T.__webglFramebuffer,N,0)}else if(j){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=n.createRenderbuffer(),Ie(T.__webglDepthbuffer[he],N,!1);else{const ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,ue)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ie(T.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(N,T,j){const he=i.get(N);T!==void 0&&_e(he.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&at(N)}function ht(N){const T=N.texture,j=i.get(N),he=i.get(T);N.addEventListener("dispose",U);const ge=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Ke=ge.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=T.version,c.memory.textures++),ue){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)j.__webglFramebuffer[Ae][Ve]=n.createFramebuffer()}else j.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ke)for(let Ae=0,Ve=ge.length;Ae<Ve;Ae++){const rt=i.get(ge[Ae]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),c.memory.textures++)}if(N.samples>0&&jt(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ve=ge[Ae];j.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const rt=a.convert(Ve.format,Ve.colorSpace),Me=a.convert(Ve.type),De=C(Ve.internalFormat,rt,Me,Ve.colorSpace,N.isXRRenderTarget===!0),We=z(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,De,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),oe(n.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)_e(j.__webglFramebuffer[Ae][Ve],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ve);else _e(j.__webglFramebuffer[Ae],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ae=0,Ve=ge.length;Ae<Ve;Ae++){const rt=ge[Ae],Me=i.get(rt);let De=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Me.__webglTexture),oe(De,rt),_e(j.__webglFramebuffer,N,rt,n.COLOR_ATTACHMENT0+Ae,De,0),S(rt)&&x(De)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),oe(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)_e(j.__webglFramebuffer[Ve],N,T,n.COLOR_ATTACHMENT0,Ae,Ve);else _e(j.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,Ae,0);S(T)&&x(Ae),t.unbindTexture()}N.depthBuffer&&at(N)}function xt(N){const T=N.textures;for(let j=0,he=T.length;j<he;j++){const ge=T[j];if(S(ge)){const ue=R(N),Ke=i.get(ge).__webglTexture;t.bindTexture(ue,Ke),x(ue),t.unbindTexture()}}}const Ct=[],lt=[];function Wt(N){if(N.samples>0){if(jt(N)===!1){const T=N.textures,j=N.width,he=N.height;let ge=n.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ke=i.get(N),Ae=T.length>1;if(Ae)for(let rt=0;rt<T.length;rt++)t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ve=N.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let rt=0;rt<T.length;rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[rt]);const Me=i.get(T[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,j,he,0,0,j,he,ge,n.NEAREST),f===!0&&(Ct.length=0,lt.length=0,Ct.push(n.COLOR_ATTACHMENT0+rt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ct.push(ue),lt.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let rt=0;rt<T.length;rt++){t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[rt]);const Me=i.get(T[rt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function z(N){return Math.min(o.maxSamples,N.samples)}function jt(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(N){const T=c.render.frame;p.get(N)!==T&&(p.set(N,T),N.update())}function Mt(N,T){const j=N.colorSpace,he=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Po&&j!==Wr&&(At.getTransfer(j)===Nt?(he!==wi||ge!==di)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",j)),T}function Xe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=K,this.setTexture2D=le,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k3(n,e){function t(i,o=Wr){let a;const c=At.getTransfer(o);if(i===di)return n.UNSIGNED_BYTE;if(i===Bp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===By)return n.BYTE;if(i===ky)return n.SHORT;if(i===Ha)return n.UNSIGNED_SHORT;if(i===Op)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===Gy)return n.ALPHA;if(i===Hy)return n.RGB;if(i===wi)return n.RGBA;if(i===hr)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===Wy)return n.RED;if(i===Vp)return n.RED_INTEGER;if(i===Ro)return n.RG;if(i===zp)return n.RG_INTEGER;if(i===Gp)return n.RGBA_INTEGER;if(i===Bc||i===kc||i===Vc||i===zc)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===xh||i===yh||i===Sh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===bh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Mh||i===Eh)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Th)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===wh)return a.COMPRESSED_R11_EAC;if(i===Ah)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ch)return a.COMPRESSED_RG11_EAC;if(i===bh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rh||i===Ph||i===Dh||i===Lh||i===Ih||i===Nh||i===Uh||i===Fh||i===Oh||i===Bh||i===kh||i===Vh||i===zh||i===Gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Rh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ph)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ih)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hh||i===Wh||i===jh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Hh)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xh||i===qh||i===Yh||i===$h)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:V3,fragmentShader:z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H3 extends No{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,m=null,v=null,_=null,M=null;const E=typeof XRWebGLBinding<"u",S=new G3,x={},R=t.getContextAttributes();let C=null,b=null;const D=[],I=[],U=new St;let k=null;const A=new Ti;A.viewport=new tn;const L=new Ti;L.viewport=new tn;const B=[A,L],K=new QC;let Y=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=D[te];return fe===void 0&&(fe=new Pd,D[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=D[te];return fe===void 0&&(fe=new Pd,D[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=D[te];return fe===void 0&&(fe=new Pd,D[te]=fe),fe.getHandSpace()};function le(te){const fe=I.indexOf(te.inputSource);if(fe===-1)return;const _e=D[fe];_e!==void 0&&(_e.update(te.inputSource,te.frame,h||c),_e.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",$);for(let te=0;te<D.length;te++){const fe=I[te];fe!==null&&(I[te]=null,D[te].disconnect(fe))}Y=null,X=null,S.reset();for(const te in x)delete x[te];e.setRenderTarget(C),_=null,v=null,m=null,o=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){u=te,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(o,t)),m},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",$),R.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Pe=null;R.depth&&(Pe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=R.stencil?Cs:hr,Ie=R.stencil?Wa:Hi);const at={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};m=this.getBinding(),v=m.createProjectionLayer(at),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new zi(v.textureWidth,v.textureHeight,{format:wi,type:di,depthTexture:new Xa(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const _e={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new zi(_.framebufferWidth,_.framebufferHeight,{format:wi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),$e.setContext(o),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(te){for(let fe=0;fe<te.removed.length;fe++){const _e=te.removed[fe],Ie=I.indexOf(_e);Ie>=0&&(I[Ie]=null,D[Ie].disconnect(_e))}for(let fe=0;fe<te.added.length;fe++){const _e=te.added[fe];let Ie=I.indexOf(_e);if(Ie===-1){for(let at=0;at<D.length;at++)if(at>=I.length){I.push(_e),Ie=at;break}else if(I[at]===null){I[at]=_e,Ie=at;break}if(Ie===-1)break}const Pe=D[Ie];Pe&&Pe.connect(_e)}}const W=new ie,de=new ie;function re(te,fe,_e){W.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(_e.matrixWorld);const Ie=W.distanceTo(de),Pe=fe.projectionMatrix.elements,at=_e.projectionMatrix.elements,kt=Pe[14]/(Pe[10]-1),ht=Pe[14]/(Pe[10]+1),xt=(Pe[9]+1)/Pe[5],Ct=(Pe[9]-1)/Pe[5],lt=(Pe[8]-1)/Pe[0],Wt=(at[8]+1)/at[0],z=kt*lt,jt=kt*Wt,vt=Ie/(-lt+Wt),Mt=vt*-lt;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Mt),te.translateZ(vt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Pe[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=kt+vt,N=ht+vt,T=z-Mt,j=jt+(Ie-Mt),he=xt*ht/N*Xe,ge=Ct*ht/N*Xe;te.projectionMatrix.makePerspective(T,j,he,ge,Xe,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function O(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let fe=te.near,_e=te.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),K.near=L.near=A.near=fe,K.far=L.far=A.far=_e,(Y!==K.near||X!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),Y=K.near,X=K.far),K.layers.mask=te.layers.mask|6,A.layers.mask=K.layers.mask&3,L.layers.mask=K.layers.mask&5;const Ie=te.parent,Pe=K.cameras;O(K,Ie);for(let at=0;at<Pe.length;at++)O(Pe[at],Ie);Pe.length===2?re(K,A,L):K.projectionMatrix.copy(A.projectionMatrix),oe(te,K,Ie)};function oe(te,fe,_e){_e===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(_e.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Kh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&_===null))return f},this.setFoveation=function(te){f=te,v!==null&&(v.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(te){return x[te]};let we=null;function He(te,fe){if(p=fe.getViewerPose(h||c),M=fe,p!==null){const _e=p.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let Ie=!1;_e.length!==K.cameras.length&&(K.cameras.length=0,Ie=!0);for(let ht=0;ht<_e.length;ht++){const xt=_e[ht];let Ct=null;if(_!==null)Ct=_.getViewport(xt);else{const Wt=m.getViewSubImage(v,xt);Ct=Wt.viewport,ht===0&&(e.setRenderTargetTextures(b,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(b))}let lt=B[ht];lt===void 0&&(lt=new Ti,lt.layers.enable(ht),lt.viewport=new tn,B[ht]=lt),lt.matrix.fromArray(xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ie===!0&&K.cameras.push(lt)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const ht=m.getDepthInformation(_e[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,o.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),m=i.getBinding();for(let ht=0;ht<_e.length;ht++){const xt=_e[ht].camera;if(xt){let Ct=x[xt];Ct||(Ct=new rS,x[xt]=Ct);const lt=m.getCameraImage(xt);Ct.sourceTexture=lt}}}}for(let _e=0;_e<D.length;_e++){const Ie=I[_e],Pe=D[_e];Ie!==null&&Pe!==void 0&&Pe.update(Ie,fe,h||c)}we&&we(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const $e=new sS;$e.setAnimationLoop(He),this.setAnimationLoop=function(te){we=te},this.dispose=function(){}}}const xs=new Ps,W3=new sn;function j3(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,Jy(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,R,C,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),m(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),v(S,x),x.isMeshPhysicalMaterial&&_(S,x,b)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,R,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=e.get(x),C=R.envMap,b=R.envMapRotation;C&&(S.envMap.value=C,xs.copy(b),xs.x*=-1,xs.y*=-1,xs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(W3.makeRotationFromEuler(xs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,R,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function _(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const R=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function X3(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,C){const b=C.program;i.uniformBlockBinding(R,b)}function h(R,C){let b=o[R.id];b===void 0&&(M(R),b=p(R),o[R.id]=b,R.addEventListener("dispose",S));const D=C.program;i.updateUBOMapping(R,D);const I=e.render.frame;a[R.id]!==I&&(v(R),a[R.id]=I)}function p(R){const C=m();R.__bindingPointIndex=C;const b=n.createBuffer(),D=R.__size,I=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,b),b}function m(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const C=o[R.id],b=R.uniforms,D=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let I=0,U=b.length;I<U;I++){const k=Array.isArray(b[I])?b[I]:[b[I]];for(let A=0,L=k.length;A<L;A++){const B=k[A];if(_(B,I,A,D)===!0){const K=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value];let X=0;for(let le=0;le<Y.length;le++){const Q=Y[le],$=E(Q);typeof Q=="number"||typeof Q=="boolean"?(B.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,K+X,B.__data)):Q.isMatrix3?(B.__data[0]=Q.elements[0],B.__data[1]=Q.elements[1],B.__data[2]=Q.elements[2],B.__data[3]=0,B.__data[4]=Q.elements[3],B.__data[5]=Q.elements[4],B.__data[6]=Q.elements[5],B.__data[7]=0,B.__data[8]=Q.elements[6],B.__data[9]=Q.elements[7],B.__data[10]=Q.elements[8],B.__data[11]=0):(Q.toArray(B.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(R,C,b,D){const I=R.value,U=C+"_"+b;if(D[U]===void 0)return typeof I=="number"||typeof I=="boolean"?D[U]=I:D[U]=I.clone(),!0;{const k=D[U];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return D[U]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function M(R){const C=R.uniforms;let b=0;const D=16;for(let U=0,k=C.length;U<k;U++){const A=Array.isArray(C[U])?C[U]:[C[U]];for(let L=0,B=A.length;L<B;L++){const K=A[L],Y=Array.isArray(K.value)?K.value:[K.value];for(let X=0,le=Y.length;X<le;X++){const Q=Y[X],$=E(Q),W=b%D,de=W%$.boundary,re=W+de;b+=de,re!==0&&D-re<$.storage&&(b+=D-re),K.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=$.storage}}}const I=b%D;return I>0&&(b+=D-I),R.__size=b,R.__cache={},this}function E(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",R),C}function S(R){const C=R.target;C.removeEventListener("dispose",S);const b=c.indexOf(C.__bindingPointIndex);c.splice(b,1),n.deleteBuffer(o[C.id]),delete o[C.id],delete a[C.id]}function x(){for(const R in o)n.deleteBuffer(o[R]);c=[],o={},a={}}return{bind:f,update:h,dispose:x}}const q3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function Y3(){return Ni===null&&(Ni=new WC(q3,16,16,Ro,dr),Ni.name="DFG_LUT",Ni.minFilter=Pn,Ni.magFilter=Pn,Ni.wrapS=sr,Ni.wrapT=sr,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class $3{constructor(e={}){const{canvas:t=gC(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:_=di}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=_,S=new Set([Gp,zp,Vp]),x=new Set([di,Hi,Ha,Wa,Bp,kp]),R=new Uint32Array(4),C=new Int32Array(4);let b=null,D=null;const I=[],U=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=fi;let B=0,K=0,Y=null,X=-1,le=null;const Q=new tn,$=new tn;let W=null;const de=new Ot(0);let re=0,O=t.width,oe=t.height,we=1,He=null,$e=null;const te=new tn(0,0,O,oe),fe=new tn(0,0,O,oe);let _e=!1;const Ie=new iS;let Pe=!1,at=!1;const kt=new sn,ht=new ie,xt=new tn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Wt(){return Y===null?we:1}let z=i;function jt(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fp}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Et,!1),z===null){const q="webgl2";if(z=jt(q,P),z===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Pt("WebGLRenderer: "+P.message),P}let vt,Mt,Xe,N,T,j,he,ge,ue,Ke,Ae,Ve,rt,Me,De,We,qe,be,ft,G,Ne,Ee,Ue,ye;function me(){vt=new Y2(z),vt.init(),Ee=new k3(z,vt),Mt=new k2(z,vt,e,Ee),Xe=new O3(z,vt),Mt.reversedDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),N=new Z2(z),T=new M3,j=new B3(z,vt,Xe,T,Mt,Ee,N),he=new z2(A),ge=new q2(A),ue=new tb(z),Ue=new O2(z,ue),Ke=new $2(z,ue,N,Ue),Ae=new J2(z,Ke,ue,N),ft=new Q2(z,Mt,j),We=new V2(T),Ve=new S3(A,he,ge,vt,Mt,Ue,We),rt=new j3(A,T),Me=new T3,De=new P3(vt),be=new F2(A,he,ge,Xe,Ae,M,f),qe=new U3(A,Ae,Mt),ye=new X3(z,N,Mt,Xe),G=new B2(z,vt,N),Ne=new K2(z,vt,N),N.programs=Ve.programs,A.capabilities=Mt,A.extensions=vt,A.properties=T,A.renderLists=Me,A.shadowMap=qe,A.state=Xe,A.info=N}me(),E!==di&&(k=new tP(E,t.width,t.height,o,a));const Re=new H3(A,z);this.xr=Re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(P){P!==void 0&&(we=P,this.setSize(O,oe,!1))},this.getSize=function(P){return P.set(O,oe)},this.setSize=function(P,q,ae=!0){if(Re.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,oe=q,t.width=Math.floor(P*we),t.height=Math.floor(q*we),ae===!0&&(t.style.width=P+"px",t.style.height=q+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(O*we,oe*we).floor()},this.setDrawingBufferSize=function(P,q,ae){O=P,oe=q,we=ae,t.width=Math.floor(P*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(E===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(Q)},this.getViewport=function(P){return P.copy(te)},this.setViewport=function(P,q,ae,ne){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,q,ae,ne),Xe.viewport(Q.copy(te).multiplyScalar(we).round())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,q,ae,ne){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,q,ae,ne),Xe.scissor($.copy(fe).multiplyScalar(we).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(P){Xe.setScissorTest(_e=P)},this.setOpaqueSort=function(P){He=P},this.setTransparentSort=function(P){$e=P},this.getClearColor=function(P){return P.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,ae=!0){let ne=0;if(P){let J=!1;if(Y!==null){const Le=Y.texture.format;J=S.has(Le)}if(J){const Le=Y.texture.type,Oe=x.has(Le),Ce=be.getClearColor(),Ge=be.getClearAlpha(),ke=Ce.r,nt=Ce.g,Qe=Ce.b;Oe?(R[0]=ke,R[1]=nt,R[2]=Qe,R[3]=Ge,z.clearBufferuiv(z.COLOR,0,R)):(C[0]=ke,C[1]=nt,C[2]=Qe,C[3]=Ge,z.clearBufferiv(z.COLOR,0,C))}else ne|=z.COLOR_BUFFER_BIT}q&&(ne|=z.DEPTH_BUFFER_BIT),ae&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),be.dispose(),Me.dispose(),De.dispose(),T.dispose(),he.dispose(),ge.dispose(),Ae.dispose(),Ue.dispose(),ye.dispose(),Ve.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Zr),Re.removeEventListener("sessionend",Qr),hi.stop()};function st(P){P.preventDefault(),jv("WebGLRenderer: Context Lost."),L=!0}function It(){jv("WebGLRenderer: Context Restored."),L=!1;const P=N.autoReset,q=qe.enabled,ae=qe.autoUpdate,ne=qe.needsUpdate,J=qe.type;me(),N.autoReset=P,qe.enabled=q,qe.autoUpdate=ae,qe.needsUpdate=ne,qe.type=J}function Et(P){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function jn(P){const q=P.target;q.removeEventListener("dispose",jn),Dn(q)}function Dn(P){Fo(P),T.remove(P)}function Fo(P){const q=T.get(P).programs;q!==void 0&&(q.forEach(function(ae){Ve.releaseProgram(ae)}),P.isShaderMaterial&&Ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,ae,ne,J,Le){q===null&&(q=Ct);const Oe=J.isMesh&&J.matrixWorld.determinant()<0,Ce=sl(P,q,ae,ne,J);Xe.setMaterial(ne,Oe);let Ge=ae.index,ke=1;if(ne.wireframe===!0){if(Ge=Ke.getWireframeAttribute(ae),Ge===void 0)return;ke=2}const nt=ae.drawRange,Qe=ae.attributes.position;let pt=nt.start*ke,Tt=(nt.start+nt.count)*ke;Le!==null&&(pt=Math.max(pt,Le.start*ke),Tt=Math.min(Tt,(Le.start+Le.count)*ke)),Ge!==null?(pt=Math.max(pt,0),Tt=Math.min(Tt,Ge.count)):Qe!=null&&(pt=Math.max(pt,0),Tt=Math.min(Tt,Qe.count));const Bt=Tt-pt;if(Bt<0||Bt===1/0)return;Ue.setup(J,ne,Ce,ae,Ge);let Ft,bt=G;if(Ge!==null&&(Ft=ue.get(Ge),bt=Ne,bt.setIndex(Ft)),J.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*Wt()),bt.setMode(z.LINES)):bt.setMode(z.TRIANGLES);else if(J.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),Xe.setLineWidth(Je*Wt()),J.isLineSegments?bt.setMode(z.LINES):J.isLineLoop?bt.setMode(z.LINE_LOOP):bt.setMode(z.LINE_STRIP)}else J.isPoints?bt.setMode(z.POINTS):J.isSprite&&bt.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ja("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))bt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Je=J._multiDrawStarts,Dt=J._multiDrawCounts,_t=J._multiDrawCount,Sn=Ge?ue.get(Ge).bytesPerElement:1,bi=T.get(ne).currentProgram.getUniforms();for(let on=0;on<_t;on++)bi.setValue(z,"_gl_DrawID",on),bt.render(Je[on]/Sn,Dt[on])}else if(J.isInstancedMesh)bt.renderInstances(pt,Bt,J.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Dt=Math.min(ae.instanceCount,Je);bt.renderInstances(pt,Bt,Dt)}else bt.render(pt,Bt)};function gr(P,q,ae){P.transparent===!0&&P.side===rr&&P.forceSinglePass===!1?(P.side=Wn,P.needsUpdate=!0,Jr(P,q,ae),P.side=Yr,P.needsUpdate=!0,Jr(P,q,ae),P.side=rr):Jr(P,q,ae)}this.compile=function(P,q,ae=null){ae===null&&(ae=P),D=De.get(ae),D.init(q),U.push(D),ae.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),P!==ae&&P.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights();const ne=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let Oe=0;Oe<Le.length;Oe++){const Ce=Le[Oe];gr(Ce,ae,J),ne.add(Ce)}else gr(Le,ae,J),ne.add(Le)}),D=U.pop(),ne},this.compileAsync=function(P,q,ae=null){const ne=this.compile(P,q,ae);return new Promise(J=>{function Le(){if(ne.forEach(function(Oe){T.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){J(P);return}setTimeout(Le,10)}vt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Oo=null;function Kr(P){Oo&&Oo(P)}function Zr(){hi.stop()}function Qr(){hi.start()}const hi=new sS;hi.setAnimationLoop(Kr),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(P){Oo=P,Re.setAnimationLoop(P),P===null?hi.stop():hi.start()},Re.addEventListener("sessionstart",Zr),Re.addEventListener("sessionend",Qr),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ae=Re.enabled===!0&&Re.isPresenting===!0,ne=k!==null&&(Y===null||ae)&&k.begin(A,Y);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(q),q=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,q,Y),D=De.get(P,U.length),D.init(q),U.push(D),kt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ie.setFromProjectionMatrix(kt,Oi,q.reversedDepth),at=this.localClippingEnabled,Pe=We.init(this.clippingPlanes,at),b=Me.get(P,I.length),b.init(),I.push(b),Re.enabled===!0&&Re.isPresenting===!0){const Oe=A.xr.getDepthSensingMesh();Oe!==null&&Bo(Oe,q,-1/0,A.sortObjects)}Bo(P,q,0,A.sortObjects),b.finish(),A.sortObjects===!0&&b.sort(He,$e),lt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,lt&&be.addToRenderList(b,P),this.info.render.frame++,Pe===!0&&We.beginShadows();const J=D.state.shadowsArray;if(qe.render(J,P,q),Pe===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&k.hasRenderPass())===!1){const Oe=b.opaque,Ce=b.transmissive;if(D.setupLights(),q.isArrayCamera){const Ge=q.cameras;if(Ce.length>0)for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke];il(Oe,Ce,P,Qe)}lt&&be.render(P);for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke];nl(b,P,Qe,Qe.viewport)}}else Ce.length>0&&il(Oe,Ce,P,q),lt&&be.render(P),nl(b,P,q)}Y!==null&&K===0&&(j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y)),ne&&k.end(A),P.isScene===!0&&P.onAfterRender(A,P,q),Ue.resetDefaultState(),X=-1,le=null,U.pop(),U.length>0?(D=U[U.length-1],Pe===!0&&We.setGlobalState(A.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?b=I[I.length-1]:b=null};function Bo(P,q,ae,ne){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)D.pushLight(P),P.castShadow&&D.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ie.intersectsSprite(P)){ne&&xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(kt);const Oe=Ae.update(P),Ce=P.material;Ce.visible&&b.push(P,Oe,Ce,ae,xt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ie.intersectsObject(P))){const Oe=Ae.update(P),Ce=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xt.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),xt.copy(Oe.boundingSphere.center)),xt.applyMatrix4(P.matrixWorld).applyMatrix4(kt)),Array.isArray(Ce)){const Ge=Oe.groups;for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke],pt=Ce[Qe.materialIndex];pt&&pt.visible&&b.push(P,Oe,pt,ae,xt.z,Qe)}}else Ce.visible&&b.push(P,Oe,Ce,ae,xt.z,null)}}const Le=P.children;for(let Oe=0,Ce=Le.length;Oe<Ce;Oe++)Bo(Le[Oe],q,ae,ne)}function nl(P,q,ae,ne){const{opaque:J,transmissive:Le,transparent:Oe}=P;D.setupLightsView(ae),Pe===!0&&We.setGlobalState(A.clippingPlanes,ae),ne&&Xe.viewport(Q.copy(ne)),J.length>0&&ti(J,q,ae),Le.length>0&&ti(Le,q,ae),Oe.length>0&&ti(Oe,q,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function il(P,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const pt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new zi(1,1,{generateMipmaps:!0,type:pt?dr:di,minFilter:As,samples:Mt.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Le=D.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||Q;Le.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);const Ce=A.getRenderTarget(),Ge=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(de),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),lt&&be.render(ae);const nt=A.toneMapping;A.toneMapping=Vi;const Qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),Pe===!0&&We.setGlobalState(A.clippingPlanes,ne),ti(P,ae,ne),j.updateMultisampleRenderTarget(Le),j.updateRenderTargetMipmap(Le),vt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Tt=0,Bt=q.length;Tt<Bt;Tt++){const Ft=q[Tt],{object:bt,geometry:Je,material:Dt,group:_t}=Ft;if(Dt.side===rr&&bt.layers.test(ne.layers)){const Sn=Dt.side;Dt.side=Wn,Dt.needsUpdate=!0,ko(bt,ae,ne,Je,Dt,_t),Dt.side=Sn,Dt.needsUpdate=!0,pt=!0}}pt===!0&&(j.updateMultisampleRenderTarget(Le),j.updateRenderTargetMipmap(Le))}A.setRenderTarget(Ce,Ge,ke),A.setClearColor(de,re),Qe!==void 0&&(ne.viewport=Qe),A.toneMapping=nt}function ti(P,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Le=P.length;J<Le;J++){const Oe=P[J],{object:Ce,geometry:Ge,group:ke}=Oe;let nt=Oe.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Ce.layers.test(ae.layers)&&ko(Ce,q,ae,Ge,nt,ke)}}function ko(P,q,ae,ne,J,Le){P.onBeforeRender(A,q,ae,ne,J,Le),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(A,q,ae,ne,P,Le),J.transparent===!0&&J.side===rr&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,A.renderBufferDirect(ae,q,ne,J,P,Le),J.side=Yr,J.needsUpdate=!0,A.renderBufferDirect(ae,q,ne,J,P,Le),J.side=rr):A.renderBufferDirect(ae,q,ne,J,P,Le),P.onAfterRender(A,q,ae,ne,J,Le)}function Jr(P,q,ae){q.isScene!==!0&&(q=Ct);const ne=T.get(P),J=D.state.lights,Le=D.state.shadowsArray,Oe=J.state.version,Ce=Ve.getParameters(P,J.state,Le,q,ae),Ge=Ve.getProgramCacheKey(Ce);let ke=ne.programs;ne.environment=P.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(P.isMeshStandardMaterial?ge:he).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,ke===void 0&&(P.addEventListener("dispose",jn),ke=new Map,ne.programs=ke);let nt=ke.get(Ge);if(nt!==void 0){if(ne.currentProgram===nt&&ne.lightsStateVersion===Oe)return Vo(P,Ce),nt}else Ce.uniforms=Ve.getUniforms(P),P.onBeforeCompile(Ce,A),nt=Ve.acquireProgram(Ce,Ge),ke.set(Ge,nt),ne.uniforms=Ce.uniforms;const Qe=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=We.uniform),Vo(P,Ce),ne.needsLights=al(P),ne.lightsStateVersion=Oe,ne.needsLights&&(Qe.ambientLightColor.value=J.state.ambient,Qe.lightProbe.value=J.state.probe,Qe.directionalLights.value=J.state.directional,Qe.directionalLightShadows.value=J.state.directionalShadow,Qe.spotLights.value=J.state.spot,Qe.spotLightShadows.value=J.state.spotShadow,Qe.rectAreaLights.value=J.state.rectArea,Qe.ltc_1.value=J.state.rectAreaLTC1,Qe.ltc_2.value=J.state.rectAreaLTC2,Qe.pointLights.value=J.state.point,Qe.pointLightShadows.value=J.state.pointShadow,Qe.hemisphereLights.value=J.state.hemi,Qe.directionalShadowMap.value=J.state.directionalShadowMap,Qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qe.spotShadowMap.value=J.state.spotShadowMap,Qe.spotLightMatrix.value=J.state.spotLightMatrix,Qe.spotLightMap.value=J.state.spotLightMap,Qe.pointShadowMap.value=J.state.pointShadowMap,Qe.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=nt,ne.uniformsList=null,nt}function rl(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=Gc.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Vo(P,q){const ae=T.get(P);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function sl(P,q,ae,ne,J){q.isScene!==!0&&(q=Ct),j.resetTextureUnits();const Le=q.fog,Oe=ne.isMeshStandardMaterial?q.environment:null,Ce=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Po,Ge=(ne.isMeshStandardMaterial?ge:he).get(ne.envMap||Oe),ke=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,nt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,Tt=!!ae.morphAttributes.color;let Bt=Vi;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,bt=Ft!==void 0?Ft.length:0,Je=T.get(ne),Dt=D.state.lights;if(Pe===!0&&(at===!0||P!==le)){const fn=P===le&&ne.id===X;We.setState(ne,P,fn)}let _t=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Dt.state.version||Je.outputColorSpace!==Ce||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isBatchedMesh&&Je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Je.instancingMorph===!1&&J.morphTexture!==null||Je.envMap!==Ge||ne.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==ke||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==pt||Je.morphColors!==Tt||Je.toneMapping!==Bt||Je.morphTargetsCount!==bt)&&(_t=!0):(_t=!0,Je.__version=ne.version);let Sn=Je.currentProgram;_t===!0&&(Sn=Jr(ne,q,J));let bi=!1,on=!1,es=!1;const Lt=Sn.getUniforms(),ct=Je.uniforms;if(Xe.useProgram(Sn.program)&&(bi=!0,on=!0,es=!0),ne.id!==X&&(X=ne.id,on=!0),bi||le!==P){Xe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Lt.setValue(z,"projectionMatrix",P.projectionMatrix),Lt.setValue(z,"viewMatrix",P.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(z,ht.setFromMatrixPosition(P.matrixWorld)),Mt.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),le!==P&&(le=P,on=!0,es=!0)}if(Je.needsLights&&(Dt.state.directionalShadowMap.length>0&&Lt.setValue(z,"directionalShadowMap",Dt.state.directionalShadowMap,j),Dt.state.spotShadowMap.length>0&&Lt.setValue(z,"spotShadowMap",Dt.state.spotShadowMap,j),Dt.state.pointShadowMap.length>0&&Lt.setValue(z,"pointShadowMap",Dt.state.pointShadowMap,j)),J.isSkinnedMesh){Lt.setOptional(z,J,"bindMatrix"),Lt.setOptional(z,J,"bindMatrixInverse");const fn=J.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Lt.setValue(z,"boneTexture",fn.boneTexture,j))}J.isBatchedMesh&&(Lt.setOptional(z,J,"batchingTexture"),Lt.setValue(z,"batchingTexture",J._matricesTexture,j),Lt.setOptional(z,J,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",J._indirectTexture,j),Lt.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",J._colorsTexture,j));const Ln=ae.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ft.update(J,ae,Sn),(on||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,Lt.setValue(z,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ct.envMap.value=Ge,ct.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(ct.envMapIntensity.value=q.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=Y3()),on&&(Lt.setValue(z,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&ol(ct,es),Le&&ne.fog===!0&&rt.refreshFogUniforms(ct,Le),rt.refreshMaterialUniforms(ct,ne,we,oe,D.state.transmissionRenderTarget[P.id]),Gc.upload(z,rl(Je),ct,j)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Gc.upload(z,rl(Je),ct,j),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(z,"center",J.center),Lt.setValue(z,"modelViewMatrix",J.modelViewMatrix),Lt.setValue(z,"normalMatrix",J.normalMatrix),Lt.setValue(z,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const fn=ne.uniformsGroups;for(let dn=0,Ls=fn.length;dn<Ls;dn++){const Ri=fn[dn];ye.update(Ri,Sn),ye.bind(Ri,Sn)}}return Sn}function ol(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function al(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(P,q,ae){const ne=T.get(P);ne.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),T.get(P.texture).__webglTexture=q,T.get(P.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const ae=T.get(P);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const fu=z.createFramebuffer();this.setRenderTarget=function(P,q=0,ae=0){Y=P,B=q,K=ae;let ne=null,J=!1,Le=!1;if(P){const Ce=T.get(P);if(Ce.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),Q.copy(P.viewport),$.copy(P.scissor),W=P.scissorTest,Xe.viewport(Q),Xe.scissor($),Xe.setScissorTest(W),X=-1;return}else if(Ce.__webglFramebuffer===void 0)j.setupRenderTarget(P);else if(Ce.__hasExternalTextures)j.rebindTextures(P,T.get(P.texture).__webglTexture,T.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const nt=P.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&T.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const ke=T.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ne=ke[q][ae]:ne=ke[q],J=!0):P.samples>0&&j.useMultisampledRTT(P)===!1?ne=T.get(P).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[ae]:ne=ke,Q.copy(P.viewport),$.copy(P.scissor),W=P.scissorTest}else Q.copy(te).multiplyScalar(we).floor(),$.copy(fe).multiplyScalar(we).floor(),W=_e;if(ae!==0&&(ne=fu),Xe.bindFramebuffer(z.FRAMEBUFFER,ne)&&Xe.drawBuffers(P,ne),Xe.viewport(Q),Xe.scissor($),Xe.setScissorTest(W),J){const Ce=T.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,ae)}else if(Le){const Ce=q;for(let Ge=0;Ge<P.textures.length;Ge++){const ke=T.get(P.textures[Ge]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,ae,Ce)}}else if(P!==null&&ae!==0){const Ce=T.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,ae)}X=-1},this.readRenderTargetPixels=function(P,q,ae,ne,J,Le,Oe,Ce=0){if(!(P&&P.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=T.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){Xe.bindFramebuffer(z.FRAMEBUFFER,Ge);try{const ke=P.textures[Ce],nt=ke.format,Qe=ke.type;if(!Mt.textureFormatReadable(nt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Qe)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ne&&ae>=0&&ae<=P.height-J&&(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),z.readPixels(q,ae,ne,J,Ee.convert(nt),Ee.convert(Qe),Le))}finally{const ke=Y!==null?T.get(Y).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(P,q,ae,ne,J,Le,Oe,Ce=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=T.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(q>=0&&q<=P.width-ne&&ae>=0&&ae<=P.height-J){Xe.bindFramebuffer(z.FRAMEBUFFER,Ge);const ke=P.textures[Ce],nt=ke.format,Qe=ke.type;if(!Mt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pt),z.bufferData(z.PIXEL_PACK_BUFFER,Le.byteLength,z.STREAM_READ),P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),z.readPixels(q,ae,ne,J,Ee.convert(nt),Ee.convert(Qe),0);const Tt=Y!==null?T.get(Y).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,Tt);const Bt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vC(z,Bt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Le),z.deleteBuffer(pt),z.deleteSync(Bt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,ae=0){const ne=Math.pow(2,-ae),J=Math.floor(P.image.width*ne),Le=Math.floor(P.image.height*ne),Oe=q!==null?q.x:0,Ce=q!==null?q.y:0;j.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Oe,Ce,J,Le),Xe.unbindTexture()};const du=z.createFramebuffer(),qt=z.createFramebuffer();this.copyTextureToTexture=function(P,q,ae=null,ne=null,J=0,Le=null){Le===null&&(J!==0?(ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=J,J=0):Le=0);let Oe,Ce,Ge,ke,nt,Qe,pt,Tt,Bt;const Ft=P.isCompressedTexture?P.mipmaps[Le]:P.image;if(ae!==null)Oe=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,nt=ae.min.y,Qe=ae.isBox3?ae.min.z:0;else{const Ln=Math.pow(2,-J);Oe=Math.floor(Ft.width*Ln),Ce=Math.floor(Ft.height*Ln),P.isDataArrayTexture?Ge=Ft.depth:P.isData3DTexture?Ge=Math.floor(Ft.depth*Ln):Ge=1,ke=0,nt=0,Qe=0}ne!==null?(pt=ne.x,Tt=ne.y,Bt=ne.z):(pt=0,Tt=0,Bt=0);const bt=Ee.convert(q.format),Je=Ee.convert(q.type);let Dt;q.isData3DTexture?(j.setTexture3D(q,0),Dt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Dt=z.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Dt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=z.getParameter(z.UNPACK_ROW_LENGTH),Sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),bi=z.getParameter(z.UNPACK_SKIP_PIXELS),on=z.getParameter(z.UNPACK_SKIP_ROWS),es=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe);const Lt=P.isDataArrayTexture||P.isData3DTexture,ct=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const Ln=T.get(P),fn=T.get(q),dn=T.get(Ln.__renderTarget),Ls=T.get(fn.__renderTarget);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,dn.__webglFramebuffer),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Ri=0;Ri<Ge;Ri++)Lt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,T.get(P).__webglTexture,J,Qe+Ri),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,T.get(q).__webglTexture,Le,Bt+Ri)),z.blitFramebuffer(ke,nt,Oe,Ce,pt,Tt,Oe,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||P.isRenderTargetTexture||T.has(P)){const Ln=T.get(P),fn=T.get(q);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,du),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,qt);for(let dn=0;dn<Ge;dn++)Lt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ln.__webglTexture,J,Qe+dn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ln.__webglTexture,J),ct?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fn.__webglTexture,Le,Bt+dn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fn.__webglTexture,Le),J!==0?z.blitFramebuffer(ke,nt,Oe,Ce,pt,Tt,Oe,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):ct?z.copyTexSubImage3D(Dt,Le,pt,Tt,Bt+dn,ke,nt,Oe,Ce):z.copyTexSubImage2D(Dt,Le,pt,Tt,ke,nt,Oe,Ce);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ct?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Dt,Le,pt,Tt,Bt,Oe,Ce,Ge,bt,Je,Ft.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Dt,Le,pt,Tt,Bt,Oe,Ce,Ge,bt,Ft.data):z.texSubImage3D(Dt,Le,pt,Tt,Bt,Oe,Ce,Ge,bt,Je,Ft):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Le,pt,Tt,Oe,Ce,bt,Je,Ft.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Le,pt,Tt,Ft.width,Ft.height,bt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Le,pt,Tt,Oe,Ce,bt,Je,Ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,bi),z.pixelStorei(z.UNPACK_SKIP_ROWS,on),z.pixelStorei(z.UNPACK_SKIP_IMAGES,es),Le===0&&q.generateMipmaps&&z.generateMipmap(Dt),Xe.unbindTexture()},this.initRenderTarget=function(P){T.get(P).__webglFramebuffer===void 0&&j.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?j.setTextureCube(P,0):P.isData3DTexture?j.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?j.setTexture2DArray(P,0):j.setTexture2D(P,0),Xe.unbindTexture()},this.resetState=function(){B=0,K=0,Y=null,Xe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const K3=`
precision highp float;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Z3=`
precision highp float;
uniform float iTime;
uniform vec3 iResolution;
uniform float animationSpeed;
uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;
uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;
uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;
uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;
uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;
uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;
uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE = vec3(47.0, 75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);
  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;
  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) return baseColor;
  vec3 gradientColor;
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);
    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    gradientColor = mix(c1, c2, f);
  }
  return gradientColor * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;
  float x_offset = offset;
  float x_movement = time * 0.1;
  float amp = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + x_offset + x_movement) * amp;
  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }
  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  if (parallax) baseUv += parallaxOffset;
  vec3 col = vec3(0.0);
  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);
  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y), 1.5 + 0.2 * fi, baseUv, mouseUv, interactive) * 0.2;
    }
  }
  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y), 2.0 + 0.15 * fi, baseUv, mouseUv, interactive);
    }
  }
  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y), 1.0 + 0.2 * fi, baseUv, mouseUv, interactive) * 0.1;
    }
  }
  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,L_=8;function Q3(n){let e=n.trim();e.startsWith("#")&&(e=e.slice(1));let t=255,i=255,o=255;return e.length===3?(t=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),o=parseInt(e[2]+e[2],16)):e.length===6&&(t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16)),new ie(t/255,i/255,o/255)}function J3({linesGradient:n,enabledWaves:e=["top","middle","bottom"],lineCount:t=[6],lineDistance:i=[5],topWavePosition:o,middleWavePosition:a,bottomWavePosition:c={x:2,y:-.7,rotate:-1},animationSpeed:u=1,interactive:f=!0,bendRadius:h=5,bendStrength:p=-.5,mouseDamping:m=.05,parallax:v=!0,parallaxStrength:_=.2,mixBlendMode:M="screen"}){const E=pe.useRef(null),S=pe.useRef(new St(-1e3,-1e3)),x=pe.useRef(new St(-1e3,-1e3)),R=pe.useRef(0),C=pe.useRef(0),b=pe.useRef(new St(0,0)),D=pe.useRef(new St(0,0)),I=X=>{if(typeof t=="number")return t;if(!e.includes(X))return 0;const le=e.indexOf(X);return t[le]??6},U=X=>{if(typeof i=="number")return i;if(!e.includes(X))return .1;const le=e.indexOf(X);return i[le]??.1},k=e.includes("top")?I("top"):0,A=e.includes("middle")?I("middle"):0,L=e.includes("bottom")?I("bottom"):0,B=e.includes("top")?U("top")*.01:.01,K=e.includes("middle")?U("middle")*.01:.01,Y=e.includes("bottom")?U("bottom")*.01:.01;return pe.useEffect(()=>{if(!E.current)return;const X=new HC,le=new qp(-1,1,1,-1,0,1);le.position.z=1;const Q=new $3({antialias:!0,alpha:!1});Q.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Q.domElement.style.width="100%",Q.domElement.style.height="100%",E.current.appendChild(Q.domElement);const $={iTime:{value:0},iResolution:{value:new ie(1,1,1)},animationSpeed:{value:u},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:k},middleLineCount:{value:A},bottomLineCount:{value:L},topLineDistance:{value:B},middleLineDistance:{value:K},bottomLineDistance:{value:Y},topWavePosition:{value:new ie((o==null?void 0:o.x)??10,(o==null?void 0:o.y)??.5,(o==null?void 0:o.rotate)??-.4)},middleWavePosition:{value:new ie((a==null?void 0:a.x)??5,(a==null?void 0:a.y)??0,(a==null?void 0:a.rotate)??.2)},bottomWavePosition:{value:new ie((c==null?void 0:c.x)??2,(c==null?void 0:c.y)??-.7,(c==null?void 0:c.rotate)??.4)},iMouse:{value:new St(-1e3,-1e3)},interactive:{value:f},bendRadius:{value:h},bendStrength:{value:p},bendInfluence:{value:0},parallax:{value:v},parallaxStrength:{value:_},parallaxOffset:{value:new St(0,0)},lineGradient:{value:Array.from({length:L_},()=>new ie(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const _e=n.slice(0,L_);$.lineGradientCount.value=_e.length,_e.forEach((Ie,Pe)=>{const at=Q3(Ie);$.lineGradient.value[Pe].set(at.x,at.y,at.z)})}const W=new Ci({uniforms:$,vertexShader:K3,fragmentShader:Z3}),de=new tl(2,2),re=new Wi(de,W);X.add(re);const O=new JC,oe=()=>{const _e=E.current,Ie=_e.clientWidth||1,Pe=_e.clientHeight||1;Q.setSize(Ie,Pe,!1);const at=Q.domElement.width,kt=Q.domElement.height;$.iResolution.value.set(at,kt,1)};oe();const we=typeof ResizeObserver<"u"?new ResizeObserver(oe):null;we&&E.current&&we.observe(E.current);const He=_e=>{const Ie=Q.domElement.getBoundingClientRect(),Pe=_e.clientX-Ie.left,at=_e.clientY-Ie.top,kt=Q.getPixelRatio();if(S.current.set(Pe*kt,(Ie.height-at)*kt),R.current=1,v){const ht=Ie.width/2,xt=Ie.height/2,Ct=(Pe-ht)/Ie.width,lt=-(at-xt)/Ie.height;b.current.set(Ct*_,lt*_)}},$e=()=>{R.current=0};f&&(Q.domElement.addEventListener("pointermove",He),Q.domElement.addEventListener("pointerleave",$e));let te=0;const fe=()=>{$.iTime.value=O.getElapsedTime(),f&&(x.current.lerp(S.current,m),$.iMouse.value.copy(x.current),C.current+=(R.current-C.current)*m,$.bendInfluence.value=C.current),v&&(D.current.lerp(b.current,m),$.parallaxOffset.value.copy(D.current)),Q.render(X,le),te=requestAnimationFrame(fe)};return fe(),()=>{cancelAnimationFrame(te),we&&E.current&&we.disconnect(),f&&(Q.domElement.removeEventListener("pointermove",He),Q.domElement.removeEventListener("pointerleave",$e)),de.dispose(),W.dispose(),Q.dispose(),Q.domElement.parentElement&&Q.domElement.parentElement.removeChild(Q.domElement)}},[n,e,t,i,o,a,c,u,f,h,p,m,v,_,k,A,L,B,K,Y]),ce.jsx("div",{ref:E,className:"floating-lines-container",style:{mixBlendMode:M}})}function Oa(n){let e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function Jh(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function eD(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function I_(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function N_(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function tD(n,e,t){return n[0]=e[0]*t[0],n[1]=e[1]*t[1],n[2]=e[2]*t[2],n}function nD(n,e,t){return n[0]=e[0]/t[0],n[1]=e[1]/t[1],n[2]=e[2]/t[2],n}function Bd(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n}function iD(n,e){let t=e[0]-n[0],i=e[1]-n[1],o=e[2]-n[2];return Math.sqrt(t*t+i*i+o*o)}function rD(n,e){let t=e[0]-n[0],i=e[1]-n[1],o=e[2]-n[2];return t*t+i*i+o*o}function U_(n){let e=n[0],t=n[1],i=n[2];return e*e+t*t+i*i}function sD(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function oD(n,e){return n[0]=1/e[0],n[1]=1/e[1],n[2]=1/e[2],n}function ep(n,e){let t=e[0],i=e[1],o=e[2],a=t*t+i*i+o*o;return a>0&&(a=1/Math.sqrt(a)),n[0]=e[0]*a,n[1]=e[1]*a,n[2]=e[2]*a,n}function uS(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function F_(n,e,t){let i=e[0],o=e[1],a=e[2],c=t[0],u=t[1],f=t[2];return n[0]=o*f-a*u,n[1]=a*c-i*f,n[2]=i*u-o*c,n}function aD(n,e,t,i){let o=e[0],a=e[1],c=e[2];return n[0]=o+i*(t[0]-o),n[1]=a+i*(t[1]-a),n[2]=c+i*(t[2]-c),n}function lD(n,e,t,i,o){const a=Math.exp(-i*o);let c=e[0],u=e[1],f=e[2];return n[0]=t[0]+(c-t[0])*a,n[1]=t[1]+(u-t[1])*a,n[2]=t[2]+(f-t[2])*a,n}function cD(n,e,t){let i=e[0],o=e[1],a=e[2],c=t[3]*i+t[7]*o+t[11]*a+t[15];return c=c||1,n[0]=(t[0]*i+t[4]*o+t[8]*a+t[12])/c,n[1]=(t[1]*i+t[5]*o+t[9]*a+t[13])/c,n[2]=(t[2]*i+t[6]*o+t[10]*a+t[14])/c,n}function uD(n,e,t){let i=e[0],o=e[1],a=e[2],c=t[3]*i+t[7]*o+t[11]*a+t[15];return c=c||1,n[0]=(t[0]*i+t[4]*o+t[8]*a)/c,n[1]=(t[1]*i+t[5]*o+t[9]*a)/c,n[2]=(t[2]*i+t[6]*o+t[10]*a)/c,n}function fD(n,e,t){let i=e[0],o=e[1],a=e[2];return n[0]=i*t[0]+o*t[3]+a*t[6],n[1]=i*t[1]+o*t[4]+a*t[7],n[2]=i*t[2]+o*t[5]+a*t[8],n}function dD(n,e,t){let i=e[0],o=e[1],a=e[2],c=t[0],u=t[1],f=t[2],h=t[3],p=u*a-f*o,m=f*i-c*a,v=c*o-u*i,_=u*v-f*m,M=f*p-c*v,E=c*m-u*p,S=h*2;return p*=S,m*=S,v*=S,_*=2,M*=2,E*=2,n[0]=i+p+_,n[1]=o+m+M,n[2]=a+v+E,n}const hD=(function(){const n=[0,0,0],e=[0,0,0];return function(t,i){Jh(n,t),Jh(e,i),ep(n,n),ep(e,e);let o=uS(n,e);return o>1?0:o<-1?Math.PI:Math.acos(o)}})();function pD(n,e){return n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]}class Ai extends Array{constructor(e=0,t=e,i=e){return super(e,t,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,i=e){return e.length?this.copy(e):(eD(this,e,t,i),this)}copy(e){return Jh(this,e),this}add(e,t){return t?I_(this,e,t):I_(this,this,e),this}sub(e,t){return t?N_(this,e,t):N_(this,this,e),this}multiply(e){return e.length?tD(this,this,e):Bd(this,this,e),this}divide(e){return e.length?nD(this,this,e):Bd(this,this,1/e),this}inverse(e=this){return oD(this,e),this}len(){return Oa(this)}distance(e){return e?iD(this,e):Oa(this)}squaredLen(){return U_(this)}squaredDistance(e){return e?rD(this,e):U_(this)}negate(e=this){return sD(this,e),this}cross(e,t){return t?F_(this,e,t):F_(this,this,e),this}scale(e){return Bd(this,this,e),this}normalize(){return ep(this,this),this}dot(e){return uS(this,e)}equals(e){return pD(this,e)}applyMatrix3(e){return fD(this,this,e),this}applyMatrix4(e){return cD(this,this,e),this}scaleRotateMatrix4(e){return uD(this,this,e),this}applyQuaternion(e){return dD(this,this,e),this}angle(e){return hD(this,e)}lerp(e,t){return aD(this,this,e,t),this}smoothLerp(e,t,i){return lD(this,this,e,t,i),this}clone(){return new Ai(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],i=this[1],o=this[2];return this[0]=e[0]*t+e[4]*i+e[8]*o,this[1]=e[1]*t+e[5]*i+e[9]*o,this[2]=e[2]*t+e[6]*i+e[10]*o,this.normalize()}}const O_=new Ai;let mD=1,gD=1,B_=!1;class vD{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=mD++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in t)this.addAttribute(i,t[i])}addAttribute(e,t){if(this.attributes[e]=t,t.id=gD++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:i,type:o})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const a=this.attributes[i];this.gl.bindBuffer(a.target,a.buffer),this.glState.boundBuffer=a.buffer;let c=1;o===35674&&(c=2),o===35675&&(c=3),o===35676&&(c=4);const u=a.size/c,f=c===1?0:c*c*4,h=c===1?0:c*4;for(let p=0;p<c;p++)this.gl.vertexAttribPointer(t+p,u,a.type,a.normalized,a.stride+f,a.offset+p*h),this.gl.enableVertexAttribArray(t+p),this.gl.renderer.vertexAttribDivisor(t+p,a.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){var o;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((a,{name:c})=>{const u=this.attributes[c];u.needsUpdate&&this.updateAttribute(u)});let i=2;((o=this.attributes.index)==null?void 0:o.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!B_)return console.warn("No position buffer data found to compute bounds"),B_=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||(this.bounds={min:new Ai,max:new Ai,center:new Ai,scale:new Ai,radius:1/0});const o=this.bounds.min,a=this.bounds.max,c=this.bounds.center,u=this.bounds.scale;o.set(1/0),a.set(-1/0);for(let f=0,h=t.length;f<h;f+=i){const p=t[f],m=t[f+1],v=t[f+2];o.x=Math.min(p,o.x),o.y=Math.min(m,o.y),o.z=Math.min(v,o.z),a.x=Math.max(p,a.x),a.y=Math.max(m,a.y),a.z=Math.max(v,a.z)}u.sub(a,o),c.add(o,a).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let o=0;for(let a=0,c=t.length;a<c;a+=i)O_.fromArray(t,a),o=Math.max(o,this.bounds.center.squaredDistance(O_));this.bounds.radius=Math.sqrt(o)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let _D=1;const k_={};class xD{constructor(e,{vertex:t,fragment:i,uniforms:o={},transparent:a=!1,cullFace:c=e.BACK,frontFace:u=e.CCW,depthTest:f=!0,depthWrite:h=!0,depthFunc:p=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=o,this.id=_D++,t||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=a,this.cullFace=c,this.frontFace=u,this.depthTest=f,this.depthWrite=h,this.depthFunc=p,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:i})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${V_(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${V_(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let c=0;c<i;c++){let u=this.gl.getActiveUniform(this.program,c);this.uniformLocations.set(u,this.gl.getUniformLocation(this.program,u.name));const f=u.name.match(/(\w+)/g);u.uniformName=f[0],u.nameComponents=f.slice(1)}this.attributeLocations=new Map;const o=[],a=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let c=0;c<a;c++){const u=this.gl.getActiveAttrib(this.program,c),f=this.gl.getAttribLocation(this.program,u.name);f!==-1&&(o[f]=u.name,this.attributeLocations.set(u,f))}this.attributeOrder=o.join("")}setBlendFunc(e,t,i,o){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=o,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,i){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=i}setStencilOp(e,t,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,a)=>{let c=this.uniforms[a.uniformName];for(const u of a.nameComponents){if(!c)break;if(u in c)c=c[u];else{if(Array.isArray(c.value))break;c=void 0;break}}if(!c)return z_(`Active uniform ${a.name} has not been supplied`);if(c&&c.value===void 0)return z_(`${a.name} uniform is missing a value parameter`);if(c.value.texture)return t=t+1,c.value.update(t),kd(this.gl,a.type,o,t);if(c.value.length&&c.value[0].texture){const u=[];return c.value.forEach(f=>{t=t+1,f.update(t),u.push(t)}),kd(this.gl,a.type,o,u)}kd(this.gl,a.type,o,c.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function kd(n,e,t,i){i=i.length?yD(i):i;const o=n.renderer.state.uniformLocations.get(t);if(i.length)if(o===void 0||o.length!==i.length)n.renderer.state.uniformLocations.set(t,i.slice(0));else{if(SD(o,i))return;o.set?o.set(i):MD(o,i),n.renderer.state.uniformLocations.set(t,o)}else{if(o===i)return;n.renderer.state.uniformLocations.set(t,i)}switch(e){case 5126:return i.length?n.uniform1fv(t,i):n.uniform1f(t,i);case 35664:return n.uniform2fv(t,i);case 35665:return n.uniform3fv(t,i);case 35666:return n.uniform4fv(t,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?n.uniform1iv(t,i):n.uniform1i(t,i);case 35671:case 35667:return n.uniform2iv(t,i);case 35672:case 35668:return n.uniform3iv(t,i);case 35673:case 35669:return n.uniform4iv(t,i);case 35674:return n.uniformMatrix2fv(t,!1,i);case 35675:return n.uniformMatrix3fv(t,!1,i);case 35676:return n.uniformMatrix4fv(t,!1,i)}}function V_(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function yD(n){const e=n.length,t=n[0].length;if(t===void 0)return n;const i=e*t;let o=k_[i];o||(k_[i]=o=new Float32Array(i));for(let a=0;a<e;a++)o.set(n[a],a*t);return o}function SD(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function MD(n,e){for(let t=0,i=n.length;t<i;t++)n[t]=e[t]}let Vd=0;function z_(n){Vd>100||(console.warn(n),Vd++,Vd>100&&console.warn("More than 100 program warnings - stopping logs."))}const zd=new Ai;let ED=1;class TD{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:i=150,dpr:o=1,alpha:a=!1,depth:c=!0,stencil:u=!1,antialias:f=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:p=!1,powerPreference:m="default",autoClear:v=!0,webgl:_=2}={}){const M={alpha:a,depth:c,stencil:u,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m};this.dpr=o,this.alpha=a,this.color=!0,this.depth=c,this.stencil=u,this.premultipliedAlpha=h,this.autoClear=v,this.id=ED++,_===2&&(this.gl=e.getContext("webgl2",M)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",M)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,i=0,o=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=i,this.state.viewport.y=o,this.gl.viewport(i,o,e,t))}setScissor(e,t,i=0,o=0){this.gl.scissor(i,o,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,i,o){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=o,i!==void 0?this.gl.blendFuncSeparate(e,t,i,o):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,i){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,i||0))}setStencilOp(e,t,i){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=i,this.gl.stencilOp(e,t,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,i){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:i,sort:o}){let a=[];if(t&&i&&t.updateFrustum(),e.traverse(c=>{if(!c.visible)return!0;c.draw&&(i&&c.frustumCulled&&t&&!t.frustumIntersectsMesh(c)||a.push(c))}),o){const c=[],u=[],f=[];a.forEach(h=>{h.program.transparent?h.program.depthTest?u.push(h):f.push(h):c.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!t)&&(h.worldMatrix.getTranslation(zd),zd.applyMatrix4(t.projectionViewMatrix),h.zDepth=zd.z)}),c.sort(this.sortOpaque),u.sort(this.sortTransparent),f.sort(this.sortUI),a=c.concat(u,f)}return a}render({scene:e,camera:t,target:i=null,update:o=!0,sort:a=!0,frustumCull:c=!0,clear:u}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(u||this.autoClear&&u!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:c,sort:a}).forEach(h=>{h.draw({camera:t})})}}function wD(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function AD(n,e,t,i,o){return n[0]=e,n[1]=t,n[2]=i,n[3]=o,n}function CD(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=t*t+i*i+o*o+a*a;return c>0&&(c=1/Math.sqrt(c)),n[0]=t*c,n[1]=i*c,n[2]=o*c,n[3]=a*c,n}function bD(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]}function RD(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function PD(n,e,t){t=t*.5;let i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function G_(n,e,t){let i=e[0],o=e[1],a=e[2],c=e[3],u=t[0],f=t[1],h=t[2],p=t[3];return n[0]=i*p+c*u+o*h-a*f,n[1]=o*p+c*f+a*u-i*h,n[2]=a*p+c*h+i*f-o*u,n[3]=c*p-i*u-o*f-a*h,n}function DD(n,e,t){t*=.5;let i=e[0],o=e[1],a=e[2],c=e[3],u=Math.sin(t),f=Math.cos(t);return n[0]=i*f+c*u,n[1]=o*f+a*u,n[2]=a*f-o*u,n[3]=c*f-i*u,n}function LD(n,e,t){t*=.5;let i=e[0],o=e[1],a=e[2],c=e[3],u=Math.sin(t),f=Math.cos(t);return n[0]=i*f-a*u,n[1]=o*f+c*u,n[2]=a*f+i*u,n[3]=c*f-o*u,n}function ID(n,e,t){t*=.5;let i=e[0],o=e[1],a=e[2],c=e[3],u=Math.sin(t),f=Math.cos(t);return n[0]=i*f+o*u,n[1]=o*f-i*u,n[2]=a*f+c*u,n[3]=c*f-a*u,n}function ND(n,e,t,i){let o=e[0],a=e[1],c=e[2],u=e[3],f=t[0],h=t[1],p=t[2],m=t[3],v,_,M,E,S;return _=o*f+a*h+c*p+u*m,_<0&&(_=-_,f=-f,h=-h,p=-p,m=-m),1-_>1e-6?(v=Math.acos(_),M=Math.sin(v),E=Math.sin((1-i)*v)/M,S=Math.sin(i*v)/M):(E=1-i,S=i),n[0]=E*o+S*f,n[1]=E*a+S*h,n[2]=E*c+S*p,n[3]=E*u+S*m,n}function UD(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=t*t+i*i+o*o+a*a,u=c?1/c:0;return n[0]=-t*u,n[1]=-i*u,n[2]=-o*u,n[3]=a*u,n}function FD(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function OD(n,e){let t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{let o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);let a=(o+1)%3,c=(o+2)%3;i=Math.sqrt(e[o*3+o]-e[a*3+a]-e[c*3+c]+1),n[o]=.5*i,i=.5/i,n[3]=(e[a*3+c]-e[c*3+a])*i,n[a]=(e[a*3+o]+e[o*3+a])*i,n[c]=(e[c*3+o]+e[o*3+c])*i}return n}function BD(n,e,t="YXZ"){let i=Math.sin(e[0]*.5),o=Math.cos(e[0]*.5),a=Math.sin(e[1]*.5),c=Math.cos(e[1]*.5),u=Math.sin(e[2]*.5),f=Math.cos(e[2]*.5);return t==="XYZ"?(n[0]=i*c*f+o*a*u,n[1]=o*a*f-i*c*u,n[2]=o*c*u+i*a*f,n[3]=o*c*f-i*a*u):t==="YXZ"?(n[0]=i*c*f+o*a*u,n[1]=o*a*f-i*c*u,n[2]=o*c*u-i*a*f,n[3]=o*c*f+i*a*u):t==="ZXY"?(n[0]=i*c*f-o*a*u,n[1]=o*a*f+i*c*u,n[2]=o*c*u+i*a*f,n[3]=o*c*f-i*a*u):t==="ZYX"?(n[0]=i*c*f-o*a*u,n[1]=o*a*f+i*c*u,n[2]=o*c*u-i*a*f,n[3]=o*c*f+i*a*u):t==="YZX"?(n[0]=i*c*f+o*a*u,n[1]=o*a*f+i*c*u,n[2]=o*c*u-i*a*f,n[3]=o*c*f-i*a*u):t==="XZY"&&(n[0]=i*c*f-o*a*u,n[1]=o*a*f-i*c*u,n[2]=o*c*u+i*a*f,n[3]=o*c*f+i*a*u),n}const kD=wD,VD=AD,zD=bD,GD=CD;class HD extends Array{constructor(e=0,t=0,i=0,o=1){super(e,t,i,o),this.onChange=()=>{},this._target=this;const a=["0","1","2","3"];return new Proxy(this,{set(c,u){const f=Reflect.set(...arguments);return f&&a.includes(u)&&c.onChange(),f}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return RD(this._target),this.onChange(),this}set(e,t,i,o){return e.length?this.copy(e):(VD(this._target,e,t,i,o),this.onChange(),this)}rotateX(e){return DD(this._target,this._target,e),this.onChange(),this}rotateY(e){return LD(this._target,this._target,e),this.onChange(),this}rotateZ(e){return ID(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return UD(this._target,e),this.onChange(),this}conjugate(e=this._target){return FD(this._target,e),this.onChange(),this}copy(e){return kD(this._target,e),this.onChange(),this}normalize(e=this._target){return GD(this._target,e),this.onChange(),this}multiply(e,t){return t?G_(this._target,e,t):G_(this._target,this._target,e),this.onChange(),this}dot(e){return zD(this._target,e)}fromMatrix3(e){return OD(this._target,e),this.onChange(),this}fromEuler(e,t){return BD(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return PD(this._target,e,t),this.onChange(),this}slerp(e,t){return ND(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const WD=1e-6;function jD(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function XD(n,e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S){return n[0]=e,n[1]=t,n[2]=i,n[3]=o,n[4]=a,n[5]=c,n[6]=u,n[7]=f,n[8]=h,n[9]=p,n[10]=m,n[11]=v,n[12]=_,n[13]=M,n[14]=E,n[15]=S,n}function qD(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function YD(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],v=e[10],_=e[11],M=e[12],E=e[13],S=e[14],x=e[15],R=t*u-i*c,C=t*f-o*c,b=t*h-a*c,D=i*f-o*u,I=i*h-a*u,U=o*h-a*f,k=p*E-m*M,A=p*S-v*M,L=p*x-_*M,B=m*S-v*E,K=m*x-_*E,Y=v*x-_*S,X=R*Y-C*K+b*B+D*L-I*A+U*k;return X?(X=1/X,n[0]=(u*Y-f*K+h*B)*X,n[1]=(o*K-i*Y-a*B)*X,n[2]=(E*U-S*I+x*D)*X,n[3]=(v*I-m*U-_*D)*X,n[4]=(f*L-c*Y-h*A)*X,n[5]=(t*Y-o*L+a*A)*X,n[6]=(S*b-M*U-x*C)*X,n[7]=(p*U-v*b+_*C)*X,n[8]=(c*K-u*L+h*k)*X,n[9]=(i*L-t*K-a*k)*X,n[10]=(M*I-E*b+x*R)*X,n[11]=(m*b-p*I-_*R)*X,n[12]=(u*A-c*B-f*k)*X,n[13]=(t*B-i*A+o*k)*X,n[14]=(E*C-M*D-S*R)*X,n[15]=(p*D-m*C+v*R)*X,n):null}function fS(n){let e=n[0],t=n[1],i=n[2],o=n[3],a=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],m=n[10],v=n[11],_=n[12],M=n[13],E=n[14],S=n[15],x=e*c-t*a,R=e*u-i*a,C=e*f-o*a,b=t*u-i*c,D=t*f-o*c,I=i*f-o*u,U=h*M-p*_,k=h*E-m*_,A=h*S-v*_,L=p*E-m*M,B=p*S-v*M,K=m*S-v*E;return x*K-R*B+C*L+b*A-D*k+I*U}function H_(n,e,t){let i=e[0],o=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],v=e[9],_=e[10],M=e[11],E=e[12],S=e[13],x=e[14],R=e[15],C=t[0],b=t[1],D=t[2],I=t[3];return n[0]=C*i+b*u+D*m+I*E,n[1]=C*o+b*f+D*v+I*S,n[2]=C*a+b*h+D*_+I*x,n[3]=C*c+b*p+D*M+I*R,C=t[4],b=t[5],D=t[6],I=t[7],n[4]=C*i+b*u+D*m+I*E,n[5]=C*o+b*f+D*v+I*S,n[6]=C*a+b*h+D*_+I*x,n[7]=C*c+b*p+D*M+I*R,C=t[8],b=t[9],D=t[10],I=t[11],n[8]=C*i+b*u+D*m+I*E,n[9]=C*o+b*f+D*v+I*S,n[10]=C*a+b*h+D*_+I*x,n[11]=C*c+b*p+D*M+I*R,C=t[12],b=t[13],D=t[14],I=t[15],n[12]=C*i+b*u+D*m+I*E,n[13]=C*o+b*f+D*v+I*S,n[14]=C*a+b*h+D*_+I*x,n[15]=C*c+b*p+D*M+I*R,n}function $D(n,e,t){let i=t[0],o=t[1],a=t[2],c,u,f,h,p,m,v,_,M,E,S,x;return e===n?(n[12]=e[0]*i+e[4]*o+e[8]*a+e[12],n[13]=e[1]*i+e[5]*o+e[9]*a+e[13],n[14]=e[2]*i+e[6]*o+e[10]*a+e[14],n[15]=e[3]*i+e[7]*o+e[11]*a+e[15]):(c=e[0],u=e[1],f=e[2],h=e[3],p=e[4],m=e[5],v=e[6],_=e[7],M=e[8],E=e[9],S=e[10],x=e[11],n[0]=c,n[1]=u,n[2]=f,n[3]=h,n[4]=p,n[5]=m,n[6]=v,n[7]=_,n[8]=M,n[9]=E,n[10]=S,n[11]=x,n[12]=c*i+p*o+M*a+e[12],n[13]=u*i+m*o+E*a+e[13],n[14]=f*i+v*o+S*a+e[14],n[15]=h*i+_*o+x*a+e[15]),n}function KD(n,e,t){let i=t[0],o=t[1],a=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*o,n[5]=e[5]*o,n[6]=e[6]*o,n[7]=e[7]*o,n[8]=e[8]*a,n[9]=e[9]*a,n[10]=e[10]*a,n[11]=e[11]*a,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function ZD(n,e,t,i){let o=i[0],a=i[1],c=i[2],u=Math.hypot(o,a,c),f,h,p,m,v,_,M,E,S,x,R,C,b,D,I,U,k,A,L,B,K,Y,X,le;return Math.abs(u)<WD?null:(u=1/u,o*=u,a*=u,c*=u,f=Math.sin(t),h=Math.cos(t),p=1-h,m=e[0],v=e[1],_=e[2],M=e[3],E=e[4],S=e[5],x=e[6],R=e[7],C=e[8],b=e[9],D=e[10],I=e[11],U=o*o*p+h,k=a*o*p+c*f,A=c*o*p-a*f,L=o*a*p-c*f,B=a*a*p+h,K=c*a*p+o*f,Y=o*c*p+a*f,X=a*c*p-o*f,le=c*c*p+h,n[0]=m*U+E*k+C*A,n[1]=v*U+S*k+b*A,n[2]=_*U+x*k+D*A,n[3]=M*U+R*k+I*A,n[4]=m*L+E*B+C*K,n[5]=v*L+S*B+b*K,n[6]=_*L+x*B+D*K,n[7]=M*L+R*B+I*K,n[8]=m*Y+E*X+C*le,n[9]=v*Y+S*X+b*le,n[10]=_*Y+x*X+D*le,n[11]=M*Y+R*X+I*le,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function QD(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function dS(n,e){let t=e[0],i=e[1],o=e[2],a=e[4],c=e[5],u=e[6],f=e[8],h=e[9],p=e[10];return n[0]=Math.hypot(t,i,o),n[1]=Math.hypot(a,c,u),n[2]=Math.hypot(f,h,p),n}function JD(n){let e=n[0],t=n[1],i=n[2],o=n[4],a=n[5],c=n[6],u=n[8],f=n[9],h=n[10];const p=e*e+t*t+i*i,m=o*o+a*a+c*c,v=u*u+f*f+h*h;return Math.sqrt(Math.max(p,m,v))}const hS=(function(){const n=[1,1,1];return function(e,t){let i=n;dS(i,t);let o=1/i[0],a=1/i[1],c=1/i[2],u=t[0]*o,f=t[1]*a,h=t[2]*c,p=t[4]*o,m=t[5]*a,v=t[6]*c,_=t[8]*o,M=t[9]*a,E=t[10]*c,S=u+m+E,x=0;return S>0?(x=Math.sqrt(S+1)*2,e[3]=.25*x,e[0]=(v-M)/x,e[1]=(_-h)/x,e[2]=(f-p)/x):u>m&&u>E?(x=Math.sqrt(1+u-m-E)*2,e[3]=(v-M)/x,e[0]=.25*x,e[1]=(f+p)/x,e[2]=(_+h)/x):m>E?(x=Math.sqrt(1+m-u-E)*2,e[3]=(_-h)/x,e[0]=(f+p)/x,e[1]=.25*x,e[2]=(v+M)/x):(x=Math.sqrt(1+E-u-m)*2,e[3]=(f-p)/x,e[0]=(_+h)/x,e[1]=(v+M)/x,e[2]=.25*x),e}})();function eL(n,e,t,i){let o=Oa([n[0],n[1],n[2]]);const a=Oa([n[4],n[5],n[6]]),c=Oa([n[8],n[9],n[10]]);fS(n)<0&&(o=-o),t[0]=n[12],t[1]=n[13],t[2]=n[14];const f=n.slice(),h=1/o,p=1/a,m=1/c;f[0]*=h,f[1]*=h,f[2]*=h,f[4]*=p,f[5]*=p,f[6]*=p,f[8]*=m,f[9]*=m,f[10]*=m,hS(e,f),i[0]=o,i[1]=a,i[2]=c}function tL(n,e,t,i){const o=n,a=e[0],c=e[1],u=e[2],f=e[3],h=a+a,p=c+c,m=u+u,v=a*h,_=a*p,M=a*m,E=c*p,S=c*m,x=u*m,R=f*h,C=f*p,b=f*m,D=i[0],I=i[1],U=i[2];return o[0]=(1-(E+x))*D,o[1]=(_+b)*D,o[2]=(M-C)*D,o[3]=0,o[4]=(_-b)*I,o[5]=(1-(v+x))*I,o[6]=(S+R)*I,o[7]=0,o[8]=(M+C)*U,o[9]=(S-R)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=t[0],o[13]=t[1],o[14]=t[2],o[15]=1,o}function nL(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=t+t,u=i+i,f=o+o,h=t*c,p=i*c,m=i*u,v=o*c,_=o*u,M=o*f,E=a*c,S=a*u,x=a*f;return n[0]=1-m-M,n[1]=p+x,n[2]=v-S,n[3]=0,n[4]=p-x,n[5]=1-h-M,n[6]=_+E,n[7]=0,n[8]=v+S,n[9]=_-E,n[10]=1-h-m,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function iL(n,e,t,i,o){let a=1/Math.tan(e/2),c=1/(i-o);return n[0]=a/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=a,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(o+i)*c,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*o*i*c,n[15]=0,n}function rL(n,e,t,i,o,a,c){let u=1/(e-t),f=1/(i-o),h=1/(a-c);return n[0]=-2*u,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*f,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*h,n[11]=0,n[12]=(e+t)*u,n[13]=(o+i)*f,n[14]=(c+a)*h,n[15]=1,n}function sL(n,e,t,i){let o=e[0],a=e[1],c=e[2],u=i[0],f=i[1],h=i[2],p=o-t[0],m=a-t[1],v=c-t[2],_=p*p+m*m+v*v;_===0?v=1:(_=1/Math.sqrt(_),p*=_,m*=_,v*=_);let M=f*v-h*m,E=h*p-u*v,S=u*m-f*p;return _=M*M+E*E+S*S,_===0&&(h?u+=1e-6:f?h+=1e-6:f+=1e-6,M=f*v-h*m,E=h*p-u*v,S=u*m-f*p,_=M*M+E*E+S*S),_=1/Math.sqrt(_),M*=_,E*=_,S*=_,n[0]=M,n[1]=E,n[2]=S,n[3]=0,n[4]=m*S-v*E,n[5]=v*M-p*S,n[6]=p*E-m*M,n[7]=0,n[8]=p,n[9]=m,n[10]=v,n[11]=0,n[12]=o,n[13]=a,n[14]=c,n[15]=1,n}function W_(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n}function j_(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n}function oL(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12]*t,n[13]=e[13]*t,n[14]=e[14]*t,n[15]=e[15]*t,n}class Jc extends Array{constructor(e=1,t=0,i=0,o=0,a=0,c=1,u=0,f=0,h=0,p=0,m=1,v=0,_=0,M=0,E=0,S=1){return super(e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S){return e.length?this.copy(e):(XD(this,e,t,i,o,a,c,u,f,h,p,m,v,_,M,E,S),this)}translate(e,t=this){return $D(this,t,e),this}rotate(e,t,i=this){return ZD(this,i,e,t),this}scale(e,t=this){return KD(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?W_(this,e,t):W_(this,this,e),this}sub(e,t){return t?j_(this,e,t):j_(this,this,e),this}multiply(e,t){return e.length?t?H_(this,e,t):H_(this,this,e):oL(this,this,e),this}identity(){return qD(this),this}copy(e){return jD(this,e),this}fromPerspective({fov:e,aspect:t,near:i,far:o}={}){return iL(this,e,t,i,o),this}fromOrthogonal({left:e,right:t,bottom:i,top:o,near:a,far:c}){return rL(this,e,t,i,o,a,c),this}fromQuaternion(e){return nL(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return YD(this,e),this}compose(e,t,i){return tL(this,e,t,i),this}decompose(e,t,i){return eL(this,e,t,i),this}getRotation(e){return hS(e,this),this}getTranslation(e){return QD(e,this),this}getScaling(e){return dS(e,this),this}getMaxScaleOnAxis(){return JD(this)}lookAt(e,t,i){return sL(this,e,t,i),this}determinant(){return fS(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function aL(n,e,t="YXZ"){return t==="XYZ"?(n[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(n[0]=Math.atan2(-e[9],e[10]),n[2]=Math.atan2(-e[4],e[0])):(n[0]=Math.atan2(e[6],e[5]),n[2]=0)):t==="YXZ"?(n[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(n[1]=Math.atan2(e[8],e[10]),n[2]=Math.atan2(e[1],e[5])):(n[1]=Math.atan2(-e[2],e[0]),n[2]=0)):t==="ZXY"?(n[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(n[1]=Math.atan2(-e[2],e[10]),n[2]=Math.atan2(-e[4],e[5])):(n[1]=0,n[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(n[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(n[0]=Math.atan2(e[6],e[10]),n[2]=Math.atan2(e[1],e[0])):(n[0]=0,n[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(n[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(n[0]=Math.atan2(-e[9],e[5]),n[1]=Math.atan2(-e[2],e[0])):(n[0]=0,n[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(n[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(n[0]=Math.atan2(e[6],e[5]),n[1]=Math.atan2(e[8],e[0])):(n[0]=Math.atan2(-e[9],e[10]),n[1]=0)),n}const X_=new Jc;class lL extends Array{constructor(e=0,t=e,i=e,o="YXZ"){super(e,t,i),this.order=o,this.onChange=()=>{},this._target=this;const a=["0","1","2"];return new Proxy(this,{set(c,u){const f=Reflect.set(...arguments);return f&&a.includes(u)&&c.onChange(),f}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return aL(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,i){return X_.fromQuaternion(e),this._target.fromRotationMatrix(X_,t),i||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class cL{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Jc,this.worldMatrix=new Jc,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Ai,this.quaternion=new HD,this.scale=new Ai(1),this.rotation=new lL,this.up=new Ai(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,i=this.children.length;t<i;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,i=this.children.length;t<i;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function uL(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[4],n[4]=e[5],n[5]=e[6],n[6]=e[8],n[7]=e[9],n[8]=e[10],n}function fL(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=t+t,u=i+i,f=o+o,h=t*c,p=i*c,m=i*u,v=o*c,_=o*u,M=o*f,E=a*c,S=a*u,x=a*f;return n[0]=1-m-M,n[3]=p-x,n[6]=v+S,n[1]=p+x,n[4]=1-h-M,n[7]=_-E,n[2]=v-S,n[5]=_+E,n[8]=1-h-m,n}function dL(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function hL(n,e,t,i,o,a,c,u,f,h){return n[0]=e,n[1]=t,n[2]=i,n[3]=o,n[4]=a,n[5]=c,n[6]=u,n[7]=f,n[8]=h,n}function pL(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n}function mL(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*c-u*h,v=-p*a+u*f,_=h*a-c*f,M=t*m+i*v+o*_;return M?(M=1/M,n[0]=m*M,n[1]=(-p*i+o*h)*M,n[2]=(u*i-o*c)*M,n[3]=v*M,n[4]=(p*t-o*f)*M,n[5]=(-u*t+o*a)*M,n[6]=_*M,n[7]=(-h*t+i*f)*M,n[8]=(c*t-i*a)*M,n):null}function q_(n,e,t){let i=e[0],o=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],v=t[0],_=t[1],M=t[2],E=t[3],S=t[4],x=t[5],R=t[6],C=t[7],b=t[8];return n[0]=v*i+_*c+M*h,n[1]=v*o+_*u+M*p,n[2]=v*a+_*f+M*m,n[3]=E*i+S*c+x*h,n[4]=E*o+S*u+x*p,n[5]=E*a+S*f+x*m,n[6]=R*i+C*c+b*h,n[7]=R*o+C*u+b*p,n[8]=R*a+C*f+b*m,n}function gL(n,e,t){let i=e[0],o=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],v=t[0],_=t[1];return n[0]=i,n[1]=o,n[2]=a,n[3]=c,n[4]=u,n[5]=f,n[6]=v*i+_*c+h,n[7]=v*o+_*u+p,n[8]=v*a+_*f+m,n}function vL(n,e,t){let i=e[0],o=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],v=Math.sin(t),_=Math.cos(t);return n[0]=_*i+v*c,n[1]=_*o+v*u,n[2]=_*a+v*f,n[3]=_*c-v*i,n[4]=_*u-v*o,n[5]=_*f-v*a,n[6]=h,n[7]=p,n[8]=m,n}function _L(n,e,t){let i=t[0],o=t[1];return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=o*e[3],n[4]=o*e[4],n[5]=o*e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function xL(n,e){let t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],v=e[10],_=e[11],M=e[12],E=e[13],S=e[14],x=e[15],R=t*u-i*c,C=t*f-o*c,b=t*h-a*c,D=i*f-o*u,I=i*h-a*u,U=o*h-a*f,k=p*E-m*M,A=p*S-v*M,L=p*x-_*M,B=m*S-v*E,K=m*x-_*E,Y=v*x-_*S,X=R*Y-C*K+b*B+D*L-I*A+U*k;return X?(X=1/X,n[0]=(u*Y-f*K+h*B)*X,n[1]=(f*L-c*Y-h*A)*X,n[2]=(c*K-u*L+h*k)*X,n[3]=(o*K-i*Y-a*B)*X,n[4]=(t*Y-o*L+a*A)*X,n[5]=(i*L-t*K-a*k)*X,n[6]=(E*U-S*I+x*D)*X,n[7]=(S*b-M*U-x*C)*X,n[8]=(M*I-E*b+x*R)*X,n):null}class yL extends Array{constructor(e=1,t=0,i=0,o=0,a=1,c=0,u=0,f=0,h=1){return super(e,t,i,o,a,c,u,f,h),this}set(e,t,i,o,a,c,u,f,h){return e.length?this.copy(e):(hL(this,e,t,i,o,a,c,u,f,h),this)}translate(e,t=this){return gL(this,t,e),this}rotate(e,t=this){return vL(this,t,e),this}scale(e,t=this){return _L(this,t,e),this}multiply(e,t){return t?q_(this,e,t):q_(this,this,e),this}identity(){return pL(this),this}copy(e){return dL(this,e),this}fromMatrix4(e){return uL(this,e),this}fromQuaternion(e){return fL(this,e),this}fromBasis(e,t,i){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]),this}inverse(e=this){return mL(this,e),this}getNormalMatrix(e){return xL(this,e),this}}let SL=0;class ML extends cL{constructor(e,{geometry:t,program:i,mode:o=e.TRIANGLES,frustumCulled:a=!0,renderOrder:c=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=SL++,this.geometry=t,this.program=i,this.mode=o,this.frustumCulled=a,this.renderOrder=c,this.modelViewMatrix=new Jc,this.normalMatrix=new yL,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}}const Y_={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function $_(n){n.length===4&&(n=n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e||console.warn(`Unable to convert hex string ${n} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function EL(n){return n=parseInt(n),[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function K_(n){return n===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(n)?n[0]==="#"?$_(n):Y_[n.toLowerCase()]?$_(Y_[n.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):EL(n)}class Gd extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...K_(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(K_(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class TL extends vD{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}const wL=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,AL=`
precision highp float;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;
varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
  uv += (uMouse - vec2(0.5)) * uAmplitude;
  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;function CL({color:n=[1,1,1],speed:e=1,amplitude:t=.1,mouseReact:i=!0,...o}){const a=pe.useRef(null),c=pe.useRef({x:.5,y:.5});return pe.useEffect(()=>{if(!a.current)return;const u=a.current,f=new TD,h=f.gl;h.clearColor(1,1,1,1);let p;function m(){f.setSize(u.offsetWidth*1,u.offsetHeight*1),p&&(p.uniforms.uResolution.value=new Gd(h.canvas.width,h.canvas.height,h.canvas.width/h.canvas.height))}window.addEventListener("resize",m,!1),m();const v=new TL(h);p=new xD(h,{vertex:wL,fragment:AL,uniforms:{uTime:{value:0},uColor:{value:new Gd(...n)},uResolution:{value:new Gd(h.canvas.width,h.canvas.height,h.canvas.width/h.canvas.height)},uMouse:{value:new Float32Array([c.current.x,c.current.y])},uAmplitude:{value:t},uSpeed:{value:e}}});const _=new ML(h,{geometry:v,program:p});let M;function E(x){M=requestAnimationFrame(E),p.uniforms.uTime.value=x*.001,f.render({scene:_})}M=requestAnimationFrame(E),u.appendChild(h.canvas);function S(x){const R=u.getBoundingClientRect(),C=(x.clientX-R.left)/R.width,b=1-(x.clientY-R.top)/R.height;c.current={x:C,y:b},p.uniforms.uMouse.value[0]=C,p.uniforms.uMouse.value[1]=b}return i&&u.addEventListener("mousemove",S),()=>{var x;cancelAnimationFrame(M),window.removeEventListener("resize",m),i&&u.removeEventListener("mousemove",S),u.contains(h.canvas)&&u.removeChild(h.canvas),(x=h.getExtension("WEBGL_lose_context"))==null||x.loseContext()}},[n,e,t,i]),ce.jsx("div",{ref:a,className:"iridescence-container",...o})}const bL=pe.lazy(()=>pr(()=>import("./Stats-BOElL7AZ.js"),[])),RL=pe.lazy(()=>pr(()=>import("./Experience-CDC_ZYdN.js"),[])),PL=pe.lazy(()=>pr(()=>import("./Education-zzvMvyZO.js"),[])),DL=pe.lazy(()=>pr(()=>import("./Skills-Bxf1ZSqe.js"),[])),LL=pe.lazy(()=>pr(()=>import("./Projects-D7rnqdgH.js"),[])),IL=pe.lazy(()=>pr(()=>import("./Certifications-C1xFixTS.js"),[])),NL=pe.lazy(()=>pr(()=>import("./About-RNQId7e1.js"),[])),UL=pe.lazy(()=>pr(()=>import("./Contact-Uq5Oo6Mv.js"),[])),FL=pe.lazy(()=>pr(()=>import("./WhatsAppFloat-CaPWJMNb.js"),[])),Gr=()=>ce.jsx("div",{className:"py-20 flex justify-center",children:ce.jsx("div",{className:"w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin"})}),OL=pe.memo(function(){const[e,t]=pe.useState(!0),{t:i}=eu(),{theme:o}=J_();return pe.useEffect(()=>{"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"instant"})},[]),ce.jsxs(ce.Fragment,{children:[e&&ce.jsx(UA,{onComplete:()=>t(!1)}),o==="dark"?ce.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:ce.jsx(J3,{linesGradient:["#00f5ff","#bf00ff","#00f5ff"],enabledWaves:["top","middle","bottom"],lineCount:[8,12,6],lineDistance:[6,4,8],bendRadius:5,bendStrength:-.5,interactive:!1,parallax:!1,animationSpeed:.8,mixBlendMode:"screen"})}):ce.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:ce.jsx(CL,{color:[.9,.9,1],speed:.8,amplitude:.1,mouseReact:!1})}),ce.jsx(IA,{}),ce.jsx(pe.Suspense,{fallback:null,children:ce.jsx(FL,{})}),ce.jsxs("div",{className:"min-h-screen relative z-10",children:[ce.jsxs("main",{className:"overflow-x-hidden",children:[ce.jsx(FA,{}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(bL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(RL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(PL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(DL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(LL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(IL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(NL,{})}),ce.jsx(pe.Suspense,{fallback:ce.jsx(Gr,{}),children:ce.jsx(UL,{})})]}),ce.jsx("footer",{className:"py-8 text-center border-t border-dark-border",children:ce.jsxs("p",{className:"text-text-muted text-sm",children:["© ",new Date().getFullYear()," Carlos Jair Castorena. ",i.footer.rights]})})]})]})});e1.createRoot(document.getElementById("root")).render(ce.jsx(pe.StrictMode,{children:ce.jsx(s1,{children:ce.jsx(r1,{children:ce.jsx(OL,{})})})}));export{u1 as A,pe as a,ce as j,Ut as m,tp as r,eu as u};
