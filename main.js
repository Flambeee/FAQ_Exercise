

function Expand(pul,ris)
{
    let p1 = document.getElementById(pul);
    let r1 = document.getElementById(ris);

    if (p1.value == "minus"){

        
        p1.src = "assets/images/icon-plus.svg";
        p1.value = "plus";
        //r1.style.display = 'none';
        r1.classList.toggle('show');
    }

    else{

        
        p1.src = "assets/images/icon-minus.svg";
        p1.value = "minus";
        //r1.style.display = 'block';
        r1.classList.toggle('show');

    }
    
}