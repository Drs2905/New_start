const max=prompt("enter yoyr number");

const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess the no ");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("yo r right");
        break;
    
    }
    else{
        guess=prompt("yur guess was wrong.please try again");
    }
}