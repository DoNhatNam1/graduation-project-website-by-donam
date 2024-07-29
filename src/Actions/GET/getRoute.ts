import { RouteActionTypes } from "@/src/types/testing";

// Define action to fetch all user data
export default async function getRoute(actions: RouteActionTypes) {
  try {
    let numRequests = 0;
    let requests = [];
    
    switch (actions) {
      case "btn1000":
        numRequests = 1000;
        break;
      case "btn3000":
        numRequests = 3000;
        break;
      case "btn10000":
        numRequests = 10000;
        break;
      case "default":
        return { success: 0, failure: 0 }; // No requests
      default:
        return { success: 0, failure: 0 }; // Invalid action
    }

    for (let i = 0; i < numRequests; i++) {
      requests.push(
        fetch(`/api/dummy-endpoint`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(response => {
          if (response.ok) {
            return { success: true };
          } else {
            return { success: false };
          }
        }).catch(() => {
          return { success: false };
        })
      );
    }

    // Process results
    const results = await Promise.all(requests);
    const successCount = results.filter(result => result.success).length;
    const failureCount = results.length - successCount;

    return { success: successCount, failure: failureCount };

  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Error fetching user data");
  }
}
