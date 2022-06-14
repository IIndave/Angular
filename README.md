COMPONENTES:
COMPONENTE HEADER
La aplicación este compuesta por un componente Header que consiste en una barra de navegación fija al borde superior, que contiene los Links de navegación de la aplicación.
COMPONENTE HOME
Posteriormente se encuentra el componente Home que solo se mostrará si el login es correcto. Este componente muestra una lista de usuarios que se obtiene haciendo una llamada get a la API y recogiendo cada uno de los usuarios en otro componente llamado User. El botón Checkout elimina el token del sessionStorage y te redirecciona a la ruta /login.
COMPONENTE USER
Este componente sirve para mostrar los datos de cada usuario en la lista, únicamente compuesto por Input de tipo IUser.
COMPONENTE LOGIN
El componente login está formado por un formulario donde recoge los campos email y contraseña y hace una llamada post a la API y si es correcto, recibe un Token que permite acceder a la visualización del componente Home.
COMPONENTE REGISTER
Está compuesto por un formulario que recoge los campos nombre, apellido, email y contraseña, este hace una llamada post a la API, comprueba que el email no esté repetido y guarda el nuevo objeto User. Una vez completado, te redirecciona a la ruta /login para iniciar sesión.
SERVICIOS:
ApiService: Este servicio es el encargado de recoger las llamadas a la API. Llamadas POST tanto para el login como el register, y llamada GET para obtener la lista de usuarios.
AuthService: Este servicio es el encargado de obtener la información de si el usuario ha iniciado sesión. A este servicio se le llama desde un Guard que contiene la función canActivate que establecerá que hacer dependiendo de la información que reciba. En el app-routing.module se configura que ruta tendrá la propiedad canActivate.
