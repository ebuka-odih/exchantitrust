function formatState(state){if(!state.id){return state.text;}
return state.title;}
function cryptov(){var arr=["","BTC","ETH","XRP","LTC","USDC"];var key="f7abf2a31ad07d2a57b252d4b6114d83ea1e644c637a82c4d0bb9b6b74f17a18";var ix=1;jQuery.each(arr,function(ixx,val){if(ixx===0)return;jQuery.ajax({url:"https://min-api.cryptocompare.com/data/top/exchanges/full?fsym="+val+"&tsym=EUR&api_key="+key,type:"GET",dataType:"json",success:function(Data){if(Data){var dd=jQuery.parseJSON(JSON.stringify(Data));var len=dd.Data.Exchanges.length-1;var _array=[];for(var i=0;i<=len;i++){var market=dd.Data.Exchanges[""+i+""].MARKET;var symbol=dd.Data.Exchanges[""+i+""].FROMSYMBOL;if(market=="Binance"&&symbol=="BTC"){var x1=dd.Data.Exchanges[""+i+""].PRICE.toLocaleString('en-EN');jQuery("#bitcoin_price").html("€ "+x1);if(typeof dd.Data.AggregatedData.MKTCAP!=='undefined'){var mrktcap=dd.Data.AggregatedData.MKTCAP.toLocaleString('en-EN');jQuery("#bitcoin_mrktcap").html("€ "+mrktcap);}
var prev=parseFloat(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR).toFixed(4);jQuery("#bitcoin_change").html(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR.toFixed(2)+"%");if(prev>0){jQuery("#bitcoin_change").addClass("up");}else{jQuery("#bitcoin_change").addClass("down");}}
if(market=="Binance"&&symbol=="ETH"){var x1=dd.Data.Exchanges[""+i+""].PRICE.toLocaleString('en-EN');jQuery("#eth_price").html("€ "+x1);var prev=parseFloat(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR).toFixed(4);jQuery("#eth_change").html(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR.toFixed(2)+"%");if(prev>0){jQuery("#eth_change").addClass("up");}else{jQuery("#eth_change").addClass("down");}
if(typeof dd.Data.AggregatedData.MKTCAP!=='undefined'){var mrktcap=dd.Data.AggregatedData.MKTCAP.toLocaleString('en-EN');jQuery("#eth_mrktcap").html("€ "+mrktcap);}}
if(market=="Binance"&&symbol=="LTC"){var x1=dd.Data.Exchanges[""+i+""].PRICE.toLocaleString('en-EN');jQuery("#ltc_price").html("€ "+x1);var prev=parseFloat(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR).toFixed(4);jQuery("#ltc_change").html(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR.toFixed(2)+"%");if(prev>0){jQuery("#ltc_change").addClass("up");}else{jQuery("#ltc_change").addClass("down");}}
if(market=="Binance"&&symbol=="XRP"){var x1=dd.Data.Exchanges[""+i+""].PRICE.toLocaleString('en-EN');jQuery("#xrp_price").html("€ "+x1);var prev=parseFloat(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR).toFixed(4);jQuery("#xrp_change").html(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR.toFixed(2)+"%");if(prev>0){jQuery("#xrp_change").addClass("up");}else{jQuery("#xrp_change").addClass("down");}}
if(market=="Coinbase"&&symbol=="USDC"){var x1=dd.Data.Exchanges[""+i+""].PRICE.toLocaleString('en-EN');jQuery("#usdc_price").html("€ "+x1);var prev=parseFloat(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR).toFixed(4);jQuery("#usdc_change").html(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR.toFixed(2)+"%");if(prev>0){jQuery("#usdc_change").addClass("up");}else{jQuery("#usdc_change").addClass("down");}
if(typeof dd.Data.AggregatedData.MKTCAP!=='undefined'){var mrktcap=dd.Data.AggregatedData.MKTCAP.toLocaleString('en-EN');jQuery("#usdc_mrktcap").html("€ "+mrktcap);}}}}},error:function(){ix++;if(ix++==5){cryptov();}},});});jQuery.ajax({url:"https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=USDT&tsym=EUR&api_key="+key,type:"GET",dataType:"json",success:function(Data){if(Data){var dd=jQuery.parseJSON(JSON.stringify(Data));var len=dd.Data.Exchanges.length-1;var _array=[];for(var i=0;i<=len;i++){var market=dd.Data.Exchanges[""+i+""].MARKET;var symbol=dd.Data.Exchanges[""+i+""].FROMSYMBOL;if(symbol=="USDT"){var x1=dd.Data.Exchanges[""+i+""].PRICE.toLocaleString('en-EN');jQuery("#usdt_price").html("€ "+x1);var prev=parseFloat(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR).toFixed(4);jQuery("#usdt_change").html(dd.Data.Exchanges[""+i+""].CHANGEPCT24HOUR.toFixed(2)+"%");if(prev>=0){jQuery("#usdt_change").addClass("up");}else{jQuery("#usdt_change").addClass("down");}}
if(i==1)break;}}},error:function(){if(ix++==6){cryptov();}},});jQuery.ajax({url:"https://min-api.cryptocompare.com/data/pricemultifull?fsyms=RBIS&tsyms=EUR&api_key="+key,type:"GET",dataType:"json",success:function(Data){var dd=jQuery.parseJSON(JSON.stringify(Data));var x1=dd.DISPLAY.RBIS.EUR.PRICE;jQuery("#rbis_price").html(x1);var prev=parseFloat(dd.DISPLAY.RBIS.EUR.CHANGEPCT24HOUR);jQuery("#rbis_change").html(dd.DISPLAY.RBIS.EUR.CHANGEPCT24HOUR+"%");if(prev>=0){jQuery("#rbis_price").addClass("up");}else{jQuery("#rbis_price").addClass("down");}},error:function(){if(ix++==6){cryptov();}},});}
function cryptovgraph(){var xhr=new XMLHttpRequest();function processRequest(Data,chart_id){if(xhr.readyState==4&&xhr.status==200){var response=JSON.parse(xhr.responseText);var len=response.Data.Data.length-1;var _array=[];var chart_percent=chart_id.replace("_chart","_change");if(chart_id=="btc_chart"){var chart_percent="bitcoin_change";}
if($("#"+chart_percent+".down").length){var lineColor="#EB5757";}
if($("#"+chart_percent+".up").length){var lineColor="#05B169";}
for(var i=0;i<=len;i++){_array.push(response.Data.Data[i].open);}
$("#"+chart_id).sparkline(_array,{type:"line",lineColor:lineColor,fillColor:null,lineWidth:2,width:"100",height:"50",spotColor:null,minSpotColor:null,maxSpotColor:null,highlightSpotColor:null,highlightLineColor:null,});}}
function runApp(chart_id,fsym,tsym){var key="f7abf2a31ad07d2a57b252d4b6114d83ea1e644c637a82c4d0bb9b6b74f17a18";xhr.open("GET","https://min-api.cryptocompare.com/data/v2/histohour?fsym="+fsym+"&tsym="+tsym+"&limit=24&api_key="+key,false);xhr.send();xhr.onreadystatechange=processRequest("",chart_id);}
var chart_id=["btc_chart","eth_chart","ltc_chart","xrp_chart","usdt_chart"];var fsym=["BTC","ETH","LTC","XRP","USDT"];var tsym=["EUR","EUR","EUR","EUR","EUR"];var len=chart_id.length-1;for(var i=0;i<=len;i++){runApp(chart_id[i],fsym[i],tsym[i]);}}
if(window.location.origin==='https://arbismart.com'){jQuery.get("https://dashboard.arbismart.com/token-price/history",function(response){var len=response.length-1;var chart_id="rbis_chart";var _array=[];for(var i=0;i<=len;i++){_array.push(response[i].amount);}
if(response[0].amount<response[len].amount){var lineColor="#EB5757";jQuery("#rbis_change").addClass("down");}else{var lineColor="#05B169";jQuery("#rbis_change").addClass("up");}
var rbis=(100*(parseFloat(response[len].amount)-parseFloat(response[0].amount)))/parseFloat(response[0].amount);jQuery("#rbis_change").html(rbis.toFixed(2)+"%");$("#"+chart_id).sparkline(_array,{type:"line",lineColor:"#05b169",fillColor:null,lineWidth:2,width:"100",height:"50",spotColor:null,minSpotColor:null,maxSpotColor:null,highlightSpotColor:null,highlightLineColor:null,});});}
jQuery(document).ready(function($){setTimeout(function(){$('#_page').css('filter','none');},500);setTimeout(function(){$('[data-ready-class]').each(function(index,element){let addClass=$(this).data('ready-class');$(this).addClass(addClass);});},2000);function _mobile_menu_shown(){$('html').addClass('mobile-menu--shown');setTimeout(function(){$('.ui-mobile-header--area').removeClass('delay');},1000)}
function _mobile_menu_hide(){$('html').removeClass('mobile-menu--shown');setTimeout(function(){$('.ui-mobile-header--area').addClass('delay');},1000)}
$('body').on('click','[data-toggle-menu]',function(){$(this).toggleClass('is-active');if($(this).hasClass('is-active')){_mobile_menu_shown();}else{_mobile_menu_hide();}
return false;});$('body').on('click','li.menu-item-has-children',function(){$(this).toggleClass('_open');});$('body').on('click','.ui-accordion .accordion',function(){$(this).toggleClass('_open');let contentHeight=$(this).find('.accordion--content_wrap').innerHeight();if($(this).hasClass('_open')){$(this).find('.accordion--content').css('border-spacing',contentHeight);$(this).find('.accordion--content').css('borderSpacing',0).animate({borderSpacing:contentHeight},{step:function(now,fx){$(this).css('height',now+'px');},duration:300});}else{$(this).find('.accordion--content').css('border-spacing',contentHeight);$(this).find('.accordion--content').css('borderSpacing',contentHeight).animate({borderSpacing:0},{step:function(now,fx){$(this).css('height',now+'px');},duration:400});}});$('body').on('click','[data-tab]',function(){let id=$(this).data('tab');$(this).parent('*').find('[data-tab]').removeClass('active');$(this).parent('*').find('[data-tab]').each(function(index,element){var tab=$(this).data('tab');$('#tab__'+tab).addClass('hide');});$(this).addClass('active');$('#tab__'+id).removeClass('hide');});if($('body.home').length){cryptov();setTimeout(cryptovgraph,2000);}
$(window).on('scroll',function(){var bottomOffset=2000;if(typeof _WP_Query!=="undefined"){if($(document).scrollTop()>($(document).height()-bottomOffset)&&!$('body').hasClass('loading')){_WP_Query['paged']++;$.ajax({url:'/wp-admin/admin-ajax.php',data:{'action':'more_post_ajax','data':JSON.stringify(_WP_Query),},type:'POST',beforeSend:function(xhr){$('body').addClass('loading');},success:function(response){$('#_render_posts').append(response);$('body').removeClass('loading');}});}}});$('[data-mask="phone"]').inputmask("999-999 99 99");});function CheckSlugValidity(slug){return slug.indexOf(window.location.pathname)==0;}
if(CheckSlugValidity("/exchange/")||CheckSlugValidity("/staking/")||CheckSlugValidity("/nfts/")||CheckSlugValidity("/metaverse/")){if(!CheckSlugValidity("/")){jQuery('main').prepend('<div class="marquee"><span>Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon</span></div>')}}