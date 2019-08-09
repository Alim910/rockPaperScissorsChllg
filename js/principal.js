
var yourWins=0; pcWins = 0;
    function start(opcion) {
    	 /*        PRINT YOUR CHOICE     */
    	  document.getElementById("youChoss").innerHTML = opcion;
          var currentClass = document.getElementById("youChoss").className;
          if(opcion=="Piedra"){
    	   document.getElementById("youChoss").className = document.getElementById("youChoss").className.replace(new RegExp('(?:^|\\s)'+ currentClass + '(?:\\s|$)'), 'strong_rock');
          }
          if(opcion=="Papel"){     
          document.getElementById("youChoss").className = document.getElementById("youChoss").className.replace(new RegExp('(?:^|\\s)'+ currentClass + '(?:\\s|$)'), 'strong_paper');
          }
          if(opcion=="Tijera"){
          	document.getElementById("youChoss").className = document.getElementById("youChoss").className.replace(new RegExp('(?:^|\\s)'+ currentClass + '(?:\\s|$)'), 'strong_scissors');
          }  
          opcionPC = optionPC(); 
          var finalResult = checkResults(opcion,opcionPC);
          document.getElementById("results").innerHTML = finalResult;
          document.getElementById("yourscore").innerHTML = yourWins;
          document.getElementById("pcscore").innerHTML = pcWins;
    }


     function optionPC() {
     	const pcChoices =['Piedra','Papel','Tijera'];
        var getRandomChoce = Math.floor(Math.random()*3);
        var randomchoice = pcChoices[getRandomChoce];
         /*        PRINT PC CHOICE     */ 
          document.getElementById("pcChoss").innerHTML = randomchoice;
          var currentClassPC = document.getElementById("pcChoss").className;
          if(randomchoice=="Piedra"){
    	   document.getElementById("pcChoss").className = document.getElementById("pcChoss").className.replace(new RegExp('(?:^|\\s)'+ currentClassPC + '(?:\\s|$)'), 'strong_rock');
          }
          if(randomchoice=="Papel"){     
          document.getElementById("pcChoss").className = document.getElementById("pcChoss").className.replace(new RegExp('(?:^|\\s)'+ currentClassPC + '(?:\\s|$)'), 'strong_paper');
          }
          if(randomchoice=="Tijera"){
          	document.getElementById("pcChoss").className = document.getElementById("pcChoss").className.replace(new RegExp('(?:^|\\s)'+ currentClassPC + '(?:\\s|$)'), 'strong_scissors');
          }   
          
         return pcChoices[getRandomChoce];

    }

     function checkResults(value1,value2) {
     	var response = "";
         if(value1 != value2){
          switch(value1+value2){
          	case"PiedraTijera":
          	case"PapelPiedra":
          	case"TijeraPapel":
          	response = "GANASTE :D";
            yourWins++;
          	break;
          	case"PiedraPapel":
          	case"PapelTijera":
          	case"TijeraPiedra":
          	response = "PERDISTE :c";
          	pcWins++;
          	break;
          }
      }else{
      response = "EMPATASTE :/";
      }
       return response;
    }