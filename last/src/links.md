---
eleventyExcludeFromCollections: true
layout: 'youTheme/page-link.njk'
title: '友链'
---
<div class="post-links">
    {%- for item in links -%}
    <div class="link-item">
        <a href="{{ item.link }}" class="nopjax link-item-image" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">
            <img class="noImageLightBox" src="{{ item.image }}" rel="{{ item.name }}" />
        </a>
        <a href="{{ item.link }}" class="nopjax link-item-title" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">{{ item.name }}</a>
    </div>
    {%- endfor -%}
    {%- for item in indexLinks -%}
    <div class="link-item">
        <a href="{{ item.link }}" class="nopjax link-item-image" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">
            <img class="noImageLightBox" src="{{ item.image }}" rel="{{ item.name }}" />
        </a>
        <a href="{{ item.link }}" class="nopjax link-item-title" title="{{ item.description }}" target="_blank" rel="noopener norefferrer">{{ item.name }}</a>
    </div>
    {%- endfor -%}
</div>