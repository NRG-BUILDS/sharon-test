import illustrationPC from '../assets/illustration-editor-desktop.svg'
import illustrationMobile from '../assets/illustration-editor-mobile.svg'

const Section2 = () => {
    return ( 
        <section className=' max-w-full mx-auto py-20 overflow-hidden'>
            <div className='text-center'>
                <h2 className="reveal text-heading text-2xl">Designed for the future</h2>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16 md:ml-12 text-center md:text-left py-8">
                <div className='md:order-2 transform md:scale-125'>
                    <img src={illustrationMobile} alt="" className='zoom w-full mx-auto md:hidden'/>
                    <img src={illustrationPC} alt="" className='zoom w-full mx-auto hidden md:block' />
                    
                </div>
                <div className='md:order-1 px-8'>
                    <div className="py-4">
        	            <h3 className='reveal text-heading text-xl'>Introducing an extensible editor</h3>
                        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
                    </div>
                    <div className="py-4">
        	            <h3 className='reveal text-heading text-xl'>Robust content management</h3>
                        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Section2;