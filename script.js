function solve(v)
{
  var val=document.getElementById("res_screen");
  val.value+=v;
}

function Clear()
{
   var n =document.getElementById("res_screen");
   n.value='';
}

function back()
{
    var num= document.getElementById('res_screen');
    num.value = num.value.slice(0,-1);
}


function result()
{
  var input=document.getElementById("res_screen");
  input.value=eval(input.value);


}