//Change string case
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

//Change date
function dateToYMD(date,separator) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return (y + separator + (m<=9 ? '0' + m : m) + separator + (d <= 9 ? '0' + d : d));
}

function datetoDMY(date,separator){
  if (!isNaN(date)) {
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    return (dd<10 ? '0'+dd : dd)+ separator + (mm<10 ? '0'+mm : mm) + separator + yyyy;
  }
  else{
    return false
  }
}

function generatepassword(longeur){
 return Math.random().toString(36).substr(2, longeur);
}

//Generate random alphanumeric
function generaterandom(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

//Unique values in Array
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function toTitleCase(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}