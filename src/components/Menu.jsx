import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/manpower.jpg'

export default function Menu() {
	const currentYear = new Date().getFullYear();

  return (
    <section className="w-full md:w-2/12 text-center md:py-10 bg-white text-black md:min-h-screen flex md:flex-col justify-between items-center">
		<nav className="list-none md:space-y-5 w-full flex md:block md:w-fit items-center justify-between">
			<li>
				<img className='w-28 md:w-fit' src={logo} alt="Logo manpower" />
			</li>
			<li className="rounded-full hover:bg-gray-200 duration-300 py-2 px-4 w-100">
				<Link to="/" className='gap-2 flex items-center font-medium'>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                    Lista de posts
                </Link>
			</li>
		</nav>

		<div className='space-y-10 hidden md:block'>
			<div className='text-center'>
				<div className='bg-gray-200 rounded-full overflow-hidden h-32 w-32 mx-auto'>
                    <FontAwesomeIcon icon={faUser} className='text-8xl translate-y-8' />  
                </div>
				<p className='text-2xl font-medium'>Bienvenido</p>
				<p className='text-xl'>A mi prueba técnica.</p>
			</div>
			<p>© {currentYear} Manpower</p>
		</div>
	</section>
  )
}