import { CollectionProvider } from './collection';
import { LayoutProvider } from './layout';

export function MainProvider({ children }) {
  return (
    <CollectionProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </CollectionProvider>
  );
}
