import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main className="page-section-secondary">
        <div className="container">
          <h2>Registration Successful</h2>
          <p>Thank you, {name}!</p>
          <p>You have been registered successfully.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-section-secondary">
      <div className="container">
        <h2>Register for TechFest 2026</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </main>
  );
}

export default Registration;
