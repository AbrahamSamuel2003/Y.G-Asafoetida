import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
//#region node_modules/.nitro/vite/services/ssr/assets/db-CPz3PJoi.js
var dbInstance = null;
function getDbPath() {
	const dataDir = path.resolve(process.cwd(), "data");
	if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
	return path.join(dataDir, "yg_store.db");
}
function getDb() {
	if (dbInstance) return dbInstance;
	const dbPath = getDbPath();
	const db = new DatabaseSync(dbPath);
	db.exec("PRAGMA journal_mode = WAL;");
	db.exec("PRAGMA foreign_keys = ON;");
	initSchema(db);
	seedInitialData(db);
	dbInstance = db;
	return dbInstance;
}
function initSchema(db) {
	db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      slug TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      tagline TEXT NOT NULL,
      format TEXT NOT NULL,
      gluten_free INTEGER NOT NULL DEFAULT 0,
      bestseller INTEGER NOT NULL DEFAULT 0,
      image TEXT NOT NULL,
      gallery TEXT NOT NULL,
      description TEXT NOT NULL,
      ingredients TEXT NOT NULL,
      usage TEXT NOT NULL,
      shelf_life TEXT NOT NULL,
      in_stock INTEGER NOT NULL DEFAULT 1,
      stock_left INTEGER,
      rating REAL NOT NULL DEFAULT 5.0,
      reviews INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS product_variants (
      id TEXT NOT NULL,
      product_slug TEXT NOT NULL,
      label TEXT NOT NULL,
      price INTEGER NOT NULL,
      mrp INTEGER,
      stock INTEGER DEFAULT 100,
      sort_order INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (product_slug, id),
      FOREIGN KEY (product_slug) REFERENCES products(slug) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      created_at INTEGER NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      subtotal INTEGER NOT NULL,
      discount INTEGER NOT NULL DEFAULT 0,
      shipping INTEGER NOT NULL DEFAULT 0,
      gift_wrap INTEGER NOT NULL DEFAULT 0,
      cod_fee INTEGER NOT NULL DEFAULT 0,
      total INTEGER NOT NULL,
      promo_code TEXT,
      address_json TEXT NOT NULL,
      payment TEXT NOT NULL,
      delivery TEXT NOT NULL DEFAULT 'standard',
      status TEXT NOT NULL DEFAULT 'placed',
      notes TEXT,
      gift INTEGER NOT NULL DEFAULT 0,
      gift_message TEXT,
      resolution_json TEXT,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id TEXT PRIMARY KEY,
      order_id TEXT NOT NULL,
      slug TEXT NOT NULL,
      variant_id TEXT NOT NULL,
      name TEXT NOT NULL,
      variant_label TEXT NOT NULL,
      image TEXT NOT NULL,
      qty INTEGER NOT NULL,
      price INTEGER NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL,
      rating INTEGER NOT NULL,
      title TEXT NOT NULL,
      comment TEXT NOT NULL,
      name TEXT NOT NULL,
      city TEXT,
      email TEXT,
      phone TEXT,
      contact_opt_in INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      FOREIGN KEY (slug) REFERENCES products(slug) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL,
      question TEXT NOT NULL,
      answer TEXT,
      asked_by TEXT NOT NULL,
      answered_by TEXT,
      created_at INTEGER NOT NULL,
      answered_at INTEGER,
      status TEXT NOT NULL DEFAULT 'pending',
      FOREIGN KEY (slug) REFERENCES products(slug) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS tickets (
      id TEXT PRIMARY KEY,
      topic TEXT NOT NULL,
      order_id TEXT,
      message TEXT NOT NULL,
      contact TEXT NOT NULL,
      name TEXT,
      status TEXT NOT NULL DEFAULT 'open',
      reply TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS stock_alerts (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL,
      contact TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      notified INTEGER NOT NULL DEFAULT 0,
      notified_at INTEGER,
      FOREIGN KEY (slug) REFERENCES products(slug) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS promos (
      code TEXT PRIMARY KEY,
      label TEXT NOT NULL,
      description TEXT NOT NULL,
      percent_off REAL,
      amount_off INTEGER,
      min_subtotal INTEGER,
      free_shipping INTEGER NOT NULL DEFAULT 0,
      automatic INTEGER NOT NULL DEFAULT 0,
      is_active INTEGER NOT NULL DEFAULT 1,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS recipes (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      blurb TEXT NOT NULL,
      region TEXT NOT NULL,
      minutes INTEGER NOT NULL,
      serves INTEGER NOT NULL,
      difficulty TEXT NOT NULL,
      hero_slug TEXT NOT NULL,
      uses_json TEXT NOT NULL,
      ingredients_json TEXT NOT NULL,
      steps_json TEXT NOT NULL,
      tip TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );
  `);
}
function seedInitialData(db) {
	const now = Date.now();
	const initialProducts = [
		{
			slug: "gold-asafoetida-powder",
			name: "Y.G Gold Asafoetida Powder",
			tagline: "Heritage Gold Compounded Asafoetida Powder",
			format: "powder",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/100g-gold-asafoetida-powder/img-1.jpg",
			gallery: JSON.stringify([
				"/products/100g-gold-asafoetida-powder/img-1.jpg",
				"/products/50g-gold-asafoetida-powder/img-1.jpg",
				"/products/500g-gold-asafoetida-powder/img-1.jpg",
				"/products/100g-gold-asafoetida-powder/img-2.jpg",
				"/products/50g-gold-asafoetida-powder/img-2.jpg"
			]),
			description: "Our signature Gold grade compounded hing powder crafted to age-old Tirunelveli traditions since 1932. Rich, intense aromatic profile that elevates every sambar, rasam, kootu, and tadka with wholesome flavor.",
			ingredients: "Asafoetida (Ferula asafoetida), edible starch, edible gum, refined vegetable oil.",
			usage: "Add 1/4 teaspoon to hot ghee or oil during tempering.",
			shelf_life: "18 months from packing. Store in an airtight container.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 1420,
			variants: [
				{
					id: "50g",
					label: "50 g",
					price: 175,
					mrp: 200,
					stock: 80
				},
				{
					id: "100g",
					label: "100 g",
					price: 320,
					mrp: 360,
					stock: 120
				},
				{
					id: "500g",
					label: "500 g",
					price: 1450,
					mrp: 1650,
					stock: 40
				}
			]
		},
		{
			slug: "premium-asafoetida-powder",
			name: "Y.G Premium Asafoetida Powder",
			tagline: "Master Chef's High-Concentration Hing Powder",
			format: "powder",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/100g-premium-asafoetida-powder/img-1.jpg",
			gallery: JSON.stringify([
				"/products/100g-premium-asafoetida-powder/img-1.jpg",
				"/products/50g-premium-asafoetida-powder/img-1.jpg",
				"/products/100g-premium-asafoetida-powder/img-2.jpg",
				"/products/50g-premium-asafoetida-powder/img-2.jpg",
				"/products/100g-premium-asafoetida-powder/img-3.jpg"
			]),
			description: "Superior chef-grade asafoetida with higher natural resin concentration for deep, pungent aroma and unmatched digestive tempering potency.",
			ingredients: "Selected Asafoetida (Ferula asafoetida), edible starch, gum arabic.",
			usage: "A small pinch in hot oil or ghee is sufficient for a family curry.",
			shelf_life: "24 months from packing in a sealed jar.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 890,
			variants: [{
				id: "50g",
				label: "50 g",
				price: 195,
				mrp: 225,
				stock: 90
			}, {
				id: "100g",
				label: "100 g",
				price: 360,
				mrp: 410,
				stock: 110
			}]
		},
		{
			slug: "gluten-free-asafoetida-powder",
			name: "Y.G Gluten Free Asafoetida Powder",
			tagline: "Wheat-Free Rice Starch Base — 100% Celiac Safe",
			format: "powder",
			gluten_free: 1,
			bestseller: 1,
			image: "/products/50g-gluten-free-asafoetida-powder/img-1.jpg",
			gallery: JSON.stringify([
				"/products/50g-gluten-free-asafoetida-powder/img-1.jpg",
				"/products/50g-gluten-free-asafoetida-powder/img-2.jpg",
				"/products/50g-gluten-free-asafoetida-powder/img-3.jpg",
				"/products/50g-gluten-free-asafoetida-powder/img-4.jpg"
			]),
			description: "Made exclusively with pure rice starch base without any wheat flour. Delivers 100% authentic hing aroma for gluten-sensitive and celiac households.",
			ingredients: "Asafoetida (Ferula asafoetida), rice starch, edible gum. Certified gluten-free.",
			usage: "Use exactly like classic powder — 1/4 tsp per dish.",
			shelf_life: "18 months from packing.",
			in_stock: 1,
			stock_left: 8,
			rating: 4.8,
			reviews: 512,
			variants: [{
				id: "50g",
				label: "50 g",
				price: 220,
				mrp: 250,
				stock: 65
			}, {
				id: "100g",
				label: "100 g",
				price: 395,
				mrp: 450,
				stock: 75
			}]
		},
		{
			slug: "asafoetida-gold-cake",
			name: "Y.G Asafoetida Gold Cake (Pindi Hing)",
			tagline: "Solid Block Pindi Hing for Pickles & Traditional Tadka",
			format: "cake",
			gluten_free: 0,
			bestseller: 0,
			image: "/products/100g-asafoetida-gold-cake/img-1.jpg",
			gallery: JSON.stringify([
				"/products/100g-asafoetida-gold-cake/img-1.jpg",
				"/products/50g-asafoetida-gold-cake/img-1.jpg",
				"/products/100g-asafoetida-gold-cake/img-2.jpg",
				"/products/50g-asafoetida-gold-cake/img-2.jpg"
			]),
			description: "Pure concentrated hing cake block. Scrape or shave a small flake into hot oil to release intense, unbroken culinary fragrance, or soak in warm water for aromatic gravy infusion.",
			ingredients: "Asafoetida (Ferula asafoetida), edible gum, edible starch.",
			usage: "Shave a pea-sized piece into tempering or dissolve in 2 tbsp warm water.",
			shelf_life: "36 months. Keep wrapped in foil inside airtight container.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 340,
			variants: [{
				id: "50g",
				label: "50 g cake",
				price: 240,
				mrp: 280,
				stock: 50
			}, {
				id: "100g",
				label: "100 g cake",
				price: 450,
				mrp: 520,
				stock: 60
			}]
		},
		{
			slug: "hing-chips",
			name: "Y.G Hing Chips (Flakes / Khada)",
			tagline: "Sun-Dried Asafoetida Flakes — Slow Blooming Flavor",
			format: "granules",
			gluten_free: 0,
			bestseller: 0,
			image: "/products/hing-chips/img-1.jpg",
			gallery: JSON.stringify(["/products/hing-chips/img-1.jpg", "/products/hing-chips/img-2.jpg"]),
			description: "Coarse sun-cured hing flakes that bloom slowly in sizzling ghee, infusing sambars, curries, and rasams with deep, lingering flavor.",
			ingredients: "Asafoetida (Ferula foetida resin), edible gum, edible flour.",
			usage: "Drop 2-3 flakes into warm ghee before adding spices.",
			shelf_life: "24 months in an airtight jar.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 215,
			variants: [{
				id: "50g",
				label: "50 g",
				price: 260,
				mrp: 300,
				stock: 45
			}, {
				id: "100g",
				label: "100 g",
				price: 490,
				mrp: 560,
				stock: 50
			}]
		},
		{
			slug: "hing-pellets",
			name: "Y.G Hing Pellets (Dana Hing)",
			tagline: "Crisp Granular Pellets for Curd Rice & Sambar Tempering",
			format: "granules",
			gluten_free: 0,
			bestseller: 0,
			image: "/products/hing-pellets/img-1.jpg",
			gallery: JSON.stringify([
				"/products/hing-pellets/img-1.jpg",
				"/products/hing-pellets/img-2.jpg",
				"/products/hing-pellets/img-3.jpg",
				"/products/hing-pellets/img-4.jpg"
			]),
			description: "Free-flowing, crisp hing pellets that dissolve smoothly and puff lightly when dropped in hot oil. The ideal choice for curd rice, buttermilk, vathal kuzhambu, and potato roasts.",
			ingredients: "Asafoetida, natural gum, edible cereal starch.",
			usage: "Crush a pellet or drop whole into hot oil during tadka.",
			shelf_life: "24 months.",
			in_stock: 1,
			stock_left: null,
			rating: 4.8,
			reviews: 310,
			variants: [{
				id: "50g",
				label: "50 g",
				price: 250,
				mrp: 290,
				stock: 55
			}, {
				id: "100g",
				label: "100 g",
				price: 475,
				mrp: 540,
				stock: 60
			}]
		},
		{
			slug: "bottle-jar-asafoetida",
			name: "Y.G Heritage Bottle Jar Asafoetida",
			tagline: "Collector's Glass Bottle Jar with Airtight Aroma Seal",
			format: "powder",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/bottle-jar/img-1.jpg",
			gallery: JSON.stringify([
				"/products/bottle-jar/img-1.jpg",
				"/products/bottle-jar/img-2.jpg",
				"/products/bottle-jar/img-3.jpg",
				"/products/bottle-jar/img-4.jpg",
				"/products/bottle-jar/img-5.jpg"
			]),
			description: "Presented in our signature airtight glass bottle jar with hermetic seal to preserve volatile aromatic oils for years. Reusable and collector-worthy.",
			ingredients: "Compounded Asafoetida (Ferula asafoetida), edible starch, edible gum.",
			usage: "Keep on kitchen counter for easy daily spooning.",
			shelf_life: "36 months in aroma-lock glass jar.",
			in_stock: 1,
			stock_left: null,
			rating: 5,
			reviews: 460,
			variants: [{
				id: "100g",
				label: "100 g Glass Jar",
				price: 380,
				mrp: 440,
				stock: 40
			}, {
				id: "250g",
				label: "250 g Glass Jar",
				price: 850,
				mrp: 990,
				stock: 30
			}]
		},
		{
			slug: "pure-raw-hing",
			name: "Y.G Pure Raw Hing Lump (Kashmiri Resin)",
			tagline: "100% Uncut Natural Ferula Gum Resin",
			format: "cake",
			gluten_free: 0,
			bestseller: 0,
			image: "/products/hing/img-1.jpg",
			gallery: JSON.stringify([
				"/products/hing/img-1.jpg",
				"/products/hing/img-2.jpg",
				"/products/hing/img-3.jpg",
				"/products/hing/img-4.jpg",
				"/products/hing/img-5.jpg"
			]),
			description: "The raw, unadulterated gum oleoresin directly harvested from the mountain roots of Ferula. Extremely potent and medicinal — a microscopic piece will transform an entire banquet.",
			ingredients: "100% Raw Asafoetida Oleoresin (Ferula foetida). Zero additives.",
			usage: "Scrape a tiny pinhead amount and dissolve in warm liquid.",
			shelf_life: "60 months. Indefinite when kept dry and sealed.",
			in_stock: 1,
			stock_left: null,
			rating: 5,
			reviews: 195,
			variants: [
				{
					id: "25g",
					label: "25 g Raw Lump",
					price: 390,
					mrp: 450,
					stock: 35
				},
				{
					id: "50g",
					label: "50 g Raw Lump",
					price: 720,
					mrp: 820,
					stock: 40
				},
				{
					id: "100g",
					label: "100 g Raw Lump",
					price: 1350,
					mrp: 1550,
					stock: 25
				}
			]
		},
		{
			slug: "all-product-heritage-combo",
			name: "Y.G Complete Heritage Asafoetida Combo",
			tagline: "Grand All-in-One Collection Box with Spoon & Notes",
			format: "combo",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/all-product/img-1.jpg",
			gallery: JSON.stringify([
				"/products/all-product/img-1.jpg",
				"/products/all-product/img-2.jpg",
				"/products/all-product/img-3.jpg",
				"/products/all-product/img-4.jpg",
				"/products/all-product/img-5.jpg",
				"/products/all-product/img-6.jpg"
			]),
			description: "The definitive Y.G tasting experience containing Gold Powder, Premium Cake, Pellets, Chips, and Bottle Jar alongside an engraved brass spoon and heritage recipe cards.",
			ingredients: "Contains: Gold Powder (100g), Cake (50g), Pellets (50g), Chips (50g), Brass Spoon.",
			usage: "The ultimate culinary gift for gourmet cooks and heritage lovers.",
			shelf_life: "24 months.",
			in_stock: 1,
			stock_left: null,
			rating: 5,
			reviews: 280,
			variants: [{
				id: "4in1",
				label: "4-in-1 Heritage Box",
				price: 999,
				mrp: 1299,
				stock: 50
			}, {
				id: "deluxe",
				label: "Deluxe Hamper Box",
				price: 1799,
				mrp: 2299,
				stock: 30
			}]
		},
		{
			slug: "traditional-health-mix",
			name: "Y.G Traditional Health Mix (Sathu Maavu)",
			tagline: "18 Multigrain Energy Porridge with Millets, Pulses & Nuts",
			format: "wellness",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/traditional-health-mix/img-1.jpg",
			gallery: JSON.stringify([
				"/products/traditional-health-mix/img-1.jpg",
				"/products/traditional-health-mix/img-2.jpg",
				"/products/traditional-health-mix/img-3.jpg",
				"/products/traditional-health-mix/img-4.jpg",
				"/products/traditional-health-mix/img-5.jpg",
				"/products/traditional-health-mix/img-6.jpg",
				"/products/traditional-health-mix/img-7.jpg"
			]),
			description: "Handcrafted traditional Sathu Maavu multigrain porridge mix slowly dry-roasted on wood-fired irons and stone-ground from 18 traditional grains, pulses, millets, cardamom, and roasted nuts. Ideal daily morning nourishment for all ages.",
			ingredients: "Ragi, Kambu (Pearl Millet), Red Rice, Roasted Gram, Green Gram, Wheat, Sorghum, Almonds, Cashews, Cardamom, Dry Ginger.",
			usage: "Mix 2 tbsp in 250ml water or milk, simmer for 3-5 minutes with country jaggery or salt & buttermilk.",
			shelf_life: "9 months from packing. Store in an airtight container.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 310,
			variants: [{
				id: "200g",
				label: "200 g",
				price: 140,
				mrp: 165,
				stock: 90
			}, {
				id: "500g",
				label: "500 g",
				price: 320,
				mrp: 380,
				stock: 65
			}]
		},
		{
			slug: "pure-benzoin-sambrani",
			name: "Y.G Pure Natural Benzoin (Pooja Sambrani)",
			tagline: "Sacred Temple Loban Resin for Puja & Daily Fragrance",
			format: "pooja",
			gluten_free: 1,
			bestseller: 1,
			image: "/products/pure-benzoin-sambrani/img-1.png",
			gallery: JSON.stringify([
				"/products/pure-benzoin-sambrani/img-1.png",
				"/products/pure-benzoin-sambrani/img-2.jpg",
				"/products/pure-benzoin-sambrani/img-3.jpg",
				"/products/pure-benzoin-sambrani/img-4.jpg"
			]),
			description: "Pure natural Benzoin resin (Loban / Paal Sambrani) sourced directly from natural balsamic trees. Produces divine, authentic temple aroma and clears airborne impurities when sprinkled on glowing charcoal.",
			ingredients: "100% Pure Natural Benzoin Resin (Styrax benzoin).",
			usage: "Sprinkle a small piece onto glowing coconut shell charcoal or dhoop burner.",
			shelf_life: "36 months. Store in a dry place.",
			in_stock: 1,
			stock_left: null,
			rating: 5,
			reviews: 185,
			variants: [
				{
					id: "25g",
					label: "25 g",
					price: 85,
					mrp: 100,
					stock: 120
				},
				{
					id: "50g",
					label: "50 g",
					price: 160,
					mrp: 190,
					stock: 95
				},
				{
					id: "100g",
					label: "100 g",
					price: 290,
					mrp: 350,
					stock: 50
				}
			]
		},
		{
			slug: "black-sesame-seeds",
			name: "Y.G Pure Black Sesame (Karuppu Ellu)",
			tagline: "Traditional Sun-Dried High-Calcium Black Sesame Seeds",
			format: "wellness",
			gluten_free: 1,
			bestseller: 1,
			image: "/products/black-sesame-seeds/img-1.jpg",
			gallery: JSON.stringify([
				"/products/black-sesame-seeds/img-1.jpg",
				"/products/black-sesame-seeds/img-2.jpg",
				"/products/black-sesame-seeds/img-3.jpg",
				"/products/black-sesame-seeds/img-4.jpg"
			]),
			description: "Carefully selected and sun-dried indigenous South Indian Black Sesame (Karuppu Ellu). Rich in natural calcium, iron, and potent antioxidants. Perfect for traditional ellu sadam, ellu urundai, idli podi, and authentic restorative recipes.",
			ingredients: "100% Pure Natural Sun-Dried Black Sesame Seeds (Sesamum indicum).",
			usage: "Lightly dry roast on medium heat for ellu sadam, podi, or consume 1 spoon daily with country palm jaggery.",
			shelf_life: "12 months from packing. Store in an airtight container.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 145,
			variants: [{
				id: "200g",
				label: "200 g",
				price: 95,
				mrp: 120,
				stock: 100
			}, {
				id: "500g",
				label: "500 g",
				price: 220,
				mrp: 270,
				stock: 60
			}]
		},
		{
			slug: "traditional-idli-podi",
			name: "Y.G Traditional Idli Chutney Podi",
			tagline: "Artisanal Wood-Roasted Gunpowder with Pure Hing & Lentils",
			format: "powder",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/traditional-idli-podi/img-1.jpg",
			gallery: JSON.stringify([
				"/products/traditional-idli-podi/img-1.jpg",
				"/products/traditional-idli-podi/img-2.jpg",
				"/products/traditional-idli-podi/img-3.jpg",
				"/products/traditional-idli-podi/img-4.jpg"
			]),
			description: "Grandmother's heritage recipe of slow-roasted urad dal, chana dal, sun-dried Guntur chillies, fresh curry leaves, and a generous pinch of authentic Y.G compounded hing. Coarsely ground for the signature crunchy texture that pairs exquisitely with hot idlis, crispy dosas, and cold-pressed sesame oil or ghee.",
			ingredients: "Urad Dal, Chana Dal, Dry Red Chillies, White Sesame, Curry Leaves, Y.G Compounded Asafoetida, Rock Salt.",
			usage: "Mix 1-2 tbsp with cold-pressed gingelly (sesame) oil or hot melted A2 ghee as a dip for idlis and dosas.",
			shelf_life: "9 months from packing. Keep jar sealed.",
			in_stock: 1,
			stock_left: null,
			rating: 5,
			reviews: 260,
			variants: [{
				id: "200g",
				label: "200 g",
				price: 135,
				mrp: 160,
				stock: 110
			}, {
				id: "500g",
				label: "500 g",
				price: 310,
				mrp: 360,
				stock: 75
			}]
		},
		{
			slug: "millet-pongal-mix",
			name: "Y.G Traditional Millet Pongal Mix",
			tagline: "Nutrient-Dense Wholesome Foxtail & Little Millet Breakfast Blend",
			format: "wellness",
			gluten_free: 1,
			bestseller: 1,
			image: "/products/millet-pongal-mix/img-1.jpg",
			gallery: JSON.stringify(["/products/millet-pongal-mix/img-1.jpg", "/products/millet-pongal-mix/img-2.jpg"]),
			description: "A hearty, low-glycemic traditional South Indian breakfast blend combining unpolished heritage millets with yellow moong dal, crushed Tellicherry black pepper, cumin seeds, roasted cashews, and ginger. Cooks into a piping-hot, comforting Ven Pongal in under 10 minutes.",
			ingredients: "Foxtail Millet (Thinai), Little Millet (Samai), Yellow Moong Dal, Crushed Black Pepper, Cumin Seeds, Whole Cashews, Ginger, Curry Leaves, Y.G Pure Hing, Salt.",
			usage: "Pressure cook 1 cup mix with 3.5 cups water for 3 whistles, or simmer in a pot. Top with 1 spoon hot ghee.",
			shelf_life: "9 months from packing.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 178,
			variants: [{
				id: "250g",
				label: "250 g",
				price: 125,
				mrp: 150,
				stock: 85
			}, {
				id: "500g",
				label: "500 g",
				price: 235,
				mrp: 280,
				stock: 55
			}]
		},
		{
			slug: "millet-sambar-mix",
			name: "Y.G Traditional Millet Sambar Rice Mix",
			tagline: "Authentic Tirunelveli Sambar Rice with Ancient Millets & Spices",
			format: "wellness",
			gluten_free: 0,
			bestseller: 1,
			image: "/products/millet-sambar-mix/img-1.jpg",
			gallery: JSON.stringify(["/products/millet-sambar-mix/img-1.jpg", "/products/millet-sambar-mix/img-2.jpg"]),
			description: "One-pot nourishing South Indian comfort food crafted with Kodo and Barnyard millets, protein-rich toor dal, and an artisanal roasted spice blend infused with tangy tamarind and signature Y.G asafoetida.",
			ingredients: "Kodo Millet (Varagu), Barnyard Millet (Kuthiraivali), Toor Dal, Roasted Coriander, Red Chillies, Cumin, Fenugreek, Tamarind, Turmeric, Y.G Compounded Hing, Rock Salt.",
			usage: "Add 1 cup mix to 4 cups boiling water in a pressure cooker with vegetables of choice, cook for 3 whistles, finish with a drizzle of ghee.",
			shelf_life: "9 months from packing.",
			in_stock: 1,
			stock_left: null,
			rating: 4.9,
			reviews: 162,
			variants: [{
				id: "250g",
				label: "250 g",
				price: 130,
				mrp: 155,
				stock: 90
			}, {
				id: "500g",
				label: "500 g",
				price: 245,
				mrp: 290,
				stock: 60
			}]
		}
	];
	const insertProduct = db.prepare(`
    INSERT OR REPLACE INTO products (
      slug, name, tagline, format, gluten_free, bestseller, image, gallery,
      description, ingredients, usage, shelf_life, in_stock, stock_left,
      rating, reviews, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
	const insertVariant = db.prepare(`
    INSERT OR REPLACE INTO product_variants (
      id, product_slug, label, price, mrp, stock, sort_order
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
	for (const p of initialProducts) {
		insertProduct.run(p.slug, p.name, p.tagline, p.format, p.gluten_free, p.bestseller, p.image, p.gallery, p.description, p.ingredients, p.usage, p.shelf_life, p.in_stock, p.stock_left, p.rating, p.reviews, now, now);
		let sortOrder = 0;
		for (const v of p.variants) insertVariant.run(v.id, p.slug, v.label, v.price, v.mrp ?? null, v.stock ?? 50, sortOrder++);
	}
	const initialPromos = [
		{
			code: "HERITAGE10",
			label: "10% off",
			description: "10% off your order — our 1932 heritage welcome offer.",
			percent_off: 10,
			amount_off: null,
			min_subtotal: null,
			free_shipping: 0,
			automatic: 0
		},
		{
			code: "HING50",
			label: "₹50 off",
			description: "₹50 off orders above ₹399.",
			percent_off: null,
			amount_off: 50,
			min_subtotal: 399,
			free_shipping: 0,
			automatic: 0
		},
		{
			code: "FREESHIP",
			label: "Free shipping",
			description: "Free delivery on any order.",
			percent_off: null,
			amount_off: null,
			min_subtotal: null,
			free_shipping: 1,
			automatic: 0
		},
		{
			code: "BULK15",
			label: "15% off ₹999+",
			description: "Automatic 15% off when your basket crosses ₹999.",
			percent_off: 15,
			amount_off: null,
			min_subtotal: 999,
			free_shipping: 0,
			automatic: 1
		}
	];
	const insertPromo = db.prepare(`
    INSERT OR REPLACE INTO promos (
      code, label, description, percent_off, amount_off, min_subtotal,
      free_shipping, automatic, is_active, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
  `);
	for (const pr of initialPromos) insertPromo.run(pr.code, pr.label, pr.description, pr.percent_off, pr.amount_off, pr.min_subtotal, pr.free_shipping, pr.automatic, now);
	const initialQuestions = [
		{
			id: "q-powder-1",
			slug: "gold-asafoetida-powder",
			question: "Does the gold powder contain wheat?",
			answer: "Yes — the classic gold compounded powder uses edible wheat starch as its carrier. If you need to avoid gluten, our Gluten-Free Hing Powder is made on a 100% rice-starch base with the same aroma strength.",
			asked_by: "Anitha, Coimbatore",
			answered_by: "Y.G team",
			created_at: Date.parse("2026-05-14"),
			answered_at: Date.parse("2026-05-14"),
			status: "published"
		},
		{
			id: "q-powder-2",
			slug: "gold-asafoetida-powder",
			question: "How much should I use for one litre of sambar?",
			answer: "About a quarter teaspoon, added to the hot ghee at the tempering stage. Hing is stronger than most people expect — start small and adjust.",
			asked_by: "Ravi K., Bengaluru",
			answered_by: "Y.G team",
			created_at: Date.parse("2026-06-02"),
			answered_at: Date.parse("2026-06-02"),
			status: "published"
		},
		{
			id: "q-granules-1",
			slug: "hing-chips",
			question: "Can I grind the chips into a powder at home?",
			answer: "You can, but they are sun-cured into flakes on purpose so they bloom slowly in curd rice and pickles. For instant dissolving, the Gold Powder is the better buy.",
			asked_by: "Deepa S., Chennai",
			answered_by: "Y.G team",
			created_at: Date.parse("2026-04-21"),
			answered_at: Date.parse("2026-04-21"),
			status: "published"
		},
		{
			id: "q-cake-1",
			slug: "asafoetida-gold-cake",
			question: "How do I store the cake once I start using it?",
			answer: "Wrap the remaining block in foil and keep it inside a sealed steel dabba, away from other spices. Stored that way it holds strength for three years.",
			asked_by: "Muthu V., Madurai",
			answered_by: "Y.G team",
			created_at: Date.parse("2026-03-08"),
			answered_at: Date.parse("2026-03-08"),
			status: "published"
		},
		{
			id: "q-gf-1",
			slug: "gluten-free-asafoetida-powder",
			question: "Is this certified gluten-free or just wheat-free?",
			answer: "It is lab-tested per batch and certified gluten-free. It is compounded on a separate line from our wheat-starch powder to avoid cross-contact.",
			asked_by: "Priya N., Hyderabad",
			answered_by: "Y.G team",
			created_at: Date.parse("2026-07-01"),
			answered_at: Date.parse("2026-07-01"),
			status: "published"
		}
	];
	const insertQuestion = db.prepare(`
    INSERT OR REPLACE INTO questions (
      id, slug, question, answer, asked_by, answered_by, created_at, answered_at, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
	for (const q of initialQuestions) insertQuestion.run(q.id, q.slug, q.question, q.answer, q.asked_by, q.answered_by, q.created_at, q.answered_at, q.status);
	const initialReviews = [
		{
			id: "rev-prem-1",
			slug: "premium-asafoetida-powder",
			rating: 5,
			title: "Unbelievable depth of aroma for daily sambar",
			comment: "The extra resin concentration is noticeable immediately when it hits the hot ghee. You need only a fraction of what supermarket brands call for. Our morning rasam smells heavenly.",
			name: "R. Venkatraman",
			city: "Chennai, TN",
			email: "venkat.r@example.com",
			created_at: Date.parse("2026-07-18"),
			status: "published"
		},
		{
			id: "rev-prem-2",
			slug: "premium-asafoetida-powder",
			rating: 5,
			title: "Pure unadulterated smell without chemical fillers",
			comment: "Standard store brands use chemical essences that give a sharp synthetic headache. Y.G Premium has that warm, sweet, wholesome cooked-garlic aroma that integrates seamlessly with tamarind.",
			name: "Sumitra Jayaram",
			city: "Bengaluru, KA",
			email: "sumitra.j@example.com",
			created_at: Date.parse("2026-07-25"),
			status: "published"
		},
		{
			id: "rev-prem-3",
			slug: "premium-asafoetida-powder",
			rating: 5,
			title: "Just a pinhead measure in ghee is enough for 1.5 litres",
			comment: "Being from Tirunelveli myself, I was delighted to find Y.G online. The 100g jar lasts our family over four months because the potency per pinch is so high.",
			name: "Ganapathy Iyer",
			city: "Tirunelveli, TN",
			email: "ganapathy.i@example.com",
			created_at: Date.parse("2026-08-02"),
			status: "published"
		},
		{
			id: "rev-prem-4",
			slug: "premium-asafoetida-powder",
			rating: 5,
			title: "Essential for wedding-style dal and kootu",
			comment: "Cooked a feast for 25 people using this premium powder for the sambar and cabbage poriyal. Everyone asked which brand of hing was in the tempering.",
			name: "Shobha Nair",
			city: "Kochi, KL",
			email: "shobha.n@example.com",
			created_at: Date.parse("2026-08-10"),
			status: "published"
		},
		{
			id: "rev-gold-1",
			slug: "gold-asafoetida-powder",
			rating: 5,
			title: "Authentic Tirunelveli paati's rasam aroma",
			comment: "Takes me straight back to my grandmother's rasam in Tirunelveli. Incomparable quality compared to standard store brands.",
			name: "Sowmya Raman",
			city: "Chennai, TN",
			email: "sowmya@example.com",
			created_at: Date.parse("2026-06-15"),
			status: "published"
		},
		{
			id: "rev-gold-2",
			slug: "gold-asafoetida-powder",
			rating: 5,
			title: "Our family house staple for 30 years",
			comment: "Instant dissolve in hot gingelly oil, never leaves charred black specks in the tadka. Perfect balance of wheat starch and pure ferula gum.",
			name: "S. Balasubramanian",
			city: "Madurai, TN",
			email: "bala.sub@example.com",
			created_at: Date.parse("2026-07-04"),
			status: "published"
		},
		{
			id: "rev-gf-1",
			slug: "gluten-free-asafoetida-powder",
			rating: 5,
			title: "Life-saver for celiac cooking",
			comment: "I could not find a pure gluten-free hing that smelled this strong anywhere else. Very grateful for the 100% rice-starch compounding.",
			name: "Karthik Sundaram",
			city: "Bengaluru, KA",
			email: "karthik@example.com",
			created_at: Date.parse("2026-07-10"),
			status: "published"
		},
		{
			id: "rev-gf-2",
			slug: "gluten-free-asafoetida-powder",
			rating: 5,
			title: "Zero cross-contamination and outstanding aroma",
			comment: "Lab-tested celiac safe. My daughter can finally eat traditional sambar and rasam without digestive distress. Thank you Y.G team!",
			name: "Divya Mukund",
			city: "Hyderabad, TS",
			email: "divya.m@example.com",
			created_at: Date.parse("2026-07-28"),
			status: "published"
		},
		{
			id: "rev-pellet-1",
			slug: "hing-pellets",
			rating: 5,
			title: "Best for curd rice tempering and crunch",
			comment: "The pellets don't burn instantly like fine powder does. Perfect crunch and fragrance when tempered in mustard and curry leaves.",
			name: "Meenakshi V.",
			city: "Madurai, TN",
			email: "meena@example.com",
			created_at: Date.parse("2026-07-22"),
			status: "published"
		},
		{
			id: "rev-chips-1",
			slug: "hing-chips",
			rating: 5,
			title: "Slow-blooming flakes that last in curd dishes",
			comment: "Crushing a couple of these chips into warm buttermilk or travel curd rice releases a sustained roasted aroma that stays fresh all day.",
			name: "Deepa Sundar",
			city: "Chennai, TN",
			email: "deepa.s@example.com",
			created_at: Date.parse("2026-07-14"),
			status: "published"
		},
		{
			id: "rev-cake-1",
			slug: "asafoetida-gold-cake",
			rating: 5,
			title: "Authentic Pindi Hing block for Temple Kuzhambu",
			comment: "Shaving a tiny pea-sized corner of the cake block gives the authentic pungent depth needed for vathal kuzhambu and mango pickle.",
			name: "Dr. K. Raghavan",
			city: "Coimbatore, TN",
			email: "raghavan.k@example.com",
			created_at: Date.parse("2026-06-28"),
			status: "published"
		},
		{
			id: "rev-jar-1",
			slug: "bottle-jar-asafoetida",
			rating: 5,
			title: "The glass jar with rubber seal locks aroma completely",
			comment: "The hermetic jar is beautiful on the shelf and prevents the powerful aroma from leaking into adjacent spice canisters. Top quality.",
			name: "Anita Deshmukh",
			city: "Mumbai, MH",
			email: "anita.d@example.com",
			created_at: Date.parse("2026-08-05"),
			status: "published"
		},
		{
			id: "rev-raw-1",
			slug: "pure-raw-hing",
			rating: 5,
			title: "Pure mountain Ferula resin — unmatched potency",
			comment: "Uncut raw resin block. Dissolving a tiny fragment in warm water for Ayurvedic broth or festive gravies is an extraordinary culinary experience.",
			name: "Rajesh G.",
			city: "New Delhi, DL",
			email: "rajesh.g@example.com",
			created_at: Date.parse("2026-07-30"),
			status: "published"
		},
		{
			id: "rev-combo-1",
			slug: "all-product-heritage-combo",
			rating: 5,
			title: "Exquisite 4-in-1 heritage box with brass spoon",
			comment: "Ordered this as a housewarming gift. The engraved brass spoon, recipe cards, and sample jars of powder, cake, chips, and pellets delighted our hosts.",
			name: "Sridhar K.",
			city: "Hyderabad, TS",
			email: "sridhar.k@example.com",
			created_at: Date.parse("2026-08-12"),
			status: "published"
		},
		{
			id: "rev-hm-1",
			slug: "traditional-health-mix",
			rating: 5,
			title: "Nutritious morning porridge for the whole family",
			comment: "You can taste the wood-roasted millets and roasted nuts in every spoonful. My kids love it with country palm sugar and warm cow milk.",
			name: "Lakshmi Narayanan",
			city: "Tirunelveli, TN",
			email: "lakshmi.n@example.com",
			created_at: Date.parse("2026-08-15"),
			status: "published"
		},
		{
			id: "rev-sambrani-1",
			slug: "pure-benzoin-sambrani",
			rating: 5,
			title: "Pure divine temple fragrance that lingers for hours",
			comment: "No synthetic chemical perfumes or black smoke. Spreading a few crystals on coconut shell ember fills the puja room with soothing temple peace.",
			name: "Padma Seshadri",
			city: "Chennai, TN",
			email: "padma.s@example.com",
			created_at: Date.parse("2026-08-18"),
			status: "published"
		}
	];
	const insertReview = db.prepare(`
    INSERT OR REPLACE INTO reviews (
      id, slug, rating, title, comment, name, city, email, phone, contact_opt_in, created_at, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, null, 1, ?, ?)
  `);
	for (const r of initialReviews) insertReview.run(r.id, r.slug, r.rating, r.title, r.comment, r.name, r.city, r.email, r.created_at, r.status);
}
//#endregion
export { getDb as t };
