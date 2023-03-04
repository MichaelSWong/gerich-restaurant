import React, { FC } from 'react';
import { images } from '../../constants';

type SubHeadingProps = {
  title: string;
};

const SubHeading: FC<SubHeadingProps> = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt='spoon' className='spoon__img' />
    </div>
  );
};

export default SubHeading;
