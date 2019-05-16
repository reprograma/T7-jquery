$(() => {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photosasd",
        type: "GET",
        context: this,
        beforeSend: (xhr, settings) => {
            console.log(settings);
        },
        success: (photos) => {
            $(photos).each((index, photo) => {
                let container = $("<div>");
                container.attr("class", `photo${photo.id}`);
                let photoTitle = $("<h2>").text(photo.title);
                let photoImg = $("<img>").attr("src", photo.url);

                container.append(photoTitle);
                container.append(photoImg);

                $('#root').append(container);

            });

        }
        ,
        error: (req) => {
            let errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
            $("#root").append(errorImage);

        }
    })

})


