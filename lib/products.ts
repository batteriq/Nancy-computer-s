export type Product = {
  id: number;
  slug: string;
  name: string;
  category: "laptops" | "monitors" | "accessories" | "desktops";
  price: number;
  specs: string;
  image: string;
  // Extended detail fields
  brand?: string;
  processor?: string;
  ram?: string;
  storage?: string;
  display?: string;
  os?: string;
  condition?: "New" | "Refurbished";
  rating?: number;
  reviews?: number;
  bestSeller?: boolean;
  description?: string;
};

const IMG = "https://images.unsplash.com/photo-";
const Q = "?w=600&auto=format";

export const products: Product[] = [
  {
    id: 1,
    slug: "hp-elitebook-8540-i5",
    name: "HP EliteBook 8540 Core i5",
    category: "laptops",
    price: 10000,
    specs: "Core i5, 4GB RAM, 500GB HDD",
    image: `${IMG}1496181133206-80ce9b88a853${Q}`,
    brand: "HP",
    processor: "Intel Core i5 (1st Gen)",
    ram: "4GB DDR3",
    storage: "500GB HDD",
    display: '15.6" HD Display',
    os: "Windows 10 Pro",
    condition: "Refurbished",
    rating: 4.5,
    reviews: 24,
    bestSeller: true,
    description:
      "The HP EliteBook 8540 is a rugged, business-grade laptop built to last. At just KES 10,000 it is the perfect entry machine for students and first-time buyers who need a reliable device for browsing, coursework, and office work. Every unit is professionally refurbished, fully tested, and ready to use out of the box.",
  },
  {
    id: 2,
    slug: "dell-latitude-i7",
    name: "Dell Latitude E7470 Core i7",
    category: "laptops",
    price: 25500,
    specs: "Core i7, 16GB RAM, 256GB SSD",
    image: `${IMG}1525547719571-a2d4ac8945e2${Q}`,
    brand: "Dell",
    processor: "Intel Core i7 (6th Gen)",
    ram: "16GB DDR4",
    storage: "256GB SSD",
    display: '14" Full HD',
    os: "Windows 10 Pro",
    condition: "Refurbished",
    rating: 4.8,
    reviews: 31,
    bestSeller: true,
    description:
      "A premium ultrabook for professionals who demand speed. The Dell Latitude E7470 pairs a powerful Core i7 processor with 16GB of RAM and a fast 256GB SSD, making it ideal for design, development, and heavy multitasking. Sleek, lightweight, and backed by our quality guarantee.",
  },
  {
    id: 3,
    slug: "lenovo-thinkpad-i5",
    name: "Lenovo ThinkPad T470 Core i5",
    category: "laptops",
    price: 18000,
    specs: "Core i5, 8GB RAM, 256GB SSD",
    image: `${IMG}1541807084-5c52b6b3adef${Q}`,
    brand: "Lenovo",
    processor: "Intel Core i5 (7th Gen)",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '14" Full HD',
    os: "Windows 10 Pro",
    condition: "Refurbished",
    rating: 4.7,
    reviews: 19,
    bestSeller: true,
    description:
      "The legendary ThinkPad reliability in a modern, portable body. The Lenovo ThinkPad T470 offers a comfortable keyboard, all-day battery life, and snappy SSD performance. A favourite among students and remote workers across Nairobi.",
  },
  {
    id: 4,
    slug: "hp-monitor-24",
    name: 'HP 24-inch Full HD Monitor',
    category: "monitors",
    price: 8000,
    specs: "1920x1080, 60Hz, HDMI+VGA",
    image: `${IMG}1527443224154-c4a3942d3acf${Q}`,
    brand: "HP",
    display: '24" Full HD 1920x1080, 60Hz',
    condition: "New",
    rating: 4.6,
    reviews: 14,
    description:
      "Upgrade your workspace with this crisp 24-inch Full HD monitor from HP. With both HDMI and VGA inputs, it connects to almost any laptop or desktop. Slim bezels and vivid colours make it perfect for work, study, and entertainment.",
  },
  {
    id: 5,
    slug: "dell-monitor-27",
    name: 'Dell 27-inch IPS Monitor',
    category: "monitors",
    price: 14000,
    specs: "2560x1440, 75Hz, IPS Panel",
    image: `${IMG}1585792180666-f7347c490ee2${Q}`,
    brand: "Dell",
    display: '27" QHD 2560x1440 IPS, 75Hz',
    condition: "New",
    rating: 4.7,
    reviews: 12,
    description:
      "Experience stunning detail on this 27-inch Dell IPS monitor. The QHD resolution and wide viewing angles deliver accurate colours from edge to edge, making it ideal for designers, gamers, and professionals who want more screen real estate.",
  },
  {
    id: 6,
    slug: "hp-all-in-one",
    name: 'HP All-in-One Desktop 21.5"',
    category: "desktops",
    price: 32000,
    specs: "Core i3, 4GB RAM, 1TB HDD",
    image: `${IMG}1527443224154-c4a3942d3acf${Q}`,
    brand: "HP",
    processor: "Intel Core i3",
    ram: "4GB DDR4",
    storage: "1TB HDD",
    display: '21.5" Full HD',
    os: "Windows 11",
    condition: "New",
    rating: 4.5,
    reviews: 9,
    bestSeller: true,
    description:
      "A clean, all-in-one desktop that keeps your desk clutter-free. The HP All-in-One combines a Full HD display, Core i3 processor, and generous 1TB storage in one elegant unit. Perfect for home offices, reception desks, and family use.",
  },
  {
    id: 7,
    slug: "wireless-keyboard-mouse",
    name: "Wireless Keyboard & Mouse Combo",
    category: "accessories",
    price: 1800,
    specs: "2.4GHz Wireless, Long Battery Life",
    image: `${IMG}1587829741301-dc798b83add3${Q}`,
    condition: "New",
    rating: 4.4,
    reviews: 27,
    description:
      "Cut the clutter with this reliable 2.4GHz wireless keyboard and mouse combo. Plug-and-play with a single USB receiver and enjoy long battery life. A must-have upgrade for any laptop or desktop setup.",
  },
  {
    id: 8,
    slug: "usb-hub-7port",
    name: "7-Port USB 3.0 Hub",
    category: "accessories",
    price: 1200,
    specs: "USB 3.0, Plug & Play, LED Indicator",
    image: `${IMG}1587829741301-dc798b83add3${Q}`,
    condition: "New",
    rating: 4.3,
    reviews: 18,
    description:
      "Expand your connectivity with this 7-port USB 3.0 hub. Fast data transfer, plug-and-play simplicity, and an LED indicator make it easy to connect all your drives, peripherals, and devices at once.",
  },
  {
    id: 9,
    slug: "laptop-bag-15",
    name: '15.6" Laptop Backpack',
    category: "accessories",
    price: 2500,
    specs: "Water-resistant, USB charging port",
    image: `${IMG}1553062407-98eeb64c6a62${Q}`,
    condition: "New",
    rating: 4.6,
    reviews: 22,
    description:
      "Carry your tech in style and safety. This water-resistant 15.6-inch backpack features padded compartments, a built-in USB charging port, and plenty of storage for books and accessories. Built for the daily Nairobi commute.",
  },
  {
    id: 10,
    slug: "intel-terrain-mini",
    name: "Intel Terrain Mini Laptop",
    category: "laptops",
    price: 10000,
    specs: "4GB RAM, 500GB HDD, Compact Design",
    image: `${IMG}1484788984921-03950022c9ef${Q}`,
    brand: "Intel",
    processor: "Intel Celeron",
    ram: "4GB",
    storage: "500GB HDD",
    display: '14" HD Display',
    os: "Windows 10",
    condition: "New",
    rating: 4.2,
    reviews: 16,
    description:
      "Light, compact, and affordable, the Intel Terrain Mini is the ideal companion for browsing, note-taking, and online classes. Its small footprint makes it easy to carry anywhere, while 500GB of storage keeps all your files close.",
  },
  {
    id: 11,
    slug: "gaming-headset",
    name: "RGB Gaming Headset",
    category: "accessories",
    price: 3500,
    specs: "Surround Sound, Noise-cancelling mic",
    image: `${IMG}1583394838336-acd977736f90${Q}`,
    condition: "New",
    rating: 4.5,
    reviews: 20,
    bestSeller: true,
    description:
      "Immerse yourself in the game with surround sound, a noise-cancelling microphone, and vibrant RGB lighting. Comfortable over-ear cushions let you play, stream, or take calls for hours without fatigue.",
  },
  {
    id: 12,
    slug: "lenovo-all-in-one",
    name: "Lenovo IdeaCentre All-in-One",
    category: "desktops",
    price: 38000,
    specs: 'Core i5, 8GB RAM, 1TB HDD, 23.8"',
    image: `${IMG}1585792180666-f7347c490ee2${Q}`,
    brand: "Lenovo",
    processor: "Intel Core i5",
    ram: "8GB DDR4",
    storage: "1TB HDD",
    display: '23.8" Full HD',
    os: "Windows 11",
    condition: "New",
    rating: 4.7,
    reviews: 11,
    bestSeller: true,
    description:
      "A spacious 23.8-inch all-in-one that blends power and elegance. The Lenovo IdeaCentre delivers smooth Core i5 performance and ample storage in a sleek, space-saving design. Ideal for businesses and serious home users.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatKES(amount: number): string {
  return "KES " + amount.toLocaleString("en-KE");
}

export const categoryLabels: Record<Product["category"], string> = {
  laptops: "Laptop",
  monitors: "Monitor",
  desktops: "Desktop",
  accessories: "Accessory",
};

// Build the spec rows for a product detail page, skipping empty values.
export function getSpecRows(p: Product): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];
  if (p.processor) rows.push({ label: "Processor", value: p.processor });
  if (p.ram) rows.push({ label: "RAM", value: p.ram });
  if (p.storage) rows.push({ label: "Storage", value: p.storage });
  if (p.display) rows.push({ label: "Display", value: p.display });
  if (p.os) rows.push({ label: "Operating System", value: p.os });
  rows.push({ label: "Condition", value: p.condition ?? "New" });
  if (p.brand) rows.push({ label: "Brand", value: p.brand });
  return rows;
}
