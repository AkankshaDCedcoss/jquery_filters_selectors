var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
$(document).ready(function () {
  $("#search1").click(function () {
    var x = $("#os :selected").val();
    var y = $("#brand :selected").val();
    console.log(y);
    html = "<table><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>Remove</th></tr>";
    for (var i = 0; i < products.length; i++) {
      if (products[i].os == x || products[i].brand == y) {
        html +=
          "<tr class='listRow'><td>" +
          products[i].id +
          "</td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].brand +
          "</td><td>" +
          products[i].os +
          "</td><td><button id='button1'>Remove X</button></td></tr>";
      }
	  else if (products[i].os == x && products[i].brand == y)
	  {
		
		alert("selected Operating system and branch not MATCHED");
	  }
	  else{
		display(products);
	  }
	  
	   
	  html += "</table>";
	  document.getElementById("display").innerHTML = html;
	  
	}

	
  });
});
function display(products) {
  html =
    "<table><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>Remove</th></tr>";
  for (var i = 0; i < products.length; i++) {
    html +=
      "<tr><td>" +
      products[i].id +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].brand +
      "</td><td>" +
      products[i].os +
      "</td><td value='10'><button id='button1' onclick='remove("+ products[i].id+")'>Remove X</button></td></tr>";
  }
  html += "</table>";
  document.getElementById("display").innerHTML = html;
  console.log(html);
}
$("#search2").click(function ()
{
	var val1 = $("#nameid :selected").val();
	var val2 = document.getElementById("select1").value;
	// console.log(val1=='Name');

	
if(val1=='ID')
{
var val3=parseInt(val2);
html =
"<table><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>Remove</th></tr>";
	for (var i = 0; i < products.length; i++) {
		if (products[i].id ==val3 ) {
		  html +=
			"<tr><td>" +
			products[i].id +
			"</td><td>" +
			products[i].name +
			"</td><td>" +
			products[i].brand +
			"</td><td>" +
			products[i].os +
			"</td><td><button id='button1'>Remove X</button></td></tr>";
		}
		

		}
		html += "</table>";
  document.getElementById("display").innerHTML = html;
	}


if(val1=='Name'){
	// var val4=toString(val2);
	console.log(val2);
	html =
"<table><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>Remove</th></tr>";
	for (var i = 0; i < products.length; i++) {
		// console.log(val4);
		if (products[i].name == val2 ) {
			
		  html +=
			"<tr><td>" +
			products[i].id +
			"</td><td>" +
			products[i].name +
			"</td><td>" +
			products[i].brand +
			"</td><td>" +
			products[i].os +
			"</td><td><button id='button1'>Remove X</button></td></tr>";
		}
		

		}
		html += "</table>";
  		document.getElementById("display").innerHTML = html;
}


});
function remove(m)
{console.log(m);
	var newArray=[];
	newArray=products;

	

	html =
"<table><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>Remove</th></tr>";
	for(var i=0;i <products.length;i++)
	
	// console.log(m);
{	    if(products[i].id == m)
	{
		continue;
	}

	      
		html +=
		"<tr><td>" +
		products[i].id +
		"</td><td>" +
		products[i].name +
		"</td><td>" +
		products[i].brand +
		"</td><td>" +
		products[i].os +
		"</td><td><button id='button1'>Remove X</button></td></tr>";
		newArray-=products;
	}
	html += "</table>";
	
  		document.getElementById("display").innerHTML = html;
		

}

	
	