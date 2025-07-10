var x=10;
var y=20;
var z=10;
var a=13;
//arthmetic 
console.log("x+y",x+y);
console.log("x-y",x-y);
console.log("x*y",x*y);
console.log("x/y",x/y);
console.log("x%y",x%y);
console.log("x**y",x**y);
console.log("x>y",x>y);
console.log("x<y",x<y);
// relational oper//
console.log("x<=y",x<=y);
console.log("x>=y",x>=y);
console.log("x!=y",x!=y);
console.log("x=+y",x=+y);
console.log("x-=",x-=y);
console.log("x===y",x===y);
console.log("x==y",x==y);
console.log("x%=y",x%=y);
//logical
console.log("a&&z",a<20 && z>25);
console.log("a||z",a<20 || z>25);
console.log("!y",!y);
var r=a&&z;
console.log(r);
let age=prompt("enter your age");
if(age>=60)
{
    console.log("eligible");
}
else{
    console.log("not eligible");
}
let marks=prompt("enter marks");
if(marks>=90) 
{
   console.log("Destintion"); 

}
else if(marks>80){
    console.log("passed");
}
else{
    console.log("fail");
}