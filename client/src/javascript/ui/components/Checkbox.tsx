import {FC} from 'react';

import Checkmark from '../icons/Checkmark';
import ToggleInput from './ToggleInput';

import type {ToggleInputProps} from './ToggleInput';

type CheckboxProps = Omit<ToggleInputProps, 'type' | 'icon'>;

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => (
  <ToggleInput {...props} type="checkbox" icon={<Checkmark />} />
);

export default Checkbox;
