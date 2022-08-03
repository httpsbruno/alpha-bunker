import { useContext, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { api } from '../../libs/api';
import { useUser } from '../../providers/UserProvider';
import { UserContext } from '../../providers/UserProvider';
import { Input } from '../../components/Input';
import logo from '../../images/logo-bunker.svg';
import { Navigate } from 'react-router-dom';

/**
 * Archive: src/pages/Register.tsx
 *
 * Description: Register page
 *
 * Date: 2022/08/01
 *
 * Author: Athos
 */

export const Register = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const { user } = useUser();

  useEffect(() => {
    setModal(false);
  }, [login]);

  async function handleRegister() {
    if(user){
      user.name = 'Bruno Silva';
      user.email = 'pamonha@gmail.com';
      user.cpf = '123456789';
      user.birthDate = '2022-08-01';
      setLogin(true);
    }
    console.log(user?.name);
    // try {
    //   const result = await api.post('users', {
    //     name: 'Pamonha',
    //     email: 'pamonha@gmail.com',
    //     cpf: '123456789',
    //     birthDate: '2022-08-01',
    //   });

    // } catch (error) {
    //   console.log(error);
    // }
  }

  
  return (
    <>
      {modal && (
        <Modal
          title="Depósito"
          setModal={setModal}
          handleConfirmModal={handleRegister}
        />
      )}
      <div className="flex-col relative text- w-[20rem] p-5 grid justify-items-center">
        <img src={logo} alt="Bunker" className='p-4'/>
        <p className="w-32 h-12 not-italic font-medium text-xl leading-6 text-header-dark dark:text-header-light">Crie sua Conta</p>
        <Input placeholder="Digite seu Nome" type='text'/>
        <Input placeholder="Digite sua data de nascimento" type='data'/>
        <Input placeholder="Digite seu CPF" type='text'/>
        <Input placeholder="Digite seu Email" type='email'/>
        <Input placeholder="Digite sua Senha" type='password'/>
        <Input placeholder="Confirme sua Senha" type='password'/>
      
        <Button
          category="primary"
          label="Cadastrar"
          onClick={() => setModal(true)}
        />
      </div>
      {login && <Navigate to='/deposit' />}
    </>
  );
};
