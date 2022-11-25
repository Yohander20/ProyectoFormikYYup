import React from "react";
import {Container,Form,Button} from "semantic-ui-react"
import {useFormik} from "formik"
import * as Yup from "yup"

export default function App() {

  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      repeatPassword:"",
      category:"",
      accepted:false,
     
    },
  
    
   validationSchema: Yup.object({
    
    name:Yup.string().required("El nombre es obligatorio"),
    email:Yup.string().required("El email es obligatorio").email("No es un email valido"),
    password:Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")],"Las contraseñas no son iguales"),
    repeatPassword:Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("password")],"Las contraseñas no son iguales"),
    category:Yup.string().required("campo obligaotorio"),
    accepted:Yup.bool().isTrue(true)

    }),
   

    onSubmit:(formData)=>{
      alert("Datos Enviados")
    }
  }) 

  return <div>
(
    <Container
    style={{
      textAlign:"center",
      display:"flex",
      alignItems:"center",
      flexDirection:"column",
      justifyContent:"center",
      height:"100vh"
    }}>
      <h1>Formulario de Registro</h1>
      <Form style={{ width:"30%"}} onSubmit={formik.handleSubmit}>
      <Form.Input type="text" placeholder="Nombre y Apellidos" name="name" onChange={formik.handleChange}
      error={formik.errors.name}
      value={formik.values.name}
      />
      <Form.Input type="text" placeholder="Correo Electronico" name="email"  onChange={formik.handleChange}
      error={formik.errors.email}
      value={formik.values.email}
      />
      <Form.Input type="password" placeholder="Contraseña" name="password"  onChange={formik.handleChange}
      error={formik.errors.password}
      value={formik.values.password}
      />
      <Form.Input type="password" placeholder="Repetir Contraseña" name="repeatPassword" 
       onChange={formik.handleChange}
      error={formik.errors.repeatPassword}
      value={formik.values.repeatPassword}
      />

      <Form.Dropdown
         placeholder='Categorias'
        selection
        options={categoriesOptions}
        value={formik.values.category}
        error={formik.errors.title}
        onChange={(_,data)=>formik.setFieldValue("category",data.value)}
        />
        <Form.Checkbox
        style={{padding:"1em"}}
        label="aceptar condiciones"
        checked={formik.values.accepted}
        error={formik.errors.title}
        onChange={(_,data)=>formik.setFieldValue("accepted",data.checked)}
        />
      

      <Button type="submit">
        Registro</Button>

        <Button type="submit" onClick={formik.handleReset}>
        Limpiar Formulario</Button>
      </Form>
    </Container>
    
  );
  </div> 
}

const categoriesOptions=[
  {key:"react", value:"react",text:"react"},
  {key:"next", value:"next",text:"next"}
];


