/* Joseph Ketterer
JKETTE01
Javascript
Tobi Brodie
*/


/*This code simply creates the popup - it is not strictly part of the requirements  */

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
