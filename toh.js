//Question 11

function TOH(n, source, dest, temp){
  if(n === 0){
    return;
  }
  
  if(n >= 1){ 
    TOH(n-1, source, temp, dest);  
    print(source, dest); 
    TOH(n-1, temp, dest, source);  
  }
   
}

function print(S, D){
  console.log(`${S} -> ${D}`);  
}

TOH(3,'A','C','B');