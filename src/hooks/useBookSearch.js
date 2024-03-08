import React, { useEffect } from 'react'
import axios from 'axios'

const useBookSearch = (query, pageNumber) => {

    useEffect(() =>{
        axios({
            method: 'GET',
            url:'https://openlibrary.org/search.json',
            params:{q: query, page: pageNumber}
        }).then(res => {
            console.log(res.data)
        })
    },[query, pageNumber])

  return 
}

export default useBookSearch