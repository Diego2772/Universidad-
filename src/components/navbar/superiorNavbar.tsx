import fondo from "../../../public/images/header-superior-principal.jpg"
import logo_derecho from "../../../public/images/ufps_logo.png"
import escudo_colombia from "../../../public/images/escudo_colombia.png"
import sello from "../../../public/images/sello_acreditacion.png"



export default function SuperiorNavbar() {

        return (
          <header className="relative h-[210px] w-full overflow-hidden">
            <img alt="Background" className="object-cover"  src={fondo.src} />
            <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6">
              <img
                alt="Logo Left"
                className="mx-10 z-10"
                height={150}
                src={sello.src}
                style={{
                  aspectRatio: "337/150",
                
                }}
                width={337}
              />
              <img
                alt="Logo Right"
                className="z-10"
                height={130}
                src={escudo_colombia.src}
                style={{
                  aspectRatio: "130/120",
                  objectFit: "cover",
                }}
                width={120}
              />
            </div>
    
          </header>
        )
      }
      
