console.log("Website loaded!");

    document.getElementById("submitComment").addEventListener("click", function () {
        const commentText = document.getElementById("commentInput").value;

        if (commentText.trim() === "") return;

        const newComment = document.createElement("p");
        newComment.textContent = commentText;

        document.getElementById("commentsSection").appendChild(newComment);

        document.getElementById("commentInput").value = "";
    });
    document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("randomMemeBtn");
    const display = document.getElementById("randomMemeDisplay");

    btn.addEventListener("click", () => {
        const memes = document.querySelectorAll("#memes img");

        if (memes.length === 0) {
            display.innerHTML = "No memes found.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMemeSrc = memes[randomIndex].src;

        display.innerHTML = `
            <img src="${randomMemeSrc}" style="max-width: 400px; border-radius: 10px;">
        `;
    });
});
