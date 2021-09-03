---
eleventyExcludeFromCollections: true
layout: 'netease/index.njk'
title: '首页'
pagination: 
    data: collections.all
    size: 5
    alias: pen_set
    reverse: true
---
<div class="post-list">
    {%- for post in pen_set -%}
        {% set post_image = post.templateContent | getImageFromContent %}
        <article class="post-list-item">
            <div class="post-list-item-top">
                <div class="post-list-item-top-left">
                    <img src="{% if site.blogerAvatar %}{{site.blogerAvatar}}{% else %}https://gravatar.q6q.cc/avatar/{{site.blogerEmail}}?s=&d=mm&r=g{% endif %}" width="48" height="48" alt="{{site.bloger}}" />
                </div>
                <div class="post-list-item-top-right">
                    <span>{{site.bloger}}</span>
                    <time datatime="{{post.data.date}}">{{post.data.date | newsDate('MM月dd日')}}</time>
                </div>
            </div>
            <div class="post-list-item-bottom">
                <p>{{post.templateContent | getDescriptionFrom | striptags}}</p>
                <div class="post-list-card">
                    {%- if post.data.image -%}
                    <a href="{{ post.url }}" class="post-list-card-left" title="{{post.data.title}}">
                        <img src="{{ post.data.image }}" alt="{{post.data.title}}"/>
                    </a>
                    {%- elif post_image -%}
                    <a href="{{ post.url }}" class="post-list-card-left" title="{{post.data.title}}">
                        <img src="{{ post_image }}" alt="{{post.data.title}}"/>
                    </a>
                    {%- else -%}
                    <a href="{{ post.url }}" class="post-list-card-left" title="{{post.data.title}}">
                        <div class="noImage">
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M984.615385 196.923077c0-43.323077-35.446154-78.769231-78.769231-78.769231H118.153846c-43.323077 0-78.769231 35.446154-78.769231 78.769231v630.153846c0 43.323077 35.446154 78.769231 78.769231 78.769231h787.692308c43.323077 0 78.769231-35.446154 78.769231-78.769231V196.923077zM779.815385 748.307692h-571.076923c-23.630769 0-37.415385-25.6-25.6-45.292307l173.292307-301.292308c7.876923-13.784615 25.6-13.784615 33.476923 0l104.369231 179.2c7.876923 11.815385 25.6 13.784615 33.476923 1.969231l84.676923-122.092308c7.876923-11.815385 25.6-11.815385 33.476923 0L801.476923 708.923077c11.815385 17.723077 0 39.384615-21.661538 39.384615zM728.615385 393.846154c-43.323077 0-78.769231-35.446154-78.769231-78.769231s35.446154-78.769231 78.769231-78.769231 78.769231 35.446154 78.76923 78.769231-35.446154 78.769231-78.76923 78.769231z"></path></svg>
                        </div>
                    </a>
                    {%- endif -%}
                    <div class="post-list-card-right">
                        <a class="post-list-title" href="{{post.url}}" title="{{post.data.title}}"><span>{{post.data.title}}</span></a>
                    </div>
                </div>
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