"use client";

const Time = () => {
    const horaActual = new Date();

    const obtenerEstado = (hora: Date) => {
        const horas = hora.getHours();
        const minutos = hora.getMinutes();
        const tiempoTotal = horas + minutos / 60;

        if (tiempoTotal >= 8 && tiempoTotal < 13) {
            return { estado: 'Disponible' };
        }
        if (tiempoTotal >= 15 && tiempoTotal < 20) {
            return { estado: 'Disponible' };
        }
        if (tiempoTotal >= 20 || tiempoTotal < 8) {
            return {
                estado: 'Fuera de línea',

            };
        };
        return {
            estado: 'Fuera de línea',
        };
    };

    const formatearHora = (hora: Date) => {
        return hora.toLocaleTimeString('es-PE', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'America/Lima'
        }).replace(/\s?(a\.?\s?m\.?|p\.?\s?m\.?)/i, match => ' ' + match.toUpperCase().replace(/\s/g, '').replace(/\./g, ''));
    };

    const { estado } = obtenerEstado(horaActual);

    const pingColor = estado === 'Disponible' ? 'bg-green-600' : 'bg-red-700';
    const circleColor = estado === 'Disponible' ? 'bg-green-600' : 'bg-red-700';

    return (
        <div className="absolute border border-zinc-950 py-2.5 px-5 rounded-md bg-white bottom-0">
            <div className="flex gap-3 items-center">
                <div className="flex gap-1 items-center">
                    <div className="relative inline-flex h-4 w-4 shrink-0 rounded-full border-2 border-white">
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${pingColor}`} />
                        <span className={`relative inline-flex h-full w-full rounded-full ${circleColor}`} />
                    </div>
                    <p>{formatearHora(horaActual)}</p>
                </div>
                <p>{estado}</p>
                <div className="grid grid-cols-3 w-7 h-5">
                    <div className="bg-red-600"></div>
                    <div className="bg-white"></div>
                    <div className="bg-red-600"></div>
                </div>
            </div>
        </div>
    );
};

export default Time;
