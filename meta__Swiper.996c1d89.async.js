"use strict";(self.webpackChunkslickcss=self.webpackChunkslickcss||[]).push([[593],{39836:function(D,c,n){n.r(c),n.d(c,{demos:function(){return E}});var v=n(17061),r=n.n(v),y=n(17156),_=n.n(y),p=n(67294),I=n(15430),O=n(51999),E={"swiper-demo-0":{component:p.memo(p.lazy(_()(r()().mark(function h(){var m,s;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,51999));case 2:return m=e.sent,s=m.Swiper,e.abrupt("return",{default:function(){return p.createElement(s,{title:"Hello dumi!"})}});case 5:case"end":return e.stop()}},h)})))),asset:{type:"BLOCK",id:"swiper-demo-0",refAtomIds:["Swiper"],dependencies:{"index.jsx":{type:"FILE",value:`import { Swiper } from 'slickcss';

export default () => <Swiper title="Hello dumi!" />`},slickcss:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{slickcss:O},renderOpts:{compile:function(){var h=_()(r()().mark(function s(){var t,e=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,e));case 3:case"end":return a.stop()}},s)}));function m(){return h.apply(this,arguments)}return m}()}}}},51999:function(D,c,n){n.r(c),n.d(c,{Foo:function(){return _},Swiper:function(){return m}});var v=n(67294),r=n(85893),y=function(t){return(0,r.jsx)("h4",{children:t.title})},_=y,p=n(27424),I=n.n(p);function O(s){var t=s.timing,e=s.draw,d=s.duration,a=performance.now(),g=requestAnimationFrame(function M(P){var i=(P-a)/d;i>1&&(i=1);var o=t(i);e(o),i<1&&requestAnimationFrame(M)});return function(){cancelAnimationFrame(g)}}var E=new Array(7).fill(null).map(function(s,t){return"https://swiperjs.com/demos/images/nature-".concat(t+2,".jpg")}),h=function(t){var e=100,d=E.length,a=(0,v.useState)(0),g=I()(a,2),M=g[0],P=g[1];return(0,v.useEffect)(function(){var i=performance.now(),o=1,l=O({duration:1/0,timing:function(u){return u},draw:function(){var u=performance.now();u-i>=1500&&(P(function(f){return console.log("c",f),f===d-1?o=-1:f===0&&(o=1),f+o}),i=u)}});return function(){l()}},[]),(0,r.jsx)("div",{className:"banner",children:E.map(function(i,o){var l=o-M,w=Math.sign(l),u=l*e;o!==M&&(u+=w*60);var f=Math.pow(.6,Math.abs(l)),A=45*-w,S=Math.pow(.5,Math.abs(l)),j={transform:"translate(calc(-50% + ".concat(u,"px), -50%) scale(").concat(f,") rotateY(").concat(A,"deg)"),zIndex:d-Math.abs(l),opacity:S};return(0,r.jsx)("div",{className:"img_container",style:j,children:(0,r.jsx)("img",{src:i,alt:"Image",className:"img"})},o)})})},m=h},19087:function(D,c,n){n.r(c),n.d(c,{texts:function(){return r}});var v=n(15430);const r=[{value:"This is an example component.",paraId:0,tocIndex:0}]}}]);
