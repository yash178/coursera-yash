function getCheckedBox(){
  var sub1 = document.getElementsByName("course")[0].checked;
  var sub2 = document.getElementsByName("course")[1].checked;
  var sub3 = document.getElementsByName("course")[2].checked;
  if (sub1 == true) {
    getname("maths");
  }else if (sub2 == true) {
    getname("os");
  }else if (sub3 == true) {
    getname("wp");
  }
}
function getname (sub) {
  var name =
    document
    .getElementById("name").value; 


  if (name === "")
  {
   var msg = "<h1>Invalid name</h1>";

   document
    .getElementById("marks")
    .innerHTML = msg;
  }

 else if (true)
   {
    if (name === "yash" && sub === "maths") {

      var msg = "<h2>Hello " + name + " your marks in maths are: 90!</h2>";

      document
      .getElementById("marks")
      .innerHTML = msg;
    }

    else if (name === "yash" && sub === "os") {

      var msg = "<h2>Hello " + name + " your marks in os are: 88!</h2>";

      document
      .getElementById("marks")
      .innerHTML = msg;
    }

    else if (name === "yash" && sub === "wp") {

      var msg = "<h2>Hello " + name + " your marks in wp are: 75!</h2>";

      document
      .getElementById("marks")
      .innerHTML = msg;
    }
}

else (true)
 {
    if (name === "marmik" && sub === "maths") {

      var msg = "<h2>Hello " + name + " your marks in maths are: 92!</h2>";

      document
      .getElementById("marks")
      .innerHTML = msg;
    }

    else if (name === "marmik" && sub === "os") {

      var msg = "<h2>Hello " + name + " your marks in os are: 85!</h2>";

      document
      .getElementById("marks")
      .innerHTML = msg;
    }

    else if (name === "marmik" && sub === "wp") {

      var msg = "<h2>Hello " + name + " your marks in wp are: 82!</h2>";

      document
      .getElementById("marks")
      .innerHTML = msg;
    }
}


}

