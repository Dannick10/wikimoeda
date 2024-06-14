import React from 'react'
import { useWikiFetch } from '../../Hooks/useWikiFetch'
import DOMPurify from 'dompurify'

import styles from './Wikires.module.css'

const Wikires = () => {

  const paramsString: string = window.location.search
  const urlParams: URLSearchParams = new URLSearchParams(paramsString)

  const dataValue: string | null = urlParams.get('q')
  console.log(dataValue)
  
  const url: string = `https://pt.wikipedia.org/w/api.php?action=parse&page=${dataValue}&format=json&prop=text&origin=*`

  const { data, loading } = useWikiFetch(url)


  if (!data || !data.parse || !data.parse.text) {
    return <div>No data found</div>;
  }


  const sanitizedHtml: string = DOMPurify.sanitize(data.parse.text['*'])
  
  return (
    <div className={styles.wikires}>
      <h2>{data.parse.title}</h2>
   
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  )
}

export default Wikires