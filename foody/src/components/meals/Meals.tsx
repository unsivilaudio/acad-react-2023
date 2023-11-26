import MealItem from '@/components/meals/MealItem';

export default function Meals() {
    return (
        <ul className='mx-auto my-8 grid w-[90%] max-w-[70rem] grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 p-4'>
            <MealItem />
            <MealItem />
            <MealItem />
            <MealItem />
            <MealItem />
            <MealItem />
        </ul>
    );
}
