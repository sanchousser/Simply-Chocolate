!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add('modal-open');

      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add("active");
      overlay.classList.add("active");
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");
      document.body.classList.remove('modal-open');

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.body.classList.remove('modal-open');
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
      }
    },
    false
  );

  overlay.addEventListener("click", function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
    document.body.classList.remove('modal-open');
  });

   $(document).ready(function () {
    $(function () {
      $('#js-buy-now-modal').submit(function (e) {
        e.preventDefault();
        $('#js-thanks-buy-now-modal')
          .attr('data-modal', '3')
          .addClass('js-open-modal');

        setTimeout(() => {
          document.querySelector('.modal.active').classList.remove('active');
          this.classList.remove('active');
          document.body.classList.remove('modal-open');
          $('.thanks-buy-pop-up-modal').addClass('active');
        }, 300);
      });
    });

    $(function () {
      $('#review-modal-form').submit(function (e) {
        e.preventDefault();
        $('#js-review-modal').attr('data-modal', '4').addClass('js-open-modal');

        setTimeout(() => {
          document.querySelector('.modal.active').classList.remove('active');
          this.classList.remove('active');
          document.body.classList.remove('modal-open');
          $('.thanks-review-modal').addClass('active');
        }, 300);
      });
    });
  });
});