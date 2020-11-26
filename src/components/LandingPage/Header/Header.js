import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header class="text-gray-700 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span class="ml-3 text-xl">krazy it</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link style={{textDecoration: 'none', color:'black'}} to="/landingPage">
                            <a class="mr-5 hover:text-gray-900">home</a>
                        </Link>
                        <Link to="/theFormPart">
                            <a class="mr-5 hover:text-gray-900">upload images</a>
                        </Link>
                    </nav>
                    <Link to="/T-shirt" style={{textDecoration:'none', color:'black'}}>
                        <button class="inline-flex items-center text-dark bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:mt-0">T-shirt
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;