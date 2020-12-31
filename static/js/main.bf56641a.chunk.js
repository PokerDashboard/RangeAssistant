(this["webpackJsonp@holdem-poker-tools/range-assistant-web"]=this["webpackJsonp@holdem-poker-tools/range-assistant-web"]||[]).push([[0],{168:function(e){e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","properties":{"_id":{"maxLength":48,"minLength":16,"type":"string"},"tags":{"items":{"type":"string","maxLength":32,"minLength":1},"minItems":0,"type":"array","uniqueItems":true},"actions":{"$id":"actions","items":{"properties":{"color":{"pattern":"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$","type":"string"},"name":{"maxLength":32,"minLength":1,"type":"string"}},"required":["name","color"],"type":"object"},"maxItems":25,"minItems":2,"type":"array","uniqueItems":true},"author":{"minLength":1,"type":"string"},"combos":{"$id":"combos","additionalProperties":false,"maxProperties":169,"minProperties":0,"patternProperties":{"^([AKQJT2-9]{2})([os?])?$":{"items":{"type":"number"},"minItems":1,"type":"array"}}},"title":{"minLength":1,"type":"string"}},"required":["_id","title","actions","combos","author","tags"],"title":"Range","type":"object"}')},222:function(e){e.exports=JSON.parse('{"actions":[{"name":"Fold","color":"#d3d3d3","inRange":false},{"name":"Open","color":"#7ec78e","inRange":true}],"combos":{"55":[3,1],"66":[1,1],"77":[0,1],"88":[0,1],"99":[0,1],"AA":[0,1],"AKs":[0,1],"AQs":[0,1],"ATs":[0,1],"A8s":[0,1],"A7s":[0,1],"AJs":[0,1],"A9s":[0,1],"A6s":[0,1],"A5s":[0,1],"A4s":[0,1],"A3s":[0,1],"A2s":[3,1],"AKo":[0,1],"AQo":[0,1],"AJo":[0,1],"ATo":[0,1],"KJo":[0,1],"KQo":[0,1],"KK":[0,1],"KQs":[0,1],"QQ":[0,1],"QJo":[1,1],"JJ":[0,1],"QJs":[0,1],"KJs":[0,1],"TT":[0,1],"KTs":[0,1],"K9s":[0,1],"K8s":[0,1],"QTs":[0,1],"Q9s":[0,1],"JTs":[0,1],"J9s":[1,1],"T9s":[4,1],"98s":[4,1],"87s":[4,1],"76s":[4,1],"65s":[4,1]},"tags":["6max","EP","RFI","100BB","GTO"]}')},223:function(e){e.exports=JSON.parse('{"actions":[{"name":"Fold","color":"#d3d3d3","inRange":false},{"name":"Call","color":"#7ec78e","inRange":true},{"name":"3 Bet","color":"#e89679","inRange":true}],"combos":{"22":[0,1,0],"33":[0,1,0],"44":[0,1,0],"55":[0,1,0],"66":[0,1,0],"77":[0,1,0],"88":[0,1,0],"99":[0,3,1],"AKs":[0,0,1],"AQs":[0,1,3],"ATs":[0,1,1],"A8s":[0,3,1],"A7s":[0,3,1],"AJs":[0,1,3],"A9s":[0,3,1],"A6s":[0,1,0],"A5s":[0,1,1],"A4s":[0,1,1],"A3s":[0,3,1],"A2s":[0,1,0],"AKo":[0,1,3],"AQo":[0,0,1],"AJo":[0,1,0],"ATo":[0,1,0],"KJo":[0,1,0],"KQo":[0,1,0],"KK":[0,0,1],"KQs":[0,0,1],"QQ":[0,0,1],"QJo":[0,1,0],"JJ":[0,1,1],"QJs":[0,1,3],"KJs":[0,1,3],"TT":[0,2,1],"KTs":[0,1,1],"K9s":[0,1,0],"K8s":[0,1,0],"QTs":[0,1,1],"Q9s":[0,3,1],"JTs":[0,2,1],"J9s":[0,3,1],"T9s":[0,3,1],"98s":[0,3,1],"87s":[0,3,1],"76s":[0,4,1],"65s":[0,4,1],"AA":[0,0,1],"K7s":[0,1,0],"K4s":[0,1,0],"K5s":[0,3,1],"K6s":[0,3,1],"Q8s":[0,1,0],"Q7s":[0,1,0],"J7s":[0,1,0],"J8s":[0,3,1],"T8s":[0,3,1],"T7s":[0,1,0],"T6s":[0,1,0],"97s":[0,4,1],"96s":[0,1,0],"95s":[0,1,0],"86s":[0,4,1],"85s":[0,1,0],"75s":[0,4,1],"74s":[0,1,0],"64s":[0,4,1],"63s":[0,1,0],"54s":[0,4,1],"53s":[0,1,0],"52s":[0,1,0],"43s":[0,1,0],"42s":[0,1,0],"32s":[0,1,0],"JTo":[1,1,0],"QTo":[1,1,0],"KTo":[1,1,0]},"tags":["6max","100BB","BB","vs EP","GTO"]}')},244:function(e,t,n){},313:function(e,t){},371:function(e,t,n){},372:function(e,t,n){},440:function(e,t,n){},447:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),s=n(34),o=n.n(s),i=(n(244),n(82)),l=n(36),u=n(456),j=n(461),b=n(463),d=n(464),O=n(88),h=n(478),f=n(479),g=n(204),m=n(47),x=n(61),v=n(10),p=n(27),y=n(454),w=n(451),A=n(452),T=n(459),R=n(121),S=n(465),k=n(110),C=n(462),I=n(458),J=n(450),B=n(466),P=function(){return Object(c.jsx)(J.a,{indicator:Object(c.jsx)(B.a,{style:{fontSize:24},spin:!0})})},N=n(467),K=n(468),M=n(469),F=n(470),Q=n(471),G=n(135),E=n(167),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return e=Math.ceil(Math.max(1,e)),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},H=n(206),U=n.n(H),_=n(207),q=n.n(_),z=n(168),D=new q.a({strict:!1});D.addSchema(z);D.getSchema("actions"),D.getSchema("combos");var W=D.compile(z),Y={gtoplus:{label:"GTO+",getWeightedRangeString:function(e,t){return"[".concat(t,"]").concat(e,"[/").concat(t,"]")}}},$=function(e,t){return function(n){var c;if(e[n]){c="linear-gradient(to left";var r=e[n].reduce((function(e,t){return e+t}),0),a=e[n].map((function(e){return e/r*100})),s=0;t.forEach((function(e,t){var n=a[t];s+=n,c+=", ".concat(e.color," ").concat(s-n,"%, ").concat(e.color," ").concat(s,"%")})),c+=")"}else c=t[0].color;return{background:c}}},V=function(e,t){var n=Object.keys(e).reduce((function(t,n){return Object(v.a)(Object(v.a)({},t),{},Object(m.a)({},n,function(e){var t=e.reduce((function(e,t,n){return[].concat(Object(x.a)(e),[t+(e[n-1]||0)])}),[]),n=L(Math.min.apply(Math,Object(x.a)(e)),t[t.length-1]);return t.findIndex((function(e,c){return n<=e&&n>(t[c-1]?t[c-1]:0)}))}(e[n])))}),{});return function(e){return{backgroundColor:(t.find((function(t,c){return!!n[e]&&c===n[e]}))||t[0]).color}}},X=["EP","MP","UTG","UTG+1","UTG+2","LJ","HJ","CO","BTN","SB","BB","vs EP","vs MP","vs UTG","vs UTG+1","vs UTG+2","vs LJ","vs HJ","vs CO","vs BTN","vs SB","vs BB","micro","low stakes","medium stakes","high stakes","100BB","200BB","75BB","50BB","30BB","RFI","vs limp","vs open","vs 3bet","vs 4bet","vs 5bet","vs small bet","vs medium bet","vs big bet","6max","full ring","heads up","GTO","exploitative","vs nit","vs TAG","vs LAG","vs fish","vs whale"],Z=function(e){return Object.keys(e).reduce((function(t,n){return void 0===e[n]||Array.isArray(e[n])&&e[n].every((function(e){return 0===e}))?t:Object(v.a)(Object(v.a)({},t),{},Object(m.a)({},n,e[n]))}),{})},ee=[{value:"#d3d3d3",name:"Grey"},{value:"#7ec78e",name:"Green"},{value:"#d9e90e",name:"Yellow"},{value:"#e89679",name:"Peach"},{value:"#6d9ec2",name:"Blue"},{value:"#bb63fd",name:"Purple"},{value:"#fd6363",name:"Red"},{value:"#ea9900",name:"Orange"},{value:"#46cec0",name:"Turquoise"},{value:"#ffffff",name:"White"},{value:"#e09cc5",name:"Pink"},{value:"#8a0000",name:"Maroon"},{value:"#06ce0c",name:"Bright Green"},{value:"#1b9af7",name:"Bright Blue"}],te=n(84),ne=n.n(te),ce=n(151),re=new(n(208).a)("ranges"),ae=function(e){return re.post(e).then((function(e){return re.get(e.id)}))},se=function(){var e=Object(ce.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",re.get(t).then(re.remove));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=u.a.Title,ie=u.a.Text,le=y.a.Option;var ue=function(){var e=Object(r.useState)(void 0),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!0),o=Object(p.a)(s,2),i=o[0],u=o[1],j=Object(r.useState)(void 0),b=Object(p.a)(j,2),h=b[0],f=b[1],g=Object(r.useState)(void 0),J=Object(p.a)(g,2),B=J[0],L=J[1],H=Object(r.useState)(!1),U=Object(p.a)(H,2),_=U[0],q=U[1],z=Object(r.useState)(void 0),D=Object(p.a)(z,2),V=D[0],te=D[1],ne=Object(r.useState)(void 0),ce=Object(p.a)(ne,2),ae=ce[0],se=ce[1],ue=Object(r.useState)("gtoplus"),je=Object(p.a)(ue,2),be=je[0],de=je[1],Oe=Object(l.h)().rangeId;Object(r.useEffect)((function(){var e;u(!0),(e=Oe,re.get(e)).then((function(e){return a(Object.fromEntries(Object.entries(e).filter((function(e){return!Object(p.a)(e,1)[0].startsWith("_")}))))})).catch((function(e){console.error(e),f("Unable to load range!")})).finally((function(){return u(!1)}))}),[u,f,Oe]),Object(r.useEffect)((function(){var e=W(Object(v.a)({_id:Oe},n));n&&!_&&e?function(e,t){return re.get(e).then((function(e){return Object.assign(e,t)})).then(re.put)}(Oe,n).catch(console.error):console.debug(e.errors)}),[n,_,Oe]),Object(r.useEffect)((function(){if(n){var e=n.combos,t=n.actions,c=Object.entries(e).filter((function(e){var n=Object(p.a)(e,2);n[0];return n[1].some((function(e,n){return t[n].inRange&&e>0}))})).map((function(e){var n=Object(p.a)(e,2),c=n[0],r=n[1],a=r.reduce((function(e,t){return e+t}),0),s=r.reduce((function(e,n,c){return t[c].inRange?e+n:e}),0);return[c,Math.round(s/a*100)]}));c.length?se(function(e,t){var n=Y[t].getWeightedRangeString,c=e.reduce((function(e,t){var n=Object(p.a)(t,2),c=n[0],r=n[1];return Object(v.a)(Object(v.a)({},e),{},Object(m.a)({},r,(e[r]||[]).concat([c])))}),{});return Object.entries(c).map((function(e){var t=Object(p.a)(e,2),c=t[0],r=t[1];return 100===parseInt(c)?Object(E.reverse)(r):n(Object(E.reverse)(r),c)})).join(",")}(c,be)):se(void 0)}}),[n,be]);var he=function(e,t){a((function(n){var c=Object(x.a)(n.actions);return c[e]=Object(v.a)(Object(v.a)({},n.actions[e]),t),Object(v.a)(Object(v.a)({},n),{},{actions:c})}))},fe=function(e){return function(t){return a((function(n){return Object(v.a)(Object(v.a)({},n),{},Object(m.a)({},e,t))}))}};return h?Object(c.jsx)(l.a,{to:"/notfound",state:{}}):i?Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(P,{})," Loading..."]}):Object(c.jsx)("div",{children:Object(c.jsxs)(d.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(oe,{level:3,editable:{onChange:fe("title")},children:n.title}),Object(c.jsx)(ie,{editable:{onChange:fe("author")},children:n.author})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(oe,{level:4,children:"Tags"}),Object(c.jsx)(ie,{children:"Use tags for hero position, villain position, bet size etc. to help when searching for a specific range. You can use the default tags or add your own new tags."}),Object(c.jsx)(y.a,{value:n.tags,placeholder:"Select tags...",mode:"tags",style:{width:"100%"},onChange:fe("tags"),tokenSeparators:[","],children:Object(x.a)(new Set(X.concat(n.tags))).map((function(e){return Object(c.jsx)(le,{value:e,children:e},e)}))})]}),Object(c.jsxs)(w.a,{gutter:[15,15],children:[Object(c.jsx)(A.a,{xs:{span:24,offset:0},sm:{span:16,offset:4},md:{span:12,offset:0},lg:12,xl:12,children:Object(c.jsxs)(d.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsx)(oe,{level:4,children:"Combos"}),Object(c.jsx)(G.HandMatrix,{colorize:!1,onPointerDown:function(e){L(e),q(!0)},onPointerUp:function(){return q(!1)},onPointerEnter:function(e){B&&_&&a((function(t){return Object(v.a)(Object(v.a)({},t),{},{combos:Z(Object(v.a)(Object(v.a)({},t.combos),{},Object(m.a)({},e,t.combos[B])))})}))},comboStyle:function(e){return Object(v.a)(Object(v.a)({},$(n.combos,n.actions)(e)),{},{boxShadow:e===B?"inset 0px 0px 0px 5px #fff":"none"})}}),Object(c.jsxs)(ie,{children:[Object(c.jsx)("strong",{children:"Pro Tip:"}),' You can "drag" a combo to copy it\'s action weights to another combo.']})]})}),Object(c.jsx)(A.a,{xs:{span:24,offset:0},sm:{span:16,offset:4},md:{span:12,offset:0},lg:12,xl:12,children:Object(c.jsxs)(d.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsx)(oe,{level:4,children:"Actions"}),n.actions.map((function(e,t){return Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[Object(c.jsx)(T.a,{disabled:0===t,size:"large",style:{flexGrow:1},value:e.name,onChange:function(e){return he(t,{name:e.target.value})}}),Object(c.jsx)(y.a,{size:"large",value:e.color,onSelect:function(e){return he(t,{color:e})},children:ee.map((function(e){return Object(c.jsx)(le,{value:e.value,children:Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("span",{style:{border:"1px solid lightgrey",marginRight:10,minHeight:20,minWidth:20,backgroundColor:e.value}})," ",e.name]})},e.value)}))}),Object(c.jsx)(O.a,{type:"danger",size:"large",disabled:1===n.actions.length||0===t,onClick:function(){return function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{actions:[].concat(Object(x.a)(t.actions.slice(0,e)),Object(x.a)(t.actions.slice(e+1))),combos:Object.entries(t.combos).reduce((function(t,n){var c=Object(p.a)(n,2),r=c[0],a=c[1].filter((function(t,n){return n!==e}));return a.every((function(e){return 0===e}))?t:Object(v.a)(Object(v.a)({},t),{},Object(m.a)({},r,a))}),{})})})),te(void 0)}(t)},children:Object(c.jsx)(N.a,{})}),Object(c.jsx)("div",{style:{marginLeft:5},children:Object(c.jsx)(R.a,{placement:"topRight",title:"Include in range string",children:Object(c.jsx)(S.a,{disabled:0===t,onChange:function(e){return he(t,{inRange:e})},checkedChildren:Object(c.jsx)(K.a,{}),checked:e.inRange})})})]},t)})),Object(c.jsx)(O.a,{onClick:function(){var e=ee.filter((function(e){return-1===n.actions.map((function(e){return e.color})).indexOf(e.value)}));a((function(t){return Object(v.a)(Object(v.a)({},t),{},{actions:[].concat(Object(x.a)(t.actions),[{name:"New Action",color:e[0].value,inRange:!0}]),combos:Object.entries(t.combos).reduce((function(e,t){var n=Object(p.a)(t,2),c=n[0],r=n[1];return Object(v.a)(Object(v.a)({},e),{},Object(m.a)({},c,r.concat([0])))}),{})})})),te(void 0)},type:"dashed",disabled:n.actions.length===ee.length,children:"Add Action"}),B?Object(c.jsxs)(d.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsxs)(oe,{level:4,children:["Combo Action Weights: ",B]}),n.actions.map((function(e,t){return Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("span",{style:{border:"1px solid lightgrey",marginRight:10,height:20,width:20,backgroundColor:e.color}}),Object(c.jsx)(C.a,{value:n.combos[B]?n.combos[B][t]:0,min:0,onChange:function(e){return function(e,t,c){var r=n.combos,s=n.actions,o=Object(x.a)(r[e]||s.map((function(e){return 0}))),i=Object(v.a)(Object(v.a)({},r),{},Object(m.a)({},e,o.map((function(e,n){return n===t?c:e}))));a((function(e){return Object(v.a)(Object(v.a)({},e),{},{combos:Z(i)})}))}(B,t,e)}})]},t)})),(n.combos[B]||V)&&Object(c.jsxs)(d.b,{children:[n.combos[B]&&Object(c.jsx)(O.a,{onClick:function(){return te(n.combos[B])},icon:Object(c.jsx)(M.a,{}),children:"Copy"}),V&&Object(c.jsx)(O.a,{onClick:function(){a((function(e){return Object(v.a)(Object(v.a)({},e),{},{combos:Z(Object(v.a)(Object(v.a)({},e.combos),{},Object(m.a)({},B,V)))})}))},icon:Object(c.jsx)(F.a,{}),children:"Paste"})]})]}):Object(c.jsx)(k.a,{description:"Select a combo to configure"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(oe,{level:4,children:"Range String"}),ae?Object(c.jsxs)(d.b,{direction:"vertical",children:[Object(c.jsxs)(d.b,{children:[Object(c.jsx)(ie,{strong:!0,children:"Format"}),Object(c.jsx)(I.a.Group,{onChange:de,options:Object.keys(Y).map((function(e){return{value:e,label:Y[e].label}})),value:be})]}),Object(c.jsx)(ie,{copyable:!0,children:ae})]}):Object(c.jsxs)(ie,{children:[Object(c.jsx)(Q.a,{})," To generate a range string, ensure at least one combo has an action weight greater than 0 for at least one action which is marked as ",Object(c.jsx)("strong",{children:"included in range"})]})]})]})})]})]})})},je=n(460),be=function(e){var t,n,r=e.location;return Object(c.jsx)(je.a,{status:"404",title:(null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.title)||"Page Not Found",subTitle:(null===r||void 0===r||null===(n=r.state)||void 0===n?void 0:n.message)||"Sorry but the page you're looking for doesn't exist!",extra:[Object(c.jsx)(i.b,{to:"/",children:Object(c.jsx)(O.a,{children:"Return Home"})})]})},de=n(236),Oe=n(235),he=n(455),fe=n(457),ge=n(453),me=n(472),xe=n(473),ve=n(474),pe=n(475),ye=n(476),we=n(477),Ae=n(229);n(371);var Te=function(e){var t=e.children,n=e.onDropFiles,a=Object(r.useCallback)((function(e){n&&n(e)}),[n]),s=Object(Ae.a)({onDrop:a}),o=s.getRootProps,i=s.isDragActive;return Object(c.jsx)("div",Object(v.a)(Object(v.a)({className:"drop-overlay ".concat(i?"dropping":"")},o()),{},{children:t}))},Re={rfi:n(222),vsbet:n(223)},Se=(n(372),u.a.Title),ke=u.a.Paragraph,Ce=u.a.Text,Ie=y.a.Option,Je=function(e){var t=e.range,n=e.frequencyMode,r=Object(l.g)(),a=t.title,s=t.author,o=t.actions,i=t.combos,u=t.tags,j=t._id,b=n?$(i,o):V(i,o);return Object(c.jsxs)("div",{children:[Object(c.jsxs)(Ce,{strong:!0,children:[a," "]}),Object(c.jsx)(G.HandMatrix,{showText:!0,comboStyle:function(e){return Object(v.a)(Object(v.a)({},b(e)),{},{fontSize:"0.6rem"})}}),Object(c.jsxs)(Ce,{type:"secondary",children:["by ",s]}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)(R.a,{title:"Edit Range",placement:"bottomLeft",children:Object(c.jsx)(O.a,{onClick:function(){return r.push("range/".concat(j))},icon:Object(c.jsx)(ve.a,{}),size:"small"})}),Object(c.jsx)(R.a,{title:"Duplicate Range",placement:"bottom",children:Object(c.jsx)(O.a,{onClick:function(){return ae({title:a,author:s,actions:o,combos:i,tags:u})},icon:Object(c.jsx)(M.a,{}),size:"small"})}),Object(c.jsx)(R.a,{title:"Download Range",placement:"bottom",children:Object(c.jsx)(O.a,{onClick:function(){return delete(e=t)._rev,void U()(JSON.stringify(e),"".concat(e.title.toLowerCase().replace(/\s+/g,"-"),".range"),"application/json");var e},icon:Object(c.jsx)(pe.a,{}),size:"small"})}),Object(c.jsx)("div",{className:"spacer"}),Object(c.jsx)(R.a,{title:"Delete Range",placement:"bottomRight",children:Object(c.jsx)(O.a,{type:"primary",onClick:function(){return se(j)},icon:Object(c.jsx)(ye.a,{}),size:"small"})})]}),Object(c.jsx)("div",{className:"tag-container",children:u.map((function(e){return Object(c.jsx)("div",{className:"tag",children:e},e)}))})]})},Be=function(e){var t=e.visible,n=e.onSubmit,r=e.onImport,a=e.onCancel,s=he.a.useForm(),o=Object(p.a)(s,1)[0];return Object(c.jsxs)(fe.a,{title:"Add Range",visible:t,okText:"Create",onOk:function(){o.validateFields().then((function(e){var t=e.template,c=Object(de.a)(e,["template"]);switch(t){case"rfi":Object.assign(c,Re.rfi);break;case"vsbet":Object.assign(c,Re.vsbet);break;default:console.debug("Creating range from scratch")}return n(c)})).then((function(){return o.resetFields()})).catch(console.debug)},onCancel:function(){o.resetFields(),a()},children:[Object(c.jsx)(Te,{onDropFiles:r,children:Object(c.jsxs)("div",{children:[Object(c.jsx)(we.a,{style:{fontSize:52}}),Object(c.jsx)("h3",{children:"Drop your range file(s) here"})]})}),Object(c.jsx)(ge.a,{}),Object(c.jsxs)(he.a,{initialValues:{template:"rfi"},layout:"vertical",form:o,children:[Object(c.jsx)(Se,{level:5,style:{textAlign:"center"},children:"Or create a range manually"}),Object(c.jsx)(he.a.Item,{label:"Range Name",required:!0,name:"title",rules:[{required:!0,message:"Please input a valid name for this range",min:1,max:80}],children:Object(c.jsx)(T.a,{placeholder:"6 Max Cash UTG RFI"})}),Object(c.jsx)(he.a.Item,{label:"Range Author",required:!0,name:"author",rules:[{required:!0,message:"Please input an author for this range",min:1,max:48}],children:Object(c.jsx)(T.a,{placeholder:"Your Name"})}),Object(c.jsx)(he.a.Item,{label:"Starting Template",required:!0,name:"template",children:Object(c.jsxs)(y.a,{placeholder:"Choose a template",children:[Object(c.jsx)(Ie,{value:"rfi",children:"RFI"}),Object(c.jsx)(Ie,{value:"vsbet",children:"vs bet"}),Object(c.jsx)(Ie,{value:"blank",children:"From scratch"})]})})]})]})},Pe=function(){var e=Object(l.g)(),t=Object(r.useState)([]),n=Object(p.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)(!1),i=Object(p.a)(o,2),u=i[0],j=i[1],b=Object(r.useState)(10),h=Object(p.a)(b,2),f=h[0],g=h[1],v=Object(r.useState)(!1),T=Object(p.a)(v,2),k=T[0],I=T[1],J=Object(r.useState)(void 0),B=Object(p.a)(J,2),N=B[0],K=B[1],M=Object(r.useState)(!1),F=Object(p.a)(M,2),Q=F[0],G=F[1],E=Object(r.useState)([]),H=Object(p.a)(E,2),U=H[0],_=H[1],q=Object(r.useState)(0),z=Object(p.a)(q,2),D=z[0],Y=z[1];if(Object(r.useEffect)((function(){if(f>=3){$();var e=setInterval((function(){$()}),1e3*f);return function(){return clearInterval(e)}}}),[f,Y]),Object(r.useEffect)((function(){I(!0),re.allDocs({include_docs:!0}).then((function(e){return e.rows.map((function(e){return e.doc}))})).then(s).catch((function(e){console.error(e),K("Unable to load ranges!")})).finally((function(){return I(!1)}))}),[I,K,s]),Object(r.useEffect)((function(){var e=function(e){var t=re.changes({live:!0,since:"now",include_docs:!0});return t.on("change",e),t}((function(e){s((function(t){if(e.deleted)return t.filter((function(t){return t._id!==e.id}));var n=t.findIndex((function(t){return t._id===e.id}));return Object.assign([],t,Object(m.a)({},-1!==n?n:t.length,e.doc))}))}));return function(){return e.cancel()}}),[s]),N)return Object(c.jsx)(l.a,{to:"/notfound",state:{}});var $=function(){Y(L())},V=function(e){return function(e){return new Promise((function(t,n){var c=new FileReader;c.onload=function(e){t(e.target.result)},c.onerror=function(e){return n(e)},c.readAsText(e)}))}(e).then(JSON.parse).then((function(e){if(!W(e))throw new Error("Invalid range");return e}))},X=function(e){var t=e.title,n=e.author,c=e.tags,r=void 0===c?[]:c,a=e.combos,s=void 0===a?{}:a,o=e.actions,i=void 0===o?[{name:"Fold",color:ee[0].value,inRange:!1},{name:"Call",color:ee[1].value,inRange:!0},{name:"Raise",color:ee[2].value,inRange:!0}]:o;return ae({title:t,author:n,tags:r,combos:s,actions:i}).catch((function(e){console.error(e),Oe.b.error("Could not create range!")}))},Z=a.filter((function(e){return 0===U.length||U.every((function(t){return e.tags.includes(t)}))}));return Object(c.jsxs)("div",{children:[k&&Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(P,{})," Loading..."]}),!k&&Object(c.jsxs)(d.b,{direction:"vertical",style:{width:"100%"},children:[Object(c.jsx)("div",{className:"view-ranges-controls",children:Object(c.jsxs)(d.b,{children:[Object(c.jsx)(y.a,{value:U,placeholder:"Filter by tags...",mode:"multiple",allowClear:!0,onChange:_,children:Object(x.a)(new Set((a||[]).map((function(e){return e.tags})).flat())).sort().map((function(e){return Object(c.jsx)(Ie,{value:e,children:e},e)}))}),Object(c.jsx)(O.a,{icon:Object(c.jsx)(me.a,{}),onClick:function(){return G(!0)},children:"Add Range"})]})}),Object(c.jsxs)(d.b,{children:[Object(c.jsxs)("span",{children:["Frequency Mode: ",Object(c.jsx)(S.a,{checked:u,onChange:j})]}),Object(c.jsxs)("span",{children:["RNG: ",D," ",Object(c.jsx)(R.a,{title:"Refresh RNG Now",children:Object(c.jsx)(xe.a,{onClick:$})})]}),Object(c.jsxs)("span",{children:["RNG refresh rate: ",Object(c.jsx)(C.a,{min:3,precision:0,onChange:g,value:f})]})]}),0===Z.length?Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(Se,{level:3,children:"No Ranges Found"}),0===a.length&&Object(c.jsx)(ke,{children:"You don't have any ranges yet!"})]}):Object(c.jsx)(w.a,{gutter:[10,10],children:Z.map((function(e){return Object(c.jsx)(A.a,{xs:24,sm:12,md:8,lg:8,xl:6,xxl:4,children:Object(c.jsx)(Je,{range:e,frequencyMode:u})},e._id)}))})]}),Object(c.jsx)(Be,{onImport:function(e){return Promise.all(e.map(V)).then((function(e){return e.forEach(X)})).then((function(){return Oe.b.success("Import successful!")})).catch((function(e){console.log(e),Oe.b.error("One or more of your range files are invalid!")}))},visible:Q,onSubmit:function(t){return X(t).then((function(t){G(!1),e.push("/range/".concat(t._id))}))},onCancel:function(){return G(!1)}})]})},Ne=(n(440),u.a.Text),Ke=new g.UAParser,Me=j.a.Header,Fe=j.a.Footer,Qe=j.a.Content,Ge=function(e){switch(e){case"Mac":return Object(c.jsx)(h.a,{});case"Windows":return Object(c.jsx)(f.a,{});default:return Object(c.jsx)(c.Fragment,{})}},Ee=function(e){switch(e){case"Mac":return"dmg";case"Windows":return"exe";default:throw new Error("Unsupported OS: ".concat(e))}},Le=["Mac","Windows"].find((function(e){return-1!==(Ke.getOS().name||"").indexOf(e)}));var He=function(){return Object(c.jsxs)(Me,{className:"site-layout-header",children:[Object(c.jsx)("img",{alt:"logo",height:"60",src:"./logo512.png"}),Object(c.jsxs)(i.b,{to:"/",className:"logo-text",children:[Object(c.jsx)("span",{style:{color:"#000"},children:"Hold'em Poker Tools"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{style:{color:"#bd2829"},children:"Range Assistant"})]}),Object(c.jsx)("div",{className:"spacer"}),Object(c.jsx)(i.b,{to:"/",className:"ant-btn-link",children:"My Ranges"})]})},Ue=function(){return Object(c.jsxs)(Fe,{style:{textAlign:"center"},children:[Object(c.jsx)(Ne,{children:"Hold'em Poker Tools: Range Assistant \xa92020"}),Object(c.jsx)("br",{}),Object(c.jsx)(Ne,{children:"Hold'em Poker Tools projects are free for everyone to use. Show your support on Buy Me a Coffee!"}),Object(c.jsx)("br",{}),Object(c.jsxs)(d.b,{children:[Object(c.jsx)("a",{href:"https://www.buymeacoffee.com/holdemtools",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/default-red.png",alt:"Buy Me A Coffee",style:{height:41,width:174,borderRadius:5}})}),Le&&Object(c.jsxs)(O.a,{href:"https://github.com/HoldemPokerTools/RangeAssistant/releases/latest/download/Range-Assistant.".concat(Ee(Le)),target:"_blank",children:["Download Range Assistant for ",Ge(Le)," ",Le]})]})]})},_e=function(){return Object(c.jsx)(j.a,{style:{minHeight:"100vh"},children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(He,{}),Object(c.jsx)(Qe,{className:"content",children:Object(c.jsxs)("div",{className:"site-layout-content gutter",children:[!localStorage.getItem("showIntro")&&Object(c.jsx)(b.a,{type:"info",closable:!0,closeText:"Hide",afterClose:function(){localStorage.setItem("showIntro",1)},showIcon:!0,className:"gutter",description:Object(c.jsxs)(Ne,{children:["Use this web app to construct, save and view preflop ranges. You can download your ranges to share with others or for use with the Hold'em Poker Tools Range Assistant desktop app.",Object(c.jsx)(Ne,{strong:!0,children:" IMPORTANT: "}),"Your ranges are stored in your browser and will ",Object(c.jsx)(Ne,{strong:!0,children:"not "}),"be accessible across devices/different browsers. You should download your ranges to back them up and import them on different devices."]})}),Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/",children:Object(c.jsx)(Pe,{})}),Object(c.jsx)(l.b,{exact:!0,path:"/range/:rangeId",children:Object(c.jsx)(ue,{})}),Object(c.jsx)(l.b,{path:"*",children:Object(c.jsx)(be,{})})]})]})}),Object(c.jsx)(Ue,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_e,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[447,1,2]]]);
//# sourceMappingURL=main.bf56641a.chunk.js.map