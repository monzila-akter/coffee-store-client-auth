
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import './footer.css'
import { FaLocationDot, FaMessage } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className=''>
            {/* part one */}
           <div className='footer h-full lg:h-[700px]'>
               <div className=' container mx-auto px-6 md:px-10 lg:px-14 flex flex-col lg:flex-row  space-x-0 lg:space-x-32'>
                {/* text part */}
                <div className='mt-[100px] w-full'>
                    <img className='w-[75px] h-[90px] mb-6' src="https://i.ibb.co.com/9wjpKwh/logo1.png" alt="" />
                    <h3 className='text-[45px] text-[#331A15] rancho mb-8'>Espresso Emporium</h3>
                    <p className='text-base raleway text-[#1B1A1A] mb-8'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

            <div className="mb-10 md:mb-12 flex space-x-4 text-[#331A15]">
              <a
                href="https://facebook.com"
                className="hover:text-gray-300 text-3xl"
              >
                <FaFacebook />
              </a>
             
              <a
                href="https://twitter.com"
                className="hover:text-gray-300 text-3xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-gray-300 text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-gray-300 text-3xl"
              >
                <FaLinkedin />
              </a>
            </div>
            <h4 className='text-[45px] rancho text-[#331A15] mb-10 lg:mb-12'>Get in Touch</h4>
            <p className='flex items-center space-x-3 mb-4 raleway'>
              <FaPhoneAlt className='text-[#331A15] text-lg cursor-pointer'></FaPhoneAlt>
              <span className='text-[#1B1A1A] text-lg'>+88 01533 333 333</span>
            </p>
            <p className='flex items-center space-x-3 mb-4 raleway'>
              <FaMessage className='text-[#331A15] text-lg cursor-pointer'></FaMessage>
              <span className='text-[#1B1A1A] text-lg'>info@gmail.com</span>
            </p>
            <p className='flex items-center space-x-3 mb-4 raleway'>
              <FaLocationDot className='text-[#331A15] text-lg cursor-pointer'></FaLocationDot>
              <span className='text-[#1B1A1A] text-lg'>72, Wall street, King Road, Dhaka</span>
            </p>
                </div>
                {/* form part */}
                <div className='mt-[50px] mb-[50px] lg:mb-0 lg:mt-[200px] w-full'>
                  <h2 className='text-[45px] text-[#331A15] mb-8 rancho '>Connect with Us</h2>
                  <form >
                    <input className='w-full md:w-[503px] h-[48px] mb-4 pl-4' placeholder='Name' type="text" />
                    <input className='w-full md:w-[503px] h-[48px] mb-4 pl-4' type="email" placeholder='Email' name="" id="" />
                    <input className='w-full md:w-[503px] h-[130px] mb-6 pl-4' type="text" placeholder='Message' />
                    <br />
                    <button className='text-2xl text-[#331A15] btn rounded-full bg-transparent border-2 border-[#331A15] rancho'>
                    Send Message
                    </button>
                    
                  </form>
                </div>

               </div>
           </div>
           {/* part two */}
           <div className='footerTwo flex justify-center items-center'>
            <p className='text-xl rancho text-white text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
           </div>
        </div>
    );
};

export default Footer;