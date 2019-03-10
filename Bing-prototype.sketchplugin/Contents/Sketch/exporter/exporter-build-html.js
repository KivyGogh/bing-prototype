
function buildMainHTML(docName, centerContent,commentsURL,hideNav,googleCode,backColor) {
  
  let s = "";
  s += '<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n';
  s += '<meta name="generator" content="Generated using Exporter plugin for Sketch.app - https://github.com/KivyGogh/bing-prototype">\n';
  s += '<title>'+docName+'</title>\n';
  s += '<link rel="shortcut icon"  type="image/png" href="resources/icon.png">\n';
  // s += '<link rel="mask-icon" href="https://sketch.cloud/favicon.svg?v=4" color="rgb(252, 177, 0)">\n';
  s += '<link rel="stylesheet" type="text/css" href="resources/viewer.css">\n';
  if(centerContent){
    s += '<link rel="stylesheet" type="text/css" href="resources/viewer-center.css">\n';
  }else{
    s += '<link rel="stylesheet" type="text/css" href="resources/viewer-top.css">\n';
  }
  s += '<script type="text/javascript" src="resources/jquery-3.3.1.min.js" charset="UTF-8"></script>\n';
//  s += '<script type="text/javascript" src="resources/jquery-migrate-1.4.1.min.js" charset="UTF-8"></script>\n';
  s += '<script type="text/javascript" src="resources/jquery.hotkeys.js" charset="UTF-8"></script>\n';
  s += '<script type="text/javascript" src="resources/jquery.ba-hashchange.min.js" charset="UTF-8"></script>\n';
  s += '<script type="text/javascript" src="viewer/viewer-page.js" charset="UTF-8"></script>\n';
  s += '<script type="text/javascript" src="viewer/story.js" charset="UTF-8"></script>\n';
  s += '<script type="text/javascript" src="viewer/gallery.js" charset="UTF-8"></script>\n';
  s += '<script type="text/javascript" src="viewer/viewer.js" charset="UTF-8"></script>\n';
  if(commentsURL!=''){
    s += '<link rel="stylesheet" type="text/css" href="'+commentsURL+'/EasyPageComments.css"/>\n';
    s += '<script type="text/javascript" src="'+commentsURL+'/EasyPageComments.js"></script>\n';
    s += '<script type="text/javascript" src="'+commentsURL+'/comments.js" charset="UTF-8"></script>\n';
  }
  s += '<script type="text/javascript">\n';
  s += '  var viewer = createViewer(story, "images");\n';
  s += '  var gallery = createGallery();\n';
  if(commentsURL!=''){
    s += '  var comments = createComments();\n';
  }
  s += '</script>\n';
  if(googleCode!=''){
    s+="<!-- Global site tag (gtag.js) - Google Analytics -->\n"
    s+="<script async src='https://www.googletagmanager.com/gtag/js?id="+googleCode+"'></script>\n"
    s+="<script>\n"
    s+=" window.dataLayer = window.dataLayer || [];\n"
    s+=" function gtag(){dataLayer.push(arguments);}\n"
    s+=" gtag('js', new Date());\n"
    s+="gtag('config', '"+googleCode+"');\n"
    s+="</script>\n"
  }
  s += '<!--HEAD_INJECT-->\n';
  s += '</head>\n';
  s += '<body class="screen" style="background:'+backColor+'">\n';
  s +=  '<!-- load indicator -->\n';
  s +=  '<div id="loading" >\n';
  s += `
    <div class="shaft1"></div><div class="shaft2"></div><div class="shaft3"></div>
    <div class="shaft4"></div><div class="shaft5"></div><div class="shaft6"></div><div class="shaft7"></div>
  </div>    
  <!--/load indicator-->
  `;
  s += ' <div id="container">\n';
  s += ' <div id="content">\n';
  s += ' </div>\n'; 
  s += ' <div id="content-shadow" class="hidden"></div>\n';
  s += ' <div id="content-modal" class="contentModal hidden"></div>\n';
s += "        <div id=\"nav\" class=\""+(hideNav?"hidden":"nav")+"\">";
s += "            <div class=\"navLeft\"><\/div>";
s += "            <div class=\"navCenter\"><\/div>";
s += "            <div class=\"navRight\"><div class=\"pageName title\">Default button<\/div><\/div>";

  s += ' </div>\n';
  s += '</body>\n';
  s += '</html>\n';

  return s;
};

