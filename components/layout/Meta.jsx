import Head from 'next/head'
import React from 'react'

function Meta({title,descr,keywords}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name='description' content={descr}></meta>
        <meta name='keywords' content={keywords}></meta>
    </Head>
  )
}

Meta.defaultProps = {
    title:'crypto news',
    keywords:'crypto coins',
    description:"be updated"
}

export default Meta