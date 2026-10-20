# lbydgzt · 来宾移动工作台原型

固定访问地址：https://wang6122546.github.io/lbydgzt/

GitHub 仓库：https://github.com/wang6122546/lbydgzt

发布方式：推送到 `main` 分支后由 GitHub Pages 自动更新，访问地址保持不变。

当前范围：首页、我的、工作台系统入口，以及首页任务通知和通知公告入口。

## 本地运行
在本目录执行 `python3 -m http.server 8765`，访问 http://localhost:8765/ 。也可从上级目录启动并访问 `/mobile-platform-prototype/`。

原生 HTML / CSS / JavaScript ES Modules，无需安装依赖。不使用 file:// 打开。

## 接入子系统
编辑 `config/routes.js` 中系统的 `url`，填写后续子系统的实际页面地址。`systemURL()` 统一负责工作台、首页常用功能、“更多”和待办卡片跳转，并传递 `entry`、`taskId`。聊天链接用于定位后续实现，不能直接作为业务页面地址。

## 数据
全部为本地演示数据。企业名和用户名称已替换；原站动态业务数据不会被请求或修改。设置、缓存显示状态、待办通过 `services/repository.js` 访问，以 localStorage 持久化。看板零值为独立外部统计快照，不由演示任务数量计算。

参见 PROJECT_MAP.md 与 tests/ACCEPTANCE.md。

## 安全作业管理
工作台已接入安全作业管理。直接访问 `/pages/operation-menu.html`。10类作业列表/申请、6类待办、详情、气体检测均有独立HTML入口；采集范围和待确认流程见 PROJECT_MAP.md，验收见 tests/OPERATION_ACCEPTANCE.md。
