import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='text-2xl'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Inicio</li>
          </Link>
          <Link to='/about'>
            <li>Sobre</li>
          </Link>
          <Link to='/signIn'>
            <li>Iniciar Sesion</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
