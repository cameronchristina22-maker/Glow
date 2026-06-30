export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ingredients: string;
  directions: string;
  price: number;
  subscriptionPrice: number;
  image: string;
  category: string;
  volume: string;
}

export const products: Product[] = [
  {
    id: "verdant-dew-gentle-cleanser",
    name: "Verdant Dew Gentle Cleanser",
    subtitle: "Cleanse with the freshness of a morning garden.",
    description: "A silken, gel-to-milk cleanser that breathes life into tired skin. Infused with cucumber seed oil and green tea extract, it gently lifts impurities while preserving the skin's delicate moisture barrier. Experience the feeling of morning dew on your face every single day.",
    benefits: [
      "Cucumber Seed Oil: For cooling hydration",
      "Green Tea Extract: For a powerful antioxidant boost",
      "Aloe Vera: To soothe and calm the complexion",
      "Gently lifts environmental impurities and makeup"
    ],
    ingredients: "Organic Aloe Barbadensis (Aloe Vera) Leaf Juice, Organic Glycerin, Cucumis Sativus (Cucumber) Seed Oil, Organic Camellia Sinensis (Green Tea) Leaf Extract, Coco-Glucoside (Coconut-derived), Xanthan Gum, Citric Acid, Lavandula Angustifolia (Lavender) Oil.",
    directions: "Massage 1-2 pumps onto damp face and neck in circular motions. Rinse thoroughly with lukewarm water. Use morning and night.",
    price: 28.00,
    subscriptionPrice: 23.80,
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=600&q=80",
    category: "Cleanser",
    volume: "120ml / 4.0 fl oz"
  },
  {
    id: "emerald-mist-balancing-toner",
    name: "Emerald Mist Balancing Toner",
    subtitle: "Harmony in a bottle.",
    description: "Restore balance to your complexion with this invigorating botanical mist. Formulated with witch hazel and rose geranium, it refines pores and preps the skin for deep hydration. A single spritz leaves you feeling refreshed and centered, like a walk through a lush, rain-kissed forest.",
    benefits: [
      "Witch Hazel: To gently refine and tone",
      "Rose Geranium: For balancing natural oils",
      "Sea Kelp: For mineral-rich hydration",
      "Balances skin pH and preps for deep serum absorption"
    ],
    ingredients: "100% Steam-Distilled Organic Hamamelis Virginiana (Witch Hazel) Extract, Pelargonium Graveolens (Rose Geranium) Flower Water, Organic Macrocystis Pyrifera (Sea Kelp) Extract, Sodium Hyaluronate (Hyaluronic Acid), Glycerin, Potassium Sorbate.",
    directions: "After cleansing, mist generously over entire face and neck. Can also be applied with a cotton pad. Follow immediately with Phyto-Glow Serum.",
    price: 32.00,
    subscriptionPrice: 27.20,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    category: "Toner",
    volume: "100ml / 3.4 fl oz"
  },
  {
    id: "phyto-glow-regenerative-serum",
    name: "Phyto-Glow Regenerative Serum",
    subtitle: "Science-backed radiance, plant-powered results.",
    description: "A concentrated elixir designed to unlock your skin’s natural luminosity. This potent serum harnesses the power of fermented botanicals and plant-based hyaluronic acid to plump, brighten, and smooth fine lines. Radiant skin isn't just a dream; it’s a Phyto-Glow reality.",
    benefits: [
      "Fermented Pomegranate: Natural enzymes for gentle resurfacing",
      "Plant-Based Hyaluronic Acid: For deep, multi-level hydration",
      "Vitamin C (Kakadu Plum): For unparalleled brightness",
      "Visibly boosts elasticity and reduces appearance of fine lines"
    ],
    ingredients: "Organic Rosa Canina (Rosehip) Seed Oil, Lactobacillus/Pomegranate Fruit Ferment Extract, Plant-Based Sodium Hyaluronate (Hyaluronic Acid), Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Magnesium Ascorbyl Phosphate (Vitamin C), Tocopherol (Vitamin E), Organic Citrus Aurantium (Neroli) Flower Oil.",
    directions: "Apply 3-4 drops to clean, toned skin. Gently pat into face and neck. Allow to absorb for 2 minutes before applying Luminous Leaf Moisturizer.",
    price: 48.00,
    subscriptionPrice: 40.80,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    category: "Serum",
    volume: "30ml / 1.0 fl oz"
  },
  {
    id: "luminous-leaf-whipped-moisturizer",
    name: "Luminous Leaf Whipped Moisturizer",
    subtitle: "Airy hydration, velvet finish.",
    description: "Indulge in the ultimate plant-powered hydration. This airy, whipped moisturizer melts into the skin, delivering a rich blend of shea butter and leaf-derived antioxidants. It provides a velvet finish and all-day protection against environmental stressors, leaving you with a soft, healthy glow.",
    benefits: [
      "Shea Butter: For deep, creamy nourishment",
      "Ginkgo Biloba: To protect against environmental pollution",
      "Squalane (Olive Derived): To lock in moisture without heaviness",
      "Whipped, airy texture that melts instantly into the skin"
    ],
    ingredients: "Water, Organic Butyrospermum Parkii (Shea) Butter, Olive Squalane, Ginkgo Biloba Leaf Extract, Cetearyl Olivate, Sorbitan Olivate, Organic Glycerin, Glyceryl Stearate, Sodium Phytate, Benzyl Alcohol, Salicylic Acid, Sorbic Acid, Citrus Aurantium Bergamia (Bergamot) Fruit Oil.",
    directions: "Massage a pea-sized amount onto face and neck after serum application. Perfect for use morning and night under makeup.",
    price: 38.00,
    subscriptionPrice: 32.30,
    image: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=600&q=80",
    category: "Moisturizer",
    volume: "50ml / 1.7 fl oz"
  },
  {
    id: "aura-bloom-face-oil",
    name: "Aura Bloom Face Oil",
    subtitle: "The golden hour for your skin.",
    description: "The final step in your ritual for a truly luminous, youthful complexion. This exquisite blend of cold-pressed oils—including rosehip and evening primrose—deeply nourishes and restores elasticity. Rich in Omega fatty acids and vitamins, Aura Bloom provides a radiant, 'lit-from-within' glow.",
    benefits: [
      "Rosehip Oil: High in Vitamin A for skin renewal",
      "Evening Primrose: To soothe and improve skin texture",
      "Vitamin E: For intense antioxidant protection",
      "Rich in Omega fatty acids and vitamins for a lit-from-within glow"
    ],
    ingredients: "Organic Rosa Canina (Rosehip) Seed Oil, Organic Oenothera Biennis (Evening Primrose) Oil, Organic Squalane (Olive-derived), Organic Argania Spinosa (Argan) Kernel Oil, Tocopherol (Vitamin E), Organic Boswellia Carterii (Frankincense) Oil, Organic Citrus Aurantium Dulcis (Orange) Peel Oil.",
    directions: "Warm 2-3 drops in your palms and press gently into clean face, neck, and décolleté as the final step of your evening skincare routine.",
    price: 54.00,
    subscriptionPrice: 45.90,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    category: "Face Oil",
    volume: "30ml / 1.0 fl oz"
  }
];
