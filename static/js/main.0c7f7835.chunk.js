(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(54)},39:function(e,t,n){},41:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o);n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(8),i=n(7),u=n(31),s=n.n(u),h=n(25),d=n(26),m=n(32),E=n(27),p=n(33),f=(n(40),n(56)),b=n(57),v=(n(41),function(){return{type:"INCREMENT",incrementBy:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}),w=function(){return{type:"DECREMENT",decrementBy:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},y=function(){return{type:"RESET"}},g=n(15),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.incrementBy;case"DECREMENT":return e-t.decrementBy;case"RESET":return 0;default:return e}},R=Object(g.b)(C),k=n(17),j=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleAdd=function(){n.props.dispatch(v())},n.handleMinus=function(){n.props.dispatch(w())},n.handleReset=function(){n.props.dispatch(y())},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("h1",null,"Counter"),r.a.createElement("p",null,"Current Count: ",this.props.state),r.a.createElement(b.a,{onClick:this.handleAdd},"+"),r.a.createElement(b.a,{onClick:this.handleMinus},"-"),r.a.createElement(b.a,{onClick:this.handleReset},"Reset"),r.a.createElement("p",null,"Info from Firebase:"),r.a.createElement(l.b,{to:"/"},"Go to dashboard")))}}]),t}(a.Component);R.subscribe(function(){return console.log(R.getState())});var O=Object(k.b)(function(e){return{state:e}})(j),B=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to the dashboard"),r.a.createElement(l.b,{to:"/counter"},"Go to counter"))},M=s()({basename:"/calculator"}),N=r.a.createElement(k.a,{store:R},r.a.createElement(l.a,{history:M},r.a.createElement(i.a,{exact:!0,path:"/",component:B}),r.a.createElement(i.a,{path:"/counter",component:O})));c.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.0c7f7835.chunk.js.map