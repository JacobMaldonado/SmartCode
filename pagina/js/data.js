function submit() {
    var el = document.getElementById("frm1");
    var text = "";
    for(var i = 1; i<el.length; i++){
        text += el.elements[i].value + "<br>";
    }
    if(setup(el.elements)){
        document.getElementById("parrafo").innerHTML = text;
    }
}