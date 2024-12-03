// Attach progress tracking to all videos
document.querySelectorAll("video").forEach((video, index) => {
    const progressBar = document.getElementById(`progress${index + 1}`);
    video.addEventListener("timeupdate", () => {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.value = percentage || 0;
    });
});
