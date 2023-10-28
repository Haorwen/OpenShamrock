import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as i,e as n}from"./app-3a656267.js";const t={},c=n('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Shamrock 提供了一个图形化的配置界面，可进行简单的配置操作。<br> 大部分配置简单易于理解，我们仅仅介绍部分难于理解的配置选项。</p></div><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2><h3 id="强制平板模式" tabindex="-1"><a class="header-anchor" href="#强制平板模式" aria-hidden="true">#</a> 强制平板模式</h3>',3),o=n(`<p>强制要 QQ 客户端 以平板模式运行，让机器人于主账号登录在手机共存登录。</p><h3 id="专业级接口" tabindex="-1"><a class="header-anchor" href="#专业级接口" aria-hidden="true">#</a> 专业级接口</h3><p>提供一些危险的接口，如 签名/发包 一系列不合规的操作。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用这些接口可能会导致 QQ 账号 被封禁，若非必要，请不要使用。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>除了 WebSocket 相关功能，其他功能的配置进行修改立即生效，无需重新启动QQ。 不建议使用 CQ 码，因为在新一代机器人设计理念中，该操作过于落后，可能会出现许多问题。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>被动 WebSocket 在断线之后，每隔 5 秒尝试重新连接。</p></div><h2 id="目录定义" tabindex="-1"><a class="header-anchor" href="#目录定义" aria-hidden="true">#</a> 目录定义</h2><ul><li>内部存储目录: <code>/storage/emulated/0</code> # 或 <code>/sdcard</code></li><li>QQ 主目录: <code>内部存储目录 + /Android/data/com.tencent.mobileqq</code></li><li>Shamrock 主目录: <code>QQ主目录 + /Tencent/Shamrock</code></li></ul><h2 id="事件过滤" tabindex="-1"><a class="header-anchor" href="#事件过滤" aria-hidden="true">#</a> 事件过滤</h2><p>当前仅支持，群聊 ｜私聊 黑/白名单。</p><p>将下方 JSON 文件创建在 <code>Shamrock 主目录 + /config.json</code><br> 请确保 JSON 格式正确。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;group_rule&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;black_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;white_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据目录" tabindex="-1"><a class="header-anchor" href="#数据目录" aria-hidden="true">#</a> 数据目录</h2><p>大部分 Shamrock 的数据/缓存保存在 <code>Shamrock 主目录</code><br> 其中的日志可作为 Issue 内容，截取部分提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── tmpfiles <span class="token comment"># 临时文件目录</span>
│   ├── logs <span class="token comment"># 日志目录</span>
│   │   └── xxx.log <span class="token comment"># 日志文件</span>
├── config.json <span class="token comment"># 配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function d(r,l){return e(),s("div",null,[c,i(" 这句话我不是很理解，不知道是不是这个意思 "),o])}const h=a(t,[["render",d],["__file","configuration.html.vue"]]);export{h as default};
