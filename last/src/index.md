---
eleventyExcludeFromCollections: true
layout: 'youTheme/index.njk'
title: '首页'
pagination: 
    data: collections.all
    size: 7
    alias: pen_set
    reverse: true
---
{% if page.url == '/' %}
<div class="theme-list">
    <div class="you-title">主题</div>
    <div class="owl-carousel">
        {%- for post in collections.myself | reverse -%}
        <div class="carousel-item">
            <a class="carousel-title" href="{{ post.url }}">{{ post.data.title }}</a>
            <time class="carousel-time">{{ post.data.date | newsDate('LLL d, y') }}</time>
            <a class="carousel-image" href="{{ post.url }}">
                <img class="noImageLightBox" src="{{ post.data.image }}" alt="theme" />
            </a>
        </div>
        {%- endfor -%}
    </div>
</div>
{% endif %}
<div class="you-title">最新文章</div>
<div class="post-list">
    {%- for post in pen_set -%}
        {% set post_image = post.templateContent | getImageFromContent %}
        <article class="post-list-item">
            <div class="post-list-item-top">
                {%- if post.data.image -%}
                <a href="{{ post.url }}" class="post-list-item-top-image" title="{{post.data.title}}">
                    <img src="{{ post.data.image }}" alt="{{post.data.title}}"/>
                </a>
                {%- elif post_image -%}
                <a href="{{ post.url }}" class="post-list-item-top-image" title="{{post.data.title}}">
                    <img src="{{ post_image }}" alt="{{post.data.title}}"/>
                </a>
                {%- endif -%}
            </div>
            <div class="post-list-item-bottom">
                <time datatime="{{post.data.date}}">{{post.data.date | newsDate('M/dd')}}</time>
                <a class="post-list-title" href="{{post.url}}" title="{{post.data.title}}"><span>{{post.data.title}}</span></a>
                {%- if post_image -%}{%- elif post.data.image -%}{%- else -%}
                <p>{{post.templateContent | getDescriptionFrom | striptags}}</p>
                {%- endif -%}
            </div>
        </article>
    {%- endfor -%}
</div>
<div class="post-pagination">
    <!--
    {%- if pagination.href.previous -%}
    <a href="{{ pagination.href.previous }}" class="post-pagination-pervious">上一页</a>
    {%- else -%}
    <a href="javascript:;" class="post-pagination-pervious post-pagination-nofollow" rel="nofollow">上一页</a>
    {%- endif -%}
     -->
    {%- if pagination.href.next -%}
    <a href="{{ pagination.href.next }}" class="post-pagination-next">下一页</a>
    {%- else -%}
    <a href="javascript:;" class="post-pagination-next post-pagination-nofollow" rel="nofollow">下一页</a>
    {%- endif -%}
</div>
