class daughter {
  constructor (
    name,
    age,
    sex,
    height,
    mum,
    dad,
    address,
    lidOpen
  ) {
    this.name = "Oghenevovwero";
    this.age = 6;
    this.sex = "female";
    this.height = 72;
    this.parent = {
      ejiroelum: dad,
      ijeomaelum: mum,
    };
    this.lidOpen = lidOpen;
    this.address = "Julius weber Str 12 47053 Duisburg";
  }
toggleLid (lidStatus) {
  this.lidOpen = lidStatus;
}
}
export default daughter;