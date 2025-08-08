import React, { useState } from 'react'
import Header from '../../components/Header'
import FancyInput from '../../components/Input.jsx'
import Button from '../../components/Button.jsx';

function Login() {
    const [on, setOn] = useState(false);
    return (
        <div className='flex items-center flex-col '>
            <Header />
            <div className="flex h-screen w-full ">
                <div className="w-1/2 h-full bg-cover bg-center login-bg flex items-center justify-center flex-col" >
                    <p className='font-[Plus Jakarta Display] font-normal text-[20px] leading-[100%] tracking-[0.18em] text-[#FFFFFF] mb-[16px]'>INSPIRED BY THE FUTURE:</p>
                    <h2 className='font-[Plus Jakarta Display] font-bold text-[36px] leading-[100%] tracking-[0.18em] bg-[linear-gradient(94.56deg,#FFFFFF_79.99%,#21242F_102.65%)] bg-clip-text text-transparent'>THE VISION UI DASHBOARD</h2>
                </div>
                <div className="w-1/2 h-full flex flex-col items-start justify-center pl-[103px] bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)]">
                    <div className="w-full max-w-sm flex items-start justify-center flex-col">
                        <h2 className='font-[Plus Jakarta Display] font-bold text-[30px] leading-[130%] tracking-[0em] text-[#FFFFFF] mb-[7px]'>Nice to see you!</h2>
                        <p className='font-[Plus Jakarta Display] font-medium text-[14px] leading-[140%] tracking-[0em] text-[#A0AEC0] mb-35px]'>Enter your email and password to sign in</p>
                        <FancyInput
                            label="Email"
                            placeholder="Your email address"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mb-4"
                            inputClassName="py-4"
                        />
                        <FancyInput
                            label="Password"
                            placeholder="Your Password"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mb-4"
                            inputClassName="py-4" 
                        />
                        <div className="flex items-center gap-3 mt-[24px] mb-[35px]">
                            { /* Switch */}
                            <div
                                onClick={() => setOn(!on)}
                                className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${on ? 'bg-gradient-to-r from-blue-500 to-[#0075FF]' : 'bg-gradient-to-r from-gray-400 to-gray-600'}`}
                            >
                                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${on ? 'translate-x-7' : ''}`} />
                            </div>

                            <span className="text-white">{on ? 'Remembered' : 'Remember me'}</span>
                        </div>
                        <Button size='md'>SIGN IN</Button>

                        <p className='m-auto mt-[35px] font-[Plus Jakarta Display] font-normal text-[14px] leading-[140%] tracking-[0em] text-[#A0AEC0] mb-35px]'>Don't have an account? <span className='font-bold text-white'>Sign up</span></p>

                        
                        
                    </div>
                    <div className='fixed bottom-15 '>
                        <p className='font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]'>@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</p>
                        <div className='flex items-center justify-center gap-[46px] m-auto mt-2'>
                            <p className='font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]'>Marketplace</p>
                            <p className='font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]'>Blog</p>
                            <p className='font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]'>License</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
