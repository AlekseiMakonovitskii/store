import {
  Container,
  Heading,
  ButtonGroup,
  Button,
  Flex,
  Spacer,
} from '../../UI';
import { observer } from 'mobx-react';
import Modal from '../Modal';
import { useState } from 'react';

interface HeaderProps {
  isGenderMen: boolean;
  toggleGender: () => void;
}

function Header(props: HeaderProps) {
  const { isGenderMen, toggleGender } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <>
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
            <Button colorScheme="blue" onClick={handleToggleModal}>Sign in</Button>
          </Flex>
        </Container>
      </header>

      <Modal isOpen={isModalOpen} onClose={handleToggleModal} closeButton centered />
    </>
  );
}

export default observer(Header);
