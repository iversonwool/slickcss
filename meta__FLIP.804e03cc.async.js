(self.webpackChunkslickcss=self.webpackChunkslickcss||[]).push([[304],{70141:function(e,a,t){"use strict";t.r(a),t.d(a,{demos:function(){return w}});var I=t(17061),o=t.n(I),h=t(17156),P=t.n(h),d=t(67294),A=t(93145),s=t(73626),w={"flip-demo-0":{component:d.memo(d.lazy(P()(o()().mark(function T(){var _,E;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(t.bind(t,73626));case 2:return _=m.sent,E=_.FLIP,m.abrupt("return",{default:function(){return d.createElement(E,{title:"Hello dumi!"})}});case 5:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"flip-demo-0",refAtomIds:["FLIP"],dependencies:{"index.jsx":{type:"FILE",value:`import { FLIP } from 'slickcss';

export default () => <FLIP title="Hello dumi!" />`},slickcss:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{slickcss:s},renderOpts:{compile:function(){var T=P()(o()().mark(function E(){var L,m=arguments;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,t.e(335).then(t.bind(t,37335));case 2:return y.abrupt("return",(L=y.sent).default.apply(L,m));case 3:case"end":return y.stop()}},E)}));function _(){return T.apply(this,arguments)}return _}()}}}},73626:function(e,a,t){"use strict";t.r(a),t.d(a,{FLIP:function(){return L},RotateSwiper:function(){return D},Swiper:function(){return F}});var I=t(861),o=t.n(I),h=t(27424),P=t.n(h),d=t(67294),A=t(73935),s=t(85893),w=function(n,p,i){var v=[n[i],n[p]];n[p]=v[0],n[i]=v[1]};function T(c){return c.getBoundingClientRect().top}var _=["HTML + CSS","JAVASCRIPT","\u6846\u67B6","NodeJS","\u5DE5\u7A0B\u5316","\u7F51\u7EDC","\u79FB\u52A8\u7AEF"],E=function(){var n=(0,d.useState)([].concat(_)),p=P()(n,2),i=p[0],v=p[1],M=(0,d.useRef)(),S=function(f){requestAnimationFrame(function(){requestAnimationFrame(f)})},j=function(){var f=i.length,g=6;console.log("randomIndex",g),w(i,0,g);var u=document.getElementById("idHTML + CSS");(0,A.flushSync)(function(){v(o()(i))}),u.style.transform="translateY(-".concat(g*34,"px)");var x=function(){u.style.transition="transform 0.25s",u.style.removeProperty("transform"),console.log("play")};S(x)},l=function(){v([].concat(_))};return(0,s.jsxs)("div",{className:"flip_container",children:[(0,s.jsx)("p",{children:"\u4E00\u6B21\u6027\u52A8\u753B"}),(0,s.jsx)("button",{style:{marginBottom:10},onClick:j,type:"button",children:"FLIP"}),(0,s.jsx)("button",{style:{marginBottom:10,marginLeft:10},onClick:l,type:"button",children:"Reset"}),i.map(function(r){return(0,s.jsx)("div",{id:"id".concat(r),className:"tag",children:r},r)})]})},L=E;function m(c){var n=c.timing,p=c.draw,i=c.duration,v=performance.now(),M=requestAnimationFrame(function S(j){var l=(j-v)/i;l>1&&(l=1);var r=n(l);p(r),l<1&&requestAnimationFrame(S)});return function(){cancelAnimationFrame(M)}}var R=new Array(7).fill(null).map(function(c,n){return"https://swiperjs.com/demos/images/nature-".concat(n+2,".jpg")}),y=function(n){var p=100,i=R.length,v=(0,d.useState)(0),M=P()(v,2),S=M[0],j=M[1];return(0,d.useEffect)(function(){var l=performance.now(),r=1,f=m({duration:1/0,timing:function(u){return u},draw:function(){var u=performance.now();u-l>=1500&&(j(function(x){return console.log("c",x),x===i-1?r=-1:x===0&&(r=1),x+r}),l=u)}});return function(){f()}},[]),(0,s.jsx)("div",{className:"banner",children:R.map(function(l,r){var f=r-S,g=Math.sign(f),u=f*p;r!==S&&(u+=g*60);var x=Math.pow(.6,Math.abs(f)),C=45*-g,B=Math.pow(.5,Math.abs(f)),k={transform:"translate(calc(-50% + ".concat(u,"px), -50%) scale(").concat(x,") rotateY(").concat(C,"deg)"),zIndex:i-Math.abs(f),opacity:B};return(0,s.jsx)("div",{className:"img_container",style:k,children:(0,s.jsx)("img",{src:l,alt:"Image",className:"img"})},r)})})},F=y,O=new Array(6).fill(null).map(function(c,n){return"https://swiperjs.com/demos/images/nature-".concat(n+2,".jpg")}),b=function(){return(0,s.jsx)("div",{className:"rotate_bg",children:(0,s.jsx)("div",{className:"rotate_container",children:(0,s.jsx)("div",{className:"rotate_circle",children:O.map(function(n){return(0,s.jsx)("img",{className:"rotate_item ",src:n,alt:"nature"},n)})})})})},D=b},94810:function(e,a,t){"use strict";t.r(a),t.d(a,{texts:function(){return o}});var I=t(93145);const o=[{value:"\u7ED3\u6784\u52A8\u753B",paraId:0,tocIndex:0},{value:"F",paraId:0,tocIndex:0},{value:"IRST",paraId:0,tocIndex:0},{value:"L",paraId:0,tocIndex:0},{value:"AST",paraId:0,tocIndex:0},{value:"I",paraId:0,tocIndex:0},{value:"VERT",paraId:0,tocIndex:0},{value:"P",paraId:0,tocIndex:0},{value:"LAY",paraId:0,tocIndex:0}]},63405:function(e,a,t){var I=t(73897);function o(h){if(Array.isArray(h))return I(h)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){function a(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,a,t){var I=t(63405),o=t(79498),h=t(86116),P=t(42281);function d(A){return I(A)||o(A)||h(A)||P()}e.exports=d,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
