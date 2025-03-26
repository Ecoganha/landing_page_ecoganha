import { Btn } from "./Btn";

export const Hero = () => {
    return (
        <div className="text-center flex flex-col justify-center mt-9 mb-4 max-w-[1280px] md:mx-auto md:flex-row">
            <img className="mx-auto md:order-2 md:pt-20 md:flex-1 md:mr-10 md:w-sm" src=".\src\assets\img_hero.png" alt="imagem de funções no celular" />
            <div className="md:order-1 md:flex md:flex-col md:justify-center md:flex-2 md:items-start md:text-left md:max-w-[900px] md:ml-10">
                <p className="-mt-20 mx-11 text-2xl font-bold text-[#003F25] md:m-0">Junte-se ao Ecoganha:<br /> Recicle e Ganhe Recompensas!</p>
                <p className="mx-11 my-4 text-xl text-[#003F25] md:mx-0 md:my-8">O Ecoganha transforma o descarte correto de recicláveis em benefícios reais. Recicle, acumule pontos e troque por produtos sustentáveis!</p>
                <div>
                    <Btn />
                </div>
            </div>
            <img className="w-full max-w-[400px] md:max-w-[500px] md:ml-10" src="./src/assets/img_hero.png" alt="imagem de funções no celular" />
        </div>
    );
};
