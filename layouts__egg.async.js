(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{IWHj:function(e,a,t){"use strict";t.d(a,"a",function(){return d});t("lUTK");var n=t("BvKs"),r=t("3a4m"),s=t.n(r),l=t("q1tI"),m=t.n(l),i=t("LvDl"),c=n["a"].SubMenu,o=function(e){return Object(i["map"])(e,(e,a)=>{return e.children&&e.children.length>0?m.a.createElement(c,{key:a,title:e.name},Object(i["map"])(e.children,e=>{return m.a.createElement(n["a"].Item,{key:e.link},e.name)})):m.a.createElement(n["a"].Item,{key:e.link},e.name)})};class d extends l["Component"]{constructor(){super(),this.menuClick=(e=>{s.a.push(e.key)}),this.state={selectedKeys:[]}}render(){var e=this.state.selectedKeys;return m.a.createElement(n["a"],{key:"Menu",mode:"inline",selectedKeys:e,onClick:this.menuClick},o(this.props.menuData))}}},PUTc:function(e,a,t){e.exports={sider:"sider___2olzd",rightContainer:"rightContainer___KUNjC"}},dLbt:function(e,a,t){"use strict";t.r(a);var n,r,s,l=t("jehZ"),m=t.n(l),i=(t("+L6B"),t("2/Rp")),c=(t("y8nQ"),t("Vl3Y")),o=(t("5NDa"),t("5rEg")),d=t("q1tI"),u=t.n(d),p=t("/MKj"),h=t("m6Ii"),E=t.n(h),I=o["a"].TextArea,C={labelCol:{span:2},wrapperCol:{span:22}},g={wrapperCol:{offset:0,span:24}},y=(n=Object(p["c"])(e=>{var a=e.eggIdeas;return{eggIdeas:a}}),n((s=class extends d["Component"]{constructor(){super(...arguments),this.onFinish=(e=>{console.log("Success:",e),this.props.dispatch({type:"eggIdeas/fetchAddIdeas",payload:e})})}render(){return u.a.createElement("div",{className:E.a.addContainer},u.a.createElement("h1",null,"\u65b0\u589eideas"),u.a.createElement(c["a"],m()({className:E.a.fromContainer,name:"basic",onFinish:this.onFinish},C),u.a.createElement(c["a"].Item,{className:E.a.addItem,label:"\u6807\u9898",name:"ideaname",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898!"}]},u.a.createElement(o["a"],null)),u.a.createElement(c["a"].Item,{className:E.a.addItem,label:"mark",name:"mark"},u.a.createElement(I,null)),u.a.createElement(c["a"].Item,m()({className:E.a.addItemOption},g),u.a.createElement(i["a"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}},r=s))||r);a["default"]=y},m6Ii:function(e,a,t){e.exports={addContainer:"addContainer___u52D_",fromContainer:"fromContainer___2GDyp",addItem:"addItem___3shaq",addItemOption:"addItemOption___x8Mk9"}},"r0/1":function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),r=t("jehZ"),s=t.n(r),l=(t("sRBo"),t("kaz8")),m=(t("y8nQ"),t("Vl3Y")),i=(t("5NDa"),t("5rEg")),c=t("q1tI"),o=t.n(c),d=t("m6Ii"),u=t.n(d),p={labelCol:{span:8},wrapperCol:{span:16}},h={wrapperCol:{offset:8,span:16}},E=()=>{var e=e=>{console.log("Success:",e)},a=e=>{console.log("Failed:",e)};return o.a.createElement(m["a"],s()({},p,{className:u.a.addContainer,name:"basic",initialValues:{remember:!0},onFinish:e,onFinishFailed:a}),o.a.createElement(m["a"].Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},o.a.createElement(i["a"],null)),o.a.createElement(m["a"].Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},o.a.createElement(i["a"].Password,null)),o.a.createElement(m["a"].Item,s()({},h,{name:"remember",valuePropName:"checked"}),o.a.createElement(l["a"],null,"Remember me")),o.a.createElement(m["a"].Item,h,o.a.createElement(n["a"],{type:"primary",htmlType:"submit"},"Submit")))};a["default"]=E},rcQv:function(e,a,t){"use strict";t.r(a);t("B9cy");var n=t("Ol7k"),r=t("q1tI"),s=t.n(r),l=t("IWHj"),m=[{name:"ideas",children:[{name:"\u65b0\u589e",link:"/egg/ideas/add"},{name:"\u4fee\u6539",link:"/egg/ideas/edit"}]}],i=t("PUTc"),c=t.n(i),o=n["a"].Sider,d=n["a"].Content,u=e=>{return s.a.createElement(n["a"],null,s.a.createElement(o,{className:c.a.sider},s.a.createElement(l["a"],{menuData:m})),s.a.createElement(n["a"],{className:c.a.rightContainer},s.a.createElement(d,null,e.children)))};a["default"]=u}}]);