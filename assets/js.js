// REPLACE ONLY THIS LINK with your YouTube share URL (youtube.com/watch?v=... or youtu.be/...).
// Until then, the existing VFX Vimeo reel is used as a placeholder.
const AI_REEL_URL = "https://vimeo.com/1133149897";

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
const shots = ["Kaspar · Close-up", "Kaspar · Medium close-up", "Kaspar · Alternate close-up", "Feuerbach · Close-up", "Wide shot", "Stool · Wide shot", "Top shot"];
const container=document.getElementById('comparisons');
shots.forEach((title,index)=>{
 const n=String(index+1).padStart(2,'0');
 const heading=document.createElement('h4');heading.className='shot-title';heading.textContent=title;container.append(heading);
 const group=document.createElement('div');group.className='compare';
 for(const [folder,label] of [['3d','3D Render · Blender'],['ai','AI Image · Nano Banana + Photoshop']]){
  const fig=document.createElement('figure');fig.className='media';const img=new Image();img.loading='lazy';img.alt=`${title} — ${label}`;img.src=`assets/img/${folder}/shot-${n}.jpg`;
  const caption=document.createElement('figcaption');caption.textContent=label;fig.append(img,caption);group.append(fig);
 }container.append(group);
});
