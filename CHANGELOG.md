# Auto.dn 更新日志

## [3.0.3] - 2025-10-29

-   Core 更新至 `0.19.0`
-   优化悬浮窗的显示性能
-   修复部分情况下悬浮窗无法最大化的问题

## [3.0.2] - 2025-10-22

-   Core 更新至 `0.18.2`
-   优化工程运行出现错误时，通知的显示信息
-   优化应用通知点击时，支持跳转到应用

## [3.0.1] - 2025-10-22

-   修复 Shizuku 无法启用的问题

## [3.0.0] - 2025-10-19

-   Core 更新至 `0.18.0`
-   应用包名更改为 `com.autsing.autodn`
-   序列化库更改为 `kotlinx.serialization`
-   启用 R8 优化应用运行时的性能
-   打开工程时会尝试自动打开入口点
-   优化编辑器的响应性能
-   优化新建工程和打包工程点击执行时会自动隐藏键盘
-   修复使用 `PaddleModel` 时可能会导致内存泄漏的问题
-   修复运行工程后，修改工程不会及时更新的问题
-   修复打包工程，导入工程遇到错误可能会导致内存泄漏的问题

## [2.1.2] - 2025-10-09

-   Core 更新至 `0.16.0`

## [2.1.1] - 2025-09-25

-   修复欢迎屏幕有时候无法自动跳转的问题
-   优化工程，设置页面的加载速度
-   优化权限，仓库对话框的加载速度
-   发现页面添加提示词

## [2.1.0] - 2025-09-18

-   Core 更新至 `0.15.3`
-   新增初次进入应用时的提示授权页面
-   优化通知请求弹窗的弹出时机
-   修复新建本地工程的模板未更新的问题

## [2.0.0] - 2025-09-12

-   Denofa 正式更名为 Auto.dn
-   Core 更新至 `0.15.0`
-   优化导航栏和状态栏的显示效果
-   优化编辑器功能栏的按钮排序
-   修复悬浮菜单按钮的透明度无法正常切换的问题
-   修复开启悬浮窗日志时，悬浮菜单不会自动关闭的问题
-   修复打包文件夹工程无法正常运行的问题
-   修复编辑器文件列表样式异常的问题

## [1.8.2] - 2025-05-14

-   核心更新 **DenofaCore** `v0.14.2` => `v0.14.4`
-   新增模块 `Android.ai`
-   新增类 `Android.Model`
-   新增枚举类 `Android.ai.backend`
-   新增枚举类 `Android.ai.target`
-   新增接口 `Android.DetectResult`
-   新增接口 `Android.RecognizeResult`
-   新增 7 个 `Android.ai` API
-   新增 8 个 `Android.Model` API

## [1.8.1] - 2025-05-01

-   核心更新 **DenofaCore** `v0.14.1` => `v0.14.2`
-   新增 `Image` 类 1 个 API
-   修复部分情况下，停止运行脚本可能会导致内存泄漏的问题

## [1.8.0] - 2025-04-18

-   核心更新 **DenofaCore** `v0.13.1` => `v0.14.1`
-   新增功能 `计划运行`
-   新增全新的图标
-   新增全新的添加工程，包含导入本地工程、导入远程工程、新建空白工程、新建配置文件工程
-   新增全新的打包功能，包含编译单个文件、混淆工程、压缩工程、打包工程
-   优化 WS 服务器和 FTP 服务器的性能
-   修复 WS 服务器和 FTP 服务器在后台运行可能会受限的问题
-   优化 媒体投影服务 的性能
-   修复 媒体投影服务 在后台运行可能会受限的问题
-   优化通过 WS 服务器截图时没有媒体投影权限会自动尝试获取
-   修复部分情况下日志丢失的问题
-   优化主服务运行通知的文本
-   优化合并部分通知通道
-   新增 `device` 模块 4 个 API
-   新增 `project` 模块 1 个 API
-   新增 `QuickUi` 类 1 个 API
-   修复 `waitForResult` 函数可能会导致内存泄漏的问题
-   修复 `findColors` 函数无法正常使用的问题
-   修复 `findMultiColor` 函数无法正常使用的问题
-   修复 `findMultiColors` 函数无法正常使用的问题
-   优化悬浮日志窗口性能，调整部分 UI
-   优化工程卡片样式
-   优化确认弹窗样式
-   优化日志页面性能
-   优化启动应用时读取工程的性能
-   移除发现页面内容

## [1.6.10] - 2025-01-23

-   悬浮模块重构
-   修复设置的一些性能问题
-   移除部分不需要的资源文件

## [1.6.3] - 2025-01-19

-   修复无障碍服务无法启动的问题

## [1.6.2] - 2025-01-19

-   修复悬浮窗菜单的性能

## [1.6.1] - 2025-01-19

-   修复悬浮窗菜单无法关闭的问题

## [1.6.0] - 2025-01-18

-   依赖升级
-   性能优化

## [1.5.1] - 2024-11-14

-   打包支持部分新导入前缀
-   优化 UI 性能
-   优化 从示例新建工程时的错误信息

## [1.5.0] - 2024-09-11

### App v1.5.0

-   核心更新 **DenofaCore** `v0.12.9` => `v0.13.1`
-   修复自动开启媒体投影权限时首个获取到的图片可能是一个像素点的问题

### Core v0.13.1

-   **Deno** 升级 `v1.39.4` => `v1.44.4`
-   [API](https://github.com/AuTsing/denofa_types) 更新
    -   Android.img.saveImage 现在可以自定义文件名、路径和区域

## [1.3.0] - 2024-08-08

### App v1.3.0

-   新增 悬浮日志 窗口功能

## [1.2.0] - 2024-05-24

### App v1.2.0

-   核心更新 **DenofaCore** `v0.12.8` => `v0.12.9`
-   新增 功能 Deno 任务
-   优化 工作目录修改至应用目录
-   优化 运行状态条位置

### Core v0.12.9

-   [API](https://github.com/AuTsing/denofa_types) 更新
-   新增支持 deno task 子命令支持

## [1.1.1] - 2024-05-21

### App v1.1.1

-   核心更新 **DenofaCore** `v0.12.7` => `v0.12.8`

### Core v0.12.8

-   修复 Deno.execPath 返回值不正确的问题

## [1.1.0] - 2024-05-19

### App v1.1.0

-   新增 插件 Deno
-   优化 日志界面字体
-   修复 应用程序未启动时通过快捷方式运行工程报未找到的问题

## [1.0.1] - 2024-05-09

### App v1.0.1

-   核心更新 **DenofaCore** `v0.12.6` => `v0.12.7`
-   优化 运行重复工程名的工程将报错
-   修复 屏幕截图和使用 WS 命令截图时可能会导致内存泄漏的问题

### Core v0.12.7

-   [API](https://github.com/AuTsing/denofa_types) 更新
-   修复 使用部分 API 可能会导致应用崩溃的问题

## [1.0.0] - 2024-05-06

### App v1.0.0

-   核心更新 **DenofaCore** `v0.12.3` => `v0.12.6`
-   新增 发现页面
-   新增 插件 ngrok
-   新增 日志新增 PID 字段
-   更新 工程项目 卡片样式
-   更新 编辑器 字体样式
-   更新 日志 字体样式
-   更新 权限、参数、仓库 卡片样式
-   更新 确认弹窗 卡片样式
-   更新 新建文件/文件夹 卡片样式
-   优化 日志文本支持选中复制
-   优化 工程详细页面字段支持点击复制
-   修复 悬浮窗可能导致内存泄露的问题
-   修复 标准输出的日志可能写入失败的问题
-   调整 targetSdk 至 28

### Core v0.12.6

-   [API](https://github.com/AuTsing/denofa_types) 更新
-   运行时环境变量 PATH 加入插件路径
-   日志新增 PID 字段

## [0.22.4] - 2024-04-28

### App v0.22.4

-   核心更新 **DenofaCore** `v0.12.0` => `v0.12.3`
-   优化 APP 通知信息的文本信息
-   优化 通知分组的显示情况
-   修复 部分情况下 WS 服务器和 FTP 服务器 IP 信息缺失的问题

### Core v0.12.3

-   [API](https://github.com/AuTsing/denofa_types) 更新

## [0.22.2] - 2024-04-23

### App v0.22.2

-   新增 使用其他应用打开浏览工程功能
-   修复 非普通工程详细页显示仓库按钮的问题

## [0.22.1] - 2024-04-19

### App v0.22.1

-   修复 克隆项目时支持将子模块项目同时拉取
-   修复 与 Github 的网络连接性问题
-   修复 编辑器返回按钮的样式问题

## [0.22.0] - 2024-04-19

### App v0.22.0

-   新增 新建工程支持从远程仓库创建
-   新增 工程仓库功能，支持拉取、推送
-   新增 密钥页面，用于填写 Git 用户验证信息
-   优化 部分图标

## [0.21.1] - 2024-04-15

### App v0.21.1

-   添加 Shizuku 设置项的图标
-   修复 悬浮窗菜单按钮 的贴边问题在多窗口模式下的表现
-   优化 悬浮窗菜单按钮 的样式
-   修复 新建工程时读取远程例子时可能会导致内存泄漏的问题

## [0.21.0] - 2024-04-13

### App v0.21.0

-   核心更新 **DenofaCore** `v0.11.4` => `v0.12.0`
-   新增 Shizuku 权限设置项
-   优化 权限设置项点击性能，防止多次申请权限
-   修复 权限申请失败时恢复为默认关闭状态

### Core v0.12.0

-   [API](https://github.com/AuTsing/denofa_types) 更新

## [0.20.1] - 2024-04-09

### App v0.20.1

-   核心更新 **DenofaCore** `v0.11.3` => `v0.11.4`

### Core v0.11.4

-   修复 shell 模块返回值异常的问题

## [0.20.0] - 2024-04-08

### App v0.20.0

-   核心更新 **DenofaCore** `v0.11.2` => `v0.11.3`
-   新增工程支持添加到桌面快捷方式
-   修复日志窗口部分情况下自动滚动失效的问题

### Core v0.11.3

-   [API](https://github.com/AuTsing/denofa_types) 更新

## [0.19.4] - 2024-04-05

### App v0.19.4

-   修复悬浮窗在部分情况下位置在屏幕外的问题

## [0.19.3] - 2024-04-01

### App v0.19.3

-   新增支持 工程权限
-   新增支持 工程参数
-   调整工程缓存的存储目录
-   优化 添加/移除 快捷方式的操作逻辑
-   简化工程分类为 普通工程 和 其他
-   工程页面菜单新增 停止所有工程 按钮
-   修复 悬浮菜单 快速点击返回会导致空白页面的问题

## [0.19.2] - 2024/03/28

### App v0.19.2

-   核心更新 **DenofaCore** `v0.11.1` => `v0.11.2`
-   修复小窗模式下悬浮窗位置异常的问题

### Core v0.11.2

-   新增环境变量 `HOME`
-   调整环境变量 `DENO_DIR`

## [0.19.1] - 2024/03/22

### App v0.19.1

-   核心更新 **DenofaCore** `v0.11.0` => `v0.11.1`

### Core v0.11.1

-   修复调用 API 传入参数为字符串时函数报错的问题

## [0.19.0] - 2024/03/22

### App v0.19.0

-   APP 名更新 `Denort` => `Denofa`
-   APP 包名更新 `com.atstudio.denort` => `com.autsing.denofa`
-   APP 主目录名更新 `.../Denort` => `.../Denofa`
-   核心更新 **DenofaCore** `v0.10.3` => `v0.11.0`
-   依赖更新 **OpenCV** `v4.7.0` => `v4.9.0`
-   更新 **Ftp 服务器** 实现迁移至 Apache FtpServer
-   优化 降低运行时默认通知消息的提示等级
-   新增 关于页面多个项目
-   新增 关于页面项目支持跳转到其主页

### Core v0.11.0

-   核心名更新 `DenortCore` => `DenofaCore`
-   版本更新 **Deno** `v1.31.3` => `v1.39.4`
-   版本更新 **V8** `v11.0.226.19` => `v12.0.267.8`
-   版本更新 **TypeScript** `v4.9.4` => `v5.3.3`
-   [API](https://github.com/AuTsing/denofa_types) 更新

## [0.18.0] - 2024/03/01

-   新增工程打包功能(基于 DenoEmit)
-   新增工程打包混淆功能(基于 JavaScriptObfuscator)
-   新增新建文件夹类型工程
-   新增新建源文件类型工程
-   新增新建配置文件类型工程
-   修复编辑器在暗黑模式下显示颜色异常的问题
-   修复工程信息页面字段未汉化的问题
-   优化图标按钮的显示样式

## [0.17.7] - 2024/02/16

### App v0.17.7

-   优化文本悬浮窗的显示样式

## [0.17.6] - 2024/02/08

### App v0.17.6

-   更新 核心 由 v0.10.2 更新至 v0.10.3

### Core v0.10.3

-   更新 方法 `Android.img.compareColor`
-   更新 方法 `Android.img.compareColors`
-   更新 方法 `Android.img.findColor`
-   更新 方法 `Android.img.findColors`
-   更新 方法 `Android.img.findMultiColor`
-   更新 方法 `Android.img.findMultiColors`
-   新增 方法 `Android.Point.isPointData`
-   新增 方法 `Android.Rect.isRectData`

## [0.17.5] - 2024/02/02

-   新增 `存储空间` `通知` 权限设置项
-   修复 安卓 13 以上设备信息部分项无法正确获取的问题
-   修复 WS 使用时终止程序再启动会导致 WS 服务器无法启动的问题
-   修复 部分文本错误
-   优化 日志超过 5000 条时移除开头的日志
-   优化 UI 组件性能

## [0.17.4] - 2023/01/07

### App v0.17.4

-   修复 模块 `Android.app` 在安卓 11 以上无法正常使用的问题
-   修复 WS 服务器接收命令不同步导致异常的问题 (需要插件 v0.1.17+)

## [0.17.3] - 2023/12/26

### App v0.17.3

-   修复 在运行脚本过程中旋转屏幕可能会导致应用崩溃的问题
-   修复 设置 页面图标在暗黑模式下显示异常的问题
-   优化 设置 页面的组件样式
-   优化 悬浮窗 页面的组件样式
-   优化 系统状态栏在各个页面的沉浸感
-   优化 悬浮窗适配暗黑模式
-   优化 `QuickUi` 适配暗黑模式

## [0.17.2] - 2023/12/24

### App v0.17.2

-   优化 文件输出输入的性能
-   更新 核心 由 v0.10.1 更新至 v0.10.2

### Core v0.10.2

-   新增 方法 `Android.app.stopPackage`
-   新增 方法 `Android.app.stopApp`
-   新增 方法 `Android.app.installPackage`
-   新增 方法 `Android.app.uninstallPackage`
-   新增 方法 `Android.app.uninstallApp`
-   优化 模块 `Android.app` 需要 超级用户 权限以获得更稳定的输入输出

## [0.17.1] - 2023/12/21

### App v0.17.1

-   修复 `QuickUi` 开启过程中停止脚本会导致内存泄漏的问题
-   更新 核心 由 v0.10.0 更新至 v0.10.1

### Core v0.10.1

-   修复 方法 `Android.img.compareColors` 和预期不一致的问题
-   修复 方法 `Android.img.findMultiColor` 和预期不一致的问题
-   修复 方法 `Android.img.findMultiColors` 和预期不一致的问题

## [0.17.0] - 2023/12/20

### App v0.17.0

-   优化 root 的实现方式
-   优化 运行时的当前路径自动切换到工程文件夹
-   更新 核心 v0.9.0 更新至 v0.10.0

### Core v0.10.0

-   新增 模块 `Android.shell`
-   新增 类 `Android.shell.Sheller`
-   新增 类 `Android.shell.ShellerResult`
-   新增 常量 `Android.shell.ShellerCategory`
-   新增 方法 `Android.app.getRunningPackages`
-   新增 方法 `Android.app.getRunningApps`
-   修复 部分类的导出
-   优化 非首次运行效率

## [0.16.1] - 2023/12/12

### App v0.16.1

-   修复 日志与 WS 服务器不同步的问题
-   更新 API 等级升级至 34

## [0.16.0] - 2023/12/11

### App v0.16.0

-   修复 `QuickUi` `Checkbox` 显示异常的问题
-   修复 加载部分图标资源时会导致报错的问题
-   更新 核心 v0.8.1 更新至 v0.9.0

### Core v0.9.0

-   更新 类 `Android.QuickUiBuilder` 易用性提升
-   更新 类 `Android.io.Notification` 易用性提升
-   更新 方法 `Android.io.notification` 易用性提升
-   更新 类 `Android.Point` 易用性提升
-   更新 类 `Android.Rect` 易用性提升
-   更新 模块 `Android.img` 易用性提升
-   更新 模块 `Android.finger` 易用性提升
-   修复 运行 HTTPS 模块时导致应用崩溃的问题
-   优化 核心稳定性提升
-   优化 日志输出性能

## [0.15.1] - 2023/12/05

### App v0.15.1

-   更新 核心 v0.8.0 更新至 v0.8.1

### Core v0.8.1

-   新增 字段 `Android.Floater.id`
-   新增 字段 `Android.QuickUi.id`

## [0.15.0] - 2023/12/01

### App v0.15.0

-   优化 悬浮窗性能提升
-   更新 应用高清图标
-   更新 悬浮窗高清图标
-   更新 状态栏高清图标
-   更新 悬浮窗菜单质感提升
-   更新 分析布局页面清晰度提升
-   更新 分析布局详情页面质感提升
-   更新 核心 v0.7.0 更新至 v0.8.0

### Core v0.8.0

-   更新 API `Android.Floater.build`
-   新增 API `Android.FloaterBuilder.show`
-   更新 API `Android.FloaterBuilder.close`
-   新增 类 `Android.QuickUi`
-   新增 类 `Android.QuickUiBuilder`
-   新增 类 `Android.QuickUiResult`
-   新增 类 `Android.QuickUiSelectOptions`
-   新增 类 `Android.QuickUiSwitchOptions`
-   新增 类 `Android.QuickUiCheckboxOptions`
-   新增 类 `Android.QuickUiInputOptions`
-   新增 类 `Android.QuickUiTextOptions`
-   新增 API `Android.QuickUi.builder`
-   新增 API `Android.QuickUi.show`
-   新增 API `Android.QuickUi.getResult`
-   新增 API `Android.QuickUi.waitForResult`
-   新增 API `Android.QuickUiBuilder.setTitle`
-   新增 API `Android.QuickUiBuilder.setOkText`
-   新增 API `Android.QuickUiBuilder.setCancelText`
-   新增 API `Android.QuickUiBuilder.setCountDownTime`
-   新增 API `Android.QuickUiBuilder.addSelect`
-   新增 API `Android.QuickUiBuilder.addSwitch`
-   新增 API `Android.QuickUiBuilder.addCheckbox`
-   新增 API `Android.QuickUiBuilder.addInput`
-   新增 API `Android.QuickUiBuilder.addText`
-   新增 API `Android.QuickUiBuilder.build`
-   修复 API `Android.Floater.toString` 异常的问题
-   修复 API `Android.FloaterBuilder.toString` 异常的问题

## [0.14.1] - 2023/11/24

### App v0.14.1

-   修复部分情况下查看设备会崩溃的问题
-   依赖更新

## [0.14.0] - 2023/10/28

### Core v0.7.0

-   新增 API `Android.Floater.Builder.setPosition`
-   新增 API `Android.Floater.Builder.setSize`
-   新增 API `Android.Floater.Builder.setBackgroundColor`
-   新增 API `Android.Floater.Builder.setText`
-   新增 API `Android.Floater.Builder.setTextColor`
-   移除 API `Android.Floater.Builder.position`
-   移除 API `Android.Floater.Builder.size`
-   移除 API `Android.Floater.Builder.background`
-   移除 API `Android.Floater.Builder.text`
-   更新 API `Android.Floater.builder`
-   新增 API `Android.Floater.updatePosition`
-   新增 API `Android.Floater.updateSize`
-   新增 API `Android.Floater.updateBackgroundColor`
-   更新 API `Android.Floater.updateText`
-   新增 API `Android.Floater.updateTextColor`
-   更新 API `Android.Floater.close`

### App v0.14.0

-   重写 `Floater` 模块
-   新增工程类型 `Lib` 库类型
-   修复使用插件运行正在运行的工程会导致工程状态异常的问题
-   移除 JNI 接口 `Img.refeshManually`
-   更新 JNI 接口 `Img.refesh` 函数签名
-   修复使用插件上传工程时不更新库类型工程的问题
-   修复首次使用插件上传工程时反馈错误信息的问题
-   修复悬浮窗类 `Floater` 生成位置不在左上角的问题

## [0.13.1] - 2023/10/24

### App v0.13.1

-   WS 服务器新增接口 `删除`
-   修复部分情况下日志丢失的问题
-   优化日志的输出性能
-   修复通过 VSCode 插件运行工程会导致工程重复运行的问题

## [0.13.0] - 2023/10/13

### App v0.13.0

-   全新的悬浮窗页面
-   悬浮窗按钮支持自动贴边
-   悬浮窗按钮支持记住位置
-   修复通知栏显示信息不全的问题
-   优化保存文件的文本提示
-   修复没有读写权限且启用保存日志会导致应用崩溃问题

## [0.12.0] - 2023/09/14

### App v0.12.0

-   新增支持运行远程工程
-   重构添加工程页面，新增添加远程工程功能
-   重构工程页面

## [0.11.1] - 2023/09/08

### Core v0.6.1

-   模块 `finger` 移除以下函数
    -   finger.accessibility.click
    -   finger.accessibility.press
    -   finger.accessibility.swipe

### App v0.11.1

-   修复目标平台 31 以上运行工程会导致崩溃的问题
-   修复目标平台 31 以上初次进入 APP 检测读写权限异常的问题

## [0.11.0] - 2023/09/05

### Core v0.6.0

-   模块 `finger` 新增以下函数
    -   finger.accessibility.tap
    -   finger.accessibility.swipe
    -   finger.accessibility.dragAndDrop
    -   finger.root.tap
    -   finger.root.swipe
    -   finger.root.dragAndDrop
    -   finger.root.down
    -   finger.root.move
    -   finger.root.up
    -   finger.root.multiDown
    -   finger.root.multiMove
    -   finger.root.multiUp
-   模块 `io` 新增以下函数
    -   io.root.inputText
    -   io.root.inputKeyEvent

### App v0.11.0

-   核心 v0.5.0 ⇒ v0.6.0

## [0.10.0] - 2023/08/29

# Denort App v0.10.0 更新日志

-   修复权限获取窗口在最近任务列表中显示的问题
-   优化运行中工程通知栏信息的显示优先度
-   修复权限申请中断时可能造成的异常问题
-   修复 `我的` 页面下设置没有同步更新的问题

## [0.9.0] - 2023/08/08

# Denort App v0.9.0 更新日志

-   新增 `超级用户(root)` 权限
-   新增 `无障碍服务` 支持使用 `超级用户` 静默开启
-   新增 `媒体投影服务` 支持使用 `超级用户` 静默开启
-   修复部分申请权限时异常退出导致应用崩溃的问题
-   修复横屏开启 `媒体投影服务` 导致参数异常的问题

## [0.8.1] - 2023/07/07

### Denort App v0.8.1 更新日志

-   新增返回键退出应用确认提示
-   新增支持从通知栏停止所有工程
-   优化授权失败时提示消息的样式
-   修复 `媒体投影服务` 授权失败提示异常的问题
-   修复编辑器一些不符合预期的行为
-   修复悬浮窗会重复开启的问题

## [0.8.0] - 2023/07/06

### Denort App v0.8.0 更新日志

-   新增日志自动保存功能
-   新增权限控制 `修改系统设置`
-   新增权限控制 `修改安全设置`
-   新增 `无障碍服务` 权限支持使用 `修改安全设置` 权限 开启
-   新增 无障碍节点查看时支持复制节点信息
-   新增页面 `设备信息`
-   修复设置读写异常的问题
-   修复查看节点时会查看到菜单节点情况的问题’
-   修复无障碍节点字段 `fullId` 不显示 `packageName` 的问题
-   修复设置界面 `无障碍服务` 设置项非预期设置结果的问题
-   优化查看无障碍节点的流程

### DenortCore v0.5.0 更新日志

-   新增模块 `sys`
-   新增模块 `device`
-   新增模块 `project`
-   新增类 `Floater`
-   修复 `UiSelector` 部分函数会导致崩溃的问题

## [0.7.4] - 2023/06/10

### Denort App v0.7.4 更新日志

-   修复截图失败时可能会导致应用崩溃的问题
-   优化脚本运行结束提示
-   新增悬浮窗启动停止脚本功能
-   优化偏好设置存储性能
-   工程新增添加/移除快捷方式功能
-   全新的悬浮窗图标
-   通知通道重写，实时提示运行工程状态
-   运行提示从吐司更改为通知
-   优化开启应用时不再首先询问储存权限
-   新增保存日志至磁盘功能
-   优化使用通知反馈保存文件结果

### DenortCore v0.4.4 更新日志

-   新增函数 notification
-   新增类 Notification
-   修复版本显示异常的问题
-   修复找图找色可选参数默认异常的问题

## [0.7.3] - 2023/05/29

-   修复了一些已知问题

## [0.7.2] - 2023/05/11

### Denort App v0.7.2 更新日志

-   修复启用 WS 服务器异常时没有提示的问题
-   修复媒体投影服务权限开关重启活动后没有同步的问题
-   修复底部消息栏消息重叠的问题
-   修复底部消息栏可能导致应用 ANR 的问题
-   修复 `UiObject` 中使用的 Rect 非 JS 端 `Rect` 的问题
-   `DenortCore` v0.4.0 -> v0.4.1

### DenortCore v0.4.1 更新日志

-   新增 `UiObject` 类成员函数 `getOriginId`
-   优化 `UiSelector` 类 `toString` 可读性
-   优化 `UiSelectorBuilder` 类 `toString` 可读性
-   修复 `UiObject` 中使用的 `Rect` 非 JS 端 `Rect` 的问题

## [0.7.1] - 2023/05/10

### Denort App v0.7.1 更新日志

-   修复对于固定横屏的应用横竖屏参数错误的问题

## [0.7.0] - 2023/05/09

### Denort App v0.7.0 更新日志

-   修复运行工程之前不刷新获取最新工程的问题
-   修复横屏后屏幕参数异常的问题
-   修复删除工程和刷新工程列表没有同步进行的问题
-   无障碍操作参数从 `Coor` 迁移至 `Point`

### DenortCore v0.4.0 更新日志

-   新增模块 `Android.img` 图色模块
    -   新增函数 `refresh` 刷新底层图片
    -   新增函数 `refreshManually` 刷新底层图片
    -   新增函数 `getImage` 获取底层图片 (暂未实装)
    -   新增函数 `lock` 锁定底层图片
    -   新增函数 `unlock` 解锁底层图片
    -   新增函数 `compareColor` 单点比色
    -   新增函数 `compareColors` 多点比色
    -   新增函数 `findColor` 找单点色
    -   新增函数 `findColors` 找多点色
    -   新增函数 `findMultiColor` 多点找单点色
    -   新增函数 `findMultiColors` 多点找多点色
    -   新增类 `CompareColorOptions` 比色可选项
    -   新增类 `FindColorOptions` 找色可选项
-   新增类 `Android.Point` 点类
-   更新类 `Android.Rect` 矩形类
-   更新模块 `Android.finger.accessibility`
    -   更新函数 `click` 函数签名
    -   更新函数 `press` 函数签名
    -   更新函数 `swipe` 函数签名

## [0.6.0] - 2023/05/06

-   新增 WS 服务器支持截图命令
-   修复媒体投影服务可能导致应用崩溃的问题

## 0.5.0 - 2023/04/18

-   WS 服务器
-   FTP 服务器
-   无障碍服务
-   媒体投影服务
-   悬浮窗
-   新关于页面
-   Denort core 升级至 v0.3.0
-   Deno 升级至 v1.31.3
-   若干可能导致崩溃的 bug 修复
-   若干影响流畅度的 bug 修复

## 0.4.0 - 2022/11/13

-   ✨ 工程新增删除按钮
-   ✨ 通过模板新建已实装
-   ✨ 新增 13 个示例
    -   Hello world
    -   import 和 export 模块
    -   管理依赖
    -   请求数据
    -   文件读写
    -   实现 unix cat 程序
    -   HTTP web 服务器
    -   文件服务器
    -   TCP echo 服务器
    -   OS 信号
    -   文件系统事件
    -   模块 metadata

## 0.3.0 - 2022/11/9

-   ✨ 全新的代码编辑器
-   ✨ 新建文件，新建工程已实装
-   🔧 工程详情页面新增打开工程选项
-   🔧 项目根目录调整至 /Denort/Projects

## 0.2.0 - 2022/10/31

-   ✨ 全新的新建工程页面，FTP 服务器开关转移至设置页面
-   🔧 工程页面 UI 调整优化
-   🎈 设置页面新增 FTP 服务器开关
-   🎈 设置页面新增关于页面

## 0.1.1 - 2022/10/29

-   📕 补充部分翻译

## 0.1.0 - 2022/10/28

-   ✨ 现代的 JS 和 TS 运行时 Deno
-   ✨ 安卓 API io 和 finger
-   ✨ Material Design 3 设计的客户端界面
-   ✨ FTP 管理工程
-   ✨ 一键运行工程项目
-   ✨ 简洁的日志管理
