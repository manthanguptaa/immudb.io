(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{325:function(t,e,n){"use strict";n(395);var i=n(59),a=(n(11),n(13),n(16),n(79),n(397),n(24),n(22),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var a=this;Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,426,7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,427,7))]).then((function(n){var r=Object(i.a)(n,1)[0];r=r.default;var s=t.algoliaOptions,o=void 0===s?{}:s;r(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(o.facetFilters||[])},o),handleSelected:function(t,e,n){var i=new URL(n.url),r=i.pathname,s=i.hash,o=r.replace(a.$site.base,"/");a.$router.push("".concat(o).concat(s))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),r=(n(401),n(10)),s=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports,o=n(425),l=(n(405),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),c=n(366),u=(n(409),n(65),n(111),n(61)),p={name:"VersionsDropdown",computed:{currentVersion:function(){return Object(u.d)(this.$route)||Object(u.c)()}},data:function(){return{versions:u.o.slice().reverse()}},methods:{getPageLink:function(t){return"/".concat(t)},getVersionText:function(t){var e=["master"].includes(t)?"":"v";return"".concat(e).concat(t)}}},h=(n(410),Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IDropdown",{attrs:{size:"sm"}},[n("IButton",[t._v(t._s(t.getVersionText(t.currentVersion)))]),t._v(" "),n("IDropdownMenu",t._l(t.versions,(function(e){return n("IDropdownItem",{key:e,attrs:{to:t.getPageLink(e),disabled:t.currentVersion===e}},[t._v("\n            "+t._s(t.getVersionText(e))+"\n        ")])})),1)],1)}),[],!1,null,"03bec1f9",null).exports);function d(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={name:"Navbar",components:{SidebarButton:l,NavLinks:c.a,SearchBox:o.a,AlgoliaSearchBox:s,VersionsDropdown:h},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},m=(n(411),Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("VersionsDropdown"),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=m.exports},326:function(t,e,n){"use strict";n(24),n(22);var i=n(355),a=n.n(i),r=n(61),s={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,s=e.docsBranch,o=void 0===s?"master":s,l=e.docsRepo,c=void 0===l?n:l;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,r,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(r.k.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.k.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+a}}},o=(n(412),n(10)),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,c=n(413),u=n.n(c),p={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return d(h.PREV,this)},next:function(){return d(h.NEXT,this)}}};var h={NEXT:{resolveLink:function(t,e){return f(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return f(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function d(t,e){var n=e.$themeConfig,i=e.$page,s=e.$route,o=e.$site,l=e.sidebarItems,c=t.resolveLink,p=t.getThemeLinkConfig,h=t.getPageLinkConfig,d=p(n),f=h(i),m=a()(f)?d:f;return!1===m?void 0:u()(m)?Object(r.m)(o.pages,m,s.path):c(i,l)}function f(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var r=i[a];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[a+n]}}var m=p,v=(n(414),{components:{PageEdit:l,PageNav:Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),g=(n(415),Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("ClientOnly",[n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=g.exports},327:function(t,e,n){"use strict";n(111),n(185),n(110);var i=n(331),a=n(329),r=n(372),s=n(77),o=(n(116),n(198),"https://api.codenotary.io/immudb-beta"),l=n(374),c=n.n(l),u={components:{VueRecaptcha:n(392).a},props:{value:{type:Boolean,default:!1}},data:function(){return{verified:!1,sending:!1,error:!1,sent:!1,sitekey:"6LeHGL4ZAAAAALlN7PGMzqnNBM6GVwhlJ-ZeiCV8",form:this.$inkline.form({contactEmail:{validators:[{rule:"required"},{rule:"email"}]}})}},methods:{onVisibilityChange:function(t){this.$emit("input",t)},onSubmit:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.verified){e.next=2;break}return e.abrupt("return");case 2:return t.sending=!0,n=t.form.contactEmail.value,i={email:n},e.prev=5,e.next=8,c.a.post("".concat(o,"/research-paper"),i,{withCredentials:!0});case 8:t.sent=!0,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),t.error=!0;case 14:return e.prev=14,t.sending=!1,t.verified=!1,setTimeout((function(){t.sent=!1,t.error=!1,t.$emit("input",!1)}),3e3),e.finish(14);case 19:case"end":return e.stop()}}),e,null,[[5,11,14,19]])})))()},onVerify:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(e.verified=!0);case 1:case"end":return n.stop()}}),n)})))()}}},p=(n(393),n(10)),h={name:"Home",components:{ResearchPaper:Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-modal",{staticClass:"subscribe-modal",attrs:{size:"lg",value:t.value},on:{input:t.onVisibilityChange}},[n("template",{slot:"header"},[t._v("\n        Download Research Paper\n    ")]),t._v(" "),t.sent?n("i-alert",{staticClass:"_margin-bottom-1",attrs:{variant:"success"}},[n("template",{slot:"icon"},[n("font-awesome-icon",{attrs:{icon:"check-circle"}})],1),t._v(" "),n("p",[t._v("Email sent successfully!")])],2):t._e(),t._v(" "),t.error?n("i-alert",{staticClass:"_margin-bottom-1",attrs:{variant:"danger"}},[n("template",{slot:"icon"},[n("font-awesome-icon",{attrs:{icon:"times-circle"}})],1),t._v(" "),n("p",[t._v("Something went wrong. Please try again later!")])],2):t._e(),t._v(" "),n("p",{staticClass:"_margin-top-0"},[t._v("\n        We'll send you the research paper via email.\n    ")]),t._v(" "),n("i-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("i-form-group",[n("i-input",{attrs:{schema:t.form.contactEmail,placeholder:"Enter your email"}})],1),t._v(" "),n("i-form-group",[n("vue-recaptcha",{ref:"recaptcha",attrs:{loadRecaptchaScript:!0,sitekey:t.sitekey},on:{verify:t.onVerify}})],1),t._v(" "),n("i-form-group",[n("i-button",{attrs:{type:"submit",variant:"primary",disabled:!t.verified||t.sending,block:""}},[t._v("\n                "+t._s(t.sending?"Sending..":"Send me the document")+"\n            ")])],1)],1)],2)}),[],!1,null,null,null).exports,NavLink:i.a,GithubButton:r.a,Footer:a.a},data:function(){return{researchPaperModalVisible:!1,beta:Object.keys(this.$route.query).includes("beta")}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){Object.keys(this.$route.query).includes("research-paper")&&(this.researchPaperModalVisible=!0)}},d=(n(394),Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"homepage"}},[n("research-paper",{model:{value:t.researchPaperModalVisible,callback:function(e){t.researchPaperModalVisible=e},expression:"researchPaperModalVisible"}}),t._v(" "),n("header",{staticClass:"hero"},[n("div",{staticClass:"hero-content"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n                "+t._s(t.data.heroText||t.$title||"Hello")+"\n            ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n                "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n            ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("i-button",{attrs:{size:"lg",variant:"primary",to:t.data.actionLink}},[t._v(t._s(t.data.actionText))])],1):t._e(),t._v(" "),n("p",{staticClass:"_margin-top-3"},[n("i-button",{attrs:{id:"research-paper-button",link:"",variant:"primary"},on:{click:function(e){t.researchPaperModalVisible=!0}}},[n("i-badge",{staticClass:"_margin-right-1-2",attrs:{size:"sm",variant:"success"}},[t._v("New")]),t._v(" "),n("span",[t._v("Download Research Paper")])],1)],1),t._v(" "),n("div",{attrs:{id:"github-button"}},[n("github-button",{attrs:{href:"https://github.com/codenotary/immudb","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star codenotary/immudb on GitHub"}},[t._v("\n                    Star\n                ")])],1)])]),t._v(" "),n("Content"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null));e.a=d.exports},329:function(t,e,n){"use strict";n(182);var i={components:{NavLink:n(331).a},data:function(){return{year:(new Date).getFullYear()}}},a=(n(371),n(10)),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("i-container",[n("i-row",[n("i-column",[n("span",{staticClass:"copyright"},[t._v("Copyright © vChain "+t._s(t.year))]),t._v(" "),n("i-nav",{staticClass:"list -inline _font-size-sm"},[n("i-nav-item",{attrs:{href:"https://codenotary.io/blog"}},[t._v("Blog")]),t._v(" "),n("i-nav-item",{attrs:{to:"/"}},[t._v("Documentation")]),t._v(" "),n("i-nav-item",{attrs:{href:"https://codenotary.io/careers"}},[t._v("Careers")]),t._v(" "),n("i-nav-item",{attrs:{href:"https://github.com/codenotary/immudb",target:"_blank"}},[t._v("GitHub")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=r.exports},330:function(t,e,n){"use strict";var i=n(365),a=n(366),r={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:a.a},props:["items"]},s=(n(419),n(10)),o=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},331:function(t,e,n){"use strict";n(368),n(109),n(110);var i=n(61),a={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.i)(this.link)||Object(i.j)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.h)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.h)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},r=n(10),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},332:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){},344:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},352:function(t,e,n){},353:function(t,e,n){},354:function(t,e,n){},356:function(t,e,n){},357:function(t,e,n){},358:function(t,e,n){},359:function(t,e,n){},360:function(t,e,n){},361:function(t,e,n){},365:function(t,e,n){"use strict";n.r(e);n(109);var i=n(61),a={name:"SidebarGroup",components:{DropdownTransition:n(367).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(365).default},methods:{isActive:i.g}},r=(n(416),n(10)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(417),n(41);function o(t,e,n,i,a){var r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return a>2&&(r.style={"padding-left":a+"rem"}),t("RouterLink",r,n)}function l(t,e,n,a,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.g)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,a,r,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,r=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,d=Object(i.g)(r,p.path),f="auto"===p.type?d||p.children.some((function(t){return Object(i.g)(r,p.basePath+"#"+t.slug)})):d,m="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,f),v=[a.frontmatter.sidebarDepth,h,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||s.displayAllHeaders;return"auto"===p.type?[m,l(t,p.children,p.basePath,r,v)]:(f||g)&&p.headers&&!i.f.test(p.path)?[m,l(t,Object(i.e)(p.headers),p.path,r,v)]:m}};n(418);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.g)(t,e.path)}))}var p={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(r.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.g)(this.$route,t.regularPath)}}},h=Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},366:function(t,e,n){"use strict";var i=n(58),a=(n(110),n(41),n(24),n(22),n(109),n(79),n(186),n(346),n(347),n(331)),r=n(367),s=n(197),o=n.n(s),l={name:"DropdownLink",components:{NavLink:a.a,DropdownTransition:r.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t}}},c=(n(407),n(10)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,p=n(61),h={name:"NavLinks",components:{NavLink:a.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,a=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var s,o=e[i],l=r[i]&&r[i].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,i),a.some((function(t){return t.path===s}))||(s=i)),{text:l,link:s}}))};return[].concat(Object(i.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(p.l)(t),{items:(t.items||[]).map(p.l)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},d=(n(408),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=d.exports},367:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(406),n(10)),r=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},371:function(t,e,n){"use strict";n(332)},393:function(t,e,n){"use strict";n(341)},394:function(t,e,n){"use strict";n(342)},401:function(t,e,n){"use strict";n(344)},405:function(t,e,n){"use strict";n(349)},406:function(t,e,n){"use strict";n(350)},407:function(t,e,n){"use strict";n(351)},408:function(t,e,n){"use strict";n(352)},410:function(t,e,n){"use strict";n(353)},411:function(t,e,n){"use strict";n(354)},412:function(t,e,n){"use strict";n(356)},414:function(t,e,n){"use strict";n(357)},415:function(t,e,n){"use strict";n(358)},416:function(t,e,n){"use strict";n(359)},418:function(t,e,n){"use strict";n(360)},419:function(t,e,n){"use strict";n(361)}}]);