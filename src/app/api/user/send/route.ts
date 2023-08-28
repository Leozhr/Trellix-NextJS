import { eRegister } from '@/emails/eRegister';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend('re_8QYTx9we_BiErKGZniV6v2p2bVbQmmCyb');

  const { token, name, email } = await request.json();

  try {
    const response = await resend.emails.send({
      from: 'Trellix Support <onboarding@resend.dev>',
      to: email,
      subject: "Confirmação de cadastro",
      react: eRegister({
        name: name,
        href: `${process.env.BASE_URL}/register/${token}`,
      }),
    })

    return new NextResponse(JSON.stringify(response), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error));
  }
}