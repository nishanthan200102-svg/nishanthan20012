 <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Nishanthan Suseekaran | My Gallery</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #071426;
  color: white;
}

header {
  text-align: center;
  padding: 28px 15px;
  background: linear-gradient(135deg, #102d50, #641e40);
}

header h1 {
  margin-bottom: 10px;
}

main {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
}

.panel {
  background: #10243c;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 22px;
}

input, textarea, button {
  font: inherit;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #47617e;
}

input, textarea {
  width: 100%;
  margin: 8px 0;
  background: #f8fafc;
  color: #111827;
}

button, .back {
  background: #d94686;
  color: white;
  border: 0;
  cursor: pointer;
  padding: 12px 17px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin: 5px 3px;
}

button:hover, .back:hover {
  background: #a92562;
}

button:disabled {
  opacity: 0.6;
  cursor: wait;
}

#gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 15px;
}

.photo-card {
  background: #10243c;
  padding: 10px;
  border-radius: 12px;
  overflow: hidden;
  min-width: 0;
}

.photo-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
}

.photo-card h3,
.photo-card p {
  overflow-wrap: anywhere;
}

.photo-card h3 {
  font-size: 16px;
}

.photo-card p {
  color: #d6e2f0;
}

#status {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: #fcd34d;
}

#viewer {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.92);
  z-index: 10;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}

#viewer img {
  max-width: 96%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 6px;
}

footer {
  text-align: center;
  padding: 25px;
  color: #cbd5e1;
}
</style>
</head>

<body>

<header>
  <h1>📸 Gallery</h1>
  <p>Nishanthan Suseekaran</p>
  <p>Welcome to My Online Gallery</p>
  <a class="back" href="index.html">← Back to Home</a>
</header>

<main>

<section class="panel">
  <h2>➕ Upload Photos</h2>
  <p>Upload photos to share them in the online gallery.</p>

  <label for="photos">Choose photos</label>
  <input id="photos" type="file" accept="image/*" multiple>

  <label for="photoTitle">Photo title</label>
  <input id="photoTitle" type="text"
         maxlength="150" placeholder="Enter photo title">

  <label for="photoDescription">Photo description</label>
  <textarea id="photoDescription"
            maxlength="1000"
            placeholder="Write your memories here"></textarea>

  <button id="uploadButton" type="button">
    📤 Add Selected Photos
  </button>

  <button id="refreshButton" type="button">
    🔄 Refresh Gallery
  </button>

  <p id="status" role="status" aria-live="polite">
    Connecting to online gallery...
  </p>
</section>

<section>
  <h2>🖼️ Photos</h2>
  <p id="count">Loading photos...</p>
  <div id="gallery"></div>
</section>

</main>

<div id="viewer" role="dialog" aria-modal="true"
     aria-label="Photo viewer">
  <button id="closeViewer" type="button">✕ Close</button>
  <img id="largePhoto" alt="Selected gallery photo">
  <p id="largeTitle"></p>
</div>

<footer>
  © 2026 Nishanthan Suseekaran
  <p>nishanthan200102@gmail.com</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
"use strict";

/* ENTER YOUR OWN SUPABASE DETAILS HERE */
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";
const BUCKET = "gallery-photos";

const $ = id => document.getElementById(id);

const photoInput = $("photos");
const titleInput = $("photoTitle");
const descriptionInput = $("photoDescription");
const uploadButton = $("uploadButton");
const refreshButton = $("refreshButton");
const gallery = $("gallery");
const countText = $("count");
const statusText = $("status");

let db = null;
let isLoading = false;

function status(message) {
  statusText.textContent = message;
}

function initialize() {
  if (
    SUPABASE_URL.startsWith("YOUR_") ||
    SUPABASE_KEY.startsWith("YOUR_")
  ) {
    status("Setup needed: Add your Supabase Project URL and Publishable Key.");
    countText.textContent = "Online storage not configured";
    return;
  }

  if (!window.supabase) {
    status("Supabase library unavailable. Check your internet connection.");
    return;
  }

  db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

  loadPhotos();
}

function publicPhotoURL(path) {
  const result = db.storage
    .from(BUCKET)
    .getPublicUrl(path);

  return result.data.publicUrl;
}

function showPhoto(url, title) {
  $("largePhoto").src = url;
  $("largeTitle").textContent = title || "My Photo";
  $("viewer").style.display = "flex";
}

function closePhoto() {
  $("viewer").style.display = "none";
  $("largePhoto").src = "";
}

function renderPhotos(rows) {
  gallery.replaceChildren();

  countText.textContent =
    rows.length + (rows.length === 1 ? " photo" : " photos");

  rows.forEach(photo => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.src = publicPhotoURL(photo.file_path);
    img.alt = photo.title || "Gallery photo";
    img.loading = "lazy";

    img.addEventListener("click", () => {
      showPhoto(img.src, photo.title);
    });

    img.addEventListener("error", () => {
      img.alt = "Photo unavailable";
    });

    const title = document.createElement("h3");
    title.textContent = photo.title || "My Photo";

    const description = document.createElement("p");
    description.textContent = photo.description || "";

    card.append(img, title, description);
    gallery.append(card);
  });
}

async function loadPhotos() {
  if (!db || isLoading) return;

  isLoading = true;
  refreshButton.disabled = true;
  status("Loading shared online photos...");

  try {
    const { data, error } = await db
      .from("gallery_photos")
      .select("id,title,description,file_path,created_at")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) throw error;

    renderPhotos(data || []);
    status("Gallery updated successfully.");
  } catch (error) {
    status("Could not load photos: " + error.message);
  } finally {
    isLoading = false;
    refreshButton.disabled = false;
  }
}

async function uploadPhotos() {
  if (!db) {
    status("Supabase setup is incomplete. Add the URL and key first.");
    return;
  }

  const files = Array.from(photoInput.files || [])
    .filter(file => file.type.startsWith("image/"));

  if (!files.length) {
    status("Please select at least one photo.");
    return;
  }

  if (files.some(file => file.size > 5 * 1024 * 1024)) {
    status("Each photo must be 5 MB or smaller.");
    return;
  }

  uploadButton.disabled = true;
  let uploaded = 0;
  const errors = [];

  try {
    for (const file of files) {
      status("Uploading " + file.name + "...");

      const safeName = file.name.replace(
        /[^a-zA-Z0-9._-]/g, "_"
      );

      const path =
        Date.now() + "-" +
        Math.random().toString(36).slice(2) +
        "-" + safeName;

      const { data: stored, error: storageError } =
        await db.storage
          .from(BUCKET)
          .upload(path, file, {
            contentType: file.type,
            upsert: false
          });

      if (storageError) {
        errors.push(file.name + ": " + storageError.message);
        continue;
      }

      const { error: rowError } = await db
        .from("gallery_photos")
        .insert({
          title: titleInput.value.trim() || file.name,
          description: descriptionInput.value.trim(),
          file_path: stored.path
        });

      if (rowError) {
        errors.push(file.name + ": " + rowError.message);

        // Remove the uploaded file if its database record failed.
        await db.storage.from(BUCKET).remove([stored.path]);
        continue;
      }

      uploaded++;
    }

    photoInput.value = "";
    titleInput.value = "";
    descriptionInput.value = "";

    await loadPhotos();

    if (errors.length) {
      status(
        uploaded + " photo(s) uploaded.\n" +
        "Some uploads failed:\n" + errors.join("\n")
      );
    } else {
      status(
        "Success! " + uploaded +
        " photo(s) added to the shared online gallery."
      );
    }
  } catch (error) {
    status("Upload failed: " + error.message);
  } finally {
    uploadButton.disabled = false;
  }
}

uploadButton.addEventListener("click", uploadPhotos);
refreshButton.addEventListener("click", loadPhotos);
$("closeViewer").addEventListener("click", closePhoto);

$("viewer").addEventListener("click", event => {
  if (event.target.id === "viewer") closePhoto();
});

initialize();
</script>

</body>
</html>
