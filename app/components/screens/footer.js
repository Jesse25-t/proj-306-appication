import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className='flex flex-col items-center text-center text-white text-sm p-7'>
        <p>Discover more about me and my projects on</p>
        <div className='flex space-x-2'>
          <a href="https://www.linkedin.com/in/jesse-thomas-b77971260/" target="_blank" rel="noopener noreferrer" className='flex items-center'>
            <FaLinkedin />
            <span className='ml-1'>LinkedIn</span>
          </a>
          <a href="https://github.com/Jesse25-t" target="_blank" rel="noopener noreferrer" className='flex items-center'>
            <FaGithub />
            <span className='ml-1'>GitHub</span>
          </a>
        </div>
      </footer>
    );
}