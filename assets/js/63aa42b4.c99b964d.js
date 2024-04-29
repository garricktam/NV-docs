"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8254],{40238:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(85893),a=r(11151);const s={title:"Harbor Pluggable Scanner Module",taxonomy:{category:"docs"},slug:"/scanning/registry/harbor"},o=void 0,i={id:"scanning/registry/harbor/harbor",title:"Harbor Pluggable Scanner Module",description:"Scanning Harbor Registries Using the Pluggable Scanner",source:"@site/versioned_docs/version-5.2/06.scanning/02.registry/01.harbor/01.harbor.md",sourceDirName:"06.scanning/02.registry/01.harbor",slug:"/scanning/registry/harbor",permalink:"/5.2/scanning/registry/harbor",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/06.scanning/02.registry/01.harbor/01.harbor.md",tags:[],version:"5.2",sidebarPosition:1,frontMatter:{title:"Harbor Pluggable Scanner Module",taxonomy:{category:"docs"},slug:"/scanning/registry/harbor"},sidebar:"tutorialSidebar",previous:{title:"Registry Scanning Configuration",permalink:"/5.2/scanning/registry"},next:{title:"ECR Scanning using IAM Roles",permalink:"/5.2/scanning/registry/ecr-iam"}},c={},l=[{value:"Scanning Harbor Registries Using the Pluggable Scanner",id:"scanning-harbor-registries-using-the-pluggable-scanner",level:3},{value:"Deploying the NeuVector Registry Adapter",id:"deploying-the-neuvector-registry-adapter",level:4},{value:"Scanning Images from a Harbor Registry",id:"scanning-images-from-a-harbor-registry",level:4},{value:"Sample Deployment Yaml",id:"sample-deployment-yaml",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"scanning-harbor-registries-using-the-pluggable-scanner",children:"Scanning Harbor Registries Using the Pluggable Scanner"}),"\n",(0,t.jsxs)(n.p,{children:["NeuVector supports invoking the NeuVector scanner from Harbor registries through the ",(0,t.jsx)(n.a,{href:"https://github.com/goharbor/pluggable-scanner-spec",children:"pluggable scanner"})," interface. This requires configuration of the connection to the controller (exposed API). The Harbor adapter calls controller endpoint to trigger a scan, which can scan automatically on push. Interrogation services can be used for periodic scans. Scan results from Federation Primary controllers ARE propagated to remote clusters."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"There is an issue with the HTTPS based adapter endpoint error: please ignore Test Connection error, it does work even though an error is shown (skip certificate validation)."})}),"\n",(0,t.jsx)(n.h4,{id:"deploying-the-neuvector-registry-adapter",children:"Deploying the NeuVector Registry Adapter"}),"\n",(0,t.jsxs)(n.p,{children:["The 5.2 Helm chart contains options to deploy the ",(0,t.jsx)(n.a,{href:"https://github.com/neuvector/neuvector-helm/blob/master/charts/core/templates/registry-adapter.yaml",children:"registry adapter"})," for Harbor. It can also be pulled manually from the neuvector/registry-adapter repo on Docker Hub. Options also include setting the Harbor registry request protocol and the basic authentication secret name."]}),"\n",(0,t.jsx)(n.p,{children:"After deployment of the adapter, it is necessary to configure this in Harbor."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Harbor",src:r(60477).Z+"",width:"446",height:"437"})}),"\n",(0,t.jsx)(n.p,{children:"The adapter endpoint must be entered, and the adapter connects to the controller, which is typically exposed as a service externally so the adapter can connect to it. In addition, authentication credentials for a valid NeuVector user must be entered."}),"\n",(0,t.jsx)(n.h4,{id:"scanning-images-from-a-harbor-registry",children:"Scanning Images from a Harbor Registry"}),"\n",(0,t.jsx)(n.p,{children:"After successful deployment and connection to a controller, an image scan can be manually or automatically triggered from Harbor."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Harbor",src:r(88858).Z+"",width:"1890",height:"916"})}),"\n",(0,t.jsx)(n.p,{children:"Periodic scans (scheduled) can be configured through Interrogation Services in Harbor, to make sure the latest CVE database is used to rescan images in registries."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Harbor",src:r(18327).Z+"",width:"802",height:"488"})}),"\n",(0,t.jsx)(n.p,{children:"Scan results can be viewed directly in Harbor."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"results",src:r(90810).Z+"",width:"1900",height:"698"})}),"\n",(0,t.jsx)(n.h4,{id:"sample-deployment-yaml",children:"Sample Deployment Yaml"}),"\n",(0,t.jsx)(n.p,{children:"Below is an example yaml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: neuvector-scanner-pod\n  namespace: neuvector\nspec:\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  replicas: 1\n  selector:\n    matchLabels:\n      app: neuvector-scanner-pod\n  template:\n    metadata:\n      labels:\n        app: neuvector-scanner-pod\n    spec:\n      imagePullSecrets:\n        - name: regsecret\n      containers:\n        - name: neuvector-scanner-pod\n          image: neuvector/scanner:latest\n          imagePullPolicy: Always\n          env:\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n      restartPolicy: Always\n      hostAliases:\n      - ip: "10.1.5.106"\n        hostnames:\n        - "harbor270.com"\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-service-registry-adapter\n  namespace: neuvector\nspec:\n  ports:\n  - port: 9443 #https\n  #- port: 8090 #http\n    nodePort: 32000\n    name: registry-adapter\n    protocol: TCP\n  type: LoadBalancer\n  selector:\n    app: neuvector-registry-adapter-pod\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: neuvector-registry-adapter-pod\n  namespace: neuvector\nspec:\n  selector:\n    matchLabels:\n      app: neuvector-registry-adapter-pod\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: neuvector-registry-adapter-pod\n    spec:\n      serviceAccount: basic\n      serviceAccountName: basic\n      imagePullSecrets:\n        - name: regsecret\n      containers:\n        - name: neuvector-registry-adapter-pod\n          image: neuvector/registry-adapter:latest\n          imagePullPolicy: Always\n          env:\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n            - name: HARBOR_SERVER_PROTO\n              value: https       #Need to mod. http/https\n            - name: HARBOR_BASIC_AUTH_USERNAME\n              valueFrom:\n                secretKeyRef:\n                  name: neuvector-registry-adapter\n                  key: username\n            - name: HARBOR_BASIC_AUTH_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: neuvector-registry-adapter\n                  key: password\n      restartPolicy: Always\n'})}),"\n",(0,t.jsx)(n.p,{children:"For OpenShift 4.6+, also add the route:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: route.openshift.io/v1\nkind: Route\nmetadata:\n  name: neuvector-route-registry-adapter\n  namespace: neuvector\nspec:\n  to:\n    kind: Service\n    name: neuvector-service-registry-adapter\n  port:\n    targetPort: registry-adapter\n  tls:\n    termination: passthrough\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},88858:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2_Scan_image-4de5a3ef867e3552762f13022604d577.png"},90810:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/3_scanresults-f10219358f7678069e2f712d52c275e4.png"},18327:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/4_interrogation-3044b1258fb86be1c1e203d6b2fabfc8.png"},60477:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/5_2_adapter_configuration-677566095def084bdddc32db687a62e8.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);