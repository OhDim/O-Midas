export const RESTAURANTS = [
    {
      id: 1,
      image: require('../assets/Images/Restaurants/Bottega.png'),
      title: 'Bottega',
      location: 'Jardim Pinheiros, São Paulo',
      description:
        'Restaurante de massa italiana.',
    },
    {
      id: 2,
      image: require('../assets/Images/Restaurants/LeMoro.png'),
      title: 'LeMoro',
      location: 'Novo Osasco, Osasco',
      description:
        'Restaurante de cozinha moderna.',
    },
    {
      id: 3,
      image: require('../assets/Images/Restaurants/Monteiros.png'),
      title: 'Monteiros',
      location: 'Bela Vista, São Paulo',
      description:
        "Loja de venda de donuts.",
    },
    {
      id: 4,
      image: require('../assets/Images/Restaurants/OMato.png'),
      title: "O'Mato",
      location: 'Alphaville, São Paulo',
      description:
        "Restaurante de receitas romanas.",
    },
    {
      id: 5,
      image: require('../assets/Images/Restaurants/Tashi.png'),
      title: 'Tashi',
      location: 'Liberdade, São Paulo',
      description:"Restaurante de comida japonesa.",
    },
];

export const FOODS = [
  {
    id: 6,
    image: require('../assets/Images/Foods/Donuts.jpg'),
    title: 'Donuts de Morango',
    location: 'De Monteiros',
    description:
      "Donuts recheados com geleia de morango e cobertura rosa.",
  },
  {
    id: 7,
    image: require('../assets/Images/Foods/Pasta-Orange.jpg'),
    title: 'Macarrão Laranja',
    location: "De Le'Moro",
    description:
      'Massa artesanal coberta com molho laranja e frutos do mar.',
  },
  {
    id: 8,
    image: require('../assets/Images/Foods/Pizza.jpg'),
    title: 'Pizza Pesto',
    location: 'De Bottega',
    description:
      'Pizza com cobertura de vegetais com legumes.',
  },
  {
    id: 9,
    image: require('../assets/Images/Foods/Sushi.jpg'),
    title: 'Uramaki',
    location: 'De Tashi',
    description:
      'Urumaki de salmão com gohan artesanal',
  },
];

export const SEARCH_RESTAURANTS = [...RESTAURANTS].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_FOODS = [...Object.values(FOODS)].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_ALL = [...SEARCH_RESTAURANTS, ...SEARCH_FOODS];

// export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map(item => ({
//   ...item,
//   id: Math.random().toString(),
// }));

// export const SEARCH_HOTELS = [...Object.values(HOTELS)].map(item => ({
//   ...item,
//   id: Math.random().toString(),
// }));

// export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];