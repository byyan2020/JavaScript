//Listen for submit

document.querySelector('#loan-form').addEventListener('submit', event => {
    // Hide Result.
    document.querySelector('#result').style.display = 'none';

    // Show loading gif.
    document.querySelector('#loading').style.display = 'block';

    // Hide gif and show result.
    setTimeout(calculateResults, 1500);

    event.preventDefault();
});

function calculateResults() {
    // Hide loading gif
    document.querySelector('#loading').style.display = 'none';

    // UI Vars.
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Get input value.
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calcultedPayments = parseFloat(years.value) * 12;
    
    // Compute monthly payment.
    const x = Math.pow(1 + calculatedInterest, calcultedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (Number.isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcultedPayments).toFixed(2);
        totalInterest.value = (monthly * calcultedPayments - principal).toFixed(2);

        // Show result
        document.querySelector('#result').style.display = 'block';

    } else {
        showError("Please check your input");
    }
}

function showError(error) {
    // Create error div.
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error div.
    const heading = document.querySelector('.heading');
    const card = document.querySelector('.card');
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds.
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}