import { BlogPost, Locale } from '@/types'

export const mockArticles: BlogPost[] = [
  // Existing article
  {
    id: '1',
    slug: 'best-time-visit-samui',
    title: 'When is the Best Time to Visit Koh Samui?',
    excerpt: 'Discover the optimal seasons for visiting Samui based on weather, crowds, and prices.',
    content: `
      <p>Koh Samui, Thailand's second-largest island, is a year-round destination, but choosing the right time to visit can make a significant difference in your experience.</p>

      <h2>Peak Season (December - February)</h2>
      <p>This is the most popular time to visit Samui, with perfect weather conditions...</p>

      <h2>Shoulder Season (March - June)</h2>
      <p>The shoulder months offer a great balance of good weather and fewer crowds...</p>

      <h2>Green Season (July - November)</h2>
      <p>While this is technically the rainy season, Samui's weather patterns are unique...</p>
    `,
    coverImage: '/images/blog/best-time.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Travel Tips',
    tags: ['weather', 'planning', 'seasons'],
    readTime: 5,
    publishedAt: '2024-01-15',
    locale: 'en' as Locale,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },

  // New Property Article 1
  {
    id: '2',
    slug: 'brutal-truth-owning-villa-koh-samui-2025',
    title: 'The Brutal Truth About Owning a Villa in Koh Samui (2025 Guide for Foreign Investors)',
    excerpt: 'The reality of owning a villa in Koh Samui — not the brochure version, but the everyday truth from someone who\'s lived on the island since 2009.',
    content: `
      <h2>Introduction: The Dream vs. The Reality</h2>
      <p>Buying a villa on Koh Samui is one of the world's most popular fantasies. Ask any tourist sipping a mango smoothie with a sunset view, and they'll tell you: "One day I'll buy a place here."</p>

      <p>But for those who actually do it — or worse, try to manage it — the reality hits fast. Hard. And usually somewhere between the first Airbnb guest complaint and the third power outage.</p>

      <p>This article gives you the real picture — not the brochure version, not the agency lies — but the everyday truth from someone who's lived on the island since 2009 and managed multiple villas through storms, guests, broken ACs, and broken dreams.</p>

      <h2>The Tropics Are Beautiful… and They Destroy Everything</h2>
      <p>In Thailand, nothing stays new for long.<br>
      Why?<br>
      Nature is your landlord — and she charges rent in humidity, mold, insects, storms, and repairs.</p>

      <p>Expect:</p>
      <ul>
        <li>AC failure at least once every few months</li>
        <li>Blackouts in rainy season</li>
        <li>Mold on walls, clothes, furniture</li>
        <li>Pool pump breakdowns</li>
        <li>Termites if you're unlucky</li>
        <li>Roof leaks</li>
        <li>Toasters that burn out every 2–3 months</li>
      </ul>

      <p>A villa in Thailand is NOT a long-term asset that becomes more valuable.<br>
      It is a constantly aging machine that requires permanent attention.</p>

      <h2>Guests Complain About Things You Can't Control</h2>
      <p>Here is a realistic list of complaints I personally got from guests:</p>
      <ul>
        <li>"The hill is too steep."</li>
        <li>"There is a gecko in the room."</li>
        <li>"A mosquito entered my bathroom."</li>
        <li>"The neighbors were talking too loudly."</li>
        <li>"The villa looks different because the sofa is a different color."</li>
      </ul>

      <p>And these complaints come after they stayed happily and checked out.<br>
      Then Airbnb suspends you because three guests complained within one week.</p>

      <p>The funniest complaint I ever saw:</p>
      <blockquote>"Road goes uphill. Not suitable for walking."</blockquote>
      <p>Imagine buying a sea-view villa and expecting to reach it on flat ground.</p>

      <h2>The Hidden Reality of Airbnb Hosting in Samui</h2>
      <p>Here's the part agents never tell you: Airbnb in Thailand is technically illegal for daily rentals without a hotel license.</p>

      <p>Almost no villa has this license.<br>
      Why?<br>
      Because:</p>
      <ul>
        <li>It's expensive</li>
        <li>Complex</li>
        <li>Requires full hotel-standard compliance</li>
        <li>Many villas were built on slopes where permits were… "creatively interpreted"</li>
      </ul>

      <p>And now (2024–2025), Thai authorities are increasing tax audits and cracking down on nominations and private bank account income.</p>

      <p><strong>Case reference:</strong> Lamai 2024 — a private Thai account receiving Airbnb payouts was audited, back taxes + fines were issued.</p>

      <h2>You Don't Own Land, Even If You Think You Do</h2>
      <p>Thailand doesn't allow foreigners to own land.<br>
      So you're usually:</p>
      <ul>
        <li>Leasing land</li>
        <li>Owning only the building</li>
        <li>Setting up a company with nominee Thai shareholders</li>
        <li>Trusting a lawyer who might be "creative"</li>
      </ul>

      <p>The villa may look like yours… until a real legal question appears.</p>

      <p>More than one foreigner discovered the truth at a lawyer's meeting when selling:<br>
      "This villa was never legally yours."</p>

      <h2>Conclusion: Is It Still Worth Buying a Villa?</h2>
      <p>Yes — if you know what you're doing.<br>
      Yes — if you buy for lifestyle, not for investment.<br>
      Yes — if you can handle stress, repairs, guest complaints, and tropical chaos.</p>

      <p>But NO if you're expecting passive income or an easy business.</p>

      <p>Owning a villa in Koh Samui is a beautiful dream — but only if you're ready for the reality behind the postcard.</p>
    `,
    coverImage: '/images/blog/villa-ownership.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Property',
    tags: ['villa investment', 'buying villa Thailand', 'Samui real estate', 'Airbnb hosting', 'property guide'],
    readTime: 8,
    publishedAt: '2025-01-15',
    locale: 'en' as Locale,
    createdAt: '2025-01-15',
    updatedAt: '2025-01-15',
  },

  // New Property Article 2
  {
    id: '3',
    slug: 'why-villa-buyers-ghost-sellers-koh-samui',
    title: 'Why Villa Buyers Ghost Sellers in Koh Samui (And What It Really Means)',
    excerpt: 'Understanding the psychology behind why potential villa buyers disappear without a trace in the Koh Samui real estate market.',
    content: `
      <h2>Introduction: The Ghosting Epidemic</h2>
      <p>You send the contract.<br>
      You answer every question.<br>
      You arrange a viewing.<br>
      You even ask, politely, "How was your flight to Australia?"</p>

      <p>And then?<br>
      Silence. Not even a "Seen" message.</p>

      <p>Welcome to the psychology of villa buyers on Koh Samui.</p>

      <h2>Why Buyers Act Like This</h2>
      <p>There are several reasons:</p>

      <h3>1. They never planned to buy anything</h3>
      <p>Many "buyers" are dreamers. They come to Samui, visit villas for fun, take photos, imagine living here — but in reality:</p>
      <ul>
        <li>No money</li>
        <li>No plan</li>
        <li>No timeline</li>
        <li>No intention to commit</li>
      </ul>
      <p>They disappear because the dream evaporates when they go home.</p>

      <h3>2. They use your villa as negotiation leverage</h3>
      <p>This is the dirty secret.<br>
      Buyers often use one villa to push down prices on another.</p>

      <p>They say to another agent:<br>
      "I found a cheaper, better option. Reduce your price."</p>

      <p>Your villa becomes a bargaining chip.</p>

      <h3>3. They get scared at the lawyer's office</h3>
      <p>Thai property law is complex, and for foreigners it can feel like rocket science.</p>

      <p>Once a lawyer starts asking:</p>
      <ul>
        <li>"Who are the shareholders?"</li>
        <li>"Is this chanote legal?"</li>
        <li>"Is the land accessible?"</li>
        <li>"Is this structure compliant?"</li>
      </ul>
      <p>— 50% of buyers panic.</p>

      <h3>4. They didn't like feeling "pushed"</h3>
      <p>Buyers on Samui hate pressure.<br>
      Even simple formal communication can feel like too much.</p>

      <p>Your last email may have sounded too "direct" for their comfort.</p>

      <h2>What Ghosting Actually Means</h2>
      <p>It's not personal.<br>
      It's not your fault.<br>
      It's the nature of the market.</p>

      <p>Real estate in Samui is closer to online dating:<br>
      Everyone "likes" many villas, messages a few, meets 1–2 in person, and buys none.</p>

      <h2>The Best Approach</h2>
      <p>Simple, friendly, human messages like:<br>
      "Hey, hope your flight went well. If you need anything or have questions, I'm always here."</p>

      <p>This creates trust without pressure.</p>

      <h2>Conclusion</h2>
      <p>Ghosting is normal.<br>
      90% of buyers aren't serious.<br>
      Your job is to stay professional, calm, and friendly.<br>
      And the right buyer will eventually reply.</p>
    `,
    coverImage: '/images/blog/buyer-ghosting.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Property',
    tags: ['villa buyers', 'real estate negotiations', 'Samui property', 'selling guide'],
    readTime: 7,
    publishedAt: '2025-01-14',
    locale: 'en' as Locale,
    createdAt: '2025-01-14',
    updatedAt: '2025-01-14',
  },

  // New Property Article 3
  {
    id: '4',
    slug: 'spontaneous-agents-koh-samui-real-estate',
    title: 'The Rise of Spontaneous Agents in Koh Samui: A Comedy of Chaos',
    excerpt: 'How anyone can become a "luxury property consultant" in 24 hours on Koh Samui, and what it means for the real estate market.',
    content: `
      <h2>Introduction: Who Is Really a "Real Estate Agent"?</h2>
      <p>Here's the truth nobody wants to admit:<br>
      On Koh Samui, anyone can become a real estate agent in 24 hours.</p>

      <p>Yoga instructor → "Luxury property consultant."<br>
      Digital nomad → "Senior investment advisor."<br>
      Backpacker → "Exclusive villa broker."</p>

      <p>No license, no education, no office.<br>
      Just a Facebook account and confidence.</p>

      <h2>How the Spontaneous Agent Is Born</h2>
      <p>The process is simple:</p>
      <ol>
        <li>They join a few WhatsApp or Facebook groups.</li>
        <li>They copy photos of villas they've never seen.</li>
        <li>They create a Canva banner saying "Best deals in Samui."</li>
        <li>They add 10–20% markup.</li>
      </ol>
      <p>Congratulations — they're now an agent.</p>

      <h2>Their Typical Behavior</h2>
      <ul>
        <li>They book viewings and don't show up.</li>
        <li>They get lost trying to reach the villa.</li>
        <li>They can't drive up even a small hill.</li>
        <li>They don't know who owns the villa.</li>
        <li>They don't have keys.</li>
        <li>They don't understand land law.</li>
        <li>They change prices randomly.</li>
        <li>They speak like they represent Sotheby's.</li>
      </ul>

      <p>It's comedy, but sellers end up suffering.</p>

      <h2>Impact on the Market</h2>
      <ul>
        <li>Ten agents post the same villa with ten different prices.</li>
        <li>Buyers become confused and distrustful.</li>
        <li>Serious agencies lose credibility.</li>
        <li>Villas become digital spam.</li>
      </ul>

      <p>And worst of all:<br>
      Owners feel desperate.</p>

      <h2>Why This Happens</h2>
      <p>Because Samui has no licensing requirement. Real estate is an open field for anyone hungry for commission.</p>

      <p>The result is a real estate jungle.</p>

      <h2>Conclusion</h2>
      <p>There are good agents in Samui — but spontaneous agents outnumber them.<br>
      Choose carefully, do your own research, and verify everything.</p>
    `,
    coverImage: '/images/blog/real-estate-agents.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Property',
    tags: ['real estate agents', 'unqualified brokers', 'villa selling', 'Samui property market'],
    readTime: 7,
    publishedAt: '2025-01-13',
    locale: 'en' as Locale,
    createdAt: '2025-01-13',
    updatedAt: '2025-01-13',
  },

  // New Property Article 4
  {
    id: '5',
    slug: 'buying-villa-thailand-like-buying-yacht',
    title: 'Buying a Villa in Thailand Is Like Buying a Yacht — But Worse',
    excerpt: 'Why purchasing property in Thailand shares uncanny similarities with yacht ownership, and why the second happy day might never come.',
    content: `
      <h2>Introduction: The Perfect Comparison</h2>
      <p>Buying a villa in Thailand is a lot like buying a yacht.<br>
      You're incredibly happy the day you buy it.<br>
      And you hope to be happy when you sell it.</p>

      <p>Except with villas, the second happy day might never come.</p>

      <h2>Why? Because You Don't Really Own It</h2>
      <p>Foreigners cannot legally own land in Thailand.</p>

      <p>You're usually:</p>
      <ul>
        <li>Leasing land</li>
        <li>Owning only the building</li>
        <li>Creating a "Thai company" with nominees</li>
        <li>Trusting a potentially creative lawyer</li>
      </ul>

      <p>You own a structure.<br>
      But the ground under it? No.</p>

      <h2>The Shock at the Lawyer's Office</h2>
      <p>Many foreign owners discover the truth only when selling.</p>

      <p>Buyers ask:</p>
      <ul>
        <li>"Who are these four Thai shareholders?"</li>
        <li>"Is this lease valid?"</li>
        <li>"Is this building permit real?"</li>
        <li>"Was this villa built legally on hillside land?"</li>
        <li>"Why is the chanote unclear?"</li>
      </ul>

      <p>Even lawyers sometimes refuse to touch the papers.</p>

      <h2>And Then There's the Climate</h2>
      <p>Tropical humidity eats villas alive.<br>
      No matter how expensive the construction was, nothing gets newer.<br>
      Everything ages: roofs, pools, walls, insects, pipes.</p>

      <p>The yacht at least floats.<br>
      A villa sinks financially if not managed well.</p>

      <h2>Conclusion</h2>
      <p>Buying a villa is truly beautiful — but only if you understand the legal reality, the risks, and the full commitment required.</p>
    `,
    coverImage: '/images/blog/villa-yacht-comparison.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Property',
    tags: ['buying property Thailand', 'villa ownership risks', 'foreign ownership', 'Samui real estate laws'],
    readTime: 7,
    publishedAt: '2025-01-12',
    locale: 'en' as Locale,
    createdAt: '2025-01-12',
    updatedAt: '2025-01-12',
  },

  // New Property Article 5
  {
    id: '6',
    slug: 'airbnb-hosting-koh-samui-guide',
    title: 'Airbnb Hosting in Koh Samui: The Guide Nobody Warned You About',
    excerpt: 'The unvarnished truth about running an Airbnb in Koh Samui — from bizarre guest complaints to legal gray zones.',
    content: `
      <h2>Introduction: Hosting Isn't Passive Income</h2>
      <p>People imagine Airbnb hosting on Samui as:<br>
      sunsets, passive income, happy guests.</p>

      <p>In reality, it's:<br>
      late-night calls, refunds, guest drama, broken appliances, tropical chaos.</p>

      <h2>Real Guest Complaints</h2>
      <p>Straight from real hosts:</p>
      <ul>
        <li>"There was a gecko."</li>
        <li>"I saw an ant."</li>
        <li>"The road is uphill."</li>
        <li>"The pool water is too blue."</li>
        <li>"Neighbor was talking at night."</li>
      </ul>

      <p>And Airbnb accepts these complaints.</p>

      <h2>Illegal Daily Rentals</h2>
      <p>Most Airbnb villas operate without required hotel licenses.</p>

      <p>Thai law requires:</p>
      <ul>
        <li>Hotel license for daily rentals</li>
        <li>Tax reporting</li>
        <li>Compliance with tourism rules</li>
      </ul>

      <p>Most villas have none.</p>

      <p>And authorities are tightening controls for 2024–2025.</p>

      <h2>Airbnb Algorithm & Suspensions</h2>
      <p>Three complaints in a row = suspension.<br>
      Even if reviews were decent.</p>

      <p>Airbnb sides with guests.</p>

      <h2>Operational Chaos</h2>
      <p>You'll deal with:</p>
      <ul>
        <li>Power cuts</li>
        <li>Internet issues</li>
        <li>Pool and AC breakdowns</li>
        <li>Staff no-shows</li>
        <li>Cleaners charging 1,500–2,500 baht</li>
        <li>Refund demands</li>
        <li>Electricity cost: 40 kWh per day average = 280–320 baht</li>
      </ul>

      <p>And when things go wrong?<br>
      Guests blame YOU.</p>

      <h2>Conclusion</h2>
      <p>Hosting in Samui is doable — but not for beginners, not for passive investors, and not without a strong local support structure.</p>
    `,
    coverImage: '/images/blog/airbnb-hosting.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Property',
    tags: ['Airbnb Thailand', 'Samui hosting', 'guest complaints', 'villa management'],
    readTime: 7,
    publishedAt: '2025-01-11',
    locale: 'en' as Locale,
    createdAt: '2025-01-11',
    updatedAt: '2025-01-11',
  },
]

// Helper function to get article by slug
export function getArticleBySlug(slug: string): BlogPost | undefined {
  return mockArticles.find(article => article.slug === slug)
}
