class Circle{
  constructor(radius){
      this.radius = radius;
  }
  getDiameter(){
      const diameter = this.radius*2;
      return diameter

  }
  getCircumference(){
      const circumference = 2* Math.PI *this.radius;
      return circumference
  }
  getArea(){
      const area = Math.PI * this.radius * this.radius;
      return area
  }

}

const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference(); // 62.83
circle.getArea(); // 314.15