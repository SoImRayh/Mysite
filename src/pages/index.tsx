import {Inter} from '@next/font/google'
import {Navbar} from "@/components/Navbar/Navbar";
import {SkillCard} from "@/components/SkillCard/SkillCard";
import {tecnologias} from "@/utils/Tecnologias";

const inter = Inter({ subsets: ['latin'], weight: "300" })



export default function Home() {

  return (
    <div className={'bg-[#2d2926] '}>
        <Navbar/>
        <div className={"w-min-screen h-max mt-20 py-28 flex flex-col items-center text-white min-h-screen relative "+ inter.className}>
            <div className={"h-40 w-40 rounded-full bg-white"}></div>
            <div className={"flex-col flex text-center w-[50%]"}>
                <span className={"text-3xl mt-8"}>Olá, me chamo Railande</span>
                <span className={"mt-4"}>
                Sou estudante no curso de <a href="">Ciência da computação</a> no IFG Anápolis,<br/>
                amo expandir meu horizonte de conhecimento, e meu sonho é dominar o mundo!
                </span>
                <span className={"mt-4"}>
                Minha área de maior domínio é desenvolvimento web, especificando melhor, na área de back-end e deploy usando das mais diversar tecnologias, sinta-se livre para
                experimentar algumas das minhas aplicações.
                </span>
            </div>
        </div>
        <section id={"skills"} className={"py-16"}>
            <div className={"w-full min-h-screen flex flex-col items-center"}>
                <div className={"text-white text-2xl "+inter.className}>
                    <span className={"text-4xl py-2"}>Conhecimentos técnicos:</span>
                    <div className={'pt-10 grid grid-cols-4 gap-20'}>
                        {tecnologias.map((skill, index) => <SkillCard tecnologia={skill} key={index}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
        <section id={"projetos"}>
            <div className={"w-full relative min-h-screen"}>
                <div className={"text-white text-2xl "+inter.className}>
                    <span className={"text-4xl py-2"}>Alguns dos meus projetos pessoais:</span>
                </div>
            </div>
        </section>
        <section id={"projetos"}>
            <div className={"w-full relative"}>
                <div className={"text-white text-2xl "+inter.className}>
                </div>
                <div>
                    <span className={"text-white"}>Minhas redes:</span>]
                    <div className={"flex gap-4"}>
                        <div>
                            <div className={"flex"}>
                                <div className={"w-9"}>
                                    <img src="/email.png" alt="email"/>
                                </div>
                                <span className={"text-white justify-center "+ inter.className}>raykah.silva@gmail.com</span>
                            </div>
                            <div className={"flex"}>
                                <div className={"w-9"}>
                                    <img src="/whatsapp.png" alt="watsapp"/>
                                </div>
                                <span className={"text-white "+inter.className}>(62) 9 9461-3585</span>
                            </div>
                        </div>
                        <div className={"w-12"}>
                            <a href="https://github.com/SoImRayh"><img src="github.png" alt=""/></a>
                        </div>
                        <div className={"w-12"}>
                            <a href="https://www.linkedin.com/in/railande-silva-007b04188/"><img src="linkedin.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
