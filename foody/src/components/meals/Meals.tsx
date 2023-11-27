import MealItem, {
    type MealItemProps as Meal,
} from '@/components/meals/MealItem';
import { useEffect, useState } from 'react';

export default function Meals() {
    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/meals')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Could not fetch meals!');
                }
                return res.json();
            })
            .then((data) => {
                setMeals(data);
            });
    }, []);

    return (
        <ul className='mx-auto my-8 grid w-[90%] max-w-[70rem] grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 p-4'>
            {meals.map((meal) => (
                <MealItem key={meal.id} {...meal} />
            ))}
        </ul>
    );
}
