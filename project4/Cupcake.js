function SV(){
	document.getElementById("Cupcake").src="Vanilla.png";
}

function SC(){
	document.getElementById("Cupcake").src="Chocolate.png";
}

function SO(){
	document.getElementById("Cupcake").src="Orange.png";
}

function check()
{
	//These variables contain the amount of ingredients for 6 cakes
	var Butter=120;
	var Sugar=120;
	var Flour=120;
	var Eggs=1;
	var Extract=0.5;
	var x= document.getElementById("NumCakes").value;
	if (x==6) {
		document.getElementById("Butter").innerHTML=Butter;
		document.getElementById("Sugar").innerHTML=Sugar;
		document.getElementById("Flour").innerHTML=Flour;
		document.getElementById("Eggs").innerHTML=Eggs;
		document.getElementById("Extract").innerHTML=Extract;
	} else if (x==12) {
		document.getElementById("Butter").innerHTML=2*Butter;
		document.getElementById("Sugar").innerHTML=2*Sugar;
		document.getElementById("Flour").innerHTML=2*Flour;
		document.getElementById("Eggs").innerHTML=2*Eggs;
		document.getElementById("Extract").innerHTML=2*Extract;
	} else if (x==18) {
		document.getElementById("Butter").innerHTML=3*Butter;
		document.getElementById("Sugar").innerHTML=3*Sugar;
		document.getElementById("Flour").innerHTML=3*Flour;
		document.getElementById("Eggs").innerHTML=3*Eggs;
		document.getElementById("Extract").innerHTML=3*Extract;
	} else if (x==24) {
		document.getElementById("Butter").innerHTML=4*Butter;
		document.getElementById("Sugar").innerHTML=4*Sugar;
		document.getElementById("Flour").innerHTML=4*Flour;
		document.getElementById("Eggs").innerHTML=4*Eggs;
		document.getElementById("Extract").innerHTML=4*Extract;
	} else {
		alert("Cupackes can only be baked in batches of 6, 12, 18 or 24");
	}
}




