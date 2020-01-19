# Angular-Demo3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Run `json-server -w db.json` for a db json db server. api server Navigate to `http://localhost:3000/`.


## Template-driven form 表單練習

1. 請在 `sign-up.component` 建立表單
2. 將 `sign-up.component` 組件放到 `app.component` 組件當中使用
3. `sign-up.component` 組件中的表單有以下條件
   - 2 個表單群組
     - 第一個群組包含：
       - 姓名 - **必填**
       - 密碼 - **必填**且最小必須輸入 10 個字元
     - 第二個群組 - 在第一個群組驗證為正確後，才可出現
       - `E-mail` - **必填**且必須符合 email 格式檢查
       - 推薦人姓名
         - 利用使用者輸入的關鍵字發送 `http request` 查詢拿到 `member` 的名單，將前三個人，利用 `formArray` 的方式 `render` 出來，並且利用屬性 `isRequire` 決定是否必填 
   - 1 個提交按鈕
     - 提交動作：要在表單驗證為正確後，才可啟用點擊操作
     - 按下後提交後，要 **清空**、**重置** 第二個表單群組內的資料
       - 清空可參考 `ReSet();` 方法

