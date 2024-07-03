

import Marquee from "./components/Marquee";

import { logo, linkedin, github } from "./assets/icons";
import tailsnippets from "./assets/images/tailsnippets.png";
import uiverse from "./assets/images/uiverse.png";
import azure from "./assets/images/azure.png";
import tailwind from "./assets/images/tailwind.png";
import netcore from "./assets/images/netcore.png";
import swagger from "./assets/images/swagger.png";
import figma from "./assets/images/figma.png";
import react from "./assets/images/react.png";
import remix from "./assets/images/remix.png";
import preline from "./assets/images/preline.png";
import angular from "./assets/images/angular.png";
import vue from "./assets/images/vue.png";
import csharp from "./assets/images/csharp.png";
import sqlserver from "./assets/images/sqlserver.png";
import aws from "./assets/images/aws.png";
import credencialazure from "./assets/images/credencialazure.png";
import credencialpp from "./assets/images/credencialpp.png";
import credencialaws from "./assets/images/credencialaws.png";
import fotoperfil from "./assets/images/fotoperfil.png";

function App() {
  return (
    <>
      <div className="bg-primary h-full w-full p-5">
        <div className="bg-bg  rounded-xl  w-full p-10 px-56">
          <nav className="flex justify-between items-center">
            {logo("w-16 h-16")}
            <ul className="inline-flex gap-3 font-marcellus">
              <li>
                <a className="">Proyectos</a>
              </li>
              <li>
                <a>Sobre mí</a>
              </li>
            </ul>
            <div className="flex gap-3">
              {linkedin("w-8 h-8 fill-primary")}
              {github("w-8 h-8 fill-primary")}
            </div>
          </nav>
          <header className="flex flex-col items-center text-primary my-64">
            <h1 className="font-mustardMedium text-[140px] text-center ">
              Javier Roca
            </h1>
            <p className="max-w-[620px] text-center mb-8 font-marcellus">
              Soy un <span className="text-red-600">Full-Stack Developer</span>{" "}
              comprometido con todas las fases del desarrollo, además de ser un{" "}
              <span className="text-red-600">Diseñador web</span>. Tengo
              experiencia en el despliegue de aplicaciones en entornos de{" "}
              <span className="text-red-600">Azure</span> y{" "}
              <span className="text-red-600">AWS</span>.
            </p>
            <div className="flex gap-2 font-mustardMedium">
              <a className="rounded-full text-xs  bg-primary text-light px-12 py-3">
                CV
              </a>
              <a className="rounded-full text-xs  bg-light px-12 py-3">
                Sobre mí
              </a>
            </div>
          </header>
          <main className="flex flex-col  text-primary my-6">
            <section className="-mx-64 w-screen relative   bg-secondary flex justify-center items-center overflow-x-hidden">
              <Marquee />
            </section>
            <section className="my-24">
              <h2 className="text-dark font-mustardMedium text-2xl text-left mb-10">
                Proyectos
              </h2>
              <div className="grid  xl:grid-cols-3 grid-cols-2  grid-rows-2 gap-4">
                <div className="bg-light  p-4 ">
                  <div className="bg-dark w-full h-full flex rounded-xl justify-center items-center relative">
                    <img
                      src={tailsnippets}
                      alt="tailsnippets"
                      className="w-44 p-6"
                    ></img>
                    <div className="absolute bottom-2 -left-2 flex w-full justify-end gap-2 ">
                      <img
                        src={react}
                        alt="tailsnippets"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={remix}
                        alt="tailsnippets"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={tailwind}
                        alt="tailwind"
                        className="h-6 object-fit"
                      ></img>

                      <img
                        src={figma}
                        alt="figma"
                        className="h-6 object-fit"
                      ></img>
                    </div>
                  </div>
                </div>

                <div className="bg-light  p-4 ">
                  <div className="bg-dark w-full h-80 flex rounded-xl justify-center items-center relative">
                    <p className="text-2xl text-light font-bold">G.E.T</p>
                    <div className="absolute bottom-2 -left-2 flex w-full justify-end gap-2 ">
                      <img
                        src={azure}
                        alt="tailsnippets"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={swagger}
                        alt="swagger"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={tailwind}
                        alt="tailwind"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={netcore}
                        alt="netcore"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={figma}
                        alt="figma"
                        className="h-6 object-fit"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="bg-light  p-4 ">
                  <div className="bg-dark w-full h-full flex rounded-xl justify-center items-center relative">
                    <img
                      src={uiverse}
                      alt="tailsnippets"
                      className="w-44 p-6"
                    ></img>
                    <div className="absolute bottom-2 -left-2 flex w-full justify-end gap-2 ">
                      <img
                        src={tailwind}
                        alt="tailwind"
                        className="h-6 object-fit"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="bg-light  p-4 ">
                  <div className="bg-dark w-full h-full flex rounded-xl justify-center items-center relative">
                    <p className="text-2xl text-light font-bold">Tech Riders</p>
                    <div className="absolute bottom-2 -left-2 flex w-full justify-end gap-2 ">
                      <img
                        src={react}
                        alt="react"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={tailwind}
                        alt="tailwind"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={figma}
                        alt="figma"
                        className="h-6 object-fit"
                      ></img>
                      <img
                        src={preline}
                        alt="preline"
                        className="h-6 object-fit"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="bg-light  p-4 ">
                  <div className="bg-dark w-full h-full flex rounded-xl justify-center items-center">
                    <p className="text-2xl text-light font-bold">...</p>
                  </div>
                </div>
                <div className="bg-light  w-full h-44"></div>
              </div>
            </section>

            <section className="">
              <h2 className="text-dark font-mustardMedium text-2xl text-left mb-10">
                Mis servicios
              </h2>
              <div className="flex flex-col gap-12">
                <div className="flex gap-6 items-center flex-row-reverse  xl:flex-nowrap flex-wrap">
                  <div className="bg-light w-full h-fit min-h-32 p-4 rounded flex flex-wrap gap-6 items-center justify-center">
                    <img
                      src={credencialaws}
                      alt="credencialaws"
                      className="h-24 object-fit"
                    ></img>
                    <img
                      src={credencialpp}
                      alt="credencialpp"
                      className="h-24 object-fit"
                    ></img>
                    <img
                      src={credencialazure}
                      alt="credencialazure"
                      className="h-24 object-fit"
                    ></img>
                  </div>
                  <p>
                    Certificaciones que acreditan mis conocimientos en el
                    desarrollo en la nube y power platform
                  </p>
                </div>
                <div className="flex gap-6 items-center flex-row  xl:flex-nowrap flex-wrap">
                  <div className="bg-light w-full h-fit min-h-32 p-4 rounded flex flex-wrap gap-6 items-center justify-center">
                    <img
                      src={figma}
                      alt="figma"
                      className="h-16 w-auto max-h-full object-contain"
                    ></img>
                    <img
                      src={tailwind}
                      alt="tailwind"
                      className="h-16 w-auto max-h-full object-contain"
                    ></img>
                    <img
                      src={react}
                      alt="react"
                      className="h-24 w-auto max-h-full object-contain"
                    ></img>
                    <img
                      src={vue}
                      alt="vue"
                      className="h-16 w-auto max-h-full object-contain"
                    ></img>
                    <img
                      src={angular}
                      alt="angular"
                      className="h-24 w-auto max-h-full object-contain"
                    ></img>
                  </div>
                  <p>
                    Diseño + Front-end: llevando a la vida los diseños de página
                    y componentes
                  </p>
                </div>
                <div className="flex gap-6 items-center flex-row-reverse  xl:flex-nowrap flex-wrap">
                  <div className="bg-light w-full h-fit min-h-32 p-4 rounded flex flex-wrap gap-6 items-center justify-center">
                    <img
                      src={netcore}
                      alt="netcore"
                      className="h-16 object-fit"
                    ></img>
                    <img
                      src={swagger}
                      alt="swagger"
                      className="h-20 object-fit"
                    ></img>
                    <img
                      src={csharp}
                      alt="csharp"
                      className="h-16 object-fit"
                    ></img>
                    <img
                      src={sqlserver}
                      alt="sqlserver"
                      className="h-16 object-fit"
                    ></img>
                  </div>
                  <p>
                    Back-end: aplicaciones con .net, desarrollo de API's con
                    swagger
                  </p>
                </div>
                <div className="flex gap-6 items-center flex-row  xl:flex-nowrap flex-wrap">
                  <div className="bg-light w-full h-fit min-h-32 p-4 rounded flex flex-wrap gap-6 items-center justify-center">
                    <img src={aws} alt="aws" className="h-12 object-fit"></img>
                    <img
                      src={azure}
                      alt="azure"
                      className="h-16 object-fit"
                    ></img>
                  </div>
                  <p>
                    Despliegue de aplicaciones con multicloud, mediante AWS y
                    Azure.
                  </p>
                </div>
              </div>
            </section>
            <section className="my-20">
              <h2 className="text-dark font-mustardMedium text-2xl text-left mb-10">
                Sobre mí
              </h2>
              <div className="flex  gap-6 items-center justify-center">
                <img src={fotoperfil} alt="" className="rounded-xl" />
                <div className="flex flex-col items-center">
                  <p className="max-w-[620px]  mb-8 font-marcellus">
                    Soy un{" "}
                    <span className="text-red-600">Full-Stack Developer</span>{" "}
                    comprometido con todas las fases del desarrollo, además de
                    ser un <span className="text-red-600">Diseñador web</span>.
                    Tengo experiencia en el despliegue de aplicaciones en
                    entornos de <span className="text-red-600">Azure</span> y{" "}
                    <span className="text-red-600">AWS</span>.
                  </p>
                  <a className="rounded-full text-xs  bg-primary text-light px-12 py-3">
                    Ver más
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="px-52 py-20 flex items-center xl:flex-row flex-col">
          <div className="">
            <h2 className="text-5xl  font-bold text-light mb-6">
              ¿Tienes algún proyecto en mente?
            </h2>
            <p className="text-center xl:text-left mb-8 text-light font-marcellus">
              Puedes contactarme para hablar de tus ideas
            </p>
          </div>
          <div className="w-full">
            <form className="flex gap-2 flex-col">
              <textarea
                className="rounded w-full p-2 min-h-44"
                placeholder="Tu mensaje..."
              ></textarea>
              <div className="flex gap-2">
                <input
                  className="rounded w-full p-2"
                  type="email"
                  placeholder="Correo..."
                ></input>
                <button className="rounded bg-secondary text-light p-2 px-6">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-bg  rounded-xl  w-full p-10"></div>
      </div>
    </>
  );
}

export default App;
