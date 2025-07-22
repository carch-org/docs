<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# प्रेरणा

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

मलाई Linux र scripts सँग खेल्न मन पर्छ। धेरैजसो समय, म केवल experiment गर्दै हुन्छु, मजाको लागि random ideas try गर्छु। यदि म केवल बसेर बोर भइरहेको छु भने पनि, म कुनै न कुनै तरिकाले weird साना tools बनाउने गर्छु।

एउटा कुरा जसले मलाई साँच्चै inspire गर्यो त्यो थियो [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) र उनका [streams](https://www.youtube.com/@TitusTechTalk) हेर्नु। उसले [`linutil`](https://github.com/ChrisTitusTech/linutil/) भन्ने cool project मा काम गरिरहेको छ, र त्यसले मलाई कुनै न कुनै तरिकाले यस्तै केही बनाउन push गर्यो, तर मेरो आफ्नै messy तरिकामा।

सुरुमा, project... खैर, **नराम्रो** थियो। मैले menu को लागि `whiptail` use गरेको थिएँ। यो काम गर्यो, तर यो super पुराना जमानाको देखिन्थ्यो र केही clunky feel गर्थ्यो। Honestly, यो केवल basic shell script थियो जसमा एक bunch menus टाँसिएको थियो।

📅 **Updated: 2025-03-21**  

पछि, मैले `gum` use गर्न थालें, जुन मैले [ml4w](https://github.com/mylinuxforwork) मार्फत फेला पारेको थिएँ। यसले चीजहरू धेरै राम्रो देखाउने बनायो। तर त्यसपछि मैले `fzf` try गरें, र त्यो just clicked। म जे गर्न चाहन्थें त्यसको लागि यो धेरै fast र clean थियो। त्यसैले मैले `gum` छोडें (अझै पनि यसलाई love गर्छु 💖) र पूरै `fzf` सँग गएँ।

📅 **Updated: 2025-05-01**  

🦀 र अहिले... ठूलो step: मैले `ratatui` use गरेर full Rust-based TUI add गरेको छु। अब कुनै ugly menus छैन। नयाँ interface धेरै राम्रो देखिन्छ, smoother run गर्छ, र मैले finally ती features add गर्न सक्छु जुन Bash मा मात्र possible थिएन।

**Just clear गर्न, actual Carch scripts (जस्तै setup scripts, tools, आदि) अझै पनि Bash मा लेखिएका छन्।** म ती सबैलाई Rust मा rewrite गरिरहेको छैन (त्यो पागलपन हुनेछ)। Rust TUI मुख्यतया menu system को लागि हो जसले navigation, categories, र preview handle गर्छ। जब तपाइँ केही select गर्नुहुन्छ, यसले अझै पनि underneath Bash scripts run गर्छ, र हो, `fzf` अझै पनि त्यहाँ job गरिरहेको छ!

त्यसैले हो, यो mix हो: interface को लागि Rust, logic को लागि Bash, र बीचमा `fzf` सबै कुरा together hold गर्दै। यो weird छ तर यो काम गर्छ!

Carch साँच्चै धेरै basic र केही ugly चीजबाट, मलाई proud लाग्ने चीजसम्म लामो बाटो आएको छ। अझै पनि धेरै गर्न बाँकी छ, तर यो हरेक दिन cooler हुँदै जाँदैछ।

📅 **Updated: 2025-07-22**

ठीक छ, अहिले happiness मेरो वरिपरि छ। Finally, हामीले main TUI मा popup-style run script TUI implement गरेका छौं। अब script लाई run गर्नको लागि TUI छाड्नु पर्दैन। यो मेरो ज्ञान र म के जान्छु त्यसको terms मा मेरो लागि huge achievement हो। अहिले तपाइँ TUI मा नै script select र run गर्न सक्नुहुन्छ। अब सबै कुरा TUI भित्र नै हुनेछ र मैले scripts बाट `fzf` style remove गरेको छु किनभने अब हामीलाई बाहिर scripts run गर्नको लागि extra TUI style चाहिँदैन।

[linutil](https://github.com/ChrisTitusTech/linutil) project creator [Chris](https://github.com/ChrisTitusTech) र सबै [maintainers & contributors](https://github.com/ChrisTitusTech/linutil/graphs/contributors) लाई फेरि huge thanks जसले मलाई मेरो project मा यसलाई implement गर्न ideas र code inspiration दिए। तिनीहरू एउटा ठूलो कारण थिए किन मैले यो [Carch](https://github.com/harilvfs/carch) project सुरु गरेको। म मेरो आफ्नै style चाहन्छु किनभने linutil project मेरो सबैभन्दा ठूलो inspiration र guidance भएको छ म कति टाढा आएको छु र कति म अझै पनि Carch लाई improve गरिरहेको छु।

साथै, TUI लाई seamless user experience को लागि completely redesign गरिएको छ। अहिले run script TUI सबैभन्दा ठूलो feature र implementation हो जसले साँच्चै user experience लाई त्यो level मा enhance गर्छ जसको यसलाई आवश्यकता थियो।

हो, म धेरै समय पछि खुसी छु म मेरो face मा happiness देख्न सक्छु। म यसलाई love गर्छु र सधैं मैले गरेको काम र म कति टाढा आएको छु त्यसको लागि ठूलो love राख्छु। Process मा learning गर्दै, ups र downs मार्फत उठ्दै। सबैलाई thanks र Linux community का मानिसहरूलाई जसले help गर्छन् र ideas दिन्छन् **मैले धेरै कुराहरू सिकेको छु**।

मलाई आशा छ कि Carch आगामी future मा अझ substantial हुनेछ जबसम्म म यसलाई maintain गर्न सक्षम छु। यसलाई पढ्नुको लागि तपाइँलाई फेरि thank you।

तपाइँ सधैं project लाई [यहाँ](https://github.com/harilvfs) हेर्न सक्नुहुन्छ। यदि तपाइँ मलाई केही support देखाउन चाहनुहुन्छ भने, project लाई star गर्न नहिचकिचाउनुहोस्, त्यो मेरो सबैभन्दा ठूलो motivation हुनेछ। 🙂