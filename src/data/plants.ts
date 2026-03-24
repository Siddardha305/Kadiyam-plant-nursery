export interface Plant {
    id: number;
    name: string;
    teluguName?: string;
    description: string;
    care?: string;
    price?: string;
    image: string;
}

export const floweringPlants: Plant[] = [
    { id: 101, name: "Hibiscus", description: "Large, colorful flowers; great for gardens and borders.", care: "Full sun, well-drained soil", price: "Available in 10\" / 12\" pots", image: "/flowers/Hibiscus.jpg" },
    { id: 102, name: "Rose Plants", description: "Decorative flowering shrubs; many varieties available.", care: "Full sun, regular watering", image: "/flowers/Rose Plants.webp" },
    { id: 103, name: "Portulaca Grandiflora", teluguName: "Naachu mokka", description: "Ground-cover flowering plant with small bright flowers.", image: "/flowers/Portulaca Grandiflora.avif" },
    { id: 104, name: "Euphorbia milii", teluguName: "Crown of Thorns", description: "Thorny shrub with long-lasting flowers.", image: "/flowers/Euphorbia milii.webp" },
    { id: 105, name: "Plumeria Dwarf", description: "Compact flowering tree with fragrant flowers, ideal for small gardens.", image: "/flowers/Plumeria Dwarf.jpg" },
    { id: 106, name: "Adenium", description: "Succulent flowering plant with thick stem and showy flowers.", image: "/flowers/Adenium.jpg" },
    { id: 107, name: "Tecoma stans", description: "Yellow-flowered shrub/tree, good for landscaping.", image: "/flowers/Tecoma stans.jpg" },
    { id: 108, name: "Allamanda", description: "Climber with bright yellow flowers.", image: "/flowers/Allamanda.jpg" },
    { id: 109, name: "Jatropha integerrima", description: "Small flowering plant with red flowers, used in borders and landscaping.", image: "/flowers/Jatropha integerrima.jpg" },
    { id: 110, name: "Spider Lily", description: "Ornamental lily with spider-like flowers; used in gardens and borders.", image: "/flowers/Spider Lily.webp" },
    { id: 111, name: "Lantana camara", description: "Hardy flowering shrub with multicolored flowers, excellent for ground cover and borders.", image: "/flowers/Lantana camara.webp" }
];

export const avenuePlants: Plant[] = [
    { id: 301, name: "Cadamba", teluguName: "కదంబ", description: "Fast-growing avenue tree with dense foliage.", image: "/cadamba.jpg" },
    { id: 302, name: "Bauhinia purpurea", teluguName: "Devakanchan / దేవకాంచన్", description: "Flowering avenue tree with purple-pink flowers.", image: "/Bauhinia purpurea.jpg" },
    { id: 303, name: "Neem tree", teluguName: "వేప", description: "Hardy, medicinal avenue tree with economic value.", image: "/Neem tree.webp" },
    { id: 304, name: "Alstonia scholaris", teluguName: "ఏడాకుల చెట్టు", description: "Tall, straight avenue tree, good for roadside planting.", image: "/Alstonia scholaris.webp" },
    { id: 305, name: "Gulmohar", teluguName: "గుల్మొహర్", description: "Fast-growing tree with bright red-orange flowers.", image: "/Gulmohar.webp" },
    { id: 306, name: "Terminalia mantaly variegata", description: "Ornamental tree with variegated foliage.", image: "/Terminalia mantaly variegata.jpg" },
    { id: 307, name: "Red Sandalwood Plants", description: "Rare, valuable tree; used in landscaping and conservation.", image: "/Red Sandalwood Plants.webp" },
    { id: 308, name: "Banyan", description: "Large shade tree, suitable for parks and big avenues.", image: "/Banyan.jpeg" },
    { id: 309, name: "Pongamia pinnata", teluguName: "Millettia", description: "Nitrogen-fixing avenue tree, good for roadsides.", image: "/Pongamia pinnata.webp" },
    { id: 310, name: "Mahogany", description: "Tall, strong-wooded tree, good for avenues and parks.", image: "/Mahogany.jpeg" },
    { id: 311, name: "Peepal tree", teluguName: "Ficus religiosa", description: "Sacred shade tree with large canopy.", image: "/Peepal tree.webp" }
];

export const fruitPlants: Plant[] = [
    { id: 201, name: "Dragon Fruit plants", teluguName: "Pitahaya / Strawberry Pear", description: "Exotic climbing cactus with edible fruit.", image: "/fruites/Dragon Fruit plants.webp" },
    { id: 202, name: "Mango plants", teluguName: "Including Miyazaki", description: "Exotic, high-value mango variety; bearings at early age.", image: "/fruites/Mango plants.jpg" },
    { id: 203, name: "Banana", description: "Fast-yielding fruit plant.", image: "/fruites/Banana.jpg" },
    { id: 204, name: "Papaya", description: "Fast-growing fruit tree with high productivity.", image: "/fruites/Papaya.webp" },
    { id: 205, name: "Guava", description: "Hardy fruit tree suitable for gardens and farms.", image: "/fruites/Guava.jpg" },
    { id: 206, name: "Citrus", description: "Orange, lemon, etc., for home gardens.", image: "/fruites/Citrus.jpeg" },
    { id: 207, name: "Pomegranate", description: "Fruit-bearing shrub/tree.", image: "/fruites/Pomegranate.png" }
];

export const ornamentalPlants: Plant[] = [
    { id: 401, name: "Coleus Plants", description: "Colorful foliage plants with many leaf patterns.", image: "/indoor and out door plants/Coleus Plants.jpg" },
    { id: 402, name: "Spider plants", description: "Easy-care indoor plants with arching leaves.", image: "/indoor and out door plants/Spider plants.webp" },
    { id: 403, name: "Eugenia plants", description: "Dense-foliaged shrubs/trees for borders.", image: "/indoor and out door plants/Eugenia plants.webp" },
    { id: 404, name: "Ficus plants", description: "Various ficus species for hedges and screens.", image: "/indoor and out door plants/Ficus plants.jpg" }
];

export const palms: Plant[] = [
    { id: 501, name: "Bismarckia palm", description: "Stiff, fan-shaped palm for landscaping.", image: "/indoor and out door plants/Bismarckia palm.jpg" },
    { id: 502, name: "General Palms", description: "Bismarckia palm and other ornamental palms suitable for avenues and gardens.", image: "/indoor and out door plants/General Palms.jpg" },
];

export const creepers: Plant[] = [
    { id: 601, name: "Creepers", description: "Assorted creepers for walls, fences, and pergolas.", image: "/Creepers/Creepers.webp" }
];

export const bonsai: Plant[] = [
    { id: 701, name: "Bonsai", description: "Miniature ornamental trees shaped for aesthetics.", image: "/indoor and out door plants/Bonsai.jpg" }
];

export const coconutVarieties: Plant[] = [
    { id: 801, name: "Coconut Plant", description: "High yielding coconut varieties.", image: "/indoor and out door plants/Coconut Plant.webp" }
];

export const coleusPlants: Plant[] = [
    { id: 901, name: "Coleus Varieties", description: "Bright colored foliage for gardens.", image: "/indoor and out door plants/Coleus Varieties.webp" }
];

export const allPlants: Plant[] = [
    ...floweringPlants,
    ...avenuePlants,
    ...fruitPlants,
    ...ornamentalPlants,
    ...palms,
    ...creepers,
    ...bonsai,
    ...coconutVarieties,
    ...coleusPlants
];
