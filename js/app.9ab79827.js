(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06f2":function(t,e,a){t.exports=a.p+"img/cybercoon.78fb53b6.png"},"0e53":function(t,e,a){t.exports=a.p+"img/skype.5d97ffb1.svg"},"0f1e":function(t,e,a){t.exports=a.p+"img/pfdo.37636b08.png"},"153d":function(t,e,a){t.exports=a.p+"img/top-image-1264x712.6e81decc.jpg"},"2b29":function(t,e,a){t.exports=a.p+"img/telegram.d15c16b8.svg"},"2cee":function(t,e,a){t.exports=a.p+"img/specmash.4a46af93.jpg"},5080:function(t,e,a){t.exports=a.p+"img/top-image-960x541.2bf1c2eb.jpg"},5615:function(t,e,a){t.exports=a.p+"img/top-image-1904x1073.dfba0fc8.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.loading?a("div",{staticClass:"d-flex align-center justify-center fill-height"},[a("v-progress-circular",{attrs:{size:70,color:"primary",indeterminate:""}})],1):a("v-main",{staticClass:"grey lighten-5"},[a("top-banner"),a("avatar"),a("skills"),a("price"),a("projects"),a("contacts"),a("copyright")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{attrs:{src:t.bgImage,gradient:t.bannerGradient,"max-height":"100vh"}},[a("v-row",{staticClass:"white--text fill-height text-uppercase top-banner",attrs:{align:"center",justify:"end"}},[a("v-col",{attrs:{xs:"12",sm:"12",md:"7",lg:"6"}},[a("div",{staticClass:"text-lg-h1 text-sm-h2 text-h4 text-center"},[t._v("портфолио")]),a("div",{staticClass:"text-lg-h2 text-sm-h4 text-h5 text-center"},[t._v("web-разработчика")])])],1)],1)},c=[],o=(a("b0c0"),"to bottom, rgba(0,0,0,.3), rgba(0,0,0,.6)"),l={name:"TopBanner",data:function(){return{windowWidth:0}},computed:{bannerGradient:function(){return this.$vuetify.breakpoint.smAndDown?o:null},bgImage:function(){switch(this.$vuetify.breakpoint.name){case"xs":return a("b585");case"sm":return a("5080");case"md":return a("153d");default:return a("5615")}}}},p=l,u=a("2877"),f=a("6544"),h=a.n(f),m=a("62ad"),d=a("adda"),g=a("0fd9"),v=Object(u["a"])(p,i,c,!1,null,null,null),x=v.exports;h()(v,{VCol:m["a"],VImg:d["a"],VRow:g["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white pt-12 pb-12",attrs:{fluid:""}},[a("v-row",{staticClass:"mr-0 ml-0",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-avatar",{staticClass:"text-center",attrs:{size:"240"}},[a("img",{attrs:{src:t.avatar,alt:"Евгений Копытов web-разработчик"}})])],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-lg-h3 text-sm-h4 text-h5 text-center"},[t._v("Евгений Копытов")])])],1)],1)},C=[],y={name:"Avatar",data:function(){return{avatar:a("e754")}}},_=y,j=a("8212"),w=a("a523"),k=Object(u["a"])(_,b,C,!1,null,null,null),V=k.exports;h()(k,{VAvatar:j["a"],VCol:m["a"],VContainer:w["a"],VRow:g["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"stretch",justify:"space-between"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"d-flex flex-column",attrs:{height:"100%"}},[a("v-card-text",{staticClass:"pt-9"},[a("v-icon",{attrs:{color:"primary",size:"64"}},[t._v(t._s(t.icons.mdiSchool))]),a("p",{staticClass:"title text-uppercase black--text mt-6"},[t._v("Специализация")]),a("p",{staticClass:"text-left"},[t._v(" Специализируюсь на backend разработке. Разрабатываю сайты разной степени сложности на php 7. Коммерческой разработкой начал заниматься с ноября 2015 года. В разработке стараюсь придерживаться принципов DRY, SOLID, KISS, YAGNI. ")])],1)],1)],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[a("v-card",{attrs:{height:"100%"}},[a("v-card-text",{staticClass:"pt-9"},[a("v-icon",{attrs:{color:"primary",size:"64"}},[t._v(t._s(t.icons.mdiHammerWrench))]),a("p",{staticClass:"title text-uppercase black--text mt-6"},[t._v("Навыки")]),a("p",{staticClass:"text-left"},[t._v(" Есть опыт работы с PHP, Yii, Laravel, MySQL, HTML, CSS, Bootstrap, JavaScript jQuery, Vue.js, Vuetify.js, Go. "),a("br"),t._v(" Доводилось работать с API ВКонтакте, ok.ru amoCRM, dadata.ru и Яндекс карт. ")])],1)],1)],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[a("v-card",{attrs:{height:"100%"}},[a("v-card-text",{staticClass:"pt-9"},[a("v-icon",{attrs:{color:"primary",size:"64"}},[t._v(t._s(t.icons.mdiAccount))]),a("p",{staticClass:"title text-uppercase black--text mt-6"},[t._v("Пара слов о себе")]),a("p",{staticClass:"text-left"},[t._v(" Человек я жизнерадостный, дружелюбный, ответственный и исполнительный. Отлично лажу с людьми. Увлекаюсь веб разработкой, люблю отдых на природе, немного танцую кизомбу и бачату. Постоянно, что-то изучаю, склонен к самосовершенствованию и самообучению. ")])],1)],1)],1)],1)],1)},P=[],M=a("94ed"),O={name:"Skills",data:function(){return{icons:{mdiAccount:M["a"],mdiHammerWrench:M["b"],mdiSchool:M["c"]}}}},E=O,A=a("b0af"),I=a("99d9"),G=a("132d"),$=Object(u["a"])(E,S,P,!1,null,null,null),D=$.exports;h()($,{VCard:A["a"],VCardText:I["b"],VCol:m["a"],VContainer:w["a"],VIcon:G["a"],VRow:g["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"stretch",justify:"space-between"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-lg-h5 text-sm-h4 text-h6 text-center text-uppercase"},[t._v("Проекты")])]),t._l(t.dynamicProjects,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",{staticClass:"d-flex flex-column",attrs:{height:"100%"}},[a("v-card-title",{staticClass:"subtitle-2"},[t._v(" "+t._s(e.title)+" ")]),a("v-divider"),a("div",[a("v-img",{attrs:{src:e.image,"max-height":"306px"}})],1),a("v-divider"),a("v-card-text",{staticClass:"pt-6",domProps:{innerHTML:t._s(t.nToBr(e.text))}}),a("v-spacer"),a("v-card-actions",t._l(e.links,(function(e,n){return a("v-col",{key:n,staticClass:"text-center"},[a("v-btn",{attrs:{"x-small":"",text:"",color:"primary",href:e.href,target:"_blank"}},[t._v(" "+t._s(e.anchor)+" ")])],1)})),1)],1)],1)}))],2)],1)},R=[],Y=(a("fb6a"),a("ac1f"),a("5319"),{name:"Projects",data:function(){return{projects:[{image:a("0f1e"),title:'АИС "Портал ПФДО"',text:'Портал персонифицированного дополнительного образования.\nКомандная разработка портала для ООО "Институт развития персонифицированных систем управления".\nКрупный проект на yii2.\nС проектом работал больше 2 лет.\nЗанимался разработкой/доработкой отдельных модулей и REST API.',links:[{anchor:"Сайт",href:"https://pfdo.ru"}]},{image:a("6919"),title:"Душевная Москва",text:"Портал социально ориентированных некоммерческих организаций города Москвы.\nКомандная разработка сайта в компании энсайн.\nПроект на yii2 (более 4000 человекочасов).\nНад проектом работали больше половины года.\nЯ занимался разработкой/доработкой отдельных модулей и интеграцией верстки (дниамику на jQuery тоже писал).",links:[{anchor:"Сайт",href:"https://душевная.москва"}]},{image:a("f680"),title:"Минтруд России",text:"Сайт Министерства труда и социальной защиты Российской Федерации.\nКомандная разработке сайта в компании энсайн (yii2).\nМой вклад в проект небольшой. Сделал пару разделов и привязал верстку к их публичным страницам.",links:[{anchor:"Сайт",href:"https://rosmintrud.ru"}]},{image:a("9e92"),title:"Газобетон-строй",text:"Официальный поставщик автоклавного газобетона на территории Красноярского края, республики Хакассии и республики Тыва.\nРазработка бэкенда для студии ОMEGA DESIGN.\nЗа основу была взята самописная CMS студии ОMEGA DESIGN (Yii 1).\nОчень большая часть CMS была дописана в соответствии с требованиями проекта.",links:[{anchor:"Сайт",href:"https://gazobeton24.ru"}]},{image:a("a5b9"),title:"Go Go Map",text:"Помогаем находить лучшие туристические места и маршруты.\nРабота для студии ОMEGA DESIGN.\nДоработка сайта на Yii 1.\nКорректировка выборки объектов из базы данных по удаленности от выбранного города.\nОтрисовка информации об объектах на карте (API яндекс карт).\nВнедрение изменений в верстке.\nКорректировка работы визуального редактора страницы объекта (для наглядного редактирования страницы администратором проекта).",links:[{anchor:"Сайт",href:"http://gogomap.ru"}]},{image:a("06f2"),title:"Московский питомник",text:"Cybercoon.ru Разведение и продажа Мейн Кунов.\nРабота для студии ОMEGA DESIGN.\nДоработка сайта на Yii 1.\nВнесение правок для сео оптимизации.\nДобавление фильтра выборки котят.\nИсправление багов.",links:[{anchor:"Сайт",href:"http://cybercoon.ru"}]},{image:a("2cee"),title:"Спецмаш",text:"Продажа спец техники в Красноярске.\nПервая работа для студии ОMEGA DESIGN.\nПривязка верстки к самописной CMS на Yii 1, с небольшой доработкой самой CMS.",links:[{anchor:"Сайт",href:"http://www.спецмаш24.рф"}]},{image:a("cfcf"),title:"Простая CRM на Yii 2",text:"Небольшая CRM система для школ танцев. Возможность управлять клиентами, группами, расписанием, абонементами и платежами.\nЕсть партнерская программа.\nРазработана на Yii 2 + MySQL.\nПроект создавался, когда я только начал изучать ООП и Yii2.\nПроект заброшен, давно им не занимаюсь!",links:[{anchor:"Код на github",href:"https://github.com/Eugene-Kei/Yii2-micro-school-crm"}]},{image:a("8b60"),title:"Smith Anderson",text:"Пример неадаптивной верстки из PSD шаблона. Без CSS фреймворков.",links:[{anchor:"Просмотр",href:"/css-templates/smith-anderson"},{anchor:"Скачать PSD",href:"https://eugene-kei.github.io/css-templates/smith-anderson/smith-anderson.psd"}]},{image:a("f464"),title:"Kyte",text:"Пример неадаптивной верстки из PSD шаблона. Без CSS фреймворков.",links:[{anchor:"Просмотр",href:"https://eugene-kei.github.io/css-templates/kyte"},{anchor:"Скачать PSD",href:"https://eugene-kei.github.io/css-templates/kyte/kyte.psd"}]}]}},methods:{nToBr:function(t){return t.replace(/(\r)*\n/g,"<br>")}},computed:{dynamicProjects:function(){var t=0;return this.$vuetify.breakpoint.smOnly?t=this.projects.length%2:this.$vuetify.breakpoint.mdAndUp&&(t=this.projects.length%3),t>0?this.projects.slice(0,-1*t):this.projects}}}),z=Y,L=a("8336"),B=a("ce7e"),N=a("2fa4"),H=Object(u["a"])(z,T,R,!1,null,null,null),Q=H.exports;h()(H,{VBtn:L["a"],VCard:A["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:m["a"],VContainer:w["a"],VDivider:B["a"],VImg:d["a"],VRow:g["a"],VSpacer:N["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{height:"320",src:t.image}},[a("v-overlay",{attrs:{absolute:"",color:"black",opacity:".8"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"text-h3 text-center text-uppercase"},[t._v("Часовая ставка")]),a("p",{staticClass:"text-h2 text-center mb-0"},[t._v("10$")])])],1)],1)],1)},K=[],W={name:"Price",computed:{image:function(){switch(this.$vuetify.breakpoint.name){case"xs":return a("e433");case"sm":return a("aa48");case"md":return a("920e");default:return a("d9e0")}}}},U=W,q=a("a797"),F=a("8b9c"),X=Object(u["a"])(U,J,K,!1,null,null,null),Z=X.exports;h()(X,{VCol:m["a"],VOverlay:q["a"],VParallax:F["a"],VRow:g["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"white"},[a("v-container",[a("div",{staticClass:"text-lg-h5 text-sm-h4 text-h6 text-center text-uppercase"},[t._v("Контакты")]),a("v-row",{attrs:{align:"stretch",justify:"center"}},t._l(t.contacts,(function(t,e){return a("v-col",{key:e,staticClass:"text-center",attrs:{cols:"2",md:"1"}},[a("a",{staticClass:"text-decoration-none",attrs:{href:t.href,target:"_blank"}},[a("v-img",{attrs:{src:t.icon,width:"100%"}})],1)])})),1)],1)],1)},et=[],at={name:"Contacts",data:function(){return{contacts:[{icon:a("2b29"),href:"https://t.me/eugene_kei"},{icon:a("7583"),href:"https://wa.me/79140014016"},{icon:a("bd6c"),href:"https://www.instagram.com/eugenekei"},{icon:a("0e53"),href:"skype:eugene_kei"}]}}},nt=at,rt=Object(u["a"])(nt,tt,et,!1,null,null,null),st=rt.exports;h()(rt,{VCol:m["a"],VContainer:w["a"],VImg:d["a"],VRow:g["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"black white--text"},[a("v-container",[a("v-row",{staticClass:"text-caption",attrs:{align:"stretch",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("span",[t._v("Разработка сайта: ")]),a("a",{staticClass:"white--text",attrs:{href:"/"}},[t._v("Евгений Копытов")])]),a("v-col",{staticClass:"text-center"},[a("span",[t._v("Powered by: ")]),a("a",{staticClass:"white--text",attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v("Vuetify")]),a("br",{staticClass:"hidden-sm-and-up"}),a("span",[t._v(" and ")]),a("a",{staticClass:"white--text",attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue.js")])])],1)],1)],1)},ct=[],ot={name:"Copyright"},lt=ot,pt=Object(u["a"])(lt,it,ct,!1,null,null,null),ut=pt.exports;h()(pt,{VCol:m["a"],VContainer:w["a"],VRow:g["a"]});var ft={name:"App",components:{TopBanner:x,Avatar:V,Skills:D,Projects:Q,Price:Z,Contacts:st,Copyright:ut},data:function(){return{loading:!0}},mounted:function(){var t=this;window.addEventListener("load",(function(){t.loading=!1}))}},ht=ft,mt=a("7496"),dt=a("f6c4"),gt=a("490a"),vt=Object(u["a"])(ht,r,s,!1,null,null,null),xt=vt.exports;h()(vt,{VApp:mt["a"],VMain:dt["a"],VProgressCircular:gt["a"]});var bt=a("f309");n["a"].use(bt["a"]);var Ct=new bt["a"]({icons:{iconfont:"mdiSvg"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:Ct,render:function(t){return t(xt)}}).$mount("#app")},6919:function(t,e,a){t.exports=a.p+"img/moscow.b50147bd.jpg"},7583:function(t,e,a){t.exports=a.p+"img/whatsapp.f3f4bba5.svg"},"8b60":function(t,e,a){t.exports=a.p+"img/smith-anderson-thumb.85b132bf.jpg"},"920e":function(t,e,a){t.exports=a.p+"img/price-1264x640.ae7a8ead.jpg"},"9e92":function(t,e,a){t.exports=a.p+"img/gazobeton.90f89b49.jpg"},a5b9:function(t,e,a){t.exports=a.p+"img/gogomap.d640547f.png"},aa48:function(t,e,a){t.exports=a.p+"img/price-960x640.abc3a41c.jpg"},b585:function(t,e,a){t.exports=a.p+"img/top-image-600x338.fd5a28be.jpg"},bd6c:function(t,e,a){t.exports=a.p+"img/instagram.ce41af6a.svg"},cfcf:function(t,e,a){t.exports=a.p+"img/micro-school-crm.9cd1d164.jpg"},d9e0:function(t,e,a){t.exports=a.p+"img/price-1904x640.da53c002.jpg"},e433:function(t,e,a){t.exports=a.p+"img/price-600x640.f66d864f.jpg"},e754:function(t,e,a){t.exports=a.p+"img/ava.73f76f81.jpg"},f464:function(t,e,a){t.exports=a.p+"img/kyte-thumb.1bd2c638.jpg"},f680:function(t,e,a){t.exports=a.p+"img/mintrud.efc9fbb3.jpg"}});
//# sourceMappingURL=app.9ab79827.js.map