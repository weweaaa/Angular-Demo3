# Angular-Demo3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Run `json-server -w db.json` for a db json db server. api server Navigate to `http://localhost:3000/`.


## Template-driven form 表單練習

1. 請在 `member-info.component` 建立表單
2. 將 `member-info.component` 組件放到 `app.component` 組件當中使用
3. `member-info.component` 組件中的表單有以下條件
   - 2 個表單群組
     - 第一個群組包含：
       - 姓名 - **必填**
       - 電話號碼 - **必填**且最小必須輸入 7 個字元
     - 第二個群組 - 在第一個群組驗證為正確後，才可出現
       - 推薦行員 id - **必填**
       - 推薦行員姓名
         - **必填**
         - **不可以手動輸入**
         - 必須利用 `推薦行員 id` 發出 `http request` 拿到相對應的行員姓名，再自動填入
         - 如果沒有找到相對應的行員，請回應 "查無此人" `alert` 視窗出來！ 
   - 1 個提交按鈕，並請利用 `member-info.component.ts` 中的 `data` 屬性進行 **綁定**
     - 提交動作：要在表單驗證為正確後，才可啟用點擊操作
     - 按下後提交後，要 **清空**、**重置** 表單
       - 清空可參考 `form.ReSet();` 方法
