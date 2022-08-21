const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

function photosetsFilter(content){
    let pattern1 = /\[photosets]/g;
    let pattern2 = /\[\/photosets]/g;
    let txt1 = content.replace(pattern1,"<div class=\"photosets\">");
    let txt2 = txt1.replace(pattern2,"</div>");
    return txt2;
}

module.exports = (eleventyConfig) => {

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.setPugOptions({
        filters: {
            'photosets': function(text){
                return photosetsFilter(text);
            }
        }
    });

    eleventyConfig.addFilter("newsDate", (dateObj, format = "yyyy-MM-dd") => {
		if(typeof dateObj === "string") {
			return DateTime.fromISO(dateObj).toFormat(format);
		} else if(typeof dateObj === "number") {
			dateObj = new Date(dateObj);
		}
		return DateTime.fromJSDate(dateObj).toFormat(format);
	});

    eleventyConfig.addFilter("photosets", (content) =>{
        return photosetsFilter(content);
    });
    
    eleventyConfig.addFilter("getDescriptionFrom", (content) =>{
        let myContent = photosetsFilter(content);
        let reTag = /<(?:.|\s)*?>/g;
        let moreTag = /([\s\S]*)\<\!\-\-\smore\s\-\-\>([\s\S]*)/g;
        if(content.search(moreTag) > -1){
            let ret;
            myContent.replace(moreTag, (r1, r2) => {
                ret = r2;
            });
            return ret;
        }else{
            return myContent.replace(reTag,"").substr(0, 50) + '...';
        }
    });
    
    eleventyConfig.addFilter("translateTags", (content) =>{
        let pen = /pen/g;
        let myself = /myself/g;
        let blog = /blog/g;
        return content.toString().replace(pen, "笔记").replace(myself, "主题").replace(blog, "随笔");
    });
    
    eleventyConfig.addFilter("getImageFromContent", (content) =>{
        let imagePatten = /<img[^>]+src=\"([^>\"]+)\"?[^>]*>/g;
        let ret;
        content.replace(imagePatten, (r1, r2) => {
            ret = r2;
        });
        return ret;
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'dist'
        },
        markdownTemplateEngine: 'njk'
    }
}