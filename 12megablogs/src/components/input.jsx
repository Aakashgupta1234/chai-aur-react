import react,{useId} from '/react'

const Input = React.forwardRef( function Input({
    level,
    type="text",
    className="",
    ...props
},ref){
    const id= useId()
    return(
        <div className='w-full'>
            {level && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {level}
            
                </label>
        }
        <input
         type={type}
         className={`${className}`}

         ref={ref}
         {...props}
        id={id}
         />

        </div>
    )
})

export default Input