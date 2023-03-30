import { Button, useToast } from '@chakra-ui/react';
import { ISubmitButtonProps } from '../interfaces';
import React from 'react';


function SubmitButton(props: ISubmitButtonProps) {
  const toast = useToast();
  return (
    <Button
      isDisabled={props.isDisabled}
      colorScheme={'green'}
      onClick={() =>
        toast({
          title: props.title,
          description: props.description,
          status: props.type,
          duration: 3000,
          isClosable: false,
          position: 'top'
        }) &&
        setTimeout(() => {
          window.location.reload();
        }, 3000)
      }
    >
      Enviar
    </Button>
  )
}

export default SubmitButton;