function toggleImportant() {
    var iconImportant = $('#i-important');
    const iconIsImportant = "fa-solid icon-important";
    const iconIsNoneImportant = "fa-regular";

    if (iconImportant.hasClass(iconIsNoneImportant)) {
        iconImportant.removeClass(iconIsNoneImportant);
        iconImportant.addClass(iconIsImportant);
    } else {
        iconImportant.removeClass(iconIsImportant);
        iconImportant.addClass(iconIsNoneImportant);
    }
}

function setColorSelect() {
    $('#color1').css({
        'background-color': '#ffdaec'
    });
    $('#color2').css({
        'background-color': '#ceffc9'
    });
    $('#color3').css({
        'background-color': '#efffba'
    });
    $('#color4').css({
        'background-color': '#c7f6f9'
    });
    $('#color5').css({
        'background-color': '#e0d3ff'
    });
}

function setColorSelectContent(set) {
    var color = {
        'transition': 'background-color .3s ease-in-out',
        'background-color': set
    };
    colorContent.css(color);
}

let radioSelect = $('input[name=opciones]');
let colorContent = $('.form-radio-content');

function init() {
    $('#i-important').click(toggleImportant);

    radioSelect.on('click', function() {
        var valorSeleccionado = $(this).val();
        setColorSelectContent(valorSeleccionado);
      });

    radioSelect.on('click',setColorSelectContent());

    setColorSelect();    
}

window.onload = init;