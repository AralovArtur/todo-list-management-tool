(function(t){function e(e){for(var r,c,d=e[0],i=e[1],s=e[2],u=0,f=[];u<d.length;u++)c=d[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,d=1;d<o.length;d++){var i=o[d];0!==n[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},n={app:0},a=[];function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var l=i;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-left"},[t._v("Todo app")])]),o("v-main",[o("v-row",[o("v-col",{attrs:{lg:"6"}},[o("Todos")],1),o("v-col",{attrs:{lg:"6"}},[o("TodayTaskPlanning"),o("TomorrowTaskPlanning")],1)],1)],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-form",{ref:"form"},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"Add todo",rules:t.rules,required:"",maxlength:"25"},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}})],1),o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"3"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-text-field",t._g({attrs:{label:"Pick time",readonly:"",rules:t.rules,required:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},r))]}}])},[o("v-time-picker",{attrs:{"ampm-in-title":"","full-width":"",format:"24hr"},on:{"click:minute":function(e){return t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),o("v-col",{attrs:{cols:"3"}},[o("v-btn",{attrs:{fab:"",color:"warning"},on:{click:t.validate}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1)],1)],1),t._l(t.getTodos,(function(e){return o("v-row",{key:e.id,attrs:{"no-gutters":"",draggable:"true","align-content":"end"},on:{dragstart:function(o){return t.startDrag(o,e)}}},[o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"7"}},[o("v-text-field",{attrs:{filled:"",placeholder:e.title+" "+e.time,readonly:""}})],1),o("v-col",{attrs:{cols:"5"}},[o("v-btn",{staticClass:"ml-6",attrs:{fab:"",color:"warning"},on:{click:function(o){return t.deleteTodo(e.id)}}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-delete ")])],1)],1)],1)}))],2)},d=[],i=o("5530"),s=(o("e9c4"),o("2f62")),l=o("c50a"),u={name:"Todos",data:function(){return{todo:"",time:null,rules:[function(t){return!!t||"Field can't be empty"}]}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["deleteTodo","addTodo"])),{},{startDrag:function(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move";var o=JSON.stringify(e);t.dataTransfer.setData("stringTodo",o)},validate:function(){if(this.$refs.form.validate()){var t={userId:1,title:this.todo,completed:!1,time:this.time};t.id=Object(l["a"])(),this.addTodo(t)}}}),computed:Object(i["a"])({},Object(s["c"])(["getTodos"]))},f=u,T=o("2877"),m=o("6544"),p=o.n(m),v=o("8336"),h=o("62ad"),w=o("a523"),g=o("4bd4"),b=o("132d"),y=o("e449"),x=o("0fd9"),j=o("8654"),k=o("c964"),O=Object(T["a"])(f,c,d,!1,null,null,null),_=O.exports;p()(O,{VBtn:v["a"],VCol:h["a"],VContainer:w["a"],VForm:g["a"],VIcon:b["a"],VMenu:y["a"],VRow:x["a"],VTextField:j["a"],VTimePicker:k["a"]});var V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("b",[o("p",[t._v(t._s(t.date))])])]),o("v-col",{attrs:{cols:"4"}},[o("p",[t._v("Total: "+t._s(t.getTodayTodos.length))])]),o("v-col",{attrs:{cols:"4"}},[o("p",[t._v("Done: "+t._s(t.completedTodos.length))])])],1),o("v-card",{attrs:{height:"255px",width:"100%"},on:{drop:function(e){return t.onDrop(e,t.getTodayTodos)},dragenter:function(t){t.preventDefault()},dragover:function(t){t.preventDefault()}}},[o("v-container",t._l(t.getTodayTodos,(function(e){return o("v-row",{key:e.id,attrs:{"no-gutters":""}},[o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[o("v-checkbox",{attrs:{color:"primary","hide-details":""},on:{click:function(o){return t.onSelect(e.id)}}})],1),t.completedTodos.includes(e.id)?o("v-col",{attrs:{cols:"9"}},[o("del",[o("v-text-field",{attrs:{filled:"",placeholder:e.title+" "+e.time,readonly:""}})],1)]):o("v-col",{attrs:{cols:"9"}},[o("v-text-field",{attrs:{filled:"",placeholder:e.title+" "+e.time,readonly:""}})],1),o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"2"}},[o("v-btn",{attrs:{fab:"",color:"warning"},on:{click:function(o){return t.onDelete(e.id)}}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-delete ")])],1)],1)],1)})),1)],1),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.deleteTodos()}}},[t._v("Delete todos")])],1)],1)},D=[],C=(o("caad"),o("2532"),o("4de4"),o("d3b7"),o("99af"),{name:"TodayTaskPlanning",data:function(){return{completedTodos:[]}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["addTodayTodo","deleteTodo","deleteTodayTodo","deleteTodayTodos","fetchTodayTodos"])),{},{onDrop:function(t,e){if(e.length<3){var o=t.dataTransfer.getData("stringTodo"),r=JSON.parse(o);this.addTodayTodo(r),this.deleteTodo(r.id)}},onSelect:function(t){this.completedTodos.includes(t)?this.completedTodos=this.completedTodos.filter((function(e){return e!==t})):this.completedTodos.push(t)},onDelete:function(t){this.completedTodos=this.completedTodos.filter((function(e){return e!==t})),this.deleteTodayTodo(t)},deleteTodos:function(){this.deleteTodayTodos(),this.completedTodos=[]}}),computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["getTodayTodos"])),{},{date:function(){var t=new Date,e=t.getDate();e<10&&(e="0"+e);var o=t.getMonth()+1;return o<10&&(o="0"+o),"".concat(o,".").concat(e)}}),created:function(){this.fetchTodayTodos()}}),R=C,P=o("b0af"),S=o("99d9"),M=o("ac7c"),A=Object(T["a"])(R,V,D,!1,null,null,null),E=A.exports;p()(A,{VBtn:v["a"],VCard:P["a"],VCardActions:S["a"],VCheckbox:M["a"],VCol:h["a"],VContainer:w["a"],VIcon:b["a"],VRow:x["a"],VTextField:j["a"]});var $=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("b",[o("p",[t._v(t._s(t.date))])])]),o("v-col",{attrs:{cols:"4"}},[o("p",[t._v("Total: "+t._s(t.getTomorrowTodos.length))])]),o("v-col",{attrs:{cols:"4"}},[o("p",[t._v("Done: "+t._s(t.completedTodos.length))])])],1),o("v-card",{attrs:{height:"255px",width:"100%"},on:{drop:function(e){return t.onDrop(e,t.getTomorrowTodos)},dragenter:function(t){t.preventDefault()},dragover:function(t){t.preventDefault()}}},[o("v-container",t._l(t.getTomorrowTodos,(function(e){return o("v-row",{key:e.id,attrs:{"no-gutters":""}},[o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[o("v-checkbox",{attrs:{color:"primary","hide-details":""},on:{click:function(o){return t.onSelect(e.id)}}})],1),t.completedTodos.includes(e.id)?o("v-col",{attrs:{cols:"9"}},[o("del",[o("v-text-field",{attrs:{filled:"",placeholder:e.title+" "+e.time,readonly:""}})],1)]):o("v-col",{attrs:{cols:"9"}},[o("v-text-field",{attrs:{filled:"",placeholder:e.title+" "+e.time,readonly:""}})],1),o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"2"}},[o("v-btn",{attrs:{fab:"",color:"warning"},on:{click:function(o){return t.onDelete(e.id)}}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-delete ")])],1)],1)],1)})),1)],1),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.deleteTodos()}}},[t._v("Delete todos")])],1)],1)},F=[],J={name:"TomorrowTaskPlanning",data:function(){return{completedTodos:[]}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["addTomorrowTodo","deleteTodo","deleteTomorrowTodo","deleteTomorrowTodos","fetchTomorrowTodos"])),{},{onDrop:function(t,e){if(e.length<3){var o=t.dataTransfer.getData("stringTodo"),r=JSON.parse(o);this.addTomorrowTodo(r),this.deleteTodo(r.id)}},onSelect:function(t){this.completedTodos.includes(t)?this.completedTodos=this.completedTodos.filter((function(e){return e!==t})):this.completedTodos.push(t)},onDelete:function(t){this.completedTodos=this.completedTodos.filter((function(e){return e!==t})),this.deleteTomorrowTodo(t)},deleteTodos:function(){this.deleteTomorrowTodos(),this.completedTodos=[]}}),computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["getTomorrowTodos"])),{},{date:function(){var t=new Date,e=t.getDate()+1;e<10&&(e="0"+e);var o=t.getMonth()+1;return o<10&&(o="0"+o),"".concat(o,".").concat(e)}}),created:function(){this.fetchTomorrowTodos()}},B=J,I=Object(T["a"])(B,$,F,!1,null,null,null),N=I.exports;p()(I,{VBtn:v["a"],VCard:P["a"],VCardActions:S["a"],VCheckbox:M["a"],VCol:h["a"],VContainer:w["a"],VIcon:b["a"],VRow:x["a"],VTextField:j["a"]});var q={name:"App",components:{Todos:_,TodayTaskPlanning:E,TomorrowTaskPlanning:N}},z=q,G=o("7496"),H=o("40dc"),K=o("f6c4"),L=Object(T["a"])(z,n,a,!1,null,null,null),Q=L.exports;p()(L,{VApp:G["a"],VAppBar:H["a"],VCol:h["a"],VMain:K["a"],VRow:x["a"]});var U=o("f309");r["a"].use(U["a"]);var W=new U["a"]({}),X=o("1da1"),Y=(o("96cf"),o("fb6a"),o("159b"),o("4e82"),o("bc3a")),Z=o.n(Y),tt={todos:[],todayTodos:[],tomorrowTodos:[]},et={getTodos:function(t){return t.todos},getTodayTodos:function(t){return t.todayTodos},getTomorrowTodos:function(t){return t.tomorrowTodos}},ot={fetchTodayTodos:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,Z.a.get("https://jsonplaceholder.typicode.com/todos");case 3:r=e.sent,n=r.data.slice(0,3),n.forEach((function(t){return t.time="00:00"})),o("setTodayTodos",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTomorrowTodos:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,Z.a.get("https://jsonplaceholder.typicode.com/todos");case 3:r=e.sent,n=r.data.slice(4,7),n.forEach((function(t){return t.time="00:00"})),o("setTomorrowTodos",n);case 7:case"end":return e.stop()}}),e)})))()},deleteTodo:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.commit,r("deleteTodo",e);case 2:case"end":return o.stop()}}),o)})))()},deleteTodayTodo:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.commit,r("deleteTodayTodo",e);case 2:case"end":return o.stop()}}),o)})))()},deleteTomorrowTodo:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.commit,r("deleteTomorrowTodo",e);case 2:case"end":return o.stop()}}),o)})))()},addTodo:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.commit,r("addTodo",e);case 2:case"end":return o.stop()}}),o)})))()},addTodayTodo:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.commit,r("addTodayTodo",e);case 2:case"end":return o.stop()}}),o)})))()},addTomorowTodo:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.commit,r("addTomorrowTodo",e);case 2:case"end":return o.stop()}}),o)})))()},deleteTodayTodos:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.commit,o("deleteTodayTodos");case 2:case"end":return e.stop()}}),e)})))()},deleteTomorrowTodos:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.commit,o("deleteTomorrowTodos");case 2:case"end":return e.stop()}}),e)})))()}},rt={setTodos:function(t,e){return t.todos=e},setTodayTodos:function(t,e){return t.todayTodos=e},setTomorrowTodos:function(t,e){return t.tomorrowTodos=e},addTodo:function(t,e){return t.todos.push(e)},addTodayTodo:function(t,e){t.todayTodos.push(e),t.todayTodos.sort(nt)},addTomorrowTodo:function(t,e){t.tomorrowTodos.push(e),t.tomorrowTodos.sort(nt)},deleteTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))},deleteTodayTodo:function(t,e){return t.todayTodos=t.todayTodos.filter((function(t){return t.id!==e}))},deleteTomorrowTodo:function(t,e){return t.tomorrowTodos=t.tomorrowTodos.filter((function(t){return t.id!==e}))},deleteTodayTodos:function(t){return t.todayTodos=[]},deleteTomorrowTodos:function(t){return t.tomorrowTodos=[]}};function nt(t,e){return t.time<e.time?-1:t.time>e.time?1:0}var at={state:tt,getters:et,actions:ot,mutations:rt};r["a"].use(s["a"]);var ct=new s["a"].Store({modules:{todos:at}});r["a"].config.productionTip=!1,new r["a"]({vuetify:W,store:ct,render:function(t){return t(Q)}}).$mount("#app")}});
//# sourceMappingURL=app.99540fd5.js.map