(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[10],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var c=a(87),n=a(81),r=a(2),s=a(83),i=a(23),l=(a(0),a(158)),d=a(159),j=a(100),o=a(31),h=a(30),b=a(40),u=a(16),x=a(91),O=a(128),m=a(99),f=a(111),p=a(85),g=a(106),v=a(94),N=a(90);function C(e){var t,a=e.characterId,C=N.a.getCharacter(a);if(!C)return null;var y=v.a.calculateBuild(C),E=y.setToSlots,S=C.characterKey,w=C.name,k=C.weapon,I=C.constellation,T=v.a.getElementalKey(S),W=v.a.getWeaponTypeKey(S),K=g.a.getWeaponName(k.key),B=g.a.getWeaponMainStatValWithOverride(k),z=g.a.getWeaponSubStatKey(k.key),A=g.a.getWeaponSubStatValWithOverride(k),L=g.a.getLevelName(k.levelKey),M=g.a.getWeaponPassiveName(k.key);return Object(r.jsxs)(o.a,{className:e.cardClassName,bg:e.bg?e.bg:"darkcontent",text:"lightfont",children:[Object(r.jsx)(o.a.Header,{className:"pr-2",children:e.header?e.header:Object(r.jsxs)(b.a,{className:"no-gutters",children:[Object(r.jsx)(h.a,{children:Object(r.jsx)("h6",{children:Object(r.jsx)("b",{children:w})})}),Object(r.jsx)(h.a,{xs:"auto",children:Object(r.jsxs)("span",{className:"float-right align-top ml-1",children:[Object(r.jsx)(j.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return null===e||void 0===e?void 0:e.onEdit()},children:Object(r.jsx)(i.a,{icon:s.f})}),Object(r.jsx)(j.a,{variant:"danger",size:"sm",onClick:function(){return null===e||void 0===e?void 0:e.onDelete()},children:Object(r.jsx)(i.a,{icon:s.B})})]})})]})}),Object(r.jsxs)(o.a.Body,{children:[Object(r.jsxs)(b.a,{children:[Object(r.jsx)(h.a,{xs:"auto",className:"pr-0",children:Object(r.jsx)(l.a,{src:v.a.getThumb(S),className:"h-100 w-auto my-n1",rounded:!0})}),Object(r.jsxs)(h.a,{children:[Object(r.jsxs)("h4",{children:[v.a.getName(S)," ",Object(r.jsx)(l.a,{src:O.a.elements[T],className:"inline-icon"})," ",Object(r.jsx)(l.a,{src:null===(t=O.a.weaponTypes)||void 0===t?void 0:t[W],className:"inline-icon"})]}),Object(r.jsx)("h6",{children:Object(r.jsx)(m.a,{stars:v.a.getStar(S),colored:!0})}),Object(r.jsx)("span",{children:"Lvl. ".concat(v.a.getLevelWithOverride(C)," C").concat(I)})]})]}),Object(r.jsx)(b.a,{className:"mb-2",children:Object(r.jsxs)(h.a,{children:[Object(r.jsxs)("h6",{className:"mb-0",children:[K,M&&"(".concat(k.refineIndex+1,")")," ",L]}),Object(r.jsxs)("span",{children:["ATK: ",B,"  ",M&&Object(r.jsxs)("span",{children:[p.d.getStatName(z),": ",A,p.d.getStatUnit(z)]})]})]})}),Object(r.jsx)(b.a,{children:Object(r.jsx)(h.a,{children:Object.entries(x.a.getArtifactSetEffects(E)).map((function(e){var t=Object(n.a)(e,2),a=t[0],s=t[1],i=x.a.getArtifactSetName(a),l=Math.max.apply(Math,Object(c.a)(s));return Object(r.jsx)("h5",{children:Object(r.jsxs)(d.a,{variant:"secondary",children:[i," ",Object(r.jsx)(d.a,{variant:"success",children:l})]})},a)}))})}),Object(r.jsx)(b.a,{children:["hp","atk","def","ele_mas","crit_rate","crit_dmg","ener_rech"].map((function(e){var t=p.d.getStatUnit(e),a=y.finalStats[e];return Object(r.jsxs)(h.a,{xs:12,children:[Object(r.jsxs)("h6",{className:"d-inline",children:[Object(f.a)(e)," ",p.d.getStatName(e)]}),Object(r.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(p.d.fixedUnit(e)))+t})]},e)}))})]}),e.footer&&Object(r.jsx)(o.a.Footer,{children:Object(r.jsx)(j.a,{as:u.b,to:{pathname:"/build",selectedCharacterId:a},children:"Generate Builds"})})]})}},205:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var c=a(2),n=a(82),r=a(89),s=a(98),i=a(97),l=a(83),d=a(23),j=a(0),o=a.n(j),h=a(55),b=a(40),u=a(30),x=a(100),O=a(31),m=a(103),f=a(94),p=a(125),g=a(90),v=a(130),N=a(17),C=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).deleteCharacter=function(e){f.a.removeCharacter(e),c.forceUpdate()},c.editCharacter=function(e){return c.setState({charIdToEdit:e,showEditor:!0},(function(){return c.scrollRef.current.scrollIntoView({behavior:"smooth"})}))},c.cancelEditCharacter=function(){return c.setState({charIdToEdit:null,showEditor:!1})},Object(m.a)(),c.state={charIdToEdit:"",showEditor:!1},N.a.pageview("/character"),c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.scrollRef=o.a.createRef()}},{key:"render",value:function(){var e=this,t=g.a.getCharacterIdList();return Object(c.jsxs)(h.a,{ref:this.scrollRef,children:[this.state.showEditor?Object(c.jsx)(b.a,{className:"mt-2",children:Object(c.jsx)(u.a,{children:Object(c.jsx)(v.a,{editable:!0,characterId:this.state.charIdToEdit,onClose:this.cancelEditCharacter,footer:Object(c.jsx)(x.a,{variant:"danger",onClick:this.cancelEditCharacter,children:"Close"})})})}):null,Object(c.jsxs)(b.a,{className:"mt-2",children:[this.state.showEditor?null:Object(c.jsx)(u.a,{lg:4,md:6,className:"mb-2",children:Object(c.jsxs)(O.a,{className:"h-100",bg:"darkcontent",text:"lightfont",children:[Object(c.jsx)(O.a.Header,{className:"pr-2",children:Object(c.jsx)("span",{children:"Add New Character"})}),Object(c.jsx)(O.a.Body,{className:"d-flex flex-column justify-content-center",children:Object(c.jsx)(b.a,{className:"d-flex flex-row justify-content-center",children:Object(c.jsx)(u.a,{xs:"auto",children:Object(c.jsx)(x.a,{onClick:function(){return e.editCharacter("")},children:Object(c.jsx)("h1",{children:Object(c.jsx)(d.a,{icon:l.o,className:"fa-fw"})})})})})})]})}),t.map((function(t){return Object(c.jsx)(u.a,{lg:4,md:6,className:"mb-2",children:Object(c.jsx)(p.a,{cardClassName:"h-100",characterId:t,onDelete:function(){return e.deleteCharacter(t)},onEdit:function(){return e.editCharacter(t)}})},t)}))]})]})}}]),a}(o.a.Component)}}]);
//# sourceMappingURL=10.e617e870.chunk.js.map