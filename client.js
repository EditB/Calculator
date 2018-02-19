$(document).ready(function(){
  
  var msgDisplay='';
  var numDisplay=''; 
  var dotNotYetUsed = true;
  var calcSignNotYetUsed = true;
  $('#numberInput').html('0');
  
  $('#clearBtn').on('click', function(){
    msgDisplay='';
    numDisplay=''; 
    dotNotYetUsed = true;
    $('#numberInput').html('0');
    $('#messageDiv').html(msgDisplay);
  });
  
  $("#btnDot").on("click", function(){
    if (dotNotYetUsed){
      if (numDisplay === ''){
        numDisplay = '0.';  
      }
      else{
        numDisplay = numDisplay + '.';       
      }    
      $('#numberInput').html(numDisplay);
   
      if (msgDisplay === ''){
        msgDisplay = '0.';  
      }
      else{
        msgDisplay = msgDisplay + '.';       
      }    
      $('#messageDiv').html(msgDisplay);
      
      dotNotYetUsed = false;
      calcSignNotYetUsed = true;
    }
  });

  
  $("#btn0").on("click", function(){
  if(msgDisplay.length < 25){
    //If there's a division sign right before zero, we cannot do the division
if(msgDisplay.charAt(msgDisplay.length-1) == '/'){
   msgDisplay = 'Cannot divide by zero'; 
  $('#messageDiv').html(msgDisplay);
      msgDisplay='';
    numDisplay=''; 
    dotNotYetUsed = true;
    $('#numberInput').html('0');
}
    else{
      numDisplay = numDisplay + '0';  
             $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '0';
      $('#messageDiv').html(msgDisplay);
}    
    calcSignNotYetUsed = true;    
  }  
  });

  
  $("#btn1").on("click", function(){
 if(msgDisplay.length < 25){
    numDisplay = numDisplay + '1';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '1';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
 }   
 });

  
  $("#btn2").on("click", function(){
if (msgDisplay.length < 25){
    numDisplay = numDisplay + '2';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '2';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
}
  });

  
  $("#btn3").on("click", function(){
  
    if (msgDisplay.length < 25){
    
    numDisplay = numDisplay + '3';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '3';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
    }
  });
  
  $("#btn4").on("click", function(){
  if (msgDisplay.length < 25){
    numDisplay = numDisplay + '4';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '4';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
   }
  });

  
  $("#btn5").on("click", function(){
    
    if (msgDisplay.length < 25) {
    numDisplay = numDisplay + '5';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '5';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
    }
      });

  
  $("#btn6").on("click", function(){
   if (msgDisplay.length < 25) {
    numDisplay = numDisplay + '6';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '6';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
   }
    });

  $("#btn7").on("click", function(){
    if (msgDisplay.length < 25) {
    numDisplay = numDisplay + '7';  
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '7';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
      
    }
  });
  
  $("#btn8").on("click", function(){
 
    if (msgDisplay.length < 25) {
    numDisplay = numDisplay + '8';
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '8';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
      
    }
  });
  
  $("#btn9").on("click", function(){
   if (msgDisplay.length <25){
         numDisplay = numDisplay + '9';
    $('#numberInput').html(numDisplay);
    msgDisplay = msgDisplay + '9';
    $('#messageDiv').html(msgDisplay);
    
    calcSignNotYetUsed = true;
   }
  });

 $("#divideBtn").on("click", function(){
   if (calcSignNotYetUsed){
     if(msgDisplay.length > 0) {
      numDisplay = '/'; 
     }
     else{
       numDisplay = '0';
       msgDisplay = '0';
     }     $('#numberInput').html(numDisplay);
//We should check if msgDisplay has a + or - or / sign in it; if yes, add the brackets, otherwise don't.
if (msgDisplay.match(/[\*\-\+\/]/)){
  msgDisplay = '(' + msgDisplay + ')' +  '/';
}     
else{
  msgDisplay = msgDisplay + '/';
}      $('#messageDiv').html(msgDisplay);
   
     numDisplay = '';
     dotNotYetUsed = true;
     calcSignNotYetUsed = false;
   }
  });
  
 $("#btnMultiply").on("click", function(){
   if (calcSignNotYetUsed){
      if(msgDisplay.length > 0) {
      numDisplay = '*'; 
     }
     else{
       numDisplay = '0';
       msgDisplay = '0';
     }  
      $('#numberInput').html(numDisplay);

//We should check if msgDisplay has a + or - or / sign in it; if yes, add the brackets, otherwise don't.
if (msgDisplay.match(/[\*\-\+\/]/)){
  msgDisplay = '(' + msgDisplay + ')' +  '*';
}     
else{
  msgDisplay = msgDisplay + '*';
}           
      $('#messageDiv').html(msgDisplay);
   
     numDisplay = '';
     dotNotYetUsed = true;
     calcSignNotYetUsed = false;
   }
  });

  
   $("#btnMinus").on("click", function(){
   if (calcSignNotYetUsed){
      if(msgDisplay.length > 0) {
      numDisplay = '-'; 
     }
     else{
       numDisplay = '0';
       msgDisplay = '0';
     }  
      $('#numberInput').html(numDisplay);
      msgDisplay = msgDisplay + '-';
      $('#messageDiv').html(msgDisplay);
   
     numDisplay = '';
     dotNotYetUsed = true;
     calcSignNotYetUsed = false;
   }
  });

  
   $("#btnPlus").on("click", function(){
   if (calcSignNotYetUsed){
      if(msgDisplay.length > 0) {
      numDisplay = '+'; 
     }
     else{
       numDisplay = '0';
       msgDisplay = '0';
     }  
      $('#numberInput').html(numDisplay);
      msgDisplay = msgDisplay + '+';
      $('#messageDiv').html(msgDisplay);
   
     numDisplay = '';
     dotNotYetUsed = true;
     calcSignNotYetUsed = false;
   }
  });

  //Note: filter out division by zero and give an error msg: cannot divide by zero!!
  $("#btnEqual").on("click", function(){
    //alert(msgDisplay);
    //alert(eval(msgDisplay));
    var total = eval(msgDisplay);
    //alert(total);
    $('#numberInput').html(total);
    
    //set everything back to normal:
    msgDisplay='';
    numDisplay=''; 
    dotNotYetUsed = true;
    calcSignNotYetUsed = true;
  
  });
  
});