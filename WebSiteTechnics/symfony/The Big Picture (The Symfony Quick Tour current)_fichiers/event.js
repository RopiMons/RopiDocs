(function() {var qss="&cb="+Math.floor(99999999999*Math.random());try{qss+="&ref="+encodeURIComponent(document.referrer)}catch(e$$12){}try{qss+="&sc_r="+encodeURIComponent(screen.width+"x"+screen.height)}catch(e$$13){}try{qss+="&sc_d="+encodeURIComponent(screen.colorDepth)}catch(e$$14){}
var callDis=function(c,d){var a=function(){callDisInternal(c,d)};"complete"===document.readyState?setTimeout(a):window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent("onload",a)},disCalled=!1,callDisInternal=function(c,d){if(!disCalled){disCalled=!0;var a=("https:"==document.location.protocol?"https:":"http:")+"//"+d+"/dis/dis.aspx",b=document.createElement("iframe");b.width=b.height="0";b.style.display="none";b.src=(a+"?p="+c+qss).substring(0,2E3);(a=document.getElementById("criteoTagsContainer"))?
a.appendChild(b):criteo_q.push({event:"appendTag",element:b})}};

callDis(14086, 'dis.eu.criteo.com');
})();(function() {
var callDestination = function(aurl, divName) {
    var url = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//' + aurl;
    var p = document.createElement('iframe');
    p.width = p.height = '0';
    p.style.display = 'none';
    p.src="javascript:(function(){var d=document;d.open();d.write('<img src=\"" + encodeURI(url) + "\">');d.close();" +
          "setTimeout(function(){d.open();d.write('');d.close();},1000);})();"

    var c = document.getElementById(divName);
    if (c) {
        c.appendChild(p)
    } else if (criteo_q) {
        criteo_q.push({ event: 'appendTag', element: p, requiresDOM: 'non-blocking' });
    }
}
var cto_fw_url = 'tracker.emailretargeting.com/criteohandler?cb=4faa01d744&ctoUID=7e3f9d2d-51bf-4a54-9a05-72250843fe8f&a=14086&v=3.3.0&p0=e%3dvh&p1=e%3ddis';
callDestination(cto_fw_url, '');
})();
/*-->*/