(this["webpackJsonpwebapp-sentiment-analysis"]=this["webpackJsonpwebapp-sentiment-analysis"]||[]).push([[0],{74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(10),r=n.n(s),c=(n(74),n(75),n(124)),l=n(54),o=n(55),d=n(32),m=n(64),h=n(63),j=n.p+"static/media/FaceWithSymbolsOnMouth.f1dcccf5.png",b=n.p+"static/media/FaceWithSteamFromNose.f67db6a6.png",u=n.p+"static/media/ThinkingFace.69fb90af.png",p=n.p+"static/media/SmilingFaceWithSmilingEyes.32fd5274.png",O=n.p+"static/media/StarStruck.d64b4b7c.png",g=n(56),f=n.n(g),x=n(57),S=n.n(x),v=n(122),y=(n(76),n(4));function N(e){return Object(y.jsxs)("div",{className:"note-items",children:[Object(y.jsx)("img",{src:j,alt:"Face With Symbols On Mouth",className:1===e?"emoji-enabled":"emoji-desabled"}),Object(y.jsx)("img",{src:b,alt:"Face With Steam From Nose",className:2===e?"emoji-enabled":"emoji-desabled"}),Object(y.jsx)("img",{src:u,alt:"Thinking Face",className:3===e?"emoji-enabled":"emoji-desabled"}),Object(y.jsx)("img",{src:p,alt:"Smiling Face With Smiling Eyes",className:4===e?"emoji-enabled":"emoji-desabled"}),Object(y.jsx)("img",{src:O,alt:"Star Struck",className:5===e?"emoji-enabled":"emoji-desabled"})]})}function _(e){return Object(y.jsx)("div",{className:"note-items",children:[1,2,3,4,5].map((function(t){return e>=t?Object(y.jsx)(f.a,{className:"star"},t):Object(y.jsx)(S.a,{className:"star"},t)}))})}function E(e){var t=e.sentiment,n=e.style;return Object(y.jsxs)("div",{children:[Object(y.jsx)(v.a,{align:"center",children:"Score given by the algorithm :"}),Object(y.jsx)("div",{children:"emojis"===n?N(t):_(t)}),Object(y.jsxs)(v.a,{align:"center",children:[t," / 5"]})]})}var C=n(50),k=n.n(C),T=n(58),F=n(59),A=n.n(F);function P(){return(P=Object(T.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT+"/api/v1/sentiment/predict",console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT),e.next=4,A()(n,{method:"POST",body:JSON.stringify({text:t}),headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(127);n(83);var D=Object(w.a)((function(e){var t=e.theme.palette.primary.main;return Object(y.jsxs)("div",{className:"intro",children:[Object(y.jsxs)(v.a,{align:"center",paragraph:!0,children:["Sentiment analysis is primarily a part of"," ",Object(y.jsx)("span",{style:{color:t},children:"Marketing Strategies"})," to monitor the branding of a product, service or business."]}),Object(y.jsxs)(v.a,{align:"center",paragraph:!0,children:["Below is the demonstration of a"," ",Object(y.jsx)("span",{style:{color:t},children:"Machine Learning"})," algorithm trained on several thousand French comments from the online shopping platform Amazon."]})]})})),I=n(61),W=n.n(I),R=n(123),H=n(60),V=n.n(H);n(84);var U=function(e){var t=e.gitHubName,n=e.gitHubUrl,a=e.linkedInName,i=e.linkedInUrl;return Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("div",{className:"network-list",children:[Object(y.jsx)(R.a,{className:"network-button",variant:"contained",color:"primary",size:"small",href:i,target:"_blank",endIcon:Object(y.jsx)(V.a,{}),children:a}),Object(y.jsx)(R.a,{className:"network-button",variant:"outlined",size:"small",href:n,target:"_blank",endIcon:Object(y.jsx)(W.a,{}),children:t})]})})},L=n(125),K=n(126),B=(n(85),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={textAreaValue:"",noteStyle:!1,sentiment:null},a.handleAreaValueChange=a.handleAreaValueChange.bind(Object(d.a)(a)),a.handleNoteStyleChange=a.handleNoteStyleChange.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleAreaValueChange",value:function(e){var t=this,n=e.target.value;(this.setState({textAreaValue:n}),""===n)?this.setState({sentiment:null}):function(e){return P.apply(this,arguments)}(n).then((function(e){var n=e.ml_tags.sentiment.label;t.setState({sentiment:n})}))}},{key:"handleNoteStyleChange",value:function(){this.setState({noteStyle:!this.state.noteStyle})}},{key:"render",value:function(){var e=this.state.sentiment,t=this.state.noteStyle?"stars":"emojis",n=this.props.theme.palette.secondary.main,a=this.props.theme.palette.primary.main;return Object(y.jsxs)("div",{className:"main",style:{background:n},children:[Object(y.jsx)(v.a,{variant:"h3",align:"center",className:"title",children:"Sentiment Analysis"}),Object(y.jsx)(D,{}),Object(y.jsxs)(v.a,{align:"center",children:["Enter a comment in ",Object(y.jsx)("span",{style:{color:a},children:"French"})," ","to test the service :"]}),Object(y.jsx)(L.a,{value:this.state.textAreaValue,onChange:this.handleAreaValueChange,multiline:!0,className:"input-text",rows:4,placeholder:"Ex. Produit conforme \xe0 la description",autoFocus:!0,variant:"outlined"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(v.a,{display:"inline",children:"stars"}),Object(y.jsx)(K.a,{color:"primary",checked:this.state.check,onChange:this.handleNoteStyleChange,size:"medium"}),Object(y.jsx)(v.a,{display:"inline",children:"emojis"})]}),Object(y.jsx)(E,{sentiment:e,style:t}),Object(y.jsx)(U,{gitHubName:"pierrerochet",gitHubUrl:"https://github.com/pierrerochet",linkedInName:"Pierre Rochet",linkedInUrl:"https://www.linkedin.com/in/pierre-rochet"})]})}}]),n}(a.Component)),M=Object(w.a)(B),z=n(62),J="#9FADEE",q=Object(z.a)({typography:{allVariants:{color:"#ffffff"}},palette:{text:{primary:J,secondary:"#ffffff"},primary:{main:J},secondary:{main:"#5D6D7E"}}});var G=function(){return Object(y.jsx)(c.a,{theme:q,children:Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(M,{})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(G,{})}),document.getElementById("root")),Q()}},[[86,1,2]]]);
//# sourceMappingURL=main.2a9b8028.chunk.js.map