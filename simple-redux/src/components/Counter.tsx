import useCounter from '@/store/hooks/use-counter';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Counter() {
    const { count, show, increment, increase, decrement, toggleShow } =
        useCounter();

    return (
        <Container as='main'>
            <h1 className='text-base uppercase text-[#575757]'>
                Redux Counter
            </h1>
            {show && (
                <div className='my-8 text-4xl font-bold text-[#3c0080]'>
                    {count}
                </div>
            )}
            <div className='my-4 flex justify-center gap-2'>
                <Button onClick={() => increment()}>Increment</Button>
                <Button onClick={() => increase(5)}>Increase by 5</Button>
                <Button onClick={() => decrement()}>Decrement</Button>
            </div>
            <Button onClick={toggleShow.bind(null, undefined)}>
                Toggle Counter
            </Button>
        </Container>
    );
}
