
<header class="symbol-info-header"><h1 id="templaterenderingerror">TemplateRenderingError</h1><label class="symbol-info-type-label class">Class</label><label class="api-type-label private" title="private">private</label></header>
<!-- summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { TemplateRenderingError }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"ts-express-decorators/lib/mvc/errors/TemplateRenderingError"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v3.10.2/src//mvc/errors/TemplateRenderingError.ts#L0-L0">/mvc/errors/TemplateRenderingError.ts</a></td></tr></tbody></table></section>
<!-- overview -->


### Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> TemplateRenderingError <span class="token keyword">extends</span> InternalServerError <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> "TEMPLATING_RENDER_ERROR"<span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="#api/common/core/type"><span class="token">Type</span></a><<span class="token keyword">any</span>> | <span class="token keyword">string</span><span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> err<span class="token punctuation">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="#api/common/core/type"><span class="token">Type</span></a><<span class="token keyword">any</span>> | <span class="token keyword">string</span><span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> err<span class="token punctuation">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>


<!-- Parameters -->

<!-- Description -->

<!-- Members -->







### Members



<div class="method-overview">
<pre><code class="typescript-lang ">name<span class="token punctuation">:</span> "TEMPLATING_RENDER_ERROR"</code></pre>
</div>




<hr/>



<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="#api/common/core/type"><span class="token">Type</span></a><<span class="token keyword">any</span>> | <span class="token keyword">string</span><span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> err<span class="token punctuation">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>
</div>








