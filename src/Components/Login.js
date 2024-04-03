// import React, { useState } from "react";

// const loginContainerStyle = {
//   display: "flex",
//   justifyContent: "center", 
//   alignItems: "center", 
//   height: "100vh", 
// };

// const loginBoxStyle = {
//   border: "1px solid #ccc",
//   padding: "20px",
//   borderRadius: "5px",
//   maxWidth: "300px",
// };

// const loginButtonStyle = {
//   backgroundColor: "#007bff",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// const inputStyle = {
//   marginBottom: "10px", 
// };

// const buttonContainerStyle = {
//   marginTop: "10px",
// };

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (username.trim() !== "" && password.trim() !== "") {
//       onLogin();
//     }
//   };

//   return (
//     <div style={loginContainerStyle}>
//       <div style={loginBoxStyle}>
//         <h2>Login</h2>
//         <div style={inputStyle}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div style={inputStyle}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div style={buttonContainerStyle}>
//           <button style={loginButtonStyle} onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from "react";

// const loginContainerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
// };

// const loginBoxStyle = {
//   border: "1px solid #ccc",
//   padding: "20px",
//   borderRadius: "5px",
//   maxWidth: "300px",
// };

// const loginButtonStyle = {
//   backgroundColor: "#007bff",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// const inputStyle = {
//   marginBottom: "10px",
// };

// const buttonContainerStyle = {
//   marginTop: "10px",
// };

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // State for error message

//   const handleLogin = () => {
//     // Check if the username and password are correct
//     if (username === "correctUsername" && password === "correctPassword") {
//       onLogin(); // Login successful
//     } else {
//       setErrorMessage("Incorrect username or password. Please try again."); // Set error message
//     }
//   };

//   return (
//     <div style={loginContainerStyle}>
//       <div style={loginBoxStyle}>
//         <h2>Login</h2>
//         <div style={inputStyle}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div style={inputStyle}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Display error message */}
//         <div style={buttonContainerStyle}>
//           <button style={loginButtonStyle} onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const loginBoxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "5px",
  maxWidth: "300px",
};

const loginButtonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const inputStyle = {
  marginBottom: "10px",
};

const buttonContainerStyle = {
  marginTop: "10px",
};

const errorMessageStyle = {
  color: "red",
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace these with your actual username and password validation logic
    // For example, you might check them against a database or an API.
    const correctUsername = "Kirann";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
      onLogin();
      navigate("../Features/cocktail.js"); // Replace "/cocktails" with your actual route
    } else {
      setErrorMessage("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div style={loginContainerStyle}>
      <div style={loginBoxStyle}>
        <h2>Login</h2>
        <div style={inputStyle}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={inputStyle}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
        <div style={buttonContainerStyle}>
          <button style={loginButtonStyle} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
