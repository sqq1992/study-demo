import {isString} from 'lodash';

class Element {
    constructor(obj) {
        this.tag = obj.tag;
        this.props = obj.props;
        this.children = obj.children || [];

        if(obj.key){
            this.key = obj.key;
        }

    }

    render(){
        return this._createElement(this.tag, this.props, this.children);
    }

    _createElement(tag,props={},children=[]) {
        let element = document.createElement(tag);

        for(let i in props) {
            if(Object.prototype.hasOwnProperty.call(props,i)){
                element.setAttribute(i, props[i]);
            }
        }

        if(children && children.length){
            children.forEach((elem)=>{
                let templateElement;

                if(isString(elem)){
                    templateElement = document.createTextNode(elem);
                }else {
                    templateElement = (elem instanceof Element) ? elem.render() : new Element(elem).render();
                }
                element.appendChild(templateElement);
            })
        }

        return element;
    }

}

export {
    Element
}