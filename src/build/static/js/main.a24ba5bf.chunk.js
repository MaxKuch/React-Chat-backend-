(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{256:function(e,a,t){e.exports=t.p+"static/media/readed.c1f419d6.svg"},257:function(e,a,t){e.exports=t.p+"static/media/noreaded.3c841bf6.svg"},258:function(e,a,t){e.exports=t.p+"static/media/wave.2b8196a5.svg"},259:function(e,a,t){e.exports=t.p+"static/media/play.65f03140.svg"},260:function(e,a,t){e.exports=t.p+"static/media/pause.a61933e8.svg"},278:function(e,a,t){e.exports=t(519)},283:function(e,a,t){},288:function(e,a,t){},289:function(e,a,t){},310:function(e,a,t){},441:function(e,a){},444:function(e,a,t){},445:function(e,a,t){},446:function(e,a,t){},447:function(e,a,t){},453:function(e,a,t){},456:function(e,a,t){},457:function(e,a,t){},485:function(e,a,t){},519:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),i=t.n(c),l=(t(283),t(284),t(19)),s=t(61),o=t(18),u=(t(288),t(523)),d=t(528),m=t(73),E=(t(289),t(2)),g=t.n(E),f=function(e){return r.a.createElement(m.a,Object.assign({disabled:e.disabled,className:g()("button",e.className,{"button--large":"large"===e.size})},e))},p=(t(310),function(e){var a=e.children,t=e.className;return r.a.createElement("div",{className:g()("block",t)}," ",a," ")}),_=function(e,a){return e?a&&e?"error":"success":""},h={labelCol:{span:0},wrapperCol:{span:25}},v=function(e){e.values;var a=e.errors,t=e.touched,n=e.handleChange,c=e.handleBlur,i=e.handleSubmit,l=e.isSubmitting,o=e.isValid;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth__top"},r.a.createElement("h2",null,"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),r.a.createElement("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")),r.a.createElement(p,null,r.a.createElement(u.a,Object.assign({},h,{onFinish:function(){i()}}),r.a.createElement(u.a.Item,{name:"email",help:t.email&&a.email,onChange:n,onBlur:c,validateStatus:_(t.email,a.email),hasFeedback:!0,rules:[{required:!0,message:"Please input your E-Mail"}]},r.a.createElement(d.a,{size:"large",placeholder:"E-Mail"})),r.a.createElement(u.a.Item,{name:"password",help:t.password&&a.password,onChange:n,onBlur:c,validateStatus:_(t.password,a.password),hasFeedback:!0,rules:[{required:!0,message:"Please input your password"}]},r.a.createElement(d.a.Password,{size:"large",placeholder:"Password"})),r.a.createElement(u.a.Item,null,l&&!o&&r.a.createElement("span",null,"\u041e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement(f,{disabled:l,size:"large",type:"primary",htmlType:"submit"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))),r.a.createElement(s.b,{className:"auth__register-link",to:"/register"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},b=t(147),S=function(e){var a=e.isAuth,t=e.values,n=e.errors,r={email:function(e){e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e)||(n.email="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 E-Mail"):n.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-Mail"},name:function(e){e||(n.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")},password:function(e){e?a||/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(e)||(n.password="\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043b\u0435\u0433\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"):n.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},repeatPassword:function(e){e?e!==t.password&&(n.repeatPassword="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):n.repeatPassword="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}};Object.keys(t).forEach((function(e){return r[e]&&r[e](t[e])}))},O=t(252),D=t.n(O).a.create({baseURL:"https://whispering-dawn-05999.herokuapp.com/",headers:{token:window.localStorage.token||""}}),j=function(){return D.get("/dialogs",{headers:{token:window.localStorage.token}})},A=function(e,a){return D.post("/dialogs",{author:e,partner:a,text:"\u0427\u0435 \u043a\u043e\u0433\u043e"})},N=function(e,a){return D.post("/messages/",{text:e,dialog:a})},y=function(e){return D.get("/messages/".concat(e))},w=function(e){return D.post("/user/login",e)},R=function(e){return D.get("/user/find?query=".concat(e),{headers:{token:window.localStorage.token}})},T=function(e){return D.get("/user/me",{headers:{token:e}})},C=function(e){return D.post("/user/registration",e)},k=t(529),L=function(e){var a=e.text,t=e.title,n=e.type,r=void 0===n?"info":n;return k.a[r]({message:t,description:a})},I=t(254),M=t.n(I),U=t(72),x=t(149),G=t(5),P={dialogs:[]},V={DIALOGS_SET_ITEMS:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{dialogs:a})},ADD_DIALOG:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{dialogs:[].concat(Object(x.a)(e.dialogs),[a])})},UPDATE_LAST_MESSAGE:function(e,a){var t=a.dialogId,n=a.message;return Object(G.a)(Object(G.a)({},e),{},{dialogs:e.dialogs.map((function(e){return t===e._id&&(e.lastMessage=n),e}))})},UPDATE_LAST_MESSAGE_READED:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{dialogs:e.dialogs.map((function(e){return a===e._id&&(e.lastMessage.isReaded=!0),e}))})},UPDATE_UNREADED_COUNT:function(e,a){var t=a.dialogId,n=a.unreadedCount;return Object(G.a)(Object(G.a)({},e),{},{dialogs:e.dialogs.map((function(e){return t===e._id&&(e.unreaded=n),e}))})},SET_PARTNER_STATUS:function(e,a){var t=a.partnerId,n=a.isOnline;return Object(G.a)(Object(G.a)({},e),{},{dialogs:e.dialogs.map((function(e){return console.log(t,e),t===e.author._id&&(e.author.isOnline=n,e.author.last_seen=(new Date).toISOString()),t===e.partner._id&&(e.partner.isOnline=n,e.partner.last_seen=(new Date).toISOString()),e}))})},DEFAULT:function(e){return e}},z={items:null,loading:!1,currentDialog:null},F={SET_LOADING:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{loading:a})},SET_CURRENT_DIALOG:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{loading:!1,items:a})},ADD_MESSAGE:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{items:[].concat(Object(x.a)(e.items),[a])})},SET_CURRENT_DIALOG_ID:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{currentDialog:a})},UPDATE_IS_READED:function(e,a){var t=a.dialogId,n=a.myId;return Object(G.a)(Object(G.a)({},e),{},{items:e.items.map((function(e){return e.dialog._id===t&&e.user._id===n&&(e.isReaded=!0),e}))})},DEFAULT:function(e){return e}},H={data:null,token:window.localStorage.token,isAuth:!!window.localStorage.token},B={USER_SET_DATA:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{data:a})},SET_TOKEN:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{token:a})},SET_IS_AUTH:function(e,a){return Object(G.a)(Object(G.a)({},e),{},{isAuth:a})},DEFAULT:function(e){return e}},Z=Object(U.c)({dialogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload,r=V[t]||V.DEFAULT;return r(e,n)},currentDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload,r=F[t]||F.DEFAULT;return r(e,n)},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload,r=B[t]||B.DEFAULT;return r(e,n)}}),q=t(255),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,$=[q.a],J=Object(U.e)(Z,K(U.a.apply(void 0,$))),W=J.getState().user,X=M()("https://whispering-dawn-05999.herokuapp.com/",{query:{token:W.token||""},transports:["websocket"]}),Y={setDialogs:function(e){return{type:"DIALOGS_SET_ITEMS",payload:e}},addDialog:function(e){return{type:"ADD_DIALOG",payload:e}},setPartnerStatus:function(e,a){return{type:"SET_PARTNER_STATUS",payload:{partnerId:e,isOnline:a}}},updateUnreadedCount:function(e,a){return{type:"UPDATE_UNREADED_COUNT",payload:{dialogId:e,unreadedCount:a}}},setCurrentDialog:function(e){return function(a,t){var n=t(),r=n.user.data,c=n.dialogs.dialogs.filter((function(a){return a._id===e}))[0],i=r._id===c.author._id?c.partner._id:c.author._id;X.emit("DIALOG_ENTERED",{dialog_id:e,partner_id:i}),a(Y.updateUnreadedCount(c._id,0)),a({type:"SET_CURRENT_DIALOG_ID",payload:e})}},updateLastMessage:function(e,a){return{type:"UPDATE_LAST_MESSAGE",payload:{dialogId:e,message:a}}},updateLastMessageReaded:function(e){return{type:"UPDATE_LAST_MESSAGE_READED",payload:e}},createDialog:function(e){return function(a,t){var n=t().user.data;return A(n._id,e).then((function(e){var t=e.data;a(Y.addDialog(t))}))}},fetchDialogs:function(){return function(e){return j().then((function(a){var t=a.data;t.length&&e(Y.setDialogs(t))}))}}},Q={setMessages:function(e){return{type:"SET_CURRENT_DIALOG",payload:e}},addMessage:function(e){return{type:"ADD_MESSAGE",payload:e}},updateIsReaded:function(e,a){return function(a,t){var n=t().user.data;a({type:"UPDATE_IS_READED",payload:{dialogId:e,myId:n._id}})}},sendMessage:function(e){return function(a,t){var n=t().currentDialog.currentDialog;N(e,n)}},setLoading:function(e){return{type:"SET_LOADING",payload:e}},fetchMessages:function(e){return function(a){a(Q.setLoading(!0)),y(e).then((function(e){var t=e.data;a(Q.setMessages(t||null))}))}}},ee={setUserData:function(e){return{type:"USER_SET_DATA",payload:e}},setToken:function(e){return{type:"SET_TOKEN",payload:e}},setIsAuth:function(e){return{type:"SET_IS_AUTH",payload:e}},fetchUserData:function(e){return function(a){T(e).then((function(e){var t=e.data;a(ee.setUserData(t))}))}},fetchUserLogin:function(e){return function(a){return w(e).then((function(e){var t=e.data,n=t.status,r=t.token;return console.log(r),"error"===n?L({text:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",title:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",type:"error"}):(L({title:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e!",text:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430",type:"success"}),window.localStorage.token=r,a(ee.setToken(r)),a(ee.setIsAuth(!0)),a(ee.fetchUserData(r))),n}))}},fetchUserRegistration:function(e){return function(a){return C(e).then((function(e){var t=e.data,n=t.status,r=t.token;return"error"===n?L({text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",title:"\u0423\u043f\u0441",type:"error"}):(L({title:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e!",text:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e",type:"success"}),window.localStorage.token=r,a(ee.setToken(r)),a(ee.setIsAuth(!0)),a(ee.fetchUserData(r))),n}))}}},ae=Object(l.b)((function(e){return e}),ee)(Object(o.g)((function(e){var a=e.fetchUserLogin,t=e.history;return r.a.createElement("div",null,r.a.createElement(b.a,{initialValues:{email:"",password:""},validate:function(e){var a={};return S({isAuth:!0,values:e,errors:a}),a},onSubmit:function(e,n){var r=n.setSubmitting;r(!0),a(e).then((function(e){"success"===e?t.push("/"):r(!1)})).catch((function(e){r(!1)}))}},v))}))),te=function(e){var a=e.name,t=e.placeholder,n=e.type,c=e.handleChange,i=e.handleBlur,l=e.touched,s=e.errors,o=e.defaultValue;return r.a.createElement(u.a.Item,{help:l[a]&&s[a],name:a,onChange:c,onBlur:i,validateStatus:_(l[a],s[a]),hasFeedback:!0,defaultValue:o},"password"===n?r.a.createElement(d.a.Password,{size:"large",placeholder:t}):r.a.createElement(d.a,{size:"large",placeholder:t}))},ne={labelCol:{span:0},wrapperCol:{span:25}},re=function(e){var a=e.values,t=e.errors,n=e.touched,c=e.handleChange,i=e.handleBlur,l=e.handleSubmit,o=e.setTouched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth__top"},r.a.createElement("h2",null,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"),r.a.createElement("p",null,"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0447\u0430\u0442, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement(p,null,r.a.createElement(u.a,Object.assign({},ne,{onFinish:function(){l()}}),r.a.createElement(te,{name:"email",placeholder:"E-mail",touched:n,errors:t,handleChange:c,handleBlur:i,defaultValue:a.email}),r.a.createElement(te,{name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",touched:n,errors:t,handleChange:c,handleBlur:i,defaultValue:a.name}),r.a.createElement(te,{type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",touched:n,errors:t,handleChange:c,handleBlur:i,defaultValue:a.password}),r.a.createElement(te,{type:"password",name:"repeatPassword",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",touched:n,errors:t,handleChange:c,handleBlur:i,defaultValue:a.repeatPassword}),r.a.createElement(u.a.Item,null,r.a.createElement(f,{onClick:function(){o({email:!0,name:!0,password:!0,repeatPassword:!0})},size:"large",type:"primary",htmlType:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),r.a.createElement(s.b,{className:"auth__register-link",to:"/login"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")))},ce=Object(l.b)((function(e){return e}),ee)(Object(o.g)((function(e){var a=e.fetchUserRegistration,t=e.history;return r.a.createElement("div",null,r.a.createElement(b.a,{initialValues:{email:"",name:"",password:"",repeatPassword:""},validate:function(e){var a={};return S({isAuth:!1,values:e,errors:a}),a},onSubmit:function(e,n){var r=n.setSubmitting;a(e).then((function(e){"success"===e?t.push("/"):r(!1)})).catch((function(e){r(!1)}))}},re))}))),ie=function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("div",{className:"auth__wrapper"},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:["/","/login"],component:ae}),r.a.createElement(o.b,{exact:!0,path:"/register",component:ce}))))},le=(t(444),t(28)),se=t(272),oe=t(527),ue=function(e){return e?"".concat(Math.floor(e/60)>=10?Math.floor(e/60):"0"+Math.floor(e/60),":").concat(Math.floor(e%60)>=10?Math.floor(e%60):"0"+Math.floor(e%60)):"00:00"},de=(t(445),t(256)),me=t.n(de),Ee=t(257),ge=t.n(Ee),fe=function(e){e.isMe;var a=e.isReaded,t=e.className;return r.a.createElement("div",{className:t},r.a.createElement("img",{src:a?me.a:ge.a,alt:""}))},pe=t(131),_e=t.n(pe),he=function(e){var a=e.substr(-3,3).split("").map((function(e){return(a=e.charCodeAt())>255?a%255:a<0?-a%255:a;var a})),t=Object(le.a)(a,3),n=t[0],r=t[1],c=t[2];return{color:_e()({r:n,g:r,b:c}).lighten(10).saturate(20).toHexString(),lightenColor:_e()({r:n,g:r,b:c}).saturate(20).lighten(30).toHexString()}},ve=(t(446),function(e){if(e)return e}),be=function(e){var a=e.avatarSrc,t=e.hash,n=e.username.charAt(0);return r.a.createElement("div",{className:"avatar"},a?r.a.createElement("img",{src:ve(a),alt:"User avatar"}):r.a.createElement("div",{className:"avatar__gradient",style:{background:"linear-gradient(115deg, ".concat(he(t).color,", ").concat(he(t).lightenColor,")")}},r.a.createElement("span",null,n)))},Se=t(258),Oe=t.n(Se),De=t(259),je=t.n(De),Ae=t(260),Ne=t.n(Ae),ye=function(e){var a=e.audioSrc,t=Object(n.useState)(!1),c=Object(le.a)(t,2),i=c[0],l=c[1],s=Object(n.useState)(0),o=Object(le.a)(s,2),u=o[0],d=o[1],m=Object(n.useState)(0),E=Object(le.a)(m,2),g=E[0],f=E[1],p=Object(n.useState)(0),_=Object(le.a)(p,2),h=_[0],v=_[1],b=Object(n.useRef)(null);Object(n.useEffect)((function(){b.current&&(b.current.addEventListener("canplay",(function(){v(b.current.duration)}),!1),b.current.addEventListener("playing",(function(){l(!0)}),!1),b.current.addEventListener("ended",(function(){l(!1),f(0),d(0)}),!1),b.current.addEventListener("pause",(function(){l(!1)}),!1),b.current.addEventListener("timeupdate",(function(){d(b.current.currentTime)})))}),[]),Object(n.useEffect)((function(){b.current&&f(u/h*100)}),[u,h]);return r.a.createElement("div",{className:"message__audio"},r.a.createElement("audio",{ref:b,src:a,preload:"metadata"}),r.a.createElement("div",{className:"message__audio-progress",style:{width:g+"%"}}),r.a.createElement("div",{className:"message__audio-control"},r.a.createElement("div",{className:"message__audio-btn"},r.a.createElement("button",{onClick:function(){i?b.current.pause():b.current.play()}},r.a.createElement("img",{src:i?Ne.a:je.a,alt:"play-button"}))),r.a.createElement("div",{className:"message__audio-wave"},r.a.createElement("img",{src:Oe.a,alt:"wave"})),r.a.createElement("span",{className:"message__audio-duration"},ue(h-u))))},we=function(e){var a=e.avatar,t=e.text,n=e.date,c=e.user,i=e.isMe,l=e.isReaded,s=e.audio,o=e.attachments,u=e.isTyping;return r.a.createElement("div",{className:g()("message",{"message--isme":i,"message--is-typing":u,"message--image":o&&1===o.length,"message--audio":s})},r.a.createElement("div",{className:"message__wrap"},r.a.createElement("div",{className:"message__avatar"},r.a.createElement(be,{avatarSrc:a,hash:c._id,username:c.fullname})),r.a.createElement("div",null,r.a.createElement("div",{className:"message__content"},(s||t||u)&&r.a.createElement("div",{className:"message__bubble"},r.a.createElement("div",{className:"message__typing"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),t&&r.a.createElement("p",{className:"message__text"},t),s&&r.a.createElement(ye,{audioSrc:s})),o.length?r.a.createElement("div",{className:"message__attachments"},o.map((function(e,a){return r.a.createElement("div",{key:a,className:"message__attachments-item"},r.a.createElement("img",{src:e.url,alt:e.filename}))}))):""),r.a.createElement("span",{className:"message__date"},Object(se.a)(new Date(n),{addSuffix:!0,locale:oe.a}))),i?r.a.createElement(fe,{className:"message__readed-icon",isReaded:l}):""))};we.defaultProps={user:{},attachments:[]};var Re=we,Te=(t(447),t(535)),Ce=t(534),ke=t(533),Le=t(532),Ie=t(261),Me=t(269);var Ue=function(e){var a=e.inputSubmitHandler,t=Object(n.useState)(),c=Object(le.a)(t,2),i=c[0],l=c[1],s=Object(n.useState)(!1),o=Object(le.a)(s,2),u=o[0],E=o[1];return r.a.createElement("div",{className:"message-input"},r.a.createElement("div",{className:"message-input__smile-btn"},u&&r.a.createElement("div",{className:"message-input__emoji-picker"},r.a.createElement(Me.a,{set:"google"})),r.a.createElement(m.a,{onClick:function(){E(!u)},className:"ant-btn--no-border",shape:"circle",icon:r.a.createElement(Te.a,{style:{fontSize:"20px"}})})),r.a.createElement("div",{className:"message-input__textarea"},r.a.createElement(d.a,{onChange:function(e){l(e.target.value)},onKeyUp:function(e){a(e,l)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f...",size:"large",value:i})),r.a.createElement("div",{className:"message-input__actions"},r.a.createElement(Ie.UploadField,{containerProps:{className:"photos"},uploadProps:{accept:".jpg,.jpeg,.png,.gif,.bmp",multiple:"multiple"}},r.a.createElement(m.a,{className:"ant-btn--no-border",shape:"circle",icon:r.a.createElement(Ce.a,{style:{fontSize:"20px"}})})),i?r.a.createElement(m.a,{className:"ant-btn--no-border",shape:"circle",icon:r.a.createElement(ke.a,{style:{fontSize:"20px"}})}):r.a.createElement(m.a,{className:"ant-btn--no-border",shape:"circle",icon:r.a.createElement(Le.a,{style:{fontSize:"20px"}})})))},xe=Object(l.b)((function(e){var a=e.user,t=e.currentDialog;return{me:a.data,dialogId:t.currentDialog}}),Q)((function(e){var a=e.me,t=e.dialogId,n=e.sendMessage,c=e.addMessage;return r.a.createElement(Ue,{inputSubmitHandler:function(e,r){"Enter"===e.key&&e.target.value&&(c({text:e.target.value,isReaded:!1,user:a,createdAt:(new Date).toISOString(),dialog:{_id:t}}),n(e.target.value),r(""))}})})),Ge=t(537),Pe=t(100),Ve=(t(453),t(521)),ze=function(e){var a=e.blockRef,t=e.isLoading,n=e.messages,c=e.partner,i=Object(l.c)((function(e){return e.user.data}));return r.a.createElement("div",{className:"dialog"},r.a.createElement("div",{className:"dialog__header"},r.a.createElement("div",null),r.a.createElement("div",{className:"dialog__header-center"},r.a.createElement("b",{className:"dialog__header-username"},c.fullname),r.a.createElement("div",{className:"dialog__header-status"},c.last_seen&&r.a.createElement("div",{className:g()("status",{"status--online":c.isOnline})},c.isOnline?"\u043e\u043d\u043b\u0430\u0439\u043d":"\u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 ".concat(Object(se.a)(new Date(c.last_seen),{addSuffix:!0,locale:oe.a}))))),r.a.createElement(m.a,{className:"ant-btn--no-border",form:"circle",icon:r.a.createElement(Ge.a,{style:{fontSize:"20px"}})})),r.a.createElement("div",{ref:a,className:"dialog__messages"},function(e,a,t){return e||!t?r.a.createElement(Ve.a,{tip:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439...",size:"large"}):a?0===a.length?r.a.createElement(Pe.a,{description:"\u0414\u0438\u0430\u043b\u043e\u0433 \u043f\u0443\u0441\u0442"}):a.map((function(e,a){return r.a.createElement(Re,{key:a,avatar:e.user.avatar,text:e.text,date:e.createdAt,attachments:e.attachments,user:e.user,isMe:e.user._id===t._id,isReaded:e.isReaded})})):r.a.createElement(Pe.a,{description:"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433"})}(t,n,i)),r.a.createElement("div",{className:"dialog__input"},r.a.createElement(xe,null)))},Fe=Object(l.b)((function(e){var a=e.currentDialog,t=e.dialogs;return{me:e.user.data,dialogId:a.currentDialog,dialogs:t.dialogs,messages:a.items,isLoading:a.loading}}),Object(G.a)(Object(G.a)({},Q),Y))((function(e){var a=e.me,t=e.isLoading,c=e.dialogId,i=e.dialogs,l=e.messages,s=e.fetchMessages,o=e.addMessage,u=e.updateIsReaded,d=Object(n.useState)({}),m=Object(le.a)(d,2),E=m[0],g=m[1];Object(n.useEffect)((function(){if(i&&c){var e=i.filter((function(e){return e._id===c}))[0],t=e.author,n=e.partner;g(t._id===a._id?n:t)}}),[i,c]);var f=function(e){var t=e.dialog_id,n=e.partner_id;a&&c===t&&n===a._id&&u(t)},p=function(e){if(c&&a&&c===e.dialog._id&&a&&e.user._id!==a._id){o(e);var t=i.filter((function(e){return e._id===c}))[0],n=t.author,r=t.partner;r=n._id===a._id?r:n,X.emit("DIALOG_ENTERED",{dialog_id:c,partner_id:r._id},(function(e){console.log(e)}))}},_=Object(n.useRef)(null);return Object(n.useEffect)((function(){return c&&s(c),X.on("SERVER:MESSAGE_CREATED",p),X.on("SERVER:MESSAGES_READED",f),function(){X.removeListener("SERVER:MESSAGE_CREATED",p),X.removeListener("SERVER:MESSAGE_READED",f)}}),[c,E]),Object(n.useEffect)((function(){_.current&&_.current.scrollTo(0,9999)}),[l]),r.a.createElement(ze,{partner:E,blockRef:_,isLoading:t,messages:l})})),He=(t(456),t(531)),Be=t(536),Ze=t(526),qe=t(525),Ke=t(263),$e=t(530),Je=t(522),We=t(524),Xe=(t(457),function(e){var a,t=e.id,c=e.partner,i=e.unreaded,s=e.lastMessage,o=e.user,u=void 0===o?s.user:o,d=e.onSelect,m=Object(l.c)((function(e){return e.user.data})),E=Object(n.useState)(!1),f=Object(le.a)(E,2),p=f[0],_=f[1];return Object(n.useEffect)((function(){m&&u&&_(m._id===u._id)}),[m,u]),r.a.createElement("div",{onClick:d.bind(void 0,t),className:g()("dialogs__item",{"dialogs__item--online":c.isOnline})},r.a.createElement("div",{className:"dialogs__item-avatar"},r.a.createElement(be,{avatarSrc:c.avatar,hash:c._id,username:c.fullname})),r.a.createElement("div",{className:"dialogs__item-info"},r.a.createElement("div",{className:"dialogs__item-info-top"},r.a.createElement("b",{className:"dialogs__username"},c.fullname),r.a.createElement("span",{className:"dialogs__date"},(a=s.createdAt,Object($e.a)(Object(Je.a)(a))?Object(We.a)(new Date(a),"hh:mm"):Object(We.a)(new Date(a),"d.MM.yy")))),r.a.createElement("div",{className:"dialogs__item-info-bottom"},r.a.createElement("p",{className:"dialogs__text"},"".concat(p?"You":c.fullname,": ").concat(s.text))),p?r.a.createElement(fe,{className:"dialogs__readed-icon",isReaded:s.isReaded}):"",!p&&i?r.a.createElement("div",{className:"dialogs__count"},i):""))}),Ye=t(264),Qe=t.n(Ye),ea=(t(485),function(e){var a=e.dialogs,t=e.me,n=e.onSelectDialog;return t?a.length?Qe()(a,(function(e){return e.lastMessage.createdAt}),["desc"]).map((function(e){var a=t._id===e.partner._id?e.author:e.partner;return r.a.createElement(Xe,{onSelect:n,partner:a,key:e._id,id:e._id,lastMessage:e.lastMessage,unreaded:e.unreaded})})):r.a.createElement(Pe.a,{description:"\u0414\u0438\u0430\u043b\u043e\u0433\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):r.a.createElement(Ve.a,{size:"large"})}),aa=function(e){var a=e.me,t=e.dialogs,n=e.onSearch,c=e.inputValue,i=e.onSelectDialog;return r.a.createElement("div",{className:"dialogs"},r.a.createElement("div",{className:"dialogs__search"},r.a.createElement(d.a.Search,{onChange:function(e){return n(e.target.value.toLowerCase())},placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0440\u0435\u0434\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",size:"large",value:c})),r.a.createElement(ea,{dialogs:t,me:a,onSelectDialog:i}))},ta=Object(l.b)((function(e){var a=e.user;return{dialogs:e.dialogs.dialogs,currentDialogId:e.currentDialog.currentDialog,me:a.data}}),Y)((function(e){var a=e.me,t=e.dialogs,c=e.currentDialogId,i=e.updateLastMessage,l=e.updateLastMessageReaded,s=e.setCurrentDialog,o=e.fetchDialogs,u=e.addDialog,d=e.updateUnreadedCount,m=e.setPartnerStatus,E=Object(n.useState)(),g=Object(le.a)(E,2),f=g[0],p=g[1],_=Object(n.useState)(t),h=Object(le.a)(_,2),v=h[0],b=h[1];Object(n.useEffect)((function(){t.length?b(t):o()}),[t]);var S=function(e){if(c!==e.dialog._id){var n,r=Object(Ke.a)(t);try{for(r.s();!(n=r.n()).done;){var l=n.value;console.log(l),l._id===e.dialog._id&&d(e.dialog._id,e.dialog.unreaded++)}}catch(s){r.e(s)}finally{r.f()}}(a&&e.dialog.author===a._id||e.dialog.partner===a._id)&&i(e.dialog._id,e)},O=function(e){var t=e.dialog_id,n=e.partner_id;a&&n===a._id&&l(t)},D=function(e){console.log(e),a&&a._id===e.partner._id&&u(e)},j=function(e){m(e,!0)},A=function(e){m(e,!1)};Object(n.useEffect)((function(){return X.on("USER_CONNECTED",j),X.on("USER_DISCONNECTED",A),X.on("SERVER:DIALOG_CREATED",D),X.on("SERVER:MESSAGE_CREATED",S),X.on("SERVER:MESSAGES_READED",O),function(){X.removeListener("USER_CONNECTED",j),X.removeListener("USER_DISCONNECTED",A),X.removeListener("SERVER:MESSAGE_CREATED",S),X.removeListener("SERVER:MESSAGE_READED",O),X.removeListener("SERVER:DIALOG_CREATED",D)}}),[a,t,c]);return r.a.createElement(aa,{me:a,dialogs:v,onSearch:function(e){b(t.filter((function(t){return t[a._id===t.partner._id?"author":"partner"].fullname.toLowerCase().indexOf(e)>=0}))),p(e)},inputValue:f,onSelectDialog:s})})),na=function(e){var a=e.modalHandleOk,t=e.showModal,n=e.modalHandleCancel,c=e.modalState,i=e.usersHandleChange,l=e.usersHandleSearch,s=e.usersSearchState,o=c.visible,u=c.confirmLoading,d=s.value,E=s.fetching,g=s.data.map((function(e){return r.a.createElement(Ze.a.Option,{key:e._id},e.fullname)}));return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__header"},r.a.createElement("div",null,r.a.createElement(He.a,{style:{fontSize:"18px"}}),r.a.createElement("span",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432")),r.a.createElement(m.a,{onClick:t,className:"ant-btn--no-border",form:"circle",icon:r.a.createElement(Be.a,{style:{fontSize:"18px"}})}),r.a.createElement(qe.a,{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0430",visible:o,footer:[r.a.createElement(m.a,{key:"back",onClick:n},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(m.a,{disabled:!d,key:"submit",type:"primary",loading:u,onClick:a},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")]},r.a.createElement(Ze.a,{showSearch:!0,value:d,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 username \u0438\u043b\u0438 e-mail \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",style:{width:"100%"},defaultActiveFirstOption:!1,notFoundContent:E?r.a.createElement(Ve.a,{size:"small"}):r.a.createElement("span",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"),showArrow:!1,filterOption:!1,onSearch:l,onChange:i},g))),r.a.createElement("div",{className:"sidebar__dialogs"},r.a.createElement(ta,null)))},ra=Object(l.b)((function(e){return e}),Y)((function(e){var a=e.createDialog,t=Object(n.useState)({data:[],fetching:!1,value:void 0}),c=Object(le.a)(t,2),i=c[0],l=c[1],s=Object(n.useState)({visible:!1,confirmLoading:!1}),o=Object(le.a)(s,2),u=o[0],d=o[1];return r.a.createElement(na,{showModal:function(){d(Object(G.a)(Object(G.a)({},u),{},{visible:!0}))},modalHandleCancel:function(){d(Object(G.a)(Object(G.a)({},u),{},{visible:!1}))},modalHandleOk:function(){i.value&&(d(Object(G.a)(Object(G.a)({},u),{},{confirmLoading:!0})),a(i.value).then((function(){d({visible:!1,confirmLoading:!1})})))},modalState:u,usersHandleSearch:function(e){e?(l(Object(G.a)(Object(G.a)({},i),{},{fetching:!0})),console.log(e),R(e).then((function(e){200===e.status&&l(Object(G.a)(Object(G.a)({},i),{},{fetching:!1,data:e.data}))})).catch((function(e){l(Object(G.a)(Object(G.a)({},i),{},{fetching:!1}))}))):l(Object(G.a)(Object(G.a)({},i),{},{data:[]}))},usersHandleChange:function(e){l(Object(G.a)(Object(G.a)({},i),{},{value:e}))},usersSearchState:i})})),ca=function(){return r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"chat__sidebar"},r.a.createElement(ra,null)),r.a.createElement("div",{className:"chat__dialog"},r.a.createElement("div",{className:"chat__dialog-messages"},r.a.createElement(Fe,null)))))};var ia=Object(l.b)((function(e){var a=e.user;return{isAuth:a.isAuth,token:a.token,me:a.data}}),ee)((function(e){var a=e.me,t=e.isAuth,c=e.token,i=e.fetchUserData;return Object(n.useEffect)((function(){c&&!a&&i(c)}),[a]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(s.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",render:function(){return t?r.a.createElement(o.a,{to:"/im"}):r.a.createElement(o.a,{to:"/login"})}}),r.a.createElement(o.b,{exact:!0,path:["/login","/register"],render:function(){return t?r.a.createElement(o.a,{to:"/im"}):r.a.createElement(ie,null)}}),r.a.createElement(o.b,{exact:!0,path:"/im",render:function(){return t?r.a.createElement(ca,null):r.a.createElement(o.a,{to:"/login"})}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(ia,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);
//# sourceMappingURL=main.a24ba5bf.chunk.js.map