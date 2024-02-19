import { Flex, type IFlexProps } from 'shared/ui/Stack/Flex/Flex';

type THStackProps = Omit<IFlexProps, 'direction'>

export const HStack = (props: THStackProps) => {
  return (
    <Flex { ...props } direction="row" />
  );
};
