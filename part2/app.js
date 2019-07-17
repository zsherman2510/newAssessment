$(document).ready(function() {
  var listingsURL = "https://sv-reqres.now.sh/api/listings/?per_page=6";
  var offersURL = "https://sv-reqres.now.sh/api/offers/?per_page=6";
  var eventsURL = "https://sv-reqres.now.sh/api/events/?per_page=6";

  var allPostArr = console.log(allPostArr);
  function filterListings() {
    $.ajax(listingsURL).done(function(res) {
      console.log(res.data);
      var all = res.data;
      all.forEach(function(post, i) {
        var widePost = $("<div class='post wide-post'>");
        var regPost = $("<div class=post>");
        var longPost = $("<div class='post long-post'>");
        var longImg = $(
          "<img alt='long-img' class='post-image long-img'>"
        ).attr("src", "fallback.jpg");
        // $(longImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        var textWrapper = $("<div class=text-wrapper>");
        var title = $("<h1 class=title>").text(post.title);
        var textBody = $("<p class=text-body>").text(post.description);
        var textBodyLong = $("<p class='text-body-long'>").text(
          post.description
        );
        var imageWrapper = $("<div class=image-wrapper>");
        var postImg = $("<img alt='post' class='post-image'>").attr(
          "src",
          "fallback.jpg"
        );

        var button = $("<button class='readmore-btn'>Read More</button>");
        // $(postImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        textWrapper.append(button);
        // $(postImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        textWrapper.append(title);
        if (i % 6 === 0) {
          textWrapper.append(textBody);
          imageWrapper.append(postImg);
          widePost.append(imageWrapper);
          widePost.append(textWrapper);
          $("#articles").append($(widePost));
        } else if (i % 6 === 5) {
          textWrapper.append(textBodyLong);
          imageWrapper.append(longImg);
          longPost.append(imageWrapper);
          longPost.append(textWrapper);
          $("#articles").append($(longPost));
        } else {
          textWrapper.append(textBody);
          imageWrapper.append(postImg);
          regPost.append(imageWrapper);
          regPost.append(textWrapper);
          $("#articles").append($(regPost));
        }
      });
    });
  }

  function filterOffers() {
    $.ajax(offersURL).done(function(res) {
      console.log(res.data);
      var all = res.data;
      all.forEach(function(post, i) {
        var widePost = $("<div class='post wide-post'>");
        var regPost = $("<div class=post>");
        var longPost = $("<div class='post long-post'>");
        var longImg = $(
          "<img alt='long-img' class='post-image long-img'>"
        ).attr("src", "fallback.jpg");
        // $(longImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        var textWrapper = $("<div class=text-wrapper>");
        var title = $("<h1 class=title>").text(post.title);
        var textBody = $("<p class=text-body>").text(post.description);
        var textBodyLong = $("<p class='text-body-long'>").text(
          post.description
        );

        var imageWrapper = $("<div class=image-wrapper>");
        var postImg = $("<img alt='post' class='post-image'>").attr(
          "src",
          "fallback.jpg"
        );

        var button = $("<button class='readmore-btn'>Read More</button>");
        // $(postImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        textWrapper.append(button);
        textWrapper.append(title);
        textWrapper.append(button);
        if (i % 6 === 0) {
          textWrapper.append(textBody);
          imageWrapper.append(postImg);
          widePost.append(imageWrapper);
          widePost.append(textWrapper);
          $("#articles").append($(widePost));
        } else if (i % 6 === 5) {
          textWrapper.append(textBodyLong);
          imageWrapper.append(longImg);
          longPost.append(imageWrapper);
          longPost.append(textWrapper);
          $("#articles").append($(longPost));
        } else {
          textWrapper.append(textBody);
          imageWrapper.append(postImg);
          regPost.append(imageWrapper);
          regPost.append(textWrapper);
          $("#articles").append($(regPost));
        }
      });
    });
  }
  function filterEvents() {
    $.ajax(offersURL).done(function(res) {
      console.log(res.data);
      var all = res.data;
      all.forEach(function(post, i) {
        var widePost = $("<div class='post wide-post'>");
        var regPost = $("<div class=post>");
        var longPost = $("<div class='post long-post'>");
        var longImg = $(
          "<img alt='long-img' class='post-image long-img'>"
        ).attr("src", "fallback.jpg");
        // $(longImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        var textWrapper = $("<div class=text-wrapper>");
        var title = $("<h1 class=title>").text(post.title);
        var textBody = $("<p class=text-body>").text(post.description);
        var textBodyLong = $("<p class='text-body-long'>").text(
          post.description
        );
        var imageWrapper = $("<div class=image-wrapper>");
        var postImg = $("<img alt='post' class='post-image'>").attr(
          "src",
          "fallback.jpg"
        );
        var button = $("<button class='readmore-btn'>Read More</button>");
        // $(postImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        textWrapper.append(button);
        // $(postImg).on("error", function() {
        //   $(this).attr("src", "/fallback.jpg");
        // });
        textWrapper.append(title);
        if (i % 6 === 0) {
          textWrapper.append(textBody);
          imageWrapper.append(postImg);
          widePost.append(imageWrapper);
          widePost.append(textWrapper);
          $("#articles").append($(widePost));
        } else if (i % 6 === 5) {
          textWrapper.append(textBodyLong);
          imageWrapper.append(longImg);
          longPost.append(imageWrapper);
          longPost.append(textWrapper);
          $("#articles").append($(longPost));
        } else {
          textWrapper.append(textBody);
          imageWrapper.append(postImg);
          regPost.append(imageWrapper);
          regPost.append(textWrapper);
          $("#articles").append($(regPost));
        }
      });
    });
  }

  $("#All").on("click", function() {
    $("#articles").empty();
    fetchAll();
    console.log("all");
  });
  $("#Listings").on("click", function() {
    $("#articles").empty();
    filterListings();
    console.log("listings");
  });
  $("#Events").on("click", function() {
    $("#articles").empty();
    filterEvents();
    console.log("events");
  });
  $("#Offers").on("click", function() {
    $("#articles").empty();
    filterOffers();
    console.log("offers");
  });

  function fetchAll() {
    $.when($.ajax(listingsURL), $.ajax(offersURL), $.ajax(eventsURL))
      .done(function(...res) {
        // console.log(res);
        var listing = res[0][0].data;
        var offers = res[1][0].data;
        var events = res[2][0].data;

        var all = offers.concat(events, listing);

        // console.log(all);

        all.forEach(function(post, i) {
          var widePost = $("<div class='post wide-post'>");
          var regPost = $("<div class=post>");
          var longPost = $("<div class='post long-post'>");
          var longImg = $(
            "<img alt='long-img' class='post-image long-img'>"
          ).attr("src", "fallback.jpg");
          // $(longImg).on("error", function() {
          //   $(this).attr("src", "/fallback.jpg");
          // });
          var textWrapper = $("<div class=text-wrapper>");
          var title = $("<h1 class=title>").text(post.title);
          var textBody = $("<p class=text-body>").text(post.description);
          var textBodyLong = $("<p class='text-body-long'>").text(
            post.description
          );
          var imageWrapper = $("<div class=image-wrapper>");
          var postImg = $("<img alt='post' class='post-image'>").attr(
            "src",
            "fallback.jpg"
          );
          var button = $("<button class='readmore-btn'>Read More</button>");
          // $(postImg).on("error", function() {
          //   $(this).attr("src", "/fallback.jpg");
          // });
          textWrapper.append(button);
          // $(postImg).on("error", function() {
          //   $(this).attr("src", "/fallback.jpg");
          // });
          textWrapper.append(title);
          if (i % 6 === 0) {
            textWrapper.append(textBody);
            imageWrapper.append(postImg);
            widePost.append(imageWrapper);
            widePost.append(textWrapper);
            $("#articles").append($(widePost));
          } else if (i % 6 === 5) {
            textWrapper.append(textBodyLong);
            imageWrapper.append(longImg);
            longPost.append(imageWrapper);
            longPost.append(textWrapper);
            $("#articles").append($(longPost));
          } else {
            textWrapper.append(textBody);
            imageWrapper.append(postImg);
            regPost.append(imageWrapper);
            regPost.append(textWrapper);
            $("#articles").append($(regPost));
          }
        });

        return all;
      })
      .fail(function(err) {
        console.log(err);
      });
  }

  fetchAll();
  console.log(allPostArr);
});
