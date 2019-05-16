$(document).ready(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photosdhsau",
        type: "GET",
        success: function(photos){
            $(photos).each(function(){
                let container = $("<div>");
                container.attr("class", `photo${this.id}`);
                let photoTitle = $("<h2>").text(this.title);
                let photoImg = $("<img>").attr("src", this.url);

                container.append(photoTitle);
                container.append(photoImg);

                $('#root').append(container);

            });
        },
        error: function(req){
            let errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
            $("#root").append(errorImage);

        }
    })

});


