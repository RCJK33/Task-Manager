const iconIsImportant = "fa-solid icon-important";
const iconIsNoneImportant = "fa-regular";

function toggleImportant() {
    if (iconImportant.hasClass(iconIsNoneImportant)) {
        iconImportant.removeClass(iconIsNoneImportant);
        iconImportant.addClass(iconIsImportant);
        isiconImportant = true;
    } else {
        iconImportant.removeClass(iconIsImportant);
        iconImportant.addClass(iconIsNoneImportant);
        isiconImportant = false;
    }
}

function setColorSelect() {
    $('#color1').css({
        'background-color': '#ee4035'
    });
    $('#color2').css({
        'background-color': '#f37736'
    });
    $('#color3').css({
        'background-color': '#7bc043'
    });
    $('#color4').css({
        'background-color': '#0392cf'
    });
}

function setColorSelectContent(set) {
    var color = {
        'transition': 'background-color .3s ease-in-out',
        'background-color': set
    };
    colorContent.css(color);
}

function formatBudget(budget) {
    if (!budget) {
        return 0.00;
    }
    return parseFloat(budget);
}

function saveTask() {
    var title = titleInput.val();
    var description = descriptionInput.val();
    var budget = formatBudget(budgetInput.val());
    var status = statusInput.val();
    var date = dateInput.val();
    var color = $('input[name=opciones]:checked').val();

    //Validate inputs if not, push alert

    let isValid = true;
    if (!title || !description || !date) {
        isValid = false;
        $('.alert').slideDown();
        setTimeout(() => $('.alert').slideToggle(),7000);
        return   
    }

    var task = new Task(title,description,budget,status,date,color,isiconImportant);

    // Save task in to server
    const response = saveToServer(task);
    
    cleanInputs();
}

function cleanInputs() {
    titleInput.val("");
    descriptionInput.val("");
    budgetInput.val("");
    statusInput.val("");
    $('input[name=opciones]#color5').prop('checked', true);
    colorContent.css({'background':'transparent'});
    
    if (iconImportant.hasClass(iconIsImportant)) {
        iconImportant.removeClass(iconIsImportant);
        iconImportant.addClass(iconIsNoneImportant);
        isiconImportant = false;

    }
    dateInput.ready(function() {
        // Obtener la fecha y hora actual
        var today = new Date();
      
        // Formatear la fecha y hora actual como una cadena para establecer el valor predeterminado del elemento datetime-local
        var todayStr = today.toISOString().slice(0, 16);
      
        // Establecer el valor predeterminado del elemento datetime-local
        dateInput.val(todayStr);
      });
}

//Form elements
let colorContent = $('.form-radio-content');

// Form inputs
let titleInput = $('#input-Title');
let descriptionInput = $('#input-Description');
let budgetInput = $('#input-Budget');
let statusInput = $('#input-Status');
let dateInput = $('#input-Datetime');
let colorRadioOptions = $('input[name=opciones]');
let iconImportant =  $('#i-important');
let isiconImportant = false;