// export default async function GetData() {
//   const res = await fetch('http://localhost:3000/data.json', {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
import data from '../../public/data.json';

export default async function GetData() {
  return data;
}