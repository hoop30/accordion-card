
//selectionne tout les dropdowns
var p = document.querySelectorAll('#dropdown')     

//parcour les dropdowns
for(var i=0; i<p.length; i++) {

    var ps =p[i]
     
    console.log('txt')
    var down = function() {
        var txt = this.children[1]
        txt.classList.toggle ('disp')
        var img = this.children[0].children[1]
        img.classList.toggle ('retourne')
    }
    ps.addEventListener('click', down)
}    
