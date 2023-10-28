import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as r,a as t,d as a,b as n,e as i}from"./app-3a656267.js";const c={},u={class:"hint-container warning"},h=t("p",{class:"hint-container-title"},"注意",-1),l={id:"合并转发",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#合并转发","aria-hidden":"true"},"#",-1),q={id:"合并转发-节点",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#合并转发-节点","aria-hidden":"true"},"#",-1),m={id:"xml-消息",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#xml-消息","aria-hidden":"true"},"#",-1),b=i(`<h2 id="json-消息" tabindex="-1"><a class="header-anchor" href="#json-消息" aria-hidden="true">#</a> JSON 消息</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>JSON 数据</td></tr></tbody></table><h3 id="cq-码" tabindex="-1"><a class="header-anchor" href="#cq-码" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:json,data={&quot;app&quot;:&quot;com.tencent.structmsg&quot;,&quot;config&quot;:{&quot;autosize&quot;:true,&quot;ctime&quot;:1621234567,&quot;forward&quot;:true,&quot;token&quot;:&quot;shamrock&quot;},&quot;desc&quot;:&quot;这是一条 JSON 消息&quot;...}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段" tabindex="-1"><a class="header-anchor" href="#消息段" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;app\\&quot;:\\&quot;com.tencent.structmsg\\&quot;,\\&quot;config\\&quot;:{\\&quot;autosize\\&quot;:true,\\&quot;ctime\\&quot;:1621234567,\\&quot;forward\\&quot;:true,\\&quot;token\\&quot;:\\&quot;shamrock\\&quot;},\\&quot;desc\\&quot;:\\&quot;这是一条 JSON 消息\\&quot;...}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),x={id:"文本转语音",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#文本转语音","aria-hidden":"true"},"#",-1);function f(k,y){const e=o("Badge");return d(),r("div",null,[t("div",u,[h,t("p",null,[a("对于 Shamrock 未实现的消息类型，会在标题添加标记 "),n(e,{text:"未实现",type:"danger",vertical:"baseline"})])]),t("h2",l,[p,a(" 合并转发 "),n(e,{text:"未实现",type:"danger"})]),t("h2",q,[_,a(" 合并转发(节点) "),n(e,{text:"未实现",type:"danger"})]),t("h2",m,[v,a(" XML 消息 "),n(e,{text:"未实现",type:"danger"})]),b,t("h2",x,[g,a(" 文本转语音 "),n(e,{text:"未实现",type:"danger"})])])}const S=s(c,[["render",f],["__file","advanced.html.vue"]]);export{S as default};
