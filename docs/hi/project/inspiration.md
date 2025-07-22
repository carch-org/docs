<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# प्रेरणा

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

मुझे Linux और scripts के साथ छेड़छाड़ करना बहुत पसंद है। ज्यादातर समय, मैं सिर्फ experiment कर रहा होता हूं, मजे के लिए random ideas try करता रहता हूं। यहां तक कि अगर मैं सिर्फ बैठकर बोर हो रहा हूं, तो किसी तरह से मैं weird छोटे tools बनाता रहता हूं।

एक चीज जो मुझे वास्तव में inspire करती थी, वो थी [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) और उनकी [streams](https://www.youtube.com/@TitusTechTalk) देखना। वो एक cool project पर काम कर रहा है जिसे [`linutil`](https://github.com/ChrisTitusTech/linutil/) कहते हैं, और उसने मुझे किसी तरह से push दिया कि मैं भी कुछ ऐसा ही बनाऊं, लेकिन अपने messy तरीके से।

शुरुआत में, project... खैर, **बदसूरत** था। मैंने menu के लिए `whiptail` use किया था। यह काम करता था, लेकिन यह super old school लगता था और कुछ clunky feel करता था। Honestly, यह सिर्फ एक basic shell script था जिसमें एक bunch menus थप दी गई थीं।

## 📅 **Updated: 2025-03-21**  

बाद में, मैंने `gum` use करना शुरू किया, जो मुझे [ml4w](https://github.com/mylinuxforwork) के through मिला। इससे चीजें काफी better लगने लगीं। लेकिन फिर मैंने `fzf` try किया, और वो बिल्कुल perfect था। यह मेरे काम के लिए काफी faster और cleaner था। तो मैंने `gum` को छोड़ दिया (अभी भी इसे love करता हूं 💖) और पूरी तरह `fzf` के साथ चला गया।

## 📅 **Updated: 2025-05-01**  

🦀 और अब... बड़ा step: मैंने `ratatui` use करके एक complete Rust-based TUI add किया है। अब कोई ugly menus नहीं। नया interface काफी better लगता है, smoother run करता है, और मैं finally ऐसे features add कर सकता हूं जो सिर्फ Bash में possible नहीं थे।

**सिर्फ clear करने के लिए, actual Carch scripts (जैसे setup scripts, tools, etc.) अभी भी Bash में लिखे गए हैं।** मैं उन सबको Rust में rewrite नहीं कर रहा (वो pagalpan होगा)। Rust TUI mainly menu system के लिए है जो navigation, categories, और preview handle करता है। जब आप कुछ select करते हैं, तो यह अभी भी underneath Bash scripts run करता है, और हां, `fzf` अभी भी वहां job कर रहा है!

तो हां, यह एक mix है: interface के लिए Rust, logic के लिए Bash, और बीच में `fzf` सब कुछ together hold कर रहा है। यह weird है लेकिन काम करता है!

Carch वास्तव में एक लंबा सफर तय कर चुका है - कुछ super basic और kind of ugly चीज से, कुछ ऐसी चीज तक जिस पर मुझे proud feel होता है। अभी भी बहुत कुछ करना है, लेकिन यह हर दिन cooler होता जा रहा है।

## 📅 **Updated: 2025-07-22**

ठीक है, अब happiness मेरे आस-पास है। Finally, हमने main TUI में popup-style run script TUI implement किया है। अब script को run करने के लिए TUI से बाहर नहीं जाना पड़ता। यह मेरे लिए मेरे knowledge और जो मैं जानता हूं उसके terms में एक huge achievement है। अब आप सिर्फ TUI में ही script select और run कर सकते हैं। अब सब कुछ TUI के अंदर ही होगा और मैंने scripts से `fzf` style remove कर दी है क्योंकि अब हमें बाहर scripts run करने के लिए extra TUI style की जरूरत नहीं है।

[linutil](https://github.com/ChrisTitusTech/linutil) project creator [Chris](https://github.com/ChrisTitusTech) और सभी [maintainers & contributors](https://github.com/ChrisTitusTech/linutil/graphs/contributors) को फिर से huge thanks जिन्होंने मुझे ideas और code inspiration दिया है इसे अपने project में implement करने के लिए। वे एक बड़ी वजह रहे हैं कि मैंने यह [Carch](https://github.com/harilvfs/carch) project शुरू किया। मैं अपना own style चाहता हूं क्योंकि linutil project मेरी सबसे बड़ी inspiration और guidance रहा है कि मैं कितना आगे आया हूं और कितना मैं अभी भी Carch को improve कर रहा हूं।

साथ ही, TUI को seamless user experience के लिए completely redesign किया गया है। अब run script TUI सबसे बड़ा feature और implementation है जो user experience को उस level तक enhance करता है जिसकी इसे जरूरत थी।

हां, मैं खुश हूं लंबे समय बाद मैं अपने face पर happiness देख सकता हूं। मैं इसे love करता हूं और हमेशा उसके लिए big love रखता हूं जो मैंने किया है और कितना दूर आया हूं। Process में learning कर रहा हूं, ups और downs के through उठ रहा हूं। सभी को thanks और Linux community के लोगों को जो help करते हैं और ideas देते हैं **मैंने बहुत सारी चीजें सीखी हैं**।

मुझे उम्मीद है कि Carch आने वाले future में और भी substantial बनेगा जब तक मैं इसे maintain कर पाऊंगा। इसे read करने के लिए आपको फिर से thank you।

आप हमेशा project को [यहां](https://github.com/harilvfs) देख सकते हैं। अगर आप मुझे कुछ support show करना चाहते हैं, तो project को star करने में झिझक न करें, यह मेरी सबसे बड़ी motivation होगी। 🙂