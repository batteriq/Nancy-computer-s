export type Product = {
  id: number;
  slug: string;
  name: string;
  category: "laptops" | "monitors" | "accessories" | "desktops";
  price: number;
  specs: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "hp-elitebook-8540-i5",
    name: "HP EliteBook 8540 Core i5",
    category: "laptops",
    price: 10000,
    specs: "Core i5, 4GB RAM, 500GB HDD",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    id: 2,
    slug: "dell-latitude-i7",
    name: "Dell Latitude E7470 Core i7",
    category: "laptops",
    price: 25500,
    specs: "Core i7, 16GB RAM, 256GB SSD",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
  },
  {
    id: 3,
    slug: "lenovo-thinkpad-i5",
    name: "Lenovo ThinkPad T470 Core i5",
    category: "laptops",
    price: 18000,
    specs: "Core i5, 8GB RAM, 256GB SSD",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
  },
  {
    id: 4,
    slug: "hp-monitor-24",
    name: 'HP 24-inch Full HD Monitor',
    category: "monitors",
    price: 8000,
    specs: "1920x1080, 60Hz, HDMI+VGA",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
  },
  {
    id: 5,
    slug: "dell-monitor-27",
    name: 'Dell 27-inch IPS Monitor',
    category: "monitors",
    price: 14000,
    specs: "2560x1440, 75Hz, IPS Panel",
    image:
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=600",
  },
  {
    id: 6,
    slug: "hp-all-in-one",
    name: 'HP All-in-One Desktop 21.5"',
    category: "desktops",
    price: 32000,
    specs: "Core i3, 4GB RAM, 1TB HDD",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c228f40ff4?w=600",
  },
  {
    id: 7,
    slug: "wireless-keyboard-mouse",
    name: "Wireless Keyboard & Mouse Combo",
    category: "accessories",
    price: 1800,
    specs: "2.4GHz Wireless, Long Battery Life",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
  },
  {
    id: 8,
    slug: "usb-hub-7port",
    name: "7-Port USB 3.0 Hub",
    category: "accessories",
    price: 1200,
    specs: "USB 3.0, Plug & Play, LED Indicator",
    image:
      "https://images.unsplash.com/photo-1601523572865-75f2fdbae2c1?w=600",
  },
  {
    id: 9,
    slug: "laptop-bag-15",
    name: '15.6" Laptop Backpack',
    category: "accessories",
    price: 2500,
    specs: "Water-resistant, USB charging port",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    id: 10,
    slug: "intel-terrain-mini",
    name: "Intel Terrain Mini Laptop",
    category: "laptops",
    price: 10000,
    specs: "4GB RAM, 500GB HDD, Compact Design",
    image:
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600",
  },
  {
    id: 11,
    slug: "gaming-headset",
    name: "RGB Gaming Headset",
    category: "accessories",
    price: 3500,
    specs: "Surround Sound, Noise-cancelling mic",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
  },
  {
    id: 12,
    slug: "lenovo-all-in-one",
    name: "Lenovo IdeaCentre All-in-One",
    category: "desktops",
    price: 38000,
    specs: 'Core i5, 8GB RAM, 1TB HDD, 23.8"',
    image:
      "https://images.unsplash.com/photo-1593640408182-31c228f40ff4?w=600",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatKES(amount: number): string {
  return "KES " + amount.toLocaleString("en-KE");
}
