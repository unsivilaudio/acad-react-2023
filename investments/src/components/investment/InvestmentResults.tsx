import { type ReactNode } from 'react';
import {
    calculateInvestmentResults,
    formatter,
    type InvestmentInput,
} from '@/util/investment';

type YearlyResult = {
    year: number;
    value: number;
    yearlyInterest: number;
    accumulatedInterest: number;
    investedCapital: number;
};

type InvestmentResultsProps = {
    userInput: InvestmentInput;
};

export default function InvestmentResults({
    userInput,
}: InvestmentResultsProps) {
    const format = formatter.format;
    const yearlyResults = calculateInvestmentResults(userInput);

    let resultContent: ReactNode;
    if (yearlyResults.length) {
        resultContent = yearlyResults
            .reduce((acc, result) => {
                acc.push({
                    year: result.year,
                    value: result.valueEndOfYear,
                    yearlyInterest: result.interest,
                    accumulatedInterest:
                        result.interest +
                        acc.reduce((a: number, b) => a + b.yearlyInterest, 0),
                    investedCapital:
                        acc.reduce((a) => a + userInput.annualInvestment, 0) +
                        userInput.annualInvestment +
                        userInput.initialInvestment,
                });
                return acc;
            }, [] as YearlyResult[])
            .map((result) => (
                <tr key={result.year}>
                    <td className='py-3 text-center'>{result.year}</td>
                    <td className='py-3'>{format(result.value)}</td>
                    <td className='py-3'>{format(result.yearlyInterest)}</td>
                    <td className='py-3'>
                        {format(result.accumulatedInterest)}
                    </td>
                    <td className='py-3'>{format(result.investedCapital)}</td>
                </tr>
            ));
    }

    return (
        <table className='mx-auto my-8 max-w-[50rem] table-fixed border-spacing-4 p-4 text-right'>
            <thead className='text-sm font-semibold text-[#83e6c0]'>
                <tr>
                    <td>Year</td>
                    <td className='pl-4'>Investment Value</td>
                    <td className='pl-4'>Interest (Year)</td>
                    <td className='pl-4'>Total Interest</td>
                    <td className='pl-4'>Invested Capital</td>
                </tr>
            </thead>

            <tbody className='font-sm font-display text-[#c2e9e0]'>
                {resultContent !== null ? resultContent : null}
                {!resultContent && (
                    <tr className='mt-4'>
                        <td colSpan={5}>
                            <p>Please submit new data to see results.</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
