"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7134],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>d});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?t.createElement(k,i(i({ref:n},s),{},{components:a})):t.createElement(k,i({ref:n},s))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5252:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var t=a(2962),r=a(2742),o=(a(9496),a(9613)),i=["components"],p={id:"fetch",title:"pnpm fetch"},l=void 0,c={unversionedId:"cli/fetch",id:"cli/fetch",title:"pnpm fetch",description:"Fetch packages from a lockfile into virtual store, package manifest is ignored.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/id/next/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"docs",previous:{title:"pnpm prune",permalink:"/id/next/cli/prune"},next:{title:"pnpm install-test",permalink:"/id/next/cli/install-test"}},s={},u=[{value:"Skenario penggunaan",id:"skenario-penggunaan",level:2},{value:"Opsi",id:"opsi",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:u};function d(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Fetch packages from a lockfile into virtual store, package manifest is ignored."),(0,o.kt)("h2",{id:"skenario-penggunaan"},"Skenario penggunaan"),(0,o.kt)("p",null,"Perintah ini didesain secara khusus untuk meningkatkan pembuatan sebuah docker image."),(0,o.kt)("p",null,"Kami sarankan Anda telah membaca ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"panduan resmi")," untuk menulis Dockerfile untuk aplikasi Node.js, jika Anda belum membacanya, kami sarankan Anda untuk membacanya terlebih dahulu."),(0,o.kt)("p",null,"Dari panduan tersebut, kita dapat menulis sebuah Dockerfile yang teroptimasi untuk proyek yang menggunakan pnpm, seperti dibawah ini"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,o.kt)("p",null,"Selama tidak ada perubahan untuk ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache masih berlaku sampai dengan lapisan ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -- frozen-lockfile -- prod"),", yang memakan waktu lebih banyak ketika membuat docker image."),(0,o.kt)("p",null,"However, modification to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than we expect, because it does not only contain dependencies, but may also contain the version number, scripts, and arbitrary configuration for any other tool."),(0,o.kt)("p",null,"It's also hard to maintain a Dockerfile that builds a monorepo project, it may look like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,o.kt)("p",null,"Seperti yang Anda lihat, Dockerfile harus diperbarui saat Anda menambah atau menghapus sub-packages."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," solves the above problem perfectly by providing the ability to load packages into the virtual store using only information from a lockfile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,o.kt)("p",null,"It works for both simple and monorepo projects, ",(0,o.kt)("inlineCode",{parentName:"p"},"--offline")," enforces pnpm not to communicate with the package registry as all needed packages are already present in the virtual store."),(0,o.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the layer, so ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", will save you much time."),(0,o.kt)("h2",{id:"opsi"},"Opsi"),(0,o.kt)("h3",{id:"--dev"},"--dev"),(0,o.kt)("p",null,"Hanya paket pengembangan yang akan diambil"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"Paket pengembangan tidak akan diambil"))}d.isMDXComponent=!0}}]);