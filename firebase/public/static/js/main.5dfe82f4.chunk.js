(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c.n(n),s=c(34),r=c.n(s),o=(c(51),c(3)),i=c(5),u=c(7),l=c(8),p=(c(52),c(28)),j=c(12),b=(c(53),c(29)),h=c(39),d=c(32),O=c(24);h.initializeApp({apiKey:"AIzaSyAIv01BJarFlPo-N81pzxYtWZ1521QZmH8",authDomain:"aydotdeveloperschatapp.firebaseapp.com",databaseURL:"https://aydotdeveloperschatapp-default-rtdb.firebaseio.com/",projectId:"aydotdeveloperschatapp",storageBucket:"aydotdeveloperschatapp.appspot.com",messagingSenderId:"355324192292",appId:"1:355324192292:web:83c4b95c2e4334ef751ab1"});var m=function(){return function(e){var t=[],c=Object(O.a)(),n=Object(O.c)(c,"/users/");Object(O.b)(n,(function(c){var n=c.val();t.push(Object.values(n)),e({type:"FIREBASEUSERS",payload:t[0]})}))}},f=c(9),v=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.props.chat_users()}},{key:"render",value:function(){console.log("chatuserss==>>",this.props.users);var e=this.props.current_user;return Object(f.jsxs)("div",{className:"mainchat",children:[Object(f.jsx)(p.b,{className:"link",to:"/",children:"Go to Home"}),Object(f.jsxs)("h1",{children:["Welcome ",e.name," "]}),Object(f.jsx)("img",{className:"user-img",src:e.profile}),Object(f.jsxs)("div",{children:[Object(f.jsx)("ul",{className:"lists",children:this.props.users.map((function(t,c){return t.uid!==e.uid&&Object(f.jsxs)("li",{children:[Object(f.jsx)("img",{className:"user-img",src:t.profile}),Object(f.jsx)("h5",{children:t.name}),Object(f.jsx)("button",{children:"Chat"})]},c)}))}),";"]})]})}}]),c}(a.a.Component),g=Object(b.b)((function(e){return{current_user:e.current_user,users:e.users}}),(function(e){return{chat_users:function(){return e(m())}}}))(v),x=(c(61),c.p,c.p+"static/media/chaticon.2feebb47.jpg"),y=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).togglePopup=function(){document.getElementById("popup-1").classList.toggle("active")},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{id:"homesec",className:"mainhome",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"chatHeading",children:[Object(f.jsx)("img",{className:"chatIcon",src:x,alt:"logo"}),Object(f.jsx)("p",{className:"appName",children:"Chat App"})]}),Object(f.jsx)("h4",{className:"chatDesc",children:"Welcome to web chat app!"}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"chatDesc2",children:"Please sign in to continue."}),Object(f.jsxs)("div",{className:"allbtn",children:[Object(f.jsx)(p.b,{className:"link",to:"/chat",children:"Go to chat"}),Object(f.jsx)("button",{className:"fbBtn",onClick:function(){return e.props.facebook_login(e.props.history)},children:"Facebook login"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"approvalpopup",id:"popup-1",children:[Object(f.jsx)("div",{className:"overlay"}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"close-btn",onClick:function(){return e.togglePopup()},children:"x"}),Object(f.jsx)("h1",{className:"approvaltitle",children:" Error occurred!"}),Object(f.jsx)("p",{className:"approvalnote",children:"Google sign in is not available! please try another option for now."})]})]}),Object(f.jsx)("button",{className:"signupbtn googleBtn",onClick:function(){return e.togglePopup()},children:"Google Login"})]})]})})}}]),c}(a.a.Component),N=Object(b.b)((function(e){return{users:e.users}}),(function(e){return{facebook_login:function(t){return e(function(e){return function(t){var c=new d.a,n=Object(d.b)();Object(d.c)(n,c).then((function(c){var n=c.user,a={name:n.displayName,email:n.email,profile:n.photoURL,phone:n.phoneNumber,uid:n.uid},s=Object(O.a)();Object(O.d)(Object(O.c)(s,"users/"+n.uid),{name:n.displayName,email:n.email,profile:n.photoURL,phone:n.phoneNumber,uid:n.uid}).then((function(c){t({type:"SETUSER",payload:a}),alert("Login successfull!"),e.push("/chat")}))})).catch((function(e){var t=e.message;alert(t)}))}}(t))},chat_users:function(){return e(m())}}}))(y),k=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(f.jsxs)(p.a,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",component:N}),Object(f.jsx)(j.a,{path:"/chat",component:g})]})}}]),c}(a.a.Component),E=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(k,{})})}}]),c}(a.a.Component),S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},C=c(33),I={users:[],current_user:{}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETUSER":return Object(C.a)(Object(C.a)({},e),{},{current_user:t.payload});case"FIREBASEUSERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.payload})}return e},B=c(41),R=c(45),w=Object(B.b)(_,Object(B.a)(R.a));r.a.render(Object(f.jsx)(b.a,{store:w,children:Object(f.jsx)(E,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.5dfe82f4.chunk.js.map