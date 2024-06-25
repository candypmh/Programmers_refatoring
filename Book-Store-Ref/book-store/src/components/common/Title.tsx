import { styled } from 'styled-components';
import { ColorKey, HeadingSize } from '../../style/theme';

interface Props{
 children: React.ReactNode;
 size: HeadingSize;
 color?: ColorKey;
}

function Title({children, size, color}: Props) {
  return (
    <TitleStyle size={size} color={color}> {children} </TitleStyle>
  );
}

const TitleStyle = styled.h1<Omit<Props, "chilren">>`
  font-size: ${({theme, size}) => theme.heading[size].fontsize};
  color: ${({theme, color}) => color? theme.color[color] : theme.color.primary};
`;

export default Title;