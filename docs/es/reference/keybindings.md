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

Cuando aparezca el mensaje `y/n`:

- Presiona `l` para aceptar (sí) y ejecutarlo.
- Presiona `h` para volver a la pantalla anterior.

En resumen:

- `l` funciona igual que `Enter`
- `h` funciona igual que `Esc`

---

## Modo de selección múltiple

No puedes ejecutar múltiples scripts exactamente al mismo tiempo, pero puedes seleccionar múltiples scripts y se ejecutarán uno por uno en el orden que seleccionaste.

Para usar la selección múltiple:

- Presiona `m` para entrar al modo de selección múltiple
- Presiona `Espacio` para seleccionar scripts
- Presiona `Enter` para ejecutarlos

Se ejecutarán uno por uno después de que cada uno termine.

---

## Temas

La TUI de carch también tiene múltiples temas.

- Presiona `t` para cambiar temas

También puedes revisar los comandos en la documentación si quieres iniciar carch directamente con tu tema favorito.

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

---

Eso es todo por ahora. Si me faltó algo, siempre puedes presionar `?` dentro de la TUI de carch para verificar todas las combinaciones de teclas.

Espero que esto ayude. Gracias por leer.