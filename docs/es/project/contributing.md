# Contribuyendo a **Carch** 

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

¡Estamos emocionados de que estés interesado en contribuir a **Carch**! Las contribuciones de todo tipo son bienvenidas, ya sea que estés corrigiendo errores, añadiendo nuevas características o mejorando la documentación. Sigue esta guía para comenzar.

> [!WARNING]  
> **Antes de hacer cualquier contribución**, primero abre un issue en la sección de **[Solicitud de Características](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)**. Discutiremos los cambios allí antes de proceder con la implementación.  

## 📌 Entender el Código Base

> [!NOTE]
> Antes de contribuir, **entiende la estructura** de Carch:
> - **Los archivos principales de Rust de Carch se encuentran en:** `src`
>
>```sh
> src/
> ├── ui/
> │   ├── app.rs
> │   ├── mod.rs
> │   ├── popups.rs
> │   └── render.rs 
> ├── main.rs 
> ├── commands.rs
> ├── display.rs
> ├── script_list.rs 
> └── version.rs
> ```
> 
> - **Todos los scripts de `módulos` están organizados por categoría en:**  
> ```sh
> modules/
> ├── Browser/     # Scripts relacionados con navegadores 
> ├── Desktop/     # Scripts relacionados con entornos de escritorio
> ├── Development/ # Scripts de herramientas de desarrollo
> ├── System/      # Scripts de configuración del sistema
> └── Terminal/    # Scripts de configuración de terminal
> ```


> [!IMPORTANT]
> Primero, **analiza cómo funciona el script** antes de hacer cualquier cambio. Si quieres mejorar o añadir al proyecto, asegúrate de **entender la estructura** y cómo cada pieza interactúa. Esto te ayudará a contribuir de una manera que sea consistente con el diseño del proyecto. 
>
> ```sh
> Para hacer commits, usa etiquetas como
> feat: tu-mensaje-de-commit o fix: tu-mensaje-de-commit.
> ```
> 
> Para más información sobre Conventional Commits, consulta esta [guía](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).


Si tienes preguntas o necesitas ayuda, no dudes en **contactarnos**:  
📧 Correo: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
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
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 Hacer Tus Cambios
- Implementa los cambios necesarios en el código o documentación.
- Asegúrate de que tus cambios sean claros, probados y sigan los estándares de codificación del proyecto.

### 6. 📝 Añadir y Hacer Commit de Tus Cambios
- Añade los archivos modificados al área de staging:

   ```bash
   git add .
   ```

- Haz commit de tus cambios con un mensaje claro:

   ```bash
   git commit -m "Add: [breve descripción de tus cambios]"
   ```

### 7. 🚀 Enviar los Cambios a Tu Fork
- Envía tu rama a tu repositorio forkeado:

   ```bash
   git push origin feature/nombre-de-tu-rama
   ```

### 8. 📥 Enviar un Pull Request (PR)
- Ve al repositorio original de **Carch** en GitHub.
- Haz clic en **New Pull Request**.
- Selecciona tu rama del dropdown y describe tus cambios en detalle.
- ¡Envía el PR para revisión!

## Directrices

### Calidad del Código
- Sigue el estilo de codificación existente del proyecto.
- Escribe código claro, conciso y bien documentado.

### Pruebas
- Prueba tus cambios localmente para asegurar que funcionen como se espera.
- Si tus cambios introducen nuevas características, añade las pruebas necesarias donde sea aplicable.

### Documentación
- Si tus cambios involucran nueva funcionalidad, actualiza la documentación relevante.
- Asegúrate de que el README o Wiki refleje tus actualizaciones.

### Sincronizar Tu Fork
- Mantén tu fork actualizado para evitar conflictos:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - Reemplaza `main` con la rama por defecto del repositorio si es diferente.

¡Gracias por contribuir a **Carch**! Tu esfuerzo ayuda a hacer este proyecto mejor para todos. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />