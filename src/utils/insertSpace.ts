export function insertSpace(str: string | number): string {
  
  if (typeof str ===  "number"){
      const val = str.toString()
      if(val.length < 4 ) return val
      const index = val.length - 3;
      return val.slice(0, index) + " " + val.slice(index);
  }else{
 if (str.length < 4) return str
  const index = str.length - 3;
  return str.slice(0, index) + " " + str.slice(index);
  }
 
}