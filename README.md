# FrameKit 占位图工坊

需要 Node.js 18 或更新版本。在项目目录运行 `npm run dev`，然后打开 http://127.0.0.1:4174/ 。修改 `worker/index.js` 后，重启预览服务即可看到新代码。无需安装依赖。

生成图片的示例地址：http://127.0.0.1:4174/800x450/DBE4F1/364F75/?text=Hello

Use this starter for a static microsite, click counter, or simple internal UI whose state is browser-scoped. It has no dependencies and needs no install.

Edit `worker/index.js`, then publish through the Sites hosting workflow with this starter's build and validation in `commands`.

The build copies only `worker/index.js` and `.openai/hosting.json`. Do not add standalone asset files. Embed any essential raster bytes in `worker/index.js` and serve or reference them as a data URL.

Pass these argument arrays as `commands`:

```json
[
  ["bash", "scripts/build.sh"],
  ["node", "scripts/validate-artifact.mjs"]
]
```

The deterministic build produces:

```text
dist/
├── .openai/
│   └── hosting.json
└── server/
    └── index.js
```

`dist/server/index.js` is an ES module with a default export containing `fetch(request, env, ctx)`. Edit `worker/index.js`, not the generated file under `dist/`.
