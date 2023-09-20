const saved =  document.getElementById('saved')
const exportSaved =  document.getElementById('export')


export default class SavedCollection{
    constructor(){
        this.collection = []
    }

    update(collection){
        this.collection = collection
    }

    populate(){
        saved.innerHTML= ""
        this.collection.forEach((collObj)=>{
            const sItems = document.createElement('div')
            sItems.classList.add("save-items")
            
            for(const key in collObj){
                const sItem = document.createElement('p')
                sItem.classList.add("save-item")
                sItem.textContent = `${collObj[key]}`
                sItems.appendChild(sItem)
            }
            saved.appendChild(sItems)
        })
    }

    export(){

          const jsonString = JSON.stringify(this.collection);
          
          const blob = new Blob([jsonString], { type: 'text/plain' });
          
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = 'myObject.txt';

          downloadLink.click();
    }

}