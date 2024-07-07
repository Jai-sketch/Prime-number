document.getElementById('calculateButton').addEventListener('click', function () {
    const num = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num) || num < 2) {
        resultDiv.textContent = 'Please enter a number greater than 1.';
        return;
    }

    const primes = calculatePrimes(num);
    resultDiv.textContent = `Prime numbers up to ${num}: ${primes.join(', ')}`;
});

function calculatePrimes(max) {
    const sieve = [];
    const primes = [];
    for (let i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (let j = i * 2; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
