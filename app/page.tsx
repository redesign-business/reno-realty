const CTA = "Plan your next move";

const milestones = [
  {
    year: "2009",
    title: "Built in a hard market",
    copy: "Reno Realty began as an independent brokerage founded by local top producers.",
    image: "/images/1-9514ca5241.jpg",
  },
  {
    year: "2011",
    title: "125+ rentals onboarded",
    copy: "A dedicated property management division expanded the firm's hands-on expertise.",
    image: "/images/2-c1f0851250.jpg",
  },
  {
    year: "2012",
    title: "New homes, new reach",
    copy: "The brokerage expanded into new-home sales and development representation.",
    image: "/images/3-72f60c06f4.jpg",
  },
  {
    year: "2013",
    title: "Investment discipline",
    copy: "Multifamily and investment analysis became a dedicated specialty.",
    image: "/images/4-cc5f93e3c0.jpg",
  },
];

const faqs = [
  ["Where do you work?", "Across Northwestern Nevada, including Reno, Sparks, Carson City, Fernley, Dayton, Gardnerville and the Lake Tahoe communities."],
  ["Do you work with both buyers and sellers?", "Yes. Since 2009, the team has represented clients in the purchase, sale and lease of residential and investment property."],
  ["Can you help with rental property?", "Yes. Reno Realty offers rental analysis, tenant placement, rent collection, owner reporting and full-service management options."],
  ["What makes your approach different?", "Local roots meet institutional transaction experience, giving clients practical guidance backed by volume, process and market context."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Reno Realty home">
          <img src="/images/logo-ac54be0535.png" alt="Reno Realty" />
        </a>
        <div className="navLinks">
          <a href="#expertise">Expertise</a>
          <a href="#story">Our story</a>
          <a href="#team">Team</a>
        </div>
        <a className="button small" href="#contact">{CTA}</a>
      </nav>

      <section className="hero" id="top">
        <img className="heroImage" src="/images/backyard1-1-5476461d24.jpg" alt="A landscaped Reno home with mountain views" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">Northern Nevada real estate · Since 2009</p>
          <h1>Local judgment.<br /><em>Proven at scale.</em></h1>
          <p className="heroCopy">Buy, sell and invest with a Reno brokerage that knows the neighborhoods, the numbers and what it takes to close.</p>
          <a className="button" href="#contact">{CTA}</a>
        </div>
        <div className="marketTag"><span>RENO</span><small>39.5296° N<br />119.8138° W</small></div>
      </section>

      <section className="proofBar" aria-label="Reno Realty track record">
        <div><strong>400+</strong><span>Nevada transactions</span></div>
        <div><strong>125+</strong><span>Properties managed</span></div>
        <div><strong>2007</strong><span>Broker licensed since</span></div>
        <div><strong>17 yrs</strong><span>Independent brokerage</span></div>
      </section>

      <section className="split" id="expertise">
        <div className="splitImage warm">
          <img src="/images/5-cbd10448e3.jpg" alt="Reno Realty's flagship office era" />
          <span className="vertical">REAL ESTATE, REINVIGORATED</span>
        </div>
        <div className="splitCopy">
          <p className="eyebrow">Experience that travels</p>
          <h2>From one front door to an entire portfolio.</h2>
          <p className="lead">Managing Broker Kristopher Kent has completed more than 400 transactions in Nevada since becoming licensed in 2007.</p>
          <div className="rule" />
          <p>The same team has handled large-volume distressed-property acquisitions and dispositions for banks, mortgage servicers, institutional investors and government-sponsored entities.</p>
          <div className="clientLine">Wells Fargo · Bank of America · Fannie Mae · Nationstar · OCWEN</div>
          <a className="textCta" href="#contact">{CTA} <span>↗</span></a>
        </div>
      </section>

      <section className="services">
        <div className="sectionHead">
          <div><p className="eyebrow light">One market. Full perspective.</p><h2>Real estate is never<br />just the property.</h2></div>
          <p>It is timing, leverage, location and the thousand details between an idea and a closing.</p>
        </div>
        <div className="serviceGrid">
          <article>
            <img src="/images/01-thumbnail-5550e8f717.jpg" alt="Residential real estate consultation" />
            <span>01</span><h3>Buy &amp; sell</h3><p>Local strategy for homes across Reno, Sparks and Northwestern Nevada.</p>
          </article>
          <article>
            <img src="/images/04-thumbnail-3995fc3a3d.jpg" alt="Real estate marketing materials" />
            <span>02</span><h3>Market with intent</h3><p>Positioning, original listing content and video tours designed to create attention.</p>
          </article>
          <article>
            <img src="/images/06-thumbnail-8611031ac0.jpg" alt="Technology used to analyze real estate" />
            <span>03</span><h3>Invest with rigor</h3><p>Technical analysis for multifamily, income property and portfolio decisions.</p>
          </article>
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyIntro">
          <p className="eyebrow">Independent by design</p>
          <h2>Rooted here.<br /><em>Growing ever since.</em></h2>
          <p>Founded in a recession by people who believed a brokerage could be more nimble, more useful and more accountable.</p>
        </div>
        <div className="timeline">
          {milestones.map((item) => (
            <article key={item.year}>
              <div className="year">{item.year}</div>
              <img src={item.image} alt="" />
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="management">
        <div className="managementCopy">
          <p className="eyebrow light">Property management</p>
          <h2>125+ reasons to trust the process.</h2>
          <p>Reno Realty's property management department onboarded more than 125 rental and vacation properties, building practical experience across the entire ownership cycle.</p>
          <ul>
            <li>Tenant placement &amp; advertising</li>
            <li>Rent collection &amp; direct deposit</li>
            <li>Monthly and annual statements</li>
            <li>Owner portal &amp; concierge support</li>
          </ul>
          <a className="button cream" href="#contact">{CTA}</a>
        </div>
        <div className="managementImage">
          <img src="/images/02-thumbnail-2da21e7b8e.jpg" alt="A well-managed Northern Nevada property" />
          <div className="stamp"><b>125+</b><span>managed</span></div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="teamTitle">
          <p className="eyebrow">The people behind the proof</p>
          <h2>Nevada knowledge,<br />from the ground up.</h2>
        </div>
        <article className="featuredPerson">
          <img src="/images/photo-1-3d26b6c806.jpg" alt="Kristopher Kent, Managing Broker" />
          <div>
            <span>Managing Broker</span>
            <h3>Kristopher Kent</h3>
            <p>A fifth-generation Nevadan with more than two decades in Northern Nevada real estate. His experience spans residential sales, distressed assets, investment strategy and property management.</p>
            <small>NV NRED B.0075582.CORP · CA DRE #02096430</small>
          </div>
        </article>
        <article className="person">
          <img src="/images/greg1-26de9b91f2.png" alt="Greg Anastassatos, MBA" />
          <div><span>Multifamily &amp; Investments</span><h3>Greg Anastassatos, MBA</h3><p>Technical investment analysis focused on maximizing client returns.</p><small>NV License 173938</small></div>
        </article>
      </section>

      <section className="faq">
        <div className="faqVisual">
          <img src="/images/03-thumbnail-a7303e5c1b.jpg" alt="The welcoming Reno Realty workplace" />
          <div><span>Local by nature</span><strong>Reno · Sparks · Tahoe</strong></div>
        </div>
        <div className="faqCopy">
          <p className="eyebrow">Good questions, straight answers</p>
          <h2>Before we get moving.</h2>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow light">Your next chapter starts here</p>
          <h2>Let's make a smart<br /><em>move.</em></h2>
        </div>
        <div className="contactSide">
          <p>Tell us what you are considering. We will bring local context, clear next steps and the experience to carry it through.</p>
          <a className="button cream" href="mailto:info@reno-realty.com?subject=Plan%20my%20next%20move">{CTA}</a>
          <a className="phone" href="tel:+17753139600">1 (775) 313-9600</a>
        </div>
      </section>

      <footer>
        <img src="/images/logo-footer-2f088c9f1c.png" alt="Reno Realty" />
        <p>1875 Plumas Street, Suite 6<br />Reno, Nevada 89509</p>
        <p>NV NRED B.0075582.CORP<br />© 2009–2026 Reno Realty</p>
      </footer>

      <style>{`
        :root{--ink:#17231f;--forest:#153f34;--sage:#93a792;--cream:#f2eee4;--rust:#c66a45;--line:rgba(23,35,31,.18)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}.nav{height:88px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;background:var(--cream);position:relative;z-index:5}.brand img{width:182px;height:auto}.navLinks{display:flex;gap:32px;font-size:12px;text-transform:uppercase;letter-spacing:.14em}.navLinks a:hover{color:var(--rust)}.button{display:inline-flex;align-items:center;justify-content:center;background:var(--rust);color:white;padding:16px 24px;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:700;border:1px solid var(--rust);transition:.2s}.button:hover{background:#a64e31;border-color:#a64e31}.button.small{padding:12px 18px}.hero{min-height:720px;height:calc(100vh - 88px);position:relative;color:white;display:flex;align-items:center;overflow:hidden}.heroImage,.heroShade{position:absolute;inset:0;width:100%;height:100%}.heroShade{background:linear-gradient(90deg,rgba(9,26,22,.9) 0%,rgba(9,26,22,.5) 48%,rgba(9,26,22,.08) 80%)}.heroContent{position:relative;z-index:2;width:min(760px,82vw);margin-left:8vw}.eyebrow{text-transform:uppercase;letter-spacing:.2em;font-size:11px;font-weight:700;color:var(--rust);margin:0 0 22px}.eyebrow.light{color:#d6c6a3}.hero h1,.split h2,.sectionHead h2,.story h2,.management h2,.team h2,.faq h2,.contact h2{font-family:Georgia,'Times New Roman',serif;font-weight:400;line-height:.94;letter-spacing:-.045em;margin:0}.hero h1{font-size:clamp(64px,8.2vw,126px)}em{color:#d5c39e;font-weight:400}.heroCopy{font-family:Georgia,serif;font-size:20px;line-height:1.55;max-width:580px;margin:28px 0}.marketTag{position:absolute;z-index:2;right:4vw;bottom:44px;border-left:1px solid rgba(255,255,255,.5);padding-left:18px}.marketTag span{display:block;font-family:Georgia,serif;font-size:34px}.marketTag small{font-size:9px;letter-spacing:.15em;line-height:1.6}.proofBar{display:grid;grid-template-columns:repeat(4,1fr);padding:28px 5vw;background:#d7dfd1}.proofBar div{padding:5px 2.5vw;border-right:1px solid rgba(23,35,31,.2)}.proofBar div:last-child{border:0}.proofBar strong{font-family:Georgia,serif;font-size:36px;font-weight:400;display:block}.proofBar span{font-size:10px;text-transform:uppercase;letter-spacing:.13em}.split{display:grid;grid-template-columns:1fr 1fr;min-height:760px}.splitImage{position:relative;overflow:hidden}.splitImage img{height:100%;filter:saturate(.75);transform:scale(1.03)}.splitImage:after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(72,44,25,.45),transparent 50%)}.vertical{position:absolute;z-index:2;bottom:45px;left:35px;color:white;font-size:10px;letter-spacing:.22em;writing-mode:vertical-rl;transform:rotate(180deg)}.splitCopy{padding:9vw 8vw;display:flex;flex-direction:column;justify-content:center}.splitCopy h2{font-size:clamp(48px,5.3vw,78px)}.splitCopy .lead{font-family:Georgia,serif;font-size:21px;line-height:1.5;margin:34px 0 0}.splitCopy>p:not(.eyebrow):not(.lead){line-height:1.8;color:#53605b}.rule{height:1px;background:var(--line);margin:30px 0}.clientLine{text-transform:uppercase;letter-spacing:.1em;font-size:9px;line-height:2;color:#53605b;margin:20px 0}.textCta{text-transform:uppercase;font-size:11px;letter-spacing:.14em;font-weight:700;margin-top:20px}.textCta span{color:var(--rust);font-size:16px}.services{background:var(--forest);color:white;padding:110px 5vw}.sectionHead{display:flex;justify-content:space-between;align-items:end;margin-bottom:60px}.sectionHead h2{font-size:clamp(48px,5vw,74px)}.sectionHead>p{max-width:340px;line-height:1.7;color:#b7c3bc}.serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.serviceGrid article{border-top:1px solid rgba(255,255,255,.3);padding-top:18px}.serviceGrid img{height:310px;filter:grayscale(.2);margin-bottom:22px}.serviceGrid span{color:#cdbd9e;font-family:Georgia,serif}.serviceGrid h3{font-family:Georgia,serif;font-size:30px;font-weight:400;margin:10px 0}.serviceGrid p{color:#b7c3bc;line-height:1.6;font-size:14px}.story{padding:120px 6vw}.storyIntro{display:grid;grid-template-columns:1fr 1.2fr;gap:8vw;align-items:start;margin-bottom:90px}.storyIntro .eyebrow{grid-column:1}.storyIntro h2{font-size:clamp(54px,6vw,88px);grid-column:1}.storyIntro>p:last-child{grid-column:2;grid-row:2;font-family:Georgia,serif;font-size:23px;line-height:1.55;margin:0;max-width:500px}.storyIntro em{color:var(--rust)}.timeline{border-top:1px solid var(--line)}.timeline article{display:grid;grid-template-columns:100px 180px 1fr;gap:35px;align-items:center;padding:24px 0;border-bottom:1px solid var(--line)}.timeline img{height:120px}.year{font-family:Georgia,serif;color:var(--rust);font-size:26px}.timeline h3{font-family:Georgia,serif;font-size:25px;font-weight:400;margin:0 0 8px}.timeline p{color:#69736f;margin:0;line-height:1.6}.management{display:grid;grid-template-columns:1fr 1fr;background:#873f2a;color:white}.managementCopy{padding:9vw 8vw}.management h2{font-size:clamp(50px,5.5vw,80px)}.managementCopy>p:not(.eyebrow){font-family:Georgia,serif;font-size:20px;line-height:1.55;color:#eadbd2}.management ul{list-style:none;padding:0;margin:36px 0}.management li{border-top:1px solid rgba(255,255,255,.25);padding:13px 0;font-size:11px;letter-spacing:.1em;text-transform:uppercase}.button.cream{background:var(--cream);border-color:var(--cream);color:var(--ink)}.managementImage{position:relative;min-height:700px}.managementImage img{height:100%;filter:saturate(.7)}.stamp{position:absolute;left:-55px;bottom:60px;width:140px;height:140px;border-radius:50%;background:var(--forest);display:flex;flex-direction:column;align-items:center;justify-content:center;border:5px solid #873f2a}.stamp b{font-family:Georgia,serif;font-size:38px;font-weight:400}.stamp span{text-transform:uppercase;font-size:9px;letter-spacing:.17em}.team{padding:120px 6vw;display:grid;grid-template-columns:1.4fr .8fr;gap:20px}.teamTitle{grid-column:1/-1;margin-bottom:50px}.teamTitle h2{font-size:clamp(52px,6vw,86px)}.featuredPerson,.person{background:white}.featuredPerson img{height:520px;object-position:center top}.featuredPerson>div,.person>div{padding:32px}.featuredPerson span,.person span{font-size:10px;text-transform:uppercase;letter-spacing:.15em;color:var(--rust)}.featuredPerson h3,.person h3{font-family:Georgia,serif;font-size:32px;font-weight:400;margin:8px 0 15px}.featuredPerson p,.person p{line-height:1.7;color:#65706c}.featuredPerson small,.person small{font-size:9px;letter-spacing:.1em;color:#7f8985}.person img{height:310px;object-position:center top}.faq{display:grid;grid-template-columns:1fr 1fr;background:#d7dfd1}.faqVisual{position:relative;min-height:720px}.faqVisual>img{height:100%}.faqVisual>div{position:absolute;bottom:30px;left:30px;right:30px;padding:25px;background:rgba(242,238,228,.92);display:flex;justify-content:space-between}.faqVisual span{text-transform:uppercase;font-size:9px;letter-spacing:.15em}.faqVisual strong{font-family:Georgia,serif;font-weight:400}.faqCopy{padding:9vw 7vw}.faq h2{font-size:clamp(48px,5vw,72px);margin-bottom:55px}.faq details{border-top:1px solid rgba(23,35,31,.25);padding:20px 0}.faq details:last-child{border-bottom:1px solid rgba(23,35,31,.25)}summary{cursor:pointer;list-style:none;font-family:Georgia,serif;font-size:20px;display:flex;justify-content:space-between}summary::-webkit-details-marker{display:none}summary span{color:var(--rust)}details p{line-height:1.6;color:#5f6b66;padding-right:40px}.contact{background:var(--forest);color:white;padding:110px 7vw;display:grid;grid-template-columns:1.4fr 1fr;align-items:end;gap:8vw}.contact h2{font-size:clamp(64px,7vw,105px)}.contactSide p{font-family:Georgia,serif;color:#c5d0ca;font-size:20px;line-height:1.6}.contactSide .button{margin:20px 18px 20px 0}.phone{font-size:12px;letter-spacing:.08em;border-bottom:1px solid #788f85;padding-bottom:5px}footer{padding:45px 5vw;background:#0d2720;color:#98aaa2;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;font-size:10px;line-height:1.7;letter-spacing:.08em;text-transform:uppercase}footer img{width:150px;filter:brightness(0) invert(1);opacity:.8}footer p:last-child{text-align:right}
        @media(max-width:800px){.nav{height:72px}.brand img{width:145px}.navLinks{display:none}.button.small{padding:10px 12px;font-size:9px}.hero{height:720px;min-height:0}.heroContent{margin-left:7vw;width:86vw}.hero h1{font-size:58px}.heroCopy{font-size:17px}.marketTag{display:none}.proofBar{grid-template-columns:1fr 1fr;padding:18px}.proofBar div{padding:15px;border-bottom:1px solid rgba(23,35,31,.2)}.proofBar div:nth-child(2){border-right:0}.proofBar strong{font-size:29px}.split,.management,.faq{grid-template-columns:1fr}.splitImage{height:480px}.splitCopy{padding:80px 7vw}.sectionHead{display:block}.sectionHead>p{margin-top:25px}.serviceGrid{grid-template-columns:1fr}.serviceGrid article{margin-bottom:35px}.serviceGrid img{height:270px}.story{padding:80px 7vw}.storyIntro{display:block;margin-bottom:50px}.storyIntro>p:last-child{margin-top:25px}.timeline article{grid-template-columns:70px 100px 1fr;gap:12px}.timeline img{height:90px}.timeline h3{font-size:19px}.timeline p{font-size:12px}.managementImage{min-height:500px;grid-row:1}.stamp{left:20px}.team{grid-template-columns:1fr;padding:80px 7vw}.featuredPerson img{height:420px}.faqVisual{min-height:480px}.faqCopy{padding:80px 7vw}.contact{grid-template-columns:1fr;padding:85px 7vw}.contactSide{margin-top:25px}footer{grid-template-columns:1fr;gap:20px}footer p:last-child{text-align:left}}
      `}</style>
    </main>
  );
}
