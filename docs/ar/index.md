---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: أتمتة إعداد نظام Linux الخاص بك
  actions:
    - theme: brand
      text: البدء ⇢
      link: /ar/getting-started/introduction
    - theme: alt
      text: "تثبيت 📥"
      link: /ar/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: سكريبت Bash، حياة سهلة
    details: الإعداد لا يزال يعمل بسكريبت Bash البسيط - سريع ونظيف وبدون تعقيد.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: دعم متعدد التوزيعات
    details: يدعم التوزيعات مثل Arch و Fedora و openSUSE.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: اضبط كل شيء
    details: يتضمن مجموعة من البرامج النصية لإعداد تكوينات التطبيقات وإعدادات النظام الأخرى.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: لا يزال قيد التطوير
    details: يتم تحسين الأشياء بنشاط الآن مع TUI مدعوم بـ Rust والمزيد من التحديثات قادمة.
---

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div align="center">

### كيفية الاستخدام؟

يمكنك تشغيل أو استخدام Carch مباشرة دون تثبيته على نظامك.

اختر إحدى النسخ التالية لتجربة Carch:

</div>

> [!IMPORTANT]
> **تأكد من تثبيت `curl` في توزيعتك قبل تشغيل هذه الأوامر.**
>
> ***لاحظ أيضاً أن Carch يدعم حالياً فقط*** **التوزيعات المبنية على Arch و Fedora و openSUSE**. ***لن يعمل على التوزيعات الأخرى.***

#### ⭐ الإصدار المستقر [ الأحدث ]

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- --stable
```

#### 🧪 إصدار التطوير [ ما قبل الإصدار ]

```sh 
curl -fsSL chalisehari.com.np/carch | sh -s -- --dev
```

<style>

.preview-container {
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  max-width: 720px;
  margin: 2rem auto;
  overflow: hidden;
}

.preview-container img {
  width: 100%;
  display: block;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));

  --vp-home-hero-image-filter: blur(44px);
}

.home-page {
  background: var(--vp-c-bg);

  .VPFeature a {
    font-weight: bold;
    color: var(--vp-c-brand-2);
  }

  .VPFooter {
    background-color: transparent !important;
    border: none;
  }

  .VPNavBar:not(.top) {
    background-color: transparent !important;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);

    div.divider {
      display: none;
    }
  }
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

<footer style="text-align:center; font-size: 0.8rem; color: var(--vp-c-text-2); margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider);">
  <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-text-2); text-decoration: none; transition: color 0.2s ease;">
    كود مصدر الوثائق
  </a>
</footer>
