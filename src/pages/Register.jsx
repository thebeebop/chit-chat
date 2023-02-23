import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgba(106, 106, 106, 0.4)",

      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function Register() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">ChitChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input type="file" id="file" style={{ display: "none" }}></input>
          <label htmlFor="file">
            <ThemeProvider theme={theme}>
              <AddPhotoAlternateIcon fontSize="large" color="primary" />
            </ThemeProvider>
            <span> Upload avatar image</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
