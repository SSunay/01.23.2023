import * as Yup from 'yup';
 
export const SignupSchema = Yup.object().shape({
    title: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, fill the section!'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, fill the section!'),
    price: Yup.number()
    .min(2, 'Too Short!')
    .max(50000, 'Too Long!')
    .required('Please, fill the section!'),
    img: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, fill the section!'),
  
});

