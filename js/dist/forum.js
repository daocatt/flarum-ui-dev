(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const n=flarum.core.compat["forum/app"];var o=e.n(n);const s=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/IndexPage"];var a=e.n(r);const i=flarum.core.compat["forum/components/DiscussionPage"];var u=e.n(i);o().initializers.add("gtdxyz-ui-dev",(function(e){(0,s.extend)(a().prototype,"view",(function(t){var n=this;document.getElementsByClassName("IndexPage").length>0&&$(document.getElementsByClassName("IndexPage")[0].firstElementChild).length>0&&m.mount(document.getElementsByClassName("IndexPage")[0].firstElementChild,{view:function(){return""}}),document.getElementsByClassName("IndexPage-results").length>0&&document.getElementsByClassName("Hero-insert").length<1&&m.mount($('<div class="Hero-insert"/>').insertBefore(".IndexPage-toolbar")[0],{view:function(){return n.hero()}}),"index"!==e.current.get("routeName")&&"tag"!==e.current.get("routeName")||m.redraw()})),(0,s.extend)(u().prototype,"sidebarItems",(function(e){e.remove("scrubber")})),(0,s.extend)(u().prototype,"view",(function(e){var t,n=this;document.getElementsByClassName("DiscussionPage-discussion").length>0&&-1!==(null==(t=$(document.getElementsByClassName("DiscussionPage-discussion")[0].firstElementChild))?void 0:t.attr("class").indexOf("Hero"))&&m.mount(document.getElementsByClassName("DiscussionPage-discussion")[0].firstElementChild,{view:function(){return""}}),document.getElementsByClassName("PostStream").length>0&&document.getElementsByClassName("DiscussionPage-thread").length<1&&m.mount($('<div class="DiscussionPage-thread"/>').insertBefore(".PostStream")[0],{view:function(){return n.hero()}})}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map