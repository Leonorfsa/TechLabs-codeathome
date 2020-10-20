/////////////setting options for To and From inputs///////////////////
window.onload = function(){
  var destinations = Object.keys(countries_data);
  var options = '';

  for (var i = 0; i < destinations.length; i++) {
    options += '<option value="' + destinations[i] + '"/>';
  }
  document.getElementById('FromButton').innerHTML = options;
  document.getElementById('ToButton').innerHTML = options;
}
////////////////////////////////////////////////////////////////////



///////////////////submit button function///////////////////////////
function submitFunction(){
  var destinations = Object.keys(countries_data);
  from_button = document.getElementById("id_button_From");
  to_button   = document.getElementById("id_button_To");

  if(destinations.includes(to_button.value) && destinations.includes(from_button.value) && (to_button.value != from_button.value)){
    var form = document.getElementById("id_form");
    form.action = "pages/FromTo.html";
  }
  else{
    alert("Wrong input!!! you idiot");
  }
}
//////////////////////////////////////////////////////////////////////



///////////////////From To info text function///////////////////////////
function infoFunction(){
  var info = document.getElementById("id_info");
  var urlParams = new URLSearchParams(window.location.search);
  var FromCountry = urlParams.get("FromName");
  var ToCountry =   urlParams.get("ToName");
  var FromCountry_data = countries_data[FromCountry];
  var ToCountry_data = countries_data[ToCountry];
  var CountryConnection = country_connections[FromCountry+" - "+ToCountry];

  // info.innerHTML = "Just fly from "+FromCountry+" to "+ToCountry+" you are safe=)";
  // info.innerHTML = "Be sure to check the website "+ToCountry_data.url+" for latest info";
//   info.innerHTML = "Just fly from " + FromCountry + " to " + ToCountry + " just don't forget to " + CountryConnection;

  items_table = document.getElementById('items_table');
  items_table.innerHTML = '<tr><th>' + " Categories" + '</th><th>' + "From: " + FromCountry + '</th><th>' +"To: "+ ToCountry +'</th></tr>'+
	'<tr><td>' + "Entry Regulations" + '</td><td>' + FromCountry_data.Entry + '</td><td>' + ToCountry_data.Entry + '</td></tr>' +
	'<tr><td>' + "Hygiene Regulations" + '</td><td>' + FromCountry_data.Hygiene + '</td><td>' + ToCountry_data.Hygiene + '</td></tr>' +
	'<tr><td>' + "Activity Regulations" + '</td><td>' + FromCountry_data.Activity + '</td><td>' + ToCountry_data.Activity + '</td></tr>' +
	'<tr><td>' + "Further Links" + '</td><td>' + FromCountry_data.Links + '</td><td>' + ToCountry_data.Links + '</td></tr>' +
	'<tr><td>' + "Last Updates:" + '</td><td>' + FromCountry_data.Dates + '</td><td>' + ToCountry_data.Dates + '</td></tr>';
}
//////////////////////////////////////////////////////////////////////