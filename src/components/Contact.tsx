import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          once: true, 
          offset: 100, 
        });
        return () => {
          AOS.refresh();
        };
      }, []);
    

  return (
    <section id='contact'>
      <div className='w-screen h-screen flex flex-col justify-center text-center '>

          <div data-aos="fade-up" className='text-6xl  text-yellow-200 '>Have An Idea?</div>
          <a href='mailto:gaye_arslan@hotmail.com' className='text-xl p-5  text-yellow-100 hover:text-2xl transition-all duration-300'>
              gaye_arslan@hotmail.com
          </a>
      </div>
    </section>
  )
}

export default Contact