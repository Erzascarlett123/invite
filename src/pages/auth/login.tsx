import React, { useState } from 'react';
import SignUp from '../../component/signup';
import Login from '../../component/login';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true); // Mengatur formulir mana yang akan ditampilkan

  return (
    <div className="App max-w-md mx-auto p-6">
      {isLogin ? (
        <>
          <Login />
          <p className="text-sm text-center">
            Belum punya akun?{' '}
            <button
              className="text-blue-500 underline"
              onClick={() => setIsLogin(false)}
            >
              Daftar di sini
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUp />
          <p className="text-sm text-center">
            Sudah punya akun?{' '}
            <button
              className="text-blue-500 underline"
              onClick={() => setIsLogin(true)}
            >
              Login di sini
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
