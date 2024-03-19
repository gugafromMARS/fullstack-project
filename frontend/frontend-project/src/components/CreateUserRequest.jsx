export async function CreateUserRequest(user) {
  const response = await fetch("http://localhost:8080/api/user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respData = response.json();

  if (!response.ok) {
    throw new Error("Failed to create a user");
  }

  return respData.message;
}
