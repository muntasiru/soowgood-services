const apiUrl = "https://soowgoodbeta.com/api/app";

export const getplatformList = async () => {
  const response = await fetch(`${apiUrl}/platform-facility`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
