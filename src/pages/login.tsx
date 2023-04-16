import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData, loginFunc } from '../api/login';

interface Props {
  onSuccess: () => void;
}

function Login({ onSuccess }: Props): JSX.Element {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData(checkLogin);
      setUserData(data);
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
    } else {
      setError('Incorrect username or password.');
    }
  };

  const checkLogin: loginFunc = (username, password) => {
    if (userData && userData.username === username && userData.password === password) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className="header w-[400px] h-[300px] bg-aliceblue border border-solid border-gray-400 box-border rounded-3xl shadow-lg align-center justify-center mx-auto my-[10%] p-[20px] flex flex-col p-y-[50px]">
        <h1 className="theader text-center text-lg md:text-2xl font-bold text-blue-500 mb-8 align-center justify-center">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col">
          <label htmlFor="username" className="mb-6 ">
            <input className="username h-10 w-[350px] bg-white border border-gray-300 p-2 mb-4 rounded-lg focus:bg-blue-100 hover:bg-blue-100" type="text" placeholder="Username" name="username" />
          </label>
          <label htmlFor="password" className="mb-6">
            <input className="password h-10 w-[350px] bg-white border border-gray-300 p-2 mb-4 rounded-lg focus:bg-blue-100 hover:bg-blue-100" type="password" placeholder="Password" name="password" />
          </label>
          {error && <div className="text-red-700">{error}</div>}
          <button className="justify-center items-center bg-blue-500 mx-auto w-[100px] h-[40px] p-[10px] rounded-[8px] font-['Open_Sans']" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;