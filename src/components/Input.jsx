import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgba(106, 106, 106, 0.6)",

      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..."></input>
      <div className="send">
        <input type="file" id="file" style={{ display: "none" }}></input>
        <input type="file" id="img" style={{ display: "none" }}></input>
        <label htmlFor="file">
          <ThemeProvider theme={theme}>
            <AttachFileRoundedIcon
              color="primary"
              style={{ cursor: "pointer" }}
            />
          </ThemeProvider>
        </label>
        <label htmlFor="img">
          <ThemeProvider theme={theme}>
            <AddPhotoAlternateOutlinedIcon
              color="primary"
              style={{ cursor: "pointer" }}
            />
          </ThemeProvider>
        </label>

        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
