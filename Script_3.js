let test_text = document.getElementById("sample");
var toggle = false;
function change(){
    test_text.textContent="Lorem ipsum";
    test_text.innerHTML += "<br><h3>Sub-Title A</h3><h3>Sub-Title B</h3>";
    let pictures = document.getElementsByTagName("img");
    // for (let *variable* of *list*)
    for (let pic of pictures){
        pic.src="flower.jpg";
    }
    if(toggle==false){
        test_text.style="color:red";
        test_text.style.border="3px dashed rbg(66, 112, 87)";
        toggle=true;
        window.alert("KLAXON SOUNDS");
    } else{
        var color = test_text.style.getPropertyValue("color");
        test_text.innerHTML += '' + color;
        test_text.style.removeProperty("color");
        toggle=false;
        test_text.style.setProperty("border", "10px dashed rgb(112, 66, 87)");
        window.open("https://csszengarden.com/");
    }
}
window.confirm("Continue?")
