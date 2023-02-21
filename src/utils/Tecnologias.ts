
export interface Tecnologia {
    icon: string
    nome: string,
    sobre: string
}

export const tecnologias: Tecnologia[] = [
    {
        icon: 'docker.png',
        nome: 'Docker',
        sobre: 'Gerênciamento de containeres'
    },
    {
        icon:'spring.png',
        nome: 'Spring',
        sobre: 'Ecosistema de frameworks Java'
    },
    {
        icon:'express.png',
        nome: 'ExpressJS',
        sobre: 'framework minimalista de java script'
    },
    {
        icon:'next.png',
        nome: 'NextJS',
        sobre: 'Framework JS que encapsula react.js'
    },
    {
        icon:'adonis.png',
        nome: 'AdonisJS',
        sobre: 'Framework fullstack java script'
    },
    {
        icon:'nginx.png',
        nome: 'Nginx',
        sobre: 'Servidor http baseado em eventos'
    },
    {
        icon:'tailwind.png',
        nome: 'Tailwind',
        sobre: 'Framework css'
    },
    {
        icon:'oracle.png',
        nome: 'Oracle Cloud',
        sobre: 'Serviços em nuvem da oracle'
    },
    {
        icon:'gcloud.png',
        nome: 'Gcloud',
        sobre: 'Serviços em nuvem da google'
    },
    {
        icon:'postgre.png',
        nome: 'Postgre SQL',
        sobre: 'Banco de dados Relacional'
    },
    {
        icon:'git.png',
        nome: 'Git',
        sobre: 'Ferramenta de versionamento de código'
    },
]