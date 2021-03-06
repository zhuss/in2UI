export function getMaxZindex(){
    let zIndex = 2000;
    let array = [...document.all];
    for(let i = 0; i < array.length; i++){
        let index = window.getComputedStyle(array[i], null).zIndex;
        if(index!='auto'&& index > zIndex){
            zIndex =  zIndex + parseInt(index);
        }
    }
    return zIndex;
}

export default {
    getMaxZindex
}