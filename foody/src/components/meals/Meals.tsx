import { useEffect, type ReactNode } from 'react';

import { useMealsContext } from '@/context/meals-context';
import MealItem from '@/components/meals/MealItem';
import Loader from '@/components/ui/Loader';

export default function Meals() {
    const { meals, setMeals, setMealsLoading, isLoading } = useMealsContext();

    useEffect(() => {
        setMealsLoading(true);
        fetch('http://localhost:8080/meals')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Could not fetch meals!');
                }
                return res.json();
            })
            .then((data) => {
                setMeals(data);
            })
            .catch((err) => console.log(err.message))
            .finally(() => {
                setMealsLoading(false);
            });
    }, [setMeals, setMealsLoading]);

    if (isLoading) {
        return (
            <div className='min-h-[30rem] w-full'>
                <Loader />
            </div>
        );
    }

    let content: ReactNode;
    if (meals.length === 0) {
        content = (
            <p className='mx-auto max-w-[25rem] text-center text-2xl'>
                Sorry, couldn't find an meals. Clear your search or reload the
                page.
            </p>
        );
    }

    if (meals.length > 0) {
        content = meals.map((meal) => <MealItem key={meal.id} {...meal} />);
    }

    return (
        <ul className='mx-auto my-8 grid w-[90%] max-w-[70rem] grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 p-4'>
            {content}
        </ul>
    );
}
