function viewSource(){;
    sourceWindow = window.open('','Source of ' + window.location.href,'height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write("<pre>"+document.documentElement.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;")+"</pre>");
    sourceWindow.document.close();
    if(window.focus) sourceWindow.focus();
}
