This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Informe

## Descripcion
La aplicación "OnlineStore" es una plataforma de comercio electrónico diseñada para ofrecer una experiencia de compra en línea intuitiva y segura. Su principal objetivo es facilitar la adquisición de productos por parte de los usuarios, brindando un catálogo variado, un proceso de compra sencillo y opciones de pago confiables.

## Funcionalidades Implementadas
La aplicación cuenta con un conjunto de funcionalidades clave que permiten una experiencia de usuario completa:

- Registro y autenticación de usuarios: Los usuarios pueden crear una cuenta y autenticarse mediante un sistema basado en tokens JWT, lo que garantiza la seguridad y privacidad de sus datos.
- Navegación por categorías de productos: La aplicación presenta un catálogo organizado por categorías, facilitando la búsqueda de productos específicos.
- Agregar productos al carrito: Los usuarios pueden agregar productos a su carrito de compras y gestionar su contenido de manera sencilla.
- Proceso de compra y pago: La aplicación ofrece un proceso de compra seguro y eficiente, integrando pasarelas de pago confiables.
- Gestión de pedidos: Los usuarios pueden realizar un seguimiento de sus pedidos, desde la confirmación hasta la entrega.
- Perfil de usuario: Los usuarios pueden gestionar su información personal, historial de pedidos y preferencias.

## Implementación de la Autenticación
### Autenticación
La API utiliza tokens JWT para autenticar las solicitudes. El token se incluye en el encabezado Authorization de cada solicitud.

### Utilización de tokens JWT
Para implementar la autenticación en "MiTiendaOnline", se ha optado por la utilización de JSON Web Tokens (JWT). Los JWT son un estándar abierto para la transmisión segura de información entre partes como un método para implementar autenticación.

### Flujo de autenticación
El flujo de autenticación en la aplicación sigue los siguientes pasos:

- Registro: El usuario proporciona sus datos personales (nombre, correo electrónico, contraseña) para crear una nueva cuenta. La contraseña se almacena en la base de datos de forma segura mediante un algoritmo de hash (por ejemplo, bcrypt).
- Inicio de sesión: El usuario ingresa su correo electrónico y contraseña. La aplicación verifica la contraseña proporcionada con la almacenada en la base de datos. Si las credenciales son válidas, se genera un JWT y se envía al cliente.
- Validación de token: En cada solicitud a un recurso protegido, el cliente envía el JWT en el encabezado de autorización. El servidor valida el token para verificar la identidad del usuario y autorizar el acceso al recurso.
- Almacenamiento de tokens en el navegador
- El JWT generado se almacena en el navegador del cliente utilizando el almacenamiento local (localStorage) o las cookies HTTP. Es importante tener en cuenta las siguientes consideraciones al almacenar tokens:

* Seguridad: El token debe ser almacenado de forma segura para evitar que sea robado o manipulado. Se recomienda utilizar el almacenamiento HTTP-only para las cookies, lo que impide que el JavaScript del cliente pueda acceder a ellas.
* Caducidad: El token debe tener una vida útil limitada para minimizar el riesgo de que sea utilizado si es comprometido.

### JWT:
- Seguridad: Los JWT son difíciles de falsificar debido a la firma digital.
- Stateless: La autenticación basada en JWT no requiere mantener una sesión en el servidor, lo que simplifica la escalabilidad.
- Portabilidad: Los JWT son estándares abiertos y pueden ser utilizados en diferentes plataformas y lenguajes de programación.
- Consideraciones adicionales:

Utilizamos Local storage para recibir el bearer token en dev
Tambien usamos bcrypt y next-auth
Para el next-auth tenemos un componente específico que se usa para el login y para las rutas protegidas