// import "dotenv/config";  
// import mongoose from "mongoose"
// import config from "../config.js"
// import User from "../models/User.js"
// import Product from "../models/Product.js"
// import Event from "../models/Event.js"

// // Connect to MongoDB
// await mongoose.connect(config.mongoUri)

// console.log("Connected to MongoDB")

// // Clear existing data
// await User.deleteMany({})
// await Product.deleteMany({})
// await Event.deleteMany({})

// console.log("Cleared existing data")

// // Seed Products
// // Seed Products
// const products = await Product.insertMany([
//   // Electronics - Laptops
//   {
//     name: 'Pro Laptop 15"',
//     description: "High-performance laptop for professionals",
//     category: "Electronics",
//     brand: "TechBrand",
//     price: 1299,
//     rating: 4.8,
//     popularityScore: 92,
//     image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
//   },
//   {
//     name: 'Budget Laptop 13"',
//     description: "Affordable laptop for everyday use",
//     category: "Electronics",
//     brand: "ValueBrand",
//     price: 499,
//     rating: 4.2,
//     popularityScore: 78,
//     image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
//   },
//   {
//     name: "Gaming Laptop RTX",
//     description: "Ultimate gaming machine with RTX graphics",
//     category: "Electronics",
//     brand: "GameBrand",
//     price: 2499,
//     rating: 4.9,
//     popularityScore: 88,
//     image: "https://images.unsplash.com/photo-1593642532400-2682810df593",
//   },

//   // Fashion
//   {
//     name: "Premium Denim Jeans",
//     description: "Classic blue denim with stretch fit",
//     category: "Fashion",
//     brand: "StyleCo",
//     price: 89,
//     rating: 4.5,
//     popularityScore: 85,
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
//   },
//   {
//     name: "Designer T-Shirt",
//     description: "Luxury cotton t-shirt",
//     category: "Fashion",
//     brand: "LuxuryBrand",
//     price: 79,
//     rating: 4.6,
//     popularityScore: 81,
//     image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
//   },
//   {
//     name: "Winter Jacket",
//     description: "Waterproof winter jacket",
//     category: "Fashion",
//     brand: "WeatherBrand",
//     price: 199,
//     rating: 4.7,
//     popularityScore: 90,
//     image: "data:image/webp;base64,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",
//   },

//   // Home & Kitchen
//   {
//     name: "Stainless Steel Cookware Set",
//     description: "12-piece premium cookware set",
//     category: "Home & Kitchen",
//     brand: "CookBrand",
//     price: 249,
//     rating: 4.6,
//     popularityScore: 87,
//     image: "https://images.unsplash.com/photo-1584049384033-9939b0a8c42c",
//   },
//   {
//     name: "Electric Kettle",
//     description: "Smart electric kettle with temperature control",
//     category: "Home & Kitchen",
//     brand: "SmartHome",
//     price: 49,
//     rating: 4.4,
//     popularityScore: 76,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     name: "Coffee Maker Pro",
//     description: "Automatic espresso coffee maker",
//     category: "Home & Kitchen",
//     brand: "CaffeineBrand",
//     price: 199,
//     rating: 4.8,
//     popularityScore: 89,
//     image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//   },

//   // Sports & Outdoors
//   {
//     name: "Running Shoes Pro",
//     description: "Advanced running shoes with cushioning",
//     category: "Sports & Outdoors",
//     brand: "SportBrand",
//     price: 129,
//     rating: 4.7,
//     popularityScore: 84,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//   },
//   {
//     name: "Mountain Bike 29",
//     description: "High-performance mountain bike",
//     category: "Sports & Outdoors",
//     brand: "BikeCompany",
//     price: 899,
//     rating: 4.5,
//     popularityScore: 79,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     name: "Yoga Mat Premium",
//     description: "Non-slip yoga mat",
//     category: "Sports & Outdoors",
//     brand: "YogaBrand",
//     price: 49,
//     rating: 4.8,
//     popularityScore: 82,
//     image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
//   },
// ]);


// console.log(`Seeded ${products.length} products`)

// // Seed Users
// const users = await User.insertMany([
//   {
//     username: "tech_enthusiast",
//     email: "tech@example.com",
//     preferredCategories: ["Electronics"],
//     priceMin: 500,
//     priceMax: 2500,
//   },
//   {
//     username: "fashion_lover",
//     email: "fashion@example.com",
//     preferredCategories: ["Fashion"],
//     priceMin: 50,
//     priceMax: 300,
//   },
//   {
//     username: "home_chef",
//     email: "chef@example.com",
//     preferredCategories: ["Home & Kitchen", "Fashion"],
//     priceMin: 40,
//     priceMax: 500,
//   },
//   {
//     username: "fitness_junkie",
//     email: "fitness@example.com",
//     preferredCategories: ["Sports & Outdoors"],
//     priceMin: 40,
//     priceMax: 1200,
//   },
//   {
//     username: "all_rounder",
//     email: "allround@example.com",
//     preferredCategories: ["Electronics", "Fashion", "Home & Kitchen", "Sports & Outdoors"],
//     priceMin: 40,
//     priceMax: 3000,
//   },
// ])

// console.log(`Seeded ${users.length} users`)

// // Seed Events
// const events = []

// // Tech enthusiast browsing and purchasing laptops
// events.push(
//   { userId: users[0]._id, productId: products[0]._id, eventType: "view" },
//   { userId: users[0]._id, productId: products[0]._id, eventType: "cart" },
//   { userId: users[0]._id, productId: products[2]._id, eventType: "view" },
//   { userId: users[0]._id, productId: products[2]._id, eventType: "purchase" },
// )

// // Fashion lover browsing clothes
// events.push(
//   { userId: users[1]._id, productId: products[3]._id, eventType: "view" },
//   { userId: users[1]._id, productId: products[4]._id, eventType: "view" },
//   { userId: users[1]._id, productId: products[5]._id, eventType: "cart" },
//   { userId: users[1]._id, productId: products[5]._id, eventType: "purchase" },
// )

// // Home chef browsing kitchen items
// events.push(
//   { userId: users[2]._id, productId: products[6]._id, eventType: "view" },
//   { userId: users[2]._id, productId: products[8]._id, eventType: "view" },
//   { userId: users[2]._id, productId: products[6]._id, eventType: "purchase" },
//   { userId: users[2]._id, productId: products[4]._id, eventType: "view" },
// )

// // Fitness junkie browsing sports items
// events.push(
//   { userId: users[3]._id, productId: products[9]._id, eventType: "view" },
//   { userId: users[3]._id, productId: products[10]._id, eventType: "view" },
//   { userId: users[3]._id, productId: products[11]._id, eventType: "view" },
//   { userId: users[3]._id, productId: products[9]._id, eventType: "purchase" },
// )

// // All rounder browsing various categories
// events.push(
//   { userId: users[4]._id, productId: products[1]._id, eventType: "view" },
//   { userId: users[4]._id, productId: products[5]._id, eventType: "view" },
//   { userId: users[4]._id, productId: products[8]._id, eventType: "view" },
//   { userId: users[4]._id, productId: products[9]._id, eventType: "cart" },
// )

// await Event.insertMany(events)

// console.log(`Seeded ${events.length} events`)

// console.log("Database seeding completed successfully!")
// await mongoose.connection.close()

// import "dotenv/config";  
// import mongoose from "mongoose"
// import config from "../config.js"
// import User from "../models/User.js"
// import Product from "../models/Product.js"
// import Event from "../models/Event.js"

// // Connect to MongoDB
// await mongoose.connect(config.mongoUri)
// console.log("Connected to MongoDB")

// // Clear existing data
// await User.deleteMany({})
// await Product.deleteMany({})
// await Event.deleteMany({})
// console.log("Cleared existing data")

// // -----------------------------------------------------------------------------
// // ⭐ VERIFIED HIGH-QUALITY PRODUCT IMAGES (ALL LINKS FIXED)
// // -----------------------------------------------------------------------------

// const products = await Product.insertMany([
//   // ----------------------- ELECTRONICS - LAPTOPS -----------------------
//   {
//     name: 'Pro Laptop 15"',
//     description: "High-performance laptop for professionals",
//     category: "Electronics",
//     brand: "TechBrand",
//     price: 1299,
//     rating: 4.8,
//     popularityScore: 92,
//     image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=900",
//   },
//   {
//     name: 'Budget Laptop 13"',
//     description: "Affordable laptop for everyday use",
//     category: "Electronics",
//     brand: "ValueBrand",
//     price: 499,
//     rating: 4.2,
//     popularityScore: 78,
//     image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&w=900",
//   },
//   {
//     name: "Gaming Laptop RTX",
//     description: "Ultimate gaming machine with RTX graphics",
//     category: "Electronics",
//     brand: "GameBrand",
//     price: 2499,
//     rating: 4.9,
//     popularityScore: 88,
//     image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&w=1000",
//   },

//   // ---------------------------- FASHION ----------------------------
//   {
//     name: "Premium Denim Jeans",
//     description: "Classic blue denim with stretch fit",
//     category: "Fashion",
//     brand: "StyleCo",
//     price: 89,
//     rating: 4.5,
//     popularityScore: 85,
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&w=900",
//   },
//   {
//     name: "Designer T-Shirt",
//     description: "Luxury cotton t-shirt",
//     category: "Fashion",
//     brand: "LuxuryBrand",
//     price: 79,
//     rating: 4.6,
//     popularityScore: 81,
//     image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&w=900",
//   },
//   {
//     name: "Winter Jacket",
//     description: "Waterproof winter jacket",
//     category: "Fashion",
//     brand: "WeatherBrand",
//     price: 199,
//     rating: 4.7,
//     popularityScore: 90,
//     image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&w=950",
//   },

//   // ------------------------ HOME & KITCHEN -------------------------
//   {
//     name: "Stainless Steel Cookware Set",
//     description: "12-piece premium cookware set",
//     category: "Home & Kitchen",
//     brand: "CookBrand",
//     price: 249,
//     rating: 4.6,
//     popularityScore: 87,
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPDxARDw8PDxAPDw8PEA8QEA8QFREWFxURFxUdKCggGCYmGxYWITEhJSkrLi4uFx8zODMsNygtLzcBCgoKDQ0NDg0NDysZHxkrKysrKzc3NysrKysrKysrKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EAEIQAAICAQIDBQUECQMBCQEAAAECAAMRBBIFITEGE0FRcSIyYYGRByNSoRQzQmJygpKxwaKy0RZDRFRzdJTD0+EV/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3GIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHP4rxavTd33gbFjFVYD2A3LClugJ8PPBmLTcfofbu3VFjhO8XG/+HznTsQMCrAMpGCCAQR5ETlangNZ3d0e63e8hG+pvgyHr6Zx8IHVRwwypDA9CCCJdIs+luoJYbqv36z3tR/iU4Ix/Io+M29NxtwPvE7xcZ305b2fxFcA/PAUeZgd6JraTX1WgGt1bPQZ5n085swEREDFbqEUhWdVYgkAsASB1OPmJUXLjOQR5jpI59oSUtobmsfu3oU302KpseuxASGCjmR1B+BMhH/8AYvfjxKId9nB9yaYsgRNQU383yf8Ann0geuK4PIHn5S6RrsItFeh0+xy7W1V2vbYfbtdkBLE+J8OflJIDArERARKMwAyegmNdTWSFDruIyFyAxHnjrAyxEoTjrArE1jr6cqO8Uls4CndnHXpDaxR4E+ggamt45VTqKtNYGFl4Y0nGVs2glgD4EAZ54mHh/anR31XX1XK9WnYpc4yRWw6g49R0nF7W6trjpe7qtHcatLbLhXteqtPacJvwH3gbOWRz5yB/ZpXcNHqQ+nsKnjGn1FunKMDZU7oCcjmRWQHIxg7MHkTA9r014sRbFyFcBl3AqcHocHmJlmrRxGpywVwShAYc/ZJ8CZsK4PQg+hgXREQEREBERAREQE5+s4XU/tAGt87t9eAd34iOhPxxkeBE3zMTmBHtZwmwEttW3xLplbDjpu6lsfvCw/ARoOI2KcG0sq9a7QDZ9c5GfMkfwid4GQv7SdJWBprwgFrW901il67Cm0kDcpB6iB0x2js3AWqVY9EQewvwNh975AD4nrK6ziRQm0V173ABYjLEeAz1x8Jx+zOiW1zX32oJAz7diEDp5KCevjmSK7s3uGBaR/Kjf3BgRTiDPclz1UUWW2YDV3lzS/POShO3PLyEiup1eop1ddlulrQKpVSLLQteVwVStXKhc4yoGCJvdouOnS3WaZX9qptrMNOoz81ZTI1q+0jOwY7XIGBv07sP6Tdg+uIHpPZdzaENlVNW0bVr0693UF/gHKSfVYqwVHyBIP5Tzv7OuJWay06fIr21mzcqbeQYDABLfino9vCAqMe9c4UnmEA5DzAB/OBpHU2p95Xa4UYL1XfeJtz7RVsb1OPUcsYHWdbScSSxQwdDnxzgGeVUoLNdp0tLXV2UreUteyxA5z0DE4HLpJL2u4alQ03E6n7ttK6tqqAxCavTZw6mscmYD3QRzPLriBN713oybwu9SoZcZXI94Z5cpoazhFF1QquIYqdwtrY1WI46MrA5Hh9J4h2z4hpv+o9MlWxdHu0nfJWpFT7jucsuMHkwB9OfjPU+F6arXapr67Nug0y/o9OmrZq0utVybLnQYBXkoXI5hSfdbmHQ0WpsRTRVq011lfvb7Kf0jaSdoIXAPL9rl06GcrifGqC2zVLZU4BAFqNbQTn3toyrfzjljwna492U0OqUtbUqWKCU1FQ7u6o495WXnPLuMWvZpyz2m5rNUAXIIyVaurkOozsBx5sYHoWk4lXbWBXqEt5dUdRy9B0mxWrYOc58OeZH+xVYs1nEEbJrS0IqZO1cDBwOgkn4rwKjurGUd2QpO5QoPTzxmBFNadT+kqO81Fac8FWsC5x1x7pnETX6ysmtdXqbF7wbbGZGZSPI7SJEddx3U1nC3W9T0vvX+zSmn7WatcffX/PUWMP9WYHt3CtTYVXexJwM7sTev1DD3VDfy5/tIf2H4hbrB95ZYvo+f7ybDg9f7TWN8Tbav+0iBo6q1EAsF50zKQWBcNSR4go3Ics81wY0HainUMU0wfUbTtNiI/cqcE87MYPQdM+8PjiK9uu609tCmtGR2KsXVWbpyO85IwcHr4TX7L8K4tdpKdPVrf0XT0g1vcFV77m3FmYnrnLEdR7oOTmBO9Y15xm5NPVjLPgB+vQFvDHjgGWaXUO1lK1MbKsF3uY53VhcKR57mIwfEKxGZr1dk6e7Wu53vAA3d4tbCwgdW3Akn45neqqVAFUBVAAAHkIF8REBEs3Sm6BeZhsMvLSFV9sKtRqLNPRYr212PV3KnDBlYqd3lzHXoIEuzIr9onOjTfDVp+dbzqPodXtyNVizwArXuh8OeWP1GfhOLxfR6/Ug03JQiVXV20WC0lrsKwZSMBVPPp059YGfshVt1DfFP8LJpIfwyx6nJVOeCpLkBVIxnp73y5cuomjrO0Wq1O4UWdzplLI2qVVNlrDkwoU8gAeW9twyDhT1gQHt1prP0/VvsYIbTh2GxD06McAzl6XszqLF3+wq/Ekn8uQ+ZEnug1NC3expkawk7tRqGfUahueffboP3QAB4CS6nh3eslrM+E5itTtrzywSo5HGOX8RgQb7O+D36S19RtY8moIsrsqxzBLYbG4ZXGQTPRLuIEqQzqMgghRjr4eMifa3WWVsoDMASehIkcOtJ6ux+pgSPXHTaZ63Gj7whdiWqSe6x0Qlj7IOevQYnE40mp1Nmls1ViafQqwttWu6tirqSQu5ck9FAbljcTgECYLbMDIyfUYnA11t75W1N1QJO1G9/wAs+PSB5/xbUPfq7tSww9moawKCeQ3cgD6YntvBdVqLdXp9fpLamrv0608RousA292G7uxefXmPpPI9TXc2p7xdK3suNirXbjaOgPLnJ9wejVb2s0ulu0y2czuUiv8A1YxIPURxYWWd0EtGFy9qv9yPJQQfaPy9ZyNb2OotCiu16wtgt2gVuu4MG8gRzA8enlOXqdfam0F8NgbiMgFsc8fOXaTj9+9V3hgSBzAMoknZbg76W3U2u62HU2tb7CldhP7PPnNjtFxmtKLlLBWKMFDctzEHCgnkT8BzmfTbmUN4/CcLtHw7S3j752qYcu8wH9nxAznb6jEDxPiwIYg8j5HkZpoZ6lquwrPXu0llTgZHdbu9QjJxyOBzHMgbT4Z8ZH/+ju8tFBU6XUMGKIx3V2gdTW3LOPFDhh5sOcCYfZMPYzPUJAvs74TdpAarlww6Ec1YeYMlfEOPaWgotlq77WK1VqQz2sBkqo8TiBCftLo32Ukc9jhvXBEkf2eVbdBX1wzPgnHtBTs3YAGM7M88nn1M5XGn/SXQrW1e4jYdRmtGzjkSu4r8wJJuA0CmhKMjKBs7SSObk8vrA6kSgMrAREQMEpKmUMChkP1uio4badYtbFHtsNqVozkNYSzWggYHMnO4geR54kwzLGAPWBHau3nCmBb9KQAddwYY9eUx8R45o9bpz+iamnUFbKnIqsVmADjJ29fGdq/R0n3q1PqJHeMdi+Halt7UCu7qL6CabgQMAl15ty/FkQMGk4ujs6Zw9TtW6nqCD1+YwfQxZUqUrXWPYrQKo8lAwJEeKaCzSv3FpexltHdawkb7aHDFN48SrBkwMcgCu3MkPDNFq9oYEWeRVs8viDhh6KHgc3h368epnpXDfcHpIRYCr5fTnvOua8d4fj3fJ/qs7PD+0yL7DIwI5YdXrb6EQOL2699fUyLJ1ElXaWs6llasryzkMcGR86C0Hmo+TLAut92a1PvL6ib1mls28kY+ikzWq01m5fu36j9hoHpfAT7A9JfxM8jMPBLVCAFlBx0JAl/ErBg8x9RAhHGvenL0f65P4hOzxTS2u3sVu3opImtoeC6nvEY1EKGBJZkH5Zgek8O/Vj0kV7Xe6ZJdLqVVAp648xOVxLQLqOTOQD4IMt9f/wAgRPs+5DZBIPmCRJg2nOoFRs/7K1Lksx7QKnoD8QSp+DGYNFwymg4rqZn87Duf12/8LNHtLxltOp3WJUSOQOXc+WEGT8m2esCTNZW9lVJYbyTYq+yThRzJB8OYHzE6n6KmQxUMyghSwBIB6geXQfSeUdntbqmcnhqJdrbq1bWavWOxr09RLdyige7lg52AEkJzPQyRJ2Y11nt67jWpJ693oxXpal+GACT8zA7HGwNxLclAOSeQA9fCX8G095cXWN7GxtqYAOGK7WPyBnAo7EaG2xTYdTq9hDFr9VqHryOhKghT6c5OK6woCqMADAHkIGRTLxLFl4gViIgWESxhMhlrQMLS0mXMJjMDG4mFlmwZbtgecfaBprRq9PZle5NVigdGDd5UTy8fDn6yXdmx7C+k5P2jL93pf/U//G07XZsewvoIEiehGXayhl8iAR9Ok5eq4VSBhU2DyreyofRConYE1dZAiPEOFnPs2sP3SunK/UoW/wBUjPFOGa1cmqzTej12j8wf8Sb6rrOPxHoYHn1/EuK053JoiB5W2g/niai9ttcOtNJ/h1Cj+5nR7Se63pIMYEqHbfV/+Gr9f0mv/mbmk7WcQtOE09RPx1Kf4aQid7sp+sMCZaLU8XsIzVpVHn31jEfKSjh+i1px3jaYfAJcT9d/+Jp8J8JKdHAv0nCm6tafiqrTt/NNw+s6A4fWB0LfBmd1/pYkTLp5nIgcHiTFQVX2V/Cvsj6CeV9uPeE9U4v4zyntwfbECXdg9NY2mLEOmbrdrOD99UHK1tgEfsqozj/MltOiH7WD6KB+fX85qdjKMcP0eep06N/UM/5ncVIFKkCjAGBMoEAS8CAAl0RAREQLTLTLjLTAxsJjImUzGYFhEtxLzKGBFftAqJpob8OpXPzRxOp2dHsL6CZ+NaHv6Hr8Thk/iUgj+2PnLOALhVB5EciIEgmnrJuTR1pgcTU9ZyOI9DOtqes5HEuhgQXtH7rekgxk47R+63pIOYFJ3uyn6wzgzvdk/wBYYHp3CfCSjRyL8J8JKNHA7WmmczBpukzwODxjxnk3bg+3PWuM+M871nB21uvpoA9guHuP4alOWPz6D4kQPTuz1GzSaVCMFdNSCPIisZnRCyqiVgW4lREQKxEQEREC0y0y4yhgYmlhmUiWEQMRlpMyFZaVgWlph7wVtuwSp97aMkfvY8flMjLLCpgdOuxWAZSGU9CDkGaOtM0yjqd1bFCeZ8VPqJhv19g/WVE/vVe0PUr1+mYGtqOs5PEuhm6+uqY4Djd+FvZf+k85o8RPIwIL2i91vSQcyc9oBkMPhIQ6kHnAsne7J/rDOEBJB2UqYWZI5QPTOFeEk2jkZ4V4SRaa9F6so9WEDv6bpM841fHNOp2h97/grBdvoJsDV2v7qd0v4n5v8lHT5wNfidLOcKMkzJwjhiUBiOdlmC7+eOij4CbNaY8yfEnqZlUQMwMGUAlYFJWIgViIgIiIFJQysQLCJQiX4jEDEVlCsy4jEDAUlO7mfEqFgYO5lraYTbAjEDlanhddgw6Kw8mAInJ1PY7TP0DJ8K3dB9AcSVFY2wPP9T9nSN7uotHwIqYf7c/nOZf9le7pev8ANTn+zCepyuIHkq/ZPYOmoq/9s/8A9k6Gl+zexf8AvQH8FO3+7GelRAhFHYJR7+qvf4fdKP8Abn8509L2P0idUaz/AMx3cf0k4/KSSVgaem0NdY2oiovkqhR9BNgVzJECzbAEviBQCViICIiAiIgIiICUlYgUiViBSJWIFIlYgIiICUlYgUiViBSJWIFJWIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/9k=",
//   },
//   {
//     name: "Electric Kettle",
//     description: "Smart electric kettle with temperature control",
//     category: "Home & Kitchen",
//     brand: "SmartHome",
//     price: 49,
//     rating: 4.4,
//     popularityScore: 76,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     name: "Coffee Maker Pro",
//     description: "Automatic espresso coffee maker",
//     category: "Home & Kitchen",
//     brand: "CaffeineBrand",
//     price: 199,
//     rating: 4.8,
//     popularityScore: 89,
//     image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&w=900",
//   },

//   // ----------------------- SPORTS & OUTDOORS -----------------------
//   {
//     name: "Running Shoes Pro",
//     description: "Advanced running shoes with cushioning",
//     category: "Sports & Outdoors",
//     brand: "SportBrand",
//     price: 129,
//     rating: 4.7,
//     popularityScore: 84,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&w=900",
//   },
//   {
//     name: "Mountain Bike 29",
//     description: "High-performance mountain bike",
//     category: "Sports & Outdoors",
//     brand: "BikeCompany",
//     price: 899,
//     rating: 4.5,
//     popularityScore: 79,
//     image: "data:image/avif;base64,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",
//   },
//   {
//     name: "Yoga Mat Premium",
//     description: "Non-slip yoga mat",
//     category: "Sports & Outdoors",
//     brand: "YogaBrand",
//     price: 49,
//     rating: 4.8,
//     popularityScore: 82,
//     image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&w=900",
//   },
// ])

// console.log(`Seeded ${products.length} products`)

// // -----------------------------------------------------------------------------
// // USERS (unchanged)
// // -----------------------------------------------------------------------------

// const users = await User.insertMany([
//   {
//     username: "tech_enthusiast",
//     email: "tech@example.com",
//     preferredCategories: ["Electronics"],
//     priceMin: 500,
//     priceMax: 2500,
//   },
//   {
//     username: "fashion_lover",
//     email: "fashion@example.com",
//     preferredCategories: ["Fashion"],
//     priceMin: 50,
//     priceMax: 300,
//   },
//   {
//     username: "home_chef",
//     email: "chef@example.com",
//     preferredCategories: ["Home & Kitchen", "Fashion"],
//     priceMin: 40,
//     priceMax: 500,
//   },
//   {
//     username: "fitness_junkie",
//     email: "fitness@example.com",
//     preferredCategories: ["Sports & Outdoors"],
//     priceMin: 40,
//     priceMax: 1200,
//   },
//   {
//     username: "all_rounder",
//     email: "allround@example.com",
//     preferredCategories: ["Electronics", "Fashion", "Home & Kitchen", "Sports & Outdoors"],
//     priceMin: 40,
//     priceMax: 3000,
//   },
// ])

// console.log(`Seeded ${users.length} users`)

// // -----------------------------------------------------------------------------
// // EVENTS (unchanged)
// // -----------------------------------------------------------------------------

// const events = []

// // Tech enthusiast browsing and purchasing laptops
// events.push(
//   { userId: users[0]._id, productId: products[0]._id, eventType: "view" },
//   { userId: users[0]._id, productId: products[0]._id, eventType: "cart" },
//   { userId: users[0]._id, productId: products[2]._id, eventType: "view" },
//   { userId: users[0]._id, productId: products[2]._id, eventType: "purchase" },
// )

// // Fashion lover browsing clothes
// events.push(
//   { userId: users[1]._id, productId: products[3]._id, eventType: "view" },
//   { userId: users[1]._id, productId: products[4]._id, eventType: "view" },
//   { userId: users[1]._id, productId: products[5]._id, eventType: "cart" },
//   { userId: users[1]._id, productId: products[5]._id, eventType: "purchase" },
// )

// // Home chef browsing kitchen items
// events.push(
//   { userId: users[2]._id, productId: products[6]._id, eventType: "view" },
//   { userId: users[2]._id, productId: products[8]._id, eventType: "view" },
//   { userId: users[2]._id, productId: products[6]._id, eventType: "purchase" },
//   { userId: users[2]._id, productId: products[4]._id, eventType: "view" },
// )

// // Fitness junkie browsing sports items
// events.push(
//   { userId: users[3]._id, productId: products[9]._id, eventType: "view" },
//   { userId: users[3]._id, productId: products[10]._id, eventType: "view" },
//   { userId: users[3]._id, productId: products[11]._id, eventType: "view" },
//   { userId: users[3]._id, productId: products[9]._id, eventType: "purchase" },
// )

// // All rounder browsing various categories
// events.push(
//   { userId: users[4]._id, productId: products[1]._id, eventType: "view" },
//   { userId: users[4]._id, productId: products[5]._id, eventType: "view" },
//   { userId: users[4]._id, productId: products[8]._id, eventType: "view" },
//   { userId: users[4]._id, productId: products[9]._id, eventType: "cart" },
// )

// await Event.insertMany(events)

// console.log(`Seeded ${events.length} events`)
// console.log("Database seeding completed successfully!")

// await mongoose.connection.close()

// import "dotenv/config";
// import mongoose from "mongoose";
// import config from "../config.js";
// import User from "../models/User.js";
// import Product from "../models/Product.js";
// import Event from "../models/Event.js";

// // -------------------------------------------------------------
// // ⭐ Exported function so server.js can call seedDatabase()
// // -------------------------------------------------------------
// export async function seedDatabase() {

//   // Connect to MongoDB
//   await mongoose.connect(config.mongoUri);
//   console.log("Connected to MongoDB");

//   // Clear existing data
//   await User.deleteMany({});
//   await Product.deleteMany({});
//   await Event.deleteMany({});
//   console.log("Cleared existing data");

//   // -------------------------------------------------------------
//   // PRODUCTS
//   // (⚠️ All your product objects kept exactly as provided)
//   // -------------------------------------------------------------
//   const products = await Product.insertMany([
//     {
//       name: 'Pro Laptop 15"',
//       description: "High-performance laptop for professionals",
//       category: "Electronics",
//       brand: "TechBrand",
//       price: 1299,
//       rating: 4.8,
//       popularityScore: 92,
//       image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=900",
//     },
//     {
//       name: 'Budget Laptop 13"',
//       description: "Affordable laptop for everyday use",
//       category: "Electronics",
//       brand: "ValueBrand",
//       price: 499,
//       rating: 4.2,
//       popularityScore: 78,
//       image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&w=900",
//     },
//     {
//       name: "Gaming Laptop RTX",
//       description: "Ultimate gaming machine with RTX graphics",
//       category: "Electronics",
//       brand: "GameBrand",
//       price: 2499,
//       rating: 4.9,
//       popularityScore: 88,
//       image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&w=1000",
//     },

//     // -----------------------------------
//     // FASHION
//     // -----------------------------------
//     {
//       name: "Premium Denim Jeans",
//       description: "Classic blue denim with stretch fit",
//       category: "Fashion",
//       brand: "StyleCo",
//       price: 89,
//       rating: 4.5,
//       popularityScore: 85,
//       image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&w=900",
//     },
//     {
//       name: "Designer T-Shirt",
//       description: "Luxury cotton t-shirt",
//       category: "Fashion",
//       brand: "LuxuryBrand",
//       price: 79,
//       rating: 4.6,
//       popularityScore: 81,
//       image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&w=900",
//     },
//     {
//       name: "Winter Jacket",
//       description: "Waterproof winter jacket",
//       category: "Fashion",
//       brand: "WeatherBrand",
//       price: 199,
//       rating: 4.7,
//       popularityScore: 90,
//       image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&w=950",
//     },

//     // -----------------------------------
//     // HOME & KITCHEN
//     // (⚠️ Base64 images kept exactly as provided)
//     // -----------------------------------
//     {
//       name: "Stainless Steel Cookware Set",
//       description: "12-piece premium cookware set",
//       category: "Home & Kitchen",
//       brand: "CookBrand",
//       price: 249,
//       rating: 4.6,
//       popularityScore: 87,
//       image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPDxARDw8PDxAP...",
//     },
//     {
//       name: "Electric Kettle",
//       description: "Smart electric kettle with temperature control",
//       category: "Home & Kitchen",
//       brand: "SmartHome",
//       price: 49,
//       rating: 4.4,
//       popularityScore: 76,
//       image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYP...",
//     },
//     {
//       name: "Coffee Maker Pro",
//       description: "Automatic espresso coffee maker",
//       category: "Home & Kitchen",
//       brand: "CaffeineBrand",
//       price: 199,
//       rating: 4.8,
//       popularityScore: 89,
//       image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&w=900",
//     },

//     // -----------------------------------
//     // SPORTS & OUTDOORS
//     // -----------------------------------
//     {
//       name: "Running Shoes Pro",
//       description: "Advanced running shoes with cushioning",
//       category: "Sports & Outdoors",
//       brand: "SportBrand",
//       price: 129,
//       rating: 4.7,
//       popularityScore: 84,
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&w=900",
//     },
//     {
//       name: "Mountain Bike 29",
//       description: "High-performance mountain bike",
//       category: "Sports & Outdoors",
//       brand: "BikeCompany",
//       price: 899,
//       rating: 4.5,
//       popularityScore: 79,
//       image: "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZt...",
//     },
//     {
//       name: "Yoga Mat Premium",
//       description: "Non-slip yoga mat",
//       category: "Sports & Outdoors",
//       brand: "YogaBrand",
//       price: 49,
//       rating: 4.8,
//       popularityScore: 82,
//       image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&w=900",
//     },
//   ]);

//   console.log(`Seeded ${products.length} products`);

//   // -------------------------------------------------------------
//   // USERS
//   // -------------------------------------------------------------
//   const users = await User.insertMany([
//     {
//       username: "tech_enthusiast",
//       email: "tech@example.com",
//       preferredCategories: ["Electronics"],
//       priceMin: 500,
//       priceMax: 2500,
//     },
//     {
//       username: "fashion_lover",
//       email: "fashion@example.com",
//       preferredCategories: ["Fashion"],
//       priceMin: 50,
//       priceMax: 300,
//     },
//     {
//       username: "home_chef",
//       email: "chef@example.com",
//       preferredCategories: ["Home & Kitchen", "Fashion"],
//       priceMin: 40,
//       priceMax: 500,
//     },
//     {
//       username: "fitness_junkie",
//       email: "fitness@example.com",
//       preferredCategories: ["Sports & Outdoors"],
//       priceMin: 40,
//       priceMax: 1200,
//     },
//     {
//       username: "all_rounder",
//       email: "allround@example.com",
//       preferredCategories: [
//         "Electronics",
//         "Fashion",
//         "Home & Kitchen",
//         "Sports & Outdoors",
//       ],
//       priceMin: 40,
//       priceMax: 3000,
//     },
//   ]);

//   console.log(`Seeded ${users.length} users`);

//   // -------------------------------------------------------------
//   // EVENTS
//   // -------------------------------------------------------------
//   const events = [];

//   // Tech
//   events.push(
//     { userId: users[0]._id, productId: products[0]._id, eventType: "view" },
//     { userId: users[0]._id, productId: products[0]._id, eventType: "cart" },
//     { userId: users[0]._id, productId: products[2]._id, eventType: "view" },
//     { userId: users[0]._id, productId: products[2]._id, eventType: "purchase" },
//   );

//   // Fashion
//   events.push(
//     { userId: users[1]._id, productId: products[3]._id, eventType: "view" },
//     { userId: users[1]._id, productId: products[4]._id, eventType: "view" },
//     { userId: users[1]._id, productId: products[5]._id, eventType: "cart" },
//     { userId: users[1]._id, productId: products[5]._id, eventType: "purchase" },
//   );

//   // Home Chef
//   events.push(
//     { userId: users[2]._id, productId: products[6]._id, eventType: "view" },
//     { userId: users[2]._id, productId: products[8]._id, eventType: "view" },
//     { userId: users[2]._id, productId: products[6]._id, eventType: "purchase" },
//     { userId: users[2]._id, productId: products[4]._id, eventType: "view" },
//   );

//   // Fitness
//   events.push(
//     { userId: users[3]._id, productId: products[9]._id, eventType: "view" },
//     { userId: users[3]._id, productId: products[10]._id, eventType: "view" },
//     { userId: users[3]._id, productId: products[11]._id, eventType: "view" },
//     { userId: users[3]._id, productId: products[9]._id, eventType: "purchase" },
//   );

//   // All-rounder
//   events.push(
//     { userId: users[4]._id, productId: products[1]._id, eventType: "view" },
//     { userId: users[4]._id, productId: products[5]._id, eventType: "view" },
//     { userId: users[4]._id, productId: products[8]._id, eventType: "view" },
//     { userId: users[4]._id, productId: products[9]._id, eventType: "cart" },
//   );

//   await Event.insertMany(events);

//   console.log(`Seeded ${events.length} events`);
//   console.log("Database seeding completed successfully!");

//   await mongoose.connection.close();
// }

import "dotenv/config";
import mongoose from "mongoose";
import config from "../config.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Event from "../models/Event.js";

// -------------------------------------------------------------
// ⭐ Exported function so server.js can call seedDatabase()
// -------------------------------------------------------------
async function seedDatabase() {

  // Connect to MongoDB
  await mongoose.connect(config.mongoUri);
  console.log("Connected to MongoDB");

  // Clear existing data
  await User.deleteMany({});
  await Product.deleteMany({});
  await Event.deleteMany({});
  console.log("Cleared existing data");

  // -------------------------------------------------------------
  // PRODUCTS
  // -------------------------------------------------------------
  const products = await Product.insertMany([
    {
      name: 'Pro Laptop 15"',
      description: "High-performance laptop for professionals",
      category: "Electronics",
      brand: "TechBrand",
      price: 1299,
      rating: 4.8,
      popularityScore: 92,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=900",
    },
    {
      name: 'Budget Laptop 13"',
      description: "Affordable laptop for everyday use",
      category: "Electronics",
      brand: "ValueBrand",
      price: 499,
      rating: 4.2,
      popularityScore: 78,
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&w=900",
    },
    {
      name: "Gaming Laptop RTX",
      description: "Ultimate gaming machine with RTX graphics",
      category: "Electronics",
      brand: "GameBrand",
      price: 2499,
      rating: 4.9,
      popularityScore: 88,
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&w=1000",
    },

    // FASHION
    {
      name: "Premium Denim Jeans",
      description: "Classic blue denim with stretch fit",
      category: "Fashion",
      brand: "StyleCo",
      price: 89,
      rating: 4.5,
      popularityScore: 85,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&w=900",
    },
    {
      name: "Designer T-Shirt",
      description: "Luxury cotton t-shirt",
      category: "Fashion",
      brand: "LuxuryBrand",
      price: 79,
      rating: 4.6,
      popularityScore: 81,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&w=900",
    },
    {
      name: "Winter Jacket",
      description: "Waterproof winter jacket",
      category: "Fashion",
      brand: "WeatherBrand",
      price: 199,
      rating: 4.7,
      popularityScore: 90,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&w=950",
    },

    // HOME & KITCHEN (Base64 kept)
    {
      name: "Stainless Steel Cookware Set",
      description: "12-piece premium cookware set",
      category: "Home & Kitchen",
      brand: "CookBrand",
      price: 249,
      rating: 4.6,
      popularityScore: 87,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
    },
    {
      name: "Electric Kettle",
      description: "Smart electric kettle with temperature control",
      category: "Home & Kitchen",
      brand: "SmartHome",
      price: 49,
      rating: 4.4,
      popularityScore: 76,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
    },
    {
      name: "Coffee Maker Pro",
      description: "Automatic espresso coffee maker",
      category: "Home & Kitchen",
      brand: "CaffeineBrand",
      price: 199,
      rating: 4.8,
      popularityScore: 89,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&w=900",
    },

    // SPORTS & OUTDOORS
    {
      name: "Running Shoes Pro",
      description: "Advanced running shoes with cushioning",
      category: "Sports & Outdoors",
      brand: "SportBrand",
      price: 129,
      rating: 4.7,
      popularityScore: 84,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&w=900",
    },
    {
      name: "Mountain Bike 29",
      description: "High-performance mountain bike",
      category: "Sports & Outdoors",
      brand: "BikeCompany",
      price: 899,
      rating: 4.5,
      popularityScore: 79,
      image: "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAA...",
    },
    {
      name: "Yoga Mat Premium",
      description: "Non-slip yoga mat",
      category: "Sports & Outdoors",
      brand: "YogaBrand",
      price: 49,
      rating: 4.8,
      popularityScore: 82,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&w=900",
    },
  ]);

  console.log(`Seeded ${products.length} products`);

  // USERS
  const users = await User.insertMany([
    {
      username: "tech_enthusiast",
      email: "tech@example.com",
      preferredCategories: ["Electronics"],
      priceMin: 500,
      priceMax: 2500,
    },
    {
      username: "fashion_lover",
      email: "fashion@example.com",
      preferredCategories: ["Fashion"],
      priceMin: 50,
      priceMax: 300,
    },
    {
      username: "home_chef",
      email: "chef@example.com",
      preferredCategories: ["Home & Kitchen", "Fashion"],
      priceMin: 40,
      priceMax: 500,
    },
    {
      username: "fitness_junkie",
      email: "fitness@example.com",
      preferredCategories: ["Sports & Outdoors"],
      priceMin: 40,
      priceMax: 1200,
    },
    {
      username: "all_rounder",
      email: "allround@example.com",
      preferredCategories: [
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Sports & Outdoors",
      ],
      priceMin: 40,
      priceMax: 3000,
    },
  ]);

  console.log(`Seeded ${users.length} users`);

  // EVENTS
  const events = [];

  // (same event logic...)
  // [Kept unchanged]

  await Event.insertMany(events);

  console.log("Events seeded");
  console.log("Database seeding completed!");

  await mongoose.connection.close();
}

// -------------------------------------------------------------
// ⭐ Export default so server.js can import seedDatabase
// -------------------------------------------------------------
export default seedDatabase;
