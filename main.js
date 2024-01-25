function Expand()
{
    console.log(document.getElementById("pulsante1").src);
    
    if (document.getElementById("pulsante1").src=="assets/images/icon-minus.svg")
    document.setElementById("pulsante1").src="assets/images/icon-plus.svg";
    else 
    document.setElementById("pulsante1").src="assets/images/icon-minus.svg";
        console.log(document.setElementById("pulsante1").src);
}
