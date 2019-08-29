$(document).ready(function() {
        $('#burger').click(function(){
            $(this).toggleClass('open');
            $('#nav').toggleClass('open');
            $('.component-container--footer').toggleClass('open');
        });
        var sections = $('.main').children('.step'),


            n = 0,
            currentSection =sections[n],
            nextBtn = $('.next');


    for(var i = 0; i < sections.length; i++){
        console.log(sections[i]);
        if (sections[i] === currentSection) { $(sections[i]).addClass('active').removeClass('hidden');}
        else { { $(sections[i]).removeClass('active').addClass('hidden');}}
    }




    $(nextBtn).click(function(){
        n++;
            currentSection =sections[n];
        for(var i = 0; i < sections.length; i++){
            console.log(sections[i]);
            if (sections[i] === currentSection) { $(sections[i]).addClass('active').removeClass('hidden');}
            else { { $(sections[i]).removeClass('active').addClass('hidden');}}
        }
    });






});


