




document.getElementById('calculate-button').addEventListener('click', function () {

    const userInput = document.getElementById('user-income').value;
    const userInputValue = parseInt(userInput);

    const userFoodExpense = document.getElementById('food-expense').value;
    const userFoodExpenseValue = parseInt(userFoodExpense);

    const userRentExpense = document.getElementById('rent-expense').value;
    const userRentExpenseValue = parseInt(userRentExpense);

    const userClothExpense = document.getElementById('cloth-expense').value;
    const userClothExpenseValue = parseInt(userClothExpense);


    const totalExpense = userFoodExpenseValue + userRentExpenseValue + userClothExpenseValue;
    const newBalance = userInputValue - totalExpense;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpense;

    const balance = document.getElementById('balance');
    balance.innerText = newBalance;
    const totalBalance = parseInt(newBalance);

    //saving calculation
    document.getElementById('save-button').addEventListener('click', function () {
        const saveInput = document.getElementById('save-input');
        const saveInputText = saveInput.value;
        const saveInputValue = parseFloat(saveInputText);

        const userSaving = (totalBalance * saveInputValue) / 100;
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = userSaving;

        const amountBalance = totalBalance - userSaving;
        const afterSavingAmountText = document.getElementById('after-saving-balance');
        afterSavingAmountText.innerText = amountBalance;

        // console.log(userSaving)
    })

    // console.log(totalBalance);
});