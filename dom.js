//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
/* console.log(document.domain);
console.log(document.URL)
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.forms[0]);
console.log(document.links); */

//GETELEMENTBYID//
/* console.log(document.getElementById('header-title')); */
/* var headerTitle = document.getElementById('header-title'); */
var header= document.getElementById('main-header');
/* console.log(headerTitle); */
/* headerTitle.textContent='Hello' */

/* headerTitle.innerHTML ='<h3>To-do</h3>' */
header.style.borderBottom ='dotted 3px #000';



document.getElementById("add").style.color = "green"
document.getElementById("add").style.fontWeight = "bold"