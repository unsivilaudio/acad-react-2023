import NewsletterSignup from '@/components/newsletter/NewsletterSignup';

export default function NewsletterPage() {
    return (
        <div className='mx-auto my-8 mb-12 flex max-w-[45rem] flex-col items-center gap-6 text-center'>
            <h1 className='text-3xl font-bold uppercase tracking-widest'>
                Join our awesome community!
            </h1>
            <div>
                <NewsletterSignup />
            </div>
        </div>
    );
}
