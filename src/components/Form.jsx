import React from 'react'

export default function Form({value, handleChange, onSubmitForm}) {
    console.log('Form')

    return (
        <form className='flex pt-2' onSubmit={e => onSubmitForm(e)}>
            <input className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow' type="text" name="value" placeholder='할 일을 입력하세요.' value={value} onChange={e => handleChange(e)} />
            <input className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400' type="submit" name="value" value="입력" />
        </form>
    )
}
