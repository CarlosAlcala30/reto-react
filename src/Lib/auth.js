const BASE_URL = "http://localhost:8080";

export default {
  async login(credential) {
    let result = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    return await result.json();
  },
};
