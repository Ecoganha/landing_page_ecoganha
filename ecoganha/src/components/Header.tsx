import { Btn } from "./Btn"

export const Header = () => {
    return (
        <div className="p-6">
            <div className="text-2xl font-bold bg-[#FBCA27] p-4 mx-5 rounded-full text-center drop-shadow-lg max-w-[1280px] md:mx-auto md:text-3xl md:text-left md:flex md:justify-between md:items-center">
                <h1 className="text-[#003F25] md:ml-11 md:text-2xl">Eco Ganha</h1>
                <div className="hidden md:block md:text-xl md: mr-11">
                    <Btn />
                </div>
            </div>
        </div>
    )
}