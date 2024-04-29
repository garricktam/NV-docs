"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3958],{10766:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=o(85893),r=o(11151);const l={title:"Amazon ECS",taxonomy:{category:"docs"},slug:"/deploying/ecs"},s=void 0,i={id:"deploying/ecs/ecs",title:"Amazon ECS",description:"Important: Deployment on Amazon ECS is No Longer Supported",source:"@site/versioned_docs/version-5.2/02.deploying/09.ecs/09.ecs.md",sourceDirName:"02.deploying/09.ecs",slug:"/deploying/ecs",permalink:"/5.2/deploying/ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/02.deploying/09.ecs/09.ecs.md",tags:[],version:"5.2",sidebarPosition:9,frontMatter:{title:"Amazon ECS",taxonomy:{category:"docs"},slug:"/deploying/ecs"},sidebar:"tutorialSidebar",previous:{title:"Air Gapping NeuVector",permalink:"/5.2/deploying/airgap"},next:{title:"Removing or Resetting NeuVector",permalink:"/5.2/deploying/remove"}},a={},c=[{value:"Important: Deployment on Amazon ECS is No Longer Supported",id:"important-deployment-on-amazon-ecs-is-no-longer-supported",level:3},{value:"Deploy on AWS Using ECS",id:"deploy-on-aws-using-ecs",level:3},{value:"Sample ECS JSON Task Definitions",id:"sample-ecs-json-task-definitions",level:3},{value:"Live Updating NeuVector",id:"live-updating-neuvector",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"important-deployment-on-amazon-ecs-is-no-longer-supported",children:"Important: Deployment on Amazon ECS is No Longer Supported"}),"\n",(0,t.jsx)(n.p,{children:"The reference section below is not being maintained. However, it may provide some assistance in understanding how to deploy the Allinone on ECS."}),"\n",(0,t.jsx)(n.h3,{id:"deploy-on-aws-using-ecs",children:"Deploy on AWS Using ECS"}),"\n",(0,t.jsx)(n.p,{children:"This is an example of how to deploy NeuVector using ECS."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Please see the Kubernetes examples for EKS."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Prepare several Amazon ECS instances which have the Docker engine and ECS agent containers built-in. Pick one node for the management console. Then define Security Group rules that allow inbound TCP port 8443 (NeuVector\u2019s default management console port) for access by your client browser."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Define a Security Group that allows TCP and UDP ports on 18300, 18301, 18400, 18401 . This is used by NeuVector enforcers to talk to the Controllers/Allinone. Apply this Security Group to all the ECS instances that will be deploying the NeuVector enforcers and controllers/allinone."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set an attribute on the nodes that you want to deploy NeuVector allinone or controller container. For example, if you want to run NeuVector in a controller HA mode, the recommendation is to pick at least 3 nodes then add the attribute to all of the 3 nodes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is how to add attributes to your ECS instances:"}),"\n",(0,t.jsx)(n.p,{children:"Select the instance, then pick \u201cView/Edit Attributes\u201d from the Actions drop down menu."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Attributes",src:o(5805).Z+"",width:"967",height:"469"})}),"\n",(0,t.jsx)(n.p,{children:"Then add a new attribute. For example \u201callinone-node\u201d with value \u201ctrue\u201d."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AddAttributes",src:o(80020).Z+"",width:"975",height:"236"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create the Allinone Task Definition. Create a new Task Definition for the Allinone container. You can use the ECS interface to manually create it or paste in the sample JSON file (see below for samples). Refer to section \u201c1. Deploying NeuVector\u201d of these docs for how to configure the Allinone."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Enter the placement constraint. For example, if you used the attribute labeling above, then enter this in the constraint."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"attribute:allinone-node=~true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AllinoneTask",src:o(92450).Z+"",width:"961",height:"551"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If you examine the updated JSON file now you\u2019ll see the placement constraint added to it."})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Create a new service for the Allinone task. Set the \u201cPlacement Templates\u201d to \u201cOne Task Per Host\u201d so that only one Allinone/Controller can run on any host. You will also see the constraint will be used \u201cmemberOf(attribute",":allinone-node","=~true) which requires the node to have that attribute."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AllinonePlace",src:o(5113).Z+"",width:"975",height:"181"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now you can deploy the Allinone service. Set the \u201cNumber of tasks\u201d to the desired Allinone/Controller number. Now the NeuVector Allinone or Controller containers will start running on the nodes selected. After the Allinone starts running you should be able to connect to the NeuVector console through HTTPS on port 8443."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the Enforcer Task Definition. This is similar to the Allinone task. Configure manually through the ECS console or use the JSON sample below."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For the Enforcer placement constraint you will require that the Enforcer must NOT be on the same node as the allinone."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"attribute:allinone-node!~true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"EnforcerTask",src:o(27635).Z+"",width:"975",height:"321"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Create a new service for the Enforcer task. Again, set the Task Placement to \u201cOne Task Per Host\u201d so only one Enforcer is deployed on each host. Also note the additional constraint should show that it prevents deployment on an allinone node."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"EnforcerPlacement",src:o(83083).Z+"",width:"975",height:"246"})}),"\n",(0,t.jsx)(n.p,{children:"Deploy this service with desired number of enforcer nodes in \u201cNumber of tasks\u201d. Very shortly all the enforcers will be up and running. From the NeuVector console you will be able to see all nodes being detected with enforcers."}),"\n",(0,t.jsx)(n.h3,{id:"sample-ecs-json-task-definitions",children:"Sample ECS JSON Task Definitions"}),"\n",(0,t.jsx)(n.p,{children:"You can use the following samples as starting points for configuring the task definitions for the NeuVector containers."}),"\n",(0,t.jsx)(n.p,{children:"Create a new task definition, then click Configure Via JSON at bottom. Before pasting in the json below, replace the IP address and image path (find REPLACE in samples). Typically, the IP address would be the Private IP address of the AWS Instance where the allinone will run. You can also specific a different family name than my-allinone/my-enforcer (at the bottom of json)."}),"\n",(0,t.jsx)(n.p,{children:"Sample Allinone json file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "networkMode": "bridge",\n    "taskRoleArn": null,\n    "pidMode": "host",\n    "containerDefinitions": [\n        {\n            "volumesFrom": [],\n            "memory": null,\n            "extraHosts": null,\n            "dnsServers": null,\n            "disableNetworking": null,\n            "dnsSearchDomains": null,\n            "portMappings": [\n                {\n                    "hostPort": 18300,\n                    "containerPort": 18300,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 18301,\n                    "containerPort": 18301,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 18400,\n                    "containerPort": 18400,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 18401,\n                    "containerPort": 18401,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 18301,\n                    "containerPort": 18301,\n                    "protocol": "udp"\n                },\n                {\n                    "hostPort": 8443,\n                    "containerPort": 8443,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 1443,\n                    "containerPort": 10443,\n                    "protocol": "tcp"\n                }\n            ],\n            "hostname": null,\n            "essential": true,\n            "entryPoint": null,\n            "mountPoints": [\n                {\n                    "containerPath": "/lib/modules",\n                    "sourceVolume": "modules",\n                    "readOnly": null\n                },\n                {\n                    "containerPath": "/var/run/docker.sock",\n                    "sourceVolume": "dockersock",\n                    "readOnly": null\n                },\n                {\n                    "containerPath": "/host/proc",\n                    "sourceVolume": "proc",\n                    "readOnly": true\n                },\n                {\n                    "containerPath": "/host/cgroup",\n                    "sourceVolume": "cgroup",\n                    "readOnly": true\n                }\n            ],\n            "name": "allinone",\n            "ulimits": null,\n            "dockerSecurityOptions": null,\n            "environment": [\n                {\n                    "name": "CLUSTER_JOIN_ADDR",\n                    "value": "REPLACE: Private IP"\n                }\n            ],\n            "links": null,\n            "workingDirectory": null,\n            "readonlyRootFilesystem": false,\n            "image": "REPLACE: Image Path/Name",\n            "command": null,\n            "user": null,\n            "dockerLabels": {\n                "com.myself.name": "neuvector"\n            },\n            "logConfiguration": null,\n            "cpu": 0,\n            "privileged": true,\n            "memoryReservation": 768\n        }\n    ],\n    "volumes": [\n        {\n            "host": {\n                "sourcePath": "/lib/modules"\n            },\n            "name": "modules"\n        },\n        {\n            "host": {\n                "sourcePath": "/var/run/docker.sock"\n            },\n            "name": "dockersock"\n        },\n        {\n            "host": {\n                "sourcePath": "/proc"\n            },\n            "name": "proc"\n        },\n        {\n            "host": {\n                "sourcePath": "/sys/fs/cgroup"\n            },\n            "name": "cgroup"\n        }\n    ],\n    "family": "my-allinone",\n    "placementConstraints": []\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Enforcer json file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "networkMode": "bridge",\n    "taskRoleArn": null,\n    "pidMode": "host",\n    "containerDefinitions": [\n        {\n            "volumesFrom": [],\n            "memory": null,\n            "extraHosts": null,\n            "dnsServers": null,\n            "disableNetworking": null,\n            "dnsSearchDomains": null,\n            "portMappings": [\n                {\n                    "hostPort": 18301,\n                    "containerPort": 18301,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 18401,\n                    "containerPort": 18401,\n                    "protocol": "tcp"\n                },\n                {\n                    "hostPort": 18301,\n                    "containerPort": 18301,\n                    "protocol": "udp"\n                }\n            ],\n            "hostname": null,\n            "essential": true,\n            "entryPoint": null,\n            "mountPoints": [\n                {\n                    "containerPath": "/lib/modules",\n                    "sourceVolume": "modules",\n                    "readOnly": null\n                },\n                {\n                    "containerPath": "/var/run/docker.sock",\n                    "sourceVolume": "dockersock",\n                    "readOnly": null\n                },\n                {\n                    "containerPath": "/host/proc",\n                    "sourceVolume": "proc",\n                    "readOnly": true\n                },\n                {\n                    "containerPath": "/host/cgroup",\n                    "sourceVolume": "cgroup",\n                    "readOnly": true\n                }\n            ],\n            "name": "enforcer",\n            "ulimits": null,\n            "dockerSecurityOptions": null,\n            "environment": [\n                {\n                    "name": "CLUSTER_JOIN_ADDR",\n                    "value": "REPLACE: Private IP"\n                }\n            ],\n            "links": null,\n            "workingDirectory": null,\n            "readonlyRootFilesystem": false,\n            "image": "REPLACE: Image Path/Name",\n            "command": null,\n            "user": null,\n            "dockerLabels": {\n                "com.myself.name": "neuvector"\n            },\n            "logConfiguration": null,\n            "cpu": 0,\n            "privileged": true,\n            "memoryReservation": 512\n        }\n    ],\n    "volumes": [\n        {\n            "host": {\n                "sourcePath": "/lib/modules"\n            },\n            "name": "modules"\n        },\n        {\n            "host": {\n                "sourcePath": "/var/run/docker.sock"\n            },\n            "name": "dockersock"\n        },\n        {\n            "host": {\n                "sourcePath": "/proc"\n            },\n            "name": "proc"\n        },\n        {\n            "host": {\n                "sourcePath": "/sys/fs/cgroup"\n            },\n            "name": "cgroup"\n        }\n    ],\n    "family": "my-enforcer",\n    "placementConstraints": []\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"live-updating-neuvector",children:"Live Updating NeuVector"}),"\n",(0,t.jsx)(n.p,{children:"You can do a live update of the NeuVector containers in ECS without interrupting services. NeuVector\u2019s services can be easily updated or upgraded without interrupting any running services. To do that in Amazon ECS:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you have multiple controllers or Allinones deployed as a cluster, ignore this step. If there is only a single Allinone/controller in the system, find a new ECS instance and deploy a 2nd Allinone/controller container on it (follow the NeuVector allinone/controller ECS deployment steps). After deployed, in the NeuVector management console, you will see this new controller up and running (under Resources > Controllers). This is required so that all stateful data is replicated between controllers."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In ECS Services, reset and delete the old Allinone/controller service. Pull the updated NeuVector images manually or trigger AWS ECS to pull new versions of Allinone/controller containers from Dockerhub or your private registry."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new revision of the Allinone/Controller task, update the \u201cCLUSTER_JOIN_ADDR\u201d to the 2nd Allinone/controller\u2019s private node IP address."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new service to deploy this new task (follow the same steps to deploy on ECS). After completed, the new version of the Allinone/controller should be up and running. From the NeuVector management console, all the logs and policies should still be there. Optionally, you can bring down the 2nd Allinone/Controller container now since there should be a Allinone/Controller now started on the original node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"From ECS Services, shutdown and update the Enforcers. Manually or auto-trigger the pulling of new Enforcer images. Then restart or update the Enforcer on all nodes. From the NeuVector console, you will see all Enforcers are up to date."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you are using the separate Manager container instead of the Allinone (which already has the manager in it), simply shutdown and remove the old manager container. Then pull the new manager version, and deploy it, pointing the CLUSTER_JOIN_ADDR to the IP of the controller."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All NeuVector containers are now updated live. All policies, logs, and configurations are unaffected. The live graph view will be regenerated automatically as soon as there is new live traffic flowing between containers."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5805:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/1viewattributes-b5598a7529adcc84eceadc4f85e44841.png"},80020:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/2addattribute-1e1c2fdf070cad1468496da1a89da615.png"},92450:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/3taskdef-96cc0282b1e05656aa141d571e56f7f5.png"},5113:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/3taskplacement-12069402fc5d564715a830cc69c7cbf3.png"},27635:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/4enforcertask-8eeaf3ba102dac254e419859f7687548.png"},83083:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/5taskplacement-712dc25c19faa8aeb44c686a67356a2e.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var t=o(67294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);