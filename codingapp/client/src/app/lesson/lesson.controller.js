(function() {
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
      vm.name = "Variables";
      vm.currentNumber = 1;
      vm.totalNumber = 6;
  	}
  	vm.runCode = function()
  	{
  		vm.consoleMessages = [];
  		var oldLog = console.log;
  		console.log = consoleWindow;
      try
      {
  		  eval(vm.editor.getValue());

  		}
      catch(err)
      {
        toastr.error("Your code is not valid. Please review it and try again.");
        if(err.name == 'ReferenceError')
        {
          var context = { type: 1, link: "www.youtube.com"};
          consoleWindow("Error: " + err.message, context);
        }
        else if(err.name == 'SyntaxError')
        {
          var context = { type: 1, link: "www.youtube.com"};
          consoleWindow("Error: " + err.message, context);
        }
        else if(err.name == 'TypeError')
        {
          var context = { type: 1, link: "www.youtube.com"};
          consoleWindow("Error: " + err.message, context);
        }
        else
        {
          console.log = oldLog;
          console.log(err.name);
        }


      }
      console.log = oldLog;
      
  	}
  	function editorChanged(e)
  	{
  		var annotations = vm.editor.getSession().getAnnotations().length;
  		vm.codeValid = annotations == 0;
  	}
  	function consoleWindow(message, context)
  	{
      if (context == undefined) 
      {
        context = { type: 0 };
      }
      var line = { message: message, context: context };
  		vm.consoleMessages.push(line);
  	}

  	function badgeEarned(message)
  	{
  		toastr.success(message);
  	}

  	function textCopied()
  	{
  		badgeEarned("Badge Earned: 'Copy Cat'");
  	}
  	function textPasted()
  	{
  		badgeEarned("Badge Earned: 'Lazy is okay.'");
  	}
  }
})();
