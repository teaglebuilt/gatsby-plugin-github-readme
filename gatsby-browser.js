import React from 'react';
import Container from "./src/components/container";

export const wrapRootElement = ({ element }) => {
    return <Container>{element}</Container>
}