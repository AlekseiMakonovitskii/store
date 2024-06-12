import {
  Container,
  Heading,
  ButtonGroup,
  Button,
  Flex,
  Spacer,
} from '../../UI';
import { observer } from 'mobx-react';

interface HeaderProps {
  isGenderMen: boolean;
  toggleGender: () => void;
}

function Header(props: HeaderProps) {
  const { isGenderMen, toggleGender } = props;
  
  return (
    <header>
      <Container maxW="1200px" paddingY={2}>
        <Flex direction="row" align="center" gap={2}>
          <Heading>{isGenderMen ? '👕' : '👚'}</Heading>
          <Heading>Store</Heading>
          <Spacer />
          <ButtonGroup>
            <Button
              isActive={isGenderMen}
              colorScheme="blue"
              onClick={!isGenderMen ? toggleGender : undefined}
              w={100}
            >
              Men
            </Button>
            <Button
              colorScheme="blue"
              isActive={!isGenderMen}
              onClick={isGenderMen ? toggleGender : undefined}
              w={100}
            >
              Women
            </Button>
          </ButtonGroup>
          <Spacer />
          <Button colorScheme="blue">Sign in</Button>
        </Flex>
      </Container>
    </header>
  );
}

export default observer(Header);
