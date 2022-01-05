var dropdowns = document.querySelectorAll('#dropdown')
var txts = document.querySelectorAll('.txt')
for (var i=0; i<dropdowns.length; i++) {
    var dropdown = dropdowns[i]
    
    var down = function() {
        txts.addclasslist = ('disp')
    }
    dropdown.addEventListener('click',down)
}
