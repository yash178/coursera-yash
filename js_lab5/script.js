var ar1=new Array();
var ar2=new Array();

ar1=[5,6,2,3,9,34,61];
ar2=[2,3,5,7,9,8,13,65,12,45,54];

console.log(ar1);
console.log(ar2);

myfunc(ar1,ar2,'+');
myfunc(ar1,ar2,'-');
function myfunc(ar1,ar2,op)
{
  if (op=='+') 
  {
    console.log("Addition:");
    var x=find_largest(ar1);
    var y=find_largest(ar2);
    console.log("Largest number of array one is "+x);
    console.log("Largest number of array two is "+y);
    console.log("Addition is "+(x+y));
  }
  else if (op=='-') 
  {
    console.log("Subtraction:");
    var x=find_lowest(ar1);
    var y=find_lowest(ar2);
    console.log("Smallest number of array one is "+x);
    console.log("Smallest number of array two is "+y);
    if(x>y)
      console.log("Difference is "+(x-y));
    else
      console.log("Difference is "+(y-x));
  }
}

function find_lowest(ar3)
{
  var x=ar3[0];
  for (var i = 0; i <=ar3.length; i++) 
  {
    if(ar3[i]<x)
    {
      x=ar3[i];
    }
  }
  return x;
}

function find_largest(ar3)
{
  var x=ar3[0];
  for (var i = 0; i <=ar3.length; i++) 
  {
    if(ar3[i]>x)
    {
      x=ar3[i];
    }
  }
  return x;
}