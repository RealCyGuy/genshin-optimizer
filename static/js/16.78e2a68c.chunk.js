(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[16],{102:function(e,t,n){"use strict";var c=n(86),a=n(3),s=n(79),i=n(0),r=n(133);t.a=function(e){var t,n=e.float,l=void 0!==n&&n,o=e.placeholder,j=e.value,d=e.onValueChange,u=e.disabled,b=e.allowEmpty,h=void 0!==b&&b,x=Object(i.useState)(!1),m=Object(s.a)(x,2),O=m[0],f=m[1],p={type:"number",className:"hide-appearance",placeholder:o,value:h?"number"===typeof j?j:"":!j&&O?"":(null===j||void 0===j||null===(t=j.toString)||void 0===t?void 0:t.call(j))||j,disabled:u,onChange:function(e){var t=e.target.value;t=l?h&&""===t?null:parseFloat(t)||0:h&&""===t?null:parseInt(t)||0,null===d||void 0===d||d(t)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}};return Object(a.jsx)(r.a,Object(c.a)(Object(c.a)({},p),{},{"aria-label":"custom-input"}))}},107:function(e,t,n){"use strict";var c={elements:{anemo:n.p+"static/media/Element_Anemo.f809fde3.png",cryo:n.p+"static/media/Element_Cryo.019d72f9.png",dendro:n.p+"static/media/Element_Dendro.8ee0f26d.png",electro:n.p+"static/media/Element_Electro.342332ac.png",geo:n.p+"static/media/Element_Geo.b7e865c6.png",hydro:n.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:n.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:n.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:n.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:n.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:n.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:n.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=c},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(81);function a(e){var t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:c,seconds:n,milliseconds:t}}function s(e){var t=a(e),n=t.hours,s=t.minutes,i=t.seconds,r="Minutes";return n&&(r="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.l)(s,"0",2),":").concat(Object(c.l)(i,"0",2)," ").concat(r)}function i(e){var t=a(e),n=t.hours,s=t.minutes,i=t.seconds,r=t.milliseconds,l="Minutes";return n&&(l="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.l)(s,"0",2),":").concat(Object(c.l)(i,"0",2),".").concat(Object(c.l)(r,"0",3)," ").concat(l)}},216:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c=n(79),a=n(83),s=n(95),i=n(126),r=n(125),l=n(3),o=n(84),j=n(23),d=n(0),u=n.n(d),b=n(55),h=n(31),x=n(139),m=n(40),O=n(30),f=n(134),p=n(97),g=n(213),v=n(108),y=n(155),N=n(214),w=n(18),k=n(107),M=n(102),_=n(158),C=n(81),T=1e3,E=36e5;function S(e){return Object(l.jsxs)(b.a,{className:"mb-2",children:[Object(l.jsx)(H,{}),Object(l.jsx)(R,{}),Object(l.jsx)(P,{})]})}var I=160,D=48e4,R=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).setResin=function(e){return c.setState((function(t){var n={resin:e=parseInt(e)||0};return e>=I?(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=0,t.resin<I&&(n.date=(new Date).getTime())):(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=setInterval((function(){return c.setResin(c.state.resin+1)}),D),n.date=(new Date).getTime()),n}))};var s=Object(C.j)("resinInfo");c.state=s||{resin:100,date:(new Date).getTime()};var i=c.state,r=i.resin,l=i.date;if(r<I&&Date.now()-l>D){var o=I-r,j=Math.min(Math.floor((Date.now()-l)/D),o);r+=j,l+=j*D,c.state.resin=r,c.state.date=l}return w.a.pageview("/tools"),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.resin,c=t.date;if(n<I){var a=c+D-new Date;this.resinIncrement=setTimeout((function(){e.setResin(e.state.resin+1)}),a)}this.updateTimer=setInterval((function(){return e.forceUpdate()}),T)}},{key:"componentWillUnmount",value:function(){this.updateTimer&&clearInterval(this.updateTimer),this.resinIncrement&&clearTimeout(this.resinIncrement)}},{key:"componentDidUpdate",value:function(){var e=Object(C.e)(this.state);Object(C.k)("resinInfo",e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.resin,c=t.date,a=n>=I?c:c+D,s=new Date(n>=I?c:c+(I-n)*D),i=Object(_.a)(Math.abs(a-Date.now()));return Object(l.jsxs)(h.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(l.jsxs)(h.a.Header,{children:[Object(l.jsx)(x.a,{src:k.a.resin.fragile,className:"thumb-small d-inline my-n1 ml-n2"}),Object(l.jsx)("span",{children:"Resin Counter"})]}),Object(l.jsx)(h.a.Body,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(O.a,{xs:"auto",className:"px-3",children:Object(l.jsxs)("span",{style:{fontSize:"4em"},children:[Object(l.jsx)(x.a,{src:k.a.resin.fragile,className:"d-inline w-auto mt-n3 ml-n3 mr-n4",style:{height:"1.5em"}}),Object(l.jsx)("input",{type:"number",className:"invisible-input hide-appearance text-white mb-0 text-right",size:"4",value:n,min:0,max:999,style:{width:"2.1em"},onChange:function(t){return e.setResin(t.target.value)}}),"/",I]})}),Object(l.jsxs)(O.a,{children:[Object(l.jsxs)(f.a,{className:"w-100 d-flex mb-2",children:[Object(l.jsx)(p.a,{onClick:function(){return e.setResin(0)},disabled:0===n,children:"0"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-1)},disabled:0===n,children:"-1"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-20)},disabled:n<20,children:"-20"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-40)},disabled:n<40,children:"-40"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-60)},disabled:n<60,children:"-60"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n+1)},children:"+1"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n+60)},children:"+60"}),Object(l.jsxs)(p.a,{onClick:function(){return e.setResin(I)},disabled:n===I,children:["MAX ",I]})]}),Object(l.jsx)("h5",{children:n<I?Object(l.jsxs)("span",{children:["Next resin in ",i,", full Resin at ",s.toLocaleTimeString()," ",s.toLocaleDateString()]}):Object(l.jsxs)("span",{children:["Resin has been full for at least ",i,", since ",s.toLocaleTimeString()," ",s.toLocaleDateString()]})})]}),Object(l.jsx)("small",{children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})]})})]})}}]),n}(u.a.Component),B={America:-18e6,Europe:E,Asia:288e5,"TW, HK, MO":288e5};function H(e){var t=Object(d.useState)(Object.keys(B)[0]),n=Object(c.a)(t,2),a=n[0],s=n[1],i=Object(d.useState)(new Date(Date.now()+B[a])),r=Object(c.a)(i,2),u=r[0],b=r[1];Object(d.useEffect)((function(){return s(Object(C.j)("server_timezone")||Object.keys(B)[0])}),[]),Object(d.useEffect)((function(){var e=function t(){return b(new Date(Date.now()+B[a])),setTimeout((function(){e=t()}),T-Date.now()%T)}();return Object(C.k)("server_timezone",a),function(){return clearTimeout(e)}}),[a]);var x=new Date(u);x.getUTCHours()<4?x.setUTCHours(4,0,0,0):(x=new Date(x.getTime()+864e5)).setUTCHours(4,0,0,0);var f=x.getTime()-u.getTime(),p=Object(_.a)(f);return Object(l.jsxs)(h.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(l.jsx)(h.a.Header,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsxs)(O.a,{xs:"auto",children:[Object(l.jsx)("h5",{className:"d-inline",children:Object(l.jsx)(j.a,{icon:o.c,className:"fa-fw mr-2"})}),Object(l.jsx)("span",{children:"Teyvat Time"})]}),Object(l.jsx)(O.a,{xs:"auto",children:Object(l.jsx)(g.a,{title:a,children:Object.keys(B).map((function(e){return Object(l.jsx)(v.a.Item,{onClick:function(){return s(e)},children:e},e)}))})})]})}),Object(l.jsx)(h.a.Body,{children:Object(l.jsxs)(m.a,{className:"d-flex justify-content-center",children:[Object(l.jsx)(O.a,{xs:"auto",className:"px-3",children:Object(l.jsx)("span",{style:{fontSize:"4em"},className:"d-block",children:u.toLocaleTimeString([],{timeZone:"UTC"})})}),Object(l.jsx)(O.a,{xs:"auto ",children:Object(l.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(l.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Server Date: ",Object(l.jsx)("b",{children:u.toDateString()})]}),Object(l.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Time until reset: ",Object(l.jsx)("b",{children:p})]}),Object(l.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Resin until reset: ",Object(l.jsx)("b",{children:Math.floor(f/48e4)})]})]})})]})})]})}var A={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:k.a.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:k.a.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:k.a.exp_books.wit}},W=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],L=[20,40,50,60,70,80,90];function P(e){var t=Object(d.useState)(0),n=Object(c.a)(t,2),a=n[0],s=n[1],i=Object(d.useState)(0),r=Object(c.a)(i,2),o=r[0],j=r[1],u=Object(d.useState)(0),b=Object(c.a)(u,2),g=b[0],v=b[1],w={advice:a,experience:o,wit:g},k={advice:s,experience:j,wit:v},_=Object(d.useState)(!1),T=Object(c.a)(_,2),E=T[0],S=T[1],I=Object(d.useState)(1),D=Object(c.a)(I,2),R=D[0],B=D[1],H=Object(d.useState)(0),P=Object(c.a)(H,2),F=P[0],U=P[1],V=Object(d.useState)(0),J=Object(c.a)(V,2),X=J[0],q=J[1];Object(d.useEffect)((function(){return q(Object(C.j)("mora")||0)}),[]),Object(d.useEffect)((function(){Object(C.k)("mora",X)}),[X]),Object(d.useEffect)((function(){return B(Object(C.j)("exp_calc_level")||1)}),[]),Object(d.useEffect)((function(){Object(C.k)("exp_calc_level",R)}),[R]),Object(d.useEffect)((function(){return U(Object(C.j)("exp_calc_cur_exp")||0)}),[]),Object(d.useEffect)((function(){Object(C.k)("exp_calc_cur_exp",F)}),[F]),Object(d.useEffect)((function(){var e=Object(C.j)("exp_books")||{},t={advice:s,experience:j,wit:v};Object.entries(e).forEach((function(e){var n,a=Object(c.a)(e,2),s=a[0],i=a[1];return null===(n=t[s])||void 0===n?void 0:n.call(t,i)}))}),[]),Object(d.useEffect)((function(){return Object(C.k)("exp_books",{advice:a,experience:o,wit:g})}),[a,o,g]);for(var Y=L.find((function(e){return e>R})),G=-F,K=R;K<Math.min(Y,W.length);K++)G+=W[K];for(var Z=function(e,t,n,c,a){var s=a?Math.floor(c/1e3):Math.ceil(c/1e3),i=Math.min(Math.floor(s/20),e);s-=20*i;var r=Math.min(Math.floor(s/5),t);s-=5*r;var l=Math.min(s,n);if(s-=l,a||0===s)return[i,r,l];if(3===r&&i!==e)return[i+1,0,0];if(r!==t)return[i,r+1,0];if(i!==e)return[i+1,0,0];return null}(g,o,a,G,E)||[],Q=Object(c.a)(Z,3),$=Q[0],ee=void 0===$?0:$,te=Q[1],ne=void 0===te?0:te,ce=Q[2],ae=void 0===ce?0:ce,se={advice:ae,experience:ne,wit:ee},ie=2e4*ee+5e3*ne+1e3*ae,re=ie/5,le=G-ie,oe=X-re,je=ie+F,de=R;de<Math.min(Y,W.length)&&W[de]<=je;de++)je-=W[de];de===Y&&(je=0);var ue="";return oe<0?ue=Object(l.jsxs)("span",{children:["You don't have enough ",Object(l.jsx)("b",{children:"Mora"})," for this operation."]}):0===Z.length?ue=Object(l.jsxs)("span",{children:["You don't have enough ",Object(l.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===R&&(ue="You are at the maximum level."),Object(l.jsxs)(h.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(l.jsx)(h.a.Header,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsxs)(O.a,{xs:"auto",children:[Object(l.jsx)(x.a,{src:A.wit.img,className:"thumb-small d-inline my-n1 ml-n2"}),Object(l.jsx)("span",{children:"Experience Calculator"})]}),Object(l.jsx)(O.a,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(p.a,{variant:E?"primary":"success",disabled:!E,onClick:function(){return S(!1)},children:"Full Level"}),Object(l.jsx)(p.a,{variant:E?"success":"primary",disabled:E,onClick:function(){return S(!0)},children:"Don't fully level"})]})})]})}),Object(l.jsxs)(h.a.Body,{children:[Object(l.jsx)(m.a,{className:"mb-2",children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)("span",{children:"This calcualtor tries to calculate the amount of exp books required to get to the next milestone level. "}),E?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minize as much exp loss as possible."]})}),Object(l.jsxs)(m.a,{children:[Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsxs)(y.a,{children:[Object(l.jsx)(y.a.Prepend,{children:Object(l.jsx)(y.a.Text,{children:"Current Level"})}),Object(l.jsx)(M.a,{value:R,onValueChange:function(e){return B(Object(C.a)(e,0,90))}})]})}),Object(l.jsx)(O.a,{xs:12,md:8,className:"mb-2",children:Object(l.jsxs)(y.a,{children:[Object(l.jsx)(y.a.Prepend,{children:Object(l.jsx)(y.a.Text,{children:"Current EXP."})}),Object(l.jsx)(M.a,{value:F,onValueChange:function(e){return U(Object(C.a)(e,0,(W[R]||1)-1))}}),Object(l.jsx)(y.a.Append,{children:Object(l.jsxs)(y.a.Text,{children:["/",W[R]||0]})})]})}),Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Next Milestone: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{children:Y})})]})})}),Object(l.jsx)(O.a,{xs:12,md:8,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"EXP. needed to milestone: "}),Object(l.jsxs)("span",{className:"float-right text-right",children:[Object(l.jsx)("strong",{children:ie})," / ",Object(l.jsx)("b",{children:G})]})]})})})]}),Object(l.jsxs)(m.a,{children:[Object.entries(A).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)(O.a,{xs:12,lg:4,children:Object(l.jsx)(z,{bookObj:a,value:w[n],setValue:k[n],required:se[n]})},n)})),Object(l.jsx)(O.a,{xs:12,lg:4,className:"mb-2",children:Object(l.jsxs)(y.a,{children:[Object(l.jsx)(y.a.Prepend,{children:Object(l.jsx)(y.a.Text,{children:"Current Mora"})}),Object(l.jsx)(M.a,{value:X,onValueChange:function(e){return q(Math.max(e,0))}})]})}),Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Mora Cost: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{children:re})})]})})}),Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsxs)("span",{children:["EXP ",E?"Diff":"Waste",": "]}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:le<0?"text-danger":"text-success",children:le})})]})})}),Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Final Mora: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:oe<0?"text-danger":"text-success",children:oe})})]})})}),Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Final Level: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:"text-success",children:de})})]})})}),Object(l.jsx)(O.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(h.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(h.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Final EXP: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:je<0?"text-danger":"text-success",children:je})})]})})})]})]}),Object(l.jsx)(h.a.Footer,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(O.a,{children:Boolean(ue)&&Object(l.jsx)(N.a,{variant:"danger",className:"mb-0 py-2",children:ue})}),Object(l.jsx)(O.a,{xs:"auto",children:Object(l.jsx)(p.a,{disabled:ue,onClick:function(){B(de),U(je),Object.entries(se).forEach((function(e){var t,n=Object(c.a)(e,2),a=n[0],s=n[1];return null===(t=k[a])||void 0===t?void 0:t.call(k,w[a]-s)})),q(oe)},variant:"success",children:"Apply"})})]})})]})}function z(e){var t=e.bookObj,n=t.name,c=t.img,a=e.value,s=void 0===a?0:a,i=e.setValue,r=e.required,o=void 0===r?0:r;return Object(l.jsxs)(h.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(l.jsx)(h.a.Header,{children:n}),Object(l.jsx)(h.a.Body,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(O.a,{xs:3,children:Object(l.jsx)(x.a,{src:c,className:"w-100 h-auto",rounded:!0})}),Object(l.jsxs)(O.a,{children:[Object(l.jsxs)(y.a,{children:[Object(l.jsx)(y.a.Prepend,{children:Object(l.jsx)(y.a.Text,{children:"Amount"})}),Object(l.jsx)(M.a,{value:s,onValueChange:function(e){return i(Math.max(e,0))}})]}),Object(l.jsxs)("div",{className:"mt-2",children:[Object(l.jsx)("span",{children:"Required: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:o?"text-success":"",children:o})})]})]})]})})]})}},81:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"l",(function(){return b})),n.d(t,"i",(function(){return h}));var c=function(e){return e[Math.floor(Math.random()*e.length)]};function a(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}var s=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},i=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},r=function(e){return JSON.parse(JSON.stringify(e))},l=function(e,t){return Math.abs(e-t)<=.101},o=function(e,t){return Math.abs(e-t)<=1},j=function(e,t,n){return e<t?t:e>n?n:e},d=function(e){return e.length?e[e.length-1]:null},u=function(e){return j(e,0,100)};function b(e,t,n){return(new Array(n+1).join(t)+e).slice(-n)}function h(e,t){var n=0;e=e.toLowerCase(),t=t.toLowerCase();for(var c=0,a=Math.max(e.length,t.length);c<a;c++){var s=!0;e[c]&&t[c]&&e[c]===t[c]||(s=!1),e[c-1]!==t[c]&&e[c+1]!==t[c]||(s=!0),s||n++}return n}}}]);
//# sourceMappingURL=16.78e2a68c.chunk.js.map