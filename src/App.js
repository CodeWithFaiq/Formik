import React from 'react';

import { useFormik } from 'formik';
import { userRegistration } from './validation/userRegistration';
import { Box, Button, TextField } from '@mui/material';


function App() {
  const initialValues={
   username:'',
   password:'',
   email:''
  }

const {handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
  initialValues:initialValues,
  validationSchema:userRegistration,
  onSubmit:(values)=>{
    console.log(values)
   console.log(values.username)
   
  }
  
})


//  console.log(errors);

  return (
    <>
  <Box sx={{display:'flex',height:'300px',alignItems:'center',justifyContent:'center'}}>
<Box mt={2}> 
<Box mt={2} sx={{width:'400px'}}>
   <TextField
  name='username'
  placeholder='Enter UserName'
  onChange={handleChange}
  variant='outlined'
sx={{width:'100%'}}
onBlur={handleBlur}
error={errors.username && touched.username ? true:false}
helperText={errors.username && touched.username ? errors.username : ''}
   />
</Box>

<Box mt={2} sx={{width:'400px'}}>
   <TextField
  name='password'
  placeholder='Enter Password'
  onChange={handleChange}
  variant='outlined'
sx={{width:'100%'}}
onBlur={handleBlur}
error={errors.password && touched.password ? true:false}
helperText={errors.password && touched.password ? errors.password : ''}
   />
</Box>

<Box mt={2} sx={{width:'400px'}}>
   <TextField
  name='email'
  placeholder='Enter Email'
  onChange={handleChange}
  variant='outlined'
sx={{width:'100%'}}
onBlur={handleBlur}
error={errors.email && touched.email ? true:false}
helperText={errors.email && touched.email ? errors.email : ''}
   />
</Box>
<Box>
  <Button variant='contained' color='primary' onClick={handleSubmit}> Sign In </Button>
</Box>
</Box>


  </Box>


    </>
  );
}

export default App;
