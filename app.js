console.log("secret message")

function showOtter(whichOtter){
	
	console.log('show otter function');
	console.log(whichOtter);
	var otter1 = document.querySelector('#otter'+whichOtter)
	
	console.log(otter1);
	
	if(otter1.style.display=='block'){
		otter1.style.display='None';
	} else {
		otter1.style.display = 'block';}
}