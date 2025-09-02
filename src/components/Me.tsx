
import { Text } from 'react-font'
import linkedinprofil from '/images/linkedinprofil.jpeg'
const Me = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2 z-10"></div>
      <div className="flex items-center justify-center w-full max-w-6xl px-8">
        <div className="w-1/2 flex items-center justify-center">
          <img 
            src={linkedinprofil} 
            className="w-64 h-auto rounded-2xl shadow-2xl border-4 border-white/10
                       transform hover:scale-105 transition-all duration-300"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center pl-8">
          <div className="text-left">
            <div data-aos="fade-down" data-aos-delay="300">
              <h2 className="text-4xl font-bold text-yellow-100 mb-6">MEET ME</h2>
            </div>
            <div className="text-xl text-yellow-100 leading-relaxed max-w-md">
              <Text family="Playful Dispair">
                I'm Gaye, a computer engineering student. I work on 
                web design and web development. I actually like 
                microcontrollers too, but we can talk about that another 
                time if you interested.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me