javascript: (function() { var i = 0,
        l, d = document,
        b = d.body,
        w = window;
    w.cZ = 1;
    w.pe=0;
    w.cZa = []; 
    while (l = b.getElementsByTagName('*').item(i++)) { 
    	l.onmouseover = function(e) { if (!e) var e = w.event;
            e.cancelBubble = true; if (e.stopPropagation) e.stopPropagation(); if (w.cZ) { this.style.background = 'yellow' } };
        l.onmouseout = function(e) { if (!e) var e = w.event;
            e.cancelBubble = true; if (e.stopPropagation) e.stopPropagation(); if (w.cZ) { this.style.background = '' } };
        l.onclick = function(e) { if (!e) var e = w.event;
            e.cancelBubble = true; if (e.stopPropagation) e.stopPropagation(); if (!w.cZ) { return true } this.style.background = ''; var h = d.createTextNode('');
            w.cZa.push(this, this.parentNode, h);
            this.parentNode.replaceChild(h, this); return false } } 

    var c = d.createElement('table');
    c.innerHTML = 'Pewpewpew: <u id=cZp>print</u> | <u id=cZt>off remove</u> | <u id=cZu>undo</u> | <u id=pe>page edit on</u> | <u id=cloze>close</u>';
    c.style.background = 'black';
    c.style.color = '#fff';
    c.style.position = 'fixed';
    c.style.zIndex = "99999";
    c.style.top = '0';
    c.style.right = '0';
    c.style.cursor = "pointer";
    c.id="termi";
    b.insertBefore(c, b.firstChild);
    c.onclick = function(e) { 
    	if (!e) var e = w.event;
        e.cancelBubble = true; if (e.stopPropagation) e.stopPropagation() 
    };

    var test=document.getElementById('termi').querySelectorAll("u");  
    test.forEach(function(userItem) {
    	userItem.onmouseover= function(e) {
        this.style.background="red";
    };
    userItem.onmouseout= function(e) {
        this.style.background="";
    };
 	
	});	




    d.getElementById('cZp').onclick = function(e) { b.removeChild(c);
        w.print();
        w.onafterprint = b.appendChild(c);
    };

    d.getElementById('cZt').onclick = function(e) { w.cZ = w.cZ ? 0 : 1;
        this.innerHTML = w.cZ ? 'off remove' : 'on remove' ;
    };


    d.getElementById('pe').onclick = function(e) { w.pe = w.pe ? 0 : 1;
        this.innerHTML = w.pe ? 'Page edit off' : 'Page edit on';
        if (w.pe) {
        	w.cZ=0;
        	d.getElementById('cZt').innerHTML="on remove";
            b.contentEditable=true; d.designMode=on;
        }
        else{
        	w.cZ=0;
            b.contentEditable=false; d.designMode=off;
        }
    };

    d.getElementById('cloze').onclick = function(e) {
    	w.cZ = 0;
       b.removeChild(c);
   	};
    d.getElementById('cZu').onclick = function(e) { if (!w.cZa.length) return; var h = w.cZa.pop(),
            p = w.cZa.pop(),
            r = w.cZa.pop();
        p.replaceChild(r, h) } })();
 

 // safeeeeeeeee