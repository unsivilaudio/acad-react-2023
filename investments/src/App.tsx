import { useState } from 'react';
import InvestmentForm from '@/components/investment/InvestmentForm';
import InvestmentResults from '@/components/investment/InvestmentResults';
import RootLayout from '@/layout/RootLayout';

export type UserInput = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
};

const INITIAL_USER_INPUT = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 7,
};

function App() {
    const [userInput, setUserInput] = useState<UserInput>(INITIAL_USER_INPUT);

    function handleChangeUserInput(data: UserInput) {
        setUserInput(data);
    }

    function handleResetUserInput() {
        setUserInput(INITIAL_USER_INPUT);
    }

    return (
        <RootLayout>
            <InvestmentForm
                initialData={INITIAL_USER_INPUT}
                onSubmitData={handleChangeUserInput}
                onResetData={handleResetUserInput}
            />
            <InvestmentResults userInput={userInput} />
        </RootLayout>
    );
}

export default App;
