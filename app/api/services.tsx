// const apiUrl = "https://soowgoodbeta.com/api/app";
const apiUrl = "https://localhost:44339/api/app";

// GET ALL PLATFORM FACILITIEST
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

// GET ALL DIAGNOSTIC CENTER LIST
export const getDiagnosticCenterListByFacilitySlug = async (slug: string) => {
  const response = await fetch(
    `${apiUrl}/service-provider/by-slug?slug=${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  console.log(result);

  return result;
};
