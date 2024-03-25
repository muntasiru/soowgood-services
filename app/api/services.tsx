const apiUrl = "https://soowgoodbeta.com/api/app";
// const apiUrl = "https://localhost:44339/api/app";

export const getUserInfoByToken = async (token: string, role: string) => {
  try {
    if (role === "patient") {
      const response = await fetch(`${apiUrl}/user-accounts/decode-jwt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jwtToken: token,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    }
  } catch (error) {
    throw new Error(`Failed to fetch user data: ${error}`);
  }
};

const fetchData = async (url: string, options: any) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
};
// GET ALL PLATFORM FACILITIEST
export const getplatformList = async () => {
  try {
    return await fetchData(`${apiUrl}/platform-facility`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error(`Failed to fetch platform list: ${error}`);
  }
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
// GET ALL BRANCH LIST BY PROVIDER NAME
// service-provider/branch-list-by-provider-name
export const getDiagnosticBranchByProviderName = async (provider: string) => {
  const response = await fetch(
    `${apiUrl}/service-provider/branch-list-by-provider-name?providerName=${provider}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();

  return result;
};

// GET INDIVIDUAL TEST LIST BY PROVIDER ID
export const getDiagonsticTestByProviderId = async (providerID: string) => {
  console.log(providerID);

  try {
    const response = await fetch(
      `${apiUrl}/diagonstic-test/test-list-by-provider-id/1`,
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
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

// GET INDIVIDUAL TEST LIST BY PROVIDER ID
export const getDiagonsticPackagesByProviderId = async (providerID: string) => {
  console.log(providerID);

  const response = await fetch(
    `${apiUrl}/diagonstic-package/package-list-by-provider-id/${providerID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};

// GET PACKAGE TEST LIST BY PACKAGE ID
export const getPackageTestListByPackageId = async (packageID: string) => {
  console.log(packageID);

  const response = await fetch(
    `${apiUrl}/diagonstic-package-test/test-list-by-package-id/${packageID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};
export const requestPackageTestFromCustomer = async (options: any) => {
  console.log(options);

  try {
    const response = await fetch(`${apiUrl}/diagonstic-service-management`, {
      method: "POST",
      body: JSON.stringify(options),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to post package: ${error}`);
  }
};
export const requestTestFromCustomer = async (options: any) => {
  console.log(options);

  try {
    const response = await fetch(`${apiUrl}/diagonstic-service-management`, {
      method: "POST",
      body: JSON.stringify(options),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to post test: ${error}`);
  }
};
export const requestDiscountByProviderAmount = async (option: number) => {
  try {
    const response = await fetch(
      `${apiUrl}/financial-setup/toal-discount-amount-total-provider-amount?amount=${option}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to post test: ${error}`);
  }
};

// Common function to handle fetch requests

// GET ALL PLATFORM FACILITIES
// export const getPlatformList = async () => {
//   try {
//     return await fetchData(`${apiUrl}/platform-facility`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     throw new Error(`Failed to fetch platform list: ${error}`);
//   }
// };

// // GET ALL DIAGNOSTIC CENTER LIST BY FACILITY SLUG
// export const getDiagnosticCenterListByFacilitySlug = async (slug: string) => {
//   try {
//     return await fetchData(`${apiUrl}/service-provider/by-slug?slug=${slug}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     throw new Error(`Failed to fetch diagnostic center list: ${error}`);
//   }
// };

// // GET ALL BRANCH LIST BY PROVIDER NAME
// export const getDiagnosticBranchByProviderName = async (provider: string) => {
//   try {
//     return await fetchData(
//       `${apiUrl}/service-provider/branch-list-by-provider-name?providerName=${provider}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     throw new Error(`Failed to fetch diagnostic branch list: ${error}`);
//   }
// };

// // GET INDIVIDUAL TEST LIST BY PROVIDER ID
// export const getDiagnosticTestByProviderId = async (providerID: string) => {
//   try {
//     return await fetchData(
//       `${apiUrl}/diagonstic-test/test-list-by-provider-id/${providerID}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     throw new Error(`Failed to fetch diagnostic test list: ${error}`);
//   }
// };

// // GET INDIVIDUAL PACKAGES LIST BY PROVIDER ID
// export const getDiagnosticPackagesByProviderId = async (providerID: string) => {
//   try {
//     return await fetchData(
//       `${apiUrl}/diagonstic-package/package-list-by-provider-id/${providerID}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     throw new Error(`Failed to fetch diagnostic packages: ${error}`);
//   }
// };

// // GET PACKAGE TEST LIST BY PACKAGE ID
// export const getPackageTestListByPackageId = async (packageID: string) => {
//   try {
//     return await fetchData(
//       `${apiUrl}/diagonstic-package-test/test-list-by-package-id/${packageID}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     throw new Error(`Failed to fetch package test list: ${error}`);
//   }
// };
