
<header class="symbol-info-header"><h1 id="iprovideroptions">IProviderOptions</h1><label class="symbol-info-type-label interface">Interface</label></header>
<!-- summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { IProviderOptions }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"ts-express-decorators"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v3.10.2/src//di/interfaces/IProviderOptions.ts#L0-L0">/di/interfaces/IProviderOptions.ts</a></td></tr></tbody></table></section>
<!-- overview -->


### Overview


<pre><code class="typescript-lang "><span class="token keyword">interface</span> IProviderOptions<T> <span class="token punctuation">{</span>
    provide<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>
    useClass?<span class="token punctuation">:</span> <a href="#api/common/core/type"><span class="token">Type</span></a><T><span class="token punctuation">;</span>
    instance?<span class="token punctuation">:</span> T<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>


<!-- Parameters -->

<!-- Description -->

<!-- Members -->







### Members



<div class="method-overview">
<pre><code class="typescript-lang ">provide<span class="token punctuation">:</span> <span class="token keyword">any</span></code></pre>
</div>


An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).



<hr/>



<div class="method-overview">
<pre><code class="typescript-lang ">useClass?<span class="token punctuation">:</span> <a href="#api/common/core/type"><span class="token">Type</span></a><T></code></pre>
</div>


Class to instantiate for the `token`.



<hr/>



<div class="method-overview">
<pre><code class="typescript-lang ">instance?<span class="token punctuation">:</span> T</code></pre>
</div>








