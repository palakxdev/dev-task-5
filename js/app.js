//function for catch, convert and use user input value
function userInput(inputId) {
    const userInput = document.getElementById(inputId).value;
    const userInputValue = parseInt(userInput);
    return userInputValue;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    //all user input
    const userIncome = userInput('user-income');
    const userFoodExpenseValue = userInput('food-expense');
    const userRentExpenseValue = userInput('rent-expense');
    const userClothExpenseValue = userInput('cloth-expense');

    if (userIncome > 0 && userFoodExpenseValue > 0 && userRentExpenseValue > 0 && userClothExpenseValue > 0) {
        //determine total expense and amount balance
        const totalExpense = userFoodExpenseValue + userRentExpenseValue + userClothExpenseValue;

        if (totalExpense < userIncome) {
            const newBalance = userIncome - totalExpense;
            //set total expense into the total expense field
            const totalExpenses = document.getElementById('total-expenses');
            totalExpenses.innerText = totalExpense;
            //set amount balance into the amount balance field
            const balance = document.getElementById('balance');
            balance.innerText = newBalance;
            const totalBalance = parseInt(newBalance);

            //saving calculation
            document.getElementById('save-button').addEventListener('click', function () {
                //user input for saving
                const saveInputValue = userInput('save-input');

                if (saveInputValue > 0) {
                    //calculate saving amount
                    const userSaving = (userIncome * saveInputValue) / 100;

                    if (newBalance > userSaving) {
                        //set saving amount value into the saving amount field
                        const savingAmountText = document.getElementById('saving-amount');
                        savingAmountText.innerText = userSaving;
                        //calculate remaining amount
                        const amountBalance = newBalance - userSaving;
                        //set remaining amount into the Remaining Balance field
                        const afterSavingAmountText = document.getElementById('after-saving-balance');
                        afterSavingAmountText.innerText = amountBalance;
                    }
                    else {
                        document.getElementById('validation-error3').style.display = 'block';
                    }
                }
                else {
                    document.getElementById('validation-error2').style.display = 'block';
                }
            })
        }
        else {
            document.getElementById('validation-error4').style.display = 'block';
        }
    }
    else {
        document.getElementById('validation-error').style.display = 'block';
    }
});