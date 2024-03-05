import { useEffect } from "react";

function SuccessPage() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);
  return (
    <div>
      <h1>You Logged In With Google Successfully !</h1>
    </div>
  );
}

export default SuccessPage;
