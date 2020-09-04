


$(document).ready(() => {
    if (localStorage.getItem("loves") != "vps") {


        $('body').prepend(`<div id="warnModal" class="modal">
<div class="modal-content">
    <div class="modal-header">
      <span class="modal-close">&times;</span>
      <h2>Keep in mind</h2>
    </div>
    <div class="modal-body">
      <p>This service, along with payments, is monetized using ads. Feel free to use an ad blocker,</p>
      <p style="font-weight: bold;">but don't expect any free offers from us.</p>
      <div class="modal-buttons right">
          <button id="warn-disagree">No thanks</button>
          <button id="warn-agree">OK</button>
      </div>
    </div>
  </div>
</div>`);



        var modal = $("#warnModal")
        var close = $(".modal-close")
        var agree = $("#warn-agree")
        var dagre = $("#warn-disagree")
        modal.css("display", "block");
        close.click(() => {
            modal.css("display", "none");
            localStorage.setItem('loves', 'vps');
        })
        agree.click(() => {
            modal.css("display", "none");
            localStorage.setItem('loves', 'vps');
        })
        dagre.click(() => {
            window.location.href = "https://www.youtube.com/watch?v=C97QnxrgDRc"
        })

    }
})