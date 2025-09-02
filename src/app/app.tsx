import Contact from "components/Contact";
import ContactButton from "components/ContactButton";
import Me from "components/Me";
import Projects from "components/Projects";
import Tech from "components/Tech";
import { useState } from "react";
import { Text } from 'react-font'

const App = () => {
  const [showHidden, setShowHidden] = useState(false);

  const handleToggle = () => {
    setShowHidden((prev) => !prev);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <div className="min-h-screen w-screen bg-yellow-100">
      <ContactButton/>
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <span className="text-4xl text-amber-950">
          <Text family='Playful Dispair' style={{ fontSize: 50, margin: 0 }} onLoad={() => console.log('loaded Monoton')}>
              I am Gaye the Front End Developer
          </Text>
        </span>
        <span className="text-m text-gray-600 p-2">
          take a quick look at me but first nox
        </span>

        <label className="inline-flex items-center cursor-pointer p-2">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleToggle}
            checked={showHidden}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none 
                          peer-focus:ring-4 peer-focus:ring-blue-300 
                          dark:peer-focus:ring-amber-900 rounded-full peer 
                          dark:bg-gray-700 peer-checked:after:translate-x-full 
                          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                          after:bg-white after:border-gray-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                          peer-checked:bg-amber-600 dark:peer-checked:bg-amber-600"></div>
        </label>
      </div>

      {showHidden && (
        <div className=" bg-amber-950">
          <Me/>
          <Tech/>
          <Projects/>
          <Contact/>
        </div>
      )}
    </div>
  );
};

export default App;