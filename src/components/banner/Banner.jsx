import './banner.css'

const Banner = () => {
    return (
       <div className='mb-16 md:mb-28'>
        {/* part one */}
         <div className='banner h-[500px] md:h-[700px] flex items-center justify-center px-6 md:px-10'>
            <div className='ml-0 lg:ml-[550px] '>
               <h3 className='text-[30px] md:[40px] lg:text-[55px] text-white rancho mb-4'>Would you like a Cup of Delicious Coffee?</h3>
               <p className='text-white raleway mb-8 w-full md:w-[720px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
               <button className='text-2xl text-[#242222] btn bg-[#E3B577] border-none rancho'>Learn More</button>
            </div>  
         
            
        </div>
            {/* part two */}
              
            <div className='bg-[#ECEAE3]'>
             <div className='py-14 container mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/* card one */}
                <div>
                   <img className='w-[70px] h-[70px] object-cover mb-4' src="https://i.ibb.co.com/GpDpC86/1.png" alt="" />
                   <h4 className='text-4xl text-[#331A15] rancho mb-3'>Awesome Aroma</h4>
                   <p className='text-[#1B1A1A] raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                 {/* card two */}
                 <div>
                   <img className='w-[70px] h-[70px] object-cover mb-4' src="https://i.ibb.co.com/xzGqN6h/2.png" alt="" />
                   <h4 className='text-4xl text-[#331A15] rancho mb-3'>High Quality</h4>
                   <p className='text-[#1B1A1A] raleway'>We served the coffee to you maintaining the best quality</p>
                </div>
                 {/* card three */}
                 <div>
                   <img className='w-[70px] h-[70px] object-cover mb-4' src="https://i.ibb.co.com/17vbQgv/3.png" alt="" />
                   <h4 className='text-4xl text-[#331A15] rancho mb-3'>Pure Grades</h4>
                   <p className='text-[#1B1A1A] raleway'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                 {/* card four */}
                 <div>
                   <img className='w-[70px] h-[70px] object-cover mb-4' src="https://i.ibb.co.com/10MYjts/4.png" alt="" />
                   <h4 className='text-4xl text-[#331A15] rancho mb-3'>Proper Roasting</h4>
                   <p className='text-[#1B1A1A] raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
                
             </div>
          </div>
       </div>
    );
};

export default Banner;