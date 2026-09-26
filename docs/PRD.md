# Black Wallpaper 产品说明文档（PRD v0.1）

> 日期：2026-09-21 ｜ 状态：方向验证期（MVP）
> 对标站点：[pantallanegra.com](https://pantallanegra.com/zh-CN/)

---

## 1. 产品一句话定位

**一个让用户 3 秒拿到"真·#000000"壁纸的纯静态工具页**——搜索意图即答案，进来即下载，无需注册、无图库、无后端。

- 产品形态：Web（移动优先），单页即可用
- 核心动作：选设备/尺寸 → 一键下载纯黑 PNG
- 获客方式：100% 自然搜索（Google 为主）
- 部署：Vercel 静态化，零运行时成本

---

## 2. 市场背景：为什么这个词值得做

"black wallpaper"不是小众审美需求，而是**需求刚、供给弱**的流量洼地：

| 意图层 | 代表词（月搜索量级） | 用户真实目的 |
|---|---|---|
| ⬛ 纯黑下载（大头） | `a black wallpaper` 14.8K / `download pitch black` 18.1K | 就要一张 #000000：省电、测坏点、防烧屏 |
| 🔋 OLED 省电 | `amoled wallpaper` / `true black wallpaper` | 被科普后专门找"真黑"，为续航 |
| 🖤 极简审美 | `black background` / `black and white pattern` | Dark Mode 配套、突出图标、高级感、护眼 |
| 🔧 故障排查 | `why is my wallpaper black`（Questions 类 386 词 / 19K） | 壁纸莫名变黑来求助（省电模式/深色模式/系统更新） |
| 🎨 设计衍生 | `black desktop wallpaper` | 做 PPT/海报的设计素材 |

**竞争现状**：现有结果多为 Pinterest 图墙、低质聚合站、广告弹窗站，"即搜即下真黑图"的工具型结果少——这正是 pantallanegra.com 这类站能靠一个简单工具页吃多语种流量的原因。

---

## 3. 对标分析：pantallanegra.com 模式拆解

参考站（西班牙语起源，已做 es/en/zh-CN 等多语言）本质是一个**"纯色屏 + 下载器"工具**：

| 模块 | 内容 | 可借鉴点 |
|---|---|---|
| 核心工具 | 分辨率档位（240p→8K）+ 自定义宽高，点击立即下载 | ✅ 工具即页面，意图满足极快 |
| DIY 配色 | 自定义任意纯色生成壁纸 | ✅ 覆盖 `color wallpaper` 衍生词 |
| 10 种黑色 | 纯黑/炭黑/午夜黑/油墨黑…带色卡和代码 | ✅ 独立内容页吃长尾（`charcoal black wallpaper` 等） |
| 用途科普 | 坏点检测、投影校准、OLED 节能、冥想专注、视频调色 | ✅ 零成本文本，扩语义相关性 |
| 对比内容 | 白屏/蓝屏/红屏使用场景对比、OLED 功耗对比 | ✅ 内链矩阵雏形（各颜色独立页） |
| FAQ | 4 条高频问答 + 评分组件（4.9/5，512 票） | ✅ FAQ 富摘要；评分制造信任感 |
| 多语言 | 路径前缀 `/zh-CN/`、`/es/` 等 | ✅ 同一套页面复制语言版本，流量翻倍 |

**它的弱点（我们的差异化空间）**：

1. **没有设备维度**——只给分辨率档位，不按 iPhone/Android 机型组织；`black wallpaper iphone` 词族承接弱
2. **不是壁纸专属**——定位是"纯黑屏工具"，审美/极简人群的观感和转化未被照顾
3. **视觉与 E-E-A-T 普通**——无机型对照表、无设置教程、内容较薄
4. **西语站基因**——英文 SEO 与本土化内容（机型、系统设置路径）仍有空白

---

## 4. 目标用户与核心场景

| 用户 | 进来时的想法 | 我们给的答案 |
|---|---|---|
| iPhone 用户 | "找张纯黑锁屏壁纸，要正好铺满" | iPhone 现役机型尺寸一键下载 + 设置教程 |
| Android/AMOLED 用户 | "真黑省电，#000 才有用" | 1080×2400 / 1440×3120 等预设 + OLED 原理背书 |
| 桌面用户 | "显示器测坏点 / 极简桌面" | 1080p / 1440p / 4K 档位 |
| 求助用户 | "为什么我壁纸自己变黑了？" | FAQ 直接解答（省电模式/深色模式/系统更新） |
| 设计/DIY 用户（二期） | "要近黑但不是纯死黑" | 10 种黑色色卡 + 自定义颜色 |

---

## 5. 产品定位与差异化

**一句话**：英文市场的"设备友好版 pantallanegra"——按机型组织的真黑壁纸下载页。

三个差异点：

1. **By device, not by resolution**：iPhone / Android（AMOLED）/ Desktop 三条预设路径，尺寸来自真机，下载即用不裁剪
2. **真黑承诺**：全站核心资源只提供严格 `#000000`（区别于暗灰"假黑"），并解释为什么 OLED 上只有 #000000 才省电
3. **搜索意图全覆盖**：纯下载（主）+ 科普（省电/烧屏/坏点）+ 故障排查 FAQ，一页承接五层意图，争 FAQ 富摘要

---

## 6. MVP 范围（本期落地页）

页面只承担两个任务：**① 承接长尾词搜索 ② 推动一键下载**。

### 6.1 必做（P0）

| 模块 | 说明 | 承接词族 |
|---|---|---|
| Hero | H1：Pure Black Wallpaper（#000000）+ 主 CTA"Download Free"，3 个设备 Tab（iPhone / Android / Desktop） | pure black / pitch black |
| 尺寸下载器 | 每 Tab 下 3–5 个真机预设尺寸（见 6.3），点击即下载 PNG；另给一个 1080×2316 通用兜底 | 全部 |
| iPhone 区块 | H2 + 机型尺寸对照表（iPhone 16 Pro Max 等）+ 3 步设置教程 | black wallpaper iphone |
| AMOLED 区块 | H2 + "为什么 #000000 在 OLED 上 0 功耗（像素自发光关闭）"+ 防烧屏说明 | amoled wallpaper / true black |
| 用途区 | 坏点检测、省电、护眼极简、Dark Mode 搭配（图标化短文案） | black background |
| FAQ | 6–8 条，含 "Why is my wallpaper black?"、真黑 vs 假黑、各屏幕差异、怎么设置 | why is my wallpaper black 等 |
| 信任元素 | 无水印 / 免费 / 无需注册 / 无 App | — |

### 6.2 下载器技术方案（关键决策）

**不预生成图片文件，用浏览器 Canvas 在客户端即时生成纯黑 PNG**：

```ts
// 伪代码：选尺寸 → canvas 填 #000000 → toBlob → <a download>
const canvas = document.createElement('canvas');
canvas.width = w; canvas.height = h;
canvas.getContext('2d').fillRect(0, 0, w, h);
canvas.toBlob(b => a.href = URL.createObjectURL(b), 'image/png');
```

理由：零静态资源体积、任意尺寸自由扩展、无存储成本、天然支撑二期 DIY 配色。（如后续实测某些机型对 dataURL 下载不友好，再补静态 PNG 兜底。）

### 6.3 MVP 预设尺寸（初版）

- **iPhone**：1320×2868（16 Pro Max/15 Pro Max）、1206×2622（16/15 Pro）、1179×2556（14/13/12 系列）、1242×2688（Plus 老款兜底）
- **Android / AMOLED**：1440×3120（QHD+ 旗舰）、1080×2400（FHD+ 主流）、1080×2340（老款）
- **Desktop**：3840×2160（4K）、2560×1440（2K）、1920×1080（FHD）

> 尺寸表在代码里以数据文件维护，发版前核对 Apple/主流 Android 当年新机参数。

### 6.3.1 明确不做（本期）

- ❌ 用户账号、上传、收藏、评论、社区
- ❌ 非黑图案图库 / 摄影师 UGC
- ❌ 服务端、数据库、登录
- ❌ 付费墙、登录墙
- ❌ 多语言（先打英文；西/葡/中在验证成功后复制，见路线图）
- ❌ 自定义颜色、10 种黑色色卡（二期，先验证主词族）

---

## 7. 站点与 URL 结构

- **一期（当前）**：单页 `/`，页面内锚点分区（`#iphone`、`#amoled`、`#faq`）。快速上线、集中权重。
- **二期（数据验证后拆分）**：
  - `/black-wallpaper-iphone`（+ 机型长尾页 `/iphone-16-pro-max` 等，视搜索量模板化生成）
  - `/amoled-wallpaper`、`/pure-black-wallpaper`、`/black-desktop-wallpaper`
  - `/shades/[color]`：炭黑、午夜黑等色卡页（对标"10 种黑"）
  - `/zh-CN/`、`/es/` 等 hreflang 多语言版本
- 全站内链：FAQ / 用途文案中互链各分区与二期页面，形成主题聚类（topical cluster）。

---

## 8. SEO 策略

| 项 | 做法 |
|---|---|
| Title / Meta | 主词 + 设备词 + 利益点：`Pure Black Wallpaper #000000 — Free HD Downloads for iPhone & AMOLED` |
| H 结构 | 单一 H1；三个 H2 对应三词族；FAQ 用 H3 |
| 结构化数据 | `FAQPage` + `WebApplication`（含评分 rating 可二期补）+ `BreadcrumbList` |
| sitemap / robots | 静态生成 `sitemap.xml`、`robots.txt`；Vercel 部署后即提交 GSC |
| 性能 | 纯静态 + 零图片请求（Canvas 生成），LCP/CLS 目标全绿；字体 `display: swap`，不引第三方统计脚本 |
| OG 图 | 静态生成一张黑底白字品牌 OG 图 |
| 外链冷启动 | Product Hunt / Reddit r/amoled、r/iphone 相关帖、冷门工具目录站（manual，不买链） |

---

## 9. 技术方案

- **框架**：Next.js App Router + TypeScript + Tailwind CSS（已初始化，Next 16 / React 19）
- **渲染**：首页 SSG/静态；下载器为 client component（`'use client'`，仅交互岛水合）
- **部署**：Vercel，绑定自定义域名；无环境变量、无后端
- **可访问性**：语义化标签、按钮 focus 态、FAQ 用原生 details/summary
- **埋点（验证用，极简）**：一期仅 GSC（曝光/点击/排名）+ Vercel 分析；验证"下载 CTR"时再用最轻量的自托管事件统计，避免拖慢页面

---

## 10. 成功指标（4–6 周验证假设）

| 指标 | 目标 | 验证什么 |
|---|---|---|
| GSC 三词族总曝光 | 4 周内 > 10K | 方向是否有自然流量 |
| 目标词排名 | 三词族各至少 1 词进 Top 20 | 页面 SEO 竞争力 |
| 下载按钮 CTR（下载/UV） | ≥ 25% | 意图承接是否顺畅 |
| 自然点击 → 下载转化率 | ≥ 30% | 流量质量 |
| LCP | ≤ 1.5s（移动端） | 工具页性能基线 |

**决策门**：6 周后若三词族曝光增长停滞且无词进 Top 30，转向二期策略（拆路由 + 多语言 + 色卡矩阵扩页面量）；若数据向好，按路线图加速。

---

## 11. 路线图

- **P0（本期，1–2 天）**：单页落地页 + 设备尺寸下载器 + FAQ + SEO 基建 → 部署 → 提交 GSC
- **P1（验证后，2–3 周）**：拆独立路由页；10 种黑色色卡页；自定义颜色 DIY；评分/投票模块（对标参考站信任组件）
- **P2（1–2 月）**：多语言（zh-CN / es / pt，直接复刻其已被验证的市场）；机型库模板化批量页；白/蓝/红屏工具矩阵内链
- **P3（远期可选）**：图案类极简壁纸（几何/线条）、深色模式图标包联动

---

## 12. 风险与备注

1. **关键词数据来自第三方工具估算**，量级以 GSC 实际曝光为准，勿在拿到真实数据前扩页面量。
2. **壁纸下载的跨端差异**：iOS Safari 对 `download` 属性支持有限，可能表现为"长按存图"——需真机测试并在按钮下给"Long press to Save"兜底提示。
3. **"真黑省电"的表述要准确**：仅 OLED/AMOLED 上黑色像素关闭；LCD 黑屏不省电，FAQ 中必须写明，避免信任损耗。
4. 参考站的评分（4.9/512 票）疑似站内自评组件，不做虚假评论；如加评分，需有真实投票机制。
