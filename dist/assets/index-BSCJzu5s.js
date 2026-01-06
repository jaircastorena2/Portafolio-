(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var kf={exports:{}},va={},Vf={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function fM(){if(t0)return gt;t0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(F,oe,we){this.props=F,this.context=oe,this.refs=T,this.updater=we||y}S.prototype.isReactComponent={},S.prototype.setState=function(F,oe){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,oe,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=S.prototype;function b(F,oe,we){this.props=F,this.context=oe,this.refs=T,this.updater=we||y}var P=b.prototype=new x;P.constructor=b,M(P,S.prototype),P.isPureReactComponent=!0;var D=Array.isArray,L=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function z(F,oe,we){var He,Ke={},J=null,fe=null;if(oe!=null)for(He in oe.ref!==void 0&&(fe=oe.ref),oe.key!==void 0&&(J=""+oe.key),oe)L.call(oe,He)&&!O.hasOwnProperty(He)&&(Ke[He]=oe[He]);var _e=arguments.length-2;if(_e===1)Ke.children=we;else if(1<_e){for(var Ie=Array(_e),Pe=0;Pe<_e;Pe++)Ie[Pe]=arguments[Pe+2];Ke.children=Ie}if(F&&F.defaultProps)for(He in _e=F.defaultProps,_e)Ke[He]===void 0&&(Ke[He]=_e[He]);return{$$typeof:n,type:F,key:J,ref:fe,props:Ke,_owner:N.current}}function A(F,oe){return{$$typeof:n,type:F.type,key:oe,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var oe={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(we){return oe[we]})}var re=/\/+/g;function Z(F,oe){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):oe.toString(36)}function se(F,oe,we,He,Ke){var J=typeof F;(J==="undefined"||J==="boolean")&&(F=null);var fe=!1;if(F===null)fe=!0;else switch(J){case"string":case"number":fe=!0;break;case"object":switch(F.$$typeof){case n:case e:fe=!0}}if(fe)return fe=F,Ke=Ke(fe),F=He===""?"."+Z(fe,0):He,D(Ke)?(we="",F!=null&&(we=F.replace(re,"$&/")+"/"),se(Ke,oe,we,"",function(Pe){return Pe})):Ke!=null&&(R(Ke)&&(Ke=A(Ke,we+(!Ke.key||fe&&fe.key===Ke.key?"":(""+Ke.key).replace(re,"$&/")+"/")+F)),oe.push(Ke)),1;if(fe=0,He=He===""?".":He+":",D(F))for(var _e=0;_e<F.length;_e++){J=F[_e];var Ie=He+Z(J,_e);fe+=se(J,oe,we,Ie,Ke)}else if(Ie=v(F),typeof Ie=="function")for(F=Ie.call(F),_e=0;!(J=F.next()).done;)J=J.value,Ie=He+Z(J,_e++),fe+=se(J,oe,we,Ie,Ke);else if(J==="object")throw oe=String(F),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return fe}function ce(F,oe,we){if(F==null)return F;var He=[],Ke=0;return se(F,He,"","",function(J){return oe.call(we,J,Ke++)}),He}function K(F){if(F._status===-1){var oe=F._result;oe=oe(),oe.then(function(we){(F._status===0||F._status===-1)&&(F._status=1,F._result=we)},function(we){(F._status===0||F._status===-1)&&(F._status=2,F._result=we)}),F._status===-1&&(F._status=0,F._result=oe)}if(F._status===1)return F._result.default;throw F._result}var Y={current:null},W={transition:null},de={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:W,ReactCurrentOwner:N};function ne(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ce,forEach:function(F,oe,we){ce(F,function(){oe.apply(this,arguments)},we)},count:function(F){var oe=0;return ce(F,function(){oe++}),oe},toArray:function(F){return ce(F,function(oe){return oe})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=b,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,gt.act=ne,gt.cloneElement=function(F,oe,we){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var He=M({},F.props),Ke=F.key,J=F.ref,fe=F._owner;if(oe!=null){if(oe.ref!==void 0&&(J=oe.ref,fe=N.current),oe.key!==void 0&&(Ke=""+oe.key),F.type&&F.type.defaultProps)var _e=F.type.defaultProps;for(Ie in oe)L.call(oe,Ie)&&!O.hasOwnProperty(Ie)&&(He[Ie]=oe[Ie]===void 0&&_e!==void 0?_e[Ie]:oe[Ie])}var Ie=arguments.length-2;if(Ie===1)He.children=we;else if(1<Ie){_e=Array(Ie);for(var Pe=0;Pe<Ie;Pe++)_e[Pe]=arguments[Pe+2];He.children=_e}return{$$typeof:n,type:F.type,key:Ke,ref:J,props:He,_owner:fe}},gt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=z,gt.createFactory=function(F){var oe=z.bind(null,F);return oe.type=F,oe},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:c,render:F}},gt.isValidElement=R,gt.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:K}},gt.memo=function(F,oe){return{$$typeof:h,type:F,compare:oe===void 0?null:oe}},gt.startTransition=function(F){var oe=W.transition;W.transition={};try{F()}finally{W.transition=oe}},gt.unstable_act=ne,gt.useCallback=function(F,oe){return Y.current.useCallback(F,oe)},gt.useContext=function(F){return Y.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return Y.current.useDeferredValue(F)},gt.useEffect=function(F,oe){return Y.current.useEffect(F,oe)},gt.useId=function(){return Y.current.useId()},gt.useImperativeHandle=function(F,oe,we){return Y.current.useImperativeHandle(F,oe,we)},gt.useInsertionEffect=function(F,oe){return Y.current.useInsertionEffect(F,oe)},gt.useLayoutEffect=function(F,oe){return Y.current.useLayoutEffect(F,oe)},gt.useMemo=function(F,oe){return Y.current.useMemo(F,oe)},gt.useReducer=function(F,oe,we){return Y.current.useReducer(F,oe,we)},gt.useRef=function(F){return Y.current.useRef(F)},gt.useState=function(F){return Y.current.useState(F)},gt.useSyncExternalStore=function(F,oe,we){return Y.current.useSyncExternalStore(F,oe,we)},gt.useTransition=function(){return Y.current.useTransition()},gt.version="18.3.1",gt}var n0;function Wh(){return n0||(n0=1,Vf.exports=fM()),Vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function dM(){if(i0)return va;i0=1;var n=Wh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},v=null,y=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:y,props:g,_owner:o.current}}return va.Fragment=t,va.jsx=u,va.jsxs=u,va}var r0;function hM(){return r0||(r0=1,kf.exports=dM()),kf.exports}var ue=hM(),me=Wh(),su={},zf={exports:{}},Gn={},Gf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function pM(){return s0||(s0=1,(function(n){function e(W,de){var ne=W.length;W.push(de);e:for(;0<ne;){var F=ne-1>>>1,oe=W[F];if(0<o(oe,de))W[F]=de,W[ne]=oe,ne=F;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var de=W[0],ne=W.pop();if(ne!==de){W[0]=ne;e:for(var F=0,oe=W.length,we=oe>>>1;F<we;){var He=2*(F+1)-1,Ke=W[He],J=He+1,fe=W[J];if(0>o(Ke,ne))J<oe&&0>o(fe,Ke)?(W[F]=fe,W[J]=ne,F=J):(W[F]=Ke,W[He]=ne,F=He);else if(J<oe&&0>o(fe,ne))W[F]=fe,W[J]=ne,F=J;else break e}}return de}function o(W,de){var ne=W.sortIndex-de.sortIndex;return ne!==0?ne:W.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,v=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(W){for(var de=t(h);de!==null;){if(de.callback===null)r(h);else if(de.startTime<=W)r(h),de.sortIndex=de.expirationTime,e(d,de);else break;de=t(h)}}function D(W){if(T=!1,P(W),!M)if(t(d)!==null)M=!0,K(L);else{var de=t(h);de!==null&&Y(D,de.startTime-W)}}function L(W,de){M=!1,T&&(T=!1,x(z),z=-1),y=!0;var ne=v;try{for(P(de),g=t(d);g!==null&&(!(g.expirationTime>de)||W&&!V());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var oe=F(g.expirationTime<=de);de=n.unstable_now(),typeof oe=="function"?g.callback=oe:g===t(d)&&r(d),P(de)}else r(d);g=t(d)}if(g!==null)var we=!0;else{var He=t(h);He!==null&&Y(D,He.startTime-de),we=!1}return we}finally{g=null,v=ne,y=!1}}var N=!1,O=null,z=-1,A=5,R=-1;function V(){return!(n.unstable_now()-R<A)}function re(){if(O!==null){var W=n.unstable_now();R=W;var de=!0;try{de=O(!0,W)}finally{de?Z():(N=!1,O=null)}}else N=!1}var Z;if(typeof b=="function")Z=function(){b(re)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=re,Z=function(){ce.postMessage(null)}}else Z=function(){S(re,0)};function K(W){O=W,N||(N=!0,Z())}function Y(W,de){z=S(function(){W(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,K(L))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(W){switch(v){case 1:case 2:case 3:var de=3;break;default:de=v}var ne=v;v=de;try{return W()}finally{v=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,de){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=v;v=W;try{return de()}finally{v=ne}},n.unstable_scheduleCallback=function(W,de,ne){var F=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?F+ne:F):ne=F,W){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,W={id:m++,callback:de,priorityLevel:W,startTime:ne,expirationTime:oe,sortIndex:-1},ne>F?(W.sortIndex=ne,e(h,W),t(d)===null&&W===t(h)&&(T?(x(z),z=-1):T=!0,Y(D,ne-F))):(W.sortIndex=oe,e(d,W),M||y||(M=!0,K(L))),W},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(W){var de=v;return function(){var ne=v;v=de;try{return W.apply(this,arguments)}finally{v=ne}}}})(Hf)),Hf}var o0;function mM(){return o0||(o0=1,Gf.exports=pM()),Gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function gM(){if(a0)return Gn;a0=1;var n=Wh(),e=mM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function y(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||y(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,f,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,b);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,b);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,b);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,a,f){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,f)&&(a=null),f||p===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,f=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),W=Symbol.iterator;function de(i){return i===null||typeof i!="object"?null:(i=W&&i[W]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,F;function oe(i){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var we=!1;function He(i,s){if(!i||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ie){var f=ie}Reflect.construct(i,[],s)}else{try{s.call()}catch(ie){f=ie}i.call(s.prototype)}else{try{throw Error()}catch(ie){f=ie}i()}}catch(ie){if(ie&&f&&typeof ie.stack=="string"){for(var p=ie.stack.split(`
`),_=f.stack.split(`
`),w=p.length-1,U=_.length-1;1<=w&&0<=U&&p[w]!==_[U];)U--;for(;1<=w&&0<=U;w--,U--)if(p[w]!==_[U]){if(w!==1||U!==1)do if(w--,U--,0>U||p[w]!==_[U]){var B=`
`+p[w].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=w&&0<=U);break}}}finally{we=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?oe(i):""}function Ke(i){switch(i.tag){case 5:return oe(i.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return i=He(i.type,!1),i;case 11:return i=He(i.type.render,!1),i;case 1:return i=He(i.type,!0),i;default:return""}}function J(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case N:return"Portal";case A:return"Profiler";case z:return"StrictMode";case Z:return"Suspense";case se:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case re:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ce:return s=i.displayName||null,s!==null?s:J(i.type)||"Memo";case K:s=i._payload,i=i._init;try{return J(i(s))}catch{}}return null}function fe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(s);case 8:return s===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Pe(i){var s=Ie(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){f=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function at(i){i._valueTracker||(i._valueTracker=Pe(i))}function kt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ie(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function ht(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function xt(i,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Ct(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=_e(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function lt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function Wt(i,s){lt(i,s);var a=_e(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?jt(i,s.type,a):s.hasOwnProperty("defaultValue")&&jt(i,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function k(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function jt(i,s,a){(s!=="number"||ht(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var vt=Array.isArray;function Mt(i,s,a,f){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&f&&(i[a].defaultSelected=!0)}else{for(a=""+_e(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,f&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Xe(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function I(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:_e(a)}}function E(i,s){var a=_e(s.value),f=_e(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function j(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var le,$e=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=le.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ae(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(i){rt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ve[s]=Ve[i]})});function Me(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ve.hasOwnProperty(i)&&Ve[i]?(""+s).trim():s+"px"}function De(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=Me(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,p):i[a]=p}}var We=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(We[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Re(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ne=null,Ee=null,Ue=null;function ye(i){if(i=na(i)){if(typeof Ne!="function")throw Error(t(280));var s=i.stateNode;s&&(s=yl(s),Ne(i.stateNode,i.type,s))}}function pe(i){Ee?Ue?Ue.push(i):Ue=[i]:Ee=i}function be(){if(Ee){var i=Ee,s=Ue;if(Ue=Ee=null,ye(i),s)for(i=0;i<s.length;i++)ye(s[i])}}function st(i,s){return i(s)}function It(){}var Et=!1;function jn(i,s,a){if(Et)return i(s,a);Et=!0;try{return st(i,s,a)}finally{Et=!1,(Ee!==null||Ue!==null)&&(It(),be())}}function Dn(i,s){var a=i.stateNode;if(a===null)return null;var f=yl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Uo=!1;if(c)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Uo=!1}function Fo(i,s,a,f,p,_,w,U,B){var ie=Array.prototype.slice.call(arguments,3);try{s.apply(a,ie)}catch(xe){this.onError(xe)}}var Zr=!1,Qr=null,Jr=!1,hi=null,Oo={onError:function(i){Zr=!0,Qr=i}};function Ja(i,s,a,f,p,_,w,U,B){Zr=!1,Qr=null,Fo.apply(Oo,arguments)}function el(i,s,a,f,p,_,w,U,B){if(Ja.apply(this,arguments),Zr){if(Zr){var ie=Qr;Zr=!1,Qr=null}else throw Error(t(198));Jr||(Jr=!0,hi=ie)}}function ti(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Bo(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function es(i){if(ti(i)!==i)throw Error(t(188))}function tl(i){var s=i.alternate;if(!s){if(s=ti(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return es(p),i;if(_===f)return es(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=_;else{for(var w=!1,U=p.child;U;){if(U===a){w=!0,a=p,f=_;break}if(U===f){w=!0,f=p,a=_;break}U=U.sibling}if(!w){for(U=_.child;U;){if(U===a){w=!0,a=_,f=p;break}if(U===f){w=!0,f=_,a=p;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function ko(i){return i=tl(i),i!==null?nl(i):null}function nl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=nl(i);if(s!==null)return s;i=i.sibling}return null}var il=e.unstable_scheduleCallback,rl=e.unstable_cancelCallback,ac=e.unstable_shouldYield,lc=e.unstable_requestPaint,Yt=e.unstable_now,C=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,$=e.unstable_LowPriority,Le=e.unstable_IdlePriority,Oe=null,Ce=null;function Ge(i){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Oe,i,void 0,(i.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:pt,nt=Math.log,Qe=Math.LN2;function pt(i){return i>>>=0,i===0?32:31-(nt(i)/Qe|0)|0}var Tt=64,Bt=4194304;function Ft(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Rt(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,p=i.suspendedLanes,_=i.pingedLanes,w=a&268435455;if(w!==0){var U=w&~p;U!==0?f=Ft(U):(_&=w,_!==0&&(f=Ft(_)))}else w=a&~p,w!==0?f=Ft(w):_!==0&&(f=Ft(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&p)===0&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-ke(s),p=1<<a,f|=i[a],s&=~p;return f}function Je(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-ke(_),U=1<<w,B=p[w];B===-1?((U&a)===0||(U&f)!==0)&&(p[w]=Je(U,s)):B<=s&&(i.expiredLanes|=U),_&=~U}}function _t(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Sn(){var i=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),i}function Ri(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function on(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ke(s),i[s]=a}function ts(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-ke(a),_=1<<p;s[p]=0,f[p]=-1,i[p]=-1,a&=~_}}function Lt(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-ke(a),p=1<<f;p&s|i[f]&s&&(i[f]|=s),a&=~p}}var ut=0;function Ln(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var fn,dn,Ls,bi,Op,uc=!1,sl=[],_r=null,xr=null,yr=null,Vo=new Map,zo=new Map,Sr=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(i,s){switch(i){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Vo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(s.pointerId)}}function Go(i,s,a,f,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=na(s),s!==null&&dn(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Ny(i,s,a,f,p){switch(s){case"focusin":return _r=Go(_r,i,s,a,f,p),!0;case"dragenter":return xr=Go(xr,i,s,a,f,p),!0;case"mouseover":return yr=Go(yr,i,s,a,f,p),!0;case"pointerover":var _=p.pointerId;return Vo.set(_,Go(Vo.get(_)||null,i,s,a,f,p)),!0;case"gotpointercapture":return _=p.pointerId,zo.set(_,Go(zo.get(_)||null,i,s,a,f,p)),!0}return!1}function kp(i){var s=ns(i.target);if(s!==null){var a=ti(s);if(a!==null){if(s=a.tag,s===13){if(s=Bo(a),s!==null){i.blockedOn=s,Op(i.priority,function(){Ls(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ol(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=fc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);ft=f,a.target.dispatchEvent(f),ft=null}else return s=na(a),s!==null&&dn(s),i.blockedOn=a,!1;s.shift()}return!0}function Vp(i,s,a){ol(i)&&a.delete(s)}function Uy(){uc=!1,_r!==null&&ol(_r)&&(_r=null),xr!==null&&ol(xr)&&(xr=null),yr!==null&&ol(yr)&&(yr=null),Vo.forEach(Vp),zo.forEach(Vp)}function Ho(i,s){i.blockedOn===s&&(i.blockedOn=null,uc||(uc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Uy)))}function Wo(i){function s(p){return Ho(p,i)}if(0<sl.length){Ho(sl[0],i);for(var a=1;a<sl.length;a++){var f=sl[a];f.blockedOn===i&&(f.blockedOn=null)}}for(_r!==null&&Ho(_r,i),xr!==null&&Ho(xr,i),yr!==null&&Ho(yr,i),Vo.forEach(s),zo.forEach(s),a=0;a<Sr.length;a++)f=Sr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)kp(a),a.blockedOn===null&&Sr.shift()}var Is=D.ReactCurrentBatchConfig,al=!0;function Fy(i,s,a,f){var p=ut,_=Is.transition;Is.transition=null;try{ut=1,cc(i,s,a,f)}finally{ut=p,Is.transition=_}}function Oy(i,s,a,f){var p=ut,_=Is.transition;Is.transition=null;try{ut=4,cc(i,s,a,f)}finally{ut=p,Is.transition=_}}function cc(i,s,a,f){if(al){var p=fc(i,s,a,f);if(p===null)Rc(i,s,f,ll,a),Bp(i,f);else if(Ny(p,i,s,a,f))f.stopPropagation();else if(Bp(i,f),s&4&&-1<Iy.indexOf(i)){for(;p!==null;){var _=na(p);if(_!==null&&fn(_),_=fc(i,s,a,f),_===null&&Rc(i,s,f,ll,a),_===p)break;p=_}p!==null&&f.stopPropagation()}else Rc(i,s,f,null,a)}}var ll=null;function fc(i,s,a,f){if(ll=null,i=G(f),i=ns(i),i!==null)if(s=ti(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Bo(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ll=i,null}function zp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C()){case X:return 1;case ae:return 4;case ee:case $:return 16;case Le:return 536870912;default:return 16}default:return 16}}var Mr=null,dc=null,ul=null;function Gp(){if(ul)return ul;var i,s=dc,a=s.length,f,p="value"in Mr?Mr.value:Mr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var w=a-i;for(f=1;f<=w&&s[a-f]===p[_-f];f++);return ul=p.slice(i,1<f?1-f:void 0)}function cl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function fl(){return!0}function Hp(){return!1}function Xn(i){function s(a,f,p,_,w){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?fl:Hp,this.isPropagationStopped=Hp,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),s}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Xn(Ns),jo=ne({},Ns,{view:0,detail:0}),By=Xn(jo),pc,mc,Xo,dl=ne({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Xo&&(Xo&&i.type==="mousemove"?(pc=i.screenX-Xo.screenX,mc=i.screenY-Xo.screenY):mc=pc=0,Xo=i),pc)},movementY:function(i){return"movementY"in i?i.movementY:mc}}),Wp=Xn(dl),ky=ne({},dl,{dataTransfer:0}),Vy=Xn(ky),zy=ne({},jo,{relatedTarget:0}),gc=Xn(zy),Gy=ne({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=Xn(Gy),Wy=ne({},Ns,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),jy=Xn(Wy),Xy=ne({},Ns,{data:0}),jp=Xn(Xy),Yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Ky[i])?!!s[i]:!1}function vc(){return $y}var Zy=ne({},jo,{key:function(i){if(i.key){var s=Yy[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=cl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?qy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(i){return i.type==="keypress"?cl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?cl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Qy=Xn(Zy),Jy=ne({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Xn(Jy),eS=ne({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),tS=Xn(eS),nS=ne({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),iS=Xn(nS),rS=ne({},dl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=Xn(rS),oS=[9,13,27,32],_c=c&&"CompositionEvent"in window,Yo=null;c&&"documentMode"in document&&(Yo=document.documentMode);var aS=c&&"TextEvent"in window&&!Yo,Yp=c&&(!_c||Yo&&8<Yo&&11>=Yo),qp=" ",Kp=!1;function $p(i,s){switch(i){case"keyup":return oS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Us=!1;function lS(i,s){switch(i){case"compositionend":return Zp(s);case"keypress":return s.which!==32?null:(Kp=!0,qp);case"textInput":return i=s.data,i===qp&&Kp?null:i;default:return null}}function uS(i,s){if(Us)return i==="compositionend"||!_c&&$p(i,s)?(i=Gp(),ul=dc=Mr=null,Us=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Yp&&s.locale!=="ko"?null:s.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!cS[i.type]:s==="textarea"}function Jp(i,s,a,f){pe(f),s=vl(s,"onChange"),0<s.length&&(a=new hc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var qo=null,Ko=null;function fS(i){vm(i,0)}function hl(i){var s=Vs(i);if(kt(s))return i}function dS(i,s){if(i==="change")return s}var em=!1;if(c){var xc;if(c){var yc="oninput"in document;if(!yc){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),yc=typeof tm.oninput=="function"}xc=yc}else xc=!1;em=xc&&(!document.documentMode||9<document.documentMode)}function nm(){qo&&(qo.detachEvent("onpropertychange",im),Ko=qo=null)}function im(i){if(i.propertyName==="value"&&hl(Ko)){var s=[];Jp(s,Ko,i,G(i)),jn(fS,s)}}function hS(i,s,a){i==="focusin"?(nm(),qo=s,Ko=a,qo.attachEvent("onpropertychange",im)):i==="focusout"&&nm()}function pS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return hl(Ko)}function mS(i,s){if(i==="click")return hl(s)}function gS(i,s){if(i==="input"||i==="change")return hl(s)}function vS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var pi=typeof Object.is=="function"?Object.is:vS;function $o(i,s){if(pi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(s,p)||!pi(i[p],s[p]))return!1}return!0}function rm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function sm(i,s){var a=rm(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rm(a)}}function om(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?om(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function am(){for(var i=window,s=ht();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=ht(i.document)}return s}function Sc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function _S(i){var s=am(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&om(a.ownerDocument.documentElement,a)){if(f!==null&&Sc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!i.extend&&_>f&&(p=f,f=_,_=p),p=sm(a,_);var w=sm(a,f);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var xS=c&&"documentMode"in document&&11>=document.documentMode,Fs=null,Mc=null,Zo=null,Ec=!1;function lm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Fs==null||Fs!==ht(f)||(f=Fs,"selectionStart"in f&&Sc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Zo&&$o(Zo,f)||(Zo=f,f=vl(Mc,"onSelect"),0<f.length&&(s=new hc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Fs)))}function pl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Os={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Tc={},um={};c&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function ml(i){if(Tc[i])return Tc[i];if(!Os[i])return i;var s=Os[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in um)return Tc[i]=s[a];return i}var cm=ml("animationend"),fm=ml("animationiteration"),dm=ml("animationstart"),hm=ml("transitionend"),pm=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(i,s){pm.set(i,s),l(s,[i])}for(var wc=0;wc<mm.length;wc++){var Ac=mm[wc],yS=Ac.toLowerCase(),SS=Ac[0].toUpperCase()+Ac.slice(1);Er(yS,"on"+SS)}Er(cm,"onAnimationEnd"),Er(fm,"onAnimationIteration"),Er(dm,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(hm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function gm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,el(f,s,void 0,i),i.currentTarget=null}function vm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var w=f.length-1;0<=w;w--){var U=f[w],B=U.instance,ie=U.currentTarget;if(U=U.listener,B!==_&&p.isPropagationStopped())break e;gm(p,U,ie),_=B}else for(w=0;w<f.length;w++){if(U=f[w],B=U.instance,ie=U.currentTarget,U=U.listener,B!==_&&p.isPropagationStopped())break e;gm(p,U,ie),_=B}}}if(Jr)throw i=hi,Jr=!1,hi=null,i}function zt(i,s){var a=s[Nc];a===void 0&&(a=s[Nc]=new Set);var f=i+"__bubble";a.has(f)||(_m(s,i,2,!1),a.add(f))}function Cc(i,s,a){var f=0;s&&(f|=4),_m(a,i,f,s)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Jo(i){if(!i[gl]){i[gl]=!0,r.forEach(function(a){a!=="selectionchange"&&(MS.has(a)||Cc(a,!1,i),Cc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[gl]||(s[gl]=!0,Cc("selectionchange",!1,s))}}function _m(i,s,a,f){switch(zp(s)){case 1:var p=Fy;break;case 4:p=Oy;break;default:p=cc}a=p.bind(null,s,a,i),p=void 0,!Uo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function Rc(i,s,a,f,p){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var U=f.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(w===4)for(w=f.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;w=w.return}for(;U!==null;){if(w=ns(U),w===null)return;if(B=w.tag,B===5||B===6){f=_=w;continue e}U=U.parentNode}}f=f.return}jn(function(){var ie=_,xe=G(a),Se=[];e:{var ve=pm.get(i);if(ve!==void 0){var Be=hc,je=i;switch(i){case"keypress":if(cl(a)===0)break e;case"keydown":case"keyup":Be=Qy;break;case"focusin":je="focus",Be=gc;break;case"focusout":je="blur",Be=gc;break;case"beforeblur":case"afterblur":Be=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=Vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=tS;break;case cm:case fm:case dm:Be=Hy;break;case hm:Be=iS;break;case"scroll":Be=By;break;case"wheel":Be=sS;break;case"copy":case"cut":case"paste":Be=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Xp}var qe=(s&4)!==0,Jt=!qe&&i==="scroll",q=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var H=ie,Q;H!==null;){Q=H;var Te=Q.stateNode;if(Q.tag===5&&Te!==null&&(Q=Te,q!==null&&(Te=Dn(H,q),Te!=null&&qe.push(ea(H,Te,Q)))),Jt)break;H=H.return}0<qe.length&&(ve=new Be(ve,je,null,a,xe),Se.push({event:ve,listeners:qe}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Be=i==="mouseout"||i==="pointerout",ve&&a!==ft&&(je=a.relatedTarget||a.fromElement)&&(ns(je)||je[ji]))break e;if((Be||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?(je=a.relatedTarget||a.toElement,Be=ie,je=je?ns(je):null,je!==null&&(Jt=ti(je),je!==Jt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ie),Be!==je)){if(qe=Wp,Te="onMouseLeave",q="onMouseEnter",H="mouse",(i==="pointerout"||i==="pointerover")&&(qe=Xp,Te="onPointerLeave",q="onPointerEnter",H="pointer"),Jt=Be==null?ve:Vs(Be),Q=je==null?ve:Vs(je),ve=new qe(Te,H+"leave",Be,a,xe),ve.target=Jt,ve.relatedTarget=Q,Te=null,ns(xe)===ie&&(qe=new qe(q,H+"enter",je,a,xe),qe.target=Q,qe.relatedTarget=Jt,Te=qe),Jt=Te,Be&&je)t:{for(qe=Be,q=je,H=0,Q=qe;Q;Q=Bs(Q))H++;for(Q=0,Te=q;Te;Te=Bs(Te))Q++;for(;0<H-Q;)qe=Bs(qe),H--;for(;0<Q-H;)q=Bs(q),Q--;for(;H--;){if(qe===q||q!==null&&qe===q.alternate)break t;qe=Bs(qe),q=Bs(q)}qe=null}else qe=null;Be!==null&&xm(Se,ve,Be,qe,!1),je!==null&&Jt!==null&&xm(Se,Jt,je,qe,!0)}}e:{if(ve=ie?Vs(ie):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Ze=dS;else if(Qp(ve))if(em)Ze=gS;else{Ze=pS;var et=hS}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=mS);if(Ze&&(Ze=Ze(i,ie))){Jp(Se,Ze,a,xe);break e}et&&et(i,ve,ie),i==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&jt(ve,"number",ve.value)}switch(et=ie?Vs(ie):window,i){case"focusin":(Qp(et)||et.contentEditable==="true")&&(Fs=et,Mc=ie,Zo=null);break;case"focusout":Zo=Mc=Fs=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,lm(Se,a,xe);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":lm(Se,a,xe)}var tt;if(_c)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Us?$p(i,a)&&(ot="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Yp&&a.locale!=="ko"&&(Us||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Us&&(tt=Gp()):(Mr=xe,dc="value"in Mr?Mr.value:Mr.textContent,Us=!0)),et=vl(ie,ot),0<et.length&&(ot=new jp(ot,i,null,a,xe),Se.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=Zp(a),tt!==null&&(ot.data=tt)))),(tt=aS?lS(i,a):uS(i,a))&&(ie=vl(ie,"onBeforeInput"),0<ie.length&&(xe=new jp("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:ie}),xe.data=tt))}vm(Se,s)})}function ea(i,s,a){return{instance:i,listener:s,currentTarget:a}}function vl(i,s){for(var a=s+"Capture",f=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Dn(i,a),_!=null&&f.unshift(ea(i,_,p)),_=Dn(i,s),_!=null&&f.push(ea(i,_,p))),i=i.return}return f}function Bs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function xm(i,s,a,f,p){for(var _=s._reactName,w=[];a!==null&&a!==f;){var U=a,B=U.alternate,ie=U.stateNode;if(B!==null&&B===f)break;U.tag===5&&ie!==null&&(U=ie,p?(B=Dn(a,_),B!=null&&w.unshift(ea(a,B,U))):p||(B=Dn(a,_),B!=null&&w.push(ea(a,B,U)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function ym(i){return(typeof i=="string"?i:""+i).replace(ES,`
`).replace(TS,"")}function _l(i,s,a){if(s=ym(s),ym(i)!==s&&a)throw Error(t(425))}function xl(){}var bc=null,Pc=null;function Dc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(i){return Sm.resolve(null).then(i).catch(CS)}:Lc;function CS(i){setTimeout(function(){throw i})}function Ic(i,s){var a=s,f=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){i.removeChild(p),Wo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);Wo(s)}function Tr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Mm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ks,ta="__reactProps$"+ks,ji="__reactContainer$"+ks,Nc="__reactEvents$"+ks,RS="__reactListeners$"+ks,bS="__reactHandles$"+ks;function ns(i){var s=i[Pi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[ji]||a[Pi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Mm(i);i!==null;){if(a=i[Pi])return a;i=Mm(i)}return s}i=a,a=i.parentNode}return null}function na(i){return i=i[Pi]||i[ji],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Vs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function yl(i){return i[ta]||null}var Uc=[],zs=-1;function wr(i){return{current:i}}function Gt(i){0>zs||(i.current=Uc[zs],Uc[zs]=null,zs--)}function Vt(i,s){zs++,Uc[zs]=i.current,i.current=s}var Ar={},Mn=wr(Ar),On=wr(!1),is=Ar;function Gs(i,s){var a=i.type.contextTypes;if(!a)return Ar;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Bn(i){return i=i.childContextTypes,i!=null}function Sl(){Gt(On),Gt(Mn)}function Em(i,s,a){if(Mn.current!==Ar)throw Error(t(168));Vt(Mn,s),Vt(On,a)}function Tm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,fe(i)||"Unknown",p));return ne({},a,f)}function Ml(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ar,is=Mn.current,Vt(Mn,i),Vt(On,On.current),!0}function wm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Tm(i,s,is),f.__reactInternalMemoizedMergedChildContext=i,Gt(On),Gt(Mn),Vt(Mn,i)):Gt(On),Vt(On,a)}var Xi=null,El=!1,Fc=!1;function Am(i){Xi===null?Xi=[i]:Xi.push(i)}function PS(i){El=!0,Am(i)}function Cr(){if(!Fc&&Xi!==null){Fc=!0;var i=0,s=ut;try{var a=Xi;for(ut=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Xi=null,El=!1}catch(p){throw Xi!==null&&(Xi=Xi.slice(i+1)),il(X,Cr),p}finally{ut=s,Fc=!1}}return null}var Hs=[],Ws=0,Tl=null,wl=0,ni=[],ii=0,rs=null,Yi=1,qi="";function ss(i,s){Hs[Ws++]=wl,Hs[Ws++]=Tl,Tl=i,wl=s}function Cm(i,s,a){ni[ii++]=Yi,ni[ii++]=qi,ni[ii++]=rs,rs=i;var f=Yi;i=qi;var p=32-ke(f)-1;f&=~(1<<p),a+=1;var _=32-ke(s)+p;if(30<_){var w=p-p%5;_=(f&(1<<w)-1).toString(32),f>>=w,p-=w,Yi=1<<32-ke(s)+p|a<<p|f,qi=_+i}else Yi=1<<_|a<<p|f,qi=i}function Oc(i){i.return!==null&&(ss(i,1),Cm(i,1,0))}function Bc(i){for(;i===Tl;)Tl=Hs[--Ws],Hs[Ws]=null,wl=Hs[--Ws],Hs[Ws]=null;for(;i===rs;)rs=ni[--ii],ni[ii]=null,qi=ni[--ii],ni[ii]=null,Yi=ni[--ii],ni[ii]=null}var Yn=null,qn=null,Xt=!1,mi=null;function Rm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function bm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Yn=i,qn=Tr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Yn=i,qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=rs!==null?{id:Yi,overflow:qi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Yn=i,qn=null,!0):!1;default:return!1}}function kc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Vc(i){if(Xt){var s=qn;if(s){var a=s;if(!bm(i,s)){if(kc(i))throw Error(t(418));s=Tr(a.nextSibling);var f=Yn;s&&bm(i,s)?Rm(f,a):(i.flags=i.flags&-4097|2,Xt=!1,Yn=i)}}else{if(kc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Xt=!1,Yn=i}}}function Pm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Yn=i}function Al(i){if(i!==Yn)return!1;if(!Xt)return Pm(i),Xt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Dc(i.type,i.memoizedProps)),s&&(s=qn)){if(kc(i))throw Dm(),Error(t(418));for(;s;)Rm(i,s),s=Tr(s.nextSibling)}if(Pm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){qn=Tr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}qn=null}}else qn=Yn?Tr(i.stateNode.nextSibling):null;return!0}function Dm(){for(var i=qn;i;)i=Tr(i.nextSibling)}function js(){qn=Yn=null,Xt=!1}function zc(i){mi===null?mi=[i]:mi.push(i)}var DS=D.ReactCurrentBatchConfig;function ia(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var p=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var U=p.refs;w===null?delete U[_]:U[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Cl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lm(i){var s=i._init;return s(i._payload)}function Im(i){function s(q,H){if(i){var Q=q.deletions;Q===null?(q.deletions=[H],q.flags|=16):Q.push(H)}}function a(q,H){if(!i)return null;for(;H!==null;)s(q,H),H=H.sibling;return null}function f(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function p(q,H){return q=Ur(q,H),q.index=0,q.sibling=null,q}function _(q,H,Q){return q.index=Q,i?(Q=q.alternate,Q!==null?(Q=Q.index,Q<H?(q.flags|=2,H):Q):(q.flags|=2,H)):(q.flags|=1048576,H)}function w(q){return i&&q.alternate===null&&(q.flags|=2),q}function U(q,H,Q,Te){return H===null||H.tag!==6?(H=If(Q,q.mode,Te),H.return=q,H):(H=p(H,Q),H.return=q,H)}function B(q,H,Q,Te){var Ze=Q.type;return Ze===O?xe(q,H,Q.props.children,Te,Q.key):H!==null&&(H.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Lm(Ze)===H.type)?(Te=p(H,Q.props),Te.ref=ia(q,H,Q),Te.return=q,Te):(Te=Zl(Q.type,Q.key,Q.props,null,q.mode,Te),Te.ref=ia(q,H,Q),Te.return=q,Te)}function ie(q,H,Q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Nf(Q,q.mode,Te),H.return=q,H):(H=p(H,Q.children||[]),H.return=q,H)}function xe(q,H,Q,Te,Ze){return H===null||H.tag!==7?(H=hs(Q,q.mode,Te,Ze),H.return=q,H):(H=p(H,Q),H.return=q,H)}function Se(q,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=If(""+H,q.mode,Q),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case L:return Q=Zl(H.type,H.key,H.props,null,q.mode,Q),Q.ref=ia(q,null,H),Q.return=q,Q;case N:return H=Nf(H,q.mode,Q),H.return=q,H;case K:var Te=H._init;return Se(q,Te(H._payload),Q)}if(vt(H)||de(H))return H=hs(H,q.mode,Q,null),H.return=q,H;Cl(q,H)}return null}function ve(q,H,Q,Te){var Ze=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ze!==null?null:U(q,H,""+Q,Te);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:return Q.key===Ze?B(q,H,Q,Te):null;case N:return Q.key===Ze?ie(q,H,Q,Te):null;case K:return Ze=Q._init,ve(q,H,Ze(Q._payload),Te)}if(vt(Q)||de(Q))return Ze!==null?null:xe(q,H,Q,Te,null);Cl(q,Q)}return null}function Be(q,H,Q,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(Q)||null,U(H,q,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case L:return q=q.get(Te.key===null?Q:Te.key)||null,B(H,q,Te,Ze);case N:return q=q.get(Te.key===null?Q:Te.key)||null,ie(H,q,Te,Ze);case K:var et=Te._init;return Be(q,H,Q,et(Te._payload),Ze)}if(vt(Te)||de(Te))return q=q.get(Q)||null,xe(H,q,Te,Ze,null);Cl(H,Te)}return null}function je(q,H,Q,Te){for(var Ze=null,et=null,tt=H,ot=H=0,mn=null;tt!==null&&ot<Q.length;ot++){tt.index>ot?(mn=tt,tt=null):mn=tt.sibling;var bt=ve(q,tt,Q[ot],Te);if(bt===null){tt===null&&(tt=mn);break}i&&tt&&bt.alternate===null&&s(q,tt),H=_(bt,H,ot),et===null?Ze=bt:et.sibling=bt,et=bt,tt=mn}if(ot===Q.length)return a(q,tt),Xt&&ss(q,ot),Ze;if(tt===null){for(;ot<Q.length;ot++)tt=Se(q,Q[ot],Te),tt!==null&&(H=_(tt,H,ot),et===null?Ze=tt:et.sibling=tt,et=tt);return Xt&&ss(q,ot),Ze}for(tt=f(q,tt);ot<Q.length;ot++)mn=Be(tt,q,ot,Q[ot],Te),mn!==null&&(i&&mn.alternate!==null&&tt.delete(mn.key===null?ot:mn.key),H=_(mn,H,ot),et===null?Ze=mn:et.sibling=mn,et=mn);return i&&tt.forEach(function(Fr){return s(q,Fr)}),Xt&&ss(q,ot),Ze}function qe(q,H,Q,Te){var Ze=de(Q);if(typeof Ze!="function")throw Error(t(150));if(Q=Ze.call(Q),Q==null)throw Error(t(151));for(var et=Ze=null,tt=H,ot=H=0,mn=null,bt=Q.next();tt!==null&&!bt.done;ot++,bt=Q.next()){tt.index>ot?(mn=tt,tt=null):mn=tt.sibling;var Fr=ve(q,tt,bt.value,Te);if(Fr===null){tt===null&&(tt=mn);break}i&&tt&&Fr.alternate===null&&s(q,tt),H=_(Fr,H,ot),et===null?Ze=Fr:et.sibling=Fr,et=Fr,tt=mn}if(bt.done)return a(q,tt),Xt&&ss(q,ot),Ze;if(tt===null){for(;!bt.done;ot++,bt=Q.next())bt=Se(q,bt.value,Te),bt!==null&&(H=_(bt,H,ot),et===null?Ze=bt:et.sibling=bt,et=bt);return Xt&&ss(q,ot),Ze}for(tt=f(q,tt);!bt.done;ot++,bt=Q.next())bt=Be(tt,q,ot,bt.value,Te),bt!==null&&(i&&bt.alternate!==null&&tt.delete(bt.key===null?ot:bt.key),H=_(bt,H,ot),et===null?Ze=bt:et.sibling=bt,et=bt);return i&&tt.forEach(function(cM){return s(q,cM)}),Xt&&ss(q,ot),Ze}function Jt(q,H,Q,Te){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:e:{for(var Ze=Q.key,et=H;et!==null;){if(et.key===Ze){if(Ze=Q.type,Ze===O){if(et.tag===7){a(q,et.sibling),H=p(et,Q.props.children),H.return=q,q=H;break e}}else if(et.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Lm(Ze)===et.type){a(q,et.sibling),H=p(et,Q.props),H.ref=ia(q,et,Q),H.return=q,q=H;break e}a(q,et);break}else s(q,et);et=et.sibling}Q.type===O?(H=hs(Q.props.children,q.mode,Te,Q.key),H.return=q,q=H):(Te=Zl(Q.type,Q.key,Q.props,null,q.mode,Te),Te.ref=ia(q,H,Q),Te.return=q,q=Te)}return w(q);case N:e:{for(et=Q.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(q,H.sibling),H=p(H,Q.children||[]),H.return=q,q=H;break e}else{a(q,H);break}else s(q,H);H=H.sibling}H=Nf(Q,q.mode,Te),H.return=q,q=H}return w(q);case K:return et=Q._init,Jt(q,H,et(Q._payload),Te)}if(vt(Q))return je(q,H,Q,Te);if(de(Q))return qe(q,H,Q,Te);Cl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(a(q,H.sibling),H=p(H,Q),H.return=q,q=H):(a(q,H),H=If(Q,q.mode,Te),H.return=q,q=H),w(q)):a(q,H)}return Jt}var Xs=Im(!0),Nm=Im(!1),Rl=wr(null),bl=null,Ys=null,Gc=null;function Hc(){Gc=Ys=bl=null}function Wc(i){var s=Rl.current;Gt(Rl),i._currentValue=s}function jc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function qs(i,s){bl=i,Gc=Ys=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(kn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(Gc!==i)if(i={context:i,memoizedValue:s,next:null},Ys===null){if(bl===null)throw Error(t(308));Ys=i,bl.dependencies={lanes:0,firstContext:i}}else Ys=Ys.next=i;return s}var os=null;function Xc(i){os===null?os=[i]:os.push(i)}function Um(i,s,a,f){var p=s.interleaved;return p===null?(a.next=a,Xc(s)):(a.next=p.next,p.next=a),s.interleaved=a,Ki(i,f)}function Ki(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Yc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function $i(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function br(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(wt&2)!==0){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,Ki(i,a)}return p=f.interleaved,p===null?(s.next=s,Xc(f)):(s.next=p.next,p.next=s),f.interleaved=s,Ki(i,a)}function Pl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Lt(i,a)}}function Om(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=w:_=_.next=w,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Dl(i,s,a,f){var p=i.updateQueue;Rr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var B=U,ie=B.next;B.next=null,w===null?_=ie:w.next=ie,w=B;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==w&&(U===null?xe.firstBaseUpdate=ie:U.next=ie,xe.lastBaseUpdate=B))}if(_!==null){var Se=p.baseState;w=0,xe=ie=B=null,U=_;do{var ve=U.lane,Be=U.eventTime;if((f&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var je=i,qe=U;switch(ve=s,Be=a,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Se=je.call(Be,Se,ve);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,ve=typeof je=="function"?je.call(Be,Se,ve):je,ve==null)break e;Se=ne({},Se,ve);break e;case 2:Rr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ve=p.effects,ve===null?p.effects=[U]:ve.push(U))}else Be={eventTime:Be,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ie=xe=Be,B=Se):xe=xe.next=Be,w|=ve;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(xe===null&&(B=Se),p.baseState=B,p.firstBaseUpdate=ie,p.lastBaseUpdate=xe,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);us|=w,i.lanes=w,i.memoizedState=Se}}function Bm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var ra={},Di=wr(ra),sa=wr(ra),oa=wr(ra);function as(i){if(i===ra)throw Error(t(174));return i}function qc(i,s){switch(Vt(oa,s),Vt(sa,i),Vt(Di,ra),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ge(s,i)}Gt(Di),Vt(Di,s)}function Ks(){Gt(Di),Gt(sa),Gt(oa)}function km(i){as(oa.current);var s=as(Di.current),a=ge(s,i.type);s!==a&&(Vt(sa,i),Vt(Di,a))}function Kc(i){sa.current===i&&(Gt(Di),Gt(sa))}var qt=wr(0);function Ll(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var $c=[];function Zc(){for(var i=0;i<$c.length;i++)$c[i]._workInProgressVersionPrimary=null;$c.length=0}var Il=D.ReactCurrentDispatcher,Qc=D.ReactCurrentBatchConfig,ls=0,Kt=null,an=null,hn=null,Nl=!1,aa=!1,la=0,LS=0;function En(){throw Error(t(321))}function Jc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!pi(i[a],s[a]))return!1;return!0}function ef(i,s,a,f,p,_){if(ls=_,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Il.current=i===null||i.memoizedState===null?FS:OS,i=a(f,p),aa){_=0;do{if(aa=!1,la=0,25<=_)throw Error(t(301));_+=1,hn=an=null,s.updateQueue=null,Il.current=BS,i=a(f,p)}while(aa)}if(Il.current=Ol,s=an!==null&&an.next!==null,ls=0,hn=an=Kt=null,Nl=!1,s)throw Error(t(300));return i}function tf(){var i=la!==0;return la=0,i}function Li(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Kt.memoizedState=hn=i:hn=hn.next=i,hn}function si(){if(an===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=an.next;var s=hn===null?Kt.memoizedState:hn.next;if(s!==null)hn=s,an=i;else{if(i===null)throw Error(t(310));an=i,i={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},hn===null?Kt.memoizedState=hn=i:hn=hn.next=i}return hn}function ua(i,s){return typeof s=="function"?s(i):s}function nf(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=an,p=f.baseQueue,_=a.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}f.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,f=f.baseState;var U=w=null,B=null,ie=_;do{var xe=ie.lane;if((ls&xe)===xe)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),f=ie.hasEagerState?ie.eagerState:i(f,ie.action);else{var Se={lane:xe,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(U=B=Se,w=f):B=B.next=Se,Kt.lanes|=xe,us|=xe}ie=ie.next}while(ie!==null&&ie!==_);B===null?w=f:B.next=U,pi(f,s.memoizedState)||(kn=!0),s.memoizedState=f,s.baseState=w,s.baseQueue=B,a.lastRenderedState=f}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Kt.lanes|=_,us|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function rf(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);pi(_,s.memoizedState)||(kn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Vm(){}function zm(i,s){var a=Kt,f=si(),p=s(),_=!pi(f.memoizedState,p);if(_&&(f.memoizedState=p,kn=!0),f=f.queue,sf(Wm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,ca(9,Hm.bind(null,a,f,p,s),void 0,null),pn===null)throw Error(t(349));(ls&30)!==0||Gm(a,s,p)}return p}function Gm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Hm(i,s,a,f){s.value=a,s.getSnapshot=f,jm(s)&&Xm(i)}function Wm(i,s,a){return a(function(){jm(s)&&Xm(i)})}function jm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!pi(i,a)}catch{return!0}}function Xm(i){var s=Ki(i,1);s!==null&&xi(s,i,1,-1)}function Ym(i){var s=Li();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},s.queue=i,i=i.dispatch=US.bind(null,Kt,i),[s.memoizedState,i]}function ca(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function qm(){return si().memoizedState}function Ul(i,s,a,f){var p=Li();Kt.flags|=i,p.memoizedState=ca(1|s,a,void 0,f===void 0?null:f)}function Fl(i,s,a,f){var p=si();f=f===void 0?null:f;var _=void 0;if(an!==null){var w=an.memoizedState;if(_=w.destroy,f!==null&&Jc(f,w.deps)){p.memoizedState=ca(s,a,_,f);return}}Kt.flags|=i,p.memoizedState=ca(1|s,a,_,f)}function Km(i,s){return Ul(8390656,8,i,s)}function sf(i,s){return Fl(2048,8,i,s)}function $m(i,s){return Fl(4,2,i,s)}function Zm(i,s){return Fl(4,4,i,s)}function Qm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Jm(i,s,a){return a=a!=null?a.concat([i]):null,Fl(4,4,Qm.bind(null,s,i),a)}function of(){}function eg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Jc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function tg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Jc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function ng(i,s,a){return(ls&21)===0?(i.baseState&&(i.baseState=!1,kn=!0),i.memoizedState=a):(pi(a,s)||(a=Sn(),Kt.lanes|=a,us|=a,i.baseState=!0),s)}function IS(i,s){var a=ut;ut=a!==0&&4>a?a:4,i(!0);var f=Qc.transition;Qc.transition={};try{i(!1),s()}finally{ut=a,Qc.transition=f}}function ig(){return si().memoizedState}function NS(i,s,a){var f=Ir(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},rg(i))sg(s,a);else if(a=Um(i,s,a,f),a!==null){var p=Nn();xi(a,i,f,p),og(a,s,f)}}function US(i,s,a){var f=Ir(i),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(rg(i))sg(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,U=_(w,a);if(p.hasEagerState=!0,p.eagerState=U,pi(U,w)){var B=s.interleaved;B===null?(p.next=p,Xc(s)):(p.next=B.next,B.next=p),s.interleaved=p;return}}catch{}finally{}a=Um(i,s,p,f),a!==null&&(p=Nn(),xi(a,i,f,p),og(a,s,f))}}function rg(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function sg(i,s){aa=Nl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function og(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Lt(i,a)}}var Ol={readContext:ri,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},FS={readContext:ri,useCallback:function(i,s){return Li().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:Km,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Ul(4194308,4,Qm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Ul(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ul(4,2,i,s)},useMemo:function(i,s){var a=Li();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Li();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=NS.bind(null,Kt,i),[f.memoizedState,i]},useRef:function(i){var s=Li();return i={current:i},s.memoizedState=i},useState:Ym,useDebugValue:of,useDeferredValue:function(i){return Li().memoizedState=i},useTransition:function(){var i=Ym(!1),s=i[0];return i=IS.bind(null,i[1]),Li().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Kt,p=Li();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),pn===null)throw Error(t(349));(ls&30)!==0||Gm(f,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,Km(Wm.bind(null,f,_,i),[i]),f.flags|=2048,ca(9,Hm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Li(),s=pn.identifierPrefix;if(Xt){var a=qi,f=Yi;a=(f&~(1<<32-ke(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=la++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=LS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},OS={readContext:ri,useCallback:eg,useContext:ri,useEffect:sf,useImperativeHandle:Jm,useInsertionEffect:$m,useLayoutEffect:Zm,useMemo:tg,useReducer:nf,useRef:qm,useState:function(){return nf(ua)},useDebugValue:of,useDeferredValue:function(i){var s=si();return ng(s,an.memoizedState,i)},useTransition:function(){var i=nf(ua)[0],s=si().memoizedState;return[i,s]},useMutableSource:Vm,useSyncExternalStore:zm,useId:ig,unstable_isNewReconciler:!1},BS={readContext:ri,useCallback:eg,useContext:ri,useEffect:sf,useImperativeHandle:Jm,useInsertionEffect:$m,useLayoutEffect:Zm,useMemo:tg,useReducer:rf,useRef:qm,useState:function(){return rf(ua)},useDebugValue:of,useDeferredValue:function(i){var s=si();return an===null?s.memoizedState=i:ng(s,an.memoizedState,i)},useTransition:function(){var i=rf(ua)[0],s=si().memoizedState;return[i,s]},useMutableSource:Vm,useSyncExternalStore:zm,useId:ig,unstable_isNewReconciler:!1};function gi(i,s){if(i&&i.defaultProps){s=ne({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function af(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:ne({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Bl={isMounted:function(i){return(i=i._reactInternals)?ti(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Nn(),p=Ir(i),_=$i(f,p);_.payload=s,a!=null&&(_.callback=a),s=br(i,_,p),s!==null&&(xi(s,i,p,f),Pl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Nn(),p=Ir(i),_=$i(f,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=br(i,_,p),s!==null&&(xi(s,i,p,f),Pl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Nn(),f=Ir(i),p=$i(a,f);p.tag=2,s!=null&&(p.callback=s),s=br(i,p,f),s!==null&&(xi(s,i,f,a),Pl(s,i,f))}};function ag(i,s,a,f,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,w):s.prototype&&s.prototype.isPureReactComponent?!$o(a,f)||!$o(p,_):!0}function lg(i,s,a){var f=!1,p=Ar,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(p=Bn(s)?is:Mn.current,f=s.contextTypes,_=(f=f!=null)?Gs(i,p):Ar),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function ug(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Bl.enqueueReplaceState(s,s.state,null)}function lf(i,s,a,f){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Yc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ri(_):(_=Bn(s)?is:Mn.current,p.context=Gs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(af(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Bl.enqueueReplaceState(p,p.state,null),Dl(i,a,p,f),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function $s(i,s){try{var a="",f=s;do a+=Ke(f),f=f.return;while(f);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function uf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function cf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function cg(i,s,a){a=$i(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){jl||(jl=!0,wf=f),cf(i,s)},a}function fg(i,s,a){a=$i(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;a.payload=function(){return f(p)},a.callback=function(){cf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){cf(i,s),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function dg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new kS;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(a)||(p.add(a),i=JS.bind(null,i,s,a),s.then(i,i))}function hg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function pg(i,s,a,f,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=$i(-1,1),s.tag=2,br(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var VS=D.ReactCurrentOwner,kn=!1;function In(i,s,a,f){s.child=i===null?Nm(s,null,a,f):Xs(s,i.child,a,f)}function mg(i,s,a,f,p){a=a.render;var _=s.ref;return qs(s,p),f=ef(i,s,a,f,_,p),a=tf(),i!==null&&!kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Zi(i,s,p)):(Xt&&a&&Oc(s),s.flags|=1,In(i,s,f,p),s.child)}function gg(i,s,a,f,p){if(i===null){var _=a.type;return typeof _=="function"&&!Lf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,vg(i,s,_,f,p)):(i=Zl(a.type,null,f,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(w,f)&&i.ref===s.ref)return Zi(i,s,p)}return s.flags|=1,i=Ur(_,f),i.ref=s.ref,i.return=s,s.child=i}function vg(i,s,a,f,p){if(i!==null){var _=i.memoizedProps;if($o(_,f)&&i.ref===s.ref)if(kn=!1,s.pendingProps=f=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(kn=!0);else return s.lanes=i.lanes,Zi(i,s,p)}return ff(i,s,a,f,p)}function _g(i,s,a){var f=s.pendingProps,p=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Qs,Kn),Kn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Vt(Qs,Kn),Kn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Vt(Qs,Kn),Kn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Vt(Qs,Kn),Kn|=f;return In(i,s,p,a),s.child}function xg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ff(i,s,a,f,p){var _=Bn(a)?is:Mn.current;return _=Gs(s,_),qs(s,p),a=ef(i,s,a,f,_,p),f=tf(),i!==null&&!kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Zi(i,s,p)):(Xt&&f&&Oc(s),s.flags|=1,In(i,s,a,p),s.child)}function yg(i,s,a,f,p){if(Bn(a)){var _=!0;Ml(s)}else _=!1;if(qs(s,p),s.stateNode===null)Vl(i,s),lg(s,a,f),lf(s,a,f,p),f=!0;else if(i===null){var w=s.stateNode,U=s.memoizedProps;w.props=U;var B=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=ri(ie):(ie=Bn(a)?is:Mn.current,ie=Gs(s,ie));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==f||B!==ie)&&ug(s,w,f,ie),Rr=!1;var ve=s.memoizedState;w.state=ve,Dl(s,f,w,p),B=s.memoizedState,U!==f||ve!==B||On.current||Rr?(typeof xe=="function"&&(af(s,a,xe,f),B=s.memoizedState),(U=Rr||ag(s,a,U,f,ve,B,ie))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=B),w.props=f,w.state=B,w.context=ie,f=U):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{w=s.stateNode,Fm(i,s),U=s.memoizedProps,ie=s.type===s.elementType?U:gi(s.type,U),w.props=ie,Se=s.pendingProps,ve=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ri(B):(B=Bn(a)?is:Mn.current,B=Gs(s,B));var Be=a.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Se||ve!==B)&&ug(s,w,f,B),Rr=!1,ve=s.memoizedState,w.state=ve,Dl(s,f,w,p);var je=s.memoizedState;U!==Se||ve!==je||On.current||Rr?(typeof Be=="function"&&(af(s,a,Be,f),je=s.memoizedState),(ie=Rr||ag(s,a,ie,f,ve,je,B)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,je,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,je,B)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=je),w.props=f,w.state=je,w.context=B,f=ie):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),f=!1)}return df(i,s,a,f,_,p)}function df(i,s,a,f,p,_){xg(i,s);var w=(s.flags&128)!==0;if(!f&&!w)return p&&wm(s,a,!1),Zi(i,s,_);f=s.stateNode,VS.current=s;var U=w&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&w?(s.child=Xs(s,i.child,null,_),s.child=Xs(s,null,U,_)):In(i,s,U,_),s.memoizedState=f.state,p&&wm(s,a,!0),s.child}function Sg(i){var s=i.stateNode;s.pendingContext?Em(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Em(i,s.context,!1),qc(i,s.containerInfo)}function Mg(i,s,a,f,p){return js(),zc(p),s.flags|=256,In(i,s,a,f),s.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function pf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Eg(i,s,a){var f=s.pendingProps,p=qt.current,_=!1,w=(s.flags&128)!==0,U;if((U=w)||(U=i!==null&&i.memoizedState===null?!1:(p&2)!==0),U?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Vt(qt,p&1),i===null)return Vc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=f.children,i=f.fallback,_?(f=s.mode,_=s.child,w={mode:"hidden",children:w},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=Ql(w,f,0,null),i=hs(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=pf(a),s.memoizedState=hf,i):mf(s,w));if(p=i.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return zS(i,s,w,f,U,p,a);if(_){_=f.fallback,w=s.mode,p=i.child,U=p.sibling;var B={mode:"hidden",children:f.children};return(w&1)===0&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=B,s.deletions=null):(f=Ur(p,B),f.subtreeFlags=p.subtreeFlags&14680064),U!==null?_=Ur(U,_):(_=hs(_,w,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,w=i.child.memoizedState,w=w===null?pf(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~a,s.memoizedState=hf,f}return _=i.child,i=_.sibling,f=Ur(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function mf(i,s){return s=Ql({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function kl(i,s,a,f){return f!==null&&zc(f),Xs(s,i.child,null,a),i=mf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function zS(i,s,a,f,p,_,w){if(a)return s.flags&256?(s.flags&=-257,f=uf(Error(t(422))),kl(i,s,w,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=Ql({mode:"visible",children:f.children},p,0,null),_=hs(_,p,w,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Xs(s,i.child,null,w),s.child.memoizedState=pf(w),s.memoizedState=hf,_);if((s.mode&1)===0)return kl(i,s,w,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=uf(_,f,void 0),kl(i,s,w,f)}if(U=(w&i.childLanes)!==0,kn||U){if(f=pn,f!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ki(i,p),xi(f,i,p,-1))}return Df(),f=uf(Error(t(421))),kl(i,s,w,f)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=eM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,qn=Tr(p.nextSibling),Yn=s,Xt=!0,mi=null,i!==null&&(ni[ii++]=Yi,ni[ii++]=qi,ni[ii++]=rs,Yi=i.id,qi=i.overflow,rs=s),s=mf(s,f.children),s.flags|=4096,s)}function Tg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),jc(i.return,s,a)}function gf(i,s,a,f,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=p)}function wg(i,s,a){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(In(i,s,f.children,a),f=qt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Tg(i,a,s);else if(i.tag===19)Tg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Vt(qt,f),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Ll(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),gf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ll(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}gf(s,!0,a,null,_);break;case"together":gf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Zi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),us|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Ur(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Ur(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function GS(i,s,a){switch(s.tag){case 3:Sg(s),js();break;case 5:km(s);break;case 1:Bn(s.type)&&Ml(s);break;case 4:qc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Vt(Rl,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Vt(qt,qt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Eg(i,s,a):(Vt(qt,qt.current&1),i=Zi(i,s,a),i!==null?i.sibling:null);Vt(qt,qt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return wg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt(qt,qt.current),f)break;return null;case 22:case 23:return s.lanes=0,_g(i,s,a)}return Zi(i,s,a)}var Ag,vf,Cg,Rg;Ag=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vf=function(){},Cg=function(i,s,a,f){var p=i.memoizedProps;if(p!==f){i=s.stateNode,as(Di.current);var _=null;switch(a){case"input":p=xt(i,p),f=xt(i,f),_=[];break;case"select":p=ne({},p,{value:void 0}),f=ne({},f,{value:void 0}),_=[];break;case"textarea":p=Xe(i,p),f=Xe(i,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=xl)}Ye(a,f);var w;a=null;for(ie in p)if(!f.hasOwnProperty(ie)&&p.hasOwnProperty(ie)&&p[ie]!=null)if(ie==="style"){var U=p[ie];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?_||(_=[]):(_=_||[]).push(ie,null));for(ie in f){var B=f[ie];if(U=p!=null?p[ie]:void 0,f.hasOwnProperty(ie)&&B!==U&&(B!=null||U!=null))if(ie==="style")if(U){for(w in U)!U.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&U[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(_||(_=[]),_.push(ie,a)),a=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(_=_||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&zt("scroll",i),_||U===B||(_=[])):(_=_||[]).push(ie,B))}a&&(_=_||[]).push("style",a);var ie=_;(s.updateQueue=ie)&&(s.flags|=4)}},Rg=function(i,s,a,f){a!==f&&(s.flags|=4)};function fa(i,s){if(!Xt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Tn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function HS(i,s,a){var f=s.pendingProps;switch(Bc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return Bn(s.type)&&Sl(),Tn(s),null;case 3:return f=s.stateNode,Ks(),Gt(On),Gt(Mn),Zc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Al(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,mi!==null&&(Rf(mi),mi=null))),vf(i,s),Tn(s),null;case 5:Kc(s);var p=as(oa.current);if(a=s.type,i!==null&&s.stateNode!=null)Cg(i,s,a,f,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(i=as(Di.current),Al(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Pi]=s,f[ta]=_,i=(s.mode&1)!==0,a){case"dialog":zt("cancel",f),zt("close",f);break;case"iframe":case"object":case"embed":zt("load",f);break;case"video":case"audio":for(p=0;p<Qo.length;p++)zt(Qo[p],f);break;case"source":zt("error",f);break;case"img":case"image":case"link":zt("error",f),zt("load",f);break;case"details":zt("toggle",f);break;case"input":Ct(f,_),zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},zt("invalid",f);break;case"textarea":I(f,_),zt("invalid",f)}Ye(a,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var U=_[w];w==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&_l(f.textContent,U,i),p=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&_l(f.textContent,U,i),p=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&zt("scroll",f)}switch(a){case"input":at(f),k(f,_,!0);break;case"textarea":at(f),j(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=xl)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=w.createElement(a,{is:f.is}):(i=w.createElement(a),a==="select"&&(w=i,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):i=w.createElementNS(i,a),i[Pi]=s,i[ta]=f,Ag(i,s,!1,!1),s.stateNode=i;e:{switch(w=Re(a,f),a){case"dialog":zt("cancel",i),zt("close",i),p=f;break;case"iframe":case"object":case"embed":zt("load",i),p=f;break;case"video":case"audio":for(p=0;p<Qo.length;p++)zt(Qo[p],i);p=f;break;case"source":zt("error",i),p=f;break;case"img":case"image":case"link":zt("error",i),zt("load",i),p=f;break;case"details":zt("toggle",i),p=f;break;case"input":Ct(i,f),p=xt(i,f),zt("invalid",i);break;case"option":p=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},p=ne({},f,{value:void 0}),zt("invalid",i);break;case"textarea":I(i,f),p=Xe(i,f),zt("invalid",i);break;default:p=f}Ye(a,p),U=p;for(_ in U)if(U.hasOwnProperty(_)){var B=U[_];_==="style"?De(i,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(i,B)):_==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Ae(i,B):typeof B=="number"&&Ae(i,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?B!=null&&_==="onScroll"&&zt("scroll",i):B!=null&&P(i,_,B,w))}switch(a){case"input":at(i),k(i,f,!1);break;case"textarea":at(i),j(i);break;case"option":f.value!=null&&i.setAttribute("value",""+_e(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?Mt(i,!!f.multiple,_,!1):f.defaultValue!=null&&Mt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=xl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(i&&s.stateNode!=null)Rg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=as(oa.current),as(Di.current),Al(s)){if(f=s.stateNode,a=s.memoizedProps,f[Pi]=s,(_=f.nodeValue!==a)&&(i=Yn,i!==null))switch(i.tag){case 3:_l(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&_l(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Pi]=s,s.stateNode=f}return Tn(s),null;case 13:if(Gt(qt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Xt&&qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Dm(),js(),s.flags|=98560,_=!1;else if(_=Al(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Pi]=s}else js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tn(s),_=!1}else mi!==null&&(Rf(mi),mi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(qt.current&1)!==0?ln===0&&(ln=3):Df())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return Ks(),vf(i,s),i===null&&Jo(s.stateNode.containerInfo),Tn(s),null;case 10:return Wc(s.type._context),Tn(s),null;case 17:return Bn(s.type)&&Sl(),Tn(s),null;case 19:if(Gt(qt),_=s.memoizedState,_===null)return Tn(s),null;if(f=(s.flags&128)!==0,w=_.rendering,w===null)if(f)fa(_,!1);else{if(ln!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Ll(i),w!==null){for(s.flags|=128,fa(_,!1),f=w.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Vt(qt,qt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Yt()>Js&&(s.flags|=128,f=!0,fa(_,!1),s.lanes=4194304)}else{if(!f)if(i=Ll(w),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),fa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Xt)return Tn(s),null}else 2*Yt()-_.renderingStartTime>Js&&a!==1073741824&&(s.flags|=128,f=!0,fa(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(a=_.last,a!==null?a.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Yt(),s.sibling=null,a=qt.current,Vt(qt,f?a&1|2:a&1),s):(Tn(s),null);case 22:case 23:return Pf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Kn&1073741824)!==0&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function WS(i,s){switch(Bc(s),s.tag){case 1:return Bn(s.type)&&Sl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ks(),Gt(On),Gt(Mn),Zc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Kc(s),null;case 13:if(Gt(qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));js()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Gt(qt),null;case 4:return Ks(),null;case 10:return Wc(s.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var zl=!1,wn=!1,jS=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Zs(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Zt(i,s,f)}else a.current=null}function _f(i,s,a){try{a()}catch(f){Zt(i,s,f)}}var bg=!1;function XS(i,s){if(bc=al,i=am(),Sc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var w=0,U=-1,B=-1,ie=0,xe=0,Se=i,ve=null;t:for(;;){for(var Be;Se!==a||p!==0&&Se.nodeType!==3||(U=w+p),Se!==_||f!==0&&Se.nodeType!==3||(B=w+f),Se.nodeType===3&&(w+=Se.nodeValue.length),(Be=Se.firstChild)!==null;)ve=Se,Se=Be;for(;;){if(Se===i)break t;if(ve===a&&++ie===p&&(U=w),ve===_&&++xe===f&&(B=w),(Be=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Be}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:i,selectionRange:a},al=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,Jt=je.memoizedState,q=s.stateNode,H=q.getSnapshotBeforeUpdate(s.elementType===s.type?qe:gi(s.type,qe),Jt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=s.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Zt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return je=bg,bg=!1,je}function da(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&_f(s,a,_)}p=p.next}while(p!==f)}}function Gl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function xf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Pg(i){var s=i.alternate;s!==null&&(i.alternate=null,Pg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Pi],delete s[ta],delete s[Nc],delete s[RS],delete s[bS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Dg(i){return i.tag===5||i.tag===3||i.tag===4}function Lg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Dg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function yf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=xl));else if(f!==4&&(i=i.child,i!==null))for(yf(i,s,a),i=i.sibling;i!==null;)yf(i,s,a),i=i.sibling}function Sf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Sf(i,s,a),i=i.sibling;i!==null;)Sf(i,s,a),i=i.sibling}var vn=null,vi=!1;function Pr(i,s,a){for(a=a.child;a!==null;)Ig(i,s,a),a=a.sibling}function Ig(i,s,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Oe,a)}catch{}switch(a.tag){case 5:wn||Zs(a,s);case 6:var f=vn,p=vi;vn=null,Pr(i,s,a),vn=f,vi=p,vn!==null&&(vi?(i=vn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(vi?(i=vn,a=a.stateNode,i.nodeType===8?Ic(i.parentNode,a):i.nodeType===1&&Ic(i,a),Wo(i)):Ic(vn,a.stateNode));break;case 4:f=vn,p=vi,vn=a.stateNode.containerInfo,vi=!0,Pr(i,s,a),vn=f,vi=p;break;case 0:case 11:case 14:case 15:if(!wn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&_f(a,s,w),p=p.next}while(p!==f)}Pr(i,s,a);break;case 1:if(!wn&&(Zs(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Zt(a,s,U)}Pr(i,s,a);break;case 21:Pr(i,s,a);break;case 22:a.mode&1?(wn=(f=wn)||a.memoizedState!==null,Pr(i,s,a),wn=f):Pr(i,s,a);break;default:Pr(i,s,a)}}function Ng(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new jS),s.forEach(function(f){var p=tM.bind(null,i,f);a.has(f)||(a.add(f),f.then(p,p))})}}function _i(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var _=i,w=s,U=w;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,vi=!1;break e;case 3:vn=U.stateNode.containerInfo,vi=!0;break e;case 4:vn=U.stateNode.containerInfo,vi=!0;break e}U=U.return}if(vn===null)throw Error(t(160));Ig(_,w,p),vn=null,vi=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(ie){Zt(p,s,ie)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ug(s,i),s=s.sibling}function Ug(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(_i(s,i),Ii(i),f&4){try{da(3,i,i.return),Gl(3,i)}catch(qe){Zt(i,i.return,qe)}try{da(5,i,i.return)}catch(qe){Zt(i,i.return,qe)}}break;case 1:_i(s,i),Ii(i),f&512&&a!==null&&Zs(a,a.return);break;case 5:if(_i(s,i),Ii(i),f&512&&a!==null&&Zs(a,a.return),i.flags&32){var p=i.stateNode;try{Ae(p,"")}catch(qe){Zt(i,i.return,qe)}}if(f&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=a!==null?a.memoizedProps:_,U=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&lt(p,_),Re(U,w);var ie=Re(U,_);for(w=0;w<B.length;w+=2){var xe=B[w],Se=B[w+1];xe==="style"?De(p,Se):xe==="dangerouslySetInnerHTML"?$e(p,Se):xe==="children"?Ae(p,Se):P(p,xe,Se,ie)}switch(U){case"input":Wt(p,_);break;case"textarea":E(p,_);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Be=_.value;Be!=null?Mt(p,!!_.multiple,Be,!1):ve!==!!_.multiple&&(_.defaultValue!=null?Mt(p,!!_.multiple,_.defaultValue,!0):Mt(p,!!_.multiple,_.multiple?[]:"",!1))}p[ta]=_}catch(qe){Zt(i,i.return,qe)}}break;case 6:if(_i(s,i),Ii(i),f&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(qe){Zt(i,i.return,qe)}}break;case 3:if(_i(s,i),Ii(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Wo(s.containerInfo)}catch(qe){Zt(i,i.return,qe)}break;case 4:_i(s,i),Ii(i);break;case 13:_i(s,i),Ii(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Tf=Yt())),f&4&&Ng(i);break;case 22:if(xe=a!==null&&a.memoizedState!==null,i.mode&1?(wn=(ie=wn)||xe,_i(s,i),wn=ie):_i(s,i),Ii(i),f&8192){if(ie=i.memoizedState!==null,(i.stateNode.isHidden=ie)&&!xe&&(i.mode&1)!==0)for(ze=i,xe=i.child;xe!==null;){for(Se=ze=xe;ze!==null;){switch(ve=ze,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:da(4,ve,ve.return);break;case 1:Zs(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){f=ve,a=ve.return;try{s=f,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){Zt(f,a,qe)}}break;case 5:Zs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Bg(Se);continue}}Be!==null?(Be.return=ve,ze=Be):Bg(Se)}xe=xe.sibling}e:for(xe=null,Se=i;;){if(Se.tag===5){if(xe===null){xe=Se;try{p=Se.stateNode,ie?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=Se.stateNode,B=Se.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Me("display",w))}catch(qe){Zt(i,i.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(qe){Zt(i,i.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:_i(s,i),Ii(i),f&4&&Ng(i);break;case 21:break;default:_i(s,i),Ii(i)}}function Ii(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Dg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(Ae(p,""),f.flags&=-33);var _=Lg(i);Sf(i,_,p);break;case 3:case 4:var w=f.stateNode.containerInfo,U=Lg(i);yf(i,U,w);break;default:throw Error(t(161))}}catch(B){Zt(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function YS(i,s,a){ze=i,Fg(i)}function Fg(i,s,a){for(var f=(i.mode&1)!==0;ze!==null;){var p=ze,_=p.child;if(p.tag===22&&f){var w=p.memoizedState!==null||zl;if(!w){var U=p.alternate,B=U!==null&&U.memoizedState!==null||wn;U=zl;var ie=wn;if(zl=w,(wn=B)&&!ie)for(ze=p;ze!==null;)w=ze,B=w.child,w.tag===22&&w.memoizedState!==null?kg(p):B!==null?(B.return=w,ze=B):kg(p);for(;_!==null;)ze=_,Fg(_),_=_.sibling;ze=p,zl=U,wn=ie}Og(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ze=_):Og(i)}}function Og(i){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:wn||Gl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!wn)if(a===null)f.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:gi(s.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Bm(s,_,f);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Bm(s,w,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ie=s.alternate;if(ie!==null){var xe=ie.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&Wo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||s.flags&512&&xf(s)}catch(ve){Zt(s,s.return,ve)}}if(s===i){ze=null;break}if(a=s.sibling,a!==null){a.return=s.return,ze=a;break}ze=s.return}}function Bg(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ze=a;break}ze=s.return}}function kg(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Gl(4,s)}catch(B){Zt(s,a,B)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(B){Zt(s,p,B)}}var _=s.return;try{xf(s)}catch(B){Zt(s,_,B)}break;case 5:var w=s.return;try{xf(s)}catch(B){Zt(s,w,B)}}}catch(B){Zt(s,s.return,B)}if(s===i){ze=null;break}var U=s.sibling;if(U!==null){U.return=s.return,ze=U;break}ze=s.return}}var qS=Math.ceil,Hl=D.ReactCurrentDispatcher,Mf=D.ReactCurrentOwner,oi=D.ReactCurrentBatchConfig,wt=0,pn=null,nn=null,_n=0,Kn=0,Qs=wr(0),ln=0,ha=null,us=0,Wl=0,Ef=0,pa=null,Vn=null,Tf=0,Js=1/0,Qi=null,jl=!1,wf=null,Dr=null,Xl=!1,Lr=null,Yl=0,ma=0,Af=null,ql=-1,Kl=0;function Nn(){return(wt&6)!==0?Yt():ql!==-1?ql:ql=Yt()}function Ir(i){return(i.mode&1)===0?1:(wt&2)!==0&&_n!==0?_n&-_n:DS.transition!==null?(Kl===0&&(Kl=Sn()),Kl):(i=ut,i!==0||(i=window.event,i=i===void 0?16:zp(i.type)),i)}function xi(i,s,a,f){if(50<ma)throw ma=0,Af=null,Error(t(185));on(i,a,f),((wt&2)===0||i!==pn)&&(i===pn&&((wt&2)===0&&(Wl|=a),ln===4&&Nr(i,_n)),zn(i,f),a===1&&wt===0&&(s.mode&1)===0&&(Js=Yt()+500,El&&Cr()))}function zn(i,s){var a=i.callbackNode;Dt(i,s);var f=Rt(i,i===pn?_n:0);if(f===0)a!==null&&rl(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&rl(a),s===1)i.tag===0?PS(zg.bind(null,i)):Am(zg.bind(null,i)),AS(function(){(wt&6)===0&&Cr()}),a=null;else{switch(Ln(f)){case 1:a=X;break;case 4:a=ae;break;case 16:a=ee;break;case 536870912:a=Le;break;default:a=ee}a=Kg(a,Vg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Vg(i,s){if(ql=-1,Kl=0,(wt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(eo()&&i.callbackNode!==a)return null;var f=Rt(i,i===pn?_n:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=$l(i,f);else{s=f;var p=wt;wt|=2;var _=Hg();(pn!==i||_n!==s)&&(Qi=null,Js=Yt()+500,fs(i,s));do try{ZS();break}catch(U){Gg(i,U)}while(!0);Hc(),Hl.current=_,wt=p,nn!==null?s=0:(pn=null,_n=0,s=ln)}if(s!==0){if(s===2&&(p=_t(i),p!==0&&(f=p,s=Cf(i,p))),s===1)throw a=ha,fs(i,0),Nr(i,f),zn(i,Yt()),a;if(s===6)Nr(i,f);else{if(p=i.current.alternate,(f&30)===0&&!KS(p)&&(s=$l(i,f),s===2&&(_=_t(i),_!==0&&(f=_,s=Cf(i,_))),s===1))throw a=ha,fs(i,0),Nr(i,f),zn(i,Yt()),a;switch(i.finishedWork=p,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ds(i,Vn,Qi);break;case 3:if(Nr(i,f),(f&130023424)===f&&(s=Tf+500-Yt(),10<s)){if(Rt(i,0)!==0)break;if(p=i.suspendedLanes,(p&f)!==f){Nn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Lc(ds.bind(null,i,Vn,Qi),s);break}ds(i,Vn,Qi);break;case 4:if(Nr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,p=-1;0<f;){var w=31-ke(f);_=1<<w,w=s[w],w>p&&(p=w),f&=~_}if(f=p,f=Yt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*qS(f/1960))-f,10<f){i.timeoutHandle=Lc(ds.bind(null,i,Vn,Qi),f);break}ds(i,Vn,Qi);break;case 5:ds(i,Vn,Qi);break;default:throw Error(t(329))}}}return zn(i,Yt()),i.callbackNode===a?Vg.bind(null,i):null}function Cf(i,s){var a=pa;return i.current.memoizedState.isDehydrated&&(fs(i,s).flags|=256),i=$l(i,s),i!==2&&(s=Vn,Vn=a,s!==null&&Rf(s)),i}function Rf(i){Vn===null?Vn=i:Vn.push.apply(Vn,i)}function KS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],_=p.getSnapshot;p=p.value;try{if(!pi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Nr(i,s){for(s&=~Ef,s&=~Wl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-ke(s),f=1<<a;i[a]=-1,s&=~f}}function zg(i){if((wt&6)!==0)throw Error(t(327));eo();var s=Rt(i,0);if((s&1)===0)return zn(i,Yt()),null;var a=$l(i,s);if(i.tag!==0&&a===2){var f=_t(i);f!==0&&(s=f,a=Cf(i,f))}if(a===1)throw a=ha,fs(i,0),Nr(i,s),zn(i,Yt()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ds(i,Vn,Qi),zn(i,Yt()),null}function bf(i,s){var a=wt;wt|=1;try{return i(s)}finally{wt=a,wt===0&&(Js=Yt()+500,El&&Cr())}}function cs(i){Lr!==null&&Lr.tag===0&&(wt&6)===0&&eo();var s=wt;wt|=1;var a=oi.transition,f=ut;try{if(oi.transition=null,ut=1,i)return i()}finally{ut=f,oi.transition=a,wt=s,(wt&6)===0&&Cr()}}function Pf(){Kn=Qs.current,Gt(Qs)}function fs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,wS(a)),nn!==null)for(a=nn.return;a!==null;){var f=a;switch(Bc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Sl();break;case 3:Ks(),Gt(On),Gt(Mn),Zc();break;case 5:Kc(f);break;case 4:Ks();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:Wc(f.type._context);break;case 22:case 23:Pf()}a=a.return}if(pn=i,nn=i=Ur(i.current,null),_n=Kn=s,ln=0,ha=null,Ef=Wl=us=0,Vn=pa=null,os!==null){for(s=0;s<os.length;s++)if(a=os[s],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,_=a.pending;if(_!==null){var w=_.next;_.next=p,f.next=w}a.pending=f}os=null}return i}function Gg(i,s){do{var a=nn;try{if(Hc(),Il.current=Ol,Nl){for(var f=Kt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}Nl=!1}if(ls=0,hn=an=Kt=null,aa=!1,la=0,Mf.current=null,a===null||a.return===null){ln=1,ha=s,nn=null;break}e:{var _=i,w=a.return,U=a,B=s;if(s=_n,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,xe=U,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=hg(w);if(Be!==null){Be.flags&=-257,pg(Be,w,U,_,s),Be.mode&1&&dg(_,ie,s),s=Be,B=ie;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(B),s.updateQueue=qe}else je.add(B);break e}else{if((s&1)===0){dg(_,ie,s),Df();break e}B=Error(t(426))}}else if(Xt&&U.mode&1){var Jt=hg(w);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),pg(Jt,w,U,_,s),zc($s(B,U));break e}}_=B=$s(B,U),ln!==4&&(ln=2),pa===null?pa=[_]:pa.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var q=cg(_,B,s);Om(_,q);break e;case 1:U=B;var H=_.type,Q=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Dr===null||!Dr.has(Q)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=fg(_,U,s);Om(_,Te);break e}}_=_.return}while(_!==null)}jg(a)}catch(Ze){s=Ze,nn===a&&a!==null&&(nn=a=a.return);continue}break}while(!0)}function Hg(){var i=Hl.current;return Hl.current=Ol,i===null?Ol:i}function Df(){(ln===0||ln===3||ln===2)&&(ln=4),pn===null||(us&268435455)===0&&(Wl&268435455)===0||Nr(pn,_n)}function $l(i,s){var a=wt;wt|=2;var f=Hg();(pn!==i||_n!==s)&&(Qi=null,fs(i,s));do try{$S();break}catch(p){Gg(i,p)}while(!0);if(Hc(),wt=a,Hl.current=f,nn!==null)throw Error(t(261));return pn=null,_n=0,ln}function $S(){for(;nn!==null;)Wg(nn)}function ZS(){for(;nn!==null&&!ac();)Wg(nn)}function Wg(i){var s=qg(i.alternate,i,Kn);i.memoizedProps=i.pendingProps,s===null?jg(i):nn=s,Mf.current=null}function jg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=HS(a,s,Kn),a!==null){nn=a;return}}else{if(a=WS(a,s),a!==null){a.flags&=32767,nn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ln=6,nn=null;return}}if(s=s.sibling,s!==null){nn=s;return}nn=s=i}while(s!==null);ln===0&&(ln=5)}function ds(i,s,a){var f=ut,p=oi.transition;try{oi.transition=null,ut=1,QS(i,s,a,f)}finally{oi.transition=p,ut=f}return null}function QS(i,s,a,f){do eo();while(Lr!==null);if((wt&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(ts(i,_),i===pn&&(nn=pn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xl||(Xl=!0,Kg(ee,function(){return eo(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var w=ut;ut=1;var U=wt;wt|=4,Mf.current=null,XS(i,a),Ug(a,i),_S(Pc),al=!!bc,Pc=bc=null,i.current=a,YS(a),lc(),wt=U,ut=w,oi.transition=_}else i.current=a;if(Xl&&(Xl=!1,Lr=i,Yl=p),_=i.pendingLanes,_===0&&(Dr=null),Ge(a.stateNode),zn(i,Yt()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(jl)throw jl=!1,i=wf,wf=null,i;return(Yl&1)!==0&&i.tag!==0&&eo(),_=i.pendingLanes,(_&1)!==0?i===Af?ma++:(ma=0,Af=i):ma=0,Cr(),null}function eo(){if(Lr!==null){var i=Ln(Yl),s=oi.transition,a=ut;try{if(oi.transition=null,ut=16>i?16:i,Lr===null)var f=!1;else{if(i=Lr,Lr=null,Yl=0,(wt&6)!==0)throw Error(t(331));var p=wt;for(wt|=4,ze=i.current;ze!==null;){var _=ze,w=_.child;if((ze.flags&16)!==0){var U=_.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ie=U[B];for(ze=ie;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:da(8,xe,_)}var Se=xe.child;if(Se!==null)Se.return=xe,ze=Se;else for(;ze!==null;){xe=ze;var ve=xe.sibling,Be=xe.return;if(Pg(xe),xe===ie){ze=null;break}if(ve!==null){ve.return=Be,ze=ve;break}ze=Be}}}var je=_.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var Jt=qe.sibling;qe.sibling=null,qe=Jt}while(qe!==null)}}ze=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ze=w;else e:for(;ze!==null;){if(_=ze,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:da(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,ze=q;break e}ze=_.return}}var H=i.current;for(ze=H;ze!==null;){w=ze;var Q=w.child;if((w.subtreeFlags&2064)!==0&&Q!==null)Q.return=w,ze=Q;else e:for(w=H;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Gl(9,U)}}catch(Ze){Zt(U,U.return,Ze)}if(U===w){ze=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ze=Te;break e}ze=U.return}}if(wt=p,Cr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Oe,i)}catch{}f=!0}return f}finally{ut=a,oi.transition=s}}return!1}function Xg(i,s,a){s=$s(a,s),s=cg(i,s,1),i=br(i,s,1),s=Nn(),i!==null&&(on(i,1,s),zn(i,s))}function Zt(i,s,a){if(i.tag===3)Xg(i,i,a);else for(;s!==null;){if(s.tag===3){Xg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Dr===null||!Dr.has(f))){i=$s(a,i),i=fg(s,i,1),s=br(s,i,1),i=Nn(),s!==null&&(on(s,1,i),zn(s,i));break}}s=s.return}}function JS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Nn(),i.pingedLanes|=i.suspendedLanes&a,pn===i&&(_n&a)===a&&(ln===4||ln===3&&(_n&130023424)===_n&&500>Yt()-Tf?fs(i,0):Ef|=a),zn(i,s)}function Yg(i,s){s===0&&((i.mode&1)===0?s=1:(s=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var a=Nn();i=Ki(i,s),i!==null&&(on(i,s,a),zn(i,a))}function eM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Yg(i,a)}function tM(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Yg(i,a)}var qg;qg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||On.current)kn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return kn=!1,GS(i,s,a);kn=(i.flags&131072)!==0}else kn=!1,Xt&&(s.flags&1048576)!==0&&Cm(s,wl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Vl(i,s),i=s.pendingProps;var p=Gs(s,Mn.current);qs(s,a),p=ef(null,s,f,i,p,a);var _=tf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(f)?(_=!0,Ml(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Yc(s),p.updater=Bl,s.stateNode=p,p._reactInternals=s,lf(s,f,i,a),s=df(null,s,f,!0,_,a)):(s.tag=0,Xt&&_&&Oc(s),In(null,s,p,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Vl(i,s),i=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=iM(f),i=gi(f,i),p){case 0:s=ff(null,s,f,i,a);break e;case 1:s=yg(null,s,f,i,a);break e;case 11:s=mg(null,s,f,i,a);break e;case 14:s=gg(null,s,f,gi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),ff(i,s,f,p,a);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),yg(i,s,f,p,a);case 3:e:{if(Sg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,Fm(i,s),Dl(s,f,null,a);var w=s.memoizedState;if(f=w.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=$s(Error(t(423)),s),s=Mg(i,s,f,a,p);break e}else if(f!==p){p=$s(Error(t(424)),s),s=Mg(i,s,f,a,p);break e}else for(qn=Tr(s.stateNode.containerInfo.firstChild),Yn=s,Xt=!0,mi=null,a=Nm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),f===p){s=Zi(i,s,a);break e}In(i,s,f,a)}s=s.child}return s;case 5:return km(s),i===null&&Vc(s),f=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Dc(f,p)?w=null:_!==null&&Dc(f,_)&&(s.flags|=32),xg(i,s),In(i,s,w,a),s.child;case 6:return i===null&&Vc(s),null;case 13:return Eg(i,s,a);case 4:return qc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Xs(s,null,f,a):In(i,s,f,a),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),mg(i,s,f,p,a);case 7:return In(i,s,s.pendingProps,a),s.child;case 8:return In(i,s,s.pendingProps.children,a),s.child;case 12:return In(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,Vt(Rl,f._currentValue),f._currentValue=w,_!==null)if(pi(_.value,w)){if(_.children===p.children&&!On.current){s=Zi(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var U=_.dependencies;if(U!==null){w=_.child;for(var B=U.firstContext;B!==null;){if(B.context===f){if(_.tag===1){B=$i(-1,a&-a),B.tag=2;var ie=_.updateQueue;if(ie!==null){ie=ie.shared;var xe=ie.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),ie.pending=B}}_.lanes|=a,B=_.alternate,B!==null&&(B.lanes|=a),jc(_.return,a,s),U.lanes|=a;break}B=B.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),jc(w,a,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}In(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,qs(s,a),p=ri(p),f=f(p),s.flags|=1,In(i,s,f,a),s.child;case 14:return f=s.type,p=gi(f,s.pendingProps),p=gi(f.type,p),gg(i,s,f,p,a);case 15:return vg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),Vl(i,s),s.tag=1,Bn(f)?(i=!0,Ml(s)):i=!1,qs(s,a),lg(s,f,p),lf(s,f,p,a),df(null,s,f,!0,i,a);case 19:return wg(i,s,a);case 22:return _g(i,s,a)}throw Error(t(156,s.tag))};function Kg(i,s){return il(i,s)}function nM(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,f){return new nM(i,s,a,f)}function Lf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function iM(i){if(typeof i=="function")return Lf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===re)return 11;if(i===ce)return 14}return 2}function Ur(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Zl(i,s,a,f,p,_){var w=2;if(f=i,typeof i=="function")Lf(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case O:return hs(a.children,p,_,s);case z:w=8,p|=8;break;case A:return i=ai(12,a,s,p|2),i.elementType=A,i.lanes=_,i;case Z:return i=ai(13,a,s,p),i.elementType=Z,i.lanes=_,i;case se:return i=ai(19,a,s,p),i.elementType=se,i.lanes=_,i;case Y:return Ql(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:w=10;break e;case V:w=9;break e;case re:w=11;break e;case ce:w=14;break e;case K:w=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(w,a,s,p),s.elementType=i,s.type=f,s.lanes=_,s}function hs(i,s,a,f){return i=ai(7,i,f,s),i.lanes=a,i}function Ql(i,s,a,f){return i=ai(22,i,f,s),i.elementType=Y,i.lanes=a,i.stateNode={isHidden:!1},i}function If(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Nf(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function rM(i,s,a,f,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Uf(i,s,a,f,p,_,w,U,B){return i=new rM(i,s,a,U,B),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(_),i}function sM(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function $g(i){if(!i)return Ar;i=i._reactInternals;e:{if(ti(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Bn(a))return Tm(i,a,s)}return s}function Zg(i,s,a,f,p,_,w,U,B){return i=Uf(a,f,!0,i,p,_,w,U,B),i.context=$g(null),a=i.current,f=Nn(),p=Ir(a),_=$i(f,p),_.callback=s??null,br(a,_,p),i.current.lanes=p,on(i,p,f),zn(i,f),i}function Jl(i,s,a,f){var p=s.current,_=Nn(),w=Ir(p);return a=$g(a),s.context===null?s.context=a:s.pendingContext=a,s=$i(_,w),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=br(p,s,w),i!==null&&(xi(i,p,w,_),Pl(i,p,w)),w}function eu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Qg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Ff(i,s){Qg(i,s),(i=i.alternate)&&Qg(i,s)}function oM(){return null}var Jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Of(i){this._internalRoot=i}tu.prototype.render=Of.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Jl(i,s,null,null)},tu.prototype.unmount=Of.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;cs(function(){Jl(null,i,null,null)}),s[ji]=null}};function tu(i){this._internalRoot=i}tu.prototype.unstable_scheduleHydration=function(i){if(i){var s=bi();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Sr.length&&s!==0&&s<Sr[a].priority;a++);Sr.splice(a,0,i),a===0&&kp(i)}};function Bf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function nu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function e0(){}function aM(i,s,a,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var ie=eu(w);_.call(ie)}}var w=Zg(s,f,i,0,null,!1,!1,"",e0);return i._reactRootContainer=w,i[ji]=w.current,Jo(i.nodeType===8?i.parentNode:i),cs(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof f=="function"){var U=f;f=function(){var ie=eu(B);U.call(ie)}}var B=Uf(i,0,!1,null,null,!1,!1,"",e0);return i._reactRootContainer=B,i[ji]=B.current,Jo(i.nodeType===8?i.parentNode:i),cs(function(){Jl(s,B,a,f)}),B}function iu(i,s,a,f,p){var _=a._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var U=p;p=function(){var B=eu(w);U.call(B)}}Jl(s,w,i,p)}else w=aM(a,s,i,p,f);return eu(w)}fn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ft(s.pendingLanes);a!==0&&(Lt(s,a|1),zn(s,Yt()),(wt&6)===0&&(Js=Yt()+500,Cr()))}break;case 13:cs(function(){var f=Ki(i,1);if(f!==null){var p=Nn();xi(f,i,1,p)}}),Ff(i,1)}},dn=function(i){if(i.tag===13){var s=Ki(i,134217728);if(s!==null){var a=Nn();xi(s,i,134217728,a)}Ff(i,134217728)}},Ls=function(i){if(i.tag===13){var s=Ir(i),a=Ki(i,s);if(a!==null){var f=Nn();xi(a,i,s,f)}Ff(i,s)}},bi=function(){return ut},Op=function(i,s){var a=ut;try{return ut=i,s()}finally{ut=a}},Ne=function(i,s,a){switch(s){case"input":if(Wt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var p=yl(f);if(!p)throw Error(t(90));kt(f),Wt(f,p)}}}break;case"textarea":E(i,a);break;case"select":s=a.value,s!=null&&Mt(i,!!a.multiple,s,!1)}},st=bf,It=cs;var lM={usingClientEntryPoint:!1,Events:[na,Vs,yl,pe,be,bf]},ga={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uM={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ko(i),i===null?null:i.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||oM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Oe=ru.inject(uM),Ce=ru}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lM,Gn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(s))throw Error(t(200));return sM(i,s,null,a)},Gn.createRoot=function(i,s){if(!Bf(i))throw Error(t(299));var a=!1,f="",p=Jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Uf(i,1,!1,null,null,a,!1,f,p),i[ji]=s.current,Jo(i.nodeType===8?i.parentNode:i),new Of(s)},Gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ko(s),i=i===null?null:i.stateNode,i},Gn.flushSync=function(i){return cs(i)},Gn.hydrate=function(i,s,a){if(!nu(s))throw Error(t(200));return iu(null,i,s,!0,a)},Gn.hydrateRoot=function(i,s,a){if(!Bf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,_="",w=Jg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Zg(s,null,i,1,a??null,p,!1,_,w),i[ji]=s.current,Jo(i),f)for(i=0;i<f.length;i++)a=f[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new tu(s)},Gn.render=function(i,s,a){if(!nu(s))throw Error(t(200));return iu(null,i,s,!1,a)},Gn.unmountComponentAtNode=function(i){if(!nu(i))throw Error(t(40));return i._reactRootContainer?(cs(function(){iu(null,null,i,!1,function(){i._reactRootContainer=null,i[ji]=null})}),!0):!1},Gn.unstable_batchedUpdates=bf,Gn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!nu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return iu(i,s,a,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var l0;function vM(){if(l0)return zf.exports;l0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),zf.exports=gM(),zf.exports}var u0;function _M(){if(u0)return su;u0=1;var n=vM();return su.createRoot=n.createRoot,su.hydrateRoot=n.hydrateRoot,su}var xM=_M();const yM="modulepreload",SM=function(n){return"/"+n},c0={},mr=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=u(t.map(h=>{if(h=SM(h),h in c0)return;c0[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":yM,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((y,M)=>{v.addEventListener("load",y),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return o.then(u=>{for(const c of u||[])c.status==="rejected"&&l(c.reason);return e().catch(l)})},MM={es:{nav:{home:"Inicio",profile:"Perfil",experience:"Experiencia",skills:"Skills",certifications:"Certificaciones",contact:"Contacto",downloadCV:"Descargar CV"},hero:{available:"Disponible para trabajar",roles:["Desarrollador Jr.","Cloud Enthusiast","Apasionado por el código","Problem Solver"],description:"Egresado de Ingeniería en TI con experiencia en",support:"soporte técnico",networks:"redes",systems:"sistemas de misión crítica",passionate:"Apasionado por resolver problemas complejos.",contactMe:"Contáctame",downloadCV:"Descargar CV"},stats:{certifications:"Certificaciones",yearsExp:"Años Experiencia",technologies:"Tecnologías",commitment:"Ganas de Aprender"},about:{title:"Perfil Profesional",highlights:{graduated:"Egresado Dic 2025",software:"Desarrollo de Software",data:"Gestión de Datos",languages:"Java / Python"},description1:"Ingeniero en Tecnologías y Sistemas de Información (Egresado Diciembre 2025) con un perfil técnico orientado al Desarrollo de Software y Gestión de Datos. Cuento con experiencia operativa en la manipulación de bases de datos críticas mediante scripts en SQL Server y sólidos fundamentos en Lógica de Programación y POO (Java/Python).",description2:"Poseo competencias en tecnologías web (HTML/CSS/JS) y capacidad probada para el diagnóstico técnico (debugging) y documentación de incidencias.",objective:"Objetivo:",objectiveText:"Integrarme como Desarrollador de Software, aportando una rápida curva de aprendizaje, adaptabilidad a nuevos lenguajes y enfoque en la calidad del código."},experience:{title:"Experiencia Profesional",present:"Presente"},education:{title:"Educación",technicalKnowledge:"Conocimientos Técnicos"},skills:{title:"Stack Tecnológico",subtitle:"Tecnologías que manejo como desarrollador Jr. • Incluye el stack usado para este portafolio",builtWith:"Este portafolio fue construido con:"},certifications:{title:"Certificaciones",subtitle:"Haz clic en cada categoría para ver los certificados",certificates:"certificados",certificate:"certificado"},contact:{title:"Contacto",subtitle:"¿Interesado en trabajar conmigo? ¡Hablemos!",email:"Correo Electrónico",phone:"Teléfono",location:"Ubicación",sendMessage:"Enviar Mensaje"},footer:{rights:"Todos los derechos reservados.",builtWith:"Construido con"},theme:{dark:"Oscuro",light:"Claro"}},en:{nav:{home:"Home",profile:"Profile",experience:"Experience",skills:"Skills",certifications:"Certifications",contact:"Contact",downloadCV:"Download CV"},hero:{available:"Available for work",roles:["Jr. Developer","Cloud Enthusiast","Passionate about code","Problem Solver"],description:"IT Engineering graduate with experience in",support:"technical support",networks:"networks",systems:"mission-critical systems",passionate:"Passionate about solving complex problems.",contactMe:"Contact Me",downloadCV:"Download CV"},stats:{certifications:"Certifications",yearsExp:"Years Experience",technologies:"Technologies",commitment:"Eager to Learn"},about:{title:"Professional Profile",highlights:{graduated:"Graduated Dec 2025",software:"Software Development",data:"Data Management",languages:"Java / Python"},description1:"Information Technology and Systems Engineer (Graduated December 2025) with a technical profile focused on Software Development and Data Management. I have operational experience in handling critical databases through SQL Server scripts and solid foundations in Programming Logic and OOP (Java/Python).",description2:"I have competencies in web technologies (HTML/CSS/JS) and proven ability for technical diagnosis (debugging) and incident documentation.",objective:"Objective:",objectiveText:"Join as a Software Developer, bringing a fast learning curve, adaptability to new languages, and focus on code quality."},experience:{title:"Professional Experience",present:"Present"},education:{title:"Education",technicalKnowledge:"Technical Knowledge"},skills:{title:"Tech Stack",subtitle:"Technologies I handle as a Jr. developer • Includes the stack used for this portfolio",builtWith:"This portfolio was built with:"},certifications:{title:"Certifications",subtitle:"Click on each category to see the certificates",certificates:"certificates",certificate:"certificate"},contact:{title:"Contact",subtitle:"Interested in working with me? Let's talk!",email:"Email",phone:"Phone",location:"Location",sendMessage:"Send Message"},footer:{rights:"All rights reserved.",builtWith:"Built with"},theme:{dark:"Dark",light:"Light"}}},M_=me.createContext();function EM({children:n}){const[e,t]=me.useState(()=>typeof window<"u"&&localStorage.getItem("language")||"es");me.useEffect(()=>{localStorage.setItem("language",e),document.documentElement.lang=e},[e]);const r=()=>{t(l=>l==="es"?"en":"es")},o=MM[e];return ue.jsx(M_.Provider,{value:{language:e,toggleLanguage:r,t:o},children:n})}function $u(){const n=me.useContext(M_);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n}const jh=me.createContext({});function Xh(n){const e=me.useRef(null);return e.current===null&&(e.current=n()),e.current}const Zu=me.createContext(null),Yh=me.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class TM extends me.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function wM({children:n,isPresent:e}){const t=me.useId(),r=me.useRef(null),o=me.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=me.useContext(Yh);return me.useInsertionEffect(()=>{const{width:u,height:c,top:d,left:h}=o.current;if(e||!r.current||!u||!c)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),ue.jsx(TM,{isPresent:e,childRef:r,sizeRef:o,children:me.cloneElement(n,{ref:r})})}const AM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u})=>{const c=Xh(CM),d=me.useId(),h=me.useCallback(g=>{c.set(g,!0);for(const v of c.values())if(!v)return;r&&r()},[c,r]),m=me.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(c.set(g,!1),()=>c.delete(g))}),l?[Math.random(),h]:[t,h]);return me.useMemo(()=>{c.forEach((g,v)=>c.set(v,!1))},[t]),me.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),u==="popLayout"&&(n=ue.jsx(wM,{isPresent:t,children:n})),ue.jsx(Zu.Provider,{value:m,children:n})};function CM(){return new Map}function E_(n=!0){const e=me.useContext(Zu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=me.useId();me.useEffect(()=>{n&&o(l)},[n]);const u=me.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const ou=n=>n.key||"";function f0(n){const e=[];return me.Children.forEach(n,t=>{me.isValidElement(t)&&e.push(t)}),e}const qh=typeof window<"u",T_=qh?me.useLayoutEffect:me.useEffect,RM=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[c,d]=E_(u),h=me.useMemo(()=>f0(n),[n]),m=u&&!c?[]:h.map(ou),g=me.useRef(!0),v=me.useRef(h),y=Xh(()=>new Map),[M,T]=me.useState(h),[S,x]=me.useState(h);T_(()=>{g.current=!1,v.current=h;for(let D=0;D<S.length;D++){const L=ou(S[D]);m.includes(L)?y.delete(L):y.get(L)!==!0&&y.set(L,!1)}},[S,m.length,m.join("-")]);const b=[];if(h!==M){let D=[...h];for(let L=0;L<S.length;L++){const N=S[L],O=ou(N);m.includes(O)||(D.splice(L,0,N),b.push(N))}l==="wait"&&b.length&&(D=b),x(f0(D)),T(h);return}const{forceRender:P}=me.useContext(jh);return ue.jsx(ue.Fragment,{children:S.map(D=>{const L=ou(D),N=u&&!c?!1:h===S||m.includes(L),O=()=>{if(y.has(L))y.set(L,!0);else return;let z=!0;y.forEach(A=>{A||(z=!1)}),z&&(P==null||P(),x(v.current),u&&(d==null||d()),r&&r())};return ue.jsx(AM,{isPresent:N,initial:!g.current||t?void 0:!1,custom:N?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:N?void 0:O,children:D},L)})})},Qn=n=>n;let w_=Qn;function Kh(n){let e;return()=>(e===void 0&&(e=n()),e)}const Eo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},or=n=>n*1e3,ar=n=>n/1e3,bM={useManualTiming:!1};function PM(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,g=!1)=>{const y=g&&r?e:t;return m&&l.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const au=["read","resolveKeyframes","update","preRender","render","postRender"],DM=40;function A_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=au.reduce((x,b)=>(x[b]=PM(l),x),{}),{read:c,resolveKeyframes:d,update:h,preRender:m,render:g,postRender:v}=u,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,DM),1),o.timestamp=x,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:au.reduce((x,b)=>{const P=u[b];return x[b]=(D,L=!1,N=!1)=>(t||M(),P.schedule(D,L,N)),x},{}),cancel:x=>{for(let b=0;b<au.length;b++)u[au[b]].cancel(x)},state:o,steps:u}}const{schedule:Ht,cancel:Yr,state:xn,steps:Wf}=A_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qn,!0),C_=me.createContext({strict:!1}),d0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},To={};for(const n in d0)To[n]={isEnabled:e=>d0[n].some(t=>!!e[t])};function LM(n){for(const e in n)To[e]={...To[e],...n[e]}}const IM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||IM.has(n)}let R_=n=>!Vu(n);function NM(n){n&&(R_=e=>e.startsWith("on")?!Vu(e):n(e))}try{NM(require("@emotion/is-prop-valid").default)}catch{}function UM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(R_(o)||t===!0&&Vu(o)||!e&&!Vu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function FM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Qu=me.createContext({});function Ua(n){return typeof n=="string"||Array.isArray(n)}function Ju(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const $h=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zh=["initial",...$h];function ec(n){return Ju(n.animate)||Zh.some(e=>Ua(n[e]))}function b_(n){return!!(ec(n)||n.variants)}function OM(n,e){if(ec(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ua(t)?t:void 0,animate:Ua(r)?r:void 0}}return n.inherit!==!1?e:{}}function BM(n){const{initial:e,animate:t}=OM(n,me.useContext(Qu));return me.useMemo(()=>({initial:e,animate:t}),[h0(e),h0(t)])}function h0(n){return Array.isArray(n)?n.join(" "):n}const kM=Symbol.for("motionComponentSymbol");function go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function VM(n,e,t){return me.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):go(t)&&(t.current=r))},[e])}const Qh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),zM="framerAppearId",P_="data-"+Qh(zM),{schedule:Jh}=A_(queueMicrotask,!1),D_=me.createContext({});function GM(n,e,t,r,o){var l,u;const{visualElement:c}=me.useContext(Qu),d=me.useContext(C_),h=me.useContext(Zu),m=me.useContext(Yh).reducedMotion,g=me.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const v=g.current,y=me.useContext(D_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&HM(g.current,t,o,y);const M=me.useRef(!1);me.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const T=t[P_],S=me.useRef(!!T&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,T))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,T)));return T_(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Jh.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),me.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,T)}),S.current=!1))}),v}function HM(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:L_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&go(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function L_(n){if(n)return n.options.allowProjection!==!1?n.projection:L_(n.parent)}function WM({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&LM(n);function c(h,m){let g;const v={...me.useContext(Yh),...h,layoutId:jM(h)},{isStatic:y}=v,M=BM(h),T=r(h,y);if(!y&&qh){XM();const S=YM(v);g=S.MeasureLayout,M.visualElement=GM(o,T,v,e,S.ProjectionNode)}return ue.jsxs(Qu.Provider,{value:M,children:[g&&M.visualElement?ue.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,VM(T,M.visualElement,m),T,y,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=me.forwardRef(c);return d[kM]=o,d}function jM({layoutId:n}){const e=me.useContext(jh).id;return e&&n!==void 0?e+"-"+n:n}function XM(n,e){me.useContext(C_).strict}function YM(n){const{drag:e,layout:t}=To;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const qM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ep(n){return typeof n!="string"||n.includes("-")?!1:!!(qM.indexOf(n)>-1||/[A-Z]/u.test(n))}function p0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function tp(n,e,t,r){if(typeof e=="function"){const[o,l]=p0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=p0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Nd=n=>Array.isArray(n),KM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),$M=n=>Nd(n)?n[n.length-1]||0:n,bn=n=>!!(n&&n.getVelocity);function Du(n){const e=bn(n)?n.get():n;return KM(e)?e.toValue():e}function ZM({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:QM(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const I_=n=>(e,t)=>{const r=me.useContext(Qu),o=me.useContext(Zu),l=()=>ZM(n,e,r,o);return t?l():Xh(l)};function QM(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Du(l[v]);let{initial:u,animate:c}=n;const d=ec(n),h=b_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?c:u;if(g&&typeof g!="boolean"&&!Ju(g)){const v=Array.isArray(g)?g:[g];for(let y=0;y<v.length;y++){const M=tp(n,v[y]);if(M){const{transitionEnd:T,transition:S,...x}=M;for(const b in x){let P=x[b];if(Array.isArray(P)){const D=m?P.length-1:0;P=P[D]}P!==null&&(o[b]=P)}for(const b in T)o[b]=T[b]}}}return o}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ds=new Set(Do),N_=n=>e=>typeof e=="string"&&e.startsWith(n),U_=N_("--"),JM=N_("var(--"),np=n=>JM(n)?eE.test(n.split("/*")[0].trim()):!1,eE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,F_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,fr=(n,e,t)=>t>e?e:t<n?n:t,Lo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Fa={...Lo,transform:n=>fr(0,1,n)},lu={...Lo,default:1},Wa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Wr=Wa("deg"),Bi=Wa("%"),it=Wa("px"),tE=Wa("vh"),nE=Wa("vw"),m0={...Bi,parse:n=>Bi.parse(n)/100,transform:n=>Bi.transform(n*100)},iE={borderWidth:it,borderTopWidth:it,borderRightWidth:it,borderBottomWidth:it,borderLeftWidth:it,borderRadius:it,radius:it,borderTopLeftRadius:it,borderTopRightRadius:it,borderBottomRightRadius:it,borderBottomLeftRadius:it,width:it,maxWidth:it,height:it,maxHeight:it,top:it,right:it,bottom:it,left:it,padding:it,paddingTop:it,paddingRight:it,paddingBottom:it,paddingLeft:it,margin:it,marginTop:it,marginRight:it,marginBottom:it,marginLeft:it,backgroundPositionX:it,backgroundPositionY:it},rE={rotate:Wr,rotateX:Wr,rotateY:Wr,rotateZ:Wr,scale:lu,scaleX:lu,scaleY:lu,scaleZ:lu,skew:Wr,skewX:Wr,skewY:Wr,distance:it,translateX:it,translateY:it,translateZ:it,x:it,y:it,z:it,perspective:it,transformPerspective:it,opacity:Fa,originX:m0,originY:m0,originZ:it},g0={...Lo,transform:Math.round},ip={...iE,...rE,zIndex:g0,size:it,fillOpacity:Fa,strokeOpacity:Fa,numOctaves:g0},sE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oE=Do.length;function aE(n,e,t){let r="",o=!0;for(let l=0;l<oE;l++){const u=Do[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=F_(c,ip[u]);if(!d){o=!1;const m=sE[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function rp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Ds.has(d)){u=!0;continue}else if(U_(d)){o[d]=h;continue}else{const m=F_(h,ip[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=aE(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const lE={offset:"stroke-dashoffset",array:"stroke-dasharray"},uE={offset:"strokeDashoffset",array:"strokeDasharray"};function cE(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?lE:uE;n[l.offset]=it.transform(-r);const u=it.transform(e),c=it.transform(t);n[l.array]=`${u} ${c}`}function v0(n,e,t){return typeof n=="string"?n:it.transform(e+t*n)}function fE(n,e,t){const r=v0(e,n.x,n.width),o=v0(t,n.y,n.height);return`${r} ${o}`}function sp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},m,g){if(rp(n,h,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:y,dimensions:M}=n;v.transform&&(M&&(y.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||y.transform)&&(y.transformOrigin=fE(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&cE(v,u,c,d,!1)}const op=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),O_=()=>({...op(),attrs:{}}),ap=n=>typeof n=="string"&&n.toLowerCase()==="svg";function B_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const k_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function V_(n,e,t,r){B_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(k_.has(o)?o:Qh(o),e.attrs[o])}const zu={};function dE(n){Object.assign(zu,n)}function z_(n,{layout:e,layoutId:t}){return Ds.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!zu[n]||n==="opacity")}function lp(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(bn(o[u])||e.style&&bn(e.style[u])||z_(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function G_(n,e,t){const r=lp(n,e,t);for(const o in n)if(bn(n[o])||bn(e[o])){const l=Do.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function hE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const _0=["x","y","width","height","cx","cy","r"],pE={useVisualState:I_({scrapeMotionValuesFromProps:G_,createRenderState:O_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(Ds.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<_0.length;c++){const d=_0[c];n[d]!==e[d]&&(u=!0)}u&&Ht.read(()=>{hE(t,r),Ht.render(()=>{sp(r,o,ap(t.tagName),n.transformTemplate),V_(t,r)})})}})},mE={useVisualState:I_({scrapeMotionValuesFromProps:lp,createRenderState:op})};function H_(n,e,t){for(const r in e)!bn(e[r])&&!z_(r,t)&&(n[r]=e[r])}function gE({transformTemplate:n},e){return me.useMemo(()=>{const t=op();return rp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function vE(n,e){const t=n.style||{},r={};return H_(r,t,n),Object.assign(r,gE(n,e)),r}function _E(n,e){const t={},r=vE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function xE(n,e,t,r){const o=me.useMemo(()=>{const l=O_();return sp(l,e,ap(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};H_(l,n.style,n),o.style={...l,...o.style}}return o}function yE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(ep(t)?xE:_E)(r,l,u,t),h=UM(r,typeof t=="string",n),m=t!==me.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=me.useMemo(()=>bn(g)?g.get():g,[g]);return me.createElement(t,{...m,children:v})}}function SE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...ep(r)?pE:mE,preloadedFeatures:n,useRender:yE(o),createVisualElement:e,Component:r};return WM(u)}}function W_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function tc(n,e,t){const r=n.getProps();return tp(r,e,t!==void 0?t:r.custom,n)}const ME=Kh(()=>window.ScrollTimeline!==void 0);class EE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(ME()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class TE extends EE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function up(n,e){return n?n[e]||n.default||n:void 0}const Ud=2e4;function j_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Ud;)e+=t,r=n.next(e);return e>=Ud?1/0:e}function cp(n){return typeof n=="function"}function x0(n,e){n.timeline=e,n.onfinish=null}const fp=n=>Array.isArray(n)&&typeof n[0]=="number",wE={linearEasing:void 0};function AE(n,e){const t=Kh(n);return()=>{var r;return(r=wE[e])!==null&&r!==void 0?r:t()}}const Gu=AE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),X_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(Eo(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function Y_(n){return!!(typeof n=="function"&&Gu()||!n||typeof n=="string"&&(n in Fd||Gu())||fp(n)||Array.isArray(n)&&n.every(Y_))}const Aa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Fd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Aa([0,.65,.55,1]),circOut:Aa([.55,0,1,.45]),backIn:Aa([.31,.01,.66,-.59]),backOut:Aa([.33,1.53,.69,.99])};function q_(n,e){if(n)return typeof n=="function"&&Gu()?X_(n,e):fp(n)?Aa(n):Array.isArray(n)?n.map(t=>q_(t,e)||Fd.easeOut):Fd[n]}const Ei={x:!1,y:!1};function K_(){return Ei.x||Ei.y}function CE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function $_(n,e){const t=CE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function y0(n){return e=>{e.pointerType==="touch"||K_()||n(e)}}function RE(n,e,t={}){const[r,o,l]=$_(n,t),u=y0(c=>{const{target:d}=c,h=e(c);if(typeof h!="function"||!d)return;const m=y0(g=>{h(g),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const Z_=(n,e)=>e?n===e?!0:Z_(n,e.parentElement):!1,dp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,bE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function PE(n){return bE.has(n.tagName)||n.tabIndex!==-1}const Ca=new WeakSet;function S0(n){return e=>{e.key==="Enter"&&n(e)}}function jf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const DE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=S0(()=>{if(Ca.has(t))return;jf(t,"down");const o=S0(()=>{jf(t,"up")}),l=()=>jf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function M0(n){return dp(n)&&!K_()}function LE(n,e,t={}){const[r,o,l]=$_(n,t),u=c=>{const d=c.currentTarget;if(!M0(c)||Ca.has(d))return;Ca.add(d);const h=e(c),m=(y,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!M0(y)||!Ca.has(d))&&(Ca.delete(d),typeof h=="function"&&h(y,{success:M}))},g=y=>{m(y,t.useGlobalTarget||Z_(d,y.target))},v=y=>{m(y,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{!PE(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>DE(h,o),o)}),l}function IE(n){return n==="x"||n==="y"?Ei[n]?null:(Ei[n]=!0,()=>{Ei[n]=!1}):Ei.x||Ei.y?null:(Ei.x=Ei.y=!0,()=>{Ei.x=Ei.y=!1})}const Q_=new Set(["width","height","top","left","right","bottom",...Do]);let Lu;function NE(){Lu=void 0}const ki={now:()=>(Lu===void 0&&ki.set(xn.isProcessing||bM.useManualTiming?xn.timestamp:performance.now()),Lu),set:n=>{Lu=n,queueMicrotask(NE)}};function hp(n,e){n.indexOf(e)===-1&&n.push(e)}function pp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class mp{constructor(){this.subscriptions=[]}add(e){return hp(this.subscriptions,e),()=>pp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function J_(n,e){return e?n*(1e3/e):0}const E0=30,UE=n=>!isNaN(parseFloat(n));class FE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=ki.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ki.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=UE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new mp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ht.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ki.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>E0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,E0);return J_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Oa(n,e){return new FE(n,e)}function OE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Oa(t))}function BE(n,e){const t=tc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=$M(l[u]);OE(n,u,c)}}function kE(n){return!!(bn(n)&&n.add)}function Od(n,e){const t=n.getValue("willChange");if(kE(t))return t.add(e)}function ex(n){return n.props[P_]}const tx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,VE=1e-7,zE=12;function GE(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=tx(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>VE&&++c<zE);return u}function ja(n,e,t,r){if(n===e&&t===r)return Qn;const o=l=>GE(l,0,1,n,t);return l=>l===0||l===1?l:tx(o(l),e,r)}const nx=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,ix=n=>e=>1-n(1-e),rx=ja(.33,1.53,.69,.99),gp=ix(rx),sx=nx(gp),ox=n=>(n*=2)<1?.5*gp(n):.5*(2-Math.pow(2,-10*(n-1))),vp=n=>1-Math.sin(Math.acos(n)),ax=ix(vp),lx=nx(vp),ux=n=>/^0[^.\s]+$/u.test(n);function HE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ux(n):!0}const Da=n=>Math.round(n*1e5)/1e5,_p=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function WE(n){return n==null}const jE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xp=(n,e)=>t=>!!(typeof t=="string"&&jE.test(t)&&t.startsWith(n)||e&&!WE(t)&&Object.prototype.hasOwnProperty.call(t,e)),cx=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(_p);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},XE=n=>fr(0,255,n),Xf={...Lo,transform:n=>Math.round(XE(n))},As={test:xp("rgb","red"),parse:cx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Xf.transform(n)+", "+Xf.transform(e)+", "+Xf.transform(t)+", "+Da(Fa.transform(r))+")"};function YE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Bd={test:xp("#"),parse:YE,transform:As.transform},vo={test:xp("hsl","hue"),parse:cx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Bi.transform(Da(e))+", "+Bi.transform(Da(t))+", "+Da(Fa.transform(r))+")"},Rn={test:n=>As.test(n)||Bd.test(n)||vo.test(n),parse:n=>As.test(n)?As.parse(n):vo.test(n)?vo.parse(n):Bd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?As.transform(n):vo.transform(n)},qE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function KE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(_p))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(qE))===null||t===void 0?void 0:t.length)||0)>0}const fx="number",dx="color",$E="var",ZE="var(",T0="${}",QE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ba(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(QE,d=>(Rn.test(d)?(r.color.push(l),o.push(dx),t.push(Rn.parse(d))):d.startsWith(ZE)?(r.var.push(l),o.push($E),t.push(d)):(r.number.push(l),o.push(fx),t.push(parseFloat(d))),++l,T0)).split(T0);return{values:t,split:c,indexes:r,types:o}}function hx(n){return Ba(n).values}function px(n){const{split:e,types:t}=Ba(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===fx?l+=Da(o[u]):c===dx?l+=Rn.transform(o[u]):l+=o[u]}return l}}const JE=n=>typeof n=="number"?0:n;function eT(n){const e=hx(n);return px(n)(e.map(JE))}const qr={test:KE,parse:hx,createTransformer:px,getAnimatableNone:eT},tT=new Set(["brightness","contrast","saturate","opacity"]);function nT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(_p)||[];if(!r)return n;const o=t.replace(r,"");let l=tT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const iT=/\b([a-z-]*)\(.*?\)/gu,kd={...qr,getAnimatableNone:n=>{const e=n.match(iT);return e?e.map(nT).join(" "):n}},rT={...ip,color:Rn,backgroundColor:Rn,outlineColor:Rn,fill:Rn,stroke:Rn,borderColor:Rn,borderTopColor:Rn,borderRightColor:Rn,borderBottomColor:Rn,borderLeftColor:Rn,filter:kd,WebkitFilter:kd},yp=n=>rT[n];function mx(n,e){let t=yp(n);return t!==kd&&(t=qr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const sT=new Set(["auto","none","0"]);function oT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!sT.has(l)&&Ba(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=mx(t,o)}const w0=n=>n===Lo||n===it,A0=(n,e)=>parseFloat(n.split(", ")[e]),C0=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return A0(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?A0(l[1],n):0}},aT=new Set(["x","y","z"]),lT=Do.filter(n=>!aT.has(n));function uT(n){const e=[];return lT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const wo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:C0(4,13),y:C0(5,14)};wo.translateX=wo.x;wo.translateY=wo.y;const bs=new Set;let Vd=!1,zd=!1;function gx(){if(zd){const n=Array.from(bs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=uT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}zd=!1,Vd=!1,bs.forEach(n=>n.complete()),bs.clear()}function vx(){bs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(zd=!0)})}function cT(){vx(),gx()}class Sp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(bs.add(this),Vd||(Vd=!0,Ht.read(vx),Ht.resolveKeyframes(gx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),bs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,bs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _x=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),fT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dT(n){const e=fT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function xx(n,e,t=1){const[r,o]=dT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return _x(u)?parseFloat(u):u}return np(o)?xx(o,e,t+1):o}const yx=n=>e=>e.test(n),hT={test:n=>n==="auto",parse:n=>n},Sx=[Lo,it,Bi,Wr,nE,tE,hT],R0=n=>Sx.find(yx(n));class Mx extends Sp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),np(h))){const m=xx(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Q_.has(r)||e.length!==2)return;const[o,l]=e,u=R0(o),c=R0(l);if(u!==c)if(w0(u)&&w0(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)HE(e[o])&&r.push(o);r.length&&oT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=wo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=wo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const b0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(qr.test(n)||n==="0")&&!n.startsWith("url("));function pT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function mT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=b0(o,e),c=b0(l,e);return!u||!c?!1:pT(n)||(t==="spring"||cp(t))&&r}const gT=n=>n!==null;function nc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(gT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const vT=40;class Ex{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ki.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>vT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&cT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=ki.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!mT(e,r,o,l))if(u)this.options.duration=0;else{d&&d(nc(e,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const $t=(n,e,t)=>n+(e-n)*t;function Yf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function _T({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Yf(d,c,n+1/3),l=Yf(d,c,n),u=Yf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Hu(n,e){return t=>t>0?e:n}const qf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},xT=[Bd,As,vo],yT=n=>xT.find(e=>e.test(n));function P0(n){const e=yT(n);if(!e)return!1;let t=e.parse(n);return e===vo&&(t=_T(t)),t}const D0=(n,e)=>{const t=P0(n),r=P0(e);if(!t||!r)return Hu(n,e);const o={...t};return l=>(o.red=qf(t.red,r.red,l),o.green=qf(t.green,r.green,l),o.blue=qf(t.blue,r.blue,l),o.alpha=$t(t.alpha,r.alpha,l),As.transform(o))},ST=(n,e)=>t=>e(n(t)),Xa=(...n)=>n.reduce(ST),Gd=new Set(["none","hidden"]);function MT(n,e){return Gd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function ET(n,e){return t=>$t(n,e,t)}function Mp(n){return typeof n=="number"?ET:typeof n=="string"?np(n)?Hu:Rn.test(n)?D0:AT:Array.isArray(n)?Tx:typeof n=="object"?Rn.test(n)?D0:TT:Hu}function Tx(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Mp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function TT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Mp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function wT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const AT=(n,e)=>{const t=qr.createTransformer(e),r=Ba(n),o=Ba(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Gd.has(n)&&!o.values.length||Gd.has(e)&&!r.values.length?MT(n,e):Xa(Tx(wT(r,o),o.values),t):Hu(n,e)};function wx(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?$t(n,e,t):Mp(n)(n,e)}const CT=5;function Ax(n,e,t){const r=Math.max(e-CT,0);return J_(t-n(r),e-r)}const Qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Kf=.001;function RT({duration:n=Qt.duration,bounce:e=Qt.bounce,velocity:t=Qt.velocity,mass:r=Qt.mass}){let o,l,u=1-e;u=fr(Qt.minDamping,Qt.maxDamping,u),n=fr(Qt.minDuration,Qt.maxDuration,ar(n)),u<1?(o=h=>{const m=h*u,g=m*n,v=m-t,y=Hd(h,u),M=Math.exp(-g);return Kf-v/y*M},l=h=>{const g=h*u*n,v=g*t+t,y=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),T=Hd(Math.pow(h,2),u);return(-o(h)+Kf>0?-1:1)*((v-y)*M)/T}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-Kf+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const c=5/n,d=PT(o,l,c);if(n=or(n),isNaN(d))return{stiffness:Qt.stiffness,damping:Qt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const bT=12;function PT(n,e,t){let r=t;for(let o=1;o<bT;o++)r=r-n(r)/e(r);return r}function Hd(n,e){return n*Math.sqrt(1-e*e)}const DT=["duration","bounce"],LT=["stiffness","damping","mass"];function L0(n,e){return e.some(t=>n[t]!==void 0)}function IT(n){let e={velocity:Qt.velocity,stiffness:Qt.stiffness,damping:Qt.damping,mass:Qt.mass,isResolvedFromDuration:!1,...n};if(!L0(n,LT)&&L0(n,DT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*fr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Qt.mass,stiffness:o,damping:l}}else{const t=RT(n);e={...e,...t,mass:Qt.mass},e.isResolvedFromDuration=!0}return e}function Cx(n=Qt.visualDuration,e=Qt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:v,isResolvedFromDuration:y}=IT({...t,velocity:-ar(t.velocity||0)}),M=v||0,T=h/(2*Math.sqrt(d*m)),S=u-l,x=ar(Math.sqrt(d/m)),b=Math.abs(S)<5;r||(r=b?Qt.restSpeed.granular:Qt.restSpeed.default),o||(o=b?Qt.restDelta.granular:Qt.restDelta.default);let P;if(T<1){const L=Hd(x,T);P=N=>{const O=Math.exp(-T*x*N);return u-O*((M+T*x*S)/L*Math.sin(L*N)+S*Math.cos(L*N))}}else if(T===1)P=L=>u-Math.exp(-x*L)*(S+(M+x*S)*L);else{const L=x*Math.sqrt(T*T-1);P=N=>{const O=Math.exp(-T*x*N),z=Math.min(L*N,300);return u-O*((M+T*x*S)*Math.sinh(z)+L*S*Math.cosh(z))/L}}const D={calculatedDuration:y&&g||null,next:L=>{const N=P(L);if(y)c.done=L>=g;else{let O=0;T<1&&(O=L===0?or(M):Ax(P,L,N));const z=Math.abs(O)<=r,A=Math.abs(u-N)<=o;c.done=z&&A}return c.value=c.done?u:N,c},toString:()=>{const L=Math.min(j_(D),Ud),N=X_(O=>D.next(L*O).value,L,30);return L+"ms "+N}};return D}function I0({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],v={done:!1,value:g},y=z=>c!==void 0&&z<c||d!==void 0&&z>d,M=z=>c===void 0?d:d===void 0||Math.abs(c-z)<Math.abs(d-z)?c:d;let T=t*e;const S=g+T,x=u===void 0?S:u(S);x!==S&&(T=x-g);const b=z=>-T*Math.exp(-z/r),P=z=>x+b(z),D=z=>{const A=b(z),R=P(z);v.done=Math.abs(A)<=h,v.value=v.done?x:R};let L,N;const O=z=>{y(v.value)&&(L=z,N=Cx({keyframes:[v.value,M(v.value)],velocity:Ax(P,z,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return O(0),{calculatedDuration:null,next:z=>{let A=!1;return!N&&L===void 0&&(A=!0,D(z),O(z)),L!==void 0&&z>=L?N.next(z-L):(!A&&D(z),v)}}}const NT=ja(.42,0,1,1),UT=ja(0,0,.58,1),Rx=ja(.42,0,.58,1),FT=n=>Array.isArray(n)&&typeof n[0]!="number",OT={linear:Qn,easeIn:NT,easeInOut:Rx,easeOut:UT,circIn:vp,circInOut:lx,circOut:ax,backIn:gp,backInOut:sx,backOut:rx,anticipate:ox},N0=n=>{if(fp(n)){w_(n.length===4);const[e,t,r,o]=n;return ja(e,t,r,o)}else if(typeof n=="string")return OT[n];return n};function BT(n,e,t){const r=[],o=t||wx,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Qn:e;c=Xa(d,c)}r.push(c)}return r}function kT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(w_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=BT(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const v=Eo(n[g],n[g+1],m);return c[g](v)};return t?m=>h(fr(n[0],n[l-1],m)):h}function VT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Eo(0,e,r);n.push($t(t,1,o))}}function zT(n){const e=[0];return VT(e,n.length-1),e}function GT(n,e){return n.map(t=>t*e)}function HT(n,e){return n.map(()=>e||Rx).splice(0,n.length-1)}function Wu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=FT(r)?r.map(N0):N0(r),l={done:!1,value:e[0]},u=GT(t&&t.length===e.length?t:zT(e),n),c=kT(u,e,{ease:Array.isArray(o)?o:HT(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const WT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Ht.update(e,!0),stop:()=>Yr(e),now:()=>xn.isProcessing?xn.timestamp:ki.now()}},jT={decay:I0,inertia:I0,tween:Wu,keyframes:Wu,spring:Cx},XT=n=>n/100;class Ep extends Ex{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Sp,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=cp(t)?t:jT[t]||Wu;let d,h;c!==Wu&&typeof e[0]!="number"&&(d=Xa(XT,wx(e[0],e[1])),e=[0,100]);const m=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=j_(m));const{calculatedDuration:g}=m,v=g+o,y=v*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:z}=this.options;return{done:!0,value:z[z.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:y,repeatType:M,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-v*(this.speed>=0?1:-1),b=this.speed>=0?x<0:x>m;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let P=this.currentTime,D=l;if(y){const z=Math.min(this.currentTime,m)/g;let A=Math.floor(z),R=z%1;!R&&z>=1&&(R=1),R===1&&A--,A=Math.min(A,y+1),!!(A%2)&&(M==="reverse"?(R=1-R,T&&(R-=T/g)):M==="mirror"&&(D=u)),P=fr(0,1,R)*g}const L=b?{done:!1,value:d[0]}:D.next(P);c&&(L.value=c(L.value));let{done:N}=L;!b&&h!==null&&(N=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return O&&o!==void 0&&(L.value=nc(d,this.options,o)),S&&S(L.value),O&&this.finish(),L}get duration(){const{resolved:e}=this;return e?ar(e.calculatedDuration):0}get time(){return ar(this.currentTime)}set time(e){e=or(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ar(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=WT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const YT=new Set(["opacity","clipPath","filter","transform"]);function qT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=q_(c,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const KT=Kh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ju=10,$T=2e4;function ZT(n){return cp(n.type)||n.type==="spring"||!Y_(n.ease)}function QT(n,e){const t=new Ep({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<$T;)r=t.sample(l),o.push(r.value),l+=ju;return{times:void 0,keyframes:o,duration:l-ju,ease:"linear"}}const bx={anticipate:ox,backInOut:sx,circInOut:lx};function JT(n){return n in bx}class U0 extends Ex{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Mx(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:c,name:d,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof l=="string"&&Gu()&&JT(l)&&(l=bx[l]),ZT(this.options)){const{onComplete:g,onUpdate:v,motionValue:y,element:M,...T}=this.options,S=QT(e,T);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const m=qT(c.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(x0(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;c.set(nc(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return ar(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return ar(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=or(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Qn;const{animation:r}=t;x0(r,e)}return Qn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:g,element:v,...y}=this.options,M=new Ep({...y,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),T=or(this.time);h.setWithVelocity(M.sample(T-ju).value,M.sample(T).value,ju)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return KT()&&r&&YT.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const ew={type:"spring",stiffness:500,damping:25,restSpeed:10},tw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),nw={type:"keyframes",duration:.8},iw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rw=(n,{keyframes:e})=>e.length>2?nw:Ds.has(n)?n.startsWith("scale")?tw(e[1]):ew:iw;function sw({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Tp=(n,e,t,r={},o,l)=>u=>{const c=up(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-or(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};sw(c)||(m={...m,...rw(n,m)}),m.duration&&(m.duration=or(m.duration)),m.repeatDelay&&(m.repeatDelay=or(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=nc(m.keyframes,c);if(v!==void 0)return Ht.update(()=>{m.onUpdate(v),m.onComplete()}),new TE([])}return!l&&U0.supports(m)?new U0(m):new Ep(m)};function ow({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Px(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),y=d[g];if(y===void 0||m&&ow(m,g))continue;const M={delay:t,...up(u||{},g)};let T=!1;if(window.MotionHandoffAnimation){const x=ex(n);if(x){const b=window.MotionHandoffAnimation(x,g,Ht);b!==null&&(M.startTime=b,T=!0)}}Od(n,g),v.start(Tp(g,v,y,n.shouldReduceMotion&&Q_.has(g)?{type:!1}:M,n,T));const S=v.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{Ht.update(()=>{c&&BE(n,c)})}),h}function Wd(n,e,t={}){var r;const o=tc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(Px(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:v}=l;return aw(n,e,m+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>m())}else return Promise.all([u(),c(t.delay)])}function aw(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(lw).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Wd(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function lw(n,e){return n.sortNodePosition(e)}function uw(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Wd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Wd(n,e,t);else{const o=typeof e=="function"?tc(n,e,t.custom):e;r=Promise.all(Px(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const cw=Zh.length;function Dx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Dx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<cw;t++){const r=Zh[t],o=n.props[r];(Ua(o)||o===!1)&&(e[r]=o)}return e}const fw=[...$h].reverse(),dw=$h.length;function hw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>uw(n,t,r)))}function pw(n){let e=hw(n),t=F0(),r=!0;const o=d=>(h,m)=>{var g;const v=tc(n,m,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:y,transitionEnd:M,...T}=v;h={...h,...T,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Dx(n.parent)||{},g=[],v=new Set;let y={},M=1/0;for(let S=0;S<dw;S++){const x=fw[S],b=t[x],P=h[x]!==void 0?h[x]:m[x],D=Ua(P),L=x===d?b.isActive:null;L===!1&&(M=S);let N=P===m[x]&&P!==h[x]&&D;if(N&&r&&n.manuallyAnimateOnMount&&(N=!1),b.protectedKeys={...y},!b.isActive&&L===null||!P&&!b.prevProp||Ju(P)||typeof P=="boolean")continue;const O=mw(b.prevProp,P);let z=O||x===d&&b.isActive&&!N&&D||S>M&&D,A=!1;const R=Array.isArray(P)?P:[P];let V=R.reduce(o(x),{});L===!1&&(V={});const{prevResolvedValues:re={}}=b,Z={...re,...V},se=Y=>{z=!0,v.has(Y)&&(A=!0,v.delete(Y)),b.needsAnimating[Y]=!0;const W=n.getValue(Y);W&&(W.liveStyle=!1)};for(const Y in Z){const W=V[Y],de=re[Y];if(y.hasOwnProperty(Y))continue;let ne=!1;Nd(W)&&Nd(de)?ne=!W_(W,de):ne=W!==de,ne?W!=null?se(Y):v.add(Y):W!==void 0&&v.has(Y)?se(Y):b.protectedKeys[Y]=!0}b.prevProp=P,b.prevResolvedValues=V,b.isActive&&(y={...y,...V}),r&&n.blockInitialAnimation&&(z=!1),z&&(!(N&&O)||A)&&g.push(...R.map(Y=>({animation:Y,options:{type:x}})))}if(v.size){const S={};v.forEach(x=>{const b=n.getBaseTarget(x),P=n.getValue(x);P&&(P.liveStyle=!0),S[x]=b??null}),g.push({animation:S})}let T=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(g):Promise.resolve()}function c(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(v=>{var y;return(y=v.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=F0(),r=!0}}}function mw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!W_(e,n):!1}function ps(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function F0(){return{animate:ps(!0),whileInView:ps(),whileHover:ps(),whileTap:ps(),whileDrag:ps(),whileFocus:ps(),exit:ps()}}class $r{constructor(e){this.isMounted=!1,this.node=e}update(){}}class gw extends $r{constructor(e){super(e),e.animationState||(e.animationState=pw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ju(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let vw=0;class _w extends $r{constructor(){super(...arguments),this.id=vw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const xw={animation:{Feature:gw},exit:{Feature:_w}};function ka(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Ya(n){return{point:{x:n.pageX,y:n.pageY}}}const yw=n=>e=>dp(e)&&n(e,Ya(e));function La(n,e,t,r){return ka(n,e,yw(t),r)}const O0=(n,e)=>Math.abs(n-e);function Sw(n,e){const t=O0(n.x,e.x),r=O0(n.y,e.y);return Math.sqrt(t**2+r**2)}class Lx{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Zf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,y=Sw(g.offset,{x:0,y:0})>=3;if(!v&&!y)return;const{point:M}=g,{timestamp:T}=xn;this.history.push({...M,timestamp:T});const{onStart:S,onMove:x}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=$f(v,this.transformPagePoint),Ht.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Zf(g.type==="pointercancel"?this.lastMoveEventInfo:$f(v,this.transformPagePoint),this.history);this.startEvent&&y&&y(g,S),M&&M(g,S)},!dp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Ya(e),c=$f(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=xn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,Zf(c,this.history)),this.removeListeners=Xa(La(this.contextWindow,"pointermove",this.handlePointerMove),La(this.contextWindow,"pointerup",this.handlePointerUp),La(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Yr(this.updatePoint)}}function $f(n,e){return e?{point:e(n.point)}:n}function B0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Zf({point:n},e){return{point:n,delta:B0(n,Ix(e)),offset:B0(n,Mw(e)),velocity:Ew(e,.1)}}function Mw(n){return n[0]}function Ix(n){return n[n.length-1]}function Ew(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Ix(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>or(e)));)t--;if(!r)return{x:0,y:0};const l=ar(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Nx=1e-4,Tw=1-Nx,ww=1+Nx,Ux=.01,Aw=0-Ux,Cw=0+Ux;function ei(n){return n.max-n.min}function Rw(n,e,t){return Math.abs(n-e)<=t}function k0(n,e,t,r=.5){n.origin=r,n.originPoint=$t(e.min,e.max,n.origin),n.scale=ei(t)/ei(e),n.translate=$t(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Tw&&n.scale<=ww||isNaN(n.scale))&&(n.scale=1),(n.translate>=Aw&&n.translate<=Cw||isNaN(n.translate))&&(n.translate=0)}function Ia(n,e,t,r){k0(n.x,e.x,t.x,r?r.originX:void 0),k0(n.y,e.y,t.y,r?r.originY:void 0)}function V0(n,e,t){n.min=t.min+e.min,n.max=n.min+ei(e)}function bw(n,e,t){V0(n.x,e.x,t.x),V0(n.y,e.y,t.y)}function z0(n,e,t){n.min=e.min-t.min,n.max=n.min+ei(e)}function Na(n,e,t){z0(n.x,e.x,t.x),z0(n.y,e.y,t.y)}function Pw(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?$t(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?$t(t,n,r.max):Math.min(n,t)),n}function G0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Dw(n,{top:e,left:t,bottom:r,right:o}){return{x:G0(n.x,t,o),y:G0(n.y,e,r)}}function H0(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function Lw(n,e){return{x:H0(n.x,e.x),y:H0(n.y,e.y)}}function Iw(n,e){let t=.5;const r=ei(n),o=ei(e);return o>r?t=Eo(e.min,e.max-r,n.min):r>o&&(t=Eo(n.min,n.max-o,e.min)),fr(0,1,t)}function Nw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const jd=.35;function Uw(n=jd){return n===!1?n=0:n===!0&&(n=jd),{x:W0(n,"left","right"),y:W0(n,"top","bottom")}}function W0(n,e,t){return{min:j0(n,e),max:j0(n,t)}}function j0(n,e){return typeof n=="number"?n:n[e]||0}const X0=()=>({translate:0,scale:1,origin:0,originPoint:0}),_o=()=>({x:X0(),y:X0()}),Y0=()=>({min:0,max:0}),en=()=>({x:Y0(),y:Y0()});function ci(n){return[n("x"),n("y")]}function Fx({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function Fw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Ow(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Qf(n){return n===void 0||n===1}function Xd({scale:n,scaleX:e,scaleY:t}){return!Qf(n)||!Qf(e)||!Qf(t)}function Ss(n){return Xd(n)||Ox(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ox(n){return q0(n.x)||q0(n.y)}function q0(n){return n&&n!=="0%"}function Xu(n,e,t){const r=n-t,o=e*r;return t+o}function K0(n,e,t,r,o){return o!==void 0&&(n=Xu(n,o,r)),Xu(n,t,r)+e}function Yd(n,e=0,t=1,r,o){n.min=K0(n.min,e,t,r,o),n.max=K0(n.max,e,t,r,o)}function Bx(n,{x:e,y:t}){Yd(n.x,e.translate,e.scale,e.originPoint),Yd(n.y,t.translate,t.scale,t.originPoint)}const $0=.999999999999,Z0=1.0000000000001;function Bw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&yo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Bx(n,u)),r&&Ss(l.latestValues)&&yo(n,l.latestValues))}e.x<Z0&&e.x>$0&&(e.x=1),e.y<Z0&&e.y>$0&&(e.y=1)}function xo(n,e){n.min=n.min+e,n.max=n.max+e}function Q0(n,e,t,r,o=.5){const l=$t(n.min,n.max,o);Yd(n,e,t,l,r)}function yo(n,e){Q0(n.x,e.x,e.scaleX,e.scale,e.originX),Q0(n.y,e.y,e.scaleY,e.scale,e.originY)}function kx(n,e){return Fx(Ow(n.getBoundingClientRect(),e))}function kw(n,e,t){const r=kx(n,t),{scroll:o}=e;return o&&(xo(r.x,o.offset.x),xo(r.y,o.offset.y)),r}const Vx=({current:n})=>n?n.ownerDocument.defaultView:null,Vw=new WeakMap;class zw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=en(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ya(m).point)},l=(m,g)=>{const{drag:v,dragPropagation:y,onDragStart:M}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(S=>{let x=this.getAxisMotionValue(S).get()||0;if(Bi.test(x)){const{projection:b}=this.visualElement;if(b&&b.layout){const P=b.layout.layoutBox[S];P&&(x=ei(P)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&Ht.postRender(()=>M(m,g)),Od(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:M,onDrag:T}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(y&&this.currentDirection===null){this.currentDirection=Gw(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),T&&T(m,g)},c=(m,g)=>this.stop(m,g),d=()=>ci(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Lx(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Vx(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Ht.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!uu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=Pw(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&go(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=Dw(o.layoutBox,t):this.constraints=!1,this.elastic=Uw(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ci(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Nw(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!go(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=kw(r,o.root,this.visualElement.getTransformPagePoint());let u=Lw(o.layout.layoutBox,l);if(t){const c=t(Fw(u));this.hasMutatedConstraints=!!c,c&&(u=Fx(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ci(m=>{if(!uu(m,t,this.currentDirection))return;let g=d&&d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Od(this.visualElement,e),r.start(Tp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!uu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-$t(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!go(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=Iw({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(u=>{if(!uu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set($t(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;Vw.set(this.visualElement,this);const e=this.visualElement.current,t=La(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();go(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ht.read(r);const u=ka(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=jd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function uu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Gw(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Hw extends $r{constructor(e){super(e),this.removeGroupControls=Qn,this.removeListeners=Qn,this.controls=new zw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qn}unmount(){this.removeGroupControls(),this.removeListeners()}}const J0=n=>(e,t)=>{n&&Ht.postRender(()=>n(e,t))};class Ww extends $r{constructor(){super(...arguments),this.removePointerDownListener=Qn}onPointerDown(e){this.session=new Lx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Vx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:J0(e),onStart:J0(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ht.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=La(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Iu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ev(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const _a={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(it.test(n))n=parseFloat(n);else return n;const t=ev(n,e.target.x),r=ev(n,e.target.y);return`${t}% ${r}%`}},jw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=qr.parse(n);if(o.length>5)return r;const l=qr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=$t(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class Xw extends me.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;dE(Yw),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Iu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ht.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Jh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function zx(n){const[e,t]=E_(),r=me.useContext(jh);return ue.jsx(Xw,{...n,layoutGroup:r,switchLayoutGroup:me.useContext(D_),isPresent:e,safeToRemove:t})}const Yw={borderRadius:{..._a,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_a,borderTopRightRadius:_a,borderBottomLeftRadius:_a,borderBottomRightRadius:_a,boxShadow:jw};function qw(n,e,t){const r=bn(n)?n:Oa(n);return r.start(Tp("",r,e,t)),r.animation}function Kw(n){return n instanceof SVGElement&&n.tagName!=="svg"}const $w=(n,e)=>n.depth-e.depth;class Zw{constructor(){this.children=[],this.isDirty=!1}add(e){hp(this.children,e),this.isDirty=!0}remove(e){pp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($w),this.isDirty=!1,this.children.forEach(e)}}function Qw(n,e){const t=ki.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Yr(r),n(l-e))};return Ht.read(r,!0),()=>Yr(r)}const Gx=["TopLeft","TopRight","BottomLeft","BottomRight"],Jw=Gx.length,tv=n=>typeof n=="string"?parseFloat(n):n,nv=n=>typeof n=="number"||it.test(n);function e1(n,e,t,r,o,l){o?(n.opacity=$t(0,t.opacity!==void 0?t.opacity:1,t1(r)),n.opacityExit=$t(e.opacity!==void 0?e.opacity:1,0,n1(r))):l&&(n.opacity=$t(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<Jw;u++){const c=`border${Gx[u]}Radius`;let d=iv(e,c),h=iv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||nv(d)===nv(h)?(n[c]=Math.max($t(tv(d),tv(h),r),0),(Bi.test(h)||Bi.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=$t(e.rotate||0,t.rotate||0,r))}function iv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const t1=Hx(0,.5,ax),n1=Hx(.5,.95,Qn);function Hx(n,e,t){return r=>r<n?0:r>e?1:t(Eo(n,e,r))}function rv(n,e){n.min=e.min,n.max=e.max}function li(n,e){rv(n.x,e.x),rv(n.y,e.y)}function sv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function ov(n,e,t,r,o){return n-=e,n=Xu(n,1/t,r),o!==void 0&&(n=Xu(n,1/o,r)),n}function i1(n,e=0,t=1,r=.5,o,l=n,u=n){if(Bi.test(e)&&(e=parseFloat(e),e=$t(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=$t(l.min,l.max,r);n===l&&(c-=e),n.min=ov(n.min,e,t,c,o),n.max=ov(n.max,e,t,c,o)}function av(n,e,[t,r,o],l,u){i1(n,e[t],e[r],e[o],e.scale,l,u)}const r1=["x","scaleX","originX"],s1=["y","scaleY","originY"];function lv(n,e,t,r){av(n.x,e,r1,t?t.x:void 0,r?r.x:void 0),av(n.y,e,s1,t?t.y:void 0,r?r.y:void 0)}function uv(n){return n.translate===0&&n.scale===1}function Wx(n){return uv(n.x)&&uv(n.y)}function cv(n,e){return n.min===e.min&&n.max===e.max}function o1(n,e){return cv(n.x,e.x)&&cv(n.y,e.y)}function fv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function jx(n,e){return fv(n.x,e.x)&&fv(n.y,e.y)}function dv(n){return ei(n.x)/ei(n.y)}function hv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class a1{constructor(){this.members=[]}add(e){hp(this.members,e),e.scheduleRender()}remove(e){if(pp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function l1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:v,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const Ms={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ra=typeof window<"u"&&window.MotionDebug!==void 0,Jf=["","X","Y","Z"],u1={visibility:"hidden"},pv=1e3;let c1=0;function ed(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Xx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=ex(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ht,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Xx(r)}function Yx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=c1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ra&&(Ms.totalNodes=Ms.resolvedTargetDeltas=Ms.recalculatedProjection=0),this.nodes.forEach(h1),this.nodes.forEach(_1),this.nodes.forEach(x1),this.nodes.forEach(p1),Ra&&window.MotionDebug.record(Ms)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Zw)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new mp),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Kw(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=Qw(v,250),Iu.hasAnimatedSinceResize&&(Iu.hasAnimatedSinceResize=!1,this.nodes.forEach(gv))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||m.getDefaultTransition()||T1,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=m.getProps(),b=!this.targetLayout||!jx(this.targetLayout,M)||y,P=!v&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||v&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,P);const D={...up(T,"layout"),onPlay:S,onComplete:x};(m.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else v||gv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(y1),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Xx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mv);return}this.isUpdating||this.nodes.forEach(g1),this.isUpdating=!1,this.nodes.forEach(v1),this.nodes.forEach(f1),this.nodes.forEach(d1),this.clearAllSnapshots();const c=ki.now();xn.delta=fr(0,1e3/60,c-xn.timestamp),xn.timestamp=c,xn.isProcessing=!0,Wf.update.process(xn),Wf.preRender.process(xn),Wf.render.process(xn),xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(m1),this.sharedNodes.forEach(S1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=en(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Wx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(c||Ss(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),w1(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return en();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(A1))){const{scroll:m}=this.root;m&&(xo(d.x,m.offset.x),xo(d.y,m.offset.y))}return d}removeElementScroll(u){var c;const d=en();if(li(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:v}=m;m!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&li(d,u),xo(d.x,g.offset.x),xo(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=en();li(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&yo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Ss(m.latestValues)&&yo(d,m.latestValues)}return Ss(this.latestValues)&&yo(d,this.latestValues),d}removeTransform(u){const c=en();li(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Ss(h.latestValues))continue;Xd(h.latestValues)&&h.updateSnapshot();const m=en(),g=h.measurePageBox();li(m,g),lv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return Ss(this.latestValues)&&lv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=xn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=en(),this.relativeTargetOrigin=en(),Na(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=en(),this.targetWithTransforms=en()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),bw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),Bx(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=en(),this.relativeTargetOrigin=en(),Na(this.relativeTargetOrigin,this.target,y.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ra&&Ms.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Xd(this.parent.latestValues)||Ox(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===xn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;li(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;Bw(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=en());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(sv(this.prevProjectionDelta.x,this.projectionDelta.x),sv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ia(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!hv(this.projectionDelta.x,this.prevProjectionDelta.x)||!hv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ra&&Ms.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_o(),this.projectionDelta=_o(),this.projectionDeltaWithTransform=_o()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=_o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=en(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=y!==M,S=this.getStack(),x=!S||S.members.length<=1,b=!!(T&&!x&&this.options.crossfade===!0&&!this.path.some(E1));this.animationProgress=0;let P;this.mixTargetDelta=D=>{const L=D/1e3;vv(g.x,u.x,L),vv(g.y,u.y,L),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Na(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),M1(this.relativeTarget,this.relativeTargetOrigin,v,L),P&&o1(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=en()),li(P,this.relativeTarget)),T&&(this.animationValues=m,e1(m,h,this.latestValues,L,b,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ht.update(()=>{Iu.hasAnimatedSinceResize=!0,this.currentAnimation=qw(0,pv,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&qx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||en();const g=ei(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=ei(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}li(c,d),yo(c,m),Ia(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new a1),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&ed("z",u,h,this.animationValues);for(let m=0;m<Jf.length;m++)ed(`rotate${Jf[m]}`,u,h,this.animationValues),ed(`skew${Jf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return u1;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Du(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Du(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ss(this.latestValues)&&(T.transform=m?m({},""):"none",this.hasProjected=!1),T}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=l1(this.projectionDeltaWithTransform,this.treeScale,v),m&&(h.transform=m(v,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const T in zu){if(v[T]===void 0)continue;const{correct:S,applyTo:x}=zu[T],b=h.transform==="none"?v[T]:S(v[T],g);if(x){const P=x.length;for(let D=0;D<P;D++)h[x[D]]=b}else h[T]=b}return this.options.layoutId&&(h.pointerEvents=g===this?Du(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(mv),this.root.sharedNodes.clear()}}}function f1(n){n.updateLayout()}function d1(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?ci(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],y=ei(v);v.min=r[g].min,v.max=v.min+y}):qx(l,t.layoutBox,r)&&ci(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],y=ei(r[g]);v.max=v.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+y)});const c=_o();Ia(c,r,t.layoutBox);const d=_o();u?Ia(d,n.applyTransform(o,!0),t.measuredBox):Ia(d,r,t.layoutBox);const h=!Wx(c);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:y}=g;if(v&&y){const M=en();Na(M,t.layoutBox,v.layoutBox);const T=en();Na(T,r,y.layoutBox),jx(M,T)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function h1(n){Ra&&Ms.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function p1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function m1(n){n.clearSnapshot()}function mv(n){n.clearMeasurements()}function g1(n){n.isLayoutDirty=!1}function v1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function gv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function _1(n){n.resolveTargetDelta()}function x1(n){n.calcProjection()}function y1(n){n.resetSkewAndRotation()}function S1(n){n.removeLeadSnapshot()}function vv(n,e,t){n.translate=$t(e.translate,0,t),n.scale=$t(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function _v(n,e,t,r){n.min=$t(e.min,t.min,r),n.max=$t(e.max,t.max,r)}function M1(n,e,t,r){_v(n.x,e.x,t.x,r),_v(n.y,e.y,t.y,r)}function E1(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const T1={duration:.45,ease:[.4,0,.1,1]},xv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),yv=xv("applewebkit/")&&!xv("chrome/")?Math.round:Qn;function Sv(n){n.min=yv(n.min),n.max=yv(n.max)}function w1(n){Sv(n.x),Sv(n.y)}function qx(n,e,t){return n==="position"||n==="preserve-aspect"&&!Rw(dv(e),dv(t),.2)}function A1(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const C1=Yx({attachResizeListener:(n,e)=>ka(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),td={current:void 0},Kx=Yx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!td.current){const n=new C1({});n.mount(window),n.setOptions({layoutScroll:!0}),td.current=n}return td.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),R1={pan:{Feature:Ww},drag:{Feature:Hw,ProjectionNode:Kx,MeasureLayout:zx}};function Mv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Ht.postRender(()=>l(e,Ya(e)))}class b1 extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=RE(e,t=>(Mv(this.node,t,"Start"),r=>Mv(this.node,r,"End"))))}unmount(){}}class P1 extends $r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xa(ka(this.node.current,"focus",()=>this.onFocus()),ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ev(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Ht.postRender(()=>l(e,Ya(e)))}class D1 extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=LE(e,t=>(Ev(this.node,t,"Start"),(r,{success:o})=>Ev(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const qd=new WeakMap,nd=new WeakMap,L1=n=>{const e=qd.get(n.target);e&&e(n)},I1=n=>{n.forEach(L1)};function N1({root:n,...e}){const t=n||document;nd.has(t)||nd.set(t,{});const r=nd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(I1,{root:n,...e})),r[o]}function U1(n,e,t){const r=N1(e);return qd.set(n,t),r.observe(n),()=>{qd.delete(n),r.unobserve(n)}}const F1={some:0,all:1};class O1 extends $r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:F1[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return U1(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(B1(e,t))&&this.startObserver()}unmount(){}}function B1({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const k1={inView:{Feature:O1},tap:{Feature:D1},focus:{Feature:P1},hover:{Feature:b1}},V1={layout:{ProjectionNode:Kx,MeasureLayout:zx}},Kd={current:null},$x={current:!1};function z1(){if($x.current=!0,!!qh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Kd.current=n.matches;n.addListener(e),e()}else Kd.current=!1}const G1=[...Sx,Rn,qr],H1=n=>G1.find(yx(n)),Tv=new WeakMap;function W1(n,e,t){for(const r in e){const o=e[r],l=t[r];if(bn(o))n.addValue(r,o);else if(bn(l))n.addValue(r,Oa(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Oa(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const wv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class j1{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Sp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=ki.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ht.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=ec(t),this.isVariantNode=b_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in v){const M=v[y];d[y]!==void 0&&bn(M)&&M.set(d[y],!1)}}mount(e){this.current=e,Tv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),$x.current||z1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Kd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Tv.delete(this.current),this.projection&&this.projection.unmount(),Yr(this.notifyUpdate),Yr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ds.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ht.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in To){const t=To[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):en()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<wv.length;r++){const o=wv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=W1(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Oa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(_x(o)||ux(o))?o=parseFloat(o):!H1(o)&&qr.test(t)&&(o=mx(e,t)),this.setBaseTarget(e,bn(o)?o.get():o)),bn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=tp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!bn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new mp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Zx extends j1{constructor(){super(...arguments),this.KeyframeResolver=Mx}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;bn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function X1(n){return window.getComputedStyle(n)}class Y1 extends Zx{constructor(){super(...arguments),this.type="html",this.renderInstance=B_}readValueFromInstance(e,t){if(Ds.has(t)){const r=yp(t);return r&&r.default||0}else{const r=X1(e),o=(U_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return kx(e,t)}build(e,t,r){rp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return lp(e,t,r)}}class q1 extends Zx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=en}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ds.has(t)){const r=yp(t);return r&&r.default||0}return t=k_.has(t)?t:Qh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return G_(e,t,r)}build(e,t,r){sp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){V_(e,t,r,o)}mount(e){this.isSVGTag=ap(e.tagName),super.mount(e)}}const K1=(n,e)=>ep(n)?new q1(e):new Y1(e,{allowProjection:n!==me.Fragment}),$1=SE({...xw,...k1,...R1,...V1},K1),Ut=FM($1),Qx=me.createContext();function Z1({children:n}){const[e,t]=me.useState(()=>typeof window<"u"&&localStorage.getItem("theme")||"dark");me.useEffect(()=>{localStorage.setItem("theme",e),e==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.remove("light-theme")},[e]);const r=()=>{t(o=>o==="dark"?"light":"dark")};return ue.jsx(Qx.Provider,{value:{theme:e,toggleTheme:r},children:n})}function Q1(){const n=me.useContext(Qx);if(!n)throw new Error("useTheme must be used within a ThemeProvider");return n}function J1(){const[n,e]=me.useState(!1),[t,r]=me.useState("hero"),[o,l]=me.useState(!1),{theme:u,toggleTheme:c}=Q1(),{language:d,toggleLanguage:h,t:m}=$u(),g=[{name:m.nav.home,href:"#hero"},{name:m.nav.experience,href:"#experience"},{name:m.nav.skills,href:"#skills"},{name:d==="es"?"Proyectos":"Projects",href:"#projects"},{name:m.nav.certifications,href:"#certifications"},{name:m.nav.profile,href:"#about"},{name:m.nav.contact,href:"#contact"}];me.useEffect(()=>{const y=()=>{e(window.scrollY>50);const M=g.map(T=>T.href.replace("#",""));for(const T of M.reverse()){const S=document.getElementById(T);if(S&&S.getBoundingClientRect().top<=150){r(T);break}}};return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[g]);const v=y=>{const M=document.querySelector(y);M&&M.scrollIntoView({behavior:"smooth"}),l(!1)};return ue.jsxs(ue.Fragment,{children:[ue.jsx(Ut.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5,delay:.2},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"py-3 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5":"py-5 bg-transparent"}`,children:ue.jsxs("div",{className:"max-w-6xl mx-auto px-6 flex items-center justify-between",children:[ue.jsxs(Ut.a,{href:"#hero",onClick:y=>{y.preventDefault(),v("#hero")},className:"flex items-center gap-2 group",whileHover:{scale:1.05},children:[ue.jsx("img",{src:"/images/carlos-jair.jpg",alt:"Carlos Jair",className:"w-10 h-10 rounded-lg object-cover object-top border-2 border-neon-cyan/30"}),ue.jsx("span",{className:"font-semibold text-white hidden sm:block group-hover:text-neon-cyan transition-colors",children:"Carlos Jair"})]}),ue.jsx("div",{className:"hidden lg:flex items-center gap-1",children:g.map(y=>ue.jsx(Ut.button,{onClick:()=>v(y.href),className:`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${t===y.href.replace("#","")?"text-neon-cyan bg-neon-cyan/10":"text-text-muted hover:text-white hover:bg-white/5"}`,whileHover:{scale:1.05},whileTap:{scale:.95},children:y.name},y.href))}),ue.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[ue.jsxs(Ut.button,{onClick:h,whileHover:{scale:1.1},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10",title:d==="es"?"Switch to English":"Cambiar a Español",children:[ue.jsx("img",{src:d==="es"?"https://flagcdn.com/w40/mx.png":"https://flagcdn.com/w40/us.png",alt:d==="es"?"México":"USA",className:"w-6 h-4 object-cover rounded-sm"}),ue.jsx("span",{className:"text-white font-medium text-sm",children:d==="es"?"ES":"EN"})]}),ue.jsx(Ut.button,{onClick:c,whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-9 h-9 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center",title:u==="dark"?"Tema claro":"Dark theme",children:u==="dark"?"🌙":"☀️"}),ue.jsxs(Ut.a,{href:"/cv-carlos-castorena.pdf",download:!0,className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all text-sm",whileHover:{scale:1.05},whileTap:{scale:.95},children:["📄 ",m.nav.downloadCV]})]}),ue.jsxs("button",{onClick:()=>l(!o),className:"lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5",children:[ue.jsx(Ut.span,{animate:{rotate:o?45:0,y:o?6:0},className:"w-6 h-0.5 bg-white rounded-full"}),ue.jsx(Ut.span,{animate:{opacity:o?0:1},className:"w-6 h-0.5 bg-white rounded-full"}),ue.jsx(Ut.span,{animate:{rotate:o?-45:0,y:o?-6:0},className:"w-6 h-0.5 bg-white rounded-full"})]})]})}),ue.jsx(RM,{children:o&&ue.jsx(Ut.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl pt-24 px-6 lg:hidden",children:ue.jsxs("div",{className:"flex flex-col gap-2",children:[g.map((y,M)=>ue.jsx(Ut.button,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:M*.1},onClick:()=>v(y.href),className:"text-left py-4 px-4 text-lg font-medium text-white hover:text-neon-cyan hover:bg-white/5 rounded-lg transition-all",children:y.name},y.href)),ue.jsxs("div",{className:"flex items-center gap-4 mt-4 py-4 px-4 border-t border-dark-border",children:[ue.jsxs("button",{onClick:h,className:"flex items-center gap-2 text-white",children:[ue.jsx("img",{src:d==="es"?"https://flagcdn.com/w40/mx.png":"https://flagcdn.com/w40/us.png",alt:d==="es"?"México":"USA",className:"w-6 h-4 object-cover rounded-sm"}),ue.jsx("span",{children:d==="es"?"Español":"English"})]}),ue.jsxs("button",{onClick:c,className:"flex items-center gap-2 text-white",children:[ue.jsx("span",{className:"text-xl",children:u==="dark"?"🌙":"☀️"}),ue.jsx("span",{children:u==="dark"?m.theme.dark:m.theme.light})]})]}),ue.jsxs(Ut.a,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.6},href:"/cv-carlos-castorena.pdf",download:!0,className:"mt-2 py-4 px-4 text-center bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-semibold rounded-lg",children:["📄 ",m.nav.downloadCV]})]})})})]})}const eA=[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",x:-40,y:-35},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",x:40,y:-35},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",x:40,y:35},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",x:-40,y:35}],tA=me.memo(function({onComplete:e}){const{language:t}=$u();me.useEffect(()=>{const o=setTimeout(e,2800);return()=>clearTimeout(o)},[e]);const r=t==="es"?"Bienvenido":"Welcome";return ue.jsxs(Ut.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden",children:[ue.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[ue.jsx("div",{className:"absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-cyan/8 rounded-full blur-3xl"}),ue.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-purple/8 rounded-full blur-3xl"})]}),ue.jsx("div",{className:"hidden md:block",children:eA.map((o,l)=>ue.jsx(Ut.img,{src:o.icon,alt:"",className:"absolute w-10 h-10 opacity-30",style:{left:`calc(50% + ${o.x*3}px)`,top:`calc(50% + ${o.y*3}px)`},initial:{opacity:0,scale:0},animate:{opacity:.3,scale:1,y:[0,-8,0]},transition:{duration:.6,delay:l*.15,y:{duration:3,repeat:1/0,ease:"easeInOut"}}},l))}),ue.jsxs("div",{className:"text-center relative z-10 px-6",children:[ue.jsx(Ut.h1,{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-wide",children:r.split("").map((o,l)=>ue.jsx(Ut.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2+l*.05},className:"inline-block",style:{textShadow:"0 0 30px rgba(0, 245, 255, 0.4)"},children:o},l))}),ue.jsx(Ut.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"text-text-muted text-sm md:text-base mb-6 tracking-widest",children:t==="es"?"PORTAFOLIO PROFESIONAL":"PROFESSIONAL PORTFOLIO"}),ue.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"flex justify-center",children:ue.jsx("div",{className:"w-8 h-8 rounded-full border-2 border-t-neon-cyan border-r-neon-purple border-b-transparent border-l-transparent animate-spin"})})]})]})});function nA(){const{language:n}=$u(),[e,t]=me.useState(0),[r,o]=me.useState(""),[l,u]=me.useState(!1),c=me.useMemo(()=>n==="es"?["Desarrollador Jr.","Apasionado por el código","En constante aprendizaje","Trabajo en equipo","Orientado a resultados","Backend & Frontend","Código limpio","Bases de datos SQL"]:["Jr. Developer","Passionate about code","Always learning","Team player","Results-oriented","Backend & Frontend","Clean code","SQL Databases"],[n]),d={name:"Carlos Jair Castorena",available:n==="es"?"Disponible para trabajar":"Available to work",description:n==="es"?"Desarrollador de software con formación en Ingeniería en Tecnologías de la Información, en búsqueda de una oportunidad laboral para integrarme a un equipo de desarrollo y crecer profesionalmente.":"Software developer with a background in Information Technology Engineering, looking for a job opportunity to join a development team and grow professionally.",aboutMe:n==="es"?"Sobre Mí":"About Me"},h=[{name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",url:"https://github.com/jaircastorena2"},{name:"LinkedIn",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",url:"https://linkedin.com/in/carlos-jair-castorena"},{name:"Email",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",url:"mailto:jaircastorena2@gmail.com"}];return me.useEffect(()=>{const m=c[e],g=setTimeout(()=>{l?r.length>0?o(m.slice(0,r.length-1)):(u(!1),t(v=>(v+1)%c.length)):r.length<m.length?o(m.slice(0,r.length+1)):setTimeout(()=>u(!0),2e3)},l?50:100);return()=>clearTimeout(g)},[r,l,e,c]),ue.jsxs("section",{id:"hero",className:"min-h-screen relative overflow-hidden flex items-center",children:[ue.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[ue.jsx("div",{className:"absolute top-20 right-10 w-96 h-96 bg-neon-purple/15 rounded-full blur-[100px]"}),ue.jsx("div",{className:"absolute bottom-20 left-10 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[80px]"})]}),ue.jsx("div",{className:"max-w-7xl mx-auto px-6 w-full relative z-10",children:ue.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 items-center",children:[ue.jsxs("div",{className:"lg:col-span-7 order-2 lg:order-1",children:[ue.jsxs(Ut.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},className:"inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 rounded-full border border-green-500/20",children:[ue.jsxs("span",{className:"relative flex h-2 w-2",children:[ue.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),ue.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),ue.jsx("span",{className:"text-green-400 text-sm font-medium",children:d.available})]}),ue.jsx(Ut.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-neon-cyan text-xl font-semibold block mb-2",children:d.name}),ue.jsxs(Ut.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4",children:["Desarrollador de Software"," ",ue.jsx("span",{className:"bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent",children:"Entry Level"})]}),ue.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"flex items-center gap-2 text-lg md:text-xl font-mono mb-6",children:[ue.jsx("span",{className:"text-neon-purple",children:"<"}),ue.jsx("span",{className:"text-neon-cyan",children:r}),ue.jsx(Ut.span,{animate:{opacity:[1,0]},transition:{duration:.5,repeat:1/0},className:"text-white",children:"_"}),ue.jsx("span",{className:"text-neon-purple",children:"/>"})]}),ue.jsx(Ut.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-text-muted text-base md:text-lg max-w-xl mb-8",children:d.description}),ue.jsxs(Ut.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"flex flex-wrap gap-4 mb-8",children:[ue.jsx("a",{href:"#about",className:"px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-xl hover:opacity-90 transition-opacity",children:d.aboutMe}),ue.jsx("a",{href:"/cv-carlos-castorena.pdf",target:"_blank",className:"px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all",children:"📄 CV"})]}),ue.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"flex gap-3",children:h.map(m=>ue.jsx("a",{href:m.url,target:m.name!=="Email"?"_blank":void 0,rel:"noopener noreferrer",className:"w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all",children:ue.jsx("img",{src:m.icon,alt:m.name,className:"w-5 h-5"})},m.name))})]}),ue.jsx(Ut.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.3},className:"lg:col-span-5 order-1 lg:order-2 flex justify-center",children:ue.jsxs("div",{className:"relative",children:[ue.jsx("div",{className:"absolute inset-[-25px] border border-dashed border-neon-purple/20 rounded-full animate-spin-slow"}),ue.jsx(Ut.div,{animate:{rotate:-360},transition:{duration:15,repeat:1/0,ease:"linear"},className:"absolute inset-[-10px] border border-dashed border-neon-cyan/30 rounded-full"}),ue.jsx(Ut.div,{whileHover:{scale:1.05},animate:{boxShadow:["0 0 30px rgba(0, 245, 255, 0.3)","0 0 50px rgba(191, 0, 255, 0.3)","0 0 30px rgba(0, 245, 255, 0.3)"]},transition:{boxShadow:{duration:3,repeat:1/0},scale:{duration:.3}},className:"relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-neon-cyan/30 cursor-pointer",children:ue.jsx("img",{src:"/images/carlos-jair.jpg",alt:"Carlos Jair Castorena",className:"w-full h-full object-cover object-top",loading:"eager"})})]})})]})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="182",iA=0,Av=1,rA=2,Nu=1,sA=2,ba=3,Kr=0,Wn=1,rr=2,lr=0,So=1,Cv=2,Rv=3,bv=4,oA=5,Ts=100,aA=101,lA=102,uA=103,cA=104,fA=200,dA=201,hA=202,pA=203,$d=204,Zd=205,mA=206,gA=207,vA=208,_A=209,xA=210,yA=211,SA=212,MA=213,EA=214,Qd=0,Jd=1,eh=2,Ao=3,th=4,nh=5,ih=6,rh=7,Jx=0,TA=1,wA=2,Vi=0,ey=1,ty=2,ny=3,iy=4,ry=5,sy=6,oy=7,ay=300,Ps=301,Co=302,sh=303,oh=304,ic=306,ah=1e3,sr=1001,lh=1002,yn=1003,AA=1004,cu=1005,Pn=1006,id=1007,Cs=1008,di=1009,ly=1010,uy=1011,Va=1012,Ap=1013,Hi=1014,Fi=1015,dr=1016,Cp=1017,Rp=1018,za=1020,cy=35902,fy=35899,dy=1021,hy=1022,Ai=1023,hr=1026,Rs=1027,py=1028,bp=1029,Ro=1030,Pp=1031,Dp=1033,Uu=33776,Fu=33777,Ou=33778,Bu=33779,uh=35840,ch=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,gh=37488,vh=37489,_h=37490,xh=37491,yh=37808,Sh=37809,Mh=37810,Eh=37811,Th=37812,wh=37813,Ah=37814,Ch=37815,Rh=37816,bh=37817,Ph=37818,Dh=37819,Lh=37820,Ih=37821,Nh=36492,Uh=36494,Fh=36495,Oh=36283,Bh=36284,kh=36285,Vh=36286,CA=3200,RA=0,bA=1,jr="",fi="srgb",bo="srgb-linear",Yu="linear",Nt="srgb",to=7680,Pv=519,PA=512,DA=513,LA=514,Lp=515,IA=516,NA=517,Ip=518,UA=519,Dv=35044,Lv="300 es",Oi=2e3,qu=2001;function my(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ku(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function FA(){const n=Ku("canvas");return n.style.display="block",n}const Iv={};function Nv(...n){const e="THREE."+n.shift();console.log(e,...n)}function ct(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Pt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Ga(...n){const e=n.join(" ");e in Iv||(Iv[e]=!0,ct(...n))}function OA(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,zh=180/Math.PI;function qa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function BA(n,e){return(n%e+e)%e}function sd(n,e,t){return(1-t)*n+t*e}function xa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3],v=l[u+0],y=l[u+1],M=l[u+2],T=l[u+3];if(c<=0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c>=1){e[t+0]=v,e[t+1]=y,e[t+2]=M,e[t+3]=T;return}if(g!==T||d!==v||h!==y||m!==M){let S=d*v+h*y+m*M+g*T;S<0&&(v=-v,y=-y,M=-M,T=-T,S=-S);let x=1-c;if(S<.9995){const b=Math.acos(S),P=Math.sin(b);x=Math.sin(x*b)/P,c=Math.sin(c*b)/P,d=d*x+v*c,h=h*x+y*c,m=m*x+M*c,g=g*x+T*c}else{d=d*x+v*c,h=h*x+y*c,m=m*x+M*c,g=g*x+T*c;const b=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=b,h*=b,m*=b,g*=b}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],v=l[u+1],y=l[u+2],M=l[u+3];return e[t]=c*M+m*g+d*y-h*v,e[t+1]=d*M+m*v+h*g-c*y,e[t+2]=h*M+m*y+c*v-d*g,e[t+3]=m*M-c*g-d*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),g=c(l/2),v=d(r/2),y=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*y*M,this._y=h*y*g-v*m*M,this._z=h*m*M+v*y*g,this._w=h*m*g-v*y*M;break;case"YXZ":this._x=v*m*g+h*y*M,this._y=h*y*g-v*m*M,this._z=h*m*M-v*y*g,this._w=h*m*g+v*y*M;break;case"ZXY":this._x=v*m*g-h*y*M,this._y=h*y*g+v*m*M,this._z=h*m*M+v*y*g,this._w=h*m*g-v*y*M;break;case"ZYX":this._x=v*m*g-h*y*M,this._y=h*y*g+v*m*M,this._z=h*m*M-v*y*g,this._w=h*m*g+v*y*M;break;case"YZX":this._x=v*m*g+h*y*M,this._y=h*y*g+v*m*M,this._z=h*m*M-v*y*g,this._w=h*m*g-v*y*M;break;case"XZY":this._x=v*m*g-h*y*M,this._y=h*y*g-v*m*M,this._z=h*m*M+v*y*g,this._w=h*m*g+v*y*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=r+c+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-h)*y,this._z=(u-o)*y}else if(r>c&&r>g){const y=2*Math.sqrt(1+r-c-g);this._w=(m-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+h)/y}else if(c>g){const y=2*Math.sqrt(1+c-r-g);this._w=(l-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-r-c);this._w=(u-o)/y,this._x=(l+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,c=this.dot(e);c<0&&(r=-r,o=-o,l=-l,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*m,this.y=r+d*m+c*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new te,Uv=new Ka;class dt{constructor(e,t,r,o,l,u,c,d,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],g=r[7],v=r[2],y=r[5],M=r[8],T=o[0],S=o[3],x=o[6],b=o[1],P=o[4],D=o[7],L=o[2],N=o[5],O=o[8];return l[0]=u*T+c*b+d*L,l[3]=u*S+c*P+d*N,l[6]=u*x+c*D+d*O,l[1]=h*T+m*b+g*L,l[4]=h*S+m*P+g*N,l[7]=h*x+m*D+g*O,l[2]=v*T+y*b+M*L,l[5]=v*S+y*P+M*N,l[8]=v*x+y*D+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,v=c*d-m*l,y=h*l-u*d,M=t*g+r*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(o*h-m*r)*T,e[2]=(c*r-o*u)*T,e[3]=v*T,e[4]=(m*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=y*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ad.makeScale(e,t)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new dt,Fv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kA(){const n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=ur(o.r),o.g=ur(o.g),o.b=ur(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=Mo(o.r),o.g=Mo(o.g),o.b=Mo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?Yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[bo]:{primaries:e,whitePoint:r,transfer:Yu,toXYZ:Fv,fromXYZ:Ov,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Fv,fromXYZ:Ov,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const At=kA();function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let no;class VA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{no===void 0&&(no=Ku("canvas")),no.width=e.width,no.height=e.height;const o=no.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=no}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ku("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ur(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zA=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(ld(o[u].image)):l.push(ld(o[u]))}else l=ld(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ld(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?VA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let GA=0;const ud=new te;class Fn extends Io{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=sr,o=sr,l=Pn,u=Cs,c=Ai,d=di,h=Fn.DEFAULT_ANISOTROPY,m=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=qa(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ay)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ay;Fn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,r=0,o=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],y=d[5],M=d[9],T=d[2],S=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,D=(y+1)/2,L=(x+1)/2,N=(m+v)/4,O=(g+T)/4,z=(M+S)/4;return P>D&&P>L?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=N/r,l=O/r):D>L?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=N/o,l=z/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=O/l,o=z/l),this.set(r,o,l,t),this}let b=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(v-m)*(v-m));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(g-T)/b,this.z=(v-m)/b,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HA extends Io{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Fn(o);this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Np(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends HA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gy extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WA extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(l,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),du.subVectors(this.max,ya),io.subVectors(e.a,ya),ro.subVectors(e.b,ya),so.subVectors(e.c,ya),Or.subVectors(ro,io),Br.subVectors(so,ro),ms.subVectors(io,so);let t=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-ms.z,ms.y,Or.z,0,-Or.x,Br.z,0,-Br.x,ms.z,0,-ms.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-ms.y,ms.x,0];return!cd(t,io,ro,so,du)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,io,ro,so,du))?!1:(hu.crossVectors(Or,Br),t=[hu.x,hu.y,hu.z],cd(t,io,ro,so,du))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new te,new te,new te,new te,new te,new te,new te,new te],yi=new te,fu=new $a,io=new te,ro=new te,so=new te,Or=new te,Br=new te,ms=new te,ya=new te,du=new te,hu=new te,gs=new te;function cd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){gs.fromArray(n,l);const c=o.x*Math.abs(gs.x)+o.y*Math.abs(gs.y)+o.z*Math.abs(gs.z),d=e.dot(gs),h=t.dot(gs),m=r.dot(gs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const jA=new $a,Sa=new te,fd=new te;class Up{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):jA.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Sa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(fd)),this.expandByPoint(Sa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new te,dd=new te,pu=new te,kr=new te,hd=new te,mu=new te,pd=new te;class XA{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dd.copy(e).add(t).multiplyScalar(.5),pu.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(dd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(pu),c=kr.dot(this.direction),d=-kr.dot(pu),h=kr.lengthSq(),m=Math.abs(1-u*u);let g,v,y,M;if(m>0)if(g=u*d-c,v=u*c-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const T=1/m;g*=T,v*=T,y=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),y=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),y=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),y=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(dd).addScaledVector(pu,v),y}intersectSphere(e,t){er.subVectors(e.center,this.origin);const r=er.dot(this.direction),o=er.dot(er)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),mu.subVectors(r,e),pd.crossVectors(hd,mu);let u=this.direction.dot(pd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;kr.subVectors(this.origin,e);const d=c*this.direction.dot(mu.crossVectors(kr,mu));if(d<0)return null;const h=c*this.direction.dot(hd.cross(kr));if(h<0||d+h>u)return null;const m=-c*kr.dot(pd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,r,o,l,u,c,d,h,m,g,v,y,M,T,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,g,v,y,M,T,S)}set(e,t,r,o,l,u,c,d,h,m,g,v,y,M,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=m,x[10]=g,x[14]=v,x[3]=y,x[7]=M,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),l=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,y=u*g,M=c*m,T=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=y+M*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,y=d*g,M=h*m,T=h*g;t[0]=v+T*c,t[4]=M*c-y,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=y*c-M,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,y=d*g,M=h*m,T=h*g;t[0]=v-T*c,t[4]=-u*g,t[8]=M+y*c,t[1]=y+M*c,t[5]=u*m,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,y=u*g,M=c*m,T=c*g;t[0]=d*m,t[4]=M*h-y,t[8]=v*h+T,t[1]=d*g,t[5]=T*h+v,t[9]=y*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*h,M=c*d,T=c*h;t[0]=d*m,t[4]=T-v*g,t[8]=M*g+y,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=y*g+M,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*d,y=u*h,M=c*d,T=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+T,t[5]=u*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=c*m,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YA,e,qA)}lookAt(e,t,r){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Vr.crossVectors(r,$n),Vr.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Vr.crossVectors(r,$n)),Vr.normalize(),gu.crossVectors($n,Vr),o[0]=Vr.x,o[4]=gu.x,o[8]=$n.x,o[1]=Vr.y,o[5]=gu.y,o[9]=$n.y,o[2]=Vr.z,o[6]=gu.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],g=r[5],v=r[9],y=r[13],M=r[2],T=r[6],S=r[10],x=r[14],b=r[3],P=r[7],D=r[11],L=r[15],N=o[0],O=o[4],z=o[8],A=o[12],R=o[1],V=o[5],re=o[9],Z=o[13],se=o[2],ce=o[6],K=o[10],Y=o[14],W=o[3],de=o[7],ne=o[11],F=o[15];return l[0]=u*N+c*R+d*se+h*W,l[4]=u*O+c*V+d*ce+h*de,l[8]=u*z+c*re+d*K+h*ne,l[12]=u*A+c*Z+d*Y+h*F,l[1]=m*N+g*R+v*se+y*W,l[5]=m*O+g*V+v*ce+y*de,l[9]=m*z+g*re+v*K+y*ne,l[13]=m*A+g*Z+v*Y+y*F,l[2]=M*N+T*R+S*se+x*W,l[6]=M*O+T*V+S*ce+x*de,l[10]=M*z+T*re+S*K+x*ne,l[14]=M*A+T*Z+S*Y+x*F,l[3]=b*N+P*R+D*se+L*W,l[7]=b*O+P*V+D*ce+L*de,l[11]=b*z+P*re+D*K+L*ne,l[15]=b*A+P*Z+D*Y+L*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],y=e[14],M=e[3],T=e[7],S=e[11],x=e[15],b=d*y-h*v,P=c*y-h*g,D=c*v-d*g,L=u*y-h*m,N=u*v-d*m,O=u*g-c*m;return t*(T*b-S*P+x*D)-r*(M*b-S*L+x*N)+o*(M*P-T*L+x*O)-l*(M*D-T*N+S*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],y=e[11],M=e[12],T=e[13],S=e[14],x=e[15],b=g*S*h-T*v*h+T*d*y-c*S*y-g*d*x+c*v*x,P=M*v*h-m*S*h-M*d*y+u*S*y+m*d*x-u*v*x,D=m*T*h-M*g*h+M*c*y-u*T*y-m*c*x+u*g*x,L=M*g*d-m*T*d-M*c*v+u*T*v+m*c*S-u*g*S,N=t*b+r*P+o*D+l*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return e[0]=b*O,e[1]=(T*v*l-g*S*l-T*o*y+r*S*y+g*o*x-r*v*x)*O,e[2]=(c*S*l-T*d*l+T*o*h-r*S*h-c*o*x+r*d*x)*O,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*y-r*d*y)*O,e[4]=P*O,e[5]=(m*S*l-M*v*l+M*o*y-t*S*y-m*o*x+t*v*x)*O,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*x-t*d*x)*O,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*y+t*d*y)*O,e[8]=D*O,e[9]=(M*g*l-m*T*l-M*r*y+t*T*y+m*r*x-t*g*x)*O,e[10]=(u*T*l-M*c*l+M*r*h-t*T*h-u*r*x+t*c*x)*O,e[11]=(m*c*l-u*g*l-m*r*h+t*g*h+u*r*y-t*c*y)*O,e[12]=L*O,e[13]=(m*T*o-M*g*o+M*r*v-t*T*v-m*r*S+t*g*S)*O,e[14]=(M*c*o-u*T*o-M*r*d+t*T*d+u*r*S-t*c*S)*O,e[15]=(u*g*o-m*c*o+m*r*d-t*g*d-u*r*v+t*c*v)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,g=c+c,v=l*h,y=l*m,M=l*g,T=u*m,S=u*g,x=c*g,b=d*h,P=d*m,D=d*g,L=r.x,N=r.y,O=r.z;return o[0]=(1-(T+x))*L,o[1]=(y+D)*L,o[2]=(M-P)*L,o[3]=0,o[4]=(y-D)*N,o[5]=(1-(v+x))*N,o[6]=(S+b)*N,o[7]=0,o[8]=(M+P)*O,o[9]=(S-b)*O,o[10]=(1-(v+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=oo.set(o[0],o[1],o[2]).length();const u=oo.set(o[4],o[5],o[6]).length(),c=oo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Si.copy(this);const h=1/l,m=1/u,g=1/c;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=m,Si.elements[5]*=m,Si.elements[6]*=m,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,t.setFromRotationMatrix(Si),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Oi,d=!1){const h=this.elements,m=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let M,T;if(d)M=l/(u-l),T=u*l/(u-l);else if(c===Oi)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(c===qu)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Oi,d=!1){const h=this.elements,m=2/(t-e),g=2/(r-o),v=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,T;if(d)M=1/(u-l),T=u/(u-l);else if(c===Oi)M=-2/(u-l),T=-(u+l)/(u-l);else if(c===qu)M=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const oo=new te,Si=new sn,YA=new te(0,0,0),qA=new te(1,1,1),Vr=new te,gu=new te,$n=new te,Bv=new sn,kv=new Ka;class pr{constructor(e=0,t=0,r=0,o=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Bv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kv.setFromEuler(this),this.setFromQuaternion(kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class vy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KA=0;const Vv=new te,ao=new Ka,tr=new sn,vu=new te,Ma=new te,$A=new te,ZA=new Ka,zv=new te(1,0,0),Gv=new te(0,1,0),Hv=new te(0,0,1),Wv={type:"added"},QA={type:"removed"},lo={type:"childadded",child:null},md={type:"childremoved",child:null};class Jn extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new te,t=new pr,r=new Ka,o=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new dt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(zv,e)}rotateY(e){return this.rotateOnAxis(Gv,e)}rotateZ(e){return this.rotateOnAxis(Hv,e)}translateOnAxis(e,t){return Vv.copy(e).applyQuaternion(this.quaternion),this.position.add(Vv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zv,e)}translateY(e){return this.translateOnAxis(Gv,e)}translateZ(e){return this.translateOnAxis(Hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vu.copy(e):vu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ma,vu,this.up):tr.lookAt(vu,Ma,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(tr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wv),lo.child=e,this.dispatchEvent(lo),lo.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QA),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wv),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,$A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,ZA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),y=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new te(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new te,nr=new te,gd=new te,ir=new te,uo=new te,co=new te,jv=new te,vd=new te,_d=new te,xd=new te,yd=new tn,Sd=new tn,Md=new tn;class wi{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),nr.subVectors(r,t),gd.subVectors(e,t);const u=Mi.dot(Mi),c=Mi.dot(nr),d=Mi.dot(gd),h=nr.dot(nr),m=nr.dot(gd),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(h*d-c*m)*v,M=(u*m-c*d)*v;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ir.x),d.addScaledVector(u,ir.y),d.addScaledVector(c,ir.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(yd,l.x),u.addScaledVector(Sd,l.y),u.addScaledVector(Md,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),nr.subVectors(e,t),Mi.cross(nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;uo.subVectors(o,r),co.subVectors(l,r),vd.subVectors(e,r);const d=uo.dot(vd),h=co.dot(vd);if(d<=0&&h<=0)return t.copy(r);_d.subVectors(e,o);const m=uo.dot(_d),g=co.dot(_d);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(uo,u);xd.subVectors(e,l);const y=uo.dot(xd),M=co.dot(xd);if(M>=0&&y<=M)return t.copy(l);const T=y*h-d*M;if(T<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(co,c);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return jv.subVectors(l,o),c=(g-m)/(g-m+(y-M)),t.copy(o).addScaledVector(jv,c);const x=1/(S+T+v);return u=T*x,c=v*x,t.copy(r).addScaledVector(uo,u).addScaledVector(co,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Ed(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=BA(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ed(u,l,e+1/3),this.g=Ed(u,l,e),this.b=Ed(u,l,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=_y[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return At.workingToColorSpace(Cn.copy(this),e),Math.round(yt(Cn.r*255,0,255))*65536+Math.round(yt(Cn.g*255,0,255))*256+Math.round(yt(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){At.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(_u);const r=sd(zr.h,_u.h,t),o=sd(zr.s,_u.s,t),l=sd(zr.l,_u.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ot;Ot.NAMES=_y;let JA=0;class rc extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=So,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Zd,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$d&&(r.blendSrc=this.blendSrc),this.blendDst!==Zd&&(r.blendDst=this.blendDst),this.blendEquation!==Ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(r.stencilFail=this.stencilFail),this.stencilZFail!==to&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xy extends rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new te,xu=new St;let eC=0;class Gi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Dv,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)xu.fromBufferAttribute(this,t),xu.applyMatrix3(e),this.setXY(t,xu.x,xu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=xa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dv&&(e.usage=this.usage),e}}class yy extends Gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Sy extends Gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class cr extends Gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let tC=0;const ui=new sn,Td=new Jn,fo=new te,Zn=new $a,Ea=new $a,gn=new te;class gr extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tC++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(my(e)?Sy:yy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];Ea.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(Zn.min,Ea.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,Ea.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(Ea.min),Zn.expandByPoint(Ea.max))}Zn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)gn.fromBufferAttribute(c,h),d&&(fo.fromBufferAttribute(e,h),gn.add(fo)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<r.count;z++)c[z]=new te,d[z]=new te;const h=new te,m=new te,g=new te,v=new St,y=new St,M=new St,T=new te,S=new te;function x(z,A,R){h.fromBufferAttribute(r,z),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,z),y.fromBufferAttribute(l,A),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),y.sub(v),M.sub(v);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(V),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(V),c[z].add(T),c[A].add(T),c[R].add(T),d[z].add(S),d[A].add(S),d[R].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,A=b.length;z<A;++z){const R=b[z],V=R.start,re=R.count;for(let Z=V,se=V+re;Z<se;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new te,D=new te,L=new te,N=new te;function O(z){L.fromBufferAttribute(o,z),N.copy(L);const A=c[z];P.copy(A),P.sub(L.multiplyScalar(L.dot(A))).normalize(),D.crossVectors(N,A);const V=D.dot(d[z])<0?-1:1;u.setXYZW(z,P.x,P.y,P.z,V)}for(let z=0,A=b.length;z<A;++z){const R=b[z],V=R.start,re=R.count;for(let Z=V,se=V+re;Z<se;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new te,l=new te,u=new te,c=new te,d=new te,h=new te,m=new te,g=new te;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,v=new h.constructor(d.length*m);let y=0,M=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?y=d[T]*c.data.stride+c.offset:y=d[T]*m;for(let x=0;x<m;x++)v[M++]=h[y++]}return new Gi(v,m,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,g=h.length;m<g;m++){const v=h[m],y=e(v,r);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xv=new sn,vs=new XA,yu=new Up,Yv=new te,Su=new te,Mu=new te,Eu=new te,wd=new te,Tu=new te,qv=new te,wu=new te;class Wi extends Jn{constructor(e=new gr,t=new xy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){Tu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],g=l[d];m!==0&&(wd.fromBufferAttribute(g,e),u?Tu.addScaledVector(wd,m):Tu.addScaledVector(wd.sub(t),m))}t.add(Tu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yu.copy(r.boundingSphere),yu.applyMatrix4(l),vs.copy(e.ray).recast(e.near),!(yu.containsPoint(vs.origin)===!1&&(vs.intersectSphere(yu,Yv)===null||vs.origin.distanceToSquared(Yv)>(e.far-e.near)**2))&&(Xv.copy(l).invert(),vs.copy(e.ray).applyMatrix4(Xv),!(r.boundingBox!==null&&vs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],x=u[S.materialIndex],b=Math.max(S.start,y.start),P=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let D=b,L=P;D<L;D+=3){const N=c.getX(D),O=c.getX(D+1),z=c.getX(D+2);o=Au(this,x,e,r,h,m,g,N,O,z),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(c.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const b=c.getX(S),P=c.getX(S+1),D=c.getX(S+2);o=Au(this,u,e,r,h,m,g,b,P,D),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],x=u[S.materialIndex],b=Math.max(S.start,y.start),P=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=b,L=P;D<L;D+=3){const N=D,O=D+1,z=D+2;o=Au(this,x,e,r,h,m,g,N,O,z),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const b=S,P=S+1,D=S+2;o=Au(this,u,e,r,h,m,g,b,P,D),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function nC(n,e,t,r,o,l,u,c){let d;if(e.side===Wn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Kr,c),d===null)return null;wu.copy(c),wu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(wu);return h<t.near||h>t.far?null:{distance:h,point:wu.clone(),object:n}}function Au(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,Su),n.getVertexPosition(d,Mu),n.getVertexPosition(h,Eu);const m=nC(n,e,t,r,Su,Mu,Eu,qv);if(m){const g=new te;wi.getBarycoord(qv,Su,Mu,Eu,g),o&&(m.uv=wi.getInterpolatedAttribute(o,c,d,h,g,new St)),l&&(m.uv1=wi.getInterpolatedAttribute(l,c,d,h,g,new St)),u&&(m.normal=wi.getInterpolatedAttribute(u,c,d,h,g,new te),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new te,materialIndex:0};wi.getNormal(Su,Mu,Eu,v.normal),m.face=v,m.barycoord=g}return m}class Za extends gr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new cr(h,3)),this.setAttribute("normal",new cr(m,3)),this.setAttribute("uv",new cr(g,2));function M(T,S,x,b,P,D,L,N,O,z,A){const R=D/O,V=L/z,re=D/2,Z=L/2,se=N/2,ce=O+1,K=z+1;let Y=0,W=0;const de=new te;for(let ne=0;ne<K;ne++){const F=ne*V-Z;for(let oe=0;oe<ce;oe++){const we=oe*R-re;de[T]=we*b,de[S]=F*P,de[x]=se,h.push(de.x,de.y,de.z),de[T]=0,de[S]=0,de[x]=N>0?1:-1,m.push(de.x,de.y,de.z),g.push(oe/O),g.push(1-ne/z),Y+=1}}for(let ne=0;ne<z;ne++)for(let F=0;F<O;F++){const oe=v+F+ce*ne,we=v+F+ce*(ne+1),He=v+(F+1)+ce*(ne+1),Ke=v+(F+1)+ce*ne;d.push(oe,we,Ke),d.push(we,He,Ke),W+=6}c.addGroup(y,W,A),y+=W,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const r=Po(n[t]);for(const o in r)e[o]=r[o]}return e}function iC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function My(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const rC={clone:Po,merge:Un};var sC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sC,this.fragmentShader=oC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=iC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ey extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new te,Kv=new St,$v=new St;class Ti extends Ey{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,Kv,$v),t.subVectors($v,Kv)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,po=1;class aC extends Jn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(ho,po,e,t);o.layers=this.layers,this.add(o);const l=new Ti(ho,po,e,t);l.layers=this.layers,this.add(l);const u=new Ti(ho,po,e,t);u.layers=this.layers,this.add(u);const c=new Ti(ho,po,e,t);c.layers=this.layers,this.add(c);const d=new Ti(ho,po,e,t);d.layers=this.layers,this.add(d);const h=new Ti(ho,po,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Ty extends Fn{constructor(e=[],t=Ps,r,o,l,u,c,d,h,m){super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ty(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Za(5,5,5),l=new Ci({name:"CubemapFromEquirect",uniforms:Po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:lr});l.uniforms.tEquirect.value=t;const u=new Wi(o,l),c=t.minFilter;return t.minFilter===Cs&&(t.minFilter=Pn),new aC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Cu extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lC={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),x=this._getHandJoint(h,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(lC)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Cu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class uC extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cC extends Fn{constructor(e=null,t=1,r=1,o,l,u,c,d,h=yn,m=yn,g,v){super(null,u,c,d,h,m,o,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new te,fC=new te,dC=new dt;class Es{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Cd.subVectors(r,t).cross(fC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Cd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||dC.getNormalMatrix(e),o=this.coplanarPoint(Cd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Up,hC=new St(.5,.5),Ru=new te;class Ay{constructor(e=new Es,t=new Es,r=new Es,o=new Es,l=new Es,u=new Es){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const o=this.planes,l=e.elements,u=l[0],c=l[1],d=l[2],h=l[3],m=l[4],g=l[5],v=l[6],y=l[7],M=l[8],T=l[9],S=l[10],x=l[11],b=l[12],P=l[13],D=l[14],L=l[15];if(o[0].setComponents(h-u,y-m,x-M,L-b).normalize(),o[1].setComponents(h+u,y+m,x+M,L+b).normalize(),o[2].setComponents(h+c,y+g,x+T,L+P).normalize(),o[3].setComponents(h-c,y-g,x-T,L-P).normalize(),r)o[4].setComponents(d,v,S,D).normalize(),o[5].setComponents(h-d,y-v,x-S,L-D).normalize();else if(o[4].setComponents(h-d,y-v,x-S,L-D).normalize(),t===Oi)o[5].setComponents(h+d,y+v,x+S,L+D).normalize();else if(t===qu)o[5].setComponents(d,v,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const t=hC.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ru.x=o.normal.x>0?e.max.x:e.min.x,Ru.y=o.normal.y>0?e.max.y:e.min.y,Ru.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ha extends Fn{constructor(e,t,r=Hi,o,l,u,c=yn,d=yn,h,m=hr,g=1){if(m!==hr&&m!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pC extends Ha{constructor(e,t=Hi,r=Ps,o,l,u=yn,c=yn,d,h=hr){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,r,o,l,u,c,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cy extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends gr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,g=e/c,v=t/d,y=[],M=[],T=[],S=[];for(let x=0;x<m;x++){const b=x*v-u;for(let P=0;P<h;P++){const D=P*g-l;M.push(D,-b,0),T.push(0,0,1),S.push(P/c),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let b=0;b<c;b++){const P=b+h*x,D=b+h*(x+1),L=b+1+h*(x+1),N=b+1+h*x;y.push(P,D,N),y.push(D,L,N)}this.setIndex(y),this.setAttribute("position",new cr(M,3)),this.setAttribute("normal",new cr(T,3)),this.setAttribute("uv",new cr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class mC extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gC extends rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vC extends rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fp extends Ey{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _C extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zv(n,e,t,r){const o=yC(r);switch(t){case dy:return n*e;case py:return n*e/o.components*o.byteLength;case bp:return n*e/o.components*o.byteLength;case Ro:return n*e*2/o.components*o.byteLength;case Pp:return n*e*2/o.components*o.byteLength;case hy:return n*e*3/o.components*o.byteLength;case Ai:return n*e*4/o.components*o.byteLength;case Dp:return n*e*4/o.components*o.byteLength;case Uu:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ou:case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:case dh:return Math.max(n,16)*Math.max(e,8)/4;case uh:case fh:return Math.max(n,8)*Math.max(e,8)/2;case hh:case ph:case gh:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mh:case _h:case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Uh:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oh:case Bh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yC(n){switch(n){case di:case ly:return{byteLength:1,components:1};case Va:case uy:case dr:return{byteLength:2,components:1};case Cp:case Rp:return{byteLength:2,components:4};case Hi:case Ap:case Fi:return{byteLength:4,components:1};case cy:case fy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ry(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function SC(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],T=g[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const T=g[y];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var MC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EC=`#ifdef USE_ALPHAHASH
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
#endif`,TC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RC=`#ifdef USE_AOMAP
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
#endif`,bC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PC=`#ifdef USE_BATCHING
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
#endif`,DC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UC=`#ifdef USE_IRIDESCENCE
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
#endif`,FC=`#ifdef USE_BUMPMAP
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
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jC=`#define PI 3.141592653589793
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
} // validated`,XC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YC=`vec3 transformedNormal = objectNormal;
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
#endif`,qC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$C=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QC="gl_FragColor = linearToOutputTexel( gl_FragColor );",JC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eR=`#ifdef USE_ENVMAP
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
#endif`,tR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
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
#endif`,iR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rR=`#ifdef USE_ENVMAP
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
#endif`,sR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uR=`#ifdef USE_GRADIENTMAP
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
}`,cR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hR=`uniform bool receiveShadow;
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
#endif`,pR=`#ifdef USE_ENVMAP
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
#endif`,mR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_R=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xR=`PhysicalMaterial material;
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
#endif`,yR=`uniform sampler2D dfgLUT;
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
}`,SR=`
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
#endif`,MR=`#if defined( RE_IndirectDiffuse )
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
#endif`,ER=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DR=`#if defined( USE_POINTS_UV )
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
#endif`,LR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OR=`#ifdef USE_MORPHTARGETS
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
#endif`,BR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WR=`#ifdef USE_NORMALMAP
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
#endif`,jR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$R=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ob=`float getShadowMask() {
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
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
}`,bb=`#define DISTANCE
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
}`,Pb=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ob=`#define LAMBERT
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
}`,Bb=`#define LAMBERT
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
}`,kb=`#define MATCAP
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
}`,Vb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Gb=`#define NORMAL
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
}`,Hb=`#define PHONG
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
}`,Wb=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,Xb=`#define STANDARD
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
}`,Yb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Kb=`uniform float size;
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
}`,$b=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Qb=`uniform vec3 color;
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
}`,Jb=`uniform float rotation;
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
}`,eP=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:MC,alphahash_pars_fragment:EC,alphamap_fragment:TC,alphamap_pars_fragment:wC,alphatest_fragment:AC,alphatest_pars_fragment:CC,aomap_fragment:RC,aomap_pars_fragment:bC,batching_pars_vertex:PC,batching_vertex:DC,begin_vertex:LC,beginnormal_vertex:IC,bsdfs:NC,iridescence_fragment:UC,bumpmap_pars_fragment:FC,clipping_planes_fragment:OC,clipping_planes_pars_fragment:BC,clipping_planes_pars_vertex:kC,clipping_planes_vertex:VC,color_fragment:zC,color_pars_fragment:GC,color_pars_vertex:HC,color_vertex:WC,common:jC,cube_uv_reflection_fragment:XC,defaultnormal_vertex:YC,displacementmap_pars_vertex:qC,displacementmap_vertex:KC,emissivemap_fragment:$C,emissivemap_pars_fragment:ZC,colorspace_fragment:QC,colorspace_pars_fragment:JC,envmap_fragment:eR,envmap_common_pars_fragment:tR,envmap_pars_fragment:nR,envmap_pars_vertex:iR,envmap_physical_pars_fragment:pR,envmap_vertex:rR,fog_vertex:sR,fog_pars_vertex:oR,fog_fragment:aR,fog_pars_fragment:lR,gradientmap_pars_fragment:uR,lightmap_pars_fragment:cR,lights_lambert_fragment:fR,lights_lambert_pars_fragment:dR,lights_pars_begin:hR,lights_toon_fragment:mR,lights_toon_pars_fragment:gR,lights_phong_fragment:vR,lights_phong_pars_fragment:_R,lights_physical_fragment:xR,lights_physical_pars_fragment:yR,lights_fragment_begin:SR,lights_fragment_maps:MR,lights_fragment_end:ER,logdepthbuf_fragment:TR,logdepthbuf_pars_fragment:wR,logdepthbuf_pars_vertex:AR,logdepthbuf_vertex:CR,map_fragment:RR,map_pars_fragment:bR,map_particle_fragment:PR,map_particle_pars_fragment:DR,metalnessmap_fragment:LR,metalnessmap_pars_fragment:IR,morphinstance_vertex:NR,morphcolor_vertex:UR,morphnormal_vertex:FR,morphtarget_pars_vertex:OR,morphtarget_vertex:BR,normal_fragment_begin:kR,normal_fragment_maps:VR,normal_pars_fragment:zR,normal_pars_vertex:GR,normal_vertex:HR,normalmap_pars_fragment:WR,clearcoat_normal_fragment_begin:jR,clearcoat_normal_fragment_maps:XR,clearcoat_pars_fragment:YR,iridescence_pars_fragment:qR,opaque_fragment:KR,packing:$R,premultiplied_alpha_fragment:ZR,project_vertex:QR,dithering_fragment:JR,dithering_pars_fragment:eb,roughnessmap_fragment:tb,roughnessmap_pars_fragment:nb,shadowmap_pars_fragment:ib,shadowmap_pars_vertex:rb,shadowmap_vertex:sb,shadowmask_pars_fragment:ob,skinbase_vertex:ab,skinning_pars_vertex:lb,skinning_vertex:ub,skinnormal_vertex:cb,specularmap_fragment:fb,specularmap_pars_fragment:db,tonemapping_fragment:hb,tonemapping_pars_fragment:pb,transmission_fragment:mb,transmission_pars_fragment:gb,uv_pars_fragment:vb,uv_pars_vertex:_b,uv_vertex:xb,worldpos_vertex:yb,background_vert:Sb,background_frag:Mb,backgroundCube_vert:Eb,backgroundCube_frag:Tb,cube_vert:wb,cube_frag:Ab,depth_vert:Cb,depth_frag:Rb,distance_vert:bb,distance_frag:Pb,equirect_vert:Db,equirect_frag:Lb,linedashed_vert:Ib,linedashed_frag:Nb,meshbasic_vert:Ub,meshbasic_frag:Fb,meshlambert_vert:Ob,meshlambert_frag:Bb,meshmatcap_vert:kb,meshmatcap_frag:Vb,meshnormal_vert:zb,meshnormal_frag:Gb,meshphong_vert:Hb,meshphong_frag:Wb,meshphysical_vert:jb,meshphysical_frag:Xb,meshtoon_vert:Yb,meshtoon_frag:qb,points_vert:Kb,points_frag:$b,shadow_vert:Zb,shadow_frag:Qb,sprite_vert:Jb,sprite_frag:eP},Fe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const bu={r:0,b:0,g:0},xs=new pr,tP=new sn;function nP(n,e,t,r,o,l,u){const c=new Ot(0);let d=l===!0?0:1,h,m,g=null,v=0,y=null;function M(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?t:e).get(D)),D}function T(P){let D=!1;const L=M(P);L===null?x(c,d):L&&L.isColor&&(x(L,1),D=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(P,D){const L=M(D);L&&(L.isCubeTexture||L.mapping===ic)?(m===void 0&&(m=new Wi(new Za(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Po(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),xs.copy(D.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(tP.makeRotationFromEuler(xs)),m.material.toneMapped=At.getTransfer(L.colorSpace)!==Nt,(g!==L||v!==L.version||y!==n.toneMapping)&&(m.material.needsUpdate=!0,g=L,v=L.version,y=n.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Wi(new Qa(2,2),new Ci({name:"BackgroundMaterial",uniforms:Po(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=At.getTransfer(L.colorSpace)!==Nt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||y!==n.toneMapping)&&(h.material.needsUpdate=!0,g=L,v=L.version,y=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function x(P,D){P.getRGB(bu,My(n)),r.buffers.color.setClear(bu.r,bu.g,bu.b,D,u)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,D=1){c.set(P),d=D,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(c,d)},render:T,addToRenderList:S,dispose:b}}function iP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(R,V,re,Z,se){let ce=!1;const K=g(Z,re,V);l!==K&&(l=K,h(l.object)),ce=y(R,Z,re,se),ce&&M(R,Z,re,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,D(R,V,re,Z),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function g(R,V,re){const Z=re.wireframe===!0;let se=r[R.id];se===void 0&&(se={},r[R.id]=se);let ce=se[V.id];ce===void 0&&(ce={},se[V.id]=ce);let K=ce[Z];return K===void 0&&(K=v(d()),ce[Z]=K),K}function v(R){const V=[],re=[],Z=[];for(let se=0;se<t;se++)V[se]=0,re[se]=0,Z[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:re,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,V,re,Z){const se=l.attributes,ce=V.attributes;let K=0;const Y=re.getAttributes();for(const W in Y)if(Y[W].location>=0){const ne=se[W];let F=ce[W];if(F===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),ne===void 0||ne.attribute!==F||F&&ne.data!==F.data)return!0;K++}return l.attributesNum!==K||l.index!==Z}function M(R,V,re,Z){const se={},ce=V.attributes;let K=0;const Y=re.getAttributes();for(const W in Y)if(Y[W].location>=0){let ne=ce[W];ne===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const F={};F.attribute=ne,ne&&ne.data&&(F.data=ne.data),se[W]=F,K++}l.attributes=se,l.attributesNum=K,l.index=Z}function T(){const R=l.newAttributes;for(let V=0,re=R.length;V<re;V++)R[V]=0}function S(R){x(R,0)}function x(R,V){const re=l.newAttributes,Z=l.enabledAttributes,se=l.attributeDivisors;re[R]=1,Z[R]===0&&(n.enableVertexAttribArray(R),Z[R]=1),se[R]!==V&&(n.vertexAttribDivisor(R,V),se[R]=V)}function b(){const R=l.newAttributes,V=l.enabledAttributes;for(let re=0,Z=V.length;re<Z;re++)V[re]!==R[re]&&(n.disableVertexAttribArray(re),V[re]=0)}function P(R,V,re,Z,se,ce,K){K===!0?n.vertexAttribIPointer(R,V,re,se,ce):n.vertexAttribPointer(R,V,re,Z,se,ce)}function D(R,V,re,Z){T();const se=Z.attributes,ce=re.getAttributes(),K=V.defaultAttributeValues;for(const Y in ce){const W=ce[Y];if(W.location>=0){let de=se[Y];if(de===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const ne=de.normalized,F=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const we=oe.buffer,He=oe.type,Ke=oe.bytesPerElement,J=He===n.INT||He===n.UNSIGNED_INT||de.gpuType===Ap;if(de.isInterleavedBufferAttribute){const fe=de.data,_e=fe.stride,Ie=de.offset;if(fe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<W.locationSize;Pe++)x(W.location+Pe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)S(W.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Pe=0;Pe<W.locationSize;Pe++)P(W.location+Pe,F/W.locationSize,He,ne,_e*Ke,(Ie+F/W.locationSize*Pe)*Ke,J)}else{if(de.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)x(W.location+fe,de.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let fe=0;fe<W.locationSize;fe++)S(W.location+fe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let fe=0;fe<W.locationSize;fe++)P(W.location+fe,F/W.locationSize,He,ne,F*Ke,F/W.locationSize*fe*Ke,J)}}else if(K!==void 0){const ne=K[Y];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(W.location,ne);break;case 3:n.vertexAttrib3fv(W.location,ne);break;case 4:n.vertexAttrib4fv(W.location,ne);break;default:n.vertexAttrib1fv(W.location,ne)}}}}b()}function L(){z();for(const R in r){const V=r[R];for(const re in V){const Z=V[re];for(const se in Z)m(Z[se].object),delete Z[se];delete V[re]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const re in V){const Z=V[re];for(const se in Z)m(Z[se].object),delete Z[se];delete V[re]}delete r[R.id]}function O(R){for(const V in r){const re=r[V];if(re[R.id]===void 0)continue;const Z=re[R.id];for(const se in Z)m(Z[se].object),delete Z[se];delete re[R.id]}}function z(){A(),u=!0,l!==o&&(l=o,h(l.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:z,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:b}}function rP(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,r,1)}function d(h,m,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*v[T];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function sP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ai&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){const z=O===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==di&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Fi&&!z)}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(ct("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:D,maxSamples:L,samples:N}}function oP(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Es,c=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||o;return o=v,r=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,x=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const b=l?0:r,P=b*4;let D=x.clippingState||null;d.value=D,D=m(M,v,P,y);for(let L=0;L!==P;++L)D[L]=t[L];x.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,y,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const x=y+T*4,b=v.matrixWorldInverse;c.getNormalMatrix(b),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,D=y;P!==T;++P,D+=4)u.copy(g[P]).applyMatrix4(b,c),u.normal.toArray(S,D),S[D+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function aP(n){let e=new WeakMap;function t(u,c){return c===sh?u.mapping=Ps:c===oh&&(u.mapping=Co),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===sh||c===oh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new wy(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xr=4,Qv=[.125,.215,.35,.446,.526,.582],ws=20,lP=256,Ta=new Fp,Jv=new Ot;let Rd=null,bd=0,Pd=0,Dd=!1;const uP=new te;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:c=uP}=l;Rd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,bd,Pd),this._renderer.xr.enabled=Dd,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:dr,format:Ai,colorSpace:bo,depthBuffer:!1},o=t_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cP(l)),this._blurMaterial=dP(l,e,t),this._ggxMaterial=fP(l,e,t)}return o}_compileMaterial(e){const t=new Wi(new gr,e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,r,o,l){const d=new Ti(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Jv),g.toneMapping=Vi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new Za,new xy({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let x=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,x=!0):(S.color.copy(Jv),x=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[P],l.y,l.z)):D===1?(d.up.set(0,0,h[P]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[P],l.z)):(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[P]));const L=this._cubeSize;mo(o,D*L,P>2?L:0,L,L),g.setRenderTarget(o),x&&g.render(T,d),g.render(e,d)}g.toneMapping=y,g.autoClear=v,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ps||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;mo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ta)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[r];c.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),v=0+h*1.25,y=g*v,{_lodMax:M}=this,T=this._sizeLods[r],S=3*T*(r>M-Xr?r-M+Xr:0),x=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,mo(l,S,x,3*T,2*T),o.setRenderTarget(l),o.render(c,Ta),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,mo(e,S,x,3*T,2*T),o.setRenderTarget(e),o.render(c,Ta)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[o];g.material=h;const v=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ws-1),T=l/M,S=isFinite(l)?1+Math.floor(m*T):ws;S>ws&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ws}`);const x=[];let b=0;for(let O=0;O<ws;++O){const z=O/T,A=Math.exp(-z*z/2);x.push(A),O===0?b+=A:O<S&&(b+=2*A)}for(let O=0;O<x.length;O++)x[O]=x[O]/b;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const D=this._sizeLods[o],L=3*D*(o>P-Xr?o-P+Xr:0),N=4*(this._cubeSize-D);mo(t,L,N,3*D,2*D),d.setRenderTarget(t),d.render(g,Ta)}}function cP(n){const e=[],t=[],r=[];let o=n;const l=n-Xr+1+Qv.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);e.push(c);let d=1/c;u>n-Xr?d=Qv[u-n+Xr-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,T=3,S=2,x=1,b=new Float32Array(T*M*y),P=new Float32Array(S*M*y),D=new Float32Array(x*M*y);for(let N=0;N<y;N++){const O=N%3*2/3-1,z=N>2?0:-1,A=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];b.set(A,T*M*N),P.set(v,S*M*N);const R=[N,N,N,N,N,N];D.set(R,x*M*N)}const L=new gr;L.setAttribute("position",new Gi(b,T)),L.setAttribute("uv",new Gi(P,S)),L.setAttribute("faceIndex",new Gi(D,x)),r.push(new Wi(L,null)),o>Xr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function t_(n,e,t){const r=new zi(n,e,t);return r.texture.mapping=ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function fP(n,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function dP(n,e,t){const r=new Float32Array(ws),o=new te(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sc(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function n_(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function i_(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function hP(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===sh||d===oh,m=d===Ps||d===Co;if(h||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new e_(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const y=c.image;return h&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new e_(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function pP(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ga("WebGLRenderer: "+r+" extension not supported."),o}}}function mP(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)e.update(v[y],n.ARRAY_BUFFER)}function h(g){const v=[],y=g.index,M=g.attributes.position;let T=0;if(y!==null){const b=y.array;T=y.version;for(let P=0,D=b.length;P<D;P+=3){const L=b[P+0],N=b[P+1],O=b[P+2];v.push(L,N,N,O,O,L)}}else if(M!==void 0){const b=M.array;T=M.version;for(let P=0,D=b.length/3-1;P<D;P+=3){const L=P+0,N=P+1,O=P+2;v.push(L,N,N,O,O,L)}}else return;const S=new(my(v)?Sy:yy)(v,1);S.version=T;const x=l.get(g);x&&e.remove(x),l.set(g,S)}function m(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function gP(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,y){n.drawElements(r,y,l,v*u),t.update(y,r,1)}function h(v,y,M){M!==0&&(n.drawElementsInstanced(r,y,l,v*u,M),t.update(y,r,M))}function m(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,r,1)}function g(v,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,v,0,T,0,M);let x=0;for(let b=0;b<M;b++)x+=y[b]*T[b];t.update(x,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function vP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function _P(n,e,t){const r=new WeakMap,o=new tn;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let A=function(){O.dispose(),r.delete(c),c.removeEventListener("dispose",A)};v!==void 0&&v.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),T===!0&&(P=3);let D=c.attributes.position.count*P,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*L*4*g),O=new gy(N,D,L,g);O.type=Fi,O.needsUpdate=!0;const z=P*4;for(let R=0;R<g;R++){const V=S[R],re=x[R],Z=b[R],se=D*L*4*R;for(let ce=0;ce<V.count;ce++){const K=ce*z;y===!0&&(o.fromBufferAttribute(V,ce),N[se+K+0]=o.x,N[se+K+1]=o.y,N[se+K+2]=o.z,N[se+K+3]=0),M===!0&&(o.fromBufferAttribute(re,ce),N[se+K+4]=o.x,N[se+K+5]=o.y,N[se+K+6]=o.z,N[se+K+7]=0),T===!0&&(o.fromBufferAttribute(Z,ce),N[se+K+8]=o.x,N[se+K+9]=o.y,N[se+K+10]=o.z,N[se+K+11]=Z.itemSize===4?o.w:1)}}v={count:g,texture:O,size:new St(D,L)},r.set(c,v),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let y=0;for(let T=0;T<h.length;T++)y+=h[T];const M=c.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function xP(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const yP={[ey]:"LINEAR_TONE_MAPPING",[ty]:"REINHARD_TONE_MAPPING",[ny]:"CINEON_TONE_MAPPING",[iy]:"ACES_FILMIC_TONE_MAPPING",[sy]:"AGX_TONE_MAPPING",[oy]:"NEUTRAL_TONE_MAPPING",[ry]:"CUSTOM_TONE_MAPPING"};function SP(n,e,t,r,o){const l=new zi(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),u=new zi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),c=new gr;c.setAttribute("position",new cr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cr([0,2,0,0,2,0],2));const d=new mC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(c,d),m=new Fp(-1,1,1,-1,0,1);let g=null,v=null,y=!1,M,T=null,S=[],x=!1;this.setSize=function(b,P){l.setSize(b,P),u.setSize(b,P);for(let D=0;D<S.length;D++){const L=S[D];L.setSize&&L.setSize(b,P)}},this.setEffects=function(b){S=b,x=S.length>0&&S[0].isRenderPass===!0;const P=l.width,D=l.height;for(let L=0;L<S.length;L++){const N=S[L];N.setSize&&N.setSize(P,D)}},this.begin=function(b,P){if(y||b.toneMapping===Vi&&S.length===0)return!1;if(T=P,P!==null){const D=P.width,L=P.height;(l.width!==D||l.height!==L)&&this.setSize(D,L)}return x===!1&&b.setRenderTarget(l),M=b.toneMapping,b.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(b,P){b.toneMapping=M,y=!0;let D=l,L=u;for(let N=0;N<S.length;N++){const O=S[N];if(O.enabled!==!1&&(O.render(b,L,D,P),O.needsSwap!==!1)){const z=D;D=L,L=z}}if(g!==b.outputColorSpace||v!==b.toneMapping){g=b.outputColorSpace,v=b.toneMapping,d.defines={},At.getTransfer(g)===Nt&&(d.defines.SRGB_TRANSFER="");const N=yP[v];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,b.setRenderTarget(T),b.render(h,m),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),u.dispose(),c.dispose(),d.dispose()}}const by=new Fn,Gh=new Ha(1,1),Py=new gy,Dy=new WA,Ly=new Ty,r_=[],s_=[],o_=new Float32Array(16),a_=new Float32Array(9),l_=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=r_[o];if(l===void 0&&(l=new Float32Array(o),r_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function oc(n,e){let t=s_[e];t===void 0&&(t=new Int32Array(e),s_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function MP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function EP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function TP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function wP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function AP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;l_.set(r),n.uniformMatrix2fv(this.addr,!1,l_),cn(t,r)}}function CP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;a_.set(r),n.uniformMatrix3fv(this.addr,!1,a_),cn(t,r)}}function RP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;o_.set(r),n.uniformMatrix4fv(this.addr,!1,o_),cn(t,r)}}function bP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function DP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function LP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function IP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function UP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function FP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function OP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?Ip:Lp,l=Gh):l=by,t.setTexture2D(e||l,o)}function BP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Dy,o)}function kP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ly,o)}function VP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Py,o)}function zP(n){switch(n){case 5126:return MP;case 35664:return EP;case 35665:return TP;case 35666:return wP;case 35674:return AP;case 35675:return CP;case 35676:return RP;case 5124:case 35670:return bP;case 35667:case 35671:return PP;case 35668:case 35672:return DP;case 35669:case 35673:return LP;case 5125:return IP;case 36294:return NP;case 36295:return UP;case 36296:return FP;case 35678:case 36198:case 36298:case 36306:case 35682:return OP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return VP}}function GP(n,e){n.uniform1fv(this.addr,e)}function HP(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function WP(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function jP(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function XP(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YP(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qP(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KP(n,e){n.uniform1iv(this.addr,e)}function $P(n,e){n.uniform2iv(this.addr,e)}function ZP(n,e){n.uniform3iv(this.addr,e)}function QP(n,e){n.uniform4iv(this.addr,e)}function JP(n,e){n.uniform1uiv(this.addr,e)}function e3(n,e){n.uniform2uiv(this.addr,e)}function t3(n,e){n.uniform3uiv(this.addr,e)}function n3(n,e){n.uniform4uiv(this.addr,e)}function i3(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);un(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));let u;this.type===n.SAMPLER_2D_SHADOW?u=Gh:u=by;for(let c=0;c!==o;++c)t.setTexture2D(e[c]||u,l[c])}function r3(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);un(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Dy,l[u])}function s3(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);un(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ly,l[u])}function o3(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);un(r,l)||(n.uniform1iv(this.addr,l),cn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Py,l[u])}function a3(n){switch(n){case 5126:return GP;case 35664:return HP;case 35665:return WP;case 35666:return jP;case 35674:return XP;case 35675:return YP;case 35676:return qP;case 5124:case 35670:return KP;case 35667:case 35671:return $P;case 35668:case 35672:return ZP;case 35669:case 35673:return QP;case 5125:return JP;case 36294:return e3;case 36295:return t3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return s3;case 36289:case 36303:case 36311:case 36292:return o3}}class l3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=zP(t.type)}}class u3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a3(t.type)}}class c3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function u_(n,e){n.seq.push(e),n.map[e.id]=e}function f3(n,e,t){const r=n.name,o=r.length;for(Ld.lastIndex=0;;){const l=Ld.exec(r),u=Ld.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){u_(t,h===void 0?new l3(c,n,e):new u3(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new c3(c),u_(t,g)),t=g}}}class ku{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);f3(c,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function c_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const d3=37297;let h3=0;function p3(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const f_=new dt;function m3(n){At._getMatrix(f_,At.workingColorSpace,n);const e=`mat3( ${f_.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case Yu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function d_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+p3(n.getShaderSource(e),c)}else return l}function g3(n,e){const t=m3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const v3={[ey]:"Linear",[ty]:"Reinhard",[ny]:"Cineon",[iy]:"ACESFilmic",[sy]:"AgX",[oy]:"Neutral",[ry]:"Custom"};function _3(n,e){const t=v3[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pu=new te;function x3(){At.getLuminanceCoefficients(Pu);const n=Pu.x.toFixed(4),e=Pu.y.toFixed(4),t=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function S3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function M3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Pa(n){return n!==""}function h_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(E3,w3)}const T3=new Map;function w3(n,e){let t=mt[e];if(t===void 0){const r=T3.get(e);if(r!==void 0)t=mt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const A3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(n){return n.replace(A3,C3)}function C3(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function g_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const R3={[Nu]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function b3(n){return R3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const P3={[Ps]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE_UV"};function D3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":P3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const L3={[Co]:"ENVMAP_MODE_REFRACTION"};function I3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":L3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N3={[Jx]:"ENVMAP_BLENDING_MULTIPLY",[TA]:"ENVMAP_BLENDING_MIX",[wA]:"ENVMAP_BLENDING_ADD"};function U3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":N3[n.combine]||"ENVMAP_BLENDING_NONE"}function F3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function O3(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=b3(t),h=D3(t),m=I3(t),g=U3(t),v=F3(t),y=y3(t),M=S3(l),T=o.createProgram();let S,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Pa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Pa).join(`
`),x.length>0&&(x+=`
`)):(S=[g_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),x=[g_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?_3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,g3("linearToOutputTexel",t.outputColorSpace),x3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),u=Hh(u),u=h_(u,t),u=p_(u,t),c=Hh(c),c=h_(c,t),c=p_(c,t),u=m_(u),c=m_(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=b+S+u,D=b+x+c,L=c_(o,o.VERTEX_SHADER,P),N=c_(o,o.FRAGMENT_SHADER,D);o.attachShader(T,L),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(V){if(n.debug.checkShaderErrors){const re=o.getProgramInfoLog(T)||"",Z=o.getShaderInfoLog(L)||"",se=o.getShaderInfoLog(N)||"",ce=re.trim(),K=Z.trim(),Y=se.trim();let W=!0,de=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,L,N);else{const ne=d_(o,L,"vertex"),F=d_(o,N,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+ne+`
`+F)}else ce!==""?ct("WebGLProgram: Program Info Log:",ce):(K===""||Y==="")&&(de=!1);de&&(V.diagnostics={runnable:W,programLog:ce,vertexShader:{log:K,prefix:S},fragmentShader:{log:Y,prefix:x}})}o.deleteShader(L),o.deleteShader(N),z=new ku(o,T),A=M3(o,T)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,d3)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=N,this}let B3=0;class k3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new V3(e),t.set(e,r)),r}}class V3{constructor(e){this.id=B3++,this.code=e,this.usedTimes=0}}function z3(n,e,t,r,o,l,u){const c=new vy,d=new k3,h=new Set,m=[],g=new Map,v=o.logarithmicDepthBuffer;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return h.add(A),A===0?"uv":`uv${A}`}function S(A,R,V,re,Z){const se=re.fog,ce=Z.geometry,K=A.isMeshStandardMaterial?re.environment:null,Y=(A.isMeshStandardMaterial?t:e).get(A.envMap||K),W=Y&&Y.mapping===ic?Y.image.height:null,de=M[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&ct("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ne=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,F=ne!==void 0?ne.length:0;let oe=0;ce.morphAttributes.position!==void 0&&(oe=1),ce.morphAttributes.normal!==void 0&&(oe=2),ce.morphAttributes.color!==void 0&&(oe=3);let we,He,Ke,J;if(de){const Et=Ui[de];we=Et.vertexShader,He=Et.fragmentShader}else we=A.vertexShader,He=A.fragmentShader,d.update(A),Ke=d.getVertexShaderID(A),J=d.getFragmentShaderID(A);const fe=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ie=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,at=!!A.map,kt=!!A.matcap,ht=!!Y,xt=!!A.aoMap,Ct=!!A.lightMap,lt=!!A.bumpMap,Wt=!!A.normalMap,k=!!A.displacementMap,jt=!!A.emissiveMap,vt=!!A.metalnessMap,Mt=!!A.roughnessMap,Xe=A.anisotropy>0,I=A.clearcoat>0,E=A.dispersion>0,j=A.iridescence>0,he=A.sheen>0,ge=A.transmission>0,le=Xe&&!!A.anisotropyMap,$e=I&&!!A.clearcoatMap,Ae=I&&!!A.clearcoatNormalMap,Ve=I&&!!A.clearcoatRoughnessMap,rt=j&&!!A.iridescenceMap,Me=j&&!!A.iridescenceThicknessMap,De=he&&!!A.sheenColorMap,We=he&&!!A.sheenRoughnessMap,Ye=!!A.specularMap,Re=!!A.specularColorMap,ft=!!A.specularIntensityMap,G=ge&&!!A.transmissionMap,Ne=ge&&!!A.thicknessMap,Ee=!!A.gradientMap,Ue=!!A.alphaMap,ye=A.alphaTest>0,pe=!!A.alphaHash,be=!!A.extensions;let st=Vi;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(st=n.toneMapping);const It={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:we,fragmentShader:He,defines:A.defines,customVertexShaderID:Ke,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Pe,batchingColor:Pe&&Z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Z.instanceColor!==null,instancingMorph:Ie&&Z.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:bo,alphaToCoverage:!!A.alphaToCoverage,map:at,matcap:kt,envMap:ht,envMapMode:ht&&Y.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:Ct,bumpMap:lt,normalMap:Wt,displacementMap:k,emissiveMap:jt,normalMapObjectSpace:Wt&&A.normalMapType===bA,normalMapTangentSpace:Wt&&A.normalMapType===RA,metalnessMap:vt,roughnessMap:Mt,anisotropy:Xe,anisotropyMap:le,clearcoat:I,clearcoatMap:$e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ve,dispersion:E,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:De,sheenRoughnessMap:We,specularMap:Ye,specularColorMap:Re,specularIntensityMap:ft,transmission:ge,transmissionMap:G,thicknessMap:Ne,gradientMap:Ee,opaque:A.transparent===!1&&A.blending===So&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:pe,combine:A.combine,mapUv:at&&T(A.map.channel),aoMapUv:xt&&T(A.aoMap.channel),lightMapUv:Ct&&T(A.lightMap.channel),bumpMapUv:lt&&T(A.bumpMap.channel),normalMapUv:Wt&&T(A.normalMap.channel),displacementMapUv:k&&T(A.displacementMap.channel),emissiveMapUv:jt&&T(A.emissiveMap.channel),metalnessMapUv:vt&&T(A.metalnessMap.channel),roughnessMapUv:Mt&&T(A.roughnessMap.channel),anisotropyMapUv:le&&T(A.anisotropyMap.channel),clearcoatMapUv:$e&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(A.sheenRoughnessMap.channel),specularMapUv:Ye&&T(A.specularMap.channel),specularColorMapUv:Re&&T(A.specularColorMap.channel),specularIntensityMapUv:ft&&T(A.specularIntensityMap.channel),transmissionMapUv:G&&T(A.transmissionMap.channel),thicknessMapUv:Ne&&T(A.thicknessMap.channel),alphaMapUv:Ue&&T(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Wt||Xe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(at||Ue),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:_e,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:at&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===Nt,decodeVideoTextureEmissive:jt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===Nt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===rr,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:be&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&A.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function x(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)R.push(V),R.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(b(R,A),P(R,A),R.push(n.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function P(A,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),A.push(c.mask)}function D(A){const R=M[A.type];let V;if(R){const re=Ui[R];V=rC.clone(re.uniforms)}else V=A.uniforms;return V}function L(A,R){let V=g.get(R);return V!==void 0?++V.usedTimes:(V=new O3(n,R,A,l),m.push(V),g.set(R,V)),V}function N(A){if(--A.usedTimes===0){const R=m.indexOf(A);m[R]=m[m.length-1],m.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){d.remove(A)}function z(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:L,releaseProgram:N,releaseShaderCache:O,programs:m,dispose:z}}function G3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function H3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function v_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function __(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,y,M,T,S){let x=n[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},n[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=T,x.group=S),e++,x}function c(g,v,y,M,T,S){const x=u(g,v,y,M,T,S);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):t.push(x)}function d(g,v,y,M,T,S){const x=u(g,v,y,M,T,S);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function h(g,v){t.length>1&&t.sort(g||H3),r.length>1&&r.sort(v||v_),o.length>1&&o.sort(v||v_)}function m(){for(let g=e,v=n.length;g<v;g++){const y=n[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function W3(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new __,n.set(r,[u])):o>=l.length?(u=new __,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function j3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Ot};break;case"SpotLight":t={position:new te,direction:new te,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function X3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y3=0;function q3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K3(n){const e=new j3,t=X3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,l=new sn,u=new sn;function c(h){let m=0,g=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,M=0,T=0,S=0,x=0,b=0,P=0,D=0,L=0,N=0,O=0;h.sort(q3);for(let A=0,R=h.length;A<R;A++){const V=h[A],re=V.color,Z=V.intensity,se=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ro?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)m+=re.r*Z,g+=re.g*Z,v+=re.b*Z;else if(V.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(V.sh.coefficients[K],Z);O++}else if(V.isDirectionalLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,W=t.get(V);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=V.shadow.matrix,b++}r.directional[y]=K,y++}else if(V.isSpotLight){const K=e.get(V);K.position.setFromMatrixPosition(V.matrixWorld),K.color.copy(re).multiplyScalar(Z),K.distance=se,K.coneCos=Math.cos(V.angle),K.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),K.decay=V.decay,r.spot[T]=K;const Y=V.shadow;if(V.map&&(r.spotLightMap[L]=V.map,L++,Y.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[T]=Y.matrix,V.castShadow){const W=t.get(V);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=ce,D++}T++}else if(V.isRectAreaLight){const K=e.get(V);K.color.copy(re).multiplyScalar(Z),K.halfWidth.set(V.width*.5,0,0),K.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=K,S++}else if(V.isPointLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),K.distance=V.distance,K.decay=V.decay,V.castShadow){const Y=V.shadow,W=t.get(V);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[M]=W,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=V.shadow.matrix,P++}r.point[M]=K,M++}else if(V.isHemisphereLight){const K=e.get(V);K.skyColor.copy(V.color).multiplyScalar(Z),K.groundColor.copy(V.groundColor).multiplyScalar(Z),r.hemi[x]=K,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==y||z.pointLength!==M||z.spotLength!==T||z.rectAreaLength!==S||z.hemiLength!==x||z.numDirectionalShadows!==b||z.numPointShadows!==P||z.numSpotShadows!==D||z.numSpotMaps!==L||z.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,z.directionalLength=y,z.pointLength=M,z.spotLength=T,z.rectAreaLength=S,z.hemiLength=x,z.numDirectionalShadows=b,z.numPointShadows=P,z.numSpotShadows=D,z.numSpotMaps=L,z.numLightProbes=O,r.version=Y3++)}function d(h,m){let g=0,v=0,y=0,M=0,T=0;const S=m.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){const P=h[x];if(P.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),g++}else if(P.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:r}}function x_(n){const e=new K3(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function $3(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new x_(n),e.set(o,[c])):l>=u.length?(c=new x_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q3=`uniform sampler2D shadow_pass;
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
}`,J3=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],eD=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],y_=new sn,wa=new te,Id=new te;function tD(n,e,t){let r=new Ay;const o=new St,l=new St,u=new tn,c=new gC,d=new vC,h={},m=t.maxTextureSize,g={[Kr]:Wn,[Wn]:Kr,[rr]:rr},v=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Z3,fragmentShader:Q3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new gr;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let x=this.type;this.render=function(N,O,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;N.type===sA&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=Nu);const A=n.getRenderTarget(),R=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),re=n.state;re.setBlending(lr),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Z=x!==this.type;Z&&O.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(ce=>ce.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,ce=N.length;se<ce;se++){const K=N[se],Y=K.shadow;if(Y===void 0){ct("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const W=Y.getFrameExtents();if(o.multiply(W),l.copy(Y.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/W.x),o.x=l.x*W.x,Y.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/W.y),o.y=l.y*W.y,Y.mapSize.y=l.y)),Y.map===null||Z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ba){if(K.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new zi(o.x,o.y,{format:Ro,type:dr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new Ha(o.x,o.y,Fi),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=hr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn}else{K.isPointLight?(Y.map=new wy(o.x),Y.map.depthTexture=new pC(o.x,Hi)):(Y.map=new zi(o.x,o.y),Y.map.depthTexture=new Ha(o.x,o.y,Hi)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=hr;const ne=n.state.buffers.depth.getReversed();this.type===Nu?(Y.map.depthTexture.compareFunction=ne?Ip:Lp,Y.map.depthTexture.minFilter=Pn,Y.map.depthTexture.magFilter=Pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn)}Y.camera.updateProjectionMatrix()}const de=Y.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<de;ne++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(Y.map),n.clear());const F=Y.getViewport(ne);u.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),re.viewport(u)}if(K.isPointLight){const F=Y.camera,oe=Y.matrix,we=K.distance||F.far;we!==F.far&&(F.far=we,F.updateProjectionMatrix()),wa.setFromMatrixPosition(K.matrixWorld),F.position.copy(wa),Id.copy(F.position),Id.add(J3[ne]),F.up.copy(eD[ne]),F.lookAt(Id),F.updateMatrixWorld(),oe.makeTranslation(-wa.x,-wa.y,-wa.z),y_.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(y_,F.coordinateSystem,F.reversedDepth)}else Y.updateMatrices(K);r=Y.getFrustum(),D(O,z,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ba&&b(Y,z),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(A,R,V)};function b(N,O){const z=e.update(T);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new zi(o.x,o.y,{format:Ro,type:dr})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,z,v,T,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,z,y,T,null)}function P(N,O,z,A){let R=null;const V=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)R=V;else if(R=z.isPointLight===!0?d:c,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const re=R.uuid,Z=O.uuid;let se=h[re];se===void 0&&(se={},h[re]=se);let ce=se[Z];ce===void 0&&(ce=R.clone(),se[Z]=ce,O.addEventListener("dispose",L)),R=ce}if(R.visible=O.visible,R.wireframe=O.wireframe,A===ba?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=n.properties.get(R);re.light=z}return R}function D(N,O,z,A,R){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ba)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),se=N.material;if(Array.isArray(se)){const ce=Z.groups;for(let K=0,Y=ce.length;K<Y;K++){const W=ce[K],de=se[W.materialIndex];if(de&&de.visible){const ne=P(N,de,A,R);N.onBeforeShadow(n,N,O,z,Z,ne,W),n.renderBufferDirect(z,null,Z,ne,N,W),N.onAfterShadow(n,N,O,z,Z,ne,W)}}}else if(se.visible){const ce=P(N,se,A,R);N.onBeforeShadow(n,N,O,z,Z,ce,null),n.renderBufferDirect(z,null,Z,ce,N,null),N.onAfterShadow(n,N,O,z,Z,ce,null)}}const re=N.children;for(let Z=0,se=re.length;Z<se;Z++)D(re[Z],O,z,A,R)}function L(N){N.target.removeEventListener("dispose",L);for(const z in h){const A=h[z],R=N.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const nD={[Qd]:Jd,[eh]:ih,[th]:rh,[Ao]:nh,[Jd]:Qd,[ih]:eh,[rh]:th,[nh]:Ao};function iD(n,e){function t(){let G=!1;const Ne=new tn;let Ee=null;const Ue=new tn(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){G=ye},setClear:function(ye,pe,be,st,It){It===!0&&(ye*=st,pe*=st,be*=st),Ne.set(ye,pe,be,st),Ue.equals(Ne)===!1&&(n.clearColor(ye,pe,be,st),Ue.copy(Ne))},reset:function(){G=!1,Ee=null,Ue.set(-1,0,0,0)}}}function r(){let G=!1,Ne=!1,Ee=null,Ue=null,ye=null;return{setReversed:function(pe){if(Ne!==pe){const be=e.get("EXT_clip_control");pe?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Ne=pe;const st=ye;ye=null,this.setClear(st)}},getReversed:function(){return Ne},setTest:function(pe){pe?fe(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(pe){Ee!==pe&&!G&&(n.depthMask(pe),Ee=pe)},setFunc:function(pe){if(Ne&&(pe=nD[pe]),Ue!==pe){switch(pe){case Qd:n.depthFunc(n.NEVER);break;case Jd:n.depthFunc(n.ALWAYS);break;case eh:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case th:n.depthFunc(n.EQUAL);break;case nh:n.depthFunc(n.GEQUAL);break;case ih:n.depthFunc(n.GREATER);break;case rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=pe}},setLocked:function(pe){G=pe},setClear:function(pe){ye!==pe&&(Ne&&(pe=1-pe),n.clearDepth(pe),ye=pe)},reset:function(){G=!1,Ee=null,Ue=null,ye=null,Ne=!1}}}function o(){let G=!1,Ne=null,Ee=null,Ue=null,ye=null,pe=null,be=null,st=null,It=null;return{setTest:function(Et){G||(Et?fe(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!G&&(n.stencilMask(Et),Ne=Et)},setFunc:function(Et,jn,Dn){(Ee!==Et||Ue!==jn||ye!==Dn)&&(n.stencilFunc(Et,jn,Dn),Ee=Et,Ue=jn,ye=Dn)},setOp:function(Et,jn,Dn){(pe!==Et||be!==jn||st!==Dn)&&(n.stencilOp(Et,jn,Dn),pe=Et,be=jn,st=Dn)},setLocked:function(Et){G=Et},setClear:function(Et){It!==Et&&(n.clearStencil(Et),It=Et)},reset:function(){G=!1,Ne=null,Ee=null,Ue=null,ye=null,pe=null,be=null,st=null,It=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,y=[],M=null,T=!1,S=null,x=null,b=null,P=null,D=null,L=null,N=null,O=new Ot(0,0,0),z=0,A=!1,R=null,V=null,re=null,Z=null,se=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=Y>=2);let de=null,ne={};const F=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),we=new tn().fromArray(F),He=new tn().fromArray(oe);function Ke(G,Ne,Ee,Ue){const ye=new Uint8Array(4),pe=n.createTexture();n.bindTexture(G,pe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<Ee;be++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ne,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Ne+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return pe}const J={};J[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),fe(n.DEPTH_TEST),u.setFunc(Ao),lt(!1),Wt(Av),fe(n.CULL_FACE),xt(lr);function fe(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function _e(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Ie(G,Ne){return g[G]!==Ne?(n.bindFramebuffer(G,Ne),g[G]=Ne,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ne),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Pe(G,Ne){let Ee=y,Ue=!1;if(G){Ee=v.get(Ne),Ee===void 0&&(Ee=[],v.set(Ne,Ee));const ye=G.textures;if(Ee.length!==ye.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,be=ye.length;pe<be;pe++)Ee[pe]=n.COLOR_ATTACHMENT0+pe;Ee.length=ye.length,Ue=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Ee)}function at(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const kt={[Ts]:n.FUNC_ADD,[aA]:n.FUNC_SUBTRACT,[lA]:n.FUNC_REVERSE_SUBTRACT};kt[uA]=n.MIN,kt[cA]=n.MAX;const ht={[fA]:n.ZERO,[dA]:n.ONE,[hA]:n.SRC_COLOR,[$d]:n.SRC_ALPHA,[xA]:n.SRC_ALPHA_SATURATE,[vA]:n.DST_COLOR,[mA]:n.DST_ALPHA,[pA]:n.ONE_MINUS_SRC_COLOR,[Zd]:n.ONE_MINUS_SRC_ALPHA,[_A]:n.ONE_MINUS_DST_COLOR,[gA]:n.ONE_MINUS_DST_ALPHA,[yA]:n.CONSTANT_COLOR,[SA]:n.ONE_MINUS_CONSTANT_COLOR,[MA]:n.CONSTANT_ALPHA,[EA]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(G,Ne,Ee,Ue,ye,pe,be,st,It,Et){if(G===lr){T===!0&&(_e(n.BLEND),T=!1);return}if(T===!1&&(fe(n.BLEND),T=!0),G!==oA){if(G!==S||Et!==A){if((x!==Ts||D!==Ts)&&(n.blendEquation(n.FUNC_ADD),x=Ts,D=Ts),Et)switch(G){case So:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cv:n.blendFunc(n.ONE,n.ONE);break;case Rv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",G);break}else switch(G){case So:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rv:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bv:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",G);break}b=null,P=null,L=null,N=null,O.set(0,0,0),z=0,S=G,A=Et}return}ye=ye||Ne,pe=pe||Ee,be=be||Ue,(Ne!==x||ye!==D)&&(n.blendEquationSeparate(kt[Ne],kt[ye]),x=Ne,D=ye),(Ee!==b||Ue!==P||pe!==L||be!==N)&&(n.blendFuncSeparate(ht[Ee],ht[Ue],ht[pe],ht[be]),b=Ee,P=Ue,L=pe,N=be),(st.equals(O)===!1||It!==z)&&(n.blendColor(st.r,st.g,st.b,It),O.copy(st),z=It),S=G,A=!1}function Ct(G,Ne){G.side===rr?_e(n.CULL_FACE):fe(n.CULL_FACE);let Ee=G.side===Wn;Ne&&(Ee=!Ee),lt(Ee),G.blending===So&&G.transparent===!1?xt(lr):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ue=G.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),jt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function Wt(G){G!==iA?(fe(n.CULL_FACE),G!==V&&(G===Av?n.cullFace(n.BACK):G===rA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),V=G}function k(G){G!==re&&(K&&n.lineWidth(G),re=G)}function jt(G,Ne,Ee){G?(fe(n.POLYGON_OFFSET_FILL),(Z!==Ne||se!==Ee)&&(n.polygonOffset(Ne,Ee),Z=Ne,se=Ee)):_e(n.POLYGON_OFFSET_FILL)}function vt(G){G?fe(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Mt(G){G===void 0&&(G=n.TEXTURE0+ce-1),de!==G&&(n.activeTexture(G),de=G)}function Xe(G,Ne,Ee){Ee===void 0&&(de===null?Ee=n.TEXTURE0+ce-1:Ee=de);let Ue=ne[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},ne[Ee]=Ue),(Ue.type!==G||Ue.texture!==Ne)&&(de!==Ee&&(n.activeTexture(Ee),de=Ee),n.bindTexture(G,Ne||J[G]),Ue.type=G,Ue.texture=Ne)}function I(){const G=ne[de];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function he(){try{n.texSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function ge(){try{n.texSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function $e(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ae(){try{n.texStorage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ve(){try{n.texStorage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function rt(){try{n.texImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Me(){try{n.texImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function De(G){we.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function We(G){He.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),He.copy(G))}function Ye(G,Ne){let Ee=h.get(Ne);Ee===void 0&&(Ee=new WeakMap,h.set(Ne,Ee));let Ue=Ee.get(G);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ne,G.name),Ee.set(G,Ue))}function Re(G,Ne){const Ue=h.get(Ne).get(G);d.get(Ne)!==Ue&&(n.uniformBlockBinding(Ne,Ue,G.__bindingPointIndex),d.set(Ne,Ue))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},de=null,ne={},g={},v=new WeakMap,y=[],M=null,T=!1,S=null,x=null,b=null,P=null,D=null,L=null,N=null,O=new Ot(0,0,0),z=0,A=!1,R=null,V=null,re=null,Z=null,se=null,we.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:fe,disable:_e,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:at,setBlending:xt,setMaterial:Ct,setFlipSided:lt,setCullFace:Wt,setLineWidth:k,setPolygonOffset:jt,setScissorTest:vt,activeTexture:Mt,bindTexture:Xe,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:rt,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Re,texStorage2D:Ae,texStorage3D:Ve,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:le,compressedTexSubImage3D:$e,scissor:De,viewport:We,reset:ft}}function rD(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,E){return y?new OffscreenCanvas(I,E):Ku("canvas")}function T(I,E,j){let he=1;const ge=Xe(I);if((ge.width>j||ge.height>j)&&(he=j/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const le=Math.floor(he*ge.width),$e=Math.floor(he*ge.height);g===void 0&&(g=M(le,$e));const Ae=E?M(le,$e):g;return Ae.width=le,Ae.height=$e,Ae.getContext("2d").drawImage(I,0,0,le,$e),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+le+"x"+$e+")."),Ae}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){n.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(I,E,j,he,ge=!1){if(I!==null){if(n[I]!==void 0)return n[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let le=E;if(E===n.RED&&(j===n.FLOAT&&(le=n.R32F),j===n.HALF_FLOAT&&(le=n.R16F),j===n.UNSIGNED_BYTE&&(le=n.R8)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(le=n.R8UI),j===n.UNSIGNED_SHORT&&(le=n.R16UI),j===n.UNSIGNED_INT&&(le=n.R32UI),j===n.BYTE&&(le=n.R8I),j===n.SHORT&&(le=n.R16I),j===n.INT&&(le=n.R32I)),E===n.RG&&(j===n.FLOAT&&(le=n.RG32F),j===n.HALF_FLOAT&&(le=n.RG16F),j===n.UNSIGNED_BYTE&&(le=n.RG8)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(le=n.RG8UI),j===n.UNSIGNED_SHORT&&(le=n.RG16UI),j===n.UNSIGNED_INT&&(le=n.RG32UI),j===n.BYTE&&(le=n.RG8I),j===n.SHORT&&(le=n.RG16I),j===n.INT&&(le=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(le=n.RGB8UI),j===n.UNSIGNED_SHORT&&(le=n.RGB16UI),j===n.UNSIGNED_INT&&(le=n.RGB32UI),j===n.BYTE&&(le=n.RGB8I),j===n.SHORT&&(le=n.RGB16I),j===n.INT&&(le=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),j===n.UNSIGNED_INT&&(le=n.RGBA32UI),j===n.BYTE&&(le=n.RGBA8I),j===n.SHORT&&(le=n.RGBA16I),j===n.INT&&(le=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(le=n.R11F_G11F_B10F)),E===n.RGBA){const $e=ge?Yu:At.getTransfer(he);j===n.FLOAT&&(le=n.RGBA32F),j===n.HALF_FLOAT&&(le=n.RGBA16F),j===n.UNSIGNED_BYTE&&(le=$e===Nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(I,E){let j;return I?E===null||E===Hi||E===za?j=n.DEPTH24_STENCIL8:E===Fi?j=n.DEPTH32F_STENCIL8:E===Va&&(j=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===za?j=n.DEPTH_COMPONENT24:E===Fi?j=n.DEPTH_COMPONENT32F:E===Va&&(j=n.DEPTH_COMPONENT16),j}function L(I,E){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function N(I){const E=I.target;E.removeEventListener("dispose",N),z(E),E.isVideoTexture&&m.delete(E)}function O(I){const E=I.target;E.removeEventListener("dispose",O),R(E)}function z(I){const E=r.get(I);if(E.__webglInit===void 0)return;const j=I.source,he=v.get(j);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&A(I),Object.keys(he).length===0&&v.delete(j)}r.remove(I)}function A(I){const E=r.get(I);n.deleteTexture(E.__webglTexture);const j=I.source,he=v.get(j);delete he[E.__cacheKey],u.memory.textures--}function R(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)n.deleteFramebuffer(E.__webglFramebuffer[he]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=I.textures;for(let he=0,ge=j.length;he<ge;he++){const le=r.get(j[he]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),u.memory.textures--),r.remove(j[he])}r.remove(I)}let V=0;function re(){V=0}function Z(){const I=V;return I>=o.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),V+=1,I}function se(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ce(I,E){const j=r.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const he=I.image;if(he===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,I,E);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function K(I,E){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){J(j,I,E);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function Y(I,E){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){J(j,I,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function W(I,E){const j=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){fe(j,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const de={[ah]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[lh]:n.MIRRORED_REPEAT},ne={[yn]:n.NEAREST,[AA]:n.NEAREST_MIPMAP_NEAREST,[cu]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[id]:n.LINEAR_MIPMAP_NEAREST,[Cs]:n.LINEAR_MIPMAP_LINEAR},F={[PA]:n.NEVER,[UA]:n.ALWAYS,[DA]:n.LESS,[Lp]:n.LEQUAL,[LA]:n.EQUAL,[Ip]:n.GEQUAL,[IA]:n.GREATER,[NA]:n.NOTEQUAL};function oe(I,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===id||E.magFilter===cu||E.magFilter===Cs||E.minFilter===Pn||E.minFilter===id||E.minFilter===cu||E.minFilter===Cs)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,de[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,de[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,de[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ne[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==cu&&E.minFilter!==Cs||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function we(I,E){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",N));const he=E.source;let ge=v.get(he);ge===void 0&&(ge={},v.set(he,ge));const le=se(E);if(le!==I.__cacheKey){ge[le]===void 0&&(ge[le]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,j=!0),ge[le].usedTimes++;const $e=ge[I.__cacheKey];$e!==void 0&&(ge[I.__cacheKey].usedTimes--,$e.usedTimes===0&&A(E)),I.__cacheKey=le,I.__webglTexture=ge[le].texture}return j}function He(I,E,j){return Math.floor(Math.floor(I/j)/E)}function Ke(I,E,j,he){const le=I.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,he,E.data);else{le.sort((Me,De)=>Me.start-De.start);let $e=0;for(let Me=1;Me<le.length;Me++){const De=le[$e],We=le[Me],Ye=De.start+De.count,Re=He(We.start,E.width,4),ft=He(De.start,E.width,4);We.start<=Ye+1&&Re===ft&&He(We.start+We.count-1,E.width,4)===Re?De.count=Math.max(De.count,We.start+We.count-De.start):(++$e,le[$e]=We)}le.length=$e+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ve=n.getParameter(n.UNPACK_SKIP_PIXELS),rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Me=0,De=le.length;Me<De;Me++){const We=le[Me],Ye=Math.floor(We.start/4),Re=Math.ceil(We.count/4),ft=Ye%E.width,G=Math.floor(Ye/E.width),Ne=Re,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ft,G,Ne,Ee,j,he,E.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function J(I,E,j){let he=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=n.TEXTURE_3D);const ge=we(I,E),le=E.source;t.bindTexture(he,I.__webglTexture,n.TEXTURE0+j);const $e=r.get(le);if(le.version!==$e.__version||ge===!0){t.activeTexture(n.TEXTURE0+j);const Ae=At.getPrimaries(At.workingColorSpace),Ve=E.colorSpace===jr?null:At.getPrimaries(E.colorSpace),rt=E.colorSpace===jr||Ae===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=T(E.image,!1,o.maxTextureSize);Me=Mt(E,Me);const De=l.convert(E.format,E.colorSpace),We=l.convert(E.type);let Ye=P(E.internalFormat,De,We,E.colorSpace,E.isVideoTexture);oe(he,E);let Re;const ft=E.mipmaps,G=E.isVideoTexture!==!0,Ne=$e.__version===void 0||ge===!0,Ee=le.dataReady,Ue=L(E,Me);if(E.isDepthTexture)Ye=D(E.format===Rs,E.type),Ne&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ye,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Ye,Me.width,Me.height,0,De,We,null));else if(E.isDataTexture)if(ft.length>0){G&&Ne&&t.texStorage2D(n.TEXTURE_2D,Ue,Ye,ft[0].width,ft[0].height);for(let ye=0,pe=ft.length;ye<pe;ye++)Re=ft[ye],G?Ee&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,De,We,Re.data):t.texImage2D(n.TEXTURE_2D,ye,Ye,Re.width,Re.height,0,De,We,Re.data);E.generateMipmaps=!1}else G?(Ne&&t.texStorage2D(n.TEXTURE_2D,Ue,Ye,Me.width,Me.height),Ee&&Ke(E,Me,De,We)):t.texImage2D(n.TEXTURE_2D,0,Ye,Me.width,Me.height,0,De,We,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Ye,ft[0].width,ft[0].height,Me.depth);for(let ye=0,pe=ft.length;ye<pe;ye++)if(Re=ft[ye],E.format!==Ai)if(De!==null)if(G){if(Ee)if(E.layerUpdates.size>0){const be=Zv(Re.width,Re.height,E.format,E.type);for(const st of E.layerUpdates){const It=Re.data.subarray(st*be/Re.data.BYTES_PER_ELEMENT,(st+1)*be/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,st,Re.width,Re.height,1,De,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,Me.depth,De,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Ye,Re.width,Re.height,Me.depth,0,Re.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,Me.depth,De,We,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Ye,Re.width,Re.height,Me.depth,0,De,We,Re.data)}else{G&&Ne&&t.texStorage2D(n.TEXTURE_2D,Ue,Ye,ft[0].width,ft[0].height);for(let ye=0,pe=ft.length;ye<pe;ye++)Re=ft[ye],E.format!==Ai?De!==null?G?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,De,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Ye,Re.width,Re.height,0,Re.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,De,We,Re.data):t.texImage2D(n.TEXTURE_2D,ye,Ye,Re.width,Re.height,0,De,We,Re.data)}else if(E.isDataArrayTexture)if(G){if(Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Ye,Me.width,Me.height,Me.depth),Ee)if(E.layerUpdates.size>0){const ye=Zv(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const be=Me.data.subarray(pe*ye/Me.data.BYTES_PER_ELEMENT,(pe+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,De,We,be)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,We,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ye,Me.width,Me.height,Me.depth,0,De,We,Me.data);else if(E.isData3DTexture)G?(Ne&&t.texStorage3D(n.TEXTURE_3D,Ue,Ye,Me.width,Me.height,Me.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,We,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Ye,Me.width,Me.height,Me.depth,0,De,We,Me.data);else if(E.isFramebufferTexture){if(Ne)if(G)t.texStorage2D(n.TEXTURE_2D,Ue,Ye,Me.width,Me.height);else{let ye=Me.width,pe=Me.height;for(let be=0;be<Ue;be++)t.texImage2D(n.TEXTURE_2D,be,Ye,ye,pe,0,De,We,null),ye>>=1,pe>>=1}}else if(ft.length>0){if(G&&Ne){const ye=Xe(ft[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Ye,ye.width,ye.height)}for(let ye=0,pe=ft.length;ye<pe;ye++)Re=ft[ye],G?Ee&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,De,We,Re):t.texImage2D(n.TEXTURE_2D,ye,Ye,De,We,Re);E.generateMipmaps=!1}else if(G){if(Ne){const ye=Xe(Me);t.texStorage2D(n.TEXTURE_2D,Ue,Ye,ye.width,ye.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,We,Me)}else t.texImage2D(n.TEXTURE_2D,0,Ye,De,We,Me);S(E)&&x(he),$e.__version=le.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function fe(I,E,j){if(E.image.length!==6)return;const he=we(I,E),ge=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+j);const le=r.get(ge);if(ge.version!==le.__version||he===!0){t.activeTexture(n.TEXTURE0+j);const $e=At.getPrimaries(At.workingColorSpace),Ae=E.colorSpace===jr?null:At.getPrimaries(E.colorSpace),Ve=E.colorSpace===jr||$e===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,De=[];for(let pe=0;pe<6;pe++)!rt&&!Me?De[pe]=T(E.image[pe],!0,o.maxCubemapSize):De[pe]=Me?E.image[pe].image:E.image[pe],De[pe]=Mt(E,De[pe]);const We=De[0],Ye=l.convert(E.format,E.colorSpace),Re=l.convert(E.type),ft=P(E.internalFormat,Ye,Re,E.colorSpace),G=E.isVideoTexture!==!0,Ne=le.__version===void 0||he===!0,Ee=ge.dataReady;let Ue=L(E,We);oe(n.TEXTURE_CUBE_MAP,E);let ye;if(rt){G&&Ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ft,We.width,We.height);for(let pe=0;pe<6;pe++){ye=De[pe].mipmaps;for(let be=0;be<ye.length;be++){const st=ye[be];E.format!==Ai?Ye!==null?G?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,st.width,st.height,Ye,st.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ft,st.width,st.height,0,st.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,st.width,st.height,Ye,Re,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ft,st.width,st.height,0,Ye,Re,st.data)}}}else{if(ye=E.mipmaps,G&&Ne){ye.length>0&&Ue++;const pe=Xe(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,De[pe].width,De[pe].height,Ye,Re,De[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,De[pe].width,De[pe].height,0,Ye,Re,De[pe].data);for(let be=0;be<ye.length;be++){const It=ye[be].image[pe].image;G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,It.width,It.height,Ye,Re,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ft,It.width,It.height,0,Ye,Re,It.data)}}else{G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,Re,De[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ye,Re,De[pe]);for(let be=0;be<ye.length;be++){const st=ye[be];G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,Ye,Re,st.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ft,Ye,Re,st.image[pe])}}}S(E)&&x(n.TEXTURE_CUBE_MAP),le.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function _e(I,E,j,he,ge,le){const $e=l.convert(j.format,j.colorSpace),Ae=l.convert(j.type),Ve=P(j.internalFormat,$e,Ae,j.colorSpace),rt=r.get(E),Me=r.get(j);if(Me.__renderTarget=E,!rt.__hasExternalTextures){const De=Math.max(1,E.width>>le),We=Math.max(1,E.height>>le);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,le,Ve,De,We,E.depth,0,$e,Ae,null):t.texImage2D(ge,le,Ve,De,We,0,$e,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),jt(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ge,Me.__webglTexture,0,k(E)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ge,Me.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(I,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,le=D(E.stencilBuffer,ge),$e=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k(E),le,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,k(E),le,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,le,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$e,n.RENDERBUFFER,I)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const le=he[ge],$e=l.convert(le.format,le.colorSpace),Ae=l.convert(le.type),Ve=P(le.internalFormat,$e,Ae,le.colorSpace);jt(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k(E),Ve,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,k(E),Ve,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(I,E,j){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),oe(n.TEXTURE_CUBE_MAP,E.depthTexture);const rt=l.convert(E.depthTexture.format),Me=l.convert(E.depthTexture.type);let De;E.depthTexture.format===hr?De=n.DEPTH_COMPONENT24:E.depthTexture.format===Rs&&(De=n.DEPTH24_STENCIL8);for(let We=0;We<6;We++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,De,E.width,E.height,0,rt,Me,null)}}else ce(E.depthTexture,0);const le=ge.__webglTexture,$e=k(E),Ae=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Ve=E.depthTexture.format===Rs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===hr)jt(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,Ae,le,0,$e):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,Ae,le,0);else if(E.depthTexture.format===Rs)jt(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,Ae,le,0,$e):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,Ae,le,0);else throw new Error("Unknown depthTexture format")}function at(I){const E=r.get(I),j=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let he=0;he<6;he++)Pe(E.__webglFramebuffer[he],I,he);else{const he=I.texture.mipmaps;he&&he.length>0?Pe(E.__webglFramebuffer[0],I,0):Pe(E.__webglFramebuffer,I,0)}else if(j){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=n.createRenderbuffer(),Ie(E.__webglDepthbuffer[he],I,!1);else{const ge=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,le)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ie(E.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(I,E,j){const he=r.get(I);E!==void 0&&_e(he.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&at(I)}function ht(I){const E=I.texture,j=r.get(I),he=r.get(E);I.addEventListener("dispose",O);const ge=I.textures,le=I.isWebGLCubeRenderTarget===!0,$e=ge.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=E.version,u.memory.textures++),le){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)j.__webglFramebuffer[Ae][Ve]=n.createFramebuffer()}else j.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if($e)for(let Ae=0,Ve=ge.length;Ae<Ve;Ae++){const rt=r.get(ge[Ae]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),u.memory.textures++)}if(I.samples>0&&jt(I)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ve=ge[Ae];j.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const rt=l.convert(Ve.format,Ve.colorSpace),Me=l.convert(Ve.type),De=P(Ve.internalFormat,rt,Me,Ve.colorSpace,I.isXRRenderTarget===!0),We=k(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,De,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),oe(n.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)_e(j.__webglFramebuffer[Ae][Ve],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ve);else _e(j.__webglFramebuffer[Ae],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(E)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ae=0,Ve=ge.length;Ae<Ve;Ae++){const rt=ge[Ae],Me=r.get(rt);let De=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Me.__webglTexture),oe(De,rt),_e(j.__webglFramebuffer,I,rt,n.COLOR_ATTACHMENT0+Ae,De,0),S(rt)&&x(De)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),oe(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)_e(j.__webglFramebuffer[Ve],I,E,n.COLOR_ATTACHMENT0,Ae,Ve);else _e(j.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Ae,0);S(E)&&x(Ae),t.unbindTexture()}I.depthBuffer&&at(I)}function xt(I){const E=I.textures;for(let j=0,he=E.length;j<he;j++){const ge=E[j];if(S(ge)){const le=b(I),$e=r.get(ge).__webglTexture;t.bindTexture(le,$e),x(le),t.unbindTexture()}}}const Ct=[],lt=[];function Wt(I){if(I.samples>0){if(jt(I)===!1){const E=I.textures,j=I.width,he=I.height;let ge=n.COLOR_BUFFER_BIT;const le=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$e=r.get(I),Ae=E.length>1;if(Ae)for(let rt=0;rt<E.length;rt++)t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=I.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$e.__webglColorRenderbuffer[rt]);const Me=r.get(E[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,j,he,0,0,j,he,ge,n.NEAREST),d===!0&&(Ct.length=0,lt.length=0,Ct.push(n.COLOR_ATTACHMENT0+rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ct.push(le),lt.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let rt=0;rt<E.length;rt++){t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,$e.__webglColorRenderbuffer[rt]);const Me=r.get(E[rt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function k(I){return Math.min(o.maxSamples,I.samples)}function jt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(I){const E=u.render.frame;m.get(I)!==E&&(m.set(I,E),I.update())}function Mt(I,E){const j=I.colorSpace,he=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==bo&&j!==jr&&(At.getTransfer(j)===Nt?(he!==Ai||ge!==di)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",j)),E}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sD(n,e){function t(r,o=jr){let l;const u=At.getTransfer(o);if(r===di)return n.UNSIGNED_BYTE;if(r===Cp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Rp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===cy)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===fy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===ly)return n.BYTE;if(r===uy)return n.SHORT;if(r===Va)return n.UNSIGNED_SHORT;if(r===Ap)return n.INT;if(r===Hi)return n.UNSIGNED_INT;if(r===Fi)return n.FLOAT;if(r===dr)return n.HALF_FLOAT;if(r===dy)return n.ALPHA;if(r===hy)return n.RGB;if(r===Ai)return n.RGBA;if(r===hr)return n.DEPTH_COMPONENT;if(r===Rs)return n.DEPTH_STENCIL;if(r===py)return n.RED;if(r===bp)return n.RED_INTEGER;if(r===Ro)return n.RG;if(r===Pp)return n.RG_INTEGER;if(r===Dp)return n.RGBA_INTEGER;if(r===Uu||r===Fu||r===Ou||r===Bu)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Uu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Uu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ou)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===ch||r===fh||r===dh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===uh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===hh||r===ph)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===mh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===gh)return l.COMPRESSED_R11_EAC;if(r===vh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===_h)return l.COMPRESSED_RG11_EAC;if(r===xh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===yh||r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===bh||r===Ph||r===Dh||r===Lh||r===Ih)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===yh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Th)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ih)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nh||r===Uh||r===Fh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nh)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===Bh||r===kh||r===Vh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Oh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===za?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const oD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aD=`
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

}`;class lD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Cy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ci({vertexShader:oD,fragmentShader:aD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new Qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uD extends Io{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,v=null,y=null,M=null;const T=typeof XRWebGLBinding<"u",S=new lD,x={},b=t.getContextAttributes();let P=null,D=null;const L=[],N=[],O=new St;let z=null;const A=new Ti;A.viewport=new tn;const R=new Ti;R.viewport=new tn;const V=[A,R],re=new _C;let Z=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=L[J];return fe===void 0&&(fe=new Ad,L[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=L[J];return fe===void 0&&(fe=new Ad,L[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=L[J];return fe===void 0&&(fe=new Ad,L[J]=fe),fe.getHandSpace()};function ce(J){const fe=N.indexOf(J.inputSource);if(fe===-1)return;const _e=L[fe];_e!==void 0&&(_e.update(J.inputSource,J.frame,h||u),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",Y);for(let J=0;J<L.length;J++){const fe=N[J];fe!==null&&(N[J]=null,L[J].disconnect(fe))}Z=null,se=null,S.reset();for(const J in x)delete x[J];e.setRenderTarget(P),y=null,v=null,g=null,o=null,D=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",K),o.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Rs:hr,Ie=b.stencil?za:Hi);const at={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(at),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new zi(v.textureWidth,v.textureHeight,{format:Ai,type:di,depthTexture:new Ha(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new zi(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:di,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(J){for(let fe=0;fe<J.removed.length;fe++){const _e=J.removed[fe],Ie=N.indexOf(_e);Ie>=0&&(N[Ie]=null,L[Ie].disconnect(_e))}for(let fe=0;fe<J.added.length;fe++){const _e=J.added[fe];let Ie=N.indexOf(_e);if(Ie===-1){for(let at=0;at<L.length;at++)if(at>=N.length){N.push(_e),Ie=at;break}else if(N[at]===null){N[at]=_e,Ie=at;break}if(Ie===-1)break}const Pe=L[Ie];Pe&&Pe.connect(_e)}}const W=new te,de=new te;function ne(J,fe,_e){W.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(_e.matrixWorld);const Ie=W.distanceTo(de),Pe=fe.projectionMatrix.elements,at=_e.projectionMatrix.elements,kt=Pe[14]/(Pe[10]-1),ht=Pe[14]/(Pe[10]+1),xt=(Pe[9]+1)/Pe[5],Ct=(Pe[9]-1)/Pe[5],lt=(Pe[8]-1)/Pe[0],Wt=(at[8]+1)/at[0],k=kt*lt,jt=kt*Wt,vt=Ie/(-lt+Wt),Mt=vt*-lt;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Mt),J.translateZ(vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=kt+vt,I=ht+vt,E=k-Mt,j=jt+(Ie-Mt),he=xt*ht/I*Xe,ge=Ct*ht/I*Xe;J.projectionMatrix.makePerspective(E,j,he,ge,Xe,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function F(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let fe=J.near,_e=J.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),re.near=R.near=A.near=fe,re.far=R.far=A.far=_e,(Z!==re.near||se!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),Z=re.near,se=re.far),re.layers.mask=J.layers.mask|6,A.layers.mask=re.layers.mask&3,R.layers.mask=re.layers.mask&5;const Ie=J.parent,Pe=re.cameras;F(re,Ie);for(let at=0;at<Pe.length;at++)F(Pe[at],Ie);Pe.length===2?ne(re,A,R):re.projectionMatrix.copy(A.projectionMatrix),oe(J,re,Ie)};function oe(J,fe,_e){_e===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(re)},this.getCameraTexture=function(J){return x[J]};let we=null;function He(J,fe){if(m=fe.getViewerPose(h||u),M=fe,m!==null){const _e=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Ie=!1;_e.length!==re.cameras.length&&(re.cameras.length=0,Ie=!0);for(let ht=0;ht<_e.length;ht++){const xt=_e[ht];let Ct=null;if(y!==null)Ct=y.getViewport(xt);else{const Wt=g.getViewSubImage(v,xt);Ct=Wt.viewport,ht===0&&(e.setRenderTargetTextures(D,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(D))}let lt=V[ht];lt===void 0&&(lt=new Ti,lt.layers.enable(ht),lt.viewport=new tn,V[ht]=lt),lt.matrix.fromArray(xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&(re.matrix.copy(lt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Ie===!0&&re.cameras.push(lt)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const ht=g.getDepthInformation(_e[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,o.renderState)}if(Pe&&Pe.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let ht=0;ht<_e.length;ht++){const xt=_e[ht].camera;if(xt){let Ct=x[xt];Ct||(Ct=new Cy,x[xt]=Ct);const lt=g.getCameraImage(xt);Ct.sourceTexture=lt}}}}for(let _e=0;_e<L.length;_e++){const Ie=N[_e],Pe=L[_e];Ie!==null&&Pe!==void 0&&Pe.update(Ie,fe,h||u)}we&&we(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ke=new Ry;Ke.setAnimationLoop(He),this.setAnimationLoop=function(J){we=J},this.dispose=function(){}}}const ys=new pr,cD=new sn;function fD(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,My(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,b,P,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),T(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?d(S,x,b,P):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const b=e.get(x),P=b.envMap,D=b.envMapRotation;P&&(S.envMap.value=P,ys.copy(D),ys.x*=-1,ys.y*=-1,ys.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),S.envMapRotation.value.setFromMatrix4(cD.makeRotationFromEuler(ys)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,b,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*b,S.scale.value=P*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,b){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const b=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function dD(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,P){const D=P.program;r.uniformBlockBinding(b,D)}function h(b,P){let D=o[b.id];D===void 0&&(M(b),D=m(b),o[b.id]=D,b.addEventListener("dispose",S));const L=P.program;r.updateUBOMapping(b,L);const N=e.render.frame;l[b.id]!==N&&(v(b),l[b.id]=N)}function m(b){const P=g();b.__bindingPointIndex=P;const D=n.createBuffer(),L=b.__size,N=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,D),D}function g(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const P=o[b.id],D=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let N=0,O=D.length;N<O;N++){const z=Array.isArray(D[N])?D[N]:[D[N]];for(let A=0,R=z.length;A<R;A++){const V=z[A];if(y(V,N,A,L)===!0){const re=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let se=0;for(let ce=0;ce<Z.length;ce++){const K=Z[ce],Y=T(K);typeof K=="number"||typeof K=="boolean"?(V.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,re+se,V.__data)):K.isMatrix3?(V.__data[0]=K.elements[0],V.__data[1]=K.elements[1],V.__data[2]=K.elements[2],V.__data[3]=0,V.__data[4]=K.elements[3],V.__data[5]=K.elements[4],V.__data[6]=K.elements[5],V.__data[7]=0,V.__data[8]=K.elements[6],V.__data[9]=K.elements[7],V.__data[10]=K.elements[8],V.__data[11]=0):(K.toArray(V.__data,se),se+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,re,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(b,P,D,L){const N=b.value,O=P+"_"+D;if(L[O]===void 0)return typeof N=="number"||typeof N=="boolean"?L[O]=N:L[O]=N.clone(),!0;{const z=L[O];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return L[O]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function M(b){const P=b.uniforms;let D=0;const L=16;for(let O=0,z=P.length;O<z;O++){const A=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,V=A.length;R<V;R++){const re=A[R],Z=Array.isArray(re.value)?re.value:[re.value];for(let se=0,ce=Z.length;se<ce;se++){const K=Z[se],Y=T(K),W=D%L,de=W%Y.boundary,ne=W+de;D+=de,ne!==0&&L-ne<Y.storage&&(D+=L-ne),re.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=D,D+=Y.storage}}}const N=D%L;return N>0&&(D+=L-N),b.__size=D,b.__cache={},this}function T(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",b),P}function S(b){const P=b.target;P.removeEventListener("dispose",S);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const b in o)n.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:d,update:h,dispose:x}}const hD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function pD(){return Ni===null&&(Ni=new cC(hD,16,16,Ro,dr),Ni.name="DFG_LUT",Ni.minFilter=Pn,Ni.magFilter=Pn,Ni.wrapS=sr,Ni.wrapT=sr,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class mD{constructor(e={}){const{canvas:t=FA(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=di}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const T=y,S=new Set([Dp,Pp,bp]),x=new Set([di,Hi,Va,za,Cp,Rp]),b=new Uint32Array(4),P=new Int32Array(4);let D=null,L=null;const N=[],O=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=fi;let V=0,re=0,Z=null,se=-1,ce=null;const K=new tn,Y=new tn;let W=null;const de=new Ot(0);let ne=0,F=t.width,oe=t.height,we=1,He=null,Ke=null;const J=new tn(0,0,F,oe),fe=new tn(0,0,F,oe);let _e=!1;const Ie=new Ay;let Pe=!1,at=!1;const kt=new sn,ht=new te,xt=new tn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Wt(){return Z===null?we:1}let k=r;function jt(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wp}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Et,!1),k===null){const X="webgl2";if(k=jt(X,C),k===null)throw jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Pt("WebGLRenderer: "+C.message),C}let vt,Mt,Xe,I,E,j,he,ge,le,$e,Ae,Ve,rt,Me,De,We,Ye,Re,ft,G,Ne,Ee,Ue,ye;function pe(){vt=new pP(k),vt.init(),Ee=new sD(k,vt),Mt=new sP(k,vt,e,Ee),Xe=new iD(k,vt),Mt.reversedDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),I=new vP(k),E=new G3,j=new rD(k,vt,Xe,E,Mt,Ee,I),he=new aP(A),ge=new hP(A),le=new SC(k),Ue=new iP(k,le),$e=new mP(k,le,I,Ue),Ae=new xP(k,$e,le,I),ft=new _P(k,Mt,j),We=new oP(E),Ve=new z3(A,he,ge,vt,Mt,Ue,We),rt=new fD(A,E),Me=new W3,De=new $3(vt),Re=new nP(A,he,ge,Xe,Ae,M,d),Ye=new tD(A,Ae,Mt),ye=new dD(k,I,Mt,Xe),G=new rP(k,vt,I),Ne=new gP(k,vt,I),I.programs=Ve.programs,A.capabilities=Mt,A.extensions=vt,A.properties=E,A.renderLists=Me,A.shadowMap=Ye,A.state=Xe,A.info=I}pe(),T!==di&&(z=new SP(T,t.width,t.height,o,l));const be=new uD(A,k);this.xr=be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(C){C!==void 0&&(we=C,this.setSize(F,oe,!1))},this.getSize=function(C){return C.set(F,oe)},this.setSize=function(C,X,ae=!0){if(be.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,oe=X,t.width=Math.floor(C*we),t.height=Math.floor(X*we),ae===!0&&(t.style.width=C+"px",t.style.height=X+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(F*we,oe*we).floor()},this.setDrawingBufferSize=function(C,X,ae){F=C,oe=X,we=ae,t.width=Math.floor(C*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(T===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(K)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,X,ae,ee){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,X,ae,ee),Xe.viewport(K.copy(J).multiplyScalar(we).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,X,ae,ee){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,X,ae,ee),Xe.scissor(Y.copy(fe).multiplyScalar(we).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(C){Xe.setScissorTest(_e=C)},this.setOpaqueSort=function(C){He=C},this.setTransparentSort=function(C){Ke=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ae=!0){let ee=0;if(C){let $=!1;if(Z!==null){const Le=Z.texture.format;$=S.has(Le)}if($){const Le=Z.texture.type,Oe=x.has(Le),Ce=Re.getClearColor(),Ge=Re.getClearAlpha(),ke=Ce.r,nt=Ce.g,Qe=Ce.b;Oe?(b[0]=ke,b[1]=nt,b[2]=Qe,b[3]=Ge,k.clearBufferuiv(k.COLOR,0,b)):(P[0]=ke,P[1]=nt,P[2]=Qe,P[3]=Ge,k.clearBufferiv(k.COLOR,0,P))}else ee|=k.COLOR_BUFFER_BIT}X&&(ee|=k.DEPTH_BUFFER_BIT),ae&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Re.dispose(),Me.dispose(),De.dispose(),E.dispose(),he.dispose(),ge.dispose(),Ae.dispose(),Ue.dispose(),ye.dispose(),Ve.dispose(),be.dispose(),be.removeEventListener("sessionstart",Qr),be.removeEventListener("sessionend",Jr),hi.stop()};function st(C){C.preventDefault(),Nv("WebGLRenderer: Context Lost."),R=!0}function It(){Nv("WebGLRenderer: Context Restored."),R=!1;const C=I.autoReset,X=Ye.enabled,ae=Ye.autoUpdate,ee=Ye.needsUpdate,$=Ye.type;pe(),I.autoReset=C,Ye.enabled=X,Ye.autoUpdate=ae,Ye.needsUpdate=ee,Ye.type=$}function Et(C){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function jn(C){const X=C.target;X.removeEventListener("dispose",jn),Dn(X)}function Dn(C){Uo(C),E.remove(C)}function Uo(C){const X=E.get(C).programs;X!==void 0&&(X.forEach(function(ae){Ve.releaseProgram(ae)}),C.isShaderMaterial&&Ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ae,ee,$,Le){X===null&&(X=Ct);const Oe=$.isMesh&&$.matrixWorld.determinant()<0,Ce=nl(C,X,ae,ee,$);Xe.setMaterial(ee,Oe);let Ge=ae.index,ke=1;if(ee.wireframe===!0){if(Ge=$e.getWireframeAttribute(ae),Ge===void 0)return;ke=2}const nt=ae.drawRange,Qe=ae.attributes.position;let pt=nt.start*ke,Tt=(nt.start+nt.count)*ke;Le!==null&&(pt=Math.max(pt,Le.start*ke),Tt=Math.min(Tt,(Le.start+Le.count)*ke)),Ge!==null?(pt=Math.max(pt,0),Tt=Math.min(Tt,Ge.count)):Qe!=null&&(pt=Math.max(pt,0),Tt=Math.min(Tt,Qe.count));const Bt=Tt-pt;if(Bt<0||Bt===1/0)return;Ue.setup($,ee,Ce,ae,Ge);let Ft,Rt=G;if(Ge!==null&&(Ft=le.get(Ge),Rt=Ne,Rt.setIndex(Ft)),$.isMesh)ee.wireframe===!0?(Xe.setLineWidth(ee.wireframeLinewidth*Wt()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if($.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),Xe.setLineWidth(Je*Wt()),$.isLineSegments?Rt.setMode(k.LINES):$.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else $.isPoints?Rt.setMode(k.POINTS):$.isSprite&&Rt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Rt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Je=$._multiDrawStarts,Dt=$._multiDrawCounts,_t=$._multiDrawCount,Sn=Ge?le.get(Ge).bytesPerElement:1,Ri=E.get(ee).currentProgram.getUniforms();for(let on=0;on<_t;on++)Ri.setValue(k,"_gl_DrawID",on),Rt.render(Je[on]/Sn,Dt[on])}else if($.isInstancedMesh)Rt.renderInstances(pt,Bt,$.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Dt=Math.min(ae.instanceCount,Je);Rt.renderInstances(pt,Bt,Dt)}else Rt.render(pt,Bt)};function vr(C,X,ae){C.transparent===!0&&C.side===rr&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,es(C,X,ae),C.side=Kr,C.needsUpdate=!0,es(C,X,ae),C.side=rr):es(C,X,ae)}this.compile=function(C,X,ae=null){ae===null&&(ae=C),L=De.get(ae),L.init(X),O.push(L),ae.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),C!==ae&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const ee=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Le=$.material;if(Le)if(Array.isArray(Le))for(let Oe=0;Oe<Le.length;Oe++){const Ce=Le[Oe];vr(Ce,ae,$),ee.add(Ce)}else vr(Le,ae,$),ee.add(Le)}),L=O.pop(),ee},this.compileAsync=function(C,X,ae=null){const ee=this.compile(C,X,ae);return new Promise($=>{function Le(){if(ee.forEach(function(Oe){E.get(Oe).currentProgram.isReady()&&ee.delete(Oe)}),ee.size===0){$(C);return}setTimeout(Le,10)}vt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Fo=null;function Zr(C){Fo&&Fo(C)}function Qr(){hi.stop()}function Jr(){hi.start()}const hi=new Ry;hi.setAnimationLoop(Zr),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(C){Fo=C,be.setAnimationLoop(C),C===null?hi.stop():hi.start()},be.addEventListener("sessionstart",Qr),be.addEventListener("sessionend",Jr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ae=be.enabled===!0&&be.isPresenting===!0,ee=z!==null&&(Z===null||ae)&&z.begin(A,Z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(X),X=be.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,Z),L=De.get(C,O.length),L.init(X),O.push(L),kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ie.setFromProjectionMatrix(kt,Oi,X.reversedDepth),at=this.localClippingEnabled,Pe=We.init(this.clippingPlanes,at),D=Me.get(C,N.length),D.init(),N.push(D),be.enabled===!0&&be.isPresenting===!0){const Oe=A.xr.getDepthSensingMesh();Oe!==null&&Oo(Oe,X,-1/0,A.sortObjects)}Oo(C,X,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(He,Ke),lt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,lt&&Re.addToRenderList(D,C),this.info.render.frame++,Pe===!0&&We.beginShadows();const $=L.state.shadowsArray;if(Ye.render($,C,X),Pe===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&z.hasRenderPass())===!1){const Oe=D.opaque,Ce=D.transmissive;if(L.setupLights(),X.isArrayCamera){const Ge=X.cameras;if(Ce.length>0)for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke];el(Oe,Ce,C,Qe)}lt&&Re.render(C);for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke];Ja(D,C,Qe,Qe.viewport)}}else Ce.length>0&&el(Oe,Ce,C,X),lt&&Re.render(C),Ja(D,C,X)}Z!==null&&re===0&&(j.updateMultisampleRenderTarget(Z),j.updateRenderTargetMipmap(Z)),ee&&z.end(A),C.isScene===!0&&C.onAfterRender(A,C,X),Ue.resetDefaultState(),se=-1,ce=null,O.pop(),O.length>0?(L=O[O.length-1],Pe===!0&&We.setGlobalState(A.clippingPlanes,L.state.camera)):L=null,N.pop(),N.length>0?D=N[N.length-1]:D=null};function Oo(C,X,ae,ee){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ie.intersectsSprite(C)){ee&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(kt);const Oe=Ae.update(C),Ce=C.material;Ce.visible&&D.push(C,Oe,Ce,ae,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ie.intersectsObject(C))){const Oe=Ae.update(C),Ce=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),xt.copy(Oe.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(kt)),Array.isArray(Ce)){const Ge=Oe.groups;for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke],pt=Ce[Qe.materialIndex];pt&&pt.visible&&D.push(C,Oe,pt,ae,xt.z,Qe)}}else Ce.visible&&D.push(C,Oe,Ce,ae,xt.z,null)}}const Le=C.children;for(let Oe=0,Ce=Le.length;Oe<Ce;Oe++)Oo(Le[Oe],X,ae,ee)}function Ja(C,X,ae,ee){const{opaque:$,transmissive:Le,transparent:Oe}=C;L.setupLightsView(ae),Pe===!0&&We.setGlobalState(A.clippingPlanes,ae),ee&&Xe.viewport(K.copy(ee)),$.length>0&&ti($,X,ae),Le.length>0&&ti(Le,X,ae),Oe.length>0&&ti(Oe,X,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function el(C,X,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const pt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new zi(1,1,{generateMipmaps:!0,type:pt?dr:di,minFilter:Cs,samples:Mt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Le=L.state.transmissionRenderTarget[ee.id],Oe=ee.viewport||K;Le.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);const Ce=A.getRenderTarget(),Ge=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(de),ne=A.getClearAlpha(),ne<1&&A.setClearColor(16777215,.5),A.clear(),lt&&Re.render(ae);const nt=A.toneMapping;A.toneMapping=Vi;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),Pe===!0&&We.setGlobalState(A.clippingPlanes,ee),ti(C,ae,ee),j.updateMultisampleRenderTarget(Le),j.updateRenderTargetMipmap(Le),vt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Tt=0,Bt=X.length;Tt<Bt;Tt++){const Ft=X[Tt],{object:Rt,geometry:Je,material:Dt,group:_t}=Ft;if(Dt.side===rr&&Rt.layers.test(ee.layers)){const Sn=Dt.side;Dt.side=Wn,Dt.needsUpdate=!0,Bo(Rt,ae,ee,Je,Dt,_t),Dt.side=Sn,Dt.needsUpdate=!0,pt=!0}}pt===!0&&(j.updateMultisampleRenderTarget(Le),j.updateRenderTargetMipmap(Le))}A.setRenderTarget(Ce,Ge,ke),A.setClearColor(de,ne),Qe!==void 0&&(ee.viewport=Qe),A.toneMapping=nt}function ti(C,X,ae){const ee=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Le=C.length;$<Le;$++){const Oe=C[$],{object:Ce,geometry:Ge,group:ke}=Oe;let nt=Oe.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Ce.layers.test(ae.layers)&&Bo(Ce,X,ae,Ge,nt,ke)}}function Bo(C,X,ae,ee,$,Le){C.onBeforeRender(A,X,ae,ee,$,Le),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,X,ae,ee,C,Le),$.transparent===!0&&$.side===rr&&$.forceSinglePass===!1?($.side=Wn,$.needsUpdate=!0,A.renderBufferDirect(ae,X,ee,$,C,Le),$.side=Kr,$.needsUpdate=!0,A.renderBufferDirect(ae,X,ee,$,C,Le),$.side=rr):A.renderBufferDirect(ae,X,ee,$,C,Le),C.onAfterRender(A,X,ae,ee,$,Le)}function es(C,X,ae){X.isScene!==!0&&(X=Ct);const ee=E.get(C),$=L.state.lights,Le=L.state.shadowsArray,Oe=$.state.version,Ce=Ve.getParameters(C,$.state,Le,X,ae),Ge=Ve.getProgramCacheKey(Ce);let ke=ee.programs;ee.environment=C.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(C.isMeshStandardMaterial?ge:he).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",jn),ke=new Map,ee.programs=ke);let nt=ke.get(Ge);if(nt!==void 0){if(ee.currentProgram===nt&&ee.lightsStateVersion===Oe)return ko(C,Ce),nt}else Ce.uniforms=Ve.getUniforms(C),C.onBeforeCompile(Ce,A),nt=Ve.acquireProgram(Ce,Ge),ke.set(Ge,nt),ee.uniforms=Ce.uniforms;const Qe=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=We.uniform),ko(C,Ce),ee.needsLights=rl(C),ee.lightsStateVersion=Oe,ee.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=nt,ee.uniformsList=null,nt}function tl(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=ku.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function ko(C,X){const ae=E.get(C);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function nl(C,X,ae,ee,$){X.isScene!==!0&&(X=Ct),j.resetTextureUnits();const Le=X.fog,Oe=ee.isMeshStandardMaterial?X.environment:null,Ce=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:bo,Ge=(ee.isMeshStandardMaterial?ge:he).get(ee.envMap||Oe),ke=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,nt=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,Tt=!!ae.morphAttributes.color;let Bt=Vi;ee.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Rt=Ft!==void 0?Ft.length:0,Je=E.get(ee),Dt=L.state.lights;if(Pe===!0&&(at===!0||C!==ce)){const fn=C===ce&&ee.id===se;We.setState(ee,C,fn)}let _t=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Dt.state.version||Je.outputColorSpace!==Ce||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==Ge||ee.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==ke||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==pt||Je.morphColors!==Tt||Je.toneMapping!==Bt||Je.morphTargetsCount!==Rt)&&(_t=!0):(_t=!0,Je.__version=ee.version);let Sn=Je.currentProgram;_t===!0&&(Sn=es(ee,X,$));let Ri=!1,on=!1,ts=!1;const Lt=Sn.getUniforms(),ut=Je.uniforms;if(Xe.useProgram(Sn.program)&&(Ri=!0,on=!0,ts=!0),ee.id!==se&&(se=ee.id,on=!0),Ri||ce!==C){Xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(k,"projectionMatrix",C.projectionMatrix),Lt.setValue(k,"viewMatrix",C.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(k,ht.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ce!==C&&(ce=C,on=!0,ts=!0)}if(Je.needsLights&&(Dt.state.directionalShadowMap.length>0&&Lt.setValue(k,"directionalShadowMap",Dt.state.directionalShadowMap,j),Dt.state.spotShadowMap.length>0&&Lt.setValue(k,"spotShadowMap",Dt.state.spotShadowMap,j),Dt.state.pointShadowMap.length>0&&Lt.setValue(k,"pointShadowMap",Dt.state.pointShadowMap,j)),$.isSkinnedMesh){Lt.setOptional(k,$,"bindMatrix"),Lt.setOptional(k,$,"bindMatrixInverse");const fn=$.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Lt.setValue(k,"boneTexture",fn.boneTexture,j))}$.isBatchedMesh&&(Lt.setOptional(k,$,"batchingTexture"),Lt.setValue(k,"batchingTexture",$._matricesTexture,j),Lt.setOptional(k,$,"batchingIdTexture"),Lt.setValue(k,"batchingIdTexture",$._indirectTexture,j),Lt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Lt.setValue(k,"batchingColorTexture",$._colorsTexture,j));const Ln=ae.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ft.update($,ae,Sn),(on||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Lt.setValue(k,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ut.envMap.value=Ge,ut.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(ut.envMapIntensity.value=X.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=pD()),on&&(Lt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&il(ut,ts),Le&&ee.fog===!0&&rt.refreshFogUniforms(ut,Le),rt.refreshMaterialUniforms(ut,ee,we,oe,L.state.transmissionRenderTarget[C.id]),ku.upload(k,tl(Je),ut,j)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ku.upload(k,tl(Je),ut,j),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Lt.setValue(k,"center",$.center),Lt.setValue(k,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(k,"normalMatrix",$.normalMatrix),Lt.setValue(k,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const fn=ee.uniformsGroups;for(let dn=0,Ls=fn.length;dn<Ls;dn++){const bi=fn[dn];ye.update(bi,Sn),ye.bind(bi,Sn)}}return Sn}function il(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,X,ae){const ee=E.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=X,E.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ae=E.get(C);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const ac=k.createFramebuffer();this.setRenderTarget=function(C,X=0,ae=0){Z=C,V=X,re=ae;let ee=null,$=!1,Le=!1;if(C){const Ce=E.get(C);if(Ce.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(k.FRAMEBUFFER,Ce.__webglFramebuffer),K.copy(C.viewport),Y.copy(C.scissor),W=C.scissorTest,Xe.viewport(K),Xe.scissor(Y),Xe.setScissorTest(W),se=-1;return}else if(Ce.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Ce.__hasExternalTextures)j.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const ke=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?ee=ke[X][ae]:ee=ke[X],$=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?ee=E.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?ee=ke[ae]:ee=ke,K.copy(C.viewport),Y.copy(C.scissor),W=C.scissorTest}else K.copy(J).multiplyScalar(we).floor(),Y.copy(fe).multiplyScalar(we).floor(),W=_e;if(ae!==0&&(ee=ac),Xe.bindFramebuffer(k.FRAMEBUFFER,ee)&&Xe.drawBuffers(C,ee),Xe.viewport(K),Xe.scissor(Y),Xe.setScissorTest(W),$){const Ce=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,ae)}else if(Le){const Ce=X;for(let Ge=0;Ge<C.textures.length;Ge++){const ke=E.get(C.textures[Ge]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,ae,Ce)}}else if(C!==null&&ae!==0){const Ce=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ce.__webglTexture,ae)}se=-1},this.readRenderTargetPixels=function(C,X,ae,ee,$,Le,Oe,Ce=0){if(!(C&&C.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){Xe.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const ke=C.textures[Ce],nt=ke.format,Qe=ke.type;if(!Mt.textureFormatReadable(nt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Qe)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ee&&ae>=0&&ae<=C.height-$&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ce),k.readPixels(X,ae,ee,$,Ee.convert(nt),Ee.convert(Qe),Le))}finally{const ke=Z!==null?E.get(Z).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,X,ae,ee,$,Le,Oe,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(X>=0&&X<=C.width-ee&&ae>=0&&ae<=C.height-$){Xe.bindFramebuffer(k.FRAMEBUFFER,Ge);const ke=C.textures[Ce],nt=ke.format,Qe=ke.type;if(!Mt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.bufferData(k.PIXEL_PACK_BUFFER,Le.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ce),k.readPixels(X,ae,ee,$,Ee.convert(nt),Ee.convert(Qe),0);const Tt=Z!==null?E.get(Z).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,Tt);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await OA(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Le),k.deleteBuffer(pt),k.deleteSync(Bt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ae=0){const ee=Math.pow(2,-ae),$=Math.floor(C.image.width*ee),Le=Math.floor(C.image.height*ee),Oe=X!==null?X.x:0,Ce=X!==null?X.y:0;j.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ae,0,0,Oe,Ce,$,Le),Xe.unbindTexture()};const lc=k.createFramebuffer(),Yt=k.createFramebuffer();this.copyTextureToTexture=function(C,X,ae=null,ee=null,$=0,Le=null){Le===null&&($!==0?(Ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=$,$=0):Le=0);let Oe,Ce,Ge,ke,nt,Qe,pt,Tt,Bt;const Ft=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(ae!==null)Oe=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,nt=ae.min.y,Qe=ae.isBox3?ae.min.z:0;else{const Ln=Math.pow(2,-$);Oe=Math.floor(Ft.width*Ln),Ce=Math.floor(Ft.height*Ln),C.isDataArrayTexture?Ge=Ft.depth:C.isData3DTexture?Ge=Math.floor(Ft.depth*Ln):Ge=1,ke=0,nt=0,Qe=0}ee!==null?(pt=ee.x,Tt=ee.y,Bt=ee.z):(pt=0,Tt=0,Bt=0);const Rt=Ee.convert(X.format),Je=Ee.convert(X.type);let Dt;X.isData3DTexture?(j.setTexture3D(X,0),Dt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),Dt=k.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),Dt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),Sn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ri=k.getParameter(k.UNPACK_SKIP_PIXELS),on=k.getParameter(k.UNPACK_SKIP_ROWS),ts=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Lt=C.isDataArrayTexture||C.isData3DTexture,ut=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Ln=E.get(C),fn=E.get(X),dn=E.get(Ln.__renderTarget),Ls=E.get(fn.__renderTarget);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,dn.__webglFramebuffer),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let bi=0;bi<Ge;bi++)Lt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(C).__webglTexture,$,Qe+bi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Le,Bt+bi)),k.blitFramebuffer(ke,nt,Oe,Ce,pt,Tt,Oe,Ce,k.DEPTH_BUFFER_BIT,k.NEAREST);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||E.has(C)){const Ln=E.get(C),fn=E.get(X);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,lc),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Yt);for(let dn=0;dn<Ge;dn++)Lt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ln.__webglTexture,$,Qe+dn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ln.__webglTexture,$),ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,Le,Bt+dn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,Le),$!==0?k.blitFramebuffer(ke,nt,Oe,Ce,pt,Tt,Oe,Ce,k.COLOR_BUFFER_BIT,k.NEAREST):ut?k.copyTexSubImage3D(Dt,Le,pt,Tt,Bt+dn,ke,nt,Oe,Ce):k.copyTexSubImage2D(Dt,Le,pt,Tt,ke,nt,Oe,Ce);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ut?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Dt,Le,pt,Tt,Bt,Oe,Ce,Ge,Rt,Je,Ft.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,Le,pt,Tt,Bt,Oe,Ce,Ge,Rt,Ft.data):k.texSubImage3D(Dt,Le,pt,Tt,Bt,Oe,Ce,Ge,Rt,Je,Ft):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Le,pt,Tt,Oe,Ce,Rt,Je,Ft.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Le,pt,Tt,Ft.width,Ft.height,Rt,Ft.data):k.texSubImage2D(k.TEXTURE_2D,Le,pt,Tt,Oe,Ce,Rt,Je,Ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Sn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ri),k.pixelStorei(k.UNPACK_SKIP_ROWS,on),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ts),Le===0&&X.generateMipmaps&&k.generateMipmap(Dt),Xe.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){V=0,re=0,Z=null,Xe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const gD=`
precision highp float;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,vD=`
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
`,S_=8;function _D(n){let e=n.trim();e.startsWith("#")&&(e=e.slice(1));let t=255,r=255,o=255;return e.length===3?(t=parseInt(e[0]+e[0],16),r=parseInt(e[1]+e[1],16),o=parseInt(e[2]+e[2],16)):e.length===6&&(t=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16)),new te(t/255,r/255,o/255)}function xD({linesGradient:n,enabledWaves:e=["top","middle","bottom"],lineCount:t=[6],lineDistance:r=[5],topWavePosition:o,middleWavePosition:l,bottomWavePosition:u={x:2,y:-.7,rotate:-1},animationSpeed:c=1,interactive:d=!0,bendRadius:h=5,bendStrength:m=-.5,mouseDamping:g=.05,parallax:v=!0,parallaxStrength:y=.2,mixBlendMode:M="screen"}){const T=me.useRef(null),S=me.useRef(new St(-1e3,-1e3)),x=me.useRef(new St(-1e3,-1e3)),b=me.useRef(0),P=me.useRef(0),D=me.useRef(new St(0,0)),L=me.useRef(new St(0,0)),N=se=>{if(typeof t=="number")return t;if(!e.includes(se))return 0;const ce=e.indexOf(se);return t[ce]??6},O=se=>{if(typeof r=="number")return r;if(!e.includes(se))return .1;const ce=e.indexOf(se);return r[ce]??.1},z=e.includes("top")?N("top"):0,A=e.includes("middle")?N("middle"):0,R=e.includes("bottom")?N("bottom"):0,V=e.includes("top")?O("top")*.01:.01,re=e.includes("middle")?O("middle")*.01:.01,Z=e.includes("bottom")?O("bottom")*.01:.01;return me.useEffect(()=>{if(!T.current)return;const se=new uC,ce=new Fp(-1,1,1,-1,0,1);ce.position.z=1;const K=new mD({antialias:!0,alpha:!1});K.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),K.domElement.style.width="100%",K.domElement.style.height="100%",T.current.appendChild(K.domElement);const Y={iTime:{value:0},iResolution:{value:new te(1,1,1)},animationSpeed:{value:c},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:z},middleLineCount:{value:A},bottomLineCount:{value:R},topLineDistance:{value:V},middleLineDistance:{value:re},bottomLineDistance:{value:Z},topWavePosition:{value:new te((o==null?void 0:o.x)??10,(o==null?void 0:o.y)??.5,(o==null?void 0:o.rotate)??-.4)},middleWavePosition:{value:new te((l==null?void 0:l.x)??5,(l==null?void 0:l.y)??0,(l==null?void 0:l.rotate)??.2)},bottomWavePosition:{value:new te((u==null?void 0:u.x)??2,(u==null?void 0:u.y)??-.7,(u==null?void 0:u.rotate)??.4)},iMouse:{value:new St(-1e3,-1e3)},interactive:{value:d},bendRadius:{value:h},bendStrength:{value:m},bendInfluence:{value:0},parallax:{value:v},parallaxStrength:{value:y},parallaxOffset:{value:new St(0,0)},lineGradient:{value:Array.from({length:S_},()=>new te(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const _e=n.slice(0,S_);Y.lineGradientCount.value=_e.length,_e.forEach((Ie,Pe)=>{const at=_D(Ie);Y.lineGradient.value[Pe].set(at.x,at.y,at.z)})}const W=new Ci({uniforms:Y,vertexShader:gD,fragmentShader:vD}),de=new Qa(2,2),ne=new Wi(de,W);se.add(ne);const F=new xC,oe=()=>{const _e=T.current,Ie=_e.clientWidth||1,Pe=_e.clientHeight||1;K.setSize(Ie,Pe,!1);const at=K.domElement.width,kt=K.domElement.height;Y.iResolution.value.set(at,kt,1)};oe();const we=typeof ResizeObserver<"u"?new ResizeObserver(oe):null;we&&T.current&&we.observe(T.current);const He=_e=>{const Ie=K.domElement.getBoundingClientRect(),Pe=_e.clientX-Ie.left,at=_e.clientY-Ie.top,kt=K.getPixelRatio();if(S.current.set(Pe*kt,(Ie.height-at)*kt),b.current=1,v){const ht=Ie.width/2,xt=Ie.height/2,Ct=(Pe-ht)/Ie.width,lt=-(at-xt)/Ie.height;D.current.set(Ct*y,lt*y)}},Ke=()=>{b.current=0};d&&(K.domElement.addEventListener("pointermove",He),K.domElement.addEventListener("pointerleave",Ke));let J=0;const fe=()=>{Y.iTime.value=F.getElapsedTime(),d&&(x.current.lerp(S.current,g),Y.iMouse.value.copy(x.current),P.current+=(b.current-P.current)*g,Y.bendInfluence.value=P.current),v&&(L.current.lerp(D.current,g),Y.parallaxOffset.value.copy(L.current)),K.render(se,ce),J=requestAnimationFrame(fe)};return fe(),()=>{cancelAnimationFrame(J),we&&T.current&&we.disconnect(),d&&(K.domElement.removeEventListener("pointermove",He),K.domElement.removeEventListener("pointerleave",Ke)),de.dispose(),W.dispose(),K.dispose(),K.domElement.parentElement&&K.domElement.parentElement.removeChild(K.domElement)}},[n,e,t,r,o,l,u,c,d,h,m,g,v,y,z,A,R,V,re,Z]),ue.jsx("div",{ref:T,className:"floating-lines-container",style:{mixBlendMode:M}})}const yD=me.lazy(()=>mr(()=>import("./Stats-BMy84511.js"),[])),SD=me.lazy(()=>mr(()=>import("./Experience-D1bgOPmN.js"),[])),MD=me.lazy(()=>mr(()=>import("./Education-BTvkFMPy.js"),[])),ED=me.lazy(()=>mr(()=>import("./Skills-Cd4MN6eB.js"),[])),TD=me.lazy(()=>mr(()=>import("./Projects-CXj1MrWO.js"),[])),wD=me.lazy(()=>mr(()=>import("./Certifications-P8H8bzci.js"),[])),AD=me.lazy(()=>mr(()=>import("./About-C8oG1xDY.js"),[])),CD=me.lazy(()=>mr(()=>import("./Contact-CfP4OHsy.js"),[])),RD=me.lazy(()=>mr(()=>import("./WhatsAppFloat-CBWGCW4Y.js"),[])),Hr=()=>ue.jsx("div",{className:"py-20 flex justify-center",children:ue.jsx("div",{className:"w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin"})}),bD=me.memo(function(){const[e,t]=me.useState(!0),{t:r}=$u();return me.useEffect(()=>{"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"instant"})},[]),ue.jsxs(ue.Fragment,{children:[e&&ue.jsx(tA,{onComplete:()=>t(!1)}),ue.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:ue.jsx(xD,{linesGradient:["#00f5ff","#bf00ff","#00f5ff"],enabledWaves:["top","middle","bottom"],lineCount:[8,12,6],lineDistance:[6,4,8],bendRadius:5,bendStrength:-.5,interactive:!1,parallax:!1,animationSpeed:.8,mixBlendMode:"screen"})}),ue.jsx(J1,{}),ue.jsx(me.Suspense,{fallback:null,children:ue.jsx(RD,{})}),ue.jsxs("div",{className:"min-h-screen bg-dark-bg/80 relative z-10",children:[ue.jsxs("main",{className:"overflow-x-hidden",children:[ue.jsx(nA,{}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(yD,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(SD,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(MD,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(ED,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(TD,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(wD,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(AD,{})}),ue.jsx(me.Suspense,{fallback:ue.jsx(Hr,{}),children:ue.jsx(CD,{})})]}),ue.jsx("footer",{className:"py-8 text-center border-t border-dark-border",children:ue.jsxs("p",{className:"text-text-muted text-sm",children:["© ",new Date().getFullYear()," Carlos Jair Castorena. ",r.footer.rights]})})]})]})});xM.createRoot(document.getElementById("root")).render(ue.jsx(me.StrictMode,{children:ue.jsx(Z1,{children:ue.jsx(EM,{children:ue.jsx(bD,{})})})}));export{RM as A,me as a,ue as j,Ut as m,Wh as r,$u as u};
