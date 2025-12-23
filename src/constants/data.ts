import { RiInstagramLine } from "react-icons/ri";
// import { RiTiktokFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

export const navLinks = [
    { id: 1, href: "/", name: "Inicio" },
    { id: 2, href: "/about-me", name: "Sobre mí" },
    { id: 3, href: "/precios", name: "Precios" },
    { id: 4, href: "/contact-me", name: "Contacto" },
]
export const services = [
    {
        id: 1,
        title: "Página Web",
        price: "Desde $150",
        type: "Ideal para presencia en línea.",
        features: [
            { id: 1, feature: "Diseño responsivo y moderno" },
            { id: 2, feature: "SEO optimizado para buscadores" },
            { id: 3, feature: "Interacciones animadas y atractivas" },
            { id: 4, feature: "Rendimiento optimizado" },
            { id: 5, feature: "Formulario de contacto personalizado" },
        ],
    },
    {
        id: 2,
        title: "Plataforma Web",
        price: "Desde $600",
        type: "Optimiza y digitaliza tu negocio.",
        features: [
            { id: 1, feature: "Diseño responsivo y adaptable" },
            { id: 2, feature: "Autenticación de usuarios segura" },
            { id: 3, feature: "Panel de administración intuitivo" },
            { id: 4, feature: "Generación de reportes y análisis" },
            { id: 5, feature: "Seguridad avanzada y cifrado de datos" },
            { id: 6, feature: "Gestión de roles y permisos" },
            { id: 7, feature: "Respaldo de datos" },
        ],
    },
    {
        id: 3,
        title: "Tienda Virtual",
        price: "Desde $450",
        type: "Vende productos online fácilmente.",
        features: [
            { id: 1, feature: "Diseño atractivo y responsivo" },
            { id: 2, feature: "Integración con pasarelas de pago" },
            { id: 3, feature: "Gestión de inventario eficiente" },
            { id: 4, feature: "SEO optimizado para más ventas" },
            { id: 5, feature: "Gestión de ofertas y descuentos" },
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