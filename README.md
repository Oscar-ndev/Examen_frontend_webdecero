# Examen Prueba de Desarrollo Frontend - React

## Objetivo
El objetivo de este examen es evaluar tu capacidad para trabajar con React, manejar la autenticación de usuarios utilizando una API REST y la maquetación de una página web.

## Observaciones
**Documentación de evidencias**:
- Deberás utilizar el archivo `reports.md` localizado en la raíz del proyecto en el cual responderas las preguntas abiertas dentro del mismo. 
- Si instalas una dependencia o usas algún tipo de patrón, deberás redactar por qué lo utilizaste y por qué consideras que fue la mejor solución.
- Solo está permitido el uso de documentación oficial de dependencias o tecnologías usadas. El uso de algún motor de IA para generar la solución del ejercicio afectara tu evaluacion del examen.

## Instrucciones

- Clona este repositorio de GitHub

- Asegúrate de tener Node.js en su versión 20 o superior instalada en tu equipo.  

- Deberás generar un repositorio público para subir este examen. Al finalizar compartirás el link con el reclutador por el medio que se te haya indicado.

- Instala las dependencias del proyecto para poder utilizarlas e inicializa el proyecto.

- Utiliza la vista de entrada `Login.jsx` que ya cuenta con un formulario básico. 

- Deberás agregar estilos y usar componentes de React para generar la maquetación necesaria para obtener un resultado igual a la imagen adjunta `login_preview.jpg` que se encuentra en la raíz del proyecto. (Es válido modificar el layout de `Login.jsx` si es necesario)

- Debes crear una carpeta para guardar tus componentes. (Redacta para qué es cada componente utilizado).

- Deberás obtener la información del usuario.

- Se requiere validación de datos, utilizando cualquier validador como `react-hook-form` o `Formik`.

- Para la autenticación deberás consumir la API proporcionada en el siguiente enlace (Redacta en el documento indicado con palabras propias qué es una API):
[https://dummyjson.com/docs/auth](https://dummyjson.com/docs/auth)

- Lee atentamente las consultas posibles que proporciona dicha API.

- Implementa la lógica para autenticar al usuario utilizando la API proporcionada.

- En caso de que las credenciales sean correctas, deberás obtener el token de autenticación y realizar la lógica adecuada para redirigir al usuario hacia la vista `Profile.jsx`.

- Para guardar el Token debes hacer uso de `localStorage` y cada vez que el navegador sea refrescado, deberás redireccionar automáticamente a la vista `Profile.jsx`.

- En caso de que la autenticación sea incorrecta, deberás notificar al usuario del fallo. (Puedes usar cualquier funcionalidad para notificar).

- Tras una autenticación exitosa, utilizando la vista `Profile.jsx` y el Token guardado, deberás obtener la información del usuario y mostrarla en la vista misma. Debe ser clara y de fácil lectura. (El diseño de la maquetación quedará a decisión libre, pero deberás también documentar tus observaciones si utilizas alguna biblioteca o framework de maquetado o componentes).

- (Opcional)
- Añade una opción para cerrar sesión, que elimine el token y redirija al usuario a la vista `Login.jsx`.

¡Buena suerte!
