(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){e.exports=n(223)},125:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(9),i=n.n(r),o=(n(125),n(10)),c=n(16),s=n(12),m=n(11),d=n(13),u=n(227),y=n(231),p=n(232),f=n(47),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={gradedName:e.gradedName,startedEditing:!1,elements:[]},n.yieldElement=n.yieldElement.bind(Object(f.a)(Object(f.a)(n))),n.createMessage(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"yieldElement",value:function(e){var t;switch(e.type){case"gradedName":t=this.state.startedEditing?l.a.createElement("p",{className:"prompt-element__name",key:e.id},e.value):l.a.createElement("p",{className:"prompt-element__name",key:e.id},e.hint);break;case"fillIn":break;case"text":t=l.a.createElement("p",{className:"prompt-element__text",key:e.id},e.value)}this.state.elements.push(t)}},{key:"createMessage",value:function(){[{id:0,type:"gradedName",hint:"An outstanding student",value:this.state.gradedName},{id:1,type:"text",value:"did a really great job of tying in all of the needed things, like when she"},{id:2,type:"fillIn",hint:"did a lot of great work",value:""},{id:3,type:"text",value:"."}].forEach(this.yieldElement)}},{key:"render",value:function(){return l.a.createElement("span",null,l.a.createElement("div",{className:"prompt-oval",style:{border:"1px solid",borderRadius:15,padding:"5px 10px",margin:5,display:"flex",wordBreak:"break-word"}},this.state.elements))}}]),t}(a.Component),h=(a.Component,n(228)),E=n(53),b=n(229),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onLogoClick=function(){alert("Go to dashboard")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Rate-left-container"},l.a.createElement(h.a,{onClick:function(){},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"vertical",theme:"dark",style:{width:250,height:"100%"}},l.a.createElement(E.a,{type:"redo",style:{fontSize:36,marginTop:"35%",marginLeft:"41%",marginRight:"50%",marginBottom:30,cursor:"pointer"},onClick:this.onLogoClick}),l.a.createElement("p",{style:{textAlign:"center",marginBottom:"35%",fontSize:13,letterSpacing:"10px",cursor:"pointer"},onClick:this.onLogoClick},"360FACTORS"),l.a.createElement(h.a.Item,{key:"1",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"user",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Matt Hallac"))),l.a.createElement(h.a.Item,{key:"2",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"user",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Matt Hallac"))),l.a.createElement(h.a.Item,{key:"3",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"user",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Matt Hallac"))),l.a.createElement(h.a.Item,{key:"4",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"user",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Matt Hallac"))),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(b.a,{style:{fontSize:12,marginTop:25,backgroundColor:"#f5222d",borderColor:"#f5222d"},type:"primary"},"Due on 11/1/18 at 11:59 pm"))))}}]),t}(l.a.Component),v=n(226),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Rate-edit-pane"},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",marginRight:0,marginBottom:10,marginLeft:20,marginTop:10}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingLeft:10,paddingRight:10,marginBottom:-13,marginLeft:-10,zIndex:1}},l.a.createElement(b.a,{block:!0,type:"disabled",style:{flexGrow:1},icon:"up"})),l.a.createElement(v.a,{style:{margin:20,marginRight:10,marginTop:10,marginLeft:0,flexGrow:2,marginBottom:10}},l.a.createElement("h1",null,"Engagement"),l.a.createElement("p",{style:{color:"rgb(200, 200, 200)",userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"Select a choice on the right side to start giving feedback."),l.a.createElement("p",{style:{color:"red",userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",fontSize:12}},"Additional feedback required.")),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingLeft:10,paddingRight:10,marginTop:-20,marginLeft:-10}},l.a.createElement(b.a,{block:!0,type:"primary",style:{flexGrow:1},icon:"down"}))))}}]),t}(l.a.Component),x=(n(75),n(230)),S=n(225),C=n(59),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return l.a.createElement("div",{className:"Rate-select-panel"},l.a.createElement(v.a,{className:"select-panel-card",style:{margin:10,maxWidth:"100%",overflowX:"hidden",overflowY:"hidden"}},l.a.createElement("div",null,l.a.createElement(C.Scrollbars,{style:{width:"100%",height:"25vh"}},l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively"),l.a.createElement(x.a,{color:"green",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated actively")),l.a.createElement(S.a,null),l.a.createElement("div",{className:"select-panel-card",style:{maxWidth:"100%",overflowX:"hidden",overflowY:"hidden"}},l.a.createElement(C.Scrollbars,{style:{width:"100%",height:"25vh"}},l.a.createElement(x.a,{color:"lime",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"participated sparingly"))),l.a.createElement(S.a,null),l.a.createElement("div",{className:"select-panel-card",style:{maxWidth:"100%",overflowX:"hidden",overflowY:"hidden"}},l.a.createElement(C.Scrollbars,{style:{width:"100%",height:"25vh"}},l.a.createElement(x.a,{color:"red",onClick:function(){return console.log("clicked")},style:{marginBottom:10,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"}},"did not participate"))))))},n}return Object(d.a)(t,e),t}(l.a.Component),w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return l.a.createElement("div",{className:"Rate-right-container",style:{padding:10}},l.a.createElement(j,null),l.a.createElement(O,null))},n}return Object(d.a)(t,e),t}(l.a.Component),z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return l.a.createElement("div",{className:"Rate-parent-container"},l.a.createElement(k,null),l.a.createElement(w,null))},n}return Object(d.a)(t,e),t}(l.a.Component),U=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onLogoClick=function(){alert("Go to dashboard")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Rate-left-container"},l.a.createElement(h.a,{onClick:function(){},mode:"vertical",theme:"dark",style:{width:250,height:"100%"}},l.a.createElement(E.a,{type:"redo",style:{fontSize:36,marginTop:"35%",marginLeft:"41%",marginRight:"50%",marginBottom:30,cursor:"pointer"},onClick:this.onLogoClick}),l.a.createElement("p",{style:{textAlign:"center",marginBottom:"35%",fontSize:13,letterSpacing:"10px",cursor:"pointer"},onClick:this.onLogoClick},"360FACTORS"),l.a.createElement(h.a.Item,{key:"1",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"hourglass",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Attendy"))),l.a.createElement(h.a.Item,{key:"2",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"redo",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"360"))),l.a.createElement(h.a.Item,{key:"3",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"project",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Project 3"))),l.a.createElement(h.a.Item,{key:"4",style:{height:"10%",display:"flex",justifyContent:"flex-start",padding:15}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"trophy",theme:"outlined",style:{fontSize:32,marginLeft:12}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("p",{style:{margin:20,marginTop:15}},"Final Project")))))}}]),t}(l.a.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Rate-parent-container"},l.a.createElement(U,null))}}]),t}(l.a.Component),L=n(79),D=n.n(L),M=n(112),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},l.a.createElement(E.a,{type:"redo",style:{fontSize:36,marginBottom:30,color:"white"}}),l.a.createElement("p",{style:{textAlign:"center",fontSize:13,letterSpacing:"10px",color:"white"}},"360FACTORS"),l.a.createElement(b.a,{type:"primary",style:{marginTop:25},onClick:Object(M.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://stephentorr.es/oauth",{method:"POST"});case 2:case"end":return e.stop()}},e,this)}))},"Login"))}}]),t}(l.a.Component),N=n(117),W=n(42),R=Object(W.b)({reducer:null}),A=Object(W.c)(R,{loginToken:""}),I=(n(220),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(N.a,{store:A},l.a.createElement(u.a,null,l.a.createElement(y.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:z}),l.a.createElement(p.a,{path:"/selectProject",component:B}),l.a.createElement(p.a,{path:"/login",component:T}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,n){}},[[120,2,1]]]);
//# sourceMappingURL=main.e12f3fe9.chunk.js.map