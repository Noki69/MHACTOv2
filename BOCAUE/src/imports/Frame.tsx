import svgPaths from "./svg-5r2nucl7jf";
const imgMhactoLogo2 = "/assets/MHACTO LOGO.jpg";
const imgMunicipalityOfBocaueLogo1 = "/assets/Bocaue Logo.jpg";

function Header() {
  return (
    <div className="absolute contents left-[0.45px] top-[-96.51px]" data-name="Header">
      <div className="absolute bg-[#f8f6f1] h-[101.682px] left-[0.45px] top-[8.64px] w-[1920px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] h-[81.981px] justify-center leading-[0] left-[802.48px] not-italic text-[15px] text-black text-center top-[58.99px] w-[48.057px]">
        <p className="leading-[25px] whitespace-pre-wrap">Home</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] h-[84px] justify-center leading-[0] left-[864.45px] not-italic text-[15px] text-black text-center top-[59px] w-[56px]">
        <p className="leading-[25px] whitespace-pre-wrap">About</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] h-[84.227px] justify-center leading-[0] left-[952.56px] not-italic text-[15px] text-black text-center top-[59.11px] w-[111.76px]">
        <p className="leading-[25px] whitespace-pre-wrap">Tourist Spots</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] h-[84.227px] justify-center leading-[0] left-[1047.18px] not-italic text-[15px] text-black text-center top-[59.11px] w-[61.468px]">
        <p className="leading-[25px] whitespace-pre-wrap">Culture</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] h-[84.227px] justify-center leading-[0] left-[1211.12px] not-italic text-[15px] text-black text-center top-[59.11px] w-[79.349px]">
        <p className="leading-[25px] whitespace-pre-wrap">Inquiry</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] justify-center leading-[0] left-[1129.45px] not-italic size-[84px] text-[15px] text-black text-center top-[59px]">
        <p className="leading-[25px] whitespace-pre-wrap">Programs</p>
      </div>
      <div className="absolute left-[100.02px] size-[311.077px] top-[-96.51px]" data-name="mhacto-logo 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMhactoLogo2} />
      </div>
      <div className="absolute left-[1788.45px] rounded-[132.5px] size-[74.138px] top-[20px]" data-name="Municipality of bocaue logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[132.5px] size-full" src={imgMunicipalityOfBocaueLogo1} />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.1)] h-[114.489px] left-[0.45px] top-0 w-[1913.914px]" />
    </div>
  );
}

function H2SectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[48px] text-center whitespace-nowrap">
        <p className="leading-[76.8px]">Our Commitment to Heritage and Tourism</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.69px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">{`The Municipal History, Arts, Culture and Tourism Office stands as the guardian of Bocaue's rich heritage. We are dedicated to`}</p>
        <p className="mb-0">preserving the historical narratives that have shaped our community, ensuring that the stories of our ancestors continue to inspire</p>
        <p>and educate present and future generations.</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.685px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">Through comprehensive documentation, cultural programming, and tourism development, we foster a deeper appreciation for the</p>
        <p className="mb-0">traditions, artistry, and values that define Bocaue. Our work bridges the past with the present, creating meaningful connections</p>
        <p>between our heritage and contemporary life.</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">{`We invite all visitors and residents to explore our municipality's cultural landscape, participate in our programs, and become`}</p>
        <p>active stewards of the heritage that makes Bocaue a place of enduring significance.</p>
      </div>
    </div>
  );
}

function DivIntroText() {
  return (
    <div className="content-stretch flex flex-col gap-[23.1px] items-start relative shrink-0 w-full" data-name="div.intro-text">
      <P />
      <P1 />
      <P2 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Component 1">
          <path d={svgPaths.p26d20180} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.p533c280} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function DivFeatureIcon() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[236px] py-[12px] top-0 w-[64px]" data-name="div.feature-icon">
      <Component />
    </div>
  );
}

function H3FeatureTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[79px]" data-name="h3.feature-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[38.4px]">Historical Preservation</p>
      </div>
    </div>
  );
}

function PFeatureDescription() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[0.59px] right-0 top-[125.39px]" data-name="p.feature-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[25.6px]">Safeguarding our past for future generations</p>
      </div>
    </div>
  );
}

function DivFeatureItem() {
  return (
    <div className="absolute h-[151.98px] left-0 right-[568px] top-0" data-name="div.feature-item">
      <DivFeatureIcon />
      <H3FeatureTitle />
      <PFeatureDescription />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Component 1">
          <path d={svgPaths.p15952980} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.p1c9d7bc0} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.p2cebd150} id="Vector_3" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d="M16.6667 10H23.3333" id="Vector_4" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d="M16.6667 16.6667H23.3333" id="Vector_5" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d="M16.6667 23.3333H23.3333" id="Vector_6" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d="M16.6667 30H23.3333" id="Vector_7" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function DivFeatureIcon1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[236px] py-[12px] top-0 w-[64px]" data-name="div.feature-icon">
      <Component1 />
    </div>
  );
}

function H3FeatureTitle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[79px]" data-name="h3.feature-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[38.4px]">Cultural Promotion</p>
      </div>
    </div>
  );
}

function PFeatureDescription1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[0.59px] right-0 top-[125.39px]" data-name="p.feature-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[25.6px]">Celebrating traditions and artistic heritage</p>
      </div>
    </div>
  );
}

function DivFeatureItem1() {
  return (
    <div className="absolute h-[151.98px] left-[568px] right-0 top-0" data-name="div.feature-item">
      <DivFeatureIcon1 />
      <H3FeatureTitle1 />
      <PFeatureDescription1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Component 1">
          <path d={svgPaths.p3bbd740} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.pdd0b300} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function DivFeatureIcon2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[236px] py-[12px] top-0 w-[64px]" data-name="div.feature-icon">
      <Component2 />
    </div>
  );
}

function H3FeatureTitle2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[79px]" data-name="h3.feature-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[38.4px]">Tourism Initiatives</p>
      </div>
    </div>
  );
}

function PFeatureDescription2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[0.59px] right-0 top-[125.39px]" data-name="p.feature-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[25.6px]">Showcasing the beauty and significance of Bocaue</p>
      </div>
    </div>
  );
}

function DivFeatureItem2() {
  return (
    <div className="absolute h-[151.98px] left-0 right-[568px] top-[183.98px]" data-name="div.feature-item">
      <DivFeatureIcon2 />
      <H3FeatureTitle2 />
      <PFeatureDescription2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Component 1">
          <path d={svgPaths.pfcdd580} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.p1517b200} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.p2a06b680} id="Vector_3" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
          <path d={svgPaths.p2e47c70} id="Vector_4" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function DivFeatureIcon3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[236px] py-[12px] top-0 w-[64px]" data-name="div.feature-icon">
      <Component3 />
    </div>
  );
}

function H3FeatureTitle3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[79px]" data-name="h3.feature-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[38.4px]">Community Programs</p>
      </div>
    </div>
  );
}

function PFeatureDescription3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[0.59px] right-0 top-[125.39px]" data-name="p.feature-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[25.6px]">Engaging residents in cultural activities</p>
      </div>
    </div>
  );
}

function DivFeatureItem3() {
  return (
    <div className="absolute h-[151.98px] left-[568px] right-0 top-[183.98px]" data-name="div.feature-item">
      <DivFeatureIcon3 />
      <H3FeatureTitle3 />
      <PFeatureDescription3 />
    </div>
  );
}

function DivFeaturesGrid() {
  return (
    <div className="h-[368.87px] relative shrink-0 w-full" data-name="div.features-grid">
      <DivFeatureItem />
      <DivFeatureItem1 />
      <DivFeatureItem2 />
      <DivFeatureItem3 />
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.1px] items-start left-[384px] max-w-[1152px] px-[24px] right-[384px] top-[1409px]" data-name="Introduction Section">
      <H2SectionTitle />
      <DivIntroText />
      <DivFeaturesGrid />
    </div>
  );
}

function DivHeroBg() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="div.hero-bg">
      <div className="absolute bg-gradient-to-t from-[rgba(248,246,241,0.95)] inset-0 to-[rgba(248,246,241,0)] via-1/2 via-[rgba(248,246,241,0.4)]" data-name="div.hero-overlay" />
    </div>
  );
}

function PHeroLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.hero-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[14px] tracking-[0.7px] w-full">
        <p className="leading-[22.4px] whitespace-pre-wrap">Municipality of Bocaue, Bulacan</p>
      </div>
    </div>
  );
}

function H1HeroTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.hero-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[72px] w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[79.2px]">{`Discover the Heart of `}</span>
          <span className="leading-[79.2px] text-[#b4532a]">Bocaue</span>
        </p>
      </div>
    </div>
  );
}

function PHeroDescription() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] pb-[16.9px] pt-[7.69px] relative shrink-0 w-[576px]" data-name="p.hero-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] whitespace-nowrap">
        <p className="mb-0">The Municipal History, Arts, Culture and Tourism Office preserves</p>
        <p>our heritage and promotes the rich traditions of Bocaue.</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#b4532a] content-stretch flex items-start px-[32px] py-[14px] relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[25.6px]">Explore Bocaue</p>
      </div>
    </div>
  );
}

function DivHeroInner() {
  return (
    <div className="content-stretch flex flex-col gap-[15.1px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="div.hero-inner">
      <PHeroLabel />
      <H1HeroTitle />
      <PHeroDescription />
      <Component4 />
    </div>
  );
}

function DivHeroContent() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[24px] relative shrink-0 w-[1280px]" data-name="div.hero-content">
      <DivHeroInner />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute bg-[#efeae2] content-stretch flex h-[1167px] items-center justify-center left-[0.45px] pb-[416.23px] pt-[415.22px] right-[-0.45px] top-[114px]" data-name="Hero Section">
      <DivHeroBg />
      <DivHeroContent />
    </div>
  );
}

function H2SectionSubtitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.section-subtitle">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[40px] w-full">
        <p className="leading-[64px] whitespace-pre-wrap">A Legacy Rooted in Tradition</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.565px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-nowrap">
        <p className="mb-0">{`Bocaue's history stretches back to the pre-colonial era, when`}</p>
        <p className="mb-0">indigenous communities thrived along the fertile banks of the Bocaue</p>
        <p className="mb-0">{`River. The name "Bocaue" is derived from the Tagalog word "bocawe,"`}</p>
        <p className="mb-0">referring to the bamboo traps used by early settlers to catch fish in the</p>
        <p>{`river's abundant waters.`}</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">With the arrival of Spanish missionaries in the 16th century, Bocaue</p>
        <p className="mb-0">became an important center of religious activity. The establishment of</p>
        <p className="mb-0">the parish under the patronage of St. Martin of Tours marked the</p>
        <p className="mb-0">beginning of a profound cultural transformation that blended</p>
        <p className="mb-0">indigenous traditions with Catholic faith, creating the unique spiritual</p>
        <p>identity that defines Bocaue today.</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.565px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Throughout the colonial period and into the modern era, Bocaue</p>
        <p className="mb-0">evolved from a rural farming community into a vibrant municipality.</p>
        <p className="mb-0">The town played significant roles during the Philippine Revolution and</p>
        <p className="mb-0">has continued to honor its historical roots while embracing progress</p>
        <p>and development.</p>
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Today, Bocaue stands as a testament to resilience and cultural</p>
        <p className="mb-0">continuity, where ancestral traditions are preserved with reverence,</p>
        <p className="mb-0">and the spirit of community remains as strong as ever. Our heritage is</p>
        <p>not merely remembered—it is lived and celebrated daily by our people.</p>
      </div>
    </div>
  );
}

function DivHistoryText() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.history-text">
      <div className="content-stretch flex flex-col gap-[23.4px] items-start pl-[48px] relative w-full">
        <H2SectionSubtitle />
        <P3 />
        <P4 />
        <P5 />
        <P6 />
      </div>
    </div>
  );
}

function DivHistoryContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[24px] relative" data-name="div.history-content">
      <DivHistoryText />
      <div className="absolute bg-[#1e3a34] bottom-0 left-0 top-0 w-[2px]" data-name="div.timeline-line" />
    </div>
  );
}

function DivHistoryImage() {
  return (
    <div className="flex-[1_0_0] h-[524px] min-h-px min-w-px relative" data-name="div.history-image">
      <div aria-hidden="true" className="absolute border-4 border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <div className="size-full" />
    </div>
  );
}

function HistorySection() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-center justify-center left-[344px] right-[344px] top-[2466.52px]" data-name="History Section">
      <DivHistoryContent />
      <DivHistoryImage />
    </div>
  );
}

function H2SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[48px] text-center whitespace-nowrap">
        <p className="leading-[76.8px]">Tourism Wonders Of Bocaue</p>
      </div>
    </div>
  );
}

function DivDestinationImage() {
  return (
    <div className="aspect-[387.3299865722656/290.4800109863281] relative shrink-0" data-name="div.destination-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip rounded-[inherit] w-full" />
    </div>
  );
}

function H3DestinationTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.destination-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] w-full">
        <p className="leading-[38.4px] whitespace-pre-wrap">Philippine Arena</p>
      </div>
    </div>
  );
}

function PDestinationDescription() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.destination-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The world's largest indoor arena, an`}</p>
        <p className="mb-0">architectural marvel and a point of pride for</p>
        <p>the community.</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-y-1/2 absolute left-[84.58px] size-[16px] top-[calc(50%-2.41px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[27.19px] relative shrink-0 w-[100.58px]" data-name="Component 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-0 not-italic text-[#1e3a34] text-[14px] top-[calc(50%-3.1px)] w-[76.898px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Learn More</p>
      </div>
      <Component7 />
    </div>
  );
}

function DivDestinationContent() {
  return (
    <div className="relative shrink-0 w-[387.33px]" data-name="div.destination-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.2px] items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
        <H3DestinationTitle />
        <PDestinationDescription />
        <Component6 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white left-0 right-[842.67px] top-0" data-name="Component 4">
      <div className="content-stretch flex flex-col gap-[0.01px] items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivDestinationImage />
        <DivDestinationContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivDestinationImage1() {
  return (
    <div className="aspect-[387.3299865722656/290.4800109863281] relative shrink-0" data-name="div.destination-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip rounded-[inherit] w-full" />
    </div>
  );
}

function H3DestinationTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.destination-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] w-full">
        <p className="leading-[38.4px] whitespace-pre-wrap">St. Martin of Tours Parish</p>
      </div>
    </div>
  );
}

function PDestinationDescription1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.destination-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">A historic church that serves as the spiritual</p>
        <p className="mb-0">heart of Bocaue, home to centuries of faith</p>
        <p>and tradition.</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-y-1/2 absolute left-[84.58px] size-[16px] top-[calc(50%-2.41px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[27.19px] relative shrink-0 w-[100.58px]" data-name="Component 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-0 not-italic text-[#1e3a34] text-[14px] top-[calc(50%-3.1px)] w-[76.898px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Learn More</p>
      </div>
      <Component10 />
    </div>
  );
}

function DivDestinationContent1() {
  return (
    <div className="relative shrink-0 w-[387.33px]" data-name="div.destination-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.2px] items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
        <H3DestinationTitle1 />
        <PDestinationDescription1 />
        <Component9 />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white left-[421.33px] right-[421.34px] top-0" data-name="Component 4">
      <div className="content-stretch flex flex-col gap-[0.01px] items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivDestinationImage1 />
        <DivDestinationContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivDestinationImage2() {
  return (
    <div className="aspect-[387.3399963378906/290.5] relative shrink-0" data-name="div.destination-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip rounded-[inherit] w-full" />
    </div>
  );
}

function H3DestinationTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.destination-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] w-full">
        <p className="leading-[38.4px] whitespace-pre-wrap">Bocaue River</p>
      </div>
    </div>
  );
}

function PDestinationDescription2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.destination-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">The lifeblood of our municipality, central to</p>
        <p className="mb-0">local history and the celebrated Pagoda</p>
        <p>Festival.</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="-translate-y-1/2 absolute left-[84.57px] size-[16px] top-[calc(50%-2.42px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component12() {
  return (
    <div className="h-[27.2px] relative shrink-0 w-[100.58px]" data-name="Component 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-0 not-italic text-[#1e3a34] text-[14px] top-[calc(50%-3.1px)] w-[76.898px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Learn More</p>
      </div>
      <Component13 />
    </div>
  );
}

function DivDestinationContent2() {
  return (
    <div className="relative shrink-0 w-[387.34px]" data-name="div.destination-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.2px] items-start pb-[23.99px] pt-[23px] px-[24px] relative w-full">
        <H3DestinationTitle2 />
        <PDestinationDescription2 />
        <Component12 />
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white left-[842.66px] right-0 top-0" data-name="Component 4">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivDestinationImage2 />
        <DivDestinationContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivDestinationImage3() {
  return (
    <div className="aspect-[387.3299865722656/290.4800109863281] relative shrink-0" data-name="div.destination-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip rounded-[inherit] w-full" />
    </div>
  );
}

function H3DestinationTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.destination-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] w-full">
        <p className="leading-[38.4px] whitespace-pre-wrap">Halamanan Festival Grounds</p>
      </div>
    </div>
  );
}

function PDestinationDescription3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.destination-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Vibrant gardens and public spaces where</p>
        <p className="mb-0">the annual Halamanan Festival celebrates</p>
        <p>ornamental plants.</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="-translate-y-1/2 absolute left-[84.58px] size-[16px] top-[calc(50%-2.41px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component15() {
  return (
    <div className="h-[27.19px] relative shrink-0 w-[100.58px]" data-name="Component 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-0 not-italic text-[#1e3a34] text-[14px] top-[calc(50%-3.1px)] w-[76.898px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Learn More</p>
      </div>
      <Component16 />
    </div>
  );
}

function DivDestinationContent3() {
  return (
    <div className="relative shrink-0 w-[387.33px]" data-name="div.destination-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.2px] items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
        <H3DestinationTitle3 />
        <PDestinationDescription3 />
        <Component15 />
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute bg-white left-0 right-[842.67px] top-[542.85px]" data-name="Component 4">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivDestinationImage3 />
        <DivDestinationContent3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivDestinationImage4() {
  return (
    <div className="aspect-[387.3299865722656/290.4800109863281] relative shrink-0" data-name="div.destination-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip rounded-[inherit] w-full" />
    </div>
  );
}

function H3DestinationTitle4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.destination-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] w-full">
        <p className="leading-[38.4px] whitespace-pre-wrap">Town Heritage Areas</p>
      </div>
    </div>
  );
}

function PDestinationDescription4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.destination-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Historic districts that preserve the</p>
        <p className="mb-0">architectural and cultural character of old</p>
        <p>Bocaue.</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="-translate-y-1/2 absolute left-[84.58px] size-[16px] top-[calc(50%-2.41px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component18() {
  return (
    <div className="h-[27.19px] relative shrink-0 w-[100.58px]" data-name="Component 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-0 not-italic text-[#1e3a34] text-[14px] top-[calc(50%-3.1px)] w-[76.898px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Learn More</p>
      </div>
      <Component19 />
    </div>
  );
}

function DivDestinationContent4() {
  return (
    <div className="relative shrink-0 w-[387.33px]" data-name="div.destination-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.2px] items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
        <H3DestinationTitle4 />
        <PDestinationDescription4 />
        <Component18 />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute bg-white left-[421.33px] right-[421.34px] top-[542.85px]" data-name="Component 4">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivDestinationImage4 />
        <DivDestinationContent4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivDestinationImage5() {
  return (
    <div className="aspect-[387.3399963378906/290.5] relative shrink-0" data-name="div.destination-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip rounded-[inherit] w-full" />
    </div>
  );
}

function H3DestinationTitle5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.destination-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] w-full">
        <p className="leading-[38.4px] whitespace-pre-wrap">Local Nature Spots</p>
      </div>
    </div>
  );
}

function PDestinationDescription5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.destination-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Scenic natural areas offering peaceful</p>
        <p className="mb-0">retreats and opportunities to appreciate</p>
        <p>{`Bocaue's landscape.`}</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="-translate-y-1/2 absolute left-[84.57px] size-[16px] top-[calc(50%-2.41px)]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component21() {
  return (
    <div className="h-[27.19px] relative shrink-0 w-[100.58px]" data-name="Component 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-0 not-italic text-[#1e3a34] text-[14px] top-[calc(50%-3.1px)] w-[76.898px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Learn More</p>
      </div>
      <Component22 />
    </div>
  );
}

function DivDestinationContent5() {
  return (
    <div className="relative shrink-0 w-[387.34px]" data-name="div.destination-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.2px] items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
        <H3DestinationTitle5 />
        <PDestinationDescription5 />
        <Component21 />
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute bg-white left-[842.66px] right-0 top-[542.85px]" data-name="Component 4">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivDestinationImage5 />
        <DivDestinationContent5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivDestinationsGrid() {
  return (
    <div className="h-[1053.69px] relative shrink-0 w-full" data-name="div.destinations-grid">
      <Component5 />
      <Component8 />
      <Component11 />
      <Component14 />
      <Component17 />
      <Component20 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="div.container">
      <div className="content-stretch flex flex-col gap-[31.99px] items-start max-w-[inherit] px-[24px] relative w-full">
        <H2SectionTitle1 />
        <DivDestinationsGrid />
      </div>
    </div>
  );
}

function DestinationsSection() {
  return (
    <div className="absolute bg-[#efeae2] content-stretch flex flex-col items-start left-0 px-[320px] py-[128px] right-0 top-[3322.27px]" data-name="Destinations Section">
      <DivContainer />
    </div>
  );
}

function H2SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[48px] text-center whitespace-nowrap">
        <p className="leading-[76.8px]">Celebrating Local Traditions</p>
      </div>
    </div>
  );
}

function H3CultureTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.culture-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[40px] w-full">
        <p className="leading-[64px] whitespace-pre-wrap">The Pagoda Festival</p>
      </div>
    </div>
  );
}

function PCultureDescription() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.culture-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Every first Sunday of July, Bocaue celebrates the Pagoda Festival, a</p>
        <p className="mb-0">centuries-old tradition honoring the Holy Cross of Wawa. This</p>
        <p className="mb-0">religious procession along the Bocaue River draws thousands of</p>
        <p className="mb-0">devotees who participate in thanksgiving and renewal of faith. The</p>
        <p className="mb-0">festival embodies the deep spiritual connection between the</p>
        <p className="mb-0">community and their patron, reflecting values of devotion, unity, and</p>
        <p>gratitude passed down through generations.</p>
      </div>
    </div>
  );
}

function DivCultureText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.78px] items-start min-h-px min-w-px relative" data-name="div.culture-text">
      <H3CultureTitle />
      <PCultureDescription />
    </div>
  );
}

function DivCultureImage() {
  return (
    <div className="flex-[1_0_0] h-[424px] min-h-px min-w-px relative" data-name="div.culture-image">
      <div aria-hidden="true" className="absolute border-4 border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <div className="size-full" />
    </div>
  );
}

function DivCultureItem() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="div.culture-item">
      <DivCultureText />
      <DivCultureImage />
    </div>
  );
}

function DivCultureImage1() {
  return (
    <div className="flex-[1_0_0] h-[424px] min-h-px min-w-px relative" data-name="div.culture-image">
      <div aria-hidden="true" className="absolute border-4 border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <div className="size-full" />
    </div>
  );
}

function H3CultureTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.culture-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[40px] w-full">
        <p className="leading-[64px] whitespace-pre-wrap">Festival</p>
      </div>
    </div>
  );
}

function PCultureDescription1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.culture-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Bocaue is renowned as the "Halamanan Capital of the Philippines,"`}</p>
        <p className="mb-0">celebrating its thriving ornamental plant industry. The Halamanan</p>
        <p className="mb-0">{`Festival showcases the municipality's agricultural heritage and`}</p>
        <p className="mb-0">entrepreneurial spirit through vibrant displays of flowers, plants, and</p>
        <p className="mb-0">garden artistry. This event highlights not only economic achievement</p>
        <p className="mb-0">{`but also the community's dedication to beautification and`}</p>
        <p>environmental stewardship.</p>
      </div>
    </div>
  );
}

function DivCultureText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.78px] items-start min-h-px min-w-px relative" data-name="div.culture-text">
      <H3CultureTitle1 />
      <PCultureDescription1 />
    </div>
  );
}

function DivCultureItem1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="div.culture-item">
      <DivCultureImage1 />
      <DivCultureText1 />
    </div>
  );
}

function H3CultureTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.culture-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[40px] w-full">
        <p className="leading-[64px] whitespace-pre-wrap">Traditional Arts and Crafts</p>
      </div>
    </div>
  );
}

function PCultureDescription2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.culture-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">The people of Bocaue have long practiced traditional crafts, from</p>
        <p className="mb-0">weaving to woodwork, that reflect indigenous skills adapted over</p>
        <p className="mb-0">centuries. Local artisans continue to create works that honor</p>
        <p className="mb-0">ancestral techniques while incorporating contemporary expressions.</p>
        <p className="mb-0">These crafts are not merely products but carriers of cultural</p>
        <p className="mb-0">knowledge, connecting present practitioners to the wisdom and</p>
        <p>creativity of their forebears.</p>
      </div>
    </div>
  );
}

function DivCultureText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.78px] items-start min-h-px min-w-px relative" data-name="div.culture-text">
      <H3CultureTitle2 />
      <PCultureDescription2 />
    </div>
  );
}

function DivCultureImage2() {
  return (
    <div className="flex-[1_0_0] h-[424px] min-h-px min-w-px relative" data-name="div.culture-image">
      <div aria-hidden="true" className="absolute border-4 border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <div className="size-full" />
    </div>
  );
}

function DivCultureItem2() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="div.culture-item">
      <DivCultureText2 />
      <DivCultureImage2 />
    </div>
  );
}

function DivCultureItems() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-full" data-name="div.culture-items">
      <DivCultureItem />
      <DivCultureItem1 />
      <DivCultureItem2 />
    </div>
  );
}

function CultureSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[320px] max-w-[1280px] px-[24px] right-[320px] top-[4868.75px]" data-name="Culture Section">
      <H2SectionTitle2 />
      <DivCultureItems />
    </div>
  );
}

function H2SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[48px] text-center whitespace-nowrap">
        <p className="leading-[76.8px]">{`Programs & Initiatives`}</p>
      </div>
    </div>
  );
}

function PProgramsIntro() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] pb-[0.685px] relative shrink-0 w-[768px]" data-name="p.programs-intro">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[30.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">The Municipal History, Arts, Culture and Tourism Office implements a range of programs</p>
        <p className="mb-0">designed to preserve heritage, promote cultural engagement, and support sustainable</p>
        <p>tourism development in Bocaue.</p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 1">
          <path d={svgPaths.p29a7d300} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p1a1c7980} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p7225ec0} id="Vector_3" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DivProgramIcon() {
  return (
    <div className="absolute bg-[rgba(30,58,52,0.05)] content-stretch flex items-center justify-center left-0 rounded-[28px] size-[56px] top-0" data-name="div.program-icon">
      <Component24 />
    </div>
  );
}

function H3ProgramTextTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.program-text-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] whitespace-nowrap">
        <p className="leading-[38.4px]">Heritage Conservation</p>
      </div>
    </div>
  );
}

function PProgramTextDescription() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.program-text-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="mb-0">Systematic documentation and preservation of historical</p>
        <p className="mb-0">sites, artifacts, and oral histories that form the foundation of</p>
        <p>our municipal identity.</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[11.185px] items-start left-[72px] top-[-1px]" data-name="div">
      <H3ProgramTextTitle />
      <PProgramTextDescription />
    </div>
  );
}

function DivProgramCardInner() {
  return (
    <div className="h-[131.95px] relative shrink-0 w-[534px]" data-name="div.program-card-inner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivProgramIcon />
        <Div />
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[33px] right-[632px] top-0" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <DivProgramCardInner />
    </div>
  );
}

function Component26() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_1138)" id="Component 1">
          <path d={svgPaths.p7b8dd00} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.pf38b96f} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p22edaa00} id="Vector_3" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p1ba6fb70} id="Vector_4" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p12b0aa00} id="Vector_5" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d="M12.25 11.6667H12.2617" id="Vector_6" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p3ddb4980} id="Vector_7" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.pfec2fa0} id="Vector_8" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p3fb30780} id="Vector_9" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.pc7c9c00} id="Vector_10" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
        </g>
        <defs>
          <clipPath id="clip0_1_1138">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivProgramIcon1() {
  return (
    <div className="absolute bg-[rgba(30,58,52,0.05)] content-stretch flex items-center justify-center left-0 rounded-[28px] size-[56px] top-0" data-name="div.program-icon">
      <Component26 />
    </div>
  );
}

function H3ProgramTextTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.program-text-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] whitespace-nowrap">
        <p className="leading-[38.4px]">Arts Workshops</p>
      </div>
    </div>
  );
}

function PProgramTextDescription1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.program-text-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="mb-0">Educational programs that teach traditional and</p>
        <p className="mb-0">contemporary arts to community members, fostering</p>
        <p>creativity and cultural continuity.</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[11.185px] items-start left-[72px] min-w-[462px] top-[-1px]" data-name="div">
      <H3ProgramTextTitle1 />
      <PProgramTextDescription1 />
    </div>
  );
}

function DivProgramCardInner1() {
  return (
    <div className="h-[131.95px] relative shrink-0 w-[534px]" data-name="div.program-card-inner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivProgramIcon1 />
        <Div1 />
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[632px] p-[33px] right-0 top-0" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <DivProgramCardInner1 />
    </div>
  );
}

function Component28() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 1">
          <path d={svgPaths.pa75a70} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p1082cc0} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.pcc42cc0} id="Vector_3" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d="M11.6667 7H16.3333" id="Vector_4" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d="M11.6667 11.6667H16.3333" id="Vector_5" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d="M11.6667 16.3333H16.3333" id="Vector_6" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d="M11.6667 21H16.3333" id="Vector_7" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DivProgramIcon2() {
  return (
    <div className="absolute bg-[rgba(30,58,52,0.05)] content-stretch flex items-center justify-center left-0 rounded-[28px] size-[56px] top-0" data-name="div.program-icon">
      <Component28 />
    </div>
  );
}

function H3ProgramTextTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.program-text-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] whitespace-nowrap">
        <p className="leading-[38.4px]">Cultural Exhibits</p>
      </div>
    </div>
  );
}

function PProgramTextDescription2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.program-text-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="mb-0">Regular exhibitions showcasing local history, artworks, and</p>
        <p className="mb-0">cultural materials that educate residents and visitors about</p>
        <p>{`Bocaue's heritage.`}</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[11.185px] items-start left-[72px] min-w-[462px] top-[-1px]" data-name="div">
      <H3ProgramTextTitle2 />
      <PProgramTextDescription2 />
    </div>
  );
}

function DivProgramCardInner2() {
  return (
    <div className="h-[131.95px] relative shrink-0 w-[534px]" data-name="div.program-card-inner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivProgramIcon2 />
        <Div2 />
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[33px] right-[632px] top-[229.95px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <DivProgramCardInner2 />
    </div>
  );
}

function Component30() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 1">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
          <path d={svgPaths.p25f79f00} id="Vector_4" stroke="var(--stroke-0, #1E3A34)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DivProgramIcon3() {
  return (
    <div className="absolute bg-[rgba(30,58,52,0.05)] content-stretch flex items-center justify-center left-0 rounded-[28px] size-[56px] top-0" data-name="div.program-icon">
      <Component30 />
    </div>
  );
}

function H3ProgramTextTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.program-text-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[24px] whitespace-nowrap">
        <p className="leading-[38.4px]">Tourism Partnerships</p>
      </div>
    </div>
  );
}

function PProgramTextDescription3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.program-text-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27.2px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="mb-0">Collaborative initiatives with local businesses, organizations,</p>
        <p className="mb-0">and government agencies to promote responsible cultural</p>
        <p>tourism.</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[11.185px] items-start left-[72px] top-[-1px]" data-name="div">
      <H3ProgramTextTitle3 />
      <PProgramTextDescription3 />
    </div>
  );
}

function DivProgramCardInner3() {
  return (
    <div className="h-[131.95px] relative shrink-0 w-[534px]" data-name="div.program-card-inner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivProgramIcon3 />
        <Div3 />
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[632px] p-[33px] right-0 top-[229.95px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
      <DivProgramCardInner3 />
    </div>
  );
}

function DivProgramsGrid() {
  return (
    <div className="h-[460.82px] relative shrink-0 w-full" data-name="div.programs-grid">
      <Component23 />
      <Component25 />
      <Component27 />
      <Component29 />
    </div>
  );
}

function ProgramsSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.1px] items-center left-[320px] max-w-[1280px] px-[24px] right-[320px] top-[6697.55px]" data-name="Programs Section">
      <H2SectionTitle3 />
      <PProgramsIntro />
      <DivProgramsGrid />
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[#f8f6f1] text-[48px] text-center whitespace-nowrap">
        <p className="mb-0">Preserving the past. Enriching the present. Inspiring</p>
        <p>the future.</p>
      </div>
    </div>
  );
}

function StatementSection() {
  return (
    <div className="absolute bg-[#1e3a34] content-stretch flex flex-col items-start left-0 px-[448px] py-[96px] right-0 top-[7518.03px]" data-name="Statement Section">
      <H />
    </div>
  );
}

function H2SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[48px] text-center whitespace-nowrap">
        <p className="leading-[76.8px]">Contact Us</p>
      </div>
    </div>
  );
}

function H3ContactInfoTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.contact-info-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[30px] w-full">
        <p className="leading-[48px] whitespace-pre-wrap">Office Information</p>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p3a08480} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DivContactInfoIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.contact-info-icon">
      <Component31 />
    </div>
  );
}

function DivContactInfoIconMargin() {
  return (
    <div className="content-stretch flex flex-col h-[80.78px] items-start justify-center pt-[4px] relative shrink-0" data-name="div.contact-info-icon:margin">
      <DivContactInfoIcon />
    </div>
  );
}

function PContactInfoLabel() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.contact-info-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Address</p>
      </div>
    </div>
  );
}

function PContactInfoText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.contact-info-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="mb-0">Municipal History, Arts, Culture and Tourism Office</p>
        <p>Bocaue, Bulacan, Philippines</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col gap-[2.8px] h-full items-start relative shrink-0" data-name="div">
      <PContactInfoLabel />
      <PContactInfoText />
    </div>
  );
}

function DivContactInfoItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="div.contact-info-item">
      <DivContactInfoIconMargin />
      <div className="flex flex-row items-end self-stretch">
        <Div5 />
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p2bf8f980} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
          <path d={svgPaths.p311e6900} id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DivContactInfoIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.contact-info-icon">
      <Component32 />
    </div>
  );
}

function DivContactInfoIconMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[55.19px] items-start justify-center pt-[4px] relative shrink-0" data-name="div.contact-info-icon:margin">
      <DivContactInfoIcon1 />
    </div>
  );
}

function PContactInfoLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.contact-info-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Email</p>
      </div>
    </div>
  );
}

function PContactInfoText1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.contact-info-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">mhacto.bocaue@example.ph</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-start relative shrink-0" data-name="div">
      <PContactInfoLabel1 />
      <PContactInfoText1 />
    </div>
  );
}

function DivContactInfoItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="div.contact-info-item">
      <DivContactInfoIconMargin1 />
      <div className="flex flex-row items-end self-stretch">
        <Div6 />
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DivContactInfoIcon2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.contact-info-icon">
      <Component33 />
    </div>
  );
}

function DivContactInfoIconMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[55.19px] items-start justify-center pt-[4px] relative shrink-0" data-name="div.contact-info-icon:margin">
      <DivContactInfoIcon2 />
    </div>
  );
}

function PContactInfoLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.contact-info-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Phone</p>
      </div>
    </div>
  );
}

function PContactInfoText2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.contact-info-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">+63 (44) 123-4567</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-start relative shrink-0" data-name="div">
      <PContactInfoLabel2 />
      <PContactInfoText2 />
    </div>
  );
}

function DivContactInfoItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="div.contact-info-item">
      <DivContactInfoIconMargin2 />
      <div className="flex flex-row items-end self-stretch">
        <Div7 />
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
          <path d="M12 6V12L16 14" id="Vector_2" stroke="var(--stroke-0, #1E3A34)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DivContactInfoIcon3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.contact-info-icon">
      <Component34 />
    </div>
  );
}

function DivContactInfoIconMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[80.78px] items-start justify-center pt-[4px] relative shrink-0" data-name="div.contact-info-icon:margin">
      <DivContactInfoIcon3 />
    </div>
  );
}

function PContactInfoLabel3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.contact-info-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Office Hours</p>
      </div>
    </div>
  );
}

function PContactInfoText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.contact-info-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.6px] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="mb-0">Monday - Friday: 8:00 AM - 5:00 PM</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col gap-[2.805px] h-full items-start relative shrink-0" data-name="div">
      <PContactInfoLabel3 />
      <PContactInfoText3 />
    </div>
  );
}

function DivContactInfoItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="div.contact-info-item">
      <DivContactInfoIconMargin3 />
      <div className="flex flex-row items-end self-stretch">
        <Div8 />
      </div>
    </div>
  );
}

function DivContactInfoItems() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full" data-name="div.contact-info-items">
      <DivContactInfoItem />
      <DivContactInfoItem1 />
      <DivContactInfoItem2 />
      <DivContactInfoItem3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[31px] items-start min-h-px min-w-px relative self-stretch" data-name="div">
      <H3ContactInfoTitle />
      <DivContactInfoItems />
    </div>
  );
}

function H3ContactInfoTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.contact-info-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a34] text-[30px] w-full">
        <p className="leading-[48px] whitespace-pre-wrap">Send a Message</p>
      </div>
    </div>
  );
}

function LabelFormLabel() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[-1px]" data-name="label.form-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Full Name</p>
      </div>
    </div>
  );
}

function LabelFormLabelMargin() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="label.form-label:margin">
      <LabelFormLabel />
    </div>
  );
}

function InputFullName() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="input#fullName">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivFormGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-group">
      <LabelFormLabelMargin />
      <InputFullName />
    </div>
  );
}

function LabelFormLabel1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[-1px]" data-name="label.form-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Email Address</p>
      </div>
    </div>
  );
}

function LabelFormLabelMargin1() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="label.form-label:margin">
      <LabelFormLabel1 />
    </div>
  );
}

function InputEmail() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="input#email">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivFormGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="div.form-group">
      <LabelFormLabelMargin1 />
      <InputEmail />
    </div>
  );
}

function LabelFormLabel2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[-1px]" data-name="label.form-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Subject</p>
      </div>
    </div>
  );
}

function LabelFormLabelMargin2() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="label.form-label:margin">
      <LabelFormLabel2 />
    </div>
  );
}

function InputSubject() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="input#subject">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivFormGroup2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-group">
      <LabelFormLabelMargin2 />
      <InputSubject />
    </div>
  );
}

function LabelFormLabel3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[-1px]" data-name="label.form-label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Message</p>
      </div>
    </div>
  );
}

function LabelFormLabelMargin3() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="label.form-label:margin">
      <LabelFormLabel3 />
    </div>
  );
}

function TextareaMessage() {
  return (
    <div className="bg-white h-[146px] relative shrink-0 w-full" data-name="textarea#message">
      <div aria-hidden="true" className="absolute border border-[#d9c6a5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivFormGroup3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-group">
      <LabelFormLabelMargin3 />
      <TextareaMessage />
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-[#b4532a] relative shrink-0 w-full" data-name="Component 6">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">Submit Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormContactForm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="form.contact-form">
      <DivFormGroup />
      <DivFormGroup1 />
      <DivFormGroup2 />
      <DivFormGroup3 />
      <Component35 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative self-stretch" data-name="div">
      <H3ContactInfoTitle1 />
      <FormContactForm />
    </div>
  );
}

function DivContactGrid() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center relative shrink-0 w-full" data-name="div.contact-grid">
      <Div4 />
      <Div9 />
    </div>
  );
}

function DivContainerMd() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="div.container-md">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] px-[24px] relative w-full">
        <H2SectionTitle4 />
        <DivContactGrid />
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="absolute bg-[#efeae2] content-stretch flex flex-col items-start left-0 px-[320px] py-[128px] right-0 top-[7854.03px]" data-name="Contact Section">
      <DivContainerMd />
    </div>
  );
}

function DivFooterLogoSection() {
  return <div className="h-[48px] shrink-0 w-full" data-name="div.footer-logo-section" />;
}

function PFooterDescription() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="p.footer-description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.4px] not-italic relative shrink-0 text-[#d9c6a5] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Preserving heritage, promoting culture, and celebrating</p>
        <p>the rich traditions of Bocaue.</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col gap-[15.195px] h-[274px] items-start relative shrink-0 w-[406px]" data-name="div">
      <DivFooterLogoSection />
      <PFooterDescription />
      <div className="relative rounded-[155.539px] shrink-0 size-[180px]" data-name="mhacto-logo 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[155.539px] size-full" src={imgMhactoLogo2} />
      </div>
    </div>
  );
}

function H3FooterTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.footer-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8f6f1] text-[20px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Quick Links</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Home</p>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component36 />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">About Bocaue</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component37 />
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">History</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component38 />
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Tourist Destinations</p>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component39 />
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">{`Culture & Festivals`}</p>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component40 />
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Programs</p>
      </div>
    </div>
  );
}

function Li5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component41 />
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d9c6a5] text-[14px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Contact</p>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative shrink-0 w-full" data-name="li">
      <Component42 />
    </div>
  );
}

function UlFooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="ul.footer-links">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
      <Li4 />
      <Li5 />
      <Li6 />
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[378.67px]" data-name="div">
      <H3FooterTitle />
      <UlFooterLinks />
    </div>
  );
}

function H3FooterTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.footer-title">
      <div className="flex flex-col font-['Playfair_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8f6f1] text-[20px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Connect With Us</p>
      </div>
    </div>
  );
}

function Component44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[rgba(248,246,241,0.1)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Component 7">
      <Component44 />
    </div>
  );
}

function Component46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1078)" id="Component 1">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
          <path d={svgPaths.p19f4a800} id="Vector_2" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1078">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component45() {
  return (
    <div className="bg-[rgba(248,246,241,0.1)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Component 7">
      <Component46 />
    </div>
  );
}

function Component48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1075)" id="Component 1">
          <path d={svgPaths.p2ffa5d80} id="Vector" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1075">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component47() {
  return (
    <div className="bg-[rgba(248,246,241,0.1)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Component 7">
      <Component48 />
    </div>
  );
}

function Component50() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #F8F6F1)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component49() {
  return (
    <div className="bg-[rgba(248,246,241,0.1)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Component 7">
      <Component50 />
    </div>
  );
}

function DivSocialIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="div.social-icons">
      <Component43 />
      <Component45 />
      <Component47 />
      <Component49 />
    </div>
  );
}

function PFooterContactText() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] pt-[7.195px] relative shrink-0 w-full" data-name="p.footer-contact-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.4px] not-italic relative shrink-0 text-[#d9c6a5] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">mhacto.bocaue@example.ph</p>
        <p>+63 (44) 123-4567</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[378.66px]" data-name="div">
      <H3FooterTitle1 />
      <DivSocialIcons />
      <PFooterContactText />
    </div>
  );
}

function DivFooterGrid() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="div.footer-grid">
      <Div10 />
      <Div11 />
      <Div12 />
    </div>
  );
}

function P7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d9c6a5] text-[14px] whitespace-nowrap">
        <p className="leading-[22.4px]">© 2026 Municipal History, Arts, Culture and Tourism Office. All rights reserved.</p>
      </div>
    </div>
  );
}

function PFooterDisclaimer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.footer-disclaimer">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d9c6a5] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">An official website of the Municipality of Bocaue, Bulacan, Philippines</p>
      </div>
    </div>
  );
}

function DivFooterBottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.footer-bottom">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <P7 />
        <PFooterDisclaimer />
      </div>
    </div>
  );
}

function DivFooterDivider() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="div.footer-divider">
      <div aria-hidden="true" className="absolute border-[rgba(248,246,241,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <DivFooterBottom />
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] px-[24px] relative shrink-0 w-[1256px]" data-name="div.container">
      <DivFooterGrid />
      <DivFooterDivider />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#1e3a34] content-stretch flex flex-col items-start left-[0.45px] px-[320px] py-[64px] right-[-0.45px] top-[8856px]" data-name="Footer">
      <DivContainer1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" data-name="Frame" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 246, 241) 0%, rgb(248, 246, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header />
      <IntroductionSection />
      <HeroSection />
      <HistorySection />
      <DestinationsSection />
      <CultureSection />
      <ProgramsSection />
      <StatementSection />
      <ContactSection />
      <Footer />
    </div>
  );
}