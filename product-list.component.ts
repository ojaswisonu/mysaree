import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = [ {
    image:'assets/paithani.webp',
    id:1,
    name:'Paithani',
    price:25000,
    description:'Paithani is an art woven on a saree.',
    delivery:'Free Delivery',
    rating:4.4,
  },
  {
    image:'assets/bana.webp',
    id:2,
    name:'Banarasi Saree',
    price:10000,
    description:'This is very famous banarasi silk saree ',
    delivery:'Free Delivery',
    rating:4.0,
  },
  {
    image:'assets/kalam1.jpg',
    id:3,
    name:'Kalamkari',
    price:15000,
    description:'Kalamkari is a type of hand-painted cotton textile produced in the Deccan region of India.',
    delivery:'Free Delivery',
    rating:4.9,
  },
  {
    image:'assets/patola.jpg',
    id:4,
    name:'Patola silk saree',
    price:7000,
    description:'Patola Saree is a double ikat sari made from silk in Patan of Gujarat.',
    delivery:'Free Delivery',
    rating:4.0,
  },
  {
    image:'assets/bandhani.jpg',
    id:5,
    name:'Bandhani saree',
    price:1500,
    description:'Bandhani saree is a tie-dye fabric embellished by plucking the fabric with the fingertips into a figurative design.',
    delivery:'Free Delivery',
    rating:3.8,
  },
  {
    image:'assets/bom.jpg',
    id:6,
    name:'Bomkai sari',
    price:1200,
    description:'The Bomkai saree displays distinctive weaving patterns and threadwork along with traditional motifs.',
    delivery:'Free Delivery',
    rating:4.1,
  },
  {
    image:'assets/chiffon.jpg',
    id:7,
    name:'Chiffon',
    price:5000,
    description:'Chiffon is a lightweight plain-woven fabric with mesh-like weave that gives it a transparent appearance.',
    delivery:'Free Delivery',
    rating:4.8,
  },
  {
    image:'assets/chanderi.webp',
    id:8,
    name:'Chanderi',
    price:1000,
    description:'The Chanderi saree is a mix of simplicity and style with its lightweight fabric and pretty borders',
    delivery:'Free Delivery',
    rating:4.2,
  },
  {
    image:'assets/mysore.jpg',
    id:9,
    name:'Mysore silk',
    price:12000,
    description:'The soft counterpart of the traditional silk',
    delivery:'Free Delivery',
    rating:5,
  },
  {
    image:'assets/pocha1.webp',
    id:10,
    name:'Pochampally saree',
    price:5000,
    description:'Pochampalli ikat is a saree made in Bhoodan Pochampally',
    delivery:'Free Delivery',
    rating:4.5,
  },
  {
    image:'assets/kanchi.webp',
    id:11,
    name:'Kanchipuram silk sari',
    price:18000,
    description:'weaved from pure mulberry silk thread, made by the weavers of kancheepuram.',
    delivery:'Free Delivery',
    rating:3.5,
  },
  {
    image:'assets/kerala.jpg',
    id:12,
    name:'Kerala sari',
    price:25000,
    description:'Traditional Kerala sarees are handwoven and have an ivory colour.',
    delivery:'Free Delivery',
    rating:4.5,

  },
]
//constructor(private pro_ser : ProductListComponent){}
addtocart(event:any,product:any){
  console.log(event,product);
  console.log("item added");
 // this.pro_ser.increment();
}
  increment() {
    throw new Error('Method not implemented.');
  }

filtered=this.products;

private _filter='';
get filter():string{
  return this._filter;
}
set filter(fb:string){
  this._filter=fb;
  this.filterproducts(this._filter);
}

showimage = true;
filterproducts(searchvalue:string){
  this.filtered=this.products.filter(product =>{
    return product.name.toLowerCase().includes(searchvalue);
  })
}
onRatingClicked(rating:number):void{
  alert(`you clicked ${rating}`);
}

}
