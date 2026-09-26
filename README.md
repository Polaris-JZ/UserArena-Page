# UserArena

Anonymous project page for **UserArena: Benchmarking Interactive User Simulation for Long-Horizon Shopping Agents**. This repository contains the static benchmark website for double-blind review.

## GitHub Pages

Upload the contents of this directory to the root of a repository on the `main` branch, including `.github/workflows/pages.yml`. In **Settings → Pages → Build and deployment**, select **GitHub Actions**. Run **Deploy UserArena to GitHub Pages** from the Actions tab for the first deployment; later pushes to `main` deploy automatically.

No package installation or Node.js build is required. The workflow publishes the HTML, CSS, JavaScript, data, and assets directly. Relative resource paths support both root and project Pages URLs.

## Local preview

From this directory, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`. An HTTP server is required for loading the JSON data.

## Content

- `index.html` and `styles.css`: page content and presentation.
- `js/`: browser interactions and the approved anonymous-link policy.
- `data/`: public example trajectories, the paper's leaderboard snapshot, and resource links.
- `assets/`: presentation screenshots and self-hosted fonts with their licenses.

The Code links point to the anonymous research repository: https://anonymous.4open.science/r/UserArena-D877.

Screenshots are anonymized English presentation reconstructions. Product imagery was retouched and displayed prices follow a presentation scaling rule. The annotation image is a partial interface example. The trajectory explorer is a recorded demonstration; hosted environments and community submissions are not yet available.

The leaderboard reports the paper's results, with no composite score. Font copyright notices identify third-party font creators and are retained under the SIL Open Font License.
