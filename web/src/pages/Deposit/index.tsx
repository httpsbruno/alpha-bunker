import { useState } from 'react';
import { Menu } from '../../components/Menu';
import { api } from '../../libs/api';
import { InputAgency } from '../../components/InputAgency';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import logoDeposit from '../../images/logo-deposit.svg';

/**
 * Archive: src/pages/Deposit.tsx
 *
 * Description: Deposit page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Deposit = () => {
  const [modal, setModal] = useState(false);

  async function handleDeposit() {
    try {
      const result = await api.post('deposit', {
        agency: '',
        account: '',
        value: '',
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col justify-between h-full overflow-auto'>
      <Menu/>
      <div className="relative flex-col dark:border dark:border-[#424245] items-start rounded-lg p-4">
        <div className="flex items-start mb-2">
          <img src={logoDeposit} alt="Deposit" className='p-2'/>
          <p className="w-24 h-8 not-italic font-medium text-lg leading-1 flex items-center text-yellow-600 flex-none flex-grow-0">
          Depósito
          </p>
        </div>
        <p className="ml-2 h-9 not-italic font-medium text-lg  text-header-dark dark:text-header-light">Dados para Depósito</p>
        <div className="flex items-start p-0 w-64 h-20 flex-none  flex-grow-0">
          <InputAgency placeholder='Agência' status={true} />
          <InputAgency placeholder='Conta' status={true} />
        </div>
        <Input placeholder='Valor' type='text' />
        <Input placeholder='Senha' type='password'/>
        <Button
          category="primary"
          label="Depositar"
          onClick={() => {console.log('Clicou');}}
        />
      </div>
      <div className='h-2'></div>
    </div>
  );
};
