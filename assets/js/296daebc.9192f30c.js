"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2255],{94743:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(85893),o=i(11151);const s={title:"Jenkins Details",taxonomy:{category:"docs"},slug:"/scanning/build/jenkins"},a=void 0,r={id:"scanning/build/jenkins/jenkins",title:"Jenkins Details",description:"Detailed Configuration for the Jenkins Plugin",source:"@site/docs/06.scanning/03.build/01.jenkins/01.jenkins.md",sourceDirName:"06.scanning/03.build/01.jenkins",slug:"/scanning/build/jenkins",permalink:"/next/scanning/build/jenkins",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/03.build/01.jenkins/01.jenkins.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Jenkins Details",taxonomy:{category:"docs"},slug:"/scanning/build/jenkins"},sidebar:"tutorialSidebar",previous:{title:"Build Phase Image Scanning",permalink:"/next/scanning/build"},next:{title:"Bamboo",permalink:"/next/scanning/build/bamboo"}},l={},c=[{value:"Detailed Configuration for the Jenkins Plugin",id:"detailed-configuration-for-the-jenkins-plugin",level:3},{value:"Jenkins Plugin Installation",id:"jenkins-plugin-installation",level:4},{value:"Global Configuration in Jenkins",id:"global-configuration-in-jenkins",level:4},{value:"Standalone Scanner",id:"standalone-scanner",level:5},{value:"Local Configuration for scanning a remote Docker Host",id:"local-configuration-for-scanning-a-remote-docker-host",level:4},{value:"Project Configuration",id:"project-configuration",level:4},{value:"Jenkins Pipeline",id:"jenkins-pipeline",level:4},{value:"Additional Stages",id:"additional-stages",level:4},{value:"OpenShift Route and Registry Token Example",id:"openshift-route-and-registry-token-example",level:3},{value:"Special Use Case for Jenkins in the Same Kubernetes Cluster",id:"special-use-case-for-jenkins-in-the-same-kubernetes-cluster",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"detailed-configuration-for-the-jenkins-plugin",children:"Detailed Configuration for the Jenkins Plugin"}),"\n",(0,t.jsx)(n.p,{children:"Containers provide an easy and efficient way to deploy applications. But container images may contain open source code over which you don't have a full control. Many vulnerabilities in open source projects have been reported, and you may decide to use these libraries with vulnerabilities or not after scanning the images and reviewing the vulnerability information for them."}),"\n",(0,t.jsxs)(n.p,{children:["The NeuVector Vulnerability Scanner Jenkins plugin can scan the images after your image is built in Jenkins. The plug-in source and latest documentation can be found ",(0,t.jsx)(n.a,{href:"https://github.com/jenkinsci/neuvector-vulnerability-scanner-plugin",children:"here"})," on the NeuVector GitHub page."]}),"\n",(0,t.jsx)(n.p,{children:'The plug-in supports two scan modes. The first is "Controller & Scanner" mode. The second is the standalone scanner mode. You can select the scan mode in the project configuration page. By default, it uses the "Controller & Scanner" mode.'}),"\n",(0,t.jsx)(n.p,{children:'For the "Controller & Scanner" mode, you need to deploy the NeuVector controller and scanner in the network. To scan the local image (the image on the Jenkins machine), the "Controller & Scanner" needs to be installed on the same node where the image exists.'}),"\n",(0,t.jsx)(n.p,{children:"For the standalone scanner mode, the Docker run-time must be installed on the same host with Jenkins. Also, add the jenkins user to the docker group."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker jenkins\n"})}),"\n",(0,t.jsx)(n.h4,{id:"jenkins-plugin-installation",children:"Jenkins Plugin Installation"}),"\n",(0,t.jsx)(n.p,{children:"First, go to Jenkins in your browser to search for the NeuVector plug-in. This can be found in:"}),"\n",(0,t.jsxs)(n.p,{children:["-> Manage Jenkins -> Manage Plugins -> Available -> filter -> search ",(0,t.jsx)(n.code,{children:"NeuVector Vulnerability Scanner"})," ->"]}),"\n",(0,t.jsx)(n.p,{children:"Select it and click `install without restart.'"}),"\n",(0,t.jsx)(n.p,{children:"Deploy the NeuVector Controller and Scanner container if you haven't already done so on a host reachable by the Jenkins server. This can be on the same server as Jenkins if desired. Make a note of the IP address of the host where the Controller is running. Note: The default REST API port is 10443. This port must be exposed through the Allinone or Controller through a service in Kubernetes or a port map (e.g. - 10443:10443) in the Docker run or compose file."}),"\n",(0,t.jsx)(n.p,{children:"In addition, make sure there is a NeuVector scanner container deployed standalone and configured to connect to the Controller (if Controller is being used)."}),"\n",(0,t.jsx)(n.p,{children:"There are two scenarios for image scanning, local and registry scanning."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("strong",{children:"Local Image Scan"}),".\xa0If you use the plugin to scan local images (before pushing to any registries), you can scan on the same host as the controller/scanner or configure the scanner to access the docker engine on a remote host."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("strong",{children:"Registry Image Scan"}),". If you use the plugin to scan registry images (after pushing to any registries, but as part of the Jenkins build process), the NeuVector Scanner can be installed on any node in the network with connectivity between the registry, NeuVector Scanner, and Jenkins."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"global-configuration-in-jenkins",children:"Global Configuration in Jenkins"}),"\n",(0,t.jsx)(n.p,{children:"After installing the plugin, find the \u2018NeuVector Vulnerability Scanner\u2019 section in the global configuration page (Jenkins \u2018Configure System\u2019). Enter values for the NeuVector Controller IP, port, username, and password. You may click the \u2018Test Connection\u2019 button to validate the values. It will show \u2018Connection Success\u2019 or an error message."}),"\n",(0,t.jsx)(n.p,{children:"The timeout minutes value will terminate the build step within the time entered. The default value of 0 means no timeout will occur."}),"\n",(0,t.jsx)(n.p,{children:"Click the \u2018Add Registry\u2019 to enter values for the registry you will use in your project. If you will be only scanning local images, you don\u2019t need to add a registry here."}),"\n",(0,t.jsx)(n.p,{children:"Scenario 1: global configuration example for local image scan"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"global-image",src:i(98309).Z+"",width:"1008",height:"375"})}),"\n",(0,t.jsx)(n.p,{children:"Scenario 2: global configuration example for registry image scan"}),"\n",(0,t.jsx)(n.p,{children:"For global registry configuration, follow the instructions above for local, then add the registry details as below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"global-registry",src:i(89384).Z+"",width:"1120",height:"200"})}),"\n",(0,t.jsx)(n.h5,{id:"standalone-scanner",children:"Standalone Scanner"}),"\n",(0,t.jsx)(n.p,{children:"Running Jenkins scan in standalone mode is a lightweight way to scan image vulnerabilities in the pipeline. Scanner is dynamically invoked and no installaton of controller setup is required. This is especially useful when scaning an image before it is pushed to a registry. It also has no limit on how many scan tasks can run at the same time."}),"\n",(0,t.jsx)(n.p,{children:"In order to run vulnerability scan in standalone mode, the Jenkins plugin need pull the scanner image to the host where the agent is running, so you need enter NeuVector Scanner registry URL, image repository, and the credential if needed, in NeuVector plugin configuration page."}),"\n",(0,t.jsx)(n.p,{children:"The scan result can also be submitted to the controler and used in the admission control function. In this case, you do need a controller setup and specify how to connect to the controller in NeuVector plugin configuration page."}),"\n",(0,t.jsx)(n.h4,{id:"local-configuration-for-scanning-a-remote-docker-host",children:"Local Configuration for scanning a remote Docker Host"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"Prerequisites for Local Scan on a Remote Docker Host"}),"\nTo enable NeuVector to scan an image that is not on the same host as the controller/allinone:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure the docker run-time api socket is exposed via TCP"}),"\n",(0,t.jsx)(n.li,{children:"Add the following environment variable to the controller/allinone: SCANNER_DOCKER_URL=tcp://192.168.1.10:2376"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"project-configuration",children:"Project Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In your project, choose the 'NeuVector Vulnerability Scanner' plugin from the drop down menu in the 'Add build step.' Check the box \"Scan with Standalone scanner\" if you want to do the scan in the standalone scanner mode. By default, it uses \"Controller & Scanner\" mode to do the scan."}),"\n",(0,t.jsx)(n.p,{children:"Choose Local or a registry name which is the nickname you entered in global config. Enter the repository and image tag name to be scanned. You may choose Jenkins default environment variables for the repository or tag, e.g. $JOB_NAME, $BUILD_TAG, $BUILD_NUMBER. Enter the values for the number of high or medium, and for any name of the vulnerabilities present to fail the build."}),"\n",(0,t.jsx)(n.p,{children:"After the build is finished, a NeuVector report will be generated. It will show the scan details and errors if any."}),"\n",(0,t.jsx)(n.p,{children:"Scenario 1: local configuration example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"local-image",src:i(59593).Z+"",width:"1127",height:"355"})}),"\n",(0,t.jsx)(n.p,{children:"Scenario 2: registry configuration example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"local-registry",src:i(44092).Z+"",width:"1118",height:"357"})}),"\n",(0,t.jsx)(n.h4,{id:"jenkins-pipeline",children:"Jenkins Pipeline"}),"\n",(0,t.jsx)(n.p,{children:"For the Jenkins pipeline project, you may write your own pipeline script directly, or click the \u2018pipeline syntax\u2019 to generate the script if you are new to the pipeline style task."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pipeline",src:i(74060).Z+"",width:"252",height:"363"})}),"\n",(0,t.jsx)(n.p,{children:"Select the NeuVector Vulnerability Scanner from the drop-down, configure it, and Generate the script."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"script",src:i(70767).Z+"",width:"1502",height:"822"})}),"\n",(0,t.jsx)(n.p,{children:"Copy the script into your Jenkins task script."}),"\n",(0,t.jsx)(n.p,{children:"Scenario 1: Simple local pipeline script example (to insert into your pipeline script):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"...\n  stage('Scan local image') \\{\n    neuvector registrySelection: 'Local', repository: 'your_username/your_image'\n  \\}\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"Scenario 2: Simple registry pipeline script example (to insert into your pipeline script):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"...\n  stage('Scan local image') \\{\n    neuvector registrySelection: 'your_registry', repository: 'your_username/your_image'\n  \\}\n...\n"})}),"\n",(0,t.jsx)(n.h4,{id:"additional-stages",children:"Additional Stages"}),"\n",(0,t.jsx)(n.p,{children:"Add your own pre- and post- image scan stages, for example in the Pipeline stage view example below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"stages",src:i(76371).Z+"",width:"687",height:"529"})}),"\n",(0,t.jsx)(n.p,{children:"You are now ready to start your Jenkins builds and trigger the NeuVector Vulnerability Scanner to report any vulnerabilities!"}),"\n",(0,t.jsx)(n.h3,{id:"openshift-route-and-registry-token-example",children:"OpenShift Route and Registry Token Example"}),"\n",(0,t.jsx)(n.p,{children:"To configure the plug-in using an OpenShift route for ingress to the controller, add the route into the controller IP field."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"openshift",src:i(81116).Z+"",width:"2528",height:"1055"})}),"\n",(0,t.jsx)(n.p,{children:"To use token based authentication to the OpenShift registry, use NONAME as the user and enter the token in the password."}),"\n",(0,t.jsx)(n.h3,{id:"special-use-case-for-jenkins-in-the-same-kubernetes-cluster",children:"Special Use Case for Jenkins in the Same Kubernetes Cluster"}),"\n",(0,t.jsx)(n.p,{children:"To do build-phase scanning where the Jenkins software is running in the same Kubernetes cluster as the scanner, make sure the scanner and Jenkins are set to run on the same node. The node needs to be labeled so the Jenkins and scanner containers run on the same node because the scanner needs access to the local node's docker.sock to access the image."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},98309:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jenkins1a-af495e488a204559cfd556ad5d38b539.png"},74060:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jenkins5a-283ba6ea3b492dae1708e5520e6a3195.png"},70767:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jenkins6a-f1417b2acb4ee2600775500353b68174.png"},76371:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jenkins7a-02484a427049ed5f8a2de26e905cc146.png"},59593:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jenkins_local-47417d7747468e3558831359b6e6e081.png"},44092:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jenkins_registry-736c6d3f0e32b5fb886d2b52593fbcf6.png"},89384:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/registry_console-1bbc32a7ad657be293971aac618ba47f.png"},81116:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/rhos_jenkins_route-d191817d6d107fad1332f072bca9e5bc.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var t=i(67294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);