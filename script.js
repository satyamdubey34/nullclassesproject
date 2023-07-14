
    var darkButton = document.querySelector(".darkTheme");

    darkButton.onclick = function(){
        darkButton.classList.toggle("button-Active");
        document.body.classList.toggle("dark-color")
    }
  // Function to create a photo post in the gallery
  function createGalleryPost() {
      // Get the input value
      var imageUrl = prompt("Enter the URL of the photo:");

      if (imageUrl) {
          // Create a new post element
          var postElement = document.createElement("div");
          postElement.className = "post-images1";
          var imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.alt = "post image";
          postElement.appendChild(imageElement);

          // Get the gallery container
          var galleryContainer = document.querySelector(".post-images .post-images1");

          // Insert the new photo post at the beginning of the gallery
          galleryContainer.insertBefore(postElement, galleryContainer.firstChild);
      }
  }

  // Function to handle like button click
  function likeButtonClicked() {
      // Get the like button element
      var likeButton = event.target;

      // Toggle the active class on the like button
      likeButton.classList.toggle("active");

      // Update the like count based on the active class
      var likeCount = likeButton.parentElement.querySelector("span");
      if (likeButton.classList.contains("active")) {
          likeCount.textContent = parseInt(likeCount.textContent) + 1;
      } else {
          likeCount.textContent = parseInt(likeCount.textContent) - 1;
      }
  }

  // Function to handle share button click
  function shareButtonClicked() {
      // Get the share button element
      var shareButton = event.target;

      // Increment the share count
      var shareCount = shareButton.parentElement.querySelector("span");
      shareCount.textContent = parseInt(shareCount.textContent) + 1;
  }

  // Function to handle adding a friend
  function addFriend() {
      // Get the friend element
      var friendElement = event.target.parentElement;

      // Hide the friend element
      friendElement.style.display = "none";
  }

  // Function to handle removing a friend
  function removeFriend() {
      // Get the friend element
      var friendElement = event.target.parentElement;

      // Remove the friend element
      friendElement.remove();
  }

  // Attach event listeners to the gallery post, like/share buttons, and friend actions
  window.addEventListener("DOMContentLoaded", function () {
      // Gallery post button
      var galleryPostButton = document.querySelector(".post-icon a:first-child");
      galleryPostButton.addEventListener("click", createGalleryPost);

      // Like buttons
      var likeButtons = document.querySelectorAll(".like-comment ul li:first-child img");
      likeButtons.forEach(function (button) {
          button.addEventListener("click", likeButtonClicked);
      });

      // Share buttons
      var shareButtons = document.querySelectorAll(".like-comment ul li:last-child i");
      shareButtons.forEach(function (button) {
          button.addEventListener("click", shareButtonClicked);
      });

      // Add friend buttons
      var addFriendButtons = document.querySelectorAll(".friend button:first-child");
      addFriendButtons.forEach(function (button) {
          button.addEventListener("click", addFriend);
      });

      // Remove friend buttons
      var removeFriendButtons = document.querySelectorAll(".friend button.friend-remove");
      removeFriendButtons.forEach(function (button) {
          button.addEventListener("click", removeFriend);
      });
  });

