function getColor(colorNumber=0)
{
	//making sure is a number and not a string
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}
function getAllStudentColors(){
  
    //your loop here
	let arrayForColor = [];
	for(let i = 0; i<10; i++){
	  let randomColor = Math.floor(Math.random() * 5) + 1;
	arrayForColor.push(getColor(randomColor));
	}
	return arrayForColor;
}
console.log(getAllStudentColors());

