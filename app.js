let inputData = data;
let currentTen = 1;
let previousSection = 1;
populateOutputTable(1);

function showData(index){
  currentTen = index;
  populateOutputTable(index);
}

function showPrevious(){
  if(currentTen !== 1){
    currentTen--;
    showData(currentTen);
  }
}

function showNext(){
  if(currentTen !== 10){
    currentTen++;
    showData(currentTen);
  }
}

function populateOutputTable(index){
  if(previousSection !== 0){
    document.getElementById(previousSection).classList.remove('red');
    document.getElementById(index).classList.add('red');
  }
  previousSection = index;
  document.getElementById('inputTable').classList.remove('position-abs');
  document.getElementById('inputTable').classList.add('position-rel');
  let tr = createDomElement('tr');
  let td1 = createDomElement('td','font-weight-bold');
  let td1Text = document.createTextNode('ID');
  td1.append(td1Text);

  let td2 = createDomElement('td','font-weight-bold');
  let td2Text = document.createTextNode('Email');
  td2.append(td2Text);

  let td3 = createDomElement('td','font-weight-bold');
  let td3Text = document.createTextNode('Name');
  td3.append(td3Text);

  tr.append(td1, td2, td3);
  const outputTable = document.getElementById('outputTable');
  outputTable.innerHTML = '';
  outputTable.append(tr);

  for(let i = (index-1) * 10; i < index*10; i++){
    let tr = createDomElement('tr');
    let td1 = createDomElement('td');
    let td1Text = document.createTextNode(inputData[i].id);
    td1.append(td1Text);

    let td2 = createDomElement('td');
    let td2Text = document.createTextNode(inputData[i].email);
    td2.append(td2Text);

    let td3 = createDomElement('td');
    let td3Text = document.createTextNode(inputData[i].name);
    td3.append(td3Text);

    tr.append(td1,td2,td3);
    outputTable.append(tr);
  }

  
}