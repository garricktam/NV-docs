"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6891],{37710:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=o(85893),i=o(11151);const t={title:"5.x Overview",taxonomy:{category:"docs"},slug:"/basics/overview"},a=void 0,s={id:"basics/overview/overview",title:"5.x Overview",description:"The Full Life-Cycle Container Security Platform",source:"@site/versioned_docs/version-5.2/01.basics/01.overview/01.overview.md",sourceDirName:"01.basics/01.overview",slug:"/basics/overview",permalink:"/5.2/basics/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/01.basics/01.overview/01.overview.md",tags:[],version:"5.2",sidebarPosition:1,frontMatter:{title:"5.x Overview",taxonomy:{category:"docs"},slug:"/basics/overview"},sidebar:"tutorialSidebar",previous:{title:"1. Basics",permalink:"/5.2/"},next:{title:"System Requirements",permalink:"/5.2/basics/requirements"}},l={},c=[{value:"The Full Life-Cycle Container Security Platform",id:"the-full-life-cycle-container-security-platform",level:3},{value:"Security Containers",id:"security-containers",level:3},{value:"Controller",id:"controller",level:5},{value:"Enforcer",id:"enforcer",level:5},{value:"Manager",id:"manager",level:5},{value:"All-in-One",id:"all-in-one",level:5},{value:"Scanner",id:"scanner",level:5},{value:"Updater",id:"updater",level:5},{value:"Architecture",id:"architecture",level:4},{value:"Deployment Examples",id:"deployment-examples",level:3},{value:"All-in-One and Enforcers",id:"all-in-one-and-enforcers",level:5},{value:"Controller, Manager and Enforcer Containers",id:"controller-manager-and-enforcer-containers",level:5},{value:"All-in-One Only",id:"all-in-one-only",level:5},{value:"Controller Only",id:"controller-only",level:5}];function d(e){const n={a:"a",admonition:"admonition",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"the-full-life-cycle-container-security-platform",children:"The Full Life-Cycle Container Security Platform"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["These docs describe the 5.x (Open Source) version. The 5.x images are accessible from Docker Hub with the appropriate tag, e.g. neuvector/controller:(version). For 4.x versions see the ",(0,r.jsx)(n.a,{href:"https://docs.neuvector.com",children:"4.x Docs"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"NeuVector provides a powerful end-to-end container security platform. This includes end-to-end vulnerability scanning and complete run-time protection for containers, pods and hosts, including:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"CI/CD Vulnerability Management & Admission Control. Scan images with a Jenkins plug-in, scan registries, and enforce admission control rules for deployments into production."}),"\n",(0,r.jsx)(n.li,{children:"Violation Protection. Discovers behavior and creates a whitelist based policy to detect violations of normal behavior."}),"\n",(0,r.jsx)(n.li,{children:"Threat Detection. Detects common application attacks such as DDoS and DNS attacks on containers."}),"\n",(0,r.jsx)(n.li,{children:"DLP and WAF Sensors. Inspect network traffic for Data Loss Prevention of sensitive data, and detect common OWASP Top10 WAF attacks."}),"\n",(0,r.jsx)(n.li,{children:"Run-time Vulnerability Scanning. Scans registries, images and running containers orchestration platforms and hosts for common (CVE) as well as application specific vulnerabilities."}),"\n",(0,r.jsx)(n.li,{children:"Compliance & Auditing. Runs Docker Bench tests and Kubernetes CIS Benchmarks automatically."}),"\n",(0,r.jsx)(n.li,{children:"Endpoint/Host Security. Detects privilege escalations, monitors processes and file activity on hosts and within containers, and monitors container file systems for suspicious activity."}),"\n",(0,r.jsx)(n.li,{children:"Multi-cluster Management. Monitor and manage multiple Kubernetes clusters from a single console."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Other features of NeuVector include the ability to quarantine containers and to export logs through SYSLOG and webhooks, initiate packet capture for investigation, and integration with OpenShift RBACs, LDAP, Microsoft AD, and SSO with SAML. Note: Quarantine means that all network traffic is blocked.  The container will remain and continue to run - just without any network connections.  Kubernetes will not start up a container to replace a quarantined container, as the api-server is still able to reach the container."}),"\n",(0,r.jsx)(n.h3,{id:"security-containers",children:"Security Containers"}),"\n",(0,r.jsxs)(n.p,{children:["The NeuVector run-time container security solution contains four types of security containers: ",(0,r.jsx)(n.strong,{children:"Controllers"}),", ",(0,r.jsx)(n.strong,{children:"Enforcers"}),", ",(0,r.jsx)(n.strong,{children:"Managers"}),", and ",(0,r.jsx)(n.strong,{children:"Scanners"}),". A special container called the ",(0,r.jsx)(n.strong,{children:"Allinone"})," is also provided to combine the Controller, Enforcer, and Manager functions all in one container, primarily for docker native deployments."]}),"\n",(0,r.jsxs)(n.p,{children:["NeuVector can be deployed on virtual machines or on bare metal systems with a single os.\n",(0,r.jsx)(n.img,{alt:"Deployment",src:o(16437).Z+"",width:"850",height:"395"})]}),"\n",(0,r.jsx)(n.h5,{id:"controller",children:"Controller"}),"\n",(0,r.jsx)(n.p,{children:"The Controller manages the NeuVector Enforcer container cluster. It also provides REST APIs for the management console. Although typical test deployments have one Controller, multiple Controllers in a high-availability configuration is recommended. 3 controllers is the default in the Kubernetes Production deployment sample yaml."}),"\n",(0,r.jsx)(n.h5,{id:"enforcer",children:"Enforcer"}),"\n",(0,r.jsx)(n.p,{children:"The Enforcer is a lightweight container that enforces the security policies. One enforcer should be deployed on each node (host), e.g. as a Daemon set."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"For Docker native (non Kubernetes) deployments the Enforcer container and the Controller cannot be deployed on the same node (except in the All-in-One case below)."})}),"\n",(0,r.jsx)(n.h5,{id:"manager",children:"Manager"}),"\n",(0,r.jsx)(n.p,{children:"The Manager is a stateless container that provides a web-UI (HTTPS only) console for users to manage the NeuVector security solution. More than one Manager container can be deployed as necessary."}),"\n",(0,r.jsx)(n.h5,{id:"all-in-one",children:"All-in-One"}),"\n",(0,r.jsx)(n.p,{children:"The All-in-One container includes a Controller, an Enforcer and a Manager in one package. It's useful for easy installation in single-node or small-scale deployments."}),"\n",(0,r.jsx)(n.h5,{id:"scanner",children:"Scanner"}),"\n",(0,r.jsx)(n.p,{children:"The Scanner is a container which performs the vulnerability and compliance scanning for images, containers and nodes. It is typically deployed as a replicaset and can be scaled up to as many parallel scanners as desired in order to increase the scanning performance. The Controller assigns scanning jobs to each available scanner in a round-robin fashion until all scans are completed. The scanner also contains the latest CVE database and is updated regularly by NeuVector."}),"\n",(0,r.jsx)(n.h5,{id:"updater",children:"Updater"}),"\n",(0,r.jsx)(n.p,{children:"The Updater is a container which when run, updates the CVE database for NeuVector. NeuVector regularly publishes new scanner images to include the latest CVE for vulnerability scans. The updater re-deploys all scanner pods by taking the deployment to zero and scaling it back up, forcing a pull of an updated scanner image."}),"\n",(0,r.jsx)(n.h4,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsxs)(n.p,{children:["Here is a general architecture overview of NeuVector. Not shown is the separate scanner container, which can also be run as a stand-alone pipeline scanner.\n",(0,r.jsx)(n.img,{alt:"Architecture",src:o(43539).Z+"",width:"3300",height:"2550"})]}),"\n",(0,r.jsx)(n.h3,{id:"deployment-examples",children:"Deployment Examples"}),"\n",(0,r.jsxs)(n.p,{children:["For common deployment patterns and best practices see the ",(0,r.jsx)(n.a,{href:"/deploying/production?target=_blank#best-practices-tips-qa-for-deploying-and-managing-neuvector",children:"Onboarding/Best Practices section"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"all-in-one-and-enforcers",children:"All-in-One and Enforcers"}),"\n",(0,r.jsx)(n.p,{children:"This deployment is ideal for single-node or small-scale environments, for example for evaluation, testing, and small deployments. An All-in-One container is deployed on one node, which can also be a node with running application containers. An Enforcer can be deployed on all other nodes, with one Enforcer required on each node you wish to protect with NeuVector. This is also useful for native Docker deployments where a controller and enforcer cannot run on the same host."}),"\n",(0,r.jsx)(n.h5,{id:"controller-manager-and-enforcer-containers",children:"Controller, Manager and Enforcer Containers"}),"\n",(0,r.jsx)(n.p,{children:"This is a more generic deployment use case which consists one or more Controllers, one Manager and a set of Enforcers. The Controller and Manager can be deployed on the same node or on different nodes than the Enforcer."}),"\n",(0,r.jsx)(n.h5,{id:"all-in-one-only",children:"All-in-One Only"}),"\n",(0,r.jsx)(n.p,{children:"You can deploy just the allinone container for registry scanning, using the Jenkins plug-in, or simple one node testing of NeuVector."}),"\n",(0,r.jsx)(n.h5,{id:"controller-only",children:"Controller Only"}),"\n",(0,r.jsx)(n.p,{children:"It is possible to deploy a single Controller container and/or scanner to manage vulnerability scanning outside a cluster, for example for use with the Jenkins plug-in. Registry scanning can also be performed by the Controller using the REST API exclusively, but typically a Manager container is also desired in order to provide console based configuration and results viewing for registry scanning."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},16437:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/1Overview-06d127dd89635663657feecb3310dfd5.png"},43539:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/architecture-1222ec809413f923d46203c6b0c5f770.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var r=o(67294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);