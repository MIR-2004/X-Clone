"use client";
import { Image as IKImage } from "@imagekit/next";

type ImageBase = {
  path: string;
  alt: string;
  className?: string;
};

type ImageWithTransformation = ImageBase & {
  tr: true;
  w: number;
  h: number;
};

type ImageWithoutTransformation = ImageBase & {
  tr?: false;
  w?: number;
  h?: number;
};

type ImageType = ImageWithTransformation | ImageWithoutTransformation;

const urlEndpoint = process.env.NEXT_PUBLIC_ENDPOINT_URL;

const Image = ({ path, w, h, alt, className, tr }: ImageType) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      src={path}
      width={w}
      height={h}
      alt={alt}
      className={className}
      {...(tr ? { transformation: [{ width: `${w}`, height: `${h}` }] } : {})}
    />
  );
};

export default Image;
