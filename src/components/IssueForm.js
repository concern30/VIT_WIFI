import React, { useState } from "react";
import axios from "axios";
import "./styles/IssueForm.css";

const IssueForm = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/issues", { description });
      alert("Issue reported successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Report WiFi Issue</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your issue..."
        />
        <button type="submit">Report</button>
      </form>
    </div>
  );
};

export default IssueForm;
