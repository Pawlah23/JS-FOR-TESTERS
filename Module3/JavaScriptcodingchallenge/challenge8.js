function ifBoolean (num){
    if(num % 10 === 0){
      return true;  
    }else{
      return false; 
    }
  }
  console.log(ifBoolean(10))
  console.log(ifBoolean(20))
  console.log(ifBoolean(0))
  console.log(ifBoolean(3))