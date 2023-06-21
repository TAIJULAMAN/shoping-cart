// phone
//<button id="btn-phone-plus"</button>
//<input id="phone-number-field" value="1">
//<button id="btn-phone-minus"</button>
//<h5>$<span id="phone-total">1219</span></h5>
// case
//<button id="btn-case-plus"</button>
//<input id="case-number-field" value="1">
//<button id="btn-case-minus"</button>
//<h5>$<span id="case-total">59</span></h5>
// total
// <h5>$<span id="sub-total">1278</span></h5>
// <h5>$<span id="tax-amount">0</span></h5>
// <h5>$<span id="final-total">1278</span></h5> 


function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease === true){newCaseNumber = previousCaseNumber + 1;}
    else{newCaseNumber = previousCaseNumber - 1;}

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;   }

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;} 

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false); 
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});
