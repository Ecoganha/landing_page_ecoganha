import { Btn } from "./Btn";

export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center mt-9 mb-4 max-w-[1280px] md:mx-auto md:flex-row md:items-center md:justify-between">
    <div className="md:order-1 flex flex-col justify-center md:items-start md:text-left max-w-[900px]">
        <p className="text-2xl font-bold text-[#003F25] mx-6 md:mx-0 md:text-3xl">
            Junte-se ao Ecoganha:<br /> Recicle e Ganhe Recompensas!
        </p>
        <p className="mx-6 my-4 text-xl text-[#003F25] md:mx-0 md:my-6">
            O Ecoganha transforma o descarte correto de recicláveis em benefícios reais. 
            Recicle, acumule pontos e troque por produtos sustentáveis!
        </p>
        <div>
            <Btn />
        </div>
    </div>
    <div className="flex justify-center w-full mt-6 md:mt-0 md:w-auto">
        <img className="w-[80%] max-w-[400px] md:max-w-[1200px]" src="./src/assets/img_hero.png" alt="imagem de funções no celular" />
    </div>
</div>

    );
};
