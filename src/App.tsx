import { useMemo } from 'react';
import Header from './components/Header';
import filtersStore from './stores/filtersStore';
import { observer } from 'mobx-react';

function App() {
  const { getIsGenderMen, toggleGender } = useMemo(() => filtersStore, []);

  return (
    <>
      <Header isGenderMen={getIsGenderMen()} toggleGender={toggleGender} />
    </>
  );
}

export default observer(App);
