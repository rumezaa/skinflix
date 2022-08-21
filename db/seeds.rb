# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Product.create!([
    {
      name: 'Block Star Mineral SPF',
      description:
      %{
        This clean 100% mineral daily sunscreen features a vanishing tint that blends 
        into skin for supreme sun protection and a smooth, never-greasy finish.
      }.squish,
      price: 19.79,
      product_type: 'spf',
      url: "https://www.amazon.com/Bliss-Sunscreen-Mineral-Non-Greasy-Non-Irritating/dp/B092LFGWW6/ref=sr_1_2?crid=3045RIBSKJ0B5&keywords=bliss+sunscreen+spf+30&qid=1657933360&sprefix=bliss+sunscreen%2Caps%2C260&sr=8-2",
      availability: 100,
      brand: "Bliss",
      image_file_name: "BlissSPF.jpg"
    },
    {
        name: 'Bright Idea Vitamen C Serum',
        description:
        %{
            This brightening serum features our highest concentration of clinical-grade vitamin 
            C plus tri-peptide to help diminish the look of dark spots and boost elasticity.
        }.squish,
        price: 22.43,
        product_type: 'serum',
        url: "https://www.amazon.com/Bliss-Tri-Peptide-Collagen-Brightens-Cruelty-Free/dp/B082YJF4ZY/ref=sr_1_3?crid=1R88ARSZ86Q04&keywords=bright+idea+vitamin+c&qid=1657933274&sprefix=Bright+IDea+Vit%2Caps%2C264&sr=8-3",
        availability: 10,
        brand: "Bliss",
        image_file_name: "BlissVC.jpg"
      },
      {
        name: 'CeraVe Foaming Facial Cleanser',
        description:
        %{
            CeraVe Foaming Facial Cleanser features ceramides, hyaluronic acid, and niacinamide, and is formulated to help to 
            maintain your skin’s protective barrier, lock in moisture, and calm your skin.
        }.squish,
        price: 15.90,
        product_type: 'cleanser',
        url: "https://www.amazon.com/CeraVe-Foaming-Facial-Cleanser-Washing/dp/B01N1LL62W/ref=sr_1_1?crid=3A6VOYVXIBQ38&keywords=cerave+foaming+facial+cleanser&qid=1657933247&sprefix=cerave+foa%2Caps%2C273&sr=8-1",
        availability: 200,
        brand: "CeraVe",
        image_file_name: "CeraVeFFC.jpg"
      },
      {
        name: 'CeraVe Moisturizing Cream',
        description:
        %{
            CeraVe Moisturizing Cream includes 3 essential ceramides that work together to lock in skin's moisture and help restore your skin’s protective barrier.
        }.squish,
        price: 17.78,
        product_type: 'moisturizer',
        url: "https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC/ref=sr_1_2?crid=3U42QUNOZ4HF0&keywords=cerave+moisturizing+cream&qid=1657933198&sprefix=cerave+mois%2Caps%2C270&sr=8-2",
        availability: 10_000,
        brand: "CeraVe",
        image_file_name: "CeraVeMoisturizer.jpg"
      },
      {
        name: 'CeraVe SA Cleanser',
        description:
        %{
            CeraVe Renewing SA Cleanser provides gentle, non-irritating exfoliation without harsh microbeads that can scratch your skin.
        }.squish,
        price: 9.38,
        product_type: 'cleanser',
        url: "https://www.amazon.com/CeraVe-Salicylic-Cleanser-Exfoliating-Fragrance/dp/B00U1YCRD8/ref=sr_1_1?crid=3BLVV2HNCBEWR&keywords=cerave+sa+cleanser&qid=1657933160&sprefix=CeraVe+SA%2Caps%2C272&sr=8-1",
        availability: 7,
        brand: "CeraVe",
        image_file_name: "CeraVeSA.jpg"
      },
      {
        name: 'CeraVe AM Moisturizing SPF-30',
        description:
        %{
            CeraVe AM Facial Moisturizer is a morning skincare multitasker, featuring 3 essential ceramides that work together to lock in skins moisture and help restore your skin’s protective barrier, hydrating hyaluronic acid and soothing niacinamide, plus our patented MVE technology that encapsulates ceramides to ensure efficient delivery within the skin’s barrier and slow release over time.
        }.squish,
        price: 12.49,
        product_type: 'sunscreen',
        url: "https://www.amazon.com/CeraVe-Facial-Moisturizing-Lotion-AM/dp/B00F97FHAW/ref=sr_1_1?crid=3F9BF5K3V2UFR&keywords=cerave+spf+30&qid=1657933110&sprefix=cerave+tinted+sunscreen+with+spf+30%2Caps%2C504&sr=8-1",
        availability: 1,
        brand: "CeraVe",
        image_file_name: "CeraVeSPF.jpg"
      },
      {
        name: 'CeraVe Mineral Tinted Sunscreen SPF-30',
        description:
        %{
            CeraVe Hydrating Mineral Sunscreen Broad Spectrum SPF 30 Face Sheer Tint provides UVA/UVB protection with 100%-mineral titanium dioxide and zinc oxide, forming a barrier on the surface of your skin to reflect the sun’s rays.
        }.squish,
        price: 13.97,
        product_type: 'sunscreen',
        url: "https://www.amazon.com/CeraVe-Sunscreen-Hydrating-Mineral-Titanium/dp/B07YLKXV11/ref=sr_1_2?crid=1KHN38619L522&keywords=cerave+tinted+sunscreen+with+spf+30&qid=1657932979&sprefix=CeraVe+tinted%2Caps%2C293&sr=8-2",
        availability: 4000,
        brand: "CeraVe",
        image_file_name: "CeraVeTintedSPF.jpg"
      },
      {
        name: 'Cetaphil Gentle Cleanser',
        description:
        %{
          Specially formulated gentle gel to foam formula deep cleans and minimizes the appearance of pores without stripping skin of natural moisture.
        }.squish,
        price: 15.20,
        product_type: 'cleanser',
        url: "https://www.amazon.com/Hydrating-Non-irritating-Fragrance-free-Dermatologist-Recommended/dp/B07GC74LL5/ref=sr_1_4_sspa?crid=36QS7PJ64XBPX&keywords=cetaphil&qid=1657932947&sprefix=ceta%2Caps%2C266&sr=8-4-spons&psc=1&smid=A1QPJG21HT7L4H&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUExVVEtKV1ExTzVSJmVuY3J5cHRlZElkPUEwMTQyMDkzMzZUNEpTWDlJRDkzJmVuY3J5cHRlZEFkSWQ9QTAyNzQzNDYzQldGNUk0UjBPWUFWJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
        availability: 4000,
        brand: "Cetaphil",
        image_file_name: "CetaphilCleanser.jpg"
      },
      {
        name: 'La Roche-Posay Sunscreen SPF 50',
        description:
        %{
          This lightweight 100% mineral tinted face sunscreen with titanium dioxide was developed for sensitive skin.
        }.squish,
        price: 34.99,
        product_type: 'sunscreen',
        url: "https://www.amazon.com/Roche-Posay-Anthelios-Sunscreen-Ultra-Light-Titanium/dp/B004W55086/ref=sr_1_14?keywords=la+roche+posay&qid=1657932911&sr=8-14",
        availability: 2,
        brand: "La Roche-Posay",
        image_file_name: "LRP-SPF.jpg"
      },
    {
      name: 'Neutrogena Hydro-Boost Moisturizer',
      description:
      %{
        Instantly quench dry skin for a healthy-looking glow day after day. This award-winning formula with Hyaluronic Acid absorbs quickly like a gel but has the lasting, intense moisturizing power of a cream.
      }.squish,
      price: 19.00,
      product_type: 'moisturizer',
      url: "https://www.amazon.com/Neutrogena-Hyaluronic-Hydrating-Moisturizer-Gel-Cream/dp/B00NR1YQK4/ref=sr_1_3?crid=DE4B8EFJ1XTM&keywords=neutrogena+hydro+boost&qid=1657932816&sprefix=Neutr%2Caps%2C307&sr=8-3",
      availability: 3000,
      brand: "Neutrogena",
      image_file_name: "NeutrogenaHydro.jpg"
    },
    {
      name: "Ordinary AHA BHA Peeling Solution",
      description:
      %{
        Alpha hydroxy acids (AHA) exfoliate the skin's topmost surface for a brighter and more even appearance.
      }.squish,
      price: 14.90,
      product_type: 'serum',
      url: "https://www.amazon.com/Ordinary-Control-Face-Serum-30ml/dp/B09TSP9L59/ref=sr_1_4?crid=2F4ALWLOU3LHO&keywords=ordinary+aha+bha&qid=1657932219&sprefix=ordinary+aha+bha%2Caps%2C260&sr=8-4",
      availability: 200,
      brand: "The Ordinary",
      image_file_name: "OrdinaryAHA.jpeg"
    },

    
  ])
  