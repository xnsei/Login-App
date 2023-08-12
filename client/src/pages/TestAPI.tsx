import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TestAPI = () => {
  const navigate = useNavigate();

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

  const authenticateMe = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get("http://localhost:8000/authenticate", {
          headers: {
            token: token,
          },
        });
        if (response.status === 200) {
          console.log(response.data);
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    authenticateMe();
  }, []);

  return (
    <div>
      <button onClick={handleAPI}>Call API</button>
    </div>
  );
};

export default TestAPI;
