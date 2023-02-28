const d = document;
const w = window;

export default function videoInteligente() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        d.addEventListener("visibilitychange", (el) => {
          el.target.visibilityState === "visible"
            ? entry.target.play()
            : entry.target.pause();
        });
      } else {
        entry.target.pause();
      }
    });
  };

  let observer = new IntersectionObserver(callback, { threshold: 1 });

  $videos.forEach((video) => observer.observe(video));
}