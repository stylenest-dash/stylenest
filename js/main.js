/* ============================================================
   MAIN.JS — Elle & Co. Luxury Redesign
   ============================================================
   HOW TO EDIT:
   - Add/edit products in the PRODUCTS array below.
   - Add/edit blog posts in the BLOG_POSTS array.
   - Set affiliateUrl to your Amazon link: 
     "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20"
   ============================================================ */

'use strict';

/* ── 1. PRODUCTS DATA ───────────────────────────────────────── */
/*
  HOW TO ADD YOUR AMAZON AFFILIATE LINK:
  Replace the affiliateUrl value with your product link:
  "https://www.amazon.com/dp/PRODUCT-ASIN?tag=YOUR-TAG-20"

  HOW TO ADD A REAL PHOTO:
  Add an `image` field: image: "images/my-product.jpg"
  And an `imageAlt` field: imageAlt: "Description of the product"
  The svgIllustration will be ignored when a real image is present.
*/
const PRODUCTS = [
  {
    id: 1,
    brand: "& Other Stories",
    title: "Fluid Wrap Midi Dress in Sand",
    description: "Bias-cut satin-touch fabric with a deep V-wrap front and adjustable self-tie belt. Falls just below the knee.",
    price: "$89.00",
    original: "$129.00",
    rating: 4.8,
    reviews: "2.3k",
    badge: "Sale",
    category: "dresses",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    svgIllustration: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="400" fill="#F5F3F0"/>
      <!-- background shadow panel -->
      <rect x="80" y="30" width="150" height="340" rx="6" fill="#EAE7E3"/>
      <!-- dress body — bias cut silhouette -->
      <path d="M120 60 Q150 52 180 60 L198 120 Q205 170 210 240 Q215 310 205 370 L95 370 Q85 310 90 240 Q95 170 102 120 Z" fill="#D8D4CF"/>
      <!-- wrap overlay left panel -->
      <path d="M120 60 Q135 55 150 60 L158 100 Q148 130 138 160 Q128 190 120 210 L102 120 Z" fill="#C9C3BC"/>
      <!-- V-neckline right side -->
      <path d="M180 60 Q165 55 150 60 L142 100 Q152 130 162 160 Q172 190 180 210 L198 120 Z" fill="#C9C3BC"/>
      <!-- satin sheen highlight left -->
      <path d="M108 130 Q112 180 110 230 Q109 270 112 310" stroke="#E8E4DF" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.7"/>
      <!-- satin sheen highlight right -->
      <path d="M190 130 Q186 180 188 230 Q189 270 186 310" stroke="#E8E4DF" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.7"/>
      <!-- tie belt left -->
      <path d="M102 200 Q88 196 76 202 Q68 206 72 214 Q76 220 86 216 Q96 212 106 208" fill="#B8897A" stroke="none"/>
      <!-- tie belt knot -->
      <ellipse cx="118" cy="204" rx="12" ry="8" fill="#B8897A"/>
      <!-- tie belt right tail -->
      <path d="M128 204 Q140 198 148 208 Q152 216 144 220 Q136 222 130 212" fill="#B8897A" stroke="none"/>
      <!-- shoulder straps -->
      <path d="M130 60 Q128 42 126 30" stroke="#C9C3BC" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M170 60 Q172 42 174 30" stroke="#C9C3BC" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- hem detail — bias cut wave -->
      <path d="M95 370 Q120 362 150 366 Q180 370 205 362" stroke="#C9C3BC" stroke-width="1" fill="none" opacity="0.6"/>
      <!-- fabric texture lines -->
      <path d="M115 90 Q148 86 185 90" stroke="#C4BEB7" stroke-width="0.8" fill="none" opacity="0.5"/>
      <path d="M110 110 Q148 106 190 110" stroke="#C4BEB7" stroke-width="0.8" fill="none" opacity="0.4"/>
    </svg>`
  },
  {
    id: 2,
    brand: "Polène",
    title: "Numéro Un Mini Bag in Camel",
    description: "Structured top-handle bag in buttery pebbled leather. One exterior slip pocket, suede interior lining.",
    price: "$350.00",
    original: null,
    rating: 4.9,
    reviews: "1.1k",
    badge: "Bestseller",
    category: "bags",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    svgIllustration: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="400" fill="#F5F3F0"/>
      <!-- cast shadow -->
      <ellipse cx="150" cy="358" rx="72" ry="10" fill="#D8D4CF" opacity="0.5"/>
      <!-- handle left arc -->
      <path d="M108 148 Q100 80 120 52 Q138 30 150 30 Q162 30 180 52 Q200 80 192 148" stroke="#8B6355" stroke-width="7" fill="none" stroke-linecap="round"/>
      <!-- handle highlight -->
      <path d="M112 148 Q104 84 122 56 Q140 34 150 34" stroke="#A07868" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <!-- bag body -->
      <rect x="72" y="145" width="156" height="178" rx="8" fill="#B8897A"/>
      <!-- body side shadow — left -->
      <rect x="72" y="145" width="22" height="178" rx="4" fill="#9E7468" opacity="0.5"/>
      <!-- body side shadow — right -->
      <rect x="206" y="145" width="22" height="178" rx="4" fill="#9E7468" opacity="0.5"/>
      <!-- leather grain texture overlay -->
      <rect x="72" y="145" width="156" height="178" rx="8" fill="none" stroke="#A07868" stroke-width="0.5" opacity="0.3"/>
      <!-- pebble grain lines horizontal -->
      <path d="M80 165 Q150 161 220 165" stroke="#9E7468" stroke-width="0.7" fill="none" opacity="0.3"/>
      <path d="M80 185 Q150 181 220 185" stroke="#9E7468" stroke-width="0.7" fill="none" opacity="0.3"/>
      <path d="M80 205 Q150 201 220 205" stroke="#9E7468" stroke-width="0.7" fill="none" opacity="0.3"/>
      <path d="M80 225 Q150 221 220 225" stroke="#9E7468" stroke-width="0.7" fill="none" opacity="0.3"/>
      <path d="M80 280 Q150 276 220 280" stroke="#9E7468" stroke-width="0.7" fill="none" opacity="0.3"/>
      <path d="M80 300 Q150 296 220 300" stroke="#9E7468" stroke-width="0.7" fill="none" opacity="0.3"/>
      <!-- top flap -->
      <path d="M72 145 L228 145 L224 235 Q150 250 76 235 Z" fill="#C99C8E"/>
      <!-- flap highlight -->
      <path d="M76 150 Q150 144 224 150 L222 175 Q150 182 78 175 Z" fill="#D4A898" opacity="0.4"/>
      <!-- flap stitch line -->
      <path d="M82 240 Q150 254 218 240" stroke="#A07868" stroke-width="1" fill="none" stroke-dasharray="4 3" opacity="0.6"/>
      <!-- front exterior pocket -->
      <rect x="108" y="255" width="84" height="52" rx="4" fill="#AD8176" opacity="0.5"/>
      <path d="M112 259 Q150 255 188 259 L188 303 Q150 307 112 303 Z" fill="none" stroke="#9E7468" stroke-width="0.8" stroke-dasharray="3 2.5" opacity="0.5"/>
      <!-- magnetic clasp -->
      <circle cx="150" cy="238" r="7" fill="#E8D5C8"/>
      <circle cx="150" cy="238" r="4" fill="#D4C0B0"/>
      <line x1="150" y1="233" x2="150" y2="243" stroke="#B8A898" stroke-width="1.2"/>
      <line x1="145" y1="238" x2="155" y2="238" stroke="#B8A898" stroke-width="1.2"/>
      <!-- logo deboss area -->
      <rect x="134" y="175" width="32" height="10" rx="2" fill="#AD8176" opacity="0.4"/>
    </svg>`
  },
  {
    id: 3,
    brand: "Mango",
    title: "Block-Heel Leather Mule in Ecru",
    description: "Open-back mule in supple full-grain leather. Squared toe, 65mm stacked block heel. Padded insole.",
    price: "$119.00",
    original: "$159.00",
    rating: 4.6,
    reviews: "874",
    badge: "Sale",
    category: "shoes",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    svgIllustration: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="400" fill="#F5F3F0"/>
      <!-- cast shadow -->
      <ellipse cx="148" cy="368" rx="90" ry="10" fill="#D8D4CF" opacity="0.45"/>
      <!-- heel shadow -->
      <rect x="172" y="290" width="42" height="72" rx="3" fill="#C4BEB7" opacity="0.35"/>
      <!-- shoe body — upper -->
      <path d="M40 280 Q42 220 60 190 Q80 162 110 152 Q136 144 160 146 Q192 148 210 160 Q232 174 240 200 Q248 224 246 255 Q244 275 240 288 L40 288 Z" fill="#E8E4DF"/>
      <!-- upper leather highlight -->
      <path d="M50 270 Q52 220 68 196 Q86 170 114 160 Q140 152 165 154 Q190 156 210 168" stroke="#F0EDEA" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
      <!-- upper stitching detail toe -->
      <path d="M58 268 Q60 242 72 224 Q86 206 104 196" stroke="#D8D4CF" stroke-width="1" fill="none" stroke-dasharray="4 3" opacity="0.6"/>
      <!-- vamp opening curve -->
      <path d="M80 152 Q150 128 224 160" stroke="#D4CFC9" stroke-width="1.5" fill="none" opacity="0.8"/>
      <!-- toe box squared -->
      <path d="M40 280 Q38 290 40 300 Q42 310 50 312 L180 312 Q186 310 188 302 L188 288 L40 288 Z" fill="#DDD9D4"/>
      <!-- toe box side shadow -->
      <path d="M40 288 L40 300 Q42 310 50 312 L60 312 L60 288 Z" fill="#C9C3BC" opacity="0.5"/>
      <!-- insole visible edge -->
      <path d="M40 290 Q115 296 188 290" stroke="#C9C3BC" stroke-width="1.5" fill="none" opacity="0.7"/>
      <!-- outsole -->
      <path d="M38 310 Q38 325 42 330 L186 330 Q192 325 190 310 L50 312 Z" fill="#C9C3BC"/>
      <path d="M42 330 Q44 338 48 340 L184 340 Q188 338 188 330 Z" fill="#B8B2AB"/>
      <!-- outsole side tread lines -->
      <path d="M44 318 Q116 322 186 318" stroke="#B8B2AB" stroke-width="0.8" fill="none" opacity="0.5"/>
      <path d="M44 326 Q116 330 186 326" stroke="#B8B2AB" stroke-width="0.8" fill="none" opacity="0.5"/>
      <!-- block heel body -->
      <rect x="178" y="295" width="38" height="65" rx="2" fill="#DDD9D4"/>
      <!-- heel left face shadow -->
      <rect x="178" y="295" width="10" height="65" rx="2" fill="#C9C3BC" opacity="0.6"/>
      <!-- heel top join -->
      <rect x="176" y="292" width="42" height="8" rx="2" fill="#E8E4DF"/>
      <!-- heel sole -->
      <rect x="176" y="356" width="44" height="10" rx="2" fill="#B8B2AB"/>
      <!-- leather texture lines on upper -->
      <path d="M90 170 Q130 165 170 170" stroke="#DDD9D4" stroke-width="0.8" fill="none" opacity="0.6"/>
      <path d="M70 200 Q130 194 200 200" stroke="#DDD9D4" stroke-width="0.8" fill="none" opacity="0.5"/>
      <path d="M55 235 Q130 229 238 235" stroke="#DDD9D4" stroke-width="0.8" fill="none" opacity="0.4"/>
    </svg>`
  },
  {
    id: 4,
    brand: "Mejuri",
    title: "Demi-Fine Chain Bracelet Set",
    description: "Set of three 14k gold-filled chain bracelets — a bold curb, a delicate cable, and a twisted herringbone. Stackable.",
    price: "$148.00",
    original: null,
    rating: 4.9,
    reviews: "3.6k",
    badge: "New",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    svgIllustration: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="400" fill="#F5F3F0"/>
      <!-- marble/stone surface -->
      <rect x="30" y="300" width="240" height="70" rx="4" fill="#EAE7E3"/>
      <path d="M40 310 Q90 306 140 312 Q190 318 240 310" stroke="#DDD9D4" stroke-width="0.8" fill="none" opacity="0.6"/>
      <path d="M50 328 Q100 322 160 330 Q200 335 250 325" stroke="#DDD9D4" stroke-width="0.7" fill="none" opacity="0.4"/>
      <!-- surface shadow -->
      <path d="M30 300 L270 300" stroke="#D8D4CF" stroke-width="1" opacity="0.5"/>
      <!-- bracelet shadows on surface -->
      <ellipse cx="100" cy="303" rx="52" ry="5" fill="#C9C3BC" opacity="0.25"/>
      <ellipse cx="150" cy="305" rx="52" ry="5" fill="#C9C3BC" opacity="0.2"/>
      <ellipse cx="200" cy="303" rx="52" ry="5" fill="#C9C3BC" opacity="0.25"/>

      <!-- BRACELET 1: Curb chain — bold, lower left, laying flat -->
      <g transform="translate(62, 235) rotate(-18)">
        <!-- curb chain links — oval interlocked -->
        <rect x="0"   y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="10"  y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="15"  y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="25"  y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="30"  y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="40"  y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="45"  y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="55"  y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="60"  y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="70"  y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="75"  y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="85"  y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="90"  y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="100" y="0"  width="9"  height="14" rx="4" fill="#D4B278" stroke="#B8966A" stroke-width="0.8"/>
        <rect x="105" y="4"  width="14" height="9"  rx="4" fill="#C9A96E" stroke="#B8966A" stroke-width="0.8"/>
        <!-- clasp -->
        <rect x="119" y="3" width="14" height="11" rx="3" fill="#B8966A" stroke="#A08050" stroke-width="0.8"/>
        <line x1="126" y1="3" x2="126" y2="14" stroke="#D4B278" stroke-width="1" opacity="0.7"/>
        <!-- highlight on chain -->
        <path d="M2 6 L12 5" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M17 2 L22 6" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M32 6 L42 5" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M47 2 L52 6" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M62 6 L72 5" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M77 2 L82 6" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M92 6 L102 5" stroke="#E8D08A" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.6"/>
      </g>

      <!-- BRACELET 2: Cable chain — delicate, center, slight arc -->
      <g transform="translate(52, 190) rotate(-8)">
        <!-- small oval links in pairs -->
        <ellipse cx="4"   cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="10"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="18"  cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="24"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="32"  cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="38"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="46"  cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="52"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="60"  cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="66"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="74"  cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="80"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="88"  cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="94"  cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="102" cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="108" cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="116" cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="122" cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="130" cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="136" cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <ellipse cx="144" cy="6"  rx="3.5" ry="5.5" fill="none" stroke="#D4B278" stroke-width="1.8"/>
        <ellipse cx="150" cy="6"  rx="5.5" ry="3.5" fill="none" stroke="#C9A96E" stroke-width="1.8"/>
        <!-- lobster clasp -->
        <rect x="157" y="1" width="18" height="10" rx="5" fill="#B8966A" stroke="#A08050" stroke-width="0.8"/>
        <circle cx="162" cy="6" r="2.5" fill="none" stroke="#D4B278" stroke-width="1"/>
        <rect x="168" y="3" width="6" height="6" rx="1" fill="#C9A96E"/>
      </g>

      <!-- BRACELET 3: Herringbone — flat woven, upper right -->
      <g transform="translate(56, 148) rotate(10)">
        <!-- herringbone flat woven strip — rendered as layered parallelogram segments -->
        <rect x="0"   y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="10"  y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="20"  y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="30"  y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="40"  y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="50"  y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="60"  y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="70"  y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="80"  y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="90"  y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="100" y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="110" y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="120" y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <rect x="130" y="3" width="12" height="7" rx="1" fill="#D4B278" transform="skewX(20)"/>
        <rect x="140" y="3" width="12" height="7" rx="1" fill="#C9A96E" transform="skewX(-20)"/>
        <!-- highlight streak across herringbone -->
        <path d="M2 5 Q80 3 155 5" stroke="#EAD898" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.5"/>
        <!-- clasp -->
        <rect x="152" y="1" width="20" height="11" rx="3" fill="#B8966A" stroke="#A08050" stroke-width="0.8"/>
        <line x1="162" y1="1" x2="162" y2="12" stroke="#D4B278" stroke-width="0.8" opacity="0.6"/>
      </g>

      <!-- label text area -->
      <text x="150" y="370" text-anchor="middle" font-family="Georgia, serif" font-size="9" fill="#9B9693" letter-spacing="2" font-style="italic">set of three</text>
    </svg>`
  },
  {
    id: 5,
    brand: "Madewell",
    title: "Perfect Vintage Straight Jean",
    description: "High-rise straight-leg jean in a lived-in rigid denim. Authentic vintage wash, five-pocket styling, raw hem.",
    price: "$128.00",
    original: null,
    rating: 4.5,
    reviews: "4.8k",
    badge: null,
    category: "tops",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    emoji: "👖"
  },
  {
    id: 6,
    brand: "ZARA",
    title: "Oversized Belted Wool Coat",
    description: "Double-faced wool blend in camel. Oversized silhouette with notched lapels, belted waist, and deep side pockets.",
    price: "$159.00",
    original: "$249.00",
    rating: 4.7,
    reviews: "988",
    badge: "Sale",
    category: "outerwear",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    emoji: "🧥"
  },
  {
    id: 7,
    brand: "Anthropologie",
    title: "Ribbed Square-Neck Bodysuit",
    description: "Stretchy ribbed-knit bodysuit with a modern square neckline. Snap closure at gusset. Available in 12 colours.",
    price: "$48.00",
    original: null,
    rating: 4.4,
    reviews: "562",
    badge: null,
    category: "tops",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    emoji: "👚"
  },
  {
    id: 8,
    brand: "Steve Madden",
    title: "Zeena Platform Ankle Strap Sandal",
    description: "Platform sandal in faux leather with an adjustable ankle strap and a chunky 3.5-inch platform sole.",
    price: "$89.95",
    original: null,
    rating: 4.6,
    reviews: "1.7k",
    badge: "Bestseller",
    category: "shoes",
    affiliateUrl: "https://www.amazon.com/?tag=YOURTAG-20", /* ← Replace with your Amazon link */
    emoji: "👡"
  }
];

/* ── 2. BLOG POSTS DATA ─────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 1, title: "10 Effortless Summer Outfits Under $100",
    excerpt: "Beat the heat in style without breaking the bank. These curated looks prove that chic and affordable can coexist.",
    date: "June 20, 2025", tag: "Style Guide", emoji: "☀️",
    slug: "summer-outfits-under-100", url: "#"
  },
  {
    id: 2, title: "The Best White Sneakers of 2025, Tested & Ranked",
    excerpt: "We wore ten pairs for two weeks each. Here are the ones worth your money, from budget picks to splurge-worthy styles.",
    date: "June 14, 2025", tag: "Reviews", emoji: "👟",
    slug: "best-white-sneakers-2025", url: "#"
  },
  {
    id: 3, title: "How to Build a Capsule Wardrobe: The 2025 Edit",
    excerpt: "Thirty pieces, endless outfits. A step-by-step guide to building a wardrobe that's always ready for anything.",
    date: "June 8, 2025", tag: "Fashion Tips", emoji: "✨",
    slug: "capsule-wardrobe-2025", url: "#"
  },
  {
    id: 4, title: "Amazon Fashion Finds: June Edition",
    excerpt: "This month's best Amazon fashion discoveries — all under $60, all with rave reviews, all tried and tested.",
    date: "June 1, 2025", tag: "Amazon Picks", emoji: "🛍️",
    slug: "amazon-fashion-finds-june", url: "#"
  },
  {
    id: 5, title: "Transitional Dressing: From Office to Evening",
    excerpt: "One outfit, two looks. Master the art of transitional dressing with these clever styling tricks and key pieces.",
    date: "May 26, 2025", tag: "Style Guide", emoji: "🌆",
    slug: "office-to-evening-dressing", url: "#"
  },
  {
    id: 6, title: "The Bag Trends Dominating 2025 (& Where to Buy)",
    excerpt: "From micro bags to oversized totes, here's what's on every fashion editor's arm this season.",
    date: "May 18, 2025", tag: "Trends", emoji: "👜",
    slug: "bag-trends-2025", url: "#"
  }
];

/* ── 3. HELPERS ─────────────────────────────────────────────── */

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function createProductCard(product) {
  /* Image area: real photo > SVG illustration > emoji placeholder */
  let imageContent;
  if (product.image) {
    imageContent = `<img class="product-card__img" src="${product.image}" alt="${product.imageAlt || product.title}" loading="lazy">`;
  } else if (product.svgIllustration) {
    imageContent = `<div class="product-card__svg-wrap">${product.svgIllustration}</div>`;
  } else {
    imageContent = `
      <div class="product-card__img-placeholder">
        <span>${product.emoji || '🛍️'}</span>
        <span>Add Image</span>
      </div>`;
  }

  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.innerHTML = `
    <div class="product-card__img-wrap">
      ${imageContent}
      ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
      <button class="product-card__wish" aria-label="Save to wishlist" title="Save">♡</button>
    </div>
    <div class="product-card__body">
      <span class="product-card__brand">${product.brand}</span>
      <h3 class="product-card__title">${product.title}</h3>
      ${product.description ? `<p class="product-card__desc">${product.description}</p>` : ''}
      <div>
        <span class="product-card__stars">${renderStars(product.rating)}</span>
        <span class="product-card__rating-count">(${product.reviews})</span>
      </div>
      <div class="product-card__price-row">
        <span class="product-card__price">${product.price}</span>
        ${product.original ? `<span class="product-card__original">${product.original}</span>` : ''}
      </div>
      <div class="product-card__cta">
        <a href="${product.affiliateUrl}"
           class="btn btn--amazon"
           target="_blank"
           rel="noopener nofollow"
           data-product-id="${product.id}">
          View on Amazon →
        </a>
      </div>
    </div>
  `;
  return card;
}

function createBlogCard(post) {
  const card = document.createElement('article');
  card.className = 'blog-card reveal';
  card.innerHTML = `
    <div class="blog-card__img-wrap">
      <div class="blog-card__img-placeholder">${post.emoji}</div>
    </div>
    <div class="blog-card__body">
      <div class="blog-card__meta">
        <span class="blog-card__tag">${post.tag}</span>
        <span class="blog-card__date">${post.date}</span>
      </div>
      <h3 class="blog-card__title">
        <a href="${post.url}">${post.title}</a>
      </h3>
      <p class="blog-card__excerpt">${post.excerpt}</p>
      <a href="${post.url}" class="blog-card__read-more">Read Article</a>
    </div>
  `;
  return card;
}

/* ── 4. RENDER ──────────────────────────────────────────────── */

function renderProducts(selector, products) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = '';
  products.forEach(p => el.appendChild(createProductCard(p)));
  initReveal();
}

function renderBlogPosts(selector, posts) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = '';
  posts.forEach(p => el.appendChild(createBlogCard(p)));
  initReveal();
}

/* ── 5. NAV ─────────────────────────────────────────────────── */

function initNav() {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  const items  = document.querySelectorAll('.nav__links a');

  // Scroll shadow
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Close on link click
  items.forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));

  // Active state
  const current = location.pathname.split('/').pop() || 'index.html';
  items.forEach(a => {
    if (a.getAttribute('href').split('/').pop() === current) a.classList.add('active');
  });
}

/* ── 6. SCROLL REVEAL ───────────────────────────────────────── */

let revealObserver = null;

function initReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!items.length) return;

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger based on sibling index for grids
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')]
            : [];
          const idx = siblings.indexOf(entry.target);
          const delay = Math.min(idx * 70, 280);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  items.forEach(el => revealObserver.observe(el));
}

/* ── 7. SCROLL-TO-TOP ───────────────────────────────────────── */

function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 8. TOAST ───────────────────────────────────────────────── */

function showToast(message, duration = 3500) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── 9. NEWSLETTER / CONTACT FORMS ─────────────────────────── */

function initForms() {
  document.querySelectorAll('.newsletter__form, .contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast("Thanks! You're on the list. 🎉");
      form.reset();
    });
  });
}

/* ── 10. PRODUCT FILTER ─────────────────────────────────────── */

function initProductFilter() {
  const btns = document.querySelectorAll('.filter-btn[data-filter]');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      renderProducts('.products__grid', f === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === f));
    });
  });
}

/* ── 11. AFFILIATE CLICK TRACKING ────────────────────────────── */

function initTracking() {
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-product-id]');
    if (!link) return;
    const product = PRODUCTS.find(p => p.id === Number(link.dataset.productId));
    if (product) {
      console.log(`[Affiliate] ${product.title} — ${product.affiliateUrl}`);
      /* Replace with your analytics call, e.g.:
         gtag('event', 'affiliate_click', { item_name: product.title }); */
    }
  });
}

/* ── 12. PAGE INIT ──────────────────────────────────────────── */

function initHomePage() {
  renderProducts('#featured-products', PRODUCTS.slice(0, 4));
  renderBlogPosts('#homepage-blog', BLOG_POSTS.slice(0, 3));
}

function initBlogPage() {
  renderBlogPosts('#all-blog-posts', BLOG_POSTS);
  const btns = document.querySelectorAll('.filter-btn[data-tag]');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.tag;
      renderBlogPosts('#all-blog-posts', tag === 'all' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.tag === tag));
    });
  });
}

function initCategoriesPage() {
  renderProducts('.products__grid', PRODUCTS);
  initProductFilter();
}

/* ── 13. BOOTSTRAP ──────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initScrollTop();
  initForms();
  initTracking();

  const page = document.body.dataset.page;
  if (page === 'home')       initHomePage();
  if (page === 'blog')       initBlogPage();
  if (page === 'categories') initCategoriesPage();
});
