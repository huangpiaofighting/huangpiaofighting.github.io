(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"Gx6/":function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),a=n.n(o),r=n("IujW"),s=n.n(r),l=n("Zbx3"),d=n.n(l),c=(n("+BJd"),n("mr32")),i=n("3XuP");function h(){return a.a.createElement(c["a"],{color:Object(i["getSunColor"])()},"color")}var m=h,u=(n("OaEy"),n("2fM7")),p=n("LvDl"),g=u["a"].Option,C=[{name:"zhangsan1",age:"16"},{name:"lisi",age:"14"},{name:"wangwu",age:"20"}];class E extends o["Component"]{constructor(){super(),this.selectChange=(t=>{console.log(t)}),this.config={}}render(){return a.a.createElement("div",null,a.a.createElement("span",null,"select\u6d4b\u8bd5\u8f93\u5165\u4e2d\u6587onchange\u7684\u8c03\u7528\u6b21\u6570"),a.a.createElement(u["a"],{showSearch:!0,style:{width:"200px"},onCompositionStart:()=>{console.log("onCompositionStart")},onCompositionUpdate:()=>{console.log("onCompositionUpdate")},onCompositionEnd:t=>{console.log("onCompositionEnd",t.target.value)},onSearch:this.selectChange,onChange:this.selectChange},Object(p["map"])(C,(t,e)=>{return a.a.createElement(g,{key:e},t.name)})))}}var b=E,w=n("qipm"),f=n.n(w);function v(){return a.a.createElement("div",{className:d.a.testContainer},a.a.createElement(m,null),a.a.createElement(b,null),a.a.createElement(s.a,{escapeHtml:!1,source:f.a}))}e["default"]=v},Zbx3:function(t,e,n){t.exports={testContainer:"testContainer____h_5E"}},qipm:function(t,e){var n='<h1 id="tes">tes</h1> <p>\u8fd9\u662f\u4e2a\u4e2amd</p> <table> <thead> <tr> <th>\u65b9\u6cd5</th> <th>\u53c2\u6570\u7c7b\u578b</th> <th>\u9ed8\u8ba4\u53c2\u6570</th> <th>\u8fd4\u56de\u503c\u7c7b\u578b</th> <th>\u8bf4\u660e</th> </tr> </thead> <tbody><tr> <td>getSunColor()</td> <td>\u7a7a</td> <td>\u7a7a</td> <td>string</td> <td>\u83b7\u53d6\u4e00\u4e2a\u660e\u4eae\u7684\u989c\u8272</td> </tr> <tr> <td>getRandomColor(<code>[num]</code>)</td> <td>number \u7a7a\uff1a\u968f\u673a\u989c\u8272 1\uff1a\u6df1\u8272 2\uff1a\u6d45\u8272</td> <td>\u7a7a</td> <td>string</td> <td>\u83b7\u53d6\u4e00\u4e2a\u968f\u673a\u989c\u8272</td> </tr> </tbody></table> ';t.exports=n}}]);