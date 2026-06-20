# ⌨ Combinaciones de teclas de TUI

En carch tenemos algunas combinaciones de teclas que se utilizan para navegar e interactuar con la TUI. Siempre puedes ver todas las combinaciones presionando `?` dentro de la TUI de carch.

Aquí hay información clara sobre las combinaciones que puede ayudarte a entender cómo usarlas correctamente.

---

## Navegación

Usamos las teclas de navegación de vim para el movimiento (arriba, abajo, izquierda, derecha).

- `j` → mover hacia abajo
- `k` → mover hacia arriba
- `h` → mover hacia la izquierda
- `l` → mover hacia la derecha

También puedes usar las teclas de flecha para el movimiento:

- `↑` → mover hacia arriba
- `↓` → mover hacia abajo
- `←` → mover hacia la izquierda
- `→` → mover hacia la derecha

Puedes preferir las teclas de vim o las teclas de flecha, lo que te resulte más cómodo.

---

## Ejecutar scripts

Para acciones rápidas como ejecutar un script:

- Navega a cualquier script en el lado derecho y presiona `Enter` para ejecutarlo.
- Si eres un entusiasta de Neovim, también puedes presionar `l` para ejecutarlo.

Cuando aparezca la confirmacion:

- Presiona `y`, `l` o `→` para confirmar y ejecutar.
- Presiona `n`, `h`, `Esc`, `q` o `←` para cancelar.

---

## Modo de selección múltiple

No puedes ejecutar múltiples scripts exactamente al mismo tiempo, pero puedes seleccionar múltiples scripts y se ejecutarán uno por uno en el orden que seleccionaste.

Para usar la selección múltiple:

- Presiona `m` para entrar al modo de selección múltiple
- Presiona `Espacio` para seleccionar scripts
- Presiona `Enter` para ejecutarlos
- Presiona `Esc` o `q` para salir del modo de seleccion multiple

Se ejecutarán uno por uno después de que cada uno termine.

---

## Temas

Carch TUI tambien tiene multiples temas. Puedes establecer un tema por defecto que se recordara entre sesiones.

- Presiona `t` para abrir el selector de temas
- Usa `j`/`k` o `↑`/`↓` para navegar temas
- Presiona `Enter` para establecer el tema seleccionado como predeterminado
- Presiona `Esc`, `q` o `t` para cerrar sin cambiar

El tema elegido se guarda y se usara en futuros lanzamientos. Tambien puedes usar la opcion `--set-theme` en CLI para establecerlo desde la terminal.

---

## Búsqueda

También tenemos una opción de búsqueda en caso de que quieras encontrar rápidamente cualquier script sin tener que ir y venir.

- Presiona `/` para entrar al modo de búsqueda
- Escribe el nombre del script
- Puedes usar la autocompleción con tabulador
- Presiona `Enter` para navegar a ese script

---

## Vista previa

Si quieres revisar el script antes de ejecutarlo:

- Presiona `p` para ver una vista previa del script

Esto te ayuda a entender lo que hace el script antes de ejecutarlo.

---

## Descripción

El modo de descripción muestra información breve sobre el script. Esto es útil especialmente para principiantes para entender de qué trata el script.

- Ve al lado derecho donde está la lista de scripts
- Presiona `d` para ver la descripción del script seleccionado
- Presiona `Esc`, `q` o `d` para cerrar

---

## Ayuda

- Presiona `?` en cualquier momento para abrir la ventana de ayuda con todas las combinaciones de teclas
- Presiona `Esc`, `q` o `?` para cerrar

## Navegacion rapida

- Presiona `Home` para ir al principio de la lista actual
- Presiona `End` para ir al final