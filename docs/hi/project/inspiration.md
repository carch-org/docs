<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Carch – Rusty चेहरे के साथ एक Bash-powered script hub

Carch मेरा व्यक्तिगत छोटा toolbox प्रोजेक्ट है। यह बहुत सरल (और थोड़ा बदसूरत) शुरू हुआ था केवल Bash और `whiptail` का उपयोग करते हुए, लेकिन समय के साथ यह कुछ बहुत ही कूल चीज़ में बदल गया है। अब यह Rust और `ratatui` द्वारा संचालित एक पूर्ण terminal UI है, लेकिन अभी भी नीचे मेरी सभी मूल Bash scripts चला रहा है।

यह परफेक्ट नहीं है, लेकिन बहुत अच्छा काम करता है—और इस पर काम करना मज़ेदार है!

---

# प्रेरणा

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

मुझे Linux और scripts के साथ खेलना पसंद है। ज़्यादातर समय, मैं बस experiment कर रहा होता हूँ, मज़े के लिए random ideas try कर रहा होता हूँ। यहाँ तक कि अगर मैं बस बैठा हुआ हूँ और बोर हो रहा हूँ, तो भी मैं किसी न किसी तरह अजीब छोटे tools बनाता रहता हूँ।

जिन चीज़ों ने वास्तव में मुझे प्रेरित किया उनमें से एक [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) और उनकी [streams](https://www.youtube.com/@TitusTechTalk) देखना था। वे [`linutil`](https://github.com/ChrisTitusTech/linutil/) नामक एक कूल प्रोजेक्ट पर काम कर रहे हैं, और इसने मुझे कुछ इस तरह का अपना version बनाने के लिए प्रेरित किया—लेकिन अपने ही messy तरीके से।

शुरुआत में, प्रोजेक्ट... खैर, **बदसूरत** था। मैंने menu के लिए `whiptail` का उपयोग किया। यह काम करता था, लेकिन यह बहुत old-school लगता था और थोड़ा clunky लगता था। ईमानदारी से, यह सिर्फ एक basic shell script था जिसमें बहुत सारे menus एक साथ जोड़े गए थे।

📅 **Updated: 2025-03-21**  

बाद में, मैंने `gum` का उपयोग करना शुरू किया, जो मुझे [ml4w](https://github.com/mylinuxforwork) के माध्यम से मिला। इसने चीज़ों को बहुत बेहतर दिखने में मदद की। लेकिन फिर मैंने `fzf` को try किया, और वह बस perfect fit था। यह जो मैं चाहता था उसके लिए बहुत तेज़ और cleaner था। इसलिए मैंने `gum` को छोड़ दिया (अभी भी इसे प्यार करता हूँ 💖) और `fzf` पर पूरी तरह focus किया।

📅 **Updated: 2025-05-01**  

🦀 और अब... बड़ा कदम: मैंने `ratatui` का उपयोग करके एक पूर्ण Rust-based TUI जोड़ा है। अब कोई बदसूरत menus नहीं। नया interface बहुत बेहतर दिखता है, smooth चलता है, और मैं अंततः वे features जोड़ सकता हूँ जो सिर्फ Bash में संभव नहीं थे।

**स्पष्ट करने के लिए—वास्तविक Carch scripts (जैसे setup scripts, tools, आदि) अभी भी Bash में लिखी गई हैं।** मैं उन सब को Rust में rewrite नहीं कर रहा (यह पागलपन होगा)। Rust TUI मुख्य रूप से menu system के लिए है—navigation, categories, और preview को handle करने के लिए। जब आप कुछ select करते हैं, तो यह अभी भी नीचे Bash scripts चलाता है, और हाँ, `fzf` अभी भी वहाँ काम कर रहा है!

तो हाँ, यह एक mix है: interface के लिए Rust, logic के लिए Bash, और `fzf` बीच में सब कुछ एक साथ hold कर रहा है। यह अजीब है—लेकिन यह काम करता है!

Carch वास्तव में एक लंबा सफर तय किया है—कुछ बहुत basic और थोड़ा बदसूरत से, कुछ ऐसा जिस पर मुझे गर्व है। अभी भी बहुत कुछ करना है, लेकिन यह हर दिन cooler होता जा रहा है।