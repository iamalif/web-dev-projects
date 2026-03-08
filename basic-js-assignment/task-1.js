function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid input"
    }
    else {
        const surplusEarnings = income - expenses;
        const tax = surplusEarnings * 0.2;
        return tax;
    }
}
console.log(calculateTax(200,500))