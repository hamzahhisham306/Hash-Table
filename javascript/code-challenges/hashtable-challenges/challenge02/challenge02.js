// Write here the code challenge solution
function foundDuplicateString(str){
    let c;
    let lowerStr=str.toLowerCase();
    let spliteStr=lowerStr.split(" ");
    for(let  i = 0; i < spliteStr.length; i++) {  
     c = 1;  
     for(let  j = i+1; j < spliteStr.length; j++) {  
         if(spliteStr[i]==(spliteStr[j])) {  
             c++;  
             spliteStr[j] = "0";  
         }  
     }  
       
     if(c > 1 && spliteStr[i] != "0"){
         return spliteStr[i];  
     }
     else{
       return 'not found'
     }
   }  
   }


   module.exports={
    foundDuplicateString
   }