"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[964],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),y=N.tabGroupChoices,C=N.setTabGroupChoices,I=(0,r.useState)(w),T=I[0],E=I[1],P=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=y[h];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&E(O)}var x=function(e){var t=e.currentTarget,n=P.indexOf(t),a=g[n].value;a!==T&&(_(t),E(a),null!=h&&C(h,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;n=null!=(l=P[o])?l:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},k)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:A,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],u={title:"Network Options",weight:25},c=void 0,d={unversionedId:"installation/network-options",id:"installation/network-options",title:"Network Options",description:"This page describes the following networking options:",source:"@site/docs/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/installation/network-options",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1667586786,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{title:"Network Options",weight:25},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/installation/configuration"},next:{title:"High Availability with an External DB",permalink:"/installation/ha"}},p={},m=[{value:"Flannel Options",id:"flannel-options",level:2},{value:"Custom CNI",id:"custom-cni",level:2},{value:"Dual-stack installation",id:"dual-stack-installation",level:2},{value:"IPv6 only installation",id:"ipv6-only-installation",level:2},{value:"Distributed hybrid or multicloud cluster",id:"distributed-hybrid-or-multicloud-cluster",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page describes the following networking options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flannel-options"},"Flannel options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-cni"},"Custom CNI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dual-stack-installation"},"Dual-stack installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ipv6-only-installation"},"IPv6-only-installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#distributed-hybrid-or-multicloud-cluster"},"Distributed hybrid or multicloud cluster"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Please reference the ",(0,l.kt)("a",{parentName:"p",href:"/networking/"},"Networking")," page for information about CoreDNS, Traefik, and the Service LB.")),(0,l.kt)("h2",{id:"flannel-options"},"Flannel Options"),(0,l.kt)("p",null,"The default backend for flannel is VXLAN. To enable encryption, pass the IPSec (Internet Protocol Security) or WireGuard options below."),(0,l.kt)("p",null,"If you wish to use WireGuard as your flannel backend it may require additional kernel modules. Please see the ",(0,l.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"WireGuard Install Guide")," for details. The WireGuard install steps will ensure the appropriate kernel modules are installed for your operating system. You need to install WireGuard on every node, both server and agents before attempting to leverage the WireGuard flannel backend option.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"wireguard")," backend will be removed from v1.26 in favor of ",(0,l.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend natively from Flannel."),(0,l.kt)("p",null,"We recommend that users migrate to the new backend as soon as possible. The migration requires a short period of downtime while nodes come up with the new configuration. You should follow these two steps:"),(0,l.kt)("p",null,"1 - Update the K3s config in all control-plane nodes. The config file ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," should include ",(0,l.kt)("inlineCode",{parentName:"p"},"flannel-backend: wireguard-native")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"flannel-backend: wireguard"),"."),(0,l.kt)("p",null,"2 - Reboot all nodes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CLI Flag and Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=vxlan")),(0,l.kt)("td",{parentName:"tr",align:null},"(Default) Uses the VXLAN backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=ipsec")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the IPSEC backend which encrypts network traffic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=host-gw")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the host-gw backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the WireGuard backend which encrypts network traffic. May require additional kernel modules and configuration. (Deprecated and will be removed from version 1.26)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard-native")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the WireGuard backend which encrypts network traffic. May require additional kernel modules and configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-ipv6-masq")),(0,l.kt)("td",{parentName:"tr",align:null},"Apply masquerading rules to IPv6 traffic (default for IPv4). Only applies on dual-stack or IPv6-only clusters")))),(0,l.kt)("h2",{id:"custom-cni"},"Custom CNI"),(0,l.kt)("p",null,"Run K3s with ",(0,l.kt)("inlineCode",{parentName:"p"},"--flannel-backend=none")," and install your CNI of choice. Most CNI plugins come with their own network policy engine, so it is recommended to set ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," as well to avoid conflicts. IP Forwarding should be enabled for Canal and Calico. Please reference the steps below."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Canal",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Visit the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/"},"Project Calico Docs")," website. Follow the steps to install Canal. Modify the Canal YAML so that IP forwarding is allowed in the container_settings section, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n              "allow_ip_forwarding": true\n          }\n')),(0,l.kt)("p",null,"Apply the Canal YAML."),(0,l.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-canal.conflist\n")),(0,l.kt)("p",null,"You should see that IP forwarding is set to true.")),(0,l.kt)(i.Z,{value:"Calico",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Follow the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/master/docs/reference/cni-plugin/configuration"},"Calico CNI Plugins Guide"),". Modify the Calico YAML so that IP forwarding is allowed in the container_settings section, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n              "allow_ip_forwarding": true\n          }\n')),(0,l.kt)("p",null,"Apply the Calico YAML."),(0,l.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-calico.conflist\n")),(0,l.kt)("p",null,"You should see that IP forwarding is set to true."))),(0,l.kt)("h2",{id:"dual-stack-installation"},"Dual-stack installation"),(0,l.kt)("p",null,"Dual-stack networking must be configured when the cluster is first created. It cannot be enabled on an existing single-stack cluster."),(0,l.kt)("p",null,"Dual-stack is supported on k3s v1.21 or above."),(0,l.kt)("p",null,"To enable dual-stack in K3s, you must provide valid dual-stack ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"service-cidr")," on all server nodes. Both servers and agents must provide valid dual-stack ",(0,l.kt)("inlineCode",{parentName:"p"},"node-ip")," settings. Node address auto-detection is not supported on dual-stack clusters, because kubelet fetches only the first IP address that it finds. Additionally, only vxlan backend is supported currently. This is an example of a valid configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server --node-ip 10.0.10.7,2a05:d012:c6f:4611:5c2:5602:eed2:898c --cluster-cidr 10.42.0.0/16,2001:cafe:42:0::/56 --service-cidr 10.43.0.0/16,2001:cafe:42:1::/112\n")),(0,l.kt)("p",null,"Note that you can choose whatever ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"service-cidr")," value, however the ",(0,l.kt)("inlineCode",{parentName:"p"},"node-ip")," values must correspond to the ip addresses of your main interface. Remember to allow ipv6 traffic if you are deploying in a public cloud."),(0,l.kt)("p",null,"If you are using a custom cni plugin, i.e. a cni plugin different from flannel, the previous configuration might not be enough to enable dual-stack in the cni plugin. Please check how to enable dual-stack in its documentation and verify if network policies can be enabled."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," Kubernetes 1.24 and 1.25 include a bug that ignores the node IPv6 addresses if you have a dual-stack environment and you are not using the default network interface card (NIC) for the cluster traffic. To avoid this bug, add the following flag to both K3s servers and agents:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'--kubelet-arg "--node-ip=0.0.0.0" # If you want to prioritize IPv6 traffic, use "--node-ip=::" instead of "--node-ip=0.0.0.0".\n')),(0,l.kt)("h2",{id:"ipv6-only-installation"},"IPv6 only installation"),(0,l.kt)("p",null,"IPv6 only setup is supported on k3s v1.22 or above."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," If your IPv6 default route is set by a router advertisement (RA), you will need to set ",(0,l.kt)("inlineCode",{parentName:"p"},"net.ipv6.conf.all.accept_ra = 2"),"; otherwise, the node will drop the default route once it expires. Be aware that accepting RAs could increase the risk of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/91507"},"man-in-the-middle attacks"),".")),(0,l.kt)("h2",{id:"distributed-hybrid-or-multicloud-cluster"},"Distributed hybrid or multicloud cluster"),(0,l.kt)("p",null,"A k3s cluster can still be deployed on nodes which use different private networks and are not directly connected (e.g. nodes in different public clouds). To achieve this, k3s sets a mesh of tunnels that become a vpn mesh. These nodes must have have an assigned IP through which they can be reached (e.g. a public IP). The server traffic will use a websocket tunnel and the data-plane traffic will use a wireguard tunnel."),(0,l.kt)("p",null,"To enable this type of deployment, you must add the following parameters in the server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip <SERVER_EXTERNAL_IP> --flannel-backend wireguard-native --flannel-external-ip\n")),(0,l.kt)("p",null,"and in the agents/workers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip <AGENT_EXTERNAL_IP>\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," is the IP through which we can reach the server node and ",(0,l.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," is the IP through which we can reach the agent/worker node. Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"K3S_URL")," config parameter in the agent/worker should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," to be able to connect to it. Remember to allow ingress traffic on the external ips on the operated k3s ports (e.g. tcp/6443 for server nodes)"),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," must have connectivity between them and are normally public IPs."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," The latency between nodes will increase as the connectivity requires more hops. This will reduce the network performance and could also impact the health of the cluster if latency is too high")))}h.isMDXComponent=!0}}]);