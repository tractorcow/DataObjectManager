(function(){var a=Shadowbox,b=16;a.qt=function(c){this.obj=c;this.height=c.height?parseInt(c.height,10):300;if(a.options.showMovieControls==true){this.height+=b}this.width=c.width?parseInt(c.width,10):300};a.qt.prototype={append:function(k,e,l){this.id=e;var f=a.options,g=String(f.autoplayMovies),m=String(f.showMovieControls);var i=document.createElement("object");i.id=e;i.name=e;i.height=this.height;i.width=this.width;i.kioskmode="true";if(a.client.isIE){i.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";i.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"}else{i.type="video/quicktime";i.data=this.obj.content}var j={src:this.obj.content,scale:"aspect",controller:m,autoplay:g},h;for(var c in j){h=document.createElement("param");h.name=c;h.value=j[c];i.appendChild(h)}k.appendChild(i)},remove:function(){var f=this.id;try{document[f].Stop()}catch(d){}var c=document.getElementById(f);if(c){a.lib.remove(c)}}}})();