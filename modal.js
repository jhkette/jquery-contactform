function toggleModal() {
    var modal = $(".modal");
    modal.addClass("show-modal");
    var closeButton = $(".close-button");

    closeButton.click(removeModal);
    $(window).click(windowOnClick);

    function windowOnClick(event) {
        if (event.target === modal) {
            removeModal();
        }
    }
    function removeModal(e) {
        var modal = $(".modal");
        modal.removeClass("show-modal");
    }
}
