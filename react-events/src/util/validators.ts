import { Event } from '@/types/event';
import { z, type Schema } from 'zod';

export const eventSchema: Schema<Omit<Event, 'id'>> = z.object({
    title: z
        .string({
            required_error:
                'You must supply a title with at least 6 characters.',
        })
        .trim()
        .min(6, 'Please provide a longer title.'),
    image: z
        .string({ required_error: 'You must provide an image for your event.' })
        .url('Please provide a valid image url.'),
    description: z
        .string({
            required_error: 'Please provide a brief description of the event.',
        })
        .min(10, 'Description not long enough.'),
    date: z.string(),
});

export const newsletterSchema: Schema<{ email: string }> = z.object({
    email: z.string().email('Please provide a valid email.'),
});
