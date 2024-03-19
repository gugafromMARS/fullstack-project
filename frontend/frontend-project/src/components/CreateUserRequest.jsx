export async function CreateUserRequest(user) {
  const response = await fetch("http://localhost:8080/api/user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to create a user");
  }

  return respData.message;
}

export async function LoginRequest(userCredentials) {
  const response = await fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to Login");
  }

  return respData;
}
