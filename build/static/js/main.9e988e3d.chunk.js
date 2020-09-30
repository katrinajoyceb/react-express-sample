(this["webpackJsonpvalidator-ui"]=this["webpackJsonpvalidator-ui"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),i=(a(100),a(22)),c=(a(101),a(63),a(4)),s=a(5),m=a(8),u=a(7),d=(a(102),r.a.Component,a(9)),h=a.n(d),g=a(14),f=a.n(g),v=[{name:"Start Time",selector:"startTime",sortable:!0,right:!0},{name:"Parameter Name",selector:"name",sortable:!0,right:!0},{name:"Parameter Unit",selector:"unit",sortable:!0,right:!0},{name:"Parameter Rate",selector:"rate",sortable:!0,right:!0},{name:"Parameter Data",selector:"dataValues",sortable:!0,right:!0}],b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/parameter").then((function(t){console.log(t.data),e.setState({items:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{title:"Recent Sensor Readings",columns:v,data:this.state.items.parameter,fixedHeader:!0,fixedHeaderScrollHeight:"300px",highlightOnHover:!0,dense:!0})}}]),a}(r.a.Component),p=a(18),E={labels:["January","February","March","April","May","June","July","August","September"],datasets:[{label:"Readings",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,height:"200px",data:[65,59,80,81,56,60,80,99,65]}]},y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Line,{data:E,options:{title:{display:!0,text:"Monthly Sensor Readings ",fontSize:20},legend:{display:!0,position:"bottom"},maintainAspectRatio:!0}}))}}]),a}(r.a.Component),S=[{name:"Event Time",selector:"time",sortable:!0},{name:"Member System Name",selector:"memberSystemName",sortable:!0,right:!0},{name:"Failure Name",selector:"failureName",sortable:!0,right:!0},{name:"Head Fault Name",selector:"headFaultName",sortable:!0,right:!0,hide:"lg"},{name:"ATA Chapter",selector:"ataChapter",sortable:!0,right:!0,hide:"lg"},{name:"Flight Leg",selector:"flightLeg",sortable:!0,right:!0,hide:"lg"},{name:"Flight Phase",selector:"flightPhase",sortable:!0,right:!0,hide:"lg"},{name:"Member System",selector:"memberSystem",sortable:!0,right:!0},{name:"Fault Name",selector:"faultName",sortable:!0,right:!0},{name:"Fault Status",selector:"faultStatus",sortable:!0,right:!0,hide:"lg"},{name:"Parameter Name",selector:"parameterName",sortable:!0,right:!0},{name:"Parameter Unit",selector:"parameterUnit",sortable:!0,right:!0},{name:"Parameter Data",selector:"parameterData",sortable:!0,right:!0}],C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/failureevent").then((function(t){console.log(t.data),e.setState({items:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{title:"Failure Events",columns:S,data:this.state.items.event,fixedHeader:!0,fixedHeaderScrollHeight:"300px",highlightOnHover:!0,dense:!0})}}]),a}(r.a.Component),N=a(92),O={labels:["GPM R1 (10888)","IHDC (90)","HLRM A on IMC (189)"],datasets:[{label:"Readings",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[65,59,80]}]},j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,fde:[],fdeCorrelation:[],failure:[],acmf:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:4000/failureevent/").then((function(t){console.log(t.data),e.setState({failure:t.data})})).catch((function(e){console.log(e)})),h.a.get("http://localhost:4000/fde/").then((function(t){console.log(t.data),e.setState({fde:t.data})})).catch((function(e){console.log(e)})),h.a.get("http://localhost:4000/fdeCorrelation/").then((function(t){console.log(t.data),e.setState({fdeCorrelation:t.data})})).catch((function(e){console.log(e)})),h.a.get("http://localhost:4000/acmfevent/").then((function(t){console.log(t.data),e.setState({acmf:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=[];for(var t in this.state.fdeCorrelation.event)e.push(this.state.fdeCorrelation.event[t].memberSystemName);for(var t in this.state.failure.event)e.push(this.state.failure.event[t].memberSystemName);for(var t in this.state.failure.event)e.push(this.state.failure.event[t].memberSystem);var a=new Set(e);a=Object(N.a)(a),console.log(a);return r.a.createElement("div",null,r.a.createElement(p.Bar,{data:O,options:{parsing:{xAxisKey:a,yAxisKey:e},title:{display:!0,text:"Event Count By Member System",fontSize:20},legend:{display:!0,position:"bottom"}}}))}}]),a}(r.a.Component),H=[{name:"Start Time",selector:"time",sortable:!0,right:!0},{name:"Parameter Name",selector:"name",sortable:!0},{name:"Parameter Unit",selector:"unit",sortable:!0,right:!0},{name:"Parameter Data",selector:"results",sortable:!0,right:!0}],x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/acmfevent").then((function(t){console.log(t.data),e.setState({items:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{title:"ACMF Events",columns:H,data:this.state.items.event,fixedHeader:!0,fixedHeaderScrollHeight:"300px",highlightOnHover:!0,dense:!0})}}]),a}(r.a.Component),M=[{name:"Event Time",selector:"time",sortable:!0,right:!0},{name:"Event Type",selector:"type",sortable:!0,right:!0},{name:"Member System Name",selector:"memberSystemName",sortable:!0,right:!0},{name:"Failure Name",selector:"failureName",sortable:!0,right:!0},{name:"Paramter Name",selector:"name",sortable:!0,right:!0}],k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,fde:[],fdeCorrelation:[],failure:[],acmf:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/failureevent").then((function(t){console.log(t.data),e.setState({failure:t.data})})).catch((function(e){console.log(e)})),h.a.get("/fde").then((function(t){console.log(t.data),e.setState({fde:t.data})})).catch((function(e){console.log(e)})),h.a.get("/fdeCorrelation").then((function(t){console.log(t.data),e.setState({fdeCorrelation:t.data})})).catch((function(e){console.log(e)})),h.a.get("/acmfevent/").then((function(t){console.log(t.data),e.setState({acmf:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=[];for(var t in this.state.fde.event)e.push(this.state.fde.event[t]);for(var t in this.state.failure.event)e.push(this.state.failure.event[t]);for(var t in this.state.fdeCorrelation.event)e.push(this.state.fdeCorrelation.event[t]);for(var t in this.state.acmf.event)e.push(this.state.acmf.event[t]);return console.log(e),r.a.createElement(f.a,{title:"Recent Events",columns:M,data:e,fixedHeader:!0,fixedHeaderScrollHeight:"500px",highlightOnHover:!0,dense:!0,overflowY:!0})}}]),a}(r.a.Component);var F=function(){var e=r.a.useState(""),t=Object(i.a)(e,2);return t[0],t[1],r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"grid-container1"},r.a.createElement("div",{className:"grid-child parameter-graph"},r.a.createElement(y,null)),r.a.createElement("div",{className:"grid-child parameters"},r.a.createElement(b,null))),r.a.createElement("div",{className:"grid-container2"},r.a.createElement("div",{className:"grid-child recent-events"},r.a.createElement(k,null)),r.a.createElement("div",{className:"grid-child event-graph"},r.a.createElement(j,null)),r.a.createElement("div",{className:"grid-child acmf"},r.a.createElement(x,null))))},D=[{name:"Event Time",selector:"time",sortable:!0,right:!0},{name:"FDE Name",selector:"fdeName",sortable:!0,right:!0},{name:"Transition State",selector:"transitionState",sortable:!0,right:!0},{name:"Severity",selector:"severity",sortable:!0,right:!0},{name:"ATA Chapter",selector:"ataChapter",sortable:!0,right:!0},{name:"Flight Leg",selector:"flightLeg",sortable:!0,right:!0},{name:"Flight Phase",selector:"flightPhase",sortable:!0,right:!0}],A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/fde").then((function(t){console.log(t.data),e.setState({items:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{title:"FDE Events",columns:D,data:this.state.items.event,fixedHeader:!0,fixedHeaderScrollHeight:"300px",highlightOnHover:!0,dense:!0})}}]),a}(r.a.Component),P=[{name:"Event Time",selector:"time",sortable:!0,right:!0},{name:"Member System Name",selector:"memberSystemName",sortable:!0},{name:"FDE Name",selector:"fdeName",sortable:!0,right:!0},{name:"Failure Name",selector:"failureName",sortable:!0,right:!0},{name:"ATA Chapter",selector:"ataChapter",sortable:!0,right:!0},{name:"Flight Leg",selector:"flightLeg",sortable:!0,right:!0},{name:"Flight Phase",selector:"flightPhase",sortable:!0,right:!0}],T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/fdeCorrelation").then((function(t){console.log(t.data),e.setState({items:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{title:"FDE Correlation Events",columns:P,data:this.state.items.event,fixedHeader:!0,fixedHeaderScrollHeight:"300px",highlightOnHover:!0,dense:!0})}}]),a}(r.a.Component),L={labels:["GPM R1 (10888)","IHDC (90)","HLRM A on IMC (189)"],datasets:[{label:"Scatter Dataset",data:[{x:-10},{x:0},{x:10}]}]},R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Scatter,{data:L,options:{title:{display:!0,text:"FDE Correlation Timeline",fontSize:20},legend:{display:!0,position:"bottom"},scales:{xAxes:[{type:"time",time:{parser:"HH:mm",unit:"hour",stepSize:1,displayFormats:{hour:"HH:mm"},tooltipFormat:"HH:mm"},ticks:{min:"00:00",max:"24:00",callback:function(e,t){return 24==t?"24:00":e}}}],yAxes:[{ticks:{beginAtZero:!0,stepSize:5}}]}}}))}}]),a}(r.a.Component),w={labels:["January","February","March","April","May","June","July","August","September"],datasets:[{label:"Failure",fill:!0,lineTension:.5,backgroundColor:"rgba(75,192,192,0.5)",borderColor:"rgba(0,0,0,0.5)",borderWidth:2,data:[10,44,22,32,59,20,55,70,12]},{label:"FDE Events",fill:!0,lineTension:.5,backgroundColor:"rgba(255,0,0,0.5)",borderColor:"rgba(0,0,0,0.5)",borderWidth:2,data:[7,20,25,17,30,15,44,60,5]}]},J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Line,{data:w,options:{title:{display:!0,text:"Event Type Count",fontSize:20},legend:{display:!0,position:"bottom"}}}))}}]),a}(r.a.Component);var I=function(e){var t=r.a.useState("189"),a=Object(i.a)(t,2);return a[0],a[1],console.log(e.children),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"grid-container1"},r.a.createElement("div",{className:"grid-child event"},r.a.createElement(J,null)),r.a.createElement("div",{className:"grid-child failure"},r.a.createElement(C,null))),r.a.createElement("div",{className:"grid-container2"},r.a.createElement("div",{className:"grid-child fdeC"},r.a.createElement(A,null)),r.a.createElement("div",{className:"grid-child fdeC"},r.a.createElement(T,null)),r.a.createElement("div",{className:"grid-child fdeC"},r.a.createElement(R,null))))},z=a(234),W=a(236),B=a(237),U=a(235);var G=function(){var e=r.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=r.a.createElement(F,null),o=function(e){n(e.target.value)};return""!=a&&(l=r.a.createElement(I,{id:a}),console.log(a)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"aircraft"},r.a.createElement("label",null,"Choose Aircraft"),r.a.createElement("select",{onChange:o},r.a.createElement("option",{value:"c919"},"C919-56780123"))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null," C919-56780123 Dashboard "))),r.a.createElement("div",{className:"grid-container1"},r.a.createElement("div",{className:"grid-child componentBar"},r.a.createElement(U.a,{component:"fieldset"},r.a.createElement("div",{className:"radioTitle"},"Member Systems"),r.a.createElement(W.a,{"aria-label":"components",name:"component1",value:a,onChange:o},r.a.createElement(B.a,{value:"189",control:r.a.createElement(z.a,null),label:"HLRM A on IMC (189)"}),r.a.createElement(B.a,{value:"90",control:r.a.createElement(z.a,null),label:"IDHC (90)"}),r.a.createElement(B.a,{value:"10888",control:r.a.createElement(z.a,null),label:"GPM R1 (10888)"})))),r.a.createElement("div",{class:"grid-child content"},l)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){},95:function(e,t,a){e.exports=a(217)}},[[95,1,2]]]);
//# sourceMappingURL=main.9e988e3d.chunk.js.map