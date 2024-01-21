
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['zaharborisenko617@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
