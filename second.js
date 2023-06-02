function result()
{
    var res;
var Markobtain=parseFloat(document.getElementById("markobttxt").value)
var totalmarks=parseFloat(document.getElementById("tmarkstxt").value)
var per=(Markobtain*100)/totalmarks;

if (per<40)
{
document.getElementById("resulttxt").value="failed";
res="failed";

}

else if (per<50)

{

document.getElementById("resulttxt").value="D-grade";
res="D-grade";

}

else if (per<60)

{

document.getElementById("resulttxt").value="C-grade";
res="C-grade";

}

else if (per<70)

{

document.getElementById("resulttxt").value="B-grade";
res="B-grade";

}

else if (per<80)

{

document.getElementById("resulttxt").value="A-grade";
res="A-grade";

}

else if (per<100)

{

document.getElementById("resulttxt").value="A1";
res="A1";

}



var name=document.getElementById("nametxt").value;
var rollnum=document.getElementById("rolltxt").value;
document.getElementById("percentagetxt").value=per;
document.getElementById("txtarea").value=`MR: ${name} YOUR ROLLNUM IS  ${rollnum} YOUR RESULT IS ${res} `;

}








