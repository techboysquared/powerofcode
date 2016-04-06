(function() {
  'use strict';

  angular
    .module('codingclient')
    .controller('LessonController', LessonController);

  /** @ngInject */
  function LessonController() {
  	var vm = this;
  	vm.editorLoaded = function(editor)
  	{
  		vm.editor = editor;
  		editor.on("copy", textCopied);
  		editor.on("paste", textPasted);
  		editor.setValue("function test() \n { \n \t alert('Hello') \n }\n");
  		vm.editor.clearSelection();
  		vm.editor.setFontSize(16);
  	}


  	

  	function textCopied()
  	{
  		console.log("Text Copied... Will Let User Earn 'Copy Cat Badge'");
  	}
  	function textPasted()
  	{
  		console.log("Text Pasted. Should earn another badge. ");
  	}
  }
})();
