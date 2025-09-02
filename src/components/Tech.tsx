import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { Text } from 'react-font'
import { CircleChevronDown } from 'lucide-react'

const Tech = () => {
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
    <div className='text-yellow-100 leading-relaxed text-5xl h-screen justify-center flex flex-col items-center'>
      
      <Text family='Playful Dispair' className='mb-7 tracking-[18px]'>
        My Tech Tree
      </Text>
      
      <CircleChevronDown size={48} className='mb-4'/>
      
      <div data-aos="fade-right" data-aos-delay="100">
        <Text family='Playful Dispair' className='tracking-[15px]'>
          React
        </Text>
      </div>

      <div data-aos="fade-left" data-aos-delay="200">
        <Text family='Playful Dispair' className='tracking-[15px]'>
          NodeJS
        </Text>
      </div>

      <div data-aos="fade-right" data-aos-delay="300">
        <Text family='Playful Dispair' className='tracking-[15px]'>
          Bootstrap
        </Text>
      </div>

      <div data-aos="fade-left" data-aos-delay="400">
        <Text family='Playful Dispair' className='tracking-[15px]'>
          TypeScript
        </Text>
      </div>

      <div data-aos="fade-right" data-aos-delay="500">
        <Text family='Playful Dispair' className='tracking-[15px]'>
          TailwindCSS
        </Text>
      </div>

      <div data-aos="fade-left" data-aos-delay="900">
        <Text family='Playful Dispair' className='tracking-[5px] justify-center text-center font-semibold text-yellow-200'>
          Beyond all of this, I build the site what you want.
        </Text>
      </div>

    </div>
  )
}

export default Tech