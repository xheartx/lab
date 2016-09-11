/**
* @fileOverview 
* @authors @Bubblings
*/

var setting = {
    data: {
        simpleData: {
            enable: true
        }
    }
};

var zNodes =[
    {
        name: "project", open: true,
        children: [
            {name: "博客主题(旧)", url: "project/hexoXheart/index.html"}
        ]
    },

    {
        name: "game", open: true,
        children: [
            {name: "js版2048游戏", url: "game/2048/index.html"},
            {name: "js版flappy bird", url: "game/flappyBird/index.html"}
        ]
    },
    
    {
        name: "app", open: true,
        children: [
            {name: "aimi社交软件", url: "app/aimi/index.html"},
            {name: "安吉幼儿教育", url: "app/AnJi/index.html"},
            {name: "佛音", url: "app/Foyin/index.html"}
        ]
    },
    
    {
        name: "web", open: true,
        children: [
            {name: "剑灵专题页", url: "web/BNS-special/index.html"},
            {name: "100du.com", url: "web/100du/index.html"},
            {name: "现代浏览器博物馆", url: "web/browerMuseum/index.html"}
        ]
    },

    {
        name: "svg", open: true,
        children: [
            {name: "svg基本图形", url: "svg/basic.html"}
        ]
    },

    {
        name: "tools", open: true,
        children: [
            {name: "html转javascript", url: "tools/html2js.html"},
            {name: "图片转base64工具", url: "tools/img2base64.html"}
        ]
    },

    {
        name: "javascript", open: true,
        children: [
            {name:"可拖拽改变大小对话框", url:"javascript/drag-change-size.html"},
            {name:"拖拽交换图片位置", url:"javascript/drag-photo.html"},
            {name:"手风琴效果-焦点图", url:"javascript/accordion-slide.html"},
            {name:"碎片效果-焦点图", url:"javascript/random-hide-slide.html"},
            {name:"面向对象-焦点图", url:"javascript/oop-focus.html"},
            {name:"模拟滚动条", url:"javascript/scroll.html"},
            {name:"简单选项卡", url:"javascript/tabs.html"},
            {name:"简易计算器", url:"javascript/calculator.html"},
            {name:"简单搜索功能", url:"javascript/search.html"},
            {name:"简单排序功能", url:"javascript/sort.html"},
            {name:"自定义浏览器右键菜单", url:"javascript/contextmenu.html"},
            {name:"取模运算实现无缝滚动", url:"javascript/image-roll.html"},
            {name:"简单星星评分功能", url:"javascript/star-rating.html"},
            {name:"简单日历组件", url:"javascript/calendar.html"}
        ]
    }
];

$(function(){
    $.fn.zTree.init($("#nav-tree"), setting, zNodes);
    if(window.location.hash){
        $('.iframe').attr('src', window.location.hash.replace(/_/g, '/').substring('1') + '.html');
    }
    $('.nav').delegate('#nav-tree li li a', 'click', function(e){
        var url = $(this).attr('href');
        $('.iframe').attr('src', url);
        e.preventDefault();
        var b = window.location.href;
        var urlHash = url.substring(url.indexOf('lab'),url.indexOf('.htm')).replace('lab/','');
        window.location.href = b.substring(0, b.indexOf('#')) + '#' + urlHash.replace('/', '_');
    });
    
    
    setTimeout(function(){
        $('.tips').slideUp();
    },4000);

    $('.close-aside').click(function () {
        var $this = $(this);
        var main = $('.main');
        var aside = $('.aside');
        if ($this.hasClass('open-aside')) {
            main.removeClass('main-noaside');
            aside.removeClass('noaside').find('.nav').show();
            $this.removeClass('open-aside');            
        } else {
            main.addClass('main-noaside');
            aside.addClass('noaside').find('.nav').hide();
            $this.addClass('open-aside');
        }
    });

    if('animation' in document.documentElement.style || '-webkit-animation' in document.documentElement.style || '-moz-animation' in document.documentElement.style){
        setTimeout(function(){
            animateLogo();
        },500);
    }

    $('.iframe').focus(); // iframe获取焦点
});

function animateLogo(){
    $('.animation-logo p').eq(0).addClass('txt-1');
    setTimeout(function(){
        $('.animation-logo p').eq(0).removeClass('txt-1');
    },3000);
    setTimeout(function(){
        animateLogo();
    },4000);
}