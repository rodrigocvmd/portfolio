import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	const { name, email, phone, message } = await request.json();

	// Configure the transporter for nodemailer
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	// Email content
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: "rodrigocvmd@gmail.com",
		subject: `Nova mensagem de ${name} - Portfólio`,
		html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Nova Mensagem do Formulário de Contato</h2>
        <p>Você recebeu uma nova mensagem através do formulário de contato do seu portfólio.</p>
        <hr style="border: 1px solid #ddd;">
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <div style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
          <p style="margin: 0;">${message}</p>
        </div>
        <hr style="border: 1px solid #ddd; margin-top: 20px;">
        <p style="font-size: 0.9em; color: #777;">Esta mensagem foi enviada automaticamente a partir do seu site de portfólio.</p>
      </div>
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: "Mensagem enviada com sucesso!" }, { status: 200 });
	} catch (error) {
		console.error("Falha ao enviar email:", error);
		return NextResponse.json({ message: "Falha ao enviar mensagem." }, { status: 500 });
	}
}
