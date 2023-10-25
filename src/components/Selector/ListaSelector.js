import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const ListaSelector = ({title, url, handleChange}) => {
    const {data, error, loading} = useFetch(url);
    console.log(data, error, loading);

    //if(!data) return null;

    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1);
    let options = data.response
  return (
    <>
    <label htmlFor={`id`}>{label}</label>
    
        <select name={id} id={id} onChange={handleChange}>
            <option value=''>Elige el {title}</option>
            {data &&""}
        </select>
    </>
  )
}

export default ListaSelector