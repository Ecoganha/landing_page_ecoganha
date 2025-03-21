import { Card } from "./Card"

export const About = () => {
    return (
        <div className="flex flex-col items-center gap-15">
            <h2 className="text-2xl font-bold text-center mt-14 text-[#003F25]">
                Como funciona?
            </h2>
            <img className="mx-auto -mt-8" src=".\src\assets\line.svg" alt="linha" />
            <Card title="Colete e Descarte" description="Separe seus materiais recicláveis e leve até um ponto de coleta credenciado." />
            <Card title="Ganhe Pontos" description="Cada item reciclado gera pontos em sua conta no Ecoganha." />
            <Card title="Troque por benefícios" description="Utilize seus pontos para obter descontos exclusivos, brindes e outras vantagens." />

            <h2 className="text-2xl font-bold text-center mt-14 text-[#003F25]">Por que Participar?</h2>
            <ul className="flex flex-col mx-25 gap-8">
                <li className="text-lg text-left text-[#003F25] font-bold m-auto list-disc">
                    Ajude o Meio Ambiente:
                    <p className="font-normal">Contribua para a redução do lixo e a preservação dos recursos naturais.</p>
                </li>
                <li className="text-lg text-left text-[#003F25] font-bold m-auto list-disc">
                    Ganhe Recompensas:
                    <p className="font-normal">Transforme sua atitude sustentável em vantagens reais.</p>
                </li>
            </ul>
        </div>
    )
}