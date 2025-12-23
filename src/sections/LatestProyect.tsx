import { latestProjects } from "@/constants/about"
import Image from "next/image"

const LatestProyect = () => {
  return (
    <section id="latest-proyect" className="py-20 md:py-24">
      <div className="container">
        <h2 className="tracking-tight text-neutral-900 text-4xl md:text-5xl font-semibold text-center">Mis últimos proyectos</h2>
        <p className=""></p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10">
          {latestProjects.map(({ id, img, name, description, url }) => (
            <a href={url}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              key={id}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 w-full h-[300px] group">
                <Image
                  src={img}
                  alt={name}
                  className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-[60%]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                  <span className="bg-white text-neutral-900 py-1.5 px-3 rounded-md font-medium text-sm shadow-md">Ver Proyecto</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 sm:text-xl mt-3">{name}</h3>
              <p className="text-neutral-700 mt-2 text-base font-normal">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestProyect