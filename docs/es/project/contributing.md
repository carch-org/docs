# 📑 Tabla de Contenidos

- [Contribuir a Carch](#contribuir-a-carch)
  - [Entender la Base de Código](#📌-entender-la-base-de-codigo)
  - [Pasos para Contribuir](#pasos-para-contribuir)

- [Contribuir a la Documentación de Carch](#📚-contribuir-a-la-documentacion-de-carch)

- [Directrices](#directrices)

## Contribuir a **Carch** 

¡Estamos emocionados de que estés interesado en contribuir a **Carch**! Las contribuciones de todo tipo son bienvenidas, ya sea que estés arreglando errores, añadiendo nuevas características o mejorando la documentación. Sigue esta guía para comenzar.

> [!WARNING]  
> **Antes de hacer cualquier contribución**, primero abre un issue en la sección **[Solicitud de Características](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)**. Discutiremos los cambios allí antes de proceder con la implementación. 

## 📌 Entender la Base de Código

> [!IMPORTANT]
> Primero, **analiza cómo funciona el script** antes de hacer cualquier cambio. Si quieres mejorar o añadir al proyecto, asegúrate de **entender la estructura** y cómo interactúa cada pieza. Esto te ayudará a contribuir de manera consistente con el diseño del proyecto.
>
> ```md
> Para hacer commits, sigue el estilo de commit convencional:
> feat: tu-mensaje-de-commit o fix: tu-mensaje-de-commit.
> ```
>
> Por cierto, antes de hacer commit:
> - Si cambias algún archivo de script `.sh`, asegúrate de que esté formateado con [`shfmt`](https://github.com/mvdan/sh) y pase [`shellcheck`](https://www.shellcheck.net/)
> - Al actualizar `desc.toml` (scripts o descripciones), ejecuta `cargo xtask ogen` para actualizar `docs/overview.md`
> - Para cambios en cualquier parte de los archivos Rust, ejecuta `cargo xtask ci` para verificar el formato y otras validaciones
> - Si introduces una función nueva que toque directamente el código base de Carch, debes escribir pruebas unitarias para ella. Los cambios simples que no afectan la lógica central están exentos de este requisito.
>
> Asegúrate de no hacer push directamente sin verificar que no haya errores en ningún lado.

> Para más información sobre Commits Convencionales, consulta esta [guía](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).

Si tienes preguntas o necesitas ayuda, no dudes en **contactarnos**:  
📧 Email: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">Únete Aquí</a>  

## Pasos para Contribuir 

### 1. 🍽️ Hacer Fork del Repositorio
- Ve a la página de GitHub de **Carch**.
- Haz clic en el botón **Fork** en la esquina superior derecha para crear tu propia copia del repositorio.

### 2. 🌿 Clonar el Repositorio Forkeado
- Usa el siguiente comando para clonar el repositorio a tu sistema local:

  ```bash
  git clone https://github.com/tu-usuario/carch.git
  ```

- Reemplaza `tu-usuario` con tu nombre de usuario de GitHub.

:::tip :bulb: CONSEJO
**También puedes usar herramientas GUI como `GitHub Desktop` o incluso la interfaz web de GitHub para hacer fork y clonar repositorios. Estas herramientas proporcionan una interfaz visual fácil de usar para gestionar tus contribuciones.**
:::

### 3. 🌱 Establecer el Repositorio Original como Upstream
- Añade el repositorio original de **Carch** como un remoto upstream para mantener tu fork actualizado:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 Crear una Nueva Rama de Características
- Antes de hacer cambios, crea una nueva rama con un nombre descriptivo:

   ```bash
   git checkout -b feature/nombre-de-tu-rama
   ```

- Ejemplos de nombres de ramas:
  - `feature/añadir-nuevo-script`
  - `bugfix/arreglar-problema-instalacion`

### 5. 🔧 Hacer tus Cambios
- Implementa los cambios necesarios en el código o documentación.
- Asegúrate de que tus cambios sean claros, estén probados y sigan los estándares de codificación del proyecto.

### 6. 📝 Preparar y Hacer Commit de tus Cambios
- Añade los archivos modificados al área de preparación:

   ```bash
   git add .
   ```

- Haz commit de tus cambios con un mensaje claro:

   ```bash
   git commit -m "Add: [breve descripción de tus cambios]"
   ```

### 7. 🚀 Empujar los Cambios a tu Fork
- Empuja tu rama a tu repositorio forkeado:

   ```bash
   git push origin feature/nombre-de-tu-rama
   ```

### 8. 📥 Enviar un Pull Request (PR)
- Ve al repositorio original de **Carch** en GitHub.
- Haz clic en **New Pull Request**.
- Selecciona tu rama del menú desplegable y describe tus cambios en detalle.
- ¡Envía el PR para revisión!

## 📚 Contribuir a la Documentación de Carch

#### **La Documentación de Carch** está ➥ [En Vivo Aquí](https://github.com/carch-org/docs)  

### 🚀 Formas de Contribuir

Puedes contribuir:

- 🪛 Arreglando errores tipográficos o errores en las guías existentes  
- 🌐 Traduciendo la documentación a otros idiomas (**¡altamente alentado!**)  

### 🌍 Traducir Documentación

#### ¿Quieres ayudar a hacer Carch accesible para usuarios de todo el mundo? ¡Ayúdanos a traducir la documentación!

Si estás contribuyendo con un **nuevo idioma**, sigue estos pasos:

1. 📁 Crea una nueva carpeta para tu idioma dentro del directorio `docs/`. Usa [códigos ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ej. `fr`, `es`, `hi`, etc.).  
2. 🛠️ Traduce el contenido Markdown dentro de la nueva carpeta.  
3. 🧩 Modifica `docs/.vitepress/config.ts`:  
   - Añade tu idioma en la sección `locales`.  
   - Proporciona un `label`, `lang`, y `link` para la navegación.  

### 🧪 Probar tus Cambios Localmente

Para previsualizar tus cambios:

```sh
bun install
bun run docs:dev
```

> [!IMPORTANT]
> ¡Por favor abre un issue primero si planeas introducir cambios estructurales u organizacionales importantes. Nos encantaría discutir y colaborar en ello de antemano!

### 🧾 Estilo de Commit

Usa mensajes de commit claros como:

```sh
git commit -m "fix(docs): corregir error tipográfico en la guía de instalación"
git commit -m "feat(docs): añadir traducción al hindi"
```

Más sobre [Commits Convencionales](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).

#### 🙌 ¡Gracias por ayudar a mejorar la documentación!

## Directrices

### Calidad del Código
- Sigue el estilo de codificación existente del proyecto.
- Escribe código claro, conciso y bien documentado.

### Pruebas
- Prueba tus cambios localmente para asegurarte de que funcionen como se espera.
- Si tus cambios introducen nuevas características, añade las pruebas necesarias donde sea aplicable.

### Documentación
- Si tus cambios involucran nueva funcionalidad, actualiza la documentación relevante.
- Asegúrate de que el README o Wiki refleje tus actualizaciones.

### Sincronizar tu Fork
- Mantén tu fork actualizado para evitar conflictos:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - Reemplaza `main` con la rama predeterminada del repositorio si es diferente.

¡Gracias por contribuir a **Carch**! Tu esfuerzo ayuda a hacer este proyecto mejor para todos. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />
