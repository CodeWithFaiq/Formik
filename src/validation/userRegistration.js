import * as yup from 'yup';


export  const  userRegistration=yup.object({
username:yup.string().required('Please Enter your username').min(6).max(12),
password:yup.string().required('Enter Password').min(4).max(11),
email:yup.string().email().min(7).max(25).required('Please Enter Email')

})