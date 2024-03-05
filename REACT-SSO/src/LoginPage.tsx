/* eslint-disable @typescript-eslint/no-unused-vars */
import GoogleButton from "react-google-button";
function LoginPage() {
  const redirectToGoogleSSO = async () => {
    const googleLoginUrl = "http://localhost:3000/api/v1/login/google";
    const newWindow = window.open(
      googleLoginUrl,
      "__blank",
      "width=500,height=600"
    );

    let timer = null;
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yaaaaay Authenticated");
        }
      }, 500);
      if (timer) clearInterval(timer);
    }
  };
  return <GoogleButton onClick={redirectToGoogleSSO} />;
}

export default LoginPage;
