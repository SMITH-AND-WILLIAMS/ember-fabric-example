import Component from '@ember/component';
import fabric from 'fabric';
import { computed } from '@ember/object';
export default Component.extend({
    canvas:computed(()=>{
        return new fabric.Canvas('canvasId',{
            width:800,
            height:600,
            backgroundColor: 'rgb(100,100,200)'})
    }),
    textValue:'hello',
    async init(){
        this._super(...arguments)
        let data = await $.getJSON('/assets/datas/canvas_base.json')
       await  this.canvas.loadFromJSON(data)
        console.log('initial render finished')
    },
    actions:{
        showJSON(){
            console.log(JSON.stringify(this.canvas.toJSON()))
        },
        addRectangle(){
            let rect = new fabric.Rect({
                width:Math.random()*120,
                height: Math.random()*120,
                left:Math.random()*100,
                top:Math.random()*100,
                fill:`#${Math.floor(Math.random()*16777215).toString(16)}`
            })
            this.canvas.add(rect)
        },
        addText(){
            
            let text = new fabric.Text(this.textValue,{
                left:Math.random()*100,
                top:Math.random()*100
            })
            this.canvas.add(text)
        }
    }
});
