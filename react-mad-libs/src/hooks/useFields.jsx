import React, { useState } from "react";

// Since handling and resetting form fields is a common thing, 
// I had a hook for it so decided to use it to make it easier
const useFields = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { value, name } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const resetFormData = () => {
    setFormData(initialState)
  }
  return [formData, handleChange, resetFormData];
}

export default useFields;
