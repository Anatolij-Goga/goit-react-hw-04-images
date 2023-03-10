import { RotatingLines } from 'react-loader-spinner';
import { Overlay, RotatingLinesContainer } from './Loader.styled';

export default function Loader() {
  return (
    <Overlay>
      <RotatingLinesContainer>
        <RotatingLines
          strokeColor="#2196f3"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      </RotatingLinesContainer>
    </Overlay>
  );
}
