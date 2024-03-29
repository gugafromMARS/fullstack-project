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

export async function getProjects(userEmail) {
  const response = await fetch(
    `http://localhost:8081/api/projects?userEmail=${userEmail}`
  );

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get projects");
  }

  return respData;
}

export async function addTask(project, task) {
  const response = await fetch(
    `http://localhost:8081/api/projects/${project.id}/tasks`,
    {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to add task");
  }

  return respData;
}

export async function createProject(newProject) {
  const response = await fetch("http://localhost:8081/api/projects", {
    method: "POST",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to create new project");
  }

  return respData;
}

export async function deleteProject(project) {
  const response = await fetch(
    `http://localhost:8081/api/projects/${project.id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Cant delete project ");
  }
}

export async function deleteTask(project, task) {
  const response = await fetch(
    `http://localhost:8081/api/projects/${project.id}/tasks/${task.id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Cant delete task");
  }
}
