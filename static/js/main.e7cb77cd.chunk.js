(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/me.0844b0fc.jpg"},28:function(e,t,a){e.exports=a(50)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),i=a.n(r),c=(a(33),a(34),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",{className:"name"},"Yaroslav\xa0Polyanskiy"),l.a.createElement("h2",{className:"speciality"},"Front\u2011end\xa0Developer"))}),s=(a(35),a(8)),o=(a(36),function(e){var t=e.links;return l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav__menu"},t.map((function(e){var t=e.name,a=e.href;return l.a.createElement("li",{key:t,className:"nav__menu__item"},l.a.createElement(s.b,{exact:!0,to:a},t))}))))});o.defaultProps={links:[]};var m=o,u=a(9),p=a(20),h=a(14);u.b.add(p.a,h.a,h.b);var f=[{name:"Home",href:"/"},{name:"Projects",href:"/projects"},{name:"Skills",href:"/skills"},{name:"Contacts",href:"/contacts"}],d=function(e){var t=e.children;return l.a.createElement("div",{className:"app"},l.a.createElement(c,null),l.a.createElement(m,{links:f}),t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(6),_=(a(44),a(21)),v=a.n(_),k=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("img",{className:"myPhoto",src:v.a,alt:"myPhoto",title:"share this portfolio ;-)"}),l.a.createElement("article",{className:"aboutMe"},l.a.createElement("p",{className:"aboutMe__paragraph"},"Hi! I'm a Javascript developer! I'm at the beginning of my interesting and long way of Development in every sense of this word, I hope!)"),l.a.createElement("p",{className:"aboutMe__paragraph"},"I enjoy both solving non-standard multi-level interactive problems and creating nice looking interface."),l.a.createElement("p",{className:"aboutMe__paragraph"},"I follow a thorough approach in studying, work and life. Highly interested in quality professional growth.")))},E=a(22),g=a(23),N=a(26),w=a(24),y=a(27),S=(a(45),function(e){var t=e.listOfProjects,a=e.style,n=e.btnsClickHandle;return l.a.createElement("section",{className:"frame"},l.a.createElement("button",{className:"frame__buttons frame__buttons--prev",onClick:n.bind(null,-1)},l.a.createElement("p",{className:"frame__buttons__arrow"},"\u21d0")),l.a.createElement("div",{className:"frame__viewport"},l.a.createElement("ul",{className:"frame__projectsList",style:a},t.map((function(e){var t=e.hash,a=e.userName,n=e.title;return l.a.createElement("li",{key:t,className:"frame__projectsList__project"},l.a.createElement("iframe",{className:"codepen",src:"https://codepen.io/".concat(a,"/embed/preview/").concat(t),frameBorder:"0",title:n}))})))),l.a.createElement("button",{className:"frame__buttons frame__buttons--next",onClick:n.bind(null,1)},l.a.createElement("p",{className:"frame__buttons__arrow"},"\u21d0")))});S.defaultProps={style:"",btnsClickHandle:function(){}};var x=S,j=(a(46),function(e){var t=e.listOfOptions,a=e.currentIndex,n=e.btnsClickHandle;return l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list"},t.map((function(e,t){var r=e.title;return l.a.createElement("li",{key:t,className:"nav__list__items"},l.a.createElement("button",{className:"nav__list__items__buttons ".concat(t===a&&"nav__list__items__buttons--active"),onClick:n.bind(null,t)},r))}))))});j.defaultProps={currentIndex:0,btnsClickHandle:function(){}};var I=j,C=[{hash:"VwZqowp",userName:"m019m1",title:"Exchange"},{hash:"eYOVWdv",userName:"m019m1",title:"Todo"},{hash:"WNeRoje",userName:"m019m1",title:"Table"},{hash:"XWrabPr",userName:"m019m1",title:"Loupe"},{hash:"WNeppRM",userName:"m019m1",title:"Cube"}],H=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(l)))).state={currentIndex:0,width:window.innerWidth,height:window.innerHeight},a.changeDimension=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a.shift=function(e){a.setState((function(t){var a=t.currentIndex;return{currentIndex:a+e<0?C.length-1:a+e>C.length-1?0:a+e}}))},a.setIndex=function(e){a.setState({currentIndex:e})},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.changeDimension)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.changeDimension)}},{key:"render",value:function(){var e=this.state,t=e.currentIndex,a=e.width,r=a>e.height?Math.min(.72*a,700):Math.max(.92*a,300),i={transform:"translateX(".concat(-t*r,"px)")};return l.a.createElement(n.Fragment,null,l.a.createElement(x,{listOfProjects:C,btnsClickHandle:this.shift,style:i}),l.a.createElement(I,{listOfOptions:C,btnsClickHandle:this.setIndex,currentIndex:t}))}}]),t}(n.Component),O=(a(47),[{basicSkill:"HTML5",description:"Semantic, valid"},{basicSkill:"CSS3",description:"Sass/SCSS, BEM, adaptive, flex/grid"},{basicSkill:"JavaScript",description:"Good knowledge. ES6, AJAX, jQuery"},{basicSkill:"React.js",description:"React.js+Redux - basic knowledge"},{basicSkill:"The rest...",description:"REST API, git, SQL, npm, babel"}]),P=function(){return l.a.createElement("div",{className:"skills"},l.a.createElement("ul",{className:"skills__list"},O.map((function(e){var t=e.basicSkill,a=e.description;return l.a.createElement("li",{key:t,className:"skill"},l.a.createElement("span",{className:"basicSkill"},t),l.a.createElement("span",{className:"description"},a))}))))},M=(a(48),a(25)),W=[{title:"Github",href:"https://github.com/m019m1",target:"_blank",icon:["fab","github"]},{title:"Codepen",href:"https://codepen.io/m019m1",target:"_blank",icon:["fab","codepen"]},{title:"email",href:"mailto:yaroslav.polyanskiy@gmail.com?subject=You%20are%20hired!",target:"_blank",icon:["fas","envelope"]},{title:"cell",href:"tel:+79137612930",target:"_blank",icon:["fas","phone-square-alt"]},{title:"Telegram",href:"https://t.me/polYar4ik",target:"_blank",icon:["fab","telegram-plane"]},{title:"Skype",href:"skype:yar4ik1986",target:"_blank",icon:["fab","skype"]},{title:"linkedIn",href:"https://www.linkedin.com/in/yaroslav-polyanskiy-01a802a4/",target:"_blank",icon:["fab","linkedin"]},{title:"vk",href:"https://vk.com/id2758188",target:"_blank",icon:["fab","vk"]}],L=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",{className:"contacts__appeal"},"Feel free to contact me!"),l.a.createElement("ul",{className:"contacts__list"},W.map((function(e){var t=e.title,a=e.href,n=e.target,r=e.icon;return l.a.createElement("li",{key:t,title:t,className:"contact",id:t},l.a.createElement("a",{href:a,target:n,className:"contact__link"},l.a.createElement(M.a,{icon:r,fixedWidth:!0,pull:"left",className:"icon"})))}))))},D=(a(49),function(){return l.a.createElement("div",{className:"error"},l.a.createElement("p",null,"Oh no no no! You've broken that site! Congratulations!"),l.a.createElement("p",null,"Please, go ",l.a.createElement(s.b,{to:"/"}," Home ")," now!"))});i.a.render(l.a.createElement(s.a,null,l.a.createElement(d,null,l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:k}),l.a.createElement(b.a,{path:"/projects",component:H}),l.a.createElement(b.a,{path:"/skills",component:P}),l.a.createElement(b.a,{path:"/contacts",component:L}),l.a.createElement(b.a,{path:"*",component:D})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.e7cb77cd.chunk.js.map