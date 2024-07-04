var reviews = [];

function addReview() { 
   reviewObject = {};
   reviewObject.description = document.querySelector(".main-description").value;
   reviewObject.grade = parseInt(document.querySelector(".rating-text").value);
  
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

   newReview.appendChild(insideDiv_1);
   newReview.appendChild(insideDiv_2);

   return newReview;
}
