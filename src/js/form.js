// make the expense button click open the expense input section and disable the other income button and box 

const expenseButton = document.querySelector('#addExpense');
const expenseInput = document.querySelector('#expenseBox');
const otherIncomeButton = document.querySelector('#addIncome');
const otherIncomeInput = document.querySelector('#incomeBox');
const expenseOrIncome = document.querySelector('#addExpenseOrIncome');

expenseButton.addEventListener('click', () => {
    if(otherIncomeButton.disabled == true){
        expenseInput.classList.add('hidden');
        expenseButton.classList.remove("clicked");
        expenseOrIncome.classList.remove('hidden');
        expenseOrIncome.classList.add('show');
        otherIncomeButton.classList.remove('hidden');
        otherIncomeButton.disabled = false;
    }
    else{
        expenseOrIncome.classList.remove('show');
        expenseOrIncome.classList.add('hidden');
        expenseInput.classList.remove('hidden');
        expenseButton.classList.add("clicked");
        otherIncomeInput.classList.add('hidden');
        otherIncomeButton.classList.add('hidden');
        otherIncomeButton.disabled = true;
    }
})

// make the other income button click open the other income input section and disable the expense button and box

otherIncomeButton.addEventListener('click', () => {
    if(expenseButton.disabled == true){
        otherIncomeInput.classList.add('hidden');
        otherIncomeButton.classList.remove("clicked");
        expenseOrIncome.classList.remove('hidden');
        expenseOrIncome.classList.add('show');
        expenseButton.classList.remove('hidden');
        expenseButton.disabled = false;
    }
    else{
        otherIncomeInput.classList.remove('hidden');
        otherIncomeButton.classList.add("clicked");
        expenseInput.classList.add('hidden');
        expenseOrIncome.classList.remove('show');
        expenseOrIncome.classList.add('hidden');
        expenseButton.classList.add('hidden');
        expenseButton.disabled = true;
    }
})

// addtag button which will read the value of addtag text field and create a button like that on each click and also store that value somewhere

const addTagButton = document.querySelector('#addTagButton');
const addTagInput = document.querySelector('#addTagInput');
const tagContainer = document.querySelector('#tagContainer');

addTagButton.addEventListener('click', () => {
    const tag = document.createElement('button');
    tag.classList.add('tag');
    tag.textContent = addTagInput.value;
    tagContainer.appendChild(tag);
    addTagInput.value = "";
})