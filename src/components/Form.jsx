import React, { useState } from 'react'

export default function Form({value, handleChange, onSubmitForm}) {
    return (
        <form onSubmit={e => onSubmitForm(e)}>
            <input type="text" name="value" placeholder='할 일을 입력하세요.' value={value} onChange={e => handleChange(e)} />
            <input type="submit" name="value" value="입력" />
        </form>
    )
}
