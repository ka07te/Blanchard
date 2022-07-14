$(".accordion").accordion({
  collapsible: true,
  heightStyle: "content",
  active: 0,
  icons: { "header": "ui-icon-plus" }
});
$("#dialog-link, #icons li").hover(
  function () {
    $(this).addClass("ui-state-hover");
  },
  function () {
    $(this).removeClass("ui-state-hover");
  }
);
