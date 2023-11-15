import names  from "../../stores.ts";
let iter=1;
console.log("TEST")


export function submitData(){
    
    
    let name=getElementById("name").value;
    const addnName={text:name,id:iter};
    
    
    names.update(arr=>[...arr,addnName]);
    iter++;

    alert(name);
   // console.log(names.text);




}



function getElementById(elementName:string):HTMLInputElement{
    return document.getElementById(elementName) as HTMLInputElement;

}