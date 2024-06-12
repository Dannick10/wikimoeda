import React, { useEffect, useState } from 'react'
import { Inoticias } from '../../interfaces/Inoticiasinterface'

export const useNoticiasFetch = (url: string) => {

    const [data,setData] = useState<Inoticias>()
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

