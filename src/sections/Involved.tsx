import { envolveds } from "@/constants/about";
import Image from "next/image";

const Involved = () => {
  return (
    <section id="involved" className="py-20 md:py-24">
      <div className="container">
        <h2 className="tracking-tight text-neutral-900 text-4xl md:text-5xl font-semibold text-center">Conoce a nuestro equipo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 my-10">
          {envolveds.map(({ id, img, name, role }) => (
            <div key={id} className="flex flex-col items-center">
              <div className="w-full h-[400px] max-w-xs border-2 rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={img}
                  alt={name}
                  className="object-cover w-full h-full hover:scale-110 duration-300"
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 relative z-20">
                <h3 className="text-xl font-medium text-neutral-900 sm:text-xl">{name}</h3>
                <p className="text-base text-neutral-700">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Involved;