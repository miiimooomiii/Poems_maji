import{t as Y,d as K,a as O,s as Q,c as z,r as D}from"./vendor.d519e032.js";const H=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}};H();const V="_App_1xykq_1",W="_header_1xykq_10",X="_form_1xykq_36",Z="_headmargin_1xykq_42",ee="_column_1xykq_47",te="_short_1xykq_87",ie="_visible_1xykq_220",ne="_invisible_1xykq_225",le="_link_1xykq_234",oe="_blob_1xykq_239",se="_transform_1xykq_1",ae="_movement_1xykq_1",re="_mini_1xykq_366",de="_large_1xykq_375",me="_logo_1xykq_385",ce="_thankmessage_1xykq_410",ve="_submit_1xykq_425";var t={App:V,header:W,form:X,headmargin:Z,column:ee,short:te,visible:ie,invisible:ne,link:le,blob:oe,transform:se,movement:ae,mini:re,large:de,logo:me,thankmessage:ce,submit:ve},d=null,R=null;function _e(){const o=document.getElementById("blob"),n=document.getElementById("form"),s=document.getElementById("logo");clearTimeout(d),o.disabled=!0,o.className==t.blob?(o.classList.add(t.mini),d=setTimeout(function(){s.classList.add(t.invisible),n.classList.remove(t.invisible),n.classList.add(t.visible)},400)):(n.classList.remove(t.visible),n.classList.add(t.invisible),d=setTimeout(function(){s.classList.remove(t.invisible),o.classList.remove(t.mini)},400)),clearTimeout(R),R=setTimeout(function(){o.disabled=!1},400)}function ue(){const o=document.getElementById("blob"),n=document.getElementById("appbody"),s=document.getElementById("thankblob");o.classList.remove(t.mini),n.classList.add(t.invisible),o.classList.add(t.large),clearTimeout(d),d=setTimeout(function(){s.classList.remove(t.invisible)},400)}var be="/majipoem/assets/logo.53d9d1b7.svg";const fe=Y('<div id="app"><header><button id="blob" style="background-color:#000000"></button><img id="logo" alt="logo"></header><div></div><appbody id="appbody"><form id="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><div><label for="title">\u984C\u540D</label><input type="text" id="title" name="entry.1866521228" placeholder="\u984C\u540D\uFF08\u7A7A\u6B04\u306E\u5834\u5408\u306F \u7121\u984C \u3068\u306A\u308A\u307E\u3059\uFF09\uFF1A"></div><div><label for="poem">\u672C\u6587</label><textarea id="poem" name="entry.1602729063" placeholder="\u672C\u6587\uFF08\u5165\u529B\u5FC5\u9808\uFF09\uFF1A" required=""></textarea></div><div><label for="name">\u8457\u8005\u540D</label><input type="text" id="name" name="entry.1285093387" placeholder="\u8457\u8005\u540D\uFF08\u7A7A\u6B04\u306E\u5834\u5408\u306F \u533F\u540D \u3068\u306A\u308A\u307E\u3059\uFF09\uFF1A"></div><div><label for="addition">\u4ED8\u8A18</label><textarea id="addition" name="entry.2007810462" placeholder="\u4ED8\u8A18\uFF1A"></textarea></div><div><label for="link">\u30EA\u30F3\u30AF</label><input type="url" id="link" name="entry.272121178" placeholder="\u30EA\u30F3\u30AF\uFF1A"></div><p><button type="submit" name="button" value="\u9001\u4FE1">\u9001\u4FE1</button></p></form></appbody><thankblob id="thankblob"><div style="background-color:#f4f4f4; pointer-events:none;"><p>\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p></div></thankblob></div>');function ge(){return(()=>{const o=fe.cloneNode(!0),n=o.firstChild,s=n.firstChild,r=s.nextSibling,i=n.nextSibling,l=i.nextSibling,a=l.firstChild,P=a.firstChild,m=P.nextSibling,U=m.firstChild,j=U.nextSibling,v=m.nextSibling,c=v.nextSibling,w=c.firstChild,F=w.nextSibling,_=c.nextSibling,u=_.nextSibling,G=u.nextSibling,J=G.firstChild,b=l.nextSibling,f=b.firstChild,M=f.firstChild;return O(s,"click",_e,!0),Q(r,"src",be),O(a,"submit",ue),z(e=>{const g=t.App,$=t.header,y=t.blob,h=t.logo,k=t.headmargin,x=`${t.form||""} ${t.invisible||""}`,p=t.column,N=t.short,L=t.column,q=t.column,E=t.short,S=t.column,I=t.column,B=t.submit,C=t.invisible,T=t.blob,A=t.thankmessage;return g!==e._v$&&(o.className=e._v$=g),$!==e._v$2&&(n.className=e._v$2=$),y!==e._v$3&&(s.className=e._v$3=y),h!==e._v$4&&(r.className=e._v$4=h),k!==e._v$5&&(i.className=e._v$5=k),x!==e._v$6&&(a.className=e._v$6=x),p!==e._v$7&&(m.className=e._v$7=p),N!==e._v$8&&(j.className=e._v$8=N),L!==e._v$9&&(v.className=e._v$9=L),q!==e._v$10&&(c.className=e._v$10=q),E!==e._v$11&&(F.className=e._v$11=E),S!==e._v$12&&(_.className=e._v$12=S),I!==e._v$13&&(u.className=e._v$13=I),B!==e._v$14&&(J.className=e._v$14=B),C!==e._v$15&&(b.className=e._v$15=C),T!==e._v$16&&(f.className=e._v$16=T),A!==e._v$17&&(M.className=e._v$17=A),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0}),o})()}K(["click"]);D(ge,document.getElementById("root"));
