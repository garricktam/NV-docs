"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7658],{52800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=s(85893),a=s(11151);const t={title:"Compliance & CIS Benchmarks",taxonomy:{category:"docs"},slug:"/scanning/scanning/compliance"},c=void 0,r={id:"scanning/scanning/compliance/compliance",title:"Compliance & CIS Benchmarks",description:"Managing Compliance and CIS Benchmarks",source:"@site/docs/06.scanning/01.scanning/02.compliance/02.compliance.md",sourceDirName:"06.scanning/01.scanning/02.compliance",slug:"/scanning/scanning/compliance",permalink:"/next/scanning/scanning/compliance",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/01.scanning/02.compliance/02.compliance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Compliance & CIS Benchmarks",taxonomy:{category:"docs"},slug:"/scanning/scanning/compliance"},sidebar:"tutorialSidebar",previous:{title:"Vulnerability Management",permalink:"/next/scanning/scanning/vulnerabilities"},next:{title:"Registry Scanning Configuration",permalink:"/next/scanning/registry"}},o={},l=[{value:"Managing Compliance and CIS Benchmarks",id:"managing-compliance-and-cis-benchmarks",level:3},{value:"Security Risks - Compliance and Compliance Profile",id:"security-risks---compliance-and-compliance-profile",level:4},{value:"Customizing Compliance Templates for PCI, GDPR, HIPAA, NIST and others",id:"customizing-compliance-templates-for-pci-gdpr-hipaa-nist-and-others",level:5},{value:"Secrets Auditing",id:"secrets-auditing",level:4}];function d(e){const n={a:"a",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"managing-compliance-and-cis-benchmarks",children:"Managing Compliance and CIS Benchmarks"}),"\n",(0,i.jsx)(n.p,{children:"Compliance auditing with NeuVector includes CIS Benchmarks, custom checks, secrets auditing, and industry standard templates for PCI, GDPR and other regulations."}),"\n",(0,i.jsx)(n.p,{children:"CIS Benchmarks automatically run by NeuVector include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kubernetes"}),"\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n",(0,i.jsx)(n.li,{children:"Red Hat OpenShift draft 'Inspired by CIS' benchmarks"}),"\n",(0,i.jsx)(n.li,{children:"Google GKE"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Compliance scan results can be seen for individual Assets in the Registries (for Images), Nodes, and Containers menus by selecting the relevant asset and clicking the Compliance tab."}),"\n",(0,i.jsx)(n.p,{children:"The Security Risks -> Compliance menu enables consolidated compliance reporting, similar to how the Vulnerabilities menu works."}),"\n",(0,i.jsx)(n.h4,{id:"security-risks---compliance-and-compliance-profile",children:"Security Risks - Compliance and Compliance Profile"}),"\n",(0,i.jsx)(n.p,{children:"Compliance results are show in the list by Category and Name. Categories include Docker, Kubernetes, OpenShift, and Custom. The names of each item correspond to the CIS benchmark. For example, K.4.2.3 corresponds to the Kubernetes CIS benchmark 4.2.3. Docker benchmarks are preceded with 'D' with the exception of Image related benchmarks, which are preceded by 'I'."}),"\n",(0,i.jsx)(n.p,{children:"Use the Advanced filter to select compliance checks based on platform, host, namespace or industry standard, as shown below."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"compliance",src:s(31056).Z+"",width:"2788",height:"1402"})}),"\n",(0,i.jsx)(n.p,{children:"After applying the filter, only the relevant CIS benchmarks and custom checks will be shown, and a report can be generated and downloaded. This is how reports for standards such as PCI, HIPAA, GDPR and other standards can be generated."}),"\n",(0,i.jsx)(n.p,{children:"The following screenshot shows an example of a secret found in an image scan."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"secrets",src:s(37132).Z+"",width:"1361",height:"701"})}),"\n",(0,i.jsx)(n.h5,{id:"customizing-compliance-templates-for-pci-gdpr-hipaa-nist-and-others",children:"Customizing Compliance Templates for PCI, GDPR, HIPAA, NIST and others"}),"\n",(0,i.jsxs)(n.p,{children:["The Compliance profile menu enables customization of the built-in templates for industry standards such as PCI and GDPR. These reports can be generated from the Security Risks -> Compliance menu by selecting one of the standards to filter, then exporting. The NIST profile is for ",(0,i.jsx)(n.a,{href:"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-190.pdf",children:"NIST SP 800-190"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To customize any compliance profile, select the industry standard (e.g. PCI), then enable or disable specific checks for that standard. Think of these as compliance 'tags' that are applied to each check in order to generate a compliance report for that industry standard."}),"\n",(0,i.jsx)(n.p,{children:"Use the Action button to add or remove any compliance tag from that check."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"profile",src:s(26388).Z+"",width:"2804",height:"1160"})}),"\n",(0,i.jsx)(n.p,{children:"In addition, you can select which 'Assets' are considered to be part of the compliance reports by clicking on the Assets tab. By default, all compliance templates are applied to Images, Nodes and Containers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"compliance_assets",src:s(95973).Z+"",width:"2290",height:"904"})}),"\n",(0,i.jsx)(n.p,{children:"Use the Action button to add or remove compliance templates for assets."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Images. Select the standard(s) to be reported for Images."}),"\n",(0,i.jsx)(n.li,{children:"Nodes. Select the standard(s) to be reported for Nodes (hosts)."}),"\n",(0,i.jsx)(n.li,{children:"Containers. Select the stadard(s) to be reported for Containers."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, instead of restricting by the above criteria, compliance templates can be restricted to certain Namespaces. If this box is checked and namespace(s) added, reports will be generated for all assets which apply to these namespaces. This can be useful if, for example, the PCI template should only report on assets for namespaces which container PCI in-scope (applicable) workloads."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"namespace",src:s(19530).Z+"",width:"2361",height:"915"})}),"\n",(0,i.jsx)(n.p,{children:"After the templates and assets are customized (if desired) in the Security Risks -> Compliance Profiles menu, reports can be generated in the Security Risks -> Compliance menu by opening the advanced filter and selecting the compliance template desired. For example, selecting GDPR will filter the display and reports for only the GDPR profile."}),"\n",(0,i.jsx)(n.h4,{id:"secrets-auditing",children:"Secrets Auditing"}),"\n",(0,i.jsxs)(n.p,{children:["NeuVector checks for over 40 common types of secrets as part of the image compliance scans and run-time scans. In addition, ",(0,i.jsx)(n.a,{href:"/policy/customcompliance",children:"custom compliance scripts"})," can be configured for containers or hosts, and the ",(0,i.jsx)(n.a,{href:"/policy/dlp",children:"DLP packet inspection"})," feature can be used to check for secrets in network payloads."]}),"\n",(0,i.jsx)(n.p,{children:"The results for secrets auditing can be found in the Compliance section of image scans (Assets -> Registries), containers (Assets -> Containers), nodes (Assets -> Nodes), and the compliance management menu (Security Risks -> Compliance)."}),"\n",(0,i.jsx)(n.p,{children:"The following is an example of how secrets detected in an image scan will be displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"secrets",src:s(44542).Z+"",width:"1385",height:"324"})}),"\n",(0,i.jsx)(n.p,{children:"Here is a list of the types of secrets being detected."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"General Private Keys"}),"\n",(0,i.jsx)(n.li,{children:"General detection of credentials including 'apikey', 'api_key', 'password', 'secret', 'passwd' etc."}),"\n",(0,i.jsx)(n.li,{children:"General passwords in yaml files including 'password', 'passwd', 'api_token' etc."}),"\n",(0,i.jsx)(n.li,{children:"General secrets keys in key/value pairs"}),"\n",(0,i.jsx)(n.li,{children:"Putty Private key"}),"\n",(0,i.jsx)(n.li,{children:"XML Private key"}),"\n",(0,i.jsxs)(n.li,{children:["AWS ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html",children:"credentials / IAM"})]}),"\n",(0,i.jsx)(n.li,{children:"Facebook client secret"}),"\n",(0,i.jsx)(n.li,{children:"Facebook endpoint secret"}),"\n",(0,i.jsx)(n.li,{children:"Facebook app secret"}),"\n",(0,i.jsx)(n.li,{children:"Twitter client Id"}),"\n",(0,i.jsx)(n.li,{children:"Twitter secret key"}),"\n",(0,i.jsx)(n.li,{children:"Github secret"}),"\n",(0,i.jsx)(n.li,{children:"Square product Id"}),"\n",(0,i.jsx)(n.li,{children:"Stripe access key"}),"\n",(0,i.jsx)(n.li,{children:"Slack API token"}),"\n",(0,i.jsx)(n.li,{children:"Slack web hooks"}),"\n",(0,i.jsx)(n.li,{children:"LinkedIn client Id"}),"\n",(0,i.jsx)(n.li,{children:"LinkedIn secret key"}),"\n",(0,i.jsx)(n.li,{children:"Google API key"}),"\n",(0,i.jsx)(n.li,{children:"SendGrid API key"}),"\n",(0,i.jsx)(n.li,{children:"Twilio API key"}),"\n",(0,i.jsx)(n.li,{children:"Heroku API key"}),"\n",(0,i.jsx)(n.li,{children:"MailChimp API key"}),"\n",(0,i.jsx)(n.li,{children:"MailGun API key"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19530:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/DocheckASSETSEnableNS-7ec9b8517c83069f7e0e120f2f8c7601.png"},31056:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/compliance_4-af226f14e89aac5764a2c6afe9a65eba.png"},26388:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/compliance_profile_4-2a061473e71d7a5995feb4a63ee459d5.png"},95973:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/profile_assets_4-2998b357accee4d2e987f99fcf880765.png"},37132:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/secret_compliance_4-aba3407b261c253054f8d59d1a855d24.png"},44542:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/secrets_image_4-8d86b9709ef3d6f0bfa8efeef26ba65d.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var i=s(67294);const a={},t=i.createContext(a);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);