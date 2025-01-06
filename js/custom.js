
function get_items() {
    return [].slice.call(document.querySelectorAll("[data-category]"));
}

function map_items(dt){
    return dt.map(function(el){
        let obj = {};
        let category = el.dataset.category;
        switch(category){
        case "misc":
            var description = el.querySelector("input[data-type='description']").value;
            var rm = el.querySelector("input[data-type='ringgit']").value;
            obj[category]=[Number(rm), description];
            break;
        case "minimum":
        case "recording":
            var rm = el.querySelector("input[data-type='ringgit']").value;
            obj[category]=[Number(rm)];
            break;
        case "announcement":
        case "broadcast":
        case "non-broadcast":
            var description = el.querySelector("input[data-type='description']").value;
            var minutes = Number(el.querySelector("input[data-type='minutes']").value);
            var seconds = Number(el.querySelector("input[data-type='seconds']").value);
            obj[category]=[minutes,seconds,description];
            break;
        default:
            obj[category]="undefined";
            break;
        };
        return obj;
    });
}

function get_data(){
    return map_items(get_items());
}

var onchange = function(element, callback) {
    var HTML = element.innerHTML;
    window.setInterval(function() {
        var newHTML = element.innerHTML;
        if(HTML !== newHTML) {
            HTML = newHTML;
            callback(element);
        }
    }, 500);
}
/*
onchange(document.getElementById('item-container'), function(){
    eqm2025.views.update_results();
});
*/