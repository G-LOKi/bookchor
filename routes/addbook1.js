$("#addbook").click(function(e){
    e.preventDefault();
    var person = {
        bookname: $("#bookname").val(),
        bookyear: $("#year").val(),
        course: $("#course").val(),
        bookinfo:$("#description").val(),
        condition:$("#condition").val(),
        sellername:$("#sellername").val(),
        address:$("#address").val(),
        mobile:$("#phoneno").val(),
        sellerinfo:$("#detail").val(),
        price:$("#price").val(),
        pin:$("#pin").val()
    }

    $.ajax({
        method: "POST",
        url: "addbook",
        dataType : "json",
        data : person
    });
});