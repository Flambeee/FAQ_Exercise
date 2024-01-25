var i=1;

function Expand()
{
    if (i % 2 == 0){

        document.getElementById("pulsante1").src="assets/images/icon-plus.svg";
        document.getElementById("risposta1").innerText= " ";
    }

    else{

        document.getElementById("pulsante1").src="assets/images/icon-minus.svg";
        document.getElementById("risposta1").innerText="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    }
    i++;
}