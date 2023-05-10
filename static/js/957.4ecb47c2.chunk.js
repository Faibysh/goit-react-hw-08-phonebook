"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[957],{6957:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(2791),r=n(9434),o=n(493),i=n(4942),s=n(3366),c=n(7462),d=n(8182),l=n(4419),u=n(627),m=n(2065),p=n(6934),v=n(1402),b=n(335),g=n(9103),f=n(162),h=n(2071),y=n(6199),x=n(5878),Z=n(1217);function C(e){return(0,Z.Z)("MuiListItem",e)}var I=(0,x.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var w=(0,x.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function j(e){return(0,Z.Z)("MuiListItemSecondaryAction",e)}(0,x.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var S=n(3329),A=["className"],k=(0,p.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,c.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),L=a.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,o=(0,s.Z)(n,A),i=a.useContext(y.Z),u=(0,c.Z)({},n,{disableGutters:i.disableGutters}),m=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,l.Z)(a,j,n)}(u);return(0,S.jsx)(k,(0,c.Z)({className:(0,d.Z)(m.root,r),ownerState:u,ref:t},o))}));L.muiName="ListItemSecondaryAction";var P=L,N=["className"],G=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],F=(0,p.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,c.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,c.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,i.Z)({},"& > .".concat(w.root),{paddingRight:48}),(t={},(0,i.Z)(t,"&.".concat(I.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,i.Z)(t,"&.".concat(I.selected),(0,i.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,m.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(I.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,m.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,i.Z)(t,"&.".concat(I.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,i.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(I.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,m.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,m.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),R=(0,p.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),M=a.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,o=void 0===r?"center":r,i=n.autoFocus,m=void 0!==i&&i,p=n.button,x=void 0!==p&&p,Z=n.children,w=n.className,j=n.component,A=n.components,k=void 0===A?{}:A,L=n.componentsProps,M=void 0===L?{}:L,O=n.ContainerComponent,V=void 0===O?"li":O,_=n.ContainerProps,q=(_=void 0===_?{}:_).className,z=n.dense,B=void 0!==z&&z,D=n.disabled,W=void 0!==D&&D,K=n.disableGutters,T=void 0!==K&&K,E=n.disablePadding,J=void 0!==E&&E,Y=n.divider,$=void 0!==Y&&Y,H=n.focusVisibleClassName,Q=n.secondaryAction,U=n.selected,X=void 0!==U&&U,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,s.Z)(n.ContainerProps,N),oe=(0,s.Z)(n,G),ie=a.useContext(y.Z),se=a.useMemo((function(){return{dense:B||ie.dense||!1,alignItems:o,disableGutters:T}}),[o,ie.dense,B,T]),ce=a.useRef(null);(0,f.Z)((function(){m&&ce.current&&ce.current.focus()}),[m]);var de=a.Children.toArray(Z),le=de.length&&(0,g.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,c.Z)({},n,{alignItems:o,autoFocus:m,button:x,dense:se.dense,disabled:W,disableGutters:T,disablePadding:J,divider:$,hasSecondaryAction:le,selected:X}),me=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,l.Z)(i,C,a)}(ue),pe=(0,h.Z)(ce,t),ve=ae.root||k.Root||F,be=te.root||M.root||{},ge=(0,c.Z)({className:(0,d.Z)(me.root,be.className,w),disabled:W},oe),fe=j||"li";return x&&(ge.component=j||"div",ge.focusVisibleClassName=(0,d.Z)(I.focusVisible,H),fe=b.Z),le?(fe=ge.component||j?fe:"div","li"===V&&("li"===fe?fe="div":"li"===ge.component&&(ge.component="div")),(0,S.jsx)(y.Z.Provider,{value:se,children:(0,S.jsxs)(R,(0,c.Z)({as:V,className:(0,d.Z)(me.container,q),ref:pe,ownerState:ue},re,{children:[(0,S.jsx)(ve,(0,c.Z)({},be,!(0,u.Z)(ve)&&{as:fe,ownerState:(0,c.Z)({},ue,be.ownerState)},ge,{children:de})),de.pop()]}))})):(0,S.jsx)(y.Z.Provider,{value:se,children:(0,S.jsxs)(ve,(0,c.Z)({},be,{as:fe,ref:pe},!(0,u.Z)(ve)&&{ownerState:(0,c.Z)({},ue,be.ownerState)},ge,{children:[de,Q&&(0,S.jsx)(P,{children:Q})]}))})})),O=n(6151),V=function(e){return e.contacts.items},_=function(e){return e.contacts.isLoading},q=function(e){return e.contacts.error},z=function(e){var t=function(e){return e.filter}(e),n=V(e),a=t.toLocaleLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},B=n(3445),D=n(4056),W=function(){var e=(0,r.I0)(),t=(0,r.v9)(D.Z.getIsLoggedin),n=(0,r.v9)(z);return(0,S.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:t&&n.map((function(t){return(0,S.jsxs)(M,{sx:{mb:2,borderRadius:15,backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)",display:"flex",justifyContent:"space-between",maxWidth:400,fontWeight:500,color:"white"},children:[t.name,": ",t.number,(0,S.jsx)(O.Z,{variant:"contained",type:"button",onClick:function(){var n;n=t.id,e((0,B.GK)(n))},sx:{backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)",ml:5,maxWidth:"300px"},children:"Delete"})]},t.id)}))})},K=n(8308),T=n(596),E=function(){var e=(0,r.v9)((function(e){return e.filter})),t=(0,r.I0)();return(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(K.Z,{autoComplete:"off",label:"Find contacts by name",variant:"outlined",type:"text",value:e,onChange:function(e){t((0,T.K)(e.currentTarget.value))},sx:{mt:2,mb:2,width:300}})})},J=n(2554),Y=function(){var e=(0,r.v9)(V),t=(0,r.v9)((function(e){return e.contacts.name})),n=(0,r.v9)((function(e){return e.contacts.number})),a=(0,r.I0)(),o=function(e){switch(e.target.name){case"name":t=e.target.value;break;case"number":n=e.target.value;break;default:return}};return(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,S.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),e.find((function(e){return e.name.toLowerCase()===t.target.elements.name.value.toLowerCase()})))return alert("".concat(t.target.elements.name.value," is already in contacts list!"));var n=t.target;a((0,B.uK)({name:n.elements.name.value,number:n.elements.number.value})),n.reset()},className:J.iv.contactForm,children:[(0,S.jsx)(K.Z,{label:"Name",variant:"outlined",type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:o,sx:{mt:35,ml:5,width:300}}),(0,S.jsx)(K.Z,{label:"Number",variant:"outlined",type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:o,sx:{mt:35,ml:5,width:300}}),(0,S.jsx)(O.Z,{variant:"contained",type:"submit",sx:{backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)",mt:36,ml:5,mb:5,maxWidth:"300px"},children:"Add contact"})]})})},$=n(889),H=function(){var e=(0,r.I0)(),t=(0,r.v9)(_),n=(0,r.v9)(q);return(0,a.useEffect)((function(){e((0,B.yF)())}),[e]),(0,S.jsxs)("div",{children:[(0,S.jsx)("h2",{style:{marginLeft:120,color:"#232b33"},children:"My Contacts"}),(0,S.jsx)(Y,{}),(0,S.jsx)(E,{}),t&&!n&&(0,S.jsx)($.Z,{}),(0,S.jsx)(W,{})]})}}}]);
//# sourceMappingURL=957.4ecb47c2.chunk.js.map