const quickAccessItems = [
  {
    title: "Payment Reference ID",
    description:
      "Nomor referensi pembayaran untuk memudahkan pencocokan transaksi dan bukti administrasi.",
    action: "Buka referensi",
    href: "https://drive.google.com",
  },
  {
    title: "Renewal Monitoring Mitra",
    description:
      "Ringkasan monitoring perpanjangan kerja sama sekolah, status follow-up, dan tenggat aksi.",
    action: "Lihat megasheet",
    href: "https://docs.google.com/spreadsheets/d/10HqRLqpnWL_l5LLt9AHIjDy_daLcxBOQk85o91DQRVM/edit?usp=sharing",
  },
  {
    title: "Change Request Form",
    description:
      "Form baku untuk mengajukan perubahan dokumen, jadwal, atau penyesuaian proses kerja.",
    action: "Unduh form",
    href: "pdf/3.pdf",
  },
  {
    title: "Project Completion Report",
    description:
      "Template laporan penyelesaian kegiatan dan evaluasi hasil implementasi administrasi.",
    action: "Unduh laporan",
    href: "pdf/5.pdf",
  },
  {
    title: "Digital Archive Structure",
    description:
      "Struktur arsip digital agar dokumen tersimpan konsisten, mudah dicari, dan siap audit.",
    action: "Buka struktur",
    href: "https://drive.google.com",
  },
  {
    title: "SOP Master Folder",
    description:
      "Pusat dokumen untuk menyatukan template, form, dan lampiran revisi versi terbaru.",
    action: "Akses folder",
    href: "https://drive.google.com/drive/folders/1lTP4EvStaBzpx6XyZP_fX5mjp5iFef0x",
  },
];

const resourceItems = [
  {
    title: "Tutorial Video",
    description:
      "Cuplikan video onboarding untuk menjelaskan alur SOP dan penggunaan template digital.",
    tag: "Video",
  },
  {
    title: "Panduan Implementasi SOP",
    description:
      "Langkah penerapan di unit administrasi pemasaran, termasuk pembagian tugas dan alur approval.",
    tag: "Guide",
  },
  {
    title: "Template Siap Pakai",
    description:
      "Kumpulan form kerja yang dapat langsung dipakai pada operasional harian.",
    tag: "Template",
  },
  {
    title: "FAQ Umum",
    description:
      "Jawaban cepat untuk pertanyaan staf non-teknis saat menjalankan SOP digital.",
    tag: "FAQ",
  },
  {
    title: "Dokumentasi Teknis",
    description:
      "Struktur folder, standar penamaan file, dan catatan pemeliharaan portal.",
    tag: "Technical",
  },
  {
    title: "User Guide",
    description:
      "Panduan navigasi portal untuk staf baru agar bisa menemukan SOP dan resource dengan cepat.",
    tag: "Guide",
  },
];

const sopData = [
  {
    id: "sop-1",
    number: "SOP 1",
    title: "Administrasi Pembayaran Program",
    shortTitle: "Pembayaran Program",
    description:
      "Mengatur alur penerimaan data pembayaran, verifikasi bukti transaksi, hingga pencatatan status pada administrasi pemasaran.",
    purpose:
      "Menjamin setiap pembayaran program tercatat, tervalidasi, dan dapat ditelusuri oleh tim administrasi serta finance.",
    scope:
      "Berlaku untuk penerimaan pembayaran program kursus, konfirmasi transfer, pengarsipan bukti, dan pembaruan status peserta.",
    parties: [
      "Staf Administrasi",
      "Finance",
      "Customer Service",
      "Koordinator Program",
    ],
    documents: [
      "Form Payment Reference ID",
      "Bukti Transfer",
      "Rekap Pembayaran Harian",
      "Invoice/Pemberitahuan",
    ],
    metadata: {
      documentNumber: "442/ROB/SOP/IV/2026",
      releaseDate: "15 Maret 2026",
      revisionDate: "01 April 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/1.pdf",
    steps: [
      {
        title: "Terima data pembayaran",
        activity:
          "Staf menerima identitas peserta dan nominal pembayaran dari kanal resmi.",
        document: "Form Payment Reference ID",
        responsible: "Staf Administrasi",
        output: "Nomor referensi pembayaran terbentuk.",
      },
      {
        title: "Verifikasi bukti transfer",
        activity: "Cek kesesuaian nominal, nama pengirim, dan waktu transaksi.",
        document: "Bukti Transfer + Rekap Harian",
        responsible: "Finance",
        output: "Status transaksi tervalidasi atau ditolak untuk perbaikan.",
        decision: {
          question: "Apakah bukti transfer valid?",
          description:
            "Gunakan keputusan ini untuk menentukan apakah proses lanjut ke pencatatan atau kembali ke klarifikasi.",
          yesLabel: "Ya, lanjut ke pencatatan",
          noLabel: "Tidak, minta klarifikasi",
          yesOutcome:
            "Lanjut ke tahap pencatatan status pembayaran dan konfirmasi peserta.",
          noOutcome:
            "Kembalikan ke peserta untuk perbaikan bukti atau nominal sebelum diproses.",
        },
      },
      {
        title: "Catat status pada sistem",
        activity:
          "Update status pembayaran pada log monitoring dan arsip digital.",
        document: "Database Monitoring Pembayaran",
        responsible: "Staf Administrasi",
        output: "Data peserta tersinkron dengan status pembayaran terbaru.",
      },
      {
        title: "Konfirmasi ke peserta",
        activity:
          "Berikan notifikasi resmi setelah pembayaran valid dan lengkap.",
        document: "Template Notifikasi Pembayaran",
        responsible: "Customer Service",
        output: "Peserta menerima konfirmasi dan bukti administrasi.",
      },
    ],
    faq: [
      {
        question: "Apa yang dilakukan jika nominal tidak sesuai?",
        answer:
          "Tandai sebagai pending, minta klarifikasi peserta, dan jangan ubah status sebelum data lengkap.",
      },
      {
        question: "Siapa yang berhak mengonfirmasi final?",
        answer:
          "Finance atau koordinator yang ditetapkan sebagai otorisator akhir.",
      },
    ],
    troubleshooting: [
      "Bukti transfer buram: minta unggahan ulang dengan resolusi yang lebih jelas.",
      "Data peserta belum ditemukan: cek nomor pendaftaran dan kanal komunikasi yang digunakan.",
    ],
    support:
      "PIC: Staf Administrasi Pemasaran | WhatsApp internal / email kantor",
  },
  {
    id: "sop-2",
    number: "SOP 2",
    title: "Pengarsipan Dokumen Digital",
    shortTitle: "Arsip Digital",
    description:
      "Mengelola penyimpanan, penamaan, dan klasifikasi dokumen agar arsip dapat dicari, diperbarui, dan diaudit dengan cepat.",
    purpose:
      "Menciptakan struktur arsip digital yang konsisten, aman, dan mudah dipahami oleh pengguna non-teknis.",
    scope:
      "Meliputi dokumen pembayaran, MoU, PKS, laporan, form change request, dan bukti kegiatan internal.",
    parties: ["Admin Arsip", "Koordinator Pemasaran", "Seluruh PIC SOP"],
    documents: [
      "Struktur Folder Digital",
      "Log Penamaan File",
      "Checklist Arsip",
      "Versi Dokumen",
    ],
    metadata: {
      documentNumber: "443/ROB/SOP/IV/2026",
      releaseDate: "17 Maret 2026",
      revisionDate: "01 April 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/2.pdf",
    steps: [
      {
        title: "Klasifikasikan dokumen",
        activity:
          "Pisahkan dokumen berdasarkan kategori, tahun, dan jenis kegiatan.",
        document: "Struktur Folder Digital",
        responsible: "Admin Arsip",
        output: "Dokumen masuk folder yang tepat.",
      },
      {
        title: "Beri nama file standar",
        activity:
          "Gunakan format nama yang seragam agar mudah dicari saat audit.",
        document: "Template Penamaan File",
        responsible: "Admin Arsip",
        output: "Nama file konsisten dan terstandardisasi.",
        decision: {
          question: "Apakah format nama file sudah sesuai standar?",
          description:
            "Keputusan ini memisahkan file yang siap disimpan dari file yang harus diperbaiki.",
          yesLabel: "Ya, simpan file",
          noLabel: "Tidak, perbaiki nama file",
          yesOutcome: "File dapat diunggah ke folder arsip final.",
          noOutcome: "File harus diubah dulu mengikuti pola penamaan baku.",
        },
      },
      {
        title: "Simpan dan proteksi akses",
        activity:
          "Unggah file ke folder shared drive dan atur hak akses sesuai kebutuhan.",
        document: "Folder Arsip Digital",
        responsible: "Koordinator Pemasaran",
        output: "File tersimpan aman dengan akses terkendali.",
      },
      {
        title: "Audit berkala",
        activity: "Periksa versi, duplikasi, dan kelengkapan metadata dokumen.",
        document: "Checklist Audit Arsip",
        responsible: "PIC Arsip Digital",
        output: "Arsip tetap bersih, rapi, dan siap digunakan.",
      },
    ],
    faq: [
      {
        question: "Bagaimana jika ada file duplikat?",
        answer:
          "Simpan versi final pada folder utama dan arsipkan versi lama di folder revision history.",
      },
      {
        question: "Siapa yang boleh mengubah struktur folder?",
        answer:
          "Hanya PIC arsip digital atau koordinator yang telah diberi otoritas.",
      },
    ],
    troubleshooting: [
      "File hilang: cek folder versi lama dan riwayat unggahan.",
      "Akses tertolak: validasi izin folder shared drive.",
    ],
    support: "PIC: Admin Arsip Digital | Internal chat / email support",
  },
  {
    id: "sop-3",
    number: "SOP 3",
    title: "Monitoring dan Pelaporan Status Kerja Sama Sekolah",
    shortTitle: "Monitoring Kerja Sama",
    description:
      "Memantau status kerja sama sekolah, jadwal tindak lanjut, dan pelaporan progres kepada manajemen secara berkala.",
    purpose:
      "Menjamin status hubungan kerja sama selalu terbarui sehingga tim dapat melakukan follow-up tepat waktu.",
    scope:
      "Meliputi monitoring renewal, status komunikasi, progres koordinasi, dan pelaporan hasil kunjungan/meeting.",
    parties: [
      "Staf Marketing",
      "Relationship Officer",
      "Koordinator Cabang",
      "Manajemen",
    ],
    documents: [
      "Renewal Monitoring Dashboard",
      "Laporan Follow-Up",
      "Notulen Meeting",
      "Daftar Mitra Sekolah",
    ],
    metadata: {
      documentNumber: "444/ROB/SOP/IV/2026",
      releaseDate: "05 Juli 2026",
      revisionDate: "18 Juli 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/3.pdf",
    steps: [
      {
        title: "Update status sekolah",
        activity:
          "Perbarui data kerja sama berdasarkan aktivitas terbaru dan tenggat yang tersedia.",
        document: "Renewal Monitoring Dashboard",
        responsible: "Staf Marketing",
        output: "Status kerja sama selalu up to date.",
      },
      {
        title: "Susun agenda follow-up",
        activity:
          "Tentukan sekolah yang perlu dihubungi, jadwal, dan topik pembahasan.",
        document: "Daftar Follow-Up",
        responsible: "Relationship Officer",
        output: "Prioritas tindak lanjut terbentuk.",
        decision: {
          question: "Apakah sekolah prioritas sudah ditentukan?",
          description:
            "Cabang ini dipakai untuk menentukan apakah jadwal follow-up bisa dikunci atau harus dikaji ulang.",
          yesLabel: "Ya, lanjut jadwalkan",
          noLabel: "Tidak, review prioritas",
          yesOutcome: "Masuk ke jadwal follow-up resmi dan pelaporan mingguan.",
          noOutcome:
            "Kembali ke penilaian prioritas kerja sama sebelum dijadwalkan.",
        },
      },
      {
        title: "Buat laporan mingguan",
        activity:
          "Rangkum status, hambatan, dan aksi yang sudah dilakukan untuk manajemen.",
        document: "Laporan Monitoring Mingguan",
        responsible: "Koordinator Cabang",
        output: "Manajemen menerima insight status kerja sama.",
      },
      {
        title: "Tindak lanjut keputusan",
        activity:
          "Implementasikan arahan hasil pelaporan ke aktivitas marketing berikutnya.",
        document: "Action Plan Kerja Sama",
        responsible: "Manajemen",
        output: "Aksi lanjutan terdokumentasi dan terkontrol.",
      },
    ],
    faq: [
      {
        question: "Kapan dashboard harus diperbarui?",
        answer:
          "Minimal setiap ada aktivitas baru dan wajib direkap pada periode pelaporan yang ditetapkan.",
      },
      {
        question: "Apakah sekolah yang pasif tetap dicatat?",
        answer:
          "Ya, tetap dicatat agar history hubungan kerja sama tetap utuh.",
      },
    ],
    troubleshooting: [
      "Data sekolah tidak lengkap: lengkapi identitas institusi sebelum membuat laporan.",
      "Status overlap: cek kembali catatan follow-up terakhir dan periode laporan.",
    ],
    support: "PIC: Relationship Officer | Koordinator Cabang Bandung",
  },
  {
    id: "sop-4",
    number: "SOP 4",
    title: "Pengelolaan MoU dan PKS",
    shortTitle: "MoU & PKS",
    description:
      "Mengelola draft, review, penandatanganan, dan penyimpanan MoU serta PKS secara digital dan terstruktur.",
    purpose:
      "Menjaga proses administrasi kerja sama formal berjalan tertib, terdokumentasi, dan siap ditelusuri kembali.",
    scope:
      "Meliputi permintaan dokumen, peninjauan isi, validasi otorisasi, tanda tangan, dan pengarsipan final.",
    parties: [
      "Admin Legal/Administrasi",
      "Pimpinan Cabang",
      "Mitra Sekolah",
      "Koordinator Pemasaran",
    ],
    documents: [
      "Draft MoU",
      "Draft PKS",
      "Checklist Review",
      "File Signed Agreement",
    ],
    metadata: {
      documentNumber: "445/ROB/SOP/IV/2026",
      releaseDate: "15 Maret 2026",
      revisionDate: "01 Juli 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/4.pdf",
    steps: [
      {
        title: "Siapkan draft awal",
        activity:
          "Ambil template dokumen dan sesuaikan data mitra, ruang lingkup, dan periode kerja sama.",
        document: "Draft MoU/PKS",
        responsible: "Admin Legal/Administrasi",
        output: "Dokumen awal siap direview.",
      },
      {
        title: "Review isi dokumen",
        activity:
          "Periksa kesesuaian pasal, identitas pihak, dan lampiran pendukung.",
        document: "Checklist Review",
        responsible: "Koordinator Pemasaran",
        output: "Catatan revisi terdokumentasi.",
        decision: {
          question: "Apakah isi dokumen sudah sesuai?",
          description:
            "Keputusan ini menentukan apakah dokumen siap diajukan ke pimpinan atau perlu revisi.",
          yesLabel: "Ya, lanjut approval",
          noLabel: "Tidak, revisi dulu",
          yesOutcome: "Dokumen masuk tahap persetujuan pimpinan.",
          noOutcome:
            "Dokumen dikembalikan untuk perbaikan pasal atau lampiran.",
        },
      },
      {
        title: "Minta persetujuan",
        activity:
          "Ajukan dokumen ke pimpinan untuk validasi final sebelum penandatanganan.",
        document: "Approval Form",
        responsible: "Pimpinan Cabang",
        output: "Dokumen mendapat status approved.",
      },
      {
        title: "Arsipkan dokumen signed",
        activity:
          "Simpan versi final bertanda tangan pada folder arsip resmi dan update metadata.",
        document: "File Signed Agreement",
        responsible: "Admin Legal/Administrasi",
        output: "MoU/PKS final tersimpan dan mudah dicari.",
      },
    ],
    faq: [
      {
        question: "Apakah draft boleh diedit setelah review?",
        answer:
          "Ya, tetapi setiap perubahan harus masuk revision history dan dicatat sebagai versi baru.",
      },
      {
        question: "Apa bukti bahwa dokumen sudah final?",
        answer:
          "Versi signed dengan metadata final dan status signed pada portal.",
      },
    ],
    troubleshooting: [
      "Lampiran tidak lengkap: cek checklist sebelum diajukan ke pimpinan.",
      "Nomor dokumen ganda: gunakan pola penomoran baku di metadata.",
    ],
    support: "PIC: Admin Legal/Administrasi | Koordinator Cabang",
  },
  {
    id: "sop-5",
    number: "SOP 5",
    title: "Koordinasi Administrasi Program dan Pengajuan RAB Kegiatan Sekolah",
    shortTitle: "Koordinasi Program & RAB",
    description:
      "Mengatur koordinasi internal, permintaan dokumen program, dan pengajuan RAB kegiatan sekolah secara sistematis.",
    purpose:
      "Menjamin semua pengajuan kegiatan memiliki dasar administrasi yang jelas, terverifikasi, dan sesuai alur approval.",
    scope:
      "Meliputi koordinasi program, input kebutuhan kegiatan, penyusunan RAB, review biaya, dan pengarsipan persetujuan.",
    parties: [
      "Staf Program",
      "Admin Administrasi",
      "Keuangan",
      "Koordinator Cabang",
      "PIC Sekolah",
    ],
    documents: [
      "Form Pengajuan RAB",
      "Daftar Kebutuhan Program",
      "Checklist Persetujuan",
      "Project Completion Report",
    ],
    metadata: {
      documentNumber: "446/ROB/SOP/IV/2026",
      releaseDate: "30 Maret 2026",
      revisionDate: "01 Juli 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/5.pdf",
    steps: [
      {
        title: "Kumpulkan kebutuhan program",
        activity:
          "Terima data kebutuhan kegiatan dari PIC sekolah atau tim program.",
        document: "Daftar Kebutuhan Program",
        responsible: "Staf Program",
        output: "Kebutuhan kegiatan terdokumentasi.",
      },
      {
        title: "Susun RAB kegiatan",
        activity:
          "Hitung estimasi biaya, lampirkan asumsi, dan siapkan dokumen pengajuan.",
        document: "Form Pengajuan RAB",
        responsible: "Admin Administrasi",
        output: "Draft RAB siap ditinjau.",
        decision: {
          question: "Apakah estimasi biaya sesuai anggaran?",
          description:
            "Cabang ini memutuskan apakah RAB bisa diteruskan atau harus dikoreksi.",
          yesLabel: "Ya, lanjut review",
          noLabel: "Tidak, revisi biaya",
          yesOutcome: "RAB diteruskan ke tahap review keuangan.",
          noOutcome: "RAB kembali ke tim program untuk penyesuaian item biaya.",
        },
      },
      {
        title: "Review dan persetujuan",
        activity:
          "Periksa kewajaran biaya dan kesesuaian dengan target program.",
        document: "Checklist Persetujuan",
        responsible: "Keuangan",
        output: "RAB disetujui atau dikembalikan untuk revisi.",
      },
      {
        title: "Arsipkan laporan akhir",
        activity:
          "Simpan dokumen final beserta project completion report setelah kegiatan selesai.",
        document: "Project Completion Report",
        responsible: "Koordinator Cabang",
        output: "Dokumentasi program lengkap untuk evaluasi dan audit.",
      },
    ],
    faq: [
      {
        question: "Apa yang harus dilakukan jika biaya melebihi anggaran?",
        answer:
          "Kembalikan ke tahap revisi dan sesuaikan item biaya sebelum pengajuan ulang.",
      },
      {
        question: "Dokumen apa yang wajib diarsipkan setelah program selesai?",
        answer:
          "RAB final, checklist persetujuan, dan project completion report.",
      },
    ],
    troubleshooting: [
      "RAB belum lengkap: cek seluruh komponen biaya dan lampiran pendukung.",
      "Approval lambat: pastikan dokumen sudah masuk antrian review yang benar.",
    ],
    support: "PIC: Koordinator Program | Admin Administrasi | Keuangan",
  },
];

function slugLabel(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderQuickAccess() {
  const container = document.getElementById("quickAccessGrid");
  container.innerHTML = quickAccessItems
    .map(
      (item) => `
        <article class="resource-card quick-card">
          <span class="resource-tag">Quick Access</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <a class="button ghost small" href="${item.href}" target="_blank" rel="noreferrer">${escapeHtml(item.action)}</a>
        </article>
      `,
    )
    .join("");
}

function renderResources() {
  const container = document.getElementById("resourceGrid");
  container.innerHTML = resourceItems
    .map(
      (item) => `
        <article class="resource-card">
          <span class="resource-tag">${escapeHtml(item.tag)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `,
    )
    .join("");
}

function renderCatalog() {
  const container = document.getElementById("sopCatalog");
  container.innerHTML = sopData
    .map(
      (sop) => `
        <article class="catalog-card">
          <div class="catalog-head">
            <span>${escapeHtml(sop.number)}</span>
            <a class="catalog-link" href="${sop.id}.html">Buka halaman</a>
          </div>
          <h3>${escapeHtml(sop.title)}</h3>
          <p>${escapeHtml(sop.description)}</p>
          <div class="catalog-foot">
            <span>${escapeHtml(sop.metadata.documentNumber)}</span>
            <span>${escapeHtml(sop.shortTitle)}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFlowchartDetail(
  step,
  index,
  totalSteps,
  selectedDecision = null,
  sopId = "",
) {
  const nextIndex = index + 1 < totalSteps ? index + 1 : index;
  const previousIndex = index > 0 ? index - 1 : 0;
  const hasDecision = Boolean(step.decision);

  return `
    <div class="flow-detail-head">
      <span class="flow-step-index">Langkah ${index + 1}</span>
      <h4>${escapeHtml(step.title)}</h4>
    </div>
    <p class="flow-activity">${escapeHtml(step.activity)}</p>
    <dl class="detail-matrix">
      <div>
        <dt>Dokumen/Form</dt>
        <dd>${escapeHtml(step.document)}</dd>
      </div>
      <div>
        <dt>Penanggung Jawab</dt>
        <dd>${escapeHtml(step.responsible)}</dd>
      </div>
      <div>
        <dt>Output</dt>
        <dd>${escapeHtml(step.output)}</dd>
      </div>
    </dl>
    ${
      hasDecision
        ? `
          <div class="decision-box">
            <span class="resource-tag">If / Else</span>
            <h5>${escapeHtml(step.decision.question)}</h5>
            <p>${escapeHtml(step.decision.description)}</p>
            <div class="decision-actions">
              <button class="button secondary small flow-decision" type="button" data-flow-decision="yes" onclick="setActiveFlowStep('${sopId}', ${index}, 'yes')">${escapeHtml(step.decision.yesLabel)}</button>
              <button class="button primary small flow-decision" type="button" data-flow-decision="no" onclick="setActiveFlowStep('${sopId}', ${index}, 'no')">${escapeHtml(step.decision.noLabel)}</button>
            </div>
            <div class="decision-output">
                <div class="${selectedDecision === "yes" ? "selected" : ""}">
                <strong>Cabang Ya</strong>
                <p>${escapeHtml(step.decision.yesOutcome)}</p>
              </div>
                <div class="${selectedDecision === "no" ? "selected" : ""}">
                <strong>Cabang Tidak</strong>
                <p>${escapeHtml(step.decision.noOutcome)}</p>
              </div>
            </div>
          </div>
        `
        : ""
    }
    <div class="flow-actions">
      <button class="button secondary small flow-nav" type="button" data-flow-target="${previousIndex}" onclick="setActiveFlowStep('${sopId}', ${previousIndex})">Langkah sebelumnya</button>
      <button class="button primary small flow-nav" type="button" data-flow-target="${nextIndex}" onclick="setActiveFlowStep('${sopId}', ${nextIndex})">Langkah berikutnya</button>
    </div>
  `;
}

function renderSopPage(sopId) {
  const sop = sopData.find((entry) => entry.id === sopId) || sopData[0];
  const container = document.getElementById("pageRoot");
  if (!container || !sop) {
    return;
  }

  const stepButtons = sop.steps
    .map(
      (step, index) => `
        <button class="flow-step ${index === 0 ? "active" : ""}" type="button" data-sop-id="${sop.id}" data-step-index="${index}" onclick="setActiveFlowStep('${sop.id}', ${index})">
          <span>${index + 1}</span>
          <strong>${escapeHtml(step.title)}</strong>
        </button>
      `,
    )
    .join("");

  const faqItems = sop.faq
    .map(
      (item) => `
        <details>
          <summary>${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `,
    )
    .join("");

  const troubleItems = sop.troubleshooting
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const partyItems = sop.parties
    .map((party) => `<li>${escapeHtml(party)}</li>`)
    .join("");
  const documentItems = sop.documents
    .map((doc) => `<li>${escapeHtml(doc)}</li>`)
    .join("");
  const stepIndex = Number(container.dataset.activeStep || 0);

  container.innerHTML = `
    <section id="${sop.id}" class="panel sop-page" data-sop-page="${sop.id}">
      <div class="page-header">
        <div>
          <span class="section-label">${escapeHtml(sop.number)}</span>
          <h2>${escapeHtml(sop.title)}</h2>
          <p>${escapeHtml(sop.description)}</p>
        </div>
        <div class="page-badge">${escapeHtml(sop.metadata.documentNumber)}</div>
      </div>

      <div class="breadcrumb-row">
        <a class="button ghost small" href="index.html">Kembali ke Dashboard</a>
        <div class="breadcrumb-links">
          ${sopData
            .map(
              (entry) =>
                `<a class="breadcrumb-chip ${entry.id === sop.id ? "active" : ""}" href="${entry.id}.html">${escapeHtml(entry.number)}</a>`,
            )
            .join("")}
        </div>
      </div>

      <div class="metadata-strip">
        <article>
          <span>Nomor Dokumen</span>
          <strong>${escapeHtml(sop.metadata.documentNumber)}</strong>
        </article>
        <article>
          <span>Tanggal Terbit</span>
          <strong>${escapeHtml(sop.metadata.releaseDate)}</strong>
        </article>
        <article>
          <span>Tanggal Revisi</span>
          <strong>${escapeHtml(sop.metadata.revisionDate)}</strong>
        </article>
        <article>
          <span>Penanggung Jawab</span>
          <strong>${escapeHtml(sop.metadata.owner)}</strong>
        </article>
      </div>

      <div class="sop-layout">
        <article class="sop-copy">
          <div class="card-heading">
            <span class="card-kicker">Deskripsi SOP</span>
            <h3>Ringkasan operasional</h3>
          </div>
          <p>${escapeHtml(sop.purpose)}</p>
          <h4>Tujuan SOP</h4>
          <p>${escapeHtml(sop.purpose)}</p>
          <h4>Ruang Lingkup</h4>
          <p>${escapeHtml(sop.scope)}</p>

          <div class="list-grid">
            <div>
              <h4>Pihak yang Terlibat</h4>
              <ul>${partyItems}</ul>
            </div>
            <div>
              <h4>Dokumen Pendukung</h4>
              <ul>${documentItems}</ul>
            </div>
          </div>

          <div class="template-actions">
            <a class="button primary" href="${sop.templatePdf}" target="_blank" rel="noreferrer">Download template/form</a>
            <a class="button secondary" href="https://drive.google.com" target="_blank" rel="noreferrer">Open template folder</a>
          </div>

          <div class="support-box">
            <span>PIC dan kontak support</span>
            <strong>${escapeHtml(sop.support)}</strong>
          </div>
        </article>

        <article class="flowchart-card">
          <div class="card-heading">
            <span class="card-kicker">Flowchart Interaktif</span>
            <h3>Alur proses dan cabang keputusan</h3>
          </div>
          <div class="flowchart-visual">
            <div class="flow-start">Start</div>
            <div class="flow-line"></div>
            <div class="flow-node-grid">
              ${stepButtons}
            </div>
          </div>
          <div class="flowchart-detail" data-flow-detail="${sop.id}" data-active-step="${stepIndex}">${renderFlowchartDetail(
            sop.steps[stepIndex] || sop.steps[0],
            stepIndex,
            sop.steps.length,
            null,
            sop.id,
          )}</div>
        </article>
      </div>

      <div class="sop-bottom-grid">
        <article class="info-panel">
          <div class="card-heading">
            <span class="card-kicker">FAQ</span>
            <h3>Pertanyaan umum</h3>
          </div>
          <div class="faq-list">${faqItems}</div>
        </article>

        <article class="info-panel">
          <div class="card-heading">
            <span class="card-kicker">Troubleshooting</span>
            <h3>Masalah yang sering muncul</h3>
          </div>
          <ul class="bullet-list">${troubleItems}</ul>
        </article>

        <article class="info-panel preview-panel">
          <div class="card-heading">
            <span class="card-kicker">Preview Template</span>
            <h3>Dokumen referensi</h3>
          </div>
          <iframe src="${sop.templatePdf}" loading="lazy" title="Preview ${escapeHtml(sop.title)}"></iframe>
        </article>
      </div>
    </section>
  `;

  bindFlowchartInteractions(sop.id);
}

function setActiveFlowStep(sopId, stepIndex, selectedDecision = null) {
  const sop = sopData.find((entry) => entry.id === sopId);
  if (!sop) {
    return;
  }

  const flowContainer = document.querySelector(`[data-flow-detail="${sopId}"]`);
  const stepButtons = document.querySelectorAll(`[data-sop-id="${sopId}"]`);
  const selectedStep = sop.steps[stepIndex];

  if (!flowContainer || !selectedStep) {
    return;
  }

  flowContainer.dataset.activeStep = String(stepIndex);
  flowContainer.dataset.activeDecision = selectedDecision || "";
  flowContainer.innerHTML = renderFlowchartDetail(
    selectedStep,
    stepIndex,
    sop.steps.length,
    selectedDecision,
    sopId,
  );
  stepButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      Number(button.dataset.stepIndex) === stepIndex,
    );
  });

  flowContainer.querySelectorAll(".flow-nav").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFlowStep(sopId, Number(button.dataset.flowTarget));
    });
  });

  flowContainer.querySelectorAll(".flow-decision").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFlowStep(sopId, stepIndex, button.dataset.flowDecision);
    });
  });
}

function bindFlowchartInteractions(sopId) {
  const container = document.querySelector(`[data-flowchart="${sopId}"]`);
  if (!container) {
    return;
  }

  container.querySelectorAll(".flow-step").forEach((stepButton) => {
    stepButton.addEventListener("click", () => {
      setActiveFlowStep(
        stepButton.dataset.sopId,
        Number(stepButton.dataset.stepIndex),
      );
    });
  });
}

function renderDashboard() {
  renderQuickAccess();
  renderResources();
  renderCatalog();
}

function bindNavigation() {
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      menuButton.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      if (mainNav) {
        mainNav.classList.remove("open");
      }
      if (menuButton) {
        menuButton.classList.remove("active");
      }
    });
  });
}

function scrollToHashTarget() {
  const hashId = window.location.hash.replace("#", "");
  if (!hashId) {
    return;
  }

  const target = document.getElementById(hashId);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

function initializeApp() {
  const pageType = document.body.dataset.pageType || "dashboard";

  if (pageType === "sop") {
    renderSopPage(document.body.dataset.sopId || "sop-1");
  } else {
    renderDashboard();
  }

  bindNavigation();
  scrollToHashTarget();

  window.addEventListener("hashchange", scrollToHashTarget);
}

initializeApp();
