"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[93],{52991:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(68870),i=t(20890),a=t(9350),o=t(31148),s=t(79406),c=t(42320),u=t(24351),l=t(96106),d=t(3992),f=t(25617),h=t(75545),x=t(50428),v=t(80184);function p(e){var n=e.artifactObj,t=e.slotKey,p=(0,c.Z)((null===n||void 0===n?void 0:n.setKey)&&o.y.get(n.setKey),[null===n||void 0===n?void 0:n.setKey]);if(!n||!p)return(0,v.jsx)(d.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:(0,v.jsx)(r.Z,{sx:{width:"100%",pb:"100%",position:"relative"},children:(0,v.jsx)(r.Z,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:a.Z.slot[t]})})});var m=n.mainStatKey,Z=n.rarity,g=n.level,y=n.mainStatVal,j="roll"+(Math.floor(Math.max(g,0)/4)+1),b=u.Kj.find((function(e){return n.mainStatKey.includes(e)})),k=null!==b&&void 0!==b?b:"secondary";return(0,v.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[(0,v.jsx)(x.Z,{slotKey:t,sheet:p,children:(0,v.jsx)(r.Z,{component:"img",className:"grad-".concat(Z,"star"),src:p.slotIcons[t],maxWidth:"100%",maxHeight:"100%"})}),(0,v.jsx)(i.Z,{sx:{position:"absolute",lineHeight:1,pointerEvents:"none"},variant:"subtitle2",children:(0,v.jsxs)(f.Z,{color:j,children:["+",g]})}),(0,v.jsx)(i.Z,{variant:"h6",sx:{position:"absolute",bottom:0,right:0,lineHeight:1},children:(0,v.jsx)(l.Z,{placement:"top",title:(0,v.jsxs)(i.Z,{children:[(0,s.qs)(y,s.ZP.unit(m)),s.ZP.unit(m)," ",s.ZP.getStr(m)]}),disableInteractive:!0,children:(0,v.jsx)(f.Z,{color:k,sx:{p:.25},children:b?h.h[b]:h.Z[m]})})})]})}},50428:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(68870),i=t(47047),a=t(20890),o=t(72791),s=t(96106),c=t(95614),u=t(80184);function l(e){var n,t=e.slotKey,l=e.sheet,d=e.children,f=(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(i.Z,{variant:"text",width:100}),(0,u.jsx)(i.Z,{variant:"text",width:100})]}),h=(0,u.jsx)(o.Suspense,{fallback:f,children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(a.Z,{children:(0,u.jsx)("strong",{children:null===l||void 0===l?void 0:l.name})}),(0,u.jsxs)(a.Z,{children:[(0,c.Ir)(t)," ",null===l||void 0===l||null===(n=l.getSlotName)||void 0===n?void 0:n.call(l,t)]})]})});return(0,u.jsx)(s.Z,{placement:"top",title:h,disableInteractive:!0,children:d})}},96106:function(e,n,t){var r=t(4942),i=t(1413),a=t(45987),o=t(66934),s=t(18455),c=t(69293),u=t(80184),l=["className"],d=(0,o.ZP)((function(e){var n=e.className,t=(0,a.Z)(e,l);return(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({},t),{},{arrow:!0,classes:{popper:n}}))}))((function(e){var n,t=e.theme;return n={},(0,r.Z)(n,"& .".concat(c.Z.arrow),{color:t.palette.common.black}),(0,r.Z)(n,"& .".concat(c.Z.tooltip),{backgroundColor:t.palette.common.black,maxWidth:500}),n}));n.Z=d},30865:function(e,n,t){t.d(n,{Z:function(){return z}});var r=t(29439),i=t(14361),a=t(90690),o=t(66647),s=t(47047),c=t(68870),u=t(13400),l=t(39504),d=t(61889),f=t(81918),h=t(20890),x=t(72791),v=t(2139),p=t(56928),m=t(2693),Z=t(26138),g=t(79406),y=t(84684),j=t(50920),b=t(47639),k=t(24351),w=t(60393),C=t(52991),S=t(71310),K=t(20005),I=t(88034),E=t(25617),_=t(10157),D=t(75545),P=t(77208),W=t(66218),R=t(73036),M=t(42320),N=t(3992),H=t(80184);function T(e){var n=e.weaponId,t=(0,x.useContext)(p.t).database._getWeapon(n),r=(0,M.Z)((null===t||void 0===t?void 0:t.key)&&W.Z.get(t.key),[null===t||void 0===t?void 0:t.key]),i=(0,x.useMemo)((function(){return r&&t&&(0,R.mP)([r.data,(0,R.v0)(t)])}),[r,t]);return t&&r&&i?(0,H.jsx)(N.Z,{children:(0,H.jsxs)(c.Z,{display:"flex",children:[(0,H.jsx)(c.Z,{flexShrink:1,maxWidth:"35%",display:"flex",flexDirection:"column",alignContent:"flex-end",className:"grad-".concat(r.rarity,"star"),children:(0,H.jsx)(c.Z,{component:"img",src:r.img,width:"100%",height:"auto",sx:{mt:"auto"}})}),(0,H.jsxs)(c.Z,{flexGrow:1,sx:{p:1},children:[(0,H.jsx)(h.Z,{variant:"body2",gutterBottom:!0,children:(0,H.jsx)("strong",{children:null===r||void 0===r?void 0:r.name})}),(0,H.jsxs)(h.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},gutterBottom:!0,children:[(0,H.jsxs)(E.Z,{color:"primary",children:["Lv. ",W.Z.getLevelString(t)]}),r.hasRefinement&&(0,H.jsxs)(E.Z,{color:"info",children:["R",t.refinement]})]}),(0,H.jsxs)(h.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},children:[(0,H.jsx)(O,{node:i.get(Z.ri.weapon.main)}),(0,H.jsx)(O,{node:i.get(Z.ri.weapon.sub)})]})]})]})}):null}function O(e){var n=e.node;if(!n.info.key)return null;var t=(0,g.EC)(n.value,n.unit,n.unit?void 0:0);return(0,H.jsxs)(E.Z,{color:"secondary",children:[D.Z[n.info.key]," ",t]})}function z(e){var n,t,r=e.characterKey,f=e.artifactChildren,h=e.weaponChildren,v=e.characterChildren,p=e.onClick,Z=e.onClickHeader,g=e.footer,k=e.isTeammateCard,C=(0,x.useContext)(m.R).teamData,I=null!==(n=(0,b.Z)(C?"":r))&&void 0!==n?n:C,E=null!==(t=null===I||void 0===I?void 0:I[r])&&void 0!==t?t:{},_=E.character,D=E.characterSheet,W=E.target,R=(0,x.useCallback)((function(){return r&&(null===p||void 0===p?void 0:p(r,"overview"))}),[r,p]),M=(0,x.useCallback)((function(e){return(0,H.jsx)(o.Z,{onClick:R,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[R]),N=(0,j.Z)(r);if(!I||!_||!D||!W)return null;var O={character:_,data:W,characterSheet:D,mainStatAssumptionLevel:0,teamData:I,characterDispatch:N};return(0,H.jsx)(x.Suspense,{fallback:(0,H.jsx)(s.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:(0,H.jsx)(m.R.Provider,{value:O,children:(0,H.jsxs)(S.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,H.jsx)(c.Z,{sx:{display:"flex",position:"absolute",zIndex:2,opacity:.7},children:(0,H.jsx)(u.Z,{sx:{p:.5},onClick:function(e){return N({favorite:!_.favorite})},children:_.favorite?(0,H.jsx)(i.Z,{}):(0,H.jsx)(a.Z,{})})}),(0,H.jsxs)(K.Z,{condition:!!p,wrapper:M,children:[(0,H.jsx)(A,{onClick:p?void 0:Z}),(0,H.jsxs)(l.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1},children:[(0,H.jsx)(B,{}),!k&&(0,H.jsxs)(d.ZP,{container:!0,columns:4,spacing:.75,children:[(0,H.jsx)(d.ZP,{item:!0,xs:1,height:"100%",children:(0,H.jsx)(P.Z,{weaponId:_.equippedWeapon})}),(0,w.w6)(0,2).map((function(e){return(0,H.jsx)(d.ZP,{item:!0,xs:1,height:"100%",children:(0,H.jsx)(y.Z,{characterKey:_.team[e],index:e})},e)}))]}),k&&(0,H.jsx)(T,{weaponId:_.equippedWeapon}),!k&&(0,H.jsx)(L,{}),h,f,v]})]}),g]})})})}function A(e){var n=e.onClick,t=(0,x.useContext)(m.R),r=t.data,i=t.characterSheet,a=r.get(Z.ri.charKey).value,s=r.get(Z.ri.charEle).value,u=r.get(Z.ri.lvl).value,l=r.get(Z.ri.constellation).value,p=r.get(Z.ri.asc).value,g=r.get(Z.ri.bonus.auto).value,y=r.get(Z.ri.bonus.skill).value,j=r.get(Z.ri.bonus.burst).value,b=r.get(Z.ri.total.auto).value,k=r.get(Z.ri.total.skill).value,w=r.get(Z.ri.total.burst).value,C=(0,x.useCallback)((function(e){return(0,H.jsx)(o.Z,{onClick:function(){return a&&(null===n||void 0===n?void 0:n(a,"overview"))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[n,a]);return(0,H.jsx)(K.Z,{condition:!!n,wrapper:C,children:(0,H.jsxs)(c.Z,{display:"flex",position:"relative",className:"grad-".concat(i.rarity,"star"),sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.7,backgroundImage:"url(".concat(i.bannerImg,")"),backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[(0,H.jsx)(c.Z,{flexShrink:1,sx:{maxWidth:{xs:"40%",lg:"40%"}},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1,children:(0,H.jsx)(c.Z,{component:"img",src:i.thumbImg,width:"100%",height:"auto",maxWidth:256,sx:{mt:"auto"}})}),(0,H.jsxs)(c.Z,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,children:[(0,H.jsx)(f.Z,{label:(0,H.jsx)(h.Z,{variant:"subtitle1",children:i.name}),size:"small",color:s,sx:{opacity:.85}}),(0,H.jsxs)(d.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,H.jsxs)(d.ZP,{item:!0,sx:{textShadow:"0 0 5px gray"},children:[(0,H.jsxs)(h.Z,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",u]}),(0,H.jsxs)(h.Z,{component:"span",variant:"h6",color:"text.secondary",children:["/",v.SJ[p]]})]}),(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(h.Z,{variant:"h6",children:(0,H.jsxs)(E.Z,{children:["C",l]})})})]}),(0,H.jsxs)(d.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(f.Z,{color:g?"info":"secondary",label:(0,H.jsx)("strong",{children:b})})}),(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(f.Z,{color:y?"info":"secondary",label:(0,H.jsx)("strong",{children:k})})}),(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(f.Z,{color:j?"info":"secondary",label:(0,H.jsx)("strong",{children:w})})})]}),(0,H.jsx)(h.Z,{mt:1,children:(0,H.jsx)(_.t,{stars:i.rarity,colored:!0})})]})]})})}function B(){var e=(0,x.useContext)(p.t).database,n=(0,x.useContext)(m.R).data,t=(0,x.useMemo)((function(){return k.eV.map((function(t){var r;return[t,e._getArt(null!==(r=n.get(Z.ri.art[t].id).value)&&void 0!==r?r:"")]}))}),[n,e]);return(0,H.jsx)(d.ZP,{direction:"row",container:!0,spacing:.75,columns:5,children:t.map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];return(0,H.jsx)(d.ZP,{item:!0,xs:1,children:(0,H.jsx)(C.Z,{artifactObj:i,slotKey:t})},t)}))})}function L(){var e=(0,x.useContext)(m.R).data;return(0,H.jsxs)(c.Z,{sx:{width:"100%"},children:[Object.values(e.getDisplay().basic).map((function(e){return(0,H.jsx)(I.JW,{node:e},e.info.key)})),e.get(Z.ri.special).info.key&&(0,H.jsxs)(c.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,H.jsx)(h.Z,{flexGrow:1,children:(0,H.jsx)("strong",{children:"Specialized:"})}),D.Z[e.get(Z.ri.special).info.key],(0,H.jsx)(h.Z,{children:g.ZP.get(e.get(Z.ri.special).info.key)})]})]})}},84684:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(47047),i=t(20890),a=t(68870),o=t(72791),s=t(9350),c=t(96106),u=t(3992),l=t(25617),d=t(75545),f=t(947),h=t(2139),x=t(13434),v=t(42320),p=t(80184);function m(e){var n=e.characterKey,t=void 0===n?"":n,m=e.index,Z=void 0===m?-1:m,g=(0,v.Z)(f.Z.get(t),[t]),y=(0,x.Z)(t);if(g&&y){var j=(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)(r.Z,{variant:"text",width:100}),children:(0,p.jsxs)(i.Z,{children:[g.elementKey&&d.Z[g.elementKey]," ",g.name]})});return(0,p.jsxs)(u.Z,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[(0,p.jsx)(c.Z,{placement:"top",title:j,children:(0,p.jsx)(a.Z,{display:"flex",className:"grad-".concat(g.rarity,"star"),children:(0,p.jsx)(a.Z,{component:"img",src:g.thumbImgSide,maxWidth:"100%",maxHeight:"100%",sx:{transform:"scale(1.4)",transformOrigin:"bottom"}})})}),(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",lineHeight:1,pointerEvents:"none"},children:(0,p.jsxs)(l.Z,{color:"primary",children:[y.level,"/",h.SJ[y.ascension]]})}),(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",bottom:0,right:0,lineHeight:1,pointerEvents:"none"},children:(0,p.jsxs)(l.Z,{color:"secondary",children:["C",y.constellation]})})]})}return(0,p.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:(0,p.jsx)(a.Z,{component:"img",src:s.Z.team["team".concat(Z+2)],sx:{width:"75%",height:"auto",opacity:.7}})})}},3082:function(e,n,t){t.d(n,{w:function(){return O}});var r=t(93433),i=t(29439),a=t(14361),o=t(90690),s=t(39504),c=t(61889),u=t(94721),l=t(68870),d=t(13400),f=t(66647),h=t(20890),x=t(72791),v=t(9350),p=t(947),m=t(56928),Z=t(26138),g=t(50920),y=t(68544),j=t(42320),b=t(47639),k=t(24351),w=t(50921),C=t(46956),S=t(3992),K=t(71310),I=t(68198),E=t(55942),_=t(9321),D=t(59215),P=t(25617),W=t(10157),R=t(75545),M=t(48510),N=t(73578),H=t(80184),T=["level","rarity","name"];function O(e){var n=e.show,t=e.onHide,a=e.onSelect,o=e.filter,l=void 0===o?function(){return!0}:o,d=e.newFirst,f=void 0!==d&&d,h=(0,x.useMemo)((function(){return f?["new"].concat(T):T}),[f]),v=(0,x.useContext)(m.t).database,Z=(0,x.useState)(h[0]),g=(0,i.Z)(Z,2),b=g[0],K=g[1],E=(0,x.useState)(!1),P=(0,i.Z)(E,2),W=P[0],R=P[1],O=(0,x.useState)(""),A=(0,i.Z)(O,2),B=A[0],L=A[1],F=(0,x.useState)(""),Q=(0,i.Z)(F,2),V=Q[0],q=Q[1],G=(0,j.Z)(p.Z.getAll,[]),J=(0,y.Z)(),Y=(0,i.Z)(J,2),U=Y[0],X=Y[1];(0,x.useEffect)((function(){return v.followAnyChar(X)}),[v,X]);var $=(0,x.useMemo)((function(){return G&&(0,w._L)(v,G)}),[v,G]),ee=(0,x.useMemo)((function(){return G&&U&&(0,w.zU)(v,G)}),[U,v,G]),ne=(0,x.useMemo)((function(){return G?(0,r.Z)(new Set(k.IV)).filter((function(e){return l(v._getChar(e),G[e])})):[]}),[v,G,l]),te=(0,x.useMemo)((function(){return G&&$&&ee?ne.filter((0,C.C)({element:B,weaponType:V,favorite:"yes"},ee)).sort((0,C.e)(b,W,$)).concat(ne.filter((0,C.C)({element:B,weaponType:V,favorite:"no"},ee)).sort((0,C.e)(b,W,$))):[]}),[G,B,V,b,W,$,ee,ne]);return G?(0,H.jsx)(_.Z,{open:n,onClose:t,children:(0,H.jsxs)(S.Z,{children:[(0,H.jsx)(s.Z,{sx:{py:1},children:(0,H.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,H.jsx)(c.ZP,{item:!0,children:(0,H.jsx)(N.Z,{sx:{height:"100%"},onChange:q,value:V,size:"small"})}),(0,H.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,H.jsx)(M.Z,{sx:{height:"100%"},onChange:L,value:B,size:"small"})}),(0,H.jsx)(c.ZP,{item:!0,flexGrow:1}),(0,H.jsx)(c.ZP,{item:!0,children:(0,H.jsx)(D.Z,{sx:{height:"100%"},sortKeys:h,value:b,onChange:K,ascending:W,onChangeAsc:R})}),(0,H.jsx)(c.ZP,{item:!0,children:(0,H.jsx)(I.Z,{onClick:t})})]})}),(0,H.jsx)(u.Z,{}),(0,H.jsx)(s.Z,{children:(0,H.jsx)(c.ZP,{container:!0,spacing:1,children:te.map((function(e){return(0,H.jsx)(c.ZP,{item:!0,xs:6,md:4,lg:3,children:(0,H.jsx)(z,{characterKey:e,onClick:function(){t(),null===a||void 0===a||a(e)}},e)},e)}))})})]})}):null}function z(e){var n,t,r,i=e.onClick,s=e.characterKey,c=(0,j.Z)(p.Z.get(s),[s]),u=(0,b.Z)(s),y=(0,x.useContext)(m.t).database,k=(0,g.Z)(s),w=null===(n=y._getChar(s))||void 0===n?void 0:n.favorite,C=(null!==(t=null===u||void 0===u?void 0:u[s])&&void 0!==t?t:{}).target;if(!c)return null;var S=c.rarity;return(0,H.jsxs)(l.Z,{children:[void 0!==w&&(0,H.jsx)(l.Z,{display:"flex",position:"absolute",alignSelf:"start",zIndex:1,children:(0,H.jsx)(d.Z,{sx:{p:.5},onClick:function(){return k({favorite:!w})},children:w?(0,H.jsx)(a.Z,{}):(0,H.jsx)(o.Z,{})})}),(0,H.jsx)(f.Z,{onClick:i,children:(0,H.jsxs)(K.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,H.jsx)(l.Z,{component:"img",src:c.thumbImg,sx:{width:130,height:"auto"},className:"grad-".concat(S,"star")}),(0,H.jsxs)(l.Z,{sx:{pl:1},children:[(0,H.jsx)(h.Z,{children:(0,H.jsx)("strong",{children:c.name})}),C?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(h.Z,{variant:"h6",children:[" ",c.elementKey&&R.Z[c.elementKey]," ",(0,H.jsx)(E.Z,{src:null===(r=v.Z.weaponTypes)||void 0===r?void 0:r[c.weaponTypeKey]})," ",p.Z.getLevelString(C.get(Z.ri.lvl).value,C.get(Z.ri.asc).value)]}),(0,H.jsxs)(h.Z,{children:[(0,H.jsx)(P.Z,{color:"success",children:"C".concat(C.get(Z.ri.constellation).value)})," ",(0,H.jsx)(P.Z,{color:C.get(Z.ri.bonus.auto).value?"info":"secondary",children:(0,H.jsx)("strong",{children:C.get(Z.ri.total.auto).value})})," ",(0,H.jsx)(P.Z,{color:C.get(Z.ri.bonus.skill).value?"info":"secondary",children:(0,H.jsx)("strong",{children:C.get(Z.ri.total.skill).value})})," ",(0,H.jsx)(P.Z,{color:C.get(Z.ri.bonus.burst).value?"info":"secondary",children:(0,H.jsx)("strong",{children:C.get(Z.ri.total.burst).value})})]})]}):(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(h.Z,{variant:"h6",children:(0,H.jsx)(P.Z,{color:"primary",children:"NEW"})})}),(0,H.jsx)("small",{children:(0,H.jsx)(W.t,{stars:S,colored:!0})})]})]})})]})}},20005:function(e,n,t){function r(e){var n=e.condition,t=e.wrapper,r=e.falseWrapper,i=e.children;return n?t(i):r?r(i):i}t.d(n,{Z:function(){return r}})},88034:function(e,n,t){t.d(n,{lD:function(){return K},JW:function(){return S},ZP:function(){return k}});var r=t(35893),i=t(15021),a=t(68870),o=t(20890),s=t(66934),c=t(90493),u=t(72791),l=t(2693),d=t(79406),f=t(60393),h=t(91702),x=t(1413),v=t(45987),p=t(53174),m=t(54483),Z=t(96106),g=t(80184),y=["className"],j=function(e){var n=e.className,t=(0,v.Z)(e,y);return(0,g.jsx)(Z.Z,(0,x.Z)((0,x.Z)({placement:"top"},t),{},{className:n,children:(0,g.jsx)(a.Z,{component:"span",sx:{cursor:"help"},children:(0,g.jsx)(m.G,{icon:p.sph})})}))},b=t(75545);function k(e){var n=e.fields;return(0,g.jsx)(K,{sx:{m:0},children:n.map((function(e,n){return(0,g.jsx)(w,{field:e,component:i.ZP},n)}))})}function w(e){var n=e.field,t=e.component,r=(0,u.useContext)(l.R),i=r.data,a=r.oldData;if(!(0,u.useMemo)((function(){var e,t;return null===(e=null===n||void 0===n||null===(t=n.canShow)||void 0===t?void 0:t.call(n,i))||void 0===e||e}),[n,i]))return null;if("node"in n){var o=i.get(n.node);if(o.isEmpty)return null;if(a){var s=a.get(n.node),c=s.isEmpty?0:s.value;return(0,g.jsx)(S,{node:o,oldValue:c,suffix:n.textSuffix,component:t})}return(0,g.jsx)(S,{node:o,suffix:n.textSuffix,component:t})}return(0,g.jsx)(C,{field:n,component:t})}function C(e){var n,t=e.field,r=e.component,i=(0,u.useContext)(l.R).data,s=(0,f.mY)(t.value,i),c=(0,f.mY)(t.variant,i),d=t.text&&(0,g.jsx)("span",{children:t.text}),h=t.textSuffix&&(0,g.jsx)("span",{children:t.textSuffix});return(0,g.jsxs)(a.Z,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:r,children:[(0,g.jsxs)(o.Z,{color:"".concat(c,".main"),sx:{display:"flex",gap:1,alignItems:"center"},children:[d,h]}),(0,g.jsxs)(o.Z,{children:["number"===typeof s?null===(n=s.toFixed)||void 0===n?void 0:n.call(s,t.fixed):s,t.unit]})]})}function S(e){var n=e.node,t=e.oldValue,i=e.suffix,s=e.component;if(n.isEmpty)return null;i=i&&(0,g.jsx)("span",{children:i});var c=n.info.key&&b.Z[n.info.key],u=n.info.key?d.ZP.get(n.info.key):"",l=n.info.isTeamBuff,f=n.formula,x="";if(t){var v=n.value-t;x=(0,g.jsxs)("span",{children:[(0,d.EC)(t,n.unit),v>1e-4||v<-1e-4?(0,g.jsxs)(h.Z,{color:v>0?"success":"error",children:[" ",v>0?"+":"",(0,d.EC)(v,n.unit)]}):""]})}else x=(0,d.EC)(n.value,n.unit);var p=!!n.formula&&(0,g.jsx)(j,{title:(0,g.jsx)(o.Z,{children:f})});return(0,g.jsxs)(a.Z,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:s,children:[(0,g.jsxs)(o.Z,{color:"".concat(n.info.variant,".main"),sx:{display:"flex",gap:1,alignItems:"center"},children:[!!l&&(0,g.jsx)(r.Z,{}),c,u,i]}),(0,g.jsxs)(o.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[x,p]})]})}var K=(0,s.ZP)(c.Z)((function(e){var n=e.theme;return{borderRadius:n.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:n.palette.contentDark.main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:n.palette.contentDarker.main}}}))},48510:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1413),i=t(45987),a=t(72466),o=t(68870),s=t(72791),c=t(24351),u=t(66934),l=t(90388),d=(0,u.ZP)(l.Z,{shouldForwardProp:function(e){return"baseColor"!==e&&"selectedColor"!==e}})((function(e){var n=e.theme,t=e.baseColor,r=void 0===t?"secondary":t,i=e.selectedColor,a=void 0===i?"success":i;return{"&":{backgroundColor:n.palette[r].main,color:n.palette[r].contrastText},"&:hover":{backgroundColor:n.palette[r].dark},"&.Mui-selected":{backgroundColor:n.palette[a].main,color:n.palette[a].contrastText},"&.Mui-selected:hover":{backgroundColor:n.palette[a].dark},"&.Mui-disabled":{backgroundColor:n.palette[r].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:n.palette[a].dark}}})),f=t(75545),h=t(80184),x=["value","onChange"];function v(e){var n=e.value,t=e.onChange,u=(0,i.Z)(e,x),l=(0,s.useCallback)((function(e,n){return t(n||"")}),[t]);return(0,h.jsx)(a.Z,(0,r.Z)((0,r.Z)({exclusive:!0,onChange:l,value:n||c.N},u),{},{children:c.N.map((function(e){return(0,h.jsx)(d,{value:e,selectedColor:e,children:(0,h.jsx)(o.Z,{sx:{fontSize:"2em",lineHeight:1},children:f.h[e]})},e)}))}))}},73578:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),i=t(45987),a=t(90388),o=t(72791),s=t(9350),c=t(24351),u=t(55942),l=t(91839),d=t(80184),f=["value","onChange"];function h(e){var n=e.value,t=e.onChange,h=(0,i.Z)(e,f),x=(0,o.useCallback)((function(e,n){return t(n||"")}),[t]);return(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({exclusive:!0,onChange:x,value:n||c.yd},h),{},{children:c.yd.map((function(e){var n;return(0,d.jsx)(a.Z,{value:e,children:(0,d.jsx)(u.Z,{src:null===(n=s.Z.weaponTypes)||void 0===n?void 0:n[e],size:2})},e)}))}))}},77208:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(68870),i=t(20890),a=t(72791),o=t(66218),s=t(56928),c=t(26138),u=t(73036),l=t(79406),d=t(42320),f=t(3992),h=t(25617),x=t(75545),v=t(41717),p=t(80184);function m(e){var n=e.weaponId,t=(0,a.useContext)(s.t).database._getWeapon(n),l=(0,d.Z)((null===t||void 0===t?void 0:t.key)&&o.Z.get(t.key),[null===t||void 0===t?void 0:t.key]),x=(0,a.useMemo)((function(){return l&&t&&(0,u.mP)([l.data,(0,u.v0)(t)])}),[l,t]);if(!t||!l||!x)return null;var m=(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(Z,{node:x.get(c.ri.weapon.main)}),(0,p.jsx)(Z,{node:x.get(c.ri.weapon.sub)})]});return(0,p.jsxs)(f.Z,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[(0,p.jsx)(r.Z,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:"grad-".concat(l.rarity,"star"),children:(0,p.jsx)(v.Z,{sheet:l,addlText:m,children:(0,p.jsx)(r.Z,{component:"img",src:l.img,maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",lineHeight:1,pointerEvents:"none"},children:(0,p.jsx)(h.Z,{color:"primary",children:o.Z.getLevelString(t)})}),l.hasRefinement&&(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",bottom:0,right:0,lineHeight:1,pointerEvents:"none"},children:(0,p.jsxs)(h.Z,{color:"secondary",children:["R",t.refinement]})})]})}function Z(e){var n=e.node;if(!n.info.key)return null;var t=(0,l.EC)(n.value,n.unit,n.unit?void 0:0);return(0,p.jsxs)(i.Z,{children:[x.Z[n.info.key]," ",t]})}},41717:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(47047),i=t(20890),a=t(72791),o=t(9350),s=t(96106),c=t(55942),u=t(80184);function l(e){var n=e.sheet,t=e.addlText,l=e.children,d=(0,u.jsxs)(a.Suspense,{fallback:(0,u.jsx)(r.Z,{variant:"text",width:100}),children:[(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(c.Z,{src:o.Z.weaponTypes[n.weaponType]})," ",n.name]}),t]});return(0,u.jsx)(s.Z,{placement:"top",title:d,disableInteractive:!0,children:l})}},2693:function(e,n,t){t.d(n,{R:function(){return r}});var r=(0,t(72791).createContext)({})},31148:function(e,n,t){t.d(n,{y:function(){return Z},i:function(){return g}});var r=t(29439),i=t(93433),a=t(15671),o=t(43144),s=t(55942),c=t(25617),u=t(66624),l=t(26138),d=t(73036),f=t(24351),h=t(53343),x=t(80184),v=t.e(159).then(t.bind(t,22159)).then((function(e){return e.default})),p=function(e,n){return(0,x.jsx)(u.v,{ns:"artifact_".concat(e,"_gen"),key18:n})},m=v.then((function(e){return(0,d.b3)(Object.values(e).map((function(e){return e.data})))})),Z=function(){function e(n,t,r){var i=this;(0,a.Z)(this,e),this.sheet=void 0,this.key=void 0,this.data=void 0,this.getSlotName=function(e){return p(i.key,"pieces.".concat(e,".name"))},this.getSlotDesc=function(e){return p(i.key,"pieces.".concat(e,".desc"))},this.setEffectDesc=function(e){return p(i.key,"setEffects.".concat(e))},this.setEffectDocument=function(e){var n;return null===(n=i.sheet.setEffects[e])||void 0===n?void 0:n.document},this.hasEnough=function(e,n){var t;return(null!==(t=n.get(l.qH.artSet[i.key]).value)&&void 0!==t?t:0)>=e},this.sheet=t,this.key=n,this.data=r}return(0,o.Z)(e,[{key:"name",get:function(){return p(this.key,"setName")}},{key:"defIconSrc",get:function(){var e=this.slots[0];if(this.slotIcons[e])return this.slotIcons[e]}},{key:"defIcon",get:function(){return(0,x.jsx)(s.Z,{src:this.defIconSrc,sx:{fontSize:"1.5em"}})}},{key:"nameWithIcon",get:function(){var e=this.slots[0];return(0,x.jsxs)("span",{children:[(0,x.jsx)(s.Z,{src:this.slotIcons[e]})," ",p(this.key,"setName")]})}},{key:"nameRaw",get:function(){return this.sheet.name}},{key:"rarity",get:function(){return this.sheet.rarity}},{key:"slots",get:function(){switch(this.key){case"PrayersForDestiny":case"PrayersForIllumination":case"PrayersForWisdom":case"PrayersToSpringtime":return["circlet"];default:return(0,i.Z)(f.eV)}}},{key:"slotIcons",get:function(){return this.sheet.icons}},{key:"setEffects",get:function(){return this.sheet.setEffects}}],[{key:"get",value:function(e){return e?v.then((function(n){return n[e]})):void 0}},{key:"getAll",get:function(){return v}},{key:"getAllData",get:function(){return m}},{key:"setKeysByRarities",value:function(e){var n={};return Object.entries(e).forEach((function(e){var t=(0,r.Z)(e,2),a=t[0],o=t[1],s=Math.max.apply(Math,(0,i.Z)(o.rarity));n[s]?n[s].push(a):n[s]=[a]})),n}},{key:"setEffects",value:function(e,n){var t={};return Object.entries(e).forEach((function(e){var i=(0,r.Z)(e,2),a=i[0],o=i[1],s=Object.keys(o.setEffects).map((function(e){return parseInt(e)})).filter((function(e){return o.hasEnough(e,n)}));s.length&&(t[a]=s)})),t}}]),e}(),g=function(e,n){var t=function(n){return(0,x.jsx)(u.v,{ns:"artifact_".concat(e,"_gen"),key18:n})};return function(e){var r,i;return{title:t("setName"),icon:(0,x.jsx)(s.Z,{size:2,sx:{m:-1},src:null!==(r=null!==(i=n.flower)&&void 0!==i?i:n.circlet)&&void 0!==r?r:""}),action:(0,x.jsx)(c.Z,{color:"success",children:(0,h.st)("".concat(e,"set"))}),description:t("setEffects.".concat(e))}}}},11741:function(e,n,t){t.d(n,{J:function(){return N},Y:function(){return H}});var r,i=t(1413),a=t(93433),o=t(75545),s=t(66624),c=t(26138),u=t(73036),l=t(78661),d=t(24351),f=t(60393),h=t(53343),x=t(80184),v=function(e){return(0,x.jsx)(s.v,{ns:"elementalResonance_gen",key18:e})},p=(0,f.Uq)(d.Kj,(function(e){return["".concat(e,"_res_"),(0,l.ew)(l.Sm.apply(void 0,(0,a.Z)(d.Kj.map((function(e){return(0,l.VV)(1,c.uK[e])})))),4,(0,l.aQ)(.15))]})),m={name:v("ProtectiveCanopy.name"),desc:v("ProtectiveCanopy.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.anemo," ",o.Z.geo," ",o.Z.pyro," ",o.Z.hydro," ",o.Z.cryo," ",o.Z.electro," x4"]}),canShow:function(e){return 4===d.N.filter((function(n){return e.get(c.uK[n]).value>=1})).length},sections:[{teamBuff:!0,fields:Object.values(p).map((function(e){return{node:e}}))}]},Z=(0,l.ew)(c.uK.pyro,2,(0,l.aQ)(.25)),g={name:v("FerventFlames.name"),desc:v("FerventFlames.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.pyro," ",o.Z.pyro]}),canShow:function(e){return e.get(c.uK.pyro).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.cryo"),value:-40,unit:"%"},{node:Z}]}]},y=(0,l.ew)(c.uK.hydro,2,(0,l.aQ)(.25)),j={name:v("SoothingWater.name"),desc:v("SoothingWater.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.hydro," ",o.Z.hydro]}),canShow:function(e){return e.get(c.uK.hydro).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.pyro"),value:-40,unit:"%"},{node:y}]}]},b=["resonance","ShatteringIce"],k=(0,h.v9)(b),w=(0,l.ew)(c.uK.cryo,2,(0,l.Dg)(k,"on",(0,l.aQ)(.15))),C={name:v("ShatteringIce.name"),desc:v("ShatteringIce.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.cryo," ",o.Z.cryo]}),canShow:function(e){return e.get(c.uK.cryo).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:b,value:k,name:(r="ShatteringIce.cond",(0,x.jsx)(s.v,{ns:"elementalResonance",key18:r})),header:{title:v("ShatteringIce.name"),icon:o.Z.cryo},states:{on:{fields:[{node:w}]}}}]},S={name:v("HighVoltage.name"),desc:v("HighVoltage.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.electro," ",o.Z.electro]}),canShow:function(e){return e.get(c.uK.electro).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.hydro"),value:-40,unit:"%"}]}]},K=(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(-.15)),I=(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(.1)),E=(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(-.05)),_={name:v("ImpetuousWinds.name"),desc:v("ImpetuousWinds.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.anemo," ",o.Z.anemo]}),canShow:function(e){return e.get(c.uK.anemo).value>=2},sections:[{teamBuff:!0,fields:[{node:K},{node:I},{node:E}]}]},D=["resonance","EnduringRock"],P=(0,h.v9)(D),W=(0,l.ew)(c.uK.geo,2,(0,l.aQ)(.15)),R=(0,l.ew)(c.uK.geo,2,(0,l.Dg)(P,"on",(0,l.aQ)(.15))),M=(0,l.ew)(c.uK.geo,2,(0,l.Dg)(P,"on",(0,l.aQ)(-.2))),N=[m,g,j,C,S,_,{name:v("EnduringRock.name"),desc:v("EnduringRock.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.geo," ",o.Z.geo]}),canShow:function(e){return e.get(c.uK.geo).value>=2},sections:[{teamBuff:!0,text:v("EnduringRock.desc"),fields:[{node:W}]},{teamBuff:!0,path:D,value:P,header:{title:v("EnduringRock.name"),icon:o.Z.geo},name:(0,h.st)("protectedByShield"),states:{on:{fields:[{node:R},{node:M},{text:(0,h.Oy)("duration"),value:15,unit:"s"}]}}}]}],H=(0,u.d1)({premod:(0,i.Z)((0,i.Z)({},p),{},{atk_:Z,incHeal_:y,staminaDec_:K,moveSPD_:I,cdRed_:E,shield_:W,all_dmg_:R,geo_enemyRes_:M}),total:{critRate_:w}})},66218:function(e,n,t){t.d(n,{Z:function(){return h},X:function(){return x}});var r=t(29439),i=t(15671),a=t(43144),o=t(55942),s=t(25617),c=t(66624),u=t(26138),l=t(2139),d=t(80184),f=t.e(505).then(t.bind(t,80505)).then((function(e){return e.default})),h=function(){function e(n,t,r,a){var o=this;(0,i.Z)(this,e),this.key=void 0,this.sheet=void 0,this.data=void 0,this.rarity=void 0,this.weaponType=void 0,this.tr=function(e){return(0,d.jsx)(c.v,{ns:"weapon_".concat(o.key,"_gen"),key18:e})},this.passiveDescription=function(e){return o.hasRefinement?o.tr("passiveDescription.".concat(e)):""},this.rarity=r.rarity,this.weaponType=r.weaponType,this.key=n,this.sheet=t,this.data=a}return(0,a.Z)(e,[{key:"name",get:function(){return this.tr("name")}},{key:"hasRefinement",get:function(){return this.rarity>2}},{key:"passiveName",get:function(){return this.hasRefinement?this.tr("passiveName"):""}},{key:"description",get:function(){return this.tr("description")}},{key:"img",get:function(){return this.sheet.icon}},{key:"imgAwaken",get:function(){return this.sheet.iconAwaken}},{key:"document",get:function(){return this.sheet.document}},{key:"milestoneLevels",get:function(){return this.hasRefinement?l.D4:l.Xu}},{key:"ambiguousLevel",value:function(e){return this.hasRefinement?(0,l.ek)(e):(0,l.nB)(e)}}],[{key:"getAll",get:function(){return f}}]),e}();h.get=function(e){return e?f.then((function(n){return n[e]})):void 0},h.getWeaponsOfType=function(e,n){return Object.fromEntries(Object.entries(e).filter((function(e){var t=(0,r.Z)(e,2);t[0];return t[1].weaponType===n})))},h.getLevelString=function(e){return"".concat(e.level,"/").concat(l.SJ[e.ascension])};var x=function(e,n,t,r){var i=function(n){return(0,d.jsx)(c.v,{ns:"weapon_".concat(e,"_gen"),key18:n})};return{title:i("passiveName"),icon:function(e){return(0,d.jsx)(o.Z,{size:2,sx:{m:-1},src:e.get(u.qH.weapon.asc).value<2?n:t})},action:r&&(0,d.jsx)(s.Z,{color:"success",children:r}),description:function(e){return i("passiveDescription.".concat(e.get(u.qH.weapon.refineIndex).value))}}}},53561:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(15861),i=t(87757),a=t.n(i),o=t(72791),s=t(16871),c=t(947),u=t(9274),l=t(24351),d=t(60393);var f=t(56928),h=t(11400);function x(){var e,n=(0,o.useContext)(f.t).database,t=(0,s.s0)(),i=(null!==(e=(0,s.bS)({path:"/character/:charKey/:tab",end:!1}))&&void 0!==e?e:{params:{tab:""}}).params.tab,x=void 0===i?"":i,v=(0,o.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(r){var i,o,s,f,v,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n._getChar(r),o=x,i){e.next=14;break}return s={key:r,level:1,ascension:0,hitMode:"avgHit",reactionMode:"",equippedArtifacts:(0,d.O)(l.eV,(function(){return""})),equippedWeapon:"",conditional:{},bonusStats:{},enemyOverride:{},buildSettings:(0,u.$)(),talent:{auto:1,skill:1,burst:1},infusionAura:"",constellation:0,team:["","",""],compareData:!1,favorite:!1},n.updateChar(s),e.next=7,c.Z.get(r);case 7:if(f=e.sent){e.next=10;break}return e.abrupt("return");case 10:v=(0,h.Q)(f.weaponTypeKey),p=n.createWeapon(v),n.setWeaponLocation(p,r),o="";case 14:t("/character/".concat(r,"/").concat(o));case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,n,x]);return v}},13434:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(72791),a=t(56928);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,i.useContext)(a.t),t=n.database,o=(0,i.useState)(t._getChar(e)),s=(0,r.Z)(o,2),c=s[0],u=s[1];return(0,i.useEffect)((function(){return u(t._getChar(e))}),[t,e]),(0,i.useEffect)((function(){return e?t.followChar(e,u):void 0}),[e,u,t]),c}},50920:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(93433),i=t(4942),a=t(1413),o=t(72791),s=t(56928),c=t(60393);function u(e){var n=(0,o.useContext)(s.t).database;return(0,o.useCallback)((function(t){if(e)if("type"in t)switch(t.type){case"weapon":n.setWeaponLocation(t.id,e);break;case"enemyOverride":var o=n._getChar(e),s=o.enemyOverride,u=t.statKey,l=t.value;if(s[u]===l)break;n.updateChar((0,a.Z)((0,a.Z)({},o),{},{enemyOverride:(0,a.Z)((0,a.Z)({},s),{},(0,i.Z)({},u,l))}));break;case"editStats":var d=n._getChar(e),f=t.statKey,h=t.value,x=(0,c.I8)(d.bonusStats);if(x[f]===h)break;h?x[f]=h:delete x[f],n.updateChar((0,a.Z)((0,a.Z)({},d),{},{bonusStats:x}));break;case"resetStats":var v=n._getChar(e),p=t.statKey,m=v.bonusStats;delete m[p],n.updateChar((0,a.Z)((0,a.Z)({},v),{},{bonusStats:m}));break;case"team":var Z=n._getChar(e),g=Z.team,y=t.index,j=t.charKey,b=g[y];if(g[y]=j,b){var k=n._getChar(b);k&&n.updateChar((0,a.Z)((0,a.Z)({},k),{},{team:["","",""]}))}if(j){var w=n._getChar(j);w&&w.team.forEach((function(e){if(e){var t=n._getChar(e);t&&n.updateChar((0,a.Z)((0,a.Z)({},t),{},{team:t.team.map((function(e){return e===j?"":e}))}))}}))}g.forEach((function(t,i){if(t){var o=n._getChar(t);o&&n.updateChar((0,a.Z)((0,a.Z)({},o),{},{team:[e].concat((0,r.Z)(g)).filter((function(e,n){return n!==i+1}))}))}})),n.updateChar((0,a.Z)((0,a.Z)({},Z),{},{team:g}))}else n.updateChar((0,a.Z)((0,a.Z)({},n._getChar(e)),t))}),[e,n])}},47639:function(e,n,t){t.d(n,{Z:function(){return k},V:function(){return w}});var r=t(93433),i=t(4942),a=t(15861),o=t(1413),s=t(45987),c=t(29439),u=t(87757),l=t.n(u),d=t(72791),f=t(31148),h=t(947),x=t(11741),v=t(66218),p=t(56928),m=t(26138),Z=t(73036),g=t(60393),y=t(68544),j=t(42320),b=["data"];function k(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,r=(0,d.useContext)(p.t),i=r.database,a=(0,y.Z)(),u=(0,c.Z)(a,2),l=u[0],f=u[1],h=(0,j.Z)(w(i,e,n,t),[l,e,i,n,t]),x=null!==h&&void 0!==h?h:{},v=x.team,m=void 0===v?[]:v,k=x.teamData,C=x.teamBundle;(0,d.useEffect)((function(){return e?i.followChar(e,f):void 0}),[e,f,i]),(0,d.useEffect)((function(){return e?i.followAnyArt(f):void 0}),[e,f,i]);var S=(0,c.Z)(m,4),K=S[0],I=S[1],E=S[2],_=S[3];(0,d.useEffect)((function(){return K?i.followChar(K,f):void 0}),[K,f,i]),(0,d.useEffect)((function(){return I?i.followChar(I,f):void 0}),[I,f,i]),(0,d.useEffect)((function(){return E?i.followChar(E,f):void 0}),[E,f,i]),(0,d.useEffect)((function(){return _?i.followChar(_,f):void 0}),[_,f,i]);var D=(0,d.useMemo)((function(){return k&&(0,Z.Qo)(k,e)}),[k,e]),P=(0,d.useMemo)((function(){if(D&&C)return(0,g.xh)(D,(function(e,n){var t=C[n],r=(t.data,(0,s.Z)(t,b));return(0,o.Z)((0,o.Z)({},e),r)}))}),[D,C]);return P}function w(e,n){return C.apply(this,arguments)}function C(){return C=(0,a.Z)(l().mark((function e(n,t){var r,o,s,c,u,d,f=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.length>2&&void 0!==f[2]?f[2]:0,o=f.length>3?f[3]:void 0,t){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,S(n,t,r,o);case 6:if(s=e.sent){e.next=9;break}return e.abrupt("return");case 9:return c=[t],u=(0,i.Z)({},t,s),d=(0,i.Z)({},t,s.data),e.next=14,Promise.all(s.character.team.map(function(){var e=(0,a.Z)(l().mark((function e(t){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S(n,t);case 4:if(r=e.sent){e.next=7;break}return e.abrupt("return");case 7:c.push(t),u[t]=r,d[t]=r.data;case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 14:return e.abrupt("return",{team:c,teamData:d,teamBundle:u});case 15:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function S(e,n){return K.apply(this,arguments)}function K(){return K=(0,a.Z)(l().mark((function e(n,t){var i,a,o,s,c,u,d,p,g,y=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=y.length>2&&void 0!==y[2]?y[2]:0,a=y.length>3?y[3]:void 0,t){e.next=4;break}return e.abrupt("return");case 4:if(o=n._getChar(t)){e.next=7;break}return e.abrupt("return");case 7:if(s=n._getWeapon(o.equippedWeapon)){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,h.Z.get(t);case 12:return c=e.sent,e.next=15,v.Z.get(s.key);case 15:return u=e.sent,e.next=18,f.y.getAllData;case 18:if(d=e.sent,c&&u&&d){e.next=21;break}return e.abrupt("return");case 21:return p=(null!==a&&void 0!==a?a:Object.values(o.equippedArtifacts).map((function(e){return n._getArt(e)}))).filter((function(e){return e})),g=[].concat((0,r.Z)(p.map((function(e){return(0,Z.n3)(e,i)}))),[(0,Z.vn)(o),c.getData(o.elementKey),(0,Z.v0)(s),u.data,d,m.y0,x.Y]),e.abrupt("return",{character:o,weapon:s,characterSheet:c,weaponSheet:u,data:g});case 24:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}}}]);
//# sourceMappingURL=93.3a9dc083.chunk.js.map