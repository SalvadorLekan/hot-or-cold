(this["webpackJsonphot-cold"]=this["webpackJsonphot-cold"]||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r.n(o),d=r(4),l=r.n(d),a=(r(10),r(2)),b=["blue-900","blue-800","blue-700","blue-600","blue-500","blue-400","blue-300","blue-200","blue-100","blue-50","red-50","red-100","red-200","red-300","red-400","red-500","red-600","red-700","red-800","red-900"];var s=function(){var e=function(){d(Math.floor(101*Math.random())),N("cold"),x(0)},t=Object(o.useState)(Math.floor(101*Math.random())),r=Object(a.a)(t,2),c=r[0],d=r[1],l=Object(o.useState)(""),s=Object(a.a)(l,2),u=s[0],i=s[1],h=Object(o.useState)(0),j=Object(a.a)(h,2),p=j[0],x=j[1],m=Object(o.useState)(""),O=Object(a.a)(m,2),f=O[0],g=O[1],v=Object(o.useState)("cold"),y=Object(a.a)(v,2),w=y[0],N=y[1];return Object(n.jsxs)("div",{className:"container mx-auto items-center flex-col justify-around h-screen flex",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=100-Math.abs(u-c);N(100===t?"correct":t<p?"colder":p<50&&p<t?"warmer":"hotter"),g(b[Math.round(t/5)-1]),x(t),i("")},className:"border-purple-600 border-2 rounded-3xl p-4",children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("p",{children:"Type a number from 0 to 100"}),Object(n.jsx)("input",{placeholder:"Type a number",type:"number",min:"0",max:"100",required:!0,value:u,onChange:function(e){return i(e.target.value)},className:"block w-full outline-none border-transparent rounded-2xl p-2 focus:border-purple-600 border-2"})]}),Object(n.jsxs)("div",{className:"flex items-center pt-4 justify-between",children:[Object(n.jsx)("button",{className:"border-2 hover:border-transparent hover:bg-purple-600 hover:text-white py-1 px-4 rounded-full border-purple-600 text-purple-600",type:"submit",children:"Check"}),Object(n.jsx)("button",{className:"border-2 hover:border-transparent hover:bg-indigo-900 hover:text-white py-1 px-4 rounded-full border-indigo-900 text-indigo-900",type:"button",onClick:e,children:"Restart"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("p",{children:w}),Object(n.jsx)("progress",{className:"bg-white rounded-2xl border-2 ".concat(f),value:p,max:"100"})]}),"correct"===w&&Object(n.jsx)("div",{className:"bg-gray-50 px-11 fixed h-screen text-center flex justify-center items-center top-0",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"You Found it!"}),Object(n.jsxs)("p",{children:["The right number is ",c]}),Object(n.jsx)("button",{className:"border-2 hover:border-transparent hover:bg-indigo-900 hover:text-white py-1 px-4 rounded-full border-indigo-900 text-indigo-900",onClick:e,children:"Restart"})]})})]})},u=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,12)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,d=t.getTTFB;r(e),n(e),o(e),c(e),d(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(s,{})}),document.getElementById("root")),u()}},[[11,1,2]]]);
//# sourceMappingURL=main.2d199e0d.chunk.js.map