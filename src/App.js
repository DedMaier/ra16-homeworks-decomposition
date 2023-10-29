import React from 'react';
import './App.css';
import News from './components/News/News';
import Card from './components/Card/Card';
import WeatherCard from './components/WeatherCard/WeatherCard';
import SearchCard from './components/SearchCard/SearchCard';
import Banner from './components/Banner/Banner';

const newsSections = [
  { text: 'Сейчас в СМИ', faded: false },
  { text: 'в Германии', faded: true },
  { text: 'Рекомендуем', faded: true },
];

const news = [
  { img: 'https://img.freepik.com/free-vector/infinity-colorful-logo-gradient_343694-1513.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=ais', text: 'Новость' },
  { img: 'https://img.freepik.com/free-vector/logo-design-combination-of-letters-g-and-o-gradation_557339-315.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=ais', text: 'Новость' },
  { img: 'https://img.freepik.com/free-vector/bright-logo-design_1055-213.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=ais', text: 'Новость' },
  { img: 'https://img.freepik.com/free-vector/logo-design-combination-of-letters-g-and-o-gradation_557339-315.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=ais', text: 'Новость' },
  { img: 'https://img.freepik.com/free-vector/bright-logo-design_1055-213.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=ais', text: 'Новость' },
];

const currencies = [
  { title: 'USD MOEX 63,52', textSecondery: '+0.09' },
  { title: 'EUR MOEX 70.86', textSecondery: '+0.14' },
  { title: 'НЕФТЬ 64,90', textSecondery: '+1,63%' },
  { textSecondery: '...' },
];

const topRightCard = {
  img: 'https://img.freepik.com/premium-vector/link-flat-blue-simple-icon-with-long-shadowxa_159242-10243.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=ais',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
};

const GermanyMap = {
  title: 'Карта Германии',
  text: 'Расписания',
  href: '#',
};

const Ether = {
  title: 'Эфир',
  text: 'Управление как искуство',
  href: '#',
};

const products = [
  { text: 'Видео', href: '#' },
  { text: 'Картинки', href: '#' },
  { text: 'Новости', href: '#' },
  { text: 'Карты', href: '#' },
  { text: 'Маркет', href: '#' },
  { text: 'Переводчик', href: '#' },
  { text: 'Эфир', href: '#' },
  { text: 'еще', href: '#' },
];

const banner = {
  src: 'https://img.freepik.com/free-vector/gradient-social-media-cover-template-for-gym-and-exercise_23-2149557664.jpg?size=626&ext=jpg&ga=GA1.1.437099267.1698572645&semt=sph',
  alt: 'Movie Time',
  href: 'https://example.com/',
}

/**
 * @returns {JSX.Element} 
 */

function App() {
  return (
    <div className="App">
      <div className='header'>
        <News {...{ newsSections, news, currencies }} />
        <Card {...topRightCard} style={{ width: '280px' }} />
      </div>

      <SearchCard {...{ products }} />

      <Banner {...banner} />

      <div className='footer'>
        <WeatherCard />
        <Card {...GermanyMap} />
        <Card {...Ether} />
        { }
      </div>
    </div>
  );
}

export default App;
