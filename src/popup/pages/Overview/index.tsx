import { clsx } from 'clsx';
import { Text, Heading } from 'react-aria-components';

export function Overview(): JSX.Element {
  return (
    <div
      className={clsx(
        'overview',
        'p-5 gap-5 flex flex-col items-center justify-center',
      )}
    >
      <Heading className='text-3xl' level={1}>
        Welcome to the extension Popup!
      </Heading>
      <Text className='text-lg'>Try to edit code to see the changes.</Text>
    </div>
  );
}
