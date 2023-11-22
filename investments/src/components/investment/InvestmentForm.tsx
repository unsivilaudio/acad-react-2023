import type { SyntheticEvent } from 'react';

import type { UserInput } from '@/App';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

type InvestmentFormProps = {
    onSubmitData(data: UserInput): void;
    onResetData(): void;
    initialData: UserInput;
};

export default function InvestmentForm({
    onSubmitData,
    onResetData,
    initialData,
}: InvestmentFormProps) {
    function handleSubmitForm(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData: UserInput = {
            initialInvestment: parseFloat(
                formData.get('initialInvestment') as string,
            ),
            annualInvestment: parseFloat(
                formData.get('annualInvestment') as string,
            ),
            expectedReturn: parseFloat(
                formData.get('expectedReturn') as string,
            ),
            duration: parseFloat(formData.get('duration') as string),
        };
        onSubmitData(userData);
    }

    const { initialInvestment, annualInvestment, expectedReturn, duration } =
        initialData;

    return (
        <Card>
            <form
                className='grid grid-cols-2 gap-8'
                onSubmit={handleSubmitForm}
            >
                <div className='input-group'>
                    <Input.Label htmlFor='initialInvestment'>
                        Initial Investment
                    </Input.Label>
                    <Input
                        type='number'
                        id='initialInvestment'
                        defaultValue={initialInvestment}
                    />
                </div>
                <div className='input-group'>
                    <Input.Label htmlFor='annualInvestment'>
                        Annual Investment
                    </Input.Label>
                    <Input
                        type='number'
                        id='annualInvestment'
                        defaultValue={annualInvestment}
                    />
                </div>
                <div className='input-group'>
                    <Input.Label htmlFor='expectedReturn'>
                        Expected Return
                    </Input.Label>
                    <Input
                        type='number'
                        id='expectedReturn'
                        defaultValue={expectedReturn}
                    />
                </div>
                <div className='input-group'>
                    <Input.Label htmlFor='duration'>
                        Duration (n) Years
                    </Input.Label>
                    <Input
                        type='number'
                        id='duration'
                        defaultValue={duration}
                    />
                </div>
                <div className='col-span-full flex flex-row items-end justify-end gap-4 font-display text-sm font-semibold'>
                    <button
                        type='reset'
                        className='rounded-lg border border-current px-4 py-1 uppercase'
                        onClick={onResetData}
                    >
                        Reset
                    </button>
                    <button className='rounded-lg border border-transparent bg-[#0da86f] px-4 py-1 uppercase shadow-md duration-300 ease-in-out hover:bg-[#0b6e4a]'>
                        Update
                    </button>
                </div>
            </form>
        </Card>
    );
}
