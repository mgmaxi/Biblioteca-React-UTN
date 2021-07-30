import React, {useState, useEffect} from 'react';

const NewBook = ({submitForm}) => {

    const [values,setValues] = useState({
        nombre: "",
        descripcion: "",
        categoriaid:"",
    })

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setdataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues ({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

/* validacion */

    const validation = (values) => {

        let errors = {};
    
        if(!values.nombre){
            errors.nombre="Nombre no puede estar vacio"
        }
        if(!values.categoriaid){
            errors.categoriaid="Categoria no puede estar vacio"
        } 
        
        if (!values.descripcion){
            errors.descripcion="Ingrese una descripción."
        } else if (values.descripcion.length > 50 ){
            errors.descripcion ="La descripcion no puede tener menos de 50 caracteres"
        }
    
        return errors;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setdataIsCorrect(true);
    }

    useEffect(()=> {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }

    }, [errors]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title"> Libro nuevo
                    </h2>
                </div>
                <form action="">
                    <div className="name">
                        <label className="label">Nombre</label>
                        <input type="text" className="input" name="nombre" values={values.nombre} onChange={handleChange} />
                        {errors.nombre && <p className="error">{errors.nombre}</p>}
                    </div>
                    <div className="descripcion">
                        <label className="label">descripcion</label>
                        <input type="text" className="input" name="descripcion" values={values.descripcion} onChange={handleChange} />
                        {errors.descripcion && <p className="error">{errors.descripcion}</p>}
                    
                    </div>
                    <div className="categoriaid">
                        <label className="label">categoriaid</label>
                        <input type="text" className="input" name="categoriaid" values={values.categoriaid} onChange={handleChange} />
                        {errors.categoriaid && <p className="error">{errors.categoriaid}</p>}

                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Agregar Libro</button>
                    </div>

                </form>

            </div>   

        </div>
    )
}

export default NewBook;