import authFetch from '../../axios/Intercepter' 
import { toast } from 'react-toastify';

export  const userLogin = (data) => {
    // debugger;
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: 'START' });
      // Return promise with success and failure actions
      return authFetch.post("/accounts/authenticate", data).then(  
        user => {
            if (user.status == 200 || user.status == 201) {
                toast.success("Sucessfully Login");
                dispatch({ type: 'SUC', payload: user.data });
              localStorage.setItem("user",JSON.stringify(user.data));
              }
        },
        err => {
            toast.error("Error");
            dispatch({ type: 'FAIL', payload :  err })
        }
      );
    };
  };

