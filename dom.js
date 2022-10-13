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
/* var header= document.getElementById('main-header'); */
/* console.log(headerTitle); */
/* headerTitle.textContent='Hello' */

/* headerTitle.innerHTML ='<h3>To-do</h3>' */
/* header.style.borderBottom ='dotted 3px #000'; */



/* document.getElementById("add").style.color = "green"
document.getElementById("add").style.fontWeight = "bold" */


//GETELEMENTSBYCLASSNAME//
/* var items =  document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2 ";
items[1].style.fontWeight='bold';
 items[1].style.backgroundColor='yellow'; 
 items[2].style.backgroundColor='green'; 
 items[4].style.backgroundColor='red'; 
for(var i=0 ; i< items.length ; i++){
    items[i].style.fontWeight='bold';
} */

//GETELEMENTSBYTAGNAME//
/* var li =  document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = "hello 2 ";
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow'; 
 
for(var i=0 ; i< li.length ; i++){
    li[i].style.fontWeight='bold';
} */

//QUERYSELECTor//
/* var header =document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value="hello"

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';


var secitem = document.querySelector('.list-group-item:nth-child(2)');
secitem.style.color='coral';


secitem.style.backgroundColor='green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility = 'hidden'; */

//QUERYSELECTORALL//
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent="hello";

var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor ='#f4f4f4';
    even[i].style.backgroundColor ='#ccc';

}

var ite=document.querySelectorAll('.list-group-item');
console.log(ite)
ite[1].style.color='green';

var odd =document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor ='green';
   

}
