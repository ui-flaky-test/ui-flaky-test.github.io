(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),j=c.n(s),i=(c(13),c(8)),a=c(4),b=(c(14),c(15),c(0));var l=function(e){var t=e.project,c=e.name;console.log("Project",t);var n=t.Total,r=t.RootCause,s=t.Manifestation,j=t.Fix,i=t.Bugs,a=Object(b.jsx)("ul",{children:Object.keys(r).filter((function(e){return 0!==r[e]})).map((function(e){var t=r[e];return Object(b.jsxs)("li",{children:[e,":\xa0",t]})}))}),l=Object(b.jsx)("ul",{children:Object.keys(s).filter((function(e){return 0!==s[e]})).map((function(e){var t=s[e];return Object(b.jsxs)("li",{children:[e,":\xa0",t]})}))}),o=Object(b.jsx)("ul",{children:Object.keys(j).filter((function(e){return 0!==j[e]})).map((function(e){var t=j[e];return Object(b.jsxs)("li",{children:[e,":\xa0",t]})}))});return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:Object(b.jsx)("a",{href:"https://github.com/".concat(c),rel:"noreferrer",target:"_blank",children:c})})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Number of Bugs:\xa0",n]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"triple-group-parent",children:[Object(b.jsxs)("div",{className:"triple-group-child",children:[Object(b.jsx)("b",{children:"Root Causes"}),Object(b.jsx)("br",{}),a]}),Object(b.jsxs)("div",{className:"triple-group-child",children:[Object(b.jsx)("b",{children:"Manifestation Strategies"}),Object(b.jsx)("br",{}),l]}),Object(b.jsxs)("div",{className:"triple-group-child",children:[Object(b.jsx)("b",{children:"Buf Fix Strategies"}),Object(b.jsx)("br",{}),o]})]}),Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"Bug List"})}),Object(b.jsx)("ul",{children:i.map((function(e){var t=e.URL,c=e.Title,n=e.RootCause,r=e.Manifestation,s=e.Fix;return Object(b.jsxs)("span",{children:[Object(b.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:"".concat(c.substring(0,30),"... - ").concat(n," - ").concat(r," - ").concat(s)}),Object(b.jsx)("br",{})]},"title-".concat(t))}))}),Object(b.jsx)("br",{})]})},o=c(7),u=c.n(o);c(18);var O=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([""]),j=Object(a.a)(s,2),o=j[0],O=j[1],x=Object(n.useState)(""),d=Object(a.a)(x,2),h=d[0],p=d[1];Object(n.useEffect)((function(){fetch("details.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[""].concat(Object(i.a)(Object.keys(e)));O(t),r(e)}))}),[]);var f=Object(b.jsx)("span",{});if(""!==h){var v=c[h];f=Object(b.jsx)(l,{project:v,name:h})}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u.a,{options:o,onChange:function(e){p(e.value)},value:h,placeholder:"Select a project",className:"form-select"}),Object(b.jsx)("br",{}),f]})};j.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.aee22811.chunk.js.map