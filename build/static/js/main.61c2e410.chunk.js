(this.webpackJsonpexpense_track=this.webpackJsonpexpense_track||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(3)),o=n(8),j=n(4),u=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(j.a)(Object(j.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!=e.payload}))});case"ADD_TRANSACTION":return Object(j.a)(Object(j.a)({},t),{},{transactions:[e.payload].concat(Object(o.a)(t.transactions))});default:return t}},l=n(0),d={transactions:[]},b=Object(c.createContext)(d),x=function(t){var e=t.children,n=Object(c.useReducer)(u,d),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(l.jsx)(b.Provider,{value:{transactions:a.transactions,deleteTransaction:function(t){s({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){s({type:"ADD_TRANSACTION",payload:t})}},children:e})},O=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),s=Object(i.a)(a,2),o=s[0],j=s[1],u=Object(c.useContext)(b).addTransaction;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Add new transaction"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+o};u(e),r(""),j(0)},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{htmlFor:"text",children:"Transaction Title"}),Object(l.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{htmlFor:"amount",children:"Amount (Please put a '-' sign before expense amount)"}),Object(l.jsx)("input",{type:"number",value:o,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."})]}),Object(l.jsx)("button",{disabled:!n||!o,className:"btn",children:"Add transaction"})]})]})},h=function(){var t=Object(c.useContext)(b).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Your Balance"}),Object(l.jsxs)("h1",{children:["\u09f3",t]})]})},m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h2",{className:"title",children:"Expense Tracker"})})},f=function(){var t=Object(c.useContext)(b).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"inc-exp-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Income"}),Object(l.jsxs)("p",{className:"money plus",children:["\u09f3",e]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Expense"}),Object(l.jsxs)("p",{className:"money minus",children:["\u09f3",n]})]})]})})},p=function(t){var e=Object(c.useContext)(b).deleteTransaction,n=t.amount<0?"-":"+";return Object(l.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(l.jsxs)("span",{children:[n,"\u09f3",Math.abs(t.amount)]}),Object(l.jsx)("button",{className:"delete-btn",onClick:function(){return e(t.id)},children:"x"})]})},v=function(){var t=Object(c.useContext)(b).transactions;return console.log({transactions:t}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"History"}),Object(l.jsx)("ul",{className:"list",children:t.map((function(t){return Object(l.jsx)(p,{id:t.id,amount:t.amount,text:t.text,transaction:t},t.id)}))})]})},N=function(){return Object(l.jsxs)(x,{children:[Object(l.jsx)(m,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{}),Object(l.jsx)(f,{}),Object(l.jsx)(v,{}),Object(l.jsx)(O,{})]})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.61c2e410.chunk.js.map