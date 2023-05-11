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
        console.log(await response.json())
        loadServerTasks();
    } else {
        alert("Error: task was not seve.");        
        console.log(await response.json())
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
        alert("Error: task was not seve.");        
        console.log(await response.json())
    }
    
}

async function removeTaskToServer(id) {
    let response = await fetch(`https://fsdiapi.azurewebsites.net/api/tasks/${id}/`,{
        method: "DELETE",
    });

    if (await response.ok) {
        console.log("Deleted");
        $('#'+id).remove();
    } else {
        alert("Error: Culd not delete the task.");        
        console.log(await response.json());
    }

    return response
}

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