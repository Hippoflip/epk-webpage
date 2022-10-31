import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const BandCampIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M0 100l39.664-72H128l-39.669 72H0z"
      fill="currentColor"></path>
  </Icon>
));

export default BandCampIcon;