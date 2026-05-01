const fs = require('fs');
const path = require('path');

const root = __dirname;
const templatePath = path.join(root, 'src', 'index.template.html');
const contentPath = path.join(root, 'content', 'site.json');
const outputPath = path.join(root, 'index.html');

const site = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
let html = fs.readFileSync(templatePath, 'utf8');

const replacements = [
  ['RK Enterprises — Premium Pet Products Distributor', site.siteTitle],
  ['<span class="nav-brand-text">RK Enterprises</span>', `<span class="nav-brand-text">${site.brandName}</span>`],
  ['<span class="nav-brand-sub">Multi-Brand Distributor</span>', `<span class="nav-brand-sub">${site.brandSubline}</span>`],
  ["North India's Multi-Brand Distributor", site.heroTag],
  ['Supplying <em>trusted</em><br>pet brands<br>to trade.', site.heroTitle],
  ['From Jaipur to Delhi, Ahmedabad to Shimla &mdash; RK Enterprises distributes leading pet food, grooming, wellness, accessory, toy, and treat brands to retailers, clinics, and pet stores across 7 states.', site.heroDescription],
  ['Explore Products', site.primaryButton],
  ['Become a Partner &rarr;', site.secondaryButton],
  ['Multi-brand portfolio', site.heroCaptionTitle],
  ['Food · Grooming · Wellness · Accessories', site.heroCaptionMeta],
  ['Built on trust,<br><em>driven by care.</em>', site.aboutTitle],
  ['RK Enterprises is a multi-brand pet products distributor, connecting national and international brands with retailers, vet clinics, grooming salons, and pet stores across 7 states.', site.aboutParagraph1],
  ['Operating from Jaipur since 2014, we have built a robust supply chain ensuring timely delivery, product authenticity, and dedicated partner support throughout the year.', site.aboutParagraph2],
  ['Serving <em>7 states,</em><br>30+ cities across India.', site.coverageTitle],
  ['From Jaipur to regional trade partners', site.coverageLead],
  ['Our distribution network is designed for repeat ordering, stock replenishment and category coverage across food, health, grooming, toys, treats and accessories.', site.coverageBody],
  ['Become a <em>distribution partner.</em>', site.contactTitle],
  ['109, Rajendra Nagar, Sirsi Road, Vaishali Nagar, Jaipur 302021', site.address],
  ['+91 7851817355', site.phone],
  ['info@rkenterprises.in', site.email],
  ['Mon &ndash; Sat &nbsp;&middot;&nbsp; 9:00 AM &ndash; 7:00 PM', site.workingHours],
  ['Multi-brand pet products distributor, Rajasthan', site.footerDescription],
  ['src="rk-pet-distribution-hero.png"', 'src="assets/rk-pet-distribution-hero.png"'],
  ['src="rk-pet-warehouse.png"', 'src="assets/rk-pet-warehouse.png"'],
  ['src="rk-pet-delivery.png"', 'src="assets/rk-pet-delivery.png"']
];

for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

fs.writeFileSync(outputPath, html);
console.log(`Built ${path.relative(root, outputPath)}`);
