// Hook: returns logged in userID from localStorage
export const useGetUserID = () => {
  return window.localStorage.getItem("userID");
};
