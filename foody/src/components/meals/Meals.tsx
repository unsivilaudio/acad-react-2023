import { useEffect, type ReactNode } from 'react';

import useHttp from '@/hooks/use-http';
import { useMealsContext, type Meal } from '@/context/meals-context';
import MealItem from '@/components/meals/MealItem';
import Loader from '@/components/ui/Loader';

export default function Meals() {
    const { data, isLoading, error } = useHttp<Meal[]>(
        'http://localhost:8080/meals',
    );
    const { meals, setMeals } = useMealsContext();

    useEffect(() => {
        if (data) {
            setMeals(data);
        }
    }, [data, setMeals]);

    if (isLoading) {
        return (
            <div className='min-h-[30rem] w-full'>
                <Loader />
            </div>
        );
    }

    let content: ReactNode;
    if (error || meals.length === 0) {
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
