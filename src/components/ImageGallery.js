import React from "react";
import { Gallery } from "react-grid-gallery";



export default function ImageGallery(){
    const images = [
        {
           src: "https://lh3.googleusercontent.com/d/1npbgrpETzWNXim4cX5dqCzHDdltml1nN",
           width: 800,
           height: 700,
        },{
        
           src: "https://lh3.googleusercontent.com/d/1H-gZtMNP8S267loYBGHa5YDlEVxAM7MR",
           width: 1100,
           height: 700,
           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: "https://lh3.googleusercontent.com/d/14UBPY3pIddfrrAng4Xt0uSKjdasyffCV",
           width: 1200,
           height: 500,
        },
        {
            src: "https://lh3.googleusercontent.com/d/1fc6rS-U0qfjHFubkGcFN3YJPBRUDlpxX",
            width: 700,
            height: 500,
         },
         {
            src: "https://lh3.googleusercontent.com/d/1NiBnoxLGvTLZwnrr7SPv5_YOLQkI-s6M",
            width: 700,
            height: 500,
         },
         {
            src: "https://lh3.googleusercontent.com/d/1yV92RFvqt_D64i4KDvL2Rnp-2Q9hophl",
            width: 700,
            height: 500,
         },
         {
            src: "https://lh3.googleusercontent.com/d/1Cpov6uwPxd0dK41E2nvVg7RZ4OBvso0v",
            width: 700,
            height: 500,
         },{
            src: "https://lh3.googleusercontent.com/d/1d0W48kITcQ5ajif8NVVtKpCaEzG8T32X",
            width: 700,
            height: 500,
         },{
            src: "https://lh3.googleusercontent.com/d/1FUtLm0F5sUxMpjtVeUV0UauFhEqVVxIw",
            width: 700,
            height: 500,
         },{
            src: "https://lh3.googleusercontent.com/d/1klZDTARBcDScLwcaP1UBAbW4Vj09LDs3",
            width: 700,
            height: 500,
         },
     ];

  return (

     <Gallery images={images}  />
    
  );
}



