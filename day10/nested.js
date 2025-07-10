


    let num=prompt("enter your number");
    if(num>0){
        console.log("postive number");
        if(num%2==0){
            alert("it is a positive and even");
        }else{
            alert("positive and odd");
        }

    }else if(num<0){
        if(num%2==1){
            alert("it is negaitive and odd");
        }else{
            alert("negative and odd")
        }
    }
    else{
        alert("it is zero");
    }
   