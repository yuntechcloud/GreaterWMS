(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{"727c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"shadow-11",style:{height:t.height}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-grey-8 text-weight-bolder"},[t._v("\n      "+t._s(t.selected_product+t.$t("index.chart"))+"\n      "),a("q-select",{staticClass:"bg-white float-right q-mb-sm ",staticStyle:{width:"300px"},attrs:{outlined:"",options:t.product_options,label:"Select Product"},model:{value:t.selected_product,callback:function(e){t.selected_product=e},expression:"selected_product"}})],1)]),a("q-card-section",{style:{height:t.height2,marginTop:"10px"}},[a("IEcharts",{attrs:{option:t.barChartOption,resizable:!0}})],1)],1)},i=[],o=a("ce44"),r=a("3004"),h={name:"charts",data(){return{pathname:"dashboard/",height:"",height2:"",width:"100%",barChartOption:{grid:{bottom:"25%"},legend:{},tooltip:{},dataset:{dimensions:[],source:[]},xAxis:{type:"category",axisLabel:{rotate:45},nameLocation:"middle",nameGap:78},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:[30,20]}}},series:[]},selected_product:this.$t("dashboards.total_sales"),product_options:[this.$t("dashboards.total_sales")]}},methods:{getList(){var t=this;t.$q.localStorage.has("auth")&&Object(r["e"])(t.pathname+"sales/",{}).then((e=>{t.barChartOption.dataset=e.dataset,t.barChartOption.series=e.series})).catch((t=>{console.log(t)}))}},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-200)+"px":t.height=t.$q.screen.height-200+"px",t.$q.platform.is.electron?t.height2=String(t.$q.screen.height-270)+"px":t.height2=t.$q.screen.height-270+"px",t.getList()},components:{IEcharts:o["a"]}},n=h,c=a("42e1"),l=a("f09f"),d=a("a370"),p=a("ddd8"),g=a("eebe"),u=a.n(g),b=Object(c["a"])(n,s,i,!1,null,null,null);e["default"]=b.exports;u()(b,"components",{QCard:l["a"],QCardSection:d["a"],QSelect:p["a"]})}}]);