(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(70),c=n.n(r);n(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(15),l=n(4),u=n(71),s=n(72),d=n(77),p=n(73),m=n(78),h=n(25),E=n(52),f=n.n(E),b=(n(131),n(134),n(147)),v=n(148),y=(n(135),function(){return{type:"INCREMENT",incrementBy:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}),g=function(){return{type:"DECREMENT",decrementBy:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},w=function(){return{type:"RESET"}},C=n(37),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.incrementBy;case"DECREMENT":return e-t.decrementBy;case"RESET":return 0;default:return e}},k=Object(C.b)(j),R=n(39);f.a.initializeApp({apiKey:"AIzaSyCLwlab9A5oJJeA9SIy5jY6f857HOpkTS8",authDomain:"boilerplate-de6e2.firebaseapp.com",databaseURL:"https://boilerplate-de6e2.firebaseio.com",projectId:"boilerplate-de6e2",storageBucket:"boilerplate-de6e2.appspot.com",messagingSenderId:"457161987783"});var O=f.a.database(),I=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={name:"Fetching from firebase..."},n.componentDidMount=function(){O.ref().on("value",function(e){var t=e.val();n.setState(function(){return{name:t.dane}})})},n.handleAdd=function(){n.props.dispatch(y())},n.handleMinus=function(){n.props.dispatch(g())},n.handleReset=function(){n.props.dispatch(w())},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b.a,null,o.a.createElement("h1",null,"Counter"),o.a.createElement("p",null,"Current Count: ",this.props.state),o.a.createElement(v.a,{onClick:this.handleAdd},"+"),o.a.createElement(v.a,{onClick:this.handleMinus},"-"),o.a.createElement(v.a,{onClick:this.handleReset},"Reset"),o.a.createElement("p",null,"Info from Firebase: ",this.state.name),o.a.createElement(h.a,{to:"/"},"Go to dashboard")))}}]),t}(a.Component);k.subscribe(function(){return console.log(k.getState())});var S=Object(R.b)(function(e){return{state:e}})(I),A=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to the dashboard"),o.a.createElement(h.a,{to:"/counter"},"Go to counter"))},B=Object(l.b)({basename:"/calculator"}),M=o.a.createElement(R.a,{store:k},o.a.createElement(i.b,{history:B},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:A}),o.a.createElement(i.a,{path:"/counter",component:S}),o.a.createElement(i.a,{component:function(){return o.a.createElement("div",null,"404 Not found 1")}}))));c.a.render(M,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n(145)},84:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.5ce53115.chunk.js.map