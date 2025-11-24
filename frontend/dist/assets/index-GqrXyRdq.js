function d1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function h0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function h1(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var f0={exports:{}},sc={},p0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),f1=Symbol.for("react.portal"),p1=Symbol.for("react.fragment"),m1=Symbol.for("react.strict_mode"),g1=Symbol.for("react.profiler"),y1=Symbol.for("react.provider"),v1=Symbol.for("react.context"),_1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),x1=Symbol.for("react.memo"),E1=Symbol.for("react.lazy"),fy=Symbol.iterator;function T1(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,y0={};function Bi(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||m0}Bi.prototype.isReactComponent={};Bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v0(){}v0.prototype=Bi.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||m0}var ep=Zf.prototype=new v0;ep.constructor=Zf;g0(ep,Bi.prototype);ep.isPureReactComponent=!0;var py=Array.isArray,_0=Object.prototype.hasOwnProperty,tp={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)_0.call(e,r)&&!w0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Oa,type:t,key:i,ref:o,props:s,_owner:tp.current}}function I1(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function S1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var my=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?S1(""+t.key):e.toString(36)}function Bl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case f1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Id(o,0):r,py(s)?(n="",t!=null&&(n=t.replace(my,"$&/")+"/"),Bl(s,e,n,"",function(d){return d})):s!=null&&(np(s)&&(s=I1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(my,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",py(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Id(i,l);o+=Bl(i,e,n,u,s)}else if(u=T1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Id(i,l++),o+=Bl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],s=0;return Bl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function A1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},zl={transition:null},P1={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:zl,ReactCurrentOwner:tp};function E0(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Bi;ee.Fragment=p1;ee.Profiler=g1;ee.PureComponent=Zf;ee.StrictMode=m1;ee.Suspense=w1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;ee.act=E0;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=tp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)_0.call(e,u)&&!w0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Oa,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:v1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y1,_context:t},t.Consumer=t};ee.createElement=x0;ee.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:_1,render:t}};ee.isValidElement=np;ee.lazy=function(t){return{$$typeof:E1,_payload:{_status:-1,_result:t},_init:A1}};ee.memo=function(t,e){return{$$typeof:x1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=zl.transition;zl.transition={};try{t()}finally{zl.transition=e}};ee.unstable_act=E0;ee.useCallback=function(t,e){return At.current.useCallback(t,e)};ee.useContext=function(t){return At.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return At.current.useDeferredValue(t)};ee.useEffect=function(t,e){return At.current.useEffect(t,e)};ee.useId=function(){return At.current.useId()};ee.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return At.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};ee.useRef=function(t){return At.current.useRef(t)};ee.useState=function(t){return At.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return At.current.useTransition()};ee.version="18.3.1";p0.exports=ee;var j=p0.exports;const T0=h0(j),N1=d1({__proto__:null,default:T0},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=j,C1=Symbol.for("react.element"),k1=Symbol.for("react.fragment"),R1=Object.prototype.hasOwnProperty,O1=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j1={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)R1.call(e,r)&&!j1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:C1,type:t,key:i,ref:o,props:s,_owner:O1.current}}sc.Fragment=k1;sc.jsx=I0;sc.jsxs=I0;f0.exports=sc;var c=f0.exports,_h={},S0={exports:{}},Wt={},A0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var _e=J-1>>>1,ue=z[_e];if(0<s(ue,Q))z[_e]=Q,z[J]=ue,J=_e;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var _e=0,ue=z.length,Ne=ue>>>1;_e<Ne;){var jn=2*(_e+1)-1,Dn=z[jn],Ln=jn+1,Mn=z[Ln];if(0>s(Dn,J))Ln<ue&&0>s(Mn,Dn)?(z[_e]=Mn,z[Ln]=J,_e=Ln):(z[_e]=Dn,z[jn]=J,_e=jn);else if(Ln<ue&&0>s(Mn,J))z[_e]=Mn,z[Ln]=J,_e=Ln;else break e}}return Q}function s(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,m=null,g=3,w=!1,S=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=z)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function b(z){if(N=!1,y(z),!S)if(n(u)!==null)S=!0,Zi(L);else{var Q=n(d);Q!==null&&On(b,Q.startTime-z)}}function L(z,Q){S=!1,N&&(N=!1,E(_),_=-1),w=!0;var J=g;try{for(y(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!k());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var ue=_e(m.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),y(Q)}else r(u);m=n(u)}if(m!==null)var Ne=!0;else{var jn=n(d);jn!==null&&On(b,jn.startTime-Q),Ne=!1}return Ne}finally{m=null,g=J,w=!1}}var V=!1,T=null,_=-1,A=5,I=-1;function k(){return!(t.unstable_now()-I<A)}function R(){if(T!==null){var z=t.unstable_now();I=z;var Q=!0;try{Q=T(!0,z)}finally{Q?P():(V=!1,T=null)}}else V=!1}var P;if(typeof x=="function")P=function(){x(R)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Rn=We.port2;We.port1.onmessage=R,P=function(){Rn.postMessage(null)}}else P=function(){C(R,0)};function Zi(z){T=z,V||(V=!0,P())}function On(z,Q){_=C(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,Zi(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:ue,sortIndex:-1},J>_e?(z.sortIndex=J,e(d,z),n(u)===null&&z===n(d)&&(N?(E(_),_=-1):N=!0,On(b,J-_e))):(z.sortIndex=ue,e(u,z),S||w||(S=!0,Zi(L))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(P0);A0.exports=P0;var D1=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1=j,Ht=D1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,Zo={};function Rs(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(Zo[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,M1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gy={},yy={};function V1(t){return wh.call(yy,t)?!0:wh.call(gy,t)?!1:M1.test(t)?yy[t]=!0:(gy[t]=!0,!1)}function U1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F1(t,e,n,r){if(e===null||typeof e>"u"||U1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,sp);nt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,sp);nt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,sp);nt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ip(t,e,n,r){var s=nt.hasOwnProperty(e)?nt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(F1(e,n,s,r)&&(n=null),r||s===null?V1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=L1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),b0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),k0=Symbol.for("react.offscreen"),vy=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=vy&&t[vy]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Sd;function Po(t){if(Sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sd=e&&e[1]||""}return`
`+Sd+t}var Ad=!1;function Pd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Po(t):""}function $1(t){switch(t.tag){case 5:return Po(t.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return t=Pd(t.type,!1),t;case 11:return t=Pd(t.type.render,!1),t;case 1:return t=Pd(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zs:return"Portal";case xh:return"Profiler";case op:return"StrictMode";case Eh:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C0:return(t.displayName||"Context")+".Consumer";case b0:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function B1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function z1(t){var e=R0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=z1(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=R0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _y(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&ip(t,"checked",e,!1)}function Ah(t,e){j0(t,e);var n=Br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Br(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Nh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(No(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Br(n)}}function D0(t,e){var n=Br(e.value),r=Br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ey(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,M0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q1=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){q1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function V0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=V0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var H1=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(H1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,pi=null,mi=null;function Ty(t){if(t=La(t)){if(typeof Oh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=uc(e),Oh(t.stateNode,t.type,e))}}function F0(t){pi?mi?mi.push(t):mi=[t]:pi=t}function $0(){if(pi){var t=pi,e=mi;if(mi=pi=null,Ty(t),e)for(t=0;t<e.length;t++)Ty(e[t])}}function B0(t,e){return t(e)}function z0(){}var Nd=!1;function q0(t,e,n){if(Nd)return t(e,n);Nd=!0;try{return B0(t,e,n)}finally{Nd=!1,(pi!==null||mi!==null)&&(z0(),$0())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var jh=!1;if(Zn)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){jh=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{jh=!1}function W1(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Uo=!1,du=null,hu=!1,Dh=null,K1={onError:function(t){Uo=!0,du=t}};function G1(t,e,n,r,s,i,o,l,u){Uo=!1,du=null,W1.apply(K1,arguments)}function Q1(t,e,n,r,s,i,o,l,u){if(G1.apply(this,arguments),Uo){if(Uo){var d=du;Uo=!1,du=null}else throw Error(F(198));hu||(hu=!0,Dh=d)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Iy(t){if(Os(t)!==t)throw Error(F(188))}function Y1(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Iy(s),t;if(i===r)return Iy(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function W0(t){return t=Y1(t),t!==null?K0(t):null}function K0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K0(t);if(e!==null)return e;t=t.sibling}return null}var G0=Ht.unstable_scheduleCallback,Sy=Ht.unstable_cancelCallback,X1=Ht.unstable_shouldYield,J1=Ht.unstable_requestPaint,Re=Ht.unstable_now,Z1=Ht.unstable_getCurrentPriorityLevel,cp=Ht.unstable_ImmediatePriority,Q0=Ht.unstable_UserBlockingPriority,fu=Ht.unstable_NormalPriority,eA=Ht.unstable_LowPriority,Y0=Ht.unstable_IdlePriority,ic=null,Tn=null;function tA(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:sA,nA=Math.log,rA=Math.LN2;function sA(t){return t>>>=0,t===0?32:31-(nA(t)/rA|0)|0}var El=64,Tl=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=bo(l):(i&=o,i!==0&&(r=bo(i)))}else o=n&~s,o!==0?r=bo(o):i!==0&&(r=bo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),s=1<<n,r|=t[n],e&=~s;return r}function iA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-cn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=iA(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X0(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function aA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-cn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z0,hp,ew,tw,nw,Mh=!1,Il=[],kr=null,Rr=null,Or=null,na=new Map,ra=new Map,_r=[],lA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ay(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function go(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=La(e),e!==null&&hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function uA(t,e,n,r,s){switch(e){case"focusin":return kr=go(kr,t,e,n,r,s),!0;case"dragenter":return Rr=go(Rr,t,e,n,r,s),!0;case"mouseover":return Or=go(Or,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return na.set(i,go(na.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ra.set(i,go(ra.get(i)||null,t,e,n,r,s)),!0}return!1}function rw(t){var e=us(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,nw(t.priority,function(){ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=La(n),e!==null&&hp(e),t.blockedOn=n,!1;e.shift()}return!0}function Py(t,e,n){ql(t)&&n.delete(e)}function cA(){Mh=!1,kr!==null&&ql(kr)&&(kr=null),Rr!==null&&ql(Rr)&&(Rr=null),Or!==null&&ql(Or)&&(Or=null),na.forEach(Py),ra.forEach(Py)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,cA)))}function sa(t){function e(s){return yo(s,t)}if(0<Il.length){yo(Il[0],t);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&yo(kr,t),Rr!==null&&yo(Rr,t),Or!==null&&yo(Or,t),na.forEach(e),ra.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)rw(n),n.blockedOn===null&&_r.shift()}var gi=ar.ReactCurrentBatchConfig,mu=!0;function dA(t,e,n,r){var s=ae,i=gi.transition;gi.transition=null;try{ae=1,fp(t,e,n,r)}finally{ae=s,gi.transition=i}}function hA(t,e,n,r){var s=ae,i=gi.transition;gi.transition=null;try{ae=4,fp(t,e,n,r)}finally{ae=s,gi.transition=i}}function fp(t,e,n,r){if(mu){var s=Vh(t,e,n,r);if(s===null)Ud(t,e,r,gu,n),Ay(t,r);else if(uA(s,t,e,n,r))r.stopPropagation();else if(Ay(t,r),e&4&&-1<lA.indexOf(t)){for(;s!==null;){var i=La(s);if(i!==null&&Z0(i),i=Vh(t,e,n,r),i===null&&Ud(t,e,r,gu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ud(t,e,r,null,n)}}var gu=null;function Vh(t,e,n,r){if(gu=null,t=up(r),t=us(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gu=t,null}function sw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z1()){case cp:return 1;case Q0:return 4;case fu:case eA:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var Sr=null,pp=null,Hl=null;function iw(){if(Hl)return Hl;var t,e=pp,n=e.length,r,s="value"in Sr?Sr.value:Sr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Hl=s.slice(t,1<r?1-r:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Ny(){return!1}function Kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sl:Ny,this.isPropagationStopped=Ny,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Kt(zi),Da=Ee({},zi,{view:0,detail:0}),fA=Kt(Da),Cd,kd,vo,oc=Ee({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Cd=t.screenX-vo.screenX,kd=t.screenY-vo.screenY):kd=Cd=0,vo=t),Cd)},movementY:function(t){return"movementY"in t?t.movementY:kd}}),by=Kt(oc),pA=Ee({},oc,{dataTransfer:0}),mA=Kt(pA),gA=Ee({},Da,{relatedTarget:0}),Rd=Kt(gA),yA=Ee({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),vA=Kt(yA),_A=Ee({},zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wA=Kt(_A),xA=Ee({},zi,{data:0}),Cy=Kt(xA),EA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IA[t])?!!e[t]:!1}function gp(){return SA}var AA=Ee({},Da,{key:function(t){if(t.key){var e=EA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PA=Kt(AA),NA=Ee({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ky=Kt(NA),bA=Ee({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),CA=Kt(bA),kA=Ee({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),RA=Kt(kA),OA=Ee({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jA=Kt(OA),DA=[9,13,27,32],yp=Zn&&"CompositionEvent"in window,Fo=null;Zn&&"documentMode"in document&&(Fo=document.documentMode);var LA=Zn&&"TextEvent"in window&&!Fo,ow=Zn&&(!yp||Fo&&8<Fo&&11>=Fo),Ry=" ",Oy=!1;function aw(t,e){switch(t){case"keyup":return DA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function MA(t,e){switch(t){case"compositionend":return lw(e);case"keypress":return e.which!==32?null:(Oy=!0,Ry);case"textInput":return t=e.data,t===Ry&&Oy?null:t;default:return null}}function VA(t,e){if(ti)return t==="compositionend"||!yp&&aw(t,e)?(t=iw(),Hl=pp=Sr=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ow&&e.locale!=="ko"?null:e.data;default:return null}}var UA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UA[t.type]:e==="textarea"}function uw(t,e,n,r){F0(r),e=yu(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $o=null,ia=null;function FA(t){ww(t,0)}function ac(t){var e=si(t);if(O0(e))return t}function $A(t,e){if(t==="change")return e}var cw=!1;if(Zn){var Od;if(Zn){var jd="oninput"in document;if(!jd){var Dy=document.createElement("div");Dy.setAttribute("oninput","return;"),jd=typeof Dy.oninput=="function"}Od=jd}else Od=!1;cw=Od&&(!document.documentMode||9<document.documentMode)}function Ly(){$o&&($o.detachEvent("onpropertychange",dw),ia=$o=null)}function dw(t){if(t.propertyName==="value"&&ac(ia)){var e=[];uw(e,ia,t,up(t)),q0(FA,e)}}function BA(t,e,n){t==="focusin"?(Ly(),$o=e,ia=n,$o.attachEvent("onpropertychange",dw)):t==="focusout"&&Ly()}function zA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(ia)}function qA(t,e){if(t==="click")return ac(e)}function HA(t,e){if(t==="input"||t==="change")return ac(e)}function WA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:WA;function oa(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!wh.call(e,s)||!pn(t[s],e[s]))return!1}return!0}function My(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vy(t,e){var n=My(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=My(n)}}function hw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fw(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KA(t){var e=fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hw(n.ownerDocument.documentElement,n)){if(r!==null&&vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Vy(n,i);var o=Vy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GA=Zn&&"documentMode"in document&&11>=document.documentMode,ni=null,Uh=null,Bo=null,Fh=!1;function Uy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||ni==null||ni!==cu(r)||(r=ni,"selectionStart"in r&&vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&oa(Bo,r)||(Bo=r,r=yu(Uh,"onSelect"),0<r.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function Al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},Dd={},pw={};Zn&&(pw=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function lc(t){if(Dd[t])return Dd[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pw)return Dd[t]=e[n];return t}var mw=lc("animationend"),gw=lc("animationiteration"),yw=lc("animationstart"),vw=lc("transitionend"),_w=new Map,Fy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){_w.set(t,e),Rs(e,[t])}for(var Ld=0;Ld<Fy.length;Ld++){var Md=Fy[Ld],QA=Md.toLowerCase(),YA=Md[0].toUpperCase()+Md.slice(1);Qr(QA,"on"+YA)}Qr(mw,"onAnimationEnd");Qr(gw,"onAnimationIteration");Qr(yw,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(vw,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function $y(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Q1(r,e,void 0,t),t.currentTarget=null}function ww(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;$y(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;$y(s,l,d),i=u}}}if(hu)throw t=Dh,hu=!1,Dh=null,t}function ge(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(xw(e,t,2,!1),n.add(r))}function Vd(t,e,n){var r=0;e&&(r|=4),xw(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Pl]){t[Pl]=!0,N0.forEach(function(n){n!=="selectionchange"&&(XA.has(n)||Vd(n,!1,t),Vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Vd("selectionchange",!1,e))}}function xw(t,e,n,r){switch(sw(e)){case 1:var s=dA;break;case 4:s=hA;break;default:s=fp}n=s.bind(null,e,n,t),s=void 0,!jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ud(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=us(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}q0(function(){var d=i,f=up(n),m=[];e:{var g=_w.get(t);if(g!==void 0){var w=mp,S=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":w=PA;break;case"focusin":S="focus",w=Rd;break;case"focusout":S="blur",w=Rd;break;case"beforeblur":case"afterblur":w=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=by;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=mA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=CA;break;case mw:case gw:case yw:w=vA;break;case vw:w=RA;break;case"scroll":w=fA;break;case"wheel":w=jA;break;case"copy":case"cut":case"paste":w=wA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ky}var N=(e&4)!==0,C=!N&&t==="scroll",E=N?g!==null?g+"Capture":null:g;N=[];for(var x=d,y;x!==null;){y=x;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,E!==null&&(b=ta(x,E),b!=null&&N.push(la(x,b,y)))),C)break;x=x.return}0<N.length&&(g=new w(g,S,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Rh&&(S=n.relatedTarget||n.fromElement)&&(us(S)||S[er]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=d,S=S?us(S):null,S!==null&&(C=Os(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=d),w!==S)){if(N=by,b="onMouseLeave",E="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(N=ky,b="onPointerLeave",E="onPointerEnter",x="pointer"),C=w==null?g:si(w),y=S==null?g:si(S),g=new N(b,x+"leave",w,n,f),g.target=C,g.relatedTarget=y,b=null,us(f)===d&&(N=new N(E,x+"enter",S,n,f),N.target=y,N.relatedTarget=C,b=N),C=b,w&&S)t:{for(N=w,E=S,x=0,y=N;y;y=Hs(y))x++;for(y=0,b=E;b;b=Hs(b))y++;for(;0<x-y;)N=Hs(N),x--;for(;0<y-x;)E=Hs(E),y--;for(;x--;){if(N===E||E!==null&&N===E.alternate)break t;N=Hs(N),E=Hs(E)}N=null}else N=null;w!==null&&By(m,g,w,N,!1),S!==null&&C!==null&&By(m,C,S,N,!0)}}e:{if(g=d?si(d):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var L=$A;else if(jy(g))if(cw)L=HA;else{L=zA;var V=BA}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=qA);if(L&&(L=L(t,d))){uw(m,L,n,f);break e}V&&V(t,g,d),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Ph(g,"number",g.value)}switch(V=d?si(d):window,t){case"focusin":(jy(V)||V.contentEditable==="true")&&(ni=V,Uh=d,Bo=null);break;case"focusout":Bo=Uh=ni=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Uy(m,n,f);break;case"selectionchange":if(GA)break;case"keydown":case"keyup":Uy(m,n,f)}var T;if(yp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ti?aw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ow&&n.locale!=="ko"&&(ti||_!=="onCompositionStart"?_==="onCompositionEnd"&&ti&&(T=iw()):(Sr=f,pp="value"in Sr?Sr.value:Sr.textContent,ti=!0)),V=yu(d,_),0<V.length&&(_=new Cy(_,t,null,n,f),m.push({event:_,listeners:V}),T?_.data=T:(T=lw(n),T!==null&&(_.data=T)))),(T=LA?MA(t,n):VA(t,n))&&(d=yu(d,"onBeforeInput"),0<d.length&&(f=new Cy("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=T))}ww(m,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ta(t,n),i!=null&&r.unshift(la(t,i,s)),i=ta(t,e),i!=null&&r.push(la(t,i,s))),t=t.return}return r}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function By(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=ta(n,i),u!=null&&o.unshift(la(n,u,l))):s||(u=ta(n,i),u!=null&&o.push(la(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var JA=/\r\n?/g,ZA=/\u0000|\uFFFD/g;function zy(t){return(typeof t=="string"?t:""+t).replace(JA,`
`).replace(ZA,"")}function Nl(t,e,n){if(e=zy(e),zy(t)!==e&&n)throw Error(F(425))}function vu(){}var $h=null,Bh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,eP=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,tP=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(t){return qy.resolve(null).then(t).catch(nP)}:qh;function nP(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);sa(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),xn="__reactFiber$"+qi,ua="__reactProps$"+qi,er="__reactContainer$"+qi,Hh="__reactEvents$"+qi,rP="__reactListeners$"+qi,sP="__reactHandles$"+qi;function us(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hy(t);t!==null;){if(n=t[xn])return n;t=Hy(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[xn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function uc(t){return t[ua]||null}var Wh=[],ii=-1;function Yr(t){return{current:t}}function ye(t){0>ii||(t.current=Wh[ii],Wh[ii]=null,ii--)}function pe(t,e){ii++,Wh[ii]=t.current,t.current=e}var zr={},mt=Yr(zr),Ot=Yr(!1),_s=zr;function Si(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function jt(t){return t=t.childContextTypes,t!=null}function _u(){ye(Ot),ye(mt)}function Wy(t,e,n){if(mt.current!==zr)throw Error(F(168));pe(mt,e),pe(Ot,n)}function Ew(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,B1(t)||"Unknown",s));return Ee({},n,r)}function wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,_s=mt.current,pe(mt,t),pe(Ot,Ot.current),!0}function Ky(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Ew(t,e,_s),r.__reactInternalMemoizedMergedChildContext=t,ye(Ot),ye(mt),pe(mt,t)):ye(Ot),pe(Ot,n)}var Bn=null,cc=!1,$d=!1;function Tw(t){Bn===null?Bn=[t]:Bn.push(t)}function iP(t){cc=!0,Tw(t)}function Xr(){if(!$d&&Bn!==null){$d=!0;var t=0,e=ae;try{var n=Bn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,cc=!1}catch(s){throw Bn!==null&&(Bn=Bn.slice(t+1)),G0(cp,Xr),s}finally{ae=e,$d=!1}}return null}var oi=[],ai=0,xu=null,Eu=0,Gt=[],Qt=0,ws=null,qn=1,Hn="";function is(t,e){oi[ai++]=Eu,oi[ai++]=xu,xu=t,Eu=e}function Iw(t,e,n){Gt[Qt++]=qn,Gt[Qt++]=Hn,Gt[Qt++]=ws,ws=t;var r=qn;t=Hn;var s=32-cn(r)-1;r&=~(1<<s),n+=1;var i=32-cn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,qn=1<<32-cn(e)+s|n<<s|r,Hn=i+t}else qn=1<<i|n<<s|r,Hn=t}function _p(t){t.return!==null&&(is(t,1),Iw(t,1,0))}function wp(t){for(;t===xu;)xu=oi[--ai],oi[ai]=null,Eu=oi[--ai],oi[ai]=null;for(;t===ws;)ws=Gt[--Qt],Gt[Qt]=null,Hn=Gt[--Qt],Gt[Qt]=null,qn=Gt[--Qt],Gt[Qt]=null}var qt=null,$t=null,ve=!1,ln=null;function Sw(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qt=t,$t=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qt=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ws!==null?{id:qn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qt=t,$t=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gh(t){if(ve){var e=$t;if(e){var n=e;if(!Gy(t,e)){if(Kh(t))throw Error(F(418));e=jr(n.nextSibling);var r=qt;e&&Gy(t,e)?Sw(r,n):(t.flags=t.flags&-4097|2,ve=!1,qt=t)}}else{if(Kh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,qt=t}}}function Qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function bl(t){if(t!==qt)return!1;if(!ve)return Qy(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=$t)){if(Kh(t))throw Aw(),Error(F(418));for(;e;)Sw(t,e),e=jr(e.nextSibling)}if(Qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=qt?jr(t.stateNode.nextSibling):null;return!0}function Aw(){for(var t=$t;t;)t=jr(t.nextSibling)}function Ai(){$t=qt=null,ve=!1}function xp(t){ln===null?ln=[t]:ln.push(t)}var oP=ar.ReactCurrentBatchConfig;function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yy(t){var e=t._init;return e(t._payload)}function Pw(t){function e(E,x){if(t){var y=E.deletions;y===null?(E.deletions=[x],E.flags|=16):y.push(x)}}function n(E,x){if(!t)return null;for(;x!==null;)e(E,x),x=x.sibling;return null}function r(E,x){for(E=new Map;x!==null;)x.key!==null?E.set(x.key,x):E.set(x.index,x),x=x.sibling;return E}function s(E,x){return E=Vr(E,x),E.index=0,E.sibling=null,E}function i(E,x,y){return E.index=y,t?(y=E.alternate,y!==null?(y=y.index,y<x?(E.flags|=2,x):y):(E.flags|=2,x)):(E.flags|=1048576,x)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,x,y,b){return x===null||x.tag!==6?(x=Gd(y,E.mode,b),x.return=E,x):(x=s(x,y),x.return=E,x)}function u(E,x,y,b){var L=y.type;return L===ei?f(E,x,y.props.children,b,y.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===yr&&Yy(L)===x.type)?(b=s(x,y.props),b.ref=_o(E,x,y),b.return=E,b):(b=Zl(y.type,y.key,y.props,null,E.mode,b),b.ref=_o(E,x,y),b.return=E,b)}function d(E,x,y,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Qd(y,E.mode,b),x.return=E,x):(x=s(x,y.children||[]),x.return=E,x)}function f(E,x,y,b,L){return x===null||x.tag!==7?(x=gs(y,E.mode,b,L),x.return=E,x):(x=s(x,y),x.return=E,x)}function m(E,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Gd(""+x,E.mode,y),x.return=E,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _l:return y=Zl(x.type,x.key,x.props,null,E.mode,y),y.ref=_o(E,null,x),y.return=E,y;case Zs:return x=Qd(x,E.mode,y),x.return=E,x;case yr:var b=x._init;return m(E,b(x._payload),y)}if(No(x)||po(x))return x=gs(x,E.mode,y,null),x.return=E,x;Cl(E,x)}return null}function g(E,x,y,b){var L=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:l(E,x,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return y.key===L?u(E,x,y,b):null;case Zs:return y.key===L?d(E,x,y,b):null;case yr:return L=y._init,g(E,x,L(y._payload),b)}if(No(y)||po(y))return L!==null?null:f(E,x,y,b,null);Cl(E,y)}return null}function w(E,x,y,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return E=E.get(y)||null,l(x,E,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _l:return E=E.get(b.key===null?y:b.key)||null,u(x,E,b,L);case Zs:return E=E.get(b.key===null?y:b.key)||null,d(x,E,b,L);case yr:var V=b._init;return w(E,x,y,V(b._payload),L)}if(No(b)||po(b))return E=E.get(y)||null,f(x,E,b,L,null);Cl(x,b)}return null}function S(E,x,y,b){for(var L=null,V=null,T=x,_=x=0,A=null;T!==null&&_<y.length;_++){T.index>_?(A=T,T=null):A=T.sibling;var I=g(E,T,y[_],b);if(I===null){T===null&&(T=A);break}t&&T&&I.alternate===null&&e(E,T),x=i(I,x,_),V===null?L=I:V.sibling=I,V=I,T=A}if(_===y.length)return n(E,T),ve&&is(E,_),L;if(T===null){for(;_<y.length;_++)T=m(E,y[_],b),T!==null&&(x=i(T,x,_),V===null?L=T:V.sibling=T,V=T);return ve&&is(E,_),L}for(T=r(E,T);_<y.length;_++)A=w(T,E,_,y[_],b),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?_:A.key),x=i(A,x,_),V===null?L=A:V.sibling=A,V=A);return t&&T.forEach(function(k){return e(E,k)}),ve&&is(E,_),L}function N(E,x,y,b){var L=po(y);if(typeof L!="function")throw Error(F(150));if(y=L.call(y),y==null)throw Error(F(151));for(var V=L=null,T=x,_=x=0,A=null,I=y.next();T!==null&&!I.done;_++,I=y.next()){T.index>_?(A=T,T=null):A=T.sibling;var k=g(E,T,I.value,b);if(k===null){T===null&&(T=A);break}t&&T&&k.alternate===null&&e(E,T),x=i(k,x,_),V===null?L=k:V.sibling=k,V=k,T=A}if(I.done)return n(E,T),ve&&is(E,_),L;if(T===null){for(;!I.done;_++,I=y.next())I=m(E,I.value,b),I!==null&&(x=i(I,x,_),V===null?L=I:V.sibling=I,V=I);return ve&&is(E,_),L}for(T=r(E,T);!I.done;_++,I=y.next())I=w(T,E,_,I.value,b),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?_:I.key),x=i(I,x,_),V===null?L=I:V.sibling=I,V=I);return t&&T.forEach(function(R){return e(E,R)}),ve&&is(E,_),L}function C(E,x,y,b){if(typeof y=="object"&&y!==null&&y.type===ei&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:e:{for(var L=y.key,V=x;V!==null;){if(V.key===L){if(L=y.type,L===ei){if(V.tag===7){n(E,V.sibling),x=s(V,y.props.children),x.return=E,E=x;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===yr&&Yy(L)===V.type){n(E,V.sibling),x=s(V,y.props),x.ref=_o(E,V,y),x.return=E,E=x;break e}n(E,V);break}else e(E,V);V=V.sibling}y.type===ei?(x=gs(y.props.children,E.mode,b,y.key),x.return=E,E=x):(b=Zl(y.type,y.key,y.props,null,E.mode,b),b.ref=_o(E,x,y),b.return=E,E=b)}return o(E);case Zs:e:{for(V=y.key;x!==null;){if(x.key===V)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(E,x.sibling),x=s(x,y.children||[]),x.return=E,E=x;break e}else{n(E,x);break}else e(E,x);x=x.sibling}x=Qd(y,E.mode,b),x.return=E,E=x}return o(E);case yr:return V=y._init,C(E,x,V(y._payload),b)}if(No(y))return S(E,x,y,b);if(po(y))return N(E,x,y,b);Cl(E,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(E,x.sibling),x=s(x,y),x.return=E,E=x):(n(E,x),x=Gd(y,E.mode,b),x.return=E,E=x),o(E)):n(E,x)}return C}var Pi=Pw(!0),Nw=Pw(!1),Tu=Yr(null),Iu=null,li=null,Ep=null;function Tp(){Ep=li=Iu=null}function Ip(t){var e=Tu.current;ye(Tu),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){Iu=t,Ep=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(Iu===null)throw Error(F(308));li=t,Iu.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var cs=null;function Sp(t){cs===null?cs=[t]:cs.push(t)}function bw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sp(e)):(n.next=s.next,s.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,tr(t,n)}return s=r.interleaved,s===null?(e.next=e,Sp(r)):(e.next=s.next,s.next=e),r.interleaved=e,tr(t,n)}function Kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dp(t,n)}}function Xy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Su(t,e,n,r){var s=t.updateQueue;vr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=d=u=null,l=i;do{var g=l.lane,w=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,N=l;switch(g=e,w=n,N.tag){case 1:if(S=N.payload,typeof S=="function"){m=S.call(w,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=N.payload,g=typeof S=="function"?S.call(w,m,g):S,g==null)break e;m=Ee({},m,g);break e;case 2:vr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=w,u=m):f=f.next=w,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Es|=o,t.lanes=o,t.memoizedState=m}}function Jy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Ma={},In=Yr(Ma),ca=Yr(Ma),da=Yr(Ma);function ds(t){if(t===Ma)throw Error(F(174));return t}function Pp(t,e){switch(pe(da,e),pe(ca,t),pe(In,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}ye(In),pe(In,e)}function Ni(){ye(In),ye(ca),ye(da)}function kw(t){ds(da.current);var e=ds(In.current),n=bh(e,t.type);e!==n&&(pe(ca,t),pe(In,n))}function Np(t){ca.current===t&&(ye(In),ye(ca))}var we=Yr(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function bp(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var Gl=ar.ReactCurrentDispatcher,zd=ar.ReactCurrentBatchConfig,xs=0,xe=null,Fe=null,qe=null,Pu=!1,zo=!1,ha=0,aP=0;function at(){throw Error(F(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,s,i){if(xs=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?dP:hP,t=n(r,s),zo){i=0;do{if(zo=!1,ha=0,25<=i)throw Error(F(301));i+=1,qe=Fe=null,e.updateQueue=null,Gl.current=fP,t=n(r,s)}while(zo)}if(Gl.current=Nu,e=Fe!==null&&Fe.next!==null,xs=0,qe=Fe=xe=null,Pu=!1,e)throw Error(F(300));return t}function Rp(){var t=ha!==0;return ha=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?xe.memoizedState=qe=t:qe=qe.next=t,qe}function en(){if(Fe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?xe.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(F(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?xe.memoizedState=qe=t:qe=qe.next=t}return qe}function fa(t,e){return typeof e=="function"?e(t):e}function qd(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Fe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var f=d.lane;if((xs&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=f,Es|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,pn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,Es|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);pn(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Rw(){}function Ow(t,e){var n=xe,r=en(),s=e(),i=!pn(r.memoizedState,s);if(i&&(r.memoizedState=s,Rt=!0),r=r.queue,Op(Lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,pa(9,Dw.bind(null,n,r,s,e),void 0,null),He===null)throw Error(F(349));xs&30||jw(n,e,s)}return s}function jw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dw(t,e,n,r){e.value=n,e.getSnapshot=r,Mw(e)&&Vw(t)}function Lw(t,e,n){return n(function(){Mw(e)&&Vw(t)})}function Mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function Vw(t){var e=tr(t,1);e!==null&&dn(e,t,1,-1)}function Zy(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=cP.bind(null,xe,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Uw(){return en().memoizedState}function Ql(t,e,n,r){var s=wn();xe.flags|=t,s.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function dc(t,e,n,r){var s=en();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var o=Fe.memoizedState;if(i=o.destroy,r!==null&&Cp(r,o.deps)){s.memoizedState=pa(e,n,i,r);return}}xe.flags|=t,s.memoizedState=pa(1|e,n,i,r)}function ev(t,e){return Ql(8390656,8,t,e)}function Op(t,e){return dc(2048,8,t,e)}function Fw(t,e){return dc(4,2,t,e)}function $w(t,e){return dc(4,4,t,e)}function Bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zw(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,Bw.bind(null,e,t),n)}function jp(){}function qw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ww(t,e,n){return xs&21?(pn(n,e)||(n=X0(),xe.lanes|=n,Es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function lP(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=zd.transition;zd.transition={};try{t(!1),e()}finally{ae=n,zd.transition=r}}function Kw(){return en().memoizedState}function uP(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gw(t))Qw(e,n);else if(n=bw(t,e,n,r),n!==null){var s=It();dn(n,t,r,s),Yw(n,e,r)}}function cP(t,e,n){var r=Mr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gw(t))Qw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,pn(l,o)){var u=e.interleaved;u===null?(s.next=s,Sp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=bw(t,e,s,r),n!==null&&(s=It(),dn(n,t,r,s),Yw(n,e,r))}}function Gw(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function Qw(t,e){zo=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dp(t,n)}}var Nu={readContext:Zt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},dP={readContext:Zt,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:ev,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,Bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uP.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:Zy,useDebugValue:jp,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=Zy(!1),e=t[0];return t=lP.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=wn();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),He===null)throw Error(F(349));xs&30||jw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ev(Lw.bind(null,r,i,t),[t]),r.flags|=2048,pa(9,Dw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=wn(),e=He.identifierPrefix;if(ve){var n=Hn,r=qn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hP={readContext:Zt,useCallback:qw,useContext:Zt,useEffect:Op,useImperativeHandle:zw,useInsertionEffect:Fw,useLayoutEffect:$w,useMemo:Hw,useReducer:qd,useRef:Uw,useState:function(){return qd(fa)},useDebugValue:jp,useDeferredValue:function(t){var e=en();return Ww(e,Fe.memoizedState,t)},useTransition:function(){var t=qd(fa)[0],e=en().memoizedState;return[t,e]},useMutableSource:Rw,useSyncExternalStore:Ow,useId:Kw,unstable_isNewReconciler:!1},fP={readContext:Zt,useCallback:qw,useContext:Zt,useEffect:Op,useImperativeHandle:zw,useInsertionEffect:Fw,useLayoutEffect:$w,useMemo:Hw,useReducer:Hd,useRef:Uw,useState:function(){return Hd(fa)},useDebugValue:jp,useDeferredValue:function(t){var e=en();return Fe===null?e.memoizedState=t:Ww(e,Fe.memoizedState,t)},useTransition:function(){var t=Hd(fa)[0],e=en().memoizedState;return[t,e]},useMutableSource:Rw,useSyncExternalStore:Ow,useId:Kw,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=Mr(t),i=Qn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Dr(t,i,s),e!==null&&(dn(e,t,s,r),Kl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=Mr(t),i=Qn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Dr(t,i,s),e!==null&&(dn(e,t,s,r),Kl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Mr(t),s=Qn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Dr(t,s,r),e!==null&&(dn(e,t,r,n),Kl(e,t,r))}};function tv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,r)||!oa(s,i):!0}function Xw(t,e,n){var r=!1,s=zr,i=e.contextType;return typeof i=="object"&&i!==null?i=Zt(i):(s=jt(e)?_s:mt.current,r=e.contextTypes,i=(r=r!=null)?Si(t,s):zr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ap(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Zt(i):(i=jt(e)?_s:mt.current,s.context=Si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&hc.enqueueReplaceState(s,s.state,null),Su(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function bi(t,e){try{var n="",r=e;do n+=$1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pP=typeof WeakMap=="function"?WeakMap:Map;function Jw(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cu||(Cu=!0,uf=r),Jh(t,e)},n}function Zw(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Jh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pP;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=NP.bind(null,t,e,n),e.then(t,t))}function sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function iv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var mP=ar.ReactCurrentOwner,Rt=!1;function Tt(t,e,n,r){e.child=t===null?Nw(e,null,n,r):Pi(e,t.child,n,r)}function ov(t,e,n,r,s){n=n.render;var i=e.ref;return yi(e,s),r=kp(t,e,n,r,i,s),n=Rp(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,nr(t,e,s)):(ve&&n&&_p(e),e.flags|=1,Tt(t,e,r,s),e.child)}function av(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Bp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ex(t,e,i,r,s)):(t=Zl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,r)&&t.ref===e.ref)return nr(t,e,s)}return e.flags|=1,t=Vr(i,r),t.ref=e.ref,t.return=e,e.child=t}function ex(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(oa(i,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,nr(t,e,s)}return Zh(t,e,n,r,s)}function tx(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(ci,Ft),Ft|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(ci,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(ci,Ft),Ft|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,pe(ci,Ft),Ft|=r;return Tt(t,e,s,n),e.child}function nx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,s){var i=jt(n)?_s:mt.current;return i=Si(e,i),yi(e,s),n=kp(t,e,n,r,i,s),r=Rp(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,nr(t,e,s)):(ve&&r&&_p(e),e.flags|=1,Tt(t,e,n,s),e.child)}function lv(t,e,n,r,s){if(jt(n)){var i=!0;wu(e)}else i=!1;if(yi(e,s),e.stateNode===null)Yl(t,e),Xw(e,n,r),Xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Zt(d):(d=jt(n)?_s:mt.current,d=Si(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&nv(e,o,r,d),vr=!1;var g=e.memoizedState;o.state=g,Su(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Ot.current||vr?(typeof f=="function"&&(Yh(e,n,f,r),u=e.memoizedState),(l=vr||tv(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cw(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:on(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=jt(n)?_s:mt.current,u=Si(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&nv(e,o,r,u),vr=!1,g=e.memoizedState,o.state=g,Su(e,r,o,s);var S=e.memoizedState;l!==m||g!==S||Ot.current||vr?(typeof w=="function"&&(Yh(e,n,w,r),S=e.memoizedState),(d=vr||tv(e,n,d,r,g,S,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ef(t,e,n,r,i,s)}function ef(t,e,n,r,s,i){nx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Ky(e,n,!1),nr(t,e,i);r=e.stateNode,mP.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Pi(e,t.child,null,i),e.child=Pi(e,null,l,i)):Tt(t,e,l,i),e.memoizedState=r.state,s&&Ky(e,n,!0),e.child}function rx(t){var e=t.stateNode;e.pendingContext?Wy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wy(t,e.context,!1),Pp(t,e.containerInfo)}function uv(t,e,n,r,s){return Ai(),xp(s),e.flags|=256,Tt(t,e,n,r),e.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function sx(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),pe(we,s&1),t===null)return Gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=mc(o,r,0,null),t=gs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nf(n),e.memoizedState=tf,t):Dp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return gP(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Vr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Vr(l,i):(i=gs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=tf,r}return i=t.child,t=i.sibling,r=Vr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dp(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kl(t,e,n,r){return r!==null&&xp(r),Pi(e,t.child,null,n),t=Dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gP(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(F(422))),kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=mc({mode:"visible",children:r.children},s,0,null),i=gs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Pi(e,t.child,null,o),e.child.memoizedState=nf(o),e.memoizedState=tf,i);if(!(e.mode&1))return kl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Wd(i,r,void 0),kl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,tr(t,s),dn(r,t,s,-1))}return $p(),r=Wd(Error(F(421))),kl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=bP.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,$t=jr(s.nextSibling),qt=e,ve=!0,ln=null,t!==null&&(Gt[Qt++]=qn,Gt[Qt++]=Hn,Gt[Qt++]=ws,qn=t.id,Hn=t.overflow,ws=e),e=Dp(e,r.children),e.flags|=4096,e)}function cv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function Kd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function ix(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cv(t,n,e);else if(t.tag===19)cv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Kd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Au(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Kd(e,!0,n,null,i);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yP(t,e,n){switch(e.tag){case 3:rx(e),Ai();break;case 5:kw(e);break;case 1:jt(e.type)&&wu(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;pe(Tu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?sx(t,e,n):(pe(we,we.current&1),t=nr(t,e,n),t!==null?t.sibling:null);pe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ix(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,tx(t,e,n)}return nr(t,e,n)}var ox,rf,ax,lx;ox=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};ax=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ds(In.current);var i=null;switch(n){case"input":s=Sh(t,s),r=Sh(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=Nh(t,s),r=Nh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}Ch(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Zo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ge("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};lx=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vP(t,e,n){var r=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return jt(e.type)&&_u(),lt(e),null;case 3:return r=e.stateNode,Ni(),ye(Ot),ye(mt),bp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ln!==null&&(hf(ln),ln=null))),rf(t,e),lt(e),null;case 5:Np(e);var s=ds(da.current);if(n=e.type,t!==null&&e.stateNode!=null)ax(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return lt(e),null}if(t=ds(In.current),bl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[xn]=e,r[ua]=i,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(s=0;s<Co.length;s++)ge(Co[s],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":_y(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":xy(r,i),ge("invalid",r)}Ch(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Nl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Nl(r.textContent,l,t),s=["children",""+l]):Zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":wl(r),wy(r,i,!0);break;case"textarea":wl(r),Ey(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[ua]=r,ox(t,e,!1,!1),e.stateNode=t;e:{switch(o=kh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),s=r;break;case"iframe":case"object":case"embed":ge("load",t),s=r;break;case"video":case"audio":for(s=0;s<Co.length;s++)ge(Co[s],t);s=r;break;case"source":ge("error",t),s=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),s=r;break;case"details":ge("toggle",t),s=r;break;case"input":_y(t,r),s=Sh(t,r),ge("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),ge("invalid",t);break;case"textarea":xy(t,r),s=Nh(t,r),ge("invalid",t);break;default:s=r}Ch(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?U0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&M0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ea(t,u):typeof u=="number"&&ea(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",t):u!=null&&ip(t,i,u,o))}switch(n){case"input":wl(t),wy(t,r,!1);break;case"textarea":wl(t),Ey(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Br(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?fi(t,!!r.multiple,i,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)lx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ds(da.current),ds(In.current),bl(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(i=r.nodeValue!==n)&&(t=qt,t!==null))switch(t.tag){case 3:Nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return lt(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&$t!==null&&e.mode&1&&!(e.flags&128))Aw(),Ai(),e.flags|=98560,i=!1;else if(i=bl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[xn]=e}else Ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),i=!1}else ln!==null&&(hf(ln),ln=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?$e===0&&($e=3):$p())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ni(),rf(t,e),t===null&&aa(e.stateNode.containerInfo),lt(e),null;case 10:return Ip(e.type._context),lt(e),null;case 17:return jt(e.type)&&_u(),lt(e),null;case 19:if(ye(we),i=e.memoizedState,i===null)return lt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)wo(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Au(t),o!==null){for(e.flags|=128,wo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>Ci&&(e.flags|=128,r=!0,wo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return lt(e),null}else 2*Re()-i.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,wo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=we.current,pe(we,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Fp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function _P(t,e){switch(wp(e),e.tag){case 1:return jt(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ni(),ye(Ot),ye(mt),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Np(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return Ni(),null;case 10:return Ip(e.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var Rl=!1,ht=!1,wP=typeof WeakSet=="function"?WeakSet:Set,q=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function sf(t,e,n){try{n()}catch(r){Se(t,e,r)}}var dv=!1;function xP(t,e){if($h=mu,t=fw(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var w;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++f===r&&(u=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},mu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var N=S.memoizedProps,C=S.memoizedState,E=e.stateNode,x=E.getSnapshotBeforeUpdate(e.elementType===e.type?N:on(e.type,N),C);E.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Se(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return S=dv,dv=!1,S}function qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sf(e,n,i)}s=s.next}while(s!==r)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ux(t){var e=t.alternate;e!==null&&(t.alternate=null,ux(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[ua],delete e[Hh],delete e[rP],delete e[sP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cx(t){return t.tag===5||t.tag===3||t.tag===4}function hv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}var Ye=null,an=!1;function mr(t,e,n){for(n=n.child;n!==null;)dx(t,e,n),n=n.sibling}function dx(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:ht||ui(n,e);case 6:var r=Ye,s=an;Ye=null,mr(t,e,n),Ye=r,an=s,Ye!==null&&(an?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(an?(t=Ye,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),sa(t)):Fd(Ye,n.stateNode));break;case 4:r=Ye,s=an,Ye=n.stateNode.containerInfo,an=!0,mr(t,e,n),Ye=r,an=s;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&sf(n,e,o),s=s.next}while(s!==r)}mr(t,e,n);break;case 1:if(!ht&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,mr(t,e,n),ht=r):mr(t,e,n);break;default:mr(t,e,n)}}function fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wP),e.forEach(function(r){var s=CP.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,an=!1;break e;case 3:Ye=l.stateNode.containerInfo,an=!0;break e;case 4:Ye=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(Ye===null)throw Error(F(160));dx(i,o,s),Ye=null,an=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Se(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hx(e,t),e=e.sibling}function hx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),_n(t),r&4){try{qo(3,t,t.return),fc(3,t)}catch(N){Se(t,t.return,N)}try{qo(5,t,t.return)}catch(N){Se(t,t.return,N)}}break;case 1:sn(e,t),_n(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(sn(e,t),_n(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var s=t.stateNode;try{ea(s,"")}catch(N){Se(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&j0(s,i),kh(l,o);var d=kh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?U0(s,m):f==="dangerouslySetInnerHTML"?M0(s,m):f==="children"?ea(s,m):ip(s,f,m,d)}switch(l){case"input":Ah(s,i);break;case"textarea":D0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?fi(s,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?fi(s,!!i.multiple,i.defaultValue,!0):fi(s,!!i.multiple,i.multiple?[]:"",!1))}s[ua]=i}catch(N){Se(t,t.return,N)}}break;case 6:if(sn(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Se(t,t.return,N)}}break;case 3:if(sn(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(N){Se(t,t.return,N)}break;case 4:sn(e,t),_n(t);break;case 13:sn(e,t),_n(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Vp=Re())),r&4&&fv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(d=ht)||f,sn(e,t),ht=d):sn(e,t),_n(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,w=g.child,g.tag){case 0:case 11:case 14:case 15:qo(4,g,g.return);break;case 1:ui(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(N){Se(r,n,N)}}break;case 5:ui(g,g.return);break;case 22:if(g.memoizedState!==null){mv(m);continue}}w!==null?(w.return=g,q=w):mv(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=V0("display",o))}catch(N){Se(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(N){Se(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:sn(e,t),_n(t),r&4&&fv(t);break;case 21:break;default:sn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cx(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ea(s,""),r.flags&=-33);var i=hv(t);lf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hv(t);af(t,l,o);break;default:throw Error(F(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EP(t,e,n){q=t,fx(t)}function fx(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Rl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ht;l=Rl;var d=ht;if(Rl=o,(ht=u)&&!d)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?gv(s):u!==null?(u.return=o,q=u):gv(s);for(;i!==null;)q=i,fx(i),i=i.sibling;q=s,Rl=l,ht=d}pv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):pv(t)}}function pv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Jy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&sa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ht||e.flags&512&&of(e)}catch(g){Se(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function mv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function gv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Se(e,s,u)}}var i=e.return;try{of(e)}catch(u){Se(e,i,u)}break;case 5:var o=e.return;try{of(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var TP=Math.ceil,bu=ar.ReactCurrentDispatcher,Lp=ar.ReactCurrentOwner,Jt=ar.ReactCurrentBatchConfig,se=0,He=null,Me=null,et=0,Ft=0,ci=Yr(0),$e=0,ma=null,Es=0,pc=0,Mp=0,Ho=null,Ct=null,Vp=0,Ci=1/0,Fn=null,Cu=!1,uf=null,Lr=null,Ol=!1,Ar=null,ku=0,Wo=0,cf=null,Xl=-1,Jl=0;function It(){return se&6?Re():Xl!==-1?Xl:Xl=Re()}function Mr(t){return t.mode&1?se&2&&et!==0?et&-et:oP.transition!==null?(Jl===0&&(Jl=X0()),Jl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:sw(t.type)),t):1}function dn(t,e,n,r){if(50<Wo)throw Wo=0,cf=null,Error(F(185));ja(t,n,r),(!(se&2)||t!==He)&&(t===He&&(!(se&2)&&(pc|=n),$e===4&&wr(t,et)),Dt(t,r),n===1&&se===0&&!(e.mode&1)&&(Ci=Re()+500,cc&&Xr()))}function Dt(t,e){var n=t.callbackNode;oA(t,e);var r=pu(t,t===He?et:0);if(r===0)n!==null&&Sy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sy(n),e===1)t.tag===0?iP(yv.bind(null,t)):Tw(yv.bind(null,t)),tP(function(){!(se&6)&&Xr()}),n=null;else{switch(J0(r)){case 1:n=cp;break;case 4:n=Q0;break;case 16:n=fu;break;case 536870912:n=Y0;break;default:n=fu}n=xx(n,px.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function px(t,e){if(Xl=-1,Jl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=pu(t,t===He?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var s=se;se|=2;var i=gx();(He!==t||et!==e)&&(Fn=null,Ci=Re()+500,ms(t,e));do try{AP();break}catch(l){mx(t,l)}while(!0);Tp(),bu.current=i,se=s,Me!==null?e=0:(He=null,et=0,e=$e)}if(e!==0){if(e===2&&(s=Lh(t),s!==0&&(r=s,e=df(t,s))),e===1)throw n=ma,ms(t,0),wr(t,r),Dt(t,Re()),n;if(e===6)wr(t,r);else{if(s=t.current.alternate,!(r&30)&&!IP(s)&&(e=Ru(t,r),e===2&&(i=Lh(t),i!==0&&(r=i,e=df(t,i))),e===1))throw n=ma,ms(t,0),wr(t,r),Dt(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:os(t,Ct,Fn);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Vp+500-Re(),10<e)){if(pu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qh(os.bind(null,t,Ct,Fn),e);break}os(t,Ct,Fn);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-cn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TP(r/1960))-r,10<r){t.timeoutHandle=qh(os.bind(null,t,Ct,Fn),r);break}os(t,Ct,Fn);break;case 5:os(t,Ct,Fn);break;default:throw Error(F(329))}}}return Dt(t,Re()),t.callbackNode===n?px.bind(null,t):null}function df(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&hf(e)),t}function hf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function IP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!pn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~Mp,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function yv(t){if(se&6)throw Error(F(327));vi();var e=pu(t,0);if(!(e&1))return Dt(t,Re()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=df(t,r))}if(n===1)throw n=ma,ms(t,0),wr(t,e),Dt(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,os(t,Ct,Fn),Dt(t,Re()),null}function Up(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ci=Re()+500,cc&&Xr())}}function Ts(t){Ar!==null&&Ar.tag===0&&!(se&6)&&vi();var e=se;se|=1;var n=Jt.transition,r=ae;try{if(Jt.transition=null,ae=1,t)return t()}finally{ae=r,Jt.transition=n,se=e,!(se&6)&&Xr()}}function Fp(){Ft=ci.current,ye(ci)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eP(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:Ni(),ye(Ot),ye(mt),bp();break;case 5:Np(r);break;case 4:Ni();break;case 13:ye(we);break;case 19:ye(we);break;case 10:Ip(r.type._context);break;case 22:case 23:Fp()}n=n.return}if(He=t,Me=t=Vr(t.current,null),et=Ft=e,$e=0,ma=null,Mp=pc=Es=0,Ct=Ho=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}cs=null}return t}function mx(t,e){do{var n=Me;try{if(Tp(),Gl.current=Nu,Pu){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pu=!1}if(xs=0,qe=Fe=xe=null,zo=!1,ha=0,Lp.current=null,n===null||n.return===null){$e=1,ma=e,Me=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=sv(o);if(w!==null){w.flags&=-257,iv(w,o,l,i,e),w.mode&1&&rv(i,d,e),e=w,u=d;var S=e.updateQueue;if(S===null){var N=new Set;N.add(u),e.updateQueue=N}else S.add(u);break e}else{if(!(e&1)){rv(i,d,e),$p();break e}u=Error(F(426))}}else if(ve&&l.mode&1){var C=sv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),iv(C,o,l,i,e),xp(bi(u,l));break e}}i=u=bi(u,l),$e!==4&&($e=2),Ho===null?Ho=[i]:Ho.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=Jw(i,u,e);Xy(i,E);break e;case 1:l=u;var x=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Lr===null||!Lr.has(y)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Zw(i,l,e);Xy(i,b);break e}}i=i.return}while(i!==null)}vx(n)}catch(L){e=L,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function gx(){var t=bu.current;return bu.current=Nu,t===null?Nu:t}function $p(){($e===0||$e===3||$e===2)&&($e=4),He===null||!(Es&268435455)&&!(pc&268435455)||wr(He,et)}function Ru(t,e){var n=se;se|=2;var r=gx();(He!==t||et!==e)&&(Fn=null,ms(t,e));do try{SP();break}catch(s){mx(t,s)}while(!0);if(Tp(),se=n,bu.current=r,Me!==null)throw Error(F(261));return He=null,et=0,$e}function SP(){for(;Me!==null;)yx(Me)}function AP(){for(;Me!==null&&!X1();)yx(Me)}function yx(t){var e=wx(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?vx(t):Me=e,Lp.current=null}function vx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_P(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Me=null;return}}else if(n=vP(n,e,Ft),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);$e===0&&($e=5)}function os(t,e,n){var r=ae,s=Jt.transition;try{Jt.transition=null,ae=1,PP(t,e,n,r)}finally{Jt.transition=s,ae=r}return null}function PP(t,e,n,r){do vi();while(Ar!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(aA(t,i),t===He&&(Me=He=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,xx(fu,function(){return vi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Jt.transition,Jt.transition=null;var o=ae;ae=1;var l=se;se|=4,Lp.current=null,xP(t,n),hx(n,t),KA(Bh),mu=!!$h,Bh=$h=null,t.current=n,EP(n),J1(),se=l,ae=o,Jt.transition=i}else t.current=n;if(Ol&&(Ol=!1,Ar=t,ku=s),i=t.pendingLanes,i===0&&(Lr=null),tA(n.stateNode),Dt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Cu)throw Cu=!1,t=uf,uf=null,t;return ku&1&&t.tag!==0&&vi(),i=t.pendingLanes,i&1?t===cf?Wo++:(Wo=0,cf=t):Wo=0,Xr(),null}function vi(){if(Ar!==null){var t=J0(ku),e=Jt.transition,n=ae;try{if(Jt.transition=null,ae=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,ku=0,se&6)throw Error(F(331));var s=se;for(se|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:qo(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,w=f.return;if(ux(f),f===d){q=null;break}if(g!==null){g.return=w,q=g;break}q=w}}}var S=i.alternate;if(S!==null){var N=S.child;if(N!==null){S.child=null;do{var C=N.sibling;N.sibling=null,N=C}while(N!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qo(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,q=E;break e}q=i.return}}var x=t.current;for(q=x;q!==null;){o=q;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,q=y;else e:for(o=x;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fc(9,l)}}catch(L){Se(l,l.return,L)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(se=s,Xr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ic,t)}catch{}r=!0}return r}finally{ae=n,Jt.transition=e}}return!1}function vv(t,e,n){e=bi(n,e),e=Jw(t,e,1),t=Dr(t,e,1),e=It(),t!==null&&(ja(t,1,e),Dt(t,e))}function Se(t,e,n){if(t.tag===3)vv(t,t,n);else for(;e!==null;){if(e.tag===3){vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=bi(n,t),t=Zw(e,t,1),e=Dr(e,t,1),t=It(),e!==null&&(ja(e,1,t),Dt(e,t));break}}e=e.return}}function NP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>Re()-Vp?ms(t,0):Mp|=n),Dt(t,e)}function _x(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=It();t=tr(t,e),t!==null&&(ja(t,e,n),Dt(t,n))}function bP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_x(t,n)}function CP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),_x(t,n)}var wx;wx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,yP(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,ve&&e.flags&1048576&&Iw(e,Eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yl(t,e),t=e.pendingProps;var s=Si(e,mt.current);yi(e,n),s=kp(null,e,r,t,s,n);var i=Rp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(i=!0,wu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ap(e),s.updater=hc,e.stateNode=s,s._reactInternals=e,Xh(e,r,t,n),e=ef(null,e,r,!0,i,n)):(e.tag=0,ve&&i&&_p(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=RP(r),t=on(r,t),s){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=lv(null,e,r,t,n);break e;case 11:e=ov(null,e,r,t,n);break e;case 14:e=av(null,e,r,on(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Zh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),lv(t,e,r,s,n);case 3:e:{if(rx(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Cw(t,e),Su(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=bi(Error(F(423)),e),e=uv(t,e,r,n,s);break e}else if(r!==s){s=bi(Error(F(424)),e),e=uv(t,e,r,n,s);break e}else for($t=jr(e.stateNode.containerInfo.firstChild),qt=e,ve=!0,ln=null,n=Nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ai(),r===s){e=nr(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return kw(e),t===null&&Gh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,zh(r,s)?o=null:i!==null&&zh(r,i)&&(e.flags|=32),nx(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Gh(e),null;case 13:return sx(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Pi(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),ov(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,pe(Tu,r._currentValue),r._currentValue=o,i!==null)if(pn(i.value,o)){if(i.children===s.children&&!Ot.current){e=nr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,yi(e,n),s=Zt(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=on(r,e.pendingProps),s=on(r.type,s),av(t,e,r,s,n);case 15:return ex(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Yl(t,e),e.tag=1,jt(r)?(t=!0,wu(e)):t=!1,yi(e,n),Xw(e,r,s),Xh(e,r,s,n),ef(null,e,r,!0,t,n);case 19:return ix(t,e,n);case 22:return tx(t,e,n)}throw Error(F(156,e.tag))};function xx(t,e){return G0(t,e)}function kP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new kP(t,e,n,r)}function Bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RP(t){if(typeof t=="function")return Bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return gs(n.children,s,i,e);case op:o=8,s|=8;break;case xh:return t=Yt(12,n,e,s|2),t.elementType=xh,t.lanes=i,t;case Eh:return t=Yt(13,n,e,s),t.elementType=Eh,t.lanes=i,t;case Th:return t=Yt(19,n,e,s),t.elementType=Th,t.lanes=i,t;case k0:return mc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b0:o=10;break e;case C0:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case yr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function gs(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function mc(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=k0,t.lanes=n,t.stateNode={isHidden:!1},t}function Gd(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OP(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function zp(t,e,n,r,s,i,o,l,u){return t=new OP(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Yt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(i),t}function jP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ex(t){if(!t)return zr;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(jt(n))return Ew(t,n,e)}return e}function Tx(t,e,n,r,s,i,o,l,u){return t=zp(n,r,!0,t,s,i,o,l,u),t.context=Ex(null),n=t.current,r=It(),s=Mr(n),i=Qn(r,s),i.callback=e??null,Dr(n,i,s),t.current.lanes=s,ja(t,s,r),Dt(t,r),t}function gc(t,e,n,r){var s=e.current,i=It(),o=Mr(s);return n=Ex(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dr(s,e,o),t!==null&&(dn(t,s,o,i),Kl(t,s,o)),o}function Ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _v(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){_v(t,e),(t=t.alternate)&&_v(t,e)}function DP(){return null}var Ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hp(t){this._internalRoot=t}yc.prototype.render=Hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));gc(t,e,null,null)};yc.prototype.unmount=Hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ts(function(){gc(null,t,null,null)}),e[er]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&rw(t)}};function Wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wv(){}function LP(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Ou(o);i.call(d)}}var o=Tx(e,r,t,0,null,!1,!1,"",wv);return t._reactRootContainer=o,t[er]=o.current,aa(t.nodeType===8?t.parentNode:t),Ts(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Ou(u);l.call(d)}}var u=zp(t,0,!1,null,null,!1,!1,"",wv);return t._reactRootContainer=u,t[er]=u.current,aa(t.nodeType===8?t.parentNode:t),Ts(function(){gc(e,u,n,r)}),u}function _c(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ou(o);l.call(u)}}gc(e,o,t,s)}else o=LP(n,e,t,s,r);return Ou(o)}Z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(dp(e,n|1),Dt(e,Re()),!(se&6)&&(Ci=Re()+500,Xr()))}break;case 13:Ts(function(){var r=tr(t,1);if(r!==null){var s=It();dn(r,t,1,s)}}),qp(t,1)}};hp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=It();dn(e,t,134217728,n)}qp(t,134217728)}};ew=function(t){if(t.tag===13){var e=Mr(t),n=tr(t,e);if(n!==null){var r=It();dn(n,t,e,r)}qp(t,e)}};tw=function(){return ae};nw=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Oh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=uc(r);if(!s)throw Error(F(90));O0(r),Ah(r,s)}}}break;case"textarea":D0(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};B0=Up;z0=Ts;var MP={usingClientEntryPoint:!1,Events:[La,si,uc,F0,$0,Up]},xo={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VP={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W0(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||DP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{ic=jl.inject(VP),Tn=jl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MP;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(e))throw Error(F(200));return jP(t,e,null,n)};Wt.createRoot=function(t,e){if(!Wp(t))throw Error(F(299));var n=!1,r="",s=Ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=zp(t,1,!1,null,null,n,!1,r,s),t[er]=e.current,aa(t.nodeType===8?t.parentNode:t),new Hp(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=W0(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Ts(t)};Wt.hydrate=function(t,e,n){if(!vc(e))throw Error(F(200));return _c(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Wp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Ix;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tx(e,null,t,1,n??null,s,!1,i,o),t[er]=e.current,aa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new yc(e)};Wt.render=function(t,e,n){if(!vc(e))throw Error(F(200));return _c(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!vc(t))throw Error(F(40));return t._reactRootContainer?(Ts(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Wt.unstable_batchedUpdates=Up;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return _c(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(t){console.error(t)}}Sx(),S0.exports=Wt;var UP=S0.exports,xv=UP;_h.createRoot=xv.createRoot,_h.hydrateRoot=xv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}var Pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pr||(Pr={}));const Ev="popstate";function FP(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return ff("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ju(s)}return BP(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ax(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $P(){return Math.random().toString(36).substr(2,8)}function Tv(t,e){return{usr:t.state,key:t.key,idx:e}}function ff(t,e,n,r){return n===void 0&&(n=null),ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hi(e):e,{state:n,key:e&&e.key||r||$P()})}function ju(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function BP(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=Pr.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(ga({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Pr.Pop;let C=f(),E=C==null?null:C-d;d=C,u&&u({action:l,location:N.location,delta:E})}function g(C,E){l=Pr.Push;let x=ff(N.location,C,E);d=f()+1;let y=Tv(x,d),b=N.createHref(x);try{o.pushState(y,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(b)}i&&u&&u({action:l,location:N.location,delta:1})}function w(C,E){l=Pr.Replace;let x=ff(N.location,C,E);d=f();let y=Tv(x,d),b=N.createHref(x);o.replaceState(y,"",b),i&&u&&u({action:l,location:N.location,delta:0})}function S(C){let E=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof C=="string"?C:ju(C);return x=x.replace(/ $/,"%20"),je(E,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,E)}let N={get action(){return l},get location(){return t(s,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Ev,m),u=C,()=>{s.removeEventListener(Ev,m),u=null}},createHref(C){return e(s,C)},createURL:S,encodeLocation(C){let E=S(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:w,go(C){return o.go(C)}};return N}var Iv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Iv||(Iv={}));function zP(t,e,n){return n===void 0&&(n="/"),qP(t,e,n)}function qP(t,e,n,r){let s=typeof e=="string"?Hi(e):e,i=Kp(s.pathname||"/",n);if(i==null)return null;let o=Px(t);HP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=rN(i);l=eN(o[u],d)}return l}function Px(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Ur([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Px(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:JP(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of Nx(i.path))s(i,o,u)}),e}function Nx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Nx(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function HP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WP=/^:[\w-]+$/,KP=3,GP=2,QP=1,YP=10,XP=-2,Sv=t=>t==="*";function JP(t,e){let n=t.split("/"),r=n.length;return n.some(Sv)&&(r+=XP),e&&(r+=GP),n.filter(s=>!Sv(s)).reduce((s,i)=>s+(WP.test(i)?KP:i===""?QP:YP),r)}function ZP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function eN(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=tN({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),g=u.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:Ur([i,m.pathname]),pathnameBase:aN(Ur([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=Ur([i,m.pathnameBase]))}return o}function tN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=nN(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let N=l[m]||"";o=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const S=l[m];return w&&!S?d[g]=void 0:d[g]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function nN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ax(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function rN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ax(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Hi(t):t;return{pathname:n?n.startsWith("/")?n:iN(n,e):e,search:lN(r),hash:uN(s)}}function iN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gp(t,e){let n=oN(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Qp(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Hi(t):(s=ga({},t),je(!s.pathname||!s.pathname.includes("?"),Yd("?","pathname","search",s)),je(!s.pathname||!s.pathname.includes("#"),Yd("#","pathname","hash",s)),je(!s.search||!s.search.includes("#"),Yd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=sN(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const Ur=t=>t.join("/").replace(/\/\/+/g,"/"),aN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bx=["post","put","patch","delete"];new Set(bx);const dN=["get",...bx];new Set(dN);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}const Yp=j.createContext(null),hN=j.createContext(null),Jr=j.createContext(null),wc=j.createContext(null),lr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Cx=j.createContext(null);function fN(t,e){let{relative:n}=e===void 0?{}:e;Wi()||je(!1);let{basename:r,navigator:s}=j.useContext(Jr),{hash:i,pathname:o,search:l}=Ox(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ur([r,o])),s.createHref({pathname:u,search:l,hash:i})}function Wi(){return j.useContext(wc)!=null}function js(){return Wi()||je(!1),j.useContext(wc).location}function kx(t){j.useContext(Jr).static||j.useLayoutEffect(t)}function yn(){let{isDataRoute:t}=j.useContext(lr);return t?AN():pN()}function pN(){Wi()||je(!1);let t=j.useContext(Yp),{basename:e,future:n,navigator:r}=j.useContext(Jr),{matches:s}=j.useContext(lr),{pathname:i}=js(),o=JSON.stringify(Gp(s,n.v7_relativeSplatPath)),l=j.useRef(!1);return kx(()=>{l.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=Qp(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ur([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}function Rx(){let{matches:t}=j.useContext(lr),e=t[t.length-1];return e?e.params:{}}function Ox(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Jr),{matches:s}=j.useContext(lr),{pathname:i}=js(),o=JSON.stringify(Gp(s,r.v7_relativeSplatPath));return j.useMemo(()=>Qp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function mN(t,e){return gN(t,e)}function gN(t,e,n,r){Wi()||je(!1);let{navigator:s}=j.useContext(Jr),{matches:i}=j.useContext(lr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=js(),f;if(e){var m;let C=typeof e=="string"?Hi(e):e;u==="/"||(m=C.pathname)!=null&&m.startsWith(u)||je(!1),f=C}else f=d;let g=f.pathname||"/",w=g;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=zP(t,{pathname:w}),N=xN(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Ur([u,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Ur([u,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return e&&N?j.createElement(wc.Provider,{value:{location:ya({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Pr.Pop}},N):N}function yN(){let t=SN(),e=cN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:s},n):null,null)}const vN=j.createElement(yN,null);class _N extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(lr.Provider,{value:this.props.routeContext},j.createElement(Cx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wN(t){let{routeContext:e,match:n,children:r}=t,s=j.useContext(Yp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(lr.Provider,{value:e},r)}function xN(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||je(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:w}=n,S=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||S){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let w,S=!1,N=null,C=null;n&&(w=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||vN,u&&(d<0&&g===0?(PN("route-fallback"),S=!0,C=null):d===g&&(S=!0,C=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),x=()=>{let y;return w?y=N:S?y=C:m.route.Component?y=j.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=f,j.createElement(wN,{match:m,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:y})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?j.createElement(_N,{location:n.location,revalidation:n.revalidation,component:N,error:w,children:x(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):x()},null)}var jx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(jx||{}),Dx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Dx||{});function EN(t){let e=j.useContext(Yp);return e||je(!1),e}function TN(t){let e=j.useContext(hN);return e||je(!1),e}function IN(t){let e=j.useContext(lr);return e||je(!1),e}function Lx(t){let e=IN(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function SN(){var t;let e=j.useContext(Cx),n=TN(),r=Lx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function AN(){let{router:t}=EN(jx.UseNavigateStable),e=Lx(Dx.UseNavigateStable),n=j.useRef(!1);return kx(()=>{n.current=!0}),j.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ya({fromRouteId:e},i)))},[t,e])}const Av={};function PN(t,e,n){Av[t]||(Av[t]=!0)}function NN(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function pf(t){let{to:e,replace:n,state:r,relative:s}=t;Wi()||je(!1);let{future:i,static:o}=j.useContext(Jr),{matches:l}=j.useContext(lr),{pathname:u}=js(),d=yn(),f=Qp(e,Gp(l,i.v7_relativeSplatPath),u,s==="path"),m=JSON.stringify(f);return j.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:s}),[d,m,s,n,r]),null}function Et(t){je(!1)}function bN(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Pr.Pop,navigator:i,static:o=!1,future:l}=t;Wi()&&je(!1);let u=e.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:u,navigator:i,static:o,future:ya({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=Hi(r));let{pathname:f="/",search:m="",hash:g="",state:w=null,key:S="default"}=r,N=j.useMemo(()=>{let C=Kp(f,u);return C==null?null:{location:{pathname:C,search:m,hash:g,state:w,key:S},navigationType:s}},[u,f,m,g,w,S,s]);return N==null?null:j.createElement(Jr.Provider,{value:d},j.createElement(wc.Provider,{children:n,value:N}))}function CN(t){let{children:e,location:n}=t;return mN(mf(e),n)}new Promise(()=>{});function mf(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,s)=>{if(!j.isValidElement(r))return;let i=[...e,s];if(r.type===j.Fragment){n.push.apply(n,mf(r.props.children,i));return}r.type!==Et&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mf(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(){return gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gf.apply(this,arguments)}function kN(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function RN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ON(t,e){return t.button===0&&(!e||e==="_self")&&!RN(t)}function yf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function jN(t,e){let n=yf(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}const DN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],LN="6";try{window.__reactRouterVersion=LN}catch{}const MN="startTransition",Pv=N1[MN];function VN(t){let{basename:e,children:n,future:r,window:s}=t,i=j.useRef();i.current==null&&(i.current=FP({window:s,v5Compat:!0}));let o=i.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=j.useCallback(m=>{d&&Pv?Pv(()=>u(m)):u(m)},[u,d]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>NN(r),[r]),j.createElement(bN,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const UN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=j.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,g=kN(e,DN),{basename:w}=j.useContext(Jr),S,N=!1;if(typeof d=="string"&&FN.test(d)&&(S=d,UN))try{let y=new URL(window.location.href),b=d.startsWith("//")?new URL(y.protocol+d):new URL(d),L=Kp(b.pathname,w);b.origin===y.origin&&L!=null?d=L+b.search+b.hash:N=!0}catch{}let C=fN(d,{relative:s}),E=$N(d,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:m});function x(y){r&&r(y),y.defaultPrevented||E(y)}return j.createElement("a",gf({},g,{href:S||C,onClick:N||i?r:x,ref:n,target:u}))});var Nv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Nv||(Nv={}));var bv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bv||(bv={}));function $N(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=yn(),d=js(),f=Ox(t,{relative:o});return j.useCallback(m=>{if(ON(m,n)){m.preventDefault();let g=r!==void 0?r:ju(d)===ju(f);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[d,u,f,r,s,n,t,i,o,l])}function BN(t){let e=j.useRef(yf(t)),n=j.useRef(!1),r=js(),s=j.useMemo(()=>jN(r.search,n.current?null:e.current),[r.search]),i=yn(),o=j.useCallback((l,u)=>{const d=yf(typeof l=="function"?l(s):l);n.current=!0,i("?"+d,u)},[i,s]);return[s,o]}var Cv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,w=d&63;u||(w=64,o||(g=64)),r.push(n[f],n[m],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new qN;const g=i<<2|l>>4;if(r.push(g),d!==64){const w=l<<4&240|d>>2;if(r.push(w),m!==64){const S=d<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HN=function(t){const e=Mx(t);return Vx.encodeByteArray(e,!0)},Du=function(t){return HN(t).replace(/\./g,"")},Ux=function(t){try{return Vx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=()=>WN().__FIREBASE_DEFAULTS__,GN=()=>{if(typeof process>"u"||typeof Cv>"u")return;const t=Cv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ux(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return KN()||GN()||QN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fx=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$x=t=>{const e=Fx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bx=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config},zx=t=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Du(JSON.stringify(n)),Du(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function JN(){var t;const e=(t=xc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rb(){return!JN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hx(){try{return typeof indexedDB=="object"}catch{return!1}}function Wx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function sb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ib,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ob(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new vn(s,l,r)}}function ob(t,e){return t.replace(ab,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ab=/\{\$([^}]+)}/g;function lb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kv(i)&&kv(o)){if(!va(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ub(t,e){const n=new cb(t,e);return n.subscribe.bind(n)}class cb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");db(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xd),s.error===void 0&&(s.error=Xd),s.complete===void 0&&(s.complete=Xd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pb(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fb(t){return t===as?void 0:t}function pb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const gb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},yb=ne.INFO,vb={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},_b=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xp{constructor(e){this.name=e,this._logLevel=yb,this._logHandler=_b,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const wb=(t,e)=>e.some(n=>t instanceof n);let Rv,Ov;function xb(){return Rv||(Rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eb(){return Ov||(Ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kx=new WeakMap,vf=new WeakMap,Gx=new WeakMap,Jd=new WeakMap,Jp=new WeakMap;function Tb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kx.set(n,t)}).catch(()=>{}),Jp.set(e,t),e}function Ib(t){if(vf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vf.set(t,e)}let _f={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sb(t){_f=t(_f)}function Ab(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return Gx.set(r,e.sort?e.sort():[e]),Yn(r)}:Eb().includes(t)?function(...e){return t.apply(Zd(this),e),Yn(Kx.get(this))}:function(...e){return Yn(t.apply(Zd(this),e))}}function Pb(t){return typeof t=="function"?Ab(t):(t instanceof IDBTransaction&&Ib(t),wb(t,xb())?new Proxy(t,_f):t)}function Yn(t){if(t instanceof IDBRequest)return Tb(t);if(Jd.has(t))return Jd.get(t);const e=Pb(t);return e!==t&&(Jd.set(t,e),Jp.set(e,t)),e}const Zd=t=>Jp.get(t);function Ec(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Yn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yn(o.result),u.oldVersion,u.newVersion,Yn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function eh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Yn(n).then(()=>{})}const Nb=["get","getKey","getAll","getAllKeys","count"],bb=["put","add","delete","clear"],th=new Map;function jv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nb.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return th.set(e,i),i}Sb(t=>({...t,get:(e,n,r)=>jv(e,n)||t.get(e,n,r),has:(e,n)=>!!jv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wf="@firebase/app",Dv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Xp("@firebase/app"),Rb="@firebase/app-compat",Ob="@firebase/analytics-compat",jb="@firebase/analytics",Db="@firebase/app-check-compat",Lb="@firebase/app-check",Mb="@firebase/auth",Vb="@firebase/auth-compat",Ub="@firebase/database",Fb="@firebase/data-connect",$b="@firebase/database-compat",Bb="@firebase/functions",zb="@firebase/functions-compat",qb="@firebase/installations",Hb="@firebase/installations-compat",Wb="@firebase/messaging",Kb="@firebase/messaging-compat",Gb="@firebase/performance",Qb="@firebase/performance-compat",Yb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Jb="@firebase/storage",Zb="@firebase/storage-compat",eC="@firebase/firestore",tC="@firebase/vertexai-preview",nC="@firebase/firestore-compat",rC="firebase",sC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="[DEFAULT]",iC={[wf]:"fire-core",[Rb]:"fire-core-compat",[jb]:"fire-analytics",[Ob]:"fire-analytics-compat",[Lb]:"fire-app-check",[Db]:"fire-app-check-compat",[Mb]:"fire-auth",[Vb]:"fire-auth-compat",[Ub]:"fire-rtdb",[Fb]:"fire-data-connect",[$b]:"fire-rtdb-compat",[Bb]:"fire-fn",[zb]:"fire-fn-compat",[qb]:"fire-iid",[Hb]:"fire-iid-compat",[Wb]:"fire-fcm",[Kb]:"fire-fcm-compat",[Gb]:"fire-perf",[Qb]:"fire-perf-compat",[Yb]:"fire-rc",[Xb]:"fire-rc-compat",[Jb]:"fire-gcs",[Zb]:"fire-gcs-compat",[eC]:"fire-fst",[nC]:"fire-fst-compat",[tC]:"fire-vertex","fire-js":"fire-js",[rC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map,oC=new Map,Ef=new Map;function Lv(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(Ef.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Ef.set(e,t);for(const n of Lu.values())Lv(n,t);for(const n of oC.values())Lv(n,t);return!0}function Ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Ds("app","Firebase",aC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=sC;function Qx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Fr.create("bad-app-name",{appName:String(s)});if(n||(n=Bx()),!n)throw Fr.create("no-options");const i=Lu.get(s);if(i){if(va(n,i.options)&&va(r,i.config))return i;throw Fr.create("duplicate-app",{appName:s})}const o=new mb(s);for(const u of Ef.values())o.addComponent(u);const l=new lC(n,r,o);return Lu.set(s,l),l}function Tc(t=xf){const e=Lu.get(t);if(!e&&t===xf&&Bx())return Qx();if(!e)throw Fr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let s=(r=iC[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(l.join(" "));return}mn(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="firebase-heartbeat-database",cC=1,_a="firebase-heartbeat-store";let nh=null;function Yx(){return nh||(nh=Ec(uC,cC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),nh}async function dC(t){try{const n=(await Yx()).transaction(_a),r=await n.objectStore(_a).get(Xx(t));return await n.done,r}catch(e){if(e instanceof vn)rr.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Mv(t,e){try{const r=(await Yx()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,Xx(t)),await r.done}catch(n){if(n instanceof vn)rr.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function Xx(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=1024,fC=30*24*60*60*1e3;class pC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vv(),{heartbeatsToSend:r,unsentEntries:s}=mC(this._heartbeatsCache.heartbeats),i=Du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return rr.warn(n),""}}}function Vv(){return new Date().toISOString().substring(0,10)}function mC(t,e=hC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Uv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Uv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hx()?Wx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Uv(t){return Du(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){mn(new tn("platform-logger",e=>new Cb(e),"PRIVATE")),mn(new tn("heartbeat",e=>new pC(e),"PRIVATE")),Lt(wf,Dv,t),Lt(wf,Dv,"esm2017"),Lt("fire-js","")}yC("");function Zp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vC=Jx,Zx=new Ds("auth","Firebase",Jx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Xp("@firebase/auth");function _C(t,...e){Mu.logLevel<=ne.WARN&&Mu.warn(`Auth (${Ms}): ${t}`,...e)}function eu(t,...e){Mu.logLevel<=ne.ERROR&&Mu.error(`Auth (${Ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw tm(t,...e)}function hn(t,...e){return tm(t,...e)}function em(t,e,n){const r=Object.assign(Object.assign({},vC()),{[e]:n});return new Ds("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return em(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),em(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zx.create(t,...e)}function K(t,e,...n){if(!t)throw tm(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eu(e),new Error(e)}function sr(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xC(){return Fv()==="http:"||Fv()==="https:"}function Fv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xC()||eb()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=XN()||tb()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=new Ua(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,r,s={}){return tE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Va(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return ZN()||(d.referrerPolicy="no-referrer"),eE.fetch()(nE(t,t.config.apiHost,n,l),d)})}async function tE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IC),e);try{const s=new PC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Dl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw em(t,f,d);nn(t,f)}}catch(s){if(s instanceof vn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Fa(t,e,n,r,s={}){const i=await kn(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?nm(t.config,s):`${t.config.apiScheme}://${s}`}function AC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),SC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}function $v(t){return t!==void 0&&t.enterprise!==void 0}class NC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bC(t,e){return kn(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function rE(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kC(t,e=!1){const n=he(t),r=await n.getIdToken(e),s=rm(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ko(rh(s.auth_time)),issuedAtTime:Ko(rh(s.iat)),expirationTime:Ko(rh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function rm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ux(n);return s?JSON.parse(s):(eu("Failed to decode base64 JWT payload"),null)}catch(s){return eu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bv(t){const e=rm(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&RC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,rE(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sE(i.providerUserInfo):[],l=DC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new If(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function jC(t){const e=he(t);await Vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sE(t){return t.map(e=>{var{providerId:n}=e,r=Zp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){const n=await tE(t,{},async()=>{const r=Va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",eE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MC(t,e){return kn(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Bv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await LC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _i;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new If(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kC(this,e)}reload(){return jC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await ki(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:y,emailVerified:b,isAnonymous:L,providerData:V,stsTokenManager:T}=n;K(y&&T,e,"internal-error");const _=_i.fromJSON(this.name,T);K(typeof y=="string",e,"internal-error"),gr(m,e.name),gr(g,e.name),K(typeof b=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),gr(w,e.name),gr(S,e.name),gr(N,e.name),gr(C,e.name),gr(E,e.name),gr(x,e.name);const A=new Kn({uid:y,auth:e,email:g,emailVerified:b,displayName:m,isAnonymous:L,photoURL:S,phoneNumber:w,tenantId:N,stsTokenManager:_,createdAt:E,lastLoginAt:x});return V&&Array.isArray(V)&&(A.providerData=V.map(I=>Object.assign({},I))),C&&(A._redirectEventId=C),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new _i;s.updateFromServerResponse(n);const i=new Kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new _i;l.updateFromIdToken(r);const u=new Kn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new Map;function Gn(t){sr(t instanceof Function,"Expected a class definition");let e=zv.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iE.type="NONE";const qv=iE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tu(this.userKey,s.apiKey,i),this.fullPersistenceKey=tu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(Gn(qv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Gn(qv);const o=tu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=Kn._fromJSON(e,f);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new wi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new wi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dE(e))return"Blackberry";if(hE(e))return"Webos";if(aE(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(cE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oE(t=gt()){return/firefox\//i.test(t)}function aE(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=gt()){return/crios\//i.test(t)}function uE(t=gt()){return/iemobile/i.test(t)}function cE(t=gt()){return/android/i.test(t)}function dE(t=gt()){return/blackberry/i.test(t)}function hE(t=gt()){return/webos/i.test(t)}function sm(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=gt()){var e;return sm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UC(){return nb()&&document.documentMode===10}function fE(t=gt()){return sm(t)||cE(t)||hE(t)||dE(t)||/windows phone/i.test(t)||uE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=Hv(gt());break;case"Worker":n=`${Hv(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e={}){return kn(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=6;class zC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wv(this),this.idTokenSubscription=new Wv(this),this.beforeStateQueue=new FC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rE(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Xn(this));const n=e?he(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $C(this),n=new zC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_C(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return he(t)}class Wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=ub(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HC(t){Ic=t}function mE(t){return Ic.loadJS(t)}function WC(){return Ic.recaptchaEnterpriseScript}function KC(){return Ic.gapiScript}function GC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QC="recaptcha-enterprise",YC="NO_RECAPTCHA";class XC{constructor(e){this.type=QC,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{bC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new NC(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;$v(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(YC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&$v(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=WC();u.length!==0&&(u+=l),mE(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Kv(t,e,n,r=!1){const s=new XC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kv(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e){const n=Ls(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(va(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function ZC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ek(t,e,n){const r=cr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gE(e),{host:o,port:l}=tk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),nk()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tk(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gv(o)}}}function Gv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function rk(t,e){return kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}async function ik(t,e){return kn(t,"POST","/v1/accounts:sendOobCode",ur(t,e))}async function ok(t,e){return ik(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function lk(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends im{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,n,"signInWithPassword",sk);case"emailLink":return ak(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,r,"signUpPassword",rk);case"emailLink":return lk(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="http://localhost";class Is extends im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dk(t){const e=ko(Ro(t)).link,n=e?ko(Ro(e)).deep_link_id:null,r=ko(Ro(t)).deep_link_id;return(r?ko(Ro(r)).link:null)||r||n||e||t}class om{constructor(e){var n,r,s,i,o,l;const u=ko(Ro(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=ck((s=u.mode)!==null&&s!==void 0?s:null);K(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=dk(e);try{return new om(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=om.parseLink(n);return K(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends $a{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends $a{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends $a{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e){return Fa(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kn._fromIdTokenResponse(e,r,s),o=Qv(r);return new Ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qv(r);return new Ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fu(e,n,r,s)}}function yE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(t,i,e,r):i})}async function fk(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await ki(t,yE(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=rm(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e,n=!1){if(un(t.app))return Promise.reject(Xn(t));const r="signIn",s=await yE(t,r,e),i=await Ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mk(t,e){return vE(cr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gk(t,e,n){const r=cr(t);await Uu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ok)}async function yk(t,e,n){if(un(t.app))return Promise.reject(Xn(t));const r=cr(t),o=await Uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&_E(t),u}),l=await Ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function vk(t,e,n){return un(t.app)?Promise.reject(Xn(t)):mk(he(t),Ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_E(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=he(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ki(r,_k(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xk(t,e,n,r){return he(t).onIdTokenChanged(e,n,r)}function Ek(t,e,n){return he(t).beforeAuthStateChanged(e,n)}function Tk(t,e,n,r){return he(t).onAuthStateChanged(e,n,r)}function Ik(t){return he(t).signOut()}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=1e3,Ak=10;class xE extends wE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);UC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ak):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const Pk=xE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE extends wE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EE.type="SESSION";const TE=EE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await Nk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=lm("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function Ck(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function kk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ok(){return IE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebaseLocalStorageDb",jk=1,Bu="firebaseLocalStorage",AE="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function Dk(){const t=indexedDB.deleteDatabase(SE);return new Ba(t).toPromise()}function Sf(){const t=indexedDB.open(SE,jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bu,{keyPath:AE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bu)?e(r):(r.close(),await Dk(),e(await Sf()))})})}async function Yv(t,e,n){const r=Ac(t,!0).put({[AE]:e,value:n});return new Ba(r).toPromise()}async function Lk(t,e){const n=Ac(t,!1).get(e),r=await new Ba(n).toPromise();return r===void 0?null:r.value}function Xv(t,e){const n=Ac(t,!0).delete(e);return new Ba(n).toPromise()}const Mk=800,Vk=3;class PE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(Ok()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kk(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sf();return await Yv(e,$u,"1"),await Xv(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ac(s,!1).getAll();return new Ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PE.type="LOCAL";const Uk=PE;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){return e?Gn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fk(t){return vE(t.auth,new um(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),pk(n,new um(t),t.bypassAuthState)}async function Bk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),fk(n,new um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fk;case"linkViaPopup":case"linkViaRedirect":return Bk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:nn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=new Ua(2e3,1e4);async function qk(t,e,n){if(un(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const r=cr(t);wC(t,e,am);const s=NE(r,n);return new hs(r,"signInViaPopup",e,s).executeNotNull()}class hs extends bE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zk.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="pendingRedirect",nu=new Map;class Wk extends bE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nu.get(this.auth._key());if(!e){try{const r=await Kk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nu.set(this.auth._key(),e)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kk(t,e){const n=Yk(e),r=Qk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gk(t,e){nu.set(t._key(),e)}function Qk(t){return Gn(t._redirectPersistence)}function Yk(t){return tu(Hk,t.config.apiKey,t.name)}async function Xk(t,e,n=!1){if(un(t.app))return Promise.reject(Xn(t));const r=cr(t),s=NE(r,e),o=await new Wk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=10*60*1e3;class Zk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jv(e))}saveEventToCache(e){this.cachedEventUids.add(Jv(e)),this.lastProcessedEventTime=Date.now()}}function Jv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rR=/^https?/;async function sR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tR(t);for(const n of e)try{if(iR(n))return}catch{}nn(t,"unauthorized-domain")}function iR(t){const e=Tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rR.test(n))return!1;if(nR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new Ua(3e4,6e4);function Zv(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aR(t){return new Promise((e,n)=>{var r,s,i;function o(){Zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zv(),n(hn(t,"network-request-failed"))},timeout:oR.get()})}if(!((s=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Sn().gapi)===null||i===void 0)&&i.load)o();else{const l=GC("iframefcb");return Sn()[l]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},mE(`${KC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ru=null,e})}let ru=null;function lR(t){return ru=ru||aR(t),ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Ua(5e3,15e3),cR="__/auth/iframe",dR="emulator/auth/iframe",hR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nm(e,dR):`https://${t.config.authDomain}/${cR}`,r={apiKey:e.apiKey,appName:t.name,v:Ms},s=fR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Va(r).slice(1)}`}async function mR(t){const e=await lR(t),n=Sn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:pR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=Sn().setTimeout(()=>{i(o)},uR.get());function u(){Sn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,vR=600,_R="_blank",wR="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xR(t,e,n,r=yR,s=vR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},gR),{width:r.toString(),height:s.toString(),top:i,left:o}),d=gt().toLowerCase();n&&(l=lE(d)?_R:n),oE(d)&&(e=e||wR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[w,S])=>`${g}${w}=${S},`,"");if(VC(d)&&l!=="_self")return ER(e||"",l),new e_(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new e_(m)}function ER(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="__/auth/handler",IR="emulator/auth/handler",SR=encodeURIComponent("fac");async function t_(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ms,eventId:s};if(e instanceof am){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof $a){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${SR}=${encodeURIComponent(u)}`:"";return`${AR(t)}?${Va(l).slice(1)}${d}`}function AR({config:t}){return t.emulator?nm(t,IR):`https://${t.authDomain}/${TR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="webStorageSupport";class PR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TE,this._completeRedirectFn=Xk,this._overrideRedirectResult=Gk}async _openPopup(e,n,r,s){var i;sr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await t_(e,n,r,Tf(),s);return xR(e,o,lm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await t_(e,n,r,Tf(),s);return Ck(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mR(e),r=new Zk(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sh,{type:sh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sh];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fE()||aE()||sm()}}const NR=PR;var n_="@firebase/auth",r_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kR(t){mn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},d=new qC(r,s,i,u);return ZC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mn(new tn("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(n_,r_,CR(t)),Lt(n_,r_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=5*60,OR=zx("authIdTokenMaxAge")||RR;let s_=null;const jR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OR)return;const s=n==null?void 0:n.token;s_!==s&&(s_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DR(t=Tc()){const e=Ls(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JC(t,{popupRedirectResolver:NR,persistence:[Uk,Pk,TE]}),r=zx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jR(i.toString());Ek(n,o,()=>o(n.currentUser)),xk(n,l=>o(l))}}const s=Fx("auth");return s&&ek(n,`http://${s}`),n}function LR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",LR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kR("Browser");var MR="firebase",VR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(MR,VR,"app");var i_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,kE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function A(){}A.prototype=_.prototype,T.D=_.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(I,k,R){for(var P=Array(arguments.length-2),We=2;We<arguments.length;We++)P[We-2]=arguments[We];return _.prototype[k].apply(I,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,A){A||(A=0);var I=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)I[k]=_.charCodeAt(A++)|_.charCodeAt(A++)<<8|_.charCodeAt(A++)<<16|_.charCodeAt(A++)<<24;else for(k=0;16>k;++k)I[k]=_[A++]|_[A++]<<8|_[A++]<<16|_[A++]<<24;_=T.g[0],A=T.g[1],k=T.g[2];var R=T.g[3],P=_+(R^A&(k^R))+I[0]+3614090360&4294967295;_=A+(P<<7&4294967295|P>>>25),P=R+(k^_&(A^k))+I[1]+3905402710&4294967295,R=_+(P<<12&4294967295|P>>>20),P=k+(A^R&(_^A))+I[2]+606105819&4294967295,k=R+(P<<17&4294967295|P>>>15),P=A+(_^k&(R^_))+I[3]+3250441966&4294967295,A=k+(P<<22&4294967295|P>>>10),P=_+(R^A&(k^R))+I[4]+4118548399&4294967295,_=A+(P<<7&4294967295|P>>>25),P=R+(k^_&(A^k))+I[5]+1200080426&4294967295,R=_+(P<<12&4294967295|P>>>20),P=k+(A^R&(_^A))+I[6]+2821735955&4294967295,k=R+(P<<17&4294967295|P>>>15),P=A+(_^k&(R^_))+I[7]+4249261313&4294967295,A=k+(P<<22&4294967295|P>>>10),P=_+(R^A&(k^R))+I[8]+1770035416&4294967295,_=A+(P<<7&4294967295|P>>>25),P=R+(k^_&(A^k))+I[9]+2336552879&4294967295,R=_+(P<<12&4294967295|P>>>20),P=k+(A^R&(_^A))+I[10]+4294925233&4294967295,k=R+(P<<17&4294967295|P>>>15),P=A+(_^k&(R^_))+I[11]+2304563134&4294967295,A=k+(P<<22&4294967295|P>>>10),P=_+(R^A&(k^R))+I[12]+1804603682&4294967295,_=A+(P<<7&4294967295|P>>>25),P=R+(k^_&(A^k))+I[13]+4254626195&4294967295,R=_+(P<<12&4294967295|P>>>20),P=k+(A^R&(_^A))+I[14]+2792965006&4294967295,k=R+(P<<17&4294967295|P>>>15),P=A+(_^k&(R^_))+I[15]+1236535329&4294967295,A=k+(P<<22&4294967295|P>>>10),P=_+(k^R&(A^k))+I[1]+4129170786&4294967295,_=A+(P<<5&4294967295|P>>>27),P=R+(A^k&(_^A))+I[6]+3225465664&4294967295,R=_+(P<<9&4294967295|P>>>23),P=k+(_^A&(R^_))+I[11]+643717713&4294967295,k=R+(P<<14&4294967295|P>>>18),P=A+(R^_&(k^R))+I[0]+3921069994&4294967295,A=k+(P<<20&4294967295|P>>>12),P=_+(k^R&(A^k))+I[5]+3593408605&4294967295,_=A+(P<<5&4294967295|P>>>27),P=R+(A^k&(_^A))+I[10]+38016083&4294967295,R=_+(P<<9&4294967295|P>>>23),P=k+(_^A&(R^_))+I[15]+3634488961&4294967295,k=R+(P<<14&4294967295|P>>>18),P=A+(R^_&(k^R))+I[4]+3889429448&4294967295,A=k+(P<<20&4294967295|P>>>12),P=_+(k^R&(A^k))+I[9]+568446438&4294967295,_=A+(P<<5&4294967295|P>>>27),P=R+(A^k&(_^A))+I[14]+3275163606&4294967295,R=_+(P<<9&4294967295|P>>>23),P=k+(_^A&(R^_))+I[3]+4107603335&4294967295,k=R+(P<<14&4294967295|P>>>18),P=A+(R^_&(k^R))+I[8]+1163531501&4294967295,A=k+(P<<20&4294967295|P>>>12),P=_+(k^R&(A^k))+I[13]+2850285829&4294967295,_=A+(P<<5&4294967295|P>>>27),P=R+(A^k&(_^A))+I[2]+4243563512&4294967295,R=_+(P<<9&4294967295|P>>>23),P=k+(_^A&(R^_))+I[7]+1735328473&4294967295,k=R+(P<<14&4294967295|P>>>18),P=A+(R^_&(k^R))+I[12]+2368359562&4294967295,A=k+(P<<20&4294967295|P>>>12),P=_+(A^k^R)+I[5]+4294588738&4294967295,_=A+(P<<4&4294967295|P>>>28),P=R+(_^A^k)+I[8]+2272392833&4294967295,R=_+(P<<11&4294967295|P>>>21),P=k+(R^_^A)+I[11]+1839030562&4294967295,k=R+(P<<16&4294967295|P>>>16),P=A+(k^R^_)+I[14]+4259657740&4294967295,A=k+(P<<23&4294967295|P>>>9),P=_+(A^k^R)+I[1]+2763975236&4294967295,_=A+(P<<4&4294967295|P>>>28),P=R+(_^A^k)+I[4]+1272893353&4294967295,R=_+(P<<11&4294967295|P>>>21),P=k+(R^_^A)+I[7]+4139469664&4294967295,k=R+(P<<16&4294967295|P>>>16),P=A+(k^R^_)+I[10]+3200236656&4294967295,A=k+(P<<23&4294967295|P>>>9),P=_+(A^k^R)+I[13]+681279174&4294967295,_=A+(P<<4&4294967295|P>>>28),P=R+(_^A^k)+I[0]+3936430074&4294967295,R=_+(P<<11&4294967295|P>>>21),P=k+(R^_^A)+I[3]+3572445317&4294967295,k=R+(P<<16&4294967295|P>>>16),P=A+(k^R^_)+I[6]+76029189&4294967295,A=k+(P<<23&4294967295|P>>>9),P=_+(A^k^R)+I[9]+3654602809&4294967295,_=A+(P<<4&4294967295|P>>>28),P=R+(_^A^k)+I[12]+3873151461&4294967295,R=_+(P<<11&4294967295|P>>>21),P=k+(R^_^A)+I[15]+530742520&4294967295,k=R+(P<<16&4294967295|P>>>16),P=A+(k^R^_)+I[2]+3299628645&4294967295,A=k+(P<<23&4294967295|P>>>9),P=_+(k^(A|~R))+I[0]+4096336452&4294967295,_=A+(P<<6&4294967295|P>>>26),P=R+(A^(_|~k))+I[7]+1126891415&4294967295,R=_+(P<<10&4294967295|P>>>22),P=k+(_^(R|~A))+I[14]+2878612391&4294967295,k=R+(P<<15&4294967295|P>>>17),P=A+(R^(k|~_))+I[5]+4237533241&4294967295,A=k+(P<<21&4294967295|P>>>11),P=_+(k^(A|~R))+I[12]+1700485571&4294967295,_=A+(P<<6&4294967295|P>>>26),P=R+(A^(_|~k))+I[3]+2399980690&4294967295,R=_+(P<<10&4294967295|P>>>22),P=k+(_^(R|~A))+I[10]+4293915773&4294967295,k=R+(P<<15&4294967295|P>>>17),P=A+(R^(k|~_))+I[1]+2240044497&4294967295,A=k+(P<<21&4294967295|P>>>11),P=_+(k^(A|~R))+I[8]+1873313359&4294967295,_=A+(P<<6&4294967295|P>>>26),P=R+(A^(_|~k))+I[15]+4264355552&4294967295,R=_+(P<<10&4294967295|P>>>22),P=k+(_^(R|~A))+I[6]+2734768916&4294967295,k=R+(P<<15&4294967295|P>>>17),P=A+(R^(k|~_))+I[13]+1309151649&4294967295,A=k+(P<<21&4294967295|P>>>11),P=_+(k^(A|~R))+I[4]+4149444226&4294967295,_=A+(P<<6&4294967295|P>>>26),P=R+(A^(_|~k))+I[11]+3174756917&4294967295,R=_+(P<<10&4294967295|P>>>22),P=k+(_^(R|~A))+I[2]+718787259&4294967295,k=R+(P<<15&4294967295|P>>>17),P=A+(R^(k|~_))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var A=_-this.blockSize,I=this.B,k=this.h,R=0;R<_;){if(k==0)for(;R<=A;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(I[k++]=T.charCodeAt(R++),k==this.blockSize){s(this,I),k=0;break}}else for(;R<_;)if(I[k++]=T[R++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var A=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=A&255,A/=256;for(this.u(T),T=Array(16),_=A=0;4>_;++_)for(var I=0;32>I;I+=8)T[A++]=this.g[_]>>>I&255;return T};function i(T,_){var A=l;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=_(T)}function o(T,_){this.h=_;for(var A=[],I=!0,k=T.length-1;0<=k;k--){var R=T[k]|0;I&&R==_||(A[k]=R,I=!1)}this.g=A}var l={};function u(T){return-128<=T&&128>T?i(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return C(d(-T));for(var _=[],A=1,I=0;T>=A;I++)_[I]=T/A|0,A*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return C(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(_,8)),I=m,k=0;k<T.length;k+=8){var R=Math.min(8,T.length-k),P=parseInt(T.substring(k,k+R),_);8>R?(R=d(Math.pow(_,R)),I=I.j(R).add(d(P))):(I=I.j(A),I=I.add(d(P)))}return I}var m=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-C(this).m();for(var T=0,_=1,A=0;A<this.g.length;A++){var I=this.i(A);T+=(0<=I?I:4294967296+I)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(N(this))return"-"+C(this).toString(T);for(var _=d(Math.pow(T,6)),A=this,I="";;){var k=b(A,_).g;A=E(A,k.j(_));var R=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=k,S(A))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=E(this,T),N(T)?-1:S(T)?0:1};function C(T){for(var _=T.g.length,A=[],I=0;I<_;I++)A[I]=~T.g[I];return new o(A,~T.h).add(g)}t.abs=function(){return N(this)?C(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),A=[],I=0,k=0;k<=_;k++){var R=I+(this.i(k)&65535)+(T.i(k)&65535),P=(R>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);I=P>>>16,R&=65535,P&=65535,A[k]=P<<16|R}return new o(A,A[A.length-1]&-2147483648?-1:0)};function E(T,_){return T.add(C(_))}t.j=function(T){if(S(this)||S(T))return m;if(N(this))return N(T)?C(this).j(C(T)):C(C(this).j(T));if(N(T))return C(this.j(C(T)));if(0>this.l(w)&&0>T.l(w))return d(this.m()*T.m());for(var _=this.g.length+T.g.length,A=[],I=0;I<2*_;I++)A[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<T.g.length;k++){var R=this.i(I)>>>16,P=this.i(I)&65535,We=T.i(k)>>>16,Rn=T.i(k)&65535;A[2*I+2*k]+=P*Rn,x(A,2*I+2*k),A[2*I+2*k+1]+=R*Rn,x(A,2*I+2*k+1),A[2*I+2*k+1]+=P*We,x(A,2*I+2*k+1),A[2*I+2*k+2]+=R*We,x(A,2*I+2*k+2)}for(I=0;I<_;I++)A[I]=A[2*I+1]<<16|A[2*I];for(I=_;I<2*_;I++)A[I]=0;return new o(A,0)};function x(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function y(T,_){this.g=T,this.h=_}function b(T,_){if(S(_))throw Error("division by zero");if(S(T))return new y(m,m);if(N(T))return _=b(C(T),_),new y(C(_.g),C(_.h));if(N(_))return _=b(T,C(_)),new y(C(_.g),_.h);if(30<T.g.length){if(N(T)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var A=g,I=_;0>=I.l(T);)A=L(A),I=L(I);var k=V(A,1),R=V(I,1);for(I=V(I,2),A=V(A,2);!S(I);){var P=R.add(I);0>=P.l(T)&&(k=k.add(A),R=P),I=V(I,1),A=V(A,1)}return _=E(T,k.j(_)),new y(k,_)}for(k=m;0<=T.l(_);){for(A=Math.max(1,Math.floor(T.m()/_.m())),I=Math.ceil(Math.log(A)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=d(A),P=R.j(_);N(P)||0<P.l(T);)A-=I,R=d(A),P=R.j(_);S(R)&&(R=g),k=k.add(R),T=E(T,P)}return new y(k,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),A=[],I=0;I<_;I++)A[I]=this.i(I)&T.i(I);return new o(A,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),A=[],I=0;I<_;I++)A[I]=this.i(I)|T.i(I);return new o(A,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),A=[],I=0;I<_;I++)A[I]=this.i(I)^T.i(I);return new o(A,this.h^T.h)};function L(T){for(var _=T.g.length+1,A=[],I=0;I<_;I++)A[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(A,T.h)}function V(T,_){var A=_>>5;_%=32;for(var I=T.g.length-A,k=[],R=0;R<I;R++)k[R]=0<_?T.i(R+A)>>>_|T.i(R+A+1)<<32-_:T.i(R+A);return new o(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,ys=o}).apply(typeof i_<"u"?i_:typeof self<"u"?self:typeof window<"u"?window:{});var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RE,Oo,OE,su,Af,jE,DE,LE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ll=="object"&&Ll];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in p))break e;p=p[O]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,v=!1,O={next:function(){if(!v&&p<a.length){var D=p++;return{value:h(D,a[D]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function w(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,O,D){for(var $=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)$[ce-2]=arguments[ce];return h.prototype[O].apply(v,$)}}function N(a){const h=a.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function C(a,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const O=a.length||0,D=v.length||0;a.length=O+D;for(let $=0;$<D;$++)a[O+$]=v[$]}else a.push(v)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function y(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var L=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function V(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function T(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function _(a){const h={};for(const p in a)h[p]=a[p];return h}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(p in v)a[p]=v[p];for(let D=0;D<A.length;D++)p=A[D],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function P(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class We{constructor(){this.h=this.g=null}add(h,p){const v=Rn.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Rn=new E(()=>new Zi,a=>a.reset());class Zi{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let On,z=!1,Q=new We,J=()=>{const a=l.Promise.resolve(void 0);On=()=>{a.then(_e)}};var _e=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(p){R(p)}var h=Rn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Dn(a,h){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{b(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ln[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Dn.aa.h.call(this)}}S(Dn,Ne);var Ln={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),jS=0;function DS(a,h,p,v,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=O,this.key=++jS,this.da=this.fa=!1}function el(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function tl(a){this.src=a,this.g={},this.h=0}tl.prototype.add=function(a,h,p,v,O){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=td(a,h,v,O);return-1<$?(h=a[$],p||(h.fa=!1)):(h=new DS(h,this.src,D,!!v,O),h.fa=p,a.push(h)),h};function ed(a,h){var p=h.type;if(p in a.g){var v=a.g[p],O=Array.prototype.indexOf.call(v,h,void 0),D;(D=0<=O)&&Array.prototype.splice.call(v,O,1),D&&(el(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function td(a,h,p,v){for(var O=0;O<a.length;++O){var D=a[O];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==v)return O}return-1}var nd="closure_lm_"+(1e6*Math.random()|0),rd={};function pg(a,h,p,v,O){if(Array.isArray(h)){for(var D=0;D<h.length;D++)pg(a,h[D],p,v,O);return null}return p=yg(p),a&&a[Mn]?a.K(h,p,d(v)?!!v.capture:!1,O):LS(a,h,p,!1,v,O)}function LS(a,h,p,v,O,D){if(!h)throw Error("Invalid event type");var $=d(O)?!!O.capture:!!O,ce=id(a);if(ce||(a[nd]=ce=new tl(a)),p=ce.add(h,p,v,$,D),p.proxy)return p;if(v=MS(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)jn||(O=$),O===void 0&&(O=!1),a.addEventListener(h.toString(),v,O);else if(a.attachEvent)a.attachEvent(gg(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function MS(){function a(p){return h.call(a.src,a.listener,p)}const h=VS;return a}function mg(a,h,p,v,O){if(Array.isArray(h))for(var D=0;D<h.length;D++)mg(a,h[D],p,v,O);else v=d(v)?!!v.capture:!!v,p=yg(p),a&&a[Mn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],p=td(D,p,v,O),-1<p&&(el(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=id(a))&&(h=a.g[h.toString()],a=-1,h&&(a=td(h,p,v,O)),(p=-1<a?h[a]:null)&&sd(p))}function sd(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Mn])ed(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(gg(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=id(h))?(ed(p,a),p.h==0&&(p.src=null,h[nd]=null)):el(a)}}}function gg(a){return a in rd?rd[a]:rd[a]="on"+a}function VS(a,h){if(a.da)a=!0;else{h=new Dn(h,this);var p=a.listener,v=a.ha||a.src;a.fa&&sd(a),a=p.call(v,h)}return a}function id(a){return a=a[nd],a instanceof tl?a:null}var od="__closure_events_fn_"+(1e9*Math.random()>>>0);function yg(a){return typeof a=="function"?a:(a[od]||(a[od]=function(h){return a.handleEvent(h)}),a[od])}function st(){ue.call(this),this.i=new tl(this),this.M=this,this.F=null}S(st,ue),st.prototype[Mn]=!0,st.prototype.removeEventListener=function(a,h,p,v){mg(this,a,h,p,v)};function yt(a,h){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new Ne(h,a);else if(h instanceof Ne)h.target=h.target||a;else{var O=h;h=new Ne(v,a),I(h,O)}if(O=!0,p)for(var D=p.length-1;0<=D;D--){var $=h.g=p[D];O=nl($,v,!0,h)&&O}if($=h.g=a,O=nl($,v,!0,h)&&O,O=nl($,v,!1,h)&&O,p)for(D=0;D<p.length;D++)$=h.g=p[D],O=nl($,v,!1,h)&&O}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],v=0;v<p.length;v++)el(p[v]);delete a.g[h],a.h--}}this.F=null},st.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},st.prototype.L=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function nl(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==p){var ce=$.listener,Ke=$.ha||$.src;$.fa&&ed(a.i,$),O=ce.call(Ke,v)!==!1&&O}}return O&&!v.defaultPrevented}function vg(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function _g(a){a.g=vg(()=>{a.g=null,a.i&&(a.i=!1,_g(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class US extends ue{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:_g(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(a){ue.call(this),this.h=a,this.g={}}S(eo,ue);var wg=[];function xg(a){V(a.g,function(h,p){this.g.hasOwnProperty(p)&&sd(h)},a),a.g={}}eo.prototype.N=function(){eo.aa.N.call(this),xg(this)},eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ad=l.JSON.stringify,FS=l.JSON.parse,$S=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ld(){}ld.prototype.h=null;function Eg(a){return a.h||(a.h=a.i())}function Tg(){}var to={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ud(){Ne.call(this,"d")}S(ud,Ne);function cd(){Ne.call(this,"c")}S(cd,Ne);var es={},Ig=null;function rl(){return Ig=Ig||new st}es.La="serverreachability";function Sg(a){Ne.call(this,es.La,a)}S(Sg,Ne);function no(a){const h=rl();yt(h,new Sg(h))}es.STAT_EVENT="statevent";function Ag(a,h){Ne.call(this,es.STAT_EVENT,a),this.stat=h}S(Ag,Ne);function vt(a){const h=rl();yt(h,new Ag(h,a))}es.Ma="timingevent";function Pg(a,h){Ne.call(this,es.Ma,a),this.size=h}S(Pg,Ne);function ro(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function so(){this.g=!0}so.prototype.xa=function(){this.g=!1};function BS(a,h,p,v,O,D){a.info(function(){if(a.g)if(D)for(var $="",ce=D.split("&"),Ke=0;Ke<ce.length;Ke++){var ie=ce[Ke].split("=");if(1<ie.length){var it=ie[0];ie=ie[1];var ot=it.split("_");$=2<=ot.length&&ot[1]=="type"?$+(it+"="+ie+"&"):$+(it+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+h+`
`+p+`
`+$})}function zS(a,h,p,v,O,D,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+h+`
`+p+`
`+D+" "+$})}function $s(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+HS(a,p)+(v?" "+v:"")})}function qS(a,h){a.info(function(){return"TIMEOUT: "+h})}so.prototype.info=function(){};function HS(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return ad(p)}catch{return h}}var sl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ng={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dd;function il(){}S(il,ld),il.prototype.g=function(){return new XMLHttpRequest},il.prototype.i=function(){return{}},dd=new il;function hr(a,h,p,v){this.j=a,this.i=h,this.l=p,this.R=v||1,this.U=new eo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bg}function bg(){this.i=null,this.g="",this.h=!1}var Cg={},hd={};function fd(a,h,p){a.L=1,a.v=ul(Vn(h)),a.m=p,a.P=!0,kg(a,null)}function kg(a,h){a.F=Date.now(),ol(a),a.A=Vn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Hg(p.i,"t",v),a.C=0,p=a.j.J,a.h=new bg,a.g=uy(a.j,p?h:null,!a.m),0<a.O&&(a.M=new US(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,v=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(wg[0]=O.toString()),O=wg);for(var D=0;D<O.length;D++){var $=pg(p,O[D],v||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),no(),BS(a.i,a.u,a.A,a.l,a.R,a.m)}hr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Un(a)==3?h.j():this.Y(a)},hr.prototype.Y=function(a){try{if(a==this.g)e:{const ot=Un(this.g);var h=this.g.Ba();const qs=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Jg(this.g)))){this.J||ot!=4||h==7||(h==8||0>=qs?no(3):no(2)),pd(this);var p=this.g.Z();this.X=p;t:if(Rg(this)){var v=Jg(this.g);a="";var O=v.length,D=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),io(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(D&&h==O-1)});v.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,zS(this.i,this.u,this.A,this.l,this.R,ot,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Ke=this.g;if((ce=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(ce)){var ie=ce;break t}}ie=null}if(p=ie)$s(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,md(this,p);else{this.o=!1,this.s=3,vt(12),ts(this),io(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<$.length;)if(rn=WS(this,$),rn==hd){ot==4&&(this.s=4,vt(14),p=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Cg){this.s=4,vt(15),$s(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else $s(this.i,this.l,rn,null),md(this,rn);if(Rg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||$.length!=0||this.h.h||(this.s=1,vt(16),p=!1),this.o=this.o&&p,!p)$s(this.i,this.l,$,"[Invalid Chunked Response]"),ts(this),io(this);else if(0<$.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),xd(it),it.M=!0,vt(11))}}else $s(this.i,this.l,$,null),md(this,$);ot==4&&ts(this),this.o&&!this.J&&(ot==4?iy(this.j,this):(this.o=!1,ol(this)))}else u1(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ts(this),io(this)}}}catch{}finally{}};function Rg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function WS(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?hd:(p=Number(h.substring(p,v)),isNaN(p)?Cg:(v+=1,v+p>h.length?hd:(h=h.slice(v,v+p),a.C=v+p,h)))}hr.prototype.cancel=function(){this.J=!0,ts(this)};function ol(a){a.S=Date.now()+a.I,Og(a,a.I)}function Og(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ro(g(a.ba,a),h)}function pd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}hr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qS(this.i,this.A),this.L!=2&&(no(),vt(17)),ts(this),this.s=2,io(this)):Og(this,this.S-a)};function io(a){a.j.G==0||a.J||iy(a.j,a)}function ts(a){pd(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function md(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||gd(p.h,a))){if(!a.K&&gd(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ml(p),fl(p);else break e;wd(p),vt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=ro(g(p.Za,p),6e3));if(1>=Lg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else rs(p,11)}else if((a.K||p.g==a)&&ml(p),!x(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let ie=O[h];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const it=ie[3];it!=null&&(p.la=it,p.j.info("VER="+p.la));const ot=ie[4];ot!=null&&(p.Aa=ot,p.j.info("SVER="+p.Aa));const qs=ie[5];qs!=null&&typeof qs=="number"&&0<qs&&(v=1.5*qs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const rn=a.g;if(rn){const yl=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var D=v.h;D.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(yd(D,D.h),D.h=null))}if(v.D){const Ed=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ed&&(v.ya=Ed,me(v.I,v.D,Ed))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var $=a;if(v.qa=ly(v,v.J?v.ia:null,v.W),$.K){Mg(v.h,$);var ce=$,Ke=v.L;Ke&&(ce.I=Ke),ce.B&&(pd(ce),ol(ce)),v.g=$}else ry(v);0<p.i.length&&pl(p)}else ie[0]!="stop"&&ie[0]!="close"||rs(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?rs(p,7):_d(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}no(4)}catch{}}var KS=class{constructor(a,h){this.g=a,this.map=h}};function jg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lg(a){return a.h?1:a.g?a.g.size:0}function gd(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yd(a,h){a.g?a.g.add(h):a.h=h}function Mg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}jg.prototype.cancel=function(){if(this.i=Vg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return N(a.i)}function GS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,v=0;v<p;v++)h.push(a[v]);return h}h=[],p=0;for(v in a)h[p++]=a[v];return h}function QS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const v in a)h[p++]=v;return h}}}function Ug(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=QS(a),v=GS(a),O=v.length,D=0;D<O;D++)h.call(void 0,v[D],p&&p[D],a)}var Fg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YS(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),O=null;if(0<=v){var D=a[p].substring(0,v);O=a[p].substring(v+1)}else D=a[p];h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ns(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ns){this.h=a.h,al(this,a.j),this.o=a.o,this.g=a.g,ll(this,a.s),this.l=a.l;var h=a.i,p=new lo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),$g(this,p),this.m=a.m}else a&&(h=String(a).match(Fg))?(this.h=!1,al(this,h[1]||"",!0),this.o=oo(h[2]||""),this.g=oo(h[3]||"",!0),ll(this,h[4]),this.l=oo(h[5]||"",!0),$g(this,h[6]||"",!0),this.m=oo(h[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}ns.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ao(h,Bg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ao(h,Bg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ao(p,p.charAt(0)=="/"?ZS:JS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ao(p,t1)),a.join("")};function Vn(a){return new ns(a)}function al(a,h,p){a.j=p?oo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ll(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function $g(a,h,p){h instanceof lo?(a.i=h,n1(a.i,a.h)):(p||(h=ao(h,e1)),a.i=new lo(h,a.h))}function me(a,h,p){a.i.set(h,p)}function ul(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ao(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,XS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function XS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bg=/[#\/\?@]/g,JS=/[#\?:]/g,ZS=/[#\?]/g,e1=/[#\?@]/g,t1=/#/g;function lo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function fr(a){a.g||(a.g=new Map,a.h=0,a.i&&YS(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=lo.prototype,t.add=function(a,h){fr(this),this.i=null,a=Bs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function zg(a,h){fr(a),h=Bs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function qg(a,h){return fr(a),h=Bs(a,h),a.g.has(h)}t.forEach=function(a,h){fr(this),this.g.forEach(function(p,v){p.forEach(function(O){a.call(h,O,v,this)},this)},this)},t.na=function(){fr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const O=a[v];for(let D=0;D<O.length;D++)p.push(h[v])}return p},t.V=function(a){fr(this);let h=[];if(typeof a=="string")qg(this,a)&&(h=h.concat(this.g.get(Bs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return fr(this),this.i=null,a=Bs(this,a),qg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Hg(a,h,p){zg(a,h),0<p.length&&(a.i=null,a.g.set(Bs(a,h),N(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const D=encodeURIComponent(String(v)),$=this.V(v);for(v=0;v<$.length;v++){var O=D;$[v]!==""&&(O+="="+encodeURIComponent(String($[v]))),a.push(O)}}return this.i=a.join("&")};function Bs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function n1(a,h){h&&!a.j&&(fr(a),a.i=null,a.g.forEach(function(p,v){var O=v.toLowerCase();v!=O&&(zg(this,v),Hg(this,O,p))},a)),a.j=h}function r1(a,h){const p=new so;if(l.Image){const v=new Image;v.onload=w(pr,p,"TestLoadImage: loaded",!0,h,v),v.onerror=w(pr,p,"TestLoadImage: error",!1,h,v),v.onabort=w(pr,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=w(pr,p,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function s1(a,h){const p=new so,v=new AbortController,O=setTimeout(()=>{v.abort(),pr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(D=>{clearTimeout(O),D.ok?pr(p,"TestPingServer: ok",!0,h):pr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),pr(p,"TestPingServer: error",!1,h)})}function pr(a,h,p,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(p)}catch{}}function i1(){this.g=new $S}function o1(a,h,p){const v=p||"";try{Ug(a,function(O,D){let $=O;d(O)&&($=ad(O)),h.push(v+D+"="+encodeURIComponent($))})}catch(O){throw h.push(v+"type="+encodeURIComponent("_badmap")),O}}function cl(a){this.l=a.Ub||null,this.j=a.eb||!1}S(cl,ld),cl.prototype.g=function(){return new dl(this.l,this.j)},cl.prototype.i=function(a){return function(){return a}}({});function dl(a,h){st.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(dl,st),t=dl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,co(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?uo(this):co(this),this.readyState==3&&Wg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,uo(this))},t.Qa=function(a){this.g&&(this.response=a,uo(this))},t.ga=function(){this.g&&uo(this)};function uo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,co(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function co(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kg(a){let h="";return V(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function vd(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Kg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):me(a,h,p))}function Ie(a){st.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ie,st);var a1=/^https?$/i,l1=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dd.g(),this.v=this.o?Eg(this.o):Eg(dd),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Gg(this,D);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)p.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const D of v.keys())p.set(D,v.get(D));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(l1,h,void 0))||v||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of p)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Gg(this,D)}};function Gg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Qg(a),hl(a)}function Qg(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,yt(this,"complete"),yt(this,"abort"),hl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hl(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Yg(this):this.bb())},t.bb=function(){Yg(this)};function Yg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)vg(a.Ea,0,a);else if(yt(a,"readystatechange"),Un(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=$===0){var O=String(a.D).match(Fg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),v=!a1.test(O?O.toLowerCase():"")}p=v}if(p)yt(a,"complete"),yt(a,"success");else{a.m=6;try{var D=2<Un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Qg(a)}}finally{hl(a)}}}}function hl(a,h){if(a.g){Xg(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||yt(a,"ready");try{p.onreadystatechange=v}catch{}}}function Xg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),FS(h)}};function Jg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function u1(a){const h={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(x(a[v]))continue;var p=k(a[v]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[O]||[];h[O]=D,D.push(p)}T(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Zg(a){this.Aa=0,this.i=[],this.j=new so,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ho("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ho("baseRetryDelayMs",5e3,a),this.cb=ho("retryDelaySeedMs",1e4,a),this.Wa=ho("forwardChannelMaxRetries",2,a),this.wa=ho("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new jg(a&&a.concurrentRequestLimit),this.Da=new i1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,v){vt(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=ly(this,null,this.W),pl(this)};function _d(a){if(ey(a),a.G==3){var h=a.U++,p=Vn(a.I);if(me(p,"SID",a.K),me(p,"RID",h),me(p,"TYPE","terminate"),fo(a,p),h=new hr(a,a.j,h),h.L=2,h.v=ul(Vn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=uy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ol(h)}ay(a)}function fl(a){a.g&&(xd(a),a.g.cancel(),a.g=null)}function ey(a){fl(a),a.u&&(l.clearTimeout(a.u),a.u=null),ml(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function pl(a){if(!Dg(a.h)&&!a.s){a.s=!0;var h=a.Ga;On||J(),z||(On(),z=!0),Q.add(h,a),a.B=0}}function c1(a,h){return Lg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ro(g(a.Ga,a,h),oy(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new hr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=ny(this,O,h),p=Vn(this.I),me(p,"RID",a),me(p,"CVER",22),this.D&&me(p,"X-HTTP-Session-Id",this.D),fo(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(Kg(D)))+"&"+h:this.m&&vd(p,this.m,D)),yd(this.h,O),this.Ua&&me(p,"TYPE","init"),this.P?(me(p,"$req",h),me(p,"SID","null"),O.T=!0,fd(O,p,null)):fd(O,p,h),this.G=2}}else this.G==3&&(a?ty(this,a):this.i.length==0||Dg(this.h)||ty(this))};function ty(a,h){var p;h?p=h.l:p=a.U++;const v=Vn(a.I);me(v,"SID",a.K),me(v,"RID",p),me(v,"AID",a.T),fo(a,v),a.m&&a.o&&vd(v,a.m,a.o),p=new hr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ny(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yd(a.h,p),fd(p,v,h)}function fo(a,h){a.H&&V(a.H,function(p,v){me(h,v,p)}),a.l&&Ug({},function(p,v){me(h,v,p)})}function ny(a,h,p){p=Math.min(a.i.length,p);var v=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let D=-1;for(;;){const $=["count="+p];D==-1?0<p?(D=O[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let ce=!0;for(let Ke=0;Ke<p;Ke++){let ie=O[Ke].g;const it=O[Ke].map;if(ie-=D,0>ie)D=Math.max(0,O[Ke].g-100),ce=!1;else try{o1(it,$,"req"+ie+"_")}catch{v&&v(it)}}if(ce){v=$.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,v}function ry(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;On||J(),z||(On(),z=!0),Q.add(h,a),a.v=0}}function wd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ro(g(a.Fa,a),oy(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,sy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ro(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),fl(this),sy(this))};function xd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sy(a){a.g=new hr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vn(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),fo(a,h),a.m&&a.o&&vd(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ul(Vn(h)),p.m=null,p.P=!0,kg(p,a)}t.Za=function(){this.C!=null&&(this.C=null,fl(this),wd(this),vt(19))};function ml(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function iy(a,h){var p=null;if(a.g==h){ml(a),xd(a),a.g=null;var v=2}else if(gd(a.h,h))p=h.D,Mg(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;v=rl(),yt(v,new Pg(v,p)),pl(a)}else ry(a);else if(O=h.s,O==3||O==0&&0<h.X||!(v==1&&c1(a,h)||v==2&&wd(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:rs(a,5);break;case 4:rs(a,10);break;case 3:rs(a,6);break;default:rs(a,2)}}}function oy(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function rs(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),v=a.Xa;const O=!v;v=new ns(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||al(v,"https"),ul(v),O?r1(v.toString(),p):s1(v.toString(),p)}else vt(2);a.G=0,a.l&&a.l.sa(h),ay(a),ey(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ay(a){if(a.G=0,a.ka=[],a.l){const h=Vg(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function ly(a,h,p){var v=p instanceof ns?Vn(p):new ns(p);if(v.g!="")h&&(v.g=h+"."+v.g),ll(v,v.s);else{var O=l.location;v=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var D=new ns(null);v&&al(D,v),h&&(D.g=h),O&&ll(D,O),p&&(D.l=p),v=D}return p=a.D,h=a.ya,p&&h&&me(v,p,h),me(v,"VER",a.la),fo(a,v),v}function uy(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ie(new cl({eb:p})):new Ie(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cy(){}t=cy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gl(){}gl.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){st.call(this),this.g=new Zg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new zs(this)}S(Vt,st),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){_d(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ad(a),a=p);h.i.push(new KS(h.Ya++,a)),h.G==3&&pl(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,_d(this.g),delete this.g,Vt.aa.N.call(this)};function dy(a){ud.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(dy,ud);function hy(){cd.call(this),this.status=1}S(hy,cd);function zs(a){this.g=a}S(zs,cy),zs.prototype.ua=function(){yt(this.g,"a")},zs.prototype.ta=function(a){yt(this.g,new dy(a))},zs.prototype.sa=function(a){yt(this.g,new hy)},zs.prototype.ra=function(){yt(this.g,"b")},gl.prototype.createWebChannel=gl.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,LE=function(){return new gl},DE=function(){return rl()},jE=es,Af={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sl.NO_ERROR=0,sl.TIMEOUT=8,sl.HTTP_ERROR=6,su=sl,Ng.COMPLETE="complete",OE=Ng,Tg.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",st.prototype.listen=st.prototype.K,Oo=Tg,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,RE=Ie}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});const o_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Xp("@firebase/firestore");function Eo(){return As.logLevel}function H(t,...e){if(As.logLevel<=ne.DEBUG){const n=e.map(cm);As.debug(`Firestore (${Gi}): ${t}`,...n)}}function ir(t,...e){if(As.logLevel<=ne.ERROR){const n=e.map(cm);As.error(`Firestore (${Gi}): ${t}`,...n)}}function Ri(t,...e){if(As.logLevel<=ne.WARN){const n=e.map(cm);As.warn(`Firestore (${Gi}): ${t}`,...n)}}function cm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw ir(e),new Error(e)}function le(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class FR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $R{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new ME(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new dt(e)}}class BR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new qR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=WR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Be(0,0))}static max(){return new Y(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends xa{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const KR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends xa{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return KR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(fe.fromString(e))}static fromName(e){return new W(fe.fromString(e).popFirst(5))}static empty(){return new W(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new fe(e.slice()))}}function GR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new qr(s,W.empty(),e)}function QR(t){return new qr(t.readTime,t.key,-1)}class qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qr(Y.min(),W.empty(),-1)}static max(){return new qr(Y.max(),W.empty(),-1)}}function YR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==XR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ZR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dm.oe=-1;function Pc(t){return t==null}function zu(t){return t===0&&1/t==-1/0}function e2(t){return typeof t=="number"&&Number.isInteger(t)&&!zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ml(this.root,e,this.comparator,!0)}}class Ml{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new l_(this.data.getIterator())}getIteratorFrom(e){return new l_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class l_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new tt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new FE("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const t2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(le(!!t),typeof t=="string"){let e=0;const n=t2.exec(t);if(le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hm(t){const e=t.mapValue.fields.__previous_value__;return Nc(e)?hm(e):e}function Ea(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ta&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={mapValue:{}};function Ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nc(t)?4:s2(t)?9007199254740991:r2(t)?10:11:G()}function bn(t,e){if(t===e)return!0;const n=Ns(t);if(n!==Ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hr(s.timestampValue),l=Hr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ps(s.bytesValue).isEqual(Ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?zu(o)===zu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(a_(o)!==a_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!bn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Ia(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=Ns(t),r=Ns(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return u_(t.timestampValue,e.timestampValue);case 4:return u_(Ea(t),Ea(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ps(i),u=Ps(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=oe(l[d],u[d]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(ke(i.latitude),ke(o.latitude));return l!==0?l:oe(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return c_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,f;const m=i.fields||{},g=o.fields||{},w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=oe(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:c_(w,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vl.mapValue&&o===Vl.mapValue)return 0;if(i===Vl.mapValue)return 1;if(o===Vl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=oe(u[m],f[m]);if(g!==0)return g;const w=ji(l[u[m]],d[f[m]]);if(w!==0)return w}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function u_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Hr(t),r=Hr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function c_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ji(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function Di(t){return Pf(t)}function Pf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pf(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function qu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nf(t){return!!t&&"integerValue"in t}function fm(t){return!!t&&"arrayValue"in t}function d_(t){return!!t&&"nullValue"in t}function h_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function r2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function s2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Go(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];iu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Go(this.value))}}function $E(t){const e=[];return Vs(t.fields,(n,r)=>{const s=new Ze([n]);if(iu(r)){const i=$E(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,Y.min(),Y.min(),Y.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,Y.min(),Y.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Y.min(),Y.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.position=e,this.inclusive=n}}function f_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ji(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function p_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function i2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{}class Ve extends BE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new a2(e,n,r):n==="array-contains"?new c2(e,r):n==="in"?new d2(e,r):n==="not-in"?new h2(e,r):n==="array-contains-any"?new f2(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new l2(e,r):new u2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ji(n,this.value)):n!==null&&Ns(this.value)===Ns(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends BE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new gn(e,n)}matches(e){return zE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zE(t){return t.op==="and"}function qE(t){return o2(t)&&zE(t)}function o2(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function bf(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(qE(t))return t.filters.map(e=>bf(e)).join(",");{const e=t.filters.map(n=>bf(n)).join(",");return`${t.op}(${e})`}}function HE(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof gn?function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&HE(o,s.filters[l]),!0):!1}(t,e):void G()}function WE(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(WE).join(" ,")+"}"}(t):"Filter"}class a2 extends Ve{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class l2 extends Ve{constructor(e,n){super(e,"in",n),this.keys=KE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class u2 extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=KE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class c2 extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fm(n)&&Ia(n.arrayValue,this.value)}}class d2 extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ia(this.value.arrayValue,n)}}class h2 extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ia(this.value.arrayValue,n)}}class f2 extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function m_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new p2(t,e,n,r,s,i,o)}function pm(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!i2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!p_(t.startAt,e.startAt)&&p_(t.endAt,e.endAt)}function Cf(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function m2(t,e,n,r,s,i,o,l){return new Us(t,e,n,r,s,i,o,l)}function gm(t){return new Us(t)}function g_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ym(t){return t.collectionGroup!==null}function Ei(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Sa(i,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new Sa(Ze.keyField(),r))}return e.ce}function An(t){const e=X(t);return e.le||(e.le=g2(e,Ei(t))),e.le}function g2(t,e){if(t.limitType==="F")return m_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Sa(s.field,i)});const n=t.endAt?new Li(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Li(t.startAt.position,t.startAt.inclusive):null;return m_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kf(t,e){const n=t.filters.concat([e]);return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hu(t,e,n){return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bc(t,e){return mm(An(t),An(e))&&t.limitType===e.limitType}function GE(t){return`${pm(An(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>WE(s)).join(", ")}]`),Pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Di(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Di(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=f_(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ei(r),s)||r.endAt&&!function(o,l,u){const d=f_(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ei(r),s))}(t,e)}function y2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QE(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=v2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function v2(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ji(u,d):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return UE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new Te(W.comparator);function or(){return _2}const YE=new Te(W.comparator);function jo(...t){let e=YE;for(const n of t)e=e.insert(n.key,n);return e}function XE(t){let e=YE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fs(){return Qo()}function JE(){return Qo()}function Qo(){return new Qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const w2=new Te(W.comparator),x2=new tt(W.comparator);function te(...t){let e=x2;for(const n of t)e=e.add(n);return e}const E2=new tt(oe);function T2(){return E2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function ZE(t){return{integerValue:""+t}}function I2(t,e){return e2(e)?ZE(e):vm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function S2(t,e,n){return t instanceof Aa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nc(i)&&(i=hm(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Mi?tT(t,e):t instanceof Pa?nT(t,e):function(s,i){const o=eT(s,i),l=y_(o)+y_(s.Pe);return Nf(o)&&Nf(s.Pe)?ZE(l):vm(s.serializer,l)}(t,e)}function A2(t,e,n){return t instanceof Mi?tT(t,e):t instanceof Pa?nT(t,e):n}function eT(t,e){return t instanceof Wu?function(r){return Nf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Aa extends kc{}class Mi extends kc{constructor(e){super(),this.elements=e}}function tT(t,e){const n=rT(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pa extends kc{constructor(e){super(),this.elements=e}}function nT(t,e){let n=rT(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class Wu extends kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function y_(t){return ke(t.integerValue||t.doubleValue)}function rT(t){return fm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.field=e,this.transform=n}}function P2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof Pa&&s instanceof Pa?Oi(r.elements,s.elements,bn):r instanceof Wu&&s instanceof Wu?bn(r.Pe,s.Pe):r instanceof Aa&&s instanceof Aa}(t.transform,e.transform)}class N2{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rc{}function iT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aT(t.key,fn.none()):new Ha(t.key,t.data,fn.none());{const n=t.data,r=kt.empty();let s=new tt(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Zr(t.key,r,new Bt(s.toArray()),fn.none())}}function b2(t,e,n){t instanceof Ha?function(s,i,o){const l=s.value.clone(),u=__(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(s,i,o){if(!ou(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=__(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(oT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Ha?function(i,o,l,u){if(!ou(i.precondition,o))return l;const d=i.value.clone(),f=w_(i.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(i,o,l,u){if(!ou(i.precondition,o))return l;const d=w_(i.fieldTransforms,u,o),f=o.data;return f.setAll(oT(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return ou(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function C2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=eT(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function v_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Oi(r,s,(i,o)=>P2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ha extends Rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zr extends Rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function __(t,e,n){const r=new Map;le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,A2(o,l,n[s]))}return r}function w_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,S2(i,o,e))}return r}class aT extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k2 extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&b2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=iT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,r)=>v_(n,r))&&Oi(this.baseMutations,e.baseMutations,(n,r)=>v_(n,r))}}class _m{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length);let s=function(){return w2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _m(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function D2(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function lT(t){if(t===void 0)return ir("GRPC error has no .code"),M.UNKNOWN;switch(t){case De.OK:return M.OK;case De.CANCELLED:return M.CANCELLED;case De.UNKNOWN:return M.UNKNOWN;case De.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case De.INTERNAL:return M.INTERNAL;case De.UNAVAILABLE:return M.UNAVAILABLE;case De.UNAUTHENTICATED:return M.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case De.NOT_FOUND:return M.NOT_FOUND;case De.ALREADY_EXISTS:return M.ALREADY_EXISTS;case De.PERMISSION_DENIED:return M.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case De.ABORTED:return M.ABORTED;case De.OUT_OF_RANGE:return M.OUT_OF_RANGE;case De.UNIMPLEMENTED:return M.UNIMPLEMENTED;case De.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new ys([4294967295,4294967295],0);function x_(t){const e=L2().encode(t),n=new kE;return n.update(e),new Uint8Array(n.digest())}function E_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ys([n,r],0),new ys([s,i],0)]}class wm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ys.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ys.fromNumber(r)));return s.compare(M2)===1&&(s=new ys([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=x_(e),[r,s]=E_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=x_(e),[r,s]=E_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oc(Y.min(),s,new Te(oe),or(),te())}}class Wa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wa(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class uT{constructor(e,n){this.targetId=e,this.me=n}}class cT{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class T_{constructor(){this.fe=0,this.ge=S_(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Wa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=S_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class V2{constructor(e){this.Le=e,this.Be=new Map,this.ke=or(),this.qe=I_(),this.Qe=new Te(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Cf(i))if(r===0){const o=new W(i.path);this.Ue(n,o,ft.newNoDocument(o,Y.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ps(r).toUint8Array()}catch(u){if(u instanceof FE)return Ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wm(o,s,i)}catch(u){return Ri(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Cf(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ft.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Oc(e,n,this.Qe,this.ke,r);return this.ke=or(),this.qe=I_(),this.Qe=new Te(oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new T_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new T_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function I_(){return new Te(W.comparator)}function S_(){return new Te(W.comparator)}const U2={asc:"ASCENDING",desc:"DESCENDING"},F2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$2={and:"AND",or:"OR"};class B2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||Pc(e)?e:{value:e}}function Ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function z2(t,e){return Ku(t,e.toTimestamp())}function Pn(t){return le(!!t),Y.fromTimestamp(function(n){const r=Hr(n);return new Be(r.seconds,r.nanos)}(t))}function xm(t,e){return Of(t,e).canonicalString()}function Of(t,e){const n=function(s){return new fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hT(t){const e=fe.fromString(t);return le(yT(e)),e}function jf(t,e){return xm(t.databaseId,e.path)}function ih(t,e){const n=hT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(pT(n))}function fT(t,e){return xm(t.databaseId,e)}function q2(t){const e=hT(t);return e.length===4?fe.emptyPath():pT(e)}function Df(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pT(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function A_(t,e,n){return{name:jf(t,e),fields:n.value.mapValue.fields}}function H2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(le(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?M.UNKNOWN:lT(d.code);return new B(f,d.message||"")}(o);n=new cT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ih(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):Y.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=ft.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new au(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ih(t,r.document),i=r.readTime?Pn(r.readTime):Y.min(),o=ft.newNoDocument(s,i),l=r.removedTargetIds||[];n=new au([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ih(t,r.document),i=r.removedTargetIds||[];n=new au([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new j2(s,i),l=r.targetId;n=new uT(l,o)}}return n}function W2(t,e){let n;if(e instanceof Ha)n={update:A_(t,e.key,e.value)};else if(e instanceof aT)n={delete:jf(t,e.key)};else if(e instanceof Zr)n={update:A_(t,e.key,e.data),updateMask:tO(e.fieldMask)};else{if(!(e instanceof k2))return G();n={verify:jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Aa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function K2(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(Y.min())&&(o=Pn(i)),new N2(o,s.transformResults||[])}(n,e))):[]}function G2(t,e){return{documents:[fT(t,e.path)]}}function Q2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fT(t,s);const i=function(d){if(d.length!==0)return gT(gn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Qs(g.field),direction:J2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function Y2(t){let e=q2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=mT(m);return g instanceof gn&&qE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(S){return new Sa(Ys(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Pc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,w=m.values||[];return new Li(w,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,w=m.values||[];return new Li(w,g)}(n.endAt)),m2(e,s,o,i,l,"F",u,d)}function X2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>mT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function J2(t){return U2[t]}function Z2(t){return F2[t]}function eO(t){return $2[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Ys(t){return Ze.fromServerFormat(t.fieldPath)}function gT(t){return t instanceof Ve?function(n){if(n.op==="=="){if(h_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(d_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(h_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(d_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:Z2(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(s=>gT(s));return r.length===1?r[0]:{compositeFilter:{op:eO(n.op),filters:r}}}(t):G()}function tO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.ct=e}}function rO(t){const e=Y2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.un=new iO}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(qr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class iO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.changes=new Qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yo(r.mutation,s,Bt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=jo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=or();const o=Qo(),l=function(){return Qo()}();return n.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Zr)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Yo(f.mutation,d,f.mutation.getFieldMask(),Be.now())):o.set(d.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new aO(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let s=new Te((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Bt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=JE();f.forEach(g=>{if(!i.has(g)){const w=iT(n.get(g),r.get(g));w!==null&&m.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ym(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(fs());let l=-1,u=i;return o.next(d=>U.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,te())).next(f=>({batchId:l,changes:XE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=jo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=jo();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const d=function(m,g){return new Us(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let l=jo();return o.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Yo(f.mutation,d,Bt.empty(),Be.now()),Cc(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:rO(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.overlays=new Te(W.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fs();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=fs(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Te((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=fs(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=fs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new O2(n,r));let i=this.Ir.get(n);i===void 0&&(i=te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.Tr=new tt(ze.Er),this.dr=new tt(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new fe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new fe([])),r=new ze(n,e),s=new ze(n,e+1);let i=te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new R2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(oe);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new ze(new W(i),0);let l=new tt(oe);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.Mr=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=or();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||YR(QR(f),r)<=0||(s.has(f.key)||Cc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pO(this)}getSize(e){return U.resolve(this.size)}}class pO extends oO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.persistence=e,this.Nr=new Qi(n=>pm(n),mm),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Em,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new dm(0),this.Kr=!1,this.Kr=!0,this.$r=new dO,this.referenceDelegate=e(this),this.Ur=new mO(this),this.indexManager=new sO,this.remoteDocumentCache=function(s){return new fO(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nO(n),this.Gr=new uO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new hO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new yO(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class yO extends JR{constructor(e){super(),this.currentSequenceNumber=e}}class Tm{constructor(e){this.persistence=e,this.Jr=new Em,this.Yr=null}static Zr(e){return new Tm(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Im(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rb()?8:ZR(gt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vO;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Eo()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Eo()<=ne.DEBUG&&H("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Eo()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):U.resolve())}Yi(e,n){if(g_(n))return U.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hu(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Hu(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return g_(n)||s.isEqual(Y.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Eo()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.rs(e,o,n,GR(s,-1)).next(l=>l))})}ts(e,n){let r=new tt(QE(e));return n.forEach((s,i)=>{Cc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Eo()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,qr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Te(oe),this._s=new Qi(i=>pm(i),mm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function xO(t,e,n,r){return new wO(t,e,n,r)}async function vT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const d of s){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function EO(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,g=m.keys();let w=U.resolve();return g.forEach(S=>{w=w.next(()=>f.getEntry(u,S)).next(N=>{const C=d.docVersions.get(S);le(C!==null),N.version.compareTo(C)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _T(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function TO(t,e){const n=X(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(rt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(m,w),function(N,C,E){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,w,f)&&l.push(n.Ur.updateTargetData(i,w))});let u=or(),d=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(IO(i,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function IO(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=or();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function SO(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AO(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Lf(t,e,n){const r=X(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function P_(t,e,n){const r=X(t);let s=Y.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=X(u),g=m._s.get(f);return g!==void 0?U.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,An(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:te())).next(l=>(PO(r,y2(e),l),{documents:l,Ts:i})))}function PO(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class N_{constructor(){this.activeTargetIds=T2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NO{constructor(){this.so=new N_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new N_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul=null;function oh(){return Ul===null?Ul=function(){return 268435456+Math.round(2147483648*Math.random())}():Ul++,"0x"+Ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class RO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=oh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ri("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=CO[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=oh();return new Promise((o,l)=>{const u=new RE;u.setWithCredentials(!0),u.listenOnce(OE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case su.NO_ERROR:const f=u.getResponseJson();H(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case su.TIMEOUT:H(ut,`RPC '${e}' ${i} timed out`),l(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case su.HTTP_ERROR:const m=u.getStatus();if(H(ut,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const S=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(w.status);l(new B(S,w.message))}else l(new B(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(ut,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);H(ut,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=oh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LE(),l=DE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(ut,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,w=!1;const S=new kO({Io:C=>{w?H(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(H(ut,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),H(ut,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},To:()=>m.close()}),N=(C,E,x)=>{C.listen(E,y=>{try{x(y)}catch(b){setTimeout(()=>{throw b},0)}})};return N(m,Oo.EventType.OPEN,()=>{w||(H(ut,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),N(m,Oo.EventType.CLOSE,()=>{w||(w=!0,H(ut,`RPC '${e}' stream ${s} transport closed`),S.So())}),N(m,Oo.EventType.ERROR,C=>{w||(w=!0,Ri(ut,`RPC '${e}' stream ${s} transport errored:`,C),S.So(new B(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,Oo.EventType.MESSAGE,C=>{var E;if(!w){const x=C.data[0];le(!!x);const y=x,b=y.error||((E=y[0])===null||E===void 0?void 0:E.error);if(b){H(ut,`RPC '${e}' stream ${s} received error:`,b);const L=b.status;let V=function(A){const I=De[A];if(I!==void 0)return lT(I)}(L),T=b.message;V===void 0&&(V=M.INTERNAL,T="Unknown error status: "+L+" with message "+b.message),w=!0,S.So(new B(V,T)),m.close()}else H(ut,`RPC '${e}' stream ${s} received:`,x),S.bo(x)}}),N(l,jE.STAT_EVENT,C=>{C.stat===Af.PROXY?H(ut,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Af.NOPROXY&&H(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function ah(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return new B2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new B(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OO extends xT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=H2(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Pn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Df(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Cf(u)?{documents:G2(i,u)}:{query:Q2(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=dT(i,o.resumeToken);const d=Rf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Ku(i,o.snapshotVersion.toTimestamp());const d=Rf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=X2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Df(this.serializer),n.removeTarget=e,this.a_(n)}}class jO extends xT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=K2(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Df(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>W2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Of(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Of(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class LO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ir(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=X(u);d.L_.add(4),await Ka(d),d.q_.set("Unknown"),d.L_.delete(4),await Dc(d)}(this))})}),this.q_=new LO(r,s)}}async function Dc(t){if(Fs(t))for(const e of t.B_)await e(!0)}async function Ka(t){for(const e of t.B_)await e(!1)}function ET(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Nm(n)?Pm(n):Yi(n).r_()&&Am(n,e))}function Sm(t,e){const n=X(t),r=Yi(n);n.N_.delete(e),r.r_()&&TT(n,e),n.N_.size===0&&(r.r_()?r.o_():Fs(n)&&n.q_.set("Unknown"))}function Am(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).A_(e)}function TT(t,e){t.Q_.xe(e),Yi(t).R_(e)}function Pm(t){t.Q_=new V2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.q_.v_()}function Nm(t){return Fs(t)&&!Yi(t).n_()&&t.N_.size>0}function Fs(t){return X(t).L_.size===0}function IT(t){t.Q_=void 0}async function VO(t){t.q_.set("Online")}async function UO(t){t.N_.forEach((e,n)=>{Am(t,e)})}async function FO(t,e){IT(t),Nm(t)?(t.q_.M_(e),Pm(t)):t.q_.set("Unknown")}async function $O(t,e,n){if(t.q_.set("Online"),e instanceof cT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gu(t,r)}else if(e instanceof au?t.Q_.Ke(e):e instanceof uT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await _T(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),TT(i,u);const m=new Nr(f.target,u,d,f.sequenceNumber);Am(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Gu(t,r)}}async function Gu(t,e,n){if(!qa(e))throw e;t.L_.add(1),await Ka(t),t.q_.set("Offline"),n||(n=()=>_T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Dc(t)})}function ST(t,e){return e().catch(n=>Gu(t,n,e))}async function Lc(t){const e=X(t),n=Wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;BO(e);)try{const s=await SO(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,zO(e,s)}catch(s){await Gu(e,s)}AT(e)&&PT(e)}function BO(t){return Fs(t)&&t.O_.length<10}function zO(t,e){t.O_.push(e);const n=Wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function AT(t){return Fs(t)&&!Wr(t).n_()&&t.O_.length>0}function PT(t){Wr(t).start()}async function qO(t){Wr(t).p_()}async function HO(t){const e=Wr(t);for(const n of t.O_)e.m_(n.mutations)}async function WO(t,e,n){const r=t.O_.shift(),s=_m.from(r,e,n);await ST(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Lc(t)}async function KO(t,e){e&&Wr(t).V_&&await async function(r,s){if(function(o){return D2(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Wr(r).s_(),await ST(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lc(r)}}(t,e),AT(t)&&PT(t)}async function C_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.L_.add(3),await Ka(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Dc(n)}async function GO(t,e){const n=X(t);e?(n.L_.delete(2),await Dc(n)):e||(n.L_.add(2),await Ka(n),n.q_.set("Unknown"))}function Yi(t){return t.K_||(t.K_=function(n,r,s){const i=X(n);return i.w_(),new OO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:VO.bind(null,t),Ro:UO.bind(null,t),mo:FO.bind(null,t),d_:$O.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Nm(t)?Pm(t):t.q_.set("Unknown")):(await t.K_.stop(),IT(t))})),t.K_}function Wr(t){return t.U_||(t.U_=function(n,r,s){const i=X(n);return i.w_(),new jO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qO.bind(null,t),mo:KO.bind(null,t),f_:HO.bind(null,t),g_:WO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Lc(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new bm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cm(t,e){if(ir("AsyncQueue",`${e}: ${t}`),qa(t))return new B(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=jo(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.W_=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ui{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ui(e,n,Ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YO{constructor(){this.queries=R_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=R_(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(M.ABORTED,"Firestore shutting down"))}}function R_(){return new Qi(t=>GE(t),bc)}async function NT(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new QO,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Cm(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&km(n)}async function bT(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XO(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&km(n)}function JO(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function km(t){t.Y_.forEach(e=>{e.next()})}var Mf,O_;(O_=Mf||(Mf={})).ea="default",O_.Cache="cache";class CT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ui(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.key=e}}class RT{constructor(e){this.key=e}}class ZO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=QE(e),this.Ra=new Ti(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new k_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),w=Cc(this.query,m)?m:null,S=!!g&&this.mutatedKeys.has(g.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;g&&w?g.data.isEqual(w.data)?S!==N&&(r.track({type:3,doc:w}),C=!0):this.ga(g,w)||(r.track({type:2,doc:w}),C=!0,(u&&this.Aa(w,u)>0||d&&this.Aa(w,d)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),C=!0):g&&!w&&(r.track({type:1,doc:g}),C=!0,(u||d)&&(l=!0)),C&&(w?(o=o.add(w),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(w,S){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(w)-N(S)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Ui(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new k_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new RT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new kT(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ui.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ej{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tj{constructor(e){this.key=e,this.va=!1}}class nj{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Qi(l=>GE(l),bc),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(W.comparator),this.Na=new Map,this.La=new Em,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rj(t,e,n=!0){const r=VT(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await OT(r,e,n,!0),s}async function sj(t,e){const n=VT(t);await OT(n,e,!0,!1)}async function OT(t,e,n,r){const s=await AO(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await ij(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ET(t.remoteStore,s),l}async function ij(t,e,n,r,s){t.Ka=(m,g,w)=>async function(N,C,E,x){let y=C.view.ma(E);y.ns&&(y=await P_(N.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,y)));const b=x&&x.targetChanges.get(C.targetId),L=x&&x.targetMismatches.get(C.targetId)!=null,V=C.view.applyChanges(y,N.isPrimaryClient,b,L);return D_(N,C.targetId,V.wa),V.snapshot}(t,m,g,w);const i=await P_(t.localStore,e,!0),o=new ZO(e,i.Ts),l=o.ma(i.documents),u=Wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);D_(t,n,d.wa);const f=new ej(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function oj(t,e,n){const r=X(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!bc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Sm(r.remoteStore,s.targetId),Vf(r,s.targetId)}).catch(za)):(Vf(r,s.targetId),await Lf(r.localStore,s.targetId,!0))}async function aj(t,e){const n=X(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sm(n.remoteStore,r.targetId))}async function lj(t,e,n){const r=mj(t);try{const s=await function(o,l){const u=X(o),d=Be.now(),f=l.reduce((w,S)=>w.add(S.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=or(),N=te();return u.cs.getEntries(w,f).next(C=>{S=C,S.forEach((E,x)=>{x.isValidDocument()||(N=N.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,S)).next(C=>{m=C;const E=[];for(const x of l){const y=C2(x,m.get(x.key).overlayedDocument);y!=null&&E.push(new Zr(x.key,y,$E(y.value.mapValue),fn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,d,E,l)}).next(C=>{g=C;const E=C.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(w,C.batchId,E)})}).then(()=>({batchId:g.batchId,changes:XE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Te(oe)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Ga(r,s.changes),await Lc(r.remoteStore)}catch(s){const i=Cm(s,"Failed to persist write");n.reject(i)}}async function jT(t,e){const n=X(t);try{const r=await TO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?le(o.va):s.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await Ga(n,r,e)}catch(r){await za(r)}}function j_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&km(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uj(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Te(W.comparator);o=o.insert(i,ft.newNoDocument(i,Y.min()));const l=te().add(i),u=new Oc(Y.min(),new Map,new Te(oe),o,l);await jT(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Rm(r)}else await Lf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(za)}async function cj(t,e){const n=X(t),r=e.batch.batchId;try{const s=await EO(n.localStore,e);LT(n,r,null),DT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ga(n,s)}catch(s){await za(s)}}async function dj(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(le(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);LT(r,e,n),DT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ga(r,s)}catch(s){await za(s)}}function DT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function LT(t,e,n){const r=X(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||MT(t,r)})}function MT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Rm(t))}function D_(t,e,n){for(const r of n)r instanceof kT?(t.La.addReference(r.key,e),hj(t,r)):r instanceof RT?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||MT(t,r.key)):G()}function hj(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Rm(t))}function Rm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new tj(n)),t.Oa=t.Oa.insert(n,r),ET(t.remoteStore,new Nr(An(gm(n.path)),r,"TargetPurposeLimboResolution",dm.oe))}}async function Ga(t,e,n){const r=X(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Im.Wi(u.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(d,g=>U.forEach(g.$i,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>U.forEach(g.Ui,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!qa(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const w=f.os.get(g),S=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function fj(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ga(n,r.hs)}}function pj(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function VT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uj.bind(null,e),e.Ca.d_=XO.bind(null,e.eventManager),e.Ca.$a=JO.bind(null,e.eventManager),e}function mj(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dj.bind(null,e),e}class Qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return xO(this.persistence,new _O,e.initialUser,this.serializer)}Ga(e){return new gO(Tm.Zr,this.serializer)}Wa(e){return new NO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qu.provider={build:()=>new Qu};class Uf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fj.bind(null,this.syncEngine),await GO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YO}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(i){return new RO(i)}(e.databaseInfo);return function(i,o,l,u){return new DO(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new MO(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>j_(this.syncEngine,n,0),function(){return b_.D()?new b_:new bO}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,f){const m=new nj(s,i,o,l,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);H("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ka(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uf.provider={build:()=>new Uf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gj{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=VE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function L_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yj(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>C_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>C_(e.remoteStore,s)),t._onlineComponents=e}async function yj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ri("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new Qu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new Qu);return t._offlineComponents}async function FT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await L_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await L_(t,new Uf))),t._onlineComponents}function vj(t){return FT(t).then(e=>e.syncEngine)}async function $T(t){const e=await FT(t),n=e.eventManager;return n.onListen=rj.bind(null,e.syncEngine),n.onUnlisten=oj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aj.bind(null,e.syncEngine),n}function _j(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const f=new UT({next:g=>{f.Za(),o.enqueueAndForget(()=>bT(i,m));const w=g.docs.has(l);!w&&g.fromCache?d.reject(new B(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?d.reject(new B(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new CT(gm(l.path),f,{includeMetadataChanges:!0,_a:!0});return NT(i,m)}(await $T(t),t.asyncQueue,e,n,r)),r.promise}function wj(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const f=new UT({next:g=>{f.Za(),o.enqueueAndForget(()=>bT(i,m)),g.fromCache&&u.source==="server"?d.reject(new B(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new CT(l,f,{includeMetadataChanges:!0,_a:!0});return NT(i,m)}(await $T(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e,n){if(!n)throw new B(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xj(t,e,n,r){if(e===!0&&r===!0)throw new B(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function V_(t){if(!W.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U_(t){if(W.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ej(t,e){if(e<=0)throw new B(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UR;switch(r.type){case"firstParty":return new zR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=M_.get(n);r&&(H("ComponentProvider","Removing Datastore"),M_.delete(n),r.terminate())}(this),Promise.resolve()}}function Tj(t,e,n,r={}){var s;const i=(t=Cn(t,Vc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=dt.MOCK_USER;else{l=qx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(d)}t._authCredentials=new FR(new ME(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dr(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class $r extends dr{constructor(e,n,r){super(e,n,gm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new W(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function br(t,e,...n){if(t=he(t),zT("collection","path",e),t instanceof Vc){const r=fe.fromString(e,...n);return U_(r),new $r(t,null,r)}{if(!(t instanceof St||t instanceof $r))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return U_(r),new $r(t.firestore,null,r)}}function Le(t,e,...n){if(t=he(t),arguments.length===1&&(e=VE.newId()),zT("doc","path",e),t instanceof Vc){const r=fe.fromString(e,...n);return V_(r),new St(t,null,new W(r))}{if(!(t instanceof St||t instanceof $r))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return V_(r),new St(t.firestore,t instanceof $r?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wT(this,"async_queue_retry"),this.Vu=()=>{const r=ah();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ah();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw ir("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=bm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Xi extends Vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new $_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $_(e),this._firestoreClient=void 0,await e}}}function Ij(t,e){const n=typeof t=="object"?t:Tc(),r=typeof t=="string"?t:"(default)",s=Ls(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$x("firestore");i&&Tj(s,...i)}return s}function Om(t){if(t._terminated)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Sj(t),t._firestoreClient}function Sj(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,f){return new n2(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,BT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new gj(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fi(rt.fromBase64String(e))}catch(n){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fi(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aj=/^__.*__$/;class Pj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}class qT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Fc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(HT(this.Cu)&&Aj.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Nj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}Qu(e,n,r,s=!1){return new Fc({Cu:e,methodName:n,qu:r,path:Ze.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ya(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new Nj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WT(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Vm("Data must be an object, but it was:",o,r);const l=GT(r,o);let u,d;if(i.merge)u=new Bt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Ff(e,m,n);if(!o.contains(g))throw new B(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);YT(f,g)||f.push(g)}u=new Bt(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new Pj(new kt(l),u,d)}class $c extends Qa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function bj(t,e,n){return new Fc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lm extends Qa{_toFieldTransform(e){return new sT(e.path,new Aa)}isEqual(e){return e instanceof Lm}}class Mm extends Qa{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=bj(this,e,!0),r=this.Ku.map(i=>Ji(i,n)),s=new Mi(r);return new sT(e.path,s)}isEqual(e){return e instanceof Mm&&va(this.Ku,e.Ku)}}function Cj(t,e,n,r){const s=t.Qu(1,e,n);Vm("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Vs(r,(u,d)=>{const f=Um(e,u,n);d=he(d);const m=s.Nu(f);if(d instanceof $c)i.push(f);else{const g=Ji(d,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Bt(i);return new qT(o,l,s.fieldTransforms)}function kj(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Ff(e,r,n)],u=[s];if(i.length%2!=0)throw new B(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Ff(e,i[g])),u.push(i[g+1]);const d=[],f=kt.empty();for(let g=l.length-1;g>=0;--g)if(!YT(d,l[g])){const w=l[g];let S=u[g];S=he(S);const N=o.Nu(w);if(S instanceof $c)d.push(w);else{const C=Ji(S,N);C!=null&&(d.push(w),f.set(w,C))}}const m=new Bt(d);return new qT(f,m,o.fieldTransforms)}function KT(t,e,n,r=!1){return Ji(n,t.Qu(r?4:3,e))}function Ji(t,e){if(QT(t=he(t)))return Vm("Unsupported field value:",e,t),GT(t,e);if(t instanceof Qa)return function(r,s){if(!HT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ji(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return I2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Ku(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ku(s.serializer,i)}}if(r instanceof jm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fi)return{bytesValue:dT(s.serializer,r._byteString)};if(r instanceof St){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return vm(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Mc(r)}`)}(t,e)}function GT(t,e){const n={};return UE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,s)=>{const i=Ji(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function QT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof jm||t instanceof Fi||t instanceof St||t instanceof Qa||t instanceof Dm)}function Vm(t,e,n){if(!QT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Mc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ff(t,e,n){if((e=he(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return Um(t,e);throw Yu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Rj=new RegExp("[~\\*/\\[\\]]");function Um(t,e,n){if(e.search(Rj)>=0)throw Yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw Yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new B(M.INVALID_ARGUMENT,l+t+u)}function YT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Oj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Oj extends Fm{data(){return super.data()}}function Bc(t,e){return typeof e=="string"?Um(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $m{}class zc extends $m{}function $f(t,e,...n){let r=[];e instanceof $m&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Bm).length,l=i.filter(u=>u instanceof qc).length;if(o>1||o>0&&l>0)throw new B(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class qc extends zc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return XT(e._query,n),new dr(e.firestore,e.converter,kf(e._query,n))}_parse(e){const n=Ya(e.firestore);return function(i,o,l,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){z_(m,f);const w=[];for(const S of m)w.push(B_(u,i,S));g={arrayValue:{values:w}}}else g=B_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||z_(m,f),g=KT(l,o,m,f==="in"||f==="not-in");return Ve.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function di(t,e,n){const r=e,s=Bc("where",t);return qc._create(s,r,n)}class Bm extends $m{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)XT(o,u),o=kf(o,u)}(e._query,n),new dr(e.firestore,e.converter,kf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zm extends zc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zm(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Sa(i,o)}(e._query,this._field,this._direction);return new dr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Us(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Bf(t,e="asc"){const n=e,r=Bc("orderBy",t);return zm._create(r,n)}class qm extends zc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new qm(e,n,r)}_apply(e){return new dr(e.firestore,e.converter,Hu(e._query,this._limit,this._limitType))}}function Dj(t){return Ej("limit",t),qm._create("limit",t,"F")}class Hm extends zc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Hm(e,n,r)}_apply(e){const n=Mj(e,this.type,this._docOrFields,this._inclusive);return new dr(e.firestore,e.converter,function(s,i){return new Us(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function Lj(...t){return Hm._create("startAfter",t,!1)}function Mj(t,e,n,r){if(n[0]=he(n[0]),n[0]instanceof Fm)return function(i,o,l,u,d){if(!u)throw new B(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const m of Ei(i))if(m.field.isKeyField())f.push(qu(o,u.key));else{const g=u.data.field(m.field);if(Nc(g))throw new B(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const w=m.field.canonicalString();throw new B(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}f.push(g)}return new Li(f,d)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Ya(t.firestore);return function(o,l,u,d,f,m){const g=o.explicitOrderBy;if(f.length>g.length)throw new B(M.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let S=0;S<f.length;S++){const N=f[S];if(g[S].field.isKeyField()){if(typeof N!="string")throw new B(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof N}`);if(!ym(o)&&N.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${N}' contains a slash.`);const C=o.path.child(fe.fromString(N));if(!W.isDocumentKey(C))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const E=new W(C);w.push(qu(l,E))}else{const C=KT(u,d,N);w.push(C)}}return new Li(w,m)}(t._query,t.firestore._databaseId,s,e,n,r)}}function B_(t,e,n){if(typeof(n=he(n))=="string"){if(n==="")throw new B(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ym(e)&&n.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!W.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qu(t,new W(r))}if(n instanceof St)return qu(t,n._key);throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(n)}.`)}function z_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Vj{convertValue(e,n="none"){switch(Ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ke(o.doubleValue));return new Dm(i)}convertGeoPoint(e){return new jm(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);le(yT(r));const s=new Ta(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||ir(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZT extends Fm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends ZT{data(e={}){return super.data(e)}}class Uj{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new Lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new lu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new lu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Fj(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){t=Cn(t,St);const e=Cn(t.firestore,Xi);return _j(Om(e),t._key).then(n=>$j(e,t,n))}class eI extends Vj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Xu(t){t=Cn(t,dr);const e=Cn(t.firestore,Xi),n=Om(e),r=new eI(e);return jj(t._query),wj(n,t._query).then(s=>new Uj(e,r,t,s))}function zf(t,e,n){t=Cn(t,St);const r=Cn(t.firestore,Xi),s=JT(t.converter,e);return Wm(r,[WT(Ya(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,fn.none())])}function Nn(t,e,n,...r){t=Cn(t,St);const s=Cn(t.firestore,Xi),i=Ya(s);let o;return o=typeof(e=he(e))=="string"||e instanceof Uc?kj(i,"updateDoc",t._key,e,n,r):Cj(i,"updateDoc",t._key,e),Wm(s,[o.toMutation(t._key,fn.exists(!0))])}function Ju(t,e){const n=Cn(t.firestore,Xi),r=Le(t),s=JT(t.converter,e);return Wm(n,[WT(Ya(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function Wm(t,e){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>lj(await vj(r),s,i)),i.promise}(Om(t),e)}function $j(t,e,n){const r=n.docs.get(e._key),s=new eI(t);return new ZT(t,s,e._key,r,new Lo(n.hasPendingWrites,n.fromCache),e.converter)}function Oe(){return new Lm("serverTimestamp")}function tI(...t){return new Mm("arrayUnion",t)}(function(e,n=!0){(function(s){Gi=s})(Ms),mn(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Xi(new $R(r.getProvider("auth-internal")),new HR(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ta(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Lt(o_,"4.7.3",e),Lt(o_,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebasestorage.googleapis.com",rI="storageBucket",Bj=2*60*1e3,zj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends vn{constructor(e,n,r=0){super(uh(e),`Firebase Storage: ${n} (${uh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function uh(t){return"storage/"+t}function Km(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe(Ae.UNKNOWN,t)}function qj(t){return new Pe(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Hj(t){return new Pe(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Wj(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Ae.UNAUTHENTICATED,t)}function Kj(){return new Pe(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gj(t){return new Pe(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Qj(){return new Pe(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yj(){return new Pe(Ae.CANCELED,"User canceled the upload/download.")}function Xj(t){return new Pe(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function Jj(t){return new Pe(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zj(){return new Pe(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rI+"' property when initializing the app?")}function eD(){return new Pe(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tD(){return new Pe(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nD(t){return new Pe(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qf(t){return new Pe(Ae.INVALID_ARGUMENT,t)}function sI(){return new Pe(Ae.APP_DELETED,"The Firebase app was deleted.")}function rD(t){return new Pe(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xo(t,e){return new Pe(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function To(t){throw new Pe(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zt.makeFromUrl(e,n)}catch{return new zt(e,"")}if(r.path==="")return r;throw Jj(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},N=n===nI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${N}/${s}/${C}`,"i"),y=[{regex:l,indices:u,postModify:i},{regex:w,indices:S,postModify:d},{regex:E,indices:{bucket:1,path:2},postModify:d}];for(let b=0;b<y.length;b++){const L=y[b],V=L.regex.exec(e);if(V){const T=V[L.indices.bucket];let _=V[L.indices.path];_||(_=""),r=new zt(T,_),L.postModify(r);break}}if(r==null)throw Xj(e);return r}}class sD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let d=!1;function f(...C){d||(d=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,t(w,u())},C)}function g(){i&&clearTimeout(i)}function w(C,...E){if(d){g();return}if(C){g(),f.call(null,C,...E);return}if(u()||o){g(),f.call(null,C,...E);return}r<64&&(r*=2);let y;l===1?(l=2,y=0):y=(r+Math.random())*1e3,m(y)}let S=!1;function N(C){S||(S=!0,g(),!d&&(s!==null?(C||(l=2),clearTimeout(s),m(0)):C||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function oD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){return t!==void 0}function lD(t){return typeof t=="object"&&!Array.isArray(t)}function Gm(t){return typeof t=="string"||t instanceof String}function q_(t){return Qm()&&t instanceof Blob}function Qm(){return typeof Blob<"u"}function H_(t,e,n,r){if(r<e)throw qf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function iI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var vs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vs||(vs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r,s,i,o,l,u,d,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Fl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===vs.NO_ERROR,u=i.getStatus();if(!l||uD(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===vs.ABORT;r(!1,new Fl(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Fl(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());aD(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Km();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?sI():Yj();o(u)}else{const u=Qj();o(u)}};this.canceled_?n(!1,new Fl(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mD(t,e,n,r,s,i,o=!0){const l=iI(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return fD(d,e),dD(d,n),hD(d,i),pD(d,r),new cD(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yD(...t){const e=gD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qm())return new Blob(t);throw new Pe(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){if(typeof atob>"u")throw nD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ch{constructor(e,n){this.data=e,this.contentType=n||null}}function wD(t,e){switch(t){case En.RAW:return new ch(oI(e));case En.BASE64:case En.BASE64URL:return new ch(aI(t,e));case En.DATA_URL:return new ch(ED(e),TD(e))}throw Km()}function oI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function xD(t){let e;try{e=decodeURIComponent(t)}catch{throw Xo(En.DATA_URL,"Malformed data URL.")}return oI(e)}function aI(t,e){switch(t){case En.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_D(e)}catch(s){throw s.message.includes("polyfill")?s:Xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class lI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xo(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ID(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ED(t){const e=new lI(t);return e.base64?aI(En.BASE64,e.rest):xD(e.rest)}function TD(t){return new lI(t).contentType}function ID(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){let r=0,s="";q_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(q_(this.data_)){const r=this.data_,s=vD(r,e,n);return s===null?null:new Ir(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ir(r,!0)}}static getBlob(...e){if(Qm()){const n=e.map(r=>r instanceof Ir?r.data_:r);return new Ir(yD.apply(null,n))}else{const n=e.map(o=>Gm(o)?wD(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Ir(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){let e;try{e=JSON.parse(t)}catch{return null}return lD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t,e){return e}class _t{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||PD}}let $l=null;function ND(t){return!Gm(t)||t.length<2?t:cI(t)}function dI(){if($l)return $l;const t=[];t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));function e(i,o){return ND(o)}const n=new _t("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new _t("size");return s.xform=r,t.push(s),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),$l=t,$l}function bD(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new zt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function CD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return bD(r,t),r}function hI(t,e,n){const r=uI(e);return r===null?null:CD(t,r,n)}function kD(t,e,n,r){const s=uI(e);if(s===null||!Gm(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),w=Ym(g,n,r),S=iI({alt:"media",token:d});return w+S})[0]}function RD(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class fI{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){if(!t)throw Km()}function OD(t,e){function n(r,s){const i=hI(t,s,e);return pI(i!==null),i}return n}function jD(t,e){function n(r,s){const i=hI(t,s,e);return pI(i!==null),kD(i,s,t.host,t._protocol)}return n}function mI(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Kj():s=Wj():n.getStatus()===402?s=Hj(t.bucket):n.getStatus()===403?s=Gj(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function DD(t){const e=mI(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=qj(t.path)),i.serverResponse=s.serverResponse,i}return n}function LD(t,e,n){const r=e.fullServerUrl(),s=Ym(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new fI(s,i,jD(t,n),o);return l.errorHandler=DD(e),l}function MD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function VD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=MD(null,e)),r}function UD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=VD(e,r,s),f=RD(d,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+u+"--",w=Ir.getBlob(m,r,g);if(w===null)throw eD();const S={name:d.fullPath},N=Ym(i,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,x=new fI(N,C,OD(t,n),E);return x.urlParams=S,x.headers=o,x.body=w.uploadData(),x.errorHandler=mI(e),x}class FD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw To("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw To("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw To("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw To("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw To("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $D extends FD{initXhr(){this.xhr_.responseType="text"}}function gI(){return new $D}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this._service=e,n instanceof zt?this._location=n:this._location=zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bs(e,n)}get root(){const e=new zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cI(this._location.path)}get storage(){return this._service}get parent(){const e=SD(this._location.path);if(e===null)return null;const n=new zt(this._location.bucket,e);return new bs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rD(e)}}function BD(t,e,n){t._throwIfRoot("uploadBytes");const r=UD(t.storage,t._location,dI(),new Ir(e,!0),n);return t.storage.makeRequestWithTokens(r,gI).then(s=>({metadata:s,ref:t}))}function zD(t){t._throwIfRoot("getDownloadURL");const e=LD(t.storage,t._location,dI());return t.storage.makeRequestWithTokens(e,gI).then(n=>{if(n===null)throw tD();return n})}function qD(t,e){const n=AD(t._location.path,e),r=new zt(t._location.bucket,n);return new bs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){return/^[A-Za-z]+:\/\//.test(t)}function WD(t,e){return new bs(t,e)}function yI(t,e){if(t instanceof Xm){const n=t;if(n._bucket==null)throw Zj();const r=new bs(n,n._bucket);return e!=null?yI(r,e):r}else return e!==void 0?qD(t,e):t}function KD(t,e){if(e&&HD(e)){if(t instanceof Xm)return WD(t,e);throw qf("To use ref(service, url), the first argument must be a Storage instance.")}else return yI(t,e)}function W_(t,e){const n=e==null?void 0:e[rI];return n==null?null:zt.makeFromBucketSpec(n,t)}function GD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:qx(s,t.app.options.projectId))}class Xm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=nI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bj,this._maxUploadRetryTime=zj,this._requests=new Set,s!=null?this._bucket=zt.makeFromBucketSpec(s,this._host):this._bucket=W_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,e):this._bucket=W_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new sD(sI());{const o=mD(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const K_="@firebase/storage",G_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="storage";function QD(t,e,n){return t=he(t),BD(t,e,n)}function YD(t){return t=he(t),zD(t)}function XD(t,e){return t=he(t),KD(t,e)}function JD(t=Tc(),e){t=he(t);const r=Ls(t,vI).getImmediate({identifier:e}),s=$x("storage");return s&&ZD(r,...s),r}function ZD(t,e,n,r={}){GD(t,e,n,r)}function eL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Xm(n,r,s,e,Ms)}function tL(){mn(new tn(vI,eL,"PUBLIC").setMultipleInstances(!0)),Lt(K_,G_,""),Lt(K_,G_,"esm2017")}tL();const _I="@firebase/installations",Jm="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1e4,xI=`w:${Jm}`,EI="FIS_v2",nL="https://firebaseinstallations.googleapis.com/v1",rL=60*60*1e3,sL="installations",iL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Cs=new Ds(sL,iL,oL);function TI(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II({projectId:t}){return`${nL}/projects/${t}/installations`}function SI(t){return{token:t.token,requestStatus:2,expiresIn:lL(t.expiresIn),creationTime:Date.now()}}async function AI(t,e){const r=(await e.json()).error;return Cs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function PI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aL(t,{refreshToken:e}){const n=PI(t);return n.append("Authorization",uL(e)),n}async function NI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lL(t){return Number(t.replace("s","000"))}function uL(t){return`${EI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=II(t),s=PI(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:EI,appId:t.appId,sdkVersion:xI},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:SI(d.authToken)}}else throw await AI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=/^[cdef][\w-]{21}$/,Hf="";function fL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pL(t);return hL.test(n)?n:Hf}catch{return Hf}}function pL(t){return dL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new Map;function kI(t,e){const n=Hc(t);RI(n,e),mL(n,e)}function RI(t,e){const n=CI.get(t);if(n)for(const r of n)r(e)}function mL(t,e){const n=gL();n&&n.postMessage({key:t,fid:e}),yL()}let ps=null;function gL(){return!ps&&"BroadcastChannel"in self&&(ps=new BroadcastChannel("[Firebase] FID Change"),ps.onmessage=t=>{RI(t.data.key,t.data.fid)}),ps}function yL(){CI.size===0&&ps&&(ps.close(),ps=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL="firebase-installations-database",_L=1,ks="firebase-installations-store";let dh=null;function Zm(){return dh||(dh=Ec(vL,_L,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ks)}}})),dh}async function Zu(t,e){const n=Hc(t),s=(await Zm()).transaction(ks,"readwrite"),i=s.objectStore(ks),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&kI(t,e.fid),e}async function OI(t){const e=Hc(t),r=(await Zm()).transaction(ks,"readwrite");await r.objectStore(ks).delete(e),await r.done}async function Wc(t,e){const n=Hc(t),s=(await Zm()).transaction(ks,"readwrite"),i=s.objectStore(ks),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&kI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t){let e;const n=await Wc(t.appConfig,r=>{const s=wL(r),i=xL(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Hf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wL(t){const e=t||{fid:fL(),registrationStatus:0};return jI(e)}function xL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Cs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=EL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TL(t)}:{installationEntry:e}}async function EL(t,e){try{const n=await cL(t,e);return Zu(t.appConfig,n)}catch(n){throw TI(n)&&n.customData.serverCode===409?await OI(t.appConfig):await Zu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function TL(t){let e=await Q_(t.appConfig);for(;e.registrationStatus===1;)await bI(100),e=await Q_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await eg(t);return r||n}return e}function Q_(t){return Wc(t,e=>{if(!e)throw Cs.create("installation-not-found");return jI(e)})}function jI(t){return IL(t)?{fid:t.fid,registrationStatus:0}:t}function IL(t){return t.registrationStatus===1&&t.registrationTime+wI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL({appConfig:t,heartbeatServiceProvider:e},n){const r=AL(t,n),s=aL(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:xI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const d=await u.json();return SI(d)}else throw await AI("Generate Auth Token",u)}function AL(t,{fid:e}){return`${II(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e=!1){let n;const r=await Wc(t.appConfig,i=>{if(!DI(i))throw Cs.create("not-registered");const o=i.authToken;if(!e&&bL(o))return i;if(o.requestStatus===1)return n=PL(t,e),i;{if(!navigator.onLine)throw Cs.create("app-offline");const l=kL(i);return n=NL(t,l),l}});return n?await n:r.authToken}async function PL(t,e){let n=await Y_(t.appConfig);for(;n.authToken.requestStatus===1;)await bI(100),n=await Y_(t.appConfig);const r=n.authToken;return r.requestStatus===0?tg(t,e):r}function Y_(t){return Wc(t,e=>{if(!DI(e))throw Cs.create("not-registered");const n=e.authToken;return RL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NL(t,e){try{const n=await SL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Zu(t.appConfig,r),n}catch(n){if(TI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zu(t.appConfig,r)}throw n}}function DI(t){return t!==void 0&&t.registrationStatus===2}function bL(t){return t.requestStatus===2&&!CL(t)}function CL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rL}function kL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function RL(t){return t.requestStatus===1&&t.requestTime+wI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL(t){const e=t,{installationEntry:n,registrationPromise:r}=await eg(e);return r?r.catch(console.error):tg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(t,e=!1){const n=t;return await DL(n),(await tg(n,e)).token}async function DL(t){const{registrationPromise:e}=await eg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t){if(!t||!t.options)throw hh("App Configuration");if(!t.name)throw hh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hh(t){return Cs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="installations",ML="installations-internal",VL=t=>{const e=t.getProvider("app").getImmediate(),n=LL(e),r=Ls(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UL=t=>{const e=t.getProvider("app").getImmediate(),n=Ls(e,LI).getImmediate();return{getId:()=>OL(n),getToken:s=>jL(n,s)}};function FL(){mn(new tn(LI,VL,"PUBLIC")),mn(new tn(ML,UL,"PRIVATE"))}FL();Lt(_I,Jm);Lt(_I,Jm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L="/firebase-messaging-sw.js",BL="/firebase-cloud-messaging-push-scope",MI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",zL="https://fcmregistrations.googleapis.com/v1",VI="google.c.a.c_id",qL="google.c.a.c_l",HL="google.c.a.ts",WL="google.c.a.e";var X_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(X_||(X_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Na;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Na||(Na={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function KL(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="fcm_token_details_db",GL=5,J_="fcm_token_object_Store";async function QL(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(fh))return null;let e=null;return(await Ec(fh,GL,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains(J_))return;const u=o.objectStore(J_),d=await u.index("fcmSenderId").get(t);if(await u.clear(),!!d){if(s===2){const f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:$n(f.vapidKey)}}}else if(s===3){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:$n(f.auth),p256dh:$n(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:$n(f.vapidKey)}}}else if(s===4){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:$n(f.auth),p256dh:$n(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:$n(f.vapidKey)}}}}}})).close(),await eh(fh),await eh("fcm_vapid_details_db"),await eh("undefined"),YL(e)?e:null}function YL(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="firebase-messaging-database",JL=1,ba="firebase-messaging-store";let ph=null;function UI(){return ph||(ph=Ec(XL,JL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ba)}}})),ph}async function ZL(t){const e=FI(t),r=await(await UI()).transaction(ba).objectStore(ba).get(e);if(r)return r;{const s=await QL(t.appConfig.senderId);if(s)return await ng(t,s),s}}async function ng(t,e){const n=FI(t),s=(await UI()).transaction(ba,"readwrite");return await s.objectStore(ba).put(e,n),await s.done,e}function FI({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new Ds("messaging","Messaging",eM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,e){const n=await sg(t),r=$I(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(rg(t.appConfig),s)).json()}catch(o){throw pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw pt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw pt.create("token-subscribe-no-token");return i.token}async function nM(t,e){const n=await sg(t),r=$I(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${rg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw pt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw pt.create("token-update-no-token");return i.token}async function rM(t,e){const r={method:"DELETE",headers:await sg(t)};try{const i=await(await fetch(`${rg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw pt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function rg({projectId:t}){return`${zL}/projects/${t}/registrations`}async function sg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function $I({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==MI&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=7*24*60*60*1e3;async function iM(t){const e=await aM(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:$n(e.getKey("auth")),p256dh:$n(e.getKey("p256dh"))},r=await ZL(t.firebaseDependencies);if(r){if(lM(r.subscriptionOptions,n))return Date.now()>=r.createTime+sM?oM(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await rM(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Z_(t.firebaseDependencies,n)}else return Z_(t.firebaseDependencies,n)}async function oM(t,e){try{const n=await nM(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await ng(t.firebaseDependencies,r),n}catch(n){throw n}}async function Z_(t,e){const r={token:await tM(t,e),createTime:Date.now(),subscriptionOptions:e};return await ng(t,r),r.token}async function aM(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:KL(e)})}function lM(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return uM(e,t),cM(e,t),dM(e,t),e}function uM(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function cM(t,e){e.data&&(t.data=e.data)}function dM(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){return typeof t=="object"&&!!t&&VI in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t){if(!t||!t.options)throw mh("App Configuration Object");if(!t.name)throw mh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw mh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function mh(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=fM(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t){try{t.swRegistration=await navigator.serviceWorker.register($L,{scope:BL}),t.swRegistration.update().catch(()=>{})}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){if(!e&&!t.swRegistration&&await mM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=MI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await yM(t,e==null?void 0:e.vapidKey),await gM(t,e==null?void 0:e.serviceWorkerRegistration),iM(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vM(t,e,n){const r=_M(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[VI],message_name:n[qL],message_time:n[HL],message_device_time:Math.floor(Date.now()/1e3)})}function _M(t){switch(t){case Na.NOTIFICATION_CLICKED:return"notification_open";case Na.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Na.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(e0(n)):t.onMessageHandler.next(e0(n)));const r=n.data;hM(r)&&r[WL]==="1"&&await vM(t,n.messageType,r)}const t0="@firebase/messaging",n0="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=t=>{const e=new pM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>wM(e,n)),e},EM=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>BI(e,r)}};function TM(){mn(new tn("messaging",xM,"PUBLIC")),mn(new tn("messaging-internal",EM,"PRIVATE")),Lt(t0,n0),Lt(t0,n0,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IM(){try{await Wx()}catch{return!1}return typeof window<"u"&&Hx()&&sb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t,e){if(!navigator)throw pt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t=Tc()){return IM().then(e=>{if(!e)throw pt.create("unsupported-browser")},e=>{throw pt.create("indexed-db-unsupported")}),Ls(he(t),"messaging").getImmediate()}async function PM(t,e){return t=he(t),BI(t,e)}function NM(t,e){return t=he(t),SM(t,e)}TM();const ls={apiKey:"AIzaSyAwpDzEdm-rWIiwequIIOW3K88ZukFd8Ko",authDomain:"education-platform-backend.firebaseapp.com",projectId:"education-platform-backend",storageBucket:"education-platform-backend.firebasestorage.app",messagingSenderId:"882764679517",appId:"1:882764679517:web:ad0ed91d818388b44c00b4"};console.log("Firebase Config:",{apiKey:ls.apiKey?"Set":"Missing",authDomain:ls.authDomain?"Set":"Missing",projectId:ls.projectId?"Set":"Missing",storageBucket:ls.storageBucket?"Set":"Missing",messagingSenderId:ls.messagingSenderId?"Set":"Missing",appId:ls.appId?"Set":"Missing"});const ig=Qx(ls),Xs=DR(ig),de=Ij(ig),bM=JD(ig),zI=new zn;zI.setCustomParameters({prompt:"select_account"});class CM{async register(e,n,r){try{const i=(await yk(Xs,e,n)).user;return await wk(i,{displayName:r}),await zf(Le(de,"users",i.uid),{uid:i.uid,email:e,displayName:r,role:"student",purchasedCourses:[],createdAt:Oe(),lastLogin:Oe(),photoURL:null,progress:{}}),{success:!0,user:i}}catch(s){return console.error("Registration error:",s),{success:!1,error:this.getErrorMessage(s.code)}}}async login(e,n){try{const r=await vk(Xs,e,n);return await Nn(Le(de,"users",r.user.uid),{lastLogin:Oe()}),{success:!0,user:r.user}}catch(r){return console.error("Login error:",r),{success:!1,error:this.getErrorMessage(r.code)}}}async loginWithGoogle(){try{const n=(await qk(Xs,zI)).user;return(await Kr(Le(de,"users",n.uid))).exists()?await Nn(Le(de,"users",n.uid),{lastLogin:Oe()}):await zf(Le(de,"users",n.uid),{uid:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,role:"student",purchasedCourses:[],createdAt:Oe(),lastLogin:Oe(),progress:{}}),{success:!0,user:n}}catch(e){return console.error("Google login error:",e),{success:!1,error:this.getErrorMessage(e.code)}}}async logout(){try{return await Ik(Xs),{success:!0}}catch(e){return console.error("Logout error:",e),{success:!1,error:e.message}}}async resetPassword(e){try{return await gk(Xs,e),{success:!0,message:"Email de réinitialisation envoyé"}}catch(n){return console.error("Password reset error:",n),{success:!1,error:this.getErrorMessage(n.code)}}}async getUserData(e){try{const n=await Kr(Le(de,"users",e));return n.exists()?{success:!0,data:n.data()}:{success:!1,error:"Utilisateur introuvable"}}catch(n){return console.error("Get user data error:",n),{success:!1,error:n.message}}}getErrorMessage(e){return{"auth/email-already-in-use":"Cet email est déjà utilisé","auth/invalid-email":"Email invalide","auth/operation-not-allowed":"Opération non autorisée","auth/weak-password":"Mot de passe trop faible (minimum 6 caractères)","auth/user-disabled":"Ce compte a été désactivé","auth/user-not-found":"Aucun utilisateur trouvé avec cet email","auth/wrong-password":"Mot de passe incorrect","auth/too-many-requests":"Trop de tentatives. Réessayez plus tard","auth/network-request-failed":"Erreur de connexion réseau","auth/popup-closed-by-user":"Fenêtre de connexion fermée","auth/requires-recent-login":"Veuillez vous reconnecter pour effectuer cette action"}[e]||"Une erreur est survenue"}}const ss=new CM,kM=void 0;class RM{constructor(){this.messaging=null}async initialize(){try{return this.messaging=AM(),console.log("📱 FCM initialisé"),!0}catch(e){return console.error("❌ Erreur initialisation FCM:",e),!1}}async requestPermission(){try{const e=await Notification.requestPermission();return console.log("🔔 Permission notification:",e),e==="granted"?!0:(e==="denied"&&console.log("❌ Permission refusée"),!1)}catch(e){return console.error("❌ Erreur permission:",e),!1}}async getDeviceToken(e){try{this.messaging||await this.initialize();const n=await PM(this.messaging,{vapidKey:kM});return n?(console.log("✅ FCM Token:",n),e&&await Nn(Le(de,"users",e),{fcmTokens:tI(n),lastTokenUpdate:new Date}),n):(console.log("❌ Impossible de récupérer le token"),null)}catch(n){return console.error("❌ Erreur récupération token:",n),null}}async subscribeToNotifications(e){try{if(!("Notification"in window))return console.log("❌ Notifications non supportées"),{success:!1,error:"Notifications non supportées"};if(!await this.requestPermission())return{success:!1,error:"Permission refusée"};const r=await this.getDeviceToken(e);return r?{success:!0,token:r}:{success:!1,error:"Impossible de récupérer le token"}}catch(n){return console.error("❌ Erreur souscription:",n),{success:!1,error:n.message}}}onMessageReceived(e){if(!this.messaging){console.error("❌ FCM non initialisé");return}NM(this.messaging,n=>{console.log("📩 Message reçu (foreground):",n),n.notification&&new Notification(n.notification.title,{body:n.notification.body,icon:"/logo.png"}),e&&e(n)})}}const Jo=new RM,qI=j.createContext({}),Mt=()=>{const t=j.useContext(qI);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},OM=({children:t})=>{const[e,n]=j.useState(null),[r,s]=j.useState(null),[i,o]=j.useState(!0),[l,u]=j.useState(null),d=async y=>{try{const b=await ss.getUserData(y);if(b.success)return s(b.data),console.log("Loaded userProfile from Firestore:",b.data),b.data}catch(b){console.error("Error loading user profile:",b)}return null};j.useEffect(()=>Tk(Xs,async b=>{if(n(b),console.log("Auth state changed - uid:",(b==null?void 0:b.uid)||null),b){const L=await d(b.uid);console.log("After loadUserProfile - userProfile:",L),(L==null?void 0:L.role)!=="admin"?(await Jo.initialize(),(await Jo.subscribeToNotifications(b.uid)).success&&console.log("✅ Notifications activées"),Jo.onMessageReceived(T=>{console.log("📨 Nouvelle notification:",T)})):console.log("Notifications skipped for admin user")}else s(null);o(!1)}),[]);const f=async(y,b,L)=>{u(null);const V=await ss.register(y,b,L);return V.success||u(V.error),V},m=async(y,b)=>{u(null);const L=await ss.login(y,b);return L.success||u(L.error),L},g=async()=>{u(null);const y=await ss.loginWithGoogle();return y.success||u(y.error),y},w=async()=>{u(null);const y=await ss.logout();return y.success||u(y.error),y},S=async y=>{u(null);const b=await ss.resetPassword(y);return b.success||u(b.error),b},N=async y=>{u(null);const b=await ss.updateUserProfile(y);return b.success?await d(e.uid):u(b.error),b},C=()=>(r==null?void 0:r.role)==="admin",x={currentUser:e,userProfile:r,loading:i,error:l,register:f,login:m,loginWithGoogle:g,logout:w,resetPassword:S,updateProfile:N,isAdmin:C,hasAccessToCourse:y=>{var b;return((b=r==null?void 0:r.purchasedCourses)==null?void 0:b.includes(y))||C()},setError:u};return c.jsx(qI.Provider,{value:x,children:!i&&t})};function Io({children:t,adminOnly:e=!1}){const{currentUser:n,userProfile:r,loading:s}=Mt();return s?c.jsx("div",{className:"min-h-screen flex items-center justify-center",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"})}):(console.log("ProtectedRoute - adminOnly:",e,"currentUser:",!!n,"userProfile:",r),n?e&&(r==null?void 0:r.role)!=="admin"?(console.log("ProtectedRoute blocking admin route - userProfile.role:",r==null?void 0:r.role),c.jsx(pf,{to:"/",replace:!0})):t:(console.log("ProtectedRoute redirecting to /login because no currentUser"),c.jsx(pf,{to:"/login",replace:!0})))}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Z=(t,e)=>{const n=j.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},f)=>j.createElement("svg",{ref:f,...jM,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${DM(t)}`,l].join(" "),...d},[...e.map(([m,g])=>j.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Z("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Z("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=Z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=Z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Z("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Z("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=Z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=Z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Z("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=Z("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=Z("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=Z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=Z("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Z("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=Z("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=Z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=Z("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Z("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=Z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=Z("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=Z("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=Z("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=Z("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=Z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=Z("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=Z("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=Z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=Z("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function sV(){var N,C;const[t,e]=j.useState({email:"",password:""}),[n,r]=j.useState(!1),{login:s,loginWithGoogle:i,error:o,setError:l,userProfile:u}=Mt(),d=yn(),m=((C=(N=js().state)==null?void 0:N.from)==null?void 0:C.pathname)||"/",g=async E=>{E.preventDefault(),r(!0);const x=await s(t.email,t.password);x.success&&setTimeout(()=>{if(x.user){const y=setInterval(()=>{u&&(clearInterval(y),u.role==="admin"?d("/admin",{replace:!0}):d(m,{replace:!0}))},100);setTimeout(()=>{clearInterval(y),d(m,{replace:!0})},3e3)}else d(m,{replace:!0})},500),r(!1)},w=async()=>{r(!0);const E=await i();E.success&&setTimeout(()=>{if(E.user){const x=setInterval(()=>{u&&(clearInterval(x),u.role==="admin"?d("/admin",{replace:!0}):d(m,{replace:!0}))},100);setTimeout(()=>{clearInterval(x),d(m,{replace:!0})},3e3)}else d(m,{replace:!0})},500),r(!1)},S=E=>{e({...t,[E.target.name]:E.target.value}),o&&l(null)};return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Bon retour !"}),c.jsx("p",{className:"text-gray-600 mt-2",children:"Connectez-vous à votre compte"})]}),o&&c.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3",children:[c.jsx(LM,{className:"w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"}),c.jsx("p",{className:"text-red-700 text-sm",children:o})]}),c.jsxs("button",{onClick:w,disabled:n,className:"w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 mb-6",children:[c.jsx(WI,{className:"w-5 h-5"}),"Continuer avec Google"]}),c.jsxs("div",{className:"relative mb-6",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Ou avec email"})})]}),c.jsxs("form",{onSubmit:g,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),c.jsxs("div",{className:"relative",children:[c.jsx(Kc,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"email",name:"email",value:t.email,onChange:S,required:!0,className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"email@example.com"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center mb-1",children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Mot de passe"}),c.jsx(Xe,{to:"/forgot-password",className:"text-sm text-green-500 hover:text-green-600",children:"Mot de passe oublié ?"})]}),c.jsxs("div",{className:"relative",children:[c.jsx(ec,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"password",name:"password",value:t.password,onChange:S,required:!0,className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"••••••••"})]})]}),c.jsx("button",{type:"submit",disabled:n,className:"w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50 font-medium",children:n?"Connexion...":"Se connecter"})]}),c.jsxs("p",{className:"text-center text-gray-600 mt-6",children:["Pas encore de compte ?"," ",c.jsx(Xe,{to:"/register",className:"text-green-500 hover:text-green-600 font-medium",children:"S'inscrire"})]})]})})}function iV(){const[t,e]=j.useState({displayName:"",email:"",password:"",confirmPassword:""}),[n,r]=j.useState({}),[s,i]=j.useState(!1),{register:o,loginWithGoogle:l}=Mt(),u=yn(),d=()=>{const w={};return t.displayName.trim()||(w.displayName="Le nom est requis"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(w.email="Email invalide"):w.email="L'email est requis",t.password?t.password.length<6&&(w.password="Minimum 6 caractères"):w.password="Le mot de passe est requis",t.password!==t.confirmPassword&&(w.confirmPassword="Les mots de passe ne correspondent pas"),r(w),Object.keys(w).length===0},f=async w=>{if(w.preventDefault(),!d())return;i(!0),(await o(t.email,t.password,t.displayName)).success&&u("/"),i(!1)},m=async()=>{i(!0),(await l()).success&&u("/"),i(!1)},g=w=>{e({...t,[w.target.name]:w.target.value}),n[w.target.name]&&r({...n,[w.target.name]:""})};return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Créer un compte"}),c.jsx("p",{className:"text-gray-600 mt-2",children:"Commencez votre apprentissage"})]}),c.jsxs("button",{onClick:m,disabled:s,className:"w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 mb-6",children:[c.jsx(WI,{className:"w-5 h-5"}),"Continuer avec Google"]}),c.jsxs("div",{className:"relative mb-6",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Ou avec email"})})]}),c.jsxs("form",{onSubmit:f,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Nom complet"}),c.jsxs("div",{className:"relative",children:[c.jsx(nc,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"text",name:"displayName",value:t.displayName,onChange:g,className:`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${n.displayName?"border-red-500":"border-gray-300"}`,placeholder:"Ahmed Ben Salem"})]}),n.displayName&&c.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.displayName})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),c.jsxs("div",{className:"relative",children:[c.jsx(Kc,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"email",name:"email",value:t.email,onChange:g,className:`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${n.email?"border-red-500":"border-gray-300"}`,placeholder:"email@example.com"})]}),n.email&&c.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.email})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Mot de passe"}),c.jsxs("div",{className:"relative",children:[c.jsx(ec,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"password",name:"password",value:t.password,onChange:g,className:`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${n.password?"border-red-500":"border-gray-300"}`,placeholder:"••••••••"})]}),n.password&&c.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.password})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Confirmer le mot de passe"}),c.jsxs("div",{className:"relative",children:[c.jsx(ec,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"password",name:"confirmPassword",value:t.confirmPassword,onChange:g,className:`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${n.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"••••••••"})]}),n.confirmPassword&&c.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.confirmPassword})]}),c.jsx("button",{type:"submit",disabled:s,className:"w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50 font-medium",children:s?"Création en cours...":"Créer mon compte"})]}),c.jsxs("p",{className:"text-center text-gray-600 mt-6",children:["Vous avez déjà un compte ?"," ",c.jsx(Xe,{to:"/login",className:"text-green-500 hover:text-green-600 font-medium",children:"Se connecter"})]})]})})}function oV(){const[t,e]=j.useState(""),[n,r]=j.useState(!1),[s,i]=j.useState(!1),[o,l]=j.useState(""),{resetPassword:u}=Mt(),d=async f=>{if(f.preventDefault(),l(""),!t.trim()){l("Veuillez entrer votre email");return}r(!0);const m=await u(t);m.success?i(!0):l(m.error),r(!1)};return s?c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center",children:[c.jsx(Xt,{className:"w-16 h-16 text-green-500 mx-auto mb-4"}),c.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Email envoyé !"}),c.jsxs("p",{className:"text-gray-600 mb-6",children:["Nous avons envoyé un lien de réinitialisation à ",c.jsx("strong",{children:t})]}),c.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"Vérifiez votre boîte de réception et suivez les instructions pour réinitialiser votre mot de passe."}),c.jsxs(Xe,{to:"/login",className:"inline-flex items-center gap-2 text-green-500 hover:text-green-600 font-medium",children:[c.jsx(Ca,{className:"w-4 h-4"}),"Retour à la connexion"]})]})}):c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8",children:[c.jsxs(Xe,{to:"/login",className:"inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6",children:[c.jsx(Ca,{className:"w-4 h-4"}),"Retour"]}),c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Mot de passe oublié ?"}),c.jsx("p",{className:"text-gray-600 mt-2",children:"Entrez votre email pour recevoir un lien de réinitialisation"})]}),o&&c.jsx("div",{className:"mb-6 bg-red-50 border border-red-200 rounded-lg p-4",children:c.jsx("p",{className:"text-red-700 text-sm",children:o})}),c.jsxs("form",{onSubmit:d,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),c.jsxs("div",{className:"relative",children:[c.jsx(Kc,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),c.jsx("input",{type:"email",value:t,onChange:f=>e(f.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"email@example.com",required:!0})]})]}),c.jsx("button",{type:"submit",disabled:n,className:"w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50 font-medium",children:n?"Envoi en cours...":"Envoyer le lien"})]})]})})}const Gf="/admin",aV="/dashboard";function lV(){const[t,e]=j.useState(!0),[n,r]=j.useState(!1),{currentUser:s,userProfile:i}=Mt();if(!s||!t||(i==null?void 0:i.role)==="admin")return null;const o=async()=>{r(!0);const l=await Jo.subscribeToNotifications(s.uid);l.success?(alert("✅ Notifications activées !"),e(!1)):alert("❌ Erreur : "+(l.error||"activation impossible")),r(!1)};return c.jsxs("div",{className:"fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl p-6 max-w-md border border-gray-200 z-50",children:[c.jsx("button",{onClick:()=>e(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600",children:c.jsx(Kf,{className:"w-5 h-5"})}),c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("div",{className:"bg-green-100 rounded-full p-3",children:c.jsx(HI,{className:"w-6 h-6 text-green-600"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Activer les notifications"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Recevez des alertes pour vos cours, les nouveaux contenus et les offres spéciales."}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:o,disabled:n,className:"bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm font-medium disabled:opacity-50",children:n?"Activation...":"Activer"}),c.jsx("button",{onClick:()=>e(!1),className:"text-gray-600 hover:text-gray-800 text-sm",children:"Plus tard"})]})]})]})]})}function uV(){const{currentUser:t,userProfile:e}=Mt(),n=yn();return c.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50",children:[c.jsx("nav",{className:"bg-white shadow-sm",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Gr,{className:"w-8 h-8 text-green-500"}),c.jsx("span",{className:"ml-2 text-xl font-bold text-gray-800",children:"EduPlatform"})]}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx(Xe,{to:"/courses",className:"text-gray-600 hover:text-gray-800",children:"Cours"}),t?c.jsxs(c.Fragment,{children:[c.jsx(Xe,{to:"/my-courses",className:"text-gray-600 hover:text-gray-800",children:"Mes Cours"}),c.jsx(Xe,{to:"/profile",className:"text-gray-600 hover:text-gray-800",children:"Profil"}),(e==null?void 0:e.role)==="admin"&&c.jsx(Xe,{to:Gf,className:"bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600",onClick:r=>{console.log("Admin link clicked - userProfile:",e),r.preventDefault(),n(Gf)},children:"Admin"})]}):c.jsxs(c.Fragment,{children:[c.jsx(Xe,{to:"/login",className:"text-gray-600 hover:text-gray-800",children:"Connexion"}),c.jsx(Xe,{to:"/register",className:"bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600",children:"S'inscrire"})]})]})]})})}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:"Apprenez à votre rythme avec nos cours en ligne"}),c.jsx("p",{className:"text-xl text-gray-600 mb-8 max-w-2xl mx-auto",children:"Accédez à des centaines de cours de qualité, créés par des experts, et développez vos compétences aujourd'hui."}),c.jsxs("div",{className:"flex gap-4 justify-center",children:[c.jsxs(Xe,{to:"/courses",className:"inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-medium text-lg",children:["Découvrir les cours",c.jsx(og,{className:"w-5 h-5"})]}),!t&&c.jsx(Xe,{to:"/register",className:"inline-flex items-center gap-2 bg-white text-green-500 px-8 py-3 rounded-lg border-2 border-green-500 hover:bg-green-50 transition font-medium text-lg",children:"Commencer gratuitement"})]})]}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mt-20",children:[c.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-lg text-center",children:[c.jsx(Gr,{className:"w-12 h-12 text-green-500 mx-auto mb-4"}),c.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:"Cours variés"}),c.jsx("p",{className:"text-gray-600",children:"Des centaines de cours dans différents domaines"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-lg text-center",children:[c.jsx(Gc,{className:"w-12 h-12 text-blue-500 mx-auto mb-4"}),c.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:"Instructeurs experts"}),c.jsx("p",{className:"text-gray-600",children:"Apprenez auprès de professionnels qualifiés"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-lg text-center",children:[c.jsx(VM,{className:"w-12 h-12 text-purple-500 mx-auto mb-4"}),c.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:"Certificats"}),c.jsx("p",{className:"text-gray-600",children:"Obtenez des certificats à la fin de chaque cours"})]})]})]}),c.jsx(lV,{})]})}function cV(){var y;const{currentUser:t,userProfile:e,logout:n}=Mt(),r=yn(),[s,i]=j.useState(!1),[o,l]=j.useState(!1),[u,d]=j.useState((e==null?void 0:e.phone)||""),[f,m]=j.useState(e!=null&&e.fcmTokens&&e.fcmTokens.length>0?"enabled":"disabled"),[g,w]=j.useState(null),[S,N]=j.useState(!1),C=async()=>{i(!0),await n(),r("/login")},E=async()=>{try{await Nn(Le(de,"users",t.uid),{phone:u}),alert("Téléphone mis à jour !"),l(!1)}catch(b){alert("Erreur : "+b.message)}},x=async()=>{if(!t)return;N(!0),w(null);const b=await Jo.subscribeToNotifications(t.uid);b.success?(m("enabled"),w("Notifications activées ✅")):w(b.error||"Impossible d’activer les notifications"),N(!1)};return c.jsx("div",{className:"min-h-screen bg-gray-50 p-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-8",children:"Mon Profil"}),c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[c.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[c.jsx("div",{className:"w-24 h-24 bg-green-100 rounded-full flex items-center justify-center",children:t!=null&&t.photoURL?c.jsx("img",{src:t.photoURL,alt:e==null?void 0:e.displayName,className:"w-24 h-24 rounded-full object-cover"}):c.jsx(nc,{className:"w-12 h-12 text-green-500"})}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:e==null?void 0:e.displayName}),c.jsx("p",{className:"text-gray-600",children:t==null?void 0:t.email}),c.jsx("span",{className:"inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full",children:(e==null?void 0:e.role)==="admin"?"Administrateur":"Étudiant"})]})]}),c.jsxs("div",{className:"space-y-4 mb-8",children:[c.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gray-50 rounded-lg",children:[c.jsx(Kc,{className:"w-5 h-5 text-gray-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),c.jsx("p",{className:"font-medium text-gray-800",children:t==null?void 0:t.email})]})]}),c.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gray-50 rounded-lg",children:[c.jsx(QM,{className:"w-5 h-5 text-gray-400"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"text-sm text-gray-500",children:"Téléphone"}),o?c.jsx("input",{type:"tel",value:u,onChange:b=>d(b.target.value),placeholder:"12345678",maxLength:"8",className:"font-medium text-gray-800 border rounded px-2 py-1"}):c.jsx("p",{className:"font-medium text-gray-800",children:u||"Non renseigné"})]}),o?c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:E,className:"text-green-500 hover:text-green-600 text-sm font-medium",children:"Enregistrer"}),c.jsx("button",{onClick:()=>l(!1),className:"text-gray-500 hover:text-gray-600 text-sm",children:"Annuler"})]}):c.jsx("button",{onClick:()=>l(!0),className:"text-blue-500 hover:text-blue-600 text-sm font-medium",children:"Modifier"})]}),c.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gray-50 rounded-lg",children:[c.jsx(nc,{className:"w-5 h-5 text-gray-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-500",children:"Cours achetés"}),c.jsxs("p",{className:"font-medium text-gray-800",children:[((y=e==null?void 0:e.purchasedCourses)==null?void 0:y.length)||0," cours"]})]})]}),c.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gray-50 rounded-lg",children:[c.jsx(HI,{className:"w-5 h-5 text-gray-400"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"text-sm text-gray-500",children:"Notifications de paiement"}),c.jsx("p",{className:"font-medium text-gray-800",children:f==="enabled"?"Activées":"Désactivées"}),g&&c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:g})]}),c.jsx("button",{onClick:x,disabled:S||f==="enabled",className:"text-sm font-medium px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50",children:f==="enabled"?"Activées":S?"Activation...":"Activer"})]})]}),c.jsxs("button",{onClick:C,disabled:s,className:"w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition disabled:opacity-50",children:[c.jsx(WM,{className:"w-5 h-5"}),s?"Déconnexion...":"Se déconnecter"]})]})]})})}const dV="https://sandbox.paymee.tn/api/v2",hV="73af59aae675d845db28616e3e9304f2473d7090",fV="https://plateforme-educative.onrender.com";function pV(t){if(typeof t=="boolean")return t?"completed":"failed";if(typeof t=="number")return t===1?"completed":"failed";if(!t)return"failed";const e=String(t).trim().toLowerCase(),n=new Set(["1","true","yes","paid","success","ok","completed"]),r=new Set(["pending","in_progress","processing","wait"]),s=new Set(["0","false","failed","cancelled","canceled"]);return n.has(e)?"completed":r.has(e)?"pending":s.has(e)?"failed":"unknown"}const mV=()=>{const t="https://e-learing-58b34.web.app";return t.endsWith("/")?t.slice(0,-1):t};class gV{async initiatePayment(e,n,r,s){var i,o;try{console.log("🔐 Initiating payment...",{courseId:e,courseTitle:n,amount:r});let l;try{l=mV()}catch(N){return console.error("❌ HTTPS check failed:",N.message),{success:!1,error:N.message}}const u=await Ju(br(de,"payments"),{userId:s.uid,courseId:e,courseTitle:n,amount:r,currency:"TND",status:"pending",createdAt:Oe(),userEmail:s.email,userName:s.displayName});console.log("✅ Payment document created:",u.id);const d=((i=s.displayName)==null?void 0:i.split(" ")[0])||"User",f=((o=s.displayName)==null?void 0:o.split(" ").slice(1).join(" "))||"Student";let m=s.phone||"12345678";m=m.replace(/\D/g,""),m.length!==8&&(m="12345678");const g={amount:parseFloat(r),note:`Cours ${n}`,first_name:d,last_name:f,email:s.email,phone:m,return_url:`${l}/payment/success?payment_id=${u.id}`,cancel_url:`${l}/payment/cancel?payment_id=${u.id}`,webhook_url:`${fV}/paymee-webhook`,order_id:u.id};console.log("📤 Sending to Paymee:",g);const w=await fetch(`${dV}/payments/create`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Token ${hV}`},body:JSON.stringify(g)});console.log("📥 Response status:",w.status);const S=await w.json();if(console.log("📥 Paymee response:",S),!S.status){if(console.error("❌ Paymee error:",S),S.errors&&Array.isArray(S.errors)){const N=S.errors.map(C=>typeof C=="object"?Object.entries(C).map(([E,x])=>`${E}: ${x}`).join(", "):C).join(" | ");throw new Error(`Erreur Paymee: ${N}`)}throw new Error(S.message||"Erreur initialisation paiement")}return await Nn(Le(de,"payments",u.id),{paymeeToken:S.data.token,paymentUrl:S.data.payment_url,updatedAt:Oe()}),console.log("✅ Payment ready:",S.data.payment_url),{success:!0,paymentId:u.id,paymentUrl:S.data.payment_url,token:S.data.token}}catch(l){return console.error("💥 Payment error:",l),{success:!1,error:l.message}}}async verifyPayment(e){try{const n=await Kr(Le(de,"payments",e));if(!n.exists())return{success:!1,error:"Paiement introuvable"};const r=n.data();return{success:!0,status:pV(r.status),rawStatus:r.status,data:r}}catch(n){return console.error("Verification error:",n),{success:!1,error:n.message}}}}const GI=new gV;function QI({course:t}){var u;const{currentUser:e,userProfile:n}=Mt(),[r,s]=j.useState(!1),[i,o]=j.useState(null),l=async()=>{var f;if(!e){o("Veuillez vous connecter pour acheter ce cours");return}if((f=n==null?void 0:n.purchasedCourses)!=null&&f.includes(t.id)){o("Vous avez déjà accès à ce cours");return}s(!0),o(null);const d=await GI.initiatePayment(t.id,t.title,t.price,{uid:e.uid,email:e.email,displayName:(n==null?void 0:n.displayName)||e.displayName,phone:(n==null?void 0:n.phone)||"00000000"});d.success?window.location.href=d.paymentUrl:(o(d.error),s(!1))};return(u=n==null?void 0:n.purchasedCourses)!=null&&u.includes(t.id)?c.jsx("button",{disabled:!0,className:"w-full bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed",children:"Cours déjà acheté"}):t.isFree?c.jsx("button",{onClick:()=>window.location.href=`/courses/${t.id}`,className:"w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition",children:"Accéder gratuitement"}):c.jsxs("div",{children:[i&&c.jsx("div",{className:"mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",children:i}),c.jsx("button",{onClick:l,disabled:r,className:"w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium",children:r?c.jsxs(c.Fragment,{children:[c.jsx(ag,{className:"w-5 h-5 animate-spin"}),"Chargement..."]}):c.jsxs(c.Fragment,{children:[c.jsx(qM,{className:"w-5 h-5"}),"Acheter pour ",t.price," TND"]})}),c.jsx("p",{className:"text-xs text-gray-500 text-center mt-2",children:"Paiement sécurisé via Paymee"})]})}function yV(){const[t,e]=j.useState([]),[n,r]=j.useState(!0);return j.useEffect(()=>{setTimeout(()=>{e([{id:"1",title:"Introduction à React",description:"Apprenez les bases de React et créez votre première application",instructor:"Ahmed Ben Salem",duration:"8 heures",rating:4.8,students:1250,price:99,image:"/assets/images/default-course.png",level:"Débutant",isFree:!1},{id:"2",title:"JavaScript Avancé",description:"Maîtrisez les concepts avancés de JavaScript moderne",instructor:"Fatma Aloui",duration:"12 heures",rating:4.9,students:890,price:149,image:"/assets/images/default-course.png",level:"Intermédiaire",isFree:!1},{id:"3",title:"HTML/CSS Gratuit",description:"Apprenez les bases du développement web gratuitement",instructor:"Sara Mohamed",duration:"6 heures",rating:4.7,students:2100,price:0,image:"/assets/images/default-course.png",level:"Débutant",isFree:!0}]),r(!1)},1e3)},[]),n?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"})}):c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("div",{className:"bg-white shadow-sm",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Nos Cours"}),c.jsx("p",{className:"mt-2 text-gray-600",children:"Découvrez notre collection de cours de qualité"})]})}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(s=>c.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",children:[c.jsx("img",{src:s.image,alt:s.title,className:"w-full h-48 object-cover"}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("span",{className:"text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded",children:s.level}),s.isFree&&c.jsx("span",{className:"text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded",children:"Gratuit"})]}),c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:s.title}),c.jsx("p",{className:"text-gray-600 mb-4",children:s.description}),c.jsxs("div",{className:"flex items-center text-sm text-gray-500 mb-4",children:[c.jsx(ka,{className:"w-4 h-4 mr-1"}),c.jsx("span",{className:"mr-4",children:s.duration}),c.jsx(Wf,{className:"w-4 h-4 mr-1 text-yellow-400"}),c.jsx("span",{className:"mr-4",children:s.rating}),c.jsx(Gc,{className:"w-4 h-4 mr-1"}),c.jsxs("span",{children:[s.students," étudiants"]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-sm text-gray-600",children:["Par ",s.instructor]}),c.jsx("span",{className:"text-sm text-gray-500",children:s.isFree?"Gratuit":`${s.price} TND`})]}),c.jsx(QI,{course:s}),c.jsx(Xe,{to:`/course/${s.id}`,className:"block text-center text-sm text-green-600 hover:text-green-700 transition",children:"Voir les détails"})]})]})]},s.id))})})]})}function vV(){var d;const{id:t}=Rx(),e=yn(),{userProfile:n}=Mt(),[r,s]=j.useState(null),[i,o]=j.useState(!0);j.useEffect(()=>{l()},[t]);const l=async()=>{try{const f=await Kr(Le(de,"courses",t));f.exists()?s({id:f.id,...f.data()}):e("/courses")}catch(f){console.error("Error loading course:",f)}finally{o(!1)}},u=((d=n==null?void 0:n.purchasedCourses)==null?void 0:d.includes(t))||(r==null?void 0:r.isFree)||(n==null?void 0:n.role)==="admin";return i?c.jsx("div",{className:"min-h-screen flex items-center justify-center",children:c.jsx(ag,{className:"w-8 h-8 animate-spin text-green-500"})}):r?c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("div",{className:"bg-gradient-to-r from-green-500 to-blue-600 text-white py-8",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs(Xe,{to:"/courses",className:"inline-flex items-center gap-2 text-white hover:text-green-100 mb-6",children:[c.jsx(Ca,{className:"w-5 h-5"}),"Retour aux cours"]})})}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"lg:col-span-2",children:[c.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden mb-6",children:c.jsx("img",{src:r.thumbnail||"https://via.placeholder.com/800x400?text=Cours",alt:r.title,className:"w-full h-64 object-cover"})}),c.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx("span",{className:"bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm",children:r.category}),c.jsx("span",{className:"bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm",children:r.level}),u&&c.jsx("span",{className:"bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm",children:"✓ Accès activé"})]}),c.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:r.title}),c.jsx("p",{className:"text-gray-600 text-lg mb-6",children:r.description}),c.jsxs("div",{className:"flex flex-wrap gap-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[c.jsx(ka,{className:"w-5 h-5"}),c.jsx("span",{children:r.duration})]}),c.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[c.jsx(Gr,{className:"w-5 h-5"}),c.jsxs("span",{children:[r.totalLessons," leçons"]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[c.jsx(Gc,{className:"w-5 h-5"}),c.jsxs("span",{children:[r.enrolledCount," étudiants"]})]}),r.rating>0&&c.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[c.jsx(Wf,{className:"w-5 h-5 fill-yellow-400 text-yellow-400"}),c.jsx("span",{children:r.rating.toFixed(1)})]})]}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-4",children:"Ce que vous allez apprendre"}),c.jsxs("ul",{className:"space-y-3",children:[c.jsxs("li",{className:"flex items-start gap-3",children:[c.jsx(Xt,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),c.jsx("span",{className:"text-gray-700",children:"Maîtriser les concepts fondamentaux"})]}),c.jsxs("li",{className:"flex items-start gap-3",children:[c.jsx(Xt,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),c.jsx("span",{className:"text-gray-700",children:"Appliquer les connaissances dans des projets réels"})]}),c.jsxs("li",{className:"flex items-start gap-3",children:[c.jsx(Xt,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),c.jsx("span",{className:"text-gray-700",children:"Obtenir un certificat de réussite"})]})]})]})]})]}),c.jsx("div",{className:"lg:col-span-1",children:c.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 sticky top-8",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("div",{className:"text-4xl font-bold text-green-600 mb-2",children:r.isFree?"Gratuit":`${r.price} TND`}),!r.isFree&&c.jsx("p",{className:"text-sm text-gray-500",children:"Paiement unique"})]}),u?c.jsxs("button",{onClick:()=>alert("Page de leçons à venir !"),className:"w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium mb-4",children:[c.jsx(tc,{className:"w-5 h-5"}),"Commencer le cours"]}):c.jsx("div",{className:"mb-4",children:c.jsx(QI,{course:r})}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsx("h3",{className:"font-bold text-gray-900 mb-4",children:"Ce cours inclut :"}),c.jsxs("ul",{className:"space-y-3 text-sm text-gray-600",children:[c.jsxs("li",{className:"flex items-center gap-3",children:[c.jsx(tc,{className:"w-4 h-4 text-green-500"}),c.jsx("span",{children:"Vidéos à la demande"})]}),c.jsxs("li",{className:"flex items-center gap-3",children:[c.jsx(Gr,{className:"w-4 h-4 text-green-500"}),c.jsx("span",{children:"Ressources téléchargeables"})]}),c.jsxs("li",{className:"flex items-center gap-3",children:[c.jsx(Xt,{className:"w-4 h-4 text-green-500"}),c.jsx("span",{children:"Accès illimité"})]}),c.jsxs("li",{className:"flex items-center gap-3",children:[c.jsx(Wf,{className:"w-4 h-4 text-green-500"}),c.jsx("span",{children:"Certificat de réussite"})]})]})]}),r.instructor&&c.jsxs("div",{className:"border-t pt-6 mt-6",children:[c.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Instructeur"}),c.jsx("p",{className:"text-gray-600",children:r.instructor})]})]})})]})})]}):null}class _V{async createCourse(e,n){try{let r=null;n&&(r=await this.uploadThumbnail(n));const s={...e,thumbnail:r,enrolledCount:0,status:"draft",createdAt:Oe(),updatedAt:Oe()},i=await Ju(br(de,"courses"),s);return console.log("✅ Cours créé:",i.id),{success:!0,id:i.id,course:s}}catch(r){return console.error("❌ Erreur création cours:",r),{success:!1,error:r.message}}}async updateCourse(e,n,r){try{const s=Le(de,"courses",e);let i={...n};return r&&(i.thumbnail=await this.uploadThumbnail(r)),i.updatedAt=Oe(),await Nn(s,i),console.log("✅ Cours mis à jour:",e),{success:!0}}catch(s){return console.error("❌ Erreur mise à jour cours:",s),{success:!1,error:s.message}}}async deleteCourse(e){try{const n=Le(de,"courses",e);return await Nn(n,{status:"archived",archivedAt:Oe()}),console.log("✅ Cours archivé:",e),{success:!0}}catch(n){return console.error("❌ Erreur suppression cours:",n),{success:!1,error:n.message}}}async getCourseById(e){try{const n=Le(de,"courses",e),r=await Kr(n);return r.exists()?{success:!0,course:{id:r.id,...r.data()}}:{success:!1,error:"Cours introuvable"}}catch(n){return console.error("❌ Erreur récupération cours:",n),{success:!1,error:n.message}}}async getCourses(e={}){try{let n=br(de,"courses");const r=[];return e.category&&r.push(di("category","==",e.category)),e.status?r.push(di("status","==",e.status)):r.push(di("status","!=","archived")),e.level&&r.push(di("level","==",e.level)),r.push(Bf("createdAt","desc")),e.limit&&r.push(Dj(e.limit)),e.startAfter&&r.push(Lj(e.startAfter)),n=$f(n,...r),{success:!0,courses:(await Xu(n)).docs.map(o=>({id:o.id,...o.data()}))}}catch(n){return console.error("❌ Erreur récupération cours:",n),{success:!1,error:n.message,courses:[]}}}async publishCourse(e){try{const n=Le(de,"courses",e);return await Nn(n,{status:"published",publishedAt:Oe(),updatedAt:Oe()}),console.log("✅ Cours publié:",e),{success:!0}}catch(n){return console.error("❌ Erreur publication cours:",n),{success:!1,error:n.message}}}async uploadThumbnail(e){try{const n=`thumbnails/${Date.now()}_${e.name}`,r=XD(bM,n);await QD(r,e);const s=await YD(r);return console.log("✅ Thumbnail uploadée:",s),s}catch(n){throw console.error("❌ Erreur upload thumbnail:",n),n}}async duplicateCourse(e){try{const{success:n,course:r}=await this.getCourseById(e);if(!n)return{success:!1,error:"Cours introuvable"};const s={...r,title:`${r.title} (Copie)`,status:"draft",enrolledCount:0};return delete s.id,await this.createCourse(s,null)}catch(n){return console.error("❌ Erreur duplication cours:",n),{success:!1,error:n.message}}}}const Cr=new _V;class wV{async createModule(e,n){try{const r={courseId:e,...n,order:n.order||0,createdAt:Oe()};return{success:!0,id:(await Ju(br(de,"modules"),r)).id}}catch(r){return console.error("Error creating module:",r),{success:!1,error:r.message}}}async createLesson(e,n){try{const r={moduleId:e,...n,order:n.order||0,createdAt:Oe()};return{success:!0,id:(await Ju(br(de,"lessons"),r)).id}}catch(r){return console.error("Error creating lesson:",r),{success:!1,error:r.message}}}async getModulesByCourse(e){try{const n=$f(br(de,"modules"),di("courseId","==",e),Bf("order","asc"));return{success:!0,modules:(await Xu(n)).docs.map(i=>({id:i.id,...i.data()}))}}catch(n){return console.error("Error fetching modules:",n),{success:!1,error:n.message,modules:[]}}}async getLessonsByModule(e){try{const n=$f(br(de,"lessons"),di("moduleId","==",e),Bf("order","asc"));return{success:!0,lessons:(await Xu(n)).docs.map(i=>({id:i.id,...i.data()}))}}catch(n){return console.error("Error fetching lessons:",n),{success:!1,error:n.message,lessons:[]}}}async getLessonById(e){try{const n=Le(de,"lessons",e),r=await Kr(n);return r.exists()?{success:!0,lesson:{id:r.id,...r.data()}}:{success:!1,error:"Leçon introuvable"}}catch(n){return console.error("Error fetching lesson:",n),{success:!1,error:n.message}}}}const rc=new wV;class xV{async markLessonComplete(e,n,r){try{const s=Le(de,"progress",`${e}_${n}`);return(await Kr(s)).exists()?await Nn(s,{completedLessons:tI(r),lastAccessed:Oe(),updatedAt:Oe()}):await zf(s,{userId:e,courseId:n,completedLessons:[r],startedAt:Oe(),lastAccessed:Oe(),updatedAt:Oe()}),{success:!0}}catch(s){return console.error("Error marking lesson complete:",s),{success:!1,error:s.message}}}async getCourseProgress(e,n){try{const r=Le(de,"progress",`${e}_${n}`),s=await Kr(r);if(!s.exists())return{success:!0,progress:{completedLessons:[],percentage:0}};const i=s.data();return{success:!0,progress:{...i,completedLessons:i.completedLessons||[]}}}catch(r){return console.error("Error fetching progress:",r),{success:!1,error:r.message}}}calculateProgressPercentage(e,n){return n===0?0:Math.round(e/n*100)}isLessonCompleted(e,n=[]){return n.includes(e)}}const hi=new xV,EV="modulepreload",TV=function(t){return"/"+t},r0={},bt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=TV(u),u in r0)return;r0[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":EV,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,w)=>{m.addEventListener("load",g),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};var IV=function(e,n,r){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async="async"in n?!!n.async:!0,i.src=e,n.attrs&&SV(i,n.attrs),n.text&&(i.text=""+n.text);var o="onload"in i?s0:AV;o(i,r),i.onload||s0(i,r),s.appendChild(i)};function SV(t,e){for(var n in e)t.setAttribute(n,e[n])}function s0(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function AV(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}var PV=function(e){return NV(e)&&!bV(e)};function NV(t){return!!t&&typeof t=="object"}function bV(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||RV(t)}var CV=typeof Symbol=="function"&&Symbol.for,kV=CV?Symbol.for("react.element"):60103;function RV(t){return t.$$typeof===kV}function OV(t){return Array.isArray(t)?[]:{}}function Ra(t,e){return e.clone!==!1&&e.isMergeableObject(t)?$i(OV(t),t,e):t}function jV(t,e,n){return t.concat(e).map(function(r){return Ra(r,n)})}function DV(t,e){if(!e.customMerge)return $i;var n=e.customMerge(t);return typeof n=="function"?n:$i}function LV(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function i0(t){return Object.keys(t).concat(LV(t))}function YI(t,e){try{return e in t}catch{return!1}}function MV(t,e){return YI(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function VV(t,e,n){var r={};return n.isMergeableObject(t)&&i0(t).forEach(function(s){r[s]=Ra(t[s],n)}),i0(e).forEach(function(s){MV(t,s)||(YI(t,s)&&n.isMergeableObject(e[s])?r[s]=DV(s,n)(t[s],e[s],n):r[s]=Ra(e[s],n))}),r}function $i(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||jV,n.isMergeableObject=n.isMergeableObject||PV,n.cloneUnlessOtherwiseSpecified=Ra;var r=Array.isArray(e),s=Array.isArray(t),i=r===s;return i?r?n.arrayMerge(t,e,n):VV(t,e,n):Ra(e,n)}$i.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,s){return $i(r,s,n)},{})};var UV=$i,XI=UV,FV=Object.create,Qc=Object.defineProperty,$V=Object.getOwnPropertyDescriptor,BV=Object.getOwnPropertyNames,zV=Object.getPrototypeOf,qV=Object.prototype.hasOwnProperty,HV=(t,e)=>{for(var n in e)Qc(t,n,{get:e[n],enumerable:!0})},JI=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of BV(e))!qV.call(t,s)&&s!==n&&Qc(t,s,{get:()=>e[s],enumerable:!(r=$V(e,s))||r.enumerable});return t},lg=(t,e,n)=>(n=t!=null?FV(zV(t)):{},JI(!t||!t.__esModule?Qc(n,"default",{value:t,enumerable:!0}):n,t)),WV=t=>JI(Qc({},"__esModule",{value:!0}),t),ZI={};HV(ZI,{callPlayer:()=>l4,getConfig:()=>o4,getSDK:()=>i4,isBlobUrl:()=>c4,isMediaStream:()=>u4,lazy:()=>YV,omit:()=>a4,parseEndTime:()=>n4,parseStartTime:()=>t4,queryString:()=>s4,randomString:()=>r4,supportsWebKitPresentationMode:()=>d4});var Yc=WV(ZI),KV=lg(j),GV=lg(IV),QV=lg(XI);const YV=t=>KV.default.lazy(async()=>{const e=await t();return typeof e.default=="function"?e:e.default}),XV=/[?&#](?:start|t)=([0-9hms]+)/,JV=/[?&#]end=([0-9hms]+)/,Qf=/(\d+)(h|m|s)/g,ZV=/^\d+$/;function eS(t,e){if(t instanceof Array)return;const n=t.match(e);if(n){const r=n[1];if(r.match(Qf))return e4(r);if(ZV.test(r))return parseInt(r)}}function e4(t){let e=0,n=Qf.exec(t);for(;n!==null;){const[,r,s]=n;s==="h"&&(e+=parseInt(r,10)*60*60),s==="m"&&(e+=parseInt(r,10)*60),s==="s"&&(e+=parseInt(r,10)),n=Qf.exec(t)}return e}function t4(t){return eS(t,XV)}function n4(t){return eS(t,JV)}function r4(){return Math.random().toString(36).substr(2,5)}function s4(t){return Object.keys(t).map(e=>`${e}=${t[e]}`).join("&")}function gh(t){return window[t]?window[t]:window.exports&&window.exports[t]?window.exports[t]:window.module&&window.module.exports&&window.module.exports[t]?window.module.exports[t]:null}const Ws={},i4=function(e,n,r=null,s=()=>!0,i=GV.default){const o=gh(n);return o&&s(o)?Promise.resolve(o):new Promise((l,u)=>{if(Ws[e]){Ws[e].push({resolve:l,reject:u});return}Ws[e]=[{resolve:l,reject:u}];const d=f=>{Ws[e].forEach(m=>m.resolve(f))};if(r){const f=window[r];window[r]=function(){f&&f(),d(gh(n))}}i(e,f=>{f?(Ws[e].forEach(m=>m.reject(f)),Ws[e]=null):r||d(gh(n))})})};function o4(t,e){return(0,QV.default)(e.config,t.config)}function a4(t,...e){const n=[].concat(...e),r={},s=Object.keys(t);for(const i of s)n.indexOf(i)===-1&&(r[i]=t[i]);return r}function l4(t,...e){if(!this.player||!this.player[t]){let n=`ReactPlayer: ${this.constructor.displayName} player could not call %c${t}%c – `;return this.player?this.player[t]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}return this.player[t](...e)}function u4(t){return typeof window<"u"&&typeof window.MediaStream<"u"&&t instanceof window.MediaStream}function c4(t){return/^blob:/.test(t)}function d4(t=document.createElement("video")){const e=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&e}var ug=Object.defineProperty,h4=Object.getOwnPropertyDescriptor,f4=Object.getOwnPropertyNames,p4=Object.prototype.hasOwnProperty,m4=(t,e)=>{for(var n in e)ug(t,n,{get:e[n],enumerable:!0})},g4=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of f4(e))!p4.call(t,s)&&s!==n&&ug(t,s,{get:()=>e[s],enumerable:!(r=h4(e,s))||r.enumerable});return t},y4=t=>g4(ug({},"__esModule",{value:!0}),t),tS={};m4(tS,{AUDIO_EXTENSIONS:()=>cg,DASH_EXTENSIONS:()=>mS,FLV_EXTENSIONS:()=>gS,HLS_EXTENSIONS:()=>hg,MATCH_URL_DAILYMOTION:()=>dS,MATCH_URL_FACEBOOK:()=>iS,MATCH_URL_FACEBOOK_WATCH:()=>oS,MATCH_URL_KALTURA:()=>pS,MATCH_URL_MIXCLOUD:()=>hS,MATCH_URL_MUX:()=>sS,MATCH_URL_SOUNDCLOUD:()=>nS,MATCH_URL_STREAMABLE:()=>aS,MATCH_URL_TWITCH_CHANNEL:()=>cS,MATCH_URL_TWITCH_VIDEO:()=>uS,MATCH_URL_VIDYARD:()=>fS,MATCH_URL_VIMEO:()=>rS,MATCH_URL_WISTIA:()=>lS,MATCH_URL_YOUTUBE:()=>Yf,VIDEO_EXTENSIONS:()=>dg,canPlay:()=>_4});var v4=y4(tS),o0=Yc;const Yf=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,nS=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,rS=/vimeo\.com\/(?!progressive_redirect).+/,sS=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,iS=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,oS=/^https?:\/\/fb\.watch\/.+$/,aS=/streamable\.com\/([a-z0-9]+)$/,lS=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,uS=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,cS=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,dS=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,hS=/mixcloud\.com\/([^/]+\/[^/]+)/,fS=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,pS=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,cg=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,dg=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,hg=/\.(m3u8)($|\?)/i,mS=/\.(mpd)($|\?)/i,gS=/\.(flv)($|\?)/i,Xf=t=>{if(t instanceof Array){for(const e of t)if(typeof e=="string"&&Xf(e)||Xf(e.src))return!0;return!1}return(0,o0.isMediaStream)(t)||(0,o0.isBlobUrl)(t)?!0:cg.test(t)||dg.test(t)||hg.test(t)||mS.test(t)||gS.test(t)},_4={youtube:t=>t instanceof Array?t.every(e=>Yf.test(e)):Yf.test(t),soundcloud:t=>nS.test(t)&&!cg.test(t),vimeo:t=>rS.test(t)&&!dg.test(t)&&!hg.test(t),mux:t=>sS.test(t),facebook:t=>iS.test(t)||oS.test(t),streamable:t=>aS.test(t),wistia:t=>lS.test(t),twitch:t=>uS.test(t)||cS.test(t),dailymotion:t=>dS.test(t),mixcloud:t=>hS.test(t),vidyard:t=>fS.test(t),kaltura:t=>pS.test(t),file:Xf};var fg=Object.defineProperty,w4=Object.getOwnPropertyDescriptor,x4=Object.getOwnPropertyNames,E4=Object.prototype.hasOwnProperty,T4=(t,e)=>{for(var n in e)fg(t,n,{get:e[n],enumerable:!0})},I4=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of x4(e))!E4.call(t,s)&&s!==n&&fg(t,s,{get:()=>e[s],enumerable:!(r=w4(e,s))||r.enumerable});return t},S4=t=>I4(fg({},"__esModule",{value:!0}),t),yS={};T4(yS,{default:()=>P4});var A4=S4(yS),Nt=Yc,wt=v4,P4=[{key:"youtube",name:"YouTube",canPlay:wt.canPlay.youtube,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./YouTube-VWn2vFhU.js").then(t=>t.Y),[]))},{key:"soundcloud",name:"SoundCloud",canPlay:wt.canPlay.soundcloud,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./SoundCloud-BLhko3Wy.js").then(t=>t.S),[]))},{key:"vimeo",name:"Vimeo",canPlay:wt.canPlay.vimeo,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Vimeo-DI3ulcxn.js").then(t=>t.V),[]))},{key:"mux",name:"Mux",canPlay:wt.canPlay.mux,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Mux-Bo8bjVVp.js").then(t=>t.M),[]))},{key:"facebook",name:"Facebook",canPlay:wt.canPlay.facebook,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Facebook-B8Eng9Cg.js").then(t=>t.F),[]))},{key:"streamable",name:"Streamable",canPlay:wt.canPlay.streamable,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Streamable-CobOpRvr.js").then(t=>t.S),[]))},{key:"wistia",name:"Wistia",canPlay:wt.canPlay.wistia,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Wistia-pfn4QaX5.js").then(t=>t.W),[]))},{key:"twitch",name:"Twitch",canPlay:wt.canPlay.twitch,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Twitch-DIwNne2Q.js").then(t=>t.T),[]))},{key:"dailymotion",name:"DailyMotion",canPlay:wt.canPlay.dailymotion,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./DailyMotion-CPO-rIKr.js").then(t=>t.D),[]))},{key:"mixcloud",name:"Mixcloud",canPlay:wt.canPlay.mixcloud,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Mixcloud-f59qlZvZ.js").then(t=>t.M),[]))},{key:"vidyard",name:"Vidyard",canPlay:wt.canPlay.vidyard,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Vidyard-Duohe-QG.js").then(t=>t.V),[]))},{key:"kaltura",name:"Kaltura",canPlay:wt.canPlay.kaltura,lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./Kaltura-DWMNlhgf.js").then(t=>t.K),[]))},{key:"file",name:"FilePlayer",canPlay:wt.canPlay.file,canEnablePIP:t=>wt.canPlay.file(t)&&(document.pictureInPictureEnabled||(0,Nt.supportsWebKitPresentationMode)())&&!wt.AUDIO_EXTENSIONS.test(t),lazyPlayer:(0,Nt.lazy)(()=>bt(()=>import("./FilePlayer-y_SEQnch.js").then(t=>t.F),[]))}],a0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function N4(t,e){return!!(t===e||a0(t)&&a0(e))}function b4(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!N4(t[n],e[n]))return!1;return!0}function C4(t,e){e===void 0&&(e=b4);var n,r=[],s,i=!1;function o(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return i&&n===this&&e(l,r)||(s=t.apply(this,l),i=!0,n=this,r=l),s}return o}const k4=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),R4=h1(k4);var O4=typeof Element<"u",j4=typeof Map=="function",D4=typeof Set=="function",L4=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function uu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!uu(t[r],e[r]))return!1;return!0}var i;if(j4&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!uu(r.value[1],e.get(r.value[0])))return!1;return!0}if(D4&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(L4&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(O4&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&t.$$typeof)&&!uu(t[s[r]],e[s[r]]))return!1;return!0}return t!==t&&e!==e}var vS=function(e,n){try{return uu(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},_S={exports:{}},M4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V4=M4,U4=V4;function wS(){}function xS(){}xS.resetWarningCache=wS;var F4=function(){function t(r,s,i,o,l,u){if(u!==U4){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:xS,resetWarningCache:wS};return n.PropTypes=n,n};_S.exports=F4();var $4=_S.exports,B4=Object.create,Xc=Object.defineProperty,z4=Object.getOwnPropertyDescriptor,q4=Object.getOwnPropertyNames,H4=Object.getPrototypeOf,W4=Object.prototype.hasOwnProperty,K4=(t,e)=>{for(var n in e)Xc(t,n,{get:e[n],enumerable:!0})},ES=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of q4(e))!W4.call(t,s)&&s!==n&&Xc(t,s,{get:()=>e[s],enumerable:!(r=z4(e,s))||r.enumerable});return t},G4=(t,e,n)=>(n=t!=null?B4(H4(t)):{},ES(!t||!t.__esModule?Xc(n,"default",{value:t,enumerable:!0}):n,t)),Q4=t=>ES(Xc({},"__esModule",{value:!0}),t),TS={};K4(TS,{defaultProps:()=>J4,propTypes:()=>X4});var IS=Q4(TS),Y4=G4($4);const{string:Ge,bool:xt,number:Ks,array:yh,oneOfType:So,shape:Ut,object:ct,func:Ue,node:l0}=Y4.default,X4={url:So([Ge,yh,ct]),playing:xt,loop:xt,controls:xt,volume:Ks,muted:xt,playbackRate:Ks,width:So([Ge,Ks]),height:So([Ge,Ks]),style:ct,progressInterval:Ks,playsinline:xt,pip:xt,stopOnUnmount:xt,light:So([xt,Ge,ct]),playIcon:l0,previewTabIndex:Ks,previewAriaLabel:Ge,fallback:l0,oEmbedUrl:Ge,wrapper:So([Ge,Ue,Ut({render:Ue.isRequired})]),config:Ut({soundcloud:Ut({options:ct}),youtube:Ut({playerVars:ct,embedOptions:ct,onUnstarted:Ue}),facebook:Ut({appId:Ge,version:Ge,playerId:Ge,attributes:ct}),dailymotion:Ut({params:ct}),vimeo:Ut({playerOptions:ct,title:Ge}),mux:Ut({attributes:ct,version:Ge}),file:Ut({attributes:ct,tracks:yh,forceVideo:xt,forceAudio:xt,forceHLS:xt,forceSafariHLS:xt,forceDisableHls:xt,forceDASH:xt,forceFLV:xt,hlsOptions:ct,hlsVersion:Ge,dashVersion:Ge,flvVersion:Ge}),wistia:Ut({options:ct,playerId:Ge,customControls:yh}),mixcloud:Ut({options:ct}),twitch:Ut({options:ct,playerId:Ge}),vidyard:Ut({options:ct})}),onReady:Ue,onStart:Ue,onPlay:Ue,onPause:Ue,onBuffer:Ue,onBufferEnd:Ue,onEnded:Ue,onError:Ue,onDuration:Ue,onSeek:Ue,onPlaybackRateChange:Ue,onPlaybackQualityChange:Ue,onProgress:Ue,onClickPreview:Ue,onEnablePIP:Ue,onDisablePIP:Ue},Qe=()=>{},J4={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:Qe},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:Qe,onStart:Qe,onPlay:Qe,onPause:Qe,onBuffer:Qe,onBufferEnd:Qe,onEnded:Qe,onError:Qe,onDuration:Qe,onSeek:Qe,onPlaybackRateChange:Qe,onPlaybackQualityChange:Qe,onProgress:Qe,onClickPreview:Qe,onEnablePIP:Qe,onDisablePIP:Qe};var Z4=Object.create,Xa=Object.defineProperty,eU=Object.getOwnPropertyDescriptor,tU=Object.getOwnPropertyNames,nU=Object.getPrototypeOf,rU=Object.prototype.hasOwnProperty,sU=(t,e,n)=>e in t?Xa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,iU=(t,e)=>{for(var n in e)Xa(t,n,{get:e[n],enumerable:!0})},SS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of tU(e))!rU.call(t,s)&&s!==n&&Xa(t,s,{get:()=>e[s],enumerable:!(r=eU(e,s))||r.enumerable});return t},AS=(t,e,n)=>(n=t!=null?Z4(nU(t)):{},SS(!t||!t.__esModule?Xa(n,"default",{value:t,enumerable:!0}):n,t)),oU=t=>SS(Xa({},"__esModule",{value:!0}),t),Ce=(t,e,n)=>(sU(t,typeof e!="symbol"?e+"":e,n),n),PS={};iU(PS,{default:()=>Jc});var aU=oU(PS),u0=AS(j),lU=AS(vS),NS=IS,uU=Yc;const cU=5e3;class Jc extends u0.Component{constructor(){super(...arguments),Ce(this,"mounted",!1),Ce(this,"isReady",!1),Ce(this,"isPlaying",!1),Ce(this,"isLoading",!0),Ce(this,"loadOnReady",null),Ce(this,"startOnPlay",!0),Ce(this,"seekOnPlay",null),Ce(this,"onDurationCalled",!1),Ce(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),Ce(this,"getInternalPlayer",e=>this.player?this.player[e]:null),Ce(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,n=this.getSecondsLoaded(),r=this.getDuration();if(r){const s={playedSeconds:e,played:e/r};n!==null&&(s.loadedSeconds=n,s.loaded=n/r),(s.playedSeconds!==this.prevPlayed||s.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(s),this.prevPlayed=s.playedSeconds,this.prevLoaded=s.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),Ce(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:n,volume:r,muted:s}=this.props;e(),!s&&r!==null&&this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):n&&this.player.play(),this.handleDurationCheck()}),Ce(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:n,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&r!==1&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),n(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),Ce(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),Ce(this,"handleEnded",()=>{const{activePlayer:e,loop:n,onEnded:r}=this.props;e.loopOnEnded&&n&&this.seekTo(0),n||(this.isPlaying=!1,r())}),Ce(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),Ce(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),Ce(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:n,playing:r,volume:s,muted:i,playbackRate:o,pip:l,loop:u,activePlayer:d,disableDeferredLoading:f}=this.props;if(!(0,lU.default)(e.url,n)){if(this.isLoading&&!d.forceLoad&&!f&&!(0,uU.isMediaStream)(n)){console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}!e.playing&&r&&!this.isPlaying&&this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==s&&s!==null&&this.player.setVolume(s),e.muted!==i&&(i?this.player.mute():(this.player.unmute(),s!==null&&setTimeout(()=>this.player.setVolume(s)))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==u&&this.player.setLoop&&this.player.setLoop(u)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,n,r){if(!this.isReady){e!==0&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},cU));return}if(n?n==="fraction":e>0&&e<1){const i=this.player.getDuration();if(!i){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(i*e,r);return}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?u0.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}Ce(Jc,"displayName","Player");Ce(Jc,"propTypes",NS.propTypes);Ce(Jc,"defaultProps",NS.defaultProps);var dU=Object.create,Ja=Object.defineProperty,hU=Object.getOwnPropertyDescriptor,fU=Object.getOwnPropertyNames,pU=Object.getPrototypeOf,mU=Object.prototype.hasOwnProperty,gU=(t,e,n)=>e in t?Ja(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yU=(t,e)=>{for(var n in e)Ja(t,n,{get:e[n],enumerable:!0})},bS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of fU(e))!mU.call(t,s)&&s!==n&&Ja(t,s,{get:()=>e[s],enumerable:!(r=hU(e,s))||r.enumerable});return t},Za=(t,e,n)=>(n=t!=null?dU(pU(t)):{},bS(!t||!t.__esModule?Ja(n,"default",{value:t,enumerable:!0}):n,t)),vU=t=>bS(Ja({},"__esModule",{value:!0}),t),be=(t,e,n)=>(gU(t,typeof e!="symbol"?e+"":e,n),n),CS={};yU(CS,{createReactPlayer:()=>PU});var _U=vU(CS),Js=Za(j),wU=Za(XI),vh=Za(R4),c0=Za(vS),Mo=IS,kS=Yc,xU=Za(aU);const EU=(0,kS.lazy)(()=>bt(()=>import("./Preview-CXlQk0Nw.js").then(t=>t.P),[])),TU=typeof window<"u"&&window.document&&typeof document<"u",IU=typeof Td<"u"&&Td.window&&Td.window.document,SU=Object.keys(Mo.propTypes),AU=TU||IU?Js.Suspense:()=>null,Ao=[],PU=(t,e)=>{var n;return n=class extends Js.Component{constructor(){super(...arguments),be(this,"state",{showPreview:!!this.props.light}),be(this,"references",{wrapper:r=>{this.wrapper=r},player:r=>{this.player=r}}),be(this,"handleClickPreview",r=>{this.setState({showPreview:!1}),this.props.onClickPreview(r)}),be(this,"showPreview",()=>{this.setState({showPreview:!0})}),be(this,"getDuration",()=>this.player?this.player.getDuration():null),be(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),be(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),be(this,"getInternalPlayer",(r="player")=>this.player?this.player.getInternalPlayer(r):null),be(this,"seekTo",(r,s,i)=>{if(!this.player)return null;this.player.seekTo(r,s,i)}),be(this,"handleReady",()=>{this.props.onReady(this)}),be(this,"getActivePlayer",(0,vh.default)(r=>{for(const s of[...Ao,...t])if(s.canPlay(r))return s;return e||null})),be(this,"getConfig",(0,vh.default)((r,s)=>{const{config:i}=this.props;return wU.default.all([Mo.defaultProps.config,Mo.defaultProps.config[s]||{},i,i[s]||{}])})),be(this,"getAttributes",(0,vh.default)(r=>(0,kS.omit)(this.props,SU))),be(this,"renderActivePlayer",r=>{if(!r)return null;const s=this.getActivePlayer(r);if(!s)return null;const i=this.getConfig(r,s.key);return Js.default.createElement(xU.default,{...this.props,key:s.key,ref:this.references.player,config:i,activePlayer:s.lazyPlayer||s,onReady:this.handleReady})})}shouldComponentUpdate(r,s){return!(0,c0.default)(this.props,r)||!(0,c0.default)(this.state,s)}componentDidUpdate(r){const{light:s}=this.props;!r.light&&s&&this.setState({showPreview:!0}),r.light&&!s&&this.setState({showPreview:!1})}renderPreview(r){if(!r)return null;const{light:s,playIcon:i,previewTabIndex:o,oEmbedUrl:l,previewAriaLabel:u}=this.props;return Js.default.createElement(EU,{url:r,light:s,playIcon:i,previewTabIndex:o,previewAriaLabel:u,oEmbedUrl:l,onClick:this.handleClickPreview})}render(){const{url:r,style:s,width:i,height:o,fallback:l,wrapper:u}=this.props,{showPreview:d}=this.state,f=this.getAttributes(r),m=typeof u=="string"?this.references.wrapper:void 0;return Js.default.createElement(u,{ref:m,style:{...s,width:i,height:o},...f},Js.default.createElement(AU,{fallback:l},d?this.renderPreview(r):this.renderActivePlayer(r)))}},be(n,"displayName","ReactPlayer"),be(n,"propTypes",Mo.propTypes),be(n,"defaultProps",Mo.defaultProps),be(n,"addCustomPlayer",r=>{Ao.push(r)}),be(n,"removeCustomPlayers",()=>{Ao.length=0}),be(n,"canPlay",r=>{for(const s of[...Ao,...t])if(s.canPlay(r))return!0;return!1}),be(n,"canEnablePIP",r=>{for(const s of[...Ao,...t])if(s.canEnablePIP&&s.canEnablePIP(r))return!0;return!1}),n};var NU=Object.create,Zc=Object.defineProperty,bU=Object.getOwnPropertyDescriptor,CU=Object.getOwnPropertyNames,kU=Object.getPrototypeOf,RU=Object.prototype.hasOwnProperty,OU=(t,e)=>{for(var n in e)Zc(t,n,{get:e[n],enumerable:!0})},RS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of CU(e))!RU.call(t,s)&&s!==n&&Zc(t,s,{get:()=>e[s],enumerable:!(r=bU(e,s))||r.enumerable});return t},jU=(t,e,n)=>(n=t!=null?NU(kU(t)):{},RS(!t||!t.__esModule?Zc(n,"default",{value:t,enumerable:!0}):n,t)),DU=t=>RS(Zc({},"__esModule",{value:!0}),t),OS={};OU(OS,{default:()=>UU});var LU=DU(OS),Jf=jU(A4),MU=_U;const VU=Jf.default[Jf.default.length-1];var UU=(0,MU.createReactPlayer)(Jf.default,VU);const FU=h0(LU);function $U({lesson:t,onComplete:e,onNext:n,isCompleted:r}){const{user:s}=Mt(),[i,o]=j.useState(!1),[l,u]=j.useState(0),[d,f]=j.useState(r),m=w=>{u(w.played*100),w.played>.9&&!d&&g()},g=async()=>{if(!t.courseId||!s)return;(await hi.markLessonComplete(s.uid,t.courseId,t.id)).success&&(f(!0),e==null||e(t.id))};return c.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:[c.jsx("div",{className:"relative bg-black",style:{paddingTop:"56.25%"},children:t.videoUrl?c.jsx(FU,{url:t.videoUrl,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},playing:i,controls:!0,onProgress:m,onPlay:()=>o(!0),onPause:()=>o(!1)}):c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsxs("div",{className:"text-white text-center",children:[c.jsx(tc,{className:"w-16 h-16 mx-auto mb-4 opacity-50"}),c.jsx("p",{children:"Aucune vidéo disponible"})]})})}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:t.title}),c.jsx("p",{className:"text-gray-600",children:t.description})]}),d&&c.jsxs("div",{className:"ml-4 flex items-center text-green-600",children:[c.jsx(Xt,{className:"w-5 h-5 mr-1"}),c.jsx("span",{className:"text-sm font-medium",children:"Complété"})]})]}),t.videoUrl&&c.jsxs("div",{className:"mb-4",children:[c.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[c.jsx("span",{children:"Progression"}),c.jsxs("span",{children:[Math.round(l),"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-green-500 h-2 rounded-full transition-all duration-300",style:{width:`${l}%`}})})]}),c.jsxs("div",{className:"flex space-x-3",children:[!d&&c.jsxs("button",{onClick:g,className:"flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center",children:[c.jsx(Xt,{className:"w-5 h-5 mr-2"}),"Marquer comme complété"]}),n&&c.jsxs("button",{onClick:n,className:"flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center",children:["Leçon suivante",c.jsx(og,{className:"w-5 h-5 ml-2"})]})]}),t.content&&c.jsxs("div",{className:"mt-6 pt-6 border-t border-gray-200",children:[c.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Contenu de la leçon"}),c.jsx("div",{className:"prose max-w-none text-gray-700",children:t.content})]})]})]})}function BU({courseId:t,currentLessonId:e,onLessonSelect:n,userProgress:r=[],isPurchased:s=!1}){const[i,o]=j.useState([]),[l,u]=j.useState(new Set),[d,f]=j.useState(!0);j.useEffect(()=>{m()},[t]);const m=async()=>{f(!0);const N=await rc.getModulesByCourse(t);if(N.success){const C=await Promise.all(N.modules.map(async E=>{const x=await rc.getLessonsByModule(E.id);return{...E,lessons:x.lessons||[]}}));o(C),C.length>0&&u(new Set([C[0].id]))}f(!1)},g=N=>{u(C=>{const E=new Set(C);return E.has(N)?E.delete(N):E.add(N),E})},w=N=>hi.isLessonCompleted(N,r),S=N=>N.reduce((C,E)=>C+(E.duration||0),0);return d?c.jsx("div",{className:"bg-white rounded-lg shadow p-6",children:c.jsxs("div",{className:"animate-pulse space-y-4",children:[c.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),c.jsx("div",{className:"h-4 bg-gray-200 rounded"}),c.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})}):c.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:[c.jsx("div",{className:"px-6 py-4 bg-gray-50 border-b border-gray-200",children:c.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Programme du cours"})}),c.jsx("div",{className:"divide-y divide-gray-200",children:i.map((N,C)=>c.jsxs("div",{children:[c.jsx("button",{onClick:()=>g(N.id),className:"w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors",children:c.jsxs("div",{className:"flex items-center",children:[l.has(N.id)?c.jsx($M,{className:"w-5 h-5 text-gray-400 mr-2"}):c.jsx(BM,{className:"w-5 h-5 text-gray-400 mr-2"}),c.jsxs("div",{className:"text-left",children:[c.jsxs("h4",{className:"font-medium text-gray-900",children:["Module ",C+1,": ",N.title]}),c.jsxs("p",{className:"text-sm text-gray-500",children:[N.lessons.length," leçon",N.lessons.length>1?"s":"",S(N.lessons)>0&&c.jsxs("span",{children:[" · ",S(N.lessons)," min"]})]})]})]})}),l.has(N.id)&&c.jsx("div",{className:"bg-gray-50",children:N.lessons.map((E,x)=>{const y=w(E.id),b=E.id===e,L=s||E.isFree;return c.jsxs("button",{onClick:()=>L&&n(E),disabled:!L,className:`w-full px-6 py-3 pl-14 flex items-center justify-between hover:bg-gray-100 transition-colors ${b?"bg-green-50 border-l-4 border-green-500":""} ${L?"":"opacity-50 cursor-not-allowed"}`,children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{className:"mr-3",children:L?y?c.jsx(Xt,{className:"w-4 h-4 text-green-500"}):c.jsx(tc,{className:"w-4 h-4 text-gray-400"}):c.jsx(ec,{className:"w-4 h-4 text-gray-400"})}),c.jsxs("div",{className:"text-left",children:[c.jsxs("p",{className:`text-sm ${b?"font-medium text-green-700":"text-gray-700"}`,children:[x+1,". ",E.title]}),E.duration&&c.jsxs("p",{className:"text-xs text-gray-500",children:[E.duration," min"]})]})]}),E.isFree&&c.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Gratuit"})]},E.id)})})]},N.id))}),i.length===0&&c.jsx("div",{className:"px-6 py-8 text-center text-gray-500",children:c.jsx("p",{children:"Aucun contenu disponible pour l'instant"})})]})}function zU(){const{courseId:t}=Rx(),e=yn(),{user:n,userProfile:r}=Mt(),[s,i]=j.useState(null),[o,l]=j.useState(null),[u,d]=j.useState([]),[f,m]=j.useState("overview"),[g,w]=j.useState(!0),[S,N]=j.useState(!1),[C,E]=j.useState([]);j.useEffect(()=>{x()},[t,n]);const x=async()=>{var k;if(!t||!n)return;w(!0);const T=await Cr.getCourseById(t);T.success&&i(T.course);const _=(k=r==null?void 0:r.purchasedCourses)==null?void 0:k.includes(t);N(_);const A=await hi.getCourseProgress(n.uid,t);A.success&&d(A.progress.completedLessons||[]);const I=await rc.getModulesByCourse(t);if(I.success){const R=[];for(const P of I.modules){const We=await rc.getLessonsByModule(P.id);We.success&&R.push(...We.lessons.map(Rn=>({...Rn,moduleId:P.id,courseId:t})))}if(E(R),R.length>0&&!o){const P=R.find(We=>!hi.isLessonCompleted(We.id,A.progress.completedLessons||[]));l(P||R[0])}}w(!1)},y=T=>{d(_=>[..._,T])},b=()=>{if(!o||C.length===0)return;const T=C.findIndex(_=>_.id===o.id);T<C.length-1&&l(C[T+1])},L=()=>C.length===0?0:hi.calculateProgressPercentage(u.length,C.length);if(g)return c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"})});if(!s)return c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Cours introuvable"}),c.jsx("button",{onClick:()=>e("/my-courses"),className:"text-green-600 hover:text-green-700",children:"Retour à mes cours"})]})});if(!S)return c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Accès refusé"}),c.jsx("p",{className:"text-gray-600 mb-4",children:"Vous devez acheter ce cours pour y accéder"}),c.jsx("button",{onClick:()=>e(`/courses/${t}`),className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600",children:"Voir le cours"})]})});const V=[{id:"overview",name:"Aperçu",icon:Gr},{id:"resources",name:"Ressources",icon:HM},{id:"qna",name:"Q&A",icon:KM}];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("div",{className:"bg-white shadow-sm sticky top-0 z-10",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("button",{onClick:()=>e("/my-courses"),className:"flex items-center text-gray-600 hover:text-gray-900",children:[c.jsx(Ca,{className:"w-5 h-5 mr-2"}),"Retour à mes cours"]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("div",{className:"text-sm text-gray-600",children:["Progression: ",L(),"%"]}),c.jsx("div",{className:"w-32 h-2 bg-gray-200 rounded-full",children:c.jsx("div",{className:"h-2 bg-green-500 rounded-full transition-all",style:{width:`${L()}%`}})})]})]})})}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[o&&c.jsx($U,{lesson:o,onComplete:y,onNext:b,isCompleted:hi.isLessonCompleted(o.id,u)}),c.jsxs("div",{className:"bg-white rounded-lg shadow",children:[c.jsx("div",{className:"border-b border-gray-200",children:c.jsx("nav",{className:"flex -mb-px",children:V.map(T=>{const _=T.icon;return c.jsxs("button",{onClick:()=>m(T.id),className:`flex items-center px-6 py-3 border-b-2 font-medium text-sm ${f===T.id?"border-green-500 text-green-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:[c.jsx(_,{className:"w-4 h-4 mr-2"}),T.name]},T.id)})})}),c.jsxs("div",{className:"p-6",children:[f==="overview"&&c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-3",children:"À propos de ce cours"}),c.jsx("p",{className:"text-gray-700 mb-4",children:s.description}),s.outcomes&&c.jsxs("div",{className:"mb-4",children:[c.jsx("h4",{className:"font-semibold mb-2",children:"Ce que vous allez apprendre:"}),c.jsx("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:s.outcomes.split(`
`).filter(Boolean).map((T,_)=>c.jsx("li",{children:T},_))})]})]}),f==="resources"&&c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Ressources du cours"}),c.jsx("p",{className:"text-gray-600",children:"Aucune ressource disponible pour l'instant"})]}),f==="qna"&&c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Questions et Réponses"}),c.jsx("p",{className:"text-gray-600",children:"Section Q&A à venir"})]})]})]})]}),c.jsx("div",{className:"lg:col-span-1",children:c.jsx(BU,{courseId:t,currentLessonId:o==null?void 0:o.id,onLessonSelect:l,userProgress:u,isPurchased:S})})]})})]})}function qU(){const{userProfile:t}=Mt(),[e,n]=j.useState([]),[r,s]=j.useState(!0);return j.useEffect(()=>{setTimeout(()=>{n([{id:"1",title:"Introduction à React",instructor:"Ahmed Ben Salem",progress:65,totalLessons:12,completedLessons:8,lastAccessed:"2024-01-15",image:"/assets/images/default-course.png"},{id:"2",title:"JavaScript Avancé",instructor:"Fatma Aloui",progress:30,totalLessons:15,completedLessons:5,lastAccessed:"2024-01-10",image:"/assets/images/default-course.png"}]),s(!1)},1e3)},[]),r?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"})}):c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("div",{className:"bg-white shadow-sm",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Mes Cours"}),c.jsx("p",{className:"mt-2 text-gray-600",children:"Continuez votre apprentissage"})]})}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.length===0?c.jsxs("div",{className:"text-center py-12",children:[c.jsx(Gr,{className:"mx-auto h-12 w-12 text-gray-400"}),c.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"Aucun cours"}),c.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Commencez par explorer nos cours disponibles."}),c.jsx("div",{className:"mt-6",children:c.jsx(Xe,{to:"/courses",className:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700",children:"Explorer les cours"})})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(i=>c.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[c.jsx("img",{src:i.image,alt:i.title,className:"w-full h-48 object-cover"}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:i.title}),c.jsxs("p",{className:"text-gray-600 mb-4",children:["Par ",i.instructor]}),c.jsxs("div",{className:"mb-4",children:[c.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[c.jsx("span",{children:"Progression"}),c.jsxs("span",{children:[i.progress,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-green-500 h-2 rounded-full transition-all duration-300",style:{width:`${i.progress}%`}})})]}),c.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 mb-4",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Xt,{className:"w-4 h-4 mr-1 text-green-500"}),c.jsxs("span",{children:[i.completedLessons,"/",i.totalLessons," leçons"]})]}),c.jsxs("div",{className:"flex items-center",children:[c.jsx(ka,{className:"w-4 h-4 mr-1"}),c.jsxs("span",{children:["Dernière fois: ",i.lastAccessed]})]})]}),c.jsxs(Xe,{to:`/course/${i.id}/learn`,className:"w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center",children:[c.jsx(YM,{className:"w-4 h-4 mr-2"}),"Continuer"]})]})]},i.id))})})]})}function HU(){const[t]=BN(),e=yn(),[n,r]=j.useState(!0),[s,i]=j.useState(null),[o,l]=j.useState(null),[u,d]=j.useState(0),f=10,m=j.useRef(null),g=j.useRef(!1),w=j.useRef(0),S=t.get("payment_id"),N=S==null?void 0:S.split("?")[0],C=j.useCallback(async()=>{if(g.current)return;if(!N){l("ID de paiement manquant"),r(!1),g.current=!0;return}w.current+=1;const E=w.current;if(console.log(`🔄 Tentative ${E}/${f}`),d(E),E>f){console.log("⛔ Limite de tentatives atteinte (dépassée)"),l("Le paiement est toujours en attente après plusieurs tentatives. Veuillez vérifier votre email ou contacter le support."),r(!1),g.current=!0;return}if(g.current||(await new Promise(y=>setTimeout(y,3e3)),g.current))return;const x=await GI.verifyPayment(N);if(console.log("📊 Résultat vérification:",x),!g.current)if(x.success)if(i(x.data),x.status==="completed")console.log("✅ Paiement confirmé !"),r(!1),g.current=!0,m.current&&clearTimeout(m.current);else if(x.status==="pending")if(w.current>=f)console.log("⛔ Limite de tentatives atteinte (pending)"),l("Le paiement est toujours en attente après plusieurs tentatives. Veuillez vérifier votre email ou contacter le support."),r(!1),g.current=!0,m.current&&clearTimeout(m.current);else if(w.current>=3){console.log("🔄 Tentative de synchronisation avec le backend...");try{let y="https://plateforme-educative.onrender.com";if(y&&y.includes("/"))try{const b=new URL(y);b.pathname!=="/"&&!y.includes("/sync-payment")&&(y=`${b.origin}`)}catch{console.warn("⚠️ URL backend invalide, utilisation directe:",y)}if(y){const b=y.endsWith("/")?y.slice(0,-1):y;let L=`${b}/sync-payment`;const V="https://plateforme-educative.onrender.com";let T=null;if(V&&V.includes("/")&&V!==b)try{const I=new URL(V);if(I.pathname&&I.pathname!=="/"){const k=I.pathname.endsWith("/")?I.pathname.slice(0,-1):I.pathname;T=`${I.origin}${k}/sync-payment`}}catch{}console.log("🔗 URL backend pour sync:",L),T&&console.log("🔗 URL fallback pour sync:",T);const _=I=>fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({paymentId:N})});(T?_(L).catch(()=>(console.log("⚠️ Première tentative échouée, essai avec URL fallback..."),_(T))):_(L)).then(I=>I.ok?I.json():(console.error("❌ Erreur HTTP sync:",I.status,I.statusText),null)).then(I=>{I&&I.success?(console.log("✅ Paiement synchronisé, rechargement..."),setTimeout(()=>window.location.reload(),1e3),g.current=!0):(console.warn("⚠️ Synchronisation échouée:",I),!g.current&&w.current<f&&(console.log("⏳ Paiement toujours en attente, nouvelle tentative dans 3s..."),m.current=setTimeout(C,3e3)))}).catch(I=>{console.error("❌ Erreur synchronisation:",I),console.error("   Type:",I.name),console.error("   Message:",I.message),!g.current&&w.current<f&&(console.log("⏳ Paiement toujours en attente, nouvelle tentative dans 3s..."),m.current=setTimeout(C,3e3))})}else!g.current&&w.current<f&&(console.log("⏳ Paiement toujours en attente, nouvelle tentative dans 3s..."),m.current=setTimeout(C,3e3))}catch(y){console.warn("⚠️ Erreur synchronisation:",y),!g.current&&w.current<f&&(console.log("⏳ Paiement toujours en attente, nouvelle tentative dans 3s..."),m.current=setTimeout(C,3e3))}}else console.log("⏳ Paiement toujours en attente, nouvelle tentative dans 3s..."),m.current=setTimeout(C,3e3);else x.status==="failed"?(l("Le paiement a échoué"),r(!1),g.current=!0,m.current&&clearTimeout(m.current)):w.current>=f?(l("Le paiement a un statut inconnu. Veuillez contacter le support."),r(!1),g.current=!0,m.current&&clearTimeout(m.current)):(console.log("❓ Statut inconnu:",x.status,"- Nouvelle tentative..."),m.current=setTimeout(C,3e3));else console.error("❌ Erreur vérification:",x.error),l(x.error||"Erreur lors de la vérification du paiement"),r(!1),g.current=!0,m.current&&clearTimeout(m.current)},[N,f]);return j.useEffect(()=>(g.current=!1,w.current=0,d(0),m.current&&(clearTimeout(m.current),m.current=null),N?(console.log("🔍 Vérification du paiement:",N),C()):(l("ID de paiement manquant"),r(!1),g.current=!0),()=>{m.current&&(clearTimeout(m.current),m.current=null),g.current=!0}),[N,C]),n?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center",children:[c.jsx(ag,{className:"w-16 h-16 animate-spin text-green-500 mx-auto mb-4"}),c.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Vérification du paiement..."}),c.jsx("p",{className:"text-gray-600 mb-2",children:"Veuillez patienter pendant que nous confirmons votre paiement"}),u>0&&c.jsxs("p",{className:"text-sm text-gray-500",children:["Tentative ",u,"/",f,"..."]})]})}):o?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center",children:[c.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx("span",{className:"text-3xl",children:"❌"})}),c.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Erreur de paiement"}),c.jsx("p",{className:"text-gray-600 mb-6",children:o}),c.jsx("button",{onClick:()=>e("/courses"),className:"w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",children:"Retour aux cours"})]})}):c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center",children:[c.jsx(Xt,{className:"w-16 h-16 text-green-500 mx-auto mb-4"}),c.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Paiement réussi ! 🎉"}),c.jsxs("p",{className:"text-gray-600 mb-6",children:["Votre paiement de ",c.jsxs("strong",{children:[s==null?void 0:s.amount," TND"]})," a été confirmé avec succès."]}),c.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left",children:[c.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Référence :"}),c.jsx("p",{className:"font-mono text-sm text-gray-800",children:s==null?void 0:s.paymeeTransactionId})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("button",{onClick:()=>e("/my-courses"),className:"w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium",children:["Accéder à mes cours",c.jsx(og,{className:"w-5 h-5"})]}),c.jsx("button",{onClick:()=>e("/courses"),className:"w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition",children:"Découvrir d'autres cours"})]})]})})}function WU(){const t=yn();return c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center",children:[c.jsx(rV,{className:"w-16 h-16 text-orange-500 mx-auto mb-4"}),c.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Paiement annulé"}),c.jsx("p",{className:"text-gray-600 mb-8",children:"Vous avez annulé le processus de paiement. Aucun montant n'a été débité."}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("button",{onClick:()=>t(-1),className:"w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium",children:[c.jsx(Ca,{className:"w-5 h-5"}),"Réessayer le paiement"]}),c.jsx("button",{onClick:()=>t("/courses"),className:"w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition",children:"Retour aux cours"})]})]})})}function KU({onCreate:t}){const[e,n]=j.useState(""),[r,s]=j.useState(""),i=o=>{if(o.preventDefault(),!e.trim())return;const l={id:Date.now().toString(),title:e.trim(),body:r.trim(),time:new Date().toLocaleString()};t&&t(l),n(""),s("")};return c.jsxs("form",{onSubmit:i,className:"bg-white p-4 rounded-md shadow-sm",children:[c.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Create admin content"}),c.jsx("div",{className:"mb-2",children:c.jsx("input",{value:e,onChange:o=>n(o.target.value),placeholder:"Title",className:"w-full border px-3 py-2 rounded"})}),c.jsx("div",{className:"mb-3",children:c.jsx("textarea",{value:r,onChange:o=>s(o.target.value),placeholder:"Content",className:"w-full border px-3 py-2 rounded",rows:3})}),c.jsx("div",{className:"text-right",children:c.jsx("button",{type:"submit",className:"bg-purple-600 text-white px-4 py-2 rounded",children:"Create"})})]})}function GU({notification:t}){return c.jsx("div",{className:"p-3 border-b last:border-b-0 hover:bg-gray-50",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-900",children:t.title}),c.jsx("div",{className:"text-xs text-gray-600",children:t.body})]}),c.jsx("div",{className:"text-xs text-gray-400",children:t.time})]})})}function QU({items:t=[]}){return t.length?c.jsx("div",{className:"bg-white rounded-md shadow-sm overflow-hidden",children:t.map(e=>c.jsx(GU,{notification:e},e.id))}):c.jsx("div",{className:"p-4 text-sm text-gray-500",children:"No notifications"})}function YU({onEdit:t,onAddNew:e}){const[n,r]=j.useState([]),[s,i]=j.useState(!0),[o,l]=j.useState(""),[u,d]=j.useState("all"),[f,m]=j.useState("");j.useEffect(()=>{g()},[u,f]);const g=async()=>{i(!0);const y={};u!=="all"&&(y.category=u),f&&(y.status=f);const b=await Cr.getCourses(y);b.success&&r(b.courses),i(!1)},w=async y=>{if(!confirm("Êtes-vous sûr de vouloir archiver ce cours ?"))return;(await Cr.deleteCourse(y)).success&&g()},S=async y=>{(await Cr.duplicateCourse(y)).success&&g()},N=async y=>{(await Cr.publishCourse(y)).success&&g()},C=n.filter(y=>{var b,L;return((b=y.title)==null?void 0:b.toLowerCase().includes(o.toLowerCase()))||((L=y.description)==null?void 0:L.toLowerCase().includes(o.toLowerCase()))}),E=[{value:"all",label:"Toutes les catégories"},{value:"programming",label:"Programmation"},{value:"design",label:"Design"},{value:"business",label:"Business"},{value:"marketing",label:"Marketing"},{value:"languages",label:"Langues"},{value:"science",label:"Sciences"},{value:"other",label:"Autre"}],x=y=>{const b={draft:"bg-gray-100 text-gray-700",published:"bg-green-100 text-green-700",archived:"bg-red-100 text-red-700"},V={draft:ka,published:Xt,archived:MM}[y]||ka;return c.jsxs("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${b[y]||b.draft}`,children:[c.jsx(V,{className:"w-3 h-3 mr-1"}),y==="draft"?"Brouillon":y==="published"?"Publié":"Archivé"]})};return c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Gestion des Cours"}),c.jsxs("button",{onClick:e,className:"bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center",children:[c.jsx(XM,{className:"w-4 h-4 mr-2"}),"Nouveau Cours"]})]}),c.jsx("div",{className:"bg-white p-4 rounded-lg shadow",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx(KI,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),c.jsx("input",{type:"text",placeholder:"Rechercher un cours...",value:o,onChange:y=>l(y.target.value),className:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),c.jsx("select",{value:u,onChange:y=>d(y.target.value),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",children:E.map(y=>c.jsx("option",{value:y.value,children:y.label},y.value))}),c.jsxs("select",{value:f,onChange:y=>m(y.target.value),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",children:[c.jsx("option",{value:"",children:"Tous les statuts"}),c.jsx("option",{value:"draft",children:"Brouillon"}),c.jsx("option",{value:"published",children:"Publié"}),c.jsx("option",{value:"archived",children:"Archivé"})]})]})}),s?c.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"}),c.jsx("p",{className:"text-gray-600 mt-4",children:"Chargement des cours..."})]}):C.length===0?c.jsx("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:c.jsx("p",{className:"text-gray-600",children:"Aucun cours trouvé"})}):c.jsx("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:c.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[c.jsx("thead",{className:"bg-gray-50",children:c.jsxs("tr",{children:[c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cours"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Catégorie"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Prix"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Inscrits"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Statut"}),c.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),c.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:C.map(y=>c.jsxs("tr",{className:"hover:bg-gray-50",children:[c.jsx("td",{className:"px-6 py-4",children:c.jsxs("div",{className:"flex items-center",children:[y.thumbnail&&c.jsx("img",{src:y.thumbnail,alt:y.title,className:"w-12 h-12 rounded object-cover mr-3"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-900",children:y.title}),c.jsx("div",{className:"text-sm text-gray-500",children:y.level==="beginner"?"Débutant":y.level==="intermediate"?"Intermédiaire":y.level==="advanced"?"Avancé":"Tous niveaux"})]})]})}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:y.category}),c.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium",children:[y.price," TND"]}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:y.enrolledCount||0}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:x(y.status)}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:c.jsxs("div",{className:"flex justify-end space-x-2",children:[y.status==="draft"&&c.jsx("button",{onClick:()=>N(y.id),className:"text-green-600 hover:text-green-900",title:"Publier",children:c.jsx(Xt,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>t(y),className:"text-blue-600 hover:text-blue-900",title:"Modifier",children:c.jsx(GM,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>S(y.id),className:"text-gray-600 hover:text-gray-900",title:"Dupliquer",children:c.jsx(zM,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>w(y.id),className:"text-red-600 hover:text-red-900",title:"Archiver",children:c.jsx(tV,{className:"w-5 h-5"})})]})})]},y.id))})]})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Total"}),c.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.length})]}),c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Publiés"}),c.jsx("p",{className:"text-2xl font-bold text-green-600",children:n.filter(y=>y.status==="published").length})]}),c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Brouillons"}),c.jsx("p",{className:"text-2xl font-bold text-gray-600",children:n.filter(y=>y.status==="draft").length})]}),c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Total Inscrits"}),c.jsx("p",{className:"text-2xl font-bold text-blue-600",children:n.reduce((y,b)=>y+(b.enrolledCount||0),0)})]})]})]})}function XU({courseId:t=null,onSave:e,onCancel:n}){const[r,s]=j.useState(!1),[i,o]=j.useState(null),[l,u]=j.useState(null),[d,f]=j.useState(null),[m,g]=j.useState({title:"",description:"",shortDescription:"",category:"programming",level:"beginner",price:0,duration:"",language:"fr",instructor:"",requirements:"",outcomes:"",videoUrl:"",status:"draft"});j.useEffect(()=>{t&&w()},[t]);const w=async()=>{s(!0);const y=await Cr.getCourseById(t);y.success?(g(y.course),y.course.thumbnail&&u(y.course.thumbnail)):o(y.error),s(!1)},S=y=>{const{name:b,value:L}=y.target;g(V=>({...V,[b]:L}))},N=y=>{const b=y.target.files[0];if(b){f(b);const L=new FileReader;L.onloadend=()=>{u(L.result)},L.readAsDataURL(b)}},C=async y=>{y.preventDefault(),s(!0),o(null);try{let b;t?b=await Cr.updateCourse(t,m,d):b=await Cr.createCourse(m,d),b.success?e==null||e(b):o(b.error)}catch(b){o(b.message)}finally{s(!1)}},E=[{value:"programming",label:"Programmation"},{value:"design",label:"Design"},{value:"business",label:"Business"},{value:"marketing",label:"Marketing"},{value:"languages",label:"Langues"},{value:"science",label:"Sciences"},{value:"other",label:"Autre"}],x=[{value:"beginner",label:"Débutant"},{value:"intermediate",label:"Intermédiaire"},{value:"advanced",label:"Avancé"},{value:"all",label:"Tous niveaux"}];return c.jsxs("form",{onSubmit:C,className:"bg-white rounded-lg shadow p-6 space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t?"Modifier le cours":"Nouveau cours"}),c.jsx("button",{type:"button",onClick:n,className:"text-gray-400 hover:text-gray-600",children:c.jsx(Kf,{className:"w-6 h-6"})})]}),i&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded",children:i}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Titre du cours *"}),c.jsx("input",{type:"text",name:"title",value:m.title,onChange:S,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Ex: Maîtriser React.js de A à Z"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Description courte *"}),c.jsx("input",{type:"text",name:"shortDescription",value:m.shortDescription,onChange:S,required:!0,maxLength:150,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Résumé en une ligne (max 150 caractères)"}),c.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[m.shortDescription.length,"/150 caractères"]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Description complète *"}),c.jsx("textarea",{name:"description",value:m.description,onChange:S,required:!0,rows:5,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Décrivez en détail ce que les étudiants vont apprendre..."})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Catégorie *"}),c.jsx("select",{name:"category",value:m.category,onChange:S,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",children:E.map(y=>c.jsx("option",{value:y.value,children:y.label},y.value))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Niveau *"}),c.jsx("select",{name:"level",value:m.level,onChange:S,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",children:x.map(y=>c.jsx("option",{value:y.value,children:y.label},y.value))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Prix (TND) *"}),c.jsx("input",{type:"number",name:"price",value:m.price,onChange:S,required:!0,min:"0",step:"0.01",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"0.00"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Durée"}),c.jsx("input",{type:"text",name:"duration",value:m.duration,onChange:S,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Ex: 4 semaines, 20 heures"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Instructeur"}),c.jsx("input",{type:"text",name:"instructor",value:m.instructor,onChange:S,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Nom de l'instructeur"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Langue"}),c.jsxs("select",{name:"language",value:m.language,onChange:S,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",children:[c.jsx("option",{value:"fr",children:"Français"}),c.jsx("option",{value:"ar",children:"Arabe"}),c.jsx("option",{value:"en",children:"Anglais"})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Image de couverture"}),c.jsxs("div",{className:"flex items-start space-x-4",children:[l&&c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:l,alt:"Preview",className:"w-32 h-32 object-cover rounded-lg"}),c.jsx("button",{type:"button",onClick:()=>{u(null),f(null)},className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600",children:c.jsx(Kf,{className:"w-4 h-4"})})]}),c.jsxs("label",{className:"flex flex-col items-center px-4 py-6 bg-white text-gray-500 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-green-500 hover:text-green-500",children:[c.jsx(nV,{className:"w-8 h-8 mb-2"}),c.jsx("span",{className:"text-sm",children:"Choisir une image"}),c.jsx("input",{type:"file",accept:"image/*",onChange:N,className:"hidden"})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"URL Vidéo de démonstration (YouTube/Vimeo)"}),c.jsx("input",{type:"url",name:"videoUrl",value:m.videoUrl,onChange:S,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"https://youtube.com/watch?v=..."})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Prérequis"}),c.jsx("textarea",{name:"requirements",value:m.requirements,onChange:S,rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Quels sont les prérequis pour suivre ce cours ? (un par ligne)"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Objectifs d'apprentissage"}),c.jsx("textarea",{name:"outcomes",value:m.outcomes,onChange:S,rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Que vont apprendre les étudiants ? (un par ligne)"})]}),c.jsxs("div",{className:"flex justify-end space-x-3 pt-4 border-t",children:[c.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50",children:"Annuler"}),c.jsxs("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 flex items-center",children:[c.jsx(JM,{className:"w-4 h-4 mr-2"}),r?"Enregistrement...":"Enregistrer"]})]})]})}function JU({onSelectDetails:t}){const[e,n]=j.useState([]),[r,s]=j.useState(!0),[i,o]=j.useState(""),[l,u]=j.useState("all");j.useEffect(()=>{d()},[]);const d=async()=>{try{s(!0);const w=(await Xu(br(de,"users"))).docs.map(S=>({id:S.id,...S.data()}));n(w)}catch(g){console.error("Error loading users:",g)}finally{s(!1)}},f=async(g,w)=>{try{const S=w==="admin"?"student":"admin",N=Le(de,"users",g);await Nn(N,{role:S}),d()}catch(S){console.error("Error updating role:",S),alert("Erreur lors de la mise à jour du rôle")}},m=e.filter(g=>{var N,C;const w=((N=g.displayName)==null?void 0:N.toLowerCase().includes(i.toLowerCase()))||((C=g.email)==null?void 0:C.toLowerCase().includes(i.toLowerCase())),S=l==="all"||g.role===l;return w&&S});return c.jsxs("div",{className:"space-y-4",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Gestion des Utilisateurs"}),c.jsx("div",{className:"bg-white p-4 rounded-lg shadow",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx(KI,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),c.jsx("input",{type:"text",placeholder:"Rechercher un utilisateur...",value:i,onChange:g=>o(g.target.value),className:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),c.jsxs("select",{value:l,onChange:g=>u(g.target.value),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",children:[c.jsx("option",{value:"all",children:"Tous les rôles"}),c.jsx("option",{value:"student",children:"Étudiants"}),c.jsx("option",{value:"admin",children:"Administrateurs"})]})]})}),r?c.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"}),c.jsx("p",{className:"text-gray-600 mt-4",children:"Chargement des utilisateurs..."})]}):m.length===0?c.jsx("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:c.jsx("p",{className:"text-gray-600",children:"Aucun utilisateur trouvé"})}):c.jsx("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:c.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[c.jsx("thead",{className:"bg-gray-50",children:c.jsxs("tr",{children:[c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Utilisateur"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Rôle"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cours achetés"}),c.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Inscription"}),c.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),c.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:m.map(g=>{var w,S,N;return c.jsxs("tr",{className:"hover:bg-gray-50",children:[c.jsx("td",{className:"px-6 py-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{className:"flex-shrink-0 h-10 w-10",children:g.photoURL?c.jsx("img",{src:g.photoURL,alt:g.displayName,className:"h-10 w-10 rounded-full"}):c.jsx("div",{className:"h-10 w-10 rounded-full bg-green-100 flex items-center justify-center",children:c.jsx(nc,{className:"w-6 h-6 text-green-600"})})}),c.jsx("div",{className:"ml-4",children:c.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.displayName||"Sans nom"})})]})}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:g.email}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:c.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${g.role==="admin"?"bg-purple-100 text-purple-800":"bg-blue-100 text-blue-800"}`,children:g.role==="admin"?c.jsxs(c.Fragment,{children:[c.jsx(eV,{className:"w-3 h-3 mr-1"}),"Admin"]}):c.jsxs(c.Fragment,{children:[c.jsx(Gr,{className:"w-3 h-3 mr-1"}),"Étudiant"]})})}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:((w=g.purchasedCourses)==null?void 0:w.length)||0}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx(FM,{className:"w-4 h-4 mr-1"}),((N=(S=g.createdAt)==null?void 0:S.toDate)==null?void 0:N.call(S).toLocaleDateString())||"N/A"]})}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:c.jsx("button",{onClick:()=>f(g.id,g.role),className:`${g.role==="admin"?"text-red-600 hover:text-red-900":"text-green-600 hover:text-green-900"}`,children:g.role==="admin"?"Révoquer admin":"Promouvoir admin"})})]},g.id)})})]})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Total Utilisateurs"}),c.jsx("p",{className:"text-2xl font-bold text-gray-900",children:e.length})]}),c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Étudiants"}),c.jsx("p",{className:"text-2xl font-bold text-blue-600",children:e.filter(g=>g.role==="student").length})]}),c.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Administrateurs"}),c.jsx("p",{className:"text-2xl font-bold text-purple-600",children:e.filter(g=>g.role==="admin").length})]})]})]})}function d0(){const{userProfile:t}=Mt(),[e,n]=j.useState("overview"),[r,s]=j.useState(!1),[i,o]=j.useState(null),[l,u]=j.useState([]),d=[{id:"overview",name:"Vue d'ensemble",icon:UM},{id:"courses",name:"Cours",icon:Gr},{id:"users",name:"Utilisateurs",icon:Gc},{id:"settings",name:"Paramètres",icon:ZM}],f=[{name:"Total Utilisateurs",value:"1,234",change:"+12%",changeType:"positive"},{name:"Cours Actifs",value:"45",change:"+3",changeType:"positive"},{name:"Revenus ce mois",value:"€12,345",change:"+8%",changeType:"positive"},{name:"Taux de completion",value:"78%",change:"+2%",changeType:"positive"}],m=()=>{switch(e){case"overview":return c.jsxs("div",{className:"space-y-6",children:[c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:f.map(g=>c.jsx("div",{className:"bg-white p-6 rounded-lg shadow",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm font-medium text-gray-600",children:g.name}),c.jsx("p",{className:"text-2xl font-bold text-gray-900",children:g.value})]}),c.jsx("div",{className:`text-sm font-medium ${g.changeType==="positive"?"text-green-600":"text-red-600"}`,children:g.change})]})},g.name))}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsx("div",{className:"md:col-span-2",children:c.jsx(KU,{onCreate:g=>u(w=>[g,...w])})}),c.jsx("div",{children:c.jsxs("div",{className:"bg-white rounded-lg shadow",children:[c.jsx("div",{className:"px-6 py-4 border-b border-gray-200",children:c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Notifications récentes"})}),c.jsx("div",{className:"p-4",children:c.jsx(QU,{items:l})})]})})]})]});case"courses":return c.jsx("div",{className:"space-y-6",children:r?c.jsx(XU,{courseId:i==null?void 0:i.id,onSave:()=>{s(!1),o(null)},onCancel:()=>{s(!1),o(null)}}):c.jsx(YU,{onEdit:g=>{o(g),s(!0)},onAddNew:()=>{o(null),s(!0)}})});case"users":return c.jsx(JU,{});case"settings":return c.jsxs("div",{className:"space-y-6",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Paramètres"}),c.jsx("div",{className:"bg-white rounded-lg shadow",children:c.jsx("div",{className:"p-6",children:c.jsx("p",{className:"text-gray-600",children:"Paramètres de l'application à implémenter"})})})]});default:return null}};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("div",{className:"bg-white shadow-sm",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:c.jsx("div",{className:"flex items-center justify-between",children:c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Tableau de bord Admin"}),c.jsxs("p",{className:"text-gray-600",children:["Bienvenue, ",t==null?void 0:t.displayName]})]})})})}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"flex space-x-8",children:[c.jsx("div",{className:"w-64",children:c.jsx("nav",{className:"space-y-1",children:d.map(g=>{const w=g.icon;return c.jsxs("button",{onClick:()=>n(g.id),className:`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${e===g.id?"bg-green-100 text-green-700":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:[c.jsx(w,{className:"w-5 h-5 mr-3"}),g.name]},g.id)})})}),c.jsx("div",{className:"flex-1",children:m()})]})})]})}function ZU(){const{currentUser:t,userProfile:e,loading:n}=Mt(),r=async()=>{if("serviceWorker"in navigator){const s=await navigator.serviceWorker.getRegistrations();for(const i of s)try{await i.unregister()}catch{}window.location.reload(!0)}else alert("ServiceWorker not supported in this browser")};return c.jsx("div",{style:{position:"fixed",right:12,top:12,zIndex:9999},children:c.jsxs("div",{className:"bg-white border rounded p-3 shadow text-xs w-64",children:[c.jsx("div",{className:"font-semibold text-sm mb-1",children:"Admin Debug"}),c.jsxs("div",{children:["loading: ",c.jsx("strong",{children:String(n)})]}),c.jsxs("div",{children:["uid: ",c.jsx("strong",{children:(t==null?void 0:t.uid)??"null"})]}),c.jsxs("div",{children:["role: ",c.jsx("strong",{children:(e==null?void 0:e.role)??"null"})]}),c.jsxs("div",{style:{marginTop:8},children:[c.jsx("button",{className:"bg-gray-200 px-2 py-1 rounded mr-2",onClick:()=>window.location.reload(!0),children:"Hard reload"}),c.jsx("button",{className:"bg-red-500 text-white px-2 py-1 rounded",onClick:r,children:"Unregister SW"})]})]})})}function e6(){return c.jsx(VN,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:c.jsxs(OM,{children:[c.jsx(ZU,{}),c.jsxs(CN,{children:[c.jsx(Et,{path:"/login",element:c.jsx(sV,{})}),c.jsx(Et,{path:"/register",element:c.jsx(iV,{})}),c.jsx(Et,{path:"/forgot-password",element:c.jsx(oV,{})}),c.jsx(Et,{path:"/",element:c.jsx(uV,{})}),c.jsx(Et,{path:"/courses",element:c.jsx(yV,{})}),c.jsx(Et,{path:"/courses/:id",element:c.jsx(vV,{})}),c.jsx(Et,{path:"/payment/success",element:c.jsx(HU,{})}),c.jsx(Et,{path:"/payment/cancel",element:c.jsx(WU,{})}),c.jsx(Et,{path:"/profile",element:c.jsx(Io,{children:c.jsx(cV,{})})}),c.jsx(Et,{path:Gf,element:c.jsx(Io,{adminOnly:!0,children:c.jsx(d0,{})})}),c.jsx(Et,{path:aV,element:c.jsx(Io,{adminOnly:!0,children:c.jsx(d0,{})})}),c.jsx(Et,{path:"/my-courses",element:c.jsx(Io,{children:c.jsx(qU,{})})}),c.jsx(Et,{path:"/course/:courseId/view",element:c.jsx(Io,{children:c.jsx(zU,{})})}),c.jsx(Et,{path:"*",element:c.jsx(pf,{to:"/",replace:!0})})]})]})})}_h.createRoot(document.getElementById("root")).render(c.jsx(T0.StrictMode,{children:c.jsx(e6,{})}));"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(t=>{console.log("🔔 Service worker FCM enregistré:",t.scope)}).catch(t=>{console.error("❌ Service worker registration failed:",t)});export{bt as _,h0 as g,v4 as p,j as r,Yc as u};
