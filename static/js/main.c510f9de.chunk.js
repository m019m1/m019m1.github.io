(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),o=(n(27),n(9)),s=n(10),m=n(12),u=n(11),i=n(13),h=(n(28),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Yaroslav Polyanskiy"),r.a.createElement("h2",null,"Frontend Developer"))}}]),t}(a.Component)),p=(n(29),n(7)),f=(n(30),function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"navMenu"},[{name:"Home",href:"/"},{name:"Works",href:"/works"},{name:"Skills",href:"/skills"},{name:"Contacts",href:"/contacts"}].map((function(e){var t=e.name,n=e.href;return r.a.createElement("li",{key:t},r.a.createElement(p.b,{exact:!0,to:n},t))}))))}),E=function(e){var t=e.children;return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(f,null),t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(5),d=function(){return r.a.createElement("p",null,"Hi! I'm a Javascript developer! I love my work!")},k=(n(36),[{hash:"VwZqowp",userName:"m019m1",title:"Exchange"},{hash:"eYOVWdv",userName:"m019m1",title:"Todo"},{hash:"WNeRoje",userName:"m019m1",title:"Table"},{hash:"XWrabPr",userName:"m019m1",title:"Loupe"},{hash:"WNeppRM",userName:"m019m1",title:"Cube"}]),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentIndex:0,isLoaded:!1},n.shift=function(e){n.setState((function(t){var n=t.currentIndex;return{currentIndex:n+e<0?k.length-1:n+e>k.length-1?0:n+e}}))},n.setIndex=function(e){n.setState({currentIndex:e})},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.currentIndex,n={transform:"translateX(".concat(800*-t,"px)")};return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"gallery"},r.a.createElement("button",{className:"navButtons prev",onClick:function(){e.shift(-1)}},"\u21d0"),r.a.createElement("div",{className:"galleryViewport"},r.a.createElement("ul",{className:"worksList",style:n},k.map((function(e){var t=e.hash,n=e.userName,a=e.title;return r.a.createElement("li",{key:t,className:"work"},r.a.createElement("iframe",{className:"codepen",src:"https://codepen.io/".concat(n,"/embed/preview/").concat(t),frameborder:"0",title:a}))})))),r.a.createElement("button",{className:"navButtons next",onClick:function(){e.shift(1)}},"\u21d2")),r.a.createElement("div",{className:"galleryNav"},r.a.createElement("ul",{className:"worksNavList"},k.map((function(t,n){var a=t.title;return r.a.createElement("li",{key:n,className:"worksNavItems"},r.a.createElement("button",{className:"worksNavButtons",onClick:function(){e.setIndex(n)}},a))})))))}}]),t}(a.Component),w=function(){return r.a.createElement("p",null,"I know HTML, CSS, JS, React. Isn't it enougth?")},b=function(){return r.a.createElement("p",null,"Feel free to call me: +7-123-456-78-90")},y=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("p",null,"Oh no no no! You've broken that site! Congratulations!"),r.a.createElement("p",null,"Please, go ",r.a.createElement(p.b,{to:"/"}," Home ")," now!"))};c.a.render(r.a.createElement(p.a,null,r.a.createElement(E,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:d}),r.a.createElement(v.a,{path:"/works",component:N}),r.a.createElement(v.a,{path:"/skills",component:w}),r.a.createElement(v.a,{path:"/contacts",component:b}),r.a.createElement(v.a,{path:"*",component:y})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c510f9de.chunk.js.map