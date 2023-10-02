'use client'
import { CldUploadWidget,CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

interface cloudinaryResult{
    publiicId:string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')
  return (
    <>
    {publicId &&
     <CldImage src={publicId} height={270} width={180} alt='coffee image'></CldImage>}
    <CldUploadWidget
     uploadPreset='mxx2ty2t'
     onUpload={(result,widget) =>{
        if(result.event !== 'success') return;
        const info = result.info as cloudinaryResult
        setPublicId(info.publiicId)

     }}
    >
        {({open}) =>
            <div 
            className="btn btn-primary"
            onClick={()=> open()}>upload</div>
        }
    </CldUploadWidget>
    </>
  )
}

export default UploadPage