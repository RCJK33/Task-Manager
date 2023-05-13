function testRequest() {
    fetch("https://fsdiapi.azurewebsites.net/");
}

async function saveToServer(task) {
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        }, // This epecify the document type
        body: JSON.stringify(task), // The document
    });

    if (await response.status === 200) {
        displayTaskCards(await response.json());
        $('.alert-added').fadeIn();
        setTimeout(() => $('.alert-added').fadeToggle(),7000);
    } else {
        $('.alert-added-err').fadeIn();
        setTimeout(() => $('.alert-added-err').fadeToggle(),7000);
    }

    return response
}

async function loadServerTasks() {
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/",{
        method: "GET",
        headers: {
            "accept": "application/json"
        }, // This epecify the document type
    });
    
    if (await response.status === 200) {
        // console.log(await response.json());
        var task = await response.json();
        displayTaskCards(task);
    } else {
        $('.alert-connect-err').fadeIn();
        setTimeout(() => $('.alert-connect-err').fadeToggle(),9000);
    }
    
}

async function removeTaskToServer(id) {
    let response = await fetch(`https://fsdiapi.azurewebsites.net/api/tasks/${id}/`,{
        method: "DELETE",
    });
    var taskCard = $('#'+id);

    if (await response.ok) {
        taskCard.animate({
            opacity: 0,
            height: 0,
            width: 0
        }, 400, function() {
            $(this).remove();
        });
        $('.alert-delete').fadeIn();
        setTimeout(() => $('.alert-delete').fadeToggle(),7000);
    } else {
        $('.alert-delete-err').fadeIn();
        setTimeout(() => $('.alert-delete-err').fadeToggle(),7000);
    }

    return response
}


$('.alert').hide()
function init() {
    iconImportant.click(toggleImportant);
    setColorSelect();    
    
    colorRadioOptions.on('click', function() {
        var valorSeleccionado = $(this).val();
        setColorSelectContent(valorSeleccionado);
    });
    
    colorRadioOptions.on('click',setColorSelectContent);
    $('#btn-save').on('click',saveTask);
    
    loadServerTasks();
    cleanInputs();
}

window.onload = init;