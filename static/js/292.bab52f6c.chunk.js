"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[292],{8375:function(e,t,n){n.d(t,{Z:function(){return K}});var r,i=n(1413),a=n(93433),s=n(29439),l=n(30168),o=n(45987),c=n(49670),d=n(23786),u=n(57064),h=n(49900),f=n(94721),x=n(20890),v=n(47047),Z=n(72791),p=n(22020),y=n(76899),m=n(31148),j=n(42320),g=n(33890),b=n(55942),S=n(10157),w=n(80184),k=["selectedSetKey","onChange","artifactSetsByRarity","hasUnselect","titleTransKey"];function K(e){var t,n,K=e.selectedSetKey,C=void 0===K?"":K,P=e.onChange,I=e.artifactSetsByRarity,A=e.hasUnselect,E=void 0!==A&&A,R=e.titleTransKey,U=(0,o.Z)(e,k),M=(0,p.$)("artifact").t,F=(0,j.Z)(m.y.getAll,[]),L=null===F||void 0===F?void 0:F[C],O=(0,Z.useMemo)((function(){return I||(F?m.y.setKeysByRarities(F):{})}),[F,I]);return(0,w.jsxs)(g.Z,(0,i.Z)((0,i.Z)({},U),{},{title:null!==(t=null!==(n=null===L||void 0===L?void 0:L.name)&&void 0!==n?n:R&&M(R))&&void 0!==t?t:M(r||(r=(0,l.Z)(["editor.set.artifactSet"]))),startIcon:(null===L||void 0===L?void 0:L.defIconSrc)&&(0,w.jsx)(b.Z,{src:null===L||void 0===L?void 0:L.defIconSrc}),color:L?"success":"primary",children:[E&&(0,w.jsxs)(d.Z,{onClick:function(){return P("")},selected:""===C,disabled:""===C,children:[(0,w.jsx)(u.Z,{children:(0,w.jsx)(c.Z,{})}),(0,w.jsx)(h.Z,{children:(0,w.jsx)(y.c,{t:M,i18nKey:"ui:unselect",children:"Unselect"})})]}),!!Object.keys(O).length&&Object.entries(O).reverse().flatMap((function(e,t){var n=(0,s.Z)(e,2),r=n[0],i=n[1];return[].concat((0,a.Z)((t>0||E)&&i.length?[(0,w.jsx)(f.Z,{},"".concat(r,"divi"))]:[]),(0,a.Z)(i.length?[(0,w.jsx)(d.Z,{children:(0,w.jsx)(x.Z,{children:(0,w.jsxs)(y.c,{t:M,i18nKey:"editor.set.maxRarity",children:["Max Rarity ",(0,w.jsx)(S.t,{stars:parseInt(r)})]})})},"".concat(r,"header"))]:[]),(0,a.Z)(i.map((function(e){var t,n;return(0,w.jsx)(Z.Suspense,{fallback:(0,w.jsx)(d.Z,{children:(0,w.jsx)(v.Z,{variant:"text",width:100})}),children:(0,w.jsxs)(d.Z,{onClick:function(){return P(e)},selected:C===e,disabled:C===e,children:[(0,w.jsx)(u.Z,{children:(0,w.jsx)(b.Z,{src:null===F||void 0===F||null===(t=F[e])||void 0===t?void 0:t.defIconSrc,sx:{fontSize:"1.5em"}})}),(0,w.jsx)(h.Z,{children:null===F||void 0===F||null===(n=F[e])||void 0===n?void 0:n.name})]})},e)}))))}))]}))}},92443:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),i=n(45987),a=n(66934),s=n(24518),l=n(80184),o=["children","disabled"],c=(0,a.ZP)(s.Z)((function(e){var t=e.theme;return{"&.Mui-disabled":{backgroundColor:t.palette.primary.dark,color:t.palette.text.secondary}}}));function d(e){var t=e.children,n=(e.disabled,(0,i.Z)(e,o));return(0,l.jsx)(c,(0,r.Z)((0,r.Z)({},n),{},{disabled:!0,children:t}))}},29292:function(e,t,n){n.r(t),n.d(t,{default:function(){return bt}});var r,i=n(30168),a=n(93433),s=n(29439),l=n(1413),o=n(87757),c=n.n(o),d=n(53174),u=n(54483),h=n(43245),f=n(98268),x=n(68087),v=n(49670),Z=n(54091),p=n(66934),y=n(13967),m=n(95193),j=n(47047),g=n(9585),b=n(39504),S=n(61889),w=n(2199),k=n(68870),K=n(24518),C=n(20890),P=n(23786),I=n(57064),A=n(49900),E=n(13239),R=n(19658),U=n(72791),M=n(16129),F=n(22020),L=n(76899),O=n(45987),T=n(24351),z=n(33890),G=n(10157),V=n(80184),D=["rarity","onChange","filter"];function W(e){var t=e.rarity,n=e.onChange,a=e.filter,s=(0,O.Z)(e,D),o=(0,F.$)("artifact").t;return(0,V.jsx)(z.Z,(0,l.Z)((0,l.Z)({},s),{},{title:t?(0,V.jsx)(G.t,{stars:t}):o(r||(r=(0,i.Z)(["editor.rarity"]))),color:t?"success":"primary",children:[5,4,3].map((function(e){return(0,V.jsx)(P.Z,{disabled:!a(e),onClick:function(){return n(e)},children:(0,V.jsx)(G.t,{stars:e})},e)}))}))}var B,N=n(8375),_=n(94721),q=n(95614),$=["slotKey","onChange","hasUnselect"];function H(e){var t=e.slotKey,n=void 0===t?"":t,r=e.onChange,a=e.hasUnselect,s=void 0!==a&&a,o=(0,O.Z)(e,$),c=(0,F.$)(["artifact","ui"]).t;return(0,V.jsxs)(z.Z,(0,l.Z)((0,l.Z)({title:c(n?"artifact:slotName:".concat(n):"artifact:slot"),color:n?"success":"primary",startIcon:n?(0,q.Ir)(n):void 0},o),{},{children:[s&&(0,V.jsxs)(P.Z,{selected:""===n,disabled:""===n,onClick:function(){return r("")},children:[(0,V.jsx)(I.Z,{children:(0,V.jsx)(v.Z,{})}),(0,V.jsx)(A.Z,{children:c(B||(B=(0,i.Z)(["ui:unselect"])))})]}),s&&(0,V.jsx)(_.Z,{}),T.eV.map((function(e){return(0,V.jsxs)(P.Z,{selected:n===e,disabled:n===e,onClick:function(){return r(e)},children:[(0,V.jsx)(I.Z,{children:(0,q.Ir)(e)}),(0,V.jsx)(A.Z,{children:c("artifact:slotName:".concat(e))})]},e)}))]}))}var X=n(3992),Y=n(71310),J=n(68198),Q=n(27391),ee=["value","onChange","disabled","float"];function te(e){var t=e.value,n=e.onChange,r=e.disabled,i=void 0!==r&&r,a=e.float,o=void 0!==a&&a,c=(0,O.Z)(e,ee),d=(0,U.useState)(""),u=(0,s.Z)(d,2),h=u[0],f=u[1],x=(0,U.useCallback)((function(){if(""===h)return n(0);var e=o?parseFloat:parseInt;n(e(h))}),[n,h,o]);return(0,U.useEffect)((function(){var e;return f(null!==(e=null===t||void 0===t?void 0:t.toString())&&void 0!==e?e:"")}),[t,f]),(0,V.jsx)(Q.Z,(0,l.Z)({value:h,"aria-label":"custom-input",type:"number",onChange:function(e){return f(e.target.value)},onBlur:x,disabled:i,onKeyDown:function(e){return"Enter"===e.key&&x()}},c))}var ne=n(55942),re=n(9321),ie=n(75545),ae=n(19272),se=n(31148),le=n(56928),oe=n(45748),ce=n(92830),de=n(79406),ue=n(68544),he=n(42320),fe=n(50765),xe=JSON.parse('{"5":{"def_":{"24.0":"24.1"},"critRate_":{"8.5":"8.6","19.5":"19.4","23.0":"22.9"}}}'),ve=n(60393);var Ze=n(72838),pe=n(55221),ye=n(46797);function me(e){var t=e.efficiency,n=e.max,r=void 0!==n&&n,i=e.t,a=e.valid,s=r?"maxSubEff":"curSubEff";return(0,V.jsx)(Y.Z,{sx:{py:1,px:2},children:(0,V.jsxs)(S.ZP,{container:!0,spacing:1,children:[(0,V.jsx)(S.ZP,{item:!0,children:i("editor.".concat(s))}),(0,V.jsx)(S.ZP,{item:!0,flexGrow:1,children:(0,V.jsx)(pe.Z,{title:(0,V.jsxs)("span",{children:[(0,V.jsx)(C.Z,{variant:"h6",children:i("editor.".concat(s))}),(0,V.jsx)(C.Z,{children:(0,V.jsx)(L.c,{t:i,i18nKey:"editor.".concat(s,"Desc")})})]})})}),(0,V.jsx)(S.ZP,{item:!0,xs:"auto",children:(0,V.jsx)(ye.Z,{valid:a,max:900,value:a?t:"ERR"})})]})})}var je,ge,be,Se,we,ke,Ke,Ce=n(10600),Pe=n(25617),Ie=n(92443);function Ae(e){var t,n=e.index,r=e.artifact,s=e.setSubstat,l=(0,F.$)("artifact").t,o=null!==r&&void 0!==r?r:{},c=o.mainStatKey,d=void 0===c?"":c,u=o.rarity,h=void 0===u?5:u,f=null!==(t=null===r||void 0===r?void 0:r.substats[n])&&void 0!==t?t:{},x=f.key,v=void 0===x?"":x,Z=f.value,p=void 0===Z?0:Z,y=f.rolls,m=void 0===y?[]:y,j=f.efficiency,g=void 0===j?0:j,b=m.reduce((function(e,t){return e+t}),0),E=de.ZP.unit(v),R=m.length,U="",M=[],O=0;if(r){var T=r.rarity,G=ae.Z.rollInfo(T),D=G.numUpgrades,W=G.high;O=D+W-3-R,M=v?ae.Z.getSubstatRollData(v,T):[]}var B=7-M.length;return!R&&v&&p&&(U=U||l(je||(je=(0,i.Z)(["editor.substat.error.noCalc"])))),O<0&&(U=U||l("editor.substat.error.noOverRoll",{value:O+R})),(0,V.jsxs)(Y.Z,{children:[(0,V.jsx)(k.Z,{sx:{display:"flex"},children:(0,V.jsxs)(w.Z,{size:"small",sx:{width:"100%",display:"flex"},children:[(0,V.jsxs)(z.Z,{startIcon:v?ie.Z[v]:void 0,title:v?de.ZP.getArtStr(v):l("editor.substat.substatFormat",{value:n+1}),disabled:!r,color:v?"success":"primary",sx:{whiteSpace:"nowrap"},children:[v&&(0,V.jsx)(P.Z,{onClick:function(){return s(n,{key:"",value:0})},children:l(ge||(ge=(0,i.Z)(["editor.substat.noSubstat"])))}),fe.L.filter((function(e){return d!==e})).map((function(e){return(0,V.jsxs)(P.Z,{selected:v===e,disabled:v===e,onClick:function(){return s(n,{key:e,value:0})},children:[(0,V.jsx)(I.Z,{children:ie.Z[e]}),(0,V.jsx)(A.Z,{children:de.ZP.getArtStr(e)})]},e)}))]}),(0,V.jsx)(Ce.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,V.jsx)(Ce.ZP,{float:"%"===E,placeholder:l(be||(be=(0,i.Z)(["editor.substat.selectSub"]))),value:v?p:void 0,onChange:function(e){return s(n,{key:v,value:null!==e&&void 0!==e?e:0})},disabled:!v,error:!!U,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!M.length&&(0,V.jsx)(Ie.Z,{children:l(Se||(Se=(0,i.Z)(["editor.substat.nextRolls"])))}),M.map((function(e,t){var r,i,a,l=(0,de.qs)(b+e,E);return l=null!==(r=null===(i=xe[h])||void 0===i||null===(a=i[v])||void 0===a?void 0:a[l])&&void 0!==r?r:l,(0,V.jsx)(K.Z,{color:"roll".concat((0,ve.uZ)(B+t,1,6)),disabled:p&&!R||O<=0,onClick:function(){return s(n,{key:v,value:parseFloat(l)})},children:l},t)}))]})}),(0,V.jsx)(k.Z,{sx:{p:1},children:U?(0,V.jsx)(Pe.Z,{color:"error",children:l(we||(we=(0,i.Z)(["ui:error"])))}):(0,V.jsxs)(S.ZP,{container:!0,children:[(0,V.jsx)(S.ZP,{item:!0,children:(0,V.jsx)(Pe.Z,{color:0===R?"secondary":"roll".concat((0,ve.uZ)(R,1,6)),children:R?l("editor.substat.RollCount",{count:R}):l(ke||(ke=(0,i.Z)(["editor.substat.noRoll"])))})}),(0,V.jsx)(S.ZP,{item:!0,flexGrow:1,children:!!m.length&&(0,a.Z)(m).sort().map((function(e,t){return(0,V.jsx)(C.Z,{component:"span",color:"roll".concat((0,ve.uZ)(B+M.indexOf(e),1,6),".main"),sx:{ml:1},children:(0,de.qs)(e,E)},"".concat(t,".").concat(e))}))}),(0,V.jsx)(S.ZP,{item:!0,xs:"auto",flexShrink:1,children:(0,V.jsx)(C.Z,{children:(0,V.jsxs)(L.c,{t:l,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",(0,V.jsx)(ye.Z,{valid:!0,max:100*R,value:g||l(Ke||(Ke=(0,i.Z)(["editor.substat.noStat"])))})]})})})]})})]})}var Ee=n(57641),Re=n(82554);function Ue(e){var t=e.modalShow,n=e.hide;return(0,V.jsx)(re.Z,{open:t,onClose:n,children:(0,V.jsxs)(X.Z,{children:[(0,V.jsx)(b.Z,{sx:{py:1},children:(0,V.jsxs)(S.ZP,{container:!0,children:[(0,V.jsx)(S.ZP,{item:!0,flexGrow:1,children:(0,V.jsx)(C.Z,{variant:"subtitle1",children:"How do Upload Screenshots for parsing"})}),(0,V.jsx)(S.ZP,{item:!0,children:(0,V.jsx)(J.Z,{onClick:n})})]})}),(0,V.jsx)(_.Z,{}),(0,V.jsxs)(b.Z,{children:[(0,V.jsxs)(R.Z,{variant:"outlined",severity:"warning",children:["NOTE: Artifact Scanning currently only work for ",(0,V.jsx)("strong",{children:"ENGLISH"})," artifacts."]}),(0,V.jsxs)(S.ZP,{container:!0,spacing:1,mt:1,children:[(0,V.jsx)(S.ZP,{item:!0,xs:8,md:4,children:(0,V.jsx)(k.Z,{component:"img",alt:"snippet of the screen to take",src:Re,width:"100%",height:"auto"})}),(0,V.jsxs)(S.ZP,{item:!0,xs:12,md:8,children:[(0,V.jsx)(C.Z,{gutterBottom:!0,children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),(0,V.jsx)(C.Z,{variant:"h5",children:"Where to snip the screenshot."}),(0,V.jsxs)(C.Z,{gutterBottom:!0,children:["In game, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer. ",(0,V.jsx)("b",{children:"Only artifact from this screen can be scanned."})]}),(0,V.jsx)(C.Z,{variant:"h6",children:"Single artifact"}),(0,V.jsxs)(C.Z,{gutterBottom:!0,children:["To take a screenshot, in Windows, the shortcut is ",(0,V.jsx)("strong",{children:"Shift + WindowsKey + S"}),". Once you selected the region, the image is automatically included in your clipboard."]}),(0,V.jsx)(C.Z,{variant:"h6",children:"Multiple artifacts"}),(0,V.jsxs)(C.Z,{gutterBottom:!0,children:["To take advantage of batch uploads, you can use a tool like ",(0,V.jsx)("a",{href:"https://picpick.app/",target:"_blank",rel:"noreferrer",children:"PicPick"})," to create a macro to easily to screenshot a region to screenshot multiple artifacts at once."]}),(0,V.jsx)(C.Z,{variant:"h5",children:"What to include in the screenshot."}),(0,V.jsx)(C.Z,{children:"As shown in the Image, starting from the top with the artifact name, all the way to the set name(the text in green). "})]}),(0,V.jsxs)(S.ZP,{item:!0,xs:12,md:7,children:[(0,V.jsx)(C.Z,{variant:"h5",children:"Adding Screenshot to Genshin Optimizer"}),(0,V.jsx)(C.Z,{children:"At this point, you should have the artifact snippet either saved to your harddrive, or in your clipboard."}),(0,V.jsx)(C.Z,{gutterBottom:!0,children:'You can click on the box next to "Browse" to browse the files in your harddrive for multiple screenshots.'}),(0,V.jsxs)(C.Z,{children:["For single screenshots from the snippets, just press ",(0,V.jsx)("strong",{children:"Ctrl + V"})," to paste from your clipboard."]}),(0,V.jsxs)(C.Z,{gutterBottom:!0,children:["You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",(0,V.jsx)("b",{children:"Artifact Editor"}),"."]}),(0,V.jsx)(C.Z,{variant:"h5",children:"Finishing the Artifact"}),(0,V.jsxs)(C.Z,{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",(0,V.jsx)("strong",{children:"Add Artifact"})," to finish editing the artifact."]})]}),(0,V.jsx)(S.ZP,{item:!0,xs:8,md:5,children:(0,V.jsx)(k.Z,{component:"img",alt:"main screen after importing stats",src:Ee,width:"100%",height:"auto"})})]})]}),(0,V.jsx)(_.Z,{}),(0,V.jsx)(b.Z,{sx:{py:1},children:(0,V.jsx)(J.Z,{large:!0,onClick:n})})]})})}var Me=n(37762),Fe=n(15861),Le=n(31362),Oe=n(91702),Te=n(15671),ze=n(43144),Ge=function(){function e(t,n){(0,Te.Z)(this,e),this.data={},this.init=void 0,this.deinit=void 0,this.init=t,this.deinit=n}return(0,ze.Z)(e,[{key:"borrow",value:function(){var e=(0,Fe.Z)(c().mark((function e(t,n){var r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.data[t]||(this.data[t]={value:this.init(t),refCount:0}),(r=this.data[t]).refCount+=1,e.next=5,n(r.value);case 5:return i=e.sent,r.refCount-=1,r.refCount||(delete this.data[t],this.deinit(t,r.value)),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),Ve={r:255,g:204,b:50},De=new Ge(function(){var e=(0,Fe.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,Le.createScheduler)(),r=Array(2).fill(0).map(function(){var e=(0,Fe.Z)(c().mark((function e(r){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,Le.createWorker)({errorHandler:console.error}),e.next=3,i.load();case 3:return e.next=5,i.loadLanguage(t);case 5:return e.next=7,i.initialize(t);case 7:n.addWorker(i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.any(r);case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e,t){t.then((function(e){return e.terminate()}))})),We=function(e,t){switch(t.type){case"upload":return{processed:e.processed,outstanding:[].concat((0,a.Z)(e.outstanding),(0,a.Z)(t.files))};case"processing":return{processed:e.processed,outstanding:(0,a.Z)(e.outstanding)};case"processed":return e.outstanding[0].file===t.file?{processed:[].concat((0,a.Z)(e.processed),[t.result]),outstanding:e.outstanding.slice(1)}:e;case"pop":return{processed:e.processed.slice(1),outstanding:e.outstanding};case"clear":return{processed:[],outstanding:[]}}};function Be(e){if(!e.result){var t=e.file,n=e.fileName;e.imageURL=rt(t),e.result=e.imageURL.then(function(){var e=(0,Fe.Z)(c().mark((function e(r){var i,a,l,o,d,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.y.getAll;case 2:return i=e.sent,e.next=5,st(r);case 5:return a=e.sent,l=dt(i,a.rarities,ut(a.artifactSetTexts,i),xt(a.whiteTexts),pt(a.substatTexts),vt(a.whiteTexts),Zt(a.whiteTexts)),o=(0,s.Z)(l,2),d=o[0],u=o[1],e.abrupt("return",{file:t,result:{fileName:n,imageURL:r,artifact:d,texts:u}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}var Ne,_e,qe,$e,He,Xe,Ye,Je,Qe,et,tt,nt,rt=function(e){return new Promise((function(t){var n=new FileReader;n.onloadend=function(e){var n=e.target;return t(n.result)},n.readAsDataURL(e)}))},it=function(e){return new Promise((function(t){var n=new Image;n.onload=function(e){var n=e.target;return t(function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.drawImage(e,0,0,e.width,e.height),n.getImageData(0,0,e.width,e.height)}(n))},n.src=e}))};function at(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").putImageData(e,0,0),t}function st(e){return lt.apply(this,arguments)}function lt(){return(lt=(0,Fe.Z)(c().mark((function e(t){var n,r,i,a,l,o,d,u,h,f,x;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,it(t);case 2:return n=e.sent,r=n.width,i=Math.floor(n.height/2),a={rectangle:{top:i,left:0,width:r,height:i}},l=[ot(yt(n,[140,140,140],[255,255,255],{mode:"bw",region:"top"})),ot(yt(n,[30,50,80],[160,160,160],{region:"bot"}),a),ot(yt(n,[30,160,30],[200,255,200],{mode:"bw",region:"bot"}),a)],o=ht(n.data,n.width,n.height),e.next=9,Promise.all(l);case 9:return d=e.sent,u=(0,s.Z)(d,3),h=u[0],f=u[1],x=u[2],e.abrupt("return",{whiteTexts:h,substatTexts:f,artifactSetTexts:x,rarities:o});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ot(e){return ct.apply(this,arguments)}function ct(){return ct=(0,Fe.Z)(c().mark((function e(t){var n,r,i,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:void 0,r=at(t),e.next=4,De.borrow("eng",function(){var e=(0,Fe.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.next=4,e.sent.addJob("recognize",r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return i=e.sent,e.abrupt("return",i.data.lines.map((function(e){return e.text})));case 6:case"end":return e.stop()}}),e)}))),ct.apply(this,arguments)}function dt(e,t,n,r,i,l,o){var c,d=(0,a.Z)(new Set([].concat((0,a.Z)(n),["EmblemOfSeveredFate"]))),u=-1,h=[{setKey:"EmblemOfSeveredFate",rarity:3,level:0,slotKey:"flower",mainStatKey:"hp",substats:[],location:"",lock:!1,exclude:!1}],f=(0,ve.O)(T.En,(function(t){var r=0;n.size&&(r+=(0,a.Z)(n).reduce((function(n,r){return n+(e[r].rarity.includes(t)?1:0)}),0)/n.size);if(i.length){var s=i.reduce((function(e,n){return e+(ae.Z.getSubstatRolls(n.key,n.value,t).length?1:0)}),0);r+=s/i.length*2}return r})),x=(0,Me.Z)(T.eV);try{for(x.s();!(c=x.n()).done;){var v,Z=c.value,p=(0,Me.Z)(ae.Z.slotMainStats(Z));try{var y=function(){for(var t=v.value,i=(r.has(Z)?1:0)+(l.has(t)?1:0),a=o.filter((function(e){return"%"!==e.unit||"%"===de.ZP.unit(t)})).map((function(e){return e.mainStatValue})),c=function(){var r=(0,s.Z)(p[x],2),l=r[0],o=r[1],c=parseInt(l),f=d.filter((function(t){return e[t].rarity.includes(c)})),v=i+o;if(v+2<u)return"continue";var y,m=(0,Me.Z)(a);try{var j=function(){var e,r=y.value,i=ae.Z.mainStatValues(c,t),a=Math.max(0,i.findIndex((function(e){return e>=r}))),s=i[a],l=v+(s===r?1:0),o=(0,Me.Z)(f);try{for(o.s();!(e=o.n()).done;){var d=e.value,x=l+(n.has(d)?1:0);x>=u&&(x>u&&(h=[]),u=x,h.push({setKey:d,rarity:c,level:a,slotKey:Z,mainStatKey:t,substats:[],location:"",lock:!1,exclude:!1}))}}catch(p){o.e(p)}finally{o.f()}};for(m.s();!(y=m.n()).done;)j()}catch(k){m.e(k)}finally{m.f()}if(v>=u){var g,b=(0,Me.Z)(f);try{for(b.s();!(g=b.n()).done;){var S=g.value,w=v+(n.has(S)?1:0);w>u&&(h=[]),u=w,h.push({setKey:S,rarity:c,level:0,slotKey:Z,mainStatKey:t,substats:[],location:"",lock:!1,exclude:!1})}}catch(k){b.e(k)}finally{b.f()}}},x=0,p=Object.entries(f);x<p.length;x++)c()};for(p.s();!(v=p.n()).done;)y()}catch(R){p.e(R)}finally{p.f()}}}catch(R){x.e(R)}finally{x.f()}var m={},j={setKey:new Set,rarity:new Set,level:new Set,slotKey:new Set,mainStatKey:new Set,mainStatVal:new Set},g=h[0],b=ae.Z.mainStatValue(g.mainStatKey,g.rarity,g.level);g.substats=i.filter((function(e,t){return e.key!==g.mainStatKey&&i.slice(0,t).every((function(t){return t.key!==e.key}))}));for(var S=g.substats.length;S<4;S++)g.substats.push({key:"",value:0});for(var w=0,k=h;w<k.length;w++){var K=k[w];j.setKey.add(K.setKey),j.rarity.add(K.rarity),j.level.add(K.level),j.slotKey.add(K.slotKey),j.mainStatKey.add(K.mainStatKey)}function C(e,t,n){return(0,V.jsxs)(V.Fragment,{children:["Unknown ",t," : Set to ",(0,V.jsx)(Oe.Z,{color:"error",children:n(e)})]})}function P(e,t,n){return(0,V.jsxs)(V.Fragment,{children:["Detected ",t," ",(0,V.jsx)(Oe.Z,{color:"success",children:n(e)})]})}function I(e,t,n){return(0,V.jsxs)(V.Fragment,{children:["Inferred ",t," ",(0,V.jsx)(Oe.Z,{color:"warning",children:n(e)})]})}function A(e,t,n,r){var i=new Set((0,a.Z)(j[e]).filter((function(e){return t.has(e)})));i.size>1?m[e]=function(e,t,n,r){return(0,V.jsxs)(V.Fragment,{children:["Ambiguous ",n," ",(0,V.jsx)(Oe.Z,{color:"error",children:r(e)})," : May also be ",t.filter((function(t){return t!==e})).map((function(e,t){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("b",{children:t>0?"/":""}),(0,V.jsx)(Oe.Z,{color:"warning",children:r(e)})]})}))]})}(g[e],(0,a.Z)(t),n,r):1===i.size?m[e]=P(g[e],n,r):j[e].size>1?m[e]=C(g[e],n,r):m[e]=I(g[e],n,r)}A("setKey",n,"Set",(function(t){return e[t].name})),A("rarity",t,"Rarity",(function(e){return(0,V.jsxs)(V.Fragment,{children:[e," ",1!==e?"Stars":"Star"]})})),A("slotKey",r,"Slot",(function(e){return(0,V.jsx)(V.Fragment,{children:ae.Z.slotName(e)})})),A("mainStatKey",l,"Main Stat",(function(e){return(0,V.jsx)(V.Fragment,{children:de.ZP.getStr(e)})})),m.substats=(0,V.jsx)(V.Fragment,{children:g.substats.filter((function(e){return""!==e.key})).map((function(e,t){return(0,V.jsx)("div",{children:P(e,"Sub Stat",(function(e){return(0,V.jsxs)(V.Fragment,{children:[de.ZP.getStr(e.key),"+",(0,de.qs)(e.value,de.ZP.unit(e.key)),de.ZP.unit(e.key)]})}))},t)}))});var E=function(e){return(0,V.jsxs)(V.Fragment,{children:[(0,de.qs)(e,de.ZP.unit(g.mainStatKey)),de.ZP.unit(g.mainStatKey)]})};return o.find((function(e){return e.mainStatValue===b}))?l.has(g.mainStatKey)?(m.level=P(g.level,"Level",(function(e){return"+"+e})),m.mainStatVal=P(b,"Main Stat value",E)):(m.level=I(g.level,"Level",(function(e){return"+"+e})),m.mainStatVal=I(b,"Main Stat value",E)):(m.level=C(g.level,"Level",(function(e){return"+"+e})),m.mainStatVal=C(b,"Main Stat value",E)),[g,m]}function ut(e,t){var n,r=new Set([]),i=(0,Me.Z)(e);try{for(i.s();!(n=i.n()).done;){var a,s=n.value,l=(0,Me.Z)(T.q2);try{for(l.s();!(a=l.n()).done;){var o=a.value;(0,ve.UX)(s.replace(/\W/g,""),t[o].nameRaw.replace(/\W/g,""))<=2&&r.add(o)}}catch(c){l.e(c)}finally{l.f()}}}catch(c){i.e(c)}finally{i.f()}return r}function ht(e,t,n){for(var r=e,i=0,a=0,s=new Set([]),l=0;l<n;l++){for(var o=0,c=!1,d=0;d<t;d++){var u=4*(l*t+d);ft({r:r[u],g:r[u+1],b:r[u+2]},Ve)?c||(c=!0,o++):c=!1}i!==o?(i=o,a=1):i&&++a>=10&&s.add((0,ve.uZ)(i,3,5))}return s}function ft(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=function(e,t){return Math.abs(e-t)<=n};return r(e.r,t.r)&&r(e.g,t.g)&&r(e.b,t.b)}function xt(e){var t,n=new Set,r=(0,Me.Z)(e);try{for(r.s();!(t=r.n()).done;){var i,a=t.value,s=(0,Me.Z)(T.eV);try{for(s.s();!(i=s.n()).done;){var l=i.value;(0,ve.UX)(a.replace(/\W/g,""),ae.Z.slotName(l).replace(/\W/g,""))<=2&&n.add(l)}}catch(o){s.e(o)}finally{s.f()}}}catch(o){r.e(o)}finally{r.f()}return n}function vt(e){var t,n=new Set([]),r=(0,Me.Z)(e);try{for(r.s();!(t=r.n()).done;){var i,a=t.value,s=(0,Me.Z)(fe.r);try{for(s.s();!(i=s.n()).done;){var l,o,c,d=i.value;a.toLowerCase().includes(null!==(l=null===(o=de.ZP.getStr(d))||void 0===o?void 0:o.toLowerCase())&&void 0!==l?l:"")&&n.add(d),d.includes("_bonu")&&(0,ve.UX)(a.replace(/\W/g,""),(null!==(c=de.ZP.getStr(d))&&void 0!==c?c:"").replace(/\W/g,""))<=1&&n.add(d)}}catch(u){s.e(u)}finally{s.f()}}}catch(u){r.e(u)}finally{r.f()}return n}function Zt(e){var t,n=[],r=(0,Me.Z)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,a=/(\d+[,|\\.]+\d)%/,s=a.exec(i);s&&n.push({mainStatValue:parseFloat(s[1].replace(/,/g,".").replace(/\.{2,}/g,".")),unit:"%"}),(s=(a=/(\d+[,|\\.]\d{3}|\d{2,3})/).exec(i))&&n.push({mainStatValue:parseInt(s[1].replace(/[,|\\.]+/g,""))})}}catch(l){r.e(l)}finally{r.f()}return n}function pt(e){var t,n=[],r=(0,Me.Z)(e);try{var i=function(){var e=t.value;e=e.replace(/^[\W]+/,"").replace(/\n/,""),fe.L.forEach((function(t){var r=de.ZP.getStr(t),i=("%"===de.ZP.unit(t)?new RegExp(r+"\\s*\\+\\s*(\\d+[\\.|,]+\\d)%","im"):new RegExp(r+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(e);i&&n.push({key:t,value:parseFloat(i[1].replace(/,/g,".").replace(/\.{2,}/g,"."))})}))};for(r.s();!(t=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}return n.slice(0,4)}function yt(e,t,n,r){for(var i=r.region,a=void 0===i?"all":i,s=r.mode,l=void 0===s?"color":s,o=Uint8ClampedArray.from(e.data),c="top"===a,d="bot"===a,u="all"===a,h="bw"===l,f="invert"===l,x=Math.floor(e.width*(e.height/2)*4),v=0;v<o.length;v+=4){var Z=o[v],p=o[v+1],y=o[v+2];(u||c&&v<x||d&&v>x)&&Z>=t[0]&&Z<=n[0]&&p>=t[1]&&p<=n[1]&&y>=t[2]&&y<=n[2]?h?o[v]=o[v+1]=o[v+2]=0:f&&(o[v]=255-Z,o[v+1]=255-p,o[v+2]=255-y):o[v]=o[v+1]=o[v+2]=255}return new ImageData(o,e.width,e.height)}var mt=new Set(fe.L);function jt(e,t){switch(t.type){case"reset":return;case"substat":var n=t.index,r=t.substat,i=r.key?e.substats.findIndex((function(e){return e.key===r.key})):-1;if(-1===i||i===n)e.substats[n]=r;else{var a=[e.substats[i],e.substats[n]];e.substats[n]=a[0],e.substats[i]=a[1]}return(0,l.Z)({},e);case"overwrite":return t.artifact;case"update":return(0,l.Z)((0,l.Z)({},e),t.artifact)}}var gt=(0,p.ZP)("input")({display:"none"});function bt(e){var t,n=e.artifactIdToEdit,r=void 0===n?"":n,o=e.cancelEdit,c=e.allowUpload,p=void 0!==c&&c,O=e.allowEmpty,G=void 0!==O&&O,D=e.disableEditSetSlot,B=void 0!==D&&D,_=(0,F.$)("artifact").t,q=(0,he.Z)(se.y.getAll,[]),$=(0,U.useContext)(le.t).database,Q=(0,U.useState)(!1),ee=(0,s.Z)(Q,2),fe=ee[0],xe=ee[1],pe=(0,ue.Z)(),ye=(0,s.Z)(pe,2),je=ye[0],ge=ye[1];(0,U.useEffect)((function(){return $.followAnyArt(ge)}),[$,ge]);var be=(0,U.useReducer)(jt,void 0),Se=(0,s.Z)(be,2),we=Se[0],ke=Se[1],Ke=(0,U.useMemo)((function(){return we&&(0,oe.R$)(we)}),[we]),Ce=(0,U.useState)(!1),Pe=(0,s.Z)(Ce,2),Ie=Pe[0],Ee=Pe[1],Re=(0,U.useReducer)(We,{processed:[],outstanding:[]}),Me=(0,s.Z)(Re,2),Fe=Me[0],Le=Fe.processed,Oe=Fe.outstanding,Te=Me[1],ze=Le[0],Ge=Oe[0],Ve=(0,he.Z)(null===Ge||void 0===Ge?void 0:Ge.imageURL,[null===Ge||void 0===Ge?void 0:Ge.imageURL]),De=(0,he.Z)(null===Ge||void 0===Ge?void 0:Ge.result,[null===Ge||void 0===Ge?void 0:Ge.result]),rt=Le.length+Oe.length,it=null!==(t=null===ze||void 0===ze?void 0:ze.imageURL)&&void 0!==t?t:Ve,at=null!==ze&&void 0!==ze?ze:{},st=at.artifact,lt=at.texts,ot=B||!(null===Ke||void 0===Ke||!Ke.location);(0,U.useEffect)((function(){!Ke&&st&&ke({type:"overwrite",artifact:st})}),[Ke,st,ke]),(0,U.useEffect)((function(){var e=Math.min(16-Le.length,3,Oe.length),t=e&&!Oe[0].result;Oe.slice(0,e).forEach(Be),t&&Te({type:"processing"})}),[Le.length,Oe]),(0,U.useEffect)((function(){De&&Te((0,l.Z)({type:"processed"},De))}),[De,Te]);var ct=(0,U.useCallback)((function(e){xe(!0),Te({type:"upload",files:(0,a.Z)(e).map((function(e){return{file:e,fileName:e.name}}))})}),[Te,xe]),dt=(0,U.useCallback)((function(){return Te({type:"clear"})}),[Te]);(0,U.useEffect)((function(){var e=function(e){return ct(e.clipboardData.files)};return p&&window.addEventListener("paste",e),function(){p&&window.removeEventListener("paste",e)}}),[ct,p]);var ut=(0,U.useCallback)((function(e){ct(e.target.files),e.target.value=null}),[ct]),ht=(0,U.useMemo)((function(){var e,t=je&&r&&$._getArt(r);if(t)return{old:t,oldType:"edit"};if(void 0===Ke)return{old:void 0,oldType:""};var n=je&&$.findDuplicates(Ke),i=n.duplicated,a=n.upgraded;return{old:null!==(e=i[0])&&void 0!==e?e:a[0],oldType:0!==i.length?"duplicate":"upgrade"}}),[Ke,r,$,je]),ft=ht.old,xt=ht.oldType,vt=(0,U.useMemo)((function(){if(!Ke)return{artifact:void 0,errors:[]};var e=(0,ce.BG)(Ke,r);return ft&&(e.artifact.location=ft.location,e.artifact.exclude=ft.exclude),e}),[Ke,r,ft]),Zt=vt.artifact,pt=vt.errors;(0,U.useEffect)((function(){"new"===r&&(xe(!0),ke({type:"reset"}));var e=r&&je&&$._getArt(r);e&&(xe(!0),ke({type:"overwrite",artifact:(0,ve.I8)(e)}))}),[r,$,je]);var yt=Ke?null===q||void 0===q?void 0:q[Ke.setKey]:void 0,bt=(0,U.useCallback)((function(){null===o||void 0===o||o(),Te({type:"pop"}),ke({type:"reset"})}),[o,ke]),St=(0,U.useCallback)((function(e){var t,n,r=e.setKey?q[e.setKey]:yt;function i(e,t,n){return e&&t.includes(e)?e:null!==n&&void 0!==n?n:t[0]}e.setKey&&(e.rarity=i(null===Ke||void 0===Ke?void 0:Ke.rarity,r.rarity,Math.max.apply(Math,(0,a.Z)(r.rarity))),e.slotKey=i(null===Ke||void 0===Ke?void 0:Ke.slotKey,r.slots)),e.rarity&&(e.level=null!==(t=null===Ke||void 0===Ke?void 0:Ke.level)&&void 0!==t?t:0),e.level&&(e.level=(0,ve.uZ)(e.level,0,4*(null!==(n=e.rarity)&&void 0!==n?n:Ke.rarity))),e.slotKey&&(e.mainStatKey=i(null===Ke||void 0===Ke?void 0:Ke.mainStatKey,ae.Z.slotMainStats(e.slotKey))),e.mainStatKey&&(e.substats=[0,1,2,3].map((function(t){return Ke&&Ke.substats[t].key!==e.mainStatKey?Ke.substats[t]:{key:"",value:0}}))),ke({type:"update",artifact:e})}),[Ke,q,yt,ke]),wt=(0,U.useCallback)((function(e,t){ke({type:"substat",index:e,substat:t})}),[ke]),kt=!pt.length,Kt=null!==Ke&&void 0!==Ke?Ke:{},Ct=Kt.rarity,Pt=void 0===Ct?5:Ct,It=Kt.level,At=void 0===It?0:It,Et=Kt.slotKey,Rt=void 0===Et?"flower":Et,Ut=Zt?ae.Z.getArtifactEfficiency(Zt,mt):{},Mt=Ut.currentEfficiency,Ft=void 0===Mt?0:Mt,Lt=Ut.maxEfficiency,Ot=void 0===Lt?0:Lt,Tt=Le.length||Oe.length,zt=(0,U.useCallback)((function(e){Tt&&e.preventDefault(),xe(!1),o()}),[Tt,xe,o]),Gt=(0,y.Z)(),Vt=(0,m.Z)(Gt.breakpoints.up("md")),Dt=Ke?T.Kj.find((function(e){return Ke.mainStatKey.includes(e)})):void 0,Wt=Ke?null!==Dt&&void 0!==Dt?Dt:"success":"primary";return(0,V.jsx)(re.Z,{open:fe,onClose:zt,children:(0,V.jsx)(U.Suspense,{fallback:(0,V.jsx)(j.Z,{variant:"rectangular",sx:{width:"100%",height:fe?"100%":64}}),children:(0,V.jsxs)(X.Z,{children:[(0,V.jsx)(Ue,{modalShow:Ie,hide:function(){return Ee(!1)}}),(0,V.jsx)(g.Z,{title:(0,V.jsx)(L.c,{t:_,i18nKey:"editor.title",children:"Artifact Editor"}),action:(0,V.jsx)(J.Z,{disabled:!!Tt,onClick:zt})}),(0,V.jsxs)(b.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,V.jsxs)(S.ZP,{container:!0,spacing:1,columns:{xs:1,md:2},children:[(0,V.jsxs)(S.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[(0,V.jsxs)(w.Z,{sx:{display:"flex",mb:1},children:[(0,V.jsx)(N.Z,{selectedSetKey:null===Ke||void 0===Ke?void 0:Ke.setKey,onChange:function(e){return St({setKey:e})},sx:{flexGrow:1},disabled:ot}),(0,V.jsx)(W,{rarity:Ke?Pt:void 0,onChange:function(e){return St({rarity:e})},filter:function(e){var t,n;return!(null===yt||void 0===yt||null===(t=yt.rarity)||void 0===t||null===(n=t.includes)||void 0===n||!n.call(t,e))},disabled:ot||!yt})]}),(0,V.jsxs)(k.Z,{component:"div",display:"flex",children:[(0,V.jsx)(te,{id:"filled-basic",label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:At,disabled:!yt,placeholder:"0~".concat(4*Pt),onChange:function(e){return St({level:e})}}),(0,V.jsxs)(w.Z,{children:[(0,V.jsx)(K.Z,{onClick:function(){return St({level:At-1})},disabled:!yt||0===At,children:"-"}),Pt?(0,a.Z)(Array(Pt+1).keys()).map((function(e){return 4*e})).map((function(e){return(0,V.jsx)(K.Z,{onClick:function(){return St({level:e})},disabled:!yt||At===e,children:e},e)})):null,(0,V.jsx)(K.Z,{onClick:function(){return St({level:At+1})},disabled:!yt||At===4*Pt,children:"+"})]})]}),(0,V.jsxs)(k.Z,{component:"div",display:"flex",children:[(0,V.jsx)(H,{disabled:ot||!yt,slotKey:Rt,onChange:function(e){return St({slotKey:e})}}),(0,V.jsx)(Y.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,V.jsx)(U.Suspense,{fallback:(0,V.jsx)(j.Z,{width:"60%"}),children:(0,V.jsx)(C.Z,{color:"text.secondary",children:null!==yt&&void 0!==yt&&yt.getSlotName(Ke.slotKey)?(0,V.jsxs)("span",{children:[(0,V.jsx)(ne.Z,{src:yt.slotIcons[Ke.slotKey]})," ",null===yt||void 0===yt?void 0:yt.getSlotName(Ke.slotKey)]}):_(_e||(_e=(0,i.Z)(["editor.unknownPieceName"])))})})})]}),(0,V.jsxs)(k.Z,{component:"div",display:"flex",children:[(0,V.jsx)(z.Z,{startIcon:Dt?ie.h[Dt]:null!==Ke&&void 0!==Ke&&Ke.mainStatKey?ie.Z[Ke.mainStatKey]:void 0,title:(0,V.jsx)("b",{children:Ke?de.ZP.getArtStr(Ke.mainStatKey):_(qe||(qe=(0,i.Z)(["mainStat"])))}),disabled:!yt,color:Wt,children:ae.Z.slotMainStats(Rt).map((function(e){return(0,V.jsxs)(P.Z,{selected:(null===Ke||void 0===Ke?void 0:Ke.mainStatKey)===e,disabled:(null===Ke||void 0===Ke?void 0:Ke.mainStatKey)===e,onClick:function(){return St({mainStatKey:e})},children:[(0,V.jsx)(I.Z,{children:ie.Z[e]}),(0,V.jsx)(A.Z,{children:de.ZP.getArtStr(e)})]},e)}))}),(0,V.jsx)(Y.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,V.jsx)(C.Z,{color:"text.secondary",children:Ke?"".concat((0,de.qs)(ae.Z.mainStatValue(Ke.mainStatKey,Pt,At),de.ZP.unit(Ke.mainStatKey))).concat(de.ZP.unit(Ke.mainStatKey)):_($e||($e=(0,i.Z)(["mainStat"])))})})]}),(0,V.jsx)(me,{valid:kt,efficiency:Ft,t:_}),Ft!==Ot&&(0,V.jsx)(me,{max:!0,valid:kt,efficiency:Ot,t:_}),p&&(0,V.jsx)(Y.Z,{children:(0,V.jsx)(b.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,V.jsxs)(U.Suspense,{fallback:(0,V.jsx)(j.Z,{width:"100%",height:"100"}),children:[(0,V.jsxs)(S.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,V.jsx)(S.ZP,{item:!0,flexGrow:1,children:(0,V.jsxs)("label",{htmlFor:"contained-button-file",children:[(0,V.jsx)(gt,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:ut}),(0,V.jsx)(K.Z,{component:"span",startIcon:(0,V.jsx)(h.Z,{}),children:"Upload Screenshot (or Ctrl-V)"})]})}),(0,V.jsx)(S.ZP,{item:!0,children:(0,V.jsx)(K.Z,{color:"info",sx:{px:2,minWidth:0},onClick:function(){Ee(!0),M.ZP.modalview("/artifact/how-to-upload")},children:(0,V.jsx)(C.Z,{children:(0,V.jsx)(u.G,{icon:d.sph})})})})]}),it&&(0,V.jsx)(k.Z,{display:"flex",justifyContent:"center",children:(0,V.jsx)(k.Z,{component:"img",src:it,width:"100%",maxWidth:350,height:"auto",alt:"Screenshot to parse for artifact values"})}),rt>0&&(0,V.jsx)(X.Z,{sx:{pl:2},children:(0,V.jsxs)(S.ZP,{container:!0,spacing:1,alignItems:"center",children:[!ze&&Ge&&(0,V.jsx)(S.ZP,{item:!0,children:(0,V.jsx)(E.Z,{size:"1em"})}),(0,V.jsx)(S.ZP,{item:!0,flexGrow:1,children:(0,V.jsx)(C.Z,{children:(0,V.jsxs)("span",{children:["Screenshots in file-queue: ",(0,V.jsx)("b",{children:rt})]})})}),(0,V.jsx)(S.ZP,{item:!0,children:(0,V.jsx)(K.Z,{size:"small",color:"error",onClick:dt,children:"Clear file-queue"})})]})})]})})})]}),(0,V.jsxs)(S.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[[0,1,2,3].map((function(e){return(0,V.jsx)(Ae,{index:e,artifact:Zt,setSubstat:wt},e)})),lt&&(0,V.jsx)(Y.Z,{children:(0,V.jsxs)(b.Z,{children:[(0,V.jsx)("div",{children:lt.slotKey}),(0,V.jsx)("div",{children:lt.mainStatKey}),(0,V.jsx)("div",{children:lt.mainStatVal}),(0,V.jsx)("div",{children:lt.rarity}),(0,V.jsx)("div",{children:lt.level}),(0,V.jsx)("div",{children:lt.substats}),(0,V.jsx)("div",{children:lt.setKey})]})})]})]}),ft&&(0,V.jsxs)(S.ZP,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[(0,V.jsx)(S.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,V.jsxs)(Y.Z,{children:[(0,V.jsx)(C.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:_("edit"!==xt?"duplicate"===xt?He||(He=(0,i.Z)(["editor.dupArt"])):Xe||(Xe=(0,i.Z)(["editor.upArt"])):Ye||(Ye=(0,i.Z)(["editor.beforeEdit"])))}),(0,V.jsx)(Ze.Z,{artifactObj:ft})]})}),Vt&&(0,V.jsx)(S.ZP,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:(0,V.jsx)(Y.Z,{sx:{display:"flex"},children:(0,V.jsx)(f.Z,{sx:{fontSize:40}})})}),(0,V.jsx)(S.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,V.jsxs)(Y.Z,{children:[(0,V.jsx)(C.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:_(Je||(Je=(0,i.Z)(["editor.preview"])))}),(0,V.jsx)(Ze.Z,{artifactObj:Zt})]})})]}),!kt&&(0,V.jsx)(R.Z,{variant:"filled",severity:"error",children:pt.map((function(e,t){return(0,V.jsx)("div",{children:e},t)}))}),(0,V.jsxs)(S.ZP,{container:!0,spacing:2,children:[(0,V.jsx)(S.ZP,{item:!0,children:"edit"===xt?(0,V.jsx)(K.Z,{startIcon:(0,V.jsx)(x.Z,{}),onClick:function(){$.updateArt(we,ft.id),G?bt():(xe(!1),o())},disabled:!we||!kt,color:"primary",children:_(Qe||(Qe=(0,i.Z)(["editor.btnSave"])))}):(0,V.jsx)(K.Z,{startIcon:(0,V.jsx)(x.Z,{}),onClick:function(){$.createArt(Ke),G?bt():(xe(!1),o())},disabled:!Ke||!kt,color:"duplicate"===xt?"warning":"primary",children:_(et||(et=(0,i.Z)(["editor.btnAdd"])))})}),(0,V.jsx)(S.ZP,{item:!0,flexGrow:1,children:G&&(0,V.jsx)(K.Z,{startIcon:(0,V.jsx)(v.Z,{}),disabled:!Ke,onClick:function(){window.confirm(_(Ne||(Ne=(0,i.Z)(["editor.clearPrompt"]))))&&bt()},color:"error",children:_(tt||(tt=(0,i.Z)(["editor.btnClear"])))})}),(0,V.jsx)(S.ZP,{item:!0,children:!1}),ft&&"edit"!==xt&&(0,V.jsx)(S.ZP,{item:!0,children:(0,V.jsx)(K.Z,{startIcon:(0,V.jsx)(Z.Z,{}),onClick:function(){$.updateArt(we,ft.id),G?bt():xe(!1)},disabled:!we||!kt,color:"success",children:_(nt||(nt=(0,i.Z)(["editor.btnUpdate"])))})})]})]})]})})})}},57641:function(e,t,n){e.exports=n.p+"static/media/scan_art_main.66f01e51a69c518e4278.png"},82554:function(e,t,n){e.exports=n.p+"static/media/snippet.d223e79704fd95bcb783.png"}}]);
//# sourceMappingURL=292.bab52f6c.chunk.js.map