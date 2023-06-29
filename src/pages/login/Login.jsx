import React from 'react'
import './Login.scss'
import img from "../../assets/Rectangle 38.png"
import { useNavigate } from 'react-router-dom'
import InputBox from '../../components/form/InputBox'
export default function Login() {

const navigate=useNavigate();
  function changeHandler(e){

  }
  return (
    <div className='main-login-wrapper'>
      <div className="login-frame d-flex ">
        <div className="w-50">
          <img src={img} className=' w-100 h-100 object-fit-cover' alt="Login image" />
        </div>
        <div className="w-50 form-frame">
          <div className="loign-head">
          <h4 className='fs-22 black-262 fw-bold m-0'>Login</h4>
          <h6 className='fs-16 black-262 fw-light m-0'>Donec tortor quam at duis tortor.</h6>
          </div>
          <div className="input-fields-frame">
          <InputBox type='text' label="E-Mail" value=''  placeholder='Placeholder content' onChange={changeHandler}/>
          <InputBox type='text' label="E-Mail" value=''  placeholder='Placeholder content' onChange={changeHandler}/>
          <p className='black-525 w-100 fs-14 d-flex align-items-center justify-content-end pointer m-0'>Forgot password?</p>
          <button className='primary-btn w-100 fs-16'  onClick={()=>navigate('/dashboard')} >Login</button>
          </div>
          <div className="hr-line-or ">
            <div className="line"></div>
            <div className="fs-12 or black-A3A">or</div>
            <div className="line"></div>
          </div>
          <button className='secondary-btn w-100 fs-16'>Register now</button>
        </div>
      </div>
    </div>
  )
}
