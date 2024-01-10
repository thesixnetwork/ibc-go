"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4798],{56767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(85893),o=t(11151);const r={title:"IBC-Go v7 to v7.1",sidebar_label:"IBC-Go v7 to v7.1",sidebar_position:9,slug:"/migrations/v7-to-v7_1"},s="Migrating from v7 to v7.1",a={id:"migrations/v7-to-v7_1",title:"IBC-Go v7 to v7.1",description:"This guide provides instructions for migrating to version v7.1.0 of ibc-go.",source:"@site/versioned_docs/version-v8.0.x/05-migrations/09-v7-to-v7_1.md",sourceDirName:"05-migrations",slug:"/migrations/v7-to-v7_1",permalink:"/v8/migrations/v7-to-v7_1",draft:!1,unlisted:!1,tags:[],version:"v8.0.x",sidebarPosition:9,frontMatter:{title:"IBC-Go v7 to v7.1",sidebar_label:"IBC-Go v7 to v7.1",sidebar_position:9,slug:"/migrations/v7-to-v7_1"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v6 to v7",permalink:"/v8/migrations/v6-to-v7"},next:{title:"IBC-Go v7.2 to v7.3",permalink:"/v8/migrations/v7_2-to-v7_3"}},l={},c=[{value:"Chains",id:"chains",level:2},{value:"Transfer migration",id:"transfer-migration",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"migrating-from-v7-to-v71",children:"Migrating from v7 to v7.1"}),"\n",(0,i.jsxs)(n.p,{children:["This guide provides instructions for migrating to version ",(0,i.jsx)(n.code,{children:"v7.1.0"})," of ibc-go."]}),"\n",(0,i.jsx)(n.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#migrating-from-v7-to-v71",children:"Migrating from v7 to v7.1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#chains",children:"Chains"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ibc-apps",children:"IBC Apps"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#relayers",children:"Relayers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ibc-light-clients",children:"IBC Light Clients"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," ibc-go supports golang semantic versioning and therefore all imports must be updated on major version releases."]}),"\n",(0,i.jsx)(n.h2,{id:"chains",children:"Chains"}),"\n",(0,i.jsxs)(n.p,{children:["In the previous release of ibc-go, the localhost ",(0,i.jsx)(n.code,{children:"v1"})," light client module was deprecated and removed. The ibc-go ",(0,i.jsx)(n.code,{children:"v7.1.0"})," release introduces ",(0,i.jsx)(n.code,{children:"v2"})," of the 09-localhost light client module."]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/core/module.go#L127-L145",children:"automatic migration handler"})," is configured in the core IBC module to set the localhost ",(0,i.jsx)(n.code,{children:"ClientState"})," and sentinel ",(0,i.jsx)(n.code,{children:"ConnectionEnd"})," in state."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to use the 09-localhost client chains must update the ",(0,i.jsx)(n.code,{children:"AllowedClients"})," parameter in the 02-client submodule of core IBC. This can be configured directly in the application upgrade handler or alternatively updated via the legacy governance parameter change proposal.\nWe ",(0,i.jsx)(n.strong,{children:"strongly"})," recommend chains to perform this action so that intra-ledger communication can be carried out using the familiar IBC interfaces."]}),"\n",(0,i.jsxs)(n.p,{children:["See the upgrade handler code sample provided below or ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/testing/simapp/upgrades/upgrades.go#L85",children:"follow this link"})," for the upgrade handler used by the ibc-go simapp."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func CreateV7LocalhostUpgradeHandler(\n  mm *module.Manager,\n  configurator module.Configurator,\n  clientKeeper clientkeeper.Keeper,\n) upgradetypes.UpgradeHandler {\n  return func(ctx sdk.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {\n    // explicitly update the IBC 02-client params, adding the localhost client type\n    params := clientKeeper.GetParams(ctx)\n    params.AllowedClients = append(params.AllowedClients, exported.Localhost)\n    clientKeeper.SetParams(ctx, params)\n\n    return mm.RunMigrations(ctx, configurator, vm)\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"transfer-migration",children:"Transfer migration"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/apps/transfer/module.go#L111-L113",children:"automatic migration handler"})," is configured in the transfer module to set the total amount in escrow for all denominations of coins that have been sent out. For each denomination a state entry is added with the total amount of coins in escrow regardless of the channel from which they were transferred."]}),"\n",(0,i.jsx)(n.h2,{id:"ibc-apps",children:"IBC Apps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"relayers",children:"Relayers"}),"\n",(0,i.jsxs)(n.p,{children:["The event attribute ",(0,i.jsx)(n.code,{children:"packet_connection"})," (",(0,i.jsx)(n.code,{children:"connectiontypes.AttributeKeyConnection"}),") has been deprecated.\nPlease use the ",(0,i.jsx)(n.code,{children:"connection_id"})," attribute (",(0,i.jsx)(n.code,{children:"connectiontypes.AttributeKeyConnectionID"}),") which is emitted by all channel events.\nOnly send packet, receive packet, write acknowledgement, and acknowledge packet events used ",(0,i.jsx)(n.code,{children:"packet_connection"})," previously."]}),"\n",(0,i.jsx)(n.h2,{id:"ibc-light-clients",children:"IBC Light Clients"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);