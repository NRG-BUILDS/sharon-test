import illustrationPC from '../assets/illustration-laptop-desktop.svg'
import illustrationMobile from '../assets/illustration-laptop-mobile.svg'

const Section4 = () => {
    return ( 
        <section className=' max-w-full mx-auto py-20 overflow-hidden'>
            
            <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16 md:ml-12 text-center md:text-left py-8">
                <div className='transform md:scale-125'>
                    <img src={illustrationMobile} alt="" className='zoom w-full mx-auto md:hidden'/>
                    <img src={illustrationPC} alt="" className='zoom w-full mx-auto hidden md:block' />
                </div>
                <div className='px-8'>
                    <div className="py-4">
        	            <h3 className='reveal text-heading text-xl'>Free, open, simple</h3>
                        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    </div>
                    <div className="py-4">
        	            <h3 className='reveal text-heading text-xl'>Powerful tooling</h3>
                        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Section4;