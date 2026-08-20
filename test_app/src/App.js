import React from 'react';
// import Footer from './components/Footer'; 
// import Header from './components/Header';
// import MovieList from './components/MovieList';
// import Greeting from './components/Greeting';  
// import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'พรหมจักรธร เง็กคลอย', nickname: 'กฤษ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'เล่นเกม'] },
   { id: 2, name: 'ชัยภัทร รัตนพร', nickname: 'ปลื้ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กิน', 'เล่นเกม'] },
    { id: 2, name: 'ณัฎฌา อิ่มหนำ', nickname: 'จั๊บ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['นอน', 'เล่นเกม'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
