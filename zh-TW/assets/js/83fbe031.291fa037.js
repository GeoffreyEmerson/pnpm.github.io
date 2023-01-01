"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6913],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var l=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},p=Object.keys(e);for(l=0;l<p.length;l++)t=p[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)t=p[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),m=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return l.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(t),c=a,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||p;return t?l.createElement(k,r(r({ref:n},s),{},{components:t})):l.createElement(k,r({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,r=new Array(p);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var m=2;m<p;m++)r[m]=t[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var l=t(2962),a=t(2742),p=(t(9496),t(9613)),r=["components"],i={id:"installation",title:"\u5b89\u88dd"},o=void 0,m={unversionedId:"installation",id:"installation",title:"\u5b89\u88dd",description:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-TW/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88dd"},sidebar:"docs",previous:{title:"\u52d5\u6a5f",permalink:"/zh-TW/next/motivation"},next:{title:"pnpm CLI",permalink:"/zh-TW/next/pnpm-cli"}},s={},u=[{value:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",level:2},{value:"Windows",id:"windows",level:3},{value:"POSIX \u7cfb\u7d71",id:"posix-\u7cfb\u7d71",level:3},{value:"Alpine Linux",id:"alpine-linux",level:3},{value:"\u5fc5\u8981\u689d\u4ef6",id:"\u5fc5\u8981\u689d\u4ef6",level:3},{value:"\u5b89\u88dd\u7279\u5b9a\u7248\u672c",id:"\u5b89\u88dd\u7279\u5b9a\u7248\u672c",level:3},{value:"\u4f7f\u7528 Corepack \u5b89\u88dd",id:"\u4f7f\u7528-corepack-\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 npm",id:"\u4f7f\u7528-npm",level:2},{value:"\u4f7f\u7528 Homebrew",id:"\u4f7f\u7528-homebrew",level:2},{value:"\u4f7f\u7528 Scoop",id:"\u4f7f\u7528-scoop",level:2},{value:"\u76f8\u5bb9\u6027",id:"\u76f8\u5bb9\u6027",level:2},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d",id:"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d",level:2},{value:"\u5728 POSIX \u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d",id:"\u5728-posix-\u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d",level:4},{value:"\u5728 Powershell \u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d (Windows)\uff1a",id:"\u5728-powershell-\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d-windows",level:4},{value:"\u89e3\u9664\u5b89\u88dd pnpm",id:"\u89e3\u9664\u5b89\u88dd-pnpm",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,r);return(0,p.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"},"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"),(0,p.kt)("p",null,"\u5373\u4f7f\u6c92\u6709\u5b89\u88dd Node.js\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u4f86\u5b89\u88dd pnpm\u3002"),(0,p.kt)("h3",{id:"windows"},"Windows"),(0,p.kt)("p",null,"\u4f7f\u7528 PowerShell\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,p.kt)("h3",{id:"posix-\u7cfb\u7d71"},"POSIX \u7cfb\u7d71"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7cfb\u7d71\u4e2d\u6c92\u6709\u5b89\u88dd curl\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("h3",{id:"alpine-linux"},"Alpine Linux"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;\n')),(0,p.kt)("h3",{id:"\u5fc5\u8981\u689d\u4ef6"},"\u5fc5\u8981\u689d\u4ef6"),(0,p.kt)("p",null,"\u82e5\u4e0d\u60f3\u4f7f\u7528\u6307\u4ee4\u78bc\u4f86\u5b89\u88dd pnpm\uff0c\u60a8\u7684\u7cfb\u7d71\u9700\u6709 Node.js\uff08\u6700\u4f4e v14 \u7248\uff09\u3002"),(0,p.kt)("h3",{id:"\u5b89\u88dd\u7279\u5b9a\u7248\u672c"},"\u5b89\u88dd\u7279\u5b9a\u7248\u672c"),(0,p.kt)("p",null,"\u5728\u57f7\u884c\u5b89\u88dd\u6307\u4ee4\u78bc\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u8a2d\u5b9a shell \u8b8a\u6578 ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," \u4ee5\u5b89\u88dd\u7279\u5b9a\u7248\u672c\u7684 pnpm\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u63a5\u4e0b\u4f86\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/next/cli/env"},"pnpm env")," \u547d\u4ee4\u4f86\u5b89\u88dd Node.js\u4e86\u3002")),(0,p.kt)("h2",{id:"\u4f7f\u7528-corepack-\u5b89\u88dd"},"\u4f7f\u7528 Corepack \u5b89\u88dd"),(0,p.kt)("p",null,"\u5f9e v16.13 \u958b\u59cb\uff0cNode.js \u767c\u5e03\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u7528\u4ee5\u7ba1\u7406\u5957\u4ef6\u7ba1\u7406\u5668\u3002 \u9019\u662f\u4e00\u9805\u5be6\u9a57\u6027\u529f\u80fd\uff0c\u6240\u4ee5\u60a8\u9700\u8981\u5148\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u4f86\u555f\u7528\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,p.kt)("p",null,"\u82e5\u60a8\u5148\u524d\u4f7f\u7528 Homebrew \u5b89\u88dd Node.js\uff0c\u60a8\u9700\u8981\u55ae\u7368\u5b89\u88dd corepack\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,p.kt)("p",null,"\u6b64\u6307\u4ee4\u5c07\u81ea\u52d5\u5728\u60a8\u7684\u7cfb\u7d71\u4e0a\u5b89\u88dd pnpm\uff0c \u7136\u800c\u5b83\u5b89\u88dd\u7684\u53ef\u80fd\u4e0d\u662f\u6700\u65b0\u7248\u3002 \u5982\u8981\u5347\u7d1a\uff0c\u8acb\u6aa2\u67e5 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\u6700\u65b0\u7684 pnpm \u7248\u672c")," \u5f8c\u4e26\u57f7\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,p.kt)("p",null,"\u5982\u60a8\u4f7f\u7528\u7684 Node.js \u662f 16.17 \u6216\u66f4\u65b0\u7684\u7248\u672c\uff0c\u53ea\u9700\u6307\u5b9a\u7248\u672c\u6a19\u7c64\u5373\u53ef\u5b89\u88dd ",(0,p.kt)("inlineCode",{parentName:"p"},"\u6700\u65b0\u7684")," \u7248\u672c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,p.kt)("h2",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 npm"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,p.kt)("h2",{id:"\u4f7f\u7528-homebrew"},"\u4f7f\u7528 Homebrew"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u5b89\u88dd Homebrew \u5957\u4ef6\u7ba1\u7406\u5668\uff0c\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd pnpm\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,p.kt)("h2",{id:"\u4f7f\u7528-scoop"},"\u4f7f\u7528 Scoop"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u5b89\u88dd Scoop\uff0c\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd pnpm\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u60a8\u60f3\u5728 CI \u4f3a\u670d\u5668\u4e0a\u4f7f\u7528 pnpm \u55ce\uff1f \u8acb\u53c3\u95b1 ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/next/continuous-integration"},"\u6301\u7e8c\u6574\u5408 (CI)"))),(0,p.kt)("h2",{id:"\u76f8\u5bb9\u6027"},"\u76f8\u5bb9\u6027"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u662f\u904e\u53bb pnpm \u7248\u672c\u8207 Node.js \u5404\u500b\u7248\u672c\u7684\u76f8\u5bb9\u6027\u8868\u683c\uff1a"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,p.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,p.kt)("p",null,"\u5982\u679c pnpm \u640d\u6bc0\u4e14\u7121\u6cd5\u900f\u904e\u91cd\u65b0\u5b89\u88dd\u4f86\u4fee\u5fa9\uff0c\u60a8\u53ef\u80fd\u5f97\u624b\u52d5\u5c07\u5b83\u79fb\u51fa PATH\u3002"),(0,p.kt)("p",null,"\u5047\u8a2d\u60a8\u5728\u57f7\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u547d\u4ee4\u6642\u767c\u751f\u4e86\u906d\u9047\u6b64\u932f\u8aa4\u8a0a\u606f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,p.kt)("p",null,"\u9996\u5148\uff0c\u8acb\u5617\u8a66\u57f7\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"which npm")," \u4f86\u5c0b\u627e pnpm \u5b58\u653e\u7684\u4f4d\u7f6e\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows \u7cfb\u7d71\uff0c\u5728 Git Bash \u4e2d\u57f7\u884c\u524d\u8ff0\u547d\u4ee4\uff0c \u60a8\u5c07\u53d6\u5f97 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,p.kt)("p",null,"\u73fe\u5728\u5df2\u7d93\u77e5\u9053 pnpm CLI \u5b58\u653e\u7684\u4f4d\u7f6e\uff0c\u8acb\u6253\u958b\u8a72\u76ee\u9304\u4e26\u79fb\u9664\u6240\u6709\u8207 pnpm \u6709\u95dc\u7684\u6a94\u6848\uff08\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," \u7b49\u7b49\uff09\u3002 \u5b8c\u6210\u5f8c\u518d\u91cd\u65b0\u5b89\u88dd pnpm\uff0c\u61c9\u8a72\u5c31\u6062\u5fa9\u6b63\u5e38\u4e86\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d"},"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," \u53ef\u80fd\u5f88\u96e3\u8f38\u5165\uff0c\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d ",(0,p.kt)("inlineCode",{parentName:"p"},"pn")," \u4f86\u53d6\u4ee3\u5b83\u3002"),(0,p.kt)("h4",{id:"\u5728-posix-\u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d"},"\u5728 POSIX \u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d"),(0,p.kt)("p",null,"\u5c07\u4e0b\u9762\u9019\u884c\u547d\u4ee4\u52a0\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},".bashrc"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},".zshrc")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"config.fish")," \u5c31\u5b8c\u6210\u4e86\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,p.kt)("h4",{id:"\u5728-powershell-\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d-windows"},"\u5728 Powershell \u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d (Windows)\uff1a"),(0,p.kt)("p",null,"\u4ee5\u7cfb\u7d71\u7ba1\u7406\u54e1\u6b0a\u9650\u958b\u555f Powershell \u8996\u7a97\u4e26\u57f7\u884c\u6b64\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,p.kt)("p",null,"\u63a5\u8457\u6703\u6253\u958b ",(0,p.kt)("inlineCode",{parentName:"p"},"profile.ps1")," \u6a94\u6848\uff0c\u5728\u88e1\u982d\u52a0\u4e0a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,p.kt)("p",null,"\u5b58\u6a94\u5f8c\u95dc\u9589\u8996\u7a97\u3002 \u60a8\u53ef\u80fd\u9700\u8981\u95dc\u9589\u5176\u4ed6\u9084\u958b\u555f\u7684 Powershell \u8996\u7a97\uff0c\u624d\u80fd\u8b93\u6b64\u5225\u540d\u8a2d\u5b9a\u751f\u6548\u3002"),(0,p.kt)("h2",{id:"\u89e3\u9664\u5b89\u88dd-pnpm"},"\u89e3\u9664\u5b89\u88dd pnpm"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5f9e\u7cfb\u7d71\u53ca\u5176\u5beb\u5165\u78c1\u789f\u4e2d\u7684\u4efb\u4f55\u6a94\u6848\u4e2d\u79fb\u9664 pnpm CLI\uff0c\u8acb\u53c3\u95b1\u3008",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/next/uninstall"},"\u89e3\u9664\u5b89\u88dd pnpm"),"\u3009\u3002"))}c.isMDXComponent=!0}}]);