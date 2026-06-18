# Carch परियोजना रोडम्याप 
<img src="https://img.icons8.com/?size=80&id=CBfO8TrnezXC&format=png" width="50" />

**हालको चरण** *[ स्क्रिप्ट विकासमा प्रगति ]* <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" width="20" /> 

*परियोजना अहिले विकास चरणमा अघि बढिरहेको छ, विभिन्न डिस्ट्रोहरूलाई समर्थन गर्न स्क्रिप्टहरू विस्तार र मोड्युलराइज गर्नेमा केन्द्रित छ।*

## आगामी सुविधाहरू र सुधारहरू ✨

- **विभिन्न डिस्ट्रिब्युसनहरूका लागि कार्यक्षमता विस्तार 🌐**
   - लोकप्रिय डिस्ट्रिब्युसनहरूका लागि पूर्ण समर्थन थप्नुहोस्:
     - **Arch** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/arch.png" width="20" />
     - **Debian** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/debian.png" width="20" /> 
     - **Fedora** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/fedora.png" width="20" />
     - **openSUSE** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/opensuse.png" width="20" /> 
     - **Void** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/Void_Linux_logo.svg.png" width="20" /> 
   - डिस्ट्रिब्युसन-विशिष्ट सेटअप स्क्रिप्टहरू विकास गर्नुहोस्।

- **स्क्रिप्ट स्थिरता बृद्धि 🔧**
   - सुधारिएको स्थिरताका लागि अवस्थित स्क्रिप्टहरू रिफ्याक्टर गर्नुहोस्।
   - राम्रो debugging का लागि त्रुटि ह्यान्डलिङ र लगिङ कार्यान्वयन गर्नुहोस्।

- **Rust कार्यान्वयन 🦀**
  - Carch का लागि एकल executable binary सिर्जना गर्नुहोस्। 
  - Rust-आधारित TUI विकास गर्नुहोस्। 
  - बढ़ी कार्यक्षमताका लागि थप Rust स्क्रिप्टहरू थप्नुहोस्। 

- **मुख्य सिस्टम सेटअप स्क्रिप्टहरू ⚙️**
   - मुख्य सिस्टम सेटअप (जस्तै प्याकेज व्यवस्थापन, प्रयोगकर्ता कन्फिगरेसन) का लागि शुरुआती-मैत्री स्क्रिप्टहरू विकास गर्नुहोस्।
   - नयाँ प्रयोगकर्ताहरूलाई सहायता गर्न गाइडहरू र कागजातहरू समावेश गर्नुहोस्।

- **पपअप-स्टाइल रन स्क्रिप्ट TUI समावेश गर्नुहोस्:**  
  - TUI बाहिर नगई स्क्रिप्ट चलाउनुहोस्, पुरानो `fzf` पपअप शैली हटाउनुहोस् र अझ सहज अनुभव प्रदान गर्नुहोस्।

## Carch परियोजना चेकलिस्ट 
<img src="https://cdn-icons-png.flaticon.com/128/8090/8090840.png" width="30" />

- **लोकप्रिय डिस्ट्रिब्युसनहरूका लागि समर्थन विस्तार:**

  - Arch <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/arch.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Fedora <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/fedora.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - Debian <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" /> 
  - openSUSE <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/opensuse.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />  
  - Void <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **स्थिरताका लागि स्क्रिप्टहरू रिफ्याक्टर:**

  - त्रुटि ह्यान्डलिङ कार्यान्वयन <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - लगिङ क्षमताहरू थप्नुहोस् <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **Rust कार्यान्वयन :**

  - TUI (Text-based User Interface) विकास गर्नुहोस्। <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - एकल executable binary सिर्जना गर्नुहोस्। <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - स्क्रिप्टिङ बढाउन थप Rust स्क्रिप्टहरू थप्नुहोस्। <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **मुख्य सिस्टम सेटअप स्क्रिप्टहरू सिर्जना गर्नुहोस्:**
  
  - प्रयोगकर्ता कन्फिगरेसन <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - प्याकेज व्यवस्थापन <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - शुरुआतीहरूका लागि कागजात <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **पपअप-स्टाइल रन स्क्रिप्ट TUI समावेश गर्नुहोस्:**  
  - अब स्क्रिप्टहरू TUI भित्र नै चल्नेछन्, पुरानो `fzf` पपअप शैली हटाइएको छ र अझ राम्रो अनुभव हुनेछ। <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

## समयसीमा (अस्थायी) 📅

- **Q 2025**: प्रयोगकर्ता अन्तरक्रिया सुधार गर्न Rust-आधारित TUI विकास गर्नुहोस्। 🦀 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
- **Q मध्य 2025/2026**: स्थिरताको लागि हालका स्क्रिप्टहरूलाई पुनर्संरचना गर्ने र वितरण समर्थन विस्तार सुरु गर्ने। (अझै प्रगतिमा छ) <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />