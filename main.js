var i=1;

function Expand()
{
    if (i % 2 == 0)
        document.getElementById("pulsante1").src="assets/images/icon-plus.svg";
    else
        document.getElementById("pulsante1").src="assets/images/icon-minus.svg";
    i++;
}
