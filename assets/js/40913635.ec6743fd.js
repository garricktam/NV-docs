"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[339],{93202:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=i(85893),r=i(11151);const o={title:"IBM Security Advisor",taxonomy:{category:"docs"},slug:"/integration/ibmsa"},s=void 0,c={id:"integration/ibmsa/ibmsa",title:"IBM Security Advisor",description:"Integrating with IBM Security Advisor",source:"@site/docs/08.integration/09.ibmsa/09.ibmsa.md",sourceDirName:"08.integration/09.ibmsa",slug:"/integration/ibmsa",permalink:"/next/integration/ibmsa",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/08.integration/09.ibmsa/09.ibmsa.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"IBM Security Advisor",taxonomy:{category:"docs"},slug:"/integration/ibmsa"},sidebar:"tutorialSidebar",previous:{title:"OpenID Connect (OIDC) for ADFS",permalink:"/next/integration/oidc_adfs"},next:{title:"IBM QRadar",permalink:"/next/integration/ibmqr"}},a={},d=[{value:"Integrating with IBM Security Advisor",id:"integrating-with-ibm-security-advisor",level:3},{value:"Verifying the Connection",id:"verifying-the-connection",level:4},{value:"Reviewing Security Events in IBM Security Advisor",id:"reviewing-security-events-in-ibm-security-advisor",level:4},{value:"Removing the Integration",id:"removing-the-integration",level:3}];function l(e){const t={h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"integrating-with-ibm-security-advisor",children:"Integrating with IBM Security Advisor"}),"\n",(0,n.jsx)(t.p,{children:"NeuVector Integrates with IBM Security Advisor on IBM Cloud."}),"\n",(0,n.jsx)(t.p,{children:"To generate the registration URL required, please log into the NeuVector console as an administrator and go to Settings -> Configuration."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Enable "Integrate with IBM Security Advisor" -> Submit'}),"\n",(0,n.jsx)(t.li,{children:'Click "Get URL" -> Copy to clipboard'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ibmconfigure",src:i(14049).Z+"",width:"2294",height:"468"})}),"\n",(0,n.jsx)(t.p,{children:"Then return to the IBM Security Advisor console, and under \"Enter the NeuVector setup URL\", type in https://{NeuVector controller hostname/ip}:{port} and paste what is copied in from the steps above. For the port, use the exposed NeuVector REST API port (default is 10443). For multi-cluster environments this is also the 'fed-worker' service which exposes this port."}),"\n",(0,n.jsx)(t.p,{children:"IBM Security Advisor will communicate with your NeuVector cluster controller thru the provided hostname or IP. Note: This may need to be exposed as a service for access from outside the Kubernetes cluster, similar to how the REST API is exposed as a service."}),"\n",(0,n.jsx)(t.h4,{id:"verifying-the-connection",children:"Verifying the Connection"}),"\n",(0,n.jsx)(t.p,{children:'When the connection is successfully created between IBM Security Advisor & NeuVector, you will see the green "Connected at {date, time}" icon next to "Integrate with IBM Security Advisor" in the NeuVector Console.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"connected",src:i(74960).Z+"",width:"1246",height:"272"})}),"\n",(0,n.jsx)(t.h4,{id:"reviewing-security-events-in-ibm-security-advisor",children:"Reviewing Security Events in IBM Security Advisor"}),"\n",(0,n.jsx)(t.p,{children:"A summary card with security event information is displayed."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"threats",src:i(90729).Z+"",width:"838",height:"792"})}),"\n",(0,n.jsx)(t.p,{children:"Each security event can be investigated in more detail, as shown below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"findings",src:i(31400).Z+"",width:"1892",height:"850"})}),"\n",(0,n.jsx)(t.h3,{id:"removing-the-integration",children:"Removing the Integration"}),"\n",(0,n.jsx)(t.p,{children:'If you delete a NeuVector integration connection in your IBM Cloud account, remember to also disable the "IBM SA integration" for that NeuVector cluster in Settings -> Configuration.'})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},31400:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ibm_sa_findings-8659714acf00ab38c27f8c32ddf798a4.png"},90729:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ibm_sa_threat_summary-e094b66309d1185779556fffe89bd532.png"},14049:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ibmsa_config_new-3be4ad52ea48154f788606be126434fb.png"},74960:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ibmsa_connected-03742a881fb3452f98d2c66d3a935f2b.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>s});var n=i(67294);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);