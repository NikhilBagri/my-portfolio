/* =========================================================
   🎬 VIDEO HELPERS — detects link type for the player.
   Supports local/MP4 files, YouTube (watch, youtu.be, shorts), Vimeo.
   ========================================================= */

export function getVideoSource(url = "") {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) {
    return { type: "youtube", id: yt[1], embed: `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0` };
  }

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return { type: "vimeo", id: vimeo[1], embed: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&title=0&byline=0` };
  }

  return { type: "file", src: url };
}

export function getThumbnail(video) {
  if (video.thumbnail) return video.thumbnail;
  const source = getVideoSource(video.src);
  if (source.type === "youtube") return `https://img.youtube.com/vi/${source.id}/hqdefault.jpg`;
  return null; // local MP4 → first frame shown automatically
}
