// AI reel: update this URL if the YouTube video changes.
const AI_REEL_URL = "https://youtu.be/9BCYDufrtZE";

function embedVideoUrl(link) {
  try {
    const url = new URL(link);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      if (/^[a-zA-Z0-9_-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    }
    if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
      const id = url.searchParams.get("v") || url.pathname.match(/^\/(?:shorts|embed|live)\/([a-zA-Z0-9_-]{11})/)?.[1];
      if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    }
    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = url.pathname.match(/\/(?:video\/)?(\d+)/)?.[1];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
  } catch (e) { console.warn("Invalid video URL", e); }
  return "";
}
const aiPlayer = document.getElementById("ai-reel-player");
if (aiPlayer) aiPlayer.src = embedVideoUrl(AI_REEL_URL);

document.getElementById('year').textContent=new Date().getFullYear();
// Display order: Top shot, Kaspar alternate close-up, wide shot, Kaspar close-up,
// Feuerbach close-up, stool wide shot. Kaspar medium close-up is omitted.
const shots = [
  { id: '07', name: 'Top shot' },
  { id: '03', name: 'Kaspar alternate close-up' },
  { id: '05', name: 'Wide shot' },
  { id: '01', name: 'Kaspar close-up' },
  { id: '04', name: 'Feuerbach close-up' },
  { id: '06', name: 'Stool wide shot' }
];
const container = document.getElementById('comparisons');
if (container) shots.forEach(({id, name}) => {
  const group = document.createElement('div');
  group.className = 'compare';
  for (const [folder, label] of [['3d', '3D Render'], ['ai', 'AI Image']]) {
    const fig = document.createElement('figure');
    fig.className = 'media';
    const img = new Image();
    img.loading = 'lazy';
    img.alt = `${name}: ${label}`;
    img.src = `assets/img/${folder}/shot-${id}.jpg`;
    fig.append(img);
    group.append(fig);
  }
  container.append(group);
});
