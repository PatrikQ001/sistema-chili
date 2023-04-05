//import React from "react";
import { useForm } from "react-hook-form";
import style from '../Hojas-de-estilos/Formulario.module.css'


const Formulario = ()=>{
    
    const {register,formState:{errors},handleSubmit} = useForm();
    const onSubmit=(data)=>{// se reciben los datos del formulario
        console.log(data);
        
    };
    

    
    return <div className={style.contenedorformulario}>
        <h2>Represas - Sistemas Chile - Represa1</h2>
        <form className={style.division} onSubmit={handleSubmit(onSubmit)}>
            
            <div className={style.formularioizquierda}>
                <div className={style.contenedores}>
                    <label className={style.texto}>Seleccionar el Instrumento</label>
                    <select className={style.dropbox}{...register('instrumento')}>
                        <option value="primero">Primero</option> 
                        <option value="segundo">Segundo</option> 
                        <option value="tercero">Tercero</option> 
                    </select>
                    
                    
                </div>
                <div className={style.contenedores}>
                    <label className={style.texto}>Cota del Fondo del Tubo <br></br>Piezométrico</label>
                    <input className={style.cuadro} placeholder="Ingrese un valor numerico" type="number" {...register('fondo',{
                        required:true
                    })}/>
                    {errors.fondo?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                </div>
                <div className={style.contenedores}>
                    <label className={style.texto}>Profundidad del tubo  <br></br>Piezométrico</label>
                    <input className={style.cuadro} placeholder="Ingrese un valor numerico" type="number"{...register('profundidad',{
                        required:true
                    })}/>
                    {errors.profundidad?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                </div>
                <div className={style.contenedores}>
                    <label className={style.texto}>Altura del agua</label>
                    <input className={style.cuadro} placeholder="Ingrese un valor numerico" type="number" {...register('altura',{
                        required:true
                    })}/>
                    {errors.altura?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                </div>
                <div className={style.contenedores}>
                    <label className={style.texto}>Cota nivel Hidroestático</label>
                    <input className={style.cuadro} placeholder="Ingrese un valor numerico" type="number" {...register('nivel',{
                        required:true
                    })}/>
                    {errors.nivel?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                </div>
            </div>
           
            <div className={style.formularioderecha}>
                <p>Lectura Base</p>
                <div className={style.contenedores}>
                    <label className={style.texto}>Fecha</label>
                    <input className={style.cuadro} placeholder="Ingrese una fecha" type="date" {...register('fecha',{
                        required:true
                    })}/>
                    {errors.baseizquierda?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                   
                </div>
                <div className={style.contenedores}>
                    <label className={style.texto}>Lectura Base Izquierda</label>
                    <input className={style.cuadro} placeholder="Ingrese un valor numerico" type="number" {...register('baseizquierda',{
                        required:true
                    })}/>
                    {errors.baseizquierda?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                </div>
                <div className={style.contenedores}>
                    <label className={style.texto}>Lectura Base Derecha</label>
                    <input className={style.cuadro} placeholder="Ingrese un valor numerico" type="number" {...register('basederecha',{
                        required:true
                    })}/>
                    {errors.basederecha?.type === 'required' && <p className={style.textoerror}> *El campo es requirido*</p>}
                </div>
                <input className={style.enviar} type="submit"value="Registrar"/>
            </div>
            
        </form>
    </div>
}

export default Formulario;