const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, '')  // Remove non-word characters
      .replace(/\-\-+/g, '-')  // Replace multiple hyphens with a single one
      .replace(/^-+/, '')  // Remove hyphens from the start
      .replace(/-+$/, '');  // Remove hyphens from the end
  };
  
  const products = [
    {
      id: 1,
      productName: "Men's Casual Shirt",
      image: "https://images.pexels.com/photos/31929274/pexels-photo-31929274/free-photo-of-stylish-man-posing-in-dark-glasses-indoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "men",
      slug: slugify("Men's Casual Shirt") 
    },
    {
      id: 2,
      productName: "Men's Formal Suit",
      image: "https://images.pexels.com/photos/15654407/pexels-photo-15654407/free-photo-of-elegant-man-in-a-suit-walking-by-a-sports-car.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "men",
      slug: slugify("Men's Formal Suit") 
    },
    {
      id: 3,
      productName: "Men's Denim Jeans",
      image: "https://images.pexels.com/photos/31887230/pexels-photo-31887230/free-photo-of-urban-fashionable-young-man-on-rooftop.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "men",
      slug: slugify("Men's Denim Jeans") 
    },
    {
      id: 4,
      productName: "Men's Leather Jacket",
      image: "https://images.pexels.com/photos/20232807/pexels-photo-20232807/free-photo-of-model-in-a-brown-leather-jacket-and-gray-sweater-posing-on-a-footbridge.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "men",
      slug: slugify("Men's Leather Jacket") 
    },
    {
      id: 5,
      productName: "Men's Hoodie",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "men",
      slug: slugify("Men's Hoodie") 
    },
    {
      id: 6,
      productName: "Women's Summer Dress",
      image: "https://images.pexels.com/photos/31871308/pexels-photo-31871308/free-photo-of-fashionable-woman-in-floral-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "women",
      slug: slugify("Women's Summer Dress") 
    },
    {
      id: 7,
      productName: "Women's Blouse",
      image: "https://images.pexels.com/photos/31950888/pexels-photo-31950888/free-photo-of-young-woman-enjoying-nature-in-sunlit-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "women",
      slug: slugify("Women's Blouse") 
    },
    {
      id: 8,
      productName: "Women's Jeans",
      image: "https://images.pexels.com/photos/31916097/pexels-photo-31916097/free-photo-of-trendy-urban-fashion-in-tehran-parking-garage.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "women",
      slug: slugify("Women's Jeans") // Adding slug
    },
    {
      id: 9,
      productName: "Women's Jacket",
      image: "https://images.pexels.com/photos/31931757/pexels-photo-31931757/free-photo-of-stylish-woman-in-sunglasses-leaning-on-stair-railing.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "women",
      slug: slugify("Women's Jacket") // Adding slug
    },
    {
      id: 10,
      productName: "Women's Skirt",
      image: "https://images.pexels.com/photos/31938626/pexels-photo-31938626/free-photo-of-chic-fashion-editorial-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "women",
      slug: slugify("Women's Skirt") // Adding slug
    },
    {
      id: 11,
      productName: "Kids' T-Shirt",
      image: "https://images.pexels.com/photos/5560485/pexels-photo-5560485.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "kids",
      slug: slugify("Kids' T-Shirt") // Adding slug
    },
    {
      id: 12,
      productName: "Kids' Jeans",
      image: "https://images.pexels.com/photos/5623062/pexels-photo-5623062.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "kids",
      slug: slugify("Kids' Jeans") // Adding slug
    },
    {
      id: 13,
      productName: "Kids' Jacket",
      image: "https://images.pexels.com/photos/6261908/pexels-photo-6261908.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "kids",
      slug: slugify("Kids' Jacket") // Adding slug
    },
    {
      id: 14,
      productName: "Kids' Dress",
      image: "https://images.pexels.com/photos/31944953/pexels-photo-31944953/free-photo-of-joyful-child-running-through-a-spring-flower-field.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "kids",
      slug: slugify("Kids' Dress") // Adding slug
    },
    {
      id: 15,
      productName: "Kids' Shorts",
      image: "https://images.pexels.com/photos/12887205/pexels-photo-12887205.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "kids",
      slug: slugify("Kids' Shorts") // Adding slug
    }
  ];
  
  export default products;
  