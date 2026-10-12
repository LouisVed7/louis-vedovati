// ---- Menu mobile + sous-menus ----
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
}
document.querySelectorAll(".nav-trigger").forEach(btn => {
  btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
});

// ---- Galeries + lightbox ----
const gallery = document.querySelector("[data-gallery]");
if (gallery && typeof GALLERIES !== "undefined") {
  const items = GALLERIES[gallery.dataset.gallery] || [];
  let current = 0;

  const dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.setAttribute("aria-label", "Visionneuse de photos");
  dlg.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Fermer">×</button>
    <button class="lb-btn lb-prev" aria-label="Photo précédente">‹</button>
    <button class="lb-btn lb-next" aria-label="Photo suivante">›</button>
    <div class="lb-inner"><img alt=""><div class="lb-caption"></div></div>`;
  document.body.appendChild(dlg);
  const big = dlg.querySelector("img");
  const cap = dlg.querySelector(".lb-caption");

  const show = i => {
    current = (i + items.length) % items.length;
    const [fichier, legende, alt] = items[current];
    big.src = src(fichier);
    big.alt = alt || legende;
    cap.textContent = legende;
  };

  items.forEach(([fichier, legende, alt], i) => {
  const texteAlt = alt || legende;
  const fig = document.createElement("figure");
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("aria-label", texteAlt ? `Agrandir : ${texteAlt}` : "Agrandir la photo");
  const img = document.createElement("img");
  img.src = src(fichier);
  img.alt = texteAlt;
  img.loading = "lazy";
  b.appendChild(img);
  b.addEventListener("click", () => { show(i); dlg.showModal(); });
  fig.appendChild(b);
  gallery.appendChild(fig);
  if (gallery.dataset.breakAfter && i + 1 === Number(gallery.dataset.breakAfter)) {
  const saut = document.createElement("div");
  saut.className = "gallery-break";
  gallery.appendChild(saut);
  }
});

  dlg.querySelector(".lb-close").addEventListener("click", () => dlg.close());
  dlg.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
  dlg.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
  dlg.addEventListener("click", e => { if (e.target === dlg || e.target.classList.contains("lb-inner")) dlg.close(); });
  dlg.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}

// ---- Formulaire de contact (Formspree) ----
const form = document.querySelector("#contact-form");
if (form) {
  const status = document.querySelector(".form-status");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    status.textContent = "Envoi en cours…";
    try {
      const res = await fetch(form.action, {
        method: "POST", body: new FormData(form), headers: { Accept: "application/json" }
      });
      if (res.ok) { form.reset(); status.textContent = "Merci pour ce que vous avez envoyé !"; }
      else { status.textContent = "Le message n'a pas pu être envoyé. Écrivez-moi à louisvedovati.lv@gmail.com."; }
    } catch {
      status.textContent = "Le message n'a pas pu être envoyé. Écrivez-moi à louisvedovati.lv@gmail.com.";
    }
  });
}
