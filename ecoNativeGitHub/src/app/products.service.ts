import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { products } from './models/products';
import { Tag } from './models/Tag'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // getAllProductsBySearchTerm(searchTerm:string){
  //   this.getAll().filter(products => products.name.toLowerCase().includes(searchTerm.toLowerCase()))
  // }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 9 },
      { name: 'Clothing', count: 3 },
      { name: 'Homeware', count: 2 },
      { name: 'Skincare', count: 3 },
      { name: 'Makeup', count: 1 }
    ];
  }
  //   getAllProductsByTag(tag: string):products[]{
  // return tag=='All'?
  // this.getAll():
  // this.getAll().filter(products => products?.tags?.includes(tag))
  //   }



  //   getProductsById(_id: number): products {
  //     return this.getAll().find((products: { id: number; }) => products.id == _id)!

  //   }


  //   getAll(): products[] {
  //     return [
  //       {
  //         "id": 1,
  //         "name": "Handmade Knit Sweater",
  //         "tags": ["Clothing"],
  //         "description": "The Weekend Snuggle Sweater is the ultimate lounge sweater! Cozy, slouchy and comfy to wear, this easy crochet pullover is perfect for lazy weekends and long enough to wear over leggings. It’s perfect for snuggling on the couch or you can pair it with jeans and ankle boots for an easy weekend look. This sweater is crocheted in 4 panels – front, back and 2 sleeves and only uses 2 different stitches throughout the entire pattern – single crochet and single crochet two together!",
  //         "price": 40,
  //         "image": "./assets/image (13).png"

  //       },
  //       {
  //         "id": 2,
  //         "name": "Recycled coconut bowls",
  //         "tags": ["Homeware"],
  //         "description": "Our boho style coconut bowls originate from the Bên Tre region in Southern Vietnam. For many years, the local farmers have made a modest income from selling coconut by-products such as coconut oils and coconut milks. Once harvested for their prize possessions, the discarded coco shells were subsequently burned to make way for the new crops.By using Jungle Culture coconut bowls, you are helping to provide the local farmers with a secondary income, as well as preventing more coconuts and trees being needlessly burned as waste.",
  //         "price": 60,
  //         "image": "./assets/image (14).png"

  //       },
  //       {
  //         "id": 3,
  //         "name": "Daily Crew T shirt",
  //         "tags": ["Clothing"],
  //         "description": "100% organic cotton. T-shirt is produced exclusively from organic Indian cotton. The entire production process is controlled and certified in accordance with the latest version of G.O.T.S. The region in India where manufacturing takes place receives up to 95% of its water from the monsoon rainfall. This reduces the need for large scale irrigation normally associated with cotton farming. Clothes are made in manufacturing facilities powered by green renewable energy, (wind and solar power) from low-impact raw materials. The carbon footprint of products has been reduced by some 90% and the calculations certified under the PAS2050 standard. All our clothes and other stuff are packaged in 100% compostable packaging, we care about our planet in all ways!",
  //         "price": 50,
  //         "image": "./assets/image (15).png"

  //       },
  //       {
  //         "id": 4,
  //         "name": "Natural mineral Makeup",
  //         "tags": ["Makeup"],
  //         "description": "Our velvety soft, matte loose mineral eyeshadows provide a super long-lasting and crease-free finish which can be applied both wet and dry. Use as eye shadow, eye liner or eyebrow powder. 1g of mineral pigment powder in a small, sifter screw-lid jar. Made from 100% natural ingredients: containing no harsh, synthetic chemicals, parabens, or additives. Highest, purest quality minerals which offer long-lasting wear and high durability. Free from: bismuth oxychloride, talc, oils, starch, synthetic harsh chemicals, parabens, artificial colors, additives, carmine, nano-particles, fragrance and preservatives.",
  //         "price": 70,
  //         "image": "./assets/image (16).png"

  //       },
  //       {
  //         "id": 9,
  //         "name": "Handmade Ceramic Mugs",
  //         "tags": ["Homeware"],
  //         "description": "Set of 2 White Ceramic Mugs, Pottery Handmade Coffee Mugs Set with Handle, Huggable Straight Large Tea Mugs, Rustic Modern Look Mugs. A set of 2 white coffee mugs with an ear-shaped handle. The mugs are made of speckled clay on the potters' wheel, then glazed inside and outside in the upper part to create that half and half look (bottom is natural clay unglazed). The Mugs come with unique black tree decals, every mug has a different tree print - and the trees may be different than what shown in the photos (unless you let me know which you want). A great set to treat yourself for your morning coffee, or as a gift for friends or family.",
  //         "price": 50,
  //         "image": "./assets/image (17).png"

  //       },

  //       {
  //         "id": 5,
  //         "name": "Vegan Cleanser",
  //         "tags": ["Skincare"],
  //         "description": "This gentle Clearing Cleanser is oil-based, designed to clear the complexion for combination/dry skin. *Comes in a reusable a clear glass jar. The 15ml is our small sample size that is an online exclusive. Directions: Massage sparingly into your face, lifting up dirt and working the oils into your skin. Use a warm, wet cloth in circular motions to remove the cleanser. Remedy for: Uneven skin tone, dehydrated oily skin, breakouts, and dull complexion.Ingredients: Flaxseed Oil, Grapeseed Oil, Candelilla wax, Citrus Limon, Pelargonium Roseum, Tea Tree. (60ml reusable glass jar) 100% natural.",
  //         "price": 40,
  //         "image": "./assets/image (18).png"

  //       },


  //       {
  //         "id": 6,
  //         "name": "Handmade Soaps",
  //         "tags": ["Skincare"],
  //         "description": "The skin-softening features of olive oil have been used by people since ancient times. Olive oil is a natural source of Vitamin E with strong anti-inflammatory properties. The best thing about an olive oil soap is that it cleans your skin without washing out the natural oils. Perfect for bath, shower or sink, it also smells nicer than you might think!",
  //         "price": 50,
  //         "image": "./assets/image (19).png"

  //       },
  //       {
  //         "id": 8,
  //         "name": "Crochet Hat",
  //         "tags": ["Clothing"],
  //         "description": "Original open crochet design, highly breathable yet structured. 100% recycled cotton, a guilt-free sustainable statement accessory. Available in either white (beige) or taupe (brown), versatile shades for any wardrobe. Handwash-able cold. Internal fit band for secure wear and sturdy construction. Approximate circumference 56cm - 58cm, would also accommodate a few centimeters either way!",
  //         "price": 50,
  //         "image": "./assets/image (20).png"

  //       },
  //       {
  //         "id": 7,
  //         "name": "Natural Lipbalms",
  //         "tags": ["Skincare"],
  //         "description": "Moisturizing and softening dry, chapped lips with this nourishing lip butter. Blended with 100% pure essential oils and premium butters, this lip butter provides all the benefits for deep-hydrating your lips with essential moisture. 100% natural. No artificial colorants and preservatives added just the natural color from botanical herbs or oils, plus the beauties from pure essential oils. We also added botanical stevia leaf extract to give a lovely touch of sweetness, make your soft lips kiss-friendly.",
  //         "price": 50,
  //         "image": "./assets/image (21).png"

  //       },


  //     ]

  //   };
  url: string = "http://localhost:3000/api/products";
  url2: string = "http://localhost:3000/api/add-to-cart";
  url3: string = "http://localhost:3000/api/get-cart";
  url4: string = "http://localhost:3000/api/delete-product";
  url5: string = "http://localhost:3000/api/add-details";
  url6: string = "http://localhost:3000/api/get-details";
  url7: string = "http://localhost:3000/api/delete-details";
  url8: string = "http://localhost:3000/api/update-details";
  url9: string = "http://localhost:3000/api/add-fav";
  url10: string = "http://localhost:3000/api/get-fav";
  url11: string = "http://localhost:3000/api/delete-fav";
  url12: string = "http://localhost:3000/api/all-orders";
  getAllProducts() {
    return this.http.get<any[]>(this.url);
  }


  constructor(private http: HttpClient) { }

  getOneProduct(_id: string) {
    return this.http.get<any[]>(this.url + "/" + _id);
  }
  storeProductInStorage(_id: string, name: string, description: string, image: string, tags: string, price: number) {
    localStorage.setItem("product_id", _id);
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("image", image);
    // localStorage.setItem("price", price.toString());
    localStorage.setItem("tags", tags);
    localStorage.setItem("price", price.toString());

  }
  GetProductFromStorage() {
    var returnObj: any;
    returnObj.product_id = localStorage.getItem("product_id");
    returnObj.name = localStorage.getItem("name");
    returnObj.description = localStorage.getItem("description");
    returnObj.image = localStorage.getItem("image");
    returnObj.tags = localStorage.getItem("tags");

    return returnObj;
  }

  buyProduct(name: string, description: string, price: number, user: string) {
    // console.log('bla bla');
    return this.http.post(this.url2, { 'name': name, 'description': description, 'price': price, 'user': user }).subscribe();

  }

  getOrder() {
    console.log(this.url3);
    return this.http.get<any[]>(this.url3 + '/' + sessionStorage.getItem('name'));
  }
  //perform HTTP delete request to /api/posts
  deleteOrder(_id: string) {
    console.log(this.url4 + "/" + _id);
    return this.http.delete<any[]>(this.url4 + "/" + _id).subscribe();
  }
  addOrderDetails(user: string, address: string, email: string, comments: string) {
    return this.http.post<any[]>(this.url5, { user: user, address: address, email: email, comments: comments });
  }
  getOrderDetails() {
    console.log(this.url6);
    return this.http.get<any[]>(this.url6 + '/' + sessionStorage.getItem('name'));
  }
  //perform HTTP delete request to /api/posts
  deleteOrderDetails(_id: string) {
    return this.http.delete<any[]>(this.url7 + "/" + _id);
  }
  updateOrderDetails(_id: string, user: string, address: string, email: string, comments: string) {
    return this.http.put<any[]>(this.url8 + "/" + _id, { 'user': user, 'address': address, 'email': email, 'comments': comments });
  }
  addToFav(productId:string, name: string,image:string, description: string, price: number, user: string) {
    // console.log('bla bla');
    return this.http.post(this.url9, { 'productId':productId,'name': name, 'image':image, 'description': description, 'price': price, 'user': user }).subscribe();
  
  }
  getFav() {
    console.log(this.url10);
    return this.http.get<any[]>(this.url10 + '/' + sessionStorage.getItem('name'));
  }
  deleteFav(_id: string) {
    return this.http.delete<any[]>(this.url11 + "/" + _id);
  }
  getAllOrders() {
    return this.http.get<any[]>(this.url12);
  }
 
  
  

}
