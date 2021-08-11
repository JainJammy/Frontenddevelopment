
export const validation = (values) => {
   let useremail=false;
   let userpassword=false; 
   let errors={};
   if(!values.email)
   {
       errors.emailstate=false
       errors.email="Email Id cannot be blank"
   } 
  /* if(!values.password)
   {
       errors.password="Password is required"
   }*/
   else if(!/\$+@\$+\.\$+/.test(values.email))
   {

    errors.email="Email is invalid"
   }
   /*if(!values.password)
   {
       errors.password="password is required"
   }*/
   /*else if(values.password.lenght<2)
   {
      errors.password="Length of password must be greater than 2" 
   }*/

    
    return errors;
}
