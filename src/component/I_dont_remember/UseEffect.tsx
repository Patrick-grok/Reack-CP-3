import {useEffect, useState} from 'react';
// function Logger() {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         console.log('Компонент отрендерился, count =', count);
//     });  // без массива зависимостей — выполняется после КАЖДОГО рендера
//
//     return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }
// export default Logger


const Effect = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
         const timeout = setTimeout(() => {
             setLoading(false);
         }, 2000);

         return () => clearTimeout(timeout);  // функция в нужном месте
     }, []);

     if (loading) {
         return <div className="effect">Loading...</div>;
     }

     return <div className="effect">Content Loaded!</div>;
 }

export default Effect;