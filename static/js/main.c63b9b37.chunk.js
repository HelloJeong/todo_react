(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(5),o=c(2),i=c.n(o),r=c(11),s=c.n(r),a=(c(28),c(29),c(17)),d=c(15),u=(c(30),c(13));var j=function(e){var t=e.onAddTodo,c=Object(o.useState)(""),i=Object(d.a)(c,2),r=i[0],s=i[1],a=Object(o.useCallback)((function(e){s(e.target.value)}),[]);return Object(n.jsx)("form",{onSubmit:function(e){t(r),s(""),e.preventDefault()},children:Object(n.jsxs)("div",{className:"todo-insert",children:[Object(n.jsx)("input",{className:"todo-input",type:"text",placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:r,onChange:a}),Object(n.jsx)("button",{className:"todo-btn-add",type:"submit",children:Object(n.jsx)(u.a,{})})]})})},l=c(22);function b(e){var t=e.todo,c=e.onClickTodo,o=e.onRemoveTodo,i=e.style;return Object(n.jsxs)("li",{className:t.checked?"checked":"",style:i,children:[Object(n.jsx)("div",{className:"todo-check",onClick:function(){return c(t.id)},children:t.checked?Object(n.jsx)(u.b,{}):Object(n.jsx)(u.c,{})}),Object(n.jsx)("span",{children:t.text}),Object(n.jsx)("div",{className:"todo-remove",onClick:function(){return o(t.id)},children:Object(n.jsx)(u.d,{})})]},t.id)}var O=i.a.memo(b);function h(e){var t=e.todos,c=e.onRemoveTodo,i=e.onClickTodo,r=Object(o.useCallback)((function(e){var o=e.index,r=e.key,s=e.style,a=t[o];return Object(n.jsx)(O,{todo:a,onRemoveTodo:c,onClickTodo:i,style:s},r)}),[c,i,t]);return Object(n.jsx)("div",{className:"todo-list",children:Object(n.jsx)("ul",{children:Object(n.jsx)(l.a,{width:512,height:512,rowCount:t.length,rowHeight:40,rowRenderer:r,list:t,style:{outline:"none"}})})})}var f=i.a.memo(h);function x(){for(var e=[],t=1;t<=2500;t++)e.push({id:t,checked:!1,text:"abc".concat(t)});return e}var v=function(){var e=Object(o.useState)(x),t=Object(d.a)(e,2),c=t[0],i=t[1],r=Object(o.useRef)(1),s=Object(o.useCallback)((function(e){i((function(t){return t.concat({id:r.current,checked:!1,text:e})})),r.current++}),[]),u=Object(o.useCallback)((function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))}),[]),l=Object(o.useCallback)((function(e){i((function(t){return t.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{checked:!t.checked}):t}))}))}),[]);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"todo-header",children:"\uc77c\uc815 \uad00\ub9ac"}),Object(n.jsx)(j,{onAddTodo:s}),Object(n.jsx)(f,{todos:c,onRemoveTodo:u,onClickTodo:l})]})};var m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.c63b9b37.chunk.js.map