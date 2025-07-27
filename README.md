# Responsive Ad Creative Showcasing Recommended Products

這是一個基於 React + Vite 的廣告製作平台，支援多種廣告尺寸的響應式設計。

## 專案架構

```
ad-produces/
├── public/                 # 靜態資源
│   └── vite.svg
├── src/                    # 源碼目錄
│   ├── assets/            # 資源文件
│   │   └── react.svg
│   ├── components/        # React 組件
│   │   ├── AdBanner.jsx   # 廣告橫幅組件
│   │   └── CTAButton.jsx  # 行動呼籲按鈕組件
│   ├── config/            # 配置文件
│   │   └── adConfig.js    # 廣告配置
│   ├── mock/              # 模擬數據
│   │   └── products.json  # 產品數據
│   ├── App.jsx            # 主應用組件
│   ├── index.css          # 全局樣式
│   └── main.jsx           # 應用入口
├── index.html             # HTML 模板
├── package.json           # 項目配置
├── vite.config.js         # Vite 配置
├── eslint.config.js       # ESLint 配置
└── yarn.lock              # 依賴鎖定文件
```

## 技術棧

- **前端框架**: React 19.1.0
- **樣式框架**: Tailwind CSS 4.1.11
- **輪播組件**: Swiper 11.2.10

## 系統需求

- **Node.js**: >= 22.12.0
- **包管理器**: Yarn 或 npm

## 開發與建置操作步驟

### 1. 安裝依賴

```bash
# 使用 Yarn (推薦)
yarn install

# 或使用 npm
npm install
```

### 2. 開發模式

```bash
# 啟動開發服務器
yarn dev

# 或使用 npm
npm run dev
```

開發服務器將在 `http://localhost:5173` 啟動，支援熱重載 (HMR)。

### 3. 建置生產版本

```bash
# 建置生產版本
yarn build

# 或使用 npm
npm run build
```

建置完成後，生產文件將生成在 `dist/` 目錄中。

## 功能特色

- **響應式設計**: 支援 320x50、300x250、160x600 三種廣告尺寸
- **自適應佈局**: 根據螢幕寬度自動調整廣告尺寸
