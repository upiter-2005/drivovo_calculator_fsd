import { useRouter } from 'next/navigation';

// interface IuseUrl {
//   storeBrands: string[] | null,
//   storeTypes: string[] | null, 
//   storePatrol: string[] | null, 
//   storeDiscount: string[] | null,
//   storeAvail: string[] | null
// }
export const useUrl = () => {

  //const searchParams = useSearchParams();
  const router = useRouter();

  const pushUrl = (storeBrands: string[], storeTypes: string[], storePatrol: string[], storeDiscount: string[], storeAvail:string[]):void => {
    const brandParams    = `brand=${storeBrands.join()}`;
    const typeParams     = `type=${storeTypes.join()}`;
    const patrolParams   = `patrol=${storePatrol.join()}`;
    const discountParams = `discount=${storeDiscount.join()}`;
    const availParams    = `avail=${storeAvail.join()}`;
    //const params = new URLSearchParams(searchParams.toString());
   // const arrParam = [brandParams, typeParams, patrolParams, discountParams, availParams]

    // for(let item of arrParam){

    // }
   
    const url = `/catalog?${(storeBrands.length) ? `${brandParams}` : ''}${(storeTypes.length) ? `&${typeParams}` : ''}${(storePatrol.length) ? `&${patrolParams}` : ''}${(storeDiscount.length) ? `&${discountParams}`: ''}${(storeAvail.length) ? `&${availParams}` : ''}`
    router.push(url)
  }

  return {
    pushUrl
  }
}