import{t as Z,d as ee,a as U,s as te,c as ie,r as ne}from"./vendor.d519e032.js";const le=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};le();const se="_App_1upuk_1",oe="_header_1upuk_10",ae="_form_1upuk_34",re="_headmargin_1upuk_41",de="_column_1upuk_46",ue="_subinfo_1upuk_77",ce="_required_1upuk_85",me="_filled_1upuk_99",ve="_visible_1upuk_148",_e="_invisible_1upuk_153",fe="_link_1upuk_162",be="_blob_1upuk_167",ge="_transform_1upuk_1",he="_movement_1upuk_1",$e="_mini_1upuk_294",pe="_large_1upuk_303",ye="_logo_1upuk_313",ke="_thankmessage_1upuk_338",xe="_submit_1upuk_353";var t={App:se,header:oe,form:ae,headmargin:re,column:de,subinfo:ue,required:ce,filled:me,visible:ve,invisible:_e,link:fe,blob:be,transform:ge,movement:he,mini:$e,large:pe,logo:ye,thankmessage:ke,submit:xe},u=null,P=null;function Ne(){const i=document.getElementById("blob"),l=document.getElementById("form"),o=document.getElementById("logo");clearTimeout(u),i.disabled=!0,i.className==t.blob?(i.classList.add(t.mini),u=setTimeout(function(){o.classList.add(t.invisible),l.classList.remove(t.invisible),l.classList.add(t.visible)},400)):(l.classList.remove(t.visible),l.classList.add(t.invisible),u=setTimeout(function(){o.classList.remove(t.invisible),i.classList.remove(t.mini)},400)),clearTimeout(P),P=setTimeout(function(){i.disabled=!1},400)}function Le(){const i=document.getElementById("blob"),l=document.getElementById("form"),o=document.getElementById("thankblob");i.classList.remove(t.mini),l.classList.remove(t.visible),l.classList.add(t.invisible),i.classList.add(t.large),clearTimeout(u),u=setTimeout(function(){o.classList.remove(t.invisible),o.classList.add(t.visible)},400)}var Ee="/majipoem/assets/logo.53d9d1b7.svg";const Se=Z('<div id="app"><header><button id="blob" style="background-color:#000000"></button><img id="logo" alt="logo"></header><appbody id="appbody"><form id="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><label for="title">\u984C\u540D<p>\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input type="text" id="title" name="entry.1866521228" placeholder="\u300E\u7121\u984C\u300F"></label><label for="poem">\u672C\u6587<p>\u5FC5\u9808</p><textarea id="poem" name="entry.1602729063" required=""></textarea></label><label for="name">\u8457\u8005\u540D<p>\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input type="text" id="name" name="entry.1285093387" placeholder="\u300E\u533F\u540D\u300F"></label><label for="addition">\u4ED8\u8A18<p>\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.2007810462"></textarea></label><label for="link">\u30EA\u30F3\u30AF<p>SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input type="url" id="link" name="entry.272121178" placeholder="https://example.com/"></label><button type="submit" name="button" value="\u9001\u4FE1">\u9001\u4FE1</button></form></appbody><thankblob id="thankblob"><div style="background-color:#f4f4f4; pointer-events:none;"><p>\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p></div></thankblob></div>');function Ce(){return(()=>{const i=Se.cloneNode(!0),l=i.firstChild,o=l.firstChild,r=o.nextSibling,n=l.nextSibling,s=n.firstChild,d=s.firstChild,c=d.nextSibling,F=c.firstChild,G=F.nextSibling,m=c.nextSibling,J=m.firstChild,M=J.nextSibling,v=m.nextSibling,Y=v.firstChild,K=Y.nextSibling,_=v.nextSibling,Q=_.firstChild,z=Q.nextSibling,f=_.nextSibling,D=f.firstChild,V=D.nextSibling,W=f.nextSibling,g=n.nextSibling,h=g.firstChild,X=h.firstChild;return U(o,"click",Ne,!0),te(r,"src",Ee),U(s,"submit",Le),ie(e=>{const $=t.App,p=t.header,y=t.blob,k=t.logo,x=`${t.form||""} ${t.invisible||""}`,N=t.column,L=t.subinfo,E=t.column,S=`${t.subinfo||""} ${t.required||""}`,C=t.column,I=t.subinfo,B=t.column,A=t.subinfo,T=t.column,q=t.subinfo,O=t.submit,R=t.invisible,w=t.blob,H=t.thankmessage;return $!==e._v$&&(i.className=e._v$=$),p!==e._v$2&&(l.className=e._v$2=p),y!==e._v$3&&(o.className=e._v$3=y),k!==e._v$4&&(r.className=e._v$4=k),x!==e._v$5&&(s.className=e._v$5=x),N!==e._v$6&&(c.className=e._v$6=N),L!==e._v$7&&(G.className=e._v$7=L),E!==e._v$8&&(m.className=e._v$8=E),S!==e._v$9&&(M.className=e._v$9=S),C!==e._v$10&&(v.className=e._v$10=C),I!==e._v$11&&(K.className=e._v$11=I),B!==e._v$12&&(_.className=e._v$12=B),A!==e._v$13&&(z.className=e._v$13=A),T!==e._v$14&&(f.className=e._v$14=T),q!==e._v$15&&(V.className=e._v$15=q),O!==e._v$16&&(W.className=e._v$16=O),R!==e._v$17&&(g.className=e._v$17=R),w!==e._v$18&&(h.className=e._v$18=w),H!==e._v$19&&(X.className=e._v$19=H),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0}),i})()}ee(["click"]);ne(Ce,document.getElementById("root"));const b=108,a=document.getElementsByTagName("textarea"),j=document.getElementsByClassName(t.required);function Ie(){this.style.height="auto",this.scrollHeight>b?this.style.height=this.scrollHeight+"px":this.style.height=b+"px"}function Be(){this.value==""?j[0].classList.remove(t.filled):j[0].classList.add(t.filled)}a[0].addEventListener("input",Be,!1);for(let i=0;i<a.length;i++)a[i].value==""?a[i].setAttribute("style","height:"+b+"px;overflow-y:hidden;"):a[i].setAttribute("style","height:"+a[i].scrollHeight+"px;overflow-y:hidden;"),a[i].addEventListener("input",Ie,!1);
