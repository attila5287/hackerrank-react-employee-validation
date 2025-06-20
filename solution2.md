# solution 2: success message, changes in error message

```JS
import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'

function App() {
  // Error message constants
const SUCCESS_MESSAGES = {
  name: 'Name is valid',
  email: 'Email is valid',
  employeeID: 'Employee ID is valid',
  joiningDate: 'Joining Date is valid',
}
  const ERROR_MESSAGES = {
    name: 'Name must be at least 4 characters long and only contain letters and spaces.',
    email: 'Email must be a valid email address.',
    employeeID: 'Employee ID must be exactly 6 digits.',
    joiningDate: 'Joining Date cannot be in the future.',
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    employeeID: '',
    joiningDate: '',
  })
  const [error, setError] = useState({
    name: ERROR_MESSAGES.name,
    email: ERROR_MESSAGES.email,
    employeeID: ERROR_MESSAGES.employeeID,
    joiningDate: ERROR_MESSAGES.joiningDate,  
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Always update the form state first
    setForm({ ...form, name: e.target.value });
    
    // Then validate and update error state
    if (e.target.value.length === 0) {
      setError({ ...error, name: ERROR_MESSAGES.name });
    } else if (e.target.value.length < 4 || e.target.value.length > 20) {
      setError({ ...error, name: ERROR_MESSAGES.name });
    } else {
      setError({ ...error, name: "" });
    }
  };  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.target.value });
    if (e.target.value.length === 0) {
      setError({ ...error, email: ERROR_MESSAGES.email });
    } else if (!e.target.value.includes('@') || !e.target.value.includes('.') || e.target.value.includes(' ')) {
      setError({ ...error, email: ERROR_MESSAGES.email });
    } else {
      setError({ ...error, email: "" });
    }
  };
  const handleEmployeeIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, employeeID: e.target.value });
    if (e.target.value.length === 0) {
      setError({ ...error, employeeID: ERROR_MESSAGES.employeeID });
    } else if (e.target.value.length !== 6 || isNaN(Number(e.target.value))) {
      setError({ ...error, employeeID: ERROR_MESSAGES.employeeID });
    } else {
      setError({ ...error, employeeID: "" });
    }
  };
  const handleJoiningDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, joiningDate: e.target.value });
    if (e.target.value.length === 0) {
      setError({ ...error, joiningDate: ERROR_MESSAGES.joiningDate });
    } else if (new Date(e.target.value) > new Date()) {
      setError({ ...error, joiningDate: ERROR_MESSAGES.joiningDate });
    } else {
        setError({ ...error, joiningDate: "" });
    }
  };
  const handlers = {
    name: handleNameChange,
    email: handleEmailChange,
    employeeID: handleEmployeeIDChange,
    joiningDate: handleJoiningDateChange,
  };  
  const forms = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Name',
      value: form.name,
      onChange: handlers.name
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      value: form.email,  
      onChange: handlers.email
    },
    {
      name: 'employeeID',
      label: 'Employee ID',
      type: 'text',
      placeholder: 'Employee ID',
      value: form.employeeID,
      onChange: handlers.employeeID
    },
    {
      name: 'joiningDate',
      label: 'Joining Date',
      type: 'date',
      placeholder: 'Joining Date',
      value: form.joiningDate,    
      onChange: handlers.joiningDate
    },
  ]   

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert('Form submitted for ' + form.name);
    
    // Reset form to initial state
    setForm({
      name: '',
      email: '',
      employeeID: '',
      joiningDate: '',
    });
    
    // Reset error state to initial state
    setError({
      name: ERROR_MESSAGES.name,
      email: ERROR_MESSAGES.email,
      employeeID: ERROR_MESSAGES.employeeID,
      joiningDate: ERROR_MESSAGES.joiningDate,
    });
  }

  // Check if all form fields are valid
  const isFormValid = forms.every((form) => error[form.name as keyof typeof error].includes('no error'));

  return (
    <>
      <Header/>
      <div className="card">
        <form onSubmit={handleSubmit}>
          {forms.map((form) => (
            <div key={form.name}>
              <label className="label">{form.label}</label>
              <input type={form.type} placeholder={form.placeholder} value={form.value} onChange={form.onChange} />
              <p className="error-success-p">
              <span className="error">{error[form.name as keyof typeof error] && error[form.name as keyof typeof error] }</span>
              <span className="success">{!error[form.name as keyof typeof error] && SUCCESS_MESSAGES[form.name as keyof typeof SUCCESS_MESSAGES] }</span>
              </p>
            </div>
          ))}
          {/* IF ALL FORM IS VALID THEN SHOW SUBMIT BUTTON */}
          {isFormValid && (
            <button type="submit" className="visible-submit">
              <i className="fa-solid fa-check icon"></i>
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default App

```