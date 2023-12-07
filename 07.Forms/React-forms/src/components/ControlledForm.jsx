import { useRef, useState, useEffect } from "react";

import styles from './ControlledForm.module.css';

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'Female',
    swimming: false,
    cinema: false,
    books: false,
 }

export default function ControlledForm({
    formRef,
}) {
    const userNameInputRef = useRef();
    const isMountedRef = useRef(false)
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({})

    useEffect(() => {
        userNameInputRef.current.focus()
    }, [])

    // Execute only on update
    useEffect(() => {
        if(isMountedRef.current){
            isMountedRef.current = true
            return;
        }

        console.log('Form is updated');
    }, [formValues])

    const changeHandler = (e) => {
        
        setFormValues(state => ({
            ...state, 
            [e.target.name]: e.target.value,
        }))
    };

    const onCheckboxChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.checked,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState)
    };  

    const submitHandler = (e) => {
        // Validate fields
        // setErrors if needed
        // return

        e.preventDefault()
        console.log(formValues);
        resetFormHandler()
    };

    const ageValidator = ( )=> {
        console.log(formValues.age);

        if(formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120'
            }));
        } else {
            if (errors.age) {
                setErrors(state => ({
                    ...state,
                    age: '',
                }));
            }
    
        }
    }

  return (
        <>

            <h1>Controlled Form</h1>
            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                            ref={userNameInputRef}
                            type="text"  
                            name='username'                          
                            id="username" 
                            value={formValues.username}
                            onChange={changeHandler}                            
                            />
                    </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                            type="password"  
                            name='password'                           
                            id="password" 
                            value={formValues.password}
                            onChange={changeHandler}
                        />
                    </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                            type="number" 
                            name='age'
                            id="age" 
                            value={formValues.age}
                            onChange={changeHandler}
                            onBlur={ageValidator}
                            className={errors.age && styles.inputError}
                            />
                            {errors.age && (
                                <p className={styles.errorMessage}>{errors.age}</p>
                            )}
                </div>

                <div>
                    <label htmlFor="gender">Gender</label>  
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="hobbie">Hobbies</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={onCheckboxChange}/>
                    <label htmlFor="hobbie">Cinema</label>
                    <input type="checkbox" name="cinema" id="cinema" checked={formValues.cinema} onChange={onCheckboxChange}/>
                    <label htmlFor="hobbie">Books</label>
                    <input type="checkbox" name="books" id="books" checked={formValues.books} onChange={onCheckboxChange}/>
                </div>

                <div>
                    <button type="submit" disabled={Object.values(errors).some( x => x)} >Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                    
                </div>
            </form>

        </>
  );
}
