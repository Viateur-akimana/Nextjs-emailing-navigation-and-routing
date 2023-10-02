'use client'
import { CldUploadWidget } from 'next-cloudinary'
import React from 'react'

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset='mxx2ty2t'>
        {({open}) =>
            <div 
            className="btn btn-primary"
            onClick={()=> open()}>upload</div>
        }
    </CldUploadWidget>
  )
}

export default UploadPage