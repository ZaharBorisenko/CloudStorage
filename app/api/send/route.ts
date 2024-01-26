
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  const resp = await req.json()
  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['zaharborisenko617@gmail.com'],
      subject: `${resp.userName} поделился с вами файлом.`,
      // @ts-ignore
      react: EmailTemplate({ resp }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
