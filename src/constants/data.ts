import { RiInstagramLine } from "react-icons/ri";
// import { RiTiktokFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

export const navLinks = [
    { id: 1, href: "/", name: "Inicio" },
    { id: 2, href: "/about-me", name: "Sobre mí" },
    { id: 3, href: "/experience", name: "Experiencia" },
    { id: 4, href: "/contact-me", name: "Contacto" },
]
export const services = [
    {
        id: 1,
        title: "Desarrollador FullStack",
        price: "Xplora Technology S.A.C",
        type: "Junio 2025–Diciembre 2025",
        features: [
            { id: 1, feature: "Participé en el desarrollo y migración de un ERP corporativo, orientado a la gestión integral de distintas áreas como contabilidad, control de costos, recursos humanos y tesorería, asegurando la continuidad y correcta transición de la información." },
            { id: 2, feature: "Desarrollé un módulo para el área de Liquidaciones, implementando funcionalidades como el cálculo de montos a liquidar, generación de reportes y flujos de aprobación de liquidaciones." },
            { id: 3, feature: "Participé activamente en la etapa de marcha blanca del ERP, identificando y corrigiendo incidencias funcionales y técnicas, contribuyendo a la estabilidad del sistema previo a su puesta en producción." },
            { id: 4, feature: "Utilicé Angular y Angular Material para el desarrollo del frontend, C# para la lógica de negocio y SQL Server para la gestión de la base de datos, asegurando una arquitectura robusta y escalable." },
            { id: 5, feature: "Aporté mejoras en la organización de datos y procesos internos, enfocadas en optimizar la eficiencia operativa y la trazabilidad de la información dentro del sistema." },
        ],
    },
        {
        id: 2,
        title: "Página Web",
        price: "La milenaria",
        type: "Enero 2025–Marzo 2025",
        features: [
            { id: 1, feature: "Participé en el diseño y desarrollo de una plataforma web orientada a la comercialización de productos naturales, enfocada en la visualización y análisis de información de ventas." },
            { id: 2, feature: "Desarrollé indicadores clave de rendimiento (KPIs) para el seguimiento de productos más y menos vendidos por periodo, facilitando la toma de decisiones comerciales." },
            { id: 3, feature: "Implementé dashboards interactivos para la medición y análisis de métricas de ventas, permitiendo una visualización clara y estructurada de los datos." },
            { id: 4, feature: "Utilicé React para el desarrollo del frontend y Tailwind CSS para la implementación de una interfaz moderna y responsiva ." },
        ],
    },
        {
        id: 3,
        title: "Desarrollador FullStack",
        price: "Tecsup",
        type: "Marzo 2024-Diciembre 2024",
        features: [
            { id: 1, feature: "Participé en el diseño y desarrollo de una plataforma web 360° orientada a la visualización del campus sede Lima de Tecsup, permitiendo a los estudiantes conocer las instalaciones de forma virtual." },
            { id: 2, feature: "Implementé un formulario para agilizar el proceso de solicitud de visitas presenciales, facilitando el registro y gestión de futuros postulantes interesados en conocer el campus." },
            { id: 3, feature: "Utilicé React.js para el desarrollo del frontend, Tailwind CSS para la construcción de una interfaz moderna y responsiva, Django como backend para una gestión segura de la información y MySQL para el almacenamiento de los datos de los interesados." },
            { id: 4, feature: "Desarrollé dashboards interactivos para el análisis de datos, permitiendo identificar las carreras de mayor interés entre los futuros estudiantes de la institución." },
        ],
    },
    {
        id: 4,
        title: "Sistema de Escritorio",
        price: "Corsol S.A.C",
        type: "Enero 2024–Marzo 2024",
        features: [
            { id: 1, feature: "Desarrollé y diseñé un sistema de gestión de alquileres, optimizando la administración de cuartos, consumo de luz y agua." },
            { id: 2, feature: "El proyecto fue implementado para 5 usuarios, permitiéndoles gestionar de manera eficiente el uso de los recursos." },
            { id: 3, feature: "Utilicé Java para el desarrollo y diseño del sistema, y MySQL para la gestión de la base de datos, asegurando una solución robusta y escalable." },
        ],
    },
]

export const questions = [
    {
        id: 1,
        question: "¿Nuestros sitios web y sistemas son escalables y seguros?",
        answer:
            "Sí, desarrollamos nuestros sitios web y sistemas con tecnologías modernas que garantizan rapidez, seguridad y la posibilidad de crecer sin límites."
    },
    {
        id: 2,
        question: "¿Qué tipo de software y sitios web desarrollamos?",
        answer:
            "Desarrollamos una amplia variedad de soluciones digitales, incluyendo sitios web informativos, corporativos, tiendas en línea (e-commerce) y sistemas web personalizados, adaptados a las necesidades de cada cliente.",
    },
    {
        id: 3,
        question: "¿Podemos actualizar o mejorar un sitio web existente?",
        answer:
            "Sí, podemos actualizar y optimizar tu sitio web existente, ya sea dándole un diseño moderno o mejorando sus funcionalidades para que sea más eficiente y atractivo.",
    },
    {
        id: 4,
        question: "¿Nuestros sitios web están optimizados para SEO?",
        answer:
            "Sí, implementamos buenas prácticas de SEO para mejorar la visibilidad de tu sitio web en los motores de búsqueda",
    },
    {
        id: 5,
        question: "¿Ofrecemos soporte técnico después de la entrega?",
        answer:
            "Sí, ofrecemos soporte técnico durante 6 meses. Durante este período, nos aseguramos de que el servicio que hayas elegido funcione correctamente",
    },
]

export const socialMedias = [
    {
        id: 1, icon: RiInstagramLine, link: 'https://www.instagram.com/tomso.app/', label: 'Visit my Instagram profile.',
    },
    {
        id: 2, icon: RiTwitterXFill, link: 'https://x.com/TomsoJS', label: 'Visit my Twitter profile.',
    },
    // {
    //     id: 2, icon: RiTiktokFill, link: 'https://www.tiktok.com/@tomso.js?lang=es', label: 'Visit my TikTok profile.',
    // },
]