import { AnimalCard } from './component/AnimalCard.tsx';
import './styles/global.css';

export function App() {
  return (
    <div>
      <AnimalCard
        name="Leão"
        species="Panthera leo"
        isDangerous={true}
      />

      <AnimalCard
        name="Golfinho"
        species="Delphinidae"
        isDangerous={false}
      />

      <AnimalCard
        name="Urso Pardo"
        species="Ursus arctos"
        isDangerous={true}
      />
    </div>
  );
}