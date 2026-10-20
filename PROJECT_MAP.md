# 项目映射

## 页面
| 页面 | 独立入口 | 模块 |
|---|---|---|
| 首页 | index.html | modules/home.js |
| 我的 | pages/me.html | modules/pages.js |
| 工作台 | pages/workbench.html | modules/pages.js |
| 任务通知 | pages/todo.html | modules/pages.js |
| 通知公告 | pages/notices.html | modules/pages.js |
| 子系统接入占位 | pages/subsystem.html?system=hazard | modules/pages.js |

## 公共层
- components/layout.js：页头、导航、图片、系统链接、弹层、确认框、提示。
- styles/tokens.css / global.css：设计令牌、公共样式。
- styles/home.css / me.css：页面样式；reference-assets.css 保留参考中的内嵌图形背景。
- assets/：已观察页面的图标与背景，离线可用，无第三方 CDN。
- config/routes.js：页面注册、系统注册及稳定跳转参数。
- data/seed.js：功能、待办、看板、指标定义。
- services/repository.js：统一读取、创建、修改、删除演示任务和保存设置。

## 跳转边
首页常用功能 → systemURL(system, entry)
首页系统看板更多 → systemURL(system)
首页待办卡片 → systemURL(system, taskId, entry=todo)
工作台图标 → systemURL(system, entry=workbench)
任务通知 → systemURL(system, taskId, entry=notifications)
所有系统 URL 未配置时 → 子系统接入占位页 → 首页/工作台

## 采集来源与确认范围
2026-10-15，用户完成登录后查看 test-bw.gsafetycloud.com/platform-h5-hjdqh。
已观察：首页、8 个常用功能、常用功能设置、周日历、任务通知、4 个看板、看板配置、现场管理的设备/重点部位及统计/单位视图、工作台、我的、单位切换空状态。
当前参考站工作台“边坡尾矿库监测预警”和“安全生产大家谈”图形未显示，保留图标位及可点击文字。

## 待确认与边界
- 子系统实际业务页面地址等待后续对话；本轮不实现其内容。
- 原站统计为账号相关外部快照，本地使用 0 值；原站任务会动态变化，本地保留两条结构相同的虚构示例。
- 扫码须由移动端运行容器提供，本地给出明确提示。
- 常用功能包含已采集的完整分组，最多 30 项，可添加移除并保存；未采集到的图形保留空位，子系统业务待接入。
- 退出登录和清除缓存为本地演示动作；不触及真实登录会话。
- 通知公告暂为空状态；真实列表内容与详情待确认。
- 样式已做手机视口人工比对，未执行逐像素自动差异分析，不声称像素完全一致。

## 2026-10-15 相关方管理移动端增量
- 独立入口：pages/partner.html（管理菜单）、pages/partner-training.html（三级安全培训记录）、pages/partner-training-edit.html?id=demo-person-1（上传/修改）。
- 统一路由：config/routes.js；工作台及所有 contractor 系统入口接入管理菜单。
- 公共呈现：styles/partner.css 与 modules/partner.js 共用页头、图片预览、提示；assets/partner 为原站菜单图标、横幅和背景。
- 统一数据：data/partner-seed.js → services/partner-repository.js → IndexedDB。稳定人员 ID 串联列表和表单；图片为本地数据，保存后列表重新读取。
- 采集：已登录参考站，菜单两组共12项、培训列表所有字段、13条记录的结构、上传和修改页面、图片控件。未提交真实系统数据。
- 演示边界：姓名、手机号及培训附件使用明确虚构样例。其他菜单业务不在本轮范围，点击给出待确认说明。图片大小10MB为本地演示限制；原站上传限制、服务端异常提示和提交后行为未提交验证。
- 视觉：按手机视口人工对照已观察页面；使用响应式四列菜单，修正参考站在运行中缩放导致旧列宽未重算的问题。未执行逐像素差异分析。

## 2026-10-16 人员信息入口纠正
已撤销人员信息到 partner-prototype PC 页的错误映射。人员信息必须采集并实现参考系统自身的移动端页面，不能复用 PC 页作为替代。当前参考平台工作台未加载系统入口，子系统菜单未加载权限项目，人员页结构尚待采集；菜单暂保留明确待确认提示。PC 表单选填状态不作为移动端实现完成的证据。

### 2026-10-16 移动端人员信息实页接入（替代此前待确认说明）
- 已从登录后的移动端参考系统核对：人员信息列表、新增人员信息、岗位下拉及全部表单字段。菜单人员信息链接至本项目 `pages/partner-people.html`；新增/编辑独立入口 `pages/partner-people-edit.html`。
- `modules/partner-people.js` 管理展示和校验；`styles/partner-people.css` 仅影响人员页面；复用相关方页头、搜索、路由与 Repository，新增岗位字典及空状态插图。
- IndexedDB 升级版本 2，增加 personnel 对象库，保留 training 数据。人员列表搜索、保存、编辑回填共用 personnelRepository。未复制真实人员数据。
- 准入培训合格证/上岗证移除必填星号和必填校验，其余原有必填项保留。附件支持本地选择、预览、删除；证件照等使用图片附件，其他资料支持图片及文档。
- 参考列表当前无人员记录，因此已保存人员卡片与编辑入口属于本地演示补全，并非声称来源系统截图已核实。日期和岗位选择采用浏览器原生控件；来源自定义选择器的弹层视觉未完全复制。超龄等未触发的来源条件规则仍待确认。
- 验证使用明确虚构的“演示人员”和空状态示意图片作为附件，准入证件留空保存成功；搜索空状态、编辑回填和刷新保留通过。没有向真实系统提交记录。

### 基线优化评审高亮
人员新增/编辑表单中，准入培训合格证/上岗证整个字段区域以浅黄色背景及黄色边框标注，明确显示“优化项 · 必填 → 选填”与基线/优化后规则。其余字段不标黄，保持原必填校验。

评审展示调整：移除准入证件黄色区域内的两行优化说明，仅保留字段名称、上传控件和黄色高亮；选填行为不变。

## 2026-10-20 安全作业管理移动端

### 入口与页面
- 工作台、首页 operation 系统入口统一接入 `pages/operation-menu.html`。
- 菜单：我的待办6项、作业管理10项；原始横幅、16个图标、列表背景与空状态插画保存在 `assets/operation/`。
- 待办独立入口：`operation-risk.html`、`operation-safety.html`、`operation-approval.html`、`operation-scene.html`、`operation-acceptance.html`、`operation-event.html`。
- 10类作业各有独立列表与申请HTML：`operation-{routine,fire,electric,high,crane,earth,blind,road,confined,blasting}-{list,apply}.html`。
- 详情：`operation-detail.html?id=稳定主键&from=返回页`；气体检测：`operation-gas.html?id=作业票主键`；监护/气体检测记录：`operation-records.html?id=作业票主键`。
- 共30个独立HTML入口；配置统一维护于 `config/operation.config.js`。

### 组件与数据
- `components/operation-ui.js`：公共页头、提示、选择弹层、确认、附件预览、签字画布、文件读取。
- `modules/operation.js`：菜单、列表筛选、申请表、详情、气体检测、记录控制器。作业专属等级说明、字段和审批人员来自10类已采集申请表。
- `styles/operation.css`：复用全局令牌，作用于本模块独立入口，不改既有页面样式。
- `data/operation-seed.js` → `services/operation-repository.js` → IndexedDB（`mobile-operation-demo`，tickets/gas/meta）。6条明确虚构样例；人员与单位均使用演示名称。
- 列表与详情按ID重新读取同一记录；创建后可在“申请中”查询，复制新增不覆盖原记录；删除、终止、筛选、刷新保留均通过统一Repository。列表和菜单数字由本地同一数据计算。
- 气体检测记录按 ticketId 关联原作业票，照片及手写签字只保存在本地。

### 采集边界与待确认
- 2026-10-15 用户登录后只读查看参考安全作业子系统：菜单全部16项、6类待办、10类作业列表及申请表两个页签、动火详情两个页签、类型筛选、单位选择、日期筛选、气体检测表。
- 风险评估/接收交底入口对已过期记录提示“当前作业票已超过作业开始时间，请重新申请作业票”；保留此已观察提示，后续实际评估、交底、审批、验收、事件流程缺少可访问样例，待确认。
- 作业审批为空插画；现场实施、验收审批、事件处置为“已加载完毕”空列表，按已观察状态实现。不能据此认为其有数据时的所有页面已还原。
- 原站组织机构、人员、项目、监控设备依赖后台；本地选择器采用演示选项。地图服务无法离线还原，明确提示待确认。日期输入、附件与签字为本地可操作模拟，未声称和原站弹层逐像素一致。
- 新申请只进入本地“申请中”，后续审批路由未观察，不自动生成审批结论或虚构流转规则。监护记录无参考详情样例，为空；气体检测记录提供本地展示。
- 爆破等级说明中的重复文字、高处说明中的原站备注保留采集文本，业务文案正确性待确认。
- 已按手机布局人工比对菜单，未进行逐像素自动差异计算，不声称整个系统已达到像素级1:1。

### 验证
参见 `tests/OPERATION_ACCEPTANCE.md` 与 `tests/operation-browser-checks.json`。原站未提交、未删除、未终止任何业务记录。
