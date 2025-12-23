"use server";
import * as brevo from "@getbrevo/brevo";
import { Params } from "@/types";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.API_BREVO_KEY as string
);

export async function sendEmail({ subject, to, htmlContent }: Params) {
    try {
        const smtpEmail = new brevo.SendSmtpEmail();
        smtpEmail.subject = subject;
        smtpEmail.to = to;
        smtpEmail.htmlContent =
            `<html>
                <body>
                    ${htmlContent}
                </body>
        </html>`;
        // smtpEmail.sender = sender; // Ahora el remitente es dinámico
        smtpEmail.sender = { name: "Consulta de Cliente", email: "exploratec.app@gmail.com" };

        await apiInstance.sendTransacEmail(smtpEmail);
    } catch (error) {
        console.error("Error enviando el correo:", error);
    }
}
