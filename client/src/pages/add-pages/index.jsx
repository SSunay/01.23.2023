import React from 'react'
import './index.scss'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { SignupSchema } from './schema';
const Addpage = () => {
  return (
    <div className='input'>
     <h1>ADD NEW CUSTOMER</h1>
     <Formik
       initialValues={{
        title:'',
        description:'',
        price:'',
        img:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values ,{ resetForm })=> {
        axios.post('http://localhost:8000/notary',values)
        resetForm();
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="title"  placeholder='Eenter your name.'/>
           {errors.title && touched.title ? (
             <div className='error'>{errors.title}</div>
           ) : null} <br /> <br />
           <Field name="description" placeholder='Eenter your description.' />
           {errors.description && touched.description ? (
             <div className='error'>{errors.description}</div>
           ) : null} <br /> <br />
          
           <Field name="price"  placeholder='Eenter price.' />
           {errors.price && touched.price ? (
             <div className='error'>{errors.price}</div>
           ) : null} <br /> <br />
          
           <Field name="img" placeholder='Eenter your image (Just link and 50x50 px).' />
           {errors.img && touched.img ? (
             <div className='error'>{errors.img}</div>
           ) : null} <br /> <br />
            <button type="submit" className='btn'>Submit</button> 
          
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default Addpage