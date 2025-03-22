import { Btn } from "./Btn";

export const Hero = () => {
    return (
        <div className="flex flex-col-reverse items-center justify-center max-w-[1280px] mx-auto mt-9 mb-4 px-4 md:flex-row md:items-center md:px-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-1">
                <p className="text-2xl font-bold text-[#003F25] md:text-3xl">Junte-se ao Ecoganha:<br /> Recicle e Ganhe Recompensas!</p>
                <p className="mt-4 text-lg text-[#003F25] md:text-xl md:mt-6">O Ecoganha transforma o descarte correto de recicláveis em benefícios reais. Recicle, acumule pontos e troque por produtos sustentáveis!</p>
                <div className="mt-6">
                    <Btn />
                </div>
            </div>
            <img className="w-full max-w-[400px] md:max-w-[500px] md:ml-10" src="./src/assets/img_hero.png" alt="imagem de funções no celular" />
        </div>
    );
};
