import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo mermelucho.jpg'; // Ajusta la ruta si es necesario

const Header = () => {
    const navigate = useNavigate(); // ✅ Aquí sí es correcto

    return (
        <header className="bg-[#18230F] w-[98%] mx-auto rounded-[50px] h-20">
            <div className="container mx-auto flex items-center h-full px-6">
                {/* Grupo Izquierda */}
                <nav className="flex-1">
                    <ul className="flex space-x-6 left-nav">
                        <li><button 
                                onClick={() => navigate('/')} 
                                className="text-white hover:text-[#99BC85] left-a"
                            >
                                Inicio
                            </button>
                        </li>
                        <li><button 
                                onClick={() => navigate('/about')} 
                                className="text-white hover:text-[#99BC85] left-a"
                            >
                                Nuestra Historia
                            </button></li>
                    </ul>
                </nav>

                {/* Logo - Centrado */}
                <div className="flex-1 flex items-center justify-center gap-3 logo-container">
                    <img 
                        src={logo} 
                        alt="Logo Mermelucho" 
                        className="h-12 w-12 rounded-full object-cover logo-img"
                    />
                    <span className="text-2xl font-bold text-[#99BC85] logo-text">MERMELUCHO</span>
                </div>

                {/* Grupo Derecha */}
                <nav className="flex-1">
                    <ul className="flex space-x-6 justify-end right-nav">
                        <li><button 
                                onClick={() => navigate('/shop')} 
                                className="text-white hover:text-[#99BC85] right-a"
                            >
                                Tienda
                            </button></li>
                        <li><button 
                                onClick={() => navigate('/contact')} 
                                className="text-white hover:text-[#99BC85] right-a"
                            >
                                Contáctanos
                            </button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
