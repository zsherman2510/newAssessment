var queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=15";
var data = {};

var page = 1;

// does our API call on page load and pushes data into object for further use.

$(document).ready(function() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      data[i] = response.data[i];
    }

    generatePost(data);
  });
});
function generatePost(data) {
  if (page == 1) {
    $(".container").css({
      "grid-template-columns": "1fr 1fr",
      "-ms-grid-columns": "1fr 1fr"
    });
    var column1 = $("<div class='firstPgCol_1'>");
    var column2 = $("<div class='firstPgCol_2'>");
    $(".container").append(column1);
    $(".container").append(column2);

    for (var i = 0; i < 2; i++) {
      createImage(i, ".firstPgCol_1");
    }

    for (var i = 2; i < 5; i++) {
      createImage(i, ".firstPgCol_2");
    }
  }

  if (page == 2) {
    $(".container").css({
      "grid-template-columns": "1fr 1fr 1fr",
      "-ms-grid-columns": "1fr 1fr 1fr"
    });
    var column3 = $("<div class='secPgCol_1'>");
    var column4 = $("<div class='secPgCol_2'>");
    var column5 = $("<div class='secPgCol_3'>");
    $(".container").append(column3);
    $(".container").append(column4);
    $(".container").append(column5);

    for (var i = 5; i < 7; i++) {
      createImage(i, ".secPgCol_1");
    }

    for (var i = 7; i < 9; i++) {
      createImage(i, ".secPgCol_2");
    }
    for (var i = 9; i < 10; i++) {
      createImage(i, ".secPgCol_3");
    }
  }
  if (page == 3) {
    $(".container").css({
      "grid-template-columns": "1fr 1fr",
      "-ms-grid-columns": "1fr 1fr"
    });
    var column6 = $("<div class='thirdPgCol_1'>");
    var column7 = $("<div class='thirdPgCol_2'>");
    $(".container").append(column6);
    $(".container").append(column7);

    for (var i = 10; i < 12; i++) {
      createImage(i, ".thirdPgCol_1");
    }

    for (var i = 12; i < 13; i++) {
      createImage(i, ".thirdPgCol_2");
    }
  }
  if (page == 4) {
    $(".container").css({
      "grid-template-columns": "1fr 1fr",
      "-ms-grid-columns": "1fr 1fr"
    });
    var column8 = $("<div class='fourPgCol_1'>");
    var column9 = $("<div class='fourPgCol_2'>");
    $(".container").append(column8);
    $(".container").append(column9);

    for (var i = 13; i < 14; i++) {
      createImage(i, ".fourPgCol_1");
    }

    for (var i = 14; i < 15; i++) {
      createImage(i, ".fourPgCol_2");
    }
  }
  replaceImages("./fallback.jpg");
}
replaceImages = function(url) {
  var img = document.getElementsByTagName("img");

  for (var i = 0; i < img.length; i++) {
    var j = img[i];
    if (j.naturalWidth === 0) {
      //this image is broken
      j.src = url;
    }
  }
};

// function that will create and fill our image container and title container with data from data
// object and append appropriately.

function createImage(index, location) {
  var newDiv = $("<div>");
  var titleDiv = $(
    "<div class='title'>0" +
      (index + 1) +
      ". <span>" +
      data[index].category.subcatname +
      "</span></div>"
  );
  newDiv.append(titleDiv);
  newDiv.append(
    "<img src='" +
      data[index].mediaurl +
      "' alt='" +
      data[index].category.subcatname +
      "'>"
  );
  $(location).append(newDiv);
}

//
$(document).on("click", "button#next", function() {
  $(".container").attr("grid-template-columns", "");
  $(".container").empty();

  if (page == 4) {
    page = 1;
  } else {
    page++;
  }

  generatePost(data);
});

$(document).on("click", "button#prev", function() {
  $(".container").attr("grid-template-columns", "");
  $(".container").empty();

  if (page == 1) {
    page = 4;
  } else {
    page--;
  }

  generatePost(data);
});
