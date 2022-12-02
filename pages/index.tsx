/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Header } from "../components/header";
import { IoNewspaperOutline, IoRocketOutline } from 'react-icons/io5';
import { HiOutlineBriefcase, HiOutlineBadgeCheck, HiShieldCheck } from 'react-icons/hi';
import { TbMessageCircle } from 'react-icons/tb';
import { FaBurn, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'
import { RiCopyrightFill } from 'react-icons/ri'

const Home: NextPage = () => {

  return (
    <div className=''>
      <Head>
        <title>goDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./assets/icon.png" />
      </Head>

      <main className='relative overflow-x-hidden'>
        <div className="flex flex-col w-full h-full">
          <Header />
          
          <section className='grid cel:grid-cols-1 tab:grid-cols-1 lap:grid-cols-3 mt-20 container mx-auto items-center justify-center'>
            <div className='flex cel:w-48 tab:w-48 lap:w-auto xl:w-auto cel:mx-auto '>
              <div className='relative h-[300px] w-[300px]'>
                <img className='absolute bottom-0 right-0 z-30 floating' width={180} src='./assets/astroneer/astroneer.svg' />
                <img className='absolute top-0 left-0 z-20 spin' width={300} src='./assets/astroneer/planets.svg' />
                <img className='absolute top-0 left-0 z-10 spin' width={300} src='./assets/astroneer/smoke.svg' />
                <img className='absolute top-0 left-0 z-0 pulse' width={300} src='./assets/astroneer/stars.svg' />
              </div>
            </div>
            <div className='text-white text-center items-center flex flex-col z-50'>
              <p className='text-6xl cel:text-4xl cel:mt-14 tab:text-5xl lap:text-6xl bg-textGradient bg-clip-text text-transparent font-bold mt-28'>
                <span>Acelere seu <br />desenvolvimento</span>
              </p>
              <p className='text-2xl cel:text-lg tab:text-xl lap:text-2xl mt-4 text-slate-100'>
                Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocrácia.
              </p>
              <div className='mt-8'>
                <Button onClick={() => { }} bold={true} textSize="t  ext-lg" text="Construa seu projeto" width='w-[300px]' height='h-10' />
              </div>
            </div>
            <div className='flex cel:hidden tab:hidden lap:inline-block xl:inline-block justify-center lap:w-auto '>
              <div className='relative h-[300px] w-[300px]'>
                <img className='absolute bottom-0 left-0 z-50 floating ' style={{ animationDuration: "15s" }} width={180} src='./assets/rocket/rocket.svg' />
                <img className='absolute top-10 left-0 z-30 floating ' style={{ animationDuration: "40s" }} width={180} src='./assets/rocket/planets.svg' />
                <img className='absolute top-0 left-10 z-20 pulse ' style={{ animationDelay: "5s" }} width={300} src='./assets/rocket/starts1.svg' />
                <img className='absolute top-0 left-0 z-20 pulse ' style={{ animationDelay: "5s" }} width={300} src='./assets/rocket/starts2.svg' />
              </div>
            </div>
          </section>

          <section className='bg-black/25 mt-52 flex flex-col'>
            <div className='flex flex-col items-center justify-center text-center mt-16 mb-12'>
              <div className='flex items-center justify-center'>
                <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700" />
                <p id="sobre" className='bg-textGradient bg-clip-text text-clip text-transparent font-bold text-4xl mx-4 pb-2'>goDev</p>
                <hr className="my-8 w-72 h-px bg-gray-200 border-0 dark:bg-blue-700" />
              </div>
              <div className='text-white flex flex-col justify-center items-center'>
                <p className='text-3xl cel:text-2xl'>Como funciona a plataforma</p>
                <p className='text-xl cel:text-base'>Com a GoDev, é possível tirar suas ideias do papel. Conheça alguns benefícios da nossa solução!</p>
              </div>
            </div>
            <div className='w-full h-[500px]'>
              <div className='grid cel:grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 gap-4 w-fit mb-5 mx-auto absolute left-1/2 -translate-x-1/2'>
                <Card title='Burocracia' text='Profissionais de TI disponível para sua empresa sem a burocracia de contratação' icon={<HiOutlineBriefcase size={35} />} />
                <Card title='Praticidade' text='Praticidade para tirar o seu projeto do papel' icon={<IoRocketOutline size={35} />} />
                <Card title='Segurança' text='Transparência e confiança desde o desenvolvimento a entrega' icon={<HiShieldCheck size={35} />} />
                <Card title='Exclusividade' text='Sua tecnologia de forma única e estruturada para o seu negócio' icon={<FaBurn size={35} />} />
                <Card title='Especialistas' text='Equipes especializadas em diversos tipos de linguagem de programação' icon={<HiOutlineBadgeCheck size={35} />} />
                <Card title='Automação' text='Tecnologias para diferenciar sua empresa, e conectar-se cada vez mais com seus clientes' icon={<TbMessageCircle size={35} />} />
              </div>
            </div>
          </section>

          <section className='bg-black pt-48 pb-20 flex flex-col w-full justify-center px-80'>
            <div className='container mx-auto flex flex-col mt-10'>
              <div className='flex'>
                <p className='text-white font-bold text-4xl'>Tire sua ideia do papel e transforme em lucro <span className='text-[#D30490]'>.</span></p>
                <img className='top-0 right-0 h-14' src='assets/icon.png' />
              </div>

              <div className='p-10 grid grid-cols-2 gap-2'>
                <div className='flex flex-col gap-2'>
                  <span className='font-bold text-[#D30490] text-3xl'>+426,9 <span className='text-white'>bi</span></span>
                  <hr className="w-20 border-2 rounded bg-white mt-2 mb-2" />
                  <p className='text-slate-100'>Faturamento anual em reais de empresas que têm sistemas tecnológicos</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='font-bold text-[#D30490] text-3xl'>+174 <span className='text-white'>bi</span></span>
                  <hr className="w-20 border-2 rounded bg-white mt-2 mb-2" />
                  <p className='text-slate-100'>Aumento anual em reais para empresas que utilizam de sistemas online e aplicativos em seu negócio</p>
                </div>
              </div>
            </div>
          </section>

          <section className='py-16 flex flex-col w-full justify-center px-80'>
            <div className='flex'>
              <h3 className='text-white font-bold text-4xl'>A goDev tira seu projeto do papel com os seguintes passos:</h3>
              <div className='flex flex-col justify-end w-72'>
                <hr className="border-blue-800 w-20 border-1 rounded bg-white mt-2 mb-2" />
                <span className='text-slate-200'>Os quatro E's da goDev</span>
              </div>
            </div>

            <div className='p-10 my-16 grid grid-cols-2 gap-16'>
              <div className='flex flex-col items-center gap-2'>
                <div className='relative'>
                  <img src='assets/planets/neptune.svg' />
                  <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>1</span>
                </div>
                <span className='font-bold text-white text-2xl'>Entrevista</span>
                <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                <p className='text-slate-100 text-center px-10'> Aqui entendemos o seu negócio e a sua ideia, para executar da melhor forma de acordo com sua expectativa.</p>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <div className='relative'>
                  <img src='assets/planets/mars.svg' />
                  <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>2</span>
                </div>
                <span className='font-bold text-white text-2xl'>Equipes</span>
                <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                <p className='text-slate-100 text-center px-10'>Organização da equipe com profissionais especializados na sua necessidade para desenvolver seu projeto.</p>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <div className='relative'>
                  <img src='assets/planets/jupiter.svg' />
                  <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>3</span>
                </div>
                <span className='font-bold text-white text-2xl'>Execução</span>
                <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                <p className='text-slate-100 text-center px-10'>Equipe atuando exclusivamente em seu projeto, com garantia de sigilo e qualidade entregue pela goDev.</p>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <div className='relative'>
                  <img src='assets/planets/saturn.svg' />
                  <span className='absolute text-white font-bold text-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>4</span>
                </div>
                <span className='font-bold text-white text-2xl'>Entrega</span>
                <hr className="w-20 border-1 rounded border-blue-800 mt-2 mb-2" />
                <p className='text-slate-100 text-center px-10'>Entrega do projeto totalmente funcional, sendo liberado para uso e seus clientes se conectarem o mais rápido possível.</p>
              </div>
            </div>
          </section>

          <section className='pb-10 flex flex-col w-full justify-center px-80'>
            <div className='flex'>
              <h3 className='text-white font-bold text-4xl'>Calculando orçamento<span className='text-[#D30490]'>.</span></h3>
            </div>

            <div className='px-10 my-16 grid grid-cols-2 '>

              <div className='flex items-center gap-10'>
                <div className='text-white'>
                  <h2 className='font-bold text-3xl'>R$ 0,00 /hora</h2>
                  <span>O valor por hora</span>
                </div>
                <div className='w-0.5 rounded h-44 bg-blue-600'></div>
              </div>

              <div>
                <form className="flex flex-col gap-10">
                  <div className='px-5'>
                    <div className='flex items-end'>
                      <input type="number" className='text-xl text-white bg-black/5 border-[#D30490] rounded-l-lg w-24 border-2 p-3' />
                      <label className='bg-[#D30490] text-base text-white font-semibold p-4 whitespace-nowrap rounded-r w-full'>Quantidade de membros</label>
                    </div>
                    <span className='text-xs text-slate-200'>Quantos membros são necessários para o projeto?</span>
                  </div>
                  <div className='px-5'>
                    <div className='flex items-end'>
                      <input type="number" className='text-xl text-white bg-black/5 border-[#D30490] rounded-l-lg w-24 border-2 p-3' />
                      <label className='bg-[#D30490] text-base text-white font-semibold p-4 whitespace-nowrap rounded-r w-full'>Duração do projeto</label>
                    </div>

                    <span className='text-xs text-slate-200'>Quantos meses precisa para o projeto ser feito?</span>
                  </div>
                  <div className='px-5'>
                    <div className='flex items-end full'>
                      <input type="number" className='text-xl text-white bg-black/5 border-[#D30490] rounded-l-lg w-24 border-2 p-3' />
                      <label className='bg-[#D30490] text-base text-white font-semibold p-4 whitespace-nowrap rounded-r w-full'>Tecnologias</label>
                    </div>

                    <span className='text-xs text-slate-200'>Quais tecnologias serão usadas no projeto?</span>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className='bg-black min-h-[200px] py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-3 px-20'>
            <div>
              <img src='assets/logo.png' />
            </div>
            <div className='text-slate-400 text-sm flex flex-col gap-4'>
              <h2 className='text-2xl text-white'>Contato</h2>
              <div className=''>
                <h4>+55 84 99999-9999</h4>
                <h4>emailGoDevAqui@gmail.com</h4>
              </div>
              <div>
                <h4>Rua pipipipopo, 123 - Alto</h4>
                <h4>Mossoró - RN</h4>
              </div>
              <div className='flex gap-2 text-lg'>
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
              </div>
            </div>
            <div className='text-slate-400 text-sm flex flex-col gap-4'>
              <h2 className='text-2xl text-white'>Informações</h2>
              <div className=''>
                <h4>Sobre</h4>
              </div>
              <div>
                <h4>Contato</h4>
              </div>
              <div className=''>
                <h4>Termos e Condições</h4>
              </div>
            </div>
          </div>
          <div className='inline-block text-white px-20 mt-5'>
            <div className='flex gap-2 items-center text-sm text-slate-400'>
              <RiCopyrightFill />
              <span>Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
