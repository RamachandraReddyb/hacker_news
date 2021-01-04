import React from 'react';

import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

import LogoImg from '../../../assets/images/logo.gif';

const Logo = () => {
    return (
        <>
        <Image alt={'HackerNews'} src={LogoImg} />
        <Text label={'Hacker News'} />
        </>
    );
}

export default Logo;
