import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    roll: '',
    name: '',
    gender: '',
    city: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(`Form Submitted!\n${JSON.stringify(formData, null, 2)}`);
    setFormData({
      roll: '',
      name: '',
      gender: '',
      city: '',
      phone: ''
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Roll Number */}
        <div>
          <label>Roll Number: </label>
          <input
            type="text"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            placeholder="Enter Roll Number"
            required
          />
        </div>
        <br />
        
        {/* Name */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>
        <br />

        {/* Gender */}
        <div>
          <label>Gender: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br />

        {/* City */}
        <div>
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
            required
          />
        </div>
        <br />

        {/* Phone */}
        <div>
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </div>
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
