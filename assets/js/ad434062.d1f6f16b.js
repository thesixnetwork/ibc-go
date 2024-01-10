"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[444],{90133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=n(85893),r=n(11151);const l={slug:"/params.md"},i="Parameters",a={id:"params",title:"Parameters",description:"02-Client",source:"@site/params/params.md",sourceDirName:".",slug:"/params.md",permalink:"/params/params.md",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/params.md"}},c={},o=[{value:"02-Client",id:"02-client",level:2},{value:"AllowedClients",id:"allowedclients",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.h2,{id:"02-client",children:"02-Client"}),"\n",(0,s.jsx)(t.p,{children:"The 02-client submodule contains the following parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"AllowedClients"})}),(0,s.jsx)(t.td,{children:"[]string"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"06-solomachine","07-tendermint","09-localhost"'})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"allowedclients",children:"AllowedClients"}),"\n",(0,s.jsxs)(t.p,{children:["The allowed clients parameter defines an allowlist of client types supported by the chain. A client\nthat is not registered on this list will fail upon creation or on genesis validation. Note that,\nsince the client type is an arbitrary string, chains they must not register two light clients which\nreturn the same value for the ",(0,s.jsx)(t.code,{children:"ClientType()"})," function, otherwise the allowlist check can be\nbypassed."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);