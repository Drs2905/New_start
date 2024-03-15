const student={
    name:"John Doe",
    age:20,
    eng:95,
    math:87,
    physc:67,
    getAvg(){
        let avg=(this.eng+this.math+ this.physc)/3;
        console.log(avg);
    }
}