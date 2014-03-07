
(function($){wp.customize('blogname',function(value){value.bind(function(to){$('.site-title a').text(to);});});wp.customize('blogdescription',function(value){value.bind(function(to){$('.site-description').text(to);});});wp.customize('html_description',function(value){value.bind(function(to){$('.site-description').html(to);});});wp.customize('header_textcolor',function(value){value.bind(function(to){if('blank'==to){$('.site-title, .site-description').css({'clip':'rect(1px, 1px, 1px, 1px)','position':'absolute'});}else{$('.site-title, .site-description').css({'clip':'auto','color':to,'position':'relative'});}});});wp.customize('background_color',function(value){value.bind(function(newval){$('body, .sidebar, .SidebarTop, .menu ul ul').css('background-color',newval);});});wp.customize.bind('sidebar-updated',function(sidebar_id){$('#sidebar').addClass('visible');});wp.customize('show_site_title',function(value){value.bind(function(to){$('.site-title').slideToggle(250);});});wp.customize('show_site_description',function(value){value.bind(function(to){$('.site-description').slideToggle(250);});});wp.customize('show_social_icons',function(value){value.bind(function(to){$('.sociallinks').slideToggle(250);});});wp.customize('show_site_navigation',function(value){value.bind(function(to){$('.main-navigation').slideToggle(250);});});wp.customize('show_sidebar',function(value){value.bind(function(to){$('.SidebarLink').fadeToggle(250);});});wp.customize('enable_comments',function(value){value.bind(function(to){$('.comments-link, #comments').slideToggle(250);});});wp.customize('show_tags',function(value){value.bind(function(to){$('.tags').slideToggle(250);});});wp.customize('show_categories',function(value){value.bind(function(to){$('.categories').slideToggle(250);});});wp.customize('show_author_section',function(value){value.bind(function(to){$('.author-section').slideToggle(250);});});wp.customize('show_theme_info',function(value){value.bind(function(to){$('.theme-info').slideToggle(250);});});wp.customize('link_post_title_arrow',function(value){value.bind(function(to){$('.link-title-arrow').toggle(250);});});wp.customize('site_colophon',function(value){value.bind(function(to){$('.site-colophon p').html(to);});});})(jQuery);
//@ sourceMappingURL=srcmaps/customizer.js.map