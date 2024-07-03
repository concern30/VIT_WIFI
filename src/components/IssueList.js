import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/IssueList.css";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get("/api/issues");
      setIssues(response.data);
    };
    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Reported Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue._id}>{issue.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
