(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=a(6),m=a(5),s=(a(24),a(18)),u=a(15),i=a.n(u);a(25);var E=function(){var e=Object(n.useState)("Waiting..."),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("api/message").then((function(e){return e.json()})).then((function(e){r(e.message)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),l.a.createElement("ul",{className:"mylist"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/dashboard"},"Dashboard"))),l.a.createElement("p",null,"The message is: ",a),l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};function p(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"),l.a.createElement(o.b,{to:"/"},"Home"))}function h(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Dashboard"),l.a.createElement(o.b,{to:"/"},"Home"))}c.a.render(l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(E,null)),l.a.createElement(m.a,{path:"/about"},l.a.createElement(p,null)),l.a.createElement(m.a,{path:"/dashboard"},l.a.createElement(h,null))))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.00b42f94.chunk.js.map