async function Authorization() {
  const token = await localStorage.getItem("token");
  const data = JSON.parse(token);

  if (token) {
    return { Authorization: "Bearer " + data.token };
  } else {
    return {};
  }
}

export default Authorization;
