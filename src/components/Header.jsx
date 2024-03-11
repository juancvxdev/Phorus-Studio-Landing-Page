import NavMenu from "./NavMenu"

export default function Header() {
    return (

        <header className="container mx-auto  text-white">
            <nav className="flex items-center justify-between py-5">
                <div>
                    <img draggable="false" className="w-[101px] h-[24px] cursor-pointer" src="/icons/logo.svg" alt="logo" />
                </div>
                <div className="flex flex-grow items-center z-20 text-white font-medium"><NavMenu /></div>
                <div className="flex items-center ">
                    <a href="" >
                        <img className="w-[36px] h-[36px] block lg:hidden cursor-pointer" src="/icons/burger-menu.svg" alt="burger-menu" />
                    </a>
                    <div className="hidden lg:flex  lg:space-x-10  lg:items-center">
                        <div className="hover:text-blue-velt-300 cursor-pointer " >Acceder</div>
                        <div>
                            <button className=" text-blue-velt-50 bg-gray-400/20 border border-bg-gray-400 hover:bg-transparent hover:text-blue-velt-50 rounded-xl px-4 py-2 font-semibold transition duration-500 ease-in-out">Contáctanos</button>
                        </div>


                    </div>


                </div>




            </nav>
        </header>


    )
}
