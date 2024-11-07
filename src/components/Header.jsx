import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logoShort from "../assets/MyFilmListLogo.svg";
import logo from "../assets/MyFilmListLogoComplete.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-main min-w-44 w-full h-20 flex fixed z-50">
      <nav className="flex justify-between px-10 w-full h-full">
        <div className="md:hidden content-center">
          <NavLink to="/">
            <img src={logoShort} alt="My film list logo" className="w-8 min-w-8" />
          </NavLink>
        </div>
        <div className="hidden md:flex">
          <NavLink to="/" className="flex">
            <img src={logo} alt="My film list logo" className="w-48" />
          </NavLink>
        </div>
        <ul className="flex h-full justify-end">
          <li className="flex h-full px-2">
            <NavLink to="/search">
                  <div className="h-full flex flex-col justify-center ">
                      <div className="flex justify-center"><i className="fa-solid fa-magnifying-glass text-2xl"></i></div>
                      <div className="text-sm">Pesquisar</div>
                  </div>
            </NavLink>
          </li>
          <li className="sm:hidden flex content-center">
            <NavLink to="/" className="content-center">
                <div className="h-full flex flex-col justify-center px-2 ">
                      <div className="flex justify-center"><i className="fa-solid fa-bars text-2xl"></i></div>
                      <div className="text-sm">Menu</div>
                  </div>
            </NavLink>
          </li>
          <li className="hidden sm:block h-full">
            <div id="dropdown" className="relative h-full" ref={dropdownRef}>
              <button
                onClick={toggleDropdown} className="px-2 h-full">
                    <i class="fa-solid fa-list-ul text-2xl"></i>
                <div className="flex items-center gap-1 text-sm">Gêneros <i class="fa-solid fa-caret-down"></i></div>
              </button>
              {isOpen && (
                <div className="absolute right-0 w-fit bg-main">
                  <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Romance
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Aventura
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Suspense
                  </NavLink>
                </div>
              )}
            </div>
          </li>
          <li className="hidden sm:flex h-full px-2">
            <NavLink to="/search">
                  <div className="h-full flex flex-col justify-center w-max">
                      <div className="flex justify-center"><i class="fa-solid fa-clock-rotate-left text-2xl"></i></div>
                      <div className="text-sm">Já assistidos</div>
                  </div>
            </NavLink>
          </li>
          <li className="hidden sm:flex h-full px-2">
            <NavLink to="/search">
                  <div className="h-full flex flex-col justify-center w-max">
                      <div className="flex justify-center"><i class="fa-regular fa-bookmark text-2xl"></i></div>
                      <div className="text-sm">Assistir mais tarde</div>
                  </div>
            </NavLink>
          </li>
          <li className="hidden sm:flex h-full px-2">
            <NavLink to="/search">
                  <div className="h-full flex flex-col justify-center w-max">
                      <div className="flex justify-center"><i class="fa-regular fa-user text-2xl"></i></div>
                      <div className="text-sm">Meu perfil</div>
                  </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
