import phone from '../assets/illustration-phones.svg'
import bgCircle from '../assets/bg-pattern-circles.svg'

const Section3 = () => {
    return ( 
        <section className="bg-gradient-to-r from-blueBgDark to-blueBgLight text-white rounded-tr-bigCorner rounded-bl-bigCorner">
            <div className= "grid md:grid-cols-2 gap-y-16 py-16 items-center">
                <div className='relative h-44'>
                    <img src={phone} alt=""  className='zoom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' />
                    <img src={bgCircle} alt="" className='zoom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 scale-50'/>
                </div>
                <div className='p-16'>
                    <h2 className='reveal text-2xl'>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>

        </section>
     );
}
 
export default Section3;