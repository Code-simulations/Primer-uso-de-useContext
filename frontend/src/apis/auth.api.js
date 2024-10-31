const reqLogin = async (name, pass) => {
  const req = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: name, password: pass }),
    credentials: "include",
  });
  const res = await req.json();
  const message = res.message;
  return { message };
};

const reqSession = async () => {
  const req = await fetch("http://localhost:4000/session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const res = await req.json();
  return res;
};
