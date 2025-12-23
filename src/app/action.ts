"use server";
import { sendEmail } from "@/utils/brevo";

export async function handleForm(formData: FormData) {
    const to_name = formData.get("to_name");
    const to_email = formData.get("to_email");
    const to_phone = formData.get("to_phone");
    const message = formData.get("message");

    if (!to_name || !to_email || !to_phone || !message) {
        return console.log('Por favor, rellene todos los campos');
    }

    await sendEmail({
        subject: `Nuevo mensaje de ${to_name}`,
        to: [{
            name: "TomsoJs", // Tu nombre o el de tu empresa
            email: "tomso.app@gmail.com" // Tu correo de recepción
        }],
        htmlContent: `
            <h2>Has recibido un nuevo mensaje de contacto</h2>
            <p><strong>Nombre Completo:</strong> ${to_name}</p>
            <p><strong>Correo Electrónico:</strong> ${to_email}</p>
            <p><strong>Número de Teléfono:</strong> ${to_phone}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
        `,
        sender: {
            name: to_name as string, // Quien envió el mensaje
            email: to_email as string, // El correo del usuario
        }
    });
}
