const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  // csurf package will look for the csrf in the body, query params and headers
  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf, // this is the key in the headers the csurf will look for
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};
