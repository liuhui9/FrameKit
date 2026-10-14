# FrameKit 占位图工坊

需要 Node.js 18 或更新版本。在项目目录运行 `npm run dev`，然后打开 http://127.0.0.1:4174/ 。修改 `worker/index.js` 后，重启预览服务即可看到新代码。无需安装依赖。

生成图片的示例地址：http://127.0.0.1:4174/800x450/DBE4F1/364F75/?text=Hello

## 微信云托管部署

项目根目录已有 `Dockerfile`，不需要先部署 Express 模板。在云托管控制台选择“通过本地代码部署”，上传本项目目录，容器端口填写 `3000`，Dockerfile 使用根目录的默认文件名。部署完成后，使用服务的公网域名访问首页和 `/800x450/DBE4F1/364F75/?text=Hello`。也可将项目提交到自己的 Git 仓库，再选择 Git 仓库部署。

容器以 Node.js 22 启动，无需安装 npm 依赖。`HOST=0.0.0.0` 和 `PORT=3000` 已写在 Dockerfile 中；云托管的端口配置也必须填写 `3000`。

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
