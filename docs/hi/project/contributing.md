# **Carch** में योगदान देना

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

हमें खुशी है कि आप **Carch** में योगदान देने में रुचि रखते हैं! हर प्रकार के योगदान का स्वागत है, चाहे आप bugs ठीक कर रहे हों, नई features जोड़ रहे हों, या documentation में सुधार कर रहे हों। शुरुआत करने के लिए इस गाइड का पालन करें।

> [!WARNING]  
> **कोई भी योगदान देने से पहले**, पहले **[Feature Request](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)** section में एक issue खोलें। हम implementation आगे बढ़ाने से पहले वहां changes पर चर्चा करेंगे।

## 📌 Codebase को समझें

> [!NOTE]
> योगदान देने से पहले, **Carch की संरचना को समझें**:
> - **Carch की मुख्य Rust फाइलें यहां स्थित हैं:** `src`
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
> - **सभी `modules` scripts category के आधार पर व्यवस्थित हैं:**  
> ```sh
> modules/
> ├── Browser/     # Browser संबंधी scripts 
> ├── Desktop/     # Desktop environment संबंधी scripts
> ├── Development/ # Development tools scripts
> ├── System/      # System configuration scripts
> └── Terminal/    # Terminal setup scripts
> ```

> [!IMPORTANT]
> कृपया पहले स्क्रिप्ट **कैसे काम करती है, इसका विश्लेषण करें**। अगर आप इस प्रोजेक्ट को सुधारना या कुछ नया जोड़ना चाहते हैं, तो सुनिश्चित करें कि आप इसकी **संरचना और प्रत्येक भाग कैसे जुड़ा है**, यह अच्छी तरह समझते हैं। इससे आप प्रोजेक्ट के डिज़ाइन के अनुरूप सही तरीके से योगदान दे पाएंगे।  
>
> ```sh
> Commit करते समय इस तरह के labels का उपयोग करें:
> feat: आपका-commit-संदेश या fix: आपका-commit-संदेश।
> ```
>
> Conventional Commits के बारे में अधिक जानकारी के लिए, कृपया यह [guide](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d) देखें।

यदि आपके कोई प्रश्न हैं या सहायता चाहिए, तो बेझिझक **हमसे संपर्क करें**:  
📧 Email: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">यहां जुड़ें</a>  

## योगदान देने के चरण

### 1. 🍽️ Repository को Fork करें
- **Carch** GitHub पेज पर जाएं।
- Repository की अपनी copy बनाने के लिए top-right corner में **Fork** button पर click करें।

### 2. 🌿 Forked Repository को Clone करें
- Repository को अपने local system पर clone करने के लिए निम्नलिखित command का उपयोग करें:

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- `your-username` को अपने GitHub username से replace करें।

:::tip :bulb: TIP
**आप repositories को fork और clone करने के लिए `GitHub Desktop` जैसे GUI tools या GitHub web interface का भी उपयोग कर सकते हैं। ये tools आपके योगदानों को manage करने के लिए एक आसान visual interface प्रदान करते हैं।**
:::

### 3. 🌱 Original Repository को Upstream के रूप में Set करें
- अपने fork को up to date रखने के लिए original **Carch** repository को upstream remote के रूप में add करें:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 नई Feature Branch बनाएं
- Changes करने से पहले, descriptive name के साथ एक नई branch बनाएं:

   ```bash
   git checkout -b feature/your-branch-name
   ```

- Branch names के उदाहरण:
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 अपने Changes करें
- Code या documentation में आवश्यक changes implement करें।
- सुनिश्चित करें कि आपके changes clear, tested हैं और project के coding standards का पालन करते हैं।

### 6. 📝 अपने Changes को Stage और Commit करें
- Modified files को staging area में add करें:

   ```bash
   git add .
   ```

- Clear message के साथ अपने changes को commit करें:

   ```bash
   git commit -m "Add: [आपके changes का संक्षिप्त विवरण]"
   ```

### 7. 🚀 Changes को अपने Fork पर Push करें
- अपनी branch को अपनी forked repository पर push करें:

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 Pull Request (PR) Submit करें
- GitHub पर original **Carch** repository पर जाएं।
- **New Pull Request** पर click करें।
- Dropdown से अपनी branch select करें और अपने changes का विस्तृत विवरण दें।
- Review के लिए PR submit करें!

## दिशानिर्देश

### Code Quality
- Project की existing coding style का पालन करें।
- Clear, concise, और well-documented code लिखें।

### Testing
- सुनिश्चित करने के लिए कि वे expected रूप से काम करते हैं, अपने changes को locally test करें।
- यदि आपके changes नई features introduce करते हैं, तो जहां applicable हो वहां आवश्यक tests add करें।

### Documentation
- यदि आपके changes नई functionality involve करते हैं, तो relevant documentation को update करें।
- सुनिश्चित करें कि README या Wiki आपके updates को reflect करता है।

### अपने Fork को Sync करना
- Conflicts से बचने के लिए अपने fork को updated रखें:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - यदि repository की default branch अलग है तो `main` को उससे replace करें।

**Carch** में योगदान देने के लिए धन्यवाद! आपका effort इस project को सभी के लिए बेहतर बनाने में मदद करता है। <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />