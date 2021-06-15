export const Auth = () => {
  try {
    //redireccionar al profile si ya esta logueado
    var user_test = JSON.parse(sessionStorage.getItem("session"));
    if (user_test != null) {
      $router.push("/Profile");
    }
  } catch (error) {
    console.log(error);
  }
};
