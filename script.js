console.log("Website loaded!");

    document.getElementById("submitComment").addEventListener("click", function () {
        const commentText = document.getElementById("commentInput").value;

        if (commentText.trim() === "") return;

        const newComment = document.createElement("p");
        newComment.textContent = commentText;

        document.getElementById("commentsSection").appendChild(newComment);

        document.getElementById("commentInput").value = "";
    });