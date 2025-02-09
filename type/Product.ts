

export interface Product {
    _id : string;
    title : string;
    _type : "Product";
    image :{
        asset : {
            _ref : string
            _type : "image";
        }
    };
    price : number;
    description : string;
}