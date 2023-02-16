import authFetch from '../../axios/Intercepter' 
import { toast } from 'react-toastify';

export  const userRegi = (data) => {
    // debugger;
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: 'START' });
      // Return promise with success and failure actions
      return authFetch.post("/accounts/register", data).then(  
        user => {
            if (user.status == 200 || user.status == 201) {
                toast.success("Sucessfully Login");
                dispatch({ type: 'SUC', payload: user.data });
              }
        },
        err => {
            toast.error("Error");
            dispatch({ type: 'FAIL', payload :  err })
        }
      );
    };
  };