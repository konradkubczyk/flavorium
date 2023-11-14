import names  from "../../stores";


export function submitData(){
    
    let name=getElementById("name").value;
    let currentValue: string[];
    $:currentValue=     names;
    names.set([...currentValue,name]);
    alert(name);
    




}



function getElementById(elementName:string):HTMLInputElement{
    return document.getElementById(elementName) as HTMLInputElement;

}