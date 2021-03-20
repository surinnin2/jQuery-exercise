//1.
$(() => console.log('Let’s get ready to party with jQuery!'))
//2.
$('article img').addClass('image-center')
//3.
$('article p:last').remove()
//4.
$('h1').css('font-size', Math.random()*100)
//5.
$('ol').append($('<li>', {text: 'List 1'}))
//6.
$('aside').empty().append($('<p>', {text: "We're sorry for the existence of the list"}))
//7.
$(".form-control").on('change', () => {
    let red = $(".form-control").eq(0).val()
    let blue = $(".form-control").eq(1).val()
    let green = $(".form-control").eq(2).val()
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`)
})
//8.
$('img').on('click', (img) => {
    $(img.target).remove()
})

//Movie App
$('#Add').on('click', () => {
    const NewMov = $('<li>')
    NewMov.text(
        'Title: ' + $('form').children('input').val() + ' Rating: ' + $('form').children('input').eq(1).val() 
        )
    $('#movie-list').append(NewMov)
    const DelButton = $("<button id='deleteBtn'>")
    NewMov.append(DelButton)
    DelButton.text('Delete').on('click', () => {
        $('#deleteBtn').parent('li').remove()
    })
})