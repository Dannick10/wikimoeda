import React, { useEffect, useState } from 'react'
import { Icoin } from '../../interfaces/IcoinInterface'


export const useFetch = (url: string) => {

    const [data,setData] = useState<Icoin>()
    const [loading,setLoading] = useState<boolean>(false)

    useEffect(() => {

        const FetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch {
                console.log('error')
            }

            setLoading(false) 
        }
        
        FetchData()
    },[url])

    return {data,loading}

}

