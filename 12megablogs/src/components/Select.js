import React,{useId} from '/react'

function Select ({
    option,
    label,
    className,
    ...props
},ref){
    const id = useId
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`${className}`}
            >
             {option?.map()}
            </select>
        </div>
    )
}

export default Select