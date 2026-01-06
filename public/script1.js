let netflixShows = getShowList();

function getShows() {
  const cat = showCat.value;

  rowString =
    "<tr><th>Key</th><th>Title</th><th>Casts</th><th>Year</th><th>Rating / Score</th></tr>";
  results.innerHTML = "";

  for (let key in netflixShows) {
    if (cat == "All" || netflixShows[key].category == cat) {
      rowString += "<tr>";
      rowString += "<td>" + key + "</td>";
      rowString += "<td>" + netflixShows[key].title + "</td>";
      rowString += "<td>" + netflixShows[key].cast + "</td>";
      rowString += "<td>" + netflixShows[key].year + "</td>";
      rowString += "<td>" + netflixShows[key].ratingScore() + "</td></tr>";
    }
  }

  results.innerHTML = rowString;
}

function delShows() {
  const cat = showCat.value;

  if (cat == "All") {
    alert("Cannot delete all shows.");
    return;
  }

  if (!confirm("Delete all " + cat + " shows?")) {
    return;
  }

  for (let key in netflixShows) {
    if (netflixShows[key].category == cat) {
      delete netflixShows[key];
    }
  }

  getShows();
}

function getShowList() {
  return {
    breakingBad: {
      title: "Breaking Bad",
      category: "Drama",
      year: 2008,
      rating: "TV-MA",
      cast: ["Bryan Cranston", "Aaron Paul"],
      imdbScore: 9.5,
      ratingScore: function () {
        return this.rating + " / " + this.imdbScore;
      }
    },
    theCrown: {
      title: "The Crown",
      category: "Drama",
      year: 2016,
      rating: "TV-MA",
      cast: ["Olivia Colman", "Claire Foy"],
      imdbScore: 8.6,
      ratingScore: function () {
        return this.rating + " / " + this.imdbScore;
      }
    },
    brooklynNineNine: {
      title: "Brooklyn Nine-Nine",
      category: "Comedy",
      year: 2013,
      rating: "TV-14",
      cast: ["Andy Samberg", "Terry Crews"],
      imdbScore: 8.4,
      ratingScore: function () {
        return this.rating + " / " + this.imdbScore;
      }
    },
    strangerThings: {
      title: "Stranger Things",
      category: "Sci-Fi",
      year: 2016,
      rating: "TV-14",
      cast: ["Millie Bobby Brown", "Finn Wolfhard"],
      imdbScore: 8.7,
      ratingScore: function () {
        return this.rating + " / " + this.imdbScore;
      }
    },
    onePiece: {
      title: "One Piece",
      category: "Anime",
      year: 1999,
      rating: "TV-14",
      cast: ["Mayumi Tanaka", "Kazuya Nakai"],
      imdbScore: 8.9,
      ratingScore: function () {
        return this.rating + " / " + this.imdbScore;
      }
    }
  };
}
