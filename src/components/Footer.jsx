import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py6 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Mermelucho. Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-gray-200">Facebook</a>
                    <a href="#" className="hover:text-gray-200">Instagram</a>
                    <a href="#" className="hover-text-200">TikTok</a>                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;