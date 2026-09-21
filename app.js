const menuData = [
    // SOUPS
    { name: "Tomato Soup", price: 100, type: "Vegetarian", category: "Soups" },
    { name: "Veg. Manchow Soup", price: 110, type: "Vegetarian", category: "Soups" },
    { name: "Veg. Hot & Sour Soup", price: 110, type: "Vegetarian", category: "Soups" },
    { name: "Veg. Sweet Corn Soup", price: 120, type: "Vegetarian", category: "Soups" },
    { name: "Mashroom Soup", price: 130, type: "Vegetarian", category: "Soups" },
    { name: "Cream off Mashroom Soup", price: 140, type: "Vegetarian", category: "Soups" },
    { name: "Chicken Hot & Sour Soup", price: 140, type: "Non-Vegetarian", category: "Soups" },
    { name: "Chicken Manchow Soup", price: 140, type: "Non-Vegetarian", category: "Soups" },
    { name: "Chicken Sweet Corn Soup", price: 140, type: "Non-Vegetarian", category: "Soups" },
    { name: "Mutton Hot & Sour Soup", price: 170, type: "Non-Vegetarian", category: "Soups" },
    { name: "Mutton Manchow Soup", price: 170, type: "Non-Vegetarian", category: "Soups" },
    { name: "Mutton Sweet Corn Soup", price: 170, type: "Non-Vegetarian", category: "Soups" },
    { name: "Mandi Soup", price: 80, type: "Non-Vegetarian", category: "Soups" },

    // VEG STARTERS
    { name: "Veg. Manchuria", price: 120, type: "Vegetarian", category: "Starters" },
    { name: "Crispy Corn", price: 130, type: "Vegetarian", category: "Starters" },
    { name: "Gobi 65", price: 150, type: "Vegetarian", category: "Starters" },
    { name: "Gobi Chilly", price: 150, type: "Vegetarian", category: "Starters" },
    { name: "Gobi Manchuria", price: 150, type: "Vegetarian", category: "Starters" },
    { name: "Mashroom 65", price: 180, type: "Vegetarian", category: "Starters" },
    { name: "Mashroom Chilly", price: 180, type: "Vegetarian", category: "Starters" },
    { name: "Mashroom Manchuria", price: 180, type: "Vegetarian", category: "Starters" },
    { name: "Paneer 65", price: 180, type: "Vegetarian", category: "Starters" },
    { name: "Paneer Chilly", price: 180, type: "Vegetarian", category: "Starters" },
    { name: "Paneer Manchuria", price: 180, type: "Vegetarian", category: "Starters" },

    // SEA FOOD
    { name: "Apollo Fish", price: 250, type: "Non-Vegetarian", category: "Starters" },
    { name: "Fish Fry", price: 250, type: "Non-Vegetarian", category: "Starters" },
    { name: "Fish Tikka", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Fish Chilly", price: 250, type: "Non-Vegetarian", category: "Starters" },
    { name: "Fish Manchuria", price: 250, type: "Non-Vegetarian", category: "Starters" },
    { name: "Fish 65", price: 250, type: "Non-Vegetarian", category: "Starters" },
    { name: "Prawn's Fry", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Prawn's Chilly", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Prawn's 65", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Prawn's Manchuria", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Prawn's Pepper Fry", price: 350, type: "Non-Vegetarian", category: "Starters" },
    { name: "Loose Prawns", price: 350, type: "Non-Vegetarian", category: "Starters" },

    // EGG
    { name: "Egg Omlet", price: 40, type: "Non-Vegetarian", category: "Starters" },
    { name: "Double Egg Omlet", price: 60, type: "Non-Vegetarian", category: "Starters" },
    { name: "Egg Manchuria", price: 150, type: "Non-Vegetarian", category: "Starters" },
    { name: "Egg 65", price: 150, type: "Non-Vegetarian", category: "Starters" },
    { name: "Egg Chilly", price: 150, type: "Non-Vegetarian", category: "Starters" },
    { name: "Egg Curry", price: 140, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Egg Bhurji", price: 120, type: "Non-Vegetarian", category: "Starters" },

    // MUTTON STARTERS
    { name: "Mutton Fry", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Mutton 65", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Mutton Chilly", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Mutton Manchuria", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Mutton Roast", price: 300, type: "Non-Vegetarian", category: "Starters" },

    // CHICKEN STARTERS
    { name: "Chicken 65", price: 200, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Manchuria", price: 200, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Chilly", price: 200, type: "Non-Vegetarian", category: "Starters" },
    { name: "Ginger Chicken", price: 220, type: "Non-Vegetarian", category: "Starters" },
    { name: "Garlic Chicken", price: 220, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Lollipops (6 PCS)", price: 240, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Drumsticks (6 PCS)", price: 240, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Majestic (Boneless)", price: 260, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken 555 (Boneless)", price: 260, type: "Non-Vegetarian", category: "Starters" },
    { name: "Crispy Pepper Chicken", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Roast", price: 220, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Fry", price: 220, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Drumsticks (3 PCS)", price: 140, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Lollipops (3 PCS)", price: 140, type: "Non-Vegetarian", category: "Starters" },

    // TANDOORI
    { name: "Tandoori Chicken Full", price: 450, type: "Non-Vegetarian", category: "Starters" },
    { name: "Tandoori Chicken Half", price: 250, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Tangdi Kabab Full", price: 150, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Tangdi Kabab Single", price: 90, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Tikka", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Haryali", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Russian Tikka", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Laisani Tikka", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Chicken Malai Kabab", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Achari Tikka", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Garlic Tikka", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Pahadi Tikka", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Lemon Tikka", price: 280, type: "Non-Vegetarian", category: "Starters" },
    { name: "Reshmi Tikka", price: 300, type: "Non-Vegetarian", category: "Starters" },
    { name: "Paneer Tikka Kabab", price: 250, type: "Vegetarian", category: "Starters" },
    { name: "Special Platter", price: 700, type: "Non-Vegetarian", category: "Starters" },

    // MAIN COURSE
    { name: "Fish Curry", price: 280, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Prawn's Curry", price: 300, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Dal Fry", price: 150, type: "Vegetarian", category: "Main Course" },
    { name: "Dal Tadka", price: 150, type: "Vegetarian", category: "Main Course" },
    { name: "Kaju Curry", price: 250, type: "Vegetarian", category: "Main Course" },
    { name: "Kaju Paneer Curry", price: 280, type: "Vegetarian", category: "Main Course" },
    { name: "Malai Kofta", price: 350, type: "Vegetarian", category: "Main Course" },
    { name: "Mashroom Curry", price: 200, type: "Vegetarian", category: "Main Course" },
    { name: "Mashroom Hyderabadi", price: 220, type: "Vegetarian", category: "Main Course" },
    { name: "Mashroom Kolhapuri", price: 220, type: "Vegetarian", category: "Main Course" },
    { name: "Mashroom Masala", price: 200, type: "Vegetarian", category: "Main Course" },
    { name: "Kadai Mashroom", price: 200, type: "Vegetarian", category: "Main Course" },
    { name: "Kadai Paneer", price: 200, type: "Vegetarian", category: "Main Course" },
    { name: "Palak Paneer", price: 200, type: "Vegetarian", category: "Main Course" },
    { name: "Paneer Butter Masala", price: 220, type: "Vegetarian", category: "Main Course" },
    { name: "Paneer Chat Pata", price: 220, type: "Vegetarian", category: "Main Course" },
    { name: "Paneer Tikka Masala", price: 300, type: "Vegetarian", category: "Main Course" },
    { name: "Kadai Veg. Curry", price: 180, type: "Vegetarian", category: "Main Course" },
    { name: "Mix. Veg. Curry", price: 180, type: "Vegetarian", category: "Main Course" },
    { name: "Veg Chat Pata", price: 180, type: "Vegetarian", category: "Main Course" },
    { name: "Veg. Hyderabadi", price: 180, type: "Vegetarian", category: "Main Course" },
    { name: "Veg. Kolhapuri", price: 180, type: "Vegetarian", category: "Main Course" },
    { name: "Chicken Masala", price: 230, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Chicken Curry", price: 230, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Kadai Chicken", price: 230, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Dum ka Chicken", price: 280, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mughlai Chicken", price: 280, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Afghani Chicken", price: 280, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Butter Chicken", price: 280, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Chicken Kolhapuri", price: 240, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Chicken Achari", price: 240, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Chicken Chatpata", price: 240, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Chicken Hyderabadi", price: 240, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Methi Chicken", price: 240, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Chicken Nawabi", price: 300, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Masala", price: 320, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Curry", price: 320, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Kadai Mutton", price: 320, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Dum ka Mutton", price: 320, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Mughlai", price: 350, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Kheema Curry", price: 350, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Kheema Fry", price: 350, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Afghani", price: 350, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Kalimirchi", price: 300, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Roghan Josh", price: 350, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Methi", price: 320, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Curry Boneless", price: 450, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Nawabi", price: 400, type: "Non-Vegetarian", category: "Main Course" },
    { name: "Mutton Fry Boneless", price: 400, type: "Non-Vegetarian", category: "Main Course" },

    // MANDI
    { name: "Mutton Mandi (1 Person)", price: 350, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Mandi (2 Persons)", price: 600, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Mandi (3 Persons)", price: 850, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Mandi (4 Persons)", price: 1100, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Juicy Mandi (1 Person)", price: 400, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Juicy Mandi (2 Persons)", price: 750, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Juicy Mandi (3 Persons)", price: 1000, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Juicy Mandi (4 Persons)", price: 1300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Mandi Extra (1 Piece)", price: 220, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Juicy Mandi Extra (1 Piece)", price: 280, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton 65 Mandi", price: 350, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mutton Manchurian Mandi", price: 350, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Mandi (1 Person)", price: 260, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Mandi (2 Persons)", price: 500, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Mandi (3 Persons)", price: 700, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Mandi (4 Persons)", price: 880, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Juicy Mandi (1 Person)", price: 300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Juicy Mandi (2 Persons)", price: 550, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Juicy Mandi (3 Persons)", price: 850, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Juicy Mandi (4 Persons)", price: 1100, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Mandi Extra (1 Piece)", price: 150, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Juicy Mandi Extra (1 Piece)", price: 250, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken 65 Mandi", price: 280, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Lollipops Mandi (4 Pcs)", price: 300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Drumsticks Mandi (4 Pcs)", price: 300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Manchurian Mandi", price: 280, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Chicken Chilly Mandi", price: 280, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Half Tandoori Chicken Mandi", price: 500, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Full Tandoori Chicken Mandi", price: 900, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Fish Mandi", price: 300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Fish 65 Mandi", price: 300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Fish Manchurian Mandi", price: 300, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Prawn's 65 Mandi", price: 330, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Prawn's Manchurian Mandi", price: 330, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Fish Mandi Extra (1 Piece)", price: 200, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mix Mandi (1 Chicken 1 Mutton)", price: 600, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mix Mandi (2 Chicken 1 Mutton)", price: 750, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Mix Mandi (2 Chicken 2 Mutton)", price: 850, type: "Non-Vegetarian", category: "Mandi" },
    { name: "Unifood Special Mix Mandi", price: 1600, type: "Non-Vegetarian", category: "Mandi" },

    // BIRYANI
    { name: "Mutton Biryani Single", price: 250, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Mutton Biryani Full", price: 450, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Mutton Biryani Family Pack", price: 800, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Mutton Biryani Jumbo Pack", price: 1000, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Mutton Kheema Biryani Single", price: 300, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Mutton Kheema Biryani Full", price: 500, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken Biryani Single", price: 180, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken Biryani Full", price: 320, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken Biryani Family Pack", price: 650, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken Biryani Jumbo Pack", price: 800, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken 65 Biryani Single", price: 200, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken 65 Biryani Full", price: 350, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Chicken Lollipops Biryani (3 Pcs)", price: 300, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Egg Biryani", price: 140, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Fish Biryani Single", price: 200, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Fish Biryani Full", price: 350, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Fish Biryani Family Pack", price: 700, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Prawn's Biryani Single", price: 250, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Prawn's Biryani Full", price: 400, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Prawn's Biryani Family Pack", price: 850, type: "Non-Vegetarian", category: "Biryani" },
    { name: "Veg. Biryani Single", price: 150, type: "Vegetarian", category: "Biryani" },
    { name: "Veg. Biryani Full", price: 250, type: "Vegetarian", category: "Biryani" },
    { name: "Veg. Biryani Family Pack", price: 500, type: "Vegetarian", category: "Biryani" },
    { name: "Paneer Biryani Single", price: 200, type: "Vegetarian", category: "Biryani" },
    { name: "Paneer Biryani Full", price: 350, type: "Vegetarian", category: "Biryani" },
    { name: "Paneer Biryani Family Pack", price: 650, type: "Vegetarian", category: "Biryani" },
    { name: "Mashroom Biryani Single", price: 200, type: "Vegetarian", category: "Biryani" },
    { name: "Mashroom Biryani Full", price: 350, type: "Vegetarian", category: "Biryani" },
    { name: "Kaju Biryani Single", price: 220, type: "Vegetarian", category: "Biryani" },
    { name: "Kaju Paneer Biryani Single", price: 250, type: "Vegetarian", category: "Biryani" },
    { name: "Kaju Mashroom Biryani Single", price: 250, type: "Vegetarian", category: "Biryani" },

    // RICE & NOODLES
    { name: "Veg Fried Rice", price: 100, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Egg Fried Rice", price: 120, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Paneer Fried Rice", price: 150, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Chicken Fried Rice", price: 150, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Mutton Fried Rice", price: 200, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Fish Fried Rice", price: 180, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Prawn's Fried Rice", price: 180, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Chicken Triple Rice", price: 250, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Chicken Shezwan Fried Rice", price: 160, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Veg. Manchurian Fried Rice", price: 200, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Chicken Manchurian Fried Rice", price: 250, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Mutton Manchurian Fried Rice", price: 300, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Zeera Rice", price: 150, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Curd Rice", price: 150, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Tomato Rice", price: 150, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Lemon Rice", price: 150, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Ghee Rice", price: 180, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Kaju Fried Rice", price: 180, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Mashroom Fried Rice", price: 180, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Veg. Shezwan Rice", price: 140, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Veg Noodles", price: 100, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Egg Noodles", price: 120, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Paneer Noodles", price: 150, type: "Vegetarian", category: "Rice & Noodles" },
    { name: "Chicken Noodles", price: 150, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Mutton Noodles", price: 200, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Fish Noodles", price: 180, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Prawn's Noodles", price: 180, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Chicken Hakka Noodles", price: 180, type: "Non-Vegetarian", category: "Rice & Noodles" },
    { name: "Veg Manchurian Noodles", price: 200, type: "Vegetarian", category: "Rice & Noodles" },

    // BREADS
    { name: "Rumali Roti", price: 20, type: "Vegetarian", category: "Breads" },
    { name: "Tandoori Roti", price: 20, type: "Vegetarian", category: "Breads" },
    { name: "Plain Naan", price: 30, type: "Vegetarian", category: "Breads" },
    { name: "Butter Naan", price: 40, type: "Vegetarian", category: "Breads" },
    { name: "Cheese Naan", price: 50, type: "Vegetarian", category: "Breads" },
    { name: "Garlic Naan", price: 50, type: "Vegetarian", category: "Breads" },
    { name: "Kulcha Naan", price: 50, type: "Vegetarian", category: "Breads" },
    { name: "Butter Roti", price: 25, type: "Vegetarian", category: "Breads" },

    // DESSERTS
    { name: "Qurbani Ka Meetha", price: 70, type: "Vegetarian", category: "Desserts" },
    { name: "Kaddu Ki Kheer", price: 80, type: "Vegetarian", category: "Desserts" },
    { name: "Double ka Meetha", price: 70, type: "Vegetarian", category: "Desserts" },
    { name: "Rabdi", price: 80, type: "Vegetarian", category: "Desserts" },

    // EXTRAS
    { name: "Mayonnaise", price: 40, type: "Vegetarian", category: "Extras" },
    { name: "Extra Mandi Rice", price: 140, type: "Vegetarian", category: "Extras" },
    { name: "Extra Biryani Rice", price: 120, type: "Vegetarian", category: "Extras" },
    { name: "Extra Boiled Egg", price: 15, type: "Non-Vegetarian", category: "Extras" },
    { name: "Extra Curd", price: 40, type: "Vegetarian", category: "Extras" },
    { name: "Pudina Chutney", price: 30, type: "Vegetarian", category: "Extras" }
];

let cart = [];

function getToggleState() {
    const vegD = document.getElementById("veg-toggle");
    const vegM = document.getElementById("veg-toggle-mobile");
    const nonD = document.getElementById("nonveg-toggle");
    const nonM = document.getElementById("nonveg-toggle-mobile");
    return {
        veg: vegD?.checked ?? vegM?.checked ?? true,
        nonVeg: nonD?.checked ?? nonM?.checked ?? true
    };
}

function buildMenuUI() {
    const wrapper = document.getElementById("category-sections-wrapper");
    if (!wrapper) return;
    wrapper.innerHTML = "";

    const searchStr = document.getElementById("menu-search")?.value.toLowerCase() || "";
    const { veg: vegChecked, nonVeg: nonVegChecked } = getToggleState();
    const activeBtn = document.querySelector(".category-strip-btn.active");
    const activeCategory = activeBtn?.dataset.cat || "all";

    const categories = ["Soups", "Starters", "Main Course", "Mandi", "Biryani", "Rice & Noodles", "Breads", "Desserts", "Extras"];

    categories.forEach(category => {
        if (activeCategory !== "all" && activeCategory !== category) return;

        const sectionItems = menuData.filter(item => {
            if (item.category !== category) return false;
            if (searchStr && !item.name.toLowerCase().includes(searchStr)) return false;
            if (item.type === "Vegetarian" && !vegChecked) return false;
            if (item.type === "Non-Vegetarian" && !nonVegChecked) return false;
            return true;
        });

        if (sectionItems.length === 0) return;

        const sectionBlock = document.createElement("div");
        sectionBlock.className = "space-y-4";

        const headerTitle = category === "Biryani" ? "Rice & Biryani"
                          : category === "Mandi" ? "Mandi Spreads"
                          : category;

        sectionBlock.innerHTML = `
            <h2 class="text-xl sm:text-2xl font-bold text-[#2C3A2B] border-b-2 border-[#3A4D39]/15 pb-2">${headerTitle}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"></div>
        `;

        const cardGrid = sectionBlock.querySelector(".grid");

        sectionItems.forEach(item => {
            const isVeg = item.type === "Vegetarian";
            const rowCard = document.createElement("div");
            rowCard.className = "bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-[#3A4D39] transition-all duration-200 group";
            rowCard.innerHTML = `
                <div class="flex items-center gap-3 pr-2 min-w-0">
                    <span class="${isVeg ? 'text-green-600' : 'text-red-600'} text-lg shrink-0 flex items-center">
                        <i class="fa-solid fa-square-caret-up ${isVeg ? '' : 'rotate-180'}"></i>
                    </span>
                    <div class="min-w-0">
                        <h4 class="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#3A4D39] transition-colors">${item.name}</h4>
                        <p class="text-xs font-semibold text-[#C75B39] mt-0.5">₹${item.price}.00</p>
                    </div>
                </div>
                <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}')"
                        class="bg-[#E8F0EA] hover:bg-[#3A4D39] text-[#3A4D39] hover:text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all tracking-wider shrink-0 shadow-sm active:scale-95 min-h-[44px] min-w-[60px]">
                    Add
                </button>
            `;
            cardGrid.appendChild(rowCard);
        });

        wrapper.appendChild(sectionBlock);
    });
}

function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    if (!sidebar) return;
    sidebar.classList.toggle("hidden");
    setTimeout(() => sidebar.classList.toggle("translate-x-full"), 10);
}

function addToCart(itemName) {
    const targetItem = menuData.find(item => item.name === itemName);
    if (!targetItem) return;
    const cartIdx = cart.findIndex(item => item.name === itemName);
    if (cartIdx > -1) cart[cartIdx].quantity += 1;
    else cart.push({ ...targetItem, quantity: 1 });
    updateCartUI();

    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar && (sidebar.classList.contains("translate-x-full") || sidebar.classList.contains("hidden"))) {
        toggleCart();
    }
}

function alterQty(itemName, change) {
    const idx = cart.findIndex(item => item.name === itemName);
    if (idx > -1) {
        cart[idx].quantity += change;
        if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    const box = document.getElementById("cart-items-container");
    const countBadge = document.getElementById("cart-count");
    const costLabel = document.getElementById("cart-total");
    if (!box) return;

    if (cart.length === 0) {
        box.innerHTML = `<p class="text-sm text-gray-400 text-center py-12">Your basket is currently empty.</p>`;
        if (countBadge) countBadge.textContent = "0";
        if (costLabel) costLabel.textContent = "₹0.00";
        return;
    }

    box.innerHTML = "";
    let cost = 0, units = 0;

    cart.forEach(item => {
        cost += item.price * item.quantity;
        units += item.quantity;
        const row = document.createElement("div");
        row.className = "flex items-center justify-between border-b border-gray-100 pb-3 gap-3";
        row.innerHTML = `
            <div class="min-w-0 flex-1">
                <h5 class="text-xs font-bold text-gray-800 leading-tight">${item.name}</h5>
                <p class="text-xs text-[#C75B39] font-medium mt-0.5">₹${item.price}.00</p>
            </div>
            <div class="flex items-center gap-3 bg-[#F5F2EA] px-2.5 py-1.5 rounded-xl shrink-0">
                <button onclick="alterQty('${item.name.replace(/'/g, "\\'")}', -1)" class="text-sm font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center">−</button>
                <span class="text-xs font-bold text-gray-800 min-w-[20px] text-center">${item.quantity}</span>
                <button onclick="alterQty('${item.name.replace(/'/g, "\\'")}', 1)" class="text-sm font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center">+</button>
            </div>
        `;
        box.appendChild(row);
    });

    if (countBadge) countBadge.textContent = units;
    if (costLabel) costLabel.textContent = `₹${cost}.00`;
}

function sendOrderToWhatsApp() {
    const nameEl = document.getElementById("cust-name");
    const addressEl = document.getElementById("cust-address");
    const name = nameEl ? nameEl.value.trim() : "";
    const address = addressEl ? addressEl.value.trim() : "";

    if (cart.length === 0) { alert("Your basket is empty!"); return; }
    if (!name || !address) { alert("Please complete delivery info before ordering!"); return; }

    let msg = `*New Order - Unifood Multi Cuisine*\n--------------------------------------\n`;
    msg += `*Name:* ${name}\n*Address/Table:* ${address}\n--------------------------------------\n\n`;

    let total = 0;
    cart.forEach(item => {
        msg += `▪️ ${item.quantity}x ${item.name} (₹${item.price * item.quantity})\n`;
        total += item.price * item.quantity;
    });

    msg += `\n--------------------------------------\n*Grand Total:* ₹${total}.00\n--------------------------------------\n`;

    window.location.href = `https://api.whatsapp.com/send?phone=919885397871&text=${encodeURIComponent(msg)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById("category-sections-wrapper")) return;
    buildMenuUI();

    ["menu-search", "veg-toggle", "veg-toggle-mobile", "nonveg-toggle", "nonveg-toggle-mobile"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(el.type === "checkbox" ? "change" : "input", buildMenuUI);
    });

    document.querySelectorAll(".category-strip-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".category-strip-btn").forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            buildMenuUI();
        });
    });
});
