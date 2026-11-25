const storekaItems = [
  {
    name: "Diagnosis Lovesick Türkçe Yama",
    description: "Diagnosis Lovesick'in PC 1.1 sürümü için Türkçe yama.",
    category: "patch",
    version: "v1.0",
    file: "Yamalar/Diagnosis-Lovesick-Turkce-Yama-v1.0.zip",
    image: "Gorseller/Diagnosis Lovesıck.photo.png",
    icon: "Gorseller/Diagnosis Lovesıck.photo2.png",
    status: "İndirilebilir",
    details: {
      gameVersion: "1.1",
      platform: "PC",
      requirements: "Python 3",
      installSteps: [
        "Oyunun PC 1.1 sürümünü indirip aç. İçinde game klasörü ve oyunun çalıştırıcısı bulunan klasör, oyunun ana klasörüdür.",
        "ZIP dosyasını aç. Yama klasörünün içindeki game klasörünü ve kur.py, kur.sh, kur.bat dosyalarını oyunun ana klasörüne kopyala. Klasörler birleşsin; dosyaların üzerine yazma sorulursa onayla.",
        "İşletim sistemine uygun kurulum betiğini çalıştır. Kurulum için Python 3 gerekir.",
        "Oyunu başlat. Türkçe açılmazsa Ayarlar (Preferences) içindeki Language / Dil bölümünden Türkçe'yi seç."
      ],
      installers: [
        "Linux: ./kur.sh",
        "Windows: kur.bat dosyasını çalıştır",
        "macOS: python3 kur.py"
      ],
      uninstall: "Orijinal dosyaları geri yüklemek için python3 kur.py --geri-al komutunu çalıştır. Ardından game/tl/turkish klasörünü ve game/turkce_ayar.rpy dosyasını silebilirsin.",
      support: "Bir çeviri hatasıyla karşılaşırsan, oyundaki yerini ve ekranda görünen metni not edip yama ekibiyle paylaş.",
      gameUrl: "https://ubaepeach.itch.io/diagnosis-lovesick",
      packageNote: "Bu, resmî olmayan bir hayran çevirisidir. ZIP dosyası oyunun kendisini içermez; oyunu ayrıca indirmen gerekir. Oyunun tüm hakları geliştiricisine aittir.",
      credits: "Orijinal oyun: ubaepeach. Türkçe çeviri ve menü düğmesi görselleri: Feizheng.",
      aiDisclosure: "Yama notlarına göre ana çeviri elle hazırlanmış; bazı metin düzeltmeleri ve menü düğmesi görselleri yapay zekâ desteğiyle yapılmış."
    }
  }
];

const grid = document.getElementById("store-grid");
const count = document.getElementById("item-count");
const filters = document.querySelectorAll(".filter-button");
const searchInput = document.getElementById("store-search");
const sortSelect = document.getElementById("store-sort");
let activeFilter = "all";

const detailModal = document.createElement("dialog");
detailModal.className = "store-modal";
detailModal.innerHTML = `
  <div class="store-modal-panel">
    <button class="modal-close" type="button" aria-label="Kapat">×</button>
    <div id="store-modal-content"></div>
  </div>
`;
document.body.appendChild(detailModal);

detailModal.querySelector(".modal-close").addEventListener("click", () => detailModal.close());
detailModal.addEventListener("click", event => {
  if (event.target === detailModal) detailModal.close();
});

function createItemCard(item) {
  const card = document.createElement("article");
  card.className = "app-card";
  card.dataset.category = item.category;

  const preview = item.image
    ? `<img class="app-cover" src="${item.image}" alt="${item.name}">`
    : `<div class="app-placeholder ${item.category === "patch" ? "patch-placeholder" : ""}" aria-hidden="true"><span>${item.category === "patch" ? "YAMA" : "APP"}</span></div>`;
  const icon = item.icon
    ? `<img src="${item.icon}" alt="">`
    : `<span>${item.category === "patch" ? "Y" : "A"}</span>`;

  const download = item.file
    ? `<a class="download-link" href="${item.file}" download>Dosyayı indir</a>`
    : `<button class="download-link" type="button" disabled>Dosya bekleniyor</button>`;

  card.innerHTML = `
    ${preview}
    <div class="app-info">
      <div class="app-icon ${item.category === "patch" ? "patch-icon" : "app-icon-default"}" aria-hidden="true">
        ${icon}
      </div>
      <div>
        <span class="item-type">${item.category === "patch" ? "Oyun yaması" : "Uygulama"}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    </div>
    <div class="card-footer">
      <span class="status"><i></i>${item.status}</span>
      <span class="version">${item.version}</span>
    </div>
    <div class="card-action">
      <button class="details-link" type="button">Detayları gör</button>
      ${download}
    </div>
  `;
  card.querySelector(".details-link").addEventListener("click", () => showDetails(item));
  return card;
}

function showDetails(item) {
  const content = document.getElementById("store-modal-content");
  const details = item.details;
  content.replaceChildren();

  const type = document.createElement("span");
  type.className = "item-type";
  type.textContent = item.category === "patch" ? "Oyun yaması" : "Uygulama";
  content.appendChild(type);

  const title = document.createElement("h2");
  title.id = "store-modal-title";
  title.textContent = item.name;
  content.appendChild(title);

  const description = document.createElement("p");
  description.textContent = item.description;
  content.appendChild(description);

  const metadata = document.createElement("dl");
  metadata.className = "detail-list";
  [
    ["Yama sürümü", item.version],
    ["Oyun sürümü", details ? `${details.platform} ${details.gameVersion}` : "Belirtilmedi"],
    ["Gereksinim", details?.requirements || "Belirtilmedi"]
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const valueElement = document.createElement("dd");
    term.textContent = label;
    valueElement.textContent = value;
    row.append(term, valueElement);
    metadata.appendChild(row);
  });
  content.appendChild(metadata);

  if (details) {
    const appendSection = (heading, body) => {
      const section = document.createElement("section");
      section.className = "detail-section";
      const sectionHeading = document.createElement("h3");
      sectionHeading.textContent = heading;
      section.appendChild(sectionHeading);
      if (Array.isArray(body)) {
        const list = document.createElement(heading === "Kurulum" ? "ol" : "ul");
        list.className = "detail-steps";
        body.forEach(text => {
          const itemElement = document.createElement("li");
          itemElement.textContent = text;
          list.appendChild(itemElement);
        });
        section.appendChild(list);
      } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = body;
        section.appendChild(paragraph);
      }
      content.appendChild(section);
    };

    appendSection("Kurulum", details.installSteps);
    appendSection("Kurulum betikleri", details.installers);
    appendSection("Yamayı kaldırma", details.uninstall);
    appendSection("Çeviriyle ilgili geri bildirim", details.support);

    const packageNote = document.createElement("p");
    packageNote.className = "detail-note";
    packageNote.textContent = details.packageNote;
    content.appendChild(packageNote);

    const credits = document.createElement("p");
    credits.className = "detail-credits";
    credits.textContent = details.credits;
    content.appendChild(credits);

    const disclosure = document.createElement("p");
    disclosure.className = "detail-note";
    disclosure.textContent = details.aiDisclosure;
    content.appendChild(disclosure);

    const source = document.createElement("a");
    source.className = "detail-source";
    source.href = details.gameUrl;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = "Oyunu itch.io'da görüntüle";
    content.appendChild(source);
  }

  const download = item.file
    ? document.createElement("a")
    : document.createElement("button");
  download.className = "download-link detail-download";
  download.textContent = item.file ? "Yamayı indir" : "Dosya bekleniyor";
  if (item.file) {
    download.href = item.file;
    download.download = "";
  } else {
    download.type = "button";
    download.disabled = true;
  }
  content.appendChild(download);
  detailModal.setAttribute("aria-labelledby", title.id);
  detailModal.showModal();
}

function renderItems(filter = activeFilter) {
  grid.innerHTML = "";
  const query = searchInput.value.trim().toLocaleLowerCase("tr");
  let visibleItems = storekaItems.filter(item =>
    (filter === "all" || item.category === filter) &&
    (item.name.toLocaleLowerCase("tr").includes(query) ||
     item.description.toLocaleLowerCase("tr").includes(query))
  );

  if (sortSelect.value === "az") {
    visibleItems = [...visibleItems].sort((a, b) => a.name.localeCompare(b.name, "tr"));
  } else if (sortSelect.value === "za") {
    visibleItems = [...visibleItems].sort((a, b) => b.name.localeCompare(a.name, "tr"));
  }

  visibleItems.forEach(item => grid.appendChild(createItemCard(item)));
  count.textContent = `${visibleItems.length} içerik`;
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderItems(button.dataset.filter);
  });
});

searchInput.addEventListener("input", () => renderItems());
sortSelect.addEventListener("change", () => renderItems());

renderItems();
