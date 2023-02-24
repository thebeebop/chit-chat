import Message from "./Message";
import Input from "./Input";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Messages from "./Messages";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgb(255, 255, 255, 0.8)",

      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function Chat() {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Jane</span>
        <div className="chat-icons">
          <ThemeProvider theme={theme}>
            <PersonAddRoundedIcon
              color="primary"
              style={{ cursor: "pointer" }}
            />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <VideoCallRoundedIcon
              color="primary"
              style={{ cursor: "pointer" }}
            />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <MoreHorizRoundedIcon
              color="primary"
              style={{ cursor: "pointer" }}
            />
          </ThemeProvider>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
