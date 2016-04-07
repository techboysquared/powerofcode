(function() {
  'use strict';

  angular
    .module('codingclient')
    .controller('LessonController', LessonController);

  /** @ngInject */
  function LessonController(toastr) {
  	var vm = this;
  	vm.editorLoaded = function(editor)
  	{
  		vm.editor = editor;
  		editor.on("copy", textCopied);
  		editor.on("paste", textPasted);
  		editor.on("change", editorChanged);
  		editor.setValue("function test() \n{ \n \t alert('Hello') \n}\n");
  		vm.editor.clearSelection();
  		vm.editor.setFontSize(16);
  		vm.consoleMessages = [];
  	}
  	vm.runCode = function()
  	{
  		vm.consoleMessages = [];
  		var oldLog = console.log;
  		console.log = consoleWindow;
  		eval(vm.editor.getValue());
  		console.log = oldLog;
  	}
  	function editorChanged(e)
  	{
  		var annotations = vm.editor.getSession().getAnnotations().length;
  		vm.codeValid = annotations == 0;
  	}
  	function consoleWindow(message)
  	{
  		vm.consoleMessages.push(message);
  	}

  	function badgeEarned(message)
  	{
  		toastr.success(message);
  	}

  	function textCopied()
  	{
  		badgeEarned("Text Copied... Will Let User Earn 'Copy Cat Badge'");
  	}
  	function textPasted()
  	{
  		badgeEarned("Text Pasted. Should earn another badge. ");
  	}
  }
})();
