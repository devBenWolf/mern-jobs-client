import {useState, useEffect, useContext} from "react"
import Wrapper from "../assets/wrappers/RegisterPage"
import {Alert, FormRow} from "../components"
import { AppContext } from "../context/appContext"

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}



const Register = () => {
  const {isLoading, showAlert} = useContext(AppContext)
  const [values, setValues] = useState(initialState)

  const handleChange = (event) => {
    const {name, value} = event.target
    setValues({
      ...values,
      [name]: value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  console.log(values)

  return (
    <Wrapper className = "full-page">
      <form 
        onSubmit={handleSubmit} 
        className="form"
      >
      <h3>{values.isMember ? "Login" : "Register"}</h3>
      {showAlert && <Alert />}
      <div className='form-row'>
        {!values.isMember && (  
          <FormRow 
            type="text" 
            name="name" 
            value={values.name} 
            handleChange={handleChange}
          />
        )}
        <FormRow 
          type="email" 
          name="email" 
          value={values.email} 
          handleChange={handleChange}
        />
        <FormRow 
          type="password" 
          name="password" 
          value={values.password} 
          handleChange={handleChange}
        />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {!values.isMember ? "Not a member yet?" : "Already a member?"}
          <button 
            type="button"
            onClick = {toggleMember}
            className = "member-btn"
            
          >{values.isMember ? "Login": "register"}

          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register