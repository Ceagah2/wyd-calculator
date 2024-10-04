import { ITextInput } from '../../../types';
import { StyledInput } from './styles';
export const Input = (props: ITextInput) => {
  return <StyledInput onChange={props.onChange} value={props.value} name={props.name}/>;
};

