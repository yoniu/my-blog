---
eleventyExcludeFromCollections: true
layout: 'layouts/page.njk'
title: '友链'
---
<div class="post-links">
    <div class="links-title"><span>内页友链</span></div>
    {%- for item in links -%}
    <div class="link-item">
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank">
            <img class="noImageLightBox" src="{{ item.image }}" width="64px" height="64px" style="vertical-align: middle;margin-bottom: 1rem;" />
        </a>
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank">{{ item.name }}</a>
    </div>
    {%- endfor -%}
</div>
<div class="post-links">
    <div class="links-title"><span>首页友链</span></div>
    {%- for item in indexLinks -%}
    <div class="link-item">
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank">
            <img class="noImageLightBox" src="{{ item.image }}" width="64px" height="64px" style="vertical-align: middle;margin-bottom: 1rem;" />
        </a>
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank">{{ item.name }}</a>
    </div>
    {%- endfor -%}
</div>