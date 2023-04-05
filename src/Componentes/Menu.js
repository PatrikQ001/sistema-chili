import React from "react";
import style from '../Hojas-de-estilos/Menu.module.css'
import Image from "next/image";
const Menu = ()=>{
  
    
    return <div className={style.contenedorMenu}>
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={`${style.listitem} ${style.listitemclick}`}>
                    <div className={`${style.listbutton} ${style.listbuttonclick}`}>
                        <a href="#" className={style.navlink}> Instrumentalizacion</a>
                        <Image
                            src="/Arrow/Arrow.png"
                            alt="Flecha"
                            width={15}
                            height={15}
                            className={style.listarrow}
                        />
                    </div>
                    <ul className={style.listshow}>
                        <li className={style.listinside}>
                            <a href="#" className={`${style.navlink} ${style.navlinkinside}`}>Registro</a>
                        </li>
                        <li className={style.listinside}>
                            <a href="#" className={`${style.navlink} ${style.navlinkinside}`}>Analisis</a>
                        </li>
                        <li className={style.listinside}>
                            <a href="#" className={`${style.navlink} ${style.navlinkinside}`}>Reporte</a>
                        </li>
                    </ul>
                </li>
                <li className={style.listitem}>
                    <div className={style.listbutton}>
                        <a href="#" className={style.navlink}> Resultado</a>
                    </div>
                </li>
                <li className={style.listitem}>
                    <div className={style.listbutton}>
                        <a href="#" className={style.navlink}> Reporte</a>
                    </div>
                </li>
            </ul>
        </nav>
       
        
    </div>
} 

export default Menu;