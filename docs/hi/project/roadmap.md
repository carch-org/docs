# सी-आर्च प्रोजेक्ट रोडमैप 
<img src="https://img.icons8.com/?size=80&id=CBfO8TrnezXC&format=png" width="50" />

**वर्तमान चरण** *[ स्क्रिप्ट विकास में प्रगति ]* <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" width="20" /> 

*परियोजना अब अपने विकास चरण में प्रगति कर रही है और विभिन्न डिस्ट्रीब्यूशनों का समर्थन करने के लिए स्क्रिप्ट्स का विस्तार और मॉड्यूलराइजेशन करने पर केंद्रित है।*

## आगामी सुविधाएं और सुधार ✨

- **विभिन्न डिस्ट्रिब्यूशन के लिए कार्यक्षमता का विस्तार 🌐**
   - लोकप्रिय डिस्ट्रिब्यूशन के लिए पूर्ण समर्थन जोड़ें:
     - **आर्च** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/arch.png" width="20" />
     - **डेबियन** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/debian.png" width="20" /> 
     - **फेडोरा** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/fedora.png" width="20" />
     - **openSUSE** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/opensuse.png" width="20" /> 
     - **Void** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/Void_Linux_logo.svg.png" width="20" /> 
   - डिस्ट्रिब्यूशन-विशिष्ट सेटअप स्क्रिप्ट्स विकसित करें।

- **स्क्रिप्ट स्थिरता बढ़ाएं 🔧**
   - बेहतर स्थिरता के लिए मौजूदा स्क्रिप्ट्स को रिफैक्टर करें।
   - बेहतर डिबगिंग के लिए त्रुटि हैंडलिंग और लॉगिंग लागू करें।

- **रस्ट कार्यान्वयन 🦀**
  - सी-आर्च के लिए एक सिंगल एक्जीक्यूटेबल बाइनरी बनाएं। 
  - एक रस्ट-आधारित TUI विकसित करें। 
  - बेहतर कार्यक्षमता के लिए अतिरिक्त रस्ट स्क्रिप्ट्स जोड़ें। 

- **कोर सिस्टम सेटअप स्क्रिप्ट्स ⚙️**
   - कोर सिस्टम सेटअप (जैसे पैकेज प्रबंधन, उपयोगकर्ता कॉन्फ़िगरेशन) के लिए शुरुआती-अनुकूल स्क्रिप्ट्स विकसित करें।
   - नए उपयोगकर्ताओं की सहायता के लिए गाइड और डॉक्यूमेंटेशन शामिल करें।

- **पॉपअप-स्टाइल रन स्क्रिप्ट TUI जोड़ें:**  
  - स्क्रिप्ट को TUI के अंदर ही चलाएँ बिना उसे छोड़े, पुराने `fzf` पॉपआउट स्टाइल को हटाएँ और बेहतर अनुभव दें।

## सी-आर्च प्रोजेक्ट चेकलिस्ट 
<img src="https://cdn-icons-png.flaticon.com/128/8090/8090840.png" width="30" />

- **लोकप्रिय डिस्ट्रिब्यूशन के लिए समर्थन का विस्तार:**

  - आर्च <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/arch.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - फेडोरा <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/fedora.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - डेबियन <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" /> 
  - openSUSE <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/opensuse.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />  
  - Void <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **स्थिरता के लिए स्क्रिप्ट्स को रिफैक्टर करें:**

  - त्रुटि हैंडलिंग लागू करें <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - लॉगिंग क्षमताएं जोड़ें <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **रस्ट कार्यान्वयन:**

  - एक TUI (टेक्स्ट-आधारित उपयोगकर्ता इंटरफेस) विकसित करें। <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - एक सिंगल एक्जीक्यूटेबल बाइनरी बनाएं। <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - स्क्रिप्टेबिलिटी बढ़ाने के लिए अतिरिक्त रस्ट स्क्रिप्ट्स जोड़ें। <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **कोर सिस्टम सेटअप स्क्रिप्ट्स बनाएं:**
  
  - उपयोगकर्ता कॉन्फ़िगरेशन <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - पैकेज प्रबंधन <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - शुरुआती लोगों के लिए डॉक्यूमेंटेशन <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **पॉपअप-स्टाइल रन स्क्रिप्ट TUI जोड़ें:**  
  - अब स्क्रिप्ट्स TUI के अंदर ही चलती हैं बिना छोड़े, पुराना `fzf` पॉपआउट स्टाइल हटा दिया गया है ताकि अनुभव और बेहतर हो। <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

## समयसीमा (अस्थायी) 📅

- **Q 2025**: बेहतर यूज़र इंटरैक्शन के लिए Rust आधारित TUI विकसित करें। 🦀 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
- **Q मध्य 2025/2026**: मौजूदा स्क्रिप्ट्स को स्थिरता के लिए रिफैक्टर करना और डिस्ट्रो सपोर्ट को बढ़ाना शुरू करना। (अभी प्रगति में है) <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />