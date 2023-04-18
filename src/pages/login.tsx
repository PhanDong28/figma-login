import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bigc from '../assest/images/bigc.png'
import Logo from '../components/Logo';
import Frame from '../components/Frame';
import Moreselect from '../components/Moreselect';



interface Props {
  onSuccess: () => void;
}

interface User {
  username: string;
  password: string;
}

const LOGIN_API_URL = 'https://6411e02cf9fe8122ae168796.mockapi.io';

function Login({ onSuccess }: Props): JSX.Element {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${LOGIN_API_URL}/login`);
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const isLoginSuccess = checkLogin(username, password);
    if (isLoginSuccess) {
      onSuccess();
      navigate('/homepage');
      localStorage.setItem('isLoginSuccess', 'true')
    } else {
      setError('Incorrect username or password.');
    }
  };

  const checkLogin = (username: string, password: string): boolean => {
    return userData.some((user) => user.username === username && user.password === password);
  };
  
  return (
    <div className='login w-full flex h-screen bg-[#FFFFFF] relative'> 
      <div className='form w-2/3 justify-center items-flex-start flex flex-col gap-10'>
        <div className='justify-center items-flex-start flex flex-col gap-10 w-[436px] h-[602px] m-auto'>
        <Logo/>
        <div className="content flex flex-col justify-center items-center p-0 gap-1 order-0">
          <form action="Sign in form">
          <Frame />
          </form>
          <div>
            <Moreselect />
          </div>
            </div>
          </div>
        </div>
      <div className='w-1/3 h-full '> 
        <img src={bigc} className='h-full '/>
      </div>
    </div>
  );
}

export default Login;
