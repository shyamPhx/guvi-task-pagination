const container1 = createDomElement('div', 'container mt-5');
const row1 = createDomElement('div', 'row') //document.createElement('div');
const rowCol1 = createDomElement('div', 'col-md-12 col-12')//document.createElement('div');

const table1 = createDomElement('table', 'mt-5', 'outputTable');



rowCol1.append(table1);
row1.append(rowCol1);
container1.append(row1);
document.body.append(container1);


const container2 = createDomElement('div', 'container mt-5');
const row2 = createDomElement('div', 'row') //document.createElement('div');
const rowCol2 = createDomElement('div', 'col-md-12 col-12')//document.createElement('div');

const table2 = createDomElement('table', 'mt-5 position-abs', 'inputTable');


const tr2 = createDomElement('tr');

const tdPrevious = createDomElement('td', 'section first');
const tdPreviousText = document.createTextNode('<-');
tdPrevious.append(tdPreviousText);
tdPrevious.setAttribute('onclick', 'showPrevious()');

const tr2td1 = createDomElement('td', 'section first', '1');
const tr2td1Text = document.createTextNode('1-10');
tr2td1.append(tr2td1Text);
tr2td1.setAttribute('onclick', 'showData(1)');

const tr2td2 = createDomElement('td', 'section first', '2');
const tr2td2Text = document.createTextNode('11-20');
tr2td2.append(tr2td2Text);
tr2td2.setAttribute('onclick', 'showData(2)');

const tr2td3 = createDomElement('td', 'section first', '3');
const tr2td3Text = document.createTextNode('21-30');
tr2td3.append(tr2td3Text);
tr2td3.setAttribute('onclick', 'showData(3)');

const tr2td4 = createDomElement('td', 'section first', '4');
const tr2td4Text = document.createTextNode('31-40');
tr2td4.append(tr2td4Text);
tr2td4.setAttribute('onclick', 'showData(4)');

const tr2td5 = createDomElement('td', 'section first', '5');
const tr2td5Text = document.createTextNode('41-50');
tr2td5.append(tr2td5Text);
tr2td5.setAttribute('onclick', 'showData(5)');

const tr2td6 = createDomElement('td', 'section first', '6');
const tr2td6Text = document.createTextNode('51-60');
tr2td6.append(tr2td6Text);
tr2td6.setAttribute('onclick', 'showData(6)');

const tr2td7 = createDomElement('td', 'section first', '7');
const tr2td7Text = document.createTextNode('61-70');
tr2td7.append(tr2td7Text);
tr2td7.setAttribute('onclick', 'showData(7)');

const tr2td8 = createDomElement('td', 'section first', '8');
const tr2td8Text = document.createTextNode('71-80');
tr2td8.append(tr2td8Text);
tr2td8.setAttribute('onclick', 'showData(8)');

const tr2td9 = createDomElement('td', 'section first', '9');
const tr2td9Text = document.createTextNode('81-90');
tr2td9.append(tr2td9Text);
tr2td9.setAttribute('onclick', 'showData(9)');

const tr2td10 = createDomElement('td', 'section first', '10');
const tr2td10Text = document.createTextNode('91-100');
tr2td10.append(tr2td10Text);
tr2td10.setAttribute('onclick', 'showData(10)');

const tdNext = createDomElement('td', 'section first');
const tdNextText = document.createTextNode('->');
tdNext.append(tdNextText);
tdNext.setAttribute('onclick', 'showNext()');

tr2.append(tdPrevious);
tr2.append(tr2td1);
tr2.append(tr2td2);
tr2.append(tr2td3);
tr2.append(tr2td4);
tr2.append(tr2td5);
tr2.append(tr2td6);
tr2.append(tr2td7);
tr2.append(tr2td8);
tr2.append(tr2td9);
tr2.append(tr2td10);
tr2.append(tdNext);

table2.append(tr2);
rowCol2.append(table2);
row2.append(rowCol2);
container2.append(row2);
document.body.append(container2);
function createDomElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}