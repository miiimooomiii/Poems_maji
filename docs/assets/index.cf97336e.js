import{s as H,t as F,d as P,a as m,b as G,c as J,r as M}from"./vendor.8802af71.js";const Y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}};Y();const K="_App_1w4o0_2",Q="_header_1w4o0_9",z="_appbody_1w4o0_13",D="_form_1w4o0_26",V="_headmargin_1w4o0_33",W="_column_1w4o0_38",X="_prColumn_1w4o0_60",Z="_label_1w4o0_71",ee="_subinfo_1w4o0_79",te="_required_1w4o0_86",oe="_filled_1w4o0_102",ie="_visible_1w4o0_106",se="_invisible_1w4o0_111",le="_fixed_1w4o0_120",ne="_blob_1w4o0_124",ae="_transform_1w4o0_1",re="_movement_1w4o0_1",ce="_mini_1w4o0_153",de="_large_1w4o0_158",me="_logo_1w4o0_168",_e="_thankblob_1w4o0_183",fe="_thankmessage_1w4o0_189",ue="_ag_1w4o0_200",be="_agreementswitch_1w4o0_204",he="_checkbox_1w4o0_220",pe="_agreement_1w4o0_204",$e="_buttonBelow_1w4o0_234",ve="_inlineBlock_1w4o0_239",ge="_footer_1w4o0_243",we="_linkbox_1w4o0_248",ye="_link_1w4o0_248",ke="_about_1w4o0_263",xe="_twitter_1w4o0_268",Be="_content_1w4o0_273",Le="_serif_1w4o0_276",Ee="_serifBold_1w4o0_281";var e={App:K,header:Q,appbody:z,form:D,headmargin:V,column:W,prColumn:X,label:Z,subinfo:ee,required:te,filled:oe,visible:ie,invisible:se,fixed:le,blob:ne,transform:ae,movement:re,mini:ce,large:de,logo:me,thankblob:_e,thankmessage:fe,ag:ue,agreementswitch:be,checkbox:he,agreement:pe,buttonBelow:$e,inlineBlock:ve,footer:ge,linkbox:we,link:ye,about:ke,twitter:xe,content:Be,serif:Le,serifBold:Ee};H.polyfill();let k=[];const x=document.getElementsByClassName(e.required);function B(){const o=document.getElementById("app"),s=document.getElementById("blob"),r=Array.from(document.getElementsByClassName(e.op)),a=Array.from(document.getElementsByClassName(e.content));async function t(){r.forEach(n=>n.classList.remove(e.invisible)),s.classList.remove(e.mini)}async function i(){setTimeout(()=>o.classList.remove(e.scLock),200)}async function c(){try{const n=await t();await i(n)}catch(n){}}s.disabled=!0,s.classList.contains(e.mini)?(a.forEach(n=>n.classList.replace(e.visible,e.invisible)),scroll({top:0,left:0,behavior:"smooth"}),setTimeout(()=>c(),400)):(o.classList.add(e.scLock),s.classList.add(e.mini),scroll({top:0,left:0,behavior:"smooth"}),setTimeout(()=>scroll(0,0),390),setTimeout(()=>{scroll({top:0,left:0,behavior:"smooth"}),r.forEach(n=>n.classList.add(e.invisible)),a.forEach(n=>n.classList.replace(e.invisible,e.visible))},400)),setTimeout(()=>{s.disabled=!1},400)}function Ne(){const o=document.getElementById("blob"),s=Array.from(document.getElementsByClassName(e.ed)),r=Array.from(document.getElementsByClassName(e.content));o.classList.replace(e.mini,e.large),r.forEach(a=>a.classList.replace(e.visible,e.invisible)),clearTimeout(k),k=setTimeout(function(){s.forEach(a=>a.classList.remove(e.invisible))},400)}function Se(){this.checked?x[1].classList.add(e.filled):x[1].classList.remove(e.filled)}function Ce(){}var Ae="/majipoem/assets/logo.27d13b32.svg";const qe=F(`<div id="app"><header><button id="blob"></button><img class="${e.logo} ${e.op}" alt="logo"></header><div><form class="${e.form} ${e.invisible} ${e.content}" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe" autocomplete="off"><iframe style="display:none" id="hidden_iframe" name="hidden_iframe"></iframe><label class="${e.column} ${e.label} ${e.serifBold}" for="title">\u984C\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="title" name="entry.1866521228" type="text" placeholder="\u300E\u7121\u984C\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="poem">\u672C\u6587<p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><textarea id="poem" name="entry.1602729063" required=""></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="name">\u8457\u8005\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="name" name="entry.1285093387" type="text" placeholder="\u300E\u533F\u540D\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="addition">\u4ED8\u8A18<p class="${e.subinfo} ${e.serif}">\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.2007810462"></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="link">\u30EA\u30F3\u30AF<p class="${e.subinfo} ${e.serif}">SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input id="link" name="entry.272121178" type="url" placeholder="https://"></label><input type="hidden" name="entry.26876002" value=""><div class="${e.column} ${e.prColumn}"><button class="${e.agreementswitch} ${e.serif}" id="agreement" type="button">\u5229\u7528\u898F\u7D04\u3092\u8AAD\u3080</button><hr><label class="${e.column} ${e.label} ${e.ag}" for="check"><input class="${e.inlineBlock} ${e.checkbox}" id="check" type="checkbox" required><p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><p class="${e.agreement} ${e.inlineBlock} ${e.serif}">\u5229\u7528\u898F\u7D04\u306B\u540C\u610F\u3057\u307E\u3059\u3002</p></label></div><button name="button" type="submit" value="\u9001\u4FE1">\u9001\u4FE1</button></form></div><div class="${e.footer} ${e.invisible} ${e.content}"><script type="text/javascript" src="https://minmoji.ucda.jp/sealjs/https%3A__miiimooomiii.github.io_majipoem_" charset="UTF-8"><\/script><div class="${e.linkbox}"><a class="${e.link} ${e.about}" href="https://twitter.com/majipoem" target="_blank" rel="author">\u307F\u3093\u306A\u306E\u30DE\u30B8\u30DD\u30A8\u30E0\u306B\u3064\u3044\u3066</a><a class="${e.link} ${e.twitter}" href="https://twitter.com/majipoem" target="_blank" rel="author">Twitter</a></div></div><div class="${e.visible} ${e.invisible} ${e.thankblob} ${e.ed}"><div style="background-color:#f4f4f4;pointer-events:none"><p>\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F\u3002</p></div></div></div>`);window.onscroll=()=>{document.getElementById("app").classList.contains(e.scLock)||B()};function Te(){return(()=>{const o=qe.cloneNode(!0),s=o.firstChild,r=s.firstChild,a=r.nextSibling,t=s.nextSibling,i=t.firstChild,c=i.firstChild,n=c.nextSibling,E=n.nextSibling,N=E.nextSibling,S=N.nextSibling,C=S.nextSibling,A=C.nextSibling,f=A.nextSibling,u=f.firstChild,q=u.nextSibling,T=q.nextSibling,I=T.firstChild,j=f.nextSibling,O=t.nextSibling,R=O.nextSibling,b=R.firstChild,U=b.firstChild;return m(r,"click",B,!0),G(a,"src",Ae),m(i,"submit",Ne),m(u,"click",Ce,!0),m(I,"change",Se),J(l=>{const h=e.App,p=e.header,$=e.blob,v=e.appbody,g=e.buttonBelow,w=e.blob,y=e.thankmessage;return h!==l._v$&&(o.className=l._v$=h),p!==l._v$2&&(s.className=l._v$2=p),$!==l._v$3&&(r.className=l._v$3=$),v!==l._v$4&&(t.className=l._v$4=v),g!==l._v$5&&(j.className=l._v$5=g),w!==l._v$6&&(b.className=l._v$6=w),y!==l._v$7&&(U.className=l._v$7=y),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),o})()}P(["click"]);M(Te,document.getElementById("root"));const _=108,d=document.getElementsByTagName("textarea"),L=document.getElementsByClassName(e.required);function Ie(){this.style.height="auto",this.scrollHeight>_?this.style.height=this.scrollHeight+"px":this.style.height=_+"px"}function je(){this.value==""?L[0].classList.remove(e.filled):L[0].classList.add(e.filled)}d[0].addEventListener("input",je,!1);for(let o=0;o<d.length;o++)d[o].value==""?d[o].setAttribute("style","height:"+_+"px;overflow-y:hidden;"):d[o].setAttribute("style","height:"+d[o].scrollHeight+"px;overflow-y:hidden;"),d[o].addEventListener("input",Ie,!1);
