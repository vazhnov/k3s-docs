"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={title:"Volumes and Storage",weight:30},s=void 0,p={unversionedId:"storage/storage",id:"storage/storage",title:"Volumes and Storage",description:"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails.",source:"@site/docs/storage/storage.md",sourceDirName:"storage",slug:"/storage/",permalink:"/storage/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/storage/storage.md",tags:[],version:"current",lastUpdatedAt:1668123077,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{title:"Volumes and Storage",weight:30},sidebar:"mySidebar",previous:{title:"Backup and Restore",permalink:"/backup-restore/"},next:{title:"Networking",permalink:"/networking/"}},c={},m=[{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails."),(0,r.kt)("p",null,"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage. For details on how PVs and PVCs work, refer to the official Kubernetes documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"storage.")),(0,r.kt)("p",null,"This page describes how to set up persistent storage with a local storage provider, or with ",(0,r.kt)("a",{parentName:"p",href:"#setting-up-longhorn"},"Longhorn.")),(0,r.kt)("h1",{id:"whats-changed-in-k3s-storage"},"What's changed in K3s storage?"),(0,r.kt)("p",null,'K3s removes several optional volume plugins and all built-in (sometimes referred to as "in-tree") cloud providers. We do this in order to achieve a smaller binary size and to avoid dependence on third-party cloud or data center technologies and services, which may not be available in many K3s use cases. We are able to do this because their removal affects neither core Kubernetes functionality nor conformance.'),(0,r.kt)("p",null,"The following volume plugins have been removed from K3s:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cephfs"),(0,r.kt)("li",{parentName:"ul"},"fc"),(0,r.kt)("li",{parentName:"ul"},"flocker"),(0,r.kt)("li",{parentName:"ul"},"git_repo"),(0,r.kt)("li",{parentName:"ul"},"glusterfs"),(0,r.kt)("li",{parentName:"ul"},"portworx"),(0,r.kt)("li",{parentName:"ul"},"quobyte"),(0,r.kt)("li",{parentName:"ul"},"rbd"),(0,r.kt)("li",{parentName:"ul"},"storageos")),(0,r.kt)("p",null,"Both components have out-of-tree alternatives that can be used with K3s: The Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"Container Storage Interface (CSI)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/"},"Cloud Provider Interface (CPI)"),"."),(0,r.kt)("p",null,"Kubernetes maintainers are actively migrating in-tree volume plugins to CSI drivers. For more information on this migration, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/"},"here"),"."),(0,r.kt)("h1",{id:"setting-up-the-local-storage-provider"},"Setting up the Local Storage Provider"),(0,r.kt)("p",null,"K3s comes with Rancher's Local Path Provisioner and this enables the ability to create persistent volume claims out of the box using local storage on the respective node. Below we cover a simple example. For more information please reference the official documentation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage"},"here"),"."),(0,r.kt)("p",null,"Create a hostPath backed persistent volume claim and a pod to utilize it:"),(0,r.kt)("h3",{id:"pvcyaml"},"pvc.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,r.kt)("h3",{id:"podyaml"},"pod.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: local-path-pvc\n")),(0,r.kt)("p",null,"Apply the yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,r.kt)("p",null,"Confirm the PV and PVC are created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,r.kt)("p",null,"The status should be Bound for each."),(0,r.kt)("h1",{id:"setting-up-longhorn"},"Setting up Longhorn"),(0,r.kt)("admonition",{title:"(pending change - longhorn may support arm64 and armhf in the future.)",type:"caution"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," At this time Longhorn only supports amd64 and arm64 (experimental).")),(0,r.kt)("p",{parentName:"admonition"},"K3s supports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"Longhorn"),". Longhorn is an open-source distributed block storage system for Kubernetes."),(0,r.kt)("p",{parentName:"admonition"},"Below we cover a simple example. For more information, refer to the official documentation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn/blob/master/README.md"},"here"),"."),(0,r.kt)("p",{parentName:"admonition"},"Apply the longhorn.yaml to install Longhorn:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n")),(0,r.kt)("p",{parentName:"admonition"},"Longhorn will be installed in the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"longhorn-system"),"."),(0,r.kt)("p",{parentName:"admonition"},"Apply the yaml to create the PVC and pod:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,r.kt)("h3",{parentName:"admonition",id:"pvcyaml-1"},"pvc.yaml"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,r.kt)("h3",{parentName:"admonition",id:"podyaml-1"},"pod.yaml"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: longhorn-volv-pvc\n")),(0,r.kt)("p",{parentName:"admonition"},"Confirm the PV and PVC are created:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,r.kt)("p",{parentName:"admonition"},"The status should be Bound for each.")))}d.isMDXComponent=!0}}]);