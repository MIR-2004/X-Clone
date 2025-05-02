"use client"
import { Image as IKImage } from "@imagekit/next"

type ImageType = {
    path: string,
    w?: number,
    h?: number,
    alt: string,
    className?: string
}

const urlEndpoint = process.env.NEXT_PUBLIC_ENDPOINT_URL;


const Image = ({path, w, h, alt, className}: ImageType) => {
  return (
      <IKImage urlEndpoint={urlEndpoint} src={path} width={w} height={h} alt={alt} className={className}/>
  )
}

export default Image