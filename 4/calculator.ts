// Investment data structure:
// - initial amount
// - annual contribution
// - expected return
// - duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, duration, expectedReturn } = data;

    if (initialAmount < 0) {
        return 'Initial investment amount must be zero or greater.'
    }

    if (duration <= 0){
        return 'Invalid number of years provided.'
    }
    if (expectedReturn < 0){
        return 'Expected return must be zero or greater.'
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    
    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }

    return annualResults;
}

function printResult(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total interest earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('--------------------------------');
    }
}

const results = calculateInvestment(...)

printResult(results);