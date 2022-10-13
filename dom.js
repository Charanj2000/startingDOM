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


//GETELEMENTSBYCLASSNAME//
var items =  document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2 ";
items[1].style.fontWeight='bold';
 items[1].style.backgroundColor='yellow'; 
 items[2].style.backgroundColor='green'; 
for(var i=0 ; i< items.length ; i++){
    items[i].style.fontWeight='bold';
}
