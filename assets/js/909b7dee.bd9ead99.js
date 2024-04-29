"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8155],{51557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(85893),r=i(11151);const s={title:"Azure DevOps",taxonomy:{category:"docs"},slug:"/scanning/build/azuredevops"},a=void 0,o={id:"scanning/build/azuredevops/azuredevops",title:"Azure DevOps",description:"Scan for Vulnerabilities in the Azure DevOps Build Pipeline",source:"@site/docs/06.scanning/03.build/04.azuredevops/04.azuredevops.md",sourceDirName:"06.scanning/03.build/04.azuredevops",slug:"/scanning/build/azuredevops",permalink:"/next/scanning/build/azuredevops",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/03.build/04.azuredevops/04.azuredevops.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Azure DevOps",taxonomy:{category:"docs"},slug:"/scanning/build/azuredevops"},sidebar:"tutorialSidebar",previous:{title:"CircleCI",permalink:"/next/scanning/build/circleci"},next:{title:"Gitlab",permalink:"/next/scanning/build/gitlab"}},l={},c=[{value:"Scan for Vulnerabilities in the Azure DevOps Build Pipeline",id:"scan-for-vulnerabilities-in-the-azure-devops-build-pipeline",level:3}];function u(e){const n={a:"a",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"scan-for-vulnerabilities-in-the-azure-devops-build-pipeline",children:"Scan for Vulnerabilities in the Azure DevOps Build Pipeline"}),"\n",(0,t.jsx)(n.p,{children:"The NeuVector scanner can be triggered from the Azure DevOps pipeline by using the NeuVector extension published in the Azure DevOps Marketplace."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AzureDevOps",src:i(77547).Z+"",width:"1544",height:"1070"})}),"\n",(0,t.jsx)(n.p,{children:"The extension supports both remote and local scanning where the NeuVector controller can remotely scan an image in a registry during the build, or dynamically start a local controller to scan the image on the Azure agent vm."}),"\n",(0,t.jsx)(n.p,{children:"In addition, make sure there is a NeuVector scanner container deployed and configured to connect to the Allinone or Controller. In 4.0 and later, the neuvector/scanner container must be deployed separate from the allinone or controller."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scan image with NeuVector task integrates the NeuVector vulnerability scanner into an Azure DevOps Pipeline."}),"\n",(0,t.jsx)(n.li,{children:"Perform vulnerability scans of a container image after the image build on an external NeuVector controller instance or on a local NeuVector controller instance which is running in service container inside a pipeline."}),"\n",(0,t.jsx)(n.li,{children:"Define thresholds for failing builds based on the number of detected vulnerabilities of different severities."}),"\n",(0,t.jsx)(n.li,{children:"Provide a detailed report of an image scan for analysis in the build summary tab."}),"\n",(0,t.jsx)(n.li,{children:"External NeuVector controller instances are defined as service endpoints to decouple build pipeline definitions from connection parameters and credentials."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["An overview with sample screens can be found at ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=NeuVector.neuvector-vsts",children:"https://marketplace.visualstudio.com/items?itemName=NeuVector.neuvector-vsts"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},77547:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/azure_devops-5660868b35ba4bd737c176f261aa0ac6.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(67294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);