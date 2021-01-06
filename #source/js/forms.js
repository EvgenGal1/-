// 2:29:37 списать forms.js
// forms.js =====================================================================================
//FORMS
function forms() {
  // SELECT
  if ($("select").length > 0) {
    function selectscrolloptions() {
      var scs = 100;
      var mss = 50;
      if (isMobile.any()) {
        scs = 10;
        mss = 1;
      }
      var opt = {
        cursorcolor: "#2078e5",
        cursorwidth: "3px",
        background: "",
        autohidemode: false,
        cursoropacitymax: 0.4,
        bounceescroll: false,
        cursorborderradius: "0px",
        scrollspeed: scs,
        mousescrollstep: mss,
        directionlockdeatzone: 0,
        cursorborder: "0px solid #fff",
      };
      return opt;
    }
    function select() {
      $.each($("select"), function (index, val) {
        var ind = index;
        $(this).hide();
        if ($(this).parent(".select-block").length == 0) {
          $(this).#wrap(
            "<div class='select-block " +
              $(this).attr("class") +
              "-select-block'></div>"
          );
        } else {
          $(this).parent(".select-block").find(".select").remove();
        }
        var milti = "";
        var check = "";
        var sblock = $(this).parent(".select-block");
        var soptions =
          "<div class='select-options'><div class='select-options-scroll'>< class='select-options-list'>";
        if ($(this).attr("multiple") == "multiple") {
          milti = "multiple";
          check = "check";
        }
        $.each($(this).find("option"), function (index, val) {
          if ($(this).attr("value") != "") {
            soptions =
              soptions +
              "<div data-value='" +
              $(this).attr("value") +
              "'class='select-options__value_" +
              ind +
              "select-options__value value_" +
              "'</div>";
          } else if ($(this).parent().attr("data-label") == "on") {
            if (sblock.find(".select__label").length == 0) {
              sblock.prepend(
                '<div class="select__label">' + $(this).htlm() + "</div>"
              );
            }
          }
        });
        soptions = soptions + "</div></div></div>";
        if ($(this).attr("data-type") == "search") {
          sblock.append(
            "<div data-type='search' class='select_" +
              ind +
              " select" +
              " " +
              $(this).attr("class") +
              "__select " +
              milti +
              "'>" +
              "<div class='select-title'>" +
              "<div class='select-title__arrow ion-ios-arrow-down'></div>" +
              "<input data-value='" +
              $(this).find('option[selected="selected"]').html() +
              "' class='select-title__value value_'>" +
              "</div>" +
              soptions +
              "</div>"
          );
          $(".select_" + ind)
            .find("input.select-title__value")
            .jcOnPageFilter({
              parentSectionClass: "secelt-options_" + ind,
              parentLookupClass: "secelt-options__value_" + ind,
              childBlockClass: "secelt-options__value_" + ind,
            });
        } else {
          sblock.append(
            "<div class='select_" +
              ind +
              " select" +
              " " +
              $(this).attr("class") +
              "__select " +
              milti +
              "'>" +
              "<div class='select-title'>" +
              "<div class='select-title__arrow ion-ios-arrow-down'></div>" +
              "<div class='select-title__value value_" +
              $(this).find('option[selected="selected"]').val() +
              "'>" +
              $(this).find('option[selected="selected"]').html() +
              "</div>" +
              soptions +
              "</div>"
          );
        }
      });
    }
  }
}
