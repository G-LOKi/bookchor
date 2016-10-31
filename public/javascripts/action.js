// $("#addbook").click(function(e){
//     e.preventDefault();
//     var person = {
//         category: $("#category").val()
//     }
//
//     $.ajax({
//         method: "POST",
//         url: "addbook",
//         dataType : "json",
//         data : person,
//         success: function(data) {
//             var win = window.open();
//             win.document.write(data);
//         }
//     });
// });
//
// $("addbook").click(function(){
//     var person = {
//          category: $("#category").val()
//    }
//     $.post("addbook",person,"json");
// });

$("#search").click(function(e){
    e.preventDefault();
    var person = {
        category: $("#category").val()
    }

    $.ajax({
        method: "POST",
        url: "searchresult",
        dataType : "json",
        data : person
    });
});