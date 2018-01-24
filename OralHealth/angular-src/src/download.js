function picked() {
    alert("File is saved.");
    window.location.href = "user.html";
}
function chooseFile() {
    var input = $(document.createElement("input"));
    input.attr("type", "file");
    input.trigger("click"); // opening dialog
    input.change(function(){
        alert("file Saved");
        window.location.href = "user.html";
    });
}