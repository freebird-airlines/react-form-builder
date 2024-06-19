(window.webpackJsonpReactFormBuilder=window.webpackJsonpReactFormBuilder||[]).push([[1],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(12),l=a.n(n),r=a(13),o=a.n(r),s=a(22),i=a.n(s),p=a(16),m=a.n(p),c=a(14),u=a.n(c),d=a(0),h=a.n(d),v=a(203),f=a(106),E=a(141),y=a.n(E),b=(a(142),a(30)),g=a.n(b),N=a(143);function w(e,t,a){return t=m()(t),i()(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,a||[],m()(e).constructor):t.apply(e,a))}var O=function(e){function t(e){var a;return l()(this,t),(a=w(this,t,[e])).state={element:a.props.element,data:a.props.data,dirty:!1},a}return u()(t,e),o()(t,[{key:"_setValue",value:function(e){return e.replace(/[^A-Z0-9]+/gi,"_").toLowerCase()}},{key:"editOption",value:function(e,t){var a=this.state.element,n=a.options[e].value!==this._setValue(a.options[e].text)?a.options[e].value:this._setValue(t.target.value);a.options[e].text=t.target.value,a.options[e].value=n,this.setState({element:a,dirty:!0})}},{key:"editValue",value:function(e,t){var a=this.state.element,n=""===t.target.value?this._setValue(a.options[e].text):t.target.value;a.options[e].value=n,this.setState({element:a,dirty:!0})}},{key:"editOptionCorrect",value:function(e,t){var a=this.state.element;a.options[e].hasOwnProperty("correct")?delete a.options[e].correct:a.options[e].correct=!0,this.setState({element:a}),this.props.updateElement.call(this.props.preview,a)}},{key:"updateOption",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"addOption",value:function(e){var t=this.state.element;t.options.splice(e+1,0,{value:"",text:"",key:g.a.uuid()}),this.props.updateElement.call(this.props.preview,t)}},{key:"removeOption",value:function(e){var t=this.state.element;t.options.splice(e,1),this.props.updateElement.call(this.props.preview,t)}},{key:"render",value:function(){var e=this;return this.state.dirty&&(this.state.element.dirty=!0),h.a.createElement("div",{className:"dynamic-option-list"},h.a.createElement("ul",null,h.a.createElement("li",null,h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-sm-6"},h.a.createElement("b",null,h.a.createElement(N.a,{id:"options"}))),this.props.canHaveOptionValue&&h.a.createElement("div",{className:"col-sm-2"},h.a.createElement("b",null,h.a.createElement(N.a,{id:"value"}))),this.props.canHaveOptionValue&&this.props.canHaveOptionCorrect&&h.a.createElement("div",{className:"col-sm-4"},h.a.createElement("b",null,h.a.createElement(N.a,{id:"correct"}))))),this.props.element.options.map((function(t,a){var n="edit_".concat(t.key),l=t.value!==e._setValue(t.text)?t.value:"";return h.a.createElement("li",{className:"clearfix",key:n},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-sm-6"},h.a.createElement("input",{tabIndex:a+1,className:"form-control",style:{width:"100%"},type:"text",name:"text_".concat(a),placeholder:"Option text",value:t.text,onBlur:e.updateOption.bind(e),onChange:e.editOption.bind(e,a)})),e.props.canHaveOptionValue&&h.a.createElement("div",{className:"col-sm-2"},h.a.createElement("input",{className:"form-control",type:"text",name:"value_".concat(a),value:l,onChange:e.editValue.bind(e,a)})),e.props.canHaveOptionValue&&e.props.canHaveOptionCorrect&&h.a.createElement("div",{className:"col-sm-1"},h.a.createElement("input",{className:"form-control",type:"checkbox",value:"1",onChange:e.editOptionCorrect.bind(e,a),checked:t.hasOwnProperty("correct")})),h.a.createElement("div",{className:"col-sm-3"},h.a.createElement("div",{className:"dynamic-options-actions-buttons"},h.a.createElement("button",{onClick:e.addOption.bind(e,a),className:"btn btn-success"},h.a.createElement("i",{className:"fas fa-plus-circle"})),a>0&&h.a.createElement("button",{onClick:e.removeOption.bind(e,a),className:"btn btn-danger"},h.a.createElement("i",{className:"fas fa-minus-circle"}))))))}))))}}])}(h.a.Component),P=a(125);function x(e,t,a){return t=m()(t),i()(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,a||[],m()(e).constructor):t.apply(e,a))}var C=function(e){function t(e){var a;return l()(this,t),(a=x(this,t,[e])).state={element:a.props.element,data:a.props.data,dirty:!1},a}return u()(t,e),o()(t,[{key:"toggleRequired",value:function(){}},{key:"editElementProp",value:function(e,t,a){var n=this,l=this.state.element;l[e]=a.target[t],this.setState({element:l,dirty:!0},(function(){"checked"===t&&n.updateElement()}))}},{key:"onEditorStateChange",value:function(e,t,a){var n=y()(Object(f.convertToRaw)(a.getCurrentContent())).replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/&nbsp;/g," ").replace(/(?:\r\n|\r|\n)/g," "),l=this.state.element;l[t]=n,this.setState({element:l,dirty:!0})}},{key:"updateElement",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"convertFromHTML",value:function(e){var t=Object(f.convertFromHTML)(e);if(!t.contentBlocks||!t.contentBlocks.length)return f.EditorState.createEmpty();var a=f.ContentState.createFromBlockArray(t);return f.EditorState.createWithContent(a)}},{key:"addOptions",value:function(){var e=this,t=document.getElementById("optionsApiUrl").value;t&&Object(P.a)(t).then((function(t){e.props.element.options=[];var a=e.props.element.options;t.forEach((function(e){e.key=g.a.uuid(),a.push(e)}));var n=e.state.element;e.setState({element:n,dirty:!0})}))}},{key:"render",value:function(){this.state.dirty&&(this.props.element.dirty=!0);!!this.props.element.hasOwnProperty("required")&&this.props.element.required,!!this.props.element.hasOwnProperty("readOnly")&&this.props.element.readOnly,!!this.props.element.hasOwnProperty("defaultToday")&&this.props.element.defaultToday,!!this.props.element.hasOwnProperty("showTimeSelect")&&this.props.element.showTimeSelect,!!this.props.element.hasOwnProperty("showTimeSelectOnly")&&this.props.element.showTimeSelectOnly,!!this.props.element.hasOwnProperty("showTimeInput")&&this.props.element.showTimeInput,!!this.props.element.hasOwnProperty("inline")&&this.props.element.inline,!!this.props.element.hasOwnProperty("bold")&&this.props.element.bold,!!this.props.element.hasOwnProperty("italic")&&this.props.element.italic;var e=!!this.props.element.hasOwnProperty("center")&&this.props.element.center,t=(!!this.props.element.hasOwnProperty("pageBreakBefore")&&this.props.element.pageBreakBefore,!!this.props.element.hasOwnProperty("alternateForm")&&this.props.element.alternateForm,this.props.element),a=(t.canHavePageBreakBefore,t.canHaveAlternateForm,t.canHaveDisplayHorizontal,t.canHaveOptionCorrect),n=t.canHaveOptionValue,l="Image"===this.state.element.element||"Camera"===this.state.element.element,r=this.props.files.length?this.props.files:[];return(r.length<1||r.length>0&&""!==r[0].id)&&r.unshift({id:"",file_name:""}),this.props.element.hasOwnProperty("content")&&this.convertFromHTML(this.props.element.content),this.props.element.hasOwnProperty("label")&&this.convertFromHTML(this.props.element.label),h.a.createElement("div",null,h.a.createElement("div",{className:"clearfix"},h.a.createElement("h4",{className:"float-left"},this.props.element.text),h.a.createElement("i",{className:"float-right fas fa-times dismiss-edit",onClick:this.props.manualEditModeOff})),this.props.element.hasOwnProperty("content")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.content,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"content","value")})),this.props.element.hasOwnProperty("file_path")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"control-label",htmlFor:"fileSelect"},h.a.createElement(N.a,{id:"choose-file"}),":"),h.a.createElement("select",{id:"fileSelect",className:"form-control",defaultValue:this.props.element.file_path,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"file_path","value")},r.map((function(e){var t="file_".concat(e.id);return h.a.createElement("option",{value:e.id,key:t},e.file_name)})))),this.props.element.hasOwnProperty("href")&&h.a.createElement("div",{className:"form-group"},h.a.createElement(v.default,{type:"text",className:"form-control",defaultValue:this.props.element.href,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"href","value")})),this.props.element.hasOwnProperty("label")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("label",null,h.a.createElement(N.a,{id:"display-label"})),h.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"label","value")})),this.props.element.hasOwnProperty("src")&&h.a.createElement("div",null,h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"control-label",htmlFor:"srcInput"},h.a.createElement(N.a,{id:"link-to"}),":"),h.a.createElement("input",{id:"srcInput",type:"text",className:"form-control",defaultValue:this.props.element.src,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"src","value")}))),l&&h.a.createElement("div",null,h.a.createElement("div",{className:"form-group"},h.a.createElement("div",{className:"custom-control custom-checkbox"},h.a.createElement("input",{id:"do-center",className:"custom-control-input",type:"checkbox",checked:e,value:!0,onChange:this.editElementProp.bind(this,"center","checked")}),h.a.createElement("label",{className:"custom-control-label",htmlFor:"do-center"},h.a.createElement(N.a,{id:"center"}),"?"))),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-sm-3"},h.a.createElement("label",{className:"control-label",htmlFor:"elementWidth"},h.a.createElement(N.a,{id:"width"}),":"),h.a.createElement("input",{id:"elementWidth",type:"text",className:"form-control",defaultValue:this.props.element.width,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"width","value")})),h.a.createElement("div",{className:"col-sm-3"},h.a.createElement("label",{className:"control-label",htmlFor:"elementHeight"},h.a.createElement(N.a,{id:"height"}),":"),h.a.createElement("input",{id:"elementHeight",type:"text",className:"form-control",defaultValue:this.props.element.height,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"height","value")})))),"FileUpload"===this.state.element.element&&h.a.createElement("div",null,h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"control-label",htmlFor:"fileType"},h.a.createElement(N.a,{id:"choose-file-type"}),":"),h.a.createElement("select",{id:"fileType",className:"form-control",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"fileType","value")},[{type:"image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",typeName:"All File Type"},{type:"image",typeName:"Image"},{type:"application/pdf",typeName:"PDF"},{type:"application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",typeName:"Word"},{type:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",typeName:"Excel"},{type:"application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",typeName:"Powerpoint"},{type:"video/mp4,video/x-m4v,video/*",typeName:"Videos"}].map((function(e,t){return h.a.createElement("option",{value:e.type,key:t},e.typeName)}))))),"Signature"===this.state.element.element&&this.props.element.readOnly?h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"control-label",htmlFor:"variableKey"},h.a.createElement(N.a,{id:"variable-key"}),":"),h.a.createElement("input",{id:"variableKey",type:"text",className:"form-control",defaultValue:this.props.element.variableKey,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"variableKey","value")}),h.a.createElement("p",{className:"help-block"},h.a.createElement(N.a,{id:"variable-key-desc"}),".")):h.a.createElement("div",null),this.props.element.hasOwnProperty("step")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("div",{className:"form-group-range"},h.a.createElement("label",{className:"control-label",htmlFor:"rangeStep"},h.a.createElement(N.a,{id:"step"})),h.a.createElement("input",{id:"rangeStep",type:"number",className:"form-control",defaultValue:this.props.element.step,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"step","value")}))),this.props.element.hasOwnProperty("min_value")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("div",{className:"form-group-range"},h.a.createElement("label",{className:"control-label",htmlFor:"rangeMin"},h.a.createElement(N.a,{id:"min"})),h.a.createElement("input",{id:"rangeMin",type:"number",className:"form-control",defaultValue:this.props.element.min_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_value","value")}),h.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.min_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_label","value")}))),this.props.element.hasOwnProperty("max_value")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("div",{className:"form-group-range"},h.a.createElement("label",{className:"control-label",htmlFor:"rangeMax"},h.a.createElement(N.a,{id:"max"})),h.a.createElement("input",{id:"rangeMax",type:"number",className:"form-control",defaultValue:this.props.element.max_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_value","value")}),h.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.max_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_label","value")}))),this.props.element.hasOwnProperty("default_value")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("div",{className:"form-group-range"},h.a.createElement("label",{className:"control-label",htmlFor:"defaultSelected"},h.a.createElement(N.a,{id:"default-selected"})),h.a.createElement("input",{id:"defaultSelected",type:"number",className:"form-control",defaultValue:this.props.element.default_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"default_value","value")}))),this.props.element.showDescription&&h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"control-label",htmlFor:"questionDescription"},h.a.createElement(N.a,{id:"description"})),h.a.createElement(v.default,{type:"text",className:"form-control",id:"questionDescription",defaultValue:this.props.element.description,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"description","value")})),this.props.showCorrectColumn&&this.props.element.canHaveAnswer&&!this.props.element.hasOwnProperty("options")&&h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"control-label",htmlFor:"correctAnswer"},h.a.createElement(N.a,{id:"correct-answer"})),h.a.createElement("input",{id:"correctAnswer",type:"text",className:"form-control",defaultValue:this.props.element.correct,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"correct","value")})),this.props.element.hasOwnProperty("options")&&h.a.createElement(O,{showCorrectColumn:this.props.showCorrectColumn,canHaveOptionCorrect:a,canHaveOptionValue:n,data:this.props.preview.state.data,updateElement:this.props.updateElement,preview:this.props.preview,element:this.props.element,key:this.props.element.options.length}))}}])}(h.a.Component);C.defaultProps={className:"edit-element-fields"}}}]);