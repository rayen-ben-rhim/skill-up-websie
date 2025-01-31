import React from 'react'

const Bannerd = (props) => {
  return (
    <div className='flex w-[171px] h-[60px] p-[14px_12px] justify-center items-center gap-[10px] rounded-[100px] bg-[#E1F396] backdrop-blur-[22px] text-[#004446] font-lexend text-[24px] font-light leading-none capitalize'>
        <p>{props.title}</p>
    </div>
  )
}

export default Bannerd