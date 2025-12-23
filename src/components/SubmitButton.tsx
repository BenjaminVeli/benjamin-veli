import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            className="text-sm bg-transparent hover:bg-customBlue border border-customBlue text-customBlue font-medium uppercase hover:text-white transition-all duration-500 py-3 md:py-5 px-16 md:px-32 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={pending}
        >
            {pending ? "Enviando Mensaje..." : "Enviar Mensaje"}
        </button>
    );
};