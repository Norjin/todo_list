$("#submit").on("click", function(ev) {
    addItem();
});

$("#todo-list").on("click", function(ev) {
    let li = ev.target;
    $(li).addClass("completed");
    $("#completed-list").append(li);
});

$("#sort").on("click", function(ev) {
    let ui = $("#todo-list");
    if(ui.children("li").length > 1) {
        let li = ui.children("li").sort(function(a, b) {
            return $(a).data("index") - $(b).data("index");
        });
        $("#todo-list").append(li);
    }
});

let addItem = function() {
    if($("#new-item").val() != "" && $("#new-priority").val() != typeof Number) {
    let newItem = $("#new-item").val();
    let newPriority = $("#new-priority").val() || 1;
    let ul = $("#todo-list");
    let i = $("<i>").addClass("fas fa-check-circle");
    let span = $("<span>").addClass("index");
    let li = $("<li>").data("index", newPriority).append(i).append(newItem).append(span.append(newPriority));
    ul.append(li);
    }
    else {
        alert("Enter new to-do");
    }
};
