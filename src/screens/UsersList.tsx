import { useState } from 'react';
import  * as C from '../App.styles';
import { Item } from '../types/item';
import { ListItem } from '../components/ListItem';

const UsersList = () => {

    const [list, setList] = useState<Item[]>([
        { id: 1, name: 'Demetrius Ferreira', approved: false },
        { id: 2, name: 'Thaíssa Ferreira', approved: false },
         ]); 
       
         return (
           <C.Container>
             <C.Area>
               <C.Header>
                 LISTA DE USUÁRIOS
               </C.Header>
        
               {/* área de cadastrar alunos  no bootcamp */}
       
               {list.map((item, index) => (
                   <ListItem key={index} item={item}/>
                 
                  
               ))}
       
                {/* área de alunos cadastrados no bootcamp */}
       
             </C.Area>
           </C.Container>
         );
}

export default UsersList;