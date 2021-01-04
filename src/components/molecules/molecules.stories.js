import { storiesOf } from "@storybook/react";

import Logo from './Logo';
import NewsCard from "./NewsCard";

storiesOf('Molecules', module)
    .add("Header logo", () => <Logo />)
    .add("News card", () => <NewsCard />)