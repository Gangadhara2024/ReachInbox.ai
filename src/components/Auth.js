import axios from "axios";

const authAPI = () => {
  const LoginUser = async (loginInfo) => {
    try {
      await axios({
        url: "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com",
        method: "GET",
        data: loginInfo,
      });
      return { success: true };
    } catch (err) {
      alert("login failed");
      return { success: false };
    }
  };
  return { LoginUser };
};
export default authAPI;
