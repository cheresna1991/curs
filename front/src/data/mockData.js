export const categories = [
  { id: 1, name: 'Электроника' },
  { id: 2, name: 'Недвижимость' },
  { id: 3, name: 'Транспорт' },
  { id: 4, name: 'Одежда' },
  { id: 5, name: 'Услуги' },
  { id: 6, name: 'Животные' }
];

export const mockAds = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: 89990,
    category: 'Электроника',
    description: 'Отличное состояние, полный комплект, гарантия до декабря 2026',
    address: 'Москва, ул. Тверская, 15',
    rating: 4.7,
    image: 'https://picsum.photos/400/300?random=1',
    seller: { name: 'Иван Петров', rating: 4.8, avatar: 'И' }
  },
  {
    id: 2,
    title: '2-комнатная квартира, 65 м²',
    price: 12500000,
    category: 'Недвижимость',
    description: 'Продается уютная квартира в центре. Евроремонт, вся техника остается',
    address: 'Санкт-Петербург, Невский пр., 100',
    rating: 4.2,
    image: 'https://picsum.photos/400/300?random=2',
    seller: { name: 'Мария Сидорова', rating: 4.5, avatar: 'М' }
  },
  {
    id: 3,
    title: 'Репетитор по математике',
    price: 1500,
    category: 'Услуги',
    description: 'Подготовка к ЕГЭ и ОГЭ. Опыт 10 лет. Индивидуальный подход',
    address: 'Москва, м. Университет',
    rating: 5.0,
    image: 'https://picsum.photos/400/300?random=3',
    seller: { name: 'Алексей Смирнов', rating: 5.0, avatar: 'А' }
  },
  {
    id: 4,
    title: 'BMW X5 2024',
    price: 8950000,
    category: 'Транспорт',
    description: 'Новый автомобиль, полная комплектация, пробег 5000 км',
    address: 'Москва, Ленинградское шоссе, 50',
    rating: 4.9,
    image: 'https://picsum.photos/400/300?random=4',
    seller: { name: 'Иван Петров', rating: 4.8, avatar: 'И' }
  },
  {
    id: 5,
    title: 'Куртка зимняя мужская',
    price: 12990,
    category: 'Одежда',
    description: 'Новая, размер L, цвет черный. Мембранная ткань',
    address: 'Екатеринбург, ул. Ленина, 25',
    rating: 4.3,
    image: 'https://picsum.photos/400/300?random=5',
    seller: { name: 'Мария Сидорова', rating: 4.5, avatar: 'М' }
  },
  {
    id: 6,
    title: 'Щенки лабрадора',
    price: 35000,
    category: 'Животные',
    description: 'Породистые щенки, привиты, документы КСУ',
    address: 'Казань, ул. Баумана, 10',
    rating: 4.8,
    image: 'https://picsum.photos/400/300?random=6',
    seller: { name: 'Алексей Смирнов', rating: 5.0, avatar: 'А' }
  }
];

export const mockUser = {
  id: 1,
  login: 'user@mail.ru',
  name: 'Иван Петров',
  rating: 4.8,
  adsCount: 15,
  reviewsCount: 23
};