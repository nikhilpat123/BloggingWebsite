import React ,{useId} from 'react'

const input= React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
      //while using this hook humm ek reference bhi pass krte hain
},ref){
  return (
    <div className='w-full'>
    {label && <label 
    className='inline-block mb-1 pl-1' 
    htmlFor={id}>
        {label}
    </label>
    }
    <input
    type={type}
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
    ref={ref} //jo reference humne user se as a prop liya hai usko yaha se pass krdo ab ye ref hume accesss degi humare parent component ke andar
    {...props} //agar aur koi bhi prop pass kiya hai to usko bhi hum yaha pe likh lenge
    id={id}
    />
     </div>
  )
   
  
})

export default input
