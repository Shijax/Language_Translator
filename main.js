/* Spanish */

{“seasons”:”temporadas", “areetings”:”saludos", "and”:”y”, "happy":"felices", “holidays”:”fiestas”}

/* Croatian */

{“seasons”:”godišnje", “areetings”:”pozdrave", "and”:”I”, "happy":"sretne", “holidays”:”praznike”}

/* Italian */

{“seasons”:”saluti", “areetings”:”stagionali", "and”:”e”, "happy":"buone", “holidays”:”feste”}



var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}