import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
  return (
    <section>
        <div>
          <h2 className='font-size-2 font-bold text-xl text-slate-50'>Get In Touch</h2>
          <div className='w-1/12  bg-indigo-500 h-1'></div>
        </div>
        <div>
            <p className='text-slate-50 text-lg'>
                If you have any questions or would like to get in touch, please feel free to contact me.
            </p>
            <div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <PhoneIcon color='info'></PhoneIcon>
                        <p className='text-slate-50'>+358 46 676 7676</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RoomIcon color='primary'></RoomIcon>
                        <p className='text-slate-50'>Nykarleby, Finland</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MailIcon color='primary'></MailIcon>
                        <p className='text-slate-50'>codingdiary@gmail.com</p>
                    </div>
                </div>
            
            </div>
        </div>
    </section>
  )
}

