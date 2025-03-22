import { Card } from "./Card";

export const About = () => {
    return (
        <div className="flex flex-col items-center gap-6 px-6 max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold text-center mt-14 text-[#003F25]">Como funciona?</h2>
            <img className="mx-auto -mt-4 w-40 md:w-64" src="./src/assets/line.svg" alt="linha" />
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <Card title="Colete e Descarte" description="Separe seus materiais recicláveis e leve até um ponto de coleta credenciado." />
                <Card title="Ganhe Pontos" description="Cada item reciclado gera pontos em sua conta no Ecoganha." />
                <Card title="Troque por benefícios" description="Utilize seus pontos para obter descontos exclusivos, brindes e outras vantagens." />
            </div>
            
            <h2 className="text-2xl font-bold text-center mt-14 text-[#003F25]">Por que Participar?</h2>
            <ul className="flex flex-col gap-6 px-4 md:px-0 md:w-3/4">
                <li className="text-lg text-[#003F25] font-bold flex items-start gap-2">
                    Ajude o Meio Ambiente:
                    <span className="font-normal">Contribua para a redução do lixo e a preservação dos recursos naturais.</span>
                </li>
                <li className="text-lg text-[#003F25] font-bold flex items-start gap-2">
                    Ganhe Recompensas:
                    <span className="font-normal">Transforme sua atitude sustentável em vantagens reais.</span>
                </li>
            </ul>
        </div>
    );
};
