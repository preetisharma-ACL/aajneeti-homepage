// All homepage content for AAJneeti Connect Ltd. (sourced from https://aajneeti.social/)
// Edit text here — the components only handle layout and styling.

export const company = {
  name: 'AAJneeti Connect Ltd.',
  phone: '+91 809 024 3030',
  phoneHref: 'tel:+918090243030',
  email: 'alok@aajneeti.social',
  address: 'AAJneeti Connect Ltd., B-44, First Floor, B Block, Sector 63, Noida, Uttar Pradesh 201301, India',
  site: 'https://aajneeti.social',
};

export const socials = [
  { name: 'Facebook', color: '#1877f2', icon: 'bi-facebook', href: 'https://www.facebook.com/aajneeti.social' },
  { name: 'X', color: '#000000', icon: 'bi-twitter-x', href: 'https://x.com/Aajneeticonnect' },
  { name: 'YouTube', color: '#ff0000', icon: 'bi-youtube', href: 'https://www.youtube.com/@aajneetiAdvertising' },
  { name: 'LinkedIn', color: '#0a66c2', icon: 'bi-linkedin', href: 'https://www.linkedin.com/company/aajneetimedia' },
  { name: 'Instagram', color: 'linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #8134af 75%, #515bd4 100%)', icon: 'bi-instagram', href: 'https://www.instagram.com/aajneeti' },
];

export const topOffices = ['Noida', 'Lucknow', 'Bengaluru', 'Kolkata', 'Dehradun', 'USA'];

const S = 'https://aajneeti.social';

export const nav = [
  {
    label: 'Services',
    feature: 'Marketing Built to Scale Profitably',
    items: [
      { title: 'Performance Marketing', sub: 'Google, Meta & LinkedIn campaigns', href: `${S}/performance-marketing/` },
      { title: 'Lead Generation', sub: 'Qualified leads across 20+ cities', href: `${S}/lead-generation-company/` },
      { title: 'App Development', sub: 'iOS & Android products', href: `${S}/mobile-app-development-company/` },
      { title: 'Website Design & Development', sub: 'Fast sites that convert', href: `${S}/website-development/` },
      { title: 'Best Wikipedia Page Creation Service', sub: 'Research, writing & submission', href: `${S}/wikipedia-page-creation-service/` },
      { title: 'All services', sub: 'Everything we do', href: `${S}/services/` },
    ],
  },
  {
    label: 'Industries',
    feature: 'Tailored Strategies for Every Vertical',
    items: [
      { title: 'Real Estate', href: `${S}/real-estate-lead-generation/` },
      { title: 'Educational Institution', href: `${S}/education-lead-generation-company/` },
      { title: 'Interior Design', href: `${S}/interior-design-lead-generation-service/` },
      { title: 'Plot & Farm', href: `${S}/plots-and-lands-lead-generation-agency/` },
      { title: 'Coworking', href: `${S}/coworking-leasing-lead-generation-service/` },
      { title: 'B2B', href: `${S}/b2b-lead-generation-company/` },
      { title: 'New Project Launch', href: `${S}/new-project-launch-marketing/` },
      { title: 'Political Campaigns', href: `${S}/political-campaign-management-company-in-india/` },
    ],
  },
  { label: 'Our Work', href: `${S}/category/case-studies/` },
  {
    label: 'Research',
    feature: 'Insights That Shape Modern Marketing',
    items: [
      { title: 'Digital Marketing Blog', sub: 'Notes from live campaigns', href: `${S}/blog/` },
      { title: 'Real Estate Marketing Tips', sub: 'For developers & brokers', href: `${S}/real-estate-digital-marketing-tips/` },
    ],
  },
  {
    label: 'About',
    feature: 'Built on People, Powered by Process',
    items: [
      { title: 'About Us', sub: 'Our story since 2014', href: `${S}/about-us/` },
      { title: 'Our Offices', sub: 'Noida HQ + 5 locations', href: `${S}/about/offices/` },
      { title: 'Our Team', sub: 'The people behind your leads', href: `${S}/our-team/` },
      { title: 'Careers', sub: 'Join AAJneeti', href: `${S}/career-at-aajneeti/` },
      { title: 'Grievance', sub: 'Redressal & verification', href: `${S}/grievance-redressal/` },
    ],
  },
  { label: 'Contact', href: `${S}/contact-us/` },
];

export const brands = [
  { name: 'Godrej Properties', src: '/images/logos/godrej.webp' },
  { name: 'L&T Realty', src: '/images/logos/lt.webp' },
  { name: 'Prestige Group', src: '/images/logos/prestige.webp' },
  { name: 'Sobha Developers', src: '/images/logos/sobha.webp' },
  { name: 'M3M India', src: '/images/logos/m3m.webp' },
  { name: 'Max Estates', src: '/images/logos/max.webp' },
  { name: 'Gaurs Group', src: '/images/logos/gaurs.webp' },
  { name: 'CRC Group', src: '/images/logos/crc.webp' },
  { name: 'ACE Group', src: '/images/logos/ace.webp' },
  { name: 'Atulyam', src: '/images/logos/atulyam.webp' },
  { name: 'Elegance Enterprises', src: '/images/logos/elegance.webp' },
  { name: 'Jenika Ventures', src: '/images/logos/jenika.webp' },
];

export const guarantees = [
  {
    title: 'Checked against our fake-lead blocklist',
    text: "Fake form fills are an industry-wide problem: wrong numbers, made-up names, people who fill every form they see. Over the years we've built a blocklist of 1 lakh+ known fake contacts. Any new lead that matches is replaced automatically and never counts against you.",
    icon: 'bi-shield-check',
  },
  {
    title: 'Your feedback decides',
    text: 'Your team calls each lead and tags it in your free CRM as interested, not interested, unreachable or invalid. We trust your feedback, because your team speaks to the buyer.',
    icon: 'bi-chat-square-text',
  },
  {
    title: 'Cross-checked, then replaced',
    text: 'Our QC team cross-checks the leads you tag. Fake, invalid and broker leads are replaced. If the campaign still ends short of the qualified share in your contract, the shortfall is refunded.',
    icon: 'bi-arrow-repeat',
  },
];

export const guaranteeStats = [
  { value: 'Up to 60%', label: 'Qualified leads' },
  { value: '1 lakh+', label: 'Known fake contacts on our blocklist' },
  { value: '₹300 crore+', label: 'Ad spend managed' },
];

export const industries = [
  { href: `${S}/real-estate-lead-generation/`, name: 'Real estate', sub: 'For developers, channel partners and brokers.', filter: 'We filter out brokers posing as buyers, and buyers outside your budget.', proof: '33 units pre-sold before launch for a Godrej Palm Retreat channel partner.', img: '/images/industries/realestate.webp' },
  { href: `${S}/interior-design-lead-generation-service/`, name: 'Interior design', sub: 'For studios, modular kitchen brands and fit-out firms.', filter: 'We filter out renters and people just looking for ideas.', img: '/images/industries/interior.webp' },
  { href: `${S}/study-abroad-lead-generation-service/`, name: 'Study abroad', sub: 'For consultancies and universities.', filter: 'We filter out students without the scores or funds for the course.', img: '/images/industries/studyabroad.webp' },
  { href: `${S}/education-lead-generation-company/`, name: 'Education', sub: 'For schools, colleges and coaching institutes.', filter: 'We filter out forms filled for free counselling, with no plan to enrol.', proof: '102 MBA and MCA admissions for SMS Group of Colleges.', img: '/images/industries/education.webp' },
  { href: `${S}/tour-and-travel-lead-generation-service/`, name: 'Tour and travel', sub: 'For travel agents, tour operators and DMCs.', filter: 'We filter out price shoppers comparing five agents.', img: '/images/industries/travel.webp' },
  { href: `${S}/b2b-lead-generation-company/`, name: 'B2B', sub: 'For companies with long sales cycles.', filter: 'We filter out job seekers and students filling demo forms.', img: '/images/industries/b2b.webp' },
];

export const moreIndustries = [
  { label: 'Plots and land', href: `${S}/plots-and-lands-lead-generation-agency/` },
  { label: 'Commercial leasing', href: `${S}/commercial-property-lead-generation-services/` },
  { label: 'Coworking', href: `${S}/coworking-leasing-lead-generation-service/` },
  { label: 'Banquet halls', href: `${S}/banquet-hall-lead-generation-service/` },
  { label: 'Automotive', href: `${S}/automobile-lead-generation-services/` },
];

// Case studies — real project photos, the actual client/developer, and a link to each published study.
export const caseStudies = [
  {
    tag: 'Real estate · Event', num: '14', title: 'bookings on the day, no site visit',
    client: 'Avira Dream Homes Pvt. Ltd.',
    text: 'Patna property showcase for Greater Noida studios: about 800 leads, 250+ investors at the venue and 14 bookings on the day.',
    facts: ['800 leads', '250+ walk-ins'], img: '/images/cases/patna.webp',
    alt: 'Hotel Patliputra Exotica, Exhibition Road, Patna — venue of the Avira Dream Homes property showcase.',
    href: `${S}/avira-dream-homes-patna-property-showcase-case-study/`,
  },
  {
    tag: 'Real estate · Event', num: '80+', title: 'allotments from our leads',
    client: 'Bullmen Realty · Developer: Eleque Infra',
    text: 'Dholera plots investors meet at The Leela, Delhi: about 1,700 leads, 300+ investors walked in, and 80+ of the 171 allotments came from our leads.',
    facts: ['1,700+ leads', '300+ walk-ins'], img: '/images/cases/leela.webp',
    alt: 'Eleque Infra marks 171 allotments on stage at The Leela, Delhi, 1 November 2026.',
    href: `${S}/dholera-investors-meet-case-study/`,
  },
  {
    tag: 'Real estate · Noida', num: '14', title: 'conversions in three months',
    client: 'Godrej Properties',
    text: 'Godrej Palm Retreat, Sector 150, Noida: 650 leads and 14 conversions in three months.',
    facts: ['650 leads', '3 months'], img: '/images/cases/godrej-palm-retreat.webp',
    alt: 'Godrej Palm Retreat, Sector 150, Noida — project view.',
    href: `${S}/godrej-palm-retreat-case-study/`,
  },
];

export const services = [
  { href: `${S}/real-estate-lead-generation/`, tag: 'Real estate', title: 'Real estate lead generation', text: 'Campaigns for developers, channel partners and brokers, with up to 60 percent qualified leads.', img: '/images/industries/realestate.webp', icon: 'bi-buildings' },
  { href: `${S}/lead-generation-company/`, tag: 'Leads', title: 'Lead generation', text: 'Google, Meta and LinkedIn campaigns for education, interiors, travel and B2B, built around qualified leads.', img: '/images/services/leads.webp', icon: 'bi-funnel' },
  { href: `${S}/new-project-launch-marketing/`, tag: 'Launch', title: 'Project launches', text: 'Launch campaigns for new real estate projects, planned around your launch date.', img: '/images/services/launch.webp', icon: 'bi-rocket-takeoff' },
  { href: `${S}/wikipedia-page-creation-service/`, tag: 'Wikipedia', title: 'Wikipedia page creation', text: "We research, write and submit Wikipedia pages for companies and people, following Wikipedia's rules.", img: '/images/services/wikipedia.webp', icon: 'bi-wikipedia' },
  { href: `${S}/website-development/`, tag: 'Web', title: 'Website development', text: 'Fast, mobile-friendly websites that explain what you sell and turn visitors into enquiries.', img: '/images/services/web.webp', icon: 'bi-window-stack' },
  { href: `${S}/services/`, tag: 'SaaS', title: 'SaaS development', text: 'Software-as-a-service products, built the way we built our own CRM and reporting dashboard that clients use every day.', img: '/images/services/saas.webp', icon: 'bi-cloud-check' },
];

export const moreServices = [
  { label: 'Exclusive interior leads', href: `${S}/exclusive-interior-leads/` },
  { label: 'Mobile app development', href: `${S}/mobile-app-development-company/` },
  { label: 'Banquet hall leads', href: `${S}/banquet-hall-lead-generation-service/` },
  { label: 'Photographer and videographer leads', href: `${S}/lead-generation-services-for-photographers-or-videographers/` },
];

export const dashboardFeatures = [
  { title: 'Leads at a glance', text: 'Leads delivered today, yesterday, in the last 7 days, this month, last month and since you started.', icon: 'bi-speedometer2' },
  { title: 'Every project, side by side', text: 'Live and paused projects, the cost per lead of each so you can see which costs more, and AI recommendations on what to change next.', icon: 'bi-layout-split' },
  { title: 'Billing you can check', text: "What you've spent and the full breakup, including service charge and GST, with every payment you've made.", icon: 'bi-receipt' },
  { title: 'Daily reports', text: 'Pick any date range and see leads delivered, cost per lead and the projects running in that period.', icon: 'bi-calendar3' },
  { title: 'Meet your team', text: 'The names and contacts of the people handling your account, so you always know who to call.', icon: 'bi-people' },
  { title: 'Alerts and notifications', text: 'A cost-per-lead ceiling on every project. If something drifts, you hear about it the same day, marked by how serious it is.', icon: 'bi-bell' },
];

export const steps = [
  { when: 'Day 1', title: 'A call about your project', text: "We learn your project, price, location and how your sales team works. If we don't think we can get you qualified leads, we tell you on this call." },
  { when: 'Day 1 to 2', title: 'Everything in writing', text: 'You get the pricing (per lead or retainer) and the names of your team in writing, before you pay anything.' },
  { when: 'Day 3 to 5', title: 'Build and go live', text: 'We make the ads, landing page and lead forms, and connect your free CRM and dashboard. You approve everything before it goes live.' },
  { when: 'Every week', title: 'Review and replace', text: "Your team tags each lead in the CRM. Every week we check those tags, replace fake, invalid and broker leads, and move budget to what's working." },
];

export const aboutTabs = [
  { label: 'Our Mission', text: 'To give every client leads they can trust and numbers they can check. We take only the projects we can deliver, replace fake, invalid and broker leads, and refund what we fall short on.' },
  { label: 'Our Vision', text: 'An industry where agencies are paid for qualified leads, not for how much they spend, and where no client has to wonder where their budget went.' },
  { label: 'Our Story', text: 'Alok Kumar Singh founded AAJneeti in Noida in 2014. "Aaj" means today, and "neeti" means strategy, and also principles. The name still describes how we work: a plan built for today\'s market, and principles we don\'t bend. Real estate was our first market and is still most of what we do; education, interiors, events and B2B came later. Along the way we built our own CRM, our own reporting dashboard and a blocklist of 1 lakh+ known fake contacts.' },
];

export const videos = [
  { id: 'k53HhwXEb9M', title: 'Residential project walkthrough', sub: 'Noida launch · project film' },
  { id: 'e6vF1bAG9Do', title: 'Builder credibility film', sub: 'Brand trust · real estate' },
  { id: 'xwf0EbyPjFo', title: 'NRI investor explainer', sub: 'Dubai & GCC audiences' },
  { id: 'HYvaZAg-YOs', title: 'Admissions campaign creative', sub: 'Education · enrolment season' },
];

export const testimonials = [
  { name: 'Rajeev Anand', company: 'Anand and Anand Advisors Pvt Ltd', rating: 5.0, quote: 'For Rudra Palace Heights, we were getting leads more suitable for the affordable housing segment. Our campaign manager at AAJneeti turned this around by using ad hooks that specifically mentioned 3 BHK and the starting price, and targeting premium corporate segments and executive profiles in Greater Noida. Our booking numbers are quite encouraging now.' },
  { name: 'Kanu', company: 'KPI Realty', rating: 5.0, quote: 'Our biggest headache was real estate leads that were unreachable. People put in fake numbers in lead forms, which was a big waste of time for our telecallers. AAJneeti integrated strict qualification layers into our Cosmos AU campaigns to verify buyer intent. Thus, now, our property consultants speak only to serious buyers with real budgets.' },
  { name: 'Dev', company: 'InvestoXpert', rating: 4.5, quote: 'We loved our initial video ad for Krisala Apartments but it was attracting too many casual browsers and we were getting a lot of junk leads in our database. AAJneeti took prompt action to change creative angles, state project specifications upfront, and introduced a more effective lead form. The number of leads dropped slightly but the lead quality we are getting now is much better.' },
  { name: 'Amit Arora', company: 'Realty Smartz Private Limited', rating: 5.0, quote: 'We have partnered with AAJneeti for over five years, and they have generated great leads for us across multiple property showcase events. Recently, they ran a specialised lead generation campaign for the Omaxe Dwarka event that turned out to be a huge success. We got an exceptional on-ground footfall and 70+ serious buyer enquiries.' },
  { name: 'Mrinalini Mehta', company: 'Shoolini University', rating: 5.0, quote: 'Higher education enrollment campaigns are unlike any other category. The buyer is researching for months, comparing options carefully. AAJneeti built campaigns around that long decision cycle, kept us top-of-mind through nurture sequences, and delivered prospective students who were genuinely informed about what we offer.' },
  { name: 'Harshal Chittransh', company: 'Adobe Realty', rating: 4.5, quote: "What I value the most is ‘commitment’. If someone doesn’t honour his or her word, I can’t work with them. I have had a very pleasant experience with AAJneeti in this regard. They are proactive in taking approvals and sharing reports, send reminders for lead feedback whenever my team slacks off, and respond quickly." },
  { name: 'Tanu', company: 'Manasa HomeLane', rating: 5.0, quote: "AAJneeti's lead generation meant our design consultants spoke only to homeowners with real briefs and real budgets - not casual enquirers. The campaigns also performed consistently across markets like Guwahati where most agencies struggle. Our cost per consultation dropped, and conversion improved across the funnel." },
  { name: 'Saurabh Gupta', company: 'Urban Avenues', rating: 4.3, quote: 'Noida, and NCR in general, is very competitive in the field of real estate consultancy. I needed something more than lead generation to stand out - a bit of online branding as well as image building to cultivate trust in our clients. Alok guided us personally on branding and establishing ourselves as real estate experts while his team handled our lead generation campaigns well.' },
  { name: 'Amitabh Pandey', company: 'SMS Varanasi', rating: 5.0, quote: 'Education marketing runs on tight admission windows - campaigns have to go live when parents and students are actively searching, not weeks later. AAJneeti understood that from the first conversation. Their team moves fast, the enquiries are genuinely interested in our programmes, and support stays consistent through the season.' },
  { name: 'Vipul Gupta', company: 'Director', rating: 5.0, quote: 'B2B for interior design firms is mostly LinkedIn theatre. The AAJneeti team built a lead engine for our specific salesperson: leads that match her sector, her ticket size, her city. Six-figure deals in month four.' },
  { name: 'Amitesh Pandey', company: 'True Acre', rating: 5.0, quote: 'We started working with AAJneeti about eight years ago. Until then, I was not really convinced real estate lead generation is effective enough to get me real clients. But AAJneeti has given me serious buyers consistently - and has kept my sales team busy during weekends.' },
  { name: 'Mohd. Asif', company: 'Saya Group', rating: 4.3, quote: "As a developer, we need agencies that understand the pace and pressure of property launches. AAJneeti delivers on both. Their lead targeting is sharper than anyone else we've worked with, and their team responds to campaign feedback swiftly. That speed translates directly into faster bookings." },
];

export const officeStats = [
  { value: '30+', label: 'Specialists' },
  { value: '4h', label: 'Average response' },
  { value: 'IST + EST', label: 'Time-zone coverage' },
];

export const offices = [
  { city: 'Noida', desc: 'Sector 63 · headquarters', tag: 'HQ' },
  { city: 'Lucknow', desc: 'Performance and creative team', tag: 'India' },
  { city: 'Bengaluru', desc: 'B2B, SaaS and tech', tag: 'India' },
  { city: 'Kolkata', desc: 'East India real estate', tag: 'India' },
  { city: 'Dehradun', desc: 'Regional office', tag: 'India' },
  { city: 'USA', desc: 'North America, US-hours cover', tag: 'Global' },
];

export const posts = [
  { tag: 'Real estate', read: '11 min read', title: 'Real Estate Digital Marketing Tips: How AAJneeti Handles Overnight Shifts in Buyer Preferences', img: '/images/blog/1.webp' },
  { tag: 'Lead generation', read: '19 min read', title: '23 Methods for Real Estate Lead Generation in 2026', img: '/images/blog/2.webp' },
  { tag: 'Lead generation', read: '6 min read', title: 'Get Exclusive Interior Leads Who Are Ready With ACL', img: '/images/blog/3.webp' },
];

export const faqs = [
  { q: 'What is AAJneeti Connect Ltd.?', a: 'AAJneeti Connect Ltd. is a lead generation company based in Sector 63, Noida, working since 2014. We run Google, Meta and LinkedIn campaigns for real estate developers and brokers, education institutions, interior studios, event businesses and B2B companies, with up to 60 percent qualified leads.' },
  { q: 'Do you take every project that comes to you?', a: "No. Before you pay, we tell you honestly whether your project can get qualified leads. If we don't think it can, we say so and don't take it on." },
  { q: 'What does AAJneeti count as a qualified lead?', a: 'A lead who shows genuine interest and has a budget, timeline and location that match your offer. The exact criteria are agreed in your contract. Your team calls each lead within 24 hours and tags it in your free CRM, and our QC team cross-checks those tags.' },
  { q: 'How do you protect me from fake leads?', a: 'Every new lead is checked against our blocklist of 1 lakh+ known fake contacts and replaced automatically if it matches. Where a campaign needs it, we also use OTP-verified forms, qualifying questions and duplicate removal.' },
  { q: 'What happens if you fall short of the guarantee?', a: 'Fake, invalid and broker leads are replaced first. If the campaign still ends short of the qualified share in your contract, we apologise and refund the shortfall within 15 working days.' },
  { q: 'How much does lead generation cost?', a: 'Smaller budgets pay per lead; larger budgets work on a monthly retainer, with the ad budget paid separately. The price depends on the industry, the city and how strict the qualification is, so we quote after a free project review.' },
  { q: 'How quickly can a campaign go live?', a: 'Usually 3 to 5 working days after you approve the plan, the ads and the landing page. Leads start arriving the day the ads go live.' },
  { q: 'What can I see while my campaign runs?', a: 'You get two tools free: a CRM where every lead arrives in real time, and a reporting dashboard showing leads, cost per lead, spend, billing and alerts for each project. You see your own projects and nothing else.' },
  { q: 'Which industries and locations do you work with?', a: 'Mostly real estate: residential, commercial, plots, leasing and NRI buyers. We also work with education, study abroad, interior design, tour and travel, events and weddings, automotive and B2B. Our offices are in Noida (headquarters), Lucknow, Bengaluru, Kolkata and Dehradun, and we run campaigns across India, Dubai and the US.' },
  { q: 'How can I check that a call or message is really from AAJneeti?', a: 'We only contact clients from the phone numbers and email addresses listed on this site. If someone asks for money in AAJneeti\'s name and you\'re unsure, write to us through the <a href="https://aajneeti.social/grievance-redressal/">grievance redressal page</a> before paying anything.' },
];

export const ctaStats = [
  { value: '200+', label: 'Active clients' },
  { value: '₹300 crore+', label: 'Ad spend managed' },
  { value: '1 lakh+', label: 'Fake contacts on our blocklist' },
  { value: '4.5+', label: 'Rated on Google' },
];

export const footerCols = [
  { title: 'Company Info', links: ['About Us', 'Contact Us', 'Make a Payment', 'Digital Marketing Blog', 'Careers at AAJneeti Connect Ltd.'] },
  { title: 'Marketing Services', links: ['Performance Marketing', 'Lead Generation', 'App Development', 'Website Design & Development', 'Best Wikipedia Page Creation Service'] },
  { title: 'Industries We Excel In', links: ['Real Estate', 'Educational Institution', 'Interior Design', 'Plot & Farm', 'Coworking', 'B2B', 'New Project Launch', 'Political Campaigns'] },
];

export const cities = ['India', 'Dubai', 'Gurugram', 'Pune', 'Goa', 'Ahmedabad', 'Jaipur', 'Ayodhya', 'Mumbai', 'Zirakpur', 'Chandigarh', 'Hyderabad', 'Nagpur', 'Haridwar', 'Chennai', 'Ghaziabad', 'Sonipat', 'Mohali', 'Indore', 'Rishikesh', 'Bengaluru', 'Coworking Leasing'];

const footerHref = {
  'About Us': '/about-us/', 'Contact Us': '/contact-us/', 'Make a Payment': '/payment/', 'Digital Marketing Blog': '/blog/',
  'Careers at AAJneeti Connect Ltd.': '/career-at-aajneeti/', 'Performance Marketing': '/performance-marketing/',
  'Lead Generation': '/lead-generation-company/', 'App Development': '/mobile-app-development-company/',
  'Website Design & Development': '/website-development/', 'Best Wikipedia Page Creation Service': '/wikipedia-page-creation-service/',
  'Real Estate': '/real-estate-lead-generation/', 'Educational Institution': '/education-lead-generation-company/',
  'Interior Design': '/interior-design-lead-generation-service/', 'Plot & Farm': '/plots-and-lands-lead-generation-agency/',
  'Coworking': '/coworking-leasing-lead-generation-service/', 'B2B': '/b2b-lead-generation-company/',
  'New Project Launch': '/new-project-launch-marketing/', 'Political Campaigns': '/political-campaign-management-company-in-india/',
};
export const linkFor = (label) => S + (footerHref[label] || '/');

const citySlug = { India: '/real-estate-lead-generation/', Haridwar: '/real-estate-lead-generation-service-in-haridwar/', Rishikesh: '/real-estate-lead-generation-service-in-rishikesh/', 'Coworking Leasing': '/coworking-leasing-lead-generation-service/' };
export const cityHref = (c) => S + (citySlug[c] || `/real-estate-lead-generation-in-${c.toLowerCase()}/`);

export const links = {
  contact: `${S}/contact-us/`, caseStudies: `${S}/category/case-studies/`, crm: 'https://crm.aajneeti.social/',
  dashboard: 'https://reports.aajneeti.social/', products: `${S}/products/`, payment: `${S}/payment/`, team: `${S}/our-team/`,
  about: `${S}/about-us/`, blog: `${S}/blog/`, offices: `${S}/about/offices/`, privacy: `${S}/privacy-policy/`,
  terms: `${S}/terms-of-service/`, refund: `${S}/refund-policy/`, hr: `${S}/hr-policy/`,
  google: 'https://www.google.com/search?q=AAJneeti+Connect+Ltd+reviews', realtyKnight: 'https://www.youtube.com/@TheRealtyKnight',
  officeHref: { Noida: `${S}/real-estate-lead-generation-in-noida/`, Lucknow: `${S}/real-estate-lead-generation-in-lucknow/`, Bengaluru: `${S}/real-estate-lead-generation-in-bengaluru/`, Kolkata: `${S}/real-estate-lead-generation-in-kolkata/`, Dehradun: `${S}/dehradun/`, USA: `${S}/usa/` },
};

// Footer "Top Cities We Serve" — grouped exactly as on aajneeti.social
const cg = (label, items) => ({ label, items: items.map(([name, path]) => ({ name, href: S + path })) });
export const cityGroups = [
  cg('Real Estate Lead Generation', [
    ['India', '/real-estate-lead-generation/'], ['Dubai', '/real-estate-lead-generation-in-dubai/'], ['Gurugram', '/real-estate-lead-generation-in-gurugram/'],
    ['Pune', '/real-estate-lead-generation-in-pune/'], ['Goa', '/real-estate-lead-generation-in-goa/'], ['Ahmedabad', '/real-estate-lead-generation-in-ahmedabad/'],
    ['Jaipur', '/real-estate-lead-generation-in-jaipur/'], ['Ayodhya', '/real-estate-lead-generation-in-ayodhya/'], ['Mumbai', '/real-estate-lead-generation-in-mumbai/'],
    ['Zirakpur', '/real-estate-lead-generation-in-zirakpur/'], ['Chandigarh', '/real-estate-lead-generation-in-chandigarh/'], ['Hyderabad', '/real-estate-lead-generation-in-hyderabad/'],
    ['Nagpur', '/real-estate-lead-generation-in-nagpur/'], ['Haridwar', '/real-estate-lead-generation-service-in-haridwar/'], ['Chennai', '/real-estate-lead-generation-in-chennai/'],
    ['Ghaziabad', '/real-estate-lead-generation-in-ghaziabad/'], ['Sonipat', '/real-estate-lead-generation-in-sonipat/'], ['Mohali', '/real-estate-lead-generation-in-mohali/'],
    ['Indore', '/real-estate-lead-generation-in-indore/'], ['Rishikesh', '/real-estate-lead-generation-service-in-rishikesh/'],
  ]),
  cg('Interior Design Lead Generation', [['Mumbai', '/interior-design-lead-generation-in-mumbai/'], ['Bengaluru', '/interior-design-lead-generation-in-bengaluru/']]),
  cg('Leasing & Coworking Lead Generation', [['Coworking Leasing', '/coworking-leasing-lead-generation-service/']]),
];

// Logo groups — same split as aajneeti.social's two logo rows
const byName = (names) => names.map((n) => brands.find((b) => b.name === n)).filter(Boolean);
export const developers = byName(['Godrej Properties', 'L&T Realty', 'Prestige Group', 'Sobha Developers', 'M3M India', 'Max Estates', 'Gaurs Group', 'CRC Group']);
export const channelPartners = byName(['ACE Group', 'Atulyam', 'Elegance Enterprises', 'Jenika Ventures']);
