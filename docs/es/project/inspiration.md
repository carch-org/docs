<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiración

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

Me encanta juguetear con Linux y scripts. La mayoría de las veces, solo estoy experimentando, probando ideas random por diversión. Incluso si estoy sentado aburrido, de alguna manera termino construyendo herramientas pequeñas y raras.

Una de las cosas que realmente me inspiró fue ver a [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) y sus [streams](https://www.youtube.com/@TitusTechTalk). Está trabajando en un proyecto genial llamado [`linutil`](https://github.com/ChrisTitusTech/linutil/), y eso como que me dio el empujón para hacer mi propia versión de algo así, pero a mi manera desordenada.

Al principio, el proyecto estaba... bueno, **feo**. Usé `whiptail` para el menú. Funcionaba, pero se veía súper anticuado y se sentía algo torpe. Honestamente, era solo un script básico de shell con un montón de menús pegados juntos.

## 📅 **Actualizado: 2025-03-21**  

Más tarde, comencé a usar `gum`, que encontré a través de [ml4w](https://github.com/mylinuxforwork). Hizo que las cosas se vieran mucho mejor. Pero luego probé `fzf`, y eso simplemente encajó. Era mucho más rápido y limpio para lo que quería hacer. Así que dejé `gum` (aunque todavía lo amo 💖) y me fui completamente con `fzf`.

## 📅 **Actualizado: 2025-05-01**  

🦀 Y ahora... gran paso: He añadido una TUI completa basada en Rust usando `ratatui`. No más menús feos. La nueva interfaz se ve mucho mejor, corre más suave, y finalmente puedo agregar características que simplemente no eran posibles solo en Bash.

**Solo para ser claro, los scripts actuales de Carch (como scripts de configuración, herramientas, etc.) todavía están escritos en Bash.** No estoy reescribiendo todo eso en Rust (eso sería una locura). La TUI de Rust es principalmente para el sistema de menú manejando navegación, categorías y vista previa. Cuando seleccionas algo, todavía ejecuta los scripts de Bash por debajo, y sí, ¡`fzf` todavía está haciendo el trabajo allí también!

Así que sí, es una mezcla: Rust para la interfaz, Bash para la lógica, y `fzf` en el medio manteniéndolo todo junto. ¡Es raro pero funciona!

Carch realmente ha recorrido un largo camino desde algo súper básico y medio feo, hasta algo de lo que estoy orgulloso. Todavía hay mucho que hacer, pero se está volviendo más genial cada día.

## 📅 **Actualizado: 2025-07-22**

Ok, la felicidad está a mi alrededor ahora. Finalmente, hemos implementado una TUI de ejecutar script estilo popup en la TUI principal. Ahora el script no necesita salir de la TUI para ejecutarse. Este es un logro enorme para mí en términos de lo que sé y mi conocimiento. Ahora puedes simplemente seleccionar y ejecutar el script en la TUI misma. Todo sucederá ahora dentro de la TUI y he removido el estilo `fzf` de los scripts ya que no necesitamos un estilo TUI extra para ejecutar scripts afuera más.

Enormes gracias nuevamente al creador del proyecto [linutil](https://github.com/ChrisTitusTech/linutil) [Chris](https://github.com/ChrisTitusTech) y todos los [mantenedores y contribuidores](https://github.com/ChrisTitusTech/linutil/graphs/contributors) me dieron ideas e inspiración de código para implementar esto en mi proyecto. Han sido una gran razón de por qué comencé este proyecto [Carch](https://github.com/harilvfs/carch). Quiero mi propio estilo ya que el proyecto linutil ha sido mi mayor inspiración y guía para cuán lejos he llegado y cuánto sigo mejorando Carch.

También, la TUI ha sido completamente rediseñada para una experiencia de usuario perfecta. Ahora la TUI de ejecutar script es la característica más grande e implementación que realmente mejora la experiencia del usuario al nivel que necesitaba.

Sí, estoy feliz después de mucho tiempo puedo ver felicidad en mi cara. Amo esto y siempre tengo gran amor por lo que he hecho y cuán lejos he llegado. Aprendiendo en el proceso, levantándome a través de altos y bajos. Gracias a todos y a la gente de la comunidad Linux que ayuda y da ideas **He aprendido tantas cosas**.

Espero que Carch se vuelva aún más sustancial en el futuro próximo mientras sea capaz de mantenerlo. Gracias nuevamente por leer esto.

Siempre puedes echar un vistazo al proyecto [aquí](https://github.com/harilvfs). Si quieres mostrarme algo de apoyo, siéntete libre de darle estrella al proyecto, esa será mi mayor motivación. 🙂