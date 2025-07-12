/*
// Show the home section by default
function showSection(sectionId, link) {
    // Hide all main sections
    const sections = [
        'home', 'about', 'blog', 'contact', 'blog-detail',
        'feature', 'support', 'community', 'help', 'press',
        'partners', 'careers', 'tech-help', 'browse-faqs'
    ];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // Show the selected section
    const target = document.getElementById(sectionId);
    if (target) target.style.display = '';

    // Navbar active state: highlight all links pointing to this section
    document.querySelectorAll('.navbar-nav .nav-link').forEach(nav => {
        // Remove active from all
        nav.classList.remove('active');
        // Add active if this link points to the current section
        if (nav.getAttribute('onclick') && nav.getAttribute('onclick').includes(`'${sectionId}'`)) {
            nav.classList.add('active');
        }
    });
}
*/

let previousSection = null;

function showSection(targetId, fromSection = null) {
    // List all main section IDs here
    const mainSections = [
        'home', 'about', 'blog', 'contact', 'blog-detail',
        'feature', 'support', 'community', 'help', 'press',
        'partners', 'careers', 'tech-help', 'browse-faqs',
        'forum', 'privacy', 'cookie', 'terms',
        'color-palette', 'gradient-generator', 'border-radius', 'clip-path', 'typography-scale',
        'box-shadow', 'flexbox-playground', 'grid-layout', 'box-model',
        'unit-converter', 'regex-tester', 'minify-tools', 'lorem-ipsum', 'seo-meta',
    ];
    mainSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // Show the target section
    const target = document.getElementById(targetId);
    if (target) target.style.display = 'block';

    // Navbar active state: highlight all links pointing to this section
    document.querySelectorAll('.navbar-nav .nav-link').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('onclick') && nav.getAttribute('onclick').includes(`'${targetId}'`)) {
            nav.classList.add('active');
        }
    });

    // Store the previous section if navigating to browse-faqs
    if (targetId === 'browse-faqs' && fromSection) {
        previousSection = fromSection;
        const backBtn = document.getElementById('back-to-previous');
        backBtn.onclick = () => showSection(previousSection);
    }
    
    // Always scroll to top when switching section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fadeInBlogCards() {
    const cards = document.querySelectorAll('.blog-card, .featured-post');
    cards.forEach(card => {
        card.classList.add('opacity-0');
        setTimeout(() => {
            card.classList.add('opacity-100', 'transition-opacity');
        }, 100);
    });
}
document.addEventListener('DOMContentLoaded', fadeInBlogCards);

function showBlogDetail(postId) {
    let content = '';
    if (postId === 'featured') {
        content = `
            <article role="article" aria-labelledby="post-title" class="py-4 border-bottom">
                <!-- Header -->
                <header class="mb-4 border-bottom pb-3">
                    <h2 id="post-title" class="fw-bold fs-3 mb-2">Maximizing Productivity with DevBlue Hub</h2>
                    <p class="text-muted small mb-0">
                        <strong class="text-dark">By Jane Doe</strong> &nbsp;|&nbsp;
                        <time datetime="2025-07-05">Jul 5, 2025</time> • 5 min read
                    </p>
                </header>

                <!-- Featured Image -->
                <figure class="my-4 text-center">
                    <img src="assets/images/featured-image.jpg" class="img-fluid rounded shadow-sm" alt="Dashboard of DevBlue Hub productivity tools">
                    <figcaption class="text-muted small mt-2">DevBlue Hub's unified developer dashboard</figcaption>
                </figure>

                <!-- Content Body -->
                <section class="content-body fs-6 lh-lg text-secondary">
                    <p>DevBlue Hub streamlines your development workflow with powerful integrations, automated pipelines, and real-time collaboration. In this post, we explore the key features and how to leverage them for peak productivity.</p>

                    <hr class="my-4">

                    <h3 class="fs-5 fw-semibold mt-4">🚀 Key Features Overview</h3>
                    <ul class="mb-4">
                        <li>Command-line automation with intuitive CLI tools</li>
                        <li>Customizable productivity dashboards</li>
                        <li>Real-time team collaboration and notifications</li>
                        <li>CI/CD pipelines with rollback and preview environments</li>
                    </ul>

                    <h3 class="fs-5 fw-semibold mt-4">📊 Real-World Impact</h3>
                    <p>Teams using DevBlue Hub have reported up to <strong>40% faster deployment times</strong> and improved cross-functional visibility. The platform’s modular design allows seamless integration with GitHub, Slack, and Jira.</p>

                    <blockquote class="blockquote border-start ps-3 my-4">
                        <p class="mb-0 fst-italic">"DevBlue Hub helped our team cut deployment time nearly in half while improving collaboration."</p>
                        <footer class="blockquote-footer mt-2">A DevOps Lead at TechNova</footer>
                    </blockquote>

                    <h3 class="fs-5 fw-semibold mt-4">🛠️ Getting Started</h3>
                    <p>To get started, sign in with your GitHub account and connect your repositories. DevBlue Hub will auto-detect your stack and suggest optimized workflows tailored to your project type.</p>

                    <div class="mt-5 pt-4 border-top">
                        <a href="#" class="btn btn-outline-primary btn-sm" onclick="showSection('feature', this)">Explore DevBlue Features</a>
                        <a href="#" class="btn btn-link btn-sm text-decoration-none" onclick="showSection('blog', this)">← Back to Blog</a>
                    </div>
                </section>
            </article>
        `;
    } else if (postId === 'post1') {
        content = `
            <article role="article" aria-labelledby="post-title" class="py-4 border-bottom">
                <!-- Header -->
                <header class="mb-4 border-bottom pb-3">
                    <h2 id="post-title" class="fw-bold fs-3 mb-2">Latest Features Released</h2>
                    <p class="text-muted small mb-0">
                        <strong class="text-dark">By John Smith</strong> &nbsp;|&nbsp;
                        <time datetime="2025-07-01">Jul 1, 2025</time> • 3 min read
                    </p>
                </header>

                <!-- Featured Image -->
                <figure class="my-4 text-center">
                    <img src="assets/images/thumb1.avif" class="img-fluid rounded shadow-sm" alt="Productivity article thumbnail">
                    <figcaption class="text-muted small mt-2">A glimpse at the new productivity tools in action</figcaption>
                </figure>

                <!-- Content Body -->
                <section class="content-body fs-6 lh-lg text-secondary">
                    <p>We’re excited to announce the latest set of features designed to supercharge your workflow. From enhanced integrations to smarter automation, these updates are built to help you move faster and collaborate better.</p>

                    <hr class="my-4">

                    <h3 class="fs-5 fw-semibold mt-4">🆕 What's New</h3>
                    <ul class="mb-4">
                        <li>One-click GitHub Actions setup with prebuilt templates</li>
                        <li>Real-time team activity feed with smart filters</li>
                        <li>Dark mode toggle with system preference detection</li>
                        <li>Improved mobile responsiveness for dashboards</li>
                    </ul>

                    <h3 class="fs-5 fw-semibold mt-4">📈 Why It Matters</h3>
                    <p>These features are designed to reduce setup time, improve visibility across teams, and make your daily tools more intuitive. Whether you're deploying code or reviewing pull requests, everything now feels faster and more connected.</p>

                    <blockquote class="blockquote border-start ps-3 my-4">
                        <p class="mb-0 fst-italic">"The new GitHub integration saved us hours of manual setup. It’s a game-changer."</p>
                        <footer class="blockquote-footer mt-2">Frontend Engineer at CodeCraft</footer>
                    </blockquote>

                    <div class="mt-5 pt-4 border-top">
                        <a href="https://kinsta.com/changelog/" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">
                            View Full Changelog
                        </a>
                        <a href="#" class="btn btn-link btn-sm text-decoration-none" onclick="showSection('blog')">← Back to Blog</a>
                    </div>
                </section>
            </article>
        `;
    } else if (postId === 'post2') {
        content = `
            <article role="article" aria-labelledby="post-title" class="py-4 border-bottom">
                <!-- Header -->
                <header class="mb-4 border-bottom pb-3">
                    <h2 id="post-title" class="fw-bold fs-3 mb-2">DevOps Best Practices</h2>
                    <p class="text-muted small mb-0">
                        <strong class="text-dark">By Alice Johnson</strong> &nbsp;|&nbsp;
                        <time datetime="2025-06-28">Jun 28, 2025</time> • 4 min read
                    </p>
                </header>

                <!-- Featured Image -->
                <figure class="my-4 text-center">
                    <img src="assets/images/thumb2.png" class="img-fluid rounded shadow-sm" alt="DevOps article thumbnail">
                    <figcaption class="text-muted small mt-2">Streamlining DevOps workflows with modern tools</figcaption>
                </figure>

                <!-- Content Body -->
                <section class="content-body fs-6 lh-lg text-secondary">
                    <p>DevOps is more than just automation—it's about creating a culture of collaboration, continuous improvement, and rapid delivery. In this article, we’ll walk through best practices that high-performing teams use to stay ahead.</p>

                    <hr class="my-4">

                    <h3 class="fs-5 fw-semibold mt-4">🔧 Core DevOps Principles</h3>
                    <ul class="mb-4">
                        <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
                        <li>Infrastructure as Code (IaC)</li>
                        <li>Automated testing and rollback strategies</li>
                        <li>Monitoring and observability from day one</li>
                    </ul>

                    <h3 class="fs-5 fw-semibold mt-4">🤝 Collaboration & Culture</h3>
                    <p>DevOps thrives when developers, operations, and QA work together. Encourage shared ownership, transparent communication, and regular retrospectives to keep your team aligned and agile.</p>

                    <blockquote class="blockquote border-start ps-3 my-4">
                        <p class="mb-0 fst-italic">"Adopting DevOps practices helped us ship faster and recover from failures more gracefully."</p>
                        <footer class="blockquote-footer mt-2">Site Reliability Engineer at CloudForge</footer>
                    </blockquote>

                    <div class="mt-5 pt-4 border-top">
                        <a href="https://kinsta.com/blog/devops-tools/" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">
                            Explore DevOps Tools
                        </a>
                        <a href="#" class="btn btn-link btn-sm text-decoration-none" onclick="showSection('blog')">← Back to Blog</a>
                    </div>
                </section>
            </article>
        `;
    } else if (postId === 'post3') {
        content = `
            <article role="article" aria-labelledby="post-title" class="py-4 border-bottom">
                <!-- Header -->
                <header class="mb-4 border-bottom pb-3">
                    <h2 id="post-title" class="fw-bold fs-3 mb-2">Web Development Trends 2025</h2>
                    <p class="text-muted small mb-0">
                        <strong class="text-dark">By Bob Lee</strong> &nbsp;|&nbsp;
                        <time datetime="2025-06-25">Jun 25, 2025</time> • 5 min read
                    </p>
                </header>

                <!-- Featured Image -->
                <figure class="my-4 text-center">
                    <img src="assets/images/thumb3.avif" class="img-fluid rounded shadow-sm" alt="Web Development article thumbnail">
                    <figcaption class="text-muted small mt-2">Emerging technologies shaping the future of the web</figcaption>
                </figure>

                <!-- Content Body -->
                <section class="content-body fs-6 lh-lg text-secondary">
                    <p>The web development landscape is evolving rapidly in 2025, driven by new frameworks, AI-powered tooling, and a growing emphasis on performance and accessibility. In this article, we explore the top trends shaping the future of frontend and backend development.</p>

                    <hr class="my-4">

                    <h3 class="fs-5 fw-semibold mt-4">🌐 Key Trends to Watch</h3>
                    <ul class="mb-4">
                        <li>Adoption of serverless and edge computing architectures</li>
                        <li>AI-assisted coding and design tools (like Copilot and Figma AI)</li>
                        <li>Framework convergence: React, Svelte, and SolidJS gaining synergy</li>
                        <li>Accessibility-first design becoming a standard, not an afterthought</li>
                    </ul>

                    <h3 class="fs-5 fw-semibold mt-4">📱 Mobile-First & Performance</h3>
                    <p>With Core Web Vitals influencing SEO more than ever, developers are prioritizing fast load times, responsive layouts, and minimal JavaScript. Tools like Astro and Qwik are gaining traction for their performance-first approach.</p>

                    <blockquote class="blockquote border-start ps-3 my-4">
                        <p class="mb-0 fst-italic">"2025 is the year where performance and accessibility aren't just nice-to-haves—they're expected."</p>
                        <footer class="blockquote-footer mt-2">Web Architect at FrontForge</footer>
                    </blockquote>

                    <div class="mt-5 pt-4 border-top">
                        <a href="https://www.geeksforgeeks.org/blogs/top-web-development-trends/" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">
                            Read More Trends
                        </a>
                        <a href="#" class="btn btn-link btn-sm text-decoration-none" onclick="showSection('blog')">← Back to Blog</a>
                    </div>
                </section>
            </article>
        `;
    }
    // Add more else if blocks for other posts...

    document.getElementById('blog-detail-content').innerHTML = content;
    showSection('blog-detail');
}
(() => {
    'use strict';
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Simulated success message
        feedback.innerHTML = `<div class="alert alert-success" role="alert">
        <i class="bi bi-check-circle-fill me-2"></i>Thanks for reaching out! We’ll be in touch soon.
        </div>`;
        form.reset();
        form.classList.remove('was-validated');

        // Hide the feedback after 2 seconds
        setTimeout(() => {
            feedback.innerHTML = '';
        }, 2000);
    });
})();

// FAQ Search and Filter Functionality
const searchInput = document.getElementById('faq-search');
const faqItems = document.querySelectorAll('.faq-item');
const faqList = document.getElementById('faq-list');
const categoryButtons = document.querySelectorAll('#faq-categories .btn');

let activeCategory = 'all';

function filterFAQs() {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length > 0) {
    // Hide full FAQ list layout
    faqList.style.display = 'none';

    // Create a container for search results if not exists
    let resultContainer = document.getElementById('faq-search-results');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'faq-search-results';
        resultContainer.className = 'mt-4';
        faqList.parentNode.appendChild(resultContainer);
    }

    // Clear previous results
    resultContainer.innerHTML = '';

    // Search through all questions
    faqItems.forEach(item => {
        const questions = item.querySelectorAll('.accordion-button');
        questions.forEach(q => {
            const text = q.textContent.toLowerCase();
            if (text.includes(query)) {
                const accordionItem = q.closest('.accordion-item');
                if (accordionItem) {
                    const clone = accordionItem.cloneNode(true);
                    // Add highlight to the open result
                    clone.classList.add('search-open');
                    // Open the answer immediately
                    const btn = clone.querySelector('.accordion-button');
                    if (btn) btn.classList.remove('collapsed');
                    const collapse = clone.querySelector('.accordion-collapse');
                    if (collapse) collapse.classList.add('show');
                    // Append to result container
                    resultContainer.appendChild(clone);
                }
            }
        });
    });

    // If no results
    if (resultContainer.innerHTML === '') {
        resultContainer.innerHTML = '<p class="text-muted">No matching FAQs found.</p>';
    }

    } else {
    // Clear search results and show full list
    const resultContainer = document.getElementById('faq-search-results');
    if (resultContainer) resultContainer.remove();
    faqList.style.display = 'flex';
    filterFAQsByCategory(activeCategory); // reapply category filter
    }
}

function filterFAQsByCategory(category, btnClicked = null) {
    activeCategory = category;

    // Update button states
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    if (btnClicked) btnClicked.classList.add('active');

    // Show/hide items
    faqItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        item.style.display = (category === 'all' || itemCategory === category) ? 'block' : 'none';
    });

    // Reset search
    searchInput.value = '';
    const resultContainer = document.getElementById('faq-search-results');
    if (resultContainer) resultContainer.remove();
    faqList.style.display = 'flex';
}

// Enable dropdown on hover for navbar
document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        if (toggle) {
            const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle);
            dropdownInstance.show();
        }
    });
    dropdown.addEventListener('mouseleave', function () {
        const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        if (toggle) {
            const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle);
            dropdownInstance.hide();
        }
    });
});

// Scroll to top button functionality
document.querySelector('.scroll-top-btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-top-btn');
    if (window.scrollY > 1100) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'auto';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
    }
});

// Initialize scroll button visibility
window.dispatchEvent(new Event('scroll'));

// Color Palette Management (Feature Page 1)
let paletteColors = [];

function addColor(hex = null) {
    const color = hex || document.getElementById("colorPicker").value;
    if (!paletteColors.includes(color)) {
        paletteColors.push(color);
        renderPalette();
        showToast("Color added to palette.", "success");
    } else {
        showToast("Color already exists in the palette.", "info");
    }
}

function removeColor(index) {
    paletteColors.splice(index, 1);
    renderPalette();
    showToast("Color removed.", "info");
}

function clearPalette() {
    if (paletteColors.length === 0) {
        showToast("Palette is already empty.", "warning");
        return;
    }
    paletteColors = [];
    renderPalette();
    showToast("Palette cleared.", "info");
}

function randomPalette() {
    paletteColors = [];
    for (let i = 0; i < 5; i++) {
        paletteColors.push(randomHexColor());
    }
    renderPalette();
    showToast("Random palette generated.", "success");
}

function randomHexColor() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

function renderPalette() {
    const paletteDiv = document.getElementById("palette");
    const tableBody = document.getElementById("paletteTableBody");
    const detailsDiv = document.getElementById("paletteDetails");
    const previewWrapper = document.getElementById("palettePreview");
    const uiPreview = document.getElementById("uiPreviewBlocks");

    uiPreview.innerHTML = '';
    paletteDiv.innerHTML = '';
    tableBody.innerHTML = '';

    if (paletteColors.length === 0) {
        detailsDiv.style.display = 'none';
        previewWrapper.style.display = 'none';
        return;
    }
    detailsDiv.style.display = '';
    previewWrapper.style.display = 'block';

    // Only ONE forEach for swatch and table row
    paletteColors.forEach((color, idx) => {
        // Swatch
        const swatch = document.createElement("button");
        swatch.className = "border rounded";
        swatch.style.background = color;
        swatch.style.width = "48px";
        swatch.style.height = "48px";
        swatch.style.transition = "transform 0.2s, border 0.2s";
        swatch.title = `Click to copy ${color}`;
        swatch.setAttribute("aria-label", `Copy color ${color}`);
        swatch.setAttribute("tabindex", 0);

        swatch.onmouseover = () => swatch.style.transform = "scale(1.05)";
        swatch.onmouseout = () => swatch.style.transform = "scale(1)";
        swatch.onclick = () => {
            navigator.clipboard.writeText(color);
            swatch.classList.add("border-primary", "shadow");
            showToast(`Copied ${color} to clipboard.`, "success");
            setTimeout(() => swatch.classList.remove("border-primary", "shadow"), 700);
        };
        paletteDiv.appendChild(swatch);

        // Table Row
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td><div class="rounded border" style="width: 32px; height: 32px; background:${color};"></div></td>
        <td><code>${color}</code></td>
        <td><code>${hexToRgb(color)}</code></td>
        <td><code>${hexToHsl(color)}</code></td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="removeColor(${idx})" title="Remove color">&times;</button></td>
        `;
        tableBody.appendChild(tr);
    });

    // --- Single Live Preview Card for the whole palette ---
    if (paletteColors.length > 0) {
        const previewCard = document.createElement("div");
        previewCard.className = "shadow rounded p-4 d-flex flex-column align-items-stretch justify-content-between w-100";
        previewCard.style.width = "340px";
        previewCard.style.minHeight = "280px";
        previewCard.style.background = "#fff";
        previewCard.style.transition = "all 0.3s";
    
        // Swatch row (top)
        const swatchRow = document.createElement("div");
        swatchRow.className = "d-flex gap-2 mb-3";
        paletteColors.forEach(color => {
            const sw = document.createElement("div");
            sw.style.width = "32px";
            sw.style.height = "32px";
            sw.style.borderRadius = "8px";
            sw.style.background = color;
            sw.style.border = "2px solid #eee";
            sw.title = color;
            sw.style.cursor = "pointer";
            sw.onclick = () => {
                navigator.clipboard.writeText(color);
                showToast(`Copied ${color} to clipboard.`, "success");
            };
            swatchRow.appendChild(sw);
        });
    
        // "UI" preview block
        const uiBlock = document.createElement("div");
        uiBlock.className = "rounded-3 p-3 mb-2";
        uiBlock.style.background = paletteColors.length > 1
            ? `linear-gradient(90deg, ${paletteColors.join(",")})`
            : paletteColors[0];
        uiBlock.style.boxShadow = "0 2px 12px #0001";
        uiBlock.style.minHeight = "220px";
    
        // Title
        const title = document.createElement("h2");
        title.className = "fw-bold mt-4 mb-4";
        title.textContent = "Preview Title";
        title.style.color = getContrastYIQ(paletteColors[0] || "#fff");
    
        // Paragraph
        const para = document.createElement("p");
        para.className = "mb-3";
        para.textContent = "This is a sample paragraph to preview your palette as a UI block. Try copying or removing colors!";
        para.style.color = getContrastYIQ(paletteColors[1] || paletteColors[0] || "#fff");
    
        // Button row
        const btnRow = document.createElement("div");
        btnRow.className = "d-flex gap-2";
        paletteColors.slice(0, 3).forEach((color, i) => {
            const btn = document.createElement("button");
            btn.className = "btn btn-sm border-0";
            btn.style.background = color;
            btn.style.color = getContrastYIQ(color);
            btn.style.boxShadow = "0 1px 4px #0002";
            btn.textContent = ["Primary", "Secondary", "Accent"][i] || `Button ${i+1}`;
            btn.onclick = () => {
                navigator.clipboard.writeText(color);
                showToast(`Copied ${color} to clipboard.`, "success");
            };
            btnRow.appendChild(btn);
        });
    
        // Assemble UI block
        uiBlock.appendChild(title);
        uiBlock.appendChild(para);
        uiBlock.appendChild(btnRow);
    
        // Palette HEX codes row
        const hexRow = document.createElement("div");
        hexRow.className = "d-flex flex-wrap gap-2 justify-content-center mt-3";
        paletteColors.forEach(color => {
            const code = document.createElement("code");
            code.className = "small px-2 py-1 rounded";
            code.style.background = "#f8f9fa";
            code.style.border = "1px solid #eee";
            code.textContent = color;
            hexRow.appendChild(code);
        });
    
        // Assemble preview card
        previewCard.appendChild(swatchRow);
        previewCard.appendChild(uiBlock);
        previewCard.appendChild(hexRow);
    
        // Clear and append to preview container
        uiPreview.innerHTML = "";
        uiPreview.appendChild(previewCard);
    }
}

function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    if (hexcolor.length === 3) {
        hexcolor = hexcolor.split('').map(x => x + x).join('');
    }
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#222' : '#fff';
}

function openExportModal() {
    document.getElementById("exportPaletteText").value = paletteColors.join(', ');
}

function copyExportedPalette() {
    const textarea = document.getElementById("exportPaletteText");
    const text = textarea.value;

    navigator.clipboard.writeText(text).then(() => {
        showToast("Palette copied to clipboard!", "success");
    }).catch(() => {
        textarea.select();
        document.execCommand("copy");
        showToast("Copied using fallback method.", "info");
    });
}

// Helpers
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

function hexToHsl(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
        }
        h /= 6;
    }

    return `${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
}

function fallbackCopy(textarea) {
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile compatibility

    try {
        const successful = document.execCommand("copy");

        if (successful) {
            showToast("Palette copied to clipboard!", "success");
        } else {
            showToast("Failed to copy palette.", "error");
        }
    } catch (err) {
        showToast("Failed to copy palette.", "error");
    }

    textarea.setSelectionRange(0, 0);
    textarea.blur();
}

// Initialize with a random palette on first load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('color-palette')) randomPalette();
});
/* End of Color Palette Functionality */



// Toast notification functionality
function showToast(message, type = "success") {
    const toastEl = document.getElementById("copyToast");
    const toastMessage = document.getElementById("toastMessage");
    const toastIcon = document.getElementById("toastIcon");

    toastMessage.textContent = message;

    // Type styles
    let bgClass = "text-bg-success";
    let icon = "✅";

    switch (type) {
        case "error":
        case "danger":
        bgClass = "text-bg-danger";
        icon = "❌";
        break;
        case "warning":
        bgClass = "text-bg-warning";
        icon = "⚠️";
        break;
        case "info":
        bgClass = "text-bg-info";
        icon = "ℹ️";
        break;
        case "success":
        default:
        bgClass = "text-bg-success";
        icon = "✅";
        break;
    }

    // Set classes and icon
    toastEl.className = `toast align-items-center border-0 ${bgClass}`;
    toastIcon.textContent = icon;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}
/* End of Toast Functionality */



// Box shadow toggle functionality
const box = document.getElementById("box");
const shadowCodeEl = document.getElementById("shadowCode");

function updateBoxShadow() {
    const x = document.getElementById("xOffset").value;
    const y = document.getElementById("yOffset").value;
    const blur = document.getElementById("blur").value;
    const spread = document.getElementById("spread").value;
    const color = document.getElementById("shadowColor").value;
    const inset = document.getElementById("insetToggle").checked;

    // Update span values live
    document.getElementById("xVal").textContent = x;
    document.getElementById("yVal").textContent = y;
    document.getElementById("blurVal").textContent = blur;
    document.getElementById("spreadVal").textContent = spread;
    document.getElementById("shadowColorVal").textContent = color;

    const box = document.getElementById("box");
    const shadow = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${color}`;
    box.style.boxShadow = shadow;

    // Optional: Enhance preview with a sample button inside the box
    box.innerHTML = `
        <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <button class="btn btn-primary" style="box-shadow:none;">Sample Button</button>
            <div class="mt-2 small text-muted">Box Shadow Preview</div>
        </div>
    `;

    // Output CSS code
    document.getElementById("shadowCode").value = `box-shadow: ${shadow};`;
}

// Copy CSS to clipboard with toast
function copyShadowCode() {
    const text = shadowCodeEl.value;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => showToast("Box shadow copied to clipboard!", "success"))
            .catch(() => showToast("Failed to copy box shadow.", "error"));
    } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
            const success = document.execCommand("copy");
            showToast(success ? "Copied!" : "Failed to copy.", success ? "success" : "error");
        } catch {
            showToast("Clipboard not supported.", "warning");
        }
        document.body.removeChild(tempInput);
    }
}

const shadowInputs = [
    { id: "xOffset", displayId: "xVal" },
    { id: "yOffset", displayId: "yVal" },
    { id: "blur", displayId: "blurVal" },
    { id: "spread", displayId: "spreadVal" },
    { id: "shadowColor", displayId: "shadowColorVal" }
];

shadowInputs.forEach(({ id, displayId }) => {
    const input = document.getElementById(id);
    const display = document.getElementById(displayId);

    input.addEventListener("input", () => {
        display.textContent = input.value;
        updateBoxShadow(); // Reapply box-shadow live
    });
});

// Reset all values to default
function resetBoxShadow() {
    document.getElementById("xOffset").value = 5;
    document.getElementById("yOffset").value = 5;
    document.getElementById("blur").value = 10;
    document.getElementById("spread").value = 0;
    document.getElementById("shadowColor").value = "#000000";
    document.getElementById("insetToggle").checked = false;

    // Update the span values
    document.getElementById("xVal").textContent = 5;
    document.getElementById("yVal").textContent = 5;
    document.getElementById("blurVal").textContent = 10;
    document.getElementById("spreadVal").textContent = 0;
    document.getElementById("shadowColorVal").textContent = "#000000";

    updateBoxShadow();
    showToast("Box shadow reset.", "info");
}

// Event listeners
["xOffset", "yOffset", "blur", "spread", "shadowColor", "insetToggle"].forEach(id =>
    document.getElementById(id).addEventListener("input", updateBoxShadow)
);

updateBoxShadow(); // Initial render
/* End of Box Shadow Functionality */



// Flexbox generator functionality
function applyFlexSettings() {
    const justify = document.getElementById("justifyContent").value;
    const align = document.getElementById("alignItems").value;
    const container = document.getElementById("flexContainer");

    container.style.justifyContent = justify;
    container.style.alignItems = align;

    const codeOutput = `display: flex; justify-content: ${justify}; align-items: ${align};`;
    document.getElementById("flexCodeOutput").value = codeOutput;

    showToast(`✅ Flexbox updated successfully!`, "success");
}

function resetFlexbox() {
    document.getElementById("justifyContent").value = "flex-start";
    document.getElementById("alignItems").value = "stretch";

    const container = document.getElementById("flexContainer");
    container.style.justifyContent = "flex-start";
    container.style.alignItems = "stretch";

    document.getElementById("flexCodeOutput").value = `display: flex; justify-content: flex-start; align-items: stretch;`;

    showToast("Flexbox settings reset.", "info");
}

function copyFlexCode() {
    const codeField = document.getElementById("flexCodeOutput");
    codeField.select();
    codeField.setSelectionRange(0, 99999); // for mobile
    document.execCommand("copy");

    showToast("Flexbox CSS copied to clipboard!", "success");
}
/* This section generates a flexbox layout based on user inputs.
    It allows users to set properties like direction, wrap, justify-content, align-items,
    and gap, and provides a live preview of the generated CSS.

    // End of Flexbox Generator Functionality
*/



// Grid Layout functionality
function applyGridSettings() {
    const columns = document.getElementById("gridTemplateColumns").value.trim() || "1fr 1fr 1fr";
    const gap = document.getElementById("gridGap").value.trim() || "10px";

    const grid = document.getElementById("gridContainer");
    grid.style.gridTemplateColumns = columns;
    grid.style.gap = gap;

    const codeOutput = `display: grid; grid-template-columns: ${columns}; gap: ${gap};`;
    document.getElementById("gridCodeOutput").value = codeOutput;

    showToast("Grid layout applied!", "success");
}

function resetGridSettings() {
    document.getElementById("gridTemplateColumns").value = "1fr 1fr 1fr";
    document.getElementById("gridGap").value = "10px";

    const grid = document.getElementById("gridContainer");
    grid.style.gridTemplateColumns = "1fr 1fr 1fr";
    grid.style.gap = "10px";

    document.getElementById("gridCodeOutput").value = `display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;`;

    showToast("Grid layout reset.", "info");
}

function copyGridCode() {
    const codeField = document.getElementById("gridCodeOutput");
    codeField.select();
    codeField.setSelectionRange(0, 99999); // mobile compatibility
    document.execCommand("copy");

    showToast("Grid CSS copied!", "success");
}
/* This section generates a grid layout based on user inputs.
    It allows users to set properties like grid-template-columns, grid-template-rows,
    grid-gap, and provides a live preview of the generated CSS.

    // End of Grid Layout Functionality
*/



// Box Model functionality
function applyBoxModel() {
    const margin = document.getElementById("marginControl").value.trim();
    const padding = document.getElementById("paddingControl").value.trim();
    const border = document.getElementById("borderControl").value.trim();

    const box = document.getElementById("boxPreview");
    box.style.margin = margin || "10px";
    box.style.padding = padding || "10px";
    box.style.border = border || "1px solid black";

    const codeOutput = `margin: ${margin}; padding: ${padding}; border: ${border};`;
    document.getElementById("boxCodeOutput").value = codeOutput;

    showToast("Box model styles applied!", "success");
}

function resetBoxModel() {
    document.getElementById("marginControl").value = "10px";
    document.getElementById("paddingControl").value = "10px";
    document.getElementById("borderControl").value = "1px solid black";

    const box = document.getElementById("boxPreview");
    box.style.margin = "10px";
    box.style.padding = "10px";
    box.style.border = "1px solid black";

    document.getElementById("boxCodeOutput").value = `margin: 10px; padding: 10px; border: 1px solid black;`;

    showToast("Box model reset to default.", "info");
}

function copyBoxModelCSS() {
    const code = document.getElementById("boxCodeOutput");
    code.select();
    code.setSelectionRange(0, 99999); // Mobile support
    document.execCommand("copy");

    showToast("Box model CSS copied!", "success");
}
/* This section provides a box model visualizer that allows users to adjust
    padding, margin, and border values for a box element.
    It includes live updates to the box's appearance and displays the corresponding CSS code.
*/

// Unit converter functionality
const base = 16;

document.getElementById("inputValue").addEventListener("input", convertUnit);
document.getElementById("fromUnit").addEventListener("change", convertUnit);
document.getElementById("toUnit").addEventListener("change", convertUnit);

function convertUnit() {
    const val = parseFloat(document.getElementById("inputValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const output = document.getElementById("convertedValue");
    const errorDiv = document.getElementById("unitError");

    errorDiv.classList.add("d-none");
    output.textContent = "–";

    if (isNaN(val)) {
        errorDiv.textContent = "Please enter a valid number.";
        errorDiv.classList.remove("d-none");
        return;
    }

    if (from === to) {
        output.textContent = `${val} ${to}`;
        errorDiv.textContent = "ℹ️ Info: Both units are the same. No conversion needed.";
        errorDiv.classList.remove("d-none");
        return;
    }

    let pxValue;

    switch (from) {
        case "px":
            pxValue = val;
            break;
        case "rem":
            pxValue = val * base;
            break;
        case "%":
            pxValue = (val / 100) * base;
            break;
    }

    let result;
    switch (to) {
        case "px":
            result = `${pxValue}px`;
            break;
        case "rem":
            result = `${(pxValue / base).toFixed(2)}rem`;
            break;
        case "%":
            result = `${((pxValue / base) * 100).toFixed(1)}%`;
            break;
    }

    output.textContent = result;
}

function resetUnitConverter() {
    document.getElementById("inputValue").value = "";
    document.getElementById("fromUnit").value = "px";
    document.getElementById("toUnit").value = "rem";
    document.getElementById("convertedValue").textContent = "–";
    document.getElementById("unitError").classList.add("d-none");
    showToast("Reset successful", "info");
}

function swapUnits() {
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
    convertUnit();
}
/* This section provides a simple unit converter that allows users to 
    convert between pixels (px), rems, and percentages (%).
    It includes input validation, error handling, and a reset function.

    // End of Unit Converter Functionality
*/



// Regex tester functionality
// Live updates
["regexPattern", "testString", "flagG", "flagI", "flagM"].forEach(id => {
    document.getElementById(id).addEventListener("input", runRegex);
});

function runRegex() {
    const pattern = document.getElementById("regexPattern").value.trim();
    const text = document.getElementById("testString").value;
    const resultDiv = document.getElementById("regexResult");
    const explainDiv = document.getElementById("regexExplain");

    if (!pattern) {
        resultDiv.innerHTML = `<em>Please enter a pattern.</em>`;
        explainDiv.textContent = "";
        return;
    }

    const flags =
        (document.getElementById("flagG").checked ? "g" : "") +
        (document.getElementById("flagI").checked ? "i" : "") +
        (document.getElementById("flagM").checked ? "m" : "");

    try {
        const regex = new RegExp(pattern, flags);
        const matches = [...text.matchAll(regex)];

        // Result display
        if (matches.length === 0) {
        resultDiv.innerHTML = `<em>No matches found.</em>`;
        } else {
        const highlighted = text.replace(regex, match => `<mark>${match}</mark>`);
        resultDiv.innerHTML = highlighted;
        resultDiv.dataset.matches = matches.map(m => m[0]).join("\n");
        }

        // Explanation
        explainDiv.textContent = explainRegex(pattern);
    } catch (e) {
        resultDiv.innerHTML = `<span class="text-danger">❌ Invalid Regex!</span>`;
        resultDiv.dataset.matches = "";
        explainDiv.textContent = "⚠️ Invalid pattern.";
    }
}

function resetRegex() {
    document.getElementById("regexPattern").value = "";
    document.getElementById("testString").value = "";
    document.getElementById("regexResult").innerHTML = "";
    document.getElementById("regexResult").dataset.matches = "";
    document.getElementById("regexExplain").textContent = "";
    document.getElementById("flagG").checked = true;
    document.getElementById("flagI").checked = false;
    document.getElementById("flagM").checked = false;
    showToast("Regex tester reset.", "info");
}

function copyMatches() {
    const matches = document.getElementById("regexResult").dataset.matches;
    if (!matches) {
        showToast("No matches to copy.", "warning");
        return;
    }
    const temp = document.createElement("textarea");
    temp.value = matches;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    showToast("📋 Matches copied to clipboard!", "info");
}

// Basic explanation logic (very simple parser)
function explainRegex(pattern) {
    const explanation = [];

    const parts = pattern.match(/\\?.|[\[\](){}|.+*?^$]/g) || [];

    for (const char of parts) {
        switch (char) {
        case ".":
            explanation.push("`.` matches any character except newline.");
            break;
        case "\\d":
            explanation.push("`\\d` matches any digit (0-9).");
            break;
        case "\\w":
            explanation.push("`\\w` matches any word character (a-z, A-Z, 0-9, _).");
            break;
        case "\\s":
            explanation.push("`\\s` matches any whitespace character.");
            break;
        case "+":
            explanation.push("`+` matches one or more of the preceding token.");
            break;
        case "*":
            explanation.push("`*` matches zero or more of the preceding token.");
            break;
        case "?":
            explanation.push("`?` makes preceding token optional.");
            break;
        case "^":
            explanation.push("`^` matches the start of the string.");
            break;
        case "$":
            explanation.push("`$` matches the end of the string.");
            break;
        case "[":
            explanation.push("`[]` defines a character class.");
            break;
        case "(":
            explanation.push("`()` creates a capture group.");
            break;
        case "|":
            explanation.push("`|` is OR — matches either expression.");
            break;
        case "{":
            explanation.push("`{}` is used for quantifiers (e.g., {2,5}).");
            break;
        }
    }

    return explanation.length > 0 ? explanation.join("\n") : "No explanation available.";
}
/* End of Regex Tester Functionality */



// js/home.js or inline script
document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.querySelector(".btn-get-started");

    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function (e) {
            e.preventDefault();

            // 1. Show toast
            showToast("Redirecting to features...", "info");

            // 2. Call showSection() to reveal the feature section (this will scroll to top)
            showSection("feature", this);
        });
    }
});

function downloadFile(filePath, name) {
    if (!filePath) {
        showToast("File not found.", "error");
        return;
    }

    const link = document.createElement("a");
    link.href = filePath;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`${name} is downloading...`, "success");
}

function checkLink(linkElement) {
    const url = linkElement.getAttribute("href");
    if (url === "#") {
        event.preventDefault();
        showToast("This article is coming soon.", "info");
    }
}

// newsletter subscription functionality
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();

    // Simple email format validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
        showToast('Please enter a valid email address.', 'warning');
        return;
    }

    // Simulate successful subscription
    showToast('Thanks for subscribing! Check your inbox for confirmation.', 'success');

    // Clear the input field
    emailInput.value = '';
});
/* End of newsletter subscription functionality */


// Gradient generator functionality
document.getElementById("gradientAngle").addEventListener("input", function () {
    document.getElementById("angleValue").textContent = this.value;
});

function toggleAngleInput() {
    const type = document.getElementById('gradientType').value;
    document.getElementById('angleGroup').style.display = type === 'linear' ? '' : 'none';
    document.getElementById('shapeGroup').style.display = type === 'radial' ? '' : 'none';
}

function generateGradient() {
    const color1 = document.getElementById("gradientColor1").value;
    const color2 = document.getElementById("gradientColor2").value;
    const angle = document.getElementById("gradientAngle").value;
    const type = document.getElementById("gradientType").value;
    const preview = document.getElementById("gradientPreview");
    const cssOutput = document.getElementById("gradientCSS");

    let gradientCSS;

    if (type === "linear") {
        gradientCSS = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else {
        const shape = document.getElementById("radialShape").value;
        gradientCSS = `radial-gradient(${shape}, ${color1}, ${color2})`;
    }

    preview.style.background = gradientCSS;
    cssOutput.value = `background: ${gradientCSS};`;
    showToast("Gradient generated successfully!", "success");
}

function copyGradientCSS() {
    const cssInput = document.getElementById("gradientCSS");
    if (!cssInput.value) {
        showToast("No CSS to copy. Please generate a gradient first.", "warning");
        return;
    }

    cssInput.select();
    document.execCommand("copy");
    showToast("CSS copied to clipboard!", "success");
}

function resetGradient() {
    // Get current type before reset
    const type = document.getElementById("gradientType").value;

    // Reset values
    document.getElementById("gradientColor1").value = "#2196F3";
    document.getElementById("gradientColor2").value = "#42A5F5";
    document.getElementById("gradientAngle").value = 90;
    document.getElementById("angleValue").textContent = "90";
    // Keep the current type (linear or radial)
    document.getElementById("gradientType").value = type;
    // Reset radial shape to default if in radial mode
    if (type === "radial") {
        document.getElementById("radialShape").value = "circle";
    }

    // Update UI controls visibility
    toggleAngleInput();

    // Reset preview and output
    document.getElementById("gradientPreview").style.background = "";
    document.getElementById("gradientCSS").value = "";

    showToast("Gradient settings have been reset.", "info");
}
/* End of Gradient Generator Functionality */



// Border radius functionality
// -- Sync all corner sliders and numbers --
function syncCornerInputs(value) {
    const corners = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
    for (let corner of corners) {
        document.getElementById(corner).value = value;
        document.getElementById(`${corner}Range`).value = value;
    }

    // Sync all-corners inputs
    document.getElementById('allCornersRange').value = value;
    document.getElementById('allCornersNumber').value = value;

    updateRadius();
}

// Sync individual corner input + range
function syncIndividual(corner, value) {
    document.getElementById(corner).value = value;
    document.getElementById(`${corner}Range`).value = value;

    // Disable all-corner sync when values diverge
    updateRadius();
}

function updateRadius() {
    const tl = parseInt(document.getElementById('topLeft').value);
    const tr = parseInt(document.getElementById('topRight').value);
    const br = parseInt(document.getElementById('bottomRight').value);
    const bl = parseInt(document.getElementById('bottomLeft').value);

    const previewBox = document.getElementById('radiusBox');
    const cssOutput = document.getElementById('borderRadiusCSS');

    // Apply style to preview
    previewBox.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;

    // Determine shorthand syntax
    let output;
    if (tl === tr && tr === br && br === bl) {
        output = `${tl}px`;
    } else if (tl === br && tr === bl) {
        output = `${tl}px ${tr}px`;
    } else if (tr === bl) {
        output = `${tl}px ${tr}px ${br}px`;
    } else {
        output = `${tl}px ${tr}px ${br}px ${bl}px`;
    }

    cssOutput.value = `border-radius: ${output};`;

    // Sync allCorners inputs if all corners match
    const allSame = tl === tr && tl === br && tl === bl;
    if (allSame) {
        document.getElementById('allCornersRange').value = tl;
        document.getElementById('allCornersNumber').value = tl;
    } else {
        document.getElementById('allCornersRange').value = "";
        document.getElementById('allCornersNumber').value = "";
    }
}

// Copy CSS to clipboard
function copyRadiusCSS() {
    const css = document.getElementById('borderRadiusCSS');
    if (!css.value) {
        showToast("No CSS to copy!", "warning");
        return;
    }
    css.select();
    document.execCommand("copy");
    showToast("Border-radius CSS copied!", "success");
}

// Reset everything to 0
function resetBorderRadius() {
    syncCornerInputs(0);
    showToast("Radius reset to 0px", "info");
}

function toggleAdvancedMode() {
    const isAdvanced = document.getElementById('advancedToggle').checked;
    const advControls = document.getElementById('advancedRadiusControls');
    advControls.style.display = isAdvanced ? 'block' : 'none';

    // Reset advanced values or update output depending on toggle
    if (isAdvanced) {
        updateAdvancedRadius();
    } else {
        updateRadius();
    }
}

function updateAdvancedRadius() {
    if (!document.getElementById('advancedToggle').checked) return;

    // Get H and V values
    const tlH = document.getElementById('tlH').value || 0;
    const trH = document.getElementById('trH').value || 0;
    const brH = document.getElementById('brH').value || 0;
    const blH = document.getElementById('blH').value || 0;

    const tlV = document.getElementById('tlV').value || 0;
    const trV = document.getElementById('trV').value || 0;
    const brV = document.getElementById('brV').value || 0;
    const blV = document.getElementById('blV').value || 0;

    const cssValue = `${tlH}px ${trH}px ${brH}px ${blH}px / ${tlV}px ${trV}px ${brV}px ${blV}px`;

    document.getElementById('radiusBox').style.borderRadius = cssValue;
    document.getElementById('borderRadiusCSS').value = `border-radius: ${cssValue};`;
}

function resetAdvancedRadius() {
    const inputs = ['tlH', 'tlV', 'trH', 'trV', 'brH', 'brV', 'blH', 'blV'];
    for (let id of inputs) {
        document.getElementById(id).value = "";
    }
    updateAdvancedRadius();
    showToast("Advanced radius values reset", "info");
}
/* End of Border Radius Functionality */



// Clip-path functionality
let lastClipShape = "circle(50% at 50% 50%)"; // default
let savedPreset = null;
let currentClipShape = "circle"; // default

const clipShapes = {
    circle: 'circle(50% at 50% 50%)',
    ellipse: 'ellipse(60% 40% at 50% 50%)',
    inset: 'inset(10% 10% 10% 10%)',
    triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)'
};

function applyClipPathShape(shape) {
    currentClipShape = shape;
    const preview = document.getElementById("clipPreview");
    const cssOut = document.getElementById("clipCSS");
    const shapeValue = clipShapes[shape];

    lastClipShape = shapeValue;

    preview.style.clipPath = shapeValue;
    cssOut.value = `clip-path: ${shapeValue};`;

    // 🧽 Clear the custom polygon input
    document.querySelector("textarea").value = "";

    showToast(`Clip-path applied: ${shape}`, "success");
    renderDynamicControls(shape);
}

function applyCustomClipPath(value) {
    const preview = document.getElementById("clipPreview");
    const cssOutput = document.getElementById("clipCSS");

    // 🧽 If the value is empty (user cleared textarea or programmatically), reset everything
    if (!value.trim()) {
        preview.style.clipPath = "none";
        cssOutput.value = "";
        return;
    }

    // 🧩 Apply custom polygon
    currentClipShape = "custom";
    lastClipShape = value;

    preview.style.clipPath = value;
    cssOutput.value = `clip-path: ${value};`;
    showToast("Custom clip-path applied", "info");
}

function copyClipCSS() {
    const css = document.getElementById('clipCSS');
    if (!css.value) return showToast("No CSS to copy!", "warning");
    css.select();
    document.execCommand("copy");
    showToast("Clip-path CSS copied!", "success");
}

function toggleBackground() {
    const preview = document.getElementById("clipPreview");
    const isChecked = document.getElementById("toggleBg").checked;

    if (isChecked) {
        preview.style.backgroundImage = "none";
        preview.style.backgroundColor = "red";
    } else {
        preview.style.backgroundColor = "blue";
    }

    console.log("✅ toggleBackground ran. Checked:", isChecked);
}

// Render dynamic controls (Inset sliders)
function renderDynamicControls(shape) {
    const container = document.getElementById("dynamicControls");
    container.innerHTML = "";

    if (shape === "inset") {
        const sides = ["Top", "Right", "Bottom", "Left"];
        sides.forEach(side => {
            const id = `inset${side}`;
            container.innerHTML += `
                <div class='mb-2'>
                    <label class='form-label'>${side}</label>
                    <input type='range' min='0' max='50' value='10' class='form-range inset-slider' id='${id}' oninput='updateInsetClip()'>
                </div>`;
        });
    }
}

// Update inset shape
function updateInsetClip() {
    const t = document.getElementById("insetTop").value;
    const r = document.getElementById("insetRight").value;
    const b = document.getElementById("insetBottom").value;
    const l = document.getElementById("insetLeft").value;
    const value = `inset(${t}% ${r}% ${b}% ${l}%)`;

    document.getElementById("clipPreview").style.clipPath = value;
    document.getElementById("clipCSS").value = `clip-path: ${value};`;
    showToast("Inset updated", "info");
}

// Save current settings as a preset
function savePreset() {
    const polygonTextarea = document.querySelector('#clip-path textarea');
    const clipCSS = document.getElementById("clipCSS").value;
    const isPolygon = polygonTextarea.value.trim().startsWith("polygon");

    savedPreset = {
        shape: currentClipShape,
        clipValue: clipCSS.replace("clip-path: ", "").replace(";", ""),
        polygon: isPolygon ? polygonTextarea.value.trim() : "",
        insets: Array.from(document.querySelectorAll(".inset-slider")).map(i => i.value),
        bg: document.getElementById("toggleBg").checked
    };

    // Clear the textarea after saving
    polygonTextarea.value = "";
    showToast("Preset saved!", "success");

    // Optionally, clear preview and CSS if you want (optional)
    // applyClipPathShape(currentClipShape);
}

// Load saved preset if available
function loadPreset() {
    if (!savedPreset) {
        showToast("No preset saved yet", "warning");
        return;
    }

    const polygonTextarea = document.querySelector('#clip-path textarea');

    // If the saved preset is a polygon, restore it to the textarea and apply
    if (savedPreset.polygon) {
        polygonTextarea.value = savedPreset.polygon;
        applyCustomClipPath(savedPreset.polygon);
    } else {
        polygonTextarea.value = "";
        applyClipPathShape(savedPreset.shape);
    }

    // Restore insets if shape is inset
    if (savedPreset.shape === "inset") {
        const insetInputs = document.querySelectorAll(".inset-slider");
        insetInputs.forEach((input, index) => {
            input.value = savedPreset.insets[index] || 10;
        });
        updateInsetClip();
    }

    // Restore background toggle
    document.getElementById("toggleBg").checked = savedPreset.bg;
    toggleBackground();

    showToast("Preset loaded!", "info");
}

// Confirm reset modal functionality
function confirmReset() {
    resetClipPath(); // this function must exist and perform the actual reset

    // ✅ Close modal manually
    const modalElement = document.getElementById("confirmResetModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
}

// Reset clip-path settings to default
function resetClipPath() {
    const preview = document.getElementById("clipPreview");
    const css = document.getElementById("clipCSS");
    const polygonTextarea = document.querySelector('#clip-path textarea');

    // Reset to the current selected shape, not always to circle
    if (currentClipShape === "custom") {
        // If custom polygon, clear everything
        polygonTextarea.value = "";
        preview.style.clipPath = "none";
        css.value = "";
    } else if (currentClipShape === "inset") {
        // Reset inset sliders to default (10)
        ["insetTop", "insetRight", "insetBottom", "insetLeft"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = 10;
        });
        updateInsetClip();
    } else {
        // For circle, ellipse, triangle: just re-apply the shape
        applyClipPathShape(currentClipShape);
    }

    // Always clear polygon textarea if not custom
    if (currentClipShape !== "custom") {
        polygonTextarea.value = "";
    }

    // Reset background toggle
    document.getElementById("toggleBg").checked = false;
    toggleBackground();

    // Render dynamic controls for the current shape
    renderDynamicControls(currentClipShape);

    showToast("Clip-path settings reset", "info");
}
/* End of Clip-path Functionality */



// Typography scale generator functionality
function generateScale() {
    const base = parseFloat(document.getElementById("baseSize").value);
    const ratio = parseFloat(document.getElementById("scaleRatio").value);
    const preview = document.getElementById("scalePreview");

    if (isNaN(base) || base < 8) {
        showToast("Please enter a valid base font size.", "warning");
        return;
    }

    let cssOutput = '';
    let html = '';

    for (let i = -2; i <= 4; i++) {
        const size = (base * Math.pow(ratio, i)).toFixed(2);
        const label = `--font-size-${i + 3}`;
        cssOutput += `${label}: ${size}px;\n`;

        html += `<p style="font-size: ${size}px;" tabindex="0">
                    Font Size: <strong>${size}px</strong> 
                    <code class="text-muted ms-2">${label}</code>
                </p>`;
    }

    preview.innerHTML = html;
    preview.dataset.css = cssOutput;

    showToast("Typography scale generated.", "success");
}

function copyTypographyCSS() {
    const preview = document.getElementById("scalePreview");
    const css = preview.dataset.css || "";

    if (!css) {
        showToast("No CSS generated yet.", "warning");
        return;
    }

    navigator.clipboard.writeText(css).then(() => {
        showToast("Typography CSS copied to clipboard!", "success");
    }).catch(() => {
        showToast("Failed to copy CSS.", "error");
    });
}

function resetTypographyScale() {
    document.getElementById("baseSize").value = "";
    document.getElementById("scaleRatio").value = "1.25"; // default: Major Third
    const preview = document.getElementById("scalePreview");
    preview.innerHTML = "";
    preview.dataset.css = "";

    showToast("Typography scale reset.", "info");
}
/* End of Typography scale generator functionality */



// 🔧 Minify Code
function minifyCode() {
    const input = document.getElementById("minifyInput").value.trim();
    const type = document.getElementById("codeType").value;

    if (!input) {
        showToast("Please enter code to minify.", "warning");
        return;
    }

    let minified = input;

    // Basic type-based cleanup
    if (type === "html" || type === "auto") {
        minified = minified.replace(/<!--[\s\S]*?-->/g, ''); // HTML comments
    }
    if (type === "css" || type === "auto") {
        minified = minified.replace(/\/\*[\s\S]*?\*\//g, ''); // CSS comments
    }
    if (type === "js" || type === "auto") {
        minified = minified
        .replace(/\/\*[\s\S]*?\*\//g, '') // block comments
        .replace(/\/\/.*(?=\n|\r|$)/g, ''); // line comments
    }

    minified = minified
        .replace(/\n+/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s*([{}:;,=()<>+\-*\/])\s*/g, '$1')
        .replace(/;\}/g, '}')
        .trim();

    document.getElementById("minifyOutput").value = minified || "// Output will appear here";
    showToast("Code successfully minified!", "success");
}

function copyMinifiedCode() {
    const output = document.getElementById("minifyOutput");
    if (!output.value.trim()) {
        showToast("Nothing to copy. Please minify code first.", "warning");
        return;
    }

    output.select();
    document.execCommand("copy");
    showToast("Minified code copied to clipboard!", "info");
}

function resetMinify() {
    document.getElementById("minifyInput").value = "";
    document.getElementById("minifyOutput").value = "";
    document.getElementById("codeType").value = "auto";
    showToast("Minify tool reset.", "info");
}
/* End of Minify Code Functionality */



// 📝 Lorem Ipsum Generator
function generateLorem() {
    const count = parseInt(document.getElementById('loremCount').value, 10);
    const sentenceLength = document.getElementById('loremLength').value;
    const outputBox = document.getElementById('loremOutput');

    if (!count || count < 1 || count > 100) {
        showToast("Please enter a number between 1 and 100.", "warning");
        return;
    }

    const base = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.";
    const sentences = base.split('. ').filter(Boolean);

    let output = '';
    for (let i = 0; i < count; i++) {
        let paragraph = [];
        const len = sentenceLength === "short" ? 3 : sentenceLength === "long" ? 7 : 5;
        for (let j = 0; j < len; j++) {
        const index = Math.floor(Math.random() * sentences.length);
        paragraph.push(sentences[index].trim().replace(/\.$/, '') + '.');
        }
        output += `<p class="mb-3 text-justify lh-lg" style="text-indent: 2em;">${paragraph.join(' ')}</p>`;
    }

    outputBox.innerHTML = output;
    showToast("Lorem Ipsum generated!", "success");
}

// Auto-generate on load if enabled
window.addEventListener("DOMContentLoaded", () => {
    const autoGen = document.getElementById("autoGenerate");
    const countInput = document.getElementById("loremCount");

    if (autoGen?.checked) {
        if (!countInput.value) countInput.value = 3;
        generateLorem();
    }
});

function copyLorem() {
    const outputText = document.getElementById("loremOutput").innerText.trim();
    if (!outputText) return showToast("Nothing to copy. Please generate text first.", "warning");

    const temp = document.createElement("textarea");
    temp.value = outputText;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    showToast("Plain text copied!", "info");
}

function copyLoremAsHTML() {
    const html = document.getElementById("loremOutput").innerHTML.trim();
    if (!html) return showToast("Nothing to copy as HTML.", "warning");

    const temp = document.createElement("textarea");
    temp.value = html;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    showToast("HTML copied to clipboard!", "info");
}

function resetLorem() {
    document.getElementById('loremCount').value = '';
    document.getElementById('loremOutput').innerHTML = '';
    showToast("Generator reset.", "info");
}

function downloadLorem() {
    const text = document.getElementById("loremOutput").innerText.trim();
    if (!text) return showToast("Nothing to download.", "warning");

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lorem-ipsum.txt";
    link.click();
    showToast("📁 File downloaded.", "success");
}
/* End of Lorem Ipsum Generator Functionality */

// 📄 SEO Meta Generator
function generateMetaTags() {
    const title = document.getElementById("metaTitle").value.trim();
    const description = document.getElementById("metaDescription").value.trim();
    const author = document.getElementById("metaAuthor").value.trim();
    const keywords = document.getElementById("metaKeywords").value.trim();

    if (!title || !description) {
        showToast("Title and description are required.", "error");
        return;
    }

    let output = '';
    output += `<title>${title}</title>\n`;
    output += `<meta name="description" content="${description}">\n`;
    if (author) output += `<meta name="author" content="${author}">\n`;
    if (keywords) output += `<meta name="keywords" content="${keywords}">\n`;
    output += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;

    document.getElementById("metaOutput").textContent = output;

    updatePreview(); // update preview box
    showToast("Meta tags generated!", "success");
}

function copyMetaTags() {
    const metaOutput = document.getElementById("metaOutput");
    if (!metaOutput.textContent.trim()) {
        showToast("No content to copy.", "error");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = metaOutput.textContent;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    showToast("Meta tags copied to clipboard!", "success");
}

function copyFullMeta() {
    const meta = document.getElementById("metaOutput").textContent;
    if (!meta.trim()) {
        showToast("Nothing to copy.", "error");
        return;
    }

    const full = `<head>\n${meta}</head>`;
    navigator.clipboard.writeText(full).then(() => {
        showToast("Full <head> section copied!", "success");
    });
}

// Live preview updater
function updatePreview() {
    const title = document.getElementById("metaTitle").value.trim();
    const description = document.getElementById("metaDescription").value.trim();

    document.getElementById("previewTitle").textContent = title || "Preview Title";
    document.getElementById("previewDesc").textContent = description || "Meta description preview...";
}

// Character counters
document.getElementById("metaTitle").addEventListener("input", function () {
    document.getElementById("titleCharCount").textContent = `${this.value.length} / 60`;
    updatePreview();
});
document.getElementById("metaDescription").addEventListener("input", function () {
    document.getElementById("descCharCount").textContent = `${this.value.length} / 160`;
    updatePreview();
});

function resetMetaTags() {
    document.getElementById("metaTitle").value = "";
    document.getElementById("metaAuthor").value = "";
    document.getElementById("metaDescription").value = "";
    document.getElementById("metaKeywords").value = "";
    document.getElementById("metaOutput").textContent = "";
    document.getElementById("titleCharCount").textContent = "0 / 60";
    document.getElementById("descCharCount").textContent = "0 / 160";
    document.getElementById("previewTitle").textContent = "Preview Title";
    document.getElementById("previewDesc").textContent = "Meta description preview...";
    showToast("SEO Meta Tag Generator reset.", "info");
}