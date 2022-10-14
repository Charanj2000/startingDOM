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
/* var titles = document.querySelectorAll('.title');
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
   

}*/


// TRANSVERSING THE DOM//
/* var itemList =document.querySelector('#items'); */
//parentNode
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";
console.log(itemList.parentNode.parentNode); */

//parentElement//
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement) */

//childnodes//
//console.log(itemList.childNodes);

/* console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ='yellow' */

//firstchild
/* console.log(itemList.firstChild); */

//firstelementchild
/* console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='hello' */


//lastchild
/* console.log(itemList.lastChild); */

//firstelementchild
/* console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='hello' */

//nextsibling
/* console.log(itemList.nextSibling); */
//nextelementsibling
/* console.log(itemList.nextElementSibling); */

// previousSibling
/* console.log(itemList.previousSibling); */
//previousElementSibling
/* console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='coral' */

//createElement

//create a div 
/* var newdiv=document.createElement('div'); */

//add class
/* newdiv.className='hello'; */

//add id
/* newdiv.id='hello1'; */

//add attr
/* newdiv.setAttribute('title','hello div'); */

//create text node
/* var newdivtext=document.createTextNode('hello world'); */

//add text to div
/* newdiv.appendChild(newdivtext);

var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newdiv)

container.insertBefore(newdiv ,h1) */


/* parentNode = document.getElementById('items')
parentNode.innerHTML ='<li>Hello world</li>' +parentNode.innerHTML */

var form = document.getElementById('addForm');
var itemlist =document.getElementById('items');
var filter=document.getElementById('filter');




//form submit event 
form.addEventListener('submit' , addItem);
//delete event
itemlist.addEventListener('click',removeitem);
//filter event
filter.addEventListener('keyup',filteritems);


//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newitem = document.getElementById('item').value;

    var newdescription = document.getElementById('description').value;

    //create new li element
    var li= document.createElement('li');

    //add class
    li.className ='list-group-item';
    console.log(li);

    

    //add text node with input value
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(" " +newdescription));
    
    
    //create del button elememtn
    var delbtn = document.createElement('button');
    
    //add classes to del button
    delbtn.className='btn btn-danger btn-sm float-right delete'

    //appendtext node
    delbtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(delbtn);

    //append li to list 
    itemlist.appendChild(li);

    //create edit button elememtn
    var editbtn = document.createElement('button');
    
    //add classes to edit button
    editbtn.className='btn btn-danger btn-sm float-right edit'

    //appendtext node
    editbtn.appendChild(document.createTextNode('EDIT'));

    // append button to li
    li.appendChild(editbtn);

    //append li to list 
    itemlist.appendChild(li);

    

}
function removeitem(e){
    if(e.target.classList.contains('delete')){
        console.log(1);
        if(confirm("are you sure ?")){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
            
        }
    }
}

// filter items
function filteritems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items= itemlist.getElementsByTagName('li');
    console.log(items)
    


    //convert to an array
    Array.from(items).forEach(function(item){
         var itemName =item.firstChild.textContent;
         var description=item.childNodes[1].textContent;
         console.log(itemName);
         if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1 ){
            item.style.display= 'block';
         }
         else{
            item.style.display= 'none';
         }
    })
}
