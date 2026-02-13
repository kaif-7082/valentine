$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});


  function goToPage3() {
    document.body.classList.add("fade-out");
  
    setTimeout(() => {
      window.location.href = "page3.html";
    }, 800); // same duration as CSS transition
  }
 