"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[356],{58506:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=n(85893),i=n(11151);const t={title:"Fee Distribution",sidebar_label:"Fee Distribution",sidebar_position:4,slug:"/middleware/ics29-fee/fee-distribution"},o="Fee distribution",a={id:"middleware/ics29-fee/fee-distribution",title:"Fee Distribution",description:"Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators.",source:"@site/versioned_docs/version-v7.3.x/04-middleware/01-ics29-fee/04-fee-distribution.md",sourceDirName:"04-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/fee-distribution",permalink:"/v7/middleware/ics29-fee/fee-distribution",draft:!1,unlisted:!1,tags:[],version:"v7.3.x",sidebarPosition:4,frontMatter:{title:"Fee Distribution",sidebar_label:"Fee Distribution",sidebar_position:4,slug:"/middleware/ics29-fee/fee-distribution"},sidebar:"defaultSidebar",previous:{title:"Fee Messages",permalink:"/v7/middleware/ics29-fee/msgs"},next:{title:"Events",permalink:"/v7/middleware/ics29-fee/events"}},d={},c=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Register a counterparty payee address for forward relaying",id:"register-a-counterparty-payee-address-for-forward-relaying",level:2},{value:"Relayer operator actions?",id:"relayer-operator-actions",level:3},{value:"Register an alternative payee address for reverse and timeout relaying",id:"register-an-alternative-payee-address-for-reverse-and-timeout-relaying",level:2},{value:"Relayer operator actions",id:"relayer-operator-actions-1",level:3}];function l(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"fee-distribution",children:"Fee distribution"}),"\n",(0,r.jsx)(s.admonition,{title:"Synopsis",type:"note",children:(0,r.jsx)(s.p,{children:"Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators."})}),"\n",(0,r.jsx)(s.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/v7/middleware/ics29-fee/overview",children:"Fee Middleware"})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Packet fees are divided into 3 distinct amounts in order to compensate relayer operators for packet relaying on fee enabled IBC channels."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"RecvFee"}),": The sum of all packet receive fees distributed to a payee for successful execution of ",(0,r.jsx)(s.code,{children:"MsgRecvPacket"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AckFee"}),": The sum of all packet acknowledgement fees distributed to a payee for successful execution of ",(0,r.jsx)(s.code,{children:"MsgAcknowledgement"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"TimeoutFee"}),": The sum of all packet timeout fees distributed to a payee for successful execution of ",(0,r.jsx)(s.code,{children:"MsgTimeout"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"register-a-counterparty-payee-address-for-forward-relaying",children:"Register a counterparty payee address for forward relaying"}),"\n",(0,r.jsxs)(s.p,{children:["As mentioned in ",(0,r.jsx)(s.a,{href:"/v7/middleware/ics29-fee/overview#concepts",children:"ICS29 Concepts"}),", the forward relayer describes the actor who performs the submission of ",(0,r.jsx)(s.code,{children:"MsgRecvPacket"})," on the destination chain.\nFee distribution for incentivized packet relays takes place on the packet source chain."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Relayer operators are expected to register a counterparty payee address, in order to be compensated accordingly with ",(0,r.jsx)(s.code,{children:"RecvFee"}),"s upon completion of a packet lifecycle."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The counterparty payee address registered on the destination chain is encoded into the packet acknowledgement and communicated as such to the source chain for fee distribution.\n",(0,r.jsx)(s.strong,{children:"If a counterparty payee is not registered for the forward relayer on the destination chain, the escrowed fees will be refunded upon fee distribution."})]}),"\n",(0,r.jsx)(s.h3,{id:"relayer-operator-actions",children:"Relayer operator actions?"}),"\n",(0,r.jsxs)(s.p,{children:["A transaction must be submitted ",(0,r.jsx)(s.strong,{children:"to the destination chain"})," including a ",(0,r.jsx)(s.code,{children:"CounterpartyPayee"})," address of an account on the source chain.\nThe transaction must be signed by the ",(0,r.jsx)(s.code,{children:"Relayer"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Note: If a module account address is used as the ",(0,r.jsx)(s.code,{children:"CounterpartyPayee"})," but the module has been set as a blocked address in the ",(0,r.jsx)(s.code,{children:"BankKeeper"}),", the refunding to the module account will fail. This is because many modules use invariants to compare internal tracking of module account balances against the actual balance of the account stored in the ",(0,r.jsx)(s.code,{children:"BankKeeper"}),". If a token transfer to the module account occurs without going through this module and updating the account balance of the module on the ",(0,r.jsx)(s.code,{children:"BankKeeper"}),", then invariants may break and unknown behaviour could occur depending on the module implementation. Therefore, if it is desirable to use a module account that is currently blocked, the module developers should be consulted to gauge to possibility of removing the module account from the blocked list."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:"type MsgRegisterCounterpartyPayee struct {\n\t// unique port identifier\n\tPortId string\n\t// unique channel identifier\n\tChannelId string\n\t// the relayer address\n\tRelayer string\n\t// the counterparty payee address\n\tCounterpartyPayee string\n}\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"This message is expected to fail if:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PortId"})," is invalid (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ChannelId"})," is invalid (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Relayer"})," is an invalid address (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/beginner/03-accounts.md#addresses",children:"Cosmos SDK Addresses"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"CounterpartyPayee"})," is empty."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"See below for an example CLI command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"simd tx ibc-fee register-counterparty-payee transfer channel-0 \\\ncosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh \\\nosmo1v5y0tz01llxzf4c2afml8s3awue0ymju22wxx2 \\\n--from cosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh\n"})}),"\n",(0,r.jsx)(s.h2,{id:"register-an-alternative-payee-address-for-reverse-and-timeout-relaying",children:"Register an alternative payee address for reverse and timeout relaying"}),"\n",(0,r.jsxs)(s.p,{children:["As mentioned in ",(0,r.jsx)(s.a,{href:"/v7/middleware/ics29-fee/overview#concepts",children:"ICS29 Concepts"}),", the reverse relayer describes the actor who performs the submission of ",(0,r.jsx)(s.code,{children:"MsgAcknowledgement"})," on the source chain.\nSimilarly the timeout relayer describes the actor who performs the submission of ",(0,r.jsx)(s.code,{children:"MsgTimeout"})," (or ",(0,r.jsx)(s.code,{children:"MsgTimeoutOnClose"}),") on the source chain."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Relayer operators ",(0,r.jsx)(s.strong,{children:"may choose"})," to register an optional payee address, in order to be compensated accordingly with ",(0,r.jsx)(s.code,{children:"AckFee"}),"s and ",(0,r.jsx)(s.code,{children:"TimeoutFee"}),"s upon completion of a packet life cycle."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["If a payee is not registered for the reverse or timeout relayer on the source chain, then fee distribution assumes the default behaviour, where fees are paid out to the relayer account which delivers ",(0,r.jsx)(s.code,{children:"MsgAcknowledgement"})," or ",(0,r.jsx)(s.code,{children:"MsgTimeout"}),"/",(0,r.jsx)(s.code,{children:"MsgTimeoutOnClose"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"relayer-operator-actions-1",children:"Relayer operator actions"}),"\n",(0,r.jsxs)(s.p,{children:["A transaction must be submitted ",(0,r.jsx)(s.strong,{children:"to the source chain"})," including a ",(0,r.jsx)(s.code,{children:"Payee"})," address of an account on the source chain.\nThe transaction must be signed by the ",(0,r.jsx)(s.code,{children:"Relayer"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Note: If a module account address is used as the ",(0,r.jsx)(s.code,{children:"Payee"})," it is recommended to ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/71d7480c923f4227453e8a80f51be01ae7ee845e/testing/simapp/app.go#L659",children:"turn off invariant checks"})," for that module."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:"type MsgRegisterPayee struct {\n\t// unique port identifier\n\tPortId string\n\t// unique channel identifier\n\tChannelId string\n\t// the relayer address\n\tRelayer string\n\t// the payee address\n\tPayee string\n}\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"This message is expected to fail if:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PortId"})," is invalid (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ChannelId"})," is invalid (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Relayer"})," is an invalid address (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/beginner/03-accounts.md#addresses",children:"Cosmos SDK Addresses"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Payee"})," is an invalid address (see ",(0,r.jsx)(s.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/beginner/03-accounts.md#addresses",children:"Cosmos SDK Addresses"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"See below for an example CLI command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"simd tx ibc-fee register-payee transfer channel-0 \\\ncosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh \\\ncosmos153lf4zntqt33a4v0sm5cytrxyqn78q7kz8j8x5 \\\n--from cosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(67294);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);