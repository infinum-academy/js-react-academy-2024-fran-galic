var reviews = [];
var avgRating = 0;

function callAvgRating() {
   var sum = 0;
   if (reviews.length == 0) return 0;

   reviews.forEach((r) => {
      sum += r.grade;
   });
   return (sum / reviews.length).toFixed(1);
}

function addReview() { 
   reviewObject = {};
   reviewObject.description = document.querySelector(".main-description").value;
   reviewObject.grade = parseInt(document.querySelector(".rating-text").value);
  
   //filtriranje losih reviews:
   if(![1, 2, 3, 4, 5].includes(reviewObject.grade)) {
      document.querySelector(".main-description").value = "Add review";
      document.querySelector(".rating-text").value = "";
      return;
   }

   reviews.push(reviewObject);   
   rednerReviews();

   document.querySelector(".main-description").value = "Add review";
   document.querySelector(".rating-text").value = "";
}

function rednerReviews() {
   var parent = document.querySelector(".reviews-container");
   parent.innerHTML = "";
   
   reviews.forEach((review) => {
      var newReview = createReview(review);
      if(newReview !== undefined) parent.appendChild(newReview);
   });

   //promjeni i avrage score svaki put kad ponovno renderas reviews
   renderAvgScore();
}

function createReview(review) {
   if(![1, 2, 3, 4, 5].includes(parseInt(review.grade))) return;

   var newReview = document.createElement("div");
   newReview.classList.add('review');

   var insideDiv_1 = document.createElement("div");
   insideDiv_1.classList.add('review-description');
   insideDiv_1.innerHTML = review.description;

   var insideDiv_2 = document.createElement("div");
   insideDiv_2.classList.add('grade');
   insideDiv_2.innerHTML = review.grade;

   /* dodaj gumb za brisanje */
   var deleteButton = document.createElement("input");
   deleteButton.classList.add('delete-button');
   deleteButton.type = "button";
   deleteButton.value = "Delete";
   deleteButton.onclick = () => {
      //funkcija vraca polje svih reviewa koji zadovoljavaju uvjet
      reviews = reviews.filter((r) => {
         return r !== review;
      });
      rednerReviews();
   };

   newReview.appendChild(insideDiv_1);
   newReview.appendChild(insideDiv_2);
   newReview.appendChild(deleteButton);

   return newReview;
}

function renderAvgScore() {
   avgRating = callAvgRating();

   var oldScore = document.querySelector(".avg-score");
   if (oldScore !== null) oldScore.remove();

   var avgScoreDiv = createAvgScoreDiv(avgRating);
   document.querySelector(".show-description-container").appendChild(avgScoreDiv);
}



function createAvgScoreDiv(avgRating) {
   var avgScoreDiv = document.createElement("div");
   avgScoreDiv.classList.add('avg-score');
   avgScoreDiv.innerHTML = (avgRating + "/5");
   return avgScoreDiv;
}

//svaki put kad se ponovno ucita stranica
renderAvgScore();