import { storiesOf } from "@storybook/react";

import Image from './Image';
import Text from './Text';
import Link from './Link';

import logo from '../../assets/images/logo.gif';

storiesOf("Atoms", module)
    .add("Image", () => (<Image src={logo} />))
    .add("Text", () => <Text label={'Hi there!'} />)
    .add("Link", () => <Link label={'google'} pathLink={'google.com'} />)