webpackJsonp([0],{DtQB:function(t,i,e){"use strict";var s={name:"CommonHeader",props:{show:Boolean,titleInfo:String},data:function(){return{isShow:this.show,title:this.titleInfo}},mounted:function(){this.$route.name&&(this.isShow=!this.isShow)}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"hidden"}},[i("transition",{attrs:{name:"hidden"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"cg-header"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"cg-header-back"})]),this._v(" "),i("div",{staticClass:"cg-header-variety iconfont"},[this._v(this._s(this.title||"分类"))]),this._v(" "),i("router-link",{staticClass:"cg-header-search iconfont",attrs:{to:"/Search",tag:"div"}},[this._v("\n        \n      ")])],1)])],1)},staticRenderFns:[]};var o=e("VU/8")(s,a,!1,function(t){e("HshG")},"data-v-c367c49e",null);i.a=o.exports},HshG:function(t,i){},hIPj:function(t,i,e){"use strict";var s={name:"Navigator",methods:{changeActive:function(t){var i=document.getElementsByClassName("footer")[0].getElementsByClassName("active")[0];i&&i.classList.remove("active"),this.$refs[t].classList.add("active")}},mounted:function(){this.changeActive(this.$route.name)}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"border-top footer",attrs:{id:"footer"}},[e("div",{staticClass:"footer-container clear"},[e("div",{ref:"Home",staticClass:"footer-item active"},[e("router-link",{attrs:{to:"/",tag:"div"}},[e("i",{staticClass:"iconfont item-icon"},[t._v("")]),t._v(" "),e("p",[t._v("首页")])])],1),t._v(" "),e("div",{ref:"Category",staticClass:"footer-item"},[e("router-link",{attrs:{to:"/Category",tag:"div"}},[e("i",{staticClass:"iconfont item-icon"},[t._v("")]),t._v(" "),e("p",[t._v("分类")])])],1),t._v(" "),e("div",{ref:"Cart",staticClass:"footer-item"},[e("router-link",{attrs:{to:"/Cart",tag:"div"}},[e("i",{staticClass:"iconfont item-icon"},[t._v("")]),t._v(" "),e("p",[t._v("购物车")])])],1),t._v(" "),e("div",{ref:"User",staticClass:"footer-item"},[e("router-link",{attrs:{to:"/User",tag:"div"}},[e("i",{staticClass:"iconfont item-icon"},[t._v("")]),t._v(" "),e("p",[t._v("我的")])])],1)])])},staticRenderFns:[]};var o=e("VU/8")(s,a,!1,function(t){e("o6pB")},"data-v-0e7dad36",null);i.a=o.exports},o6pB:function(t,i){}});
//# sourceMappingURL=0.f5838571d398ec92e17a.js.map