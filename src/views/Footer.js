const Footer = () => {
    return ( 
        <footer className=" rounded-tr-bigCorner bg-footerBg text-white pb-16">
            <div className="grid md:grid-cols-5 md:ml-12 justify-evenly text-center md:text-left gap-y-8 px-4 py-8">
                <div className=" md:col-span-2">
                    <h2 className=" text-4xl">Blogr</h2>
                </div>
                <div>
                    <h5>Product</h5>
                    <ul>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Overview</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Pricing</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Marketplace</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Features</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Integrations</li></a>
                    </ul>
                </div>
                <div>
                    <h5>Company</h5>
                    <ul>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">About</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Team</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Blog</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Careers</li></a>
                    </ul>
                </div>
                <div>
                    <h5>Product</h5>
                    <ul>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Contact</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">Newsletter</li></a>
                        <a href='/' className="hover:underline"><li className="my-2 text-footerText">LinkedIn</li></a>
                    </ul>
                </div>
            </div>
            <div className="text-center px-4">
                <span className="text-2xl font-bold">Blogr</span> is a ficton company built by
                <a href="https://nrg.netliy.app" className="underline"> Emmanuel Omolaju (NRG)</a>
                
            </div>
        </footer>
     );
}
 
export default Footer;