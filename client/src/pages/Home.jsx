import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../Store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
     
} from '../config/motion';


const Home = () => {
  const snap  = useSnapshot(state);
  return (
    <AnimatePresence>
{snap.intro && (
  <motion.section className='home' {...slideAnimation('left')}>
    <motion.header { ...slideAnimation('down')}>
      <img
      src = './threejs.png'
      alt = 'logo'
      className='w-8 h-8 object-contain'/>
    </motion.header>
    <motion.div className='home-content' {...headContainerAnimation}>
      <motion.div {...headTextAnimation}>
        <h1 className='head-text'>
          THIS <br className='x1:block hidden'/> IS MIKE'S THREEJS APP.
        </h1>
         
      </motion.div>
        <motion.div {...headContainerAnimation} className = 'flex-col gap-5'>
          <p className='max-w-md font-normal text-gray-600 text-base'>
            Coding and Rugby are two things am passionate about.<br></br>
            <strong> I am a computer Science major student who also sums up as a rugby player. </strong> 
             To all these am grateful to God.
          </p>
          <br></br>
          <CustomButton
          type ='filled'
          title = 'Customize it'
          handleClick = {() => state.intro = false}
          customStyles = 'w-fit px-4 py-2.5 font-bold text-sm'/> 
        </motion.div>
    </motion.div>
     </motion.section>

)}
    </AnimatePresence>
    
  )
}

export default Home
