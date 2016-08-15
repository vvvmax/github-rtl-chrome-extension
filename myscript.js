
function switchRTL(){
	
	//switch the preview
	var objBody = jQuery(".markdown-body");
	if(objBody.length){
		objBody.css("direction","rtl");
		objBody.find("pre").css("direction","ltr");
	}
	
	//switch the editor
	var objEditor = jQuery(".ace_editor");
	if(objEditor.length){
		
		objEditor.css("direction","rtl");
		jQuery("textarea.ace_text-input").css("direction","rtl");
		jQuery(".atom-text-editor").css("direction","rtl");
		
		jQuery(".ace_line").css({
			"direction":"rtl",
			"unicode-bidi": "bidi-override"
		});
		
	}
	
}

switchRTL();