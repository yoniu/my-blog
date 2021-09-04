---
eleventyExcludeFromCollections: true
layout: 'netease/page.njk'
title: '友链'
---
<div class="post-links">
    <div class="links-title"><span>内页友链</span></div>
    {%- for item in links -%}
    <div class="link-item">
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">
            <img class="noImageLightBox" src="{{ item.image }}" rel="{{ item.name }}" />
        </a>
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">{{ item.name }}</a>
    </div>
    {%- endfor -%}
</div>
<div class="post-links">
    <div class="links-title"><span>首页友链</span></div>
    {%- for item in indexLinks -%}
    <div class="link-item">
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">
            <img class="noImageLightBox" src="{{ item.image }}" rel="{{ item.name }}" />
        </a>
        <a href="{{ item.link }}" class="nopjax" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">{{ item.name }}</a>
    </div>
    {%- endfor -%}
</div>