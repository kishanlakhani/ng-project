import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(productList: any,field:string[],searchStr:string): any {

    if(searchStr === ''){
      return productList;
    }
    let p = [];
   


    if(field.length  == 2 ){
      if(field[0]=='id'){
        p = productList.filter(product=>{
          return (String(product[field[0]])).includes(searchStr)  ? true:(String(product[field[1]])).toLowerCase().includes(searchStr.toLowerCase()) ? true : false;
        })
      }else{
        p = productList.filter(product=>{
          return (String(product[field[1]])).includes(searchStr)  ? true:(String(product[field[0]])).toLowerCase().includes(searchStr.toLowerCase()) ? true : false;
        })
      }
 
    }else if(field[0] === 'title'){
      p = productList.filter(product=>{
        return (String(product[field[0]])).toLowerCase().includes(searchStr.toLowerCase()); 
      })
    }else {
      
      p = productList.filter(product=>{
        return (String(product[field[0]])).search(searchStr) != -1 ? true:false;
      });
      }
     
    
    return p;



    // productList = productList.filter(product => {
    //   console.log(product[field].toLowerCase().includes(searchStr))
    //   if(product['title'].toLowerCase().search(searchStr) != -1){
    //     p.push(product)
    //   }
    //   if((String(product['id'])).search(searchStr) != -1){
    //     p.push(product)
    //   }  
    //   return product['title'].toLowerCase().search(searchStr) != -1 ? true:false
    // })

    
  }

}
