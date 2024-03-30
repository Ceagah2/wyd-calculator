import { useNavigate } from 'react-router-dom';
import Logo from '../../../../public/favicon.png';
import { MenuList } from '../../../constants/menu';
import * as S from './styles';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.Menu>
        <S.MenuItem onClick={() => navigate('/')}>Home</S.MenuItem>
        {MenuList.map((item) => (
          <S.MenuItem key={item.id} onClick={() => navigate(item.link)}>{item.name}</S.MenuItem>
        ))}
      </S.Menu>
    </S.Container>
  );
}