let marks=90;
//&& operator
if(marks>=33 && marks>=80){
    console.log("pass");
    console.log("a+");
}
//"||"operator
let report=75;
if(report>=33 || report>=80){
    console.log("pass");
    console.log("a+");
}

//"!"  operator
if(!(marks<30)){
   console.log("pass") ;
   console.log("a++");
}

if((marks>30 && marks<=80) || !false){
    console.log("pass");
}