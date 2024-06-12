import { makeAutoObservable } from 'mobx';

class FiltersStore {
  protected isGenderMen: boolean;

  constructor() {
    makeAutoObservable(this);
    this.isGenderMen = true;
  }

  toggleGender = () => {
    this.isGenderMen = !this.isGenderMen;
  };

  getIsGenderMen = () => this.isGenderMen;
}

export default new FiltersStore();
