function Cylinder(diameter,heigth){
    this.diameter = diameter;
    this.heigth = heigth;
    this.volume = ()=> {
        return heigth * Math.PI * Math.pow(diameter,2) / 4;
    }
    this.redCircle = ()=> {
        var obj = document.getElementById('container1');
        var tmp, 
          radius = diameter/2;
        for (var i = 0; i <= 2 * radius; i++) {
          var height = Math.abs(radius - i);
          var chord = 2 * Math.sqrt(radius * radius - height * height);
          tmp = document.createElement('div');
          tmp.style.height = '1px';
          tmp.style.width = chord + 'px';
          obj.appendChild(tmp);
        }
    }
}
let t = new Cylinder(500,30);
t.redCircle();
console.log(t.volume());