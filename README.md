# AI Artist Portfolio — Julian Brednich

Independent GitHub Pages website, designed to match the clean, responsive light/dark visual style of the original Technical Artist portfolio.

## Publish at a different URL

1. Create a **new public GitHub repository** named `AI-Artist-Portfolio` under `JulianBrednich` (do not replace the existing `Portfolio` repository).
2. Upload the contents of this folder to the repository root.
3. Open repository **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
4. Your new site will be at `https://julianbrednich.github.io/AI-Artist-Portfolio/` after deployment.

## Add your YouTube AI reel (one-line change)

The AI reel is already embedded at the top of the page. **For now it shows the existing VFX Vimeo reel as a placeholder.** Once you have uploaded your AI reel to YouTube as **Unlisted**, edit `assets/js.js` on GitHub. Replace only this line near the top:

```js
const AI_REEL_URL = "https://vimeo.com/1133149897";
```

with your own YouTube link, for example:

```js
const AI_REEL_URL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
```

Both normal YouTube watch links and `youtu.be` share links are supported automatically. Commit the edit and GitHub Pages will redeploy. No MP4 upload is required. The separate VFX reel at the bottom stays unchanged. YouTube must allow embedding for this to work.

## 3D / AI image pairs (included)

Seven matched Blender/AI image pairs from `3D_AI_Image.zip` are included in `assets/img/3d` and `assets/img/ai`. They are resized and compressed for web delivery. Pair labels are editable in `assets/js.js`.

The source archive also contains `03_binderNah_v004.png` and a screenshot that are not clearly matched to AI counterparts, so these are not presented as comparisons.

## Facial capture media

The facial capture section currently links directly to video and image assets already hosted on the original Technical Artist GitHub Pages site. This preserves the workflow without duplicating large files. To make the new portfolio fully independent, download these original assets and change the URLs to local paths.

## VFX reel

The VFX reel is deliberately the last project section, directly above Contact.

## Note

The new repository and GitHub Pages deployment must be created from your own GitHub account. This package does not modify the original site.
