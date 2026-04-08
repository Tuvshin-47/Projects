import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;
export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &hover {
    transform: translateY(-5px);
  }
`;
export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: block;
  padding: 10px;
`;
export const PokemonInfo = styled.div`
  padding: 15px;
  text-align: center;
`;

export const Name = styled.h2`
  margin: 0;
  color: #2c3e50;
  text-transform: capitalize;
  font-size: 1.2rem;
`;

interface TypeBadgeProps {
  type: 'fire' | 'water' | 'grass' | 'electric' | 'default';
}
export const TypeBadge = styled.span<TypeBadgeProps>`
  background: ${(props) => {
    switch (props.type) {
      case 'fire':
        return '#ff7675';
      case 'water':
        return '#74b9ff';
      case 'grass':
        return '#55efc4';
      case 'electric':
        return '#ffeaa7';
      default:
        return '#dfe6e9';
    }
  }};
  color: #2d3436;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 0 4px;
  font-size: 0.9rem;
`;
export const LoadingText = styled.div`
  color: #d63031;
  text-align: center;
  padding: 20px;
`;

export const ErrorText = styled.div`
  color: #d63031;
  text-align: center;
  padding: 20px;
`;
export const Button = styled.button`
  background-color: #0984e3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px 0;

  &:hover {
    background-color: #0873c4;
  }
  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;
export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
  font-size: 0.9rem;
`;
export const StatItem = styled.div`
  padding: 5px;
  border-radius: 4px;
`;
