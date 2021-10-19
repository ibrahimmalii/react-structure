import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Axios/AxiosInstance'
import CardComponent from '../../components/Card/CardComponent'

export default function Books() {

    const [booksInfo, setBooksInfo] = useState([])
    const [searchValues , setSearchValues] = useState({
        searchKey: ''
    })

    useEffect(() => {
        axiosInstance.get('/volumes', {params : {  q: 'keyword'}}).then(response=>{
            setBooksInfo(response.data.items)
        }).catch(console.error)
    },[])

    useEffect(() => {
        if(booksInfo.length == 0){
            axiosInstance.get('/volumes', {params : {  q: 'keyword'}}).then(response=>{
                setBooksInfo(response.data.items)
                setSearchValues({ 
                    searchKey: ''
                })
            }).catch(console.error)
        }
    },[booksInfo])

    const search = (e) =>{
        setSearchValues({ 
            searchKey: e.target.value
        })

        let latesArr = booksInfo.filter((book)=>{
            return book.volumeInfo.title.toLowerCase().includes(searchValues.searchKey.toLowerCase())
        })

        console.log(latesArr)
        if(setBooksInfo){
            setBooksInfo([...latesArr])
        }

    }

    return (
        <>
        <div className="container row">
            <input type="text" className="form-control my-3" onChange={search} value={searchValues.searchKey} />
            {booksInfo.map((book, index)=><CardComponent data={book} key={index} />)}
        </div>
        </>
    )
}
