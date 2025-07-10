let name=prompt("enter your name");
let age= Number(prompt(name+" enter age"));
switch(age){
    case age:{
        if(age<18){ 
        alert("not eligible for vote");
        break;
         }
    }
    case age:{
        if(age>18 && age<65){ 
        alert("eligible for vote");
        break;
         }
    }
    case age:{
        if(age>=65){ 
        alert("senior citizen");
        break;
         }
    }
    default:{
        alert("enter crct number");
    }
}