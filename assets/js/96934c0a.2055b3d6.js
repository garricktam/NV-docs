"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7495],{83502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(85893),s=t(11151);const r={title:"Removing or Resetting NeuVector",taxonomy:{category:"docs"},slug:"/deploying/remove"},i=void 0,a={id:"deploying/remove/remove",title:"Removing or Resetting NeuVector",description:"Removing NeuVector Deployment / Containers",source:"@site/versioned_docs/version-5.2/02.deploying/10.remove/10.remove.md",sourceDirName:"02.deploying/10.remove",slug:"/deploying/remove",permalink:"/5.2/deploying/remove",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/02.deploying/10.remove/10.remove.md",tags:[],version:"5.2",sidebarPosition:10,frontMatter:{title:"Removing or Resetting NeuVector",taxonomy:{category:"docs"},slug:"/deploying/remove"},sidebar:"tutorialSidebar",previous:{title:"Amazon ECS",permalink:"/5.2/deploying/ecs"},next:{title:"Restoring NeuVector Configuration",permalink:"/5.2/deploying/restore"}},l={},d=[{value:"Removing NeuVector Deployment / Containers",id:"removing-neuvector-deployment--containers",level:3},{value:"Resetting NeuVector to an Initial State",id:"resetting-neuvector-to-an-initial-state",level:3},{value:"Resetting the Admin Password",id:"resetting-the-admin-password",level:3}];function c(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"removing-neuvector-deployment--containers",children:"Removing NeuVector Deployment / Containers"}),"\n",(0,o.jsx)(n.p,{children:"To remove the NeuVector deployment on Kubernetes, use the same yaml file for deployment in the delete command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl delete -f neuvector.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will remove the services and container deployments of NeuVector. You may also want to delete the neuvector namespace, persistent volume and cluster roles and clusterrolebindings created in the deployment steps."}),"\n",(0,o.jsx)(n.p,{children:"If you deployed NeuVector using a Helm chart or operator you should delete NeuVector using Helm or the appropriate operator command."}),"\n",(0,o.jsx)(n.h3,{id:"resetting-neuvector-to-an-initial-state",children:"Resetting NeuVector to an Initial State"}),"\n",(0,o.jsx)(n.p,{children:"In addition to deleting as discussed above and redeploying NeuVector, the following steps can be taken in Kubernetes to reset NeuVector, which will remove learned rules, groups, and other configuration but leave the NeuVector deployment intact."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Scale the controller deployment to 0."}),"\n",(0,o.jsx)(n.li,{children:"(Optional) if a Persistent Volume is used, delete the persistent volume backup folder created."}),"\n",(0,o.jsx)(n.li,{children:"Scale the controller deployment to 3."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"resetting-the-admin-password",children:"Resetting the Admin Password"}),"\n",(0,o.jsx)(n.p,{children:"The admin password is the key to administering the NeuVector deployment and view the cluster network activities.  It is important to change the password upon install and keep it safely guarded.  Sometimes, the password is guarded too well and become loss or the administrator leaves the company.  If you have kubectl access to the cluster, you can reset the admin password to the default using the following steps."}),"\n",(0,o.jsx)(n.p,{children:"Exec into one of the controllers."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl exec -it <controller> -n neuvector -- sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"Check that the admin entry exists and save the output json somewhere for safe keeping."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"consul kv get object/config/user/admin\n"})}),"\n",(0,o.jsx)(n.p,{children:"Take the output from the above consul kv get command and replace the password_hash string with below string."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec\n"})}),"\n",(0,o.jsx)(n.p,{children:"Reset the admin account password back to the default. (REPLACE <UPDATED_consul_kv_get_output_with_new_password_hash> BEFORE EXECUTION!!!)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"consul kv put object/config/user/admin '<UPDATED_consul_kv_get_output_with_new_password_hash>'\n"})}),"\n",(0,o.jsx)(n.p,{children:"EXAMPLE BELOW: (DO NOT EXECUTE WITHOUT REPLACING WITH OUTPUT)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'consul kv put object/config/user/admin \'{"fullname":"admin","username":"admin","password_hash":"c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec","pwd_reset_time":"2022-03-24T20:50:15.341074451Z","pwd_hash_history":null,"domain":"","server":"","email":"","role":"admin","role_oride":false,"timeout":300,"locale":"en","role_domains":{},"last_login_at":"2022-03-24T20:49:32.577877044Z","login_count":1,"failed_login_count":0,"block_login_since":"0001-01-01T00:00:00Z"}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Response:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"Success! Data written to: object/config/user/admin\n"})}),"\n",(0,o.jsx)(n.p,{children:"Login with admin/admin and change password."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);