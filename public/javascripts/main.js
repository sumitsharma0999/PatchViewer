function processDiff(e) {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var file = e.target.files[0];
        if(file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var contents = e.target.result;
                var diff2htmlUi = new Diff2HtmlUI({diff: contents});
                diff2htmlUi.draw('#html-target', {inputFormat: 'diff', showFiles: true, matching: 'lines'});
                diff2htmlUi.fileListCloseable('#html-target', false);
            }
            reader.readAsText(file);
            e.preventDefault();
        }
    } else {
    alert('The File APIs are not fully supported by your browser.');
    }
    e.preventDefault();
}

$(document).ready(function(){
    $('#diffFile').on("change", processDiff);
});