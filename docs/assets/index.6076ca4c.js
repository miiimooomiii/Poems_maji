import{s as P,t as F,d as G,a as _,b as J,c as M,r as Y}from"./vendor.8802af71.js";const K=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}};K();const Q="_App_131ja_2",z="_header_131ja_9",D="_op_131ja_13",V="_scLock_131ja_15",W="_appbody_131ja_17",X="_form_131ja_30",Z="_headmargin_131ja_37",ee="_column_131ja_42",te="_prColumn_131ja_65",ie="_label_131ja_76",ne="_subinfo_131ja_84",se="_required_131ja_91",le="_filled_131ja_107",oe="_visible_131ja_111",ae="_invisible_131ja_116",ce="_fixed_131ja_125",re="_blob_131ja_129",de="_transform_131ja_1",_e="_movement_131ja_1",me="_mini_131ja_158",fe="_large_131ja_163",ue="_logo_131ja_173",be="_thankblob_131ja_188",pe="_thankmessage_131ja_194",$e="_ag_131ja_205",he="_agreementswitch_131ja_209",ve="_checkbox_131ja_225",ge="_agreement_131ja_209",ye="_buttonBelow_131ja_239",ke="_inlineBlock_131ja_244",je="_footer_131ja_248",xe="_linkbox_131ja_256",Le="_link_131ja_256",Be="_about_131ja_271",we="_twitter_131ja_276",Ee="_content_131ja_281",Ne="_ed_131ja_283",Se="_serif_131ja_286",Ce="_serifBold_131ja_291";var e={App:Q,header:z,op:D,scLock:V,appbody:W,form:X,headmargin:Z,column:ee,prColumn:te,label:ie,subinfo:ne,required:se,filled:le,visible:oe,invisible:ae,fixed:ce,blob:re,transform:de,movement:_e,mini:me,large:fe,logo:ue,thankblob:be,thankmessage:pe,ag:$e,agreementswitch:he,checkbox:ve,agreement:ge,buttonBelow:ye,inlineBlock:ke,footer:je,linkbox:xe,link:Le,about:Be,twitter:we,content:Ee,ed:Ne,serif:Se,serifBold:Ce};P.polyfill();let x=[];const L=document.getElementsByClassName(e.required);let m=()=>scroll({top:0,left:0,behavior:"smooth"});function B(){const i=document.getElementById("app"),s=document.getElementById("blob"),a=document.getElementsByClassName(e.op),o=document.getElementsByClassName(e.content);async function t(){for(const c of a)c.classList.remove(e.invisible);s.classList.remove(e.mini)}async function n(){setTimeout(()=>i.classList.remove(e.scLock),200)}async function r(){await t(),await n()}if(s.disabled=!0,s.classList.contains(e.mini)){for(const c of o)c.classList.replace(e.visible,e.invisible);m(),setTimeout(()=>r(),400)}else i.classList.add(e.scLock),s.classList.add(e.mini),m(),setTimeout(()=>scroll(0,0),390),setTimeout(()=>{m();for(const c of a)c.classList.add(e.invisible);for(const c of o)c.classList.replace(e.invisible,e.visible)},400);setTimeout(()=>{s.disabled=!1},400)}function qe(){const i=document.getElementById("blob"),s=document.getElementsByClassName(e.ed),a=document.getElementsByClassName(e.content);i.classList.replace(e.mini,e.large);for(const o of a)o.classList.replace(e.visible,e.invisible);clearTimeout(x),x=setTimeout(function(){for(const o of s)o.classList.remove(e.invisible)},400)}function Te(){this.checked?L[1].classList.add(e.filled):L[1].classList.remove(e.filled)}function Ae(){}var Ie="/majipoem/assets/logo.27d13b32.svg";const Oe=F(`<div id="app"><header><button id="blob"></button><img class="${e.logo} ${e.op}" alt="logo"></header><div><form class="${e.form} ${e.invisible} ${e.content}" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe" autocomplete="off"><iframe style="display:none" id="hidden_iframe" name="hidden_iframe"></iframe><label class="${e.column} ${e.label} ${e.serifBold}" for="title">\u984C\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="title" name="entry.1866521228" type="text" placeholder="\u300E\u7121\u984C\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="poem">\u672C\u6587<p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><textarea id="poem" name="entry.1602729063" required=""></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="name">\u8457\u8005\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="name" name="entry.1285093387" type="text" placeholder="\u300E\u533F\u540D\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="addition">\u4ED8\u8A18<p class="${e.subinfo} ${e.serif}">\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.2007810462"></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="link">\u30EA\u30F3\u30AF<p class="${e.subinfo} ${e.serif}">SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input id="link" name="entry.272121178" type="url" placeholder="https://"></label><input type="hidden" name="entry.26876002" value=""><div class="${e.column} ${e.prColumn}"><button class="${e.agreementswitch} ${e.serif}" id="agreement" type="button">\u5229\u7528\u898F\u7D04\u3092\u8AAD\u3080</button><hr><label class="${e.column} ${e.label} ${e.ag}" for="check"><input class="${e.inlineBlock} ${e.checkbox}" id="check" type="checkbox" required><p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><p class="${e.agreement} ${e.inlineBlock} ${e.serif}">\u5229\u7528\u898F\u7D04\u306B\u540C\u610F\u3057\u307E\u3059\u3002</p></label></div><button name="button" type="submit" value="\u9001\u4FE1">\u9001\u4FE1</button></form></div><div class="${e.footer} ${e.invisible} ${e.content}"><div class="${e.linkbox}"><a class="${e.link} ${e.about}" href="https://twitter.com/majipoem" target="_blank" rel="author">\u307F\u3093\u306A\u306E\u30DE\u30B8\u30DD\u30A8\u30E0\u306B\u3064\u3044\u3066</a><a class="${e.link} ${e.twitter}" href="https://twitter.com/majipoem" target="_blank" rel="author">Twitter</a></div></div><div class="${e.visible} ${e.invisible} ${e.thankblob} ${e.ed}"><div style="background-color:#f4f4f4;pointer-events:none"><p>\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F\u3002</p></div></div></div>`);window.onscroll=()=>{document.getElementById("app").classList.contains(e.scLock)||B()};function Re(){return(()=>{const i=Oe.cloneNode(!0),s=i.firstChild,a=s.firstChild,o=a.nextSibling,t=s.nextSibling,n=t.firstChild,r=n.firstChild,c=r.nextSibling,E=c.nextSibling,N=E.nextSibling,S=N.nextSibling,C=S.nextSibling,q=C.nextSibling,u=q.nextSibling,b=u.firstChild,T=b.nextSibling,A=T.nextSibling,I=A.firstChild,O=u.nextSibling,R=t.nextSibling,H=R.nextSibling,p=H.firstChild,U=p.firstChild;return _(a,"click",B,!0),J(o,"src",Ie),_(n,"submit",qe),_(b,"click",Ae,!0),_(I,"change",Te),M(l=>{const $=e.App,h=e.header,v=e.blob,g=e.appbody,y=e.buttonBelow,k=e.blob,j=e.thankmessage;return $!==l._v$&&(i.className=l._v$=$),h!==l._v$2&&(s.className=l._v$2=h),v!==l._v$3&&(a.className=l._v$3=v),g!==l._v$4&&(t.className=l._v$4=g),y!==l._v$5&&(O.className=l._v$5=y),k!==l._v$6&&(p.className=l._v$6=k),j!==l._v$7&&(U.className=l._v$7=j),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),i})()}G(["click"]);Y(Re,document.getElementById("root"));const f=108,d=document.getElementsByTagName("textarea"),w=document.getElementsByClassName(e.required);function He(){this.style.height="auto",this.scrollHeight>f?this.style.height=this.scrollHeight+"px":this.style.height=f+"px"}function Ue(){this.value==""?w[0].classList.remove(e.filled):w[0].classList.add(e.filled)}d[0].addEventListener("input",Ue,!1);for(let i=0;i<d.length;i++)d[i].value==""?d[i].setAttribute("style","height:"+f+"px;overflow-y:hidden;"):d[i].setAttribute("style","height:"+d[i].scrollHeight+"px;overflow-y:hidden;"),d[i].addEventListener("input",He,!1);
