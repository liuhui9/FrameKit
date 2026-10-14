const page = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#111d32">
  <meta name="description" content="设置尺寸、颜色和文字，即刻生成可直接嵌入网页的占位图 URL。">
  <title>FrameKit · 占位图工坊</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='15' fill='%23111d32'/%3E%3Crect x='12' y='15' width='40' height='34' rx='6' fill='none' stroke='%23fb735f' stroke-width='5'/%3E%3Ccircle cx='24' cy='26' r='4' fill='%23fb735f'/%3E%3Cpath d='m17 43 11-12 9 8 7-6 6 10' fill='none' stroke='%23fb735f' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
  <style>
    :root { color-scheme: light; font-family: Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif; color: #14233b; background: #f4f6fa; font-synthesis: none; }
    * { box-sizing: border-box; }
    html { min-width: 320px; scroll-behavior: smooth; }
    body { margin: 0; }
    button, input { font: inherit; }
    button { cursor: pointer; }
    button:focus-visible, input:focus-visible, a:focus-visible { outline: 3px solid #fb735f; outline-offset: 3px; }
    .shell { width: min(1440px, calc(100% - 80px)); margin-inline: auto; }
    .topbar { background: #111d32; color: #fff; }
    .topbar-inner { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .brand { display: inline-flex; align-items: center; gap: 12px; color: #fff; text-decoration: none; font-weight: 800; font-size: 22px; letter-spacing: -.04em; }
    .brand-mark { width: 29px; height: 29px; display: grid; place-items: center; border: 2px solid #fb735f; border-radius: 7px; color: #fb735f; font-size: 18px; line-height: 1; }
    .nav-link { color: #bdc9dc; font-size: 14px; font-weight: 600; text-decoration: none; }
    .nav-link:hover { color: #fff; }
    main { padding-bottom: 76px; }
    .intro { display: flex; align-items: end; justify-content: space-between; gap: 30px; padding: 54px 0 36px; }
    .eyebrow { margin: 0 0 13px; color: #fb735f; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
    h1 { margin: 0; font-size: clamp(36px, 4vw, 56px); line-height: 1.16; letter-spacing: -.055em; }
    .intro-description { max-width: 430px; margin: 0 0 5px; color: #63728a; font-size: 16px; line-height: 1.7; }
    .workspace { display: grid; grid-template-columns: minmax(300px, 380px) minmax(0, 1fr); gap: 20px; align-items: start; }
    .panel { border: 1px solid #e1e6ef; border-radius: 20px; background: #fff; box-shadow: 0 18px 60px rgba(24, 41, 73, .045); }
    .control-panel { padding: 28px; }
    .panel-title { display: flex; align-items: center; gap: 10px; margin: 0 0 26px; font-size: 19px; letter-spacing: -.03em; }
    .title-icon { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 8px; background: #fff0ec; color: #e45e4a; font-size: 16px; }
    .field { margin-top: 24px; }
    .field:first-of-type { margin-top: 0; }
    .field label, .field legend { display: block; margin-bottom: 10px; padding: 0; color: #34455f; font-size: 14px; font-weight: 700; }
    .dimension-grid, .color-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .input-wrap { display: flex; align-items: center; min-height: 48px; border: 1px solid #dce3ed; border-radius: 10px; background: #fbfcfe; overflow: hidden; }
    .input-wrap:focus-within { border-color: #657fd5; box-shadow: 0 0 0 3px rgba(84, 113, 213, .14); }
    .input-wrap input[type=number], .input-wrap input[type=text] { min-width: 0; width: 100%; height: 46px; padding: 0 12px; border: 0; outline: 0; background: transparent; color: #1d304f; font-size: 15px; font-weight: 650; }
    .input-wrap input[type=number] { appearance: textfield; }
    .input-wrap input::-webkit-inner-spin-button, .input-wrap input::-webkit-outer-spin-button { appearance: none; margin: 0; }
    .unit { flex: none; padding-right: 12px; color: #9ca8b9; font-size: 12px; font-weight: 700; }
    .presets { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 12px; }
    .presets button { padding: 7px 10px; border: 1px solid #e0e6ef; border-radius: 7px; background: #fff; color: #63728a; font-size: 12px; font-weight: 700; }
    .presets button:hover { border-color: #9baee0; color: #3859b2; }
    .color-input { gap: 8px; padding: 5px; }
    .color-input input[type=color] { flex: none; width: 37px; height: 37px; padding: 0; border: 0; border-radius: 7px; background: transparent; }
    .color-input input[type=color]::-webkit-color-swatch-wrapper { padding: 0; }
    .color-input input[type=color]::-webkit-color-swatch { border: 1px solid rgba(0,0,0,.08); border-radius: 6px; }
    .color-input input[type=color]::-moz-color-swatch { border: 1px solid rgba(0,0,0,.08); border-radius: 6px; }
    .color-input input[type=text] { padding-left: 0; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; }
    .hint { margin: 9px 0 0; color: #98a4b5; font-size: 12px; line-height: 1.5; }
    .options { display: flex; align-items: center; gap: 15px; padding-top: 7px; }
    .toggle { display: inline-flex; align-items: center; gap: 9px; color: #34455f; font-size: 14px; font-weight: 650; cursor: pointer; }
    .toggle input { width: 17px; height: 17px; margin: 0; accent-color: #536fd0; }
    .radius-value { margin-left: auto; color: #74839a; font: 700 13px ui-monospace, SFMono-Regular, Consolas, monospace; }
    #radius { width: 100%; margin: 11px 0 0; accent-color: #536fd0; }
    .field-error { min-height: 20px; margin: 15px 0 0; color: #bd4050; font-size: 13px; font-weight: 600; }
    .result-panel { min-width: 0; padding: 28px; }
    .result-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; margin-bottom: 18px; }
    .result-heading h2 { margin: 0; font-size: 19px; letter-spacing: -.03em; }
    .result-heading p { margin: 5px 0 0; color: #8492a5; font-size: 13px; }
    .format-pill { padding: 7px 10px; border-radius: 7px; background: #eef2ff; color: #546dd0; font: 800 11px ui-monospace, SFMono-Regular, Consolas, monospace; }
    .preview-stage { display: grid; place-items: center; min-height: 355px; padding: 28px; border: 1px solid #e2e7ef; border-radius: 13px; background-color: #f6f8fb; background-image: linear-gradient(45deg,#e9edf4 25%,transparent 25%),linear-gradient(-45deg,#e9edf4 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e9edf4 75%),linear-gradient(-45deg,transparent 75%,#e9edf4 75%); background-size: 24px 24px; background-position: 0 0,0 12px,12px -12px,-12px 0; }
    .preview-stage img { display: block; width: min(100%, 700px); max-height: 320px; object-fit: contain; }
    .preview-stage.is-empty img { display: none; }
    .preview-message { display: none; color: #74839a; font-size: 14px; }
    .preview-stage.is-empty .preview-message { display: block; }
    .preview-stage.is-loading img { opacity: .5; }
    .link-section { padding-top: 25px; }
    .link-section label { display: block; margin-bottom: 10px; color: #34455f; font-size: 14px; font-weight: 700; }
    .link-row { display: flex; gap: 9px; }
    #image-url { min-width: 0; width: 100%; height: 46px; padding: 0 12px; border: 1px solid #dce3ed; border-radius: 9px; background: #f8fafe; color: #2e4568; font: 600 13px ui-monospace, SFMono-Regular, Consolas, monospace; text-overflow: ellipsis; }
    .primary-button, .secondary-button { display: inline-flex; align-items: center; justify-content: center; flex: none; min-height: 46px; padding: 0 17px; border-radius: 9px; font-size: 13px; font-weight: 750; text-decoration: none; }
    .primary-button { border: 1px solid #111d32; background: #111d32; color: #fff; }
    .primary-button:hover { background: #273955; }
    .secondary-button { border: 1px solid #dce3ed; background: #fff; color: #34455f; }
    .secondary-button:hover { border-color: #9fb2df; color: #3d5fbb; }
    .primary-button:disabled, .secondary-button:disabled { opacity: .5; cursor: not-allowed; }
    .result-actions { display: flex; gap: 9px; flex-wrap: wrap; margin-top: 12px; }
    .toast { position: fixed; left: 50%; bottom: 24px; z-index: 10; transform: translate(-50%, 12px); padding: 11px 16px; border-radius: 9px; background: #111d32; color: #fff; font-size: 14px; opacity: 0; pointer-events: none; transition: opacity .2s, transform .2s; }
    .toast.show { opacity: 1; transform: translate(-50%, 0); }
    .guide { margin-top: 30px; padding: 29px; }
    .guide h2 { margin: 0 0 8px; font-size: 19px; }
    .guide > p { margin: 0; color: #6f7f95; font-size: 14px; line-height: 1.7; }
    .examples { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; margin-top: 19px; }
    .example { min-width: 0; padding: 17px; border: 1px solid #e5eaf2; border-radius: 10px; background: #fbfcff; }
    .example strong { display: block; margin-bottom: 8px; font-size: 13px; }
    .example code { display: block; overflow-wrap: anywhere; color: #566fc7; font-size: 12px; line-height: 1.7; }
    .footer { display: flex; justify-content: space-between; gap: 15px; padding: 24px 0 35px; border-top: 1px solid #e0e5ed; color: #8391a5; font-size: 12px; }
    .footer strong { color: #273b59; }
    @media (max-width: 1020px) { .shell { width: min(100% - 48px, 760px); } .intro { display: block; } .intro-description { margin-top: 15px; } .workspace { grid-template-columns: 1fr; } }
    @media (max-width: 620px) { .shell { width: calc(100% - 32px); } .topbar-inner { min-height: 68px; } .intro { padding: 36px 0 26px; } h1 { font-size: 35px; } .control-panel, .result-panel, .guide { padding: 21px; border-radius: 15px; } .preview-stage { min-height: 245px; padding: 16px; } .preview-stage img { max-height: 220px; } .examples { grid-template-columns: 1fr; } .footer { flex-wrap: wrap; } }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; } }
  </style>
</head>
<body>
  <header class="topbar"><div class="shell topbar-inner"><a class="brand" href="/" aria-label="FrameKit 首页"><span class="brand-mark" aria-hidden="true">▧</span>FrameKit</a><a class="nav-link" href="#guide">使用说明</a></div></header>
  <main class="shell">
    <section class="intro" aria-labelledby="page-title"><div><p class="eyebrow">PLACEHOLDER IMAGE STUDIO</p><h1 id="page-title">图片没到位，布局先到位。</h1></div><p class="intro-description">设好尺寸、颜色和文字，马上得到一条可直接用于网页的占位图链接。</p></section>
    <div class="workspace">
      <form class="panel control-panel" id="builder" novalidate>
        <h2 class="panel-title"><span class="title-icon" aria-hidden="true">▦</span>图片设置</h2>
        <div class="field"><label for="width">图片尺寸</label><div class="dimension-grid"><div class="input-wrap"><input id="width" name="width" type="number" min="1" max="4000" value="800" aria-label="宽度"><span class="unit">宽 px</span></div><div class="input-wrap"><input id="height" name="height" type="number" min="1" max="4000" value="450" aria-label="高度"><span class="unit">高 px</span></div></div><div class="presets" aria-label="常用尺寸"><button type="button" data-size="800x450">16:9</button><button type="button" data-size="600x600">1:1</button><button type="button" data-size="800x600">4:3</button><button type="button" data-size="1200x400">横幅</button></div></div>
        <div class="field color-grid"><div><label for="background-text">背景颜色</label><div class="input-wrap color-input"><input id="background-picker" type="color" value="#dbe4f1" aria-label="选择背景颜色"><input id="background-text" type="text" value="#DBE4F1" maxlength="7" spellcheck="false" aria-label="背景颜色十六进制值"></div></div><div><label for="foreground-text">文字颜色</label><div class="input-wrap color-input"><input id="foreground-picker" type="color" value="#364f75" aria-label="选择文字颜色"><input id="foreground-text" type="text" value="#364F75" maxlength="7" spellcheck="false" aria-label="文字颜色十六进制值"></div></div></div>
        <div class="field"><label for="image-text">图片文字</label><div class="input-wrap"><input id="image-text" type="text" maxlength="60" placeholder="留空则显示图片尺寸"></div><p class="hint">支持中文、英文和数字，最多 60 个字符。</p></div>
        <div class="field"><label for="radius">圆角</label><div class="options"><label class="toggle" for="retina"><input id="retina" type="checkbox">高清 2×</label><output class="radius-value" id="radius-value" for="radius">0 px</output></div><input id="radius" type="range" min="0" max="80" value="0"></div>
        <p class="field-error" id="field-error" role="alert" aria-live="polite"></p>
      </form>
      <section class="panel result-panel" aria-labelledby="preview-title"><div class="result-heading"><div><h2 id="preview-title">实时预览</h2><p id="preview-meta">800 × 450 px</p></div><span class="format-pill">SVG IMAGE</span></div><div class="preview-stage" id="preview-stage"><img id="preview-image" alt="当前设置生成的占位图"><span class="preview-message">输入有效尺寸和颜色后显示预览</span></div><div class="link-section"><label for="image-url">图片 URL</label><div class="link-row"><input id="image-url" type="text" readonly aria-label="生成的图片链接"><button class="primary-button" id="copy-url" type="button">复制链接</button></div><div class="result-actions"><button class="secondary-button" id="copy-html" type="button">复制 HTML 标签</button><a class="secondary-button" id="open-image" target="_blank" rel="noopener noreferrer">打开图片</a><a class="secondary-button" id="download-image" download="framekit-placeholder.svg">下载 SVG</a></div></div></section>
    </div>
    <section class="panel guide" id="guide" aria-labelledby="guide-title"><h2 id="guide-title">直接写进你的页面</h2><p>图片由这个站点按 URL 参数实时生成。把链接放进 img 标签或 CSS background-image 即可；尺寸以像素为单位，颜色使用十六进制。</p><div class="examples"><div class="example"><strong>指定尺寸</strong><code>/300x200/</code></div><div class="example"><strong>设置背景与文字色</strong><code>/800x450/dbe4f1/364f75/</code></div><div class="example"><strong>添加文字与高清模式</strong><code>/800x450/?text=Hello&amp;retina=1</code></div></div></section>
  </main>
  <footer class="shell footer"><strong>FrameKit</strong><span>为设计稿和原型准备的轻量占位图工具。</span></footer>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <script>
    const form = document.getElementById("builder");
    const widthField = document.getElementById("width");
    const heightField = document.getElementById("height");
    const backgroundText = document.getElementById("background-text");
    const foregroundText = document.getElementById("foreground-text");
    const backgroundPicker = document.getElementById("background-picker");
    const foregroundPicker = document.getElementById("foreground-picker");
    const textField = document.getElementById("image-text");
    const retinaField = document.getElementById("retina");
    const radiusField = document.getElementById("radius");
    const urlField = document.getElementById("image-url");
    const previewImage = document.getElementById("preview-image");
    const previewStage = document.getElementById("preview-stage");
    const errorField = document.getElementById("field-error");
    const copyUrlButton = document.getElementById("copy-url");
    const copyHtmlButton = document.getElementById("copy-html");
    const openImage = document.getElementById("open-image");
    const downloadImage = document.getElementById("download-image");
    const toast = document.getElementById("toast");
    let toastTimer;

    function color(value) {
      const match = value.trim().replace(/^#/, "");
      if (/^[0-9a-f]{3}$/i.test(match)) return match.split("").map(function (part) { return part + part; }).join("").toUpperCase();
      if (/^[0-9a-f]{6}$/i.test(match)) return match.toUpperCase();
      return null;
    }
    function buildUrl() {
      const width = Number(widthField.value);
      const height = Number(heightField.value);
      const scale = retinaField.checked ? 2 : 1;
      const background = color(backgroundText.value);
      const foreground = color(foregroundText.value);
      if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width * scale > 4000 || height * scale > 4000 || width * height * scale * scale > 8000000) throw new Error("尺寸需为正整数，输出不超过 4000 px 和 800 万像素");
      if (!background || !foreground) throw new Error("请输入有效的十六进制颜色");
      if (Array.from(textField.value).length > 60) throw new Error("图片文字不能超过 60 个字符");
      const result = new URL("/" + width + "x" + height + "/" + background + "/" + foreground + "/", location.origin);
      if (textField.value.trim()) result.searchParams.set("text", textField.value.trim());
      if (retinaField.checked) result.searchParams.set("retina", "1");
      if (Number(radiusField.value) > 0) result.searchParams.set("radius", radiusField.value);
      return result;
    }
    function update() {
      document.getElementById("radius-value").value = radiusField.value + " px";
      try {
        const url = buildUrl();
        errorField.textContent = "";
        urlField.value = url.href;
        previewStage.classList.remove("is-empty");
        previewStage.classList.add("is-loading");
        previewImage.src = url.href;
        document.getElementById("preview-meta").textContent = widthField.value + " × " + heightField.value + " px" + (retinaField.checked ? " · 2× 高清" : "");
        copyUrlButton.disabled = false;
        copyHtmlButton.disabled = false;
        openImage.href = url.href;
        downloadImage.href = url.href;
      } catch (error) {
        errorField.textContent = error.message;
        urlField.value = "";
        previewImage.removeAttribute("src");
        previewStage.classList.add("is-empty");
        previewStage.classList.remove("is-loading");
        copyUrlButton.disabled = true;
        copyHtmlButton.disabled = true;
        openImage.removeAttribute("href");
        downloadImage.removeAttribute("href");
      }
    }
    function showToast(message) {
      clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add("show");
      toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2300);
    }
    async function copy(value, message) {
      let field;
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
        else {
          field = document.createElement("textarea");
          field.value = value;
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.append(field);
          field.select();
          if (!document.execCommand("copy")) throw new Error("copy failed");
        }
        showToast(message);
      } catch { showToast("复制失败，请手动选取链接"); }
      finally { field?.remove(); }
    }
    form.addEventListener("input", update);
    form.addEventListener("submit", function (event) { event.preventDefault(); });
    backgroundPicker.addEventListener("input", function () { backgroundText.value = backgroundPicker.value.toUpperCase(); update(); });
    foregroundPicker.addEventListener("input", function () { foregroundText.value = foregroundPicker.value.toUpperCase(); update(); });
    backgroundText.addEventListener("change", function () { const value = color(backgroundText.value); if (value) { backgroundText.value = "#" + value; backgroundPicker.value = "#" + value; } update(); });
    foregroundText.addEventListener("change", function () { const value = color(foregroundText.value); if (value) { foregroundText.value = "#" + value; foregroundPicker.value = "#" + value; } update(); });
    document.querySelectorAll("[data-size]").forEach(function (button) { button.addEventListener("click", function () { const parts = button.dataset.size.split("x"); widthField.value = parts[0]; heightField.value = parts[1]; update(); }); });
    previewImage.addEventListener("load", function () { previewStage.classList.remove("is-loading"); });
    previewImage.addEventListener("error", function () { if (previewImage.currentSrc === urlField.value) { previewStage.classList.remove("is-loading"); previewStage.classList.add("is-empty"); errorField.textContent = "图片生成失败，请调整设置后重试"; } });
    copyUrlButton.addEventListener("click", function () { if (urlField.value) copy(urlField.value, "图片链接已复制"); });
    copyHtmlButton.addEventListener("click", function () { if (urlField.value) copy('<img src="' + urlField.value.replaceAll("&", "&amp;") + '" alt="占位图" width="' + widthField.value + '" height="' + heightField.value + '">', "HTML 标签已复制"); });
    if (document.modelContext?.registerTool) {
      const lifecycle = new AbortController();
      window.addEventListener("pagehide", function () { lifecycle.abort(); }, { once: true });
      try {
        Promise.resolve(document.modelContext.registerTool({
          name: "configure_placeholder",
          title: "设置占位图",
          description: "设置尺寸、颜色和可选文字，更新页面预览并返回可嵌入的图片 URL。",
          inputSchema: {
            type: "object",
            properties: {
              width: { type: "integer", minimum: 1, maximum: 4000 },
              height: { type: "integer", minimum: 1, maximum: 4000 },
              background: { type: "string", description: "背景十六进制颜色" },
              foreground: { type: "string", description: "文字十六进制颜色" },
              text: { type: "string", maxLength: 60 },
              retina: { type: "boolean" },
              radius: { type: "integer", minimum: 0, maximum: 80 },
            },
            required: ["width", "height", "background", "foreground"],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          async execute(input) {
            if (!input || !Number.isInteger(input.width) || !Number.isInteger(input.height) || typeof input.background !== "string" || typeof input.foreground !== "string" || !color(input.background) || !color(input.foreground)) throw new Error("尺寸或颜色无效");
            const retina = input.retina === true;
            const scale = retina ? 2 : 1;
            if (input.width < 1 || input.height < 1 || input.width * scale > 4000 || input.height * scale > 4000 || input.width * input.height * scale * scale > 8000000) throw new Error("输出尺寸超出范围");
            if (input.text !== undefined && (typeof input.text !== "string" || Array.from(input.text).length > 60)) throw new Error("图片文字无效");
            if (input.radius !== undefined && (!Number.isInteger(input.radius) || input.radius < 0 || input.radius > 80)) throw new Error("圆角无效");
            if (input.retina !== undefined && typeof input.retina !== "boolean") throw new Error("高清选项无效");
            widthField.value = String(input.width);
            heightField.value = String(input.height);
            backgroundText.value = "#" + color(input.background);
            foregroundText.value = "#" + color(input.foreground);
            backgroundPicker.value = backgroundText.value;
            foregroundPicker.value = foregroundText.value;
            textField.value = input.text || "";
            retinaField.checked = retina;
            radiusField.value = String(input.radius || 0);
            update();
            if (previewImage.decode) await previewImage.decode();
            return { url: urlField.value, width: input.width, height: input.height };
          },
        }, { signal: lifecycle.signal })).catch(function () {});
      } catch {}
    }
    update();
  </script>
</body>
</html>`;

function normalizeColor(value) {
  const match = /^([0-9a-f]{3}|[0-9a-f]{6})(?:,(\d{1,3}))?$/i.exec(value);
  if (!match) return null;
  const raw = match[1].length === 3 ? [...match[1]].map((part) => part + part).join("") : match[1];
  const alpha = match[2] === undefined ? 255 : Number(match[2]);
  if (alpha > 255) return null;
  return { hex: `#${raw.toUpperCase()}`, opacity: alpha / 255 };
}

function escapeXml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
}

function parseImageRequest(url) {
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 1 || parts.length > 3) return null;
  const size = /^([1-9]\d{0,3})(?:x([1-9]\d{0,3}))?$/.exec(parts[0]);
  if (!size) return null;
  const width = Number(size[1]);
  const height = size[2] ? Number(size[2]) : width;
  const background = normalizeColor(parts[1] || "DBE4F1");
  const foreground = normalizeColor(parts[2] || "364F75");
  if (!background || !foreground) throw new Error("颜色须为 3 位或 6 位十六进制，可附加 0–255 的透明度");
  const retina = url.searchParams.get("retina");
  if (retina !== null && retina !== "0" && retina !== "1") throw new Error("retina 只能为 0 或 1");
  const scale = retina === "1" ? 2 : 1;
  if (width * scale > 4000 || height * scale > 4000 || width * height * scale * scale > 8000000) throw new Error("输出尺寸不能超过 4000 px 或 800 万像素");
  const text = (url.searchParams.get("text") || `${width} × ${height}`).trim().replace(/\s+/g, " ");
  if ([...text].length > 60) throw new Error("文字不能超过 60 个字符");
  const radiusValue = url.searchParams.get("radius");
  if (radiusValue !== null && !/^\d{1,3}$/.test(radiusValue)) throw new Error("圆角须为 0–999 的整数");
  const radius = radiusValue === null ? 0 : Number(radiusValue);
  const fontValue = url.searchParams.get("font_size");
  if (fontValue !== null && !/^\d{1,3}$/.test(fontValue)) throw new Error("字号须为 8–300 的整数");
  const requestedFontSize = fontValue === null ? null : Number(fontValue);
  if (requestedFontSize !== null && (requestedFontSize < 8 || requestedFontSize > 300)) throw new Error("字号须为 8–300 的整数");
  return { width, height, background, foreground, text, radius: Math.min(radius, width / 2, height / 2), scale, requestedFontSize };
}

function createSvg(options) {
  const { width, height, background, foreground, text, radius, scale, requestedFontSize } = options;
  const weight = [...text].reduce((sum, char) => sum + (char.codePointAt(0) > 255 ? 1 : 0.6), 0);
  const fit = Math.max(8, Math.min(width / Math.max(weight, 1) * 0.82, height * 0.32, 72));
  const fontSize = Math.round(Math.min(requestedFontSize || fit, width, height));
  const label = width < 55 || height < 25 ? "" : `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${foreground.hex}" fill-opacity="${foreground.opacity}" font-family="Arial, Noto Sans, sans-serif" font-size="${fontSize}" font-weight="650">${escapeXml(text)}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(text)}"><rect width="${width}" height="${height}" rx="${radius}" fill="${background.hex}" fill-opacity="${background.opacity}"/>${label}</svg>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(page, { headers: { "content-type": "text/html; charset=utf-8", "x-content-type-options": "nosniff" } });
    }
    if (request.method !== "GET" && request.method !== "HEAD") return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
    try {
      const options = parseImageRequest(url);
      if (!options) return new Response("Not found", { status: 404 });
      return new Response(request.method === "HEAD" ? null : createSvg(options), {
        headers: {
          "content-type": "image/svg+xml; charset=utf-8",
          "cache-control": "public, max-age=86400",
          "access-control-allow-origin": "*",
          "x-content-type-options": "nosniff",
          "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'",
        },
      });
    } catch (error) {
      return new Response(error.message, { status: 400, headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } });
    }
  },
};
