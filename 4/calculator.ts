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
}

function printResult(results) {
    // Output the result data
}

const results = calculateInvestment(...)

printResult(results)