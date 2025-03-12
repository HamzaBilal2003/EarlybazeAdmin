import React from 'react';
import login_frame_1 from '../assets/icons/login_frame.png';
import LoginImage from '../assets/login.png'
import LoginCan from './components/LoginCan';

const Login: React.FC = () => {
  return (
    <div className='grid grid-cols-12 h-screen'>
      <div
        className='col-span-3 bg-cover bg-center py-8 bg-no-repeat h-full'
        style={{ backgroundImage: `url(${login_frame_1})` }}
      >
        <div className='transform translate-x-[40%]'>
          <h1 className='capitalize mb-8 chivo-bold flex flex-col gap-2 text-4xl chivo-bold  w-[70%]'>
            <span>Admin</span>
            <span>Dashboard</span>
          </h1>
          <div className='h-fit text-white bg-black p-8 rounded-xl min-w-[400px]'>
            <h1 className='text-center text-2xl chivo-bold '>Login</h1>
            <h1 className='text-center chivo'>Login to your dashboard</h1>
            <div className='mt-4'>
              <LoginCan />
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-9 h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${LoginImage})` }}
      >

      </div>
    </div>
  );
};

export default Login;