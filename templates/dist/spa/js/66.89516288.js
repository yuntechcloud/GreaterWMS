(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"0581":function(t,e,a){"use strict";var n=a("05bc"),s=a.n(n);e["default"]=s.a},"05bc":function(t,e){},ff8e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticStyle:{display:"none"},model:{value:t.scaneddata.request_time,callback:function(e){t.$set(t.scaneddata,"request_time",e)},expression:"scaneddata.request_time"}}),a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height},attrs:{flat:""}},[a("q-card-section",[a("q-bar",{staticClass:"bg-white q-mb-sm shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("outbound.view_dn.dn_code"))+": "+t._s(t.dn_scan))])]),a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"purple",label:t.$t("stock.view_stocklist.cyclecountresult")},on:{click:function(e){return t.pickedSubmit()}}})],1)],1),a("q-scroll-area",{ref:"scrollArea",style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(t._s(t.scan_bin_name))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.scan_goods_code))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.order_qty))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.picking_qty))])])]),a("tbody",[t._l(t.table_list,(function(e,n){return a("tr",{key:n,attrs:{id:"dom"+n}},[a("td",{class:{"scan-background text-center":e.bin_name===t.bin_scan,"text-center":e.bin_name!==t.bin_scan}},[t._v(t._s(e.bin_name))]),a("td",{class:{"scan-background text-center":e.bin_name===t.bin_scan&&e.goods_code===t.goods_scan,"text-center":e.bin_name!==t.bin_scan&&e.goods_code!==t.goods_scan}},[t._v(t._s(e.goods_code))]),a("td",{class:{"scan-background text-center":e.bin_name===t.bin_scan&&e.goods_code===t.goods_scan,"text-center":e.bin_name!==t.bin_scan&&e.goods_code!==t.goods_scan}},[t._v(t._s(e.pick_qty))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.picked_qty))])])}))],2)])],1)],1)],1)},s=[],i=a("3004"),o=a("18d6"),c=a("09f9"),d={name:"Pagezebra_picking",data(){return{openid:"",login_name:"",authin:"0",pathname:"picking/",width:"",height:"",scroll_height:"",table_list:[],scan_goods_code:this.$t("scan.scan_goods_code"),scan_bin_name:this.$t("scan.scan_bin_name"),order_qty:this.$t("outbound.view_dn.goods_qty"),picking_qty:this.$t("stock.view_stocklist.picked_stock"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},bar_scanned:"",dn_scan:"",bin_scan:"",goods_scan:"",currentIndex:"",id:"",error1:this.$t("scan.scan_goods_label_error"),error2:this.$t("scan.view_picking.picking_qty_error")}},methods:{getPickingList(t){var e=this;Object(i["e"])("dn/pickinglistfilter/?dn_code="+t,{}).then((t=>{0===t.results.length?e.$q.notify({message:"No DN Data",position:"top",icon:"close",color:"negative"}):(e.dn_scan=t.results[0].dn_code,e.table_list=t.results)})).catch((t=>{e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))},getBinList(t){var e=this,a="";e.table_list.filter((e=>{e.bin_name.includes(t)&&(a=t)})),""!==a?e.bin_scan=t:e.$q.notify({message:"No Bin Data",position:"top",icon:"close",color:"negative"})},getGoodsList(t){var e=this,a=0;e.table_list.filter((n=>{if(a+=1,!n.goods_code.includes(t))return!0;n.picked_qty<n.pick_qty?(e.goods_scan=t,n.picked_qty+=1):a===e.table_list.length&&e.$q.notify({message:"Scanned More Data",position:"top",icon:"close",color:"negative"})}))},pickedSubmit(){var t=this,e={dn_code:t.dn_scan,goodsData:t.table_list,creater:t.login_name};t.pickedDataSubmit(e)},pickedDataSubmit(t){var e=this;Object(i["i"])("dn/picked/",t).then((t=>{e.table_list=[],e.bin_scan="",e.goods_scan="",e.dn_scan="",t.detail||e.$q.notify({message:"Success Confirm Picking List",position:"top",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))}},computed:{fab:{get(){return this.$store.state.fabchange.fab}},scaneddata:{get(){return this.$store.state.scanedsolve.scaneddata}}},created(){var t=this;o["a"].has("openid")?t.openid=o["a"].getItem("openid"):(t.openid="",o["a"].set("openid","")),o["a"].has("login_name")?t.login_name=o["a"].getItem("login_name"):(t.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.width=1*c["a"].width+"px",t.height=c["a"].height-50+"px",t.scroll_height=c["a"].height-225+"px"},updated(){var t=this;""!==t.scaneddata&&t.bar_scanned!==t.scaneddata.request_time&&("DN"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.bin_scan="",t.goods_scan="",t.dn_scan="",t.getPickingList(t.scaneddata.code)):"BINSET"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.bin_scan="",t.goods_scan="",t.getBinList(t.scaneddata.code)):"GOODS"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.getGoodsList(t.scaneddata.code)):t.$q.notify({message:"No Query Data",position:"top",icon:"close",color:"negative"}))},beforeDestroy(){}},r=d,_=a("42e1"),l=a("0581"),g=a("27f9"),b=a("f09f"),h=a("a370"),u=a("d847"),p=a("e7a9"),m=a("9c40"),f=a("4983"),k=a("2bb1"),v=a("eebe"),y=a.n(v),q=Object(_["a"])(r,n,s,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(q);e["default"]=q.exports;y()(q,"components",{QInput:g["a"],QCard:b["a"],QCardSection:h["a"],QBar:u["a"],QBtnGroup:p["a"],QBtn:m["a"],QScrollArea:f["a"],QMarkupTable:k["a"]})}}]);