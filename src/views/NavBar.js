import navMenu from '../assets/icon-hamburger.svg'
import closeBtn from '../assets/icon-close.svg'
import arrowLight from '../assets/icon-arrow-light.svg'
import arrowDark from '../assets/icon-arrow-dark.svg'
import { useState } from 'react'
const ProductLink = () => {
    return (
        <div className='mx-4 drpdwn hover:mb-32 duration-100 md:hover:mb-0'>   
                        <a href="/" className='relative font-bold hover:underline flex items-center gap-2 justify-center'>
                            Product
                        <img src={arrowDark} alt="" className='md:hidden hover:rotate-180'/>
                        <img src={arrowLight} alt="" className='hidden md:block hover:rotate-180'/>
                        </a>
                        
                        <div className='drpdwn-content bg-gray-300 md:bg-white top-4 left-1/2 -translate-x-1/2 text-center text-black z-50 w-full md:w-auto'>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>Contact</a>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>Newsletter</a>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>LinkedIn</a>
                        </div>
                    </div>
    )
}
const CompanyLink = () => {
    return (
        <div className='mx-4 drpdwn hover:mb-32 duration-100 md:hover:mb-0'>   
                        <a href="/" className='relative font-bold hover:underline flex items-center gap-2 justify-center'>
                            Company
                            <img src={arrowDark} alt="" className='md:hidden hover:rotate-180'/>
                            <img src={arrowLight} alt="" className='hidden md:block hover:rotate-180'/>
                        </a>
                        
                        <div className='drpdwn-content bg-gray-300 md:bg-white top-4 left-1/2 -translate-x-1/2 text-center text-black z-50 w-full md:w-auto'>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>Contact</a>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>Newsletter</a>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>LinkedIn</a>
                        </div>
                    </div>
    )
}
const ContactLink = () => {
    return (
        <div className='mx-4 drpdwn hover:mb-32 duration-100 md:hover:mb-0'>   
                        <a href="/" className='relative font-bold hover:underline flex items-center gap-2 justify-center'>
                            Contact
                            <img src={arrowDark} alt="" className='md:hidden hover:rotate-180'/>
                            <img src={arrowLight} alt="" className='hidden md:block hover:rotate-180'/>
                        </a>
                        
                        <div className='drpdwn-content bg-gray-300 md:bg-white top-4 left-1/2 -translate-x-1/2 text-center text-black z-50 w-full md:w-auto'>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>Contact</a>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>Newsletter</a>
                            <a href="/" className='block p-4 font-semibold hover:font-bold '>LinkedIn</a>
                        </div>
                    </div>
    )
}
const CTABtns = ({signBgColor}) => {
    return (
        <>
        <button className='px-4 py-2 font-semibold'>
            Login
        </button>
        <button className={'px-6 py-2 font-semibold rounded-3xl border-2 border-white duration-100 hover:bg-opacity-40 hover:text-white hover:border-0 ' + signBgColor}>
            Sign Up
        </button>
        </>
    )
}


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navClick = (e) => {
        if (isNavOpen) {
            setIsNavOpen(false)
            e.target.src = navMenu
        } else {
            setIsNavOpen(true)
            e.target.src = closeBtn
        }
    }
    return ( 
        <nav className='flex relative justify-between items-center mb-6 z-50'>
            <div className='flex items-center'>
                <h1 className='font-extrabold text-3xl'>Blogr</h1>

                <div className='hidden md:flex ml-8 '>
                    <ProductLink />
                    <CompanyLink />
                    <ContactLink /> 
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <button onClick={(e) => {navClick(e)}} className='md:hidden flex items-center'>
                    <img src={navMenu} alt=""/>
                    </button>
                    {isNavOpen && (
                        <div className=" md:hidden absolute top-16 left-1/2 -translate-x-1/2 bg-white p-6 pb-0 shadow-lg grid gap-8 text-bodyText text-center w-80 rounded-xl z-50">
                            <ProductLink />
                            <CompanyLink />
                            <ContactLink />
                            <div className="py-6 grid gap-2 border-t border-gray-300">
                                <CTABtns signBgColor={'bg-gradient-to-r from-heroRedLight to-heroRed text-white'} />    
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="hidden md:grid grid-cols-2">
                    <CTABtns signBgColor={'bg-white text-heroRedLight'}/>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;