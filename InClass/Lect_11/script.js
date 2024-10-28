// console.time("answer time");

// alert("Click to continue");

// console.timeLog("answer time");

// alert("Do a bunch of other stuff…");

// console.timeEnd("answer time");


// ---------------- Dom (Data object manipulation)  = 13 --------------


//  ----------------- Rading and modified the tree --------------------


function change() {
     // document.getElementsByTagName("h2") returns a NodeList of the <h2>
    // elements in the document, and the first is number 0:
    const header = document.getElementsByTagName('h2').item(0);

    // the first child of header is the text node.
    header.firstChild.data = 'A Dynamic document'

    // Now header is dynamic document.

    // Access the first paragraph .

    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is first paragraph.";

    // Create a new text for the second paragraph

    const newText = document.createTextNode('This is the second paragraph.')

    const newElement = document.createElement("p");


    // create a new element with second paragraph.
    newElement.appendChild(newText);

    // add to newElement in the next para with the appendChlid.
    para.parentNode.appendChild(newElement);


}


// --------------- Creating a tree --------------

const root = document.createElement('html');

consolelog(root);

root.lang = 'en';

const head = document.createElement('head');

const title = document.createElement('title');

title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);

// ----------- find the element of the traversing of the query selector --------------

let documents = document.querySelector('h1');

let inputButtons = document.querySelector('.styled');

let outputButtons = documents.querySelector('.styled_1');

documents.style.backgroundColor = "yellow";
documents.style.padding = "12px";
documents.style.margin = "20px";

inputButtons.style.backgroundColor = "blue";
inputButtons.style.padding = "25px";
inputButtons.style.margin = '12px';
inputButtons.style.borderRadius = '10px';
inputButtons.style.border = 'solid 2px red';

outputButtons.style.backgroundColor = 'pink';
outputButtons.style.padding = '12px';
outputButtons.style.margin = '35px';
outputButtons.style.borderRadius = '10px';
outputButtons.style.border = 'solid 2px red';

function genrateTable() {
    const tb1 = document.createElement('table');
    const tb2 = document.createElement('tbody');
}

// ----------- function calling the genrate table ------------

function genrateTable() {
    //  create a tbale <element> and <tbody> a element.
    const tb1 = document.createElement('table');
    
    const tb1Body = document.getElementById('tbody');

    //  creating all cellss

    for (let i = 0; i < 2; i++) {
        // creates a table row
        const row = document.createElement("tr");
    
        for (let j = 0; j < 2; j++) {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          const cell = document.createElement("td");
          const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
    
        // add the row to the end of the table body
        tblBody.appendChild(row);
      }
    
      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      document.body.appendChild(tbl);
      // sets the border attribute of tbl to '2'
      tbl.setAttribute("border", "2");
    }
    
    











    





