(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(e,t,s){},57:function(e,t,s){"use strict";var i=s(54);s.n(i).a},65:function(e,t,s){"use strict";s.r(t);var i={data:function(){return{str:"",reg:"",result:null,isG:!1,isI:!0}},methods:{test:function(){var e=new RegExp(this.reg,(this.isG?"g":"")+(this.isI?"i":""));this.result=this.str.match(e)}},created:function(){}},r=(s(57),s(0)),a=Object(r.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",[s("div",[s("label",{attrs:{for:"字符串"}},[e._v("字符串")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.str,expression:"str"}],attrs:{name:"字符串",placeholder:"要查找的字符串",type:"text"},domProps:{value:e.str},on:{input:function(t){t.target.composing||(e.str=t.target.value)}}})]),s("div",[s("label",{attrs:{for:"正则"}},[e._v("正则")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.reg,expression:"reg"}],attrs:{name:"正则",type:"text",placeholder:"正则表达式"},domProps:{value:e.reg},on:{input:function(t){t.target.composing||(e.reg=t.target.value)}}}),s("span",[e._v("全局匹配")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isG,expression:"isG"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isG)?e._i(e.isG,null)>-1:e.isG},on:{change:function(t){var s=e.isG,i=t.target,r=!!i.checked;if(Array.isArray(s)){var a=e._i(s,null);i.checked?a<0&&(e.isG=s.concat([null])):a>-1&&(e.isG=s.slice(0,a).concat(s.slice(a+1)))}else e.isG=r}}}),s("span",[e._v("忽略大小写")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isI,expression:"isI"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isI)?e._i(e.isI,null)>-1:e.isI},on:{change:function(t){var s=e.isI,i=t.target,r=!!i.checked;if(Array.isArray(s)){var a=e._i(s,null);i.checked?a<0&&(e.isI=s.concat([null])):a>-1&&(e.isI=s.slice(0,a).concat(s.slice(a+1)))}else e.isI=r}}})]),s("div",[s("label"),s("button",{attrs:{type:"button"},on:{click:e.test}},[e._v("测试")])]),s("div",[s("label",[e._v("结果")]),s("strong",{staticStyle:{color:"#42b983"}},[e._v(e._s(e.result))])])])])},[],!1,null,"26338190",null);t.default=a.exports}}]);