import {FC} from 'react';
import classnames from 'classnames';

import WizardForm from './components/form';

import {reducer, initialState} from './reducer';

interface WizardProps {
  className?: string;
}

const Wizard: FC<WizardProps> = ({className}) => {
  return (
    <div className={classnames(className)}>
      <WizardForm />
    </div>
  );
};

export default Wizard;
