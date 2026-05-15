import { useState } from 'react'
import {
  Menu,
  X,
  Github,
  Mail,
  ExternalLink,
  Code2,
  Gamepad2, 
  Camera, 
  Film
} from 'lucide-react'

import fotoCara from './assets/fotocara.jpg'
import fotoCompleta from './assets/fotocompleta.png'
import logoMaya from './assets/maya.png'
import logoAdobe from './assets/cloud.png'
import fotoProyecto3 from './assets/proyecto3.png'
import fotoProyecto4 from './assets/proyecto4.png'
import fotoProyecto2 from './assets/proyecto2.png'
import fotoProyecto1 from './assets/proyecto1.png'



export default function App() {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const proyectos = [
    {
      titulo: 'Juego en Unity',
      descripcion: 'Proyecto desarrollado en Unity con mecánicas interactivas.',
      tecnologias: ['Unity', 'C#'],
      imagen: fotoProyecto1
    },
    {
      titulo: 'Concursante "Creación Personaje de la U"',
      descripcion: 'Participé en el concurso de creación de personajes organizado por la universidad, donde diseñé y modelé un personaje 3D desde cero.',
      tecnologias: ['Maya', 'Suite Adobe'],
      imagen: fotoProyecto2
    },
    {
      titulo: 'Portafolio Web',
      descripcion: 'Este mismo portafolio responsive usando React y Tailwind.',
      tecnologias: ['React', 'Tailwind', 'JavaScript'],
      imagen: fotoProyecto3
    },
    {
      titulo: 'Filminuto "Y no sé"',
      descripcion: 'Dirigí y actué en un filminuto titulado "Y no sé", grabado en las instalaciones de la universidad, en San Benito',
      tecnologias: ['Manejo de cámaras', 'Dirección audiovisual'],
      imagen: fotoProyecto4
    }
  ]

const habilidades = [
  { nombre: 'Maya', nivel: 'Intermedio', porcentaje: '60%', icono: <img src={logoMaya} alt="Maya" className="w-6 h-6" />  },
  { nombre: 'JavaScript', nivel: 'Intermedio', porcentaje: '60%', icono: <Code2 size={24} /> },
  { nombre: 'CSS', nivel: 'Intermedio', porcentaje: '60%', icono: <Code2 size={24} /> },
  { nombre: 'Unity', nivel: 'Intermedio', porcentaje: '60%', icono: <Gamepad2 size={24} /> },
  { nombre: 'C#', nivel: 'Intermedio', porcentaje: '60%', icono: <Code2 size={24} /> },
  { nombre: 'Suite Adobe', nivel: 'Avanzado', porcentaje: '85%', icono: <img src={logoAdobe} alt="Suite Adobe" className="w-6 h-6" /> },
  { nombre: 'Manejo de cámaras', nivel: 'Avanzado', porcentaje: '85%', icono: <Camera size={24} /> },
  { nombre: 'Dirección audiovisual', nivel: 'Avanzado', porcentaje: '85%', icono: <Film size={24} /> },
]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      })

      setMenuAbierto(false)
    }
  }

  return (
    <div className="bg-white text-zinc-900">

      <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-white z-50 shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

          <div className="flex items-center gap-2 font-bold text-lg">
            <Code2 size={24} />
            José Rivera
          </div>

          <div className="hidden md:flex gap-8 uppercase text-sm tracking-wider font-bold absolute left-1/2 -translate-x-1/2">

          <button onClick={() => scrollToSection('inicio')}>INICIO</button>
          <button onClick={() => scrollToSection('sobre-mi')}>SOBRE MÍ</button>
          <button onClick={() => scrollToSection('habilidades')}>HABILIDADES</button>
          <button onClick={() => scrollToSection('proyectos')}>PROYECTOS</button>
          <button onClick={() => scrollToSection('contacto')}>CONTACTO</button>

          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {
              menuAbierto
              ? <X size={28} />
              : <Menu size={28} />
            }
          </button>

        </div>

        {
          menuAbierto && (
            <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-zinc-900">

            <button onClick={() => scrollToSection('inicio')}>INICIO</button>
            <button onClick={() => scrollToSection('sobre-mi')}>SOBRE MÍ</button>
            <button onClick={() => scrollToSection('habilidades')}>HABILIDADES</button>
            <button onClick={() => scrollToSection('proyectos')}>PROYECTOS</button>
            <button onClick={() => scrollToSection('contacto')}>CONTACTO</button>

            </div>
          )
        }

      </nav>

      <section
        id="inicio"
        className="min-h-screen flex items-center bg-zinc-100 pt-20"
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              José Rivera
            </h1>

            <div className="w-24 h-1 bg-zinc-900 mb-6"></div>

            <h2 className="text-2xl md:text-3xl text-zinc-700 mb-6">
              Estudiante de Ingeniería Multimedia
            </h2>

            <p className="text-zinc-600 leading-relaxed text-lg max-w-xl">
              Transformando ideas en experiencias interactivas.
            </p>

            <button
              onClick={() => scrollToSection('proyectos')}
              className="mt-8 bg-zinc-900 text-white px-8 py-4 hover:bg-zinc-700 transition"
            >
              Ver proyectos
            </button>

          </div>

          <div className="flex justify-center">
            <img
              src={fotoCara}
              alt="José Rivera"
              className="w-[320px] h-[420px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

        </div>

      </section>

      <section id="sobre-mi" className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-20">
      Sobre mí
    </h2>

    <div className="grid md:grid-cols-2 gap-16 items-center">

      
      <div>

        <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-10">

          <p>
            Soy un estudiante de ingeniería multimedia de Medellín apasionado 
            por la tecnología y la creatividad.
          </p>

          <p>
            Tengo múltiple experiencia en varios campos como es el diseño gráfico,
            creación de páginas web, animación 2D, animación 3D, videojuegos,
            edición de sonido, grabación de sonido, dirección cinematográfica, video y fotografía,
            circuitos y diversos campos matemáticos.
          </p>

          <p>
            Tengo interés en la música urbana, cuando no estoy estudiando, me apasiona jugar videojuegos, escuchar música
            y pasar tiempo con mis seres queridos.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-zinc-100 p-8">
            <p className="text-zinc-500 mb-2">Años de experiencia</p>
            <h3 className="text-5xl font-light">3,5+</h3>
          </div>

          <div className="bg-zinc-100 p-8">
            <p className="text-zinc-500 mb-2">Proyectos completados</p>
            <h3 className="text-5xl font-light">15+</h3>
          </div>

        </div>

      </div>

      <div className="flex justify-center items-start">
        <img
         src={fotoCompleta}
         alt="José Rivera"
        className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"/>
      </div>

    </div>

  </div>

</section>

      <section id="habilidades" className="py-28 bg-zinc-100">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-20">
      Habilidades
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {habilidades.map((habilidad) => (

        <div key={habilidad.nombre} className="bg-white p-6 border-l-4 border-zinc-900 shadow-sm hover:shadow-xl transition">

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 bg-zinc-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              {habilidad.icono}
            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{habilidad.nombre}</h3>
                <span className="text-sm text-zinc-500">{habilidad.nivel}</span>
              </div>

              <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-900" style={{ width: habilidad.porcentaje }}></div>
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section id="proyectos" className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-20">
      Proyectos
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {proyectos.map((proyecto, index) => (

        <article
          key={index}
          className="bg-zinc-100 overflow-hidden rounded-2xl hover:-translate-y-2 transition duration-300 shadow-md"
        >

          {proyecto.imagen
  ? <img src={proyecto.imagen} alt={proyecto.titulo} className="aspect-video w-full object-cover" />
  : <div className="aspect-video bg-zinc-300"></div>
}

          <div className="p-8">

            <h3 className="text-2xl font-bold mb-4">
              {proyecto.titulo}
            </h3>

            <p className="text-zinc-700 leading-relaxed mb-6">
              {proyecto.descripcion}
            </p>

            <div className="flex flex-wrap gap-3">
              {proyecto.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-200 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </article>

      ))}

    </div>

  </div>

</section>

      <section id="contacto" className="py-28 bg-zinc-900 text-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>

            <h2 className="text-5xl font-bold mb-8">
              Contacto
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Si quieres trabajar conmigo o hablar sobre algún proyecto,
              puedes escribirme.
            </p>

            <div className="space-y-5">

              <a href="https://github.com/Jodaribe17" target="_blank" className="flex items-center gap-4 hover:text-zinc-400 transition">
                <Github />
                 GitHub
              </a>

              <a href="mailto:jodaribe17@gmail.com" className="flex items-center gap-4 hover:text-zinc-400 transition">
                <Mail />
                Correo
              </a>

            </div>

          </div>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider">
                Nombre
              </label>

              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider">
                Correo
              </label>

              <input
                type="email"
                placeholder="correo@email.com"
                className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider">
                Mensaje
              </label>

              <textarea
                rows="6"
                placeholder="Escribe tu mensaje"
                className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl outline-none focus:border-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-xl hover:bg-zinc-300 transition font-semibold"
            >
              Enviar mensaje
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}