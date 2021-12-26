class Apple {
weight;
    constructor(weight) {
        this.weight=weight
    }
    getWeight(){
        return this.weight;
    }
    setWeight(value){
        this.weight=value;
    }
    getDecrease(){
        if (this.weight >0 ){
            return this.weight--;
        }else {
            return this.weight =0
        }
    }
}
class Human{
    _name;
    _gender;
    _weight;
    constructor(name,gender,weight) {
        this._name=name;
        this._gender=gender;
        this._weight=weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    getWeight1() {
        return this._weight;
    }

    setWeight1(value) {
        this._weight = value;
    }
    setApple(apple){
        this.apple=apple;
    }
    getCheckApple(){
        return this.apple.getWeight();
    }
    getEat(){
        if (this.status){
            this._weight++;
            document.write(this._name + "<br>");
        }
    }
    getEated(){
        this.status = true;
        return this.apple.getDecrease();
    }

}