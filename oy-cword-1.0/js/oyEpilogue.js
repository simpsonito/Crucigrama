if (!oygInit){ 
	oygError = 
		"Hubo un error al solicitar los datos del crucigrama al servidor.\n" + 
		"Por favor intÚntelo de nuevo en breve o env\xEDenos una nota sobre el problema."
} else {						
	oygBind(oygCrosswordPuzzle);
}
if (oygError){
	alert(oygError);
}	