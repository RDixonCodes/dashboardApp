import React from 'react';
import { chatData } from '../data/dummy';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '.'

const Notification = () => {

  const { currentColor, handleClick } = useStateContext();

  return (
    <div className='nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between item-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>Notifications</p>
          <button className='text-white text-xs rounded p-1 px-2' style={{backgroundColor: currentColor}} type='button'>5 New</button>
        </div>
        <button
          className='text-2xl p-1 hover:drop-shadow-xl hover:bg-light-gray'
          type='button'
          onClick={() => handleClick('ecommerce')}
          style={{ color: 'rgb(153, 171,180)', borderRadius: '50%'}}
          >
            <MdOutlineCancel />
          </button>
      </div>
      <div className='mt-5'>
        {chatData?.map((item, index) => (
          <div key={index} className='flex items-center leading-8 gap-5 border-b-1 border-color p-3'>
            <img src={item.image}  alt='chat-image'className='rounded-full h-10 w-10' />
            <div>
              <p className='gont-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 text-sm dark:text-gray-400'>{item.desc}</p>
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <Button color='white' bgColor={currentColor} text='See All Notifications' borderRadius='10px' width='full' />
        </div>
      </div>
    </div>
  )
}

export default Notification