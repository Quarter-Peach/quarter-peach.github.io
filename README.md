# 邱昊 / Hao Qiu — Personal Homepage

静态个人主页，包含个人介绍、六个项目、相关论文、近期研究兴趣和联系方式。

## GitHub Pages

此目录用于个人主页仓库 `quarter-peach.github.io` 的根目录。
在 Settings → Pages 中，选择 Deploy from a branch → main → /(root)，然后保存。
网页入口为 `index.html`；图片和视频位于 `assets/`；项目详情位于 `projects/`。
`.nojekyll` 用于直接发布静态文件。

## 本地预览

```bash
python3 -m http.server 8000
```

打开 `http://localhost:8000`。

## 更新内容

- `index.html`：首页内容。
- `projects/*.html`：项目详情。
- `site.css`：样式与响应式布局。
- `site.js`：声场动效。
- `portfolio.js`：项目筛选、图片放大、邮箱复制。
- `assets/`：随网站一起发布的图片和 MP4。

此发布版本不包含 PDF 附件，也不包含指向这些附件的站内链接。
论文、源码和 Notion 笔记链接保留原始站点地址。
