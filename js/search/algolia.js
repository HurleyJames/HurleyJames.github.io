"use strict";$(function(){$("a.social-icon.search").on("click",function(){$("body").css({width:"100%",overflow:"hidden"}),$(".search-dialog").css("display","block"),$(".ais-search-box--input").focus(),$(".search-mask").fadeIn(),document.addEventListener("keydown",function a(i){"Escape"===i.code&&(e(),document.removeEventListener("keydown",a))})});var e=function(){$("body").css("width",""),$("body").css("overflow",""),$(".search-dialog").css({animation:"search_close .5s"}),$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)}),$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",e);var a=GLOBAL_CONFIG.algolia;if(!(a.appId&&a.apiKey&&a.indexName))return console.error("Algolia setting is invalid!");a=instantsearch({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,searchParameters:{hitsPerPage:a.hits.per_page||10},searchFunction:function(a){$("#algolia-search-input").find("input").val()&&a.search()}});a.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:!1,magnifier:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder})),a.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(a){return'<a href="'+(a.permalink||GLOBAL_CONFIG.root+a.path)+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(a){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,a.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}})),a.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(a){return"<hr>"+GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,a.nbHits).replace(/\$\{time}/,a.processingTimeMS)+'<span class="algolia-logo pull-right">  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" /></span>'}}})),a.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirstLast:!1,labels:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})),a.start()});