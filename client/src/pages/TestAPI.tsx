import React from "react";
import axios from "axios";

const TestAPI = () => {
  const handleAPI = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get("http://localhost:8000/api", {
          headers: {
            token: token,
          },
        });
        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <button onClick={handleAPI}>Call API</button>
    </div>
  );
};

export default TestAPI;
