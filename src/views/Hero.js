import Navbar from "./NavBar";
import bgPattern from '../assets/bg-pattern-intro-mobile.svg'

const Background = () => {
    return (
        <>
           <img src={bgPattern} alt="" className=" opacity-50 absolute -top-60 -left-40 "/>         
            <img src={bgPattern} alt="" className=" opacity-50 absolute -bottom-60 -right-40"/>

        </>
    )
}

const Hero = () => {
    return ( 
        <header className="py-10 px-6 bg-gradient-to-b from-heroRedLight to-heroRed text-white rounded-bl-bigCorner relative overflow-hidden">
            <Navbar />
            <div className="text-center px-6 h-96 py-10 block relative z-50">
                <div>
                    <h1 className="heading text-3xl">A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                </div>
                <div className="flex justify-center gap-4 items-center my-4 max-w-sm mx-auto">
                    <button className="py-2 px-4 border-2 border-white rounded-3xl font-semibold bg-white text-ctaText">Start For Free</button>
                    <button className="py-2 px-4 border-2 border-white rounded-3xl font-semibold">Learn More</button>
                </div>

            </div>
           <Background />
        </header>
     );
}
 
export default Hero;