"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[467],{32444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),s=t(11151);const a={},o="ADR 27: Add support for Wasm based light client",r={id:"adr-027-ibc-wasm",title:"ADR 27: Add support for Wasm based light client",description:"Changelog",source:"@site/architecture/adr-027-ibc-wasm.md",sourceDirName:".",slug:"/adr-027-ibc-wasm",permalink:"/architecture/adr-027-ibc-wasm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 026: IBC Client Recovery Mechanisms",permalink:"/architecture/adr-026-ibc-client-recovery-mechanisms"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"How light client proxy works?",id:"how-light-client-proxy-works",level:3},{value:"Global Wasm VM variable",id:"global-wasm-vm-variable",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"adr-27-add-support-for-wasm-based-light-client",children:"ADR 27: Add support for Wasm based light client"}),"\n",(0,i.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"26/11/2020: Initial Draft"}),"\n",(0,i.jsx)(n.li,{children:"26/05/2023: Update after 02-client refactor and re-implementation by Strangelove"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Draft, needs updates"})}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"Abstract"}),"\n",(0,i.jsx)(n.p,{children:"In the Cosmos SDK light clients are currently hardcoded in Go. This makes upgrading existing IBC light clients or\nadding support for new light client a multi step process involving on-chain governance which is time-consuming."}),"\n",(0,i.jsx)(n.p,{children:"To remedy this, we are proposing a Wasm VM to host light client bytecode, which allows easier upgrading of\nexisting IBC light clients as well as adding support for new IBC light clients without requiring a code release and\ncorresponding hard-fork event."}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(n.p,{children:["Currently in ibc-go light clients are defined as part of the codebase and are implemented as modules under\n",(0,i.jsx)(n.code,{children:"modules/light-clients"}),". Adding support for new light clients or updating an existing light client in the event\nof a security issue or consensus update is a multi-step process which is both time consuming and error prone.\nIn order to enable new IBC light client implementations it is necessary to modify the codebase of ibc-go,\nre-build chains' binaries, pass a governance proposal and validators upgrade their nodes."]}),"\n",(0,i.jsx)(n.p,{children:"Another problem stemming from the above process is that if a chain wants to upgrade its own consensus, it will\nneed to convince every chain or hub connected to it to upgrade its light client in order to stay connected. Due\nto the time consuming process required to upgrade a light client, a chain with lots of connections needs to be\ndisconnected for quite some time after upgrading its consensus, which can be very expensive in terms of time and effort."}),"\n",(0,i.jsx)(n.p,{children:"We are proposing simplifying this workflow by integrating a Wasm light client module that makes adding support for\nnew light clients a simple governance-gated transaction. The light client bytecode, written in Wasm-compilable Rust,\nruns inside a Wasm VM. The Wasm light client submodule exposes a proxy light client interface that routes incoming\nmessages to the appropriate handler function, inside the Wasm VM for execution."}),"\n",(0,i.jsx)(n.p,{children:"With the Wasm light client module, anybody can add new IBC light client in the form of Wasm bytecode (provided they are\nable to submit the governance proposal transaction and that it passes) as well as instantiate clients using any created\nclient type. This allows any chain to update its own light client in other chains without going through the steps outlined above."}),"\n",(0,i.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(n.p,{children:["We decided to implement the Wasm light client module as a light client proxy that will interface with the actual light client\nuploaded as Wasm bytecode. To enable usage of the Wasm light client module, users need to add it to the list of allowed clients\nby updating the ",(0,i.jsx)(n.code,{children:"AllowedClients"})," parameter in the 02-client submodule of core IBC."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"params := clientKeeper.GetParams(ctx)\nparams.AllowedClients = append(params.AllowedClients, exported.Wasm)\nclientKeeper.SetParams(ctx, params)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Adding a new light client contract is governance-gated. To upload a new light client users need to submit\na ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/main/modules/gov#proposals",children:"governance v1 proposal"})," that contains the ",(0,i.jsx)(n.code,{children:"sdk.Msg"})," for storing\nthe Wasm contract's bytecode. The required message is ",(0,i.jsx)(n.code,{children:"MsgStoreCode"})," and the bytecode is provided in the field ",(0,i.jsx)(n.code,{children:"code"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-proto",children:"// MsgStoreCode defines the request type for the StoreCode rpc.\nmessage MsgStoreCode {\n  string signer = 1;\n  bytes  code   = 2;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The RPC handler processing ",(0,i.jsx)(n.code,{children:"MsgStoreCode"})," will make sure that the signer of the message matches the address of authority allowed to\nsubmit this message (which is normally the address of the governance module)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// StoreCode defines a rpc handler method for MsgStoreCode\nfunc (k Keeper) StoreCode(goCtx context.Context, msg *types.MsgStoreCode) (*types.MsgStoreCodeResponse, error) {\n  ctx := sdk.UnwrapSDKContext(goCtx)\n\n  if k.authority != msg.Signer {\n    return nil, sdkerrors.Wrapf(govtypes.ErrInvalidSigner, "invalid authority: expected %s, got %s", k.authority, msg.Signer)\n  }\n\n  codeHash, err := k.storeWasmCode(ctx, msg.Code)\n  if err != nil {\n    return nil, sdkerrors.Wrap(err, "storing wasm code failed")\n  }\n\n  ctx.EventManager().EmitEvents(sdk.Events{\n    sdk.NewEvent(\n      clienttypes.EventTypeStoreWasmCode,\n      sdk.NewAttribute(clienttypes.AttributeKeyWasmCodeHash, hex.EncodeToString(codeHash)),\n    ),\n    sdk.NewEvent(\n      sdk.EventTypeMessage,\n      sdk.NewAttribute(sdk.AttributeKeyModule, clienttypes.AttributeValueCategory),\n    ),\n  })\n\n  return &types.MsgStoreCodeResponse{\n    CodeHash: codeHash,\n  }, nil\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The contract's bytecode is stored in state in an entry indexed by the code hash: ",(0,i.jsx)(n.code,{children:"codeHash/{code hash}"}),". The code hash is simply\nthe hash of the bytecode of the contract."]}),"\n",(0,i.jsx)(n.h3,{id:"how-light-client-proxy-works",children:"How light client proxy works?"}),"\n",(0,i.jsx)(n.p,{children:"The light client proxy behind the scenes will call a CosmWasm smart contract instance with incoming arguments serialized\nin JSON format with appropriate environment information. Data returned by the smart contract is deserialized and\nreturned to the caller."}),"\n",(0,i.jsxs)(n.p,{children:["Consider the example of the ",(0,i.jsx)(n.code,{children:"VerifyClientMessage"})," function of ",(0,i.jsx)(n.code,{children:"ClientState"})," interface. Incoming arguments are\npackaged inside a payload object that is then JSON serialized and passed to ",(0,i.jsx)(n.code,{children:"callContract"}),", which execute ",(0,i.jsx)(n.code,{children:"WasmVm.Execute"}),"\nand returns the slice of bytes returned by the smart contract. This data is deserialized and passed as return argument."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type (\n  verifyClientMessageInnerPayload struct {\n    ClientMessage clientMessage `json:"client_message"`\n  }\n  clientMessage struct {\n    Header       *Header       `json:"header,omitempty"`\n    Misbehaviour *Misbehaviour `json:"misbehaviour,omitempty"`\n  }\n  verifyClientMessagePayload struct {\n    VerifyClientMessage verifyClientMessageInnerPayload `json:"verify_client_message"`\n  }\n)\n\n// VerifyClientMessage must verify a ClientMessage. A ClientMessage could be a Header, Misbehaviour, or batch update.\n// It must handle each type of ClientMessage appropriately. Calls to CheckForMisbehaviour, UpdateState, and UpdateStateOnMisbehaviour\n// will assume that the content of the ClientMessage has been verified and can be trusted. An error should be returned\n// if the ClientMessage fails to verify.\nfunc (cs ClientState) VerifyClientMessage(\n  ctx sdk.Context, \n  _ codec.BinaryCodec, \n  clientStore sdk.KVStore, \n  clientMsg exported.ClientMessage\n) error {\n  clientMsgConcrete := clientMessage{\n    Header:       nil,\n    Misbehaviour: nil,\n  }\n  switch clientMsg := clientMsg.(type) {\n  case *Header:\n    clientMsgConcrete.Header = clientMsg\n  case *Misbehaviour:\n    clientMsgConcrete.Misbehaviour = clientMsg\n  }\n  inner := verifyClientMessageInnerPayload{\n    ClientMessage: clientMsgConcrete,\n  }\n  payload := verifyClientMessagePayload{\n    VerifyClientMessage: inner,\n  }\n  _, err := call[contractResult](ctx, clientStore, &cs, payload)\n  return err\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"global-wasm-vm-variable",children:"Global Wasm VM variable"}),"\n",(0,i.jsxs)(n.p,{children:["The 08-wasm keeper structure keeps a reference to the Wasm VM instantiated in the keeper constructor function. The keeper uses\nthe Wasm VM to store the bytecode of light client contracts. However, the Wasm VM is also needed in the 08-wasm implementations of\nsome of the ",(0,i.jsx)(n.code,{children:"ClientState"})," interface functions to initialise a contract, execute calls on the contract and query the contract. Since\nthe ",(0,i.jsx)(n.code,{children:"ClientState"})," functions do not have access to the 08-wasm keeper, then it has been decided to keep a global pointer variable that\npoints to the same instance as the one in the 08-wasm keeper. This global pointer variable is then used in the implementations of\nthe ",(0,i.jsx)(n.code,{children:"ClientState"})," functions."]}),"\n",(0,i.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(n.h3,{id:"positive",children:"Positive"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Adding support for new light client or upgrading existing light client is way easier than before and only requires single transaction instead of a hard-fork."}),"\n",(0,i.jsx)(n.li,{children:"Improves maintainability of ibc-go, since no change in codebase is required to support new client or upgrade it."}),"\n",(0,i.jsx)(n.li,{children:"The existence of support for Rust dependencies in light clients which may not exist in Go."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"negative",children:"Negative"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Light clients written in Rust need to be written in a subset of Rust which could compile in Wasm."}),"\n",(0,i.jsx)(n.li,{children:"Introspecting light client code is difficult as only compiled bytecode exists in the blockchain."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);