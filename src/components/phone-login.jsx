import { useState } from "react"
import OtpInput from "./OtpInput"

const PhoneOtpForm = () => {

  const [phoneNumber, setPhoneNumber]= useState('')
  const [showOtpField, setShowOtpField]= useState(false)

  const handlePhoneNumberChange = (e) =>{
    setPhoneNumber(e.target.value)
  }

  const handlePhoneSubmit = (e) =>{
    e.preventDefault();
    const regex= /^[0-9]/g;
    if(phoneNumber?.length< 10 || !regex.test(phoneNumber)){
      alert("Invalid Phone Number");
      return 
    }

    //if any BE exists call it 
    //other functionalities
    setShowOtpField(true)
  }

  const onOtpSubmit=(otp)=>{
    console.log("Login successful", otp)
  }

  return (
    <div>
     {!showOtpField ? <form onSubmit={handlePhoneSubmit}>
        <input 
        type="text"
        value={phoneNumber} onChange={handlePhoneNumberChange}
        placeholder={`Enter phone number`}/>
        <button type="submit">Submit</button>
      </form> : 
      <div>
       <p>
         Otp sent to {phoneNumber}
        </p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
      </div>
      }
    </div>
  )
}

export default PhoneOtpForm