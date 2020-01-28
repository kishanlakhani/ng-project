import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(productList: any,field:string,searchStr:string): any {
    
    if(searchStr === ''){
      return productList;
    }
    let p = [];



    if(field === 'id'){
      p = productList.filter(product=>{
        return (String(product[field])).search(searchStr) != -1 ? true:false;
      })
    }else if(field === 'title'){
      p = productList.filter(product=>{
        return (String(product[field])).toLowerCase().includes(searchStr.toLowerCase()) 
      })
    }else if(field === 'idTitle'){
      p = productList.filter(product=>{
        if((String(product['id'])).search(searchStr) != -1 ||(String(product['title'])).toLowerCase().search(searchStr.toLowerCase()) != -1 ){
          return true;
        }
      })
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
