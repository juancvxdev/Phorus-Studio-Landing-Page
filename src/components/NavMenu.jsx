import { Menu, Transition } from "@headlessui/react";

const NavMenu = () => {
    return (
        <nav>
            <ul class="hidden lg:flex lg:space-x-7 lg:ml-14">
                <li className="cursor-pointer hover:text-blue-velt-300 ">Inicio</li>
                <li>
                    <Menu >
                        <Menu.Button className="hover:text-blue-velt-300 ">
                            Servicios
                            <img src="/icons/arrow-down.svg" alt="Icon Down" className="w-[10px] h-[8px] inline-block ml-1 filter brightness-0 invert" />
                        </Menu.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items className="absolute  mt-4 w-40 py-3 rounded-md shadow-lg bg-white  focus:outline-none font-medium text-blue-velt-950 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href=""
                                        >
                                            <img
                                                src=""
                                                className="inline w-4 mr-3"
                                                alt="" 
                                            />
                                            Desarrollo Web
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href="/"
                                        >
                                            <img
                                                src=""
                                                className="inline w-4 mr-3"
                                                alt=""
                                            />
                                            Calendar
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href="/account-settings"
                                        >
                                            <img
                                                src=""
                                                className="inline w-4 mr-3"
                                                alt=""
                                            />
                                            Reminders
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href=""
                                        >
                                            <img
                                                src=""
                                                className="inline w-4 mr-3"
                                                alt=""
                                            />
                                            Planning
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li>
                    <Menu>
                        <Menu.Button className="hover:text-blue-velt-300">
                            Nuestra Empresa
                            <img src="/icons/arrow-down.svg" alt="Icon Down" className="w-[10px] h-[8px] inline-block ml-1 filter brightness-0 invert" />
                        </Menu.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items className="absolute  mt-4 w-40 py-3 rounded-md shadow-lg bg-white  focus:outline-none font-medium text-blue-velt-950 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href=""
                                        >
                                            Historia
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href=""
                                        >
                                            Nuestro Equipo
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && "bg-gray-100 text-gray-900"
                                                } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                            href=""
                                        >
                                            Blog
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className="cursor-pointer hover:text-blue-velt-300 ">Trabajos</li>
                <li className="cursor-pointer hover:text-blue-velt-300 ">Testimonios</li>
            
            </ul>
        </nav>
    );
};

export default NavMenu;