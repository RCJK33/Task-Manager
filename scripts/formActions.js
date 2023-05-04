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

function init() {
    $('#i-important').click(toggleImportant);
}

window.onload = init;