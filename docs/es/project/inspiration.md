<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiración

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

Me encanta jugar con Linux y scripts. La mayoría del tiempo, solo estoy experimentando, probando ideas aleatorias por diversión. Incluso si solo estoy sentado y aburrido, de alguna manera termino construyendo pequeñas herramientas raras.

Una de las cosas que realmente me inspiró fue ver a [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) y sus [transmisiones](https://www.youtube.com/@TitusTechTalk). Está trabajando en un proyecto genial llamado [`linutil`](https://github.com/ChrisTitusTech/linutil/), y eso me dio el empujón para hacer mi propia versión de algo parecido, pero a mi manera desordenada.

Al principio, el proyecto era... bueno, **feo**. Usé `whiptail` para el menú. Funcionaba, pero se veía súper anticuado y se sentía medio torpe. Honestamente, era solo un script básico de shell con un montón de menús pegados juntos.

📅 **Actualizado: 2025-03-21**  

Más tarde, comencé a usar `gum`, que descubrí a través de [ml4w](https://github.com/mylinuxforwork). Hizo que las cosas se vieran mucho mejor. Pero luego probé `fzf`, y eso simplemente encajó. Era mucho más rápido y limpio para lo que quería hacer. Así que dejé `gum` (aunque todavía me encanta 💖) y me fui completamente con `fzf`.

📅 **Actualizado: 2025-05-01**  

🦀 Y ahora... gran paso: he añadido una TUI completamente basada en Rust usando `ratatui`. No más menús feos. La nueva interfaz se ve mucho mejor, funciona más suavemente, y finalmente puedo añadir características que simplemente no eran posibles solo en Bash.

**Solo para aclarar, los scripts reales de Carch (como scripts de configuración, herramientas, etc.) todavía están escritos en Bash.** No voy a reescribir todo eso en Rust (eso sería una locura). La TUI de Rust es principalmente para el sistema de menús, manejando la navegación, categorías y vista previa. Cuando seleccionas algo, todavía ejecuta los scripts de Bash por debajo, y sí, `fzf` todavía está haciendo el trabajo allí también!

Así que sí, es una mezcla: Rust para la interfaz, Bash para la lógica, y `fzf` en el medio manteniéndolo todo junto. ¡Es raro pero funciona!

Carch realmente ha recorrido un largo camino desde algo súper básico y medio feo, hasta algo de lo que estoy orgulloso. Todavía hay mucho que hacer, pero se está volviendo más genial cada día.